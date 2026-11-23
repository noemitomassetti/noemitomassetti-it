import { describe, expect, it } from "vitest";
import { getHreflangAlternates, getLocalizedPath, getPageKeyFromPath, switchLanguageUrl } from "../lib/i18n/routes";
import { readFileSync } from "node:fs";

const routes = {
  it: "/it/tutor-apprendimento",
  en: "/learning-tutoring",
  fr: "/fr/accompagnement-scolaire",
  es: "/es/apoyo-escolar",
} as const;

describe("Inclusive tutoring landing in four languages", () => {
  it("retains the tutoring page when switching between any of the four languages", () => {
    for (const source of Object.values(routes)) {
      expect(getPageKeyFromPath(source)).toBe("tutoring");
      for (const [lang, target] of Object.entries(routes)) {
        expect(switchLanguageUrl(source, lang as keyof typeof routes)).toBe(target);
        expect(getLocalizedPath("tutoring", lang as keyof typeof routes)).toBe(target);
      }
    }
  });
  it("provides five coherent and reciprocal hreflang links", () => {
    const alternates = getHreflangAlternates("tutoring");
    expect(alternates.map(x => x.hrefLang)).toEqual(["en","it","fr","es","x-default"]);
    for (const [lang,path] of Object.entries(routes)) {
      expect(alternates.find(x=>x.hrefLang===lang)?.href).toBe("https://www.noemitomassetti.it"+path);
    }
  });
  it("does not falsely claim a regulated or clinical qualification", () => {
    const content=readFileSync("src/pages/Tutoring.tsx", "utf8");
    expect(content).toContain("non clinico");
    expect(content).toContain("not clinical");
    expect(content).not.toMatch(/tutor certificata|psychologist|psicologa iscritta|diagnosi professionale/i);
  });
});
