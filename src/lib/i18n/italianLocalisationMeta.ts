import type { Language } from "./types";

/** Shared server-readable and browser metadata for localisation pages. */
export const ITALIAN_LOCALISATION_META: Record<Language,{title:string;description:string}> = {
  it: {
    title: "Localizzazione in Italiano per Aziende Estere | Noemi Tomassetti",
    description: "Traduzioni professionali IT ↔ EN/FR/ES e localizzazione, revisione e adattamento culturale per aziende estere."
  },
  en: {
    title: "Italian Translation & Localisation Services | Noemi Tomassetti",
    description: "Italian localisation and professional translation between Italian and EN/FR/ES and cultural adaptation for businesses working with Italy."
  },
  fr: {
    title: "Localisation en Italien pour Entreprises | Noemi Tomassetti",
    description: "Traduction IT ↔ EN/FR/ES et localisation et adaptation culturelle pour les entreprises travaillant avec l’Italie."
  },
  es: {
    title: "Traducción y Localización al Italiano | Noemi Tomassetti",
    description: "Traducción IT ↔ EN/FR/ES y localización y adaptación cultural para empresas que trabajan con Italia."
  }
};
