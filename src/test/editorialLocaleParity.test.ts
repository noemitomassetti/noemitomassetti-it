import { describe, expect, it } from "vitest";
import { itLocale } from "../lib/i18n/locales/it";
import { enLocale } from "../lib/i18n/locales/en";
import { frLocale } from "../lib/i18n/locales/fr";
import { esLocale } from "../lib/i18n/locales/es";
import { PUBLICATIONS_VISIBLE } from "../lib/publicationsCatalog";

const locales = { it: itLocale, en: enLocale, fr: frLocale, es: esLocale } as const;
const languages = ["it", "en", "fr", "es"] as const;

const keys = (value: object) => Object.keys(value).sort();
const serviceIds = itLocale.servicesSection.categories.map(category => category.id);
const packageIds = itLocale.productized.packages.map(item => item.id);

describe("Multilingual editorial and navigation parity", () => {
  it("preserves essential navigation, service and contact fields in all four languages", () => {
    for(const lang of languages) {
      const copy = locales[lang];
      expect(copy.lang).toBe(lang);
      for(const section of ["meta","nav","hero","trust","servicesSection","multilingualAdvantage","productized","aboutSection","aboutPage","howWeWork","contactSection","resourcesPage","footer"] as const) {
        expect(keys(copy[section]), lang+" "+section).toEqual(keys(itLocale[section]));
      }
      expect(copy.servicesSection.categories.map(item=>item.id),lang).toEqual(serviceIds);
      expect(copy.productized.packages.map(item=>item.id),lang).toEqual(packageIds);
      expect(copy.contactSection.form.serviceOptions.length,lang).toBe(7);
      expect(copy.contactSection.form.submit.trim(),lang).not.toBe("");
      expect(copy.nav.bookCall.trim(),lang).not.toBe("");
      expect(copy.hero.titleLine1.trim(),lang).not.toBe("");
      expect(copy.hero.headline?.trim(),lang).not.toBe("");
      for(const category of copy.servicesSection.categories){
        expect(category.title.trim(),lang+" "+category.id).not.toBe("");
        expect(category.description.trim(),lang+" "+category.id).not.toBe("");
        expect(category.items.length,lang+" "+category.id).toBeGreaterThan(3);
      }
    }
  });
  it("prevents unfinished drafting labels and the unpublished book section appearing", () => {
    for(const lang of languages){
      const copy=locales[lang];
      const publicCopy=[
        copy.hero.titleLine1,copy.hero.titleHighlight,copy.hero.subtitle,copy.hero.headline,
        copy.servicesSection.title,copy.contactSection.title,copy.contactSection.form.submit,
        copy.resourcesPage.title,copy.aboutPage.title,copy.footer.brandBio,
      ].join(" ");
      expect(publicCopy,lang).not.toMatch(/lorem ipsum|\bTODO\b|\bTBD\b|\bPLACEHOLDER\b/i);
    }
    expect(PUBLICATIONS_VISIBLE).toBe(false);
  });
});
