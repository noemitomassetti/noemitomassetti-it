import { describe, expect, it } from 'vitest';
import { buildPublicConciergeKnowledge, PUBLIC_PROFESSIONAL_PROFILE } from '../lib/concierge/publicKnowledge';
import { PRICING_DATA } from '../lib/pricingData';

describe('Public professional AI knowledge: consistency and privacy', () => {
  it('contains only professional profile, allowed services and exclusions', () => {
    const text = buildPublicConciergeKnowledge();
    expect(PUBLIC_PROFESSIONAL_PROFILE.name).toBe('Noemi Tomassetti');
    expect(text).toContain('110 e lode');
    expect(text).toContain('Traduzione Specialistica');
    expect(text).toContain('customer care');
    expect(text).toContain('Lead generation');
    expect(text).toContain('fittizi');
    expect(text).not.toMatch(/figlia|partner|famiglia|ricover|salute|depressione|codice fiscale|password/i);
  });

  it('derives its public tariff statements from the actual site catalogue', () => {
    const text = buildPublicConciergeKnowledge();
    for(const category of PRICING_DATA.categories){
      expect(text).toContain(category.title.it);
      expect(text).toContain(category.rate.it);
      expect(text).toContain(category.rateDetail.it);
      for(const item of category.items.it)expect(text).toContain(item);
    }
  });

  it('states all six translation directions and excludes commercial prospecting', () => {
    const text = buildPublicConciergeKnowledge();
    expect(text).toContain('entrambe le direzioni');
    expect(text).toContain('acquisizione clienti');
    expect(text).toContain('reclutamento');
    expect(text).toContain('non va citata ai visitatori');
  });
});
