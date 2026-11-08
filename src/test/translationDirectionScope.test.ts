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
  it("does not advertise professional translation from Italian into other languages", () => {
    for (const path of publicCopyFiles) {
      const copy = readFileSync(path, "utf8");
      expect(copy, path).not.toMatch(/(?:IT|Italian|italien|italiano)\s*↔|IT\s*→\s*(?:EN|FR|ES)|both\s+(?:from and into|directions)|from and into Italian|from Italian into (?:English|French|Spanish)|in entrambe le direzioni|dans les deux sens|en ambos sentidos/i);
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
