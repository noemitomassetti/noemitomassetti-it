import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { BookingButton } from "@/components/BookingButton";
import {
  Language,
  getLanguageFromPath,
  getDictionary,
  getHreflangAlternates,
  getLocalizedPath,
} from "@/lib/i18n";
import {
  BookOpen,
  Clock,
  ArrowRight,
  Sparkles,
  Wrench,
  Lightbulb,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const getTools = (lang: Language) => {
  switch (lang) {
    case "it":
      return [
        { name: "Google Calendar", desc: "per organizzare appuntamenti, promemoria e disponibilità" },
        { name: "Gmail / Workspace", desc: "per una gestione ordinata delle comunicazioni e dei filtri" },
        { name: "Notion / Asana / Trello", desc: "per organizzare attività, scadenze e processi aziendali" },
        { name: "Canva", desc: "per contenuti semplici, presentazioni e materiali visivi" },
        { name: "CRM & Automazioni", desc: "per tracciare contatti, lead e relazioni con i clienti" },
      ];
    case "fr":
      return [
        { name: "Google Calendar", desc: "pour organiser vos rendez-vous, rappels et disponibilités" },
        { name: "Gmail / Workspace", desc: "pour une gestion claire et filtrée de vos correspondances" },
        { name: "Notion / Asana / Trello", desc: "pour structurer vos tâches, échéances et processus" },
        { name: "Canva", desc: "pour concevoir vos supports visuels et présentations" },
        { name: "CRM & Automatisations", desc: "pour suivre vos prospects, relances et relations clients" },
      ];
    case "es":
      return [
        { name: "Google Calendar", desc: "para organizar citas, recordatorios y disponibilidad" },
        { name: "Gmail / Workspace", desc: "para una gestión ordenada y filtrada de tus correos" },
        { name: "Notion / Asana / Trello", desc: "para estructurar tareas, plazos y procesos operativos" },
        { name: "Canva", desc: "para crear contenidos visuales y presentaciones atractivas" },
        { name: "CRM y Automatizaciones", desc: "para hacer seguimiento a contactos, leads y clientes" },
      ];
    default:
      return [
        { name: "Google Calendar", desc: "to organize appointments, buffers, and availability" },
        { name: "Gmail / Workspace", desc: "for structured inbox triage, folders, and clean filters" },
        { name: "Notion / Asana / Trello", desc: "to manage tasks, client projects, and operations" },
        { name: "Canva", desc: "for quick graphics, visual assets, and presentation slide decks" },
        { name: "CRM & Automations", desc: "to track contacts, follow-ups, and customer relationships" },
      ];
  }
};

const getTips = (lang: Language) => {
  switch (lang) {
    case "it":
      return [
        "Definisci le attività che fai ogni giorno e quantifica il tempo impiegato",
        "Individua cosa puoi delegare prima di arrivare al sovraccarico",
        "Organizza agenda e appuntamenti con margini di respiro tra gli incontri",
        "Centralizza le comunicazioni per non disperdere le informazioni",
        "Crea un sistema semplice e chiaro per accogliere i tuoi clienti",
      ];
    case "fr":
      return [
        "Cartographiez vos tâches récurrentes quotidiennes et leur durée",
        "Identifiez ce que vous pouvez déléguer avant d’atteindre la saturation",
        "Structurez votre calendrier en conservant des marges de respiration",
        "Centralisez vos échanges avec vos clients pour éviter la dispersion",
        "Mettez en place un accueil client clair, simple et rassurant",
      ];
    case "es":
      return [
        "Define las tareas recurrentes que realizas cada día y su tiempo estimado",
        "Identifica qué gestiones puedes delegar antes de sentir sobrecarga",
        "Organiza tu agenda protegiendo márgenes de respiro entre reuniones",
        "Centraliza las comunicaciones para no dispersar datos clave",
        "Diseña un protocolo de bienvenida claro y profesional para tus clientes",
      ];
    default:
      return [
        "Map out your daily recurring tasks and quantify the hours spent",
        "Identify what can be safely delegated before burnout sets in",
        "Protect calendar buffers between consecutive client appointments",
        "Centralize communications so crucial details never slip away",
        "Build a simple, repeatable onboarding flow for new clients",
      ];
  }
};

export default function ResourcesPage() {
  const location = useLocation();
  const lang = getLanguageFromPath(location.pathname);
  const dict = getDictionary(lang);
  const r = dict.resourcesPage;
  const canonicalUrl = `https://www.noemitomassetti.it${getLocalizedPath("resources", lang)}`;

  const [activeCat, setActiveCat] = useState<string>("All");

  useSEO({
    title: dict.meta.resourcesTitle,
    description: dict.meta.resourcesDesc,
    canonical: canonicalUrl,
    alternates: getHreflangAlternates("resources"),
    ogType: "website",
  });

  const tools = getTools(lang);
  const tips = getTips(lang);

  const filteredArticles =
    activeCat === "All" || activeCat === "Tutte" || activeCat === "Tous" || activeCat === "Todos" || activeCat === "Tutti"
      ? r.articles
      : r.articles.filter((a) => a.category === activeCat);

  return (
    <Layout lang={lang}>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-18 md:pb-20 border-b border-border/40">
        <div className="container max-w-5xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{r.tag}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {r.title}
          </h1>

          <p className="text-base sm:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            {r.subtitle}
          </p>
        </div>
      </section>

      {/* ── RECOMMENDED TOOLS & TIPS ── */}
      <section className="py-14 md:py-20 bg-secondary/15 border-b border-border/40">
        <div className="container max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Tools */}
            <div className="bg-card border border-border/60 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary border border-primary/20">
                  <Wrench className="w-5 h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                  {lang === "it"
                    ? "Strumenti consigliati"
                    : lang === "fr"
                    ? "Outils recommandés"
                    : lang === "es"
                    ? "Herramientas recomendadas"
                    : "Recommended Tools"}
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
                {lang === "it"
                  ? "Per lavorare in modo ordinato ed efficace, questi sono alcuni strumenti che utilizzo quotidianamente e che consiglio:"
                  : lang === "fr"
                  ? "Pour travailler avec clarté et régularité, voici les outils que j'utilise et recommande :"
                  : lang === "es"
                  ? "Para trabajar de forma metódica y eficaz, estas son las herramientas que empleo y sugiero:"
                  : "To work in an orderly, efficient manner, here are core tools I rely on daily and recommend:"}
              </p>
              <ul className="space-y-3.5 mb-6">
                {tools.map((tool, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>
                      <strong className="text-foreground">{tool.name}</strong>{" "}
                      <span className="text-foreground/75">→ {tool.desc}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="bg-secondary/40 p-4 rounded-xl border border-border/50 text-xs sm:text-sm text-foreground/85">
                <p className="font-medium">
                  👉{" "}
                  {lang === "it"
                    ? "L'obiettivo non è usare mille strumenti, ma avere un sistema semplice e funzionale."
                    : lang === "fr"
                    ? "L'objectif n'est pas d'accumuler les outils, mais d'avoir un système simple et fonctionnel."
                    : lang === "es"
                    ? "El objetivo no es acumular herramientas, sino contar con un sistema simple y resolutivo."
                    : "The goal is not to juggle dozens of tools, but to run a simple, functional system."}
                </p>
              </div>
            </div>

            {/* Practical Tips */}
            <div className="bg-card border border-border/60 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 bg-primary/10 rounded-xl text-primary border border-primary/20">
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    {lang === "it"
                      ? "Consigli per iniziare"
                      : lang === "fr"
                      ? "Conseils pratiques"
                      : lang === "es"
                      ? "Consejos para empezar"
                      : "Practical Tips to Start"}
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6 leading-relaxed">
                  {lang === "it"
                    ? "Piccoli cambiamenti strategici che generano un impatto immediato sulle tue giornate:"
                    : lang === "fr"
                    ? "Des ajustements concrets pour un impact immédiat sur votre sérénité au travail :"
                    : lang === "es"
                    ? "Pequeños cambios estructurados que transforman de inmediato tu jornada laboral:"
                    : "Small procedural shifts that create an immediate impact on your daily bandwidth:"}
                </p>
                <ul className="space-y-3 mb-6">
                  {tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border/40">
                <BookingButton
                  variant="outline"
                  className="w-full py-5 rounded-xl font-bold text-xs uppercase tracking-wider border-primary/40 text-foreground hover:bg-primary/10"
                >
                  <Calendar className="w-4 h-4 mr-2 text-primary" />
                  {dict.nav.bookCall}
                </BookingButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLES & CATEGORY FILTER ── */}
      <section className="py-14 md:py-22">
        <div className="container max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {lang === "it"
                ? "Articoli e Approfondimenti"
                : lang === "fr"
                ? "Articles et Guides Pratiques"
                : lang === "es"
                ? "Artículos y Guías Prácticas"
                : "Articles & Practical Guides"}
            </h2>
            <p className="text-sm text-muted-foreground">
              {lang === "it"
                ? "Consulta le guide tematiche per approfondire strategie, delega e produttività."
                : lang === "fr"
                ? "Consultez nos articles thématiques pour optimiser vos méthodes de travail."
                : lang === "es"
                ? "Explora nuestras guías para profundizar en delegación, métodos y gestión del tiempo."
                : "Explore actionable perspectives on delegation, systems, and time protection."}
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {r.categories.map((cat, idx) => {
              const isSelected =
                activeCat === cat ||
                ((cat === "All" || cat === "Tutte" || cat === "Tous" || cat === "Todos" || cat === "Tutti") &&
                  (activeCat === "All" || activeCat === "Tutte" || activeCat === "Tous" || activeCat === "Todos" || activeCat === "Tutti"));

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveCat(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-secondary/40 text-muted-foreground hover:text-foreground border border-border/50"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-card border border-border/60 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-primary/50 transition-all hover:shadow-md group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2 text-xs text-muted-foreground">
                    <span className="font-semibold uppercase tracking-wider text-primary">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-border/40 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.date}</span>
                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary hover:underline"
                  >
                    <span>{lang === "it" ? "Leggi l'articolo" : "Read guide"}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
