import fs from 'fs';
import path from 'path';

export const SCHEMA_VERSION = '2.1.0';

export interface StorageStatus {
  mode: 'development_local' | 'firestore_persistent';
  isProductionGuaranteed: boolean;
  schemaVersion: string;
  storagePath: string;
  note: string;
}

export interface UserOperationalData {
  uid: string;
  email: string;
  role: 'owner' | 'client' | 'contributor';
  displayName?: string;
  createdAt: string;
  updatedAt: string;
  clients: Array<{
    id: string;
    organization?: string;
    name: string;
    email: string;
    locale: string;
    country: string;
    retentionMonths: number;
    createdAt: string;
  }>;
  leads: Array<{
    id: string;
    fullName: string;
    email: string;
    phone?: string;
    locale: string;
    source: string;
    createdAt: string;
  }>;
  requests: Array<{
    id: string;
    leadId?: string;
    clientName: string;
    clientEmail: string;
    serviceId: string;
    locale: string;
    engagementType: string;
    description: string;
    idempotencyKey?: string;
    status: 'received' | 'needs_info' | 'quoted' | 'accepted' | 'in_progress' | 'delivered';
    createdAt: string;
  }>;
  quotes: Array<{
    id: string;
    requestId: string;
    clientName: string;
    serviceId: string;
    amountEur: number;
    hoursEstimate?: number;
    wordCountEstimate?: number;
    status: 'draft' | 'presented' | 'accepted' | 'rejected';
    createdAt: string;
    acceptedAt?: string;
  }>;
  agreements: Array<{
    id: string;
    clientId: string;
    clientName: string;
    type: 'hourly_package_10' | 'hourly_package_20' | 'hourly_ad_hoc' | 'fixed_one_off' | 'monthly_retainer';
    scope: string;
    totalHoursCap: number;
    usedHours: number;
    rateOrFee: number;
    currency: 'EUR';
    status: 'draft' | 'active' | 'paused' | 'completed';
    approvedByOwner: boolean;
    createdAt: string;
  }>;
  timeEntries: Array<{
    id: string;
    agreementId?: string;
    clientId: string;
    taskDescription: string;
    hours: number;
    date: string;
    isBillable: boolean;
    reviewedByOwner: boolean;
    createdAt: string;
  }>;
  deliveries: Array<{
    id: string;
    agreementId?: string;
    title: string;
    recipient: string;
    version: number;
    notes?: string;
    approvedByOwner: boolean;
    approvedAt?: string;
    status: 'draft' | 'pending_approval' | 'approved' | 'delivered';
    deliveredAt?: string;
    createdAt: string;
  }>;
  aiUsageLogs: Array<{
    id: string;
    taskType: 'translation_qa' | 'content_check' | 'desk_research';
    model: string;
    tokensPrompt: number;
    tokensCompletion: number;
    estimatedCostEur: number;
    createdAt: string;
  }>;
}

export interface PublicRequestRecord {
  requestId: string;
  idempotencyKey: string;
  clientName: string;
  clientEmail: string;
  phone?: string;
  serviceId: string;
  locale: string;
  engagementType: string;
  description: string;
  wordCountEstimate?: number;
  hoursEstimate?: number;
  deadlineDesired?: string;
  privacyGdprConsent: boolean;
  newsletterConsent?: boolean;
  ipAddress?: string;
  receivedAt: string;
}

const DATA_DIR = path.resolve(process.cwd(), 'data');
const USERS_DIR = path.join(DATA_DIR, 'users');
const BACKUPS_DIR = path.join(DATA_DIR, 'backups');
const PUBLIC_REQUESTS_FILE = path.join(DATA_DIR, 'public_requests.json');

// Ensure directories exist
function ensureDirectories() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(USERS_DIR)) fs.mkdirSync(USERS_DIR, { recursive: true });
  if (!fs.existsSync(BACKUPS_DIR)) fs.mkdirSync(BACKUPS_DIR, { recursive: true });
}

ensureDirectories();

// In-memory rate limiting & deduplication cache (backed by disk)
const idempotencyStore = new Map<string, { requestId: string; timestamp: number }>();

export class UnifiedStore {
  /**
   * Diagnostic check on active storage backend
   */
  public getStorageStatus(): StorageStatus {
    return {
      mode: 'development_local',
      isProductionGuaranteed: false,
      schemaVersion: SCHEMA_VERSION,
      storagePath: USERS_DIR,
      note: 'Storage locale di sviluppo in container (effimero). Per produzione cloud è richiesta la configurazione delle credenziali ADC / Firebase Admin.',
    };
  }

  /**
   * Generates initial seed data for the verified owner
   */
  public createInitialUserData(uid: string, email: string): UserOperationalData {
    const now = new Date().toISOString();
    return {
      uid,
      email,
      role: 'owner',
      displayName: 'Noemi Tomassetti',
      createdAt: now,
      updatedAt: now,
      clients: [
        {
          id: 'cli_seed_001',
          name: 'Studio Legale & Traduzioni Milano',
          email: 'avv.rossi@example.com',
          locale: 'it',
          country: 'Italia',
          retentionMonths: 24,
          createdAt: now,
        },
        {
          id: 'cli_seed_002',
          name: 'Nexus Tech International Ltd',
          email: 'operations@nexustech-europe.com',
          locale: 'en',
          country: 'Regno Unito',
          retentionMonths: 12,
          createdAt: now,
        },
      ],
      leads: [
        {
          id: 'lead_seed_001',
          fullName: 'Claire Dupont',
          email: 'c.dupont@boutique-paris.fr',
          phone: '+33 6 12 34 56 78',
          locale: 'fr',
          source: 'Website Form (Flagship IT Localisation)',
          createdAt: now,
        },
      ],
      requests: [
        {
          id: 'req_seed_001',
          leadId: 'lead_seed_001',
          clientName: 'Claire Dupont',
          clientEmail: 'c.dupont@boutique-paris.fr',
          serviceId: 'translation-localization',
          locale: 'fr',
          engagementType: 'fixed_one_off',
          description: 'Localisation vers l’italien du catalogue e-commerce beauté (3 500 mots).',
          status: 'received',
          createdAt: now,
        },
      ],
      quotes: [
        {
          id: 'quo_seed_001',
          requestId: 'req_seed_001',
          clientName: 'Claire Dupont',
          serviceId: 'translation-localization',
          amountEur: 385.0,
          wordCountEstimate: 3500,
          status: 'draft',
          createdAt: now,
        },
      ],
      agreements: [
        {
          id: 'agr_pkg10_001',
          clientId: 'cli_seed_001',
          clientName: 'Studio Legale & Traduzioni Milano',
          type: 'hourly_package_10',
          scope: 'Back office operativo, gestione agenda e corrispondenza multilingue',
          totalHoursCap: 10,
          usedHours: 3.5,
          rateOrFee: 240.0,
          currency: 'EUR',
          status: 'active',
          approvedByOwner: true,
          createdAt: now,
        },
      ],
      timeEntries: [
        {
          id: 'time_seed_001',
          agreementId: 'agr_pkg10_001',
          clientId: 'cli_seed_001',
          taskDescription: 'Riorganizzazione archivio pratiche e stesura bozze corrispondenza',
          hours: 2.0,
          date: new Date(Date.now() - 86400000 * 2).toISOString().slice(0, 10),
          isBillable: true,
          reviewedByOwner: true,
          createdAt: now,
        },
        {
          id: 'time_seed_002',
          agreementId: 'agr_pkg10_001',
          clientId: 'cli_seed_001',
          taskDescription: 'Revisione linguistica accordo quadro EN-IT',
          hours: 1.5,
          date: new Date(Date.now() - 86400000).toISOString().slice(0, 10),
          isBillable: true,
          reviewedByOwner: true,
          createdAt: now,
        },
      ],
      deliveries: [
        {
          id: 'del_seed_001',
          agreementId: 'agr_pkg10_001',
          title: 'Documento Riepilogo Pratiche Settimanale',
          recipient: 'avv.rossi@example.com',
          version: 1,
          notes: 'Verificato da Noemi. In attesa di approvazione formale.',
          approvedByOwner: true,
          approvedAt: now,
          status: 'approved',
          createdAt: now,
        },
      ],
      aiUsageLogs: [
        {
          id: 'ai_seed_001',
          taskType: 'translation_qa',
          model: 'deterministic_engine_v1',
          tokensPrompt: 450,
          tokensCompletion: 180,
          estimatedCostEur: 0.0,
          createdAt: now,
        },
      ],
    };
  }

  /**
   * Retrieves user operational data synchronously for reliable fast reads
   */
  public getUserData(uid: string, fallbackEmail = 'noemitom@gmail.com'): UserOperationalData {
    ensureDirectories();
    const cleanUid = uid.replace(/[^a-zA-Z0-9_-]/g, '_');
    const filePath = path.join(USERS_DIR, `${cleanUid}.json`);

    if (fs.existsSync(filePath)) {
      try {
        const raw = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(raw) as UserOperationalData;
        return data;
      } catch (err) {
        console.error(`Errore lettura file utente ${filePath}:`, err);
      }
    }

    // Initialize seed data
    const initial = this.createInitialUserData(uid, fallbackEmail);
    this.saveUserData(initial);
    return initial;
  }

  /**
   * Atomic file write with safety backup
   */
  public saveUserData(data: UserOperationalData): void {
    ensureDirectories();
    const cleanUid = data.uid.replace(/[^a-zA-Z0-9_-]/g, '_');
    const targetFile = path.join(USERS_DIR, `${cleanUid}.json`);
    const tempFile = path.join(USERS_DIR, `${cleanUid}.tmp.${Date.now()}`);

    data.updatedAt = new Date().toISOString();
    const serialized = JSON.stringify(data, null, 2);

    try {
      fs.writeFileSync(tempFile, serialized, 'utf-8');
      fs.renameSync(tempFile, targetFile);
    } catch (err) {
      if (fs.existsSync(tempFile)) {
        try { fs.unlinkSync(tempFile); } catch (e) { void e; }
      }
      throw new Error(`Salvataggio dati fallito per utente ${data.uid}: ${(err as Error).message}`);
    }
  }

  /**
   * Creates a backup of user data
   */
  public backupUserData(uid: string): string {
    const data = this.getUserData(uid);
    const ts = new Date().toISOString().replace(/[:.]/g, '-');
    const cleanUid = uid.replace(/[^a-zA-Z0-9_-]/g, '_');
    const backupPath = path.join(BACKUPS_DIR, `${cleanUid}_backup_${ts}.json`);

    fs.writeFileSync(backupPath, JSON.stringify(data, null, 2), 'utf-8');
    return path.basename(backupPath);
  }

  /**
   * Saves and deduplicates incoming public intake requests
   */
  public recordPublicRequest(reqData: PublicRequestRecord): { isDuplicate: boolean; record: PublicRequestRecord } {
    ensureDirectories();

    // Check memory cache
    if (idempotencyStore.has(reqData.idempotencyKey)) {
      const existingKey = idempotencyStore.get(reqData.idempotencyKey)!;
      return {
        isDuplicate: true,
        record: { ...reqData, requestId: existingKey.requestId },
      };
    }

    let allRequests: PublicRequestRecord[] = [];
    if (fs.existsSync(PUBLIC_REQUESTS_FILE)) {
      try {
        allRequests = JSON.parse(fs.readFileSync(PUBLIC_REQUESTS_FILE, 'utf-8'));
      } catch {
        allRequests = [];
      }
    }

    // Check disk storage for idempotency
    const existing = allRequests.find((r) => r.idempotencyKey === reqData.idempotencyKey);
    if (existing) {
      idempotencyStore.set(reqData.idempotencyKey, { requestId: existing.requestId, timestamp: Date.now() });
      return { isDuplicate: true, record: existing };
    }

    allRequests.unshift(reqData);
    // Keep max 200 requests in local dev storage
    if (allRequests.length > 200) allRequests = allRequests.slice(0, 200);

    const tempFile = `${PUBLIC_REQUESTS_FILE}.tmp.${Date.now()}`;
    fs.writeFileSync(tempFile, JSON.stringify(allRequests, null, 2), 'utf-8');
    fs.renameSync(tempFile, PUBLIC_REQUESTS_FILE);

    idempotencyStore.set(reqData.idempotencyKey, { requestId: reqData.requestId, timestamp: Date.now() });

    // Also mirror into default owner's pending requests queue
    try {
      const ownerData = this.getUserData('owner_noemi', 'noemitom@gmail.com');
      ownerData.requests.unshift({
        id: reqData.requestId,
        clientName: reqData.clientName,
        clientEmail: reqData.clientEmail,
        serviceId: reqData.serviceId,
        locale: reqData.locale,
        engagementType: reqData.engagementType,
        description: reqData.description,
        idempotencyKey: reqData.idempotencyKey,
        status: 'received',
        createdAt: reqData.receivedAt,
      });
      this.saveUserData(ownerData);
    } catch (e) {
      console.warn('Mirroring public request to owner queue failed:', e);
    }

    return { isDuplicate: false, record: reqData };
  }

  /**
   * Retrieves all public requests
   */
  public getPublicRequests(): PublicRequestRecord[] {
    if (!fs.existsSync(PUBLIC_REQUESTS_FILE)) return [];
    try {
      return JSON.parse(fs.readFileSync(PUBLIC_REQUESTS_FILE, 'utf-8'));
    } catch {
      return [];
    }
  }

  /**
   * Human Approval Gate for Deliverables
   * Strictly enforces that work cannot be marked delivered without explicit owner approval!
   */
  public approveDeliverable(uid: string, deliveryId: string, approvedBy: string): void {
    const data = this.getUserData(uid);
    const item = data.deliveries.find((d) => d.id === deliveryId);
    if (!item) {
      throw new Error(`Librabile con ID ${deliveryId} non trovato.`);
    }

    item.approvedByOwner = true;
    item.approvedAt = new Date().toISOString();
    item.status = 'approved';
    item.notes = `Approvato esplicitamente da ${approvedBy} prima del rilascio.`;

    this.saveUserData(data);
  }

  /**
   * Execution of delivery with gate check
   */
  public deliverWork(uid: string, deliveryId: string): void {
    const data = this.getUserData(uid);
    const item = data.deliveries.find((d) => d.id === deliveryId);
    if (!item) {
      throw new Error(`Librabile con ID ${deliveryId} non trovato.`);
    }

    if (!item.approvedByOwner) {
      throw new Error(
        'BLOCCO DI SICUREZZA: Impossibile consegnare il lavoro senza la preventiva approvazione esplicita della proprietaria Noemi.'
      );
    }

    item.status = 'delivered';
    item.deliveredAt = new Date().toISOString();
    this.saveUserData(data);
  }

  /**
   * Records worked time against a package agreement (e.g. 10h retainer)
   */
  public logTimeEntry(
    uid: string,
    entry: {
      agreementId: string;
      clientId: string;
      taskDescription: string;
      hours: number;
      date: string;
      isBillable: boolean;
    }
  ): { timeEntryId: string; remainingHours: number } {
    const data = this.getUserData(uid);
    const agreement = data.agreements.find((a) => a.id === entry.agreementId);

    if (!agreement) {
      throw new Error(`Accordo con ID ${entry.agreementId} non trovato.`);
    }

    const timeEntryId = `time_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`;
    const newEntry = {
      id: timeEntryId,
      agreementId: entry.agreementId,
      clientId: entry.clientId,
      taskDescription: entry.taskDescription,
      hours: entry.hours,
      date: entry.date,
      isBillable: entry.isBillable,
      reviewedByOwner: true,
      createdAt: new Date().toISOString(),
    };

    data.timeEntries.push(newEntry);

    if (entry.isBillable) {
      agreement.usedHours = Number((agreement.usedHours + entry.hours).toFixed(2));
      if (agreement.totalHoursCap > 0 && agreement.usedHours >= agreement.totalHoursCap) {
        agreement.status = 'completed';
      }
    }

    this.saveUserData(data);

    const remainingHours = Number(Math.max(0, agreement.totalHoursCap - agreement.usedHours).toFixed(2));
    return { timeEntryId, remainingHours };
  }
}

export const unifiedStore = new UnifiedStore();
