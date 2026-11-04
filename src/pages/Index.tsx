import { useLocation, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { BookingButton } from "@/components/BookingButton";
import { ContactForm } from "@/components/ContactForm";
import { PricingSection } from "@/components/PricingSection";
import {
  Language,
  getLanguageFromPath,
  getDictionary,
  getHreflangAlternates,
  getLocalizedPath,
} from "@/lib/i18n";
import { getBlogPosts, getBlogPostPath, getBlogIndexPath } from "@/lib/blogData";
import {
  Mail,
  Globe,
  PenTool,
  Search,
  Cpu,
  Layout as LayoutIcon,
  CheckCircle2,
  Clock,
  Briefcase,
  GraduationCap,
  Sparkles,
  Star,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Bot,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function IndexPage() {
  const location = useLocation();
  const lang: Language = getLanguageFromPath(location.pathname);
  const dict = getDictionary(lang);
  const canonicalUrl = `https://www.noemitomassetti.it${getLocalizedPath("home", lang)}`;

  useSEO({
    title: dict.meta.homeTitle,
    description: dict.meta.homeDesc,
    canonical: canonicalUrl,
    alternates: getHreflangAlternates("home"),
    ogType: "website",
  });

  const servicesPath = getLocalizedPath("services", lang);
  const resourcesPath = getLocalizedPath("resources", lang);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "virtual-assistance":
        return Mail;
      case "translation-localization":
        return Globe;
      case "content-writing":
        return PenTool;
      case "online-research":
        return Search;
      case "digital-support":
        return Cpu;
      case "web-landing":
        return LayoutIcon;
      default:
        return CheckCircle2;
    }
  };

  const delegationBenefits = [
    {
      title:
        lang === "it"
          ? "Lavorare con più ordine"
          : lang === "fr"
          ? "Travailler avec plus d'ordre"
          : lang === "es"
          ? "Trabajar con más orden"
          : "Work with greater clarity",
      description:
        lang === "it"
          ? "Avere una gestione più organizzata delle attività quotidiane."
          : lang === "fr"
          ? "Bénéficier d'une organisation fluide pour vos activités quotidiennes."
          : lang === "es"
          ? "Disfrutar de una gestión más estructurada en el día a día."
          : "Achieve calm, structured handling of your daily operational tasks.",
    },
    {
      title:
        lang === "it"
          ? "Recuperare tempo"
          : lang === "fr"
          ? "Gagner du temps précieux"
          : lang === "es"
          ? "Recuperar tiempo"
          : "Reclaim valuable hours",
      description:
        lang === "it"
          ? "Ridurre il tempo dedicato alle attività operative e organizzative."
          : lang === "fr"
          ? "Réduire le temps consacré aux tâches opérationnelles et organisationnelles."
          : lang === "es"
          ? "Reducir el tiempo dedicado a tareas operativas y de organización."
          : "Spend less time on repetitive operational and organisational tasks.",
    },
    {
      title:
        lang === "it"
          ? "Essere più presente per i tuoi clienti"
          : lang === "fr"
          ? "Être plus disponible pour vos clients"
          : lang === "es"
          ? "Estar más presente para tus clientes"
          : "Be fully present for your clients",
      description:
        lang === "it"
          ? "Senza dover interrompere continuamente il tuo lavoro."
          : lang === "fr"
          ? "Sans devoir interrompre continuellement votre travail principal."
          : lang === "es"
          ? "Sin tener que interrumpir constantemente tu trabajo de fondo."
          : "Deliver undivided attention without constant context-switching.",
    },
    {
      title:
        lang === "it"
          ? "Avere un punto di riferimento"
          : lang === "fr"
          ? "Avoir un repère de confiance"
          : lang === "es"
          ? "Contar con un punto de referencia"
          : "Have a reliable trusted partner",
      description:
        lang === "it"
          ? "Una persona con cui coordinarti e a cui affidare attività definite."
          : lang === "fr"
          ? "Une professionnelle à qui confier des tâches précises, selon vos besoins."
          : lang === "es"
          ? "Una persona de confianza con quien coordinar tareas definidas."
          : "A professional you can delegate clearly defined tasks to.",
    },
  ];

  const experienceItems = [
    {
      icon: Clock,
      title:
        lang === "it"
          ? "Oltre 20 anni di esperienza"
          : lang === "fr"
          ? "Plus de 20 ans d'expérience"
          : lang === "es"
          ? "Más de 20 años de experiencia"
          : "Over 20 years of experience",
      description:
        lang === "it"
          ? "Un percorso professionale maturato attraverso attività organizzative, linguistiche e di supporto."
          : lang === "fr"
          ? "Un parcours riche forgé dans l'organisation, le support opérationnel et les langues."
          : lang === "es"
          ? "Una trayectoria sólida en labores organizativas, lingüísticas y de soporte."
          : "A professional background spanning organisational, customer-facing and language-related roles.",
    },
    {
      icon: GraduationCap,
      title:
        lang === "it"
          ? "Una formazione specialistica"
          : lang === "fr"
          ? "Une formation spécialisée"
          : lang === "es"
          ? "Una formación especializada"
          : "Specialist language training",
      description:
        lang === "it"
          ? "Laurea in Mediazione Linguistica – 110 e lode\nMaster in Traduzione Specialistica"
          : lang === "fr"
          ? "Diplôme en Médiation Linguistique – 110/110 e lode\nMaster en Traduction Spécialisée"
          : lang === "es"
          ? "Grado en Mediación Lingüística – 110/110 cum laude\nMáster en Traducción Especializada"
          : "Degree in Language Mediation – 110/110 cum laude\nPostgraduate training in Specialised Translation",
    },
    {
      icon: Globe,
      title:
        lang === "it"
          ? "Quattro lingue di lavoro"
          : lang === "fr"
          ? "Quatre langues de travail"
          : lang === "es"
          ? "Cuatro idiomas de trabajo"
          : "Four working languages",
      description:
        lang === "it"
          ? "Italiano, inglese, francese e spagnolo."
          : lang === "fr"
          ? "Italien, anglais, français et espagnol."
          : lang === "es"
          ? "Italiano, inglés, francés y español."
          : "Italian, English, French, and Spanish.",
    },
    {
      icon: CheckCircle2,
      title:
        lang === "it"
          ? "Un approccio concreto"
          : lang === "fr"
          ? "Une approche concrète"
          : lang === "es"
          ? "Un enfoque práctico"
          : "A pragmatic approach",
      description:
        lang === "it"
          ? "Organizzazione, precisione, attenzione alle comunicazioni e alle esigenze delle persone con cui lavoro."
          : lang === "fr"
          ? "Rigueur, discrétion et écoute attentive pour s'adapter parfaitement à vos habitudes."
          : lang === "es"
          ? "Organización, rigor y atención a los detalles y necesidades de cada persona."
          : "Precision, discretion, clear communication, and genuine care for your distinct workflows.",
    },
  ];

  const targets = [
    {
      icon: Briefcase,
      title:
        lang === "it"
          ? "Professionisti e consulenti"
          : lang === "fr"
          ? "Professionnels et consultants"
          : lang === "es"
          ? "Profesionales y consultores"
          : "Professionals & Consultants",
      description:
        lang === "it"
          ? "Se lavori su appuntamento o gestisci direttamente i tuoi clienti, posso supportarti nella gestione di agenda, email, richieste e comunicazioni."
          : lang === "fr"
          ? "Si vous travaillez sur rendez-vous, je prends en charge votre agenda, vos courriels et vos demandes clients."
          : lang === "es"
          ? "Si trabajas con citas o clientes directos, te ayudo a gestionar agenda, correos y comunicaciones."
          : "If your business relies on meetings and direct client care, I manage scheduling, emails, and ongoing correspondence.",
    },
    {
      icon: GraduationCap,
      title:
        lang === "it"
          ? "Formatori e creatori di corsi"
          : lang === "fr"
          ? "Formateurs et créateurs de cours"
          : lang === "es"
          ? "Formadores y creadores de cursos"
          : "Trainers & Course Creators",
      description:
        lang === "it"
          ? "Posso aiutarti nell'organizzazione di corsi ed eventi, nelle iscrizioni, nelle comunicazioni e nel rapporto con i partecipanti."
          : lang === "fr"
          ? "Je vous accompagne dans la coordination des inscriptions, la préparation des supports et les relations participants."
          : lang === "es"
          ? "Te acompaño en la coordinación de cursos, inscripciones, avisos y atención a los participantes."
          : "Assisting with course logistical coordination, registrations, student communications, and event logistics.",
    },
    {
      icon: Clock,
      title:
        lang === "it"
          ? "Piccole aziende e studi professionali"
          : lang === "fr"
          ? "PME et cabinets d'expertise"
          : lang === "es"
          ? "Pequeñas empresas y despachos"
          : "Small Businesses & Boutiques",
      description:
        lang === "it"
          ? "Un supporto operativo per le attività di segreteria, organizzazione e back office che richiedono tempo e continuità."
          : lang === "fr"
          ? "Un soutien fiable pour le secrétariat organisationnel, le classement documentaire et le back-office opérationnel."
          : lang === "es"
          ? "Un respaldo continuo para secretaría, organización de datos y gestiones de back office."
          : "Practical organisational and back-office support for agreed day-to-day activities.",
    },
    {
      icon: Globe,
      title:
        lang === "it"
          ? "Professionisti che lavorano con l'estero"
          : lang === "fr"
          ? "Professionnels travaillant avec l’Italie"
          : lang === "es"
          ? "Empresas que trabajan con Italia"
          : "Businesses Working with Italy",
      description:
        lang === "it"
          ? "Traduco nei due sensi tra italiano e inglese, francese e spagnolo e supporto le comunicazioni professionali con interlocutori internazionali."
          : lang === "fr"
          ? "Je traduis dans les deux sens entre l’italien et le français, l’anglais et l’espagnol, tout en accompagnant vos échanges avec vos interlocuteurs italiens."
          : lang === "es"
          ? "Traduzco en ambos sentidos entre el italiano y el español, el inglés y el francés y te ayudo a preparar comunicaciones para tus interlocutores italianos."
          : "I translate between Italian and English, French and Spanish in both directions and help you communicate with existing Italian customers.",
    },
  ];

  const steps = [
    {
      number: "01",
      title:
        lang === "it"
          ? "Invii una richiesta scritta"
          : lang === "fr"
          ? "Demande écrite"
          : lang === "es"
          ? "Solicitud por escrito"
          : "Written enquiry",
      description:
        lang === "it"
          ? "Raccontami le attività da delegare tramite il modulo: nessuna telefonata obbligatoria."
          : lang === "fr"
          ? "Décrivez les tâches à déléguer par écrit, sans appel préalable obligatoire."
          : lang === "es"
          ? "Explícame por escrito las tareas que quieres delegar, sin llamada obligatoria."
          : "Describe the work you want to delegate in a written enquiry, without a mandatory call.",
    },
    {
      number: "02",
      title:
        lang === "it"
          ? "Individuiamo cosa delegare"
          : lang === "fr"
          ? "Cibler les tâches"
          : lang === "es"
          ? "Identificamos qué delegar"
          : "Identify Scope",
      description:
        lang === "it"
          ? "Partiamo dalle attività per cui potrei offrirti un supporto concreto."
          : lang === "fr"
          ? "Nous sélectionnons ensemble les missions précises pour lesquelles mon aide sera la plus efficace."
          : lang === "es"
          ? "Fijamos las tareas concretas donde mi soporte marcará una diferencia real e inmediata."
          : "We define the specific operational tasks where senior delegation delivers instant relief.",
    },
    {
      number: "03",
      title:
        lang === "it"
          ? "Definiamo la collaborazione"
          : lang === "fr"
          ? "Modalités sur mesure"
          : lang === "es"
          ? "Fijamos la colaboración"
          : "Set Collaboration",
      description:
        lang === "it"
          ? "Stabiliamo attività, modalità e tempi di lavoro in base alle tue esigenze."
          : lang === "fr"
          ? "Nous convenons des modalités, du rythme et des canaux d'échange selon vos préférences."
          : lang === "es"
          ? "Establecemos tiempos, metodología y canales de trabajo adaptados a tus hábitos."
          : "We agree on transparent deliverables, workflow rhythms, and communication preferences.",
    },
    {
      number: "04",
      title:
        lang === "it"
          ? "Iniziamo"
          : lang === "fr"
          ? "Démarrage serein"
          : lang === "es"
          ? "Comenzamos"
          : "Get Started",
      description:
        lang === "it"
          ? "Tu continui a concentrarti sulle tue priorità. Io mi occupo delle attività che abbiamo deciso di delegare."
          : lang === "fr"
          ? "Vous vous recentrez sur votre cœur de métier. Je prends en charge les tâches déléguées avec rigueur."
          : lang === "es"
          ? "Tú te enfocas en tus prioridades. Yo me encargo de las gestiones delegadas con total autonomía."
          : "You focus fully on high-value client work while I handle the operational foundation.",
    },
  ];

  const blogPosts = getBlogPosts(lang).filter(post => post.published !== false).sort((a,b) => b.dateISO.localeCompare(a.dateISO)).slice(0, 3);

  const faqs = [
    {
      q:
        lang === "it"
          ? "Posso affidarti solo alcune attività?"
          : lang === "fr"
          ? "Puis-je vous confier seulement certaines tâches ?"
          : lang === "es"
          ? "¿Puedo delegarte solo algunas tareas específicas?"
          : "Can I delegate only specific tasks?",
      a:
        lang === "it"
          ? "Sì. Possiamo iniziare anche da una singola esigenza e valutare successivamente se ampliare la collaborazione."
          : lang === "fr"
          ? "Oui. Nous pouvons commencer par un besoin précis et évaluer ensuite l'élargissement de notre collaboration."
          : lang === "es"
          ? "Sí. Podemos empezar por una necesidad puntual y valorar más adelante si ampliamos la colaboración."
          : "Yes. We can begin with a single specific operational need and expand collaboration over time as required.",
    },
    {
      q:
        lang === "it"
          ? "Devo impegnarmi per un numero fisso di ore?"
          : lang === "fr"
          ? "Dois-je m'engager sur un nombre d'heures fixe ?"
          : lang === "es"
          ? "¿Debo comprometerme a un número fijo de horas?"
          : "Do I have to commit to a fixed number of hours?",
      a:
        lang === "it"
          ? "No. La modalità di collaborazione viene definita in base alle attività e alle tue esigenze, a tariffa oraria o a pacchetto, con massima flessibilità e senza vincoli rigidi."
          : lang === "fr"
          ? "Non. Les modalités de travail sont convenues selon vos besoins effectifs, au taux horaire ou au forfait, avec une grande flexibilité et sans contrainte rigide."
          : lang === "es"
          ? "No. La modalidad de colaboración se define según tus necesidades y volumen real, por horas o por paquete, con total flexibilidad y sin ataduras rígidas."
          : "No. The terms of collaboration are structured flexibly around your specific workload and actual needs, hourly or packaged, without rigid lock-ins.",
    },
    {
      q:
        lang === "it"
          ? "Lavori anche con clienti internazionali?"
          : lang === "fr"
          ? "Travaillez-vous avec des clients internationaux ?"
          : lang === "es"
          ? "¿Trabajas con clientes internacionales?"
          : "Are you available for international clients?",
      a:
        lang === "it"
          ? "Sì. Lavoro da remoto con professionisti italiani e attività estere che hanno già clienti o progetti in Italia. Offro traduzioni nei due sensi tra italiano e inglese, francese e spagnolo, oltre alla localizzazione per il pubblico italiano e al supporto per le comunicazioni con clienti già acquisiti."
          : lang === "fr"
          ? "Oui. Je travaille à distance avec des professionnels et de petites entreprises ayant des clients ou des activités en Italie. Je traduis dans les deux sens entre l’italien et le français, l’anglais ou l’espagnol ; la localisation vers l’italien et les échanges avec les clients existants sont également proposés."
          : lang === "es"
          ? "Sí. Trabajo a distancia con profesionales y pequeñas empresas que ya tienen clientes o actividades en Italia. Traduzco en ambos sentidos entre el italiano y el español, el inglés o el francés; también ofrezco localización al italiano y apoyo escrito a clientes existentes."
          : "Yes. I work remotely with professionals and small businesses that have customers or activities in Italy. I translate between Italian and English, French or Spanish in both directions, with a particular focus on localisation for Italian audiences and written support for existing customers.",
    },
    {
      q:
        lang === "it"
          ? "Puoi aiutarmi con il mio sito?"
          : lang === "fr"
          ? "Pouvez-vous m'aider avec mon site internet ?"
          : lang === "es"
          ? "¿Puedes ayudarme con mi página web?"
          : "Can you help me with my website?",
      a:
        lang === "it"
          ? "Sì, per la parte editoriale: posso organizzare, aggiornare e revisionare testi e contenuti di siti e landing page esistenti. Sviluppo tecnico, hosting e manutenzione non fanno parte di questo servizio."
          : lang === "fr"
          ? "Oui, pour la partie éditoriale : je révise, adapte et organise les contenus de sites et de pages de destination existants. Je ne propose pas le développement technique, l’hébergement ou la maintenance web."
          : lang === "es"
          ? "Sí, en la parte editorial: reviso, adapto y organizo textos y contenidos de sitios web y páginas de destino existentes. Este servicio no incluye desarrollo técnico, alojamiento ni mantenimiento web."
          : "Yes, on the editorial side: I review, adapt and organise copy for existing websites and landing pages. Website development, hosting and technical maintenance are not included.",
    },
    {
      q:
        lang === "it"
          ? "Ti occupi di contabilità e fatturazione?"
          : lang === "fr"
          ? "Gérez-vous la comptabilité et la facturation ?"
          : lang === "es"
          ? "¿Te encargas de la contabilidad y facturación?"
          : "Do you handle accounting and fiscal filings?",
      a:
        lang === "it"
          ? "No. Non offro servizi amministrativi, contabili, di fatturazione o fiscali. Posso invece organizzare documenti e informazioni relativi alle attività operative concordate."
          : lang === "fr"
          ? "Non. Je ne propose ni gestion administrative, ni comptabilité, ni facturation, ni services fiscaux. Je peux toutefois organiser les documents et informations liés aux tâches opérationnelles convenues."
          : lang === "es"
          ? "No. No ofrezco servicios administrativos, contables, de facturación ni fiscales. Sí puedo organizar documentos e información vinculados a las tareas operativas acordadas."
          : "No. I do not provide business administration, bookkeeping, invoicing or tax services. I can organise documents and information related to agreed operational tasks.",
    },
    {
      q:
        lang === "it"
          ? "Posso iniziare con una sola attività?"
          : lang === "fr"
          ? "Puis-je commencer par une seule mission ?"
          : lang === "es"
          ? "¿Puedo empezar con una sola tarea?"
          : "Can I start with just one assignment?",
      a:
        lang === "it"
          ? "Certamente. Possiamo partire da ciò che oggi ti occupa più tempo o ti crea maggiore difficoltà."
          : lang === "fr"
          ? "Absolument. Nous pouvons débuter par la tâche qui absorbe le plus clair de votre temps ou freine votre productivité."
          : lang === "es"
          ? "Por supuesto. Podemos empezar por la tarea que hoy te absorbe más tiempo o te genera mayor atasco."
          : "Certainly. Starting with the single task that drains most of your time is often the best first step.",
    },
    {
      q:
        lang === "it"
          ? "Come funziona il primo contatto?"
          : lang === "fr"
          ? "Comment fonctionne le premier contact ?"
          : lang === "es"
          ? "¿Cómo es el primer contacto?"
          : "How does the first enquiry work?",
      a:
        lang === "it"
          ? "Descrivi la tua esigenza nel modulo contatti. Valuto il perimetro e ti rispondo per iscritto con eventuali domande e un preventivo, prima di iniziare."
          : lang === "fr"
          ? "Décrivez votre besoin dans le formulaire. Je vous répondrai par écrit, avec les précisions nécessaires et un devis avant toute mission."
          : lang === "es"
          ? "Describe tu necesidad en el formulario. Te responderé por escrito, con las aclaraciones y un presupuesto antes de empezar."
          : "Send a written brief using the contact form. I will reply with any questions and a tailored quote before any work starts.",
    },
  ];

  return (
    <Layout lang={lang}>
      {/* ── SECTION 1: HERO (EXACT MATCH TO LIVE WEBSITE) ── */}
      <section
        id="home"
        className="relative flex flex-col md:flex-row md:items-center overflow-hidden min-h-[100svh] md:min-h-[600px] lg:min-h-[750px] bg-transparent"
      >
        {/* Right authentic photograph with live site mask & scale */}
        <div className="relative md:absolute md:inset-0 w-full md:h-full z-0 flex justify-center md:justify-end animate-in fade-in duration-1000">
          <img
            src="/noemi-tomassetti.png"
            alt="Noemi Tomassetti Assistente Virtuale"
            width="800"
            height="1200"
            loading="eager"
            className="w-full md:w-[60%] lg:w-[50%] xl:w-[45%] h-auto md:h-full object-cover object-[center_12%] md:object-[center_18%] scale-105 md:scale-110 origin-top [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] md:[mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_100%)]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10 md:w-[60%] hidden md:block pointer-events-none" />
        </div>

        {/* Left Hero typography and CTA */}
        <div className="container relative z-10 px-4 md:px-6 pb-12 pt-4 md:pt-0 flex flex-col justify-center -mt-16 md:mt-0">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="sr-only">
              {lang === "it"
                ? "Noemi Tomassetti - Assistente Virtuale per professionisti, consulenti e piccole attività. Segreteria, organizzazione, comunicazione multilingue, traduzione e contenuti per siti web."
                : lang === "fr"
                ? "Noemi Tomassetti - Assistante virtuelle pour professionnels et petites entreprises. Soutien opérationnel lié à l’Italie, traduction italien ↔ français/anglais/espagnol et localisation en italien."
                : lang === "es"
                ? "Noemi Tomassetti - Asistente virtual para profesionales y pequeñas empresas. Apoyo operativo relacionado con Italia, traducción italiano ↔ español/inglés/francés y localización al italiano."
                : "Noemi Tomassetti - Virtual Assistant for professionals and small businesses. Operational back office, organisational support, multilingual communication and Italian-language website content."}
            </h1>

            {/* SVG Logo: Noemi Tomassetti / VIRTUAL ASSISTANT */}
            <div className="mb-6 md:mb-8 w-full max-w-[280px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[600px]">
              <svg
                viewBox="0 0 400 68"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Noemi Tomassetti Virtual Assistant"
                role="img"
              >
                <title>Noemi Tomassetti - Virtual Assistant</title>
                <text
                  x="0"
                  y="42"
                  fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
                  fontWeight="500"
                  fontSize="40"
                  fill="#e5c0a1"
                  textLength="400"
                  lengthAdjust="spacing"
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}
                >
                  Noemi Tomassetti
                </text>
                <text
                  x="0"
                  y="62"
                  fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
                  fontWeight="300"
                  fontSize="14"
                  fill="rgba(229, 192, 161, 0.9)"
                  letterSpacing="5"
                  textLength="400"
                  lengthAdjust="spacing"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}
                >
                  VIRTUAL ASSISTANT
                </text>
              </svg>
            </div>

            <div className="text-base md:text-lg leading-relaxed text-white mb-8 md:mb-10 max-w-xl space-y-4 md:space-y-6">
              <h2 className="font-normal text-[#e5c0a1] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight drop-shadow-md">
                {dict.hero.headline || "Il supporto che ti aiuta a lavorare meglio, con più ordine."}
              </h2>
              <p className="font-medium text-white text-base sm:text-lg drop-shadow-sm">
                {dict.hero.subtitle}
              </p>
              <div className="space-y-3">
                <p className="font-light text-white/95 text-sm sm:text-base md:text-base lg:text-lg drop-shadow-sm">
                  {dict.hero.desc1 ||
                    "Metto a disposizione oltre vent'anni di esperienza organizzativa e linguistica per aiutarti a gestire meglio il lavoro quotidiano."}
                </p>
                <p className="font-light text-white/95 text-sm sm:text-base md:text-base lg:text-lg drop-shadow-sm">
                  {dict.hero.desc2 ||
                    "Dalla gestione di email e appuntamenti alla comunicazione con i clienti, dalla traduzione alla revisione dei contenuti web: un supporto professionale e flessibile, costruito sulle tue esigenze."}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <BookingButton
                size="lg"
                aria-label={dict.hero.ctaButton || "RICHIEDI UN PREVENTIVO"}
                className="text-sm md:text-base px-6 py-6 sm:px-8 rounded-md font-semibold shadow-[0_0_15px_rgba(229,192,161,0.2)] w-full sm:w-auto bg-[#e5c0a1] text-[#0a2d26] hover:bg-[#e5c0a1] hover:scale-105 hover:shadow-[0_0_25px_rgba(229,192,161,0.4)] uppercase tracking-wide transition-all duration-300"
              >
                {dict.hero.ctaButton || "RICHIEDI UN PREVENTIVO"}
              </BookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: NON TUTTO QUELLO CHE DEVI FARE ── */}
      <section className="bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <div className="container px-4 md:px-6 py-12 md:py-20 max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
            {lang === "it"
              ? "Non tutto quello che devi fare deve necessariamente essere fatto da te."
              : lang === "fr"
              ? "Tout ce qui doit être fait ne doit pas nécessairement être fait par vous."
              : lang === "es"
              ? "No todo lo que tienes que hacer debe necesariamente ser hecho por ti."
              : "Not everything that needs to get done has to be done by you."}
          </h2>
          <div className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed space-y-4">
            <p>
              {lang === "it"
                ? "Gestire un'attività significa occuparsi del proprio lavoro, ma anche di tutto ciò che gli gira intorno."
                : lang === "fr"
                ? "Gérer une activité, c'est exercer son métier, mais aussi s'occuper de tout ce qui gravite autour."
                : lang === "es"
                ? "Gestionar un negocio significa realizar tu trabajo, pero también todo lo que lo rodea."
                : "Running a business means doing what you love, but also managing everything that surrounds it."}
            </p>
            <p>
              {lang === "it"
                ? "Email, appuntamenti, richieste dei clienti, documenti, comunicazioni, organizzazione e tante piccole attività che, una dopo l'altra, finiscono per occupare tempo e attenzione."
                : lang === "fr"
                ? "E-mails, plannings, messages de clients, classement et micro-tâches qui, bout à bout, saturent vos journées."
                : lang === "es"
                ? "Emails, citas, consultas, documentos y micro-tareas que van acumulando horas y dispersando tu atención."
                : "Emails, calendar coordination, existing-customer queries and documents that take up time and attention."}
            </p>
            <p className="font-semibold text-foreground">
              {lang === "it"
                ? "Sono importanti, ma non sempre richiedono la tua presenza."
                : lang === "fr"
                ? "Elles sont essentielles, mais ne nécessitent pas toujours votre présence directe."
                : lang === "es"
                ? "Son fundamentales, pero no requieren indispensablemente tu presencia directa."
                : "They are essential, but they do not always require your direct presence."}
            </p>
          </div>

          <div className="mt-10 pt-8 border-t border-border/40">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
              {lang === "it"
                ? "È qui che posso offrirti il mio supporto."
                : lang === "fr"
                ? "C'est précisément là que mon intervention prend tout son sens."
                : lang === "es"
                ? "Es aquí donde mi apoyo marca la diferencia."
                : "This is where my support steps in."}
            </h3>
            <div className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed space-y-3">
              <p>
                {lang === "it"
                  ? "Posso occuparmi di alcune delle attività di segreteria, organizzazione, comunicazione e supporto operativo che fanno parte della gestione quotidiana della tua attività."
                  : lang === "fr"
                  ? "Je peux prendre en charge la correspondance avec les clients italiens existants, les tâches de back-office convenues, les traductions dans les deux sens avec l’italien et la localisation pour l’Italie."
                  : lang === "es"
                  ? "Puedo encargarme de la atención escrita a clientes italianos existentes, tareas operativas acordadas, traducciones en ambos sentidos con el italiano y localización para Italia."
                  : "I can help with Italy-related back-office tasks, written support for existing Italian customers, translation in both directions with Italian, and localisation for Italy."}
              </p>
              <p>
                {lang === "it"
                  ? "L'obiettivo è semplice: aiutarti a lavorare con più ordine e avere più tempo e attenzione per le tue priorità."
                  : lang === "fr"
                  ? "L'objectif est limpide : vous aider à travailler avec plus de sérénité et libérer votre esprit pour vos priorités."
                  : lang === "es"
                  ? "El objetivo es simple: ayudarte a trabajar con más orden y disponer de más tiempo para tus prioridades."
                  : "The objective is straightforward: bringing order to your workflows so you can focus on what matters most."}
              </p>
            </div>

            <div className="bg-card border border-primary/20 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div>
                <p className="font-bold text-foreground text-base sm:text-lg">
                  {lang === "it"
                    ? "Vuoi scoprire cosa possiamo delegare e come posso aiutarti?"
                    : lang === "fr" ? "Vous souhaitez savoir quelles tâches me confier ?" : lang === "es" ? "¿Quieres saber qué tareas puedes delegarme?" : "Curious about what you can delegate and how we can work together?"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {lang === "it"
                    ? "Scopri tutte le aree di supporto e i servizi dedicati."
                    : lang === "fr" ? "Découvrez les services et les domaines dans lesquels je peux vous accompagner." : lang === "es" ? "Descubre los servicios y las áreas en las que puedo ayudarte." : "Explore all dedicated areas of support and services."}
                </p>
              </div>
              <Button
                asChild
                className="shrink-0 uppercase font-bold text-xs tracking-wider px-6 py-5 bg-primary text-primary-foreground hover:scale-105 transition-all"
              >
                <a href="#servizi">
                  {lang === "it" ? "SCOPRI I SERVIZI" : lang === "fr" ? "DÉCOUVRIR LES SERVICES" : lang === "es" ? "DESCUBRIR LOS SERVICIOS" : "EXPLORE SERVICES"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PIACERE, SONO NOEMI (#chi-sono) ── */}
      <section
        id="chi-sono"
        className="container px-4 md:px-6 py-12 md:py-20 max-w-4xl mx-auto scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
      >
        <div className="space-y-5 text-base md:text-lg text-foreground/85 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">
            {lang === "it"
              ? "Piacere, sono Noemi."
              : lang === "fr"
              ? "Enchantée, je suis Noemi."
              : lang === "es"
              ? "Encantada, soy Noemi."
              : "Hello, I am Noemi."}
          </h2>
          <p>
            {lang === "it" ? (
              <>
                Metto a disposizione{" "}
                <strong>oltre 20 anni di esperienza professionale</strong> maturata in customer care, back office, organizzazione e supporto operativo, unita a una solida formazione linguistica.
              </>
            ) : lang === "fr" ? (
              <>
                Je mets à votre disposition{" "}
                <strong>plus de 20 ans d’expérience professionnelle</strong> acquise dans le service client, le back-office, l’organisation et le soutien opérationnel, alliée à une solide formation linguistique.
              </>
            ) : lang === "es" ? (
              <>
                Pongo a tu disposición{" "}
                <strong>más de 20 años de experiencia profesional</strong> adquirida en atención al cliente, back office, organización y soporte operativo, junto con una sólida formación lingüística.
              </>
            ) : (
              <>
                I offer{" "}
                <strong>over 20 years of professional experience</strong> gained across customer care, back-office operations, organisational support, and operational support, paired with strong linguistic credentials.
              </>
            )}
          </p>
          <p>
            {lang === "it" ? (
              <>
                Ho conseguito la{" "}
                <strong>Laurea triennale in Mediazione Linguistica presso l'Università degli Studi di Macerata</strong> (2009, con votazione <strong>110/110 e lode</strong>), seguita dal{" "}
                <strong>Master Universitario di I livello in Traduzione Specialistica – lingua inglese</strong> (2010–2012, 1.500 ore, 60 CFU) con superamento della prova finale.
              </>
            ) : lang === "fr" ? (
              <>
                Je suis titulaire d’une{" "}
                <strong>licence en Médiation Linguistique de l’Université de Macerata</strong> (2009, mention <strong>110/110 e lode (mention italienne)</strong>), suivie d’un{" "}
                <strong>Master Universitaire de Ier niveau en Traduction Spécialisée – langue anglaise</strong> (2010–2012, 1 500 heures, 60 ECTS) avec épreuve finale validée.
              </>
            ) : lang === "es" ? (
              <>
                Cuento con el{" "}
                <strong>Grado en Mediación Lingüística por la Universidad de Macerata</strong> (2009, calificada con <strong>110/110 e lode (distinción italiana)</strong>), seguido del{" "}
                <strong>máster universitario italiano de primer nivel en Traducción Especializada (inglés)</strong> (2010–2012, 1.500 horas, 60 créditos ECTS) con examen final superado.
              </>
            ) : (
              <>
                I hold a{" "}
                <strong>Bachelor's Degree in Linguistic Mediation from the University of Macerata</strong> (2009, awarded <strong>110/110 e lode (highest honours in Italy)</strong>), followed by a{" "}
                <strong>1st-Level University Postgraduate training in Specialised Translation – English language</strong> (2010–2012, 1,500 hours, 60 ECTS credits) with successful final examination.
              </>
            )}
          </p>
          <p>
            {lang === "it" ? (
              <>
                L'italiano è la mia lingua madre. Offro traduzioni <strong>IT ↔ EN, IT ↔ FR e IT ↔ ES</strong>, nei due sensi, valutando testi e ambiti specialistici prima del preventivo. Curo inoltre le comunicazioni professionali multilingue.
              </>
            ) : lang === "fr" ? (
              <>
                L’italien est ma langue maternelle. Je traduis <strong>entre l’italien et le français, l’anglais ou l’espagnol dans les deux sens</strong>, selon le texte, et j’accompagne vos communications avec vos interlocuteurs italiens.
              </>
            ) : lang === "es" ? (
              <>
                Mi lengua materna es el italiano. Ofrezco traducciones <strong>entre el italiano y el español, el inglés o el francés en ambos sentidos</strong>, según el texto, y apoyo las comunicaciones con tus clientes e interlocutores italianos.
              </>
            ) : (
              <>
                Italian is my native language. I translate <strong>between Italian and English, French or Spanish in both directions</strong>, assessing each text and its intended use, and support communications with existing Italian customers and partners.
              </>
            )}
          </p>
          <p>
            {lang === "it" ? (
              <>
                Oggi metto queste competenze al servizio di{" "}
                <strong>professionisti, consulenti, formatori e piccole attività</strong> che hanno bisogno di un supporto affidabile per gestire meglio il lavoro quotidiano, con precisione, puntualità e riservatezza.
              </>
            ) : lang === "fr" ? (
              <>
                Aujourd’hui, j’apporte ces compétences aux{" "}
                <strong>professionnels indépendants, consultants, formateurs et petites structures</strong> en quête d’un soutien d’excellence pour simplifier leur gestion quotidienne.
              </>
            ) : lang === "es" ? (
              <>
                Hoy pongo estas competencias al servicio de{" "}
                <strong>profesionales independientes, consultores, formadores y pequeñas actividades</strong> que buscan un respaldo riguroso para optimizar su gestión diaria.
              </>
            ) : (
              <>
                Today, I bring these capabilities to{" "}
                <strong>independent professionals, consultants, trainers, and small business owners</strong> seeking high-standard, dependable support to streamline operations and elevate their client experience.
              </>
            )}
          </p>

          <div className="my-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r-xl space-y-3">
            <h3 className="text-xl md:text-2xl font-bold text-primary">
              {lang === "it" ? "Il mio modo di lavorare" : lang === "fr" ? "Ma manière de travailler" : lang === "es" ? "Mi forma de trabajar" : "My Way of Working"}
            </h3>
            <p className="text-foreground/90 leading-relaxed">
              {lang === "it"
                ? "Ogni collaborazione parte dall'ascolto."
                : lang === "fr" ? "Chaque collaboration commence par l’écoute." : lang === "es" ? "Cada colaboración empieza por escuchar." : "Every collaboration begins with attentive listening."}
            </p>
            <p className="text-foreground/90 leading-relaxed">
              {lang === "it"
                ? "Mi racconti la tua attività, le tue esigenze e le attività che ti occupano più tempo. Insieme individuiamo ciò che ha senso delegare e definiamo una modalità di lavoro semplice e sostenibile."
                : lang === "fr" ? "Vous me présentez votre activité, vos besoins et vos priorités. Nous définissons ensemble les tâches à déléguer et une méthode de travail claire et adaptée." : lang === "es" ? "Me explicas cómo funciona tu actividad y cuáles son tus prioridades. Juntos definimos qué tareas delegar y una forma de trabajar clara y sostenible." : "You share your business rhythm, daily friction points, and key priorities. Together, we identify what makes practical sense to delegate and design a sustainable workflow."}
            </p>
            <p className="text-foreground font-semibold">
              {lang === "it"
                ? "Nessuna formula standard. Partiamo da ciò che ti serve davvero."
                : lang === "fr" ? "Pas de formule imposée : nous partons de vos besoins concrets." : lang === "es" ? "Sin fórmulas rígidas: partimos de lo que realmente necesitas." : "No rigid templates. We start from what you genuinely need."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <BookingButton
              size="lg"
              className="text-sm md:text-base px-8 py-6 rounded-md font-semibold bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 uppercase tracking-wide"
            >
              {lang === "it" ? "RICHIEDI PREVENTIVO" : lang === "fr" ? "DEMANDER UN DEVIS" : lang === "es" ? "SOLICITAR UN PRESUPUESTO" : "REQUEST A QUOTE"}
            </BookingButton>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: DELEGARE NON SIGNIFICA PERDERE IL CONTROLLO ── */}
      <section className="bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <div className="container px-4 md:px-6 py-12 md:py-20 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            {lang === "it"
              ? "Delegare non significa perdere il controllo."
              : lang === "fr" ? "Déléguer, ce n’est pas perdre le contrôle." : lang === "es" ? "Delegar no significa perder el control." : "Delegating does not mean losing control."}
          </h2>
          <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed">
            {lang === "it"
              ? "Significa scegliere con attenzione quali attività continuare a gestire personalmente e quali affidare a qualcuno che possa occuparsene con precisione e continuità."
              : lang === "fr" ? "C’est choisir les tâches que vous souhaitez conserver et confier les autres à une professionnelle attentive et fiable." : lang === "es" ? "Significa elegir qué tareas quieres seguir gestionando personalmente y cuáles puedes confiar a una profesional que se ocupe de ellas con rigor." : "It means deliberately choosing which high-value areas to keep close, and entrusting operational execution to a dependable professional."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {delegationBenefits.map((b, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 bg-background border border-border/60 rounded-xl"
              >
                <CheckCircle2 className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{b.title}</h3>
                  <p className="text-foreground/80 text-base">{b.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl font-semibold text-foreground mb-12">
            {lang === "it"
              ? "Il mio obiettivo non è sostituirti. È aiutarti a gestire meglio il lavoro."
              : lang === "fr" ? "Mon rôle n’est pas de vous remplacer, mais de vous aider à mieux organiser votre travail." : lang === "es" ? "Mi objetivo no es sustituirte, sino ayudarte a organizar mejor tu trabajo." : "My goal is not to replace you. It is to help you operate with greater ease and focus."}
          </p>

          <div className="border-t border-border/40 pt-10">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
              {lang === "it" ? "Competenze costruite nel tempo" : lang === "fr" ? "Des compétences acquises au fil des années" : lang === "es" ? "Competencias desarrolladas con la experiencia" : "Skills Built Over Time"}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {experienceItems.map((item, i) => {
                const IconComp = item.icon;
                return (
                  <div key={i} className="p-5 bg-card border border-border rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComp className="w-5 h-5 text-primary flex-shrink-0" />
                      <h4 className="font-semibold text-primary text-base md:text-lg">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-foreground/80 text-base whitespace-pre-line leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: COME POSSO AIUTARTI (#servizi) ── */}
      <section
        id="servizi"
        className="container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
      >
        <div className="max-w-4xl mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            {lang === "it" ? "Come posso aiutarti" : lang === "fr" ? "Comment puis-je vous aider ?" : lang === "es" ? "¿Cómo puedo ayudarte?" : "How I Can Support You"}
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            {lang === "it"
              ? "Il mio supporto si concentra su alcune aree precise. Puoi affidarmi una singola attività oppure costruire nel tempo una collaborazione più ampia."
              : lang === "fr" ? "Mon accompagnement porte sur des tâches bien définies. Vous pouvez commencer par une mission ponctuelle ou mettre en place une collaboration suivie." : lang === "es" ? "Mi apoyo se centra en tareas concretas. Puedes empezar por un encargo puntual o establecer una colaboración continuada." : "My assistance focuses on well-defined domains. You can start with a single assignment or establish an ongoing operational partnership."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dict.servicesSection.categories.map((svc) => {
            const Icon = getServiceIcon(svc.id);
            return (
              <div
                key={svc.id}
                className="flex flex-col bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{svc.title}</h3>
                {svc.subtitle && (
                  <p className="text-xs font-semibold text-primary/85 mb-3">
                    {svc.subtitle}
                  </p>
                )}
                <p className="text-sm text-foreground/80 leading-relaxed mb-4">
                  {svc.description}
                </p>
                <div className="space-y-2 text-foreground/80 text-sm leading-relaxed mb-6 flex-grow">
                  <p className="font-semibold text-foreground/90 text-xs uppercase tracking-wider">
                    {lang === "it"
                      ? "Cosa include:"
                      : lang === "fr"
                      ? "Exemples d'interventions :"
                      : lang === "es"
                      ? "Qué incluye:"
                      : "What is included:"}
                  </p>
                  <ul className="space-y-1.5 pl-2">
                    {svc.items.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                        <span className="text-primary text-xs mt-1">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/40 mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full text-xs font-bold uppercase tracking-wider border-primary/40 text-primary hover:bg-primary/10"
                  >
                    <Link to={`${servicesPath}#${svc.id}`}>
                      {lang === "it"
                        ? "SCOPRI IL SERVIZIO"
                        : lang === "fr"
                        ? "DÉCOUVRIR LE SERVICE"
                        : lang === "es"
                        ? "CONOCER EL SERVICIO"
                        : "LEARN MORE"}
                    </Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Teaser & Table directly on homepage (Point 36) */}
        <div className="mt-16">
          <PricingSection lang={lang} />
        </div>
      </section>

      {/* ── SECTION 6: UN SUPPORTO PENSATO PER ATTIVITÀ DIVERSE (#supporto) ── */}
      <section
        id="supporto"
        className="bg-muted/50 border-y border-border/30 container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
      >
        <div className="max-w-4xl mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            {lang === "it"
              ? "Un supporto pensato per attività diverse"
              : lang === "fr" ? "Un accompagnement adapté à différentes activités" : lang === "es" ? "Apoyo adaptado a distintos profesionales" : "Support Tailored to Diverse Needs"}
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            {lang === "it"
              ? "Ogni professione ha le sue specificità, ma molte esigenze organizzative e di gestione sono comuni:" : lang === "fr" ? "Chaque activité a ses particularités, mais de nombreuses tâches d’organisation se ressemblent." : lang === "es" ? "Cada actividad tiene sus particularidades, pero muchas necesidades de organización son similares." : "Every business has unique characteristics, yet core organisational needs are often similar."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((tgt, idx) => {
            const Icon = tgt.icon;
            return (
              <div
                key={idx}
                className="flex flex-col bg-background p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{tgt.title}</h3>
                <p className="text-foreground/80 leading-relaxed text-sm">
                  {tgt.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 border-t border-border/40 pt-6 space-y-2">
          <h3 className="text-lg md:text-xl font-bold text-primary">
            {lang === "it" ? "La tua attività è diversa?" : lang === "fr" ? "Votre activité est différente ?" : lang === "es" ? "¿Tu actividad es diferente?" : "Is your business different?"}
          </h3>
          <p className="text-base md:text-lg text-foreground/85">
            {lang === "it"
              ? "Raccontami di cosa ti occupi. Possiamo valutare insieme se e come posso esserti utile."
              : lang === "fr" ? "Décrivez-moi votre activité : nous verrons ensemble si mes services répondent à vos besoins." : lang === "es" ? "Cuéntame a qué te dedicas y valoraremos si mis servicios encajan con tus necesidades." : "Tell me about your distinct activities. Together we can determine how my support can be most effective."}
          </p>
        </div>
      </section>

      {/* ── SECTION 7: INIZIARE È SEMPLICE (#collaborazione) ── */}
      <section
        id="collaborazione"
        className="container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-12 text-left">
          {lang === "it" ? "Iniziare è semplice." : lang === "fr" ? "Commencer est simple." : lang === "es" ? "Empezar es sencillo." : "Getting Started is Simple."}
        </h2>

        {/* Desktop Curved Process Ribbon */}
        <div className="hidden lg:flex w-full max-w-6xl mx-auto relative pt-4 pb-4">
          {steps.map((step, idx) => {
            const isTop = idx % 2 === 0;
            const isLast = idx === steps.length - 1;
            const isFirst = idx === 0;

            return (
              <div
                key={idx}
                className={`flex flex-col flex-1 ${idx !== 0 ? "-ml-[2px]" : ""}`}
              >
                <div
                  className={`relative flex-1 p-4 xl:p-6 flex flex-col items-center justify-center ${
                    isTop ? "border-t-2 border-l-2 border-r-2 border-primary rounded-t-[2rem]" : ""
                  }`}
                  style={{ minHeight: "220px" }}
                >
                  {isTop && (
                    <>
                      <span className="text-xs font-bold text-primary mb-1">{step.number}</span>
                      <h3 className="text-lg xl:text-xl font-semibold text-primary text-center mb-2">
                        {step.title}
                      </h3>
                      <p className="text-foreground/80 text-sm xl:text-base text-center leading-relaxed">
                        {step.description}
                      </p>
                    </>
                  )}
                  {isFirst && isTop && (
                    <div className="absolute -left-[6px] -bottom-[6px] w-3.5 h-3.5 rounded-full bg-primary" />
                  )}
                  {isLast && isTop && (
                    <div className="absolute -right-[6px] -bottom-[6px] w-3.5 h-3.5 rounded-full bg-primary" />
                  )}
                  {isTop && !isLast && (
                    <div className="absolute -right-[11px] -bottom-[11px] z-10 text-primary bg-background w-6 h-6 flex items-center justify-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  )}
                </div>

                <div
                  className={`relative flex-1 p-4 xl:p-6 flex flex-col items-center justify-center ${
                    !isTop ? "border-b-2 border-l-2 border-r-2 border-primary rounded-b-[2rem]" : ""
                  }`}
                  style={{ minHeight: "220px" }}
                >
                  {!isTop && (
                    <>
                      <span className="text-xs font-bold text-primary mb-1">{step.number}</span>
                      <h3 className="text-lg xl:text-xl font-semibold text-primary text-center mb-2">
                        {step.title}
                      </h3>
                      <p className="text-foreground/80 text-sm xl:text-base text-center leading-relaxed">
                        {step.description}
                      </p>
                    </>
                  )}
                  {!isTop && !isLast && (
                    <div className="absolute -right-[11px] -top-[11px] z-10 text-primary bg-background w-6 h-6 flex items-center justify-center">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 15l-6-6-6 6" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-primary/50 mt-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex items-start gap-6">
              <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center flex-shrink-0 z-10">
                <span className="text-primary font-bold">{step.number}</span>
              </div>
              <div className="pt-1 pb-2">
                <h3 className="text-lg font-semibold text-primary mb-1">{step.title}</h3>
                <p className="text-foreground/80 text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-start">
          <BookingButton
            size="lg"
            className="px-8 py-6 rounded-md font-semibold bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 uppercase tracking-wide"
          >
            {dict.hero.ctaButton || "RICHIEDI UN PREVENTIVO"}
          </BookingButton>
        </div>
      </section>

      {/* ── SECTION 9: EVIDENCE OF WORK & TRUST LAYER ── */}
      <section className="container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            {lang === "it"
              ? "Trasparenza & Valore Reale"
              : lang === "fr"
              ? "Transparence & Preuves Concrètes"
              : lang === "es"
              ? "Transparencia & Compromiso Real"
              : "Transparent Background & Work Examples"}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            {lang === "it"
              ? "Una persona reale. Un supporto concreto."
              : lang === "fr"
              ? "Une personne réelle. Un soutien concret."
              : lang === "es"
              ? "Una persona real. Un apoyo concreto."
              : "A real person. Concrete professional support."}
          </h2>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
            {lang === "it"
              ? "La fiducia non nasce da slogan o recensioni anonime, ma da fatti verificabili: formazione accademica d'eccellenza, oltre vent'anni di esperienza professionale e deliverable dimostrativi aperti."
              : lang === "fr"
              ? "La confiance repose sur des informations vérifiables : un parcours universitaire spécialisé, plus de vingt ans d’expérience professionnelle et des études de cas clairement présentées comme des exemples fictifs."
              : lang === "es"
              ? "La confianza se basa en hechos comprobables: formación universitaria con honores, más de 20 años de experiencia y proyectos demostrativos abiertos."
              : "Trust is built on verifiable facts: academic honors, 20+ years of operational experience, transparent pricing, and comprehensive demonstration case studies."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-card border border-border/70 hover:border-primary/40 transition-all flex flex-col justify-between space-y-4 shadow-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground text-base">
                {lang === "it" ? "Formazione Specialistica" : lang === "fr" ? "Une formation universitaire spécialisée" : lang === "es" ? "Formación universitaria especializada" : "Specialist Academic Rigor"}
              </h3>
              <p className="text-xs text-foreground/80 leading-relaxed">
                {lang === "it"
                  ? "Laurea in Mediazione Linguistica (110 e lode) e Master Universitario di I livello in Traduzione Specialistica (1.500 ore, 60 CFU), con approfondimenti in ambito letterario, giuridico, economico, tecnologico e scientifico." : lang === "fr" ? "Diplôme en médiation linguistique avec mention et master universitaire en traduction spécialisée (1 500 heures, 60 ECTS), couvrant cinq domaines de spécialisation." : lang === "es" ? "Título universitario italiano en Mediación Lingüística (110/110 e lode) y máster universitario italiano de primer nivel en Traducción Especializada (1.500 horas, 60 créditos ECTS)." : "Degree in Language Mediation (with honours) and a postgraduate master’s in Specialist Translation covering five fields."}
              </p>
            </div>
            <div className="text-[11px] text-primary font-semibold">
              {lang === "it" ? "IT · EN · FR · ES" : lang === "fr" ? "IT · EN · FR · ES" : lang === "es" ? "IT · EN · FR · ES" : "IT · EN · FR · ES"}
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-card border border-border/70 hover:border-primary/40 transition-all flex flex-col justify-between space-y-4 shadow-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground text-base">
                {lang === "it" ? "20+ Anni di Esperienza" : lang === "fr" ? "Plus de 20 ans d’expérience" : lang === "es" ? "Más de 20 años de experiencia" : "20+ Years in Operations"}
              </h3>
              <p className="text-xs text-foreground/80 leading-relaxed">
                {lang === "it"
                  ? "Oltre vent’anni di esperienze professionali in diversi contesti, tra assistenza clienti, organizzazione e attività di back office."
                  : lang === "fr" ? "Plus de vingt ans d’expérience dans la relation client, l’organisation, le back-office et la communication professionnelle." : lang === "es" ? "Más de veinte años de experiencia en atención al cliente, organización, back office y comunicación profesional." : "Over twenty years of professional experience across customer care, organisation, back-office tasks and client communication."}
              </p>
            </div>
            <div className="text-[11px] text-primary font-semibold">
              {lang === "it" ? "Precisione & Continuità" : lang === "fr" ? "Précision et continuité" : lang === "es" ? "Precisión y continuidad" : "Precision & Continuity"}
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-card border border-border/70 hover:border-primary/40 transition-all flex flex-col justify-between space-y-4 shadow-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground text-base">
                {lang === "it" ? "Tariffe & Metodo Chiari" : lang === "fr" ? "Tarifs et méthode transparents" : lang === "es" ? "Tarifas y método transparentes" : "Clear Pricing & Method"}
              </h3>
              <p className="text-xs text-foreground/80 leading-relaxed">
                {lang === "it"
                  ? "Preventivo confermato per iscritto prima dell'avvio, tracciamento trasparente dei task, nessun costo nascosto a fine mese."
                  : lang === "fr" ? "Chaque mission fait l’objet d’un devis préalable précisant les prestations, les délais et les tarifs, sans frais imprévus." : lang === "es" ? "Cada encargo se define mediante un presupuesto previo que detalla servicios, plazos y tarifas, sin costes imprevistos." : "Written quotes agreed before work begins, clear per-hour and per-word rates, zero unexpected surcharges."}
              </p>
            </div>
            <div className="text-[11px] text-primary font-semibold">
              {lang === "it" ? "Da € 25/h · Da € 0,09/parola" : lang === "fr" ? "Dès 25 €/heure · Dès 0,09 €/mot" : lang === "es" ? "Desde 25 €/hora · Desde 0,09 €/palabra" : "From €25/hr · From €0.09/word"}
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-card border border-border/70 hover:border-primary/40 transition-all flex flex-col justify-between space-y-4 shadow-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground text-base">
                {lang === "it" ? "Identità e contatto diretto" : lang === "fr" ? "Contact direct avec Noemi" : lang === "es" ? "Contacto directo con Noemi" : "Direct contact with Noemi"}
              </h3>
              <p className="text-xs text-foreground/80 leading-relaxed">
                {lang === "it"
                  ? "Sede a Castelfidardo (AN), supporto operativo da remoto in tutta Italia ed estero. Parli direttamente con Noemi, senza agenzie o intermediari."
                  : lang === "fr" ? "Installée à Castelfidardo (Italie), je travaille à distance avec des clients internationaux pour leurs besoins liés à l’italien. Vous échangez directement avec moi." : lang === "es" ? "Trabajo desde Castelfidardo (Italia) y presto servicios a distancia para actividades relacionadas con el mercado italiano. Tratarás directamente conmigo." : "Based in Castelfidardo (AN), Italy. Remote operational support across Europe. Direct contact with Noemi, no agency middlemen."}
              </p>
            </div>
            <div className="text-[11px] text-primary font-semibold">
              info@noemitomassetti.it
            </div>
          </div>
        </div>

        {/* Portfolio & Case Studies Banner */}
        <div className="p-8 rounded-3xl bg-secondary/40 border border-primary/25 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground">
              {lang === "it"
                ? "Guarda concretamente come lavoro attraverso esempi dimostrativi e traduzioni commentate." : lang === "fr" ? "Découvrez mes méthodes à travers des exemples de projets et des traductions commentées." : lang === "es" ? "Descubre mi forma de trabajar a través de ejemplos de proyectos y traducciones comentadas." : "Explore my approach through illustrative projects and annotated translation samples."}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
              {lang === "it"
                ? "Consulta i casi studio, i confronti prima/dopo e i documenti dimostrativi su traduzione, ricerche informative, back office e contenuti per siti web."
                : lang === "fr" ? "Consultez des exemples de traduction, de révision et de soutien opérationnel. Ce sont des démonstrations, et non des missions commandées par des clients." : lang === "es" ? "Consulta ejemplos de traducción, revisión y apoyo operativo. Son muestras demostrativas, no encargos de clientes reales." : "Review illustrative methods, source/target translations and operational work samples created for demonstration."}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              to={getLocalizedPath("portfolio", lang)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:scale-105 transition-all shadow-md gap-2"
            >
              <span>{lang === "it" ? "Esplora gli Esempi di Lavoro" : lang === "fr" ? "DÉCOUVRIR LES EXEMPLES DE TRAVAUX" : lang === "es" ? "VER EJEMPLOS DE TRABAJO" : "View Work Examples"}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: BLOG & RISORSE (#blog) ── */}
      <section
        id="blog"
        className="bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
      >
        <div className="container px-4 md:px-6 py-10 md:py-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {lang === "it" ? "Blog e risorse" : lang === "fr" ? "Blog et ressources" : lang === "es" ? "Blog y recursos" : "Blog and resources"}
            </h2>
            <p className="text-base md:text-lg text-foreground/80">
              {lang === "it"
                ? "Approfondimenti, consigli pratici e strumenti per organizzare il tuo lavoro, comunicare meglio e gestire la tua attività."
                : lang === "fr" ? "Découvrez des articles adaptés en français sur la communication avec l’Italie, la traduction et l’organisation professionnelle." : lang === "es" ? "Descubre artículos adaptados al español sobre comunicación con Italia, traducción y organización del trabajo." : "Explore articles adapted into English on Italian-market communication, translation and practical organisation."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, idx) => (
              <div
                key={post.id}
                className="flex flex-col h-full bg-background border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group"
              >
                <div className="h-44 w-full bg-muted overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.alt || `Copertina: ${post.title}`}
                    loading={idx === 0 ? "eager" : "lazy"}
                    decoding="async"
                    width="400"
                    height="200"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-primary">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-card-foreground leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-card-foreground/80 mt-2 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Button
                      variant="outline"
                      className="w-full text-xs font-semibold uppercase tracking-wider border-border/60 hover:border-primary text-foreground hover:text-primary"
                      asChild
                    >
                      <Link to={getBlogPostPath(post.slug,lang)}>
                        {lang === "it" ? "Leggi l’articolo" : lang === "fr" ? "Lire l’article" : lang === "es" ? "Leer el artículo" : "Read article"}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 rounded-md px-6 py-4 text-xs font-bold uppercase tracking-wider"
            >
              <Link to={getBlogIndexPath(lang)}>
                {lang === "it" ? "Vedi tutti gli articoli" : lang === "fr" ? "Tous les articles" : lang === "es" ? "Todos los artículos" : "All articles"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FAQ (#faq) ── */}
      <section
        id="faq"
        className="scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
      >
        <div className="container px-4 md:px-6 py-12 md:py-20 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
              {lang === "it" ? "Domande frequenti" : lang === "fr" ? "Questions fréquentes" : lang === "es" ? "Preguntas frecuentes" : "Frequently asked questions"}
            </h2>
            <p className="text-base md:text-lg text-foreground/80">
              {lang === "it" ? "Tutto quello che è utile sapere prima di iniziare a collaborare." : lang === "fr" ? "Les réponses aux questions essentielles avant de collaborer." : lang === "es" ? "Respuestas a las preguntas más habituales antes de colaborar." : "Essential information before we start working together."}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:text-primary py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-base leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── SECTION 12: CONTATTI (#contatti) ── */}
      <section
        id="contatti"
        className="bg-muted/50 border-t border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
      >
        <div className="container px-4 md:px-6 py-12 md:py-20 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            {lang === "it" ? "C'è qualcosa che vorresti smettere di gestire da solo?" : lang === "fr" ? "Besoin d’aide pour vos communications avec l’Italie ?" : lang === "es" ? "¿Necesitas apoyo para comunicarte con Italia?" : "Need support with your Italian-language communications?"}
          </h2>
          <div className="text-foreground/85 text-base md:text-lg mb-10 max-w-2xl space-y-3 leading-relaxed">
            <p className="font-semibold text-primary">
              {lang === "it" ? "Parliamone." : lang === "fr" ? "Parlons de votre projet." : lang === "es" ? "Hablemos de tu proyecto." : "Tell me about your project."}
            </p>
            <p>
              {lang === "it" ? "Raccontami di cosa ti occupi, quali attività ti portano via più tempo e cosa vorresti riuscire a delegare." : lang === "fr" ? "Décrivez vos contenus à traduire en italien ou les échanges avec vos clients italiens pour lesquels vous souhaitez un soutien." : lang === "es" ? "Cuéntame qué contenidos necesitas traducir al italiano o qué tareas de comunicación con clientes italianos deseas delegar." : "Tell me which content you need translated into Italian or which existing Italian customer communications you would like support with."}
            </p>
            <p className="font-medium text-foreground">
              {lang === "it" ? "Partiamo da lì." : lang === "fr" ? "Nous partirons de vos besoins concrets." : lang === "es" ? "Partiremos de tus necesidades concretas." : "We will start with your specific needs."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left direct contact details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary mb-5">
                {lang === "it" ? "Il mio supporto per te" : lang === "fr" ? "Ce que je peux vous apporter" : lang === "es" ? "Cómo puedo ayudarte" : "How I can support you"}
              </h3>
              <ul className="space-y-4 text-foreground/90 text-base mb-8">
                {[
                  lang === "it" ? "Analisi delle tue esigenze e priorità" : lang === "fr" ? "Évaluation de vos besoins et priorités" : lang === "es" ? "Análisis de tus necesidades y prioridades" : "Review of your priorities and requirements",
                  lang === "it" ? "Soluzioni personalizzate e flessibili" : lang === "fr" ? "Prestations adaptées à votre projet" : lang === "es" ? "Servicios adaptados a tu proyecto" : "Flexible, project-specific support",
                  lang === "it" ? "Gestione operativa precisa e organizzata" : lang === "fr" ? "Soutien linguistique et opérationnel rigoureux" : lang === "es" ? "Apoyo lingüístico y operativo riguroso" : "Careful linguistic and operational support",
                  lang === "it" ? "Comunicazione chiara e costante" : lang === "fr" ? "Communication claire et suivie" : lang === "es" ? "Comunicación clara y constante" : "Clear, consistent communication",
                  lang === "it" ? "Riservatezza e attenzione ai dettagli" : lang === "fr" ? "Confidentialité et attention aux détails" : lang === "es" ? "Confidencialidad y atención al detalle" : "Discretion and attention to detail",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <address
                className="space-y-3.5 not-italic text-sm md:text-base text-foreground/90 border-t border-border/40 pt-6"
                itemScope
                itemType="https://schema.org/LocalBusiness"
              >
                <meta itemProp="name" content="Noemi Tomassetti Virtual Assistant" />
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:info@noemitomassetti.it"
                    itemProp="email"
                    className="text-primary hover:underline"
                  >
                    info@noemitomassetti.it
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a
                    href="tel:+393884718600"
                    itemProp="telephone"
                    className="hover:text-primary transition-colors"
                  >
                    +39 388 471 8600
                  </a>
                </div>
                <div
                  className="flex items-start gap-3"
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span>
                      <span itemProp="addressLocality">Castelfidardo</span> (
                      <span itemProp="addressRegion">AN</span>) -{" "}
                      <span itemProp="addressCountry">ITALIA</span>
                    </span>
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      {lang === "it" ? "Supporto da remoto in tutta Italia" : lang === "fr" ? "Prestations à distance pour votre activité avec l’Italie" : lang === "es" ? "Servicios a distancia para trabajar con Italia" : "Remote support for businesses working with Italy"}
                    </span>
                  </div>
                </div>
              </address>

              <div className="bg-secondary/30 border border-border rounded-xl p-5 mt-6">
                <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
                  <BookingButton
                    variant="link"
                    className="text-primary font-bold hover:underline p-0 h-auto inline text-sm md:text-base"
                  >
                    {lang === "it" ? "Richiedi un preventivo" : lang === "fr" ? "Demander un devis" : lang === "es" ? "Solicitar un presupuesto" : "Request a quote"}
                  </BookingButton>{" "}
                  {lang === "it" ? "oppure compila il modulo qui accanto." : lang === "fr" ? "ou utilisez le formulaire ci-contre." : lang === "es" ? "o completa el formulario de al lado." : "or complete the form alongside."}
                </p>
              </div>
            </div>

            {/* Right Contact Form */}
            <div>
              <ContactForm lang={lang} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
