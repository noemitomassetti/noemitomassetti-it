import { describe, it, expect } from "vitest";
import { PORTFOLIO_CASES, PORTFOLIO_DOCUMENTS } from "../lib/portfolioData";
import { PUBLICATIONS_VISIBLE, PUBLICATIONS, getPublishedBooks } from "../lib/publicationsCatalog";
import { getLocalizedPath, switchLanguageUrl } from "../lib/i18n/routes";
import { DOCUMENT_GUIDES } from "../lib/portfolioDocumentGuides";
import { getPortfolioDocumentPath, getPortfolioDocumentNum } from "../lib/portfolioDocumentPaths";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

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
  it("provides a complete language-specific reader for every work sample", () => {
    expect(Object.keys(DOCUMENT_GUIDES)).toHaveLength(22);
    const caseIds = new Set(PORTFOLIO_CASES.map(c=>c.id));
    for(const doc of PORTFOLIO_DOCUMENTS) {
      const guide = DOCUMENT_GUIDES[doc.num];
      expect(guide).toBeDefined();
      expect(caseIds.has(guide.caseId)).toBe(true);
      for(const lang of ["it","en","fr","es"] as const) {
        expect(guide.focus[lang].length).toBeGreaterThan(45);
        const p = getPortfolioDocumentPath(doc.num,lang);
        expect(getPortfolioDocumentNum(p)).toBe(doc.num);
        const original=readFileSync(resolve(process.cwd(),"public"+doc.url),"utf8");
        expect(original).toContain('Guide multilingue / Multilingual reading guide');
        expect(original).toContain('href="'+p+'"');
      }
    }
  });
  it("preserves a specific sample when switching among four languages",()=>{
    for(const num of ["01","11","17","18","21","22"]) {
      for(const lang of ["it","en","fr","es"] as const) {
        const from=getPortfolioDocumentPath(num,lang);
        for(const dest of ["it","en","fr","es"] as const) {
          expect(switchLanguageUrl(from,dest)).toBe(getPortfolioDocumentPath(num,dest));
        }
      }
    }
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
