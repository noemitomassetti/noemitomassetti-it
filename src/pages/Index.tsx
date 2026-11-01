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
import { getBlogPosts } from "@/lib/blogData";
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
  const noetomPath = getLocalizedPath("noetom", lang);
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
          ? "Réduire considérablement le temps absorbé par la gestion administrative."
          : lang === "es"
          ? "Reducir las horas dedicadas a tareas administrativas rutinarias."
          : "Dramatically cut the time spent on repetitive administrative overhead.",
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
          ? "Une collaboratrice dédiée à qui confier des missions précises."
          : lang === "es"
          ? "Una persona de confianza con quien coordinar tareas definidas."
          : "A dedicated professional you can delegate to with full peace of mind.",
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
          : "A seasoned background built through extensive administrative, linguistic, and operational roles.",
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
          : "Specialized academic honors",
      description:
        lang === "it"
          ? "Laurea in Mediazione Linguistica – 110 e lode\nMaster in Traduzione Specialistica"
          : lang === "fr"
          ? "Diplôme en Médiation Linguistique – 110/110 avec félicitations\nMaster en Traduction Spécialisée"
          : lang === "es"
          ? "Grado en Mediación Lingüística – 110/110 cum laude\nMáster en Traducción Especializada"
          : "Degree in Language Mediation – 110/110 cum laude\nMaster in Specialized Translation",
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
          ? "Un soutien fiable pour le secrétariat, l'organisation documentaire et les opérations administratives."
          : lang === "es"
          ? "Un respaldo continuo para secretaría, organización de datos y gestiones de back office."
          : "Dependable ongoing administrative and back-office support that keeps operations flowing smoothly.",
    },
    {
      icon: Globe,
      title:
        lang === "it"
          ? "Professionisti che lavorano con l'estero"
          : lang === "fr"
          ? "Activités tournées vers l'international"
          : lang === "es"
          ? "Empresas con clientes internacionales"
          : "International Operators",
      description:
        lang === "it"
          ? "Le mie competenze linguistiche possono essere utili per comunicazioni, traduzioni e contenuti destinati a interlocutori internazionali."
          : lang === "fr"
          ? "Mes compétences en 4 langues facilitent vos échanges, traductions et négociations internationales."
          : lang === "es"
          ? "Mis competencias lingüísticas te ayudan con traducciones y comunicación fluida en 4 idiomas."
          : "Linguistic expertise across 4 European languages ensures smooth cross-border communications and translations.",
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

  const blogPosts = getBlogPosts(lang).slice(0, 3);

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
          ? "Noemi è disponibile a lavorare da remoto con professionisti e aziende sia in Italia sia all'estero, offrendo pieno supporto operativo e linguistico in quattro lingue: italiano, inglese, francese e spagnolo."
          : lang === "fr"
          ? "Noemi est disponible pour collaborer à distance avec des professionnels et entreprises en Italie comme à l'étranger, en assurant un soutien opérationnel et linguistique complet en quatre langues : italien, anglais, français et espagnol."
          : lang === "es"
          ? "Noemi está disponible para colaborar a distancia con profesionales y empresas en Italia y en el extranjero, ofreciendo soporte operativo y lingüístico integral en cuatro idiomas: italiano, inglés, francés y español."
          : "Noemi is available to work remotely with professionals and businesses in Italy and abroad, providing dedicated operational and linguistic support across four languages: Italian, English, French, and Spanish.",
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
          ? "Sì. Creo siti web vetrina e landing page essenziali, e posso occuparmi anche di aggiornamenti di testi, layout o contenuti su un sito esistente."
          : lang === "fr"
          ? "Oui. Je conçois des sites vitrines et des pages d'atterrissage épurées, et je peux également actualiser les textes, la mise en page ou les contenus de votre site existant."
          : lang === "es"
          ? "Sí. Diseño sitios web corporativos y landing pages claras, y también puedo ocuparme de actualizar textos, diseño o contenidos en una web existente."
          : "Yes. I create showcase websites and essential landing pages, and can assist with updating copy, layout, or content on existing sites.",
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
          ? "No. Il mio supporto non comprende contabilità, fatturazione o adempimenti fiscali. Posso tuttavia collaborare con il tuo commercialista per la raccolta, la verifica e l'archiviazione ordinata dei documenti."
          : lang === "fr"
          ? "Non. Mes prestations n'incluent ni la comptabilité, ni la facturation, ni les déclarations fiscales. Je peux en revanche assister votre expert-comptable pour la collecte et le classement ordonné des pièces."
          : lang === "es"
          ? "No. Mi soporte no incluye contabilidad, facturación ni trámites fiscales. No obstante, puedo colaborar con tu gestor para la recopilación, verificación y archivo organizado de los documentos."
          : "No. My support does not include fiscal accounting, invoicing, or tax filings. However, I can collaborate with your certified accountant to organize, verify, and deliver documents on schedule.",
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
                ? "Noemi Tomassetti - Assistente Virtuale per professionisti, consulenti e piccole attività. Segreteria, organizzazione, comunicazione multilingue, traduzione e siti web."
                : lang === "fr"
                ? "Noemi Tomassetti - Assistante Virtuelle pour professionnels et entreprises. Organisation, secrétariat, communication multilingue et sites web."
                : lang === "es"
                ? "Noemi Tomassetti - Asistente Virtual para profesionales y empresas. Organización, secretaría, comunicación multilingüe y páginas web."
                : "Noemi Tomassetti - Virtual Assistant for professionals and small businesses. Administration, organization, multilingual communication, and websites."}
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
                aria-label={dict.hero.ctaButton || "RICHIEDI PREVENTIVO SCRITTO"}
                className="text-sm md:text-base px-6 py-6 sm:px-8 rounded-md font-semibold shadow-[0_0_15px_rgba(229,192,161,0.2)] w-full sm:w-auto bg-[#e5c0a1] text-[#0a2d26] hover:bg-[#e5c0a1] hover:scale-105 hover:shadow-[0_0_25px_rgba(229,192,161,0.4)] uppercase tracking-wide transition-all duration-300"
              >
                {dict.hero.ctaButton || "RICHIEDI PREVENTIVO SCRITTO"}
              </BookingButton>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90 bg-black/30 backdrop-blur px-4 py-3 rounded-md border border-white/10">
                <span className="text-[#e5c0a1]">✓</span>
                <span>{dict.hero.callReassurance || "Richiesta scritta • Nessun impegno"}</span>
              </div>
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
                : "Emails, calendar coordination, client queries, documents, and administrative tasks that quietly drain your time."}
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
                  ? "Je prends en charge vos opérations de secrétariat, d'organisation, de traduction et de gestion back-office courante."
                  : lang === "es"
                  ? "Puedo hacerme cargo de la secretaría, organización, traducción y soporte operativo que componen el día a día."
                  : "I take charge of the administrative, organizational, multilingual, and back-office tasks that support your business."}
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
                    : "Curious about what you can delegate and how we can work together?"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {lang === "it"
                    ? "Scopri tutte le aree di supporto e i servizi dedicati."
                    : "Explore all dedicated areas of support and services."}
                </p>
              </div>
              <Button
                asChild
                className="shrink-0 uppercase font-bold text-xs tracking-wider px-6 py-5 bg-primary text-primary-foreground hover:scale-105 transition-all"
              >
                <a href="#servizi">
                  {lang === "it" ? "SCOPRI I SERVIZI" : "EXPLORE SERVICES"}
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
                <strong>over 20 years of professional experience</strong> gained across customer care, back-office operations, organizational management, and operational support, paired with strong linguistic credentials.
              </>
            )}
          </p>
          <p>
            {lang === "it" ? (
              <>
                Ho conseguito la{" "}
                <strong>Laurea triennale in Mediazione Linguistica presso l'Università degli Studi di Macerata</strong> (2009, con votazione <strong>110/110 e lode</strong>), seguita dal{" "}
                <strong>Master Universitario di I livello in Traduzione Specialistica – lingua inglese</strong> (A.A. 2010–2011, 1.500 ore, 60 CFU) con superamento della prova finale.
              </>
            ) : lang === "fr" ? (
              <>
                Je suis titulaire d’une{" "}
                <strong>licence en Médiation Linguistique de l’Université de Macerata</strong> (2009, mention <strong>110/110 et félicitations du jury</strong>), suivie d’un{" "}
                <strong>Master Universitaire de Ier niveau en Traduction Spécialisée – langue anglaise</strong> (A.U. 2010–2011, 1 500 heures, 60 ECTS) avec épreuve finale validée.
              </>
            ) : lang === "es" ? (
              <>
                Cuento con el{" "}
                <strong>Grado en Mediación Lingüística por la Universidad de Macerata</strong> (2009, calificada con <strong>110/110 con matrícula de honor</strong>), seguido del{" "}
                <strong>Máster Universitario de I nivel en Traducción Especializada – lengua inglesa</strong> (C.A. 2010–2011, 1.500 horas, 60 CFU) con examen final superado.
              </>
            ) : (
              <>
                I hold a{" "}
                <strong>Bachelor's Degree in Linguistic Mediation from the University of Macerata</strong> (2009, awarded <strong>110/110 summa cum laude</strong>), followed by a{" "}
                <strong>1st-Level University Master in Specialized Translation – English language</strong> (Academic Year 2010–2011, 1,500 hours, 60 ECTS credits) with successful final examination.
              </>
            )}
          </p>
          <p>
            {lang === "it" ? (
              <>
                L'italiano è la mia lingua madre e garantisco supporto professionale in quattro lingue: <strong>italiano, inglese, francese e spagnolo</strong> per la gestione operativa, la corrispondenza e la traduzione di contenuti.
              </>
            ) : lang === "fr" ? (
              <>
                L'italien est ma langue maternelle et j'assure un accompagnement professionnel en quatre langues : <strong>italien, anglais, français et espagnol</strong> pour la gestion opérationnelle, vos correspondances et vos projets.
              </>
            ) : lang === "es" ? (
              <>
                El italiano es mi lengua materna y ofrezco soporte profesional en cuatro idiomas: <strong>italiano, inglés, francés y español</strong> para la operativa diaria, la correspondencia y la adaptación de contenidos.
              </>
            ) : (
              <>
                Italian is my native language, and I provide dependable professional support across four working languages: <strong>Italian, English, French, and Spanish</strong> for operational workflows, international correspondences, and localization.
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
              {lang === "it" ? "Il mio modo di lavorare" : "My Way of Working"}
            </h3>
            <p className="text-foreground/90 leading-relaxed">
              {lang === "it"
                ? "Ogni collaborazione parte dall'ascolto."
                : "Every collaboration begins with attentive listening."}
            </p>
            <p className="text-foreground/90 leading-relaxed">
              {lang === "it"
                ? "Mi racconti la tua attività, le tue esigenze e le attività che ti occupano più tempo. Insieme individuiamo ciò che ha senso delegare e definiamo una modalità di lavoro semplice e sostenibile."
                : "You share your business rhythm, daily friction points, and key priorities. Together, we identify what makes practical sense to delegate and design a sustainable workflow."}
            </p>
            <p className="text-foreground font-semibold">
              {lang === "it"
                ? "Nessuna formula standard. Partiamo da ciò che ti serve davvero."
                : "No rigid templates. We start from what you genuinely need."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <BookingButton
              size="lg"
              className="text-sm md:text-base px-8 py-6 rounded-md font-semibold bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 uppercase tracking-wide"
            >
              {lang === "it" ? "RICHIEDI PREVENTIVO" : "REQUEST A QUOTE"}
            </BookingButton>
            <span className="text-sm text-muted-foreground italic">
              {lang === "it"
                ? "Richiesta scritta • Nessuna chiamata obbligatoria"
                : "Written enquiry • No mandatory call"}
            </span>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: DELEGARE NON SIGNIFICA PERDERE IL CONTROLLO ── */}
      <section className="bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        <div className="container px-4 md:px-6 py-12 md:py-20 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            {lang === "it"
              ? "Delegare non significa perdere il controllo."
              : "Delegating does not mean losing control."}
          </h2>
          <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed">
            {lang === "it"
              ? "Significa scegliere con attenzione quali attività continuare a gestire personalmente e quali affidare a qualcuno che possa occuparsene con precisione e continuità."
              : "It means deliberately choosing which high-value areas to keep close, and entrusting operational execution to a dependable professional."}
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
              : "My goal is not to replace you. It is to help you operate with greater ease and focus."}
          </p>

          <div className="border-t border-border/40 pt-10">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">
              {lang === "it" ? "Competenze costruite nel tempo" : "Skills Built Over Time"}
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
            {lang === "it" ? "Come posso aiutarti" : "How I Can Support You"}
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            {lang === "it"
              ? "Il mio supporto si concentra su alcune aree precise. Puoi affidarmi una singola attività oppure costruire nel tempo una collaborazione più ampia."
              : "My assistance focuses on well-defined domains. You can start with a single assignment or establish an ongoing operational partnership."}
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
              : "Support Tailored to Diverse Needs"}
          </h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            {lang === "it"
              ? "Ogni professione ha le sue specificità, ma molte esigenze organizzative e di gestione sono comuni:"
              : "Every business has unique characteristics, yet core organizational bottlenecks are often remarkably shared:"}
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
            {lang === "it" ? "La tua attività è diversa?" : "Is your business different?"}
          </h3>
          <p className="text-base md:text-lg text-foreground/85">
            {lang === "it"
              ? "Raccontami di cosa ti occupi. Possiamo valutare insieme se e come posso esserti utile."
              : "Tell me about your distinct activities. Together we can determine how my support can be most effective."}
          </p>
        </div>
      </section>

      {/* ── SECTION 7: INIZIARE È SEMPLICE (#collaborazione) ── */}
      <section
        id="collaborazione"
        className="container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-12 text-left">
          {lang === "it" ? "Iniziare è semplice." : "Getting Started is Simple."}
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
            {dict.hero.ctaButton || "RICHIEDI PREVENTIVO SCRITTO"}
          </BookingButton>
        </div>
      </section>

      {/* ── SECTION 8: NOETOM (SEAMLESSLY INTEGRATED BRAND FAMILY) ── */}
      <section className="bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both py-12 md:py-20">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="bg-card border border-primary/30 rounded-2xl p-6 md:p-10 shadow-lg relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 inline-flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {dict.noetomTeaser.statusBadge}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                    {dict.noetomTeaser.tag}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  {dict.noetomTeaser.productName}{" "}
                  <span className="text-primary font-normal text-xl sm:text-2xl md:text-3xl block sm:inline">
                    — {dict.noetomTeaser.tagline}
                  </span>
                </h2>
                <p className="text-base md:text-lg text-foreground/85 leading-relaxed">
                  {dict.noetomTeaser.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-foreground/80">
                  {dict.noetomTeaser.featuresList.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <Button
                  asChild
                  className="px-6 py-6 rounded-md font-bold uppercase text-xs tracking-wider bg-primary text-primary-foreground hover:scale-105 transition-all shadow-md"
                >
                  <Link to={noetomPath}>
                    {dict.noetomTeaser.ctaDiscover}
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="px-6 py-6 rounded-md font-bold uppercase text-xs tracking-wider border-primary/40 text-foreground hover:bg-primary/10 transition-all"
                >
                  <Link to={`${getLocalizedPath("services", lang)}#contact-section`}>
                    {({ it: "Descrivi la tua richiesta", en: "Describe your request", fr: "Décrivez votre demande", es: "Describe tu solicitud" } as const)[lang]}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
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
              : "Authentic Identity & Verified Experience"}
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
              ? "La confiance ne repose pas sur des slogans mais sur des faits : double diplôme universitaire, plus de 20 ans de pratique et des études de cas réelles."
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
                {lang === "it" ? "Formazione Specialistica" : "Specialist Academic Rigor"}
              </h3>
              <p className="text-xs text-foreground/80 leading-relaxed">
                {lang === "it"
                  ? "Laurea in Mediazione Linguistica (110 e lode) e Master Universitario di I livello in Traduzione Specialistica (1.500 ore, 60 CFU) nei 5 ambiti: Letterario, Giuridico, Economico, Tecnologico, Scientifico."
                  : "Bachelor's Degree in Language Mediation (110/110 summa cum laude) and 1,500-hour Postgraduate Master in Specialist Translation across 5 domains."}
              </p>
            </div>
            <div className="text-[11px] text-primary font-semibold">
              {lang === "it" ? "IT · EN · FR · ES" : "IT · EN · FR · ES"}
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-card border border-border/70 hover:border-primary/40 transition-all flex flex-col justify-between space-y-4 shadow-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground text-base">
                {lang === "it" ? "20+ Anni di Esperienza" : "20+ Years in Operations"}
              </h3>
              <p className="text-xs text-foreground/80 leading-relaxed">
                {lang === "it"
                  ? "Oltre due decenni di lavoro continuativo tra assistenza clienti, organizzazione operativa, gestione back office e coordinamento da remoto."
                  : "Over two decades in customer care, operational coordination, remote back office support, and client communication."}
              </p>
            </div>
            <div className="text-[11px] text-primary font-semibold">
              {lang === "it" ? "Precisione & Continuità" : "Precision & Continuity"}
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-card border border-border/70 hover:border-primary/40 transition-all flex flex-col justify-between space-y-4 shadow-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground text-base">
                {lang === "it" ? "Tariffe & Metodo Chiari" : "Clear Pricing & Method"}
              </h3>
              <p className="text-xs text-foreground/80 leading-relaxed">
                {lang === "it"
                  ? "Preventivo confermato per iscritto prima dell'avvio, tracciamento trasparente dei task, nessun costo nascosto a fine mese."
                  : "Written quotes agreed before work begins, clear per-hour and per-word rates, zero unexpected surcharges."}
              </p>
            </div>
            <div className="text-[11px] text-primary font-semibold">
              {lang === "it" ? "Da € 25/h · Da € 0,09/parola" : "From €25/hr · From €0.09/word"}
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-card border border-border/70 hover:border-primary/40 transition-all flex flex-col justify-between space-y-4 shadow-sm">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground text-base">
                {lang === "it" ? "Identità & Contatto Diretto" : "Direct 1:1 Contact"}
              </h3>
              <p className="text-xs text-foreground/80 leading-relaxed">
                {lang === "it"
                  ? "Sede a Castelfidardo (AN), supporto operativo da remoto in tutta Italia ed estero. Parli direttamente con Noemi, senza agenzie o intermediari."
                  : "Based in Castelfidardo (AN), Italy. Remote operational support across Europe. Direct contact with Noemi, no agency middlemen."}
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
                ? "Guarda concretamente come lavoro: 11 casi studio + 1 saggio letterario"
                : "Explore how I work: 11 practical case studies + 1 literary sample"}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
              {lang === "it"
                ? "Consulta le metodologie, i confronti bilingue prima/dopo e i deliverable reali su traduzioni, ricerche desk, back office e siti web."
                : "Review real-world methodologies, dual-language source/target comparisons, and operational deliverables."}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link
              to={getLocalizedPath("portfolio", lang)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:scale-105 transition-all shadow-md gap-2"
            >
              <span>{lang === "it" ? "Esplora gli Esempi di Lavoro" : "View Work Examples"}</span>
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
              {lang === "it" ? "Blog & Risorse" : "Blog & Resources"}
            </h2>
            <p className="text-base md:text-lg text-foreground/80">
              {lang === "it"
                ? "Approfondimenti, consigli pratici e strumenti per organizzare il tuo lavoro, comunicare meglio e gestire la tua attività."
                : "Actionable perspectives on delegation, multilingual communication, and operational clarity."}
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
                      <Link to={`/blog/${post.slug || post.id}`}>
                        {lang === "it" ? "Leggi di più" : "Read Article"}
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
              <Link to="/blog">
                {lang === "it" ? "Vedi tutti gli articoli" : "View All Articles"}
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
              {lang === "it" ? "Domande frequenti" : "Frequently Asked Questions"}
            </h2>
            <p className="text-base md:text-lg text-foreground/80">
              {lang === "it"
                ? "Tutto quello che è utile sapere prima di iniziare a collaborare."
                : "Essential information about starting our collaboration and working together."}
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
            {lang === "it"
              ? "C'è qualcosa che vorresti smettere di gestire da solo?"
              : "Ready to stop carrying every operational task alone?"}
          </h2>
          <div className="text-foreground/85 text-base md:text-lg mb-10 max-w-2xl space-y-3 leading-relaxed">
            <p className="font-semibold text-primary">
              {lang === "it" ? "Parliamone." : "Let's talk."}
            </p>
            <p>
              {lang === "it"
                ? "Raccontami di cosa ti occupi, quali attività ti portano via più tempo e cosa vorresti riuscire a delegare."
                : "Tell me about your business, the tasks that consume your day, and what you would love to delegate."}
            </p>
            <p className="font-medium text-foreground">
              {lang === "it" ? "Partiamo da lì." : "We'll take it from there."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left direct contact details */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-primary mb-5">
                {lang === "it" ? "Il mio supporto per te" : "What You Can Expect"}
              </h3>
              <ul className="space-y-4 text-foreground/90 text-base mb-8">
                {[
                  lang === "it" ? "Analisi delle tue esigenze e priorità" : "Detailed analysis of your unique priorities",
                  lang === "it" ? "Soluzioni personalizzate e flessibili" : "Customized, flexible working terms",
                  lang === "it" ? "Gestione operativa precisa e organizzata" : "Dependable, accurate operational handling",
                  lang === "it" ? "Comunicazione chiara e costante" : "Transparent, continuous communication",
                  lang === "it" ? "Riservatezza e attenzione ai dettagli" : "Absolute discretion and GDPR confidentiality",
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
                      {lang === "it"
                        ? "Supporto da remoto in tutta Italia"
                        : "Remote support worldwide"}
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
                    {lang === "it"
                      ? "Richiedi un preventivo scritto"
                      : "Request a written quote"}
                  </BookingButton>{" "}
                  {lang === "it"
                    ? "o compila il modulo qui accanto: nessuna chiamata obbligatoria."
                    : "or use the adjacent form: no introductory call is required."}
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
