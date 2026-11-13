import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { DEEP_PORTFOLIO_ITEMS, OPERATIONAL_DEEP_CASES, TRANSLATION_DEEP_CASES, getDeepPortfolioItem, getDeepPortfolioPath } from "../lib/portfolioDeepCatalog";
import { PORTFOLIO_SERVICE_GROUPS } from "../components/PortfolioServiceIndex";
import { PORTFOLIO_DOCUMENTS } from "../lib/portfolioData";
const LANGS = ["it", "en", "fr", "es"] as const;
const ADDED_OPERATIONS = [
 "inbox-handover-cover-full", "orders-multi-item-exception-control", "shared-drive-handover-client-documents",
 "diary-conflict-multilingual-rebooking", "written-customer-complaint-four-language-response", "course-participant-support-complete-pack",
 "client-records-data-quality-complete", "practical-research-options-decision-pack", "italy-website-service-copy-full-localisations",
] as const;
const ADDED_TRANSLATIONS = [
 "en-it-complete-italian-onboarding-communications","fr-it-complete-product-information-and-faq","es-it-complete-customer-help-policy-and-replies",
 "it-en-full-operations-sop-handover","it-fr-complete-meeting-followup-package","it-es-complete-service-information-and-faq",
] as const;
// Editorial policy: work samples are presented as independent original projects,
// with consistent acknowledgement that they were not client commissions.
const discouragedLabels = /\b(?:fittizi?|fittizie|inventat[oaie]|fictional|invented|fictifs?|fictives?|ficticios?|ficticias|inventad[oa]s?)\b/i;

describe("Expanded NoeTom portfolio editorial and navigational integrity", () => {
 it("contains at least sixty-one individually accessible, original work dossiers", () => {
  expect(TRANSLATION_DEEP_CASES.length).toBeGreaterThanOrEqual(23);
  expect(OPERATIONAL_DEEP_CASES.length).toBeGreaterThanOrEqual(38);
  expect(DEEP_PORTFOLIO_ITEMS.length).toBeGreaterThanOrEqual(61);
  expect(new Set(DEEP_PORTFOLIO_ITEMS.map(x=>x.item.id)).size).toBe(DEEP_PORTFOLIO_ITEMS.length);
  for(const id of [...ADDED_OPERATIONS, ...ADDED_TRANSLATIONS]) expect(getDeepPortfolioItem(id), id).toBeDefined();
 });
 it("includes at least 37 actual complete operational deliverables in the nine new dossiers", () => {
  let documents=0;const languages=new Set<string>();
  for(const id of ADDED_OPERATIONS){
   const entry=getDeepPortfolioItem(id);
   expect(entry?.kind,id).toBe("operations");
   if(!entry || entry.kind!=="operations")continue;
   expect(entry.item.artifacts.length,id).toBeGreaterThanOrEqual(4);
   expect(entry.item.workflow.length,id).toBeGreaterThanOrEqual(3);
   for(const art of entry.item.artifacts){
    documents++;
    expect(art.content.length,id+" document too short").toBeGreaterThan(500);
    expect(art.language,id+" document language not declared").toBeDefined();
    languages.add(art.language!);
    expect(art.content,id).not.toMatch(discouragedLabels);
    for(const lang of LANGS){
      expect(art.title[lang].trim().length,id+" title "+lang).toBeGreaterThan(8);
      expect(art.explanation[lang].trim().length,id+" explanation "+lang).toBeGreaterThan(20);
    }
   }
   for(const lang of LANGS){
    expect(entry.item.title[lang].length).toBeGreaterThan(12);
    expect(entry.item.scenario[lang].length).toBeGreaterThan(55);
    expect(entry.item.objective[lang].length).toBeGreaterThan(45);
    expect(entry.item.handoff[lang].length).toBeGreaterThan(20);
   }
  }
  expect(documents).toBeGreaterThanOrEqual(37);
  expect([...languages].sort()).toEqual([...LANGS].sort());
 });
 it("includes six full, paired translations with original source and target documents", () => {
  const dirs=new Set<string>();
  for(const id of ADDED_TRANSLATIONS){
   const entry=getDeepPortfolioItem(id);
   expect(entry?.kind,id).toBe("translation");
   if(!entry || entry.kind!=="translation")continue;
   dirs.add(entry.item.direction);
   expect(entry.item.source.length,id).toBeGreaterThanOrEqual(5);
   expect(entry.item.source.length,id).toBe(entry.item.target.length);
   expect(entry.item.source.join(" ").length,id).toBeGreaterThan(1500);
   expect(entry.item.target.join(" ").length,id).toBeGreaterThan(1500);
   expect(entry.item.terminology.length,id).toBeGreaterThanOrEqual(3);
   expect(entry.item.source.join(" ") + entry.item.target.join(" "),id).not.toMatch(discouragedLabels);
   for(const lang of LANGS){
    expect(entry.item.context[lang].trim().length,id+" context "+lang).toBeGreaterThan(55);
    expect(entry.item.method[lang].trim().length,id+" method "+lang).toBeGreaterThan(40);
    expect(entry.item.review[lang].trim().length,id+" review "+lang).toBeGreaterThan(35);
   }
  }
  expect([...dirs].sort()).toEqual(["EN-IT","ES-IT","FR-IT","IT-EN","IT-ES","IT-FR"].sort());
 });
 it("lists several projects per service and all sixty new portfolio URLs in the sitemap", () => {
  const xml=readFileSync("public/sitemap.xml","utf8");
  expect(PORTFOLIO_SERVICE_GROUPS.length).toBeGreaterThanOrEqual(14);
  for(const group of PORTFOLIO_SERVICE_GROUPS){
   expect(group.ids.length,group.label.it).toBeGreaterThanOrEqual(3);
   for(const id of group.ids)expect(getDeepPortfolioItem(id),id).toBeDefined();
   for(const lang of LANGS)expect(group.label[lang].trim().length).toBeGreaterThan(8);
  }
  for(const id of [...ADDED_OPERATIONS, ...ADDED_TRANSLATIONS]){
    for(const lang of LANGS){
      const full="https://www.noemitomassetti.it"+getDeepPortfolioPath(id,lang);
      expect(xml.split("<loc>"+full+"</loc>").length-1,full).toBe(1);
    }
    expect(xml).toContain('hreflang="x-default" href="https://www.noemitomassetti.it'+getDeepPortfolioPath(id,"en")+'"');
  }
 });
 it("retains 22 original complete HTML documents without obsolete work-sample labels", () => {
  expect(PORTFOLIO_DOCUMENTS).toHaveLength(22);
  for(const doc of PORTFOLIO_DOCUMENTS){
   const html=readFileSync("public"+doc.url,"utf8");
   expect(html.length,doc.num).toBeGreaterThan(3500);
   expect(html,doc.num).not.toMatch(discouragedLabels);
   expect(html,doc.num).toMatch(/(?:non (?:commissionat|provenient|tratt)|non è un incarico|non si tratta di un incarico|commissioned|non commandé|no realizado por encargo|portfolio|dimostrativo|independent)/i);
  }
 });
});
