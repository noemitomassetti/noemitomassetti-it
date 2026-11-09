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
    it: "Le tariffe sono indicative e non costituiscono un'offerta vincolante. Gli elenchi di servizi sono esempi di attività possibili: né la tariffa oraria né i pacchetti comprendono automaticamente tutte le attività indicate. Il preventivo scritto definisce ciò che è incluso, volume, tempi, condizioni di pagamento ed eventuali aspetti fiscali applicabili. Le collaborazioni continuative sono valutate singolarmente. I pacchetti si attivano dopo l'accettazione del preventivo e il pagamento anticipato, salvo diverso accordo scritto.",
    en: "Rates are indicative, not a binding offer. Service lists show possible tasks: neither the hourly rate nor an hour package automatically includes every activity shown. The written quote specifies exactly what is included, the volume, deadlines, payment terms and applicable tax details. Ongoing work is quoted individually. Hour packages start after acceptance and advance payment, unless agreed otherwise in writing.",
    fr: "Les tarifs sont indicatifs et ne constituent pas une offre ferme. Les listes présentent des prestations possibles : ni le tarif horaire ni un forfait d'heures ne comprennent automatiquement toutes les tâches proposées. Le devis écrit précise les prestations incluses, le volume, les délais, les conditions de paiement et les informations fiscales applicables. Les collaborations régulières sont chiffrées au cas par cas. Les forfaits sont activés après acceptation et paiement anticipé, sauf accord écrit contraire.",
    es: "Las tarifas son orientativas y no constituyen una oferta vinculante. Las listas muestran tareas posibles: ni la tarifa por horas ni los paquetes incluyen automáticamente todas las actividades mencionadas. El presupuesto escrito especifica qué servicios se incluyen, el volumen, los plazos, las condiciones de pago y los datos fiscales aplicables. Las colaboraciones continuadas se presupuestan individualmente. Los paquetes se activan tras la aceptación y el pago anticipado, salvo acuerdo escrito en contrario.",
  },
  bookCall: {
    it: "Richiedi un preventivo", en: "Request a quote",
    fr: "Demander un devis", es: "Solicitar un presupuesto",
  },
  categories: [
    {
      id: "va",
      title: {it: "Segreteria e back office", en: "Virtual assistance & back office", fr: "Secrétariat et back-office", es: "Secretaría y back office"},
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
      rateDetail: {it: "Supporto scritto, in italiano e multilingue", en: "Written support for customers, in four languages", fr: "Échanges écrits avec les clients en quatre langues", es: "Atención escrita a clientes en cuatro idiomas"},
      items: {
        it: ["Gestione e organizzazione della posta", "Risposte ai clienti in bozza o concordate", "Follow-up e informazioni operative", "FAQ, modelli email e procedure", "Perimetro e ore concordati nel preventivo"],
        en: ["Email inbox organisation", "Drafted or approved customer responses", "Follow-ups and routine information", "FAQs, email templates and processes", "Scope and hours confirmed in the quote"],
        fr: ["Organisation de la messagerie", "Réponses clients rédigées ou validées", "Relances et informations pratiques", "FAQ, modèles d'e-mails et procédures", "Périmètre et heures définis au devis"],
        es: ["Organización del correo", "Respuestas a clientes redactadas o aprobadas", "Seguimientos e información operativa", "Preguntas frecuentes, plantillas y procesos", "Alcance y horas acordados en el presupuesto"],
      },
    },
    {
      id: "trans",
      title: {it: "Traduzioni IT ↔ EN/FR/ES e localizzazione", en: "IT ↔ EN/FR/ES Translation & Localisation", fr: "Traduction professionnelle IT ↔ EN/FR/ES et localisation", es: "Traducción profesional IT ↔ EN/FR/ES y localización"},
      rate: {it: "da 0,09 € / parola", en: "from €0.09 / word", fr: "dès 0,09 € / mot", es: "desde 0,09 € / palabra"},
      rateDetail: {it: "Tariffa di partenza per EN/FR/ES → IT; IT → EN/FR/ES su preventivo", en: "Starting rate for EN/FR/ES → IT; IT → EN/FR/ES quoted individually", fr: "Tarif de base EN/FR/ES → IT ; devis spécifique pour IT → EN/FR/ES", es: "Tarifa inicial EN/FR/ES → IT; IT → EN/FR/ES con presupuesto individual"},
      items: {
        it: ["Traduzione EN/FR/ES → IT: da 0,09 €/parola sorgente", "Localizzazione siti e contenuti: da 0,11 €/parola", "Traduzione specialistica: da 0,12 €/parola", "Revisione testi: da 0,03 €/parola", "IT → EN/FR/ES: preventivo su testo e settore; prezzo definitivo dopo analisi"],
        en: ["EN/FR/ES → IT translation: from €0.09/source word", "Website/content localisation: from €0.11/word", "Specialist translation: from €0.12/word", "Text revision: from €0.03/word", "IT → EN/FR/ES: quote on request; final fee after reviewing the text"],
        fr: ["Traduction EN/FR/ES → IT : dès 0,09 €/mot source", "Localisation de sites/contenus : dès 0,11 €/mot", "Traduction spécialisée : dès 0,12 €/mot", "Révision de textes : dès 0,03 €/mot", "IT → EN/FR/ES : devis personnalisé après examen du texte"],
        es: ["Traducción EN/FR/ES → IT: desde 0,09 €/palabra origen", "Localización de webs/contenidos: desde 0,11 €/palabra", "Traducción especializada: desde 0,12 €/palabra", "Revisión de textos: desde 0,03 €/palabra", "IT → EN/FR/ES: presupuesto personalizado tras revisar el texto"],
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
    support: "support",
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

