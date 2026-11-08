import { afterEach, describe, expect, it } from "vitest";
import { cleanup, renderHook } from "@testing-library/react";
import { getLanguageFromPath } from "../lib/i18n/routes";
import { useSEO } from "../hooks/useSEO";

afterEach(() => {
  cleanup();
  document.querySelectorAll('link[rel="canonical"], link[rel="alternate"][hreflang], meta[property="og:url"]')
    .forEach(node => node.remove());
});

describe("Legacy Italian blog locale", () => {
  it("uses Italian on original blog routes for site-wide components", () => {
    expect(getLanguageFromPath("/blog")).toBe("it");
    expect(getLanguageFromPath("/blog/")).toBe("it");
    expect(getLanguageFromPath("/blog/articolo-storico")).toBe("it");
    expect(getLanguageFromPath("/it/blog/articolo-storico")).toBe("it");
    expect(getLanguageFromPath("/en/blog/example")).toBe("en");
    expect(getLanguageFromPath("/fr/blog/exemple")).toBe("fr");
    expect(getLanguageFromPath("/es/blog/ejemplo")).toBe("es");
  });
});

describe("SEO metadata across client-side navigation", () => {
  it("removes stale canonical and og:url when a new route has no canonical", () => {
    const url = "https://www.noemitomassetti.it/it/servizi";
    const { rerender } = renderHook(
      ({ canonical, noindex }: { canonical: string | undefined; noindex: boolean }) =>
        useSEO({
          title: noindex ? "Pagina non trovata" : "Servizi",
          description: "SEO route regression test",
          canonical,
          currentLang: "it",
          noindex,
        }),
      { initialProps: { canonical: url as string | undefined, noindex: false } }
    );
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(url);
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute("content")).toBe(url);
    rerender({ canonical: undefined, noindex: true });
    expect(document.querySelector('link[rel="canonical"]')).toBeNull();
    expect(document.querySelector('meta[property="og:url"]')).toBeNull();
    expect(document.querySelector('meta[name="robots"]')?.getAttribute("content")).toBe("noindex, nofollow");
  });
});
