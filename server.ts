import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { unifiedStore, PublicRequestRecord } from './server/unifiedStore';

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProd = process.env.NODE_ENV === 'production';

// ============================================================================
// 1. CORS & SECURITY CONFIGURATION
// ============================================================================

const allowedOriginsEnv = process.env.ALLOWED_ORIGINS;
const defaultAllowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
  'https://www.noemitomassetti.it',
  'https://noemitomassetti.it',
];

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    let parsed: URL;
    try { parsed = new URL(origin); } catch { return callback(new Error('Origine non valida.')); }
    const configured = allowedOriginsEnv?.split(',').map(value => value.trim()).filter(Boolean);
    const localDevOrigin = parsed.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(parsed.hostname)
      && (parsed.port === '3000' || parsed.port === '5173');
    const officialOrigin = defaultAllowedOrigins.includes(origin);
    const allowed = configured ? configured.includes(origin) : (localDevOrigin || officialOrigin);
    // Preview hosts must be added explicitly to ALLOWED_ORIGINS; suffix matches are unsafe.
    return allowed ? callback(null, true) : callback(new Error('Origine non consentita.'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Idempotency-Key', 'Accept'],
};

app.use(cors(corsOptions));
app.use(express.json({ limit: '1mb' }));

// Request logging for API routes
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) {
    const start = Date.now();
    res.on('finish', () => {
      const duration = Date.now() - start;
      console.log(`[API] ${req.method} ${req.path} -> ${res.statusCode} (${duration}ms)`);
    });
  }
  next();
});

// ============================================================================
// 2. AUTHENTICATION MIDDLEWARE
// ============================================================================

interface AuthenticatedRequest extends Request {
  user?: {
    uid: string;
    email: string;
    role: string;
  };
}

/**
 * SECURITY GATE: Do not trust unverified JWT payloads or mock tokens.
 * This public-site project has NO configured server-side Firebase token verifier.
 * All private API endpoints remain unavailable until moved to the separate NoeTom
 * backend with Firebase Admin verifyIdToken + owner allowlist + persistent storage.
 */
function requireAuth(_req: AuthenticatedRequest, res: Response, _next: NextFunction): void {
  res.status(503).json({
    success: false,
    code: 'PRIVATE_BACKEND_NOT_CONFIGURED',
    error: 'Area privata non disponibile in questo progetto pubblico.',
  });
}

// ============================================================================
// 3. API ENDPOINTS (/api/...)
// ============================================================================

// Health check
app.get('/api/health', (req, res) => {
  const storageStatus = unifiedStore.getStorageStatus();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    status: 'public_site_preview_only',
    engine: 'NoemiTomassetti.it Public Site',
    privateBackendReady: false,
    version: '2.0.1',
    timestamp: new Date().toISOString(),
    environment: isProd ? 'production' : 'development',
    storage: storageStatus,
  });
});

// Current user profile
app.get('/api/auth/me', requireAuth, (req: AuthenticatedRequest, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    user: req.user,
    storageStatus: unifiedStore.getStorageStatus(),
  });
});

// Full operational data
app.get('/api/data/all', requireAuth, (req: AuthenticatedRequest, res) => {
  const uid = req.user?.uid || 'owner_noemi';
  const email = req.user?.email || 'noemitom@gmail.com';
  const data = unifiedStore.getUserData(uid, email);
  const storageInfo = unifiedStore.getStorageStatus();

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    ...data,
    _storageInfo: storageInfo,
  });
});

// Save full operational data
app.post('/api/data/all', requireAuth, (req: AuthenticatedRequest, res) => {
  const incomingData = req.body;
  if (!incomingData || typeof incomingData !== 'object') {
    return res.status(400).json({ error: 'Payload non valido: atteso oggetto dati.' });
  }

  incomingData.uid = req.user?.uid || incomingData.uid || 'owner_noemi';
  incomingData.email = req.user?.email || incomingData.email || 'noemitom@gmail.com';

  unifiedStore.saveUserData(incomingData);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    success: true,
    message: 'Dati operativi salvati con successo.',
    updatedAt: incomingData.updatedAt,
  });
});

// Canonical Public Intake Endpoint (v1)
// Accepts both site formats (fullName+email+brief OR clientName+clientEmail+description)
app.post('/api/v1/public/requests', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // Local JSON storage is not durable, authenticated production storage.
  if (isProd) {
    return res.status(503).json({success: false, code: 'PRODUCTION_STORAGE_NOT_READY'});
  }

  if (!req.body || typeof req.body !== 'object' || Array.isArray(req.body)) {
    return res.status(400).json({success: false, code: 'INVALID_REQUEST_BODY'});
  }
  const {
    fullName,
    clientName,
    email,
    clientEmail,
    brief,
    description,
    serviceId,
    serviceType,
    locale = 'it',
    engagementType = 'hourly_ad_hoc',
    privacyGdprConsent,
    privacyConsent,
    newsletterConsent,
    phone,
    idempotencyKey: headerIdempotencyKey,
    honeypot,
    company_fax,
  } = req.body;

  // 1. Anti-bot honeypot check
  if ((honeypot && String(honeypot).trim().length > 0) || (company_fax && String(company_fax).trim().length > 0)) {
    return res.status(400).json({
      success: false,
      error: 'Richiesta respinta dai controlli di sicurezza automatizzati.',
      code: 'BOT_DETECTED',
    });
  }

  // 2. Normalization of field names
  const resolvedName = (fullName || clientName || '').trim();
  const resolvedEmail = (email || clientEmail || '').trim();
  const resolvedBrief = (brief || description || '').trim();
  const resolvedServiceId = (serviceId || serviceType || 'virtual-assistance').trim();
  const hasConsent = Boolean(privacyGdprConsent || privacyConsent);

  // 3. Validation
  if (!resolvedName || resolvedName.length < 2) {
    return res.status(400).json({
      success: false,
      error: 'Il nome è obbligatorio e deve contenere almeno 2 caratteri.',
      code: 'VALIDATION_ERROR',
      field: 'fullName',
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(resolvedEmail)) {
    return res.status(400).json({
      success: false,
      error: 'Indirizzo email non valido.',
      code: 'VALIDATION_ERROR',
      field: 'email',
    });
  }

  if (!resolvedBrief || resolvedBrief.length < 10) {
    return res.status(400).json({
      success: false,
      error: 'La descrizione della richiesta deve contenere almeno 10 caratteri.',
      code: 'VALIDATION_ERROR',
      field: 'brief',
    });
  }

  if (!hasConsent) {
    return res.status(400).json({
      success: false,
      error: 'È obbligatorio accettare l’informativa sulla privacy per inviare la richiesta.',
      code: 'PRIVACY_CONSENT_REQUIRED',
      field: 'privacyGdprConsent',
    });
  }

  const idempotencyKey =
    (req.headers['x-idempotency-key'] as string) ||
    headerIdempotencyKey ||
    `pub_${Date.now()}_${resolvedEmail.replace(/[^a-z0-9]/gi, '').slice(0, 8)}`;

  const requestId = `req_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
  const record: PublicRequestRecord = {
    requestId,
    idempotencyKey,
    clientName: resolvedName,
    clientEmail: resolvedEmail,
    phone: phone ? String(phone).trim() : undefined,
    serviceId: resolvedServiceId,
    locale: String(locale).toLowerCase(),
    engagementType: String(engagementType),
    description: resolvedBrief,
    privacyGdprConsent: true,
    newsletterConsent: Boolean(newsletterConsent),
    ipAddress: req.ip,
    receivedAt: new Date().toISOString(),
  };

  const { isDuplicate, record: committed } = unifiedStore.recordPublicRequest(record);

  if (isDuplicate) {
    return res.status(200).json({
      success: true,
      requestId: committed.requestId,
      status: 'received',
      deliveryStatus: 'persisted_in_noetom',
      isDuplicate: true,
      message: 'Richiesta già ricevuta e registrata in precedenza nel sistema NoeTom.',
      createdAt: committed.receivedAt,
    });
  }

  return res.status(201).json({
    success: true,
    requestId: committed.requestId,
    status: 'received',
    deliveryStatus: 'persisted_in_noetom',
    message: 'Richiesta preventivo acquisita e memorizzata nel sistema gestionale NoeTom.',
    createdAt: committed.receivedAt,
  });
});

// Human Approval Gate for Deliverables
app.post('/api/deliveries/:id/approve', requireAuth, (req: AuthenticatedRequest, res) => {
  const deliveryId = req.params.id;
  const uid = req.user?.uid || 'owner_noemi';
  const approver = req.user?.email || 'Noemi';

  try {
    unifiedStore.approveDeliverable(uid, deliveryId, approver);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
      success: true,
      deliveryId,
      status: 'approved',
      message: `Librabile ${deliveryId} approvato formalmente per la consegna da Noemi.`,
    });
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

// Execution of Delivery (enforces human approval gate)
app.post('/api/deliveries/:id/deliver', requireAuth, (req: AuthenticatedRequest, res) => {
  const deliveryId = req.params.id;
  const uid = req.user?.uid || 'owner_noemi';

  try {
    unifiedStore.deliverWork(uid, deliveryId);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
      success: true,
      deliveryId,
      status: 'delivered',
      message: `Lavoro ${deliveryId} contrassegnato come consegnato con successo al cliente.`,
    });
  } catch (err) {
    res.status(403).json({
      error: (err as Error).message,
      code: 'APPROVAL_REQUIRED',
    });
  }
});

// Log Hours on Package Retainer (e.g. 10-hour package)
app.post('/api/agreements/:id/log-time', requireAuth, (req: AuthenticatedRequest, res) => {
  const agreementId = req.params.id;
  const uid = req.user?.uid || 'owner_noemi';
  const { clientId, taskDescription, hours, date, isBillable = true } = req.body;

  if (!taskDescription || !hours || Number(hours) <= 0) {
    return res.status(400).json({ error: 'Descrizione attività e ore (> 0) obbligatorie.' });
  }

  try {
    const result = unifiedStore.logTimeEntry(uid, {
      agreementId,
      clientId: clientId || 'cli_default',
      taskDescription,
      hours: Number(hours),
      date: date || new Date().toISOString().slice(0, 10),
      isBillable: Boolean(isBillable),
    });

    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
      success: true,
      ...result,
      message: `Registrate ${hours} ore sul pacchetto. Saldo rimanente: ${result.remainingHours} ore.`,
    });
  } catch (err) {
    res.status(400).json({ error: (err as Error).message });
  }
});

// AI Translation QA EN->IT helper (Deterministic analysis with glossary and number checks)
app.post('/api/ai/qa-review', requireAuth, (req: AuthenticatedRequest, res) => {
  const { sourceText, targetText, glossary = {} } = req.body;

  if (!sourceText || !targetText) {
    return res.status(400).json({ error: 'Testo sorgente e testo tradotto obbligatori.' });
  }

  const issues: string[] = [];
  const glossaryMatches: Array<{ term: string; expected: string; found: boolean }> = [];

  // 1. Glossary check
  for (const [enTerm, itTerm] of Object.entries(glossary as Record<string, string>)) {
    if (sourceText.toLowerCase().includes(enTerm.toLowerCase())) {
      const found = targetText.toLowerCase().includes(itTerm.toLowerCase());
      glossaryMatches.push({ term: enTerm, expected: itTerm, found });
      if (!found) {
        issues.push(`Termine glossario mancante: "${enTerm}" doveva essere tradotto come "${itTerm}".`);
      }
    }
  }

  // 2. Numbers and currency check
  const sourceNumbers = sourceText.match(/\d+([.,]\d+)?/g) || [];
  const targetNumbers = targetText.match(/\d+([.,]\d+)?/g) || [];

  for (const num of sourceNumbers) {
    if (!targetNumbers.includes(num)) {
      issues.push(`Verifica numerica: il valore "${num}" presente nell'originale sembra mancare nella traduzione.`);
    }
  }

  // 3. Length / omission anomaly check
  const sourceWordCount = sourceText.trim().split(/\s+/).length;
  const targetWordCount = targetText.trim().split(/\s+/).length;
  const ratio = targetWordCount / (sourceWordCount || 1);

  if (ratio < 0.65 && sourceWordCount > 15) {
    issues.push(`Possibile omissione: il testo tradotto è significativamente più corto (${targetWordCount} parole vs ${sourceWordCount} parole).`);
  }

  const isApproved = issues.length === 0;

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    success: true,
    isApproved,
    issuesCount: issues.length,
    issues,
    glossaryMatches,
    sourceWordCount,
    targetWordCount,
    modelUsed: 'deterministic_qa_engine_v2',
    timestamp: new Date().toISOString(),
  });
});

// Backup export
app.get('/api/backup/export', requireAuth, (req: AuthenticatedRequest, res) => {
  const uid = req.user?.uid || 'owner_noemi';
  try {
    const backupFileName = unifiedStore.backupUserData(uid);
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json({
      success: true,
      backupFile: backupFileName,
      message: 'Backup non distruttivo creato correttamente.',
    });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});

// ============================================================================
// 4. API 404 CATCH-ALL (CRITICAL: NEVER FALL THROUGH TO VITE SPA FOR /api/*)
// ============================================================================

app.use('/api', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.status(404).json({
    error: `Endpoint API non trovato: ${req.method} ${req.originalUrl}`,
    code: 'API_ENDPOINT_NOT_FOUND',
  });
});

// ============================================================================
// 5. VITE INTEGRATION / SPA SERVING
// ============================================================================

async function startServer() {
  if (!isProd) {
    // Development mode: Vite middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production mode: Serve dist folder
    const distPath = path.resolve(process.cwd(), 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.use((_req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    } else {
      app.use((_req, res) => {
        res.status(500).send('Applicazione non compilata. Esegui npm run build prima di avviare in produzione.');
      });
    }
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[NoeTom Server] In ascolto su http://0.0.0.0:${PORT} (Ambiente: ${isProd ? 'produzione' : 'sviluppo'})`);
  });
}

startServer().catch((err) => {
  console.error('[NoeTom Server] Errore critico avvio server:', err);
  process.exit(1);
});
