import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { itLocale } from "../lib/i18n/locales/it";
import { enLocale } from "../lib/i18n/locales/en";
import { frLocale } from "../lib/i18n/locales/fr";
import { esLocale } from "../lib/i18n/locales/es";
import { getBlogPosts } from "../lib/blogData";
import { PORTFOLIO_DOCUMENTS } from "../lib/portfolioData";

const read = (path: string) => readFileSync(path, "utf8");
const langs = ["it","en","fr","es"] as const;
const l10n = {it:itLocale,en:enLocale,fr:frLocale,es:esLocale};

describe("Release: Italian-market virtual assistance first, complete scope in Italian",()=>{
  it("places the assistant identity before translation in all foreign home and service page metadata",()=>{
    const titles={
      en:/virtual assistant|virtual assistance/i,
      fr:/assistante virtuelle|assistance virtuelle/i,
      es:/asistente virtual|asistencia virtual/i
    };
    for(const lang of ["en","fr","es"] as const) {
      const c=l10n[lang];
      expect(c.meta.homeTitle,lang).toMatch(titles[lang]);
      expect(c.meta.servicesTitle,lang).toMatch(titles[lang]);
      expect(c.hero.headline,lang).toMatch(titles[lang]);
      expect(c.hero.desc1,lang).toMatch(/itali|italie|italia/i);
      expect(c.servicesSection.categories[0].id,lang).toBe("virtual-assistance");
    }
  });
  it("keeps full Italian service coverage without foregrounding foreign-customer targeting",()=>{
    const c=itLocale;
    expect(c.servicesSection.categories.map(x=>x.id)).toEqual([
      "virtual-assistance","translation-localization","content-writing",
      "online-research","digital-support","web-landing"
    ]);
    expect(c.multilingualAdvantage.title).toMatch(/comunicazioni professionali/i);
    expect(c.multilingualAdvantage.title).not.toMatch(/clienti e partner internazionali/i);
    expect(c.servicesSection.categories[3].description).toContain("preparare schede comparative");
    expect(c.meta.homeDesc).toMatch(/assistenza clienti/i);
  });
  it("aligns the service list and written quote path across all four languages",()=>{
    const ids=l10n.it.servicesSection.categories.map(c=>c.id);
    for (const lang of langs) {
      const c=l10n[lang];
      expect(c.servicesSection.categories.map(x=>x.id),lang).toEqual(ids);
      expect(c.nav.bookCall,lang).toMatch(/preventivo|quote|devis|presupuesto/i);
      expect(c.servicesSection.categories[1].description,lang).toMatch(/itali|italien/i);
    }
  });
  it("renders the authentic portrait after the service copy on mobile, with locale-specific alternative text",()=>{
    const hero=read("src/pages/Index.tsx");
    expect(hero).toContain("relative order-2 md:order-none");
    expect(hero).toContain("container relative order-1 md:order-none");
    expect(hero).toContain('src="/noemi-tomassetti.png"');
    expect(hero).toContain('alt={lang === "it"');
    expect(hero).toContain("backgroundSize: \"36px 36px\"");
  });
  it("makes the blog's international introduction and quote CTA assistant-first",()=>{
    const index=read("src/pages/Blog.tsx");
    const article=read("src/pages/BlogPost.tsx");
    expect(index).toContain("Italian-speaking virtual assistance");
    expect(index).toMatch(/assistante virtuelle|assistance virtuelle/i);
    expect(index).toMatch(/asistencia virtual/i);
    expect(article).toContain("Need an Italian-speaking virtual assistant?");
    expect(article).toMatch(/assistante virtuelle italophone/i);
    expect(article).toMatch(/asistente virtual/i);
  });
  it("preserves all 16 blog posts and original document assets in every interface language",()=>{
    for (const lang of langs) {
      const posts=getBlogPosts(lang);
      expect(posts,lang).toHaveLength(16);
      expect(new Set(posts.map(p=>p.id)).size,lang).toBe(16);
      for(const post of posts){
        expect(post.content.length,`${lang} post ${post.id}`).toBeGreaterThan(1700);
        expect(post.title.length,`${lang} post ${post.id}`).toBeGreaterThan(12);
      }
    }
    const fortnightly=[
      [12,"2026-09-14"],[13,"2026-09-28"],[14,"2026-10-12"],
      [15,"2026-10-26"],[16,"2026-11-09"],
    ] as const;
    for(const lang of langs){
      const posts=getBlogPosts(lang);
      for(const [id,date] of fortnightly){
        expect(posts.find(p=>p.id===id)?.dateISO,`${lang} blog post ${id}`).toBe(date);
        expect(new Date(date+"T12:00:00Z").getUTCDay()).toBe(1);
      }
    }
    expect(PORTFOLIO_DOCUMENTS).toHaveLength(22);
    for(const doc of PORTFOLIO_DOCUMENTS) {
      for(const lang of langs)expect(doc.title[lang].length,`${lang} doc ${doc.num}`).toBeGreaterThan(12);
      expect(read("public"+doc.url).length,doc.num).toBeGreaterThan(6500);
    }
  });
  it("provides developed original bilingual documents for DOC02–06, not only a one-paragraph excerpt",()=>{
    for(const [id,name] of [
      ["02","report-finanziario-commerciale"],
      ["03","abstract-clinico-farmacologico"],
      ["04","guida-software-saas-cloud"],
      ["05","accordo-riservatezza-nda"],
      ["06","microcopy-design-system"]
    ]) {
      const html=read(`public/portfolio-documenti/doc-${id}-${name}.html`);
      expect(html.length,id).toBeGreaterThan(13000);
      expect(html,id).toMatch(/dimostrativ|inventat|fittiz/i);
    }
  });
});
