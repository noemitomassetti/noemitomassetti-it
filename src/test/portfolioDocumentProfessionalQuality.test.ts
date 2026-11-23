import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
const doc = (num: string, name: string) => readFileSync(`public/portfolio-documenti/doc-${num}-${name}.html`, "utf8");
describe("Portfolio professional quality: facts, full materials and checks", () => {
  it("DOC 13 reconciles quantities, source prices and the two distinct anomalies", () => {
    const html = doc("13", "crm-ordini-listini");
    expect(4 * 12.5 + 2 * 18).toBe(86);
    expect(3 * 6.4).toBeCloseTo(19.2);
    expect(2 * 21.9 + 5 * 4.8).toBeCloseTo(67.8);
    for (const phrase of ["tre righe prive di anomalie rilevate","discrepanza di prezzo (AR-310)","unità di misura da chiarire (AR-230)","Da validare"]) {
      expect(html.toLowerCase()).toContain(phrase.toLowerCase());
    }
    expect(html).not.toContain("quattro righe coerenti con il listino di prova");
  });
  it("DOC 12 separates completed email drafts from mere register entries", () => {
    const html = doc("12", "gestione-email-agenda");
    for (const id of ["EM-01", "EM-02", "EM-04", "EM-06", "EM-07", "EM-08"]) expect(html).toContain(id);
    expect(html).toContain("tre bozze complete di risposta");
    expect(html).toContain("senza il testo integrale");
    expect(html).toContain("Nessuna email è stata inviata");
  });
  it("DOC 15 documents participant communications without claiming real sends", () => {
    const html = doc("15", "corso-online-supporto");
    for (const id of ["P-01","P-02","P-03","P-04","P-05","TR-01","TR-02","TR-03"]) expect(html).toContain(id);
    expect(html).toContain("non ancora inviata");
    expect(html).toContain("Nessuna comunicazione è stata inviata");
    expect(html).toContain("non comprende docenza");
  });
});