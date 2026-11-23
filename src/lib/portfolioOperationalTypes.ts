import type { Localised } from "./portfolioDeepTypes";

export type OperationalCaseCategory = "backoffice" | "research" | "writing" | "web";

export interface OperationalArtifact {
  title: Localised;
  /** Work sample can be in Italian or another displayed language. */
  language?: "it" | "en" | "fr" | "es";
  /** Demonstration deliverable, always labelled as illustrative. */
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

/** Independently authored operations samples: no real customer records are disclosed. */
export const OPERATIONAL_NOTICE: Localised = {
  it: "Elaborato originale realizzato per illustrare un incarico operativo e il mio metodo di lavoro. Non deriva da una commissione e non utilizza dati di clienti reali.",
  en: "Original operational sample prepared to demonstrate my working method. It is not commissioned client work and contains no real customer records.",
  fr: "Exemple opérationnel original illustrant ma méthode de travail. Il ne provient pas d’une commande de client et ne contient aucune donnée de clients réels.",
  es: "Trabajo operativo original que muestra mi método. No procede de un encargo ni utiliza datos de clientes reales."
};
