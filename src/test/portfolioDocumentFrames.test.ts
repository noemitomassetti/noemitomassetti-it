import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { PORTFOLIO_DOCUMENTS } from "../lib/portfolioData";

describe("Portfolio document previews and clickjacking safety", () => {
  it("allows only same-origin HTML embedding in hosting headers", () => {
    const vercel = JSON.parse(readFileSync("vercel.json", "utf8")) as {
      headers: { source: string; headers: { key: string; value: string }[] }[];
    };
    const all = vercel.headers.flatMap(rule => rule.headers);
    expect(all.find(header => header.key.toLowerCase() === "x-frame-options")?.value)
      .toBe("SAMEORIGIN");
    const netlify = readFileSync("public/_headers", "utf8");
    expect(netlify).toMatch(/X-Frame-Options:\s*SAMEORIGIN/);
    expect(netlify).not.toMatch(/X-Frame-Options:\s*DENY/);
  });

  it("uses same-origin portfolio files, not external iframe sources", () => {
    expect(PORTFOLIO_DOCUMENTS).toHaveLength(22);
    for (const document of PORTFOLIO_DOCUMENTS) {
      expect(document.url).toMatch(/^\/portfolio-documenti\/[a-z0-9-]+\.html$/);
      expect(document.url).not.toMatch(/^https?:/);
    }
    const preview = readFileSync("src/pages/PortfolioDocument.tsx", "utf8");
    expect(preview).toContain("src={doc.url}");
    expect(preview).toContain("title={t.preview");
  });
});
