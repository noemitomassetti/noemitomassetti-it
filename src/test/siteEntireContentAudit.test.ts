import {describe,expect,it} from "vitest";
import {itLocale} from "../lib/i18n/locales/it";
import {enLocale} from "../lib/i18n/locales/en";
import {frLocale} from "../lib/i18n/locales/fr";
import {esLocale} from "../lib/i18n/locales/es";
import {getBlogPosts,getBlogPostAlternates} from "../lib/blogData";
import {PORTFOLIO_CASES,PORTFOLIO_DOCUMENTS,DEMO_DISCLAIMER} from "../lib/portfolioData";
import {TRANSLATION_DEEP_CASES,OPERATIONAL_DEEP_CASES} from "../lib/portfolioDeepCatalog";
import {TRANSLATION_SAMPLE_NOTICE} from "../lib/portfolioDeepTypes";
import {OPERATIONAL_NOTICE} from "../lib/portfolioOperationalTypes";
import {PRICING_DATA} from "../lib/pricingData";
import {PUBLICATIONS_VISIBLE} from "../lib/publicationsCatalog";
import {readFileSync} from "node:fs";

const languages=["it","en","fr","es"] as const;
const locales={it:itLocale,en:enLocale,fr:frLocale,es:esLocale};
const placeholder=/\blorem ipsum\b|\b(?:TODO|TBD|FIXME)\b|\[insert here\]|\[da completare\]/i;
const nonBlank=(s:string,minimum=8)=>typeof s==="string"&&s.trim().length>=minimum&&!placeholder.test(s);
const checkLocale=(field:Record<string,string>,minimum=8)=>{
  for(const lang of languages) expect(nonBlank(field[lang],minimum),`${lang}: ${String(field[lang]).slice(0,75)}`).toBe(true);
};

describe("Complete public-site content integrity — IT/EN/FR/ES",()=>{
  it("keeps core UI, service categories and CTA copy meaningful in every language",()=>{
    const reference=JSON.stringify(Object.keys(itLocale).sort());
    for(const lang of languages){
      const d=locales[lang];
      expect(JSON.stringify(Object.keys(d).sort()),lang).toBe(reference);
      for(const key of ["homeTitle","homeDesc","servicesTitle","servicesDesc","aboutTitle","aboutDesc","contactTitle","contactDesc"] as const)
        expect(nonBlank(d.meta[key],key.endsWith("Desc")?55:12),lang+" "+key).toBe(true);
      for(const key of ["titleLine1","titleHighlight","subtitle","desc1","desc2"] as const)
        expect(nonBlank(d.hero[key],10),lang+" hero."+key).toBe(true);
      expect(d.nav.bookCall,lang).toMatch(/preventivo|quote|devis|presupuesto/i);
      expect(d.contactSection.form.serviceOptions,lang).toHaveLength(7);
      expect(d.servicesSection.categories.map(x=>x.id),lang).toEqual([
        "virtual-assistance","translation-localization","content-writing",
        "online-research","digital-support","web-landing"
      ]);
      for(const cat of d.servicesSection.categories) {
        expect(nonBlank(cat.title),lang+" "+cat.id+" title").toBe(true);
        expect(nonBlank(cat.description,90),lang+" "+cat.id+" description").toBe(true);
        expect(cat.items.length,lang+" "+cat.id+" options").toBeGreaterThanOrEqual(4);
        for(const item of cat.items)expect(nonBlank(item,8),lang+" "+cat.id).toBe(true);
      }
    }
    expect(PUBLICATIONS_VISIBLE).toBe(false);
  });

  it("keeps all real website tariffs synchronized and clearly indicative",()=>{
    expect(PRICING_DATA.categories.map(c=>c.id)).toEqual(["va","support","trans"]);
    for(const lang of languages) {
      const disclaimer=PRICING_DATA.disclaimer[lang];
      expect(nonBlank(disclaimer,180),lang).toBe(true);
      expect(disclaimer).toMatch(/preventivo|written quote|devis|presupuesto/i);
      for(const cat of PRICING_DATA.categories) {
        expect(nonBlank(cat.title[lang]),lang).toBe(true);
        expect(nonBlank(cat.rate[lang]),lang).toBe(true);
        expect(cat.items[lang].length,lang+" "+cat.id).toBeGreaterThanOrEqual(4);
      }
      expect(PRICING_DATA.categories[2].rateDetail[lang]).toMatch(/IT\s*→\s*EN\/FR\/ES/);
    }
  });

  it("reviews all translated articles for original localized body, metadata and stable route",()=>{
    const source=getBlogPosts("it");
    expect(source.length).toBeGreaterThanOrEqual(12);
    for(const lang of languages){
      const posts=getBlogPosts(lang);
      expect(posts.map(p=>p.id),lang).toEqual(source.map(p=>p.id));
      const slugs=new Set<string>();
      for(const post of posts){
        expect(nonBlank(post.title,15),lang+" article "+post.id+" title").toBe(true);
        expect(nonBlank(post.excerpt,45),lang+" article "+post.id+" excerpt").toBe(true);
        expect(nonBlank(post.content,250),lang+" article "+post.id+" body").toBe(true);
        expect(post.content,lang+" article "+post.id).toMatch(/<p>|<h2>/i);
        expect(post.slug,lang+" article "+post.id).toMatch(/^[a-z0-9-]+$/);
        expect(slugs.has(post.slug),lang+" duplicate slug "+post.slug).toBe(false);
        slugs.add(post.slug);
        expect(getBlogPostAlternates(post.id).some(x=>x.hrefLang===lang)).toBe(true);
      }
    }
  });

  it("checks all 18 case studies and 22 standalone portfolio documents in four languages",()=>{
    expect(PORTFOLIO_CASES.length).toBe(18);
    expect(PORTFOLIO_DOCUMENTS.length).toBe(22);
    for(const lang of languages) expect(DEMO_DISCLAIMER[lang]).toMatch(/fittizi|fictional|ficti|fictici/i);
    for(const item of PORTFOLIO_CASES){
      checkLocale(item.title,10);
      checkLocale(item.subtitle,10);
      checkLocale(item.brief,20);
      checkLocale(item.objective,20);
      checkLocale(item.approach,20);
      checkLocale(item.deliverable,12);
      checkLocale(item.disclaimer,30);
    }
    for(const document of PORTFOLIO_DOCUMENTS){
      checkLocale(document.title,10);
      checkLocale(document.subtitle,15);
      expect(document.url).toMatch(/^\/portfolio-documenti\/doc-\d\d-[-a-z0-9]+\.html$/);
    }
  });

  it("covers all in-depth translation and operational dossiers with localized explanations",()=>{
    expect(TRANSLATION_DEEP_CASES.length).toBe(11);
    expect(OPERATIONAL_DEEP_CASES.length).toBe(15);
    const directions=new Set(TRANSLATION_DEEP_CASES.map(x=>x.direction));
    expect([...directions].sort()).toEqual(["EN-IT","ES-IT","FR-IT","IT-EN","IT-ES","IT-FR"].sort());
    for(const lang of languages) {
      expect(TRANSLATION_SAMPLE_NOTICE[lang],lang).toMatch(/fittizi|fictional|ficti|fictici/i);
      expect(OPERATIONAL_NOTICE[lang],lang).toMatch(/fittizi|fictional|ficti|fictici/i);
    }
    for(const item of TRANSLATION_DEEP_CASES){
      checkLocale(item.title,8);
      checkLocale(item.context,20);
      checkLocale(item.method,20);
      checkLocale(item.review,20);
      checkLocale(item.output,12);
      expect(item.source.length).toBeGreaterThan(0);
      expect(item.target.length).toBeGreaterThan(0);
      expect(item.terminology.length).toBeGreaterThan(0);
    }
    for(const item of OPERATIONAL_DEEP_CASES) {
      checkLocale(item.title,8);
      checkLocale(item.scenario,20);
      checkLocale(item.objective,15);
      checkLocale(item.limits,15);
      checkLocale(item.handoff,15);
      expect(item.artifacts.length).toBeGreaterThan(0);
      for(const art of item.artifacts){
        checkLocale(art.title,6);
        checkLocale(art.explanation,12);
        expect(nonBlank(art.content,40),item.id).toBe(true);
      }
    }
  });

  it("removes obsolete customer-acquisition phrasing and protects core public copy",()=>{
    const files=[
      "src/pages/Resources.tsx","src/pages/Index.tsx",
      "src/lib/i18n/locales/it.ts","src/lib/i18n/locales/en.ts",
      "src/lib/i18n/locales/fr.ts","src/lib/i18n/locales/es.ts",
    ];
    for(const file of files){
      const content=readFileSync(file,"utf8");
      expect(content,file).not.toMatch(/clienti già acquisiti|\bLorem ipsum\b|\bTODO\b/i);
      expect(content,file).not.toMatch(/I create websites and landing pages|Creo siti web e landing page/i);
    }
    expect(itLocale.nav.bookCall).toBe("Richiedi un preventivo");
    expect(frLocale.nav.about).toBe("À propos");
    expect(esLocale.nav.about).toBe("Sobre mí");
  });
});
