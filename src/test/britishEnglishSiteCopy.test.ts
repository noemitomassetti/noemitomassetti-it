import { describe, expect, it } from "vitest";
import { enLocale } from "../lib/i18n/locales/en";
import { PORTFOLIO_CASES, PORTFOLIO_DOCUMENTS } from "../lib/portfolioData";

/** User-facing narrative copy follows British English. IDs and source-language quotes
 * are deliberately excluded: changing them would invalidate links or source examples. */
const usVariants=/\b(?:localization|organize|organized|organizing|analyze|analyzed|analyzing|summarize|summarizing|prioritize|prioritized|prioritizing|specialized|personalized|fulfillment|human-centered)\b/i;
function assertUK(copy:string,origin:string){
  expect(copy,origin).not.toMatch(usVariants);
}
describe("British English editorial consistency",()=>{
  it("uses British terminology throughout main visitor-facing English service copy",()=>{
    const copy=[enLocale.meta.homeTitle,enLocale.meta.homeDesc,enLocale.hero.titleLine1,
      enLocale.hero.subtitle,enLocale.hero.desc1,enLocale.hero.desc2,
      enLocale.servicesSection.subtitle,enLocale.aboutPage.subtitle,
      enLocale.contactSection.form.successDesc,
      ...enLocale.servicesSection.categories.flatMap(cat=>[cat.title,cat.description,...cat.items]),
      ...enLocale.productized.packages.flatMap(p=>[p.title,p.description,...p.deliverables])];
    for(const [i,text] of copy.entries())assertUK(text,"site copy "+i);
  });
  it("uses British English in all authored English portfolio explanations",()=>{
    for(const item of PORTFOLIO_CASES){
      for(const [kind,text] of [
        ["title",item.title.en],["subtitle",item.subtitle.en],
        ["brief",item.brief.en],["objective",item.objective.en],
        ["approach",item.approach.en],["deliverable",item.deliverable.en],
        ...item.keyDecisions.en.map((part,i)=>["decision "+i,part])
      ]){
        assertUK(text,item.id+" "+kind);
      }
    }
    for(const doc of PORTFOLIO_DOCUMENTS) {
      assertUK(doc.title.en,doc.num+" title");
      assertUK(doc.subtitle.en,doc.num+" subtitle");
    }
  });
});
