import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const source = (path: string) => readFileSync(path, "utf8");
const localePaths = ["it", "en", "fr", "es"].map(lang => `src/lib/i18n/locales/${lang}.ts`);

describe("Site copy editorial alignment", () => {
  it("keeps the same degree timeline in all languages and the homepage", () => {
    for (const path of [...localePaths, "src/pages/Index.tsx"]) {
      const text = source(path);
      expect(text).not.toMatch(/2010[–-]2011|2010\s*[-–]\s*2011/);
      expect(text).toMatch(/2010[–-]2012/);
    }
    const home = source("src/pages/Index.tsx");
    expect(home).not.toMatch(/summa cum laude|félicitations du jury|matrícula de honor/i);
    expect(home).toContain("110/110 e lode");
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
    expect(portfolio).toMatch(/fictional data|dati fittizi|données fictives|datos ficticios/i);
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

  it("offers translation with Italian in both directions across all four languages", () => {
    for (const path of localePaths) {
      const copy = source(path);
      expect(copy).toContain("↔");
      expect(copy).not.toMatch(/Non eseguo traduzioni professionali dall.italiano|I do not offer professional translation from Italian|Je ne propose pas de traduction professionnelle de l.italien|No ofrezco traducción profesional del italiano/i);
    }
    const pricing = source("src/lib/pricingData.ts");
    expect(pricing).toContain("IT ↔ EN, IT ↔ FR, IT ↔ ES");
    const localising = source("src/pages/ItalianLocalisation.tsx");
    expect(localising).toContain("I also translate from Italian into English, French and Spanish");
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
