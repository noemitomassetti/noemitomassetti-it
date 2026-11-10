import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { itLocale } from "../lib/i18n/locales/it";
import { enLocale } from "../lib/i18n/locales/en";
import { frLocale } from "../lib/i18n/locales/fr";
import { esLocale } from "../lib/i18n/locales/es";
import { getDeepPortfolioItem, getDeepPortfolioPath } from "../lib/portfolioDeepCatalog";
import { SERVICE_DECISION_PATHS } from "../lib/serviceDecisionPaths";
import { COLLABORATION_GUIDANCE } from "../lib/collaborationGuidance";
import { PRICING_DATA } from "../lib/pricingData";

const locales = { it: itLocale, en: enLocale, fr: frLocale, es: esLocale } as const;
const langs = ["it", "en", "fr", "es"] as const;

describe("Client need to service to fictional portfolio evidence", () => {
  it("maps every approved service to a real existing dossier", () => {
    const allIds = Object.keys(SERVICE_DECISION_PATHS).sort();
    for (const lang of langs) {
      expect(locales[lang].servicesSection.categories.map(s => s.id).sort()).toEqual(allIds);
      for (const [serviceId, info] of Object.entries(SERVICE_DECISION_PATHS)) {
        expect(info.need[lang].trim().length,serviceId).toBeGreaterThan(25);
        expect(info.possibleOutcome[lang].trim().length,serviceId).toBeGreaterThan(25);
        expect(info.dossierId).toMatch(/^[a-z0-9-]+$/);
        expect(getDeepPortfolioItem(info.dossierId),serviceId).toBeDefined();
        expect(getDeepPortfolioPath(info.dossierId,lang)).toContain("/dossier/");
      }
    }
  });

  it("keeps four collaboration examples distinct from purchased hour packages", () => {
    for(const lang of langs) {
      for(const pkg of locales[lang].productized.packages) {
        expect(COLLABORATION_GUIDANCE[pkg.id]?.[lang]?.length,lang+" "+pkg.id).toBeGreaterThan(25);
      }
      expect(locales[lang].productized.packages).toHaveLength(4);
      expect(PRICING_DATA.disclaimer[lang].length).toBeGreaterThan(200);
    }
  });

  it("offers meaningful accessible paths to existing dossier examples", () => {
    for(const file of ["src/pages/Index.tsx","src/pages/Services.tsx"]) {
      const source=readFileSync(file,"utf8");
      expect(source).toContain("SERVICE_DECISION_PATHS");
      expect(source).toContain("getDeepPortfolioPath");
      expect(source).toContain("focus-visible:outline");
    }
    const services=readFileSync("src/pages/Services.tsx","utf8");
    expect(services).toContain("COLLABORATION_GUIDANCE");
  });
});
