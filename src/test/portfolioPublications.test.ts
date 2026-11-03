import { describe, it, expect } from "vitest";
import { PORTFOLIO_CASES, PORTFOLIO_DOCUMENTS } from "../lib/portfolioData";
import { PUBLICATIONS_VISIBLE, PUBLICATIONS, getPublishedBooks } from "../lib/publicationsCatalog";
import { getLocalizedPath } from "../lib/i18n/routes";

describe("Editorial portfolio and future books safeguards", () => {
  it("contains exactly eighteen illustrative cases with unique identifiers", () => {
    expect(PORTFOLIO_CASES.length).toBe(18);
    expect(new Set(PORTFOLIO_CASES.map(c=>c.id)).size).toBe(18);
    for(const caseItem of PORTFOLIO_CASES) {
      for(const lang of ["it","en","fr","es"] as const) {
        expect(caseItem.title[lang].length).toBeGreaterThan(5);
        expect(caseItem.brief[lang].length).toBeGreaterThan(20);
        expect(caseItem.keyDecisions[lang].length).toBeGreaterThanOrEqual(2);
        expect(caseItem.disclaimer[lang].length).toBeGreaterThan(30);
      }
    }
  });
  it("keeps professional translation examples directed into Italian", () => {
    for (const id of ["01-interior-design-localization","11-multilingual-landing-page","13-french-italian-product-localisation","14-spanish-italian-existing-customer-email"]) {
      expect(PORTFOLIO_CASES.find(x=>x.id===id)?.comparison?.targetLang).toBe("IT");
    }
  });
  it("references 22 discoverable illustrative work documents", () => {
    expect(PORTFOLIO_DOCUMENTS.length).toBe(22);
    expect(new Set(PORTFOLIO_DOCUMENTS.map(d=>d.num)).size).toBe(22);
    expect(PORTFOLIO_DOCUMENTS.find(d=>d.num==="21")?.url).toBe("/portfolio-documenti/doc-21-landing-page-contenuti-en-it.html");
  });
  it("does not advertise nonexistent books before launch", () => {
    expect(PUBLICATIONS_VISIBLE).toBe(false);
    expect(PUBLICATIONS).toEqual([]);
    expect(getPublishedBooks()).toEqual([]);
    expect(getLocalizedPath("publications","it")).toBe("/it/libri");
    expect(getLocalizedPath("publications","fr")).toBe("/fr/livres");
    expect(getLocalizedPath("publications","es")).toBe("/es/libros");
  });
});
