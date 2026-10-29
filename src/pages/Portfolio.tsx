import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { getLanguageFromPath, getLocalizedPath } from "@/lib/i18n/routes";
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
  const [expandedCaseId, setExpandedCaseId] = useState<string | null>("01-interior-design-localization");
  const [activeTab, setActiveTab] = useState<Record<string, "overview" | "comparison" | "decisions">>({});

  // SEO configuration
  const titles = {
    it: "Esempi di Lavoro e Progetti Dimostrativi | Noemi Tomassetti",
    en: "Work Examples & Demonstration Cases | Noemi Tomassetti",
    fr: "Exemples de Projets et Études de Cas | Noemi Tomassetti",
    es: "Ejemplos de Trabajo y Casos Prácticos | Noemi Tomassetti",
  };

  const descriptions = {
    it: "Esplora esempi dimostrativi e documenti operativi: assistenza virtuale, customer care, back office, traduzione e localizzazione, con contenuti e dati fittizi.",
    en: "Explore independent work samples and operational documents: virtual assistance, written customer care, back office, translation and Italian localisation.",
    fr: "Découvrez des exemples professionnels indépendants : assistance virtuelle, relation client écrite, back-office, traduction et localisation en italien.",
    es: "Explora muestras profesionales independientes: asistencia virtual, atención escrita al cliente, back office, traducción y localización al italiano.",
  };

  useSEO({
    title: titles[lang],
    description: descriptions[lang],
    pageKey: "portfolio",
    currentLang: lang,
  });

  const categories: { id: PortfolioCategory; label: Record<Language, string>; icon: React.ReactNode }[] = [
    { id: "all", label: { it: "Tutti i progetti", en: "All Projects", fr: "Tous les projets", es: "Todos los proyectos" }, icon: <SlidersHorizontal className="w-3.5 h-3.5" /> },
    { id: "translation", label: { it: "Traduzione & Localizzazione", en: "Translation & Localization", fr: "Traduction & Localisation", es: "Traducción y Localización" }, icon: <Globe className="w-3.5 h-3.5" /> },
    { id: "research", label: { it: "Ricerche & Benchmark", en: "Research & Benchmarks", fr: "Recherches & Veille", es: "Investigación y Benchmarking" }, icon: <Search className="w-3.5 h-3.5" /> },
    { id: "backoffice", label: { it: "Back Office & Organizzazione", en: "Back Office & Operations", fr: "Back-Office & Organisation", es: "Back Office y Organización" }, icon: <Briefcase className="w-3.5 h-3.5" /> },
    { id: "writing", label: { it: "Scrittura & Revisione", en: "Writing & Revision", fr: "Rédaction & Révision", es: "Redacción y Corrección" }, icon: <PenTool className="w-3.5 h-3.5" /> },
    { id: "web", label: { it: "Siti Web & Landing Page", en: "Web & Landing Pages", fr: "Sites Web & Pages", es: "Sitios Web y Páginas" }, icon: <Layers className="w-3.5 h-3.5" /> },
  ];

  const filteredCases = selectedCategory === "all"
    ? PORTFOLIO_CASES
    : PORTFOLIO_CASES.filter((c) => c.category === selectedCategory);

  const toggleCase = (id: string) => {
    setExpandedCaseId((prev) => (prev === id ? null : id));
  };

  const getActiveTabForCase = (id: string) => activeTab[id] || "overview";

  const setTabForCase = (id: string, tab: "overview" | "comparison" | "decisions") => {
    setActiveTab((prev) => ({ ...prev, [id]: tab }));
  };

  const contactPath = getLocalizedPath("contact", lang);

  return (
    <Layout lang={lang}>
      {/* ── HEADER BANNER ── */}
      <section className="border-b border-border/40 bg-secondary/20 py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <GraduationCap className="w-3.5 h-3.5" />
            {lang === "it"
              ? "Portfolio Metodologico · Casi Dimostrativi"
              : lang === "fr"
              ? "Portfolio Méthodologique · Cas Démonstratifs"
              : lang === "es"
              ? "Portafolio Metodológico · Casos Demostrativos"
              : "Methodological Portfolio · Demonstration Cases"}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            {lang === "it"
              ? "Esempi di lavoro"
              : lang === "fr"
              ? "Exemples de projets"
              : lang === "es"
              ? "Ejemplos de trabajo"
              : "Work Examples"}
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-3xl">
            {lang === "it"
              ? "Esempi dimostrativi, realizzati con materiali fittizi o originali, per mostrare metodo, accuratezza linguistica e organizzazione del lavoro. Non sono presentati come incarichi di clienti."
              : lang === "fr"
              ? "Des exemples démonstratifs réalisés à partir de contenus fictifs ou originaux pour illustrer la méthode de travail et la rigueur linguistique. Ils ne sont pas présentés comme des missions clients."
              : lang === "es"
              ? "Ejemplos demostrativos creados con materiales ficticios u originales para mostrar el método de trabajo y el rigor lingüístico. No se presentan como encargos de clientes."
              : "Demonstration samples created with fictional or original materials to show working methods, linguistic care and operational organisation. These are not presented as commissioned client projects."}
          </p>

          {/* DEMO TRANSPARENCY NOTICE */}
          <div className="bg-background/80 backdrop-blur border border-primary/20 rounded-xl p-5 text-sm text-foreground/85 flex items-start gap-3.5 shadow-sm">
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
              <span>{DEMO_DISCLAIMER[lang]}</span>
            </div>
          </div>
        </div>
      </section>

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
                ? "Master Universitario di I livello in Traduzione Specialistica (1.500 ore, 60 CFU). I 5 ambiti di approfondimento accademico e la loro applicazione:"
                : lang === "fr"
                ? "Master universitaire de 1er niveau en traduction spécialisée (1 500 heures, 60 ECTS). Les 5 domaines d'études approfondis :"
                : lang === "es"
                ? "Máster universitario de 1er nivel en traducción especializada (1.500 horas, 60 ECTS). Los 5 ámbitos académicos aplicados :"
                : "First-Level Postgraduate University Master's Degree in Specialist Translation (1,500 hours, 60 ECTS). Five rigorous academic training fields:"}
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
                  const el = document.getElementById(f.caseRef);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
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
      <section className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border/40 py-4 shadow-sm">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto flex items-center gap-2 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {cat.icon}
              {cat.label[lang]}
            </button>
          ))}
        </div>
      </section>

      {/* ── CASE STUDIES LIST ── */}
      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto space-y-8">
          {filteredCases.map((caseItem: PortfolioCase) => {
            const isExpanded = expandedCaseId === caseItem.id;
            const tab = getActiveTabForCase(caseItem.id);

            return (
              <article
                key={caseItem.id}
                id={caseItem.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "border-primary/40 bg-card shadow-md"
                    : "border-border/60 bg-card/60 hover:border-border"
                }`}
              >
                {/* Header Card */}
                <div
                  onClick={() => toggleCase(caseItem.id)}
                  className="p-6 md:p-8 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-muted-foreground">
                        #{String(caseItem.order).padStart(2, "0")}
                      </span>
                      <Badge variant="outline" className="text-[11px] uppercase tracking-wider">
                        {caseItem.category}
                      </Badge>
                      {caseItem.masterField && (
                        <Badge className="bg-primary/20 text-primary border-primary/30 text-[10px] uppercase font-bold tracking-wider">
                          Master: {caseItem.masterField}
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
                        ? "Visualizza metodo e deliverable"
                        : lang === "fr"
                        ? "Voir la méthode et le livrable"
                        : lang === "es"
                        ? "Ver método y entregable"
                        : "View method & deliverable"}
                    </span>
                    <div className="p-2 rounded-full bg-secondary/80 text-foreground">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

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
                                    ? "Traduzione Letterale / Macchinica (Inaccurata)"
                                    : lang === "fr"
                                    ? "Traduction Littérale / Automatique (Inappropriée)"
                                    : lang === "es"
                                    ? "Traducción Literal / Automática (Inadecuada)"
                                    : "Literal / Machine Translation (Flawed)"}
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
                                    : "Professional Localization"}{" "}
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
                              ? "Deliverable Finale Fornito al Cliente"
                              : lang === "fr"
                              ? "Livrable Final Fourni au Client"
                              : lang === "es"
                              ? "Entregable Final Proporcionado al Cliente"
                              : "Final Client Deliverable"}
                          </span>
                          <p className="text-foreground/90 leading-relaxed font-medium">
                            {caseItem.deliverable[lang]}
                          </p>
                        </div>
                      </div>
                    )}

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
      <section className="py-16 md:py-24 border-t border-border/40 bg-card/40">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                <FileText className="w-3.5 h-3.5" />
                {lang === "it"
                  ? "Deliverable & Documenti Autonomi"
                  : lang === "fr"
                  ? "Livrables & Documents Autonomes"
                  : lang === "es"
                  ? "Entregables y Documentos Independientes"
                  : "Deliverables & Standalone Documents"}
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
                href={doc.url}
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
                      {doc.category}
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
              ? "Dalla revisione di testi alla gestione dell'agenda e dei clienti, fino alla localizzazione multilingue: valutiamo insieme come posso supportare la tua attività."
              : lang === "fr"
              ? "De la révision éditoriale à la gestion administrative et la localisation : échangeons sur vos priorités."
              : lang === "es"
              ? "Desde la corrección de textos hasta la gestión de clientes y la localización multilingüe: veamos cómo puedo ayudarte."
              : "From multilingual localization to inbox management and desk research: let's discuss how I can concrete support your workflow."}
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
                ? "Richiedi un preventivo scritto"
                : lang === "fr"
                ? "Demander un devis écrit"
                : lang === "es"
                ? "Solicitar presupuesto por escrito"
                : "Request a written quote"}
            </BookingButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
