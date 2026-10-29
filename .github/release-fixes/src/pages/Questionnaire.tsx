import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { getLanguageFromPath, getLocalizedPath } from "@/lib/i18n/routes";
import { Language } from "@/lib/i18n/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BookingButton } from "@/components/BookingButton";
import {
  ClipboardCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
  Sparkles,
  Save,
  AlertCircle,
} from "lucide-react";

interface Question {
  id: number;
  section: number;
  question: Record<Language, string>;
  subtitle?: Record<Language, string>;
  type: "single" | "multi" | "text";
  options?: Record<Language, string[]>;
}

const QUESTIONS: Question[] = [
  // SECTION 1: Profilo e settore (Q1-Q4)
  {
    id: 1,
    section: 1,
    question: {
      it: "Qual è la tipologia della tua attività?",
      en: "What type of professional activity do you run?",
      fr: "Quel est le type de votre activité ?",
      es: "¿Cuál es la tipología de tu actividad?",
    },
    type: "single",
    options: {
      it: ["Libero professionista / Consulente", "Piccola impresa / Studio associato", "Attività artigianale / E-commerce", "Altro"],
      en: ["Solo Consultant / Freelancer", "Boutique Firm / Practice", "Artisan / E-commerce", "Other"],
      fr: ["Professionnel libéral / Consultant", "Petite entreprise / Cabinet", "Artisanat / E-commerce", "Autre"],
      es: ["Profesional independiente / Consultor", "Pequeña empresa / Despacho", "Comercio artesanal / E-commerce", "Otro"],
    },
  },
  {
    id: 2,
    section: 1,
    question: {
      it: "Da quanti anni operi nel tuo settore?",
      en: "How many years have you been in business?",
      fr: "Depuis combien d'années exercez-vous ?",
      es: "¿Cuántos años llevas en tu sector?",
    },
    type: "single",
    options: {
      it: ["Meno di 2 anni (fase di avvio)", "Da 2 a 5 anni (crescita)", "Oltre 5 anni (consolidato)"],
      en: ["Under 2 years (early stage)", "2 to 5 years (growth)", "Over 5 years (established)"],
      fr: ["Moins de 2 ans (démarrage)", "2 à 5 ans (développement)", "Plus de 5 ans (établi)"],
      es: ["Menos de 2 años (inicio)", "De 2 a 5 años (crecimiento)", "Más de 5 años (consolidado)"],
    },
  },
  {
    id: 3,
    section: 1,
    question: {
      it: "Lavori principalmente con clienti in Italia o anche all'estero?",
      en: "Do you serve domestic clients, international clients, or both?",
      fr: "Travaillez-vous principalement sur le marché national ou à l'international ?",
      es: "¿Trabajas principalmente a nivel nacional o también en el extranjero?",
    },
    type: "single",
    options: {
      it: ["Prevalentemente in Italia", "Sia in Italia che all'estero", "Esclusivamente mercati esteri"],
      en: ["Primarily domestic", "Both domestic & international", "Exclusively international"],
      fr: ["Principalement national", "National et international", "Exclusivement international"],
      es: ["Principalmente nacional", "Tanto nacional como internacional", "Exclusivamente internacional"],
    },
  },
  {
    id: 4,
    section: 1,
    question: {
      it: "Qual è il tuo canale principale di acquisizione clienti?",
      en: "What is your primary customer acquisition channel?",
      fr: "Quel est votre principal canal d'acquisition client ?",
      es: "¿Cuál es tu principal canal de captación de clientes?",
    },
    type: "single",
    options: {
      it: ["Passaparola e referenze", "Sito web e motori di ricerca (SEO)", "Social network / LinkedIn", "Eventi e fiere di settore"],
      en: ["Word-of-mouth & referrals", "Website & organic search", "Social media / LinkedIn", "Industry events & networking"],
      fr: ["Bouche-à-oreille et recommandations", "Site web et moteurs de recherche", "Réseaux sociaux / LinkedIn", "Salons et événements professionnels"],
      es: ["Boca a boca y recomendaciones", "Sitio web y buscadores (SEO)", "Redes sociales / LinkedIn", "Eventos y ferias profesionales"],
    },
  },

  // SECTION 2: Gestione del tempo e carico operativo (Q5-Q8)
  {
    id: 5,
    section: 2,
    question: {
      it: "Quante ore a settimana dedichi a compiti amministrativi e burocratici?",
      en: "How many hours per week do you spend on administrative chores?",
      fr: "Combien d'heures par semaine consacrez-vous à l'administratif ?",
      es: "¿Cuántas horas a la semana dedicas a tareas administrativas y de gestión?",
    },
    type: "single",
    options: {
      it: ["Meno di 5 ore", "Tra 5 e 10 ore", "Più di 10 ore a settimana"],
      en: ["Under 5 hours", "Between 5 and 10 hours", "More than 10 hours weekly"],
      fr: ["Moins de 5 heures", "Entre 5 et 10 heures", "Plus de 10 heures par semaine"],
      es: ["Menos de 5 horas", "Entre 5 y 10 horas", "Más de 10 horas semanales"],
    },
  },
  {
    id: 6,
    section: 2,
    question: {
      it: "Come valuti lo stato attuale della tua casella email?",
      en: "How would you describe the current state of your email inbox?",
      fr: "Comment décrivez-vous l'état actuel de votre boîte de réception ?",
      es: "¿Cómo describirías el estado actual de tu correo electrónico?",
    },
    type: "single",
    options: {
      it: ["Sotto controllo e archiviata regolarmente", "Spesso caotica, con messaggi importanti che rischiano di sfuggire", "Completamente ingestibile, genera forte stress"],
      en: ["Under control and systematically filed", "Frequently chaotic with important messages at risk", "Overwhelming, a major source of stress"],
      fr: ["Bien organisée et classée régulièrement", "Souvent chaotique, des e-mails risquent d'être oubliés", "Ingérable et source d'anxiété"],
      es: ["Bajo control y clasificada con regularidad", "A menudo caótica, con riesgo de perder mensajes clave", "Ingobernable y fuente de estrés diario"],
    },
  },
  {
    id: 7,
    section: 2,
    question: {
      it: "Hai mai perso opportunità di lavoro per ritardi nel ricontattare un cliente?",
      en: "Have you ever lost contracts due to delayed follow-ups?",
      fr: "Avez-vous déjà manqué des opportunités par retard de relance ?",
      es: "¿Has perdido alguna vez proyectos por tardar en responder a un cliente?",
    },
    type: "single",
    options: {
      it: ["Raramente o mai", "Occasionalmente durante i picchi di lavoro", "Sì, succede con frequenza preoccupante"],
      en: ["Rarely or never", "Occasionally during peak workload", "Yes, happens with concerning frequency"],
      fr: ["Rarement ou jamais", "Parfois en période de forte activité", "Oui, régulièrement"],
      es: ["Rara vez o nunca", "Ocasionalmente en picos de trabajo", "Sí, con una frecuencia preocupante"],
    },
  },
  {
    id: 8,
    section: 2,
    question: {
      it: "Quale attività operativa ti sottrae più energie mentali?",
      en: "Which operational task drains the most mental energy?",
      fr: "Quelle tâche administrative vous prend le plus d'énergie ?",
      es: "¿Qué tarea operativa te resta más energía mental?",
    },
    type: "single",
    options: {
      it: ["Gestione appuntamenti e continui scambi per fissare date", "Emissione fatture, solleciti e controllo pagamenti", "Preparazione di preventivi e materiali introduttivi", "Ricerche e comparazione di fornitori/strumenti"],
      en: ["Calendar ping-pong to schedule appointments", "Invoicing, reminders, and payment tracking", "Drafting proposals and introductory decks", "Vendor and market research"],
      fr: ["Prise de rendez-vous et allers-retours d'agenda", "Facturation, relances et suivi des règlements", "Préparation des devis et documents de présentation", "Recherche de prestataires et d'outils"],
      es: ["Cruces de correos para coordinar reuniones", "Facturación, seguimiento y control de cobros", "Elaboración de presupuestos y propuestas", "Investigación de proveedores y herramientas"],
    },
  },

  // SECTION 3: Lingue e comunicazione estera (Q9-Q12)
  {
    id: 9,
    section: 3,
    question: {
      it: "Ti capita di ricevere richieste o documenti in lingue straniere (inglese, francese, spagnolo)?",
      en: "Do you receive requests or documents in foreign languages (EN, FR, ES)?",
      fr: "Recevez-vous des demandes ou documents en langues étrangères (EN, FR, ES) ?",
      es: "¿Recibes consultas o documentación en lenguas extranjeras (EN, FR, ES)?",
    },
    type: "single",
    options: {
      it: ["Spesso (settimanalmente)", "Occasionalmente (mensilmente)", "Raramente o mai"],
      en: ["Frequently (weekly)", "Occasionally (monthly)", "Rarely or never"],
      fr: ["Régulièrement (chaque semaine)", "Ponctuellement (chaque mois)", "Rarement ou jamais"],
      es: ["Con frecuencia (semanalmente)", "Ocasionalmente (mensualmente)", "Rara vez o nunca"],
    },
  },
  {
    id: 10,
    section: 3,
    question: {
      it: "Come gestisci attualmente la traduzione dei tuoi materiali e delle comunicazioni?",
      en: "How do you currently handle translation of your materials?",
      fr: "Comment gérez-vous la traduction de vos supports ?",
      es: "¿Cómo gestionas actualmente la traducción de tus documentos?",
    },
    type: "single",
    options: {
      it: ["Strumenti automatici gratuiti (DeepL, Google Translate)", "Faccio da me con un inglese/francese scolastico", "Mi affido a traduttori professionisti", "Non traduco nulla al momento"],
      en: ["Free automated tools (DeepL, Google Translate)", "Self-written with general second language skills", "Commission professional human translators", "Do not translate currently"],
      fr: ["Outils automatiques (DeepL, Google)", "Rédigé moi-même avec des connaissances scolaires", "Traducteurs professionnels spécialisés", "Pas de traduction pour le moment"],
      es: ["Herramientas automáticas gratuitas (DeepL, Google)", "Lo redacto yo mismo con nivel intermedio", "Contrato a traductores profesionales", "No traduzco materiales actualmente"],
    },
  },
  {
    id: 11,
    section: 3,
    question: {
      it: "Hai mai avuto il timore che una traduzione imprecisa compromettesse la tua autorevolezza?",
      en: "Have you ever worried that imprecise translation might hurt your credibility?",
      fr: "Avez-vous déjà craint qu'une mauvaise traduction nuise à votre image ?",
      es: "¿Has temido que una traducción deficiente dañe tu reputación profesional?",
    },
    type: "single",
    options: {
      it: ["Sì, è un timore concreto con clienti internazionali importanti", "A volte, soprattutto per clausole e presentazioni formali", "No, non è una mia preoccupazione"],
      en: ["Yes, a tangible concern with high-stake international clients", "Sometimes, especially for contracts and formal decks", "No, not a major concern"],
      fr: ["Oui, particulièrement avec des clients exigeants", "Parfois, sur les contrats et propositions formelles", "Non, pas particulièrement"],
      es: ["Sí, especialmente ante clientes internacionales de valor", "A veces, sobre todo en contratos y presentaciones formales", "No, no me preocupa especialmente"],
    },
  },
  {
    id: 12,
    section: 3,
    question: {
      it: "In quali lingue vorresti rendere accessibile la tua offerta nei prossimi 12 mesi?",
      en: "Which languages would you like to expand into over the next 12 months?",
      fr: "Dans quelles langues souhaitez-vous développer vos services d'ici 12 mois ?",
      es: "¿En qué idiomas te gustaría presentar tus servicios durante los próximos 12 meses?",
    },
    type: "multi",
    options: {
      it: ["Inglese", "Francese", "Spagnolo", "Solo italiano"],
      en: ["English", "French", "Spanish", "Only native language"],
      fr: ["Anglais", "Italien", "Espagnol", "Uniquement français"],
      es: ["Inglés", "Francés", "Italiano", "Solo español"],
    },
  },

  // SECTION 4: Presenza digitale e contenuti (Q13-Q16)
  {
    id: 13,
    section: 4,
    question: {
      it: "Hai un sito web o una landing page aggiornata per la tua attività?",
      en: "Do you have an up-to-date website or landing page?",
      fr: "Disposez-vous d'un site web ou d'une landing page à jour ?",
      es: "¿Dispones de una página web o landing page actualizada?",
    },
    type: "single",
    options: {
      it: ["Sì, moderno e costantemente curato", "Sì, ma è datato e non rispecchia più i miei servizi attuali", "No, al momento non ho un sito web attivo"],
      en: ["Yes, modern and actively maintained", "Yes, but outdated and misaligned with current offerings", "No active website currently"],
      fr: ["Oui, moderne et régulièrement actualisé", "Oui, mais vieillot et incomplet", "Non, pas de site actif actuellement"],
      es: ["Sí, moderno y actualizado con frecuencia", "Sí, pero anticuado y desalineado de mi oferta actual", "No tengo sitio web activo en este momento"],
    },
  },
  {
    id: 14,
    section: 4,
    question: {
      it: "Come giudichi la chiarezza dei tuoi testi promozionali e di presentazione?",
      en: "How would you rate the clarity of your introductory copy?",
      fr: "Comment jugez-vous la clarté de vos textes de présentation ?",
      es: "¿Cómo valoras la claridad de tus textos corporativos y comerciales?",
    },
    type: "single",
    options: {
      it: ["Molto chiari, i clienti capiscono subito cosa offro", "Abbastanza tecnici, sento il bisogno di semplificarli", "Spesso prolissi o scritti in fretta, necessitano di revisione"],
      en: ["Very clear, prospective clients get it right away", "Fairly technical, need simplification", "Often verbose or rushed, in need of professional editing"],
      fr: ["Très limpides, les prospects comprennent immédiatement", "Assez techniques, mériteraient d'être vulgarisés", "Souvent trop longs ou rédigés à la va-vite"],
      es: ["Muy claros, los clientes comprenden mi valor al instante", "Demasiado técnicos, necesitan simplificación", "A menudo extensos o redactados con prisas"],
    },
  },
  {
    id: 15,
    section: 4,
    question: {
      it: "Riesci a pubblicare articoli o contenuti informativi con regolarità?",
      en: "Do you publish thought leadership articles with consistency?",
      fr: "Parvenez-vous à publier des articles ou contenus régulièrement ?",
      es: "¿Logras publicar artículos o contenidos de valor de forma regular?",
    },
    type: "single",
    options: {
      it: ["Sì, seguo un piano editoriale mensile", "Vorrei farlo ma mi manca il tempo per scrivere e revisionare", "Non rientra tra le mie priorità"],
      en: ["Yes, following a steady monthly schedule", "I would like to, but lack time to draft and polish", "Not a current priority"],
      fr: ["Oui, selon un calendrier éditorial précis", "J'aimerais, mais je manque de temps pour rédiger", "Ce n'est pas ma priorité"],
      es: ["Sí, sigo un calendario editorial mensual", "Me gustaría, pero no tengo tiempo para redactar y corregir", "No entra en mis prioridades"],
    },
  },
  {
    id: 16,
    section: 4,
    question: {
      it: "I tuoi potenziali clienti possono prenotare una call con te in autonomia senza scambi di email?",
      en: "Can prospective clients book a discovery call self-serve without email back-and-forth?",
      fr: "Vos prospects peuvent-ils réserver un appel en autonomie sans échanges de courriels ?",
      es: "¿Tus clientes potenciales pueden reservar una llamada directamente sin cruce de correos?",
    },
    type: "single",
    options: {
      it: ["Sì, ho un sistema di prenotazione integrato", "No, facciamo sempre tutto via email o telefono", "Vorrei configurarlo ma non so quale strumento scegliere"],
      en: ["Yes, integrated booking calendar in place", "No, manually coordinated via email or phone", "Would love to implement, but unsure which tool to choose"],
      fr: ["Oui, calendrier de réservation en ligne en place", "Non, tout est fait manuellement par e-mail ou téléphone", "J'aimerais le mettre en place mais j'hésite sur l'outil"],
      es: ["Sí, cuento con un sistema de reserva directa", "No, todo se coordina manualmente por correo o teléfono", "Me gustaría configurarlo pero no sé qué herramienta elegir"],
    },
  },

  // SECTION 5: Delega e obiettivi (Q17-Q20)
  {
    id: 17,
    section: 5,
    question: {
      it: "Hai mai delegato compiti a un'assistente virtuale o a un supporto esterno?",
      en: "Have you ever delegated tasks to a virtual assistant or external support?",
      fr: "Avez-vous déjà délégué des tâches à une assistante virtuelle ?",
      es: "¿Has delegado alguna vez tareas a una asistente virtual o apoyo externo?",
    },
    type: "single",
    options: {
      it: ["No, sarebbe la mia prima esperienza", "Sì, in passato con risultati alterni", "Sì, collaboro già regolarmente con figure freelance"],
      en: ["No, this would be my first time", "Yes, previously with mixed results", "Yes, routinely collaborate with freelance partners"],
      fr: ["Non, ce serait une première démarche", "Oui, par le passé avec des résultats mitigés", "Oui, je travaille régulièrement avec des prestataires"],
      es: ["No, sería mi primera experiencia", "Sí, en el pasado con resultados desiguales", "Sí, colaboro habitualmente con profesionales freelance"],
    },
  },
  {
    id: 18,
    section: 18,
    question: {
      it: "Quale modalità di collaborazione preferiresti avviare inizialmente?",
      en: "What type of initial collaboration would suit you best?",
      fr: "Quel type de collaboration souhaiteriez-vous tester en premier ?",
      es: "¿Qué modalidad de colaboración preferirías iniciar en primer lugar?",
    },
    type: "single",
    options: {
      it: ["Un singolo progetto definito (es. traduzione o ricerca mirata)", "Un pacchetto orario flessibile (es. 10 ore da usare nel mese)", "Una collaborazione continuativa strutturata"],
      en: ["A single defined project (e.g., translation or desk research)", "A flexible hourly bundle (e.g., 10 hours across the month)", "Ongoing structured operational partnership"],
      fr: ["Une mission ponctuelle précise (traduction, recherche)", "Un forfait d'heures flexible (ex. 10 heures sur le mois)", "Un accompagnement régulier dans la durée"],
      es: ["Un proyecto puntual delimitado (traducción, búsqueda)", "Un paquete de horas flexible (ej. 10 horas al mes)", "Un apoyo continuado y estructurado"],
    },
  },
  {
    id: 19,
    section: 5,
    question: {
      it: "Qual è il beneficio principale che ti aspetti delegando compiti operativi?",
      en: "What primary benefit do you seek by delegating administrative tasks?",
      fr: "Quel bénéfice principal attendez-vous en déléguant ?",
      es: "¿Cuál es el principal beneficio que esperas al delegar tareas operativas?",
    },
    type: "single",
    options: {
      it: ["Più tempo da dedicare ai clienti paganti e alla fatturazione", "Minore carico mentale e serenità a fine giornata", "Migliore immagine professionale e comunicativa", "Espansione verso mercati esteri con fiducia"],
      en: ["More time for high-value client work and billable hours", "Reduced mental fatigue and peace of mind", "Elevated professional brand image", "Confident expansion into foreign markets"],
      fr: ["Plus de temps pour le cœur de métier et la facturation", "Moins de charge mentale et plus de sérénité", "Une image professionnelle plus soignée", "Développement international en toute confiance"],
      es: ["Más tiempo para mis clientes y actividades facturables", "Menor desgaste mental y tranquilidad al final del día", "Mejora de mi imagen corporativa y profesional", "Expansión hacia clientes extranjeros con seguridad"],
    },
  },
  {
    id: 20,
    section: 5,
    question: {
      it: "C'è una scadenza o un'esigenza specifica che vorresti risolvere nelle prossime 2-4 settimane?",
      en: "Is there a specific deadline or bottleneck you want to solve in the next 2-4 weeks?",
      fr: "Avez-vous une échéance ou un besoin urgent à régler d'ici 2 à 4 semaines ?",
      es: "¿Tienes una fecha límite o una necesidad urgente que resolver en las próximas semanas?",
    },
    type: "text",
  },
];

export default function Questionnaire() {
  const location = useLocation();
  const lang: Language = getLanguageFromPath(location.pathname);
  const [currentSection, setCurrentSection] = useState(1);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [privacyAgreed, setPrivacyAgreed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Load from sessionStorage
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("noemi_questionnaire_draft");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.answers) setAnswers(parsed.answers);
        if (parsed.section) setCurrentSection(parsed.section);
      }
    } catch (e) {
      console.warn("Could not load questionnaire draft:", e);
    }
  }, []);

  // Save to sessionStorage
  useEffect(() => {
    try {
      sessionStorage.setItem(
        "noemi_questionnaire_draft",
        JSON.stringify({ answers, section: currentSection })
      );
    } catch (e) {
      console.warn("Could not save questionnaire draft:", e);
    }
  }, [answers, currentSection]);

  const titles = {
    it: "Questionario di Valutazione Operativa per Professionisti | Noemi Tomassetti",
    en: "Operational Self-Assessment Questionnaire for Solo Professionals | Noemi Tomassetti",
    fr: "Questionnaire d'Évaluation Opérationnelle pour Professionnels | Noemi Tomassetti",
    es: "Cuestionario de Diagnóstico Operativo para Profesionales | Noemi Tomassetti",
  };

  const descriptions = {
    it: "20 domande mirate in 3-5 minuti per analizzare il tuo carico amministrativo, l'organizzazione quotidiana e individuare cosa puoi delegare concretamente.",
    en: "20 targeted questions taking 3-5 minutes to evaluate your administrative load, daily systems, and concrete delegation priorities.",
    fr: "20 questions ciblées en 3-5 minutes pour évaluer votre charge administrative et identifier ce que vous pouvez déléguer sereinement.",
    es: "20 preguntas directas en 3-5 minutos para evaluar tu carga de trabajo y definir prioridades claras de delegación.",
  };

  useSEO({
    title: titles[lang],
    description: descriptions[lang],
    pageKey: "resources",
    currentLang: lang,
  });

  const sectionQuestions = QUESTIONS.filter((q) => q.section === currentSection);

  const handleSingleSelect = (questionId: number, val: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: val }));
  };

  const handleMultiToggle = (questionId: number, val: string) => {
    setAnswers((prev) => {
      const currentList = Array.isArray(prev[questionId]) ? prev[questionId] as string[] : [];
      const updated = currentList.includes(val)
        ? currentList.filter((item) => item !== val)
        : [...currentList, val];
      return { ...prev, [questionId]: updated };
    });
  };

  const handleTextChange = (questionId: number, val: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: val }));
  };

  const isCurrentSectionValid = () => {
    for (const q of sectionQuestions) {
      if (q.type === "single" && !answers[q.id]) return false;
      if (q.type === "multi" && (!answers[q.id] || answers[q.id].length === 0)) return false;
    }
    return true;
  };

  const nextSection = () => {
    if (currentSection < 5) {
      setCurrentSection((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setIsCompleted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const sectionTitles = {
    1: { it: "1. Profilo e Settore", en: "1. Profile & Sector", fr: "1. Profil et Activité", es: "1. Perfil y Sector" },
    2: { it: "2. Gestione del Tempo e Carico Operativo", en: "2. Time Management & Workload", fr: "2. Gestion du Temps et Charge", es: "2. Gestión del Tiempo y Carga" },
    3: { it: "3. Lingue e Comunicazione Estera", en: "3. Languages & International Reach", fr: "3. Langues et Relations Étrangères", es: "3. Idiomas y Proyección Exterior" },
    4: { it: "4. Presenza Digitale e Contenuti", en: "4. Digital Presence & Content", fr: "4. Présence Digitale et Contenus", es: "4. Presencia Digital y Contenidos" },
    5: { it: "5. Obiettivi di Delega", en: "5. Delegation Objectives", fr: "5. Objectifs de Délégation", es: "5. Objetivos de Delegación" },
  };

  const handleSubmitResults = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAgreed) {
      setErrorMessage(
        lang === "it"
          ? "È necessario accettare l'informativa privacy prima di inviare le risposte."
          : "Please acknowledge the privacy policy to submit your assessment."
      );
      return;
    }
    if (!userEmail) {
      setErrorMessage(lang === "it" ? "Inserisci il tuo indirizzo email." : "Please provide your email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // Direct mailto compilation fallback or API POST
      const summaryLines = QUESTIONS.map((q) => {
        const a = answers[q.id];
        return `Q${q.id} [${q.question.it}]: ${Array.isArray(a) ? a.join(", ") : a || "N/A"}`;
      }).join("\n");

      const mailtoLink = `mailto:info@noemitomassetti.it?subject=${encodeURIComponent(
        `Risultati Questionario Operativo da ${userName || "Professionista"}`
      )}&body=${encodeURIComponent(
        `Nome: ${userName}\nEmail: ${userEmail}\n\nRISPOSTE AL QUESTIONARIO:\n\n${summaryLines}`
      )}`;

      window.location.href = mailtoLink;
      sessionStorage.removeItem("noemi_questionnaire_draft");
    } catch (err) {
      setErrorMessage(
        lang === "it"
          ? "Errore durante l'invio. Puoi contattare direttamente info@noemitomassetti.it"
          : lang === "fr"
          ? "Erreur lors de l'envoi. Vous pouvez contacter directement info@noemitomassetti.it"
          : lang === "es"
          ? "Error durante el envío. Puedes contactar directamente con info@noemitomassetti.it"
          : "Error sending form. You can directly contact info@noemitomassetti.it"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout lang={lang}>
      <section className="py-12 md:py-20 bg-secondary/15 border-b border-border/40">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <ClipboardCheck className="w-3.5 h-3.5" />
            {lang === "it"
              ? "Autodiagnosi Operativa · 3-5 minuti"
              : lang === "fr"
              ? "Autodiagnostic Opérationnel · 3-5 minutes"
              : lang === "es"
              ? "Autodiagnóstico Operativo · 3-5 minutos"
              : "Operational Self-Assessment · 3-5 minutes"}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {lang === "it"
              ? "Quanto ti costa gestire tutto da solo?"
              : lang === "fr"
              ? "Combien vous coûte la gestion solitaire de votre activité ?"
              : lang === "es"
              ? "¿Cuánto te cuesta gestionar todo en solitario?"
              : "What is running everything alone really costing you?"}
          </h1>

          <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            {lang === "it"
              ? "20 domande strutturate per analizzare la tua routine, individuare i colli di bottiglia amministrativi e capire quali attività potresti delegare a Noemi con un beneficio immediato."
              : lang === "fr"
              ? "20 questions concrètes pour auditer votre routine de travail, identifier les goulets d'étranglement et évaluer les gains d'une délégation ciblée."
              : lang === "es"
              ? "20 preguntas prácticas para analizar tu rutina diaria, localizar pérdidas de tiempo y valorar los beneficios de un apoyo operativo externo."
              : "20 focused questions to audit your weekly routine, pinpoint administrative bottlenecks, and identify high-leverage tasks to delegate to Noemi."}
          </p>

          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground pt-2">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-primary" />
              {lang === "it" ? "Tempo stimato: 3-5 min" : "Estimated time: 3-5 min"}
            </span>
            <span className="flex items-center gap-1.5">
              <Save className="w-4 h-4 text-primary" />
              {lang === "it" ? "Salvataggio automatico bozza" : "Auto-saved locally"}
            </span>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          {!isCompleted ? (
            <div className="space-y-8">
              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground">
                  <span className="text-primary font-bold uppercase tracking-wider">
                    {sectionTitles[currentSection as keyof typeof sectionTitles][lang]}
                  </span>
                  <span>
                    {lang === "it" ? `Sezione ${currentSection} di 5` : `Section ${currentSection} of 5`}
                  </span>
                </div>
                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300 rounded-full"
                    style={{ width: `${(currentSection / 5) * 100}%` }}
                  />
                </div>
              </div>

              {/* Questions list */}
              <div className="space-y-8">
                {sectionQuestions.map((q) => (
                  <div
                    key={q.id}
                    className="p-6 rounded-2xl border border-border/60 bg-card shadow-sm space-y-4"
                  >
                    <div>
                      <span className="text-xs font-bold text-primary block mb-1">
                        Domanda {q.id} di 20
                      </span>
                      <h3 className="text-lg font-bold text-foreground leading-snug">
                        {q.question[lang]}
                      </h3>
                    </div>

                    {/* Single choice */}
                    {q.type === "single" && q.options && (
                      <div className="space-y-2 pt-1">
                        {q.options[lang].map((opt, idx) => {
                          const isSelected = answers[q.id] === opt;
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleSingleSelect(q.id, opt)}
                              className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                                isSelected
                                  ? "border-primary bg-primary/10 text-primary font-semibold shadow-xs"
                                  : "border-border/60 bg-background hover:bg-secondary/40 text-foreground/85"
                              }`}
                            >
                              <span>{opt}</span>
                              <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  isSelected
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-muted-foreground/40"
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="w-3 h-3" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Multiple choice */}
                    {q.type === "multi" && q.options && (
                      <div className="space-y-2 pt-1">
                        <span className="text-[11px] text-muted-foreground block mb-1">
                          {lang === "it" ? "(Puoi selezionare più risposte)" : "(Select all that apply)"}
                        </span>
                        {q.options[lang].map((opt, idx) => {
                          const isSelected = (answers[q.id] || []).includes(opt);
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => handleMultiToggle(q.id, opt)}
                              className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                                isSelected
                                  ? "border-primary bg-primary/10 text-primary font-semibold"
                                  : "border-border/60 bg-background hover:bg-secondary/40 text-foreground/85"
                              }`}
                            >
                              <span>{opt}</span>
                              <div
                                className={`w-4 h-4 rounded border flex items-center justify-center ${
                                  isSelected
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-muted-foreground/40"
                                }`}
                              >
                                {isSelected && <CheckCircle2 className="w-3 h-3" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Text answer */}
                    {q.type === "text" && (
                      <Textarea
                        rows={3}
                        value={answers[q.id] || ""}
                        onChange={(e) => handleTextChange(q.id, e.target.value)}
                        placeholder={
                          lang === "it"
                            ? "Descrivi brevemente qui (es. un lancio programmato, una traduzione da consegnare, la sistemazione della casella email)..."
                            : "Briefly describe here (e.g., an upcoming launch, a translation deadline, clearing inbox clutter)..."
                        }
                        className="text-xs sm:text-sm bg-background border-border/60"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevSection}
                  disabled={currentSection === 1}
                  className="text-xs uppercase tracking-wider font-semibold"
                >
                  <ArrowLeft className="w-4 h-4 mr-1.5" />
                  {lang === "it" ? "Indietro" : "Back"}
                </Button>

                <Button
                  type="button"
                  onClick={nextSection}
                  disabled={!isCurrentSectionValid()}
                  className="text-xs uppercase tracking-wider font-bold bg-primary text-primary-foreground shadow-md hover:scale-102 transition-all px-6"
                >
                  {currentSection === 5
                    ? (lang === "it" ? "Completa e vedi sintesi" : "Complete & View Summary")
                    : (lang === "it" ? "Continua" : "Next Section")}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>
          ) : (
            /* COMPLETED SCREEN & SYNTHESIS */
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="p-8 rounded-2xl border border-primary/30 bg-card shadow-lg text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  {lang === "it" ? "Questionario completato!" : "Assessment Completed!"}
                </h2>
                <p className="text-sm text-foreground/80 max-w-xl mx-auto leading-relaxed">
                  {lang === "it"
                    ? "Dalle tue risposte emerge un potenziale risparmio operativo compreso tra 5 e 10 ore a settimana. Delegare la gestione dell'agenda, delle email e la revisione o localizzazione dei testi può liberare tempo immediato per le tue attività a più alto valore."
                    : "Based on your inputs, delegating email triage, calendar coordination, and translation could free up 5 to 10 hours weekly for your high-value client work."}
                </p>
              </div>

              {/* Action Form: Send to Noemi or Book Call */}
              <div className="p-6 md:p-8 rounded-2xl border border-border/60 bg-secondary/30 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {lang === "it"
                      ? "Invia le tue risposte a Noemi per un riscontro personalizzato"
                      : "Send your responses to Noemi for tailored feedback"}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {lang === "it"
                      ? "Riceverai una panoramica sintetica su come impostare la delega per la tua attività specifica, senza alcun impegno."
                      : "You will receive a tailored overview of delegation priorities for your business, with zero obligation."}
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 rounded-xl bg-destructive/10 border border-destructive/20 text-xs text-destructive flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmitResults} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-foreground">
                        {lang === "it" ? "Il tuo nome" : "Your name"}
                      </label>
                      <Input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Nome e Cognome"
                        className="text-xs bg-background"
                        required
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-foreground">
                        {lang === "it" ? "Il tuo indirizzo email" : "Your email address"}
                      </label>
                      <Input
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        placeholder="nome@studio.it"
                        className="text-xs bg-background"
                        required
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-2.5 text-xs text-muted-foreground cursor-pointer pt-2">
                    <input
                      type="checkbox"
                      checked={privacyAgreed}
                      onChange={(e) => setPrivacyAgreed(e.target.checked)}
                      className="mt-0.5 rounded border-border text-primary focus:ring-primary"
                    />
                    <span>
                      {lang === "it"
                        ? "Ho letto e compreso l'informativa privacy. I dati forniti saranno utilizzati esclusivamente per dare riscontro alle risposte del questionario."
                        : "I have read and agree to the privacy policy. Provided details will be used solely to respond to this assessment."}
                    </span>
                  </label>

                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto font-bold text-xs uppercase tracking-wider bg-primary text-primary-foreground shadow-md hover:scale-102 transition-all px-8 py-5"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {lang === "it" ? "Invia le risposte a Noemi" : "Send responses to Noemi"}
                    </Button>

                    <BookingButton
                      variant="outline"
                      className="w-full sm:w-auto text-xs uppercase tracking-wider font-bold py-5 border-border hover:border-primary/50"
                    >
                      {lang === "it" ? "Oppure richiedi un preventivo scritto" : "Or request a written quote"}
                    </BookingButton>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
