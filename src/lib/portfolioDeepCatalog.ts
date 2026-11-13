import type { Language } from "./i18n/types";
import { TRANSLATION_SAMPLES_A } from "./portfolioTranslationSamplesA";
import { TRANSLATION_SAMPLES_B } from "./portfolioTranslationSamplesB";
import { TRANSLATION_SAMPLES_REVERSE } from "./portfolioTranslationSamplesReverse";
import { TRANSLATION_SAMPLES_SPECIALIST } from "./portfolioTranslationSamplesSpecialist";
import { TRANSLATION_SAMPLES_EXPANSION_A } from "./portfolioTranslationSamplesExpansionA";
import { TRANSLATION_SAMPLES_EXPANSION_B } from "./portfolioTranslationSamplesExpansionB";
import { OPERATIONAL_SAMPLES_A } from "./portfolioOperationalSamplesA";
import { OPERATIONAL_SAMPLES_B } from "./portfolioOperationalSamplesB";
import { OPERATIONAL_SAMPLES_C } from "./portfolioOperationalSamplesC";
import { OPERATIONAL_SAMPLES_D } from "./portfolioOperationalSamplesD";
import { OPERATIONAL_SAMPLES_E } from "./portfolioOperationalSamplesE";
import { OPERATIONAL_SAMPLES_F } from "./portfolioOperationalSamplesF";
import { OPERATIONAL_SAMPLES_G } from "./portfolioOperationalSamplesG";
import { OPERATIONAL_SAMPLES_H } from "./portfolioOperationalSamplesH";
import type { TranslationDeepCase } from "./portfolioDeepTypes";
import type { OperationalDeepCase } from "./portfolioOperationalTypes";

/** Fictional professional samples cover all six IT ↔ EN/FR/ES translation directions. */

export const TRANSLATION_DEEP_CASES: TranslationDeepCase[] = [...TRANSLATION_SAMPLES_A, ...TRANSLATION_SAMPLES_B, ...TRANSLATION_SAMPLES_REVERSE, ...TRANSLATION_SAMPLES_SPECIALIST, ...TRANSLATION_SAMPLES_EXPANSION_A, ...TRANSLATION_SAMPLES_EXPANSION_B];
export const OPERATIONAL_DEEP_CASES: OperationalDeepCase[] = [...OPERATIONAL_SAMPLES_A, ...OPERATIONAL_SAMPLES_B, ...OPERATIONAL_SAMPLES_C, ...OPERATIONAL_SAMPLES_D, ...OPERATIONAL_SAMPLES_E, ...OPERATIONAL_SAMPLES_F, ...OPERATIONAL_SAMPLES_G, ...OPERATIONAL_SAMPLES_H];
export type DeepPortfolioItem =
  | { kind: "translation"; item: TranslationDeepCase }
  | { kind: "operations"; item: OperationalDeepCase };
export const DEEP_PORTFOLIO_ITEMS: DeepPortfolioItem[] = [
  ...TRANSLATION_DEEP_CASES.map(item => ({ kind: "translation" as const, item })),
  ...OPERATIONAL_DEEP_CASES.map(item => ({ kind: "operations" as const, item })),
];
export function getDeepPortfolioItem(id: string): DeepPortfolioItem | undefined {
  return DEEP_PORTFOLIO_ITEMS.find(entry => entry.item.id === id);
}
const ROOT: Record<Language,string> = {
  it: "/it/esempi-di-lavoro/dossier",
  en: "/work-examples/dossier",
  fr: "/fr/exemples-de-projets/dossier",
  es: "/es/ejemplos-de-trabajo/dossier"
};
export function getDeepPortfolioPath(id:string, lang:Language):string {
  return ROOT[lang] + "/" + encodeURIComponent(id);
}
export function getDeepPortfolioSlug(pathname:string): string | null {
  const match = pathname.match(/\/dossier\/([a-z0-9-]+)\/?$/);
  return match?.[1] ?? null;
}
export function getDeepPortfolioLanguagePaths(id:string) {
  const langs:Language[]=["it","en","fr","es"];
  return langs.map(lang=>({lang,url:getDeepPortfolioPath(id,lang)}));
}
