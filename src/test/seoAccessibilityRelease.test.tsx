import { afterEach, describe, expect, it } from "vitest";
import { cleanup, renderHook } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { useSEO } from "../hooks/useSEO";

afterEach(() => cleanup());

describe("SEO and inclusive portfolio release regressions", () => {
  it.each([
    ["/it/servizi", "it_IT"],
    ["/services", "en_GB"],
    ["/fr/services", "fr_FR"],
    ["/es/servicios", "es_ES"],
    ["/blog", "it_IT"],
  ])("uses the right hydrated Open Graph locale for %s", (route, expected) => {
    window.history.replaceState({}, "", route);
    const { unmount } = renderHook(() => useSEO({
      title: "Release metadata test",
      description: "Test content for Open Graph",
      canonical: "https://www.noemitomassetti.it" + route,
    }));
    expect(document.querySelector('meta[property="og:locale"]')?.getAttribute("content")).toBe(expected);
    unmount();
  });

  it("never canonicalises the guided enquiry to the resources page", () => {
    const src = readFileSync("src/pages/Questionnaire.tsx", "utf8");
    expect(src).toContain('pageKey: "questionnaire"');
    expect(src).not.toContain('pageKey: "resources"');
  });

  it("makes the four main portfolio collections accessible without searching long lists", () => {
    const src = readFileSync("src/pages/Portfolio.tsx", "utf8");
    for (const id of ["tangible-work", "portfolio-complete-dossiers", "portfolio-legacy-cases", "portfolio-document-library"]) {
      expect(src).toContain(id);
    }
    expect(src).toContain('aria-pressed={selectedCategory === cat.id}');
    expect(src).toContain('browseSections.map');
  });

  it("provides a language-aware keyboard skip link and reduced motion behaviour", () => {
    const layout = readFileSync("src/components/Layout.tsx", "utf8");
    expect(layout).toContain('href="#contenuto-principale"');
    expect(layout).toContain('id="contenuto-principale"');
    for (const language of ["Vai al contenuto principale", "Skip to main content", "Aller au contenu principal", "Ir al contenido principal"]) {
      expect(layout).toContain(language);
    }
    const css = readFileSync("src/index.css", "utf8");
    expect(css).toContain(":focus-visible");
    expect(css).toContain("prefers-reduced-motion: reduce");
  });
});
