import { describe, expect, it } from "vitest";
import { QUESTIONS } from "../pages/Questionnaire";

const languages = ["it", "en", "fr", "es"] as const;
const sourceLanguageQuestions = new Map(QUESTIONS.map(q => [q.id,q]));

describe("Questionnaire: semantic consistency across four languages", () => {
  it("keeps the same questions, types and answer counts per locale", () => {
    expect(QUESTIONS).toHaveLength(20);
    for(const question of QUESTIONS) {
      for(const locale of languages) {
        expect(question.question[locale].trim().length, "Q"+question.id+" "+locale).toBeGreaterThan(12);
        if(question.options) {
          expect(question.options[locale].length,"Q"+question.id+" "+locale).toBe(question.options.it.length);
          for(const option of question.options[locale]){
            expect(option.trim().length,"Q"+question.id+" "+locale).toBeGreaterThan(1);
          }
        }
      }
    }
  });
  it("keeps critical international-business and translation questions semantically aligned", () => {
    const q3=sourceLanguageQuestions.get(3)!;
    expect(q3.question.en).toMatch(/Italy.*abroad/);
    expect(q3.options?.en).toEqual(["Mainly in Italy","Both in Italy and abroad","Exclusively with customers abroad"]);

    const q9=sourceLanguageQuestions.get(9)!;
    for(const locale of languages) expect(q9.question[locale],locale).toMatch(/inglese|English|anglais|inglés/i);

    const q10=sourceLanguageQuestions.get(10)!;
    expect(q10.question.en).not.toContain("Italian-language");
    const q11=sourceLanguageQuestions.get(11)!;
    expect(q11.question.en).toContain("translation");
    const q12=sourceLanguageQuestions.get(12)!;
    expect(q12.options?.en).toEqual(["English","French","Spanish","Italian only"]);
    expect(q12.options?.fr).toEqual(["Anglais","Français","Espagnol","Italien uniquement"]);
    expect(q12.options?.es).toEqual(["Inglés","Francés","Español","Solo italiano"]);
  });
});
