import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const source = (path: string) => readFileSync(path, "utf8");
const localePaths = ["it", "en", "fr", "es"].map(lang => `src/lib/i18n/locales/${lang}.ts`);

describe("Site copy editorial alignment", () => {
  it("keeps academic credentials consistent and omits graduation years in all languages", () => {
    for (const path of [...localePaths, "src/pages/Index.tsx"]) {
      const text = source(path);
      expect(text).not.toMatch(/2009|2010[–-]2012|2010\s*[-–]\s*2012/);
      expect(text).toContain("Università degli Studi di Macerata");
      expect(text).toContain("Scuola Superiore per Mediatori Linguistici di Ancona");
      expect(text).toContain("110/110 e lode");
      expect(text).toMatch(/60 CFU/);
    }
    const home = source("src/pages/Index.tsx");
    expect(home).not.toMatch(/summa cum laude|félicitations du jury|matrícula de honor/i);
  });

  it("does not recycle old client testimonials or unsupported verified-customer claims",()=>{
    for(const path of ["src/pages/Index.tsx",...localePaths]) {
      const copy=source(path);
      expect(copy).not.toMatch(/Cliente verificato|Verified customer/i);
      for(const name of ["Silvia T.","Chiara M.","Luca B."]) expect(copy).not.toContain(name);
      expect(copy).not.toMatch(/Creo siti web e landing page|I create websites and landing pages/i);
    }
  });

  it("does not misrepresent sample projects as real client commissions", () => {
    const home = source("src/pages/Index.tsx");
    expect(home).not.toContain("deliverable reali");
    const portfolio = source("src/pages/Portfolio.tsx");
    expect(portfolio).toMatch(/dimostrativ/i);
    expect(portfolio).toMatch(/inventati|invented|inventés|inventados/i);
  });

  it("describes the actual scope instead of offering administration and prospecting", () => {
    const home = source("src/pages/Index.tsx");
    expect(home).not.toContain("I take charge of the administrative, organizational");
    expect(home).not.toContain("les opérations administratives");
    const questionnaire = source("src/pages/Questionnaire.tsx");
    expect(questionnaire).not.toContain("Qual è il tuo canale principale di acquisizione clienti?");
    expect(questionnaire).not.toContain("Can prospective clients book a discovery call");
    expect(questionnaire).not.toContain("How many hours per week do you spend on administrative chores?");
    for(const path of localePaths) {
      const text=source(path);
      expect(text).toMatch(/italian|italien|italiano|italiana/i);
      expect(text).toMatch(/prospect|acquisiz|acquisit|captaci[oó]n|fattur|invoic|factur/i);
    }
  });

  it("offers translation IT ↔ EN/FR/ES and separates multilingual correspondence from acquisition", () => {
    const descriptions = {
      it: /IT\s*↔\s*EN\/FR\/ES/,
      en: /IT\s*↔\s*EN\/FR\/ES/,
      fr: /IT\s*↔\s*EN\/FR\/ES/,
      es: /IT\s*↔\s*EN\/FR\/ES/
    };
    for (const lang of ["it","en","fr","es"] as const) {
      expect(source(`src/lib/i18n/locales/${lang}.ts`),lang).toMatch(descriptions[lang]);
    }
    const scope = source("src/lib/serviceScope.ts");
    expect(scope).toContain("IT e EN/FR/ES");
    expect(scope).toMatch(/No business administration|Non accetto incarichi di amministrazione/i);
    const localising = source("src/pages/ItalianLocalisation.tsx");
    expect(localising).toContain("both directions between Italian and English, French and Spanish");
    expect(localising).toContain("This page focuses on localisation for the Italian market");
    const contact = source("src/components/ContactForm.tsx");
    expect(contact).not.toContain("NoeTom");
  });

  it("keeps future product and cookie claims appropriately qualified", () => {
    const project = source("src/pages/NoeTom.tsx");
    expect(project).toContain("Ask about the project");
    expect(project).not.toContain("Request a quote' :");
    const cookie = source("src/pages/CookiePolicy.tsx");
    expect(cookie).not.toContain("full Google Consent Mode v2 compliance");
    expect(cookie).toContain("3 November 2026");
    const es = source("src/lib/i18n/locales/es.ts");
    expect(es).not.toContain("matrícula de honor");
    expect(es).not.toContain("con matrícula de honor");
  });

  it("labels invented literal translations honestly", () => {
    const sample=source("src/pages/ItalianLocalisation.tsx");
    expect(sample).not.toContain("Unedited machine translation (clunky calque)");
    expect(sample).toContain("Deliberately literal demonstration");
    expect(sample).toContain("potremo adattare il tuo spazio di lavoro");
  });
});
