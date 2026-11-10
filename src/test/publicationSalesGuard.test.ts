import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { getPublishedBooks, isAmazonBookUrl, PUBLICATIONS_VISIBLE } from "../lib/publicationsCatalog";

describe("Books section release safeguards", () => {
  it("keeps the prepared editorial page hidden until the author releases it", () => {
    expect(PUBLICATIONS_VISIBLE).toBe(false);
    expect(getPublishedBooks()).toHaveLength(0);
    const page = readFileSync("src/pages/Publications.tsx", "utf8");
    expect(page).toContain("IN PREPARAZIONE · NON ANCORA IN VENDITA");
    expect(page).toContain("IN PREPARATION · NOT YET FOR SALE");
    expect(page).toContain("EN PRÉPARATION · PAS ENCORE EN VENTE");
    expect(page).toContain("EN PREPARACIÓN · TODAVÍA NO ESTÁ A LA VENTA");
  });

  it("rejects non-Amazon, draft and misleading purchase links", () => {
    expect(isAmazonBookUrl("https://www.amazon.it/dp/B012345678")).toBe(true);
    expect(isAmazonBookUrl("https://amazon.com/gp/product/B012345678")).toBe(true);
    expect(isAmazonBookUrl("https://sellercentral.amazon.it/dp/B012345678")).toBe(false);
    expect(isAmazonBookUrl("https://evil.amazon.it.example/dp/B012345678")).toBe(false);
    expect(isAmazonBookUrl("https://www.amazon.it/gp/aw/d/B012345678")).toBe(true);
    expect(isAmazonBookUrl("https://www.amazon.it/books")).toBe(false);
    expect(isAmazonBookUrl("http://www.amazon.it/dp/B012345678")).toBe(false);
    expect(isAmazonBookUrl("https://www.amazon.it@evil.example/dp/B012345678")).toBe(false);
    expect(isAmazonBookUrl("https://www.amazon.it.evil.example/dp/B012345678")).toBe(false);
    expect(isAmazonBookUrl("https://amazon.it/dp/B012345678")).toBe(true);
  });

  it("links the section from the homepage and keeps payment on Amazon", () => {
    const home = readFileSync("src/pages/Index.tsx", "utf8");
    expect(home).toContain('getLocalizedPath("publications", lang)');
    expect(home).toContain("PUBLICATIONS_VISIBLE &&");
    expect(home).toContain("not yet for sale");
    expect(home).not.toMatch(/<button[^>]*>\s*(Buy now|Acquista ora)/i);
  });
});
