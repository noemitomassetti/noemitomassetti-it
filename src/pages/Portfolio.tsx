import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { PortfolioDeepShowcase } from "@/components/PortfolioDeepShowcase";
import { useSEO } from "@/hooks/useSEO";
import { getLanguageFromPath, getLocalizedPath } from "@/lib/i18n/routes";
import { getPortfolioDocumentPath } from "@/lib/portfolioDocumentPaths";
import { Language } from "@/lib/i18n/types";
import {
  PORTFOLIO_CASES,
  PortfolioCase,
  PortfolioCategory,
  DEMO_DISCLAIMER,
  PORTFOLIO_DOCUMENTS,
} from "@/lib/portfolioData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookingButton } from "@/components/BookingButton";
import {
  CheckCircle2,
  ArrowRight,
  BookOpen,
  FileText,
  Search,
  Briefcase,
  PenTool,
  Globe,
  SlidersHorizontal,
  ChevronDown,
  ChevronUp,
  Scale,
  GraduationCap,
  Sparkles,
  Info,
  Layers,
  ExternalLink,
} from "lucide-react";


export default function Portfolio() {
  const location = useLocation();
  const lang: Language = getLanguageFromPath(location.pathname);
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>("all");
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>(lang === "fr" ? "13-french-italian-product-localisation" : lang === "es" ? "14-spanish-italian-existing-customer-email" : "01-interior-design-localization");
  const [activeTab, setActiveTab] = useState<Record<string, "overview" | "comparison" | "decisions">>({});
  const [pendingScroll, setPendingScroll] = useState<string | null>(null);
  useEffect(() => {
    if (pendingScroll && selectedCategory === "translation") {
      const target = document.getElementById(pendingScroll);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        setPendingScroll(null);
      }
    }
  }, [pendingScroll, selectedCategory, expandedCaseId]);


  // SEO configuration
  const titles = {
    it: "Esempi di Lavoro e Progetti Dimostrativi | Noemi Tomassetti",
    en: "Work Examples & Demonstration Cases | Noemi Tomassetti",
    fr: "Exemples de Projets et Études de Cas | Noemi Tomassetti",
    es: "Ejemplos de Trabajo y Casos Prácticos | Noemi Tomassetti",
  };

  const descriptions = {
    it: "Portfolio approfondito: traduzioni professionali IT ↔ EN/FR/ES con testi a fronte, assistenza virtuale, customer care, back office, ricerche, revisioni e contenuti web. Casi dimostrativi.",
    en: "Detailed IT ↔ EN/FR/ES translation samples, parallel texts, written customer support, operational back office, desk research and website copy. Original fictional dossiers.",
    fr: "Portfolio détaillé : traductions professionnelles IT ↔ EN/FR/ES, textes comparés, relation client, back-office, recherche documentaire et contenus web. Exemples fictifs.",
    es: "Portfolio detallado: traducciones profesionales IT ↔ EN/FR/ES, textos paralelos, atención al cliente, back office, investigación y textos web. Ejemplos ficticios.",
  };

  useSEO({
    title: titles[lang],
    description: descriptions[lang],
    pageKey: "portfolio",
    currentLang: lang,
    ogLocale: {it:"it_IT",en:"en_GB",fr:"fr_FR",es:"es_ES"}[lang],
  });

  const categories: { id: PortfolioCategory; label: Record<Language, string>; shortLabel: Record<Language, string>; icon: React.ReactNode }[] = [
    { id: "all", label: { it: "Tutti i progetti", en: "All Projects", fr: "Tous les projets", es: "Todos los proyectos" }, shortLabel: { it: "Tutti", en: "All", fr: "Tous", es: "Todos" }, icon: <SlidersHorizontal className="w-3.5 h-3.5" /> },
    { id: "translation", label: { it: "Traduzione & Localizzazione", en: "Translation & Localisation", fr: "Traduction & Localisation", es: "Traducción y Localización" }, shortLabel: { it: "Traduzioni", en: "Translation", fr: "Traduction", es: "Traducción" }, icon: <Globe className="w-3.5 h-3.5" /> },
    { id: "research", label: { it: "Ricerche informative & confronti", en: "Informational research & comparisons", fr: "Recherche documentaire et comparaisons", es: "Investigación informativa y comparativas" }, shortLabel: { it: "Ricerche", en: "Research", fr: "Recherche", es: "Investigación" }, icon: <Search className="w-3.5 h-3.5" /> },
    { id: "backoffice", label: { it: "Segreteria & Back Office Operativo", en: "Customer support & operational back office", fr: "Relation client et back-office opérationnel", es: "Atención al cliente y back office operativo" }, shortLabel: { it: "Back office", en: "Back office", fr: "Back-office", es: "Back office" }, icon: <Briefcase className="w-3.5 h-3.5" /> },
    { id: "writing", label: { it: "Scrittura & Revisione", en: "Writing & Revision", fr: "Rédaction & Révision", es: "Redacción y Corrección" }, shortLabel: { it: "Revisione", en: "Writing", fr: "Révision", es: "Redacción" }, icon: <PenTool className="w-3.5 h-3.5" /> },
    { id: "web", label: { it: "Contenuti per Siti & Landing Page", en: "Website & Landing Page Copy", fr: "Contenus Web & Pages de Destination", es: "Contenidos Web y Landing Pages" }, shortLabel: { it: "Contenuti web", en: "Web copy", fr: "Contenus web", es: "Contenidos web" }, icon: <Layers className="w-3.5 h-3.5" /> },
  ];


  const translationFields: Record<NonNullable<PortfolioCase["masterField"]>,Record<Language,string>> = {
    letterario:{it:"letterario",en:"literary",fr:"littéraire",es:"literario"},
    giuridico:{it:"giuridico",en:"legal",fr:"juridique",es:"jurídico"},
    economico:{it:"economico-commerciale",en:"economic and commercial",fr:"économique et commercial",es:"económico y comercial"},
    tecnologico:{it:"tecnologico",en:"technology",fr:"technologique",es:"tecnológico"},
    scientifico:{it:"scientifico",en:"scientific",fr:"scientifique",es:"científico"},
  };
  const caseSampleFile: Record<string,string> = {
    "01-interior-design-localization":"01", "02-economic-commercial-translation":"02",
    "03-scientific-healthcare-translation":"03", "04-technological-software-localization":"04",
    "05-legal-contractual-translation":"05", "06-ux-web-content-localization":"06",
    "07-supplier-research-benchmark":"07", "08-competitor-benchmarking":"08",
    "09-freelance-back-office-system":"09", "10-writing-editorial-revision":"10",
    "11-multilingual-landing-page":"21", "12-literary-translation-sample":"22", "13-french-italian-product-localisation":"17",
    "14-spanish-italian-existing-customer-email":"18", "15-italian-written-customer-care":"11",
    "16-order-data-and-price-list":"13", "17-online-course-operations":"15",
    "18-product-catalogue-copy-review":"19",
  };
  const highlights: Record<Language,string[]> = {
    it:["11","13","17","18","19","14"],
    en:["16","17","18","11","13","19"],
    fr:["17","16","11","18","13","19"],
    es:["18","16","11","17","13","19"],
  };
  const featured = highlights[lang]
    .map(num => PORTFOLIO_DOCUMENTS.find(doc => doc.num === num))
    .filter((doc): doc is (typeof PORTFOLIO_DOCUMENTS)[number] => !!doc);
  const labelForCategory = (category: PortfolioCase["category"]) =>
    categories.find(item => item.id === category)?.label[lang] ?? category;

  const filteredCases = (selectedCategory === "all"
    ? PORTFOLIO_CASES
    : PORTFOLIO_CASES.filter((c) => c.category === selectedCategory)).slice().sort((a,b) => {
      if (lang === "it") return a.order - b.order;
      const rank = (c: PortfolioCase) =>
        lang === "fr" && c.id === "13-french-italian-product-localisation" ? -5 :
        lang === "es" && c.id === "14-spanish-italian-existing-customer-email" ? -5 :
        c.id === "01-interior-design-localization" ? -4 :
        c.id === "15-italian-written-customer-care" ? -3 :
        c.category === "translation" ? -2 : c.category === "backoffice" ? -1 : 0;
      return rank(a) - rank(b) || a.order - b.order;
    });

  const toggleCase = (id: string) => {
    setExpandedCaseId((prev) => (prev === id ? null : id));
  };

  const getActiveTabForCase = (id: string) => activeTab[id] || "overview";

  const setTabForCase = (id: string, tab: "overview" | "comparison" | "decisions") => {
    setActiveTab((prev) => ({ ...prev, [id]: tab }));
  };

  const contactPath = getLocalizedPath("contact", lang);
  const browseSections = [
    { id:"tangible-work", number:"01",
      labels:{it:"Documenti in evidenza",en:"Featured samples",fr:"Exemples à la une",es:"Muestras destacadas"},
      details:{it:"Una selezione da leggere subito",en:"Start with a curated selection",fr:"Une première sélection à découvrir",es:"Una selección para empezar"} },
    { id:"portfolio-complete-dossiers", number:"02",
      labels:{it:"24 dossier approfonditi",en:"24 in-depth dossiers",fr:"24 dossiers détaillés",es:"24 dosieres detallados"},
      details:{it:"Traduzioni a fronte e processi reali simulati",en:"Parallel translations and complete workflows",fr:"Traductions en regard et méthodes détaillées",es:"Traducciones en paralelo y procesos completos"} },
    { id:"portfolio-legacy-cases", number:"03",
      labels:{it:"18 casi di metodo",en:"18 methodology cases",fr:"18 études méthodologiques",es:"18 casos metodológicos"},
      details:{it:"Scelte operative e revisioni commentate",en:"Decisions and editorial notes",fr:"Décisions et commentaires de révision",es:"Decisiones y notas de revisión"} },
    { id:"portfolio-document-library", number:"04",
      labels:{it:"22 documenti consultabili",en:"22 sample documents",fr:"22 documents à consulter",es:"22 documentos de muestra"},
      details:{it:"File di esempio con contesto multilingue",en:"Full examples with multilingual context",fr:"Documents et explications multilingues",es:"Documentos y explicaciones multilingües"} }
  ] as const;


  return (
    <Layout lang={lang}>
      {/* ── HEADER BANNER ── */}
      <section className="border-b border-border/40 bg-secondary/20 py-9 sm:py-12 md:py-20">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <GraduationCap className="w-3.5 h-3.5" />
            {lang === "it"
              ? "Portfolio Metodologico · Casi Dimostrativi"
              : lang === "fr"
              ? "Portfolio Méthodologique · Cas Démonstratifs"
              : lang === "es"
              ? "Muestras de Trabajo · Casos Prácticos"
              : "Methodological Portfolio · Demonstration Cases"}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4 md:mb-6">
            {lang === "it"
              ? "Esempi di lavoro"
              : lang === "fr"
              ? "Exemples de projets"
              : lang === "es"
              ? "Ejemplos de trabajo"
              : "Work Examples"}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-foreground/80 leading-relaxed mb-5 md:mb-8 max-w-3xl">
            {lang === "it"
              ? "Esempi completi per conoscere il mio metodo di lavoro: testi e traduzioni a fronte, procedure, documenti e controlli di qualità, con situazioni realistiche."
              : lang === "fr"
              ? "Des exemples complets pour découvrir ma méthode : traductions en regard, procédures, documents et contrôles, dans des situations plausibles."
              : lang === "es"
              ? "Ejemplos completos que muestran mi método: traducciones en paralelo, procedimientos, documentos y controles con situaciones verosímiles."
              : "Detailed work examples showing the process behind each service: parallel translations, complete documents, procedures and quality checks built around plausible scenarios."}
          </p>

          {/* DEMO TRANSPARENCY NOTICE */}
          <div className="bg-background/80 backdrop-blur border border-primary/20 rounded-xl p-4 md:p-5 text-sm text-foreground/85 flex items-start gap-3.5 shadow-sm">
            <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-foreground">
                {lang === "it"
                  ? "Trasparenza e Tutela della Riservatezza: "
                  : lang === "fr"
                  ? "Transparence et Confidentialité : "
                  : lang === "es"
                  ? "Transparencia y Confidencialidad: "
                  : "Transparency & Client Confidentiality: "}
              </span>
              <span>{lang === "it"
                  ? "Tutti i casi sono esempi indipendenti con dati fittizi, non incarichi commissionati né testimonianze. Le attività disponibili sono quelle indicate nella pagina Servizi."
                  : lang === "fr"
                  ? "Tous les cas sont des exemples indépendants utilisant des données fictives, et non des missions clients ou des témoignages. Seules les prestations décrites dans la page Services sont proposées."
                  : lang === "es"
                  ? "Todos los casos son ejemplos independientes con datos ficticios, no encargos reales ni testimonios. Los servicios disponibles son los descritos en la página Servicios."
                  : "All cases are independent demonstrations using fictional data, not commissioned client projects or testimonials. The services available are those stated on the Services page."}</span>
            </div>
          </div>
          <nav aria-label={({it:"Percorsi di consultazione del portfolio",en:"Browse the portfolio",fr:"Explorer le portfolio",es:"Explorar el portfolio"} as const)[lang]}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-7">
            {browseSections.map(section=>(
              <a key={section.id} href={"#"+section.id}
                className="group rounded-xl border border-border/70 bg-background/70 p-4 transition-colors hover:border-primary/70 hover:bg-primary/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                <span className="block text-xs font-bold tracking-widest text-primary mb-2">{section.number}</span>
                <span className="block font-semibold leading-snug text-foreground group-hover:text-primary">{section.labels[lang]}</span>
                <span className="block text-xs leading-relaxed text-muted-foreground mt-2">{section.details[lang]}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section aria-labelledby="tangible-work" className="scroll-mt-24 py-12 border-b border-border/40 bg-card/30">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <h2 id="tangible-work" className="text-2xl md:text-3xl font-bold text-primary mb-3">
            {lang === "it" ? "Esempi concreti da consultare" : lang === "fr" ? "Exemples concrets à consulter" : lang === "es" ? "Ejemplos concretos para consultar" : "Explore tangible work samples"}
          </h2>
          <p className="text-foreground/75 mb-8 max-w-3xl">
            {lang === "it" ? "Email, registri operativi, traduzioni a fronte, schede prodotto e procedure. Tutti gli esempi sono dimostrativi e utilizzano dati fittizi."
              : lang === "fr" ? "Traductions comparées, courriels, tableaux de suivi et procédures. Toutes les données sont fictives ; plusieurs documents sont rédigés en italien."
              : lang === "es" ? "Traducciones comparadas, correos, registros y procedimientos. Todos los datos son ficticios; varios documentos están escritos en italiano."
              : "Source/target translations, customer emails, trackers and procedures. All examples use fictional data; some full documents are in Italian."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featured.map(doc => (
              <a key={doc.num} href={getPortfolioDocumentPath(doc.num,lang)} target="_blank" rel="noopener noreferrer"
                 className="group rounded-xl border border-border/60 bg-card p-5 hover:border-primary/60 hover:shadow-md transition-all">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-bold text-primary">DOC {doc.num}</span>
                  <ExternalLink className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-foreground group-hover:text-primary">{doc.title[lang]}</h3>
                <p className="text-sm text-foreground/75 mt-2">{doc.subtitle[lang]}</p>
                <span className="inline-block text-sm font-semibold text-primary mt-4">
                  {lang === "it" ? "Apri il documento" : lang === "fr" ? "Voir l’exemple" : lang === "es" ? "Abrir la muestra" : "View work sample"}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <PortfolioDeepShowcase lang={lang} />

      {/* ── THE 5 MASTER TRAINING FIELDS SHOWCASE ── */}
      <section className="py-12 border-b border-border/30 bg-background/50">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-foreground flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              {lang === "it"
                ? "La formazione specialistica mostrata attraverso il lavoro"
                : lang === "fr"
                ? "La formation universitaire spécialisée illustrée par la pratique"
                : lang === "es"
                ? "La formación universitaria especializada reflejada en la práctica"
                : "Specialist University Training Demonstrated in Practice"}
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-3xl">
              {lang === "it"
                ? "Master in Traduzione Specialistica (1.500 ore, 60 CFU). Cinque ambiti applicativi illustrati attraverso esempi dimostrativi, non altrettante qualifiche autonome:"
                : lang === "fr"
                ? "Master en traduction spécialisée (1 500 heures, 60 ECTS). Cinq domaines d'application illustrés par des exemples fictifs, non cinq qualifications distinctes :"
                : lang === "es"
                ? "Máster en traducción especializada (1.500 horas, 60 ECTS). Cinco ámbitos de aplicación ilustrados con ejemplos ficticios, no cinco titulaciones diferentes:"
                : "Postgraduate training in Specialist Translation (1,500 hours, 60 ECTS). Five illustrative application fields, not five separate qualifications:"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {[
              {
                field: "letterario",
                label: { it: "Letterario", en: "Literary", fr: "Littéraire", es: "Literario" },
                desc: { it: "Voce, stile, registro, ritmo e sottotesto", en: "Voice, style, register, cadence, and subtext", fr: "Voix d'auteur, style, registre et rythme", es: "Voz, estilo, registro, ritmo y subtexto" },
                caseRef: "12-literary-translation-sample",
              },
              {
                field: "giuridico",
                label: { it: "Giuridico", en: "Legal", fr: "Juridique", es: "Jurídico" },
                desc: { it: "Concetti, equivalenze e coerenza (non giurata)", en: "Concepts, equivalences, contractual precision", fr: "Notions de droit, équivalences et cohérence", es: "Conceptos, equivalencias y rigor contractual" },
                caseRef: "05-legal-contractual-translation",
              },
              {
                field: "economico",
                label: { it: "Economico", en: "Economic", fr: "Économique", es: "Económico" },
                desc: { it: "Terminologia finanziaria, chiarezza e KPI", en: "Financial terms, metrics, and business clarity", fr: "Vocabulaire financier, indicateurs et gestion", es: "Terminología financiera, métricas y gestión" },
                caseRef: "02-economic-commercial-translation",
              },
              {
                field: "tecnologico",
                label: { it: "Tecnologico", en: "Tech / Software", fr: "Technologique", es: "Tecnológico" },
                desc: { it: "Precisione API, usabilità e stringhe UI", en: "API clarity, usability, and UI string limits", fr: "Précision d'API, ergonomie et micro-textes", es: "Precisión de API, usabilidad y límites de UI" },
                caseRef: "04-technological-software-localization",
              },
              {
                field: "scientifico",
                label: { it: "Scientifico", en: "Scientific", fr: "Scientifique", es: "Científico" },
                desc: { it: "Accuratezza clinica e ascolto empatico", en: "Clinical rigor and clear patient dialogue", fr: "Rigueur clinique et dialogue patient", es: "Rigor asistencial y comunicación empática" },
                caseRef: "03-scientific-healthcare-translation",
              },
            ].map((f) => (
              <button
                key={f.field}
                type="button"
                onClick={() => {
                  setSelectedCategory("translation");
                  setExpandedCaseId(f.caseRef);
                  setPendingScroll(f.caseRef);
                }}
                className="text-left p-4 rounded-xl border border-border/60 bg-card hover:border-primary/50 transition-all duration-200 group hover:-translate-y-0.5 shadow-sm"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">
                    {f.label[lang]}
                  </span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="text-xs text-foreground/80 leading-snug">
                  {f.desc[lang]}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FILTER BUTTONS ── */}
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border/40 py-3 sm:py-4 shadow-sm">
        <div id="portfolio-category-filters" role="group" aria-label={({it:"Filtra i progetti per categoria",en:"Filter projects by category",fr:"Filtrer les projets par catégorie",es:"Filtrar proyectos por categoría"} as const)[lang]} className="container px-4 md:px-6 max-w-5xl mx-auto grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              aria-label={cat.label[lang]}
              aria-pressed={selectedCategory === cat.id}
              className={`inline-flex min-h-11 w-full sm:w-auto justify-center items-center gap-1.5 px-2 sm:px-3 py-2 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <span className="hidden sm:inline-flex">{cat.icon}</span>
              <span className="sm:hidden">{cat.shortLabel[lang]}</span>
              <span className="hidden sm:inline">{cat.label[lang]}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── CASE STUDIES LIST ── */}
      <section id="portfolio-legacy-cases" className="py-12 md:py-20 scroll-mt-36">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-8">
          {filteredCases.map((caseItem: PortfolioCase) => {
            const isExpanded = expandedCaseId === caseItem.id;
            const tab = getActiveTabForCase(caseItem.id);

            return (
              <article
                key={caseItem.id}
                id={caseItem.id}
                className={`scroll-mt-32 rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "border-primary/40 bg-card shadow-md"
                    : "border-border/60 bg-card/60 hover:border-border"
                }`}
              >
                {/* Header Card */}
                <button
                  type="button"
                  onClick={() => toggleCase(caseItem.id)}
                  aria-expanded={isExpanded}
                  aria-label={caseItem.title[lang]}
                  className="w-full text-left p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-muted-foreground">
                        #{String(caseItem.order).padStart(2, "0")}
                      </span>
                      <Badge variant="outline" className="text-[11px] uppercase tracking-wider">
                        {labelForCategory(caseItem.category)}
                      </Badge>
                      {caseItem.masterField && (
                        <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] uppercase font-bold tracking-wider">
                          {lang === "it" ? "Ambito traduttivo: " : lang === "fr" ? "Domaine de traduction : " : lang === "es" ? "Área de traducción: " : "Translation field: "}{translationFields[caseItem.masterField][lang]}
                        </Badge>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {caseItem.title[lang]}
                    </h3>
                    <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                      {caseItem.subtitle[lang]}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-start md:self-center">
                    <span className="text-xs font-medium text-primary hidden sm:inline">
                      {isExpanded
                        ? lang === "it"
                          ? "Chiudi dettaglio"
                          : lang === "fr"
                          ? "Fermer le détail"
                          : lang === "es"
                          ? "Cerrar detalle"
                          : "Close details"
                        : lang === "it"
                        ? "Esplora metodo ed esempio"
                        : lang === "fr"
                        ? "Découvrir la méthode et l’exemple"
                        : lang === "es"
                        ? "Ver método y muestra"
                        : "View method and sample"}
                    </span>
                    <div className="p-2 rounded-full bg-secondary/80 text-foreground">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Details Body */}
                {isExpanded && (
                  <div className="border-t border-border/40 p-6 md:p-8 space-y-8 animate-in fade-in-50 duration-200">
                    {/* Inner Tabs: Overview | Comparison / Deliverable | Key Decisions */}
                    <div className="flex border-b border-border/40 gap-4 text-xs font-semibold uppercase tracking-wider">
                      <button
                        type="button"
                        onClick={() => setTabForCase(caseItem.id, "overview")}
                        className={`pb-3 border-b-2 transition-colors ${
                          tab === "overview"
                            ? "border-primary text-primary"
                            : "border-transparent text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {lang === "it"
                          ? "1. Inquadramento & Metodo"
                          : lang === "fr"
                          ? "1. Cadrage & Méthode"
                          : lang === "es"
                          ? "1. Contexto y Método"
                          : "1. Brief & Methodology"}
                      </button>

                      {(caseItem.comparison || caseItem.tableData || caseItem.sampleText) && (
                        <button
                          type="button"
                          onClick={() => setTabForCase(caseItem.id, "comparison")}
                          className={`pb-3 border-b-2 transition-colors ${
                            tab === "comparison"
                              ? "border-primary text-primary"
                              : "border-transparent text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {caseItem.comparison
                            ? lang === "it"
                              ? "2. Confronto Sorgente / Target"
                              : lang === "fr"
                              ? "2. Comparaison Source / Cible"
                              : lang === "es"
                              ? "2. Comparación Origen / Destino"
                              : "2. Source / Target Comparison"
                            : caseItem.tableData
                            ? lang === "it"
                              ? "2. Matrice di Benchmark"
                              : lang === "fr"
                              ? "2. Matrice d'Analyse Comparative"
                              : lang === "es"
                              ? "2. Matriz de Benchmarking"
                              : "2. Benchmark Matrix"
                            : lang === "it"
                            ? "2. Testo Narrativo a Fronte"
                            : lang === "fr"
                            ? "2. Texte Littéraire Bilingue"
                            : lang === "es"
                            ? "2. Texto Literario en Paralelo"
                            : "2. Dual-Language Literary Text"}
                        </button>
                      )}

                      <button
                        type="button"
                        onClick={() => setTabForCase(caseItem.id, "decisions")}
                        className={`pb-3 border-b-2 transition-colors ${
                          tab === "decisions"
                            ? "border-primary text-primary"
                            : "border-transparent text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {lang === "it"
                          ? "3. Decisioni Chiave & Deliverable"
                          : lang === "fr"
                          ? "3. Décisions Clés & Livrable"
                          : lang === "es"
                          ? "3. Decisiones Clave y Entregable"
                          : "3. Key Decisions & Deliverable"}
                      </button>
                    </div>

                    {/* TAB 1: OVERVIEW */}
                    {tab === "overview" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                        <div className="space-y-4">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                              {lang === "it"
                                ? "Il Brief"
                                : lang === "fr"
                                ? "Le Brief"
                                : lang === "es"
                                ? "El Brief"
                                : "The Brief"}
                            </span>
                            <p className="text-foreground/90 leading-relaxed">{caseItem.brief[lang]}</p>
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                              {lang === "it"
                                ? "Materiale di Partenza"
                                : lang === "fr"
                                ? "Matériel de Départ"
                                : lang === "es"
                                ? "Material de Partida"
                                : "Starting Material"}
                            </span>
                            <p className="text-foreground/90 leading-relaxed">{caseItem.startingMaterial[lang]}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                              {lang === "it"
                                ? "Obiettivo Professionale"
                                : lang === "fr"
                                ? "Objectif Professionnel"
                                : lang === "es"
                                ? "Objetivo Profesional"
                                : "Professional Objective"}
                            </span>
                            <p className="text-foreground/90 leading-relaxed">{caseItem.objective[lang]}</p>
                          </div>
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-1">
                              {lang === "it"
                                ? "Approccio e Metodologia"
                                : lang === "fr"
                                ? "Approche & Méthodologie"
                                : lang === "es"
                                ? "Enfoque y Metodología"
                                : "Approach & Methodology"}
                            </span>
                            <p className="text-foreground/90 leading-relaxed">{caseItem.approach[lang]}</p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* TAB 2: COMPARISON / BENCHMARK / SAMPLE */}
                    {tab === "comparison" && (
                      <div className="space-y-6 text-sm">
                        {caseItem.comparison && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                              <div className="p-4 rounded-xl bg-background border border-border/60">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                                  {lang === "it"
                                    ? "Testo Sorgente"
                                    : lang === "fr"
                                    ? "Texte Source"
                                    : lang === "es"
                                    ? "Texto Origen"
                                    : "Original Source"}{" "}
                                  ({caseItem.comparison.sourceLang})
                                </span>
                                <p className="italic text-foreground/90 leading-relaxed">
                                  "{caseItem.comparison.sourceText}"
                                </p>
                              </div>

                              <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-destructive block mb-2">
                                  {lang === "it"
                                    ? "Resa letterale volutamente non idiomatica (esempio)"
                                    : lang === "fr"
                                    ? "Version littérale volontairement maladroite (exemple)"
                                    : lang === "es"
                                    ? "Versión literal poco natural (ejemplo)"
                                    : "Deliberately awkward literal rendering (example)"}
                                </span>
                                <p className="text-foreground/75 leading-relaxed">
                                  "{caseItem.comparison.literalText}"
                                </p>
                              </div>

                              <div className="p-4 rounded-xl bg-primary/10 border border-primary/30">
                                <span className="text-[11px] font-bold uppercase tracking-wider text-primary block mb-2">
                                  {lang === "it"
                                    ? "Localizzazione Professionale"
                                    : lang === "fr"
                                    ? "Localisation Professionnelle"
                                    : lang === "es"
                                    ? "Localización Profesional"
                                    : "Professional Localisation"}{" "}
                                  ({caseItem.comparison.targetLang})
                                </span>
                                <p className="font-medium text-foreground leading-relaxed">
                                  "{caseItem.comparison.localizedText}"
                                </p>
                              </div>
                            </div>

                            <div className="p-4 rounded-xl bg-secondary/30 border border-border/40 text-xs text-foreground/85 leading-relaxed">
                              <span className="font-bold text-foreground">
                                {lang === "it"
                                  ? "Nota di analisi: "
                                  : lang === "fr"
                                  ? "Commentaire d'analyse : "
                                  : lang === "es"
                                  ? "Nota de análisis: "
                                  : "Linguistic commentary: "}
                              </span>
                              {caseItem.comparison.notes[lang]}
                            </div>
                          </div>
                        )}

                        {caseItem.tableData && (
                          <div className="overflow-x-auto border border-border/60 rounded-xl">
                            <table className="w-full text-xs text-left">
                              <thead className="bg-secondary/60 text-foreground uppercase tracking-wider font-semibold border-b border-border/60">
                                <tr>
                                  {caseItem.tableData.headers[lang].map((h, idx) => (
                                    <th key={idx} className="px-4 py-3">
                                      {h}
                                    </th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-border/40 bg-card">
                                {caseItem.tableData.rows[lang].map((r, rIdx) => (
                                  <tr key={rIdx} className="hover:bg-secondary/20 transition-colors">
                                    {r.map((cell, cIdx) => (
                                      <td key={cIdx} className={`px-4 py-3 ${cIdx === 0 ? "font-bold text-foreground" : "text-foreground/80"}`}>
                                        {cell}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}

                        {caseItem.sampleText && (
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="p-5 rounded-xl bg-background border border-border/60">
                                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                                  {lang === "it"
                                    ? "Testo Sorgente Originale (Inglese · Prosa Narrativa Contemporanea)"
                                    : lang === "fr"
                                    ? "Texte Source Original (Anglais · Prose Contemporaine)"
                                    : lang === "es"
                                    ? "Texto Origen Original (Inglés · Prosa Narrativa Contemporánea)"
                                    : "English Original Source (Contemporary Literary Prose)"}
                                </span>
                                <div className="text-foreground/90 whitespace-pre-line font-serif text-sm leading-relaxed">
                                  {caseItem.sampleText.enSource}
                                </div>
                              </div>

                              <div className="p-5 rounded-xl bg-primary/5 border border-primary/20">
                                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                                  {lang === "it"
                                    ? "Resa Traduttiva di Noemi (Italiano · Resa Narrativa)"
                                    : lang === "fr"
                                    ? "Traduction Italienne de Noemi (Rendu Littéraire)"
                                    : lang === "es"
                                    ? "Traducción al Italiano por Noemi (Rendición Narrativa)"
                                    : "Italian Target Translation (Literary Rendering by Noemi)"}
                                </span>
                                <div className="text-foreground/90 whitespace-pre-line font-serif text-sm leading-relaxed">
                                  {caseItem.sampleText.itTarget}
                                </div>
                              </div>
                            </div>

                            <div className="p-4 rounded-xl bg-secondary/30 border border-border/40 text-xs text-foreground/85 leading-relaxed">
                              {caseItem.sampleText.editorialNotes[lang]}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* TAB 3: KEY DECISIONS & DELIVERABLE */}
                    {tab === "decisions" && (
                      <div className="space-y-6 text-sm">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-3">
                            {lang === "it"
                              ? "Decisioni Chiave Applicate"
                              : lang === "fr"
                              ? "Décisions Stratégiques Appliquées"
                              : lang === "es"
                              ? "Decisiones Clave Aplicadas"
                              : "Key Strategic Decisions"}
                          </span>
                          <ul className="space-y-2.5">
                            {caseItem.keyDecisions[lang].map((dec, dIdx) => (
                              <li key={dIdx} className="flex items-start gap-2.5 text-foreground/90">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{dec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-4 rounded-xl bg-secondary/40 border border-border/50">
                          <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-1">
                            {lang === "it"
                              ? "Risultato dimostrativo"
                              : lang === "fr"
                              ? "Livrable de démonstration"
                              : lang === "es"
                              ? "Entregable de muestra"
                              : "Sample Deliverable"}
                          </span>
                          <p className="text-foreground/90 leading-relaxed font-medium">
                            {caseItem.deliverable[lang]}
                          </p>
                        </div>
                      </div>
                    )}

                    {caseSampleFile[caseItem.id] && (() => {
                      const doc = PORTFOLIO_DOCUMENTS.find(item => item.num === caseSampleFile[caseItem.id]);
                      return doc ? (
                        <a href={getPortfolioDocumentPath(doc.num,lang)} target="_blank" rel="noopener noreferrer"
                           className="flex items-center justify-between gap-3 p-4 rounded-xl border border-primary/40 bg-primary/5 hover:bg-primary/10 text-primary font-semibold text-sm">
                          <span className="flex items-center gap-3">
                            <FileText className="w-5 h-5 shrink-0" aria-hidden="true" />
                            {lang === "it" ? "Apri il lavoro dimostrativo" : lang === "fr" ? "Consulter le document" : lang === "es" ? "Ver documento de muestra" : "Open the work sample"}: {doc.title[lang]}
                          </span>
                          <ExternalLink className="w-4 h-4 shrink-0" aria-hidden="true" />
                        </a>
                      ) : null;
                    })()}

                    {/* Disclaimer Footer inside case */}
                    <div className="pt-4 border-t border-border/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Scale className="w-3.5 h-3.5 text-primary" />
                        <span>{caseItem.disclaimer[lang]}</span>
                      </div>
                      <Link
                        to={contactPath}
                        className="text-primary hover:underline font-semibold flex items-center gap-1 whitespace-nowrap"
                      >
                        {lang === "it"
                          ? "Richiedi un progetto simile"
                          : lang === "fr"
                          ? "Demander un projet similaire"
                          : lang === "es"
                          ? "Solicitar un proyecto similar"
                          : "Request a similar project"}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* ── DEMONSTRATION WORK DOCUMENTS SECTION ── */}
      <section id="portfolio-document-library" className="py-16 md:py-24 border-t border-border/40 bg-card/40 scroll-mt-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                <FileText className="w-3.5 h-3.5" />
                {lang === "it"
                  ? "Documenti di lavoro dimostrativi"
                  : lang === "fr"
                  ? "Documents de démonstration"
                  : lang === "es"
                  ? "Muestras de trabajo"
                  : "Independent Work Samples"}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {lang === "it"
                  ? `${PORTFOLIO_DOCUMENTS.length} documenti dimostrativi da esplorare`
                  : lang === "fr"
                  ? `${PORTFOLIO_DOCUMENTS.length} documents professionnels à découvrir`
                  : lang === "es"
                  ? `${PORTFOLIO_DOCUMENTS.length} documentos de muestra para explorar`
                  : `${PORTFOLIO_DOCUMENTS.length} professional work samples to explore`}
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mt-2 max-w-2xl">
                {lang === "it"
                  ? "Apri i documenti completi: gestione email e agenda, customer care, CRM, procedure, cataloghi, traduzioni e localizzazione. Molti esempi sono redatti in italiano; le schede di presentazione sono disponibili nelle quattro lingue."
                  : lang === "fr"
                  ? "Consultez les dossiers d'exemple : e-mails, relation client, CRM, processus, catalogues et localisation. Plusieurs documents sont en italien ; les présentations sont disponibles en quatre langues."
                  : lang === "es"
                  ? "Consulta documentos completos de ejemplo: correos, atención al cliente, CRM, procedimientos, catálogos y localización. Muchos documentos están en italiano; sus presentaciones están disponibles en cuatro idiomas."
                  : "Open full-length samples: email and calendar support, customer care, CRM, procedures, catalogues, translation and localisation. Many source documents are in Italian; summaries are available in four languages."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            {PORTFOLIO_DOCUMENTS.map((doc) => (
              <a
                key={doc.num}
                href={getPortfolioDocumentPath(doc.num,lang)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${doc.title[lang]} - ${doc.subtitle[lang]}`}
                className="group flex flex-col justify-between p-5 rounded-xl border border-border/70 bg-card hover:border-primary/60 hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-primary">
                      DOC #{doc.num}
                    </span>
                    <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
                      {categories.find(c => c.id === doc.category)?.label[lang] ?? doc.category}
                    </Badge>
                  </div>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                    {doc.title[lang]}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {doc.subtitle[lang]}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>
                    {lang === "it"
                      ? "Apri documento completo"
                      : lang === "fr"
                      ? "Ouvrir le document"
                      : lang === "es"
                      ? "Abrir documento completo"
                      : "Open full document"}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-xl bg-secondary/30 border border-border/40 text-xs text-muted-foreground flex items-center gap-2.5">
            <Scale className="w-4 h-4 text-primary shrink-0" />
            <span>
              {lang === "it"
                ? "Tutti i documenti sopra indicati sono stati redatti con dati sintetici e a scopo puramente metodologico per mostrare la cura analitica e la precisione di Noemi Tomassetti."
                : lang === "fr"
                ? "Tous les documents présentés ci-dessus comportent des données synthétiques à vocation purement méthodologique pour illustrer la rigueur de Noemi Tomassetti."
                : lang === "es"
                ? "Todos los documentos presentados contienen datos sintéticos con fines exclusivamente metodológicos para mostrar el rigor analítico de Noemi Tomassetti."
                : "All documents above are produced with synthetic data for independent methodological demonstration to illustrate the analytical rigor of Noemi Tomassetti."}
            </span>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION FOOTER ── */}
      <section className="border-t border-border/40 bg-secondary/30 py-16">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            {lang === "it"
              ? "Hai un progetto o un'esigenza operativa da affidare?"
              : lang === "fr"
              ? "Avez-vous un projet ou un besoin opérationnel à confier ?"
              : lang === "es"
              ? "¿Tienes un proyecto o una necesidad operativa que delegar?"
              : "Have a project or operational requirement to delegate?"}
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            {lang === "it"
              ? "Dalla revisione dei contenuti alla gestione di email, agenda e back office, fino alla localizzazione verso l’italiano: valutiamo insieme le attività da affidarmi."
              : lang === "fr"
              ? "De la localisation en italien aux échanges avec vos clients italiens, découvrons des solutions linguistiques et opérationnelles."
              : lang === "es"
              ? "Desde la localización al italiano hasta la comunicación escrita con tus clientes italianos actuales, podemos concretar las tareas que necesitas delegar."
              : "From EN/FR/ES translation into Italian and Italian-market localisation to written support for existing Italian customers, I can help with agreed operational and language tasks."}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to={contactPath}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider bg-primary text-primary-foreground hover:scale-105 transition-all shadow-md"
            >
              {lang === "it"
                ? "Raccontami di cosa hai bisogno"
                : lang === "fr"
                ? "Parlez-moi de votre besoin"
                : lang === "es"
                ? "Cuéntame qué necesitas"
                : "Tell me what you need"}
            </Link>
            <BookingButton
              lang={lang}
              variant="outline"
              className="w-full sm:w-auto text-xs px-6 py-3.5 rounded-full font-bold uppercase tracking-wider border-border hover:border-primary/50"
            >
              {lang === "it"
                ? "Richiedi un preventivo"
                : lang === "fr"
                ? "Demander un devis"
                : lang === "es"
                ? "Solicitar presupuesto"
                : "Request a quote"}
            </BookingButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
