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

/** Demonstrations only: all companies, products, dates and correspondence are invented. */
export const TRANSLATION_SAMPLE_NOTICE: Localised = {
  it: "Campione di traduzione originale preparato per questo portfolio, con testo di partenza originale, nomi e dati inventati per l’esempio. Non proviene da un incarico commissionato. Le note illustrano le scelte linguistiche, senza attestare una revisione esterna.",
  en: "An original translation sample created for this portfolio, using an original source text and invented names and details. It is not a client commission. The notes explain translation decisions; they do not imply independent proofreading.",
  fr: "Exemple de traduction original créé pour ce portfolio, à partir d’un texte source, de noms et de données inventés pour l’occasion. Il ne s’agit pas d’une commande de client. Les notes expliquent les choix linguistiques, sans attester une relecture indépendante.",
  es: "Muestra de traducción original creada para este porfolio, con un texto de partida, nombres y datos inventados para el ejemplo. No procede de un encargo de un cliente. Las notas explican las decisiones lingüísticas, sin implicar una revisión externa."
};

export const DIRECTION_LABELS: Record<PublicTranslationDirection, string> = {
  "EN-IT": "EN → IT", "FR-IT": "FR → IT", "ES-IT": "ES → IT",
  "IT-EN": "IT → EN", "IT-FR": "IT → FR", "IT-ES": "IT → ES"
};
