import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/BookingButton";
import { Wrench, Lightbulb, BookOpen, Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const getTools = () => {
  return [
    { name: "Google Calendar", desc: "per organizzare appuntamenti, promemoria e disponibilità" },
    { name: "Gmail / Workspace", desc: "per una gestione ordinata delle comunicazioni e dei filtri" },
    { name: "Notion / Asana / Trello", desc: "per organizzare attività, scadenze e processi aziendali" },
    { name: "Canva", desc: "per contenuti semplici, presentazioni e materiali visivi" },
    { name: "CRM & Automazioni", desc: "per tracciare contatti, lead e relazioni con i clienti" },
  ];
};

const getTips = () => {
  return [
    "Definisci le attività che fai ogni giorno",
    "Individua cosa puoi delegare",
    "Organizza agenda e appuntamenti in modo chiaro",
    "Centralizza le comunicazioni",
    "Crea un sistema semplice per i tuoi clienti",
  ];
};

const getArticles = () => {
  return [
    { title: "Come organizzare la tua agenda in modo semplice", link: "/blog/come-organizzare-la-tua-agenda-in-5-step" },
    { title: "L'importanza di delegare per far crescere la tua attività", link: "/blog/perche-delegare-e-la-scelta-piu-efficace-per-far-crescere-la-tua-attivita" },
    { title: "Strumenti digitali per gestire clienti e comunicazioni", link: "/blog/5-strumenti-gratuiti-utili-per-organizzare-meglio-il-lavoro-con-clienti-e-appuntamenti" },
  ];
};

const getFutureResources = () => {
  return [
    "Checklist per iniziare a delegare",
    "Template per la gestione clienti",
    "Guida per organizzare agenda e attività",
  ];
};

import { useSEO } from "@/hooks/useSEO";

const Risorse = () => {
  const tools = getTools();
  const tips = getTips();
  const articles = getArticles();
  const futureResources = getFutureResources();

  useSEO({
    title: "Strumenti e Risorse per l'Organizzazione | Noemi Tomassetti",
    description: "Scopri gli strumenti, i consigli pratici e le risorse gratuite per ottimizzare i processi della tua attività e recuperare tempo prezioso.",
    canonical: "https://www.noemitomassetti.it/risorse",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.noemitomassetti.it/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Risorse",
            "item": "https://www.noemitomassetti.it/risorse"
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Strumenti e Risorse per l'Organizzazione | Noemi Tomassetti",
        "description": "Scopri gli strumenti, i consigli pratici e le risorse gratuite consigliate da un'Assistente Virtuale esperta per ottimizzare la tua attività.",
        "url": "https://www.noemitomassetti.it/risorse",
        "author": {
          "@type": "Person",
          "name": "Noemi Tomassetti",
          "url": "https://www.noemitomassetti.it"
        }
      }
    ]
  });

  return (
    <Layout>
      <div className="container py-10 md:py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6">
            Strumenti e Risorse per Lavorare Meno e Meglio
          </h1>
          <p className="text-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Ottimizza i tuoi processi con questi strumenti gratuiti e consigli pratici di un'assistente virtuale. Inizia subito a recuperare tempo prezioso, migliorare la tua produttività e gestire i tuoi clienti in modo impeccabile.
          </p>
          <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-border/50">
            <img src="https://vibe.filesafe.space/1776423224485175331/assets/27f86f76-a9ad-4081-b16e-fab619117889.png" alt="Risorse e strumenti professionali per organizzare il lavoro di un'Assistente Virtuale" width="800" height="400" loading="eager" fetchpriority="high" decoding="async" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="space-y-10">
          {/* BLOCCO 1 – STRUMENTI CONSIGLIATI */}
          <section className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Wrench className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Strumenti che utilizzo e consiglio</h2>
            </div>
            <p className="text-muted-foreground text-base md:text-lg mb-6">
              Per lavorare in modo organizzato ed efficace, questi sono alcuni strumenti che utilizzo e che possono aiutarti nella gestione della tua attività:
            </p>
            <ul className="space-y-3 mb-6">
              {tools.map((tool, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>
                    <strong className="text-foreground">{tool.name}</strong> <span className="text-muted-foreground">→ {tool.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="bg-secondary/30 p-4 rounded-lg border border-border/50">
              <p className="text-base font-medium flex items-start gap-2">
                <span>👉</span>
                <span>L'obiettivo non è usare mille strumenti, ma avere un sistema semplice e funzionale.</span>
              </p>
            </div>
          </section>

          {/* BLOCCO 2 – CONSIGLI PRATICI */}
          <section className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Da dove iniziare per organizzarti meglio</h2>
            </div>
            <p className="text-muted-foreground text-base md:text-lg mb-6">
              Se senti che la tua attività è disorganizzata, puoi iniziare da qui:
            </p>
            <ul className="space-y-3 mb-6">
              {tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-foreground">{tip}</span>
                </li>
              ))}
            </ul>
            <div className="bg-secondary/30 p-4 rounded-lg border border-border/50">
              <p className="text-base font-medium flex items-start gap-2">
                <span>👉</span>
                <span>Anche piccoli cambiamenti possono fare una grande differenza.</span>
              </p>
            </div>
          </section>

          {/* BLOCCO 3 – MINI GUIDE / CONTENUTI */}
          <section className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Approfondimenti</h2>
            </div>
            <ul className="space-y-4 mb-6">
              {articles.map((article, idx) => (
                <li key={idx}>
                  <Link to={article.link} className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group">
                    <span className="text-primary font-bold">•</span>
                    <span className="font-medium">{article.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="bg-secondary/30 p-4 rounded-lg border border-border/50">
              <p className="text-base font-medium flex items-center gap-2">
                <span>👉</span>
                <Link to="/blog" className="hover:text-primary transition-colors underline underline-offset-4">
                  Leggi tutti gli articoli sul blog
                </Link>
              </p>
            </div>
          </section>

          {/* BLOCCO 4 – FUTURO */}
          <section className="bg-card border border-border rounded-2xl p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Gift className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">Risorse gratuite (in arrivo)</h2>
            </div>
            <p className="text-muted-foreground text-base md:text-lg mb-6">
              Sto preparando alcune risorse pratiche per aiutarti a organizzare meglio la tua attività:
            </p>
            <ul className="space-y-3 mb-8">
              {futureResources.map((res, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span className="text-foreground">{res}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-secondary/30 p-4 rounded-lg border border-border/50">
              <p className="text-base font-medium flex items-start sm:items-center gap-2">
                <span>👉</span>
                <span>Puoi richiederle durante la call conoscitiva.</span>
              </p>
              <BookingButton size="sm" aria-label="Prenota Call Conoscitiva Gratuita" className="shrink-0 font-bold uppercase tracking-wider">
                PRENOTA CALL GRATUITA
              </BookingButton>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Risorse;