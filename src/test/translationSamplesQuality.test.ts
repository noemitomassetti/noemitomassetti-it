import { describe, expect, it } from "vitest";
import { TRANSLATION_DEEP_CASES } from "../lib/portfolioDeepCatalog";

describe("Public translation sample editorial quality", () => {
  it("pairs every source segment with exactly one target segment", () => {
    expect(TRANSLATION_DEEP_CASES.length).toBeGreaterThanOrEqual(23);
    for (const sample of TRANSLATION_DEEP_CASES) {
      expect(sample.source.length, sample.id).toBeGreaterThan(0);
      expect(sample.target.length, sample.id).toBe(sample.source.length);
      expect(sample.source.every(segment => segment.trim().length > 0), sample.id).toBe(true);
      expect(sample.target.every(segment => segment.trim().length > 0), sample.id).toBe(true);
    }
  });

  it("preserves the formal French customer address in Italian product and course copy", () => {
    const product = TRANSLATION_DEEP_CASES.find(sample => sample.id === "fr-it-handmade-product");
    expect(product).toBeDefined();
    expect(product!.target[1]).toContain("Rimuova");
    expect(product!.target[1]).toContain("eviti");
    expect(product!.target[2]).toContain("può chiedere");
    expect(product!.target[2]).toContain("contatti il nostro team");
    expect(product!.target.join(" ")).not.toMatch(/\b(Rimuovi|evita|puoi|contatta)\b/);

    const course = TRANSLATION_DEEP_CASES.find(sample => sample.id === "fr-it-workshop-details");
    expect(course).toBeDefined();
    expect(course!.target[2]).toContain("contatti la segreteria");
    expect(course!.target[2]).not.toContain("contatta la segreteria");
  });
});
