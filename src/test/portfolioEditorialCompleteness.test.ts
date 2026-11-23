import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { PORTFOLIO_CASES, PORTFOLIO_DOCUMENTS } from "../lib/portfolioData";
import { DOCUMENT_CONTEXT, DOCUMENT_EXACT_EXCERPTS } from "../lib/portfolioDocumentGuides";
import { TRANSLATION_DEEP_CASES, OPERATIONAL_DEEP_CASES } from "../lib/portfolioDeepCatalog";
import { CUSTOMER_CARE_SAMPLES } from "../lib/portfolioCustomerCareSample";

const LANGUAGES = ["it", "en", "fr", "es"] as const;
const read = (file: string) => readFileSync(file, "utf8");

describe("NoeTom portfolio editorial completeness and source-of-truth checks", () => {
  it("maintains 18 reviewed summary cases, 26 complete dossiers and 22 source documents", () => {
    expect(PORTFOLIO_CASES).toHaveLength(18);
    expect(TRANSLATION_DEEP_CASES).toHaveLength(11);
    expect(OPERATIONAL_DEEP_CASES).toHaveLength(15);
    expect(PORTFOLIO_DOCUMENTS).toHaveLength(22);
    expect(new Set(PORTFOLIO_CASES.map(x => x.id)).size).toBe(18);
    expect(new Set([...TRANSLATION_DEEP_CASES, ...OPERATIONAL_DEEP_CASES].map(x => x.id)).size).toBe(26);
    expect(new Set(PORTFOLIO_DOCUMENTS.map(x => x.num)).size).toBe(22);
  });
  it("offers an actual written result for each deep dossier and the relevant language context", () => {
    for (const item of TRANSLATION_DEEP_CASES) {
      expect(item.source.length,item.id).toBeGreaterThanOrEqual(3);
      expect(item.source.length,item.id).toBe(item.target.length);
      expect(item.source.join("").length,item.id).toBeGreaterThan(350);
      expect(item.target.join("").length,item.id).toBeGreaterThan(300);
      expect(item.terminology.length,item.id).toBeGreaterThanOrEqual(2);
      for (const lang of LANGUAGES) {
        for (const field of ["title", "context", "method", "review", "output"] as const)
          expect(item[field][lang].trim().length,`${item.id} ${lang} ${field}`).toBeGreaterThan(30);
      }
    }
    for (const item of OPERATIONAL_DEEP_CASES) {
      expect(item.artifacts.length,item.id).toBeGreaterThanOrEqual(3);
      for (const artifact of item.artifacts) {
        expect(artifact.content.length,item.id).toBeGreaterThan(450);
        for (const lang of LANGUAGES) {
          expect(artifact.title[lang].trim(),`${item.id} ${lang}`).not.toBe("");
          expect(artifact.explanation[lang].trim(),`${item.id} ${lang}`).not.toBe("");
        }
      }
      for (const lang of LANGUAGES) {
        expect(item.title[lang].length,`${item.id} ${lang}`).toBeGreaterThan(12);
        expect(item.handoff[lang].length,`${item.id} ${lang}`).toBeGreaterThan(20);
        expect(item.limits[lang].length,`${item.id} ${lang}`).toBeGreaterThan(20);
      }
    }
  });
  it("explains each of the 22 source documents specifically in all four languages", () => {
    expect(DOCUMENT_EXACT_EXCERPTS.size).toBe(0);
    for (const doc of PORTFOLIO_DOCUMENTS) {
      const details = DOCUMENT_CONTEXT[doc.num];
      expect(details,`missing document context ${doc.num}`).toBeDefined();
      for (const lang of LANGUAGES) {
        const context = details?.[lang];
        expect(context,`${doc.num}/${lang}`).toBeDefined();
        if (!context) continue;
        for (const field of ["brief","material","objective","approach","deliverable"] as const)
          expect(context[field].trim().length,`${doc.num}/${lang}/${field}`).toBeGreaterThan(24);
        expect(context.decisions.length,`${doc.num}/${lang}`).toBeGreaterThanOrEqual(2);
        expect(doc.title[lang].length,`${doc.num}/${lang}`).toBeGreaterThan(12);
        expect(doc.subtitle[lang].length,`${doc.num}/${lang}`).toBeGreaterThan(18);
      }
      const file = "public" + doc.url;
      const html = read(file);
      const plainText = (html.split("<body")[1] ?? html).replace(/<[^>]+>/g," ").trim();
      expect(html.toLowerCase().includes("<html"),`HTML ${file}`).toBe(true);
      expect(html,`guide ${file}`).toContain("Guide multilingue / Multilingual reading guide");
      expect(plainText.length,`work sample ${file}`).toBeGreaterThan(1300);
      expect(html,`work formatting ${file}`).toMatch(/<table|<pre|class="letter"|class="split"|class="comparison-grid"|class="dual-clause"|<section/i);
    }
  });
  it("maintains concrete, matching DOC07–11 evidence instead of unsupported promises",()=>{
    const case07=PORTFOLIO_CASES.find(x=>x.id==="07-supplier-research-benchmark");
    expect(case07?.tableData?.rows.it).toHaveLength(4);
    const case08=PORTFOLIO_CASES.find(x=>x.id==="08-competitor-benchmarking");
    expect(case08?.tableData?.rows.it).toHaveLength(4);
    const case09=PORTFOLIO_CASES.find(x=>x.id==="09-freelance-back-office-system");
    expect(case09?.tableData?.rows.it).toHaveLength(6);
    const case15=PORTFOLIO_CASES.find(x=>x.id==="15-italian-written-customer-care");
    expect(case15?.tableData?.rows.it).toHaveLength(3);
    const customerDossier=OPERATIONAL_DEEP_CASES.find(x=>x.id==="customer-care-escalations");
    expect(customerDossier?.artifacts[0].content).toContain("CC-201");
    expect(customerDossier?.artifacts[1].content).toContain("CC-202");
    expect(customerDossier?.artifacts[2].content).toContain("CC-203");
    for(const sample of CUSTOMER_CARE_SAMPLES) {
      const full=read("public/portfolio-documenti/doc-11-customer-care-email.html");
      expect(full).toContain(sample.subject);
      expect(full).toContain(sample.id);
    }
    expect(read("public/portfolio-documenti/doc-06-microcopy-design-system.html")).not.toContain("Conformità WCAG 2.1 AA");
    expect(read("public/portfolio-documenti/doc-07-benchmark-fornitori-logistica.html")).not.toContain("EcoPack Solutions");
    expect(read("public/portfolio-documenti/doc-09-procedura-operativa-backoffice.html")).not.toContain("Inbox Zero");
    expect(read("public/portfolio-documenti/doc-10-scheda-revisione-editoriale.html")).not.toContain("risposta confermata entro 24 ore");
    const editor=PORTFOLIO_CASES.find(x=>x.id==="10-writing-editorial-revision");
    expect(editor?.comparison?.localizedText).toContain("nuova procedura");
    expect(editor?.keyDecisions.en.join(" ")).not.toMatch(/40%|doubled message retention/);
  });
  it("puts working examples ahead of international summaries in all eight mid-series documents", () => {
    for(let i=12;i<=19;i++){
      const doc=PORTFOLIO_DOCUMENTS.find(x=>x.num===String(i).padStart(2,"0"));
      expect(doc).toBeDefined();
      const html=read("public"+doc!.url);
      const guide=html.indexOf("Guida internazionale · International reading guide");
      expect(guide,`guide for ${i}`).toBeGreaterThan(0);
      expect(html.indexOf("<section><h2>"),`work before guide ${i}`).toBeLessThan(guide);
      expect(html).not.toContain("Stato: specimen");
      expect(html).not.toContain("Le eventuali automazioni AI");
    }
  });
});
