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
});
