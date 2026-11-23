import {describe, it, expect} from 'vitest';
import {createManualContactText, getManualContactMailto, getManualContactPlainText} from '../lib/api/mailFallback';

const sample = {
  fullName: 'Cliente Prova',
  email: 'cliente@example.org',
  phone: '123456789',
  service: 'Traduzione / localizzazione',
  message: 'Richiedo la localizzazione di alcune pagine web in italiano.',
  reference: 'req_1234567890abcd',
};

describe('Manual contact alternative', () => {
  it('preserves the full request including reference and uses professional address', () => {
    const text = getManualContactPlainText(sample);
    expect(text).toContain('info@noemitomassetti.it');
    expect(text).toContain(sample.message);
    expect(text).toContain(sample.reference);
    expect(text).toContain(sample.email);
  });
  it('opens a mail client only after a user clicks a mailto link, and never claims delivery', () => {
    const link = getManualContactMailto(sample);
    expect(link).toMatch(/^mailto:info@noemitomassetti\.it\?subject=/);
    expect(decodeURIComponent(link)).toContain(sample.message);
  });
  it('rejects line breaks in subject fields to prevent email header injection', () => {
    const draft = createManualContactText({...sample, service: 'Traduzione\r\nBcc: attacker@example.org'});
    expect(draft.subject).not.toContain('\n');
    expect(draft.subject).not.toContain('\r');
  });
  it('localises fallback subject and labels without altering the visitor message', () => {
    const expectations = {
      it: ['Richiesta dal sito', 'Oggetto:', 'Nome:'],
      en: ['Website enquiry', 'Subject:', 'Name:'],
      fr: ['Demande depuis le site', 'Objet:', 'Nom:'],
      es: ['Solicitud desde el sitio web', 'Asunto:', 'Nombre:'],
    } as const;
    for (const locale of ['it', 'en', 'fr', 'es'] as const) {
      const output = getManualContactPlainText(sample, locale);
      for (const label of expectations[locale]) expect(output).toContain(label);
      expect(output).toContain(sample.message);
      expect(output).toContain(sample.reference);
      const mailto = decodeURIComponent(getManualContactMailto(sample, locale));
      expect(mailto).toContain(expectations[locale][0]);
      expect(mailto).toContain(sample.message);
    }
  });

});
