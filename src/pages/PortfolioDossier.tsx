import { Link, useLocation, useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { getLanguageFromPath, getLocalizedPath } from "@/lib/i18n/routes";
import { TRANSLATION_SAMPLES_A } from "@/lib/portfolioTranslationSamplesA";
import { OPERATIONAL_SAMPLES_A } from "@/lib/portfolioOperationalSamplesA";
import { TRANSLATION_SAMPLE_NOTICE, DIRECTION_LABELS } from "@/lib/portfolioDeepTypes";
import { OPERATIONAL_NOTICE } from "@/lib/portfolioOperationalTypes";
import type { Language } from "@/lib/i18n/types";

const ROOT: Record<Language,string> = {
  it: "/it/esempi-di-lavoro/dossier/",
  en: "/work-examples/dossier/",
  fr: "/fr/exemples-de-projets/dossier/",
  es: "/es/ejemplos-de-trabajo/dossier/"
};
export function getDeepPortfolioPath(id: string, lang: Language): string { return ROOT[lang] + encodeURIComponent(id); }
const captions = {
  it: {back:"Torna al portfolio",sample:"Esempio dimostrativo",context:"Contesto simulato",source:"Testo originale",translation:"Traduzione",choices:"Scelte terminologiche",method:"Metodo di lavoro",checks:"Controlli di qualità",output:"Elaborato",objective:"Obiettivo",inputs:"Materiali di partenza",process:"Procedura",artifacts:"Documenti dimostrativi completi",limits:"Perimetro del servizio",handoff:"Cosa riceverebbe il cliente",contact:"Richiedi un preventivo",switch:"Leggi il dossier in un'altra lingua"},
  en: {back:"Back to portfolio",sample:"Independent work sample",context:"Fictional scenario",source:"Source text",translation:"Target translation",choices:"Terminology decisions",method:"Working method",checks:"Quality checks",output:"Deliverable",objective:"Objective",inputs:"Starting material",process:"Workflow",artifacts:"Complete demonstration documents",limits:"Service boundaries",handoff:"Client handover",contact:"Request a quote",switch:"Read the dossier in another language"},
  fr: {back:"Retour au portfolio",sample:"Exemple indépendant",context:"Situation fictive",source:"Texte source",translation:"Traduction",choices:"Choix terminologiques",method:"Méthode",checks:"Contrôles qualité",output:"Livrable",objective:"Objectif",inputs:"Documents de départ",process:"Procédure",artifacts:"Documents de démonstration complets",limits:"Périmètre du service",handoff:"Documents remis",contact:"Demander un devis",switch:"Lire ce dossier dans une autre langue"},
  es: {back:"Volver al portfolio",sample:"Ejemplo independiente",context:"Situación ficticia",source:"Texto original",translation:"Traducción",choices:"Decisiones terminológicas",method:"Método",checks:"Control de calidad",output:"Entregable",objective:"Objetivo",inputs:"Material inicial",process:"Procedimiento",artifacts:"Documentos demostrativos completos",limits:"Alcance del servicio",handoff:"Entrega al cliente",contact:"Solicitar presupuesto",switch:"Leer el dosier en otro idioma"}
};
const LANGS: Language[] = ["it","en","fr","es"];
const Tag = ({children}:{children:React.ReactNode}) => <span className="text-xs font-semibold uppercase tracking-wide text-primary">{children}</span>;
export default function PortfolioDossier() {
  const {pathname} = useLocation();
  const lang = getLanguageFromPath(pathname);
  const {slug} = useParams<{slug:string}>();
  const t = captions[lang];
  const tr = TRANSLATION_SAMPLES_A.find(d=>d.id===slug);
  const op = OPERATIONAL_SAMPLES_A.find(d=>d.id===slug);
  const entry = tr || op;
  const canonical = slug && entry ? "https://www.noemitomassetti.it"+getDeepPortfolioPath(slug,lang) : undefined;
  useSEO({
    title: entry ? entry.title[lang]+" | Portfolio Noemi Tomassetti" : "Portfolio | Noemi Tomassetti",
    description: tr?.context[lang] ?? op?.scenario[lang] ?? t.sample,
    canonical,
    currentLang:lang,
    pageKey:"portfolio",
    alternates: entry ? [...LANGS.map(l=>({hrefLang:l,href:"https://www.noemitomassetti.it"+getDeepPortfolioPath(entry.id,l)})),{hrefLang:"x-default",href:"https://www.noemitomassetti.it"+getDeepPortfolioPath(entry.id,"en")}] : [],
    noindex:!entry,
    ogType:"article"
  });
  if (!entry) return <Layout lang={lang}><div className="container max-w-4xl py-16"><h1>{t.sample}</h1><Link to={getLocalizedPath("portfolio",lang)}>{t.back}</Link></div></Layout>;
  const disclaimer = tr ? TRANSLATION_SAMPLE_NOTICE[lang] : OPERATIONAL_NOTICE[lang];
  return <Layout lang={lang}>
    <div className="container max-w-5xl mx-auto px-5 py-12 md:py-20 space-y-10">
      <Link className="text-primary font-semibold hover:underline" to={getLocalizedPath("portfolio",lang)}>← {t.back}</Link>
      <header className="space-y-5">
        <Tag>{t.sample}{tr ? " · "+DIRECTION_LABELS[tr.direction] : ""}</Tag>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">{entry.title[lang]}</h1>
        <p className="text-lg text-foreground/80 max-w-4xl">{tr?.context[lang] ?? op?.scenario[lang]}</p>
        <p className="rounded-lg bg-secondary/40 border border-border p-4 text-sm leading-relaxed">{disclaimer}</p>
        <nav aria-label={t.switch} className="flex flex-wrap gap-2">{LANGS.map(l=><Link key={l} lang={l} aria-current={l===lang?"page":undefined} to={getDeepPortfolioPath(entry.id,l)} className={`rounded-full border px-4 py-2 text-sm font-semibold ${l===lang?"bg-primary text-primary-foreground":"hover:border-primary"}`}>{l.toUpperCase()}</Link>)}</nav>
      </header>
      {tr ? <>
        <section className="space-y-3"><h2 className="text-2xl font-bold">{t.method}</h2><p className="leading-relaxed">{tr.method[lang]}</p></section>
        <section className="space-y-5" aria-label={t.translation}>
          {tr.source.map((source,i)=><div key={i} className="space-y-3">
            <h2 className="text-xl font-bold">{t.source} / {t.translation} · {i+1}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl border p-5 bg-card"><Tag>{tr.direction.slice(0,2)} · {t.source}</Tag><p className="mt-3 whitespace-pre-line leading-relaxed">{source}</p></div>
              <div className="rounded-xl border border-primary/40 bg-primary/5 p-5"><Tag>{tr.direction.slice(3)} · {t.translation}</Tag><p className="mt-3 whitespace-pre-line leading-relaxed">{tr.target[i]}</p></div>
            </div>
          </div>)}
        </section>
        <section className="space-y-4"><h2 className="text-2xl font-bold">{t.choices}</h2>{tr.terminology.map((term,i)=><div key={i} className="rounded-xl border p-5 bg-card"><p className="font-semibold">{term.source} → {term.target}</p><p className="mt-2 leading-relaxed text-foreground/85">{term.explanation[lang]}</p></div>)}</section>
        <section className="space-y-3"><h2 className="text-2xl font-bold">{t.checks}</h2><p className="leading-relaxed">{tr.review[lang]}</p><h2 className="text-xl font-bold">{t.output}</h2><p>{tr.output[lang]}</p></section>
      </> : op ? <>
        <section className="grid md:grid-cols-2 gap-4">
          <div className="rounded-xl bg-card border p-5"><h2 className="font-bold text-primary mb-3">{t.objective}</h2><p className="leading-relaxed">{op.objective[lang]}</p></div>
          <div className="rounded-xl bg-card border p-5"><h2 className="font-bold text-primary mb-3">{t.inputs}</h2><p className="leading-relaxed">{op.inputs[lang]}</p></div>
        </section>
        <section><h2 className="text-2xl font-bold mb-4">{t.process}</h2><ol className="list-decimal list-inside space-y-3">{op.workflow.map((step,i)=><li className="leading-relaxed" key={i}>{step[lang]}</li>)}</ol></section>
        <section className="space-y-7"><h2 className="text-2xl font-bold">{t.artifacts}</h2>{op.artifacts.map((artifact,i)=><article className="space-y-3" key={i}><h3 className="text-xl font-bold">{artifact.title[lang]}</h3><div className="bg-card rounded-xl border p-6 whitespace-pre-line leading-relaxed text-sm md:text-base">{artifact.content}</div><p className="text-sm text-foreground/75">{artifact.explanation[lang]}</p></article>)}</section>
        <section className="space-y-3"><h2 className="text-2xl font-bold">{t.checks}</h2><ul className="list-disc pl-5 space-y-2">{op.qualityChecks.map((check,i)=><li key={i}>{check[lang]}</li>)}</ul><h2 className="text-xl font-bold pt-4">{t.limits}</h2><p>{op.limits[lang]}</p><h2 className="text-xl font-bold pt-4">{t.handoff}</h2><p>{op.handoff[lang]}</p></section>
      </> : null}
      <div className="border-t pt-8"><Link to={getLocalizedPath("contact",lang)} className="inline-flex rounded-full bg-primary text-primary-foreground font-semibold py-3 px-6 hover:opacity-90">{t.contact}</Link></div>
    </div>
  </Layout>;
}
