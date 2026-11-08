import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const legacySlugs = [
  "it-en-consultancy-services",
  "it-fr-professional-training",
  "it-es-product-information",
  "it-en-existing-order",
  "it-fr-product-order-guide",
  "it-es-workshop-reminder",
];
const routeRoots = [
  "/work-examples",
  "/it/esempi-di-lavoro",
  "/fr/exemples-de-projets",
  "/es/ejemplos-de-trabajo",
];

describe("Legacy reverse-direction dossier retirement", () => {
  it("redirects all old dossier URLs to their localised portfolio index", () => {
    const vercel = JSON.parse(readFileSync("vercel.json", "utf8")) as {
      redirects: { source: string; destination: string; permanent: boolean }[];
    };
    const cloudflare = readFileSync("public/_redirects", "utf8");
    for (const slug of legacySlugs) {
      for (const root of routeRoots) {
        const source = root + "/dossier/" + slug;
        expect(vercel.redirects).toContainEqual({ source, destination: root, permanent: true });
        expect(cloudflare).toContain(source + " " + root + " 301");
      }
    }
  });

  it("removes retired reverse-direction dossiers from the public sitemap", () => {
    const sitemap = readFileSync("public/sitemap.xml", "utf8");
    for (const slug of legacySlugs) expect(sitemap).not.toContain(slug);
    expect([...sitemap.matchAll(/<loc>/g)]).toHaveLength(268);
  });
});
