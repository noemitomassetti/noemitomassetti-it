import type { Language } from "./types";

/** Shared server-readable and browser metadata for localisation pages. */
export const ITALIAN_LOCALISATION_META: Record<Language,{title:string;description:string}> = {
  it: {
    title: "Localizzazione in Italiano per Aziende Estere | Noemi Tomassetti",
    description: "Localizzazione verso l’italiano, traduzioni EN/FR/ES → IT, revisione e adattamento culturale per aziende estere. Disponibili anche traduzioni IT → EN/FR/ES."
  },
  en: {
    title: "Italian Translation & Localisation Services | Noemi Tomassetti",
    description: "Italian localisation, EN/FR/ES → IT translation and cultural adaptation for businesses working with Italy. Translation from Italian into English, French and Spanish is also available."
  },
  fr: {
    title: "Localisation en Italien pour Entreprises | Noemi Tomassetti",
    description: "Localisation vers l’italien, traduction FR/EN/ES → IT et adaptation culturelle pour les entreprises travaillant avec l’Italie. Traductions IT → FR/EN/ES également proposées."
  },
  es: {
    title: "Traducción y Localización al Italiano | Noemi Tomassetti",
    description: "Localización al italiano, traducción ES/EN/FR → IT y adaptación cultural para empresas que trabajan con Italia. También disponibles traducciones IT → ES/EN/FR."
  }
};
