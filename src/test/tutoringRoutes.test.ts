import { describe, expect, it } from "vitest";
import { getPageKeyFromPath, switchLanguageUrl } from "../lib/i18n/routes";
import { readFileSync } from "node:fs";

describe("Tutoraggio riservato alla versione italiana", () => {
  it("shows tutoraggio as an Italian-only service and excludes translated routes", () => {
    const app=readFileSync("src/App.tsx","utf8");
    const layout=readFileSync("src/components/Layout.tsx","utf8");
    const home=readFileSync("src/pages/Index.tsx","utf8");
    const build=readFileSync("scripts/build-portfolio-social-pages.ts","utf8");
    expect(app).toContain('<Route path="/it/tutor-apprendimento" element={<Tutoring />} />');
    for(const path of ["/learning-tutoring","/fr/accompagnement-scolaire","/es/apoyo-escolar"]) {
      expect(app).not.toContain('path="'+path+'"');
      expect(build).not.toContain(path);
    }
    expect(layout).toContain('currentLang === "it"');
    expect(home).toContain('lang === "it"');
    expect(build).toContain('render(tutorPath,"it"');
  });
  it("switches to the destination language home rather than an unavailable translation", () => {
    expect(getPageKeyFromPath("/it/tutor-apprendimento")).toBe("home");
    expect(switchLanguageUrl("/it/tutor-apprendimento","en")).toBe("/");
    expect(switchLanguageUrl("/it/tutor-apprendimento","fr")).toBe("/fr");
    expect(switchLanguageUrl("/it/tutor-apprendimento","es")).toBe("/es");
  });
  it("states in-person and online availability within Italy without clinical claims", () => {
    const page=readFileSync("src/pages/Tutoring.tsx","utf8");
    expect(page).toContain("In presenza esclusivamente a Castelfidardo");
    expect(page).not.toContain("dintorni");
    expect(page).toContain("Online in tutta Italia");
    expect(page).toContain("non clinico");
    expect(page).not.toMatch(/tutor certificata|psicologa iscritta|diagnosi professionale/i);
    expect(page).toContain('hrefLang: "it"');
    expect(page).not.toContain('hrefLang: "fr"');
  });
});
