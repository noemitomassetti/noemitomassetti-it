import type { Language } from "./i18n/types";

export type Localised<T = string> = Record<Language, T>;

export interface TerminologyChoice {
  source: string;
  target: string;
  explanation: Localised;
}

export type PublicTranslationDirection = "EN-IT" | "FR-IT" | "ES-IT" | "IT-EN" | "IT-FR" | "IT-ES";

export interface TranslationDeepCase {
  id: string;
  direction: PublicTranslationDirection;
  domain: Localised;
  title: Localised;
  context: Localised;
  source: string[];
  target: string[];
  terminology: TerminologyChoice[];
  method: Localised;
  review: Localised;
  output: Localised;
}

/** Original source-and-target translation work; not commissioned client projects. */
export const TRANSLATION_SAMPLE_NOTICE: Localised = {
  it: "Traduzione originale preparata per questo portfolio, non tratta da un incarico commissionato. I testi di partenza sono originali; le note illustrano le scelte linguistiche senza attestare revisioni esterne.",
  en: "Original translation prepared for this portfolio, not a client commission. The source material is original; the notes explain translation decisions without implying independent proofreading.",
  fr: "Traduction originale préparée pour ce portfolio, hors commande client. Le texte source est original ; les commentaires présentent les choix linguistiques sans prétendre à une relecture externe.",
  es: "Traducción original preparada para este portfolio, no procedente de un encargo. El texto de partida es original y las notas explican las decisiones lingüísticas sin atribuir una revisión externa."
};

export const DIRECTION_LABELS: Record<PublicTranslationDirection, string> = {
  "EN-IT": "EN → IT", "FR-IT": "FR → IT", "ES-IT": "ES → IT",
  "IT-EN": "IT → EN", "IT-FR": "IT → FR", "IT-ES": "IT → ES"
};
