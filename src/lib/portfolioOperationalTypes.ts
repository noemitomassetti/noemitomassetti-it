import type { Localised } from "./portfolioDeepTypes";

export type OperationalCaseCategory = "backoffice" | "research" | "writing" | "web";

export interface OperationalArtifact {
  title: Localised;
  /** Demonstration deliverable in Italian, explicitly labelled as a fictional work sample. */
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
  it: "Caso dimostrativo originale con situazioni, aziende, corrispondenza e dati inventati: non documenta un incarico realmente svolto. I materiali dei clienti non vengono pubblicati senza autorizzazione; riservatezza e minimizzazione dei dati restano centrali nel lavoro.",
  en: "An original fictional work sample, not a client commission or testimonial. Names, emails, orders and other details are invented. Client materials are not published without permission; confidentiality and data minimisation are essential.",
  fr: "Exemple original fictif, et non mission client ou témoignage. Entreprises, messages et données sont inventés. Aucun document client n’est publié sans autorisation ; la confidentialité et la minimisation des données sont essentielles.",
  es: "Ejemplo original ficticio, no un encargo real ni un testimonio. Empresas, correos y datos son inventados. Los materiales de clientes no se publican sin autorización; la confidencialidad y la minimización de datos son esenciales."
};
