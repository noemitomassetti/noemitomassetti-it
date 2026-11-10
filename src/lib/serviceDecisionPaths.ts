import type { Language } from "./i18n/types";

/**
 * Grounded service-to-evidence guidance. Examples are explicitly fictional and
 * are never presented as commissioned projects or guaranteed deliverables.
 * The same six categories are used by the approved four-language service catalogue.
 */
export interface ServiceDecisionPath {
  need: Record<Language, string>;
  possibleOutcome: Record<Language, string>;
  dossierId: string;
}

export const SERVICE_DECISION_PATHS: Record<string, ServiceDecisionPath> = {
  "virtual-assistance": {
    need: {
      it: "Email, appuntamenti e ordini interrompono continuamente il tuo lavoro?",
      en: "Are emails, appointments and orders taking time away from your core work?",
      fr: "Les courriels, rendez-vous et commandes vous détournent-ils de votre activité principale ?",
      es: "¿Los correos, las citas y los pedidos te restan tiempo para tu actividad principal?",
    },
    possibleOutcome: {
      it: "Un possibile risultato: registro delle richieste, priorità e risposte in bozza da approvare.",
      en: "One possible output: a request log, clear priorities and reply drafts for your approval.",
      fr: "Livrable possible : suivi des demandes, priorités et brouillons de réponse à valider.",
      es: "Posible resultado: registro de solicitudes, prioridades y respuestas en borrador para aprobar.",
    },
    dossierId: "inbox-calendar-triage",
  },
  "translation-localization": {
    need: {
      it: "Devi comunicare con precisione tra italiano, inglese, francese o spagnolo?",
      en: "Do you need accurate communication between Italian and English, French or Spanish?",
      fr: "Devez-vous communiquer avec précision entre l’italien, l’anglais, le français ou l’espagnol ?",
      es: "¿Necesitas comunicarte con precisión entre italiano, inglés, francés o español?",
    },
    possibleOutcome: {
      it: "Un possibile risultato: traduzione e glossario di progetto con revisione linguistica concordata.",
      en: "One possible output: a translation and project glossary with agreed linguistic review.",
      fr: "Livrable possible : traduction et glossaire du projet, avec révision linguistique convenue.",
      es: "Posible resultado: traducción y glosario del proyecto con revisión lingüística acordada.",
    },
    dossierId: "it-en-audio-handover-instructions",
  },
  "content-writing": {
    need: {
      it: "Le comunicazioni e i testi che usi hanno bisogno di maggiore chiarezza?",
      en: "Could your professional messages and existing copy be clearer?",
      fr: "Vos messages professionnels et vos textes gagneraient-ils à être clarifiés ?",
      es: "¿Necesitas que tus comunicaciones y textos profesionales sean más claros?",
    },
    possibleOutcome: {
      it: "Un possibile risultato: testi revisionati e versioni pronte per la tua approvazione.",
      en: "One possible output: revised copy and approval-ready versions.",
      fr: "Livrable possible : textes révisés et versions prêtes à valider.",
      es: "Posible resultado: textos revisados y versiones listas para aprobar.",
    },
    dossierId: "existing-client-notice-editing",
  },
  "online-research": {
    need: {
      it: "Devi confrontare informazioni, fornitori o strumenti per un progetto già definito?",
      en: "Do you need to compare sources, suppliers or tools for an existing project?",
      fr: "Devez-vous comparer des sources, fournisseurs ou outils pour un projet défini ?",
      es: "¿Necesitas comparar fuentes, proveedores o herramientas para un proyecto concreto?",
    },
    possibleOutcome: {
      it: "Un possibile risultato: tabella comparativa con fonti, criteri e limiti dichiarati.",
      en: "One possible output: a comparison table with sources, criteria and stated limitations.",
      fr: "Livrable possible : tableau comparatif avec sources, critères et limites explicites.",
      es: "Posible resultado: tabla comparativa con fuentes, criterios y limitaciones expresas.",
    },
    dossierId: "research-existing-italian-customers",
  },
  "digital-support": {
    need: {
      it: "Documenti condivisi, cartelle e procedure sono difficili da ritrovare?",
      en: "Are shared documents, folders and procedures difficult to keep organised?",
      fr: "Vos documents partagés, dossiers et procédures sont-ils difficiles à organiser ?",
      es: "¿Cuesta mantener organizados los documentos, las carpetas y los procedimientos?",
    },
    possibleOutcome: {
      it: "Un possibile risultato: struttura delle cartelle e istruzioni di archiviazione concordate.",
      en: "One possible output: an agreed folder structure and filing instructions.",
      fr: "Livrable possible : arborescence de dossiers et consignes de classement validées.",
      es: "Posible resultado: estructura de carpetas e instrucciones de archivo acordadas.",
    },
    dossierId: "shared-drive-version-control",
  },
  "web-landing": {
    need: {
      it: "Il tuo sito ha testi poco chiari, disomogenei o difficili da aggiornare?",
      en: "Does your website have unclear, inconsistent or hard-to-maintain copy?",
      fr: "Les textes de votre site manquent-ils de clarté ou de cohérence ?",
      es: "¿Los textos de tu web son poco claros, incoherentes o difíciles de actualizar?",
    },
    possibleOutcome: {
      it: "Un possibile risultato: proposta di testi e struttura editoriale, pronta per il CMS.",
      en: "One possible output: proposed copy and editorial structure, ready for a CMS handover.",
      fr: "Livrable possible : proposition de textes et de structure éditoriale prête pour le CMS.",
      es: "Posible resultado: propuesta de textos y estructura editorial lista para el CMS.",
    },
    dossierId: "web-copy-before-after",
  },
};
