import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, FileText, Globe2, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { BASE_DOMAIN, getLanguageFromPath, getLocalizedPath } from "@/lib/i18n/routes";
import { DIRECTION_LABELS, TRANSLATION_SAMPLE_NOTICE } from "@/lib/portfolioDeepTypes";
import { OPERATIONAL_NOTICE } from "@/lib/portfolioOperationalTypes";
import { getDeepPortfolioItem, getDeepPortfolioPath } from "@/lib/portfolioDeepCatalog";
import type { Language } from "@/lib/i18n/types";

const LANGS: Language[] = ["it", "en", "fr", "es"];
const labels = {
  it: { back:"Torna al portfolio", eyebrow:"Dossier dimostrativo approfondito", disclaimer:"Come interpretare l’esempio", context:"Scenario e necessità", source:"Testo originale", target:"Traduzione proposta", italianWorkNote:"Il documento dimostrativo è in italiano perché rappresenta un incarico di supporto rivolto a clienti italiani; l’analisi è disponibile nella lingua selezionata.", multilingualWorkNote:"In questo esempio i documenti sono presentati nella lingua indicata per ciascun elaborato; le spiegazioni sono disponibili nella lingua di navigazione.", method:"Metodo di lavoro e decisioni", glossary:"Scelte terminologiche a confronto", quality:"Controlli di qualità e limiti", output:"Elaborato e consegna", workflow:"Procedura operativa", inputs:"Materiali iniziali", objective:"Obiettivo del lavoro", artifacts:"Documenti e materiali dimostrativi", limits:"Cosa non comprende il servizio", contact:"Richiedi un preventivo per un progetto simile", services:"Vedi tutti i servizi", note:"Perché è stata scelta questa soluzione", missing:"Dossier non disponibile", authored:"Esempio originale, non commissionato", result:"Cosa riceverebbe il cliente" },
  en: { back:"Back to work samples", eyebrow:"Detailed demonstration dossier", disclaimer:"How to interpret this example", context:"Scenario and business need", source:"Original source", target:"Proposed translation", italianWorkNote:"The sample deliverable is in Italian because it illustrates work for Italian-speaking customers. The context and professional explanations are available in your selected language.", multilingualWorkNote:"This example includes actual sample deliverables in the language shown for each document; the explanations are available in your selected language.", method:"Working method and decisions", glossary:"Terminology and translation choices", quality:"Quality checks and limitations", output:"Deliverable and handover", workflow:"Operational workflow", inputs:"Starting materials", objective:"Objective", artifacts:"Demonstration deliverables", limits:"What this service does not include", contact:"Request a quote for similar work", services:"Explore all services", note:"Why this wording was chosen", missing:"Dossier not found", authored:"Original sample, not commissioned", result:"What a client would receive" },
  fr: { back:"Retour au portfolio", eyebrow:"Dossier détaillé de démonstration", disclaimer:"Comment lire cet exemple", context:"Contexte et besoin", source:"Texte source", target:"Traduction proposée", italianWorkNote:"Le document d’exemple est en italien car il illustre un travail destiné à des clients italiens. Les explications sont disponibles dans la langue sélectionnée.", multilingualWorkNote:"Cet exemple présente des livrables dans la langue indiquée pour chaque document ; les explications sont disponibles dans la langue de navigation.", method:"Méthode et décisions", glossary:"Terminologie et choix de traduction", quality:"Contrôles de qualité et limites", output:"Livrable et transmission", workflow:"Procédure opérationnelle", inputs:"Documents de départ", objective:"Objectif", artifacts:"Livrables de démonstration", limits:"Ce que la prestation n’inclut pas", contact:"Demander un devis pour un projet similaire", services:"Voir les prestations", note:"Pourquoi ce choix", missing:"Dossier indisponible", authored:"Exemple original, non commandé", result:"Ce que recevrait le client" },
  es: { back:"Volver al portfolio", eyebrow:"Dossier de demostración detallado", disclaimer:"Cómo interpretar el ejemplo", context:"Contexto y necesidad", source:"Texto de origen", target:"Traducción propuesta", italianWorkNote:"El documento de muestra está en italiano porque representa tareas destinadas a clientes italianos. Las explicaciones están disponibles en el idioma elegido.", multilingualWorkNote:"Este ejemplo presenta documentos en el idioma indicado en cada uno; las explicaciones están disponibles en el idioma de navegación.", method:"Método y decisiones", glossary:"Terminología y decisiones", quality:"Controles de calidad y límites", output:"Entrega y resultado", workflow:"Proceso operativo", inputs:"Materiales iniciales", objective:"Objetivo", artifacts:"Documentos de muestra", limits:"Qué no incluye el servicio", contact:"Solicitar presupuesto para un trabajo similar", services:"Ver los servicios", note:"Por qué se eligió esta solución", missing:"Dossier no disponible", authored:"Muestra original, no encargada", result:"Qué recibiría el cliente" }
} satisfies Record<Language,Record<string,string>>;
const OG_LOCALES:Record<Language,string>={it:"it_IT",en:"en_GB",fr:"fr_FR",es:"es_ES"};

export default function PortfolioDeepCase() {
  const { pathname } = useLocation();
  const lang = getLanguageFromPath(pathname);
  const { slug } = useParams<{slug:string}>();
  const entry = getDeepPortfolioItem(slug || "");
  const t=labels[lang];
  const title = entry?.item.title[lang] || t.missing;
  const subtitle = !entry ? "" : entry.kind === "translation" ? entry.item.domain[lang] : entry.item.service[lang];
  const path = entry ? getDeepPortfolioPath(entry.item.id,lang) : getLocalizedPath("portfolio",lang);
  const canonical=BASE_DOMAIN+path;
  const alternates=entry?[
    ...LANGS.map(l=>({hrefLang:l,href:BASE_DOMAIN+getDeepPortfolioPath(entry.item.id,l)})),
    {hrefLang:"x-default",href:BASE_DOMAIN+getDeepPortfolioPath(entry.item.id,"en")}
  ]:[];
  useSEO({
    title: title + " | Noemi Tomassetti",
    description: subtitle + ". " + t.eyebrow + ". " + t.authored + ".",
    pageKey: "portfolio",
    currentLang:lang,
    canonical,alternates,noindex:!entry,ogLocale:OG_LOCALES[lang],
    schema:entry?{
      "@context":"https://schema.org",
      "@type":"CreativeWork",
      "headline":title,
      "description":subtitle+" — "+t.authored,
      "inLanguage":lang,
      "url":canonical,
      "genre":"Independent fictional work demonstration",
      "isAccessibleForFree":true,
      "publisher":{"@type":"Person","name":"Noemi Tomassetti"},
      "about":entry.kind==="translation" ? "Translation and localisation" : entry.item.service.en
    }:undefined
  });
  if (!entry) return <Layout lang={lang}><div className="container mx-auto max-w-4xl px-5 py-20"><h1 className="text-3xl font-bold">{t.missing}</h1><Link to={getLocalizedPath("portfolio",lang)} className="text-primary underline">{t.back}</Link></div></Layout>;

  const isTranslation=entry.kind==="translation";
  return <Layout lang={lang}>
    <div className="bg-background pb-24">
      <header className="border-b border-border/60 bg-secondary/20 py-12 md:py-20">
        <div className="container max-w-5xl mx-auto px-5">
          <Link to={getLocalizedPath("portfolio",lang)} className="inline-flex items-center gap-2 font-semibold text-primary hover:underline text-sm mb-7">
            <ArrowLeft size={17}/>{t.back}
          </Link>
          <p className="text-xs uppercase tracking-widest font-semibold text-primary flex items-center gap-2"><BookOpen size={16}/>{t.eyebrow}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mt-4 mb-5 leading-tight">{title}</h1>
          <p className="text-lg text-foreground/80 max-w-3xl leading-relaxed">{subtitle}</p>
          {isTranslation && <p className="mt-4 font-semibold text-primary text-sm">{DIRECTION_LABELS[entry.item.direction]}</p>}
          <nav aria-label="Language / Lingua / Langue / Idioma" className="flex flex-wrap gap-2 mt-8">
            {LANGS.map(l=><Link key={l} to={getDeepPortfolioPath(entry.item.id,l)} lang={l} aria-current={lang===l?"page":undefined}
               className={"px-4 py-2 text-xs rounded-full border font-semibold focus-visible:ring-2 focus-visible:ring-primary " + (lang===l?"bg-primary border-primary text-primary-foreground":"border-border hover:border-primary")}>{l.toUpperCase()}</Link>)}
          </nav>
        </div>
      </header>

      <div className="container max-w-5xl mx-auto px-5">
        <aside className="mt-9 rounded-xl border border-primary/30 bg-primary/5 p-5 text-sm text-foreground/80 leading-relaxed">
          <p className="font-bold text-foreground flex items-center gap-2 mb-2"><ShieldCheck size={18} className="text-primary"/>{t.disclaimer}</p>
          <p>{isTranslation ? TRANSLATION_SAMPLE_NOTICE[lang] : OPERATIONAL_NOTICE[lang]}</p>
        </aside>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-5">{t.context}</h2>
          <p className="text-foreground/85 leading-relaxed max-w-4xl">{entry.kind==="translation" ? entry.item.context[lang] : entry.item.scenario[lang]}</p>
        </section>

        {entry.kind==="translation" ? <>
          <section className="mt-14" aria-label={t.source}>
            <h2 className="text-2xl font-bold mb-3">{t.source} / {t.target}</h2>
            <p className="text-sm text-muted-foreground mb-7">{DIRECTION_LABELS[entry.item.direction]} · {t.authored}</p>
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-xl border border-border/70 bg-card p-5 sm:p-7">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-5">{t.source} · {entry.item.direction.split("-")[0]}</h3>
                <div lang={entry.item.direction.split("-")[0].toLowerCase()} className="space-y-5">{entry.item.source.map((text,i)=><p key={i} className="text-base leading-relaxed">{text}</p>)}</div>
              </article>
              <article className="rounded-xl border border-primary/30 bg-primary/5 p-5 sm:p-7">
                <h3 className="text-xs uppercase tracking-widest text-primary font-bold mb-5">{t.target} · {entry.item.direction.split("-")[1]}</h3>
                <div lang={entry.item.direction.split("-")[1].toLowerCase()} className="space-y-5">{entry.item.target.map((text,i)=><p key={i} className="text-base leading-relaxed">{text}</p>)}</div>
              </article>
            </div>
          </section>
          <section className="mt-14">
            <h2 className="text-2xl font-bold mb-6">{t.glossary}</h2>
            <div className="grid gap-4">{entry.item.terminology.map((choice,i)=><article key={i} className="rounded-xl border border-border/70 bg-card p-5">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div><p className="text-xs text-muted-foreground uppercase font-semibold mb-1">{t.source}</p><p className="font-semibold">{choice.source}</p></div>
                <div><p className="text-xs text-primary uppercase font-semibold mb-1">{t.target}</p><p className="font-semibold">{choice.target}</p></div>
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed">{choice.explanation[lang]}</p>
            </article>)}</div>
          </section>
          <section className="mt-12 grid md:grid-cols-2 gap-5">
            <article className="rounded-xl border border-border/70 p-6"><h2 className="text-xl font-bold mb-3">{t.method}</h2><p className="leading-relaxed text-foreground/85">{entry.item.method[lang]}</p></article>
            <article className="rounded-xl border border-border/70 p-6"><h2 className="text-xl font-bold mb-3">{t.quality}</h2><p className="leading-relaxed text-foreground/85">{entry.item.review[lang]}</p></article>
          </section>
          <section className="mt-8 rounded-xl bg-secondary/30 border border-border/60 p-6"><h2 className="text-xl font-bold mb-3">{t.result}</h2><p className="leading-relaxed">{entry.item.output[lang]}</p></section>
        </> : <>
          <section className="mt-9 grid md:grid-cols-2 gap-5">
            <article className="border border-border/70 rounded-xl bg-card p-6"><h2 className="text-xl font-bold mb-3">{t.objective}</h2><p className="leading-relaxed">{entry.item.objective[lang]}</p></article>
            <article className="border border-border/70 rounded-xl bg-card p-6"><h2 className="text-xl font-bold mb-3">{t.inputs}</h2><p className="leading-relaxed">{entry.item.inputs[lang]}</p></article>
          </section>
          <section className="mt-14">
            <h2 className="text-2xl font-bold mb-6">{t.workflow}</h2>
            <ol className="space-y-3">{entry.item.workflow.map((step,i)=><li key={i} className="flex gap-4 items-start rounded-lg border border-border/70 bg-card p-4">
              <span aria-hidden="true" className="shrink-0 rounded-full h-8 w-8 bg-primary/15 text-primary flex items-center justify-center text-sm font-bold">{i+1}</span>
              <span className="text-foreground/90 leading-relaxed">{step[lang]}</span>
            </li>)}</ol>
          </section>
          <section className="mt-14">
            <h2 className="text-2xl font-bold mb-3">{t.artifacts}</h2>
            <p className="text-sm text-muted-foreground mb-3">{t.authored} · {t.note}</p>
            <p className="text-sm text-foreground/75 mb-7 leading-relaxed">{entry.item.artifacts.every(art=>!art.language || art.language==="it") ? t.italianWorkNote : t.multilingualWorkNote}</p>
            <div className="space-y-7">{entry.item.artifacts.map((art,i)=><article key={i} className="border border-border/70 rounded-xl overflow-hidden bg-card">
              <div className="p-5 sm:p-6 border-b border-border/60 bg-secondary/25"><h3 className="font-bold text-xl flex gap-3 items-center"><FileText size={21} className="text-primary"/>{art.title[lang]}</h3></div>
              <div className="p-5 sm:p-7"><div lang={art.language ?? "it"} className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-foreground/85 bg-background border border-border/60 rounded-lg p-5 overflow-x-auto">{art.content}</div>
                <p className="mt-5 text-sm leading-relaxed text-foreground/75"><strong>{t.note}: </strong>{art.explanation[lang]}</p>
              </div>
            </article>)}</div>
          </section>
          <section className="mt-14">
            <h2 className="text-2xl font-bold mb-5">{t.quality}</h2>
            <ul className="grid gap-3">{entry.item.qualityChecks.map((check,i)=><li key={i} className="border border-border/60 rounded-lg bg-card p-4 flex gap-3 items-start"><CheckCircle2 className="text-primary shrink-0 mt-0.5" size={19}/><span>{check[lang]}</span></li>)}</ul>
            <div className="rounded-xl border border-border/70 p-6 mt-6"><h3 className="font-bold text-lg mb-2">{t.limits}</h3><p className="leading-relaxed">{entry.item.limits[lang]}</p></div>
          </section>
          <section className="mt-8 bg-secondary/30 border border-border/60 rounded-xl p-6"><h2 className="font-bold text-xl mb-3">{t.result}</h2><p className="leading-relaxed">{entry.item.handoff[lang]}</p></section>
        </>}

        <section className="mt-16 pt-10 border-t border-border/60">
          <h2 className="text-2xl font-bold mb-3">{t.output}</h2>
          <p className="text-foreground/75 mb-7">{isTranslation ? entry.item.output[lang] : entry.item.handoff[lang]}</p>
          <div className="flex gap-4 flex-wrap">
            <Link to={getLocalizedPath("contact",lang)} className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90">{t.contact}<ArrowRight size={18}/></Link>
            <Link to={getLocalizedPath("services",lang)} className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-semibold hover:border-primary"><Globe2 size={18}/>{t.services}</Link>
          </div>
        </section>
      </div>
    </div>
  </Layout>;
}
