import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { TRANSLATION_DEEP_CASES } from "../lib/portfolioDeepCatalog";

const publicCopyFiles = [
  "src/lib/serviceScope.ts",
  "src/pages/Index.tsx",
  "src/pages/Services.tsx",
  "src/pages/Portfolio.tsx",
  "src/lib/i18n/locales/it.ts",
  "src/lib/i18n/locales/en.ts",
  "src/lib/i18n/locales/fr.ts",
  "src/lib/i18n/locales/es.ts",
];

describe("Professional translation direction and public service scope", () => {
  it("does not advertise professional translation from Italian into other languages", () => {
    for (const path of publicCopyFiles) {
      const copy = readFileSync(path, "utf8");
      expect(copy, path).not.toMatch(/IT\s*↔|both directions|dans les deux sens|en ambos sentidos/i);
    }
  });

  it("publishes only English, French and Spanish into Italian translation samples", () => {
    const directions = [...new Set(TRANSLATION_DEEP_CASES.map(item => item.direction))].sort();
    expect(directions).toEqual(["EN-IT", "ES-IT", "FR-IT"]);
    expect(TRANSLATION_DEEP_CASES).toHaveLength(6);
  });
});
