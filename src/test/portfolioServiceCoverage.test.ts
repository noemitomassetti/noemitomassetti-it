import {describe,it,expect} from "vitest";
import {PORTFOLIO_SERVICE_GROUPS} from "../components/PortfolioServiceIndex";
import {getDeepPortfolioItem,TRANSLATION_DEEP_CASES,OPERATIONAL_DEEP_CASES} from "../lib/portfolioDeepCatalog";
const langs=["it","en","fr","es"] as const;
describe("Multiple complete portfolio dossiers for each professional service",()=>{
 it("offers several real readable dossiers per service, with four-language titles",()=>{
   expect(PORTFOLIO_SERVICE_GROUPS.length).toBeGreaterThanOrEqual(12);
   for(const group of PORTFOLIO_SERVICE_GROUPS){
      expect(group.ids.length).toBeGreaterThanOrEqual(2);
      for(const language of langs)expect(group.label[language].trim().length).toBeGreaterThan(6);
      for(const id of group.ids){
         const entry=getDeepPortfolioItem(id);
         expect(entry, "Missing portfolio dossier: "+id).toBeDefined();
         if(!entry) continue;
         for(const language of langs)expect(entry.item.title[language].trim().length).toBeGreaterThan(8);
         if(entry.kind==="translation"){
           expect(entry.item.source.length).toBeGreaterThan(0);
           expect(entry.item.target.length).toBe(entry.item.source.length);
           expect(entry.item.source.join(" ").trim().length).toBeGreaterThan(150);
           expect(entry.item.target.join(" ").trim().length).toBeGreaterThan(150);
         }else {
           expect(entry.item.artifacts.length).toBeGreaterThanOrEqual(3);
           for(const artifact of entry.item.artifacts)expect(artifact.content.trim().length).toBeGreaterThan(120);
         }
      }
   }
 });
 it("keeps operational and translation projects independently accessible",()=>{
    expect(OPERATIONAL_DEEP_CASES.length).toBeGreaterThanOrEqual(25);
    expect(TRANSLATION_DEEP_CASES.length).toBeGreaterThanOrEqual(15);
    for(const direction of ["EN-IT","FR-IT","ES-IT","IT-EN","IT-FR","IT-ES"]){
       expect(TRANSLATION_DEEP_CASES.filter(item=>item.direction===direction).length).toBeGreaterThanOrEqual(2);
    }
 });
});
