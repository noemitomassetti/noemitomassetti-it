import { describe, it, expect, beforeEach } from 'vitest';
import { recognizeIntent } from '../lib/concierge/intentRecognizer';
import {
  INTAKE_SCHEMAS,
  formatQuoteDraftSummary,
  sanitizeIntakeAnswers,
} from '../lib/concierge/intakeSchemas';
import {
  saveQuoteDraft,
  getQuoteDraft,
  clearQuoteDraft,
} from '../lib/concierge/quoteDraftStore';
import { isAiConciergeEnabled, queryAiConcierge } from '../lib/concierge/aiAdapter';
import {
  CONCIERGE_TO_OFFICIAL_SERVICE_ID,
  QuoteDraft,
} from '../lib/concierge/types';

describe('NoeTom AI Concierge 2.0 Test Suite', () => {
  beforeEach(() => {
    clearQuoteDraft();
  });

  describe('1. Riconoscimento e selezione dei servizi (Multilingue)', () => {
    it('riconosce correttamente richieste di traduzione in IT, EN, FR, ES', () => {
      const itRes = recognizeIntent('Vorrei un preventivo per la traduzione di un testo');
      expect(itRes.serviceKey).toBe('translation');
      expect(itRes.isScopeExcluded).toBe(false);

      const enRes = recognizeIntent('I need a professional translation into Italian');
      expect(enRes.serviceKey).toBe('translation');

      const frRes = recognizeIntent('Pouvez-vous traduire mon site internet ?');
      expect(frRes.serviceKey).toBe('translation');

      const esRes = recognizeIntent('Necesito traducir unos documentos comerciales');
      expect(esRes.serviceKey).toBe('translation');
    });

    it('riconosce correttamente richieste di assistenza virtuale e back office', () => {
      const itRes = recognizeIntent('Mi serve aiuto per la gestione agenda e segreteria');
      expect(itRes.serviceKey).toBe('backoffice');

      const enRes = recognizeIntent('Looking for a virtual assistant for inbox management');
      expect(enRes.serviceKey).toBe('backoffice');

      const frRes = recognizeIntent('Besoin d’assistance virtuelle pour le secrétariat');
      expect(frRes.serviceKey).toBe('backoffice');

      const esRes = recognizeIntent('Busco asistente virtual para organizar citas');
      expect(esRes.serviceKey).toBe('backoffice');
    });

    it('riconosce correttamente scrittura e revisione testi', () => {
      const itRes = recognizeIntent('Vorrei revisionare e umanizzare dei testi scritti con AI');
      expect(itRes.serviceKey).toBe('writing');

      const enRes = recognizeIntent('Copywriting and proofreading for my newsletter');
      expect(enRes.serviceKey).toBe('writing');

      const frRes = recognizeIntent('Rédaction et relecture de contenu');
      expect(frRes.serviceKey).toBe('writing');

      const esRes = recognizeIntent('Redacción de artículos para el blog');
      expect(esRes.serviceKey).toBe('writing');
    });

    it('riconosce correttamente ricerche online e benchmark concorrenti', () => {
      const itRes = recognizeIntent('Vorrei un benchmark dei concorrenti e ricerca fornitori');
      expect(itRes.serviceKey).toBe('research');

      const enRes = recognizeIntent('Desk research on competitor pricing in Europe');
      expect(enRes.serviceKey).toBe('research');
    });

    it('riconosce correttamente siti web e landing page', () => {
      const itRes = recognizeIntent('Vorrei creare una landing page per la mia offerta');
      expect(itRes.serviceKey).toBe('web');

      const enRes = recognizeIntent('Need a showcase website with multilingual pages');
      expect(enRes.serviceKey).toBe('web');
    });

    it('identifica attività fuori ambito (contabilità e fisco) e rifiuta categoricamente senza assegnare servizi', () => {
      const fiscalQuery1 = recognizeIntent('Fai la dichiarazione dei redditi o modelli F24?');
      expect(fiscalQuery1.isScopeExcluded).toBe(true);
      expect(fiscalQuery1.serviceKey).toBeUndefined();
      expect(fiscalQuery1.explanation.it).toContain('Noemi non fornisce consulenza contabile');

      const fiscalQuery2 = recognizeIntent('Can you do bookkeeping and tax accounting?');
      expect(fiscalQuery2.isScopeExcluded).toBe(true);
      expect(fiscalQuery2.serviceKey).toBeUndefined();

      const fiscalQuery3 = recognizeIntent('Gestion de la comptabilité et factures');
      expect(fiscalQuery3.isScopeExcluded).toBe(true);
      expect(fiscalQuery3.serviceKey).toBeUndefined();
    });

    it('mantiene il campo neutro su domande generiche non riconoscibili senza attribuzioni arbitrarie', () => {
      const genericQuery = recognizeIntent('Ciao, vorrei solo avere qualche informazione');
      expect(genericQuery.serviceKey).toBeUndefined();
      expect(genericQuery.isScopeExcluded).toBe(false);
      expect(genericQuery.explanation.it).toContain('assistenza virtuale');
    });
  });

  describe('2. Schemi di intake e raccolta dati strutturati', () => {
    it('tutti i 5 servizi possiedono schemi di intake completi in 4 lingue', () => {
      const services = ['backoffice', 'translation', 'writing', 'research', 'web'] as const;
      for (const s of services) {
        const schema = INTAKE_SCHEMAS[s];
        expect(schema).toBeDefined();
        expect(schema.questions.length).toBeGreaterThanOrEqual(3);

        for (const q of schema.questions) {
          expect(q.prompt.it).toBeDefined();
          expect(q.prompt.en).toBeDefined();
          expect(q.prompt.fr).toBeDefined();
          expect(q.prompt.es).toBeDefined();
        }
      }
    });

    it('la mappatura CONCIERGE_TO_OFFICIAL_SERVICE_ID corrisponde agli ID del progetto', () => {
      expect(CONCIERGE_TO_OFFICIAL_SERVICE_ID.backoffice).toBe('virtual-assistance');
      expect(CONCIERGE_TO_OFFICIAL_SERVICE_ID.translation).toBe('translation-localization');
      expect(CONCIERGE_TO_OFFICIAL_SERVICE_ID.writing).toBe('content-writing');
      expect(CONCIERGE_TO_OFFICIAL_SERVICE_ID.research).toBe('online-research');
      expect(CONCIERGE_TO_OFFICIAL_SERVICE_ID.web).toBe('web-landing');
    });
  });

  describe('3. Validazione, sanitizzazione e formattazione del riepilogo', () => {
    it('sanitizeIntakeAnswers pulisce spazi e limita la lunghezza massima', () => {
      const raw = {
        task: '  Email management   ',
        longText: 'A'.repeat(500),
      };
      const cleaned = sanitizeIntakeAnswers(raw);
      expect(cleaned.task).toBe('Email management');
      expect(cleaned.longText.length).toBe(300);
    });

    it('formatQuoteDraftSummary genera un brief strutturato e professionale in tutte le lingue', () => {
      const answers = {
        language_pair: 'en_to_it',
        content_type: 'web_localization',
        volume: '1000_to_4999',
        deadline: 'standard',
      };

      const summaryIt = formatQuoteDraftSummary('translation', answers, 'it');
      expect(summaryIt).toContain('[RICHIESTA PREVENTIVO ORIENTATIVO');
      expect(summaryIt).toContain('Inglese ➔ Italiano');
      expect(summaryIt).toContain('Localizzazione sito web');
      expect(summaryIt).toContain('assistente digitale di Noemi');

      const summaryEn = formatQuoteDraftSummary('translation', answers, 'en');
      expect(summaryEn).toContain('[INDICATIVE QUOTE BRIEF');
      expect(summaryEn).toContain('English ➔ Italian');

      const summaryFr = formatQuoteDraftSummary('translation', answers, 'fr');
      expect(summaryFr).toContain('[BRIEF POUR DEVIS ESTIMATIF');

      const summaryEs = formatQuoteDraftSummary('translation', answers, 'es');
      expect(summaryEs).toContain('[SOLICITUD DE PRESUPUESTO ORIENTATIVO');
    });
  });

  describe('4. Gestione sicura del QuoteDraftStore (Zero fughe nei parametri URL)', () => {
    it('memorizza, recupera e azzera la bozza in memoria temporanea', () => {
      const dummyDraft: QuoteDraft = {
        serviceKey: 'translation',
        serviceId: 'translation-localization',
        serviceTitle: {
          it: 'Traduzione',
          en: 'Translation',
          fr: 'Traduction',
          es: 'Traducción',
        },
        answers: { language_pair: 'en_to_it' },
        formattedSummary: {
          it: 'Test summary IT',
          en: 'Test summary EN',
          fr: 'Test summary FR',
          es: 'Test summary ES',
        },
        createdAt: Date.now(),
      };

      expect(getQuoteDraft()).toBeNull();

      saveQuoteDraft(dummyDraft);
      const retrieved = getQuoteDraft();
      expect(retrieved).not.toBeNull();
      expect(retrieved?.serviceId).toBe('translation-localization');
      expect(retrieved?.formattedSummary.it).toBe('Test summary IT');

      clearQuoteDraft();
      expect(getQuoteDraft()).toBeNull();
    });
  });

  describe('5. Predisposizione AI sicura (Safe Mode Invariante)', () => {
    it('la modalità AI è disabilitata per default (isAiConciergeEnabled = false)', () => {
      expect(isAiConciergeEnabled()).toBe(false);
    });

    it('queryAiConcierge non esegue chiamate di rete esterne e restituisce fallback Reason sicuro', async () => {
      const res = await queryAiConcierge({
        userMessage: 'Test prompt',
        conversationHistory: [],
        lang: 'it',
      });

      expect(res.isAiGenerated).toBe(false);
      expect(res.fallbackReason).toBe('AI_DISABLED_SAFE_MODE');
      expect(res.replyText).toBe('');
    });
  });
});
