import { describe, expect, it } from "vitest";
import { getBlogPosts } from "../lib/blogData";
import { alignLegacyBlogCopy } from "../lib/blogEditorialOverrides";
import { readFileSync } from "node:fs";

describe("Legacy editorial consistency with approved public services",()=>{
  const italian = getBlogPosts("it");
  it("replaces an outdated free consultation offer with a quote enquiry",()=>{
    const article=italian.find(p=>p.id===13);
    expect(article).toBeDefined();
    const copy=alignLegacyBlogCopy(article!);
    expect(copy.content).toContain("richiedi un preventivo");
    expect(copy.content).not.toContain("consulenza conoscitiva gratuita di 30 minuti");
  });
  it("does not promise risk-free security, legal guarantees or tools not verified",()=>{
    const article=italian.find(p=>p.id===14);
    expect(article).toBeDefined();
    const copy=alignLegacyBlogCopy(article!);
    expect(copy.title).not.toContain("Senza Rischi");
    expect(copy.content).not.toContain("a prova di rischio");
    expect(copy.content).not.toContain("Utilizzo esclusivamente connessioni protette");
    expect(copy.content).not.toContain("garantendo la massima sicurezza");
    expect(copy.content).toContain("consulente");
  });
  it("does not advertise administration in legacy Italian articles",()=>{
    const virtualAssistant=alignLegacyBlogCopy(italian.find(p=>p.id===2)!);
    const calendar=alignLegacyBlogCopy(italian.find(p=>p.id===9)!);
    expect(virtualAssistant.content).not.toContain("valido supporto amministrativo");
    expect(calendar.content).not.toContain("attività amministrative collegate");
    expect(virtualAssistant.content).toContain("back office operativo");
    expect(calendar.content).toContain("promemoria operativi");
  });
  it("offers both-way translation in older EN/FR/ES blog copy without conflicting claims",()=>{
    const en=getBlogPosts("en").find(p=>p.id===5)!;
    const fr=getBlogPosts("fr").find(p=>p.id===5)!;
    const es=getBlogPosts("es").find(p=>p.id===5)!;
    expect(en.content).toContain("in both directions");
    expect(fr.content).toContain("dans les deux sens");
    expect(es.content).toContain("en ambos sentidos");
    expect(en.content).not.toContain("I do not offer native-level translation");
    expect(fr.content).not.toContain("Je ne propose ni traduction professionnelle de l’italien");
    expect(es.content).not.toContain("No ofrezco traducción profesional del italiano");
  });
  it("preserves editorial content of all unrelated articles",()=>{
    const untouched=italian.find(p=>p.id!==13&&p.id!==14)!;
    const transformed=alignLegacyBlogCopy(untouched);
    expect(transformed.title).toBe(untouched.title);
    expect(transformed.content).toBe(untouched.content);
  });
  it("applies corrections on both the article and the listing",()=>{
    expect(readFileSync("src/pages/Blog.tsx","utf8")).toContain("alignLegacyBlogCopy");
    expect(readFileSync("src/pages/BlogPost.tsx","utf8")).toContain("alignLegacyBlogCopy");
  });
});
