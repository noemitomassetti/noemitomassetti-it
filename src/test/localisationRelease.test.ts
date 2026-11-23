import { describe, expect, it } from 'vitest';
import { getDictionary, getHreflangAlternates, getLocalizedPath, SUPPORTED_LANGUAGES } from '../lib/i18n';
import { INTAKE_SCHEMAS } from '../lib/concierge/intakeSchemas';
import { PORTFOLIO_CASES } from '../lib/portfolioData';

describe('Pre-release editorial and multilingual integrity checks', () => {
  const languages = ['it', 'en', 'fr', 'es'] as const;
  const expectedIds = ['virtual-assistance', 'translation-localization', 'content-writing', 'online-research', 'digital-support', 'web-landing'];

  it('has a complete service catalogue and core SEO copy in each language', () => {
    expect(SUPPORTED_LANGUAGES).toEqual(expect.arrayContaining([...languages]));
    for (const lang of languages) {
      const dictionary = getDictionary(lang);
      expect(dictionary.meta.homeTitle.trim().length).toBeGreaterThan(20);
      expect(dictionary.meta.homeDesc.trim().length).toBeGreaterThan(60);
      expect(dictionary.meta.servicesTitle.trim().length).toBeGreaterThan(15);
      expect(dictionary.meta.servicesDesc.trim().length).toBeGreaterThan(60);
      expect(dictionary.servicesSection.categories.map((category) => category.id)).toEqual(expectedIds);
      for (const category of dictionary.servicesSection.categories) {
        expect(category.title.trim().length).toBeGreaterThan(4);
        expect(category.description.trim().length).toBeGreaterThan(40);
        expect(category.items.length).toBeGreaterThanOrEqual(4);
      }
      expect(getLocalizedPath('contact', lang)).toBeTruthy();
      expect(getHreflangAlternates('services').some((a) => a.hrefLang === lang)).toBe(true);
    }
  });

  it('supports translation between Italian and each of English, French and Spanish in both directions', () => {
    const choices = INTAKE_SCHEMAS.translation.questions.find((q) => q.id === 'language_pair')?.choices;
    expect(choices?.map((choice) => choice.id)).toEqual(['en_to_it', 'fr_to_it', 'es_to_it', 'it_to_en', 'it_to_fr', 'it_to_es']);
    expect(choices?.every((choice) => choice.label.it.includes('Italiano'))).toBe(true);
  });

  it('describes bidirectional translations in all international service descriptions', () => {
    for (const lang of ['en', 'fr', 'es'] as const) {
      const category = getDictionary(lang).servicesSection.categories.find((service) => service.id === 'translation-localization');
      expect(category).toBeDefined();
      const description = category?.description ?? '';
      expect(description.length).toBeGreaterThan(100);
      expect(description).toMatch(/Italian|italien|italiano/i);
      expect(description).toMatch(/English|anglais|ingl[eé]s/i);
    }
  });

  it('includes localised titles, descriptions and disclaimers for every demonstrative portfolio case', () => {
    expect(PORTFOLIO_CASES.length).toBeGreaterThan(0);
    for (const item of PORTFOLIO_CASES) {
      for (const lang of languages) {
        expect(item.title[lang]?.trim().length).toBeGreaterThan(4);
        expect(item.brief[lang]?.trim().length).toBeGreaterThan(20);
        expect(item.disclaimer[lang]?.trim().length).toBeGreaterThan(30);
      }
    }
  });
});
