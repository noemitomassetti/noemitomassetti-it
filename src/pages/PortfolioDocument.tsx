import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, BookOpen, CheckCircle2, FileText } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { BASE_DOMAIN, getLanguageFromPath, getLocalizedPath } from "@/lib/i18n/routes";
import { getPortfolioDocumentPath } from "@/lib/portfolioDocumentPaths";
import { DOCUMENT_GUIDES, DOCUMENT_CONTEXT, DOCUMENT_EXACT_EXCERPTS } from "@/lib/portfolioDocumentGuides";
import { PORTFOLIO_CASES, PORTFOLIO_DOCUMENTS } from "@/lib/portfolioData";
import type { Language } from "@/lib/i18n/types";
import { CUSTOMER_CARE_SAMPLES, CUSTOMER_CARE_SAMPLE_NOTICE } from "@/lib/portfolioCustomerCareSample";

const LANGS: Language[] = ["it", "en", "fr", "es"];
const labels = {
  it: {back:"Torna al portfolio", sample:"Esempio dimostrativo", focus:"Come leggere questo lavoro", brief:"Scenario simulato", material:"Materiale iniziale", goal:"Obiettivo", method:"Metodo", choices:"Scelte professionali", outcome:"Risultato dimostrativo", source:"Testo sorgente", target:"Testo in italiano", note:"Nota professionale", table:"Dati dimostrativi", safety:"Progetto e dati interamente inventati: non è un incarico commissionato né una testimonianza.", workTitle:"Leggi il lavoro svolto", contextTitle:"Contesto, metodo e scelte", clientMessage:"Richiesta simulata", replyTitle:"Risposta professionale preparata", actionTitle:"Controlli e attività previsti", statusTitle:"Stato della bozza", sampleCaveat:"Le email sono state redatte per la simulazione e non sono state inviate.", open:"Apri il documento completo", missing:"Documento non disponibile"},
  en: {back:"Back to work examples", sample:"Independent work sample", focus:"How to read this sample", brief:"Fictional scenario", material:"Starting material", goal:"Objective", method:"Approach", choices:"Editorial and operational choices", outcome:"Illustrative result", source:"Source text", target:"Italian target", note:"Professional commentary", table:"Illustrative data", safety:"All names and data are fictional: this is not a commissioned client project or a testimonial.", workTitle:"Read the actual work sample", contextTitle:"Context, approach and decisions", clientMessage:"Fictional customer enquiry (Italian)", replyTitle:"Prepared customer reply (Italian)", actionTitle:"Operational checks and next steps", statusTitle:"Draft status", sampleCaveat:"These Italian messages were written for this demonstration; none was sent.", open:"Open the complete document", missing:"Sample not available"},
  fr: {back:"Retour aux exemples", sample:"Exemple indépendant", focus:"Comment lire cet exemple", brief:"Scénario fictif", material:"Documents de départ", goal:"Objectif", method:"Méthode", choices:"Choix éditoriaux et opérationnels", outcome:"Résultat démonstratif", source:"Texte source", target:"Version italienne", note:"Commentaire professionnel", table:"Données fictives", safety:"Noms et données entièrement fictifs : il ne s’agit ni d’une mission client ni d’un témoignage.", workTitle:"Consultez le travail réalisé", contextTitle:"Contexte, méthode et choix", clientMessage:"Demande fictive d’un client (en italien)", replyTitle:"Réponse préparée (en italien)", actionTitle:"Vérifications et actions prévues", statusTitle:"État du brouillon", sampleCaveat:"Ces messages en italien ont été rédigés pour la démonstration et n’ont pas été envoyés.", open:"Ouvrir le document complet", missing:"Exemple indisponible"},
  es: {back:"Volver a los ejemplos", sample:"Muestra independiente", focus:"Cómo interpretar esta muestra", brief:"Situación ficticia", material:"Material de partida", goal:"Objetivo", method:"Método", choices:"Decisiones editoriales y operativas", outcome:"Resultado demostrativo", source:"Texto original", target:"Versión italiana", note:"Comentario profesional", table:"Datos ficticios", safety:"Todos los nombres y datos son ficticios: no es un encargo real ni un testimonio de un cliente.", workTitle:"Consulta el trabajo realizado", contextTitle:"Contexto, método y decisiones", clientMessage:"Consulta ficticia de un cliente (en italiano)", replyTitle:"Respuesta preparada (en italiano)", actionTitle:"Comprobaciones y siguientes pasos", statusTitle:"Estado del borrador", sampleCaveat:"Estos mensajes en italiano se redactaron como ejemplo y no se han enviado.", open:"Abrir el documento completo", missing:"Muestra no disponible"},
} satisfies Record<Language,Record<string,string>>;

export default function PortfolioDocument() {
  const { pathname } = useLocation();
  const lang = getLanguageFromPath(pathname);
  const { num } = useParams<{ num:string }>();
  const doc = PORTFOLIO_DOCUMENTS.find(d => d.num === num);
  const guide = num ? DOCUMENT_GUIDES[num] : undefined;
  const custom = num ? DOCUMENT_CONTEXT[num]?.[lang] : undefined;
  const study = PORTFOLIO_CASES.find(c => c.id === guide?.caseId);
  const t = labels[lang];
  const ok = !!(doc && guide && study && num);
  const currentPath = ok ? getPortfolioDocumentPath(num!,lang) : getLocalizedPath("portfolio",lang);
  useSEO({
    title: (doc?.title[lang] || t.missing) + " | Noemi Tomassetti",
    description: doc?.subtitle[lang] || t.sample,
    currentLang:lang,
    pageKey:"portfolio",
    canonical:BASE_DOMAIN+currentPath,
    alternates:ok ? [
      ...LANGS.map(l=>({hrefLang:l,href:BASE_DOMAIN+getPortfolioDocumentPath(num!,l)})),
      {hrefLang:"x-default",href:BASE_DOMAIN+getPortfolioDocumentPath(num!,"en")}
    ] : [],
    noindex:!ok,
  });
  if (!doc || !guide || !study || !num) return <Layout lang={lang}><div className="container max-w-4xl mx-auto py-16 px-5"><h1 className="text-2xl font-bold">{t.missing}</h1><Link className="text-primary underline" to={getLocalizedPath("portfolio",lang)}>{t.back}</Link></div></Layout>;

  return <Layout lang={lang}>
    <div className="container max-w-5xl mx-auto px-4 md:px-6 py-10 md:py-16">
      <Link className="inline-flex items-center gap-2 font-semibold text-primary hover:underline text-sm mb-7" to={getLocalizedPath("portfolio",lang)}><ArrowLeft size={16}/>{t.back}</Link>
      <p className="text-xs uppercase tracking-wider font-bold text-primary flex gap-2 items-center"><BookOpen size={18}/>{t.sample} · DOC {doc.num}</p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mt-4 max-w-4xl">{doc.title[lang]}</h1>
      <p className="mt-5 text-lg leading-relaxed text-foreground/80 max-w-3xl">{doc.subtitle[lang]}</p>

      <div role="note" className="mt-7 rounded-xl p-5 border border-primary/30 bg-primary/5 text-sm leading-relaxed">
        <strong className="block mb-2">{t.safety}</strong><span>{t.notice}</span>
      </div>
      <nav aria-label="Language / Langue / Idioma" className="mt-8 flex flex-wrap items-center gap-2">
        {LANGS.map(l => <Link key={l} to={getPortfolioDocumentPath(doc.num,l)} lang={l}
          aria-current={l===lang ? "page":undefined}
          className={"px-4 py-2 text-xs font-bold rounded-full border focus-visible:ring-2 focus-visible:ring-primary "+
            (l===lang ? "bg-primary text-primary-foreground border-primary":"border-border hover:border-primary")}>{l.toUpperCase()}</Link>)}
      </nav>
      {/* Show the work product first, before discussing the process. */}
      <section className="mt-10" aria-labelledby="portfolio-work-sample">
        <h2 id="portfolio-work-sample" className="text-2xl md:text-3xl font-bold text-foreground mb-3">{t.workTitle}</h2>
        {num === "11" ? (
          <div className="space-y-6">
            <p className="text-sm leading-relaxed text-foreground/80">{CUSTOMER_CARE_SAMPLE_NOTICE[lang]}</p>
            {CUSTOMER_CARE_SAMPLES.map((item) => (
              <article key={item.id} className="rounded-xl border border-border/70 bg-card overflow-hidden">
                <div className="bg-secondary/40 px-5 py-4 border-b border-border/60">
                  <h3 className="font-bold text-lg">{item.id} · {item.title}</h3>
                </div>
                <div className="p-5 md:p-6 space-y-5">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">{t.clientMessage}</h4>
                    <p className="text-sm leading-relaxed whitespace-pre-line">{item.request}</p>
                  </div>
                  <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg p-4 md:p-5">
                    <h4 className="text-xs font-bold uppercase tracking-wide text-primary mb-3">{t.replyTitle}</h4>
                    <p className="text-sm font-semibold mb-3">{item.subject}</p>
                    <p className="text-sm leading-relaxed whitespace-pre-line">{item.reply}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-2">{t.actionTitle}</h4>
                    <p className="text-sm leading-relaxed">{item.note}</p>
                    <p className="text-sm mt-3"><strong>{t.statusTitle}:</strong> {item.status}</p>
                  </div>
                </div>
              </article>
            ))}
            <p className="text-sm text-muted-foreground">{t.sampleCaveat}</p>
            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary font-semibold underline">
              <FileText size={17}/>{t.open}<ArrowUpRight size={17}/>
            </a>
          </div>
        ) : (
          <div>
            <p className="text-sm text-muted-foreground mb-4">{t.notice}</p>
            <div className="rounded-xl border border-border/70 overflow-hidden bg-white">
              <iframe title={t.original+" · "+doc.title[lang]} src={doc.url} loading="lazy" className="block w-full h-[520px] md:h-[740px] bg-white"/>
            </div>
            <a href={doc.url} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center mt-4 px-5 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm">
              <FileText size={17}/>{t.open}<ArrowUpRight size={17}/>
            </a>
          </div>
        )}
      </section>
      <h2 className="mt-14 mb-1 text-xl md:text-2xl font-bold text-foreground">{t.contextTitle}</h2>
      <section className="mt-12" aria-labelledby="portfolio-reading-guide">
        <h2 id="portfolio-reading-guide" className="text-2xl font-bold text-foreground mb-5">{t.focus}</h2>
        <div className="border border-border/70 bg-card rounded-xl p-5 md:p-7 text-foreground/90 leading-relaxed">{guide.focus[lang]}</div>
      </section>
      <section aria-label={t.brief} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {[[t.brief,custom?.brief??study.brief[lang]],[t.material,custom?.material??study.startingMaterial[lang]],[t.goal,custom?.objective??study.objective[lang]],[t.method,custom?.approach??study.approach[lang]]].map(([heading,body]) =>
          <div key={heading} className="rounded-xl p-5 md:p-6 border border-border/70 bg-card"><h2 className="font-bold text-primary text-base mb-3">{heading}</h2><p className="leading-relaxed text-sm text-foreground/85">{body}</p></div>)}
      </section>
      <section className="mt-12" aria-labelledby="professional-decisions">
        <h2 id="professional-decisions" className="text-2xl font-bold text-foreground mb-5">{t.choices}</h2>
        <ul className="grid gap-3">{(custom?.decisions??study.keyDecisions[lang]).map((dec,i)=>
          <li key={i} className="flex gap-3 items-start border border-border/70 bg-card rounded-xl p-4 text-sm leading-relaxed">
            <CheckCircle2 size={18} aria-hidden="true" className="text-primary shrink-0 mt-1"/><span>{dec}</span></li>)}</ul>
      </section>
      {DOCUMENT_EXACT_EXCERPTS.has(doc.num) && (study.comparison || study.tableData || study.sampleText) && <section className="mt-12" aria-label={t.source}>
        {study.comparison && <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-border/70 bg-card rounded-xl p-5"><h2 className="text-xs uppercase font-bold text-muted-foreground mb-3">{t.source} · {study.comparison.sourceLang}</h2><p className="whitespace-pre-wrap leading-relaxed">{study.comparison.sourceText}</p></div>
            <div className="border border-primary/40 bg-primary/5 rounded-xl p-5"><h2 className="text-xs uppercase font-bold text-primary mb-3">{t.target} · {study.comparison.targetLang}</h2><p className="whitespace-pre-wrap leading-relaxed">{study.comparison.localizedText}</p></div>
          </div>
          <div className="border border-border/60 bg-secondary/30 rounded-xl p-5 text-sm leading-relaxed"><strong className="block mb-2">{t.note}</strong>{study.comparison.notes[lang]}</div>
        </div>}
        {study.tableData && <div className="max-w-full overflow-x-auto border border-border/70 rounded-xl"><table className="w-full text-sm min-w-[650px]"><caption className="sr-only">{t.table}</caption><thead><tr>{study.tableData.headers[lang].map((name,i)=><th scope="col" className="text-left p-3 bg-secondary/60" key={i}>{name}</th>)}</tr></thead><tbody>{study.tableData.rows[lang].map((row,i)=><tr key={i} className="border-t border-border/60">{row.map((cell,j)=><td key={j} className="p-3">{cell}</td>)}</tr>)}</tbody></table></div>}
        {study.sampleText && <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border/70 bg-card p-5"><h2 className="text-xs uppercase font-bold mb-3">EN · {t.source}</h2><p className="whitespace-pre-wrap text-sm leading-relaxed font-serif">{study.sampleText.enSource}</p></div>
          <div className="rounded-xl border border-primary/30 bg-primary/5 p-5"><h2 className="text-xs uppercase font-bold mb-3">IT · {t.target}</h2><p className="whitespace-pre-wrap text-sm leading-relaxed font-serif">{study.sampleText.itTarget}</p></div>
        </div>}
      </section>}
      <section aria-label={t.outcome} className="mt-10 rounded-xl border border-border/70 bg-secondary/30 p-6">
        <h2 className="text-xl font-bold mb-3">{t.outcome}</h2><p className="leading-relaxed">{custom?.deliverable??study.deliverable[lang]}</p>
      </section>
    </div>
  </Layout>;
}
