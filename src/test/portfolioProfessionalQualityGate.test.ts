import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { PORTFOLIO_DOCUMENTS } from "../lib/portfolioData";

const read = (path: string) => readFileSync(path, "utf8");
const plain = (html: string) => (html.split(/<body[^>]*>/i)[1] ?? html)
  .split(/<\/body>/i)[0]
  .replace(/<style[\s\S]*?<\/style>|<script[\s\S]*?<\/script>/gi, " ")
  .replace(/<[^>]*>/g, " ")
  .replace(/&(?:[a-z]+|#\d+);/gi, " ")
  .replace(/\s+/g, " ")
  .trim();

describe("Professional portfolio content-depth and quality gates", () => {
  it("retains 22 independent, substantive, original work samples", () => {
    expect(PORTFOLIO_DOCUMENTS).toHaveLength(22);
    for (const doc of PORTFOLIO_DOCUMENTS) {
      const html = read("public" + doc.url);
      const body = plain(html);
      const words = body.split(/\s+/).filter(Boolean);
      // This is a minimum-depth guard, not proof of linguistic excellence.
      expect(words.length, doc.num + " substantive content").toBeGreaterThanOrEqual(650);
      expect(html, doc.num + " original work").toMatch(/<table\b|class="letter"|class="split"|class="comparison-grid"|class="dual-clause"|<section\b/i);
      expect(body, doc.num + " clear demo status").toMatch(/dimostrativ|inventat|fittiz|simulat|fictional/i);
      expect(html, doc.num + " multilingual navigation").toContain("Guide multilingue / Multilingual reading guide");
      expect(html, doc.num + " natural page structure").toContain("</html>");
    }
  });
  it("contains expanded bilingual specialist work, not isolated one-paragraph extracts", () => {
    const count = (file: string, needle: RegExp) => (read(file).match(needle) ?? []).length;
    const root = "public/portfolio-documenti/";
    expect(count(root + "doc-02-report-finanziario-commerciale.html", /class="comparison-grid"/g)).toBeGreaterThanOrEqual(4);
    expect(count(root + "doc-03-abstract-clinico-farmacologico.html", /class="comparison-grid"/g)).toBeGreaterThanOrEqual(5);
    expect(count(root + "doc-04-guida-software-saas-cloud.html", /class="comparison-grid"/g)).toBeGreaterThanOrEqual(2);
    expect(count(root + "doc-05-accordo-riservatezza-nda.html", /class="dual-clause"/g)).toBeGreaterThanOrEqual(6);
  });
  it("includes completed tangible outputs for operational and editorial work", () => {
    const root = "public/portfolio-documenti/";
    const evidence: Record<string, string[]> = {
      "09-procedura-operativa-backoffice": ["EM-01", "EM-02", "EM-03", "EM-05", "EM-06"],
      "11-customer-care-email": ["CC-101", "CC-102", "CC-103"],
      "12-gestione-email-agenda": ["EM-01", "EM-04", "EM-08", "Riepilogo settimanale"],
      "13-crm-ordini-listini": ["AR-100", "AR-310", "OR-03", "A-02"],
      "14-archivi-drive": ["Inventario iniziale", "Registro versioni", "Schema delle autorizzazioni"],
      "15-corso-online-supporto": ["Registro partecipanti", "TR-01", "TR-03", "Report organizzativo"],
      "19-contenuti-cataloghi-listini": ["OG-10", "OG-11", "OG-12", "CAT-05"],
      "20-richiesta-preventivo-workflow": ["DEMO-2026-01", "EM-01", "EM-06", "125,00"],
      "21-landing-page-contenuti-en-it": ["Pagina italiana completa", "Quattro FAQ aggiuntive", "Richiedi un preventivo"],
      "22-traduzione-letteraria-en-it": ["The Last Voice Note", "I did not send a message", "Non scrissi nessun messaggio"]
    };
    for (const [suffix, phrases] of Object.entries(evidence)) {
      const html = read(root + "doc-" + suffix + ".html");
      for (const phrase of phrases) expect(html, suffix + " / " + phrase).toContain(phrase);
    }
  });
  it("keeps legal, medical, accounting and software activities outside the offered service scope", () => {
    const root = "public/portfolio-documenti/";
    expect(plain(read(root + "doc-03-abstract-clinico-farmacologico.html"))).toMatch(/non.*(?:uso sanitario|testo sanitario|uso clinico)|non.*(?:validat|fonte scientifica)/i);
    expect(plain(read(root + "doc-05-accordo-riservatezza-nda.html"))).toMatch(/non.*(?:consulenza legale|parere legale)/i);
    expect(plain(read(root + "doc-02-report-finanziario-commerciale.html"))).toMatch(/non.*(?:consulenza contabile|valutazioni finanziarie)|non.*(?:verifiche contabili)/i);
    expect(plain(read(root + "doc-04-guida-software-saas-cloud.html"))).toMatch(/non.*(?:software|implementata|sviluppata)/i);
  });
});
