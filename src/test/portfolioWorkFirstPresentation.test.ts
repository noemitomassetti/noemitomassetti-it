import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { PORTFOLIO_DOCUMENTS } from "../lib/portfolioData";
import { CUSTOMER_CARE_SAMPLES } from "../lib/portfolioCustomerCareSample";

describe("Portfolio showcases tangible work before explaining methodology", () => {
  it("links clearly from seven offered services to existing work examples in all four languages", () => {
    const page = readFileSync("src/pages/Portfolio.tsx", "utf8");
    for (const heading of ["Come lavoro", "How I work", "Ma méthode de travail", "Cómo trabajo"]) {
      expect(page,heading).toContain(heading);
    }
    for (const heading of ["Che cosa faccio, attraverso esempi di lavoro", "What I do, shown through original work samples", "Mes prestations, illustrées par des exemples", "Qué hago: ejemplos de trabajo concretos"]) {
      expect(page,heading).toContain(heading);
    }
    for (const id of ["11","12","13","17","10","07","21"]) {
      expect(page).toContain(`"doc": "${id}"`);
      expect(PORTFOLIO_DOCUMENTS.some(doc=>doc.num===id),id).toBe(true);
    }
    expect(page.indexOf('id="portfolio-what-i-do"')).toBeLessThan(page.indexOf('aria-labelledby="tangible-work"'));
  });

  it("shows three complete invented customer email enquiries and reply drafts", () => {
    expect(CUSTOMER_CARE_SAMPLES).toHaveLength(3);
    for (const x of CUSTOMER_CARE_SAMPLES) {
      expect(x.request.length,x.id).toBeGreaterThan(80);
      expect(x.reply.length,x.id).toBeGreaterThan(180);
      expect(x.note.length,x.id).toBeGreaterThan(70);
      expect(x.subject.length,x.id).toBeGreaterThan(12);
    }
    const frame=readFileSync("src/pages/PortfolioDocument.tsx","utf8");
    expect(frame.indexOf('id="portfolio-work-sample"')).toBeLessThan(frame.indexOf('id="portfolio-reading-guide"'));
    expect(frame).toContain("CUSTOMER_CARE_SAMPLES.map");
    const file=readFileSync("public/portfolio-documenti/doc-11-customer-care-email.html","utf8");
    for(const x of CUSTOMER_CARE_SAMPLES){
      expect(file,x.id).toContain(x.id);
      expect(file,x.id).toContain(x.request.slice(0,30));
      expect(file,x.id).toContain(x.subject);
    }
  });

  it("has locally meaningful titles, descriptions and functional links for all 22 documents",()=>{
    expect(PORTFOLIO_DOCUMENTS).toHaveLength(22);
    for (const doc of PORTFOLIO_DOCUMENTS) {
      expect(doc.url.startsWith("/portfolio-documenti/doc-"),doc.num).toBe(true);
      for(const lang of ["it","en","fr","es"] as const){
        expect(doc.title[lang].length,`${doc.num} ${lang}`).toBeGreaterThan(8);
        expect(doc.subtitle[lang].length,`${doc.num} ${lang}`).toBeGreaterThan(15);
      }
    }
  });
});
