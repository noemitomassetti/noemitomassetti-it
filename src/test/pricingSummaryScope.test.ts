import { describe, expect, it } from 'vitest';
import { getServicePricingSummary } from '../lib/pricingData';

describe('Public pricing summaries', () => {
  it('returns the actual customer-care scope rather than generic VA hour packages', () => {
    const summary = getServicePricingSummary('support', 'it');
    expect(summary).toContain('Gestione e organizzazione della posta');
    expect(summary).not.toContain('Pacchetto 20 ore');
  });

  it('keeps the approved service aliases distinct across languages', () => {
    expect(getServicePricingSummary('customerCare', 'en')).toContain('Email inbox organisation');
    expect(getServicePricingSummary('translation', 'fr')).toContain('Traduction');
    expect(getServicePricingSummary('backoffice', 'es')).toContain('Trabajo por horas');
  });
});
