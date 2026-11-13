import { describe, it, expect } from "vitest";
import { DEEP_PORTFOLIO_ITEMS, TRANSLATION_DEEP_CASES, OPERATIONAL_DEEP_CASES, getDeepPortfolioItem, getDeepPortfolioPath } from "../lib/portfolioDeepCatalog";
import { PORTFOLIO_SERVICE_TRACKS } from "../components/PortfolioServiceLibrary";
import { OPERATIONAL_SAMPLES_E } from "../lib/portfolioOperationalSamplesE";
import { OPERATIONAL_SAMPLES_F } from "../lib/portfolioOperationalSamplesF";
import { OPERATIONAL_SAMPLES_G } from "../lib/portfolioOperationalSamplesG";
import { OPERATIONAL_SAMPLES_H } from "../lib/portfolioOperationalSamplesH";
import { TRANSLATION_SAMPLES_EXPANSION_A } from "../lib/portfolioTranslationSamplesExpansionA";
import { TRANSLATION_SAMPLES_EXPANSION_B } from "../lib/portfolioTranslationSamplesExpansionB";

const LANGUAGES=["it","en","fr","es"] as const;
const DIRECTIONS=["EN-IT","FR-IT","ES-IT","IT-EN","IT-FR","IT-ES"] as const;

describe("Complete original portfolio, across services and languages",()=>{
  it("covers all 16 service areas with multiple real, working dossier links",()=>{
    expect(PORTFOLIO_SERVICE_TRACKS).toHaveLength(16);
    expect(new Set(PORTFOLIO_SERVICE_TRACKS.map(s=>s.id)).size).toBe(16);
    for(const track of PORTFOLIO_SERVICE_TRACKS){
      expect(track.ids.length).toBeGreaterThanOrEqual(3);
      expect(new Set(track.ids).size).toBe(track.ids.length);
      for(const lang of LANGUAGES){
        expect(track.title[lang].length).toBeGreaterThan(8);
        expect(track.description[lang].length).toBeGreaterThan(25);
      }
      for(const id of track.ids){
        const result=getDeepPortfolioItem(id);
        expect(result, "missing linked dossier "+id).toBeDefined();
        for(const lang of LANGUAGES) expect(getDeepPortfolioPath(id,lang)).toContain("/dossier/"+id);
      }
    }
    expect(new Set(DEEP_PORTFOLIO_ITEMS.map(entry=>entry.item.id)).size).toBe(DEEP_PORTFOLIO_ITEMS.length);
    expect(OPERATIONAL_DEEP_CASES.length).toBeGreaterThanOrEqual(29);
    expect(TRANSLATION_DEEP_CASES.length).toBeGreaterThanOrEqual(17);
  });

  it("provides complete source and target copy in every translation direction",()=>{
    const newCases=[...TRANSLATION_SAMPLES_EXPANSION_A,...TRANSLATION_SAMPLES_EXPANSION_B];
    expect(newCases).toHaveLength(6);
    for(const direction of DIRECTIONS){
      expect(TRANSLATION_DEEP_CASES.filter(caseItem=>caseItem.direction===direction).length).toBeGreaterThanOrEqual(2);
      expect(newCases.some(c=>c.direction===direction)).toBe(true);
    }
    for(const entry of newCases){
      expect(entry.source.length).toBeGreaterThanOrEqual(4);
      expect(entry.source.length).toBe(entry.target.length);
      expect(entry.source.join(" ").split(/\s+/).length).toBeGreaterThanOrEqual(200);
      expect(entry.target.join(" ").split(/\s+/).length).toBeGreaterThanOrEqual(200);
      expect(entry.terminology.length).toBeGreaterThanOrEqual(3);
      for(const lang of LANGUAGES){
        expect(entry.context[lang].length).toBeGreaterThan(35);
        expect(entry.method[lang].length).toBeGreaterThan(20);
        expect(entry.review[lang].length).toBeGreaterThan(20);
      }
    }
  });

  it("adds substantial full operational materials, including texts authored in all four languages",()=>{
    const newCases=[...OPERATIONAL_SAMPLES_E,...OPERATIONAL_SAMPLES_F,...OPERATIONAL_SAMPLES_G,...OPERATIONAL_SAMPLES_H];
    expect(newCases).toHaveLength(14);
    const languages=new Set<string>();
    for(const entry of newCases){
      expect(entry.artifacts.length).toBeGreaterThanOrEqual(4);
      expect(entry.workflow.length).toBeGreaterThanOrEqual(3);
      expect(entry.artifacts.reduce((sum,a)=>sum+a.content.trim().length,0)).toBeGreaterThan(2500);
      for(const art of entry.artifacts){
        expect(art.content.trim().length).toBeGreaterThan(450);
        languages.add(art.language || "it");
        for(const lang of LANGUAGES){
          expect(art.title[lang].trim()).not.toBe("");
          expect(art.explanation[lang].length).toBeGreaterThan(18);
        }
      }
      for(const lang of LANGUAGES){
        expect(entry.title[lang].length).toBeGreaterThan(14);
        expect(entry.scenario[lang].length).toBeGreaterThan(30);
        expect(entry.limits[lang].length).toBeGreaterThan(35);
      }
    }
    expect([...languages].sort()).toEqual([...LANGUAGES].sort());
  });

  it("includes original full editorial articles, newsletters, and real social post text in four languages",()=>{
    const article=OPERATIONAL_SAMPLES_G.find(s=>s.id==="blog-editorial-feature-four-languages");
    const newsletter=OPERATIONAL_SAMPLES_G.find(s=>s.id==="newsletter-existing-clients-multilingual");
    const social=OPERATIONAL_SAMPLES_H.find(s=>s.id==="professional-social-editorial-series-italy");
    const profile=OPERATIONAL_SAMPLES_H.find(s=>s.id==="online-service-information-multilingual-profile-pack");
    expect(article?.artifacts).toHaveLength(4);
    for(const art of article?.artifacts||[]) expect(art.content.split(/\s+/).length).toBeGreaterThanOrEqual(350);
    expect(newsletter?.artifacts.length).toBeGreaterThanOrEqual(5);
    expect(social?.artifacts.length).toBeGreaterThanOrEqual(5);
    expect(profile?.artifacts.length).toBeGreaterThanOrEqual(4);
    for(const entry of [article,newsletter,social,profile]){
      expect(new Set(entry?.artifacts.filter(a=>a.language).map(a=>a.language))).toEqual(new Set(LANGUAGES));
    }
  });
});
