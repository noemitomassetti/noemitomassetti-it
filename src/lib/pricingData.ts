import { Language } from "./i18n/types";

export interface PricingCategory {
  id: "va" | "trans" | "support";
  title: Record<Language, string>;
  rate: Record<Language, string>;
  rateDetail: Record<Language, string>;
  items: Record<Language, string[]>;
  highlight?: Record<Language, string>;
}

export interface PricingData {
  badge: Record<Language, string>;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  disclaimer: Record<Language, string>;
  bookCall: Record<Language, string>;
  categories: PricingCategory[];
}

export const PRICING_DATA: PricingData = {
  badge: {
    it: "Compensi chiari, senza sorprese", en: "Clear, transparent fees",
    fr: "Honoraires clairs et transparents", es: "Honorarios claros y transparentes",
  },
  title: {
    it: "Tariffe indicative", en: "Indicative rates", fr: "Tarifs indicatifs", es: "Tarifas orientativas",
  },
  subtitle: {
    it: "Un punto di partenza concreto: ogni incarico viene definito per iscritto, con attività, tempi e compenso concordati prima di iniziare.",
    en: "A clear starting point: scope, timing and fees are confirmed in writing before any work begins.",
    fr: "Une base claire : périmètre, délais et honoraires sont validés par écrit avant le début de la mission.",
    es: "Un punto de partida claro: alcance, plazos y honorarios se acuerdan por escrito antes de empezar.",
  },
  disclaimer: {
    it: "Compensi indicativi, non un'offerta vincolante. Il preventivo scritto specifica attività incluse, volume, tempi, modalità e condizioni di pagamento, con eventuali aspetti fiscali applicabili. Per collaborazioni continuative, la tariffa viene concordata in base all'impegno effettivo. I pacchetti si attivano dopo accettazione del preventivo e pagamento anticipato, salvo diverso accordo scritto.",
    en: "Indicative fees, not a binding offer. Your written quote sets out scope, volume, timing, payment terms and applicable tax information. Ongoing work is quoted individually. Hour packages are activated after acceptance and advance payment, unless agreed otherwise in writing.",
    fr: "Tarifs indicatifs, sans valeur d'offre ferme. Le devis écrit précise la prestation, le volume, les délais, le paiement et les informations fiscales applicables. Les collaborations régulières font l'objet d'un devis adapté. Les forfaits sont activés après acceptation et paiement anticipé, sauf accord écrit contraire.",
    es: "Honorarios orientativos, no una oferta vinculante. El presupuesto escrito define alcance, volumen, plazos, pago e información fiscal aplicable. Las colaboraciones continuadas se presupuestan individualmente. Los paquetes se activan tras la aceptación y el pago anticipado, salvo acuerdo escrito diferente.",
  },
  bookCall: {
    it: "Richiedi un preventivo scritto", en: "Request a written quote",
    fr: "Demander un devis écrit", es: "Solicitar presupuesto por escrito",
  },
  categories: [
    {
      id: "va",
      title: {it: "Segreteria e back office", en: "Virtual assistance & back office", fr: "Assistance virtuelle et back-office", es: "Asistencia virtual y back office"},
      rate: {it: "25 € / ora", en: "€25 / hour", fr: "25 € / heure", es: "25 € / hora"},
      rateDetail: {it: "Incarichi singoli e pacchetti di ore", en: "Ad hoc tasks and hour packages", fr: "Missions ponctuelles et forfaits horaires", es: "Encargos puntuales y paquetes de horas"},
      items: {
        it: ["Intervento a ore: 25 €/ora", "Pacchetto 5 ore: 125 €", "Pacchetto 10 ore: 240 €", "Pacchetto 20 ore: 460 €", "Collaborazioni continuative: preventivo personalizzato"],
        en: ["Hourly work: €25/hour", "5-hour package: €125", "10-hour package: €240", "20-hour package: €460", "Ongoing work: tailored quote"],
        fr: ["Mission ponctuelle : 25 €/heure", "Forfait 5 heures : 125 €", "Forfait 10 heures : 240 €", "Forfait 20 heures : 460 €", "Collaboration régulière : devis personnalisé"],
        es: ["Trabajo por horas: 25 €/hora", "Paquete de 5 horas: 125 €", "Paquete de 10 horas: 240 €", "Paquete de 20 horas: 460 €", "Colaboración continuada: presupuesto a medida"],
      },
      highlight: {it: "Per delegare con flessibilità", en: "Flexible delegation", fr: "Délégation flexible", es: "Delegación flexible"},
    },
    {
      id: "support",
      title: {it: "Customer care e comunicazioni", en: "Customer care & communications", fr: "Relation client et communications", es: "Atención al cliente y comunicaciones"},
      rate: {it: "25 € / ora", en: "€25 / hour", fr: "25 € / heure", es: "25 € / hora"},
      rateDetail: {it: "Supporto scritto, in italiano e multilingue", en: "Written support in Italian and other working languages", fr: "Assistance écrite en italien et autres langues de travail", es: "Atención escrita en italiano y otros idiomas de trabajo"},
      items: {
        it: ["Gestione e organizzazione della posta", "Risposte ai clienti in bozza o concordate", "Follow-up e informazioni operative", "FAQ, modelli email e procedure", "Perimetro e ore concordati nel preventivo"],
        en: ["Email inbox organization", "Drafted or approved customer responses", "Follow-ups and routine information", "FAQs, email templates and processes", "Scope and hours confirmed in the quote"],
        fr: ["Organisation de la messagerie", "Réponses clients rédigées ou validées", "Relances et informations pratiques", "FAQ, modèles d'e-mails et procédures", "Périmètre et heures définis au devis"],
        es: ["Organización del correo", "Respuestas a clientes redactadas o aprobadas", "Seguimientos e información operativa", "Preguntas frecuentes, plantillas y procesos", "Alcance y horas acordados en el presupuesto"],
      },
    },
    {
      id: "trans",
      title: {it: "Traduzione e localizzazione italiana", en: "Translation & Italian localisation", fr: "Traduction et localisation en italien", es: "Traducción y localización al italiano"},
      rate: {it: "da 0,09 € / parola", en: "from €0.09 / word", fr: "dès 0,09 € / mot", es: "desde 0,09 € / palabra"},
      rateDetail: {it: "Priorità EN/FR → IT; ES → IT su valutazione", en: "Focus on EN/FR → IT; ES → IT on assessment", fr: "Priorité EN/FR → IT ; ES → IT sur évaluation", es: "Principalmente EN/FR → IT; ES → IT según el proyecto"},
      items: {
        it: ["Traduzione di riferimento: da 0,09 €/parola sorgente", "Localizzazione siti e contenuti: da 0,11 €/parola", "Traduzione specialistica: da 0,12 €/parola", "Revisione testi: da 0,03 €/parola", "Prezzo definitivo dopo analisi del materiale"],
        en: ["Translation: from €0.09/source word", "Website/content localisation: from €0.11/word", "Specialist translation: from €0.12/word", "Text revision: from €0.03/word", "Final fee confirmed after reviewing the source"],
        fr: ["Traduction : dès 0,09 €/mot source", "Localisation de sites/contenus : dès 0,11 €/mot", "Traduction spécialisée : dès 0,12 €/mot", "Révision de textes : dès 0,03 €/mot", "Devis définitif après examen des documents"],
        es: ["Traducción: desde 0,09 €/palabra origen", "Localización de webs/contenidos: desde 0,11 €/palabra", "Traducción especializada: desde 0,12 €/palabra", "Revisión de textos: desde 0,03 €/palabra", "Precio definitivo tras revisar el material"],
      },
      highlight: {it: "Italiano madrelingua", en: "Native Italian expertise", fr: "Italien langue maternelle", es: "Italiano nativo"},
    },
  ],
};

export function getServicePricingSummary(serviceKey: string, lang: Language): string {
  const categoryMap: Record<string, PricingCategory["id"]> = {
    backoffice: "va",
    va: "va",
    translation: "trans",
    trans: "trans",
    writing: "va",
    research: "va",
    support: "va",
    customerCare: "support",
    web: "va",
  };

  const targetId = categoryMap[serviceKey] || "va";
  const cat = PRICING_DATA.categories.find((c) => c.id === targetId);
  if (!cat) return "";

  const items = cat.items[lang] || cat.items.en;
  // Clean presentation without repeating the base rate when items already detail specific breakdowns
  return items.join("; ") + ".";
}

