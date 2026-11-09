import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { itLocale } from "../lib/i18n/locales/it";
import { enLocale } from "../lib/i18n/locales/en";
import { frLocale } from "../lib/i18n/locales/fr";
import { esLocale } from "../lib/i18n/locales/es";
import { PRICING_DATA } from "../lib/pricingData";

const locales = { it: itLocale, en: enLocale, fr: frLocale, es: esLocale } as const;
const optionalPhrases = {
  it: /può|posso|possono|in base al progetto/i,
  en: /depending on|I can|may include|may involve/i,
  fr: /selon|peut|je peux/i,
  es: /según|puede|puedo/i,
};

describe("Service activities are possibilities, not an all-inclusive package", () => {
  it("clarifies the selection of agreed tasks on every translated service page", () => {
    for (const lang of ["it", "en", "fr", "es"] as const) {
      const copy = locales[lang];
      expect(copy.servicesSection.categories.map(c => c.id)).toEqual([
        "virtual-assistance", "translation-localization", "content-writing",
        "online-research", "digital-support", "web-landing",
      ]);
      expect(copy.servicesSection.subtitle,lang).toMatch(/preventivo|quote|devis|presupuesto/);
      expect(copy.productized.subtitle,lang).toMatch(/non pacchetti|not fixed|non forfaits|no paquetes/);
      expect(copy.productized.customScopeNote,lang).toMatch(/automaticamente|automatically|automatiquement|automáticamente/);
      for (const category of copy.servicesSection.categories) {
        expect(category.description,lang+" "+category.id).toMatch(optionalPhrases[lang]);
        expect(category.items.length,lang+" "+category.id).toBeGreaterThanOrEqual(4);
      }
    }
  });

  it("labels service examples and potential deliverables rather than included work", () => {
    const home = readFileSync("src/pages/Index.tsx","utf8");
    const services = readFileSync("src/pages/Services.tsx","utf8");
    for (const code of [home,services]) {
      expect(code).not.toContain("Cosa include:");
      expect(code).not.toContain("What is included:");
      expect(code).not.toContain("Qué incluye:");
    }
    expect(home).toContain("Esempi di attività possibili:");
    expect(home).toContain("Examples of tasks I can take on:");
    expect(services).toContain("Attività che posso svolgere:");
    expect(services).toContain("Examples of possible deliverables:");
    expect(services).not.toContain("Expected deliverables:");
    expect(services).not.toContain("Risultati previsti:");
  });

  it("does not imply that the hourly rate or hour bundles include the whole catalogue", () => {
    const pricing = PRICING_DATA.disclaimer;
    expect(pricing.it).toContain("non");
    expect(pricing.it).toContain("automaticamente tutte le attività");
    expect(pricing.en).toContain("automatically includes every activity");
    expect(pricing.fr).toContain("automatiquement toutes les tâches");
    expect(pricing.es).toContain("incluyen automáticamente todas las actividades");
  });
});
