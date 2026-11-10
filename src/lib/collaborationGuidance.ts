import type { Language } from "./i18n/types";

/**
 * Explanation of who each illustrative collaboration is suitable for.
 * These are NOT bundled products and do not guarantee particular outputs.
 */
export const COLLABORATION_GUIDANCE: Record<string, Record<Language, string>> = {
  p1: {
    it: "Per professionisti che desiderano organizzare meglio email, appuntamenti e documenti.",
    en: "For professionals who want to bring more order to emails, appointments and documents.",
    fr: "Pour les professionnels qui souhaitent mieux organiser courriels, rendez-vous et documents.",
    es: "Para profesionales que necesitan organizar mejor correos, citas y documentos.",
  },
  p2: {
    it: "Per attività che devono gestire richieste scritte, aggiornamenti e risposte ai clienti.",
    en: "For businesses handling customer enquiries, written updates and support replies.",
    fr: "Pour les activités qui doivent suivre les demandes, informations et réponses écrites aux clients.",
    es: "Para actividades que necesitan gestionar consultas, novedades y respuestas escritas a clientes.",
  },
  p3: {
    it: "Per professionisti che lavorano con testi o interlocutori in italiano, inglese, francese e spagnolo.",
    en: "For professionals working with documents or contacts in Italian, English, French and Spanish.",
    fr: "Pour les professionnels travaillant avec des textes ou interlocuteurs en italien, anglais, français et espagnol.",
    es: "Para profesionales que trabajan con textos o interlocutores en italiano, inglés, francés y español.",
  },
  p4: {
    it: "Per chi possiede già testi professionali e desidera migliorarne chiarezza, tono e coerenza.",
    en: "For professionals with existing copy that needs clearer language, tone and consistency.",
    fr: "Pour ceux qui souhaitent améliorer la clarté, le ton et la cohérence de textes existants.",
    es: "Para quienes quieren mejorar la claridad, el tono y la coherencia de textos existentes.",
  },
};
