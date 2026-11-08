import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import {
  DEEP_PORTFOLIO_ITEMS,
  TRANSLATION_DEEP_CASES,
  OPERATIONAL_DEEP_CASES,
  getDeepPortfolioPath,
  getDeepPortfolioItem,
} from "../lib/portfolioDeepCatalog";
import { switchLanguageUrl } from "../lib/i18n/routes";
import { getPortfolioDocumentPath } from "../lib/portfolioDocumentPaths";
import { PORTFOLIO_DOCUMENTS } from "../lib/portfolioData";
import type { Language } from "../lib/i18n/types";

const LANGS: Language[] = ["it","en","fr","es"];
const DIRECTIONS = ["EN-IT","FR-IT","ES-IT"];
const read = (path:string) => readFileSync(path,"utf8");

describe("Detailed portfolio: complete service coverage",()=>{
  it("provides multiple actual source/target demonstration samples for the three offered translation directions",()=>{
    expect(TRANSLATION_DEEP_CASES.length).toBeGreaterThanOrEqual(6);
    for(const dir of DIRECTIONS){
      const cases=TRANSLATION_DEEP_CASES.filter(sample=>sample.direction===dir);
      expect(cases.length,dir).toBeGreaterThanOrEqual(2);
      for(const item of cases){
        expect(item.source.length).toBeGreaterThanOrEqual(3);
        expect(item.target.length).toBe(item.source.length);
        for(const paragraph of [...item.source,...item.target]){
          expect(paragraph.length,item.id).toBeGreaterThan(90);
        }
        expect(item.terminology.length).toBeGreaterThanOrEqual(2);
        for(const lang of LANGS){
          expect(item.title[lang].trim().length).toBeGreaterThan(12);
          expect(item.context[lang].trim().length).toBeGreaterThan(50);
          expect(item.review[lang].trim().length).toBeGreaterThan(40);
          expect(item.method[lang].trim().length).toBeGreaterThan(35);
          expect(item.output[lang].trim().length).toBeGreaterThan(20);
          for(const choice of item.terminology) expect(choice.explanation[lang].trim().length).toBeGreaterThan(20);
        }
      }
    }
  });
  it("preserves numeric specifications in source-to-target translation samples",()=>{
    const numeric=(value:string)=>Array.from(value.matchAll(new RegExp("[0-9]+(?:[.,][0-9]+)*","g")),m=>m[0].replace(",","."));
    for(const sample of TRANSLATION_DEEP_CASES){
      const source=numeric(sample.source.join(" "));
      const target=numeric(sample.target.join(" "));
      expect(target,sample.id+" numeric values changed").toEqual(source);
    }
  });
  it("includes substantive, not just conceptual, work across all operational services",()=>{
    expect(OPERATIONAL_DEEP_CASES.length).toBeGreaterThanOrEqual(15);
    const required=[
      "inbox-calendar-triage","customer-care-escalations","order-entry-price-list",
      "shared-drive-version-control","online-course-secretariat",
      "research-existing-italian-customers","web-copy-before-after",
      "catalogue-price-list-proofreading","digital-tools-request-workflow",
      "commercial-quote-from-approved-pricelist","international-client-italian-aftercare",
      "course-information-source-audit","existing-client-notice-editing",
      "website-help-page-microcopy","existing-customer-multilingual-email-pack"
    ];
    for(const id of required) expect(OPERATIONAL_DEEP_CASES.some(x=>x.id===id),id).toBe(true);
    const multilingual=OPERATIONAL_DEEP_CASES.find(x=>x.id==="existing-customer-multilingual-email-pack");
    expect(multilingual?.artifacts.map(x=>x.language)).toEqual(["en","fr","es"]);
    expect(read("src/pages/PortfolioDeepCase.tsx")).toContain('lang={art.language ?? "it"}');
    for(const item of OPERATIONAL_DEEP_CASES){
      expect(item.artifacts.length,item.id).toBeGreaterThanOrEqual(2);
      expect(item.workflow.length,item.id).toBeGreaterThanOrEqual(4);
      expect(item.qualityChecks.length,item.id).toBeGreaterThanOrEqual(2);
      for(const art of item.artifacts) {
        expect(art.content.length,item.id).toBeGreaterThan(420);
        for(const lang of LANGS){
          expect(art.title[lang].trim().length).toBeGreaterThan(6);
          expect(art.explanation[lang].trim().length).toBeGreaterThan(25);
        }
      }
      for(const lang of LANGS){
        expect(item.title[lang].trim().length).toBeGreaterThan(12);
        expect(item.scenario[lang].trim().length).toBeGreaterThan(55);
        expect(item.objective[lang].trim().length).toBeGreaterThan(40);
        expect(item.limits[lang].trim().length).toBeGreaterThan(25);
      }
    }
  });
  it("has unique slugs and valid multilingual deep-dossier navigation",()=>{
    const slugs=DEEP_PORTFOLIO_ITEMS.map(x=>x.item.id);
    expect(new Set(slugs).size).toBe(slugs.length);
    const expected=slugs.length*LANGS.length;
    const sitemap=read("public/sitemap.xml");
    let count=0;
    for(const slug of slugs){
      expect(getDeepPortfolioItem(slug)?.item.id).toBe(slug);
      for(const lang of LANGS){
        const path=getDeepPortfolioPath(slug,lang);
        expect(path).toMatch(/\/dossier\/[a-z0-9-]+$/);
        expect(sitemap.includes("https://www.noemitomassetti.it"+path),path).toBe(true);
        expect(switchLanguageUrl(path,"it")).toBe(getDeepPortfolioPath(slug,"it"));
        expect(switchLanguageUrl(path,"en")).toBe(getDeepPortfolioPath(slug,"en"));
        count++;
      }
      expect(sitemap.includes('hreflang="x-default" href="https://www.noemitomassetti.it'+getDeepPortfolioPath(slug,"en")+'"')).toBe(true);
    }
    expect(count).toBe(expected);
  });
  it("contains no duplicate sitemap URL locations, including all deep-case languages",()=>{
    const sitemap=read("public/sitemap.xml");
    const locations=sitemap.split("<loc>").slice(1).map(x=>x.split("</"+"loc>")[0]);
    expect(new Set(locations).size).toBe(locations.length);
    for(const entry of DEEP_PORTFOLIO_ITEMS){
      for(const lang of LANGS){
        const full="https://www.noemitomassetti.it"+getDeepPortfolioPath(entry.item.id,lang);
        expect(locations.filter(x=>x===full),full).toHaveLength(1);
      }
    }
  });
  it("makes all 22 original portfolio documents crawlable in four languages with reciprocal sitemap links",()=>{
    const xml=read("public/sitemap.xml");
    const vercel=JSON.parse(read("vercel.json")) as {rewrites:{source:string;destination:string}[]};
    expect(PORTFOLIO_DOCUMENTS).toHaveLength(22);
    const nums=PORTFOLIO_DOCUMENTS.map(x=>x.num);
    expect(new Set(nums).size).toBe(nums.length);
    for(const doc of PORTFOLIO_DOCUMENTS){
      for(const lang of LANGS){
        const route=getPortfolioDocumentPath(doc.num,lang);
        const full="https://www.noemitomassetti.it"+route;
        expect(xml.includes("<loc>"+full+"</loc>"),full).toBe(true);
        expect(switchLanguageUrl(route,"en"),route).toBe(getPortfolioDocumentPath(doc.num,"en"));
        expect(switchLanguageUrl(route,"it"),route).toBe(getPortfolioDocumentPath(doc.num,"it"));
        const source=route.slice(0,-2)+":num";
        expect(vercel.rewrites.some(x=>x.source===source && x.destination.endsWith("/:num/index.html")),route).toBe(true);
      }
    }
    const locs=xml.split("<loc>").slice(1).map(x=>x.split("</loc>")[0]);
    expect(locs).toHaveLength(268);
    expect(new Set(locs).size).toBe(locs.length);
  });
  it("publishes only fictional sample data with explicit scope and privacy statements",()=>{
    const ui=read("src/pages/PortfolioDeepCase.tsx");
    const catalogue=read("src/components/PortfolioDeepShowcase.tsx");
    const app=read("src/App.tsx");
    expect(ui).toContain("TRANSLATION_SAMPLE_NOTICE");
    expect(ui).toContain("OPERATIONAL_NOTICE");
    expect(catalogue).toContain("getDeepPortfolioPath");
    for(const lang of LANGS) {
      expect(app).toContain('<Route path="'+getDeepPortfolioPath("placeholder",lang).replace("placeholder",":slug")+'" element={<PortfolioDeepCase />} />');
    }
    expect(read("src/lib/portfolioOperationalTypes.ts")).toMatch(/non documenta un incarico realmente svolto/);
    expect(read("src/lib/portfolioDeepTypes.ts")).toMatch(/non è un incarico commissionato/);
  });
});
