import type { Localised } from "./portfolioDeepTypes";

export type OperationalCaseCategory = "backoffice" | "research" | "writing" | "web";

export interface OperationalArtifact {
  title: Localised;
  /** Work sample can be in Italian or another displayed language. */
  language?: "it" | "en" | "fr" | "es";
  /** Demonstration deliverable, always labelled as fictional. */
  content: string;
  explanation: Localised;
}

export interface OperationalDeepCase {
  id: string;
  category: OperationalCaseCategory;
  title: Localised;
  service: Localised;
  scenario: Localised;
  objective: Localised;
  inputs: Localised;
  workflow: Localised[];
  artifacts: OperationalArtifact[];
  qualityChecks: Localised[];
  limits: Localised;
  handoff: Localised;
}

/** Not a client testimonial or real project. No customer records are disclosed. */
export const OPERATIONAL_NOTICE: Localised = {
  it: "Elaborato operativo originale preparato per il portfolio, con situazione, azienda e dati inventati per l’esempio. Non documenta un incarico commissionato. Mostra materiali e procedure utilizzabili come modello di lavoro.",
  en: "An original operational work sample prepared for this portfolio. The scenario, company, messages and details are invented; it is not a client commission. The documents illustrate how the agreed work could be organised.",
  fr: "Exemple de travail opérationnel original préparé pour ce portfolio. La situation, l’entreprise, les messages et les données sont inventés ; il ne s’agit pas d’une commande de client. Les documents montrent une méthode de travail possible.",
  es: "Muestra original de trabajo operativo preparada para este porfolio. La situación, la empresa, los mensajes y los datos son inventados; no procede de un encargo de un cliente. Los documentos ilustran una forma de organizar el trabajo."
};
