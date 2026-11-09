import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { DEEP_PORTFOLIO_ITEMS, getDeepPortfolioItem, TRANSLATION_DEEP_CASES } from "../lib/portfolioDeepCatalog";
import { DIRECTION_LABELS } from "../lib/portfolioDeepTypes";

const publicCopyFiles = [
  "src/lib/serviceScope.ts",
  "src/pages/Index.tsx",
  "src/pages/Services.tsx",
  "src/pages/Portfolio.tsx",
  "src/pages/ItalianLocalisation.tsx",
  "src/lib/pricingData.ts",
  "src/lib/i18n/italianLocalisationMeta.ts",
  "src/lib/i18n/locales/it.ts",
  "src/lib/i18n/locales/en.ts",
  "src/lib/i18n/locales/fr.ts",
  "src/lib/i18n/locales/es.ts",
  "src/lib/portfolioDeepTypes.ts",
];

describe("Professional translation direction and public service scope", () => {
  it("advertises professional translation in both directions between Italian and EN/FR/ES", () => {
    const expectations = {
      it: /dall[’']italiano verso l[’']inglese.*dal francese e dallo spagnolo verso l[’']italiano/i,
      en: /both from Italian into English, French and Spanish and from these languages into Italian/i,
      fr: /de l[’']italien vers l[’']anglais, le français et l[’']espagnol.*de ces langues vers l[’']italien/i,
      es: /tanto del italiano al inglés, francés y español como de estos idiomas al italiano/i,
    } as const;
    for (const lang of ["it", "en", "fr", "es"] as const) {
      const copy = readFileSync(`src/lib/i18n/locales/${lang}.ts`, "utf8");
      expect(copy, lang).toMatch(expectations[lang]);
    }
  });

  it("publishes only English, French and Spanish into Italian translation samples", () => {
    const directions = [...new Set(TRANSLATION_DEEP_CASES.map(item => item.direction))].sort();
    expect(directions).toEqual(["EN-IT", "ES-IT", "FR-IT"]);
    expect(TRANSLATION_DEEP_CASES).toHaveLength(6);
    expect(TRANSLATION_DEEP_CASES.every(sample => ["EN-IT", "FR-IT", "ES-IT"].includes(sample.direction))).toBe(true);
    expect(Object.keys(DIRECTION_LABELS).sort()).toEqual(["EN-IT", "ES-IT", "FR-IT"]);
    for (const id of [
      "it-en-consultancy-services", "it-fr-professional-training", "it-es-product-information",
      "it-en-existing-order", "it-fr-product-order-guide", "it-es-workshop-reminder",
    ]) {
      expect(getDeepPortfolioItem(id)).toBeUndefined();
    }
    expect(DEEP_PORTFOLIO_ITEMS.filter(entry => entry.kind === "translation")).toHaveLength(6);
  });
});
