import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { submitQuoteRequest, generateIdempotencyKey, isBackendConfigured } from '../lib/api/clientAdapter';
import type { CreatePublicRequestPayload } from '../lib/api/contract';

const payload: CreatePublicRequestPayload = {
  fullName: 'Mario Rossi', email: 'mario@example.org', serviceId: 'translation-localization',
  locale: 'it', engagementType: 'hourly_ad_hoc', brief: 'Traduzione del catalogo prodotti in italiano.',
  privacyGdprConsent: true, idempotencyKey: 'req_12345678901234',
};

const answer = (status: number, body: unknown, type = 'application/json') => ({
  ok: status >= 200 && status < 300,
  status,
  headers: {get: (name: string) => name.toLowerCase() === 'content-type' ? type : null},
  json: async () => body,
}) as Response;

const persisted = {success: true, requestId: 'r_server_1', status: 'received', deliveryStatus: 'persisted_in_noetom'};

beforeEach(() => vi.stubEnv('VITE_API_BASE_URL', ''));
afterEach(() => {vi.unstubAllEnvs(); vi.unstubAllGlobals(); vi.restoreAllMocks();});

describe('Site to NoeTom intake safety checks', () => {
  it('uses random opaque IDs without embedding customer email', () => {
    const a = generateIdempotencyKey('mario@example.org', 'translation');
    const b = generateIdempotencyKey('mario@example.org', 'translation');
    expect(a).toMatch(/^req_[a-z0-9-]{12,}$/i);
    expect(a).not.toContain('mario');
    expect(a).not.toBe(b);
  });
  it('does not infer a backend from the Vercel site origin', () => {
    expect(isBackendConfigured()).toBe(false);
  });
  it('blocks invalid form values and bots locally', async () => {
    const fn = vi.fn(); vi.stubGlobal('fetch', fn);
    await expect(submitQuoteRequest({...payload, email: 'invalid'})).rejects.toThrow('email non valido');
    await expect(submitQuoteRequest({...payload, honeypot: 'bot'})).rejects.toThrow('anti-bot');
    await expect(submitQuoteRequest({...payload, privacyGdprConsent: false})).rejects.toThrow('informativa');
    await expect(submitQuoteRequest({...payload, brief: 'ciao'})).rejects.toThrow('breve');
    expect(fn).not.toHaveBeenCalled();
  });
  it('uses provider only with no backend and acknowledges just provider acceptance', async () => {
    const fn = vi.fn().mockResolvedValue(answer(200, {success: 'true'})); vi.stubGlobal('fetch', fn);
    const result = await submitQuoteRequest(payload);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn.mock.calls[0][0]).toContain('formsubmit.co');
    expect(result.deliveryStatus).toBe('email_received_by_provider');
    expect(result.message).toContain('non è ancora verificata');
  });
  it('does not pretend provider success on malformed response', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(answer(200, {success: false})));
    await expect(submitQuoteRequest(payload)).rejects.toThrow('non ha confermato');
  });
  it('posts canonical mapped data when the backend is deliberately configured', async () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.example.org/');
    const fn = vi.fn().mockResolvedValue(answer(201, persisted)); vi.stubGlobal('fetch', fn);
    const result = await submitQuoteRequest(payload);
    const sent = JSON.parse(fn.mock.calls[0][1].body);
    expect(fn.mock.calls[0][0]).toBe('https://api.example.org/api/v1/public/requests');
    expect(sent.clientName).toBe(payload.fullName);
    expect(sent.clientEmail).toBe(payload.email);
    expect(sent.description).toBe(payload.brief);
    expect(sent.fullName).toBeUndefined();
    expect(fn.mock.calls[0][1].headers['X-Idempotency-Key']).toBe(payload.idempotencyKey);
    expect(result.requestId).toBe('r_server_1');
  });
  it('rejects an HTML/SPA response, rather than calling it persisted', async () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.example.org');
    const fn = vi.fn().mockResolvedValue(answer(200, '<html />', 'text/html')); vi.stubGlobal('fetch', fn);
    await expect(submitQuoteRequest(payload)).rejects.toThrow('conferma valida');
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('rejects a 200 with success false or missing requestId', async () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.example.org');
    const fn = vi.fn().mockResolvedValueOnce(answer(200, {success: false})).mockResolvedValueOnce(answer(200, {success: true, status: 'received'}));
    vi.stubGlobal('fetch', fn);
    await expect(submitQuoteRequest(payload)).rejects.toThrow('conferma valida');
    await expect(submitQuoteRequest(payload)).rejects.toThrow('conferma valida');
    expect(fn).toHaveBeenCalledTimes(2);
  });
  it('never automatically sends email after an uncertain backend timeout', async () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.example.org');
    const fn = vi.fn().mockRejectedValue(new Error('timeout')); vi.stubGlobal('fetch', fn);
    await expect(submitQuoteRequest(payload)).rejects.toThrow('Esito della richiesta non verificabile');
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('accepts duplicate only with verified existing request ID', async () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.example.org');
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(answer(409, persisted)));
    expect((await submitQuoteRequest(payload)).requestId).toBe('r_server_1');
  });
  it('rejects unconfirmed 409 conflict without second transmission', async () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.example.org');
    const fn = vi.fn().mockResolvedValue(answer(409, {code:'IDEMPOTENCY_CONFLICT'})); vi.stubGlobal('fetch', fn);
    await expect(submitQuoteRequest(payload)).rejects.toThrow('conferma valida');
    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('does not email after HTTP 400, 429 or 500', async () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://api.example.org');
    const fn = vi.fn().mockResolvedValueOnce(answer(400, {})).mockResolvedValueOnce(answer(429, {})).mockResolvedValueOnce(answer(500, {}));
    vi.stubGlobal('fetch', fn);
    await expect(submitQuoteRequest(payload)).rejects.toThrow('Controlla i dati');
    await expect(submitQuoteRequest(payload)).rejects.toThrow('Troppe richieste');
    await expect(submitQuoteRequest(payload)).rejects.toThrow('HTTP 500');
    expect(fn).toHaveBeenCalledTimes(3);
  });
  it('rejects insecure non-local HTTP configuration', async () => {
    vi.stubEnv('VITE_API_BASE_URL', 'http://api.example.org');
    const fn = vi.fn(); vi.stubGlobal('fetch', fn);
    await expect(submitQuoteRequest(payload)).rejects.toThrow('richiesto HTTPS');
    expect(fn).not.toHaveBeenCalled();
  });
});
