import type { Language } from "./types";

/** Shared server-readable and browser metadata for localisation pages. */
export const ITALIAN_LOCALISATION_META: Record<Language,{title:string;description:string}> = {
  it: {
    title: "Localizzazione in Italiano per Aziende Estere | Noemi Tomassetti",
    description: "Localizzazione verso l’italiano, traduzioni professionali EN/FR/ES → IT, revisione e adattamento culturale per aziende estere."
  },
  en: {
    title: "Italian Translation & Localisation Services | Noemi Tomassetti",
    description: "Italian localisation, professional EN/FR/ES → IT translation and cultural adaptation for businesses working with Italy."
  },
  fr: {
    title: "Localisation en Italien pour Entreprises | Noemi Tomassetti",
    description: "Localisation vers l’italien, traduction professionnelle EN/FR/ES → IT et adaptation culturelle pour les entreprises travaillant avec l’Italie."
  },
  es: {
    title: "Traducción y Localización al Italiano | Noemi Tomassetti",
    description: "Localización al italiano, traducción profesional EN/FR/ES → IT y adaptación cultural para empresas que trabajan con Italia."
  }
};
