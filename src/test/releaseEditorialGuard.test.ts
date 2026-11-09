import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { itLocale } from "../lib/i18n/locales/it";
import { enLocale } from "../lib/i18n/locales/en";
import { frLocale } from "../lib/i18n/locales/fr";
import { esLocale } from "../lib/i18n/locales/es";
import { PRICING_DATA } from "../lib/pricingData";

const read = (p: string) => readFileSync(p, "utf8");
const locales = { it: itLocale, en: enLocale, fr: frLocale, es: esLocale } as const;

describe("Release editorial consistency across four languages", () => {
  it("keeps LinkedIn's service scope in every quote form", () => {
    for (const [lang, locale] of Object.entries(locales)) {
      const form = locale.contactSection.form;
      expect(form.serviceOptions, lang).toHaveLength(7);
      expect(form.serviceOptions[1], lang).toMatch(/IT\s*↔\s*EN\/FR\/ES/);
      expect(form.serviceOptions[0], lang).toMatch(/back.office|segreteria|secretar|secrétariat/i);
      expect(form.serviceOptions[2], lang).toMatch(/scritt|contenut|content|contenus|redacc|rédaction|revis/i);
      expect(form.successDesc, lang).toMatch(/inoltro|relay|transfert|envío|reenvío|envoi/i);
      expect(form.successTitle, lang).not.toMatch(/successfully sent|inviato con successo|envoyé avec succès|enviado con éxito/i);
      expect(locale.meta.homeDesc, lang).toMatch(/traduzion|translation|traduction|traducción/i);
    }
  });

  it("describes internationally available services rather than Italy-only support", () => {
    const va = PRICING_DATA.categories.find(c => c.id === "va");
    const customer = PRICING_DATA.categories.find(c => c.id === "support");
    const translations = PRICING_DATA.categories.find(c => c.id === "trans");
    expect(va).toBeDefined();
    expect(customer).toBeDefined();
    expect(translations).toBeDefined();
    for (const lang of ["en", "fr", "es"] as const) {
      expect(va!.title[lang]).not.toMatch(/Italy|Italie|Italia/i);
      expect(customer!.rateDetail[lang]).not.toMatch(/Italian customers|clients italiens|clientes italianos/i);
      expect(translations!.rateDetail[lang]).toMatch(/IT\s*→\s*EN\/FR\/ES/);
      expect(translations!.rateDetail[lang]).toMatch(/EN\/FR\/ES\s*→\s*IT/);
    }
  });

  it("distinguishes relay acceptance from verified email delivery", () => {
    const adapter = read("src/lib/api/clientAdapter.ts");
    const contact = read("src/components/ContactForm.tsx");
    const privacy = read("src/pages/PrivacyPolicy.tsx");
    expect(adapter).toContain("email_received_by_provider");
    expect(adapter).toContain("la consegna alla casella non è ancora verificata");
    expect(contact).toContain("Delivery to Noemi’s inbox has not been verified");
    expect(privacy).toContain("Web3Forms");
    expect(privacy).toContain("FormSubmit uniquement s’il est activé explicitement");
    expect(privacy).toContain("FormSubmit únicamente si se habilita de forma expresa");
  });

  it("presents customer care naturally in all four language homepages", () => {
    const labels = {
      it: /assistenza clienti/i,
      en: /customer care/i,
      fr: /relation client/i,
      es: /atención al cliente/i,
    };
    for (const lang of ["it", "en", "fr", "es"] as const) {
      const locale = locales[lang];
      expect(locale.hero.subtitle, lang).toMatch(labels[lang]);
      expect(locale.meta.homeDesc, lang).toMatch(labels[lang]);
      expect(locale.hero.subtitle, lang).not.toMatch(/già acquisiti|esistenti|existing customers|clients existants|clientes existentes/i);
    }
    const scope = read("src/lib/serviceScope.ts");
    for (const phrase of ["acquisizione commerciale", "sales prospecting", "prospection", "captación comercial"]) {
      expect(scope).toContain(phrase);
    }
  });

  it("keeps private NoeTom app marketing out of the public homepage", () => {
    const home = read("src/pages/Index.tsx");
    expect(home).not.toMatch(/noetomTeaser|ctaNoeTom|\/noetom(?:["'])/i);
  });
});
