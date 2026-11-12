import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { itLocale } from "../lib/i18n/locales/it";
import { enLocale } from "../lib/i18n/locales/en";
import { frLocale } from "../lib/i18n/locales/fr";
import { esLocale } from "../lib/i18n/locales/es";
import { getBlogPosts } from "../lib/blogData";
import { PORTFOLIO_CASES, DEMO_DISCLAIMER } from "../lib/portfolioData";

const langs = ["it", "en", "fr", "es"] as const;
const locales = { it: itLocale, en: enLocale, fr: frLocale, es: esLocale };

describe("Whole-site editorial localisation: shared meaning, audience-aware language", () => {
  it("keeps the Italian homepage centred on the offered services, not foreign-business targeting", () => {
    const homeText = [
      itLocale.hero.headline,
      itLocale.hero.subtitle,
      itLocale.hero.desc1,
      itLocale.hero.desc2,
      ...itLocale.aboutSection.bioParagraphs,
    ].join(" ");
    expect(homeText).not.toMatch(/aziend[ae] ester[ea]|clienti esteri|attività estere/i);
    expect(homeText).toMatch(/professionist|consulent|piccol[ae] attività/i);
    expect(homeText).toMatch(/traduzion|comunicazion/i);
  });

  it("offers the same service categories, direct contact and bidirectional translation in each locale", () => {
    const serviceIds = itLocale.servicesSection.categories.map(item => item.id);
    for (const lang of langs) {
      const copy = locales[lang];
      expect(copy.servicesSection.categories.map(item => item.id), lang).toEqual(serviceIds);
      expect(copy.nav.bookCall.length, lang).toBeGreaterThan(6);
      expect(copy.contactSection.directInfo.email, lang).toBe("info@noemitomassetti.it");
      expect(copy.servicesSection.subtitle.length, lang).toBeGreaterThan(75);
      const translation = copy.servicesSection.categories.find(item => item.id === "translation-localization");
      expect(translation?.description, lang).toMatch(/itali|italien/i);
      expect(translation?.description, lang).toMatch(/ingles|English|anglais|inglés/i);
      expect(translation?.description, lang).toMatch(/franc|French/i);
      expect(translation?.description, lang).toMatch(/spagn|Spanish|espagn|español/i);
    }
  });

  it("reuses the same four-stage written collaboration process on the homepage", () => {
    const home = readFileSync("src/pages/Index.tsx", "utf8");
    expect(home).toContain("dict.howWeWork.steps.map");
    for (const lang of langs) {
      expect(locales[lang].howWeWork.steps, lang).toHaveLength(4);
      expect(locales[lang].howWeWork.steps[2].desc, lang).toMatch(/preventivo|quote|devis|presupuesto/i);
    }
  });

  it("keeps the five tools discussed in blog article 3 consistent in all four languages", () => {
    for (const lang of langs) {
      const post = getBlogPosts(lang).find(item => item.id === 3);
      expect(post, lang).toBeDefined();
      const article = post!.content;
      for (const name of ["Calendly", "Google", "Keep", "Drive", "Zoom", "Meet", "Asana"]) {
        expect(article, `${lang}: ${name}`).toContain(name);
      }
    }
    const blogPage = readFileSync("src/pages/BlogPost.tsx", "utf8");
    const providerNotice = blogPage.slice(blogPage.indexOf("const FREE_PLAN_NOTICE"), blogPage.indexOf("export default function BlogPost"));
    expect(providerNotice).not.toMatch(/Trello|Notion|Google Forms/);
  });

  it("makes clear that portfolio work samples are original and fictional in every language", () => {
    for (const lang of langs) {
      expect(DEMO_DISCLAIMER[lang], lang).toMatch(/portfolio|porfolio/i);
      expect(DEMO_DISCLAIMER[lang].length, lang).toBeGreaterThan(80);
      for (const item of PORTFOLIO_CASES) {
        expect(item.disclaimer[lang], lang).toBeTruthy();
        expect(item.title[lang], lang).toBeTruthy();
      }
    }
    const page = readFileSync("src/pages/Portfolio.tsx", "utf8");
    expect(page).not.toContain("Decisioni Chiave & Deliverable");
    expect(page).not.toContain("Matrice di Benchmark");
  });
});
