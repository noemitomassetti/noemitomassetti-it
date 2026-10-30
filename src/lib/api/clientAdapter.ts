/**
 * Public-site submission adapter — safe, truthful acknowledgements.
 * Nothing here proves that NoeTom is deployed. Vercel static hosting has no co-located API.
 */
import type { CreatePublicRequestPayload, CreatePublicRequestResult } from './contract';

import { getFormSubmitUrl } from './contactDelivery';

/** Only a deliberately configured URL enables NoeTom; never infer from window.location. */
export function getNoeTomApiBaseUrl(): string | null {
  // Direct Vite env access is correctly statically replaced in production and stubbed in Vitest.
  const configured = import.meta.env.VITE_API_BASE_URL?.trim();
  if (!configured) return null;
  let url: URL;
  try {
    url = new URL(configured);
  } catch {
    throw new Error('Configurazione API NoeTom non valida: URL errato.');
  }
  const isLocal = ['localhost', '127.0.0.1'].includes(url.hostname);
  if (url.protocol !== 'https:' && !(isLocal && url.protocol === 'http:')) {
    throw new Error('Configurazione API NoeTom non sicura: è richiesto HTTPS.');
  }
  if (url.username || url.password || url.search || url.hash || url.pathname !== '/') {
    throw new Error('Configurazione API NoeTom non valida: usa soltanto l’origine HTTPS.');
  }
  return url.origin;
}

export function isBackendConfigured(): boolean {
  return getNoeTomApiBaseUrl() !== null;
}

/** Opaque random identifier: no address or other personal data embedded in keys. */
export function generateIdempotencyKey(_email?: string, _serviceId?: string): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `req_${crypto.randomUUID()}`;
  }
  // Only for legacy browsers without randomUUID. Prefer cryptographic entropy where available.
  if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    return `req_${Array.from(bytes, b => b.toString(16).padStart(2, '0')).join('')}`;
  }
  throw new Error('Browser non compatibile con l’invio sicuro delle richieste.');
}

/** Prevent indefinite spinning when an intake provider does not answer.
 * A timeout can happen AFTER remote persistence: retries must keep the same ID.
 */
async function fetchWithTimeout(url: string, init: RequestInit, timeoutMs = 15000): Promise<Response> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

async function parseJsonSafely(response: Response): Promise<Record<string, unknown> | null> {
  const type = response.headers?.get('content-type') || '';
  if (!type.toLowerCase().includes('application/json')) return null;
  try {
    const value: unknown = await response.json();
    return typeof value === 'object' && value !== null && !Array.isArray(value)
      ? value as Record<string, unknown> : null;
  } catch {
    return null;
  }
}

function submitError(response: Response, data: Record<string, unknown> | null): Error {
  const reason = typeof data?.error === 'string' ? data.error : '';
  switch (response.status) {
    case 400: case 422: return new Error(reason || 'Controlla i dati inseriti nel modulo.');
    case 401: case 403: return new Error('Il servizio di ricezione non è autorizzato. Contatta Noemi direttamente.');
    case 409: return new Error('La richiesta risulta in conflitto: non è possibile confermarne la registrazione.');
    case 429: return new Error('Troppe richieste. Riprova più tardi senza modificare la tua richiesta.');
    default: return new Error(`NoeTom non ha confermato la registrazione (HTTP ${response.status}). Non inviare automaticamente una seconda richiesta.`);
  }
}

export async function submitQuoteRequest(payload: CreatePublicRequestPayload): Promise<CreatePublicRequestResult> {
  if (payload.honeypot?.trim()) {
    throw new Error('Richiesta non valida rilevata dai filtri di sicurezza anti-bot.');
  }
  if (!payload.fullName?.trim() || !payload.email?.trim() || !payload.brief?.trim()) {
    throw new Error('Campi obbligatori mancanti: Nome, Email e Descrizione della richiesta.');
  }
  if (payload.brief.trim().length < 10) {
    throw new Error('Descrizione della richiesta troppo breve (minimo 10 caratteri).');
  }
  if (!payload.privacyGdprConsent) {
    throw new Error('È necessario dichiarare di aver letto l’informativa privacy per procedere.');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email.trim())) {
    throw new Error('Indirizzo email non valido.');
  }
  if (!payload.idempotencyKey || !/^req_[a-z0-9-]{12,}$/i.test(payload.idempotencyKey)) {
    throw new Error('Identificativo della richiesta non valido.');
  }

  const backendUrl = getNoeTomApiBaseUrl();
  if (backendUrl) {
    // A configured API is authoritative. NEVER fail over after an uncertain outcome:
    // a network timeout can happen AFTER the backend committed the request.
    let response: Response;
    try {
      response = await fetchWithTimeout(`${backendUrl}/api/v1/public/requests`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'X-Idempotency-Key': payload.idempotencyKey,
        },
        body: JSON.stringify({
          clientName: payload.fullName.trim(),
          clientEmail: payload.email.trim(),
          description: payload.brief.trim(),
          phone: payload.phone?.trim() || undefined,
          serviceType: payload.serviceId || 'richiesta_generale',
          locale: payload.locale,
          engagementType: payload.engagementType,
          sourceLocale: payload.sourceLocale,
          targetLocale: payload.targetLocale,
          deadlineDesired: payload.deadlineDesired,
          privacyGdprConsent: true,
          newsletterConsent: Boolean(payload.newsletterConsent),
          honeypot: payload.honeypot || '',
        }),
      });
    } catch {
      throw new Error('Esito della richiesta non verificabile: potrebbe essere stata registrata. Non reinviarla con un nuovo identificativo; contatta Noemi per la verifica.');
    }
    const data = await parseJsonSafely(response);
    if (response.ok || response.status === 409) {
      if (data?.success === true && typeof data.requestId === 'string' && data.requestId.trim() && data.status === 'received' && data.deliveryStatus === 'persisted_in_noetom') {
        return {
          success: true,
          requestId: data.requestId,
          leadId: typeof data.leadId === 'string' ? data.leadId : undefined,
          status: 'received',
          deliveryStatus: 'persisted_in_noetom',
          message: 'Richiesta registrata nel sistema gestionale.',
          createdAt: typeof data.createdAt === 'string' ? data.createdAt : new Date().toISOString(),
          mode: 'production',
        };
      }
      throw new Error('Il server non ha fornito una conferma valida di registrazione. Verifica con Noemi prima di reinviare.');
    }
    throw submitError(response, data);
  }

  // Optional alternative provider, deliberately disabled unless an access key is configured.
  // Only one provider is called per request. Never retry with another provider on ambiguous errors.
  // Web3Forms access keys are public identifiers; do NOT add any secret to VITE_* variables.
  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
  if (web3Key) {
    if (!/^[a-f0-9-]{20,100}$/i.test(web3Key)) {
      throw new Error('WEB3FORMS_CONFIG_INVALID');
    }
    const web3Response = await fetchWithTimeout('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', Accept: 'application/json'},
      body: JSON.stringify({
        access_key: web3Key,
        name: payload.fullName.trim(),
        email: payload.email.trim(),
        phone: payload.phone?.trim() || 'Non indicato',
        subject: 'Richiesta di preventivo - ' + payload.serviceId,
        message: payload.brief.trim(),
        servizio: payload.serviceId,
        lingua: payload.locale.toUpperCase(),
        tipo_incarico: payload.engagementType,
        riferimento: payload.idempotencyKey,
        privacy_letta: 'Sì',
        botcheck: false,
      }),
    }).catch(() => { throw new Error('WEB3FORMS_NETWORK_OR_CORS'); });
    const web3Result = await parseJsonSafely(web3Response);
    if (web3Response.status === 429) throw new Error('FORM_PROVIDER_RATE_LIMIT');
    if (!web3Response.ok || web3Result?.success !== true) {
      throw new Error('WEB3FORMS_PROVIDER_REJECTED');
    }
    return {
      success: true,
      requestId: payload.idempotencyKey,
      status: 'received',
      deliveryStatus: 'email_received_by_provider',
      message: 'Richiesta accettata dal servizio di inoltro email; la consegna alla casella non è ancora verificata.',
      createdAt: new Date().toISOString(),
      mode: 'production',
    };
  }

  // The former provider repeatedly failed in live checks. Never call it implicitly.
  // It is retained only as an explicitly opted-in rollback path for the owner.
  if (import.meta.env.VITE_LEGACY_FORMSUBMIT_ENABLED !== 'true') {
    throw new Error('FORM_PROVIDER_NOT_CONFIGURED');
  }

  // Standalone static site: email provider only. This means "accepted by provider", NOT delivered.
  const fallbackResponse = await fetchWithTimeout(getFormSubmitUrl(), {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Accept: 'application/json'},
    body: JSON.stringify({
      nome: payload.fullName.trim(),
      email: payload.email.trim(),
      telefono: payload.phone?.trim() || 'Non specificato',
      messaggio: payload.brief.trim(),
      servizio: payload.serviceId,
      lingua: payload.locale.toUpperCase(),
      tipo_incarico: payload.engagementType,
      scadenza_desiderata: payload.deadlineDesired || 'Non specificata',
      parole_stimate: payload.wordCountEstimate ?? 'Non specificate',
      ore_stimate: payload.hoursEstimate ?? 'Non specificate',
      informativa_privacy_letta: 'Sì',
      newsletter: payload.newsletterConsent ? 'Sì' : 'No',
      identificativo_richiesta: payload.idempotencyKey,
      _subject: `Richiesta di preventivo - ${payload.serviceId}`,
      _replyto: payload.email.trim(),
      // The AJAX endpoint cannot complete FormSubmit's usual interactive captcha page.
      // Use the existing honeypot; consider a server-validated captcha when switching providers.
      _captcha: 'false',
      _honey: payload.honeypot || '',
    }),
  }).catch(() => { throw new Error('FORM_PROVIDER_NETWORK_OR_CORS'); });

  if (!fallbackResponse.ok) {
    if (fallbackResponse.status === 403) throw new Error('FORM_PROVIDER_BLOCKED');
    if (fallbackResponse.status === 429) throw new Error('FORM_PROVIDER_RATE_LIMIT');
    throw new Error(`Il servizio email non ha accettato la richiesta (HTTP ${fallbackResponse.status}).`);
  }
  const fallbackData = await parseJsonSafely(fallbackResponse);
  if (fallbackData?.success !== true && fallbackData?.success !== 'true') {
    const providerMessage = typeof fallbackData?.message === 'string' ? fallbackData.message : '';
    if (/activat|confirm.*form/i.test(providerMessage)) throw new Error('FORM_PROVIDER_ACTIVATION_REQUIRED');
    throw new Error('Il servizio email non ha confermato la ricezione della richiesta.');
  }
  return {
    success: true,
    requestId: payload.idempotencyKey,
    status: 'received',
    deliveryStatus: 'email_received_by_provider',
    message: 'Richiesta accettata dal servizio di inoltro email; la consegna alla casella non è ancora verificata.',
    createdAt: new Date().toISOString(),
    mode: 'production',
  };
}
