import type { Language } from "./i18n/types";

export type Localised<T = string> = Record<Language, T>;

export interface TerminologyChoice {
  source: string;
  target: string;
  explanation: Localised;
}

export interface TranslationDeepCase {
  id: string;
  direction: "EN-IT" | "IT-EN" | "FR-IT" | "IT-FR" | "ES-IT" | "IT-ES";
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
  it: "Esercizio professionale originale con brand, testi e dati fittizi: non è un incarico commissionato da un cliente né una testimonianza. Il confronto illustra scelte traduttive e non certifica una revisione esterna.",
  en: "An original professional demonstration using fictional brands, texts and details: not a commissioned client project or testimonial. The comparison illustrates translation decisions; it does not certify external proofreading.",
  fr: "Démonstration professionnelle originale à partir de marques, de textes et de données fictifs : ni mission réelle ni témoignage. La comparaison illustre les choix de traduction et n’atteste pas une révision externe.",
  es: "Muestra profesional original con marcas, textos y datos ficticios: no es un encargo real ni un testimonio. La comparación explica decisiones traductoras y no acredita una revisión externa."
};

export const DIRECTION_LABELS: Record<TranslationDeepCase["direction"], string> = {
  "EN-IT": "EN → IT", "IT-EN": "IT → EN", "FR-IT": "FR → IT",
  "IT-FR": "IT → FR", "ES-IT": "ES → IT", "IT-ES": "IT → ES"
};
