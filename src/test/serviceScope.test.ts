import { describe, expect, it } from 'vitest';
import { detectExcludedService, SCOPE_EXCLUDED_REPLY, SCOPE_FORM_NOTICE } from '../lib/serviceScope';
import { recognizeIntent } from '../lib/concierge/intentRecognizer';

describe('Noemi professional perimeter: all four languages', () => {
  it.each([
    ['Vorrei delegare la fatturazione', 'accounting'],
    ['I need bookkeeping and invoice issuing', 'accounting'],
    ['Gestion de la comptabilité et factures', 'accounting'],
    ['Necesito facturación y contabilidad', 'accounting'],
    ['Mi serve supporto amministrativo', 'administration'],
    ['Please provide business administration', 'administration'],
    ['Assistance administrative pour mon entreprise', 'administration'],
    ['Necesito apoyo administrativo', 'administration'],
    ['Mi serve lead generation e ricerca contatti', 'acquisition'],
    ['Do you do cold calling and appointment setting?', 'acquisition'],
    ['Je souhaite de la prospection commerciale', 'acquisition'],
    ['Necesito captación de clientes', 'acquisition'],
    ['I need interview participant recruitment', 'acquisition'],
    ['Reclutamento di partecipanti a interviste', 'acquisition'],
  ] as const)('does not accept excluded work: %s', (request, expected) => {
    expect(detectExcludedService(request)).toBe(expected);
    const result = recognizeIntent(request);
    expect(result.isScopeExcluded).toBe(true);
    expect(result.serviceKey).toBeUndefined();
  });
  it.each([
    'Gestione delle email, agenda e appuntamenti',
    'Aggiornamento dei listini e preparazione preventivi operativi',
    'Follow-up di assistenza ai clienti già acquisiti',
    'Raccolta informazioni su fornitori e confronto di software',
    'Traduzione di una email commerciale verso l’italiano',
    'Translation of product catalogue into Italian',
    'Rédaction de fiches produits en français',
    'Actualizar los textos de una landing page',
    'Traduire un devis italien en français',
    'Translate invoice-related text as editorial content',
  ])('keeps genuine operational and language work available: %s', (request) => {
    expect(detectExcludedService(request)).toBeNull();
  });
  it('has complete helpful responses and visible notice in IT, EN, FR, ES', () => {
    for (const lang of ['it', 'en', 'fr', 'es'] as const) {
      expect(SCOPE_FORM_NOTICE[lang].length).toBeGreaterThan(110);
      for (const kind of ['accounting', 'administration', 'acquisition'] as const) {
        expect(SCOPE_EXCLUDED_REPLY[kind][lang].length).toBeGreaterThan(100);
      }
    }
  });
});
