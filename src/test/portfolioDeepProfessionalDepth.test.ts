import { describe, expect, it } from "vitest";
import { OPERATIONAL_DEEP_CASES, TRANSLATION_DEEP_CASES } from "../lib/portfolioDeepCatalog";

const countWords = (text: string) => text.trim().split(/\s+/).filter(Boolean).length;

describe("Full professional-depth dossier checks", () => {
  it("keeps 15 operational dossiers with substantial complete original work", () => {
    expect(OPERATIONAL_DEEP_CASES).toHaveLength(15);
    for (const item of OPERATIONAL_DEEP_CASES) {
      const lengths = item.artifacts.map(a => countWords(a.content));
      expect(lengths.reduce((sum, n) => sum + n, 0), item.id + " total work").toBeGreaterThanOrEqual(550);
      expect(Math.max(...lengths), item.id + " main finished deliverable").toBeGreaterThanOrEqual(300);
      expect(item.artifacts.length, item.id + " document collection").toBeGreaterThanOrEqual(3);
      for (const a of item.artifacts) {
        expect(a.content.trim().length, item.id).toBeGreaterThan(180);
        for (const lang of ["it", "en", "fr", "es"] as const) {
          expect(a.title[lang].length, item.id + "/" + lang).toBeGreaterThan(8);
          expect(a.explanation[lang].length, item.id + "/" + lang).toBeGreaterThan(20);
        }
      }
    }
  });
  it("keeps all 11 translation dossiers as parallel, extended original-source work", () => {
    expect(TRANSLATION_DEEP_CASES).toHaveLength(11);
    for (const item of TRANSLATION_DEEP_CASES) {
      expect(item.source.length, item.id + " source blocks").toBeGreaterThanOrEqual(5);
      expect(item.target.length, item.id + " translation blocks").toBe(item.source.length);
      expect(countWords(item.source.join(" ")), item.id + " source depth").toBeGreaterThanOrEqual(200);
      expect(countWords(item.target.join(" ")), item.id + " translation depth").toBeGreaterThanOrEqual(200);
      for (let i = 0; i < item.source.length; i++) {
        expect(countWords(item.source[i]), item.id + " source paragraph " + i).toBeGreaterThan(18);
        expect(countWords(item.target[i]), item.id + " translation paragraph " + i).toBeGreaterThan(18);
      }
    }
  });
  it("does not rate fictional software vendors or mismatch research criteria", () => {
    const x = OPERATIONAL_DEEP_CASES.find(c => c.id === "research-existing-italian-customers");
    expect(x).toBeDefined();
    const combined = x!.artifacts.map(a => a.content).join(" ");
    expect(combined).not.toMatch(/3[.,]95\s*\/\s*5|3[.,]90\s*\/\s*5/);
    expect(combined).toMatch(/interfaccia italiana/i);
    expect(combined).toMatch(/non vengono attribuiti punteggi/i);
  });
  it("preserves filenames and technical references between Italian and English", () => {
    const x = TRANSLATION_DEEP_CASES.find(c => c.id === "it-en-audio-handover-instructions");
    expect(x).toBeDefined();
    const file = "VOCE_PROGETTO_A_TAKE03_v02.wav";
    expect(x!.source.join(" ")).toContain(file);
    expect(x!.target.join(" ")).toContain(file);
  });
});
