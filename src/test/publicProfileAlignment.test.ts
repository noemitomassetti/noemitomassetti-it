import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { itLocale } from "../lib/i18n/locales/it";
import { enLocale } from "../lib/i18n/locales/en";
import { frLocale } from "../lib/i18n/locales/fr";
import { esLocale } from "../lib/i18n/locales/es";
import { PRICING_DATA } from "../lib/pricingData";
import { DEEP_PORTFOLIO_ITEMS, TRANSLATION_DEEP_CASES, OPERATIONAL_DEEP_CASES } from "../lib/portfolioDeepCatalog";
import { PORTFOLIO_CASES, PORTFOLIO_DOCUMENTS } from "../lib/portfolioData";

const LANGS = ["it","en","fr","es"] as const;
const locales = {it:itLocale,en:enLocale,fr:frLocale,es:esLocale};
const wantedCategories = [
  "virtual-assistance", "translation-localization", "content-writing",
  "online-research","digital-support","web-landing"
];
const excludedHeading = /^(?:.*)(?:amministrativ|administrativ|administrat|comptabilit|contabil|accounting|bookkeeping|invoic|fatturaz|facturaci[oó]n|lead generation|prospect|telemarketing|recrut|reclutament|captaci[oó]n)/i;
const read = (path:string)=>readFileSync(path,"utf8");

describe("Public profile, website and portfolio: one commercial perimeter",()=>{
  it("keeps the same six public service families and contact choices in four languages",()=>{
    for(const lang of LANGS){
      const copy=locales[lang];
      expect(copy.servicesSection.categories.map(x=>x.id),lang).toEqual(wantedCategories);
      const options=copy.contactSection.form.serviceOptions;
      expect(options,lang).toHaveLength(7);
      for(const [idx,option] of options.entries()){
        expect(option.trim().length,lang+" "+idx).toBeGreaterThan(11);
        expect(option,lang+" "+idx).not.toMatch(excludedHeading);
      }
      for(const cat of copy.servicesSection.categories){
        expect(cat.items.length,lang+" "+cat.id).toBeGreaterThanOrEqual(4);
        expect(cat.title,lang+" "+cat.id).not.toMatch(excludedHeading);
        for(const item of cat.items) expect(item,lang+" "+cat.id).not.toMatch(excludedHeading);
      }
    }
  });
  it("excludes administration, invoicing and acquisition in every published language",()=>{
    expect(itLocale.servicesSection.categories[0].description).toMatch(/amministrazione aziendale.*contabilit[aà].*fatturazione.*acquisizione commerciale/i);
    expect(enLocale.servicesSection.categories[0].description).toMatch(/no telemarketing.*customer acquisition.*bookkeeping.*invoicing.*administration/i);
    expect(frLocale.servicesSection.categories[0].description).toMatch(/pas de t[eé]l[eé]marketing.*prospection.*comptabilit[eé].*facturation.*administrative/i);
    expect(esLocale.servicesSection.categories[0].description).toMatch(/no ofrezco telemarketing.*prospecci[oó]n.*contabilidad.*facturaci[oó]n.*administrativa/i);
    for(const lang of LANGS){
      const research=locales[lang].servicesSection.categories.find(x=>x.id==="online-research");
      expect(research?.description.toLowerCase(),lang).toMatch(/client|prospect|contatti|clientes|commercial/i);
    }
  });
  it("respects the Italy-first international service positioning and EN/FR/ES-to-Italian translation direction",()=>{
    for(const lang of LANGS){
      const cat=locales[lang].servicesSection.categories.find(x=>x.id==="translation-localization");
      expect(cat?.description.length,lang).toBeGreaterThan(160);
      if(lang==="it") expect(cat?.description).toContain("verso l’italiano");
      if(lang==="en") expect(cat?.description).toContain("translate English, French and Spanish into Italian");
      if(lang==="fr") expect(cat?.description).toContain("de l’anglais, du français et de l’espagnol vers l’italien");
      if(lang==="es") expect(cat?.description).toContain("del inglés, francés y español al italiano");
      if (lang!=="it") expect(locales[lang].meta.homeDesc.toLowerCase(),lang).toMatch(/italia|itali|italien/);
    }
    expect(enLocale.servicesSection.categories[0].description).toContain("Italian-language");
    expect(frLocale.servicesSection.categories[0].description).toContain("en italien");
    expect(esLocale.servicesSection.categories[0].description).toContain("en italiano");
  });
  it("has real demonstrative deliverables for each offer, with no client-testimonial claims",()=>{
    expect(TRANSLATION_DEEP_CASES.length).toBe(6);
    expect(OPERATIONAL_DEEP_CASES.length).toBe(15);
    expect(DEEP_PORTFOLIO_ITEMS.length).toBe(21);
    expect(PORTFOLIO_CASES.length).toBe(18);
    expect(PORTFOLIO_DOCUMENTS.length).toBe(22);
    const operations=OPERATIONAL_DEEP_CASES;
    for(const category of ["backoffice","research","writing","web"]){
      expect(operations.filter(x=>x.category===category).length,category).toBeGreaterThanOrEqual(2);
    }
    const intl=operations.find(x=>x.id==="existing-customer-multilingual-email-pack");
    expect(intl?.artifacts.map(x=>x.language)).toEqual(["en","fr","es"]);
    const disclaimer=read("src/lib/portfolioDeepTypes.ts");
    expect(disclaimer).toContain("non è un incarico commissionato");
  });
  it("keeps non-service internal products and old marketing claims out of social metadata",()=>{
    const html=read("index.html");
    expect(html).toContain('<html lang="en">');
    expect(html).not.toMatch(/NoeTom|AI operations assistant|administrative assistance|lead generation/i);
    const build=read("scripts/build-portfolio-social-pages.ts");
    expect(build).toContain("getDeepPortfolioPath");
    expect(build).toContain("ROUTES");
    expect(build).toContain("PAGE_META");
    expect(build).toContain("isFictionalExample");
    expect(read("package.json")).toContain("build-portfolio-social-pages.ts");
  });
  it("keeps quoting and written customer communication separate from invoicing",()=>{
    for(const lang of LANGS){
      expect(PRICING_DATA.categories.find(x=>x.id==="va")?.rate[lang]).toMatch(/25/);
      const opts=locales[lang].contactSection.form.serviceOptions.join(" ");
      expect(opts).not.toMatch(/fattur|invoic|factur|contabilit|accounting/i);
    }
    const writing=OPERATIONAL_DEEP_CASES.find(x=>x.id==="website-help-page-microcopy");
    expect(writing?.limits.it).toContain("non sviluppo");
    const customer=OPERATIONAL_DEEP_CASES.find(x=>x.id==="commercial-quote-from-approved-pricelist");
    expect(customer?.limits.it).toContain("non contabilità");
  });
});
