import { PRICING_DATA } from "../pricingData.js";

/**
 * PUBLIC APPROVED BUSINESS KNOWLEDGE ONLY.
 * Never import ChatGPT memory, customer records, family details or private work.
 * Shared text source: the live public-service catalogue and pricing data.
 */
export const CONCIERGE_KNOWLEDGE_VERSION = "2026-11-11" as const;

export const PUBLIC_PROFESSIONAL_PROFILE = {
  name: "Noemi Tomassetti",
  role: "Assistente virtuale multilingue – Back office, Segreteria, Customer care, Traduzioni, Contenuti digitali",
  background: [
    "Laurea in Mediazione Linguistica, votazione 110 e lode",
    "Master in Traduzione Specialistica",
    "Esperienza professionale in back office, gestione ordini, customer care, vendita, organizzazione e traduzioni",
  ],
  languages: "Italiano madrelingua. Inglese e francese C1; spagnolo B2. Traduzioni tra italiano e inglese, francese o spagnolo in entrambe le direzioni.",
  work: [
    "Segreteria organizzativa e gestione agenda secondo accordi",
    "Back office operativo, ordini, dati, cataloghi, listini e preventivi preparati su istruzioni",
    "Customer care scritto per clienti già esistenti e comunicazioni multilingue",
    "Revisione e redazione di contenuti digitali, testi per siti, presentazioni, newsletter",
    "Traduzione, revisione linguistica e localizzazione IT ↔ EN/FR/ES",
    "Ricerche informative a supporto di progetti e incarichi già concordati",
  ],
  excluded: [
    "Contabilità, fatturazione, dichiarazioni fiscali e amministrazione aziendale come servizio a clienti",
    "Lead generation, ricerca di contatti commerciali, prospecting, acquisizione clienti",
    "Telemarketing, chiamate a freddo, outreach e appuntamenti commerciali a freddo",
    "Reclutamento di intervistati e partecipanti e incarichi retribuiti a risultato",
  ],
  transparency: [
    "I casi studio e i documenti dimostrativi del portfolio sono esempi realizzati con dati fittizi, non progetti commissionati da clienti reali.",
    "I libri non sono ancora pubblicati: la sezione libri deve restare nascosta e non va citata ai visitatori.",
    "Una conversazione nella chat non equivale a un messaggio o preventivo inviato a Noemi: la richiesta deve essere confermata nel modulo contatti.",
    "Tariffe soltanto indicative, condizioni e attività concordate per iscritto; eventuali approvazioni o consegne richiedono sempre il controllo di Noemi.",
  ],
} as const;

/** Binds the LLM to the SAME prices visitors see on the site; no separate price truth. */
export function buildPublicConciergeKnowledge(): string {
  const categories=PRICING_DATA.categories.map(category=>{
    return [
      category.title.it,
      "Tariffa pubblicata: "+category.rate.it,
      "Dettagli: "+category.rateDetail.it,
      "Voci: "+category.items.it.join(" | "),
    ].join("\n");
  });
  return [
    "IDENTITÀ PROFESSIONALE PUBBLICA — "+PUBLIC_PROFESSIONAL_PROFILE.name,
    PUBLIC_PROFESSIONAL_PROFILE.role,
    "FORMAZIONE ED ESPERIENZA: "+PUBLIC_PROFESSIONAL_PROFILE.background.join("; "),
    "LINGUE: "+PUBLIC_PROFESSIONAL_PROFILE.languages,
    "SERVIZI EFFETTIVAMENTE OFFERTI: "+PUBLIC_PROFESSIONAL_PROFILE.work.join("; "),
    "SERVIZI ESCLUSI: "+PUBLIC_PROFESSIONAL_PROFILE.excluded.join("; "),
    "LISTINO PUBBLICO (riferimento interno, NON inventare prezzi o fare offerte vincolanti):\n"+categories.join("\n---\n"),
    "NOTE ESSENZIALI: "+PUBLIC_PROFESSIONAL_PROFILE.transparency.join("; "),
  ].join("\n\n");
}
