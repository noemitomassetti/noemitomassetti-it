import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { portfolioPreview } from "@/lib/portfolioPreview";
import { ArrowUpRight, BookOpen, Globe2, BriefcaseBusiness, Languages, ShieldCheck } from "lucide-react";
import type { Language } from "@/lib/i18n/types";
import { DEEP_PORTFOLIO_ITEMS, getDeepPortfolioPath } from "@/lib/portfolioDeepCatalog";
import type { DeepPortfolioItem } from "@/lib/portfolioDeepCatalog";
import { DIRECTION_LABELS } from "@/lib/portfolioDeepTypes";

const FEATURED_IDS=["en-it-digital-onboarding","fr-it-handmade-product","es-it-existing-customer","inbox-calendar-triage","customer-care-escalations","website-help-page-microcopy","course-information-source-audit","existing-customer-multilingual-email-pack"];
type Filter = "all" | "translation" | "operations" | "backoffice" | "research" | "writing" | "web" | "EN-IT" | "IT-EN" | "FR-IT" | "IT-FR" | "ES-IT" | "IT-ES";
const text = {
  it: {eyebrow:"Approfondimenti e lavori completi",title:"Scopri come lavoro, attraverso gli elaborati",description:"Oltre alle schede sintetiche, consulta dossier originali con brief realistici, documenti completi, traduzioni a fronte, scelte terminologiche, procedure e controlli. Ogni dossier presenta un problema concreto, l’approccio proposto e un elaborato consultabile.",all:"Tutti i dossier",translation:"Traduzioni a fronte",operations:"Assistenza e organizzazione",backoffice:"Segreteria, customer care e back office",research:"Ricerche informative",writing:"Revisione e cataloghi",web:"Contenuti web",read:"Esplora il dossier completo",source:"Traduzione",context:"Caso operativo",notice:"Materiali dimostrativi originali: non sono estratti di lavori commissionati né contengono dati di clienti reali.",caption:"Documenti, testi e metodi consultabili",results:"Dossier visualizzati",search:"Cerca nei dossier",searchHint:"Cerca per servizio, tema o settore",noResults:"Nessun dossier corrisponde alla ricerca. Prova un altro termine o cambia filtro."},
  en: {eyebrow:"In-depth work examples",title:"See how I approach each service through detailed samples",description:"Read original, detailed dossiers with realistic briefs, complete sample documents, source/target translations, terminology decisions, workflows and QA. Each dossier demonstrates a practical problem, a proposed approach and a concrete deliverable.",all:"All dossiers",translation:"Translation samples",operations:"Operational work",backoffice:"Secretarial & customer support",research:"Desk research",writing:"Editorial revision",web:"Website content",read:"Read the complete dossier",source:"Translation",context:"Operational study",notice:"Original fictional samples, not excerpts from commissioned work or real customer data.",caption:"Sample deliverables and working methods",results:"Dossiers shown",search:"Search dossiers",searchHint:"Search by service, topic or sector",noResults:"No matching dossiers. Try another term or filter."},
  fr: {eyebrow:"Exemples approfondis",title:"Découvrez le travail concret derrière chaque prestation",description:"Consultez des dossiers détaillés : scénarios plausibles, documents complets, traductions en regard, choix terminologiques, procédures et contrôles. Chaque dossier présente un besoin concret, une méthode et un livrable consultable.",all:"Tous les dossiers",translation:"Exemples de traduction",operations:"Soutien opérationnel",backoffice:"Secrétariat et relation client",research:"Recherche documentaire",writing:"Révision éditoriale",web:"Contenus web",read:"Consulter le dossier complet",source:"Traduction",context:"Étude opérationnelle",notice:"Échantillons fictifs originaux, et non extraits de travaux réels ou de données clients.",caption:"Livrables et méthodes à consulter",results:"Dossiers affichés",search:"Rechercher dans les dossiers",searchHint:"Service, sujet ou secteur",noResults:"Aucun dossier ne correspond à la recherche. Essayez un autre terme ou filtre."},
  es: {eyebrow:"Muestras de trabajo detalladas",title:"Descubre el trabajo concreto detrás de cada servicio",description:"Consulta dossiers originales y detallados con supuestos verosímiles, documentos completos, traducciones en paralelo, decisiones terminológicas, procedimientos y controles. Cada dossier presenta una situación concreta, el método y un entregable.",all:"Todos los dossiers",translation:"Muestras de traducción",operations:"Apoyo operativo",backoffice:"Secretaría y atención al cliente",research:"Investigación documental",writing:"Revisión editorial",web:"Contenidos web",read:"Ver dossier completo",source:"Traducción",context:"Caso operativo",notice:"Ejemplos originales ficticios, no extractos de trabajos encargados ni datos de clientes reales.",caption:"Entregables y métodos para consultar",results:"Dosieres mostrados",search:"Buscar en los dosieres",searchHint:"Servicio, tema o sector",noResults:"No hay dosieres que coincidan. Prueba otro término o filtro."}
} satisfies Record<Language,Record<string,string>>;
const previewLabels:Record<Language,string> = {
  it: "Anteprima dell’elaborato",
  en: "Deliverable preview",
  fr: "Aperçu du livrable",
  es: "Vista previa del trabajo",
};
const DIRECTIONS: Filter[] = ["EN-IT","IT-EN","FR-IT","IT-FR","ES-IT","IT-ES"];
const normalise = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase().trim();

export function PortfolioDeepShowcase({lang}:{lang:Language}) {
  const [filter,setFilter]=useState<Filter>("all");
  const [showAll,setShowAll]=useState(false);
  const [query,setQuery]=useState("");
  const chooseFilter=(next:Filter)=>{setFilter(next);setShowAll(false);};
  const t=text[lang];
  const visible=useMemo(()=>{
    const needle=normalise(query);
    return DEEP_PORTFOLIO_ITEMS.filter(entry=>{
      const filterMatches=filter==="all"
        || (filter==="translation" || filter==="operations" ? entry.kind===filter
          : ["backoffice","research","writing","web"].includes(filter)
            ? entry.kind==="operations" && entry.item.category===filter
            : entry.kind==="translation" && entry.item.direction===filter);
      if(!filterMatches) return false;
      if(!needle) return true;
      const searchable=entry.kind==="translation"
        ? [entry.item.title[lang],entry.item.context[lang],entry.item.domain[lang],entry.item.direction]
        : [entry.item.title[lang],entry.item.scenario[lang],entry.item.service[lang],entry.item.category];
      return normalise(searchable.join(" ")).includes(needle);
    });
  },[filter,query,lang]);
  const displayed=filter==="all"&&!showAll&&!query.trim() ? FEATURED_IDS.map(id=>DEEP_PORTFOLIO_ITEMS.find(entry=>entry.item.id===id)).filter((entry):entry is DeepPortfolioItem=>Boolean(entry)) : visible;
  const toggleText={it:["Esplora tutti i dossier","Torna alla selezione"],en:["Explore all dossiers","Back to selected work"],fr:["Voir tous les dossiers","Revenir à la sélection"],es:["Explorar todos los dossiers","Volver a la selección"]};
  return <section id="portfolio-complete-dossiers" aria-labelledby="dossier-heading" className="scroll-mt-24 py-16 md:py-20 border-b border-border/60 bg-background">
    <div className="container max-w-5xl mx-auto px-5">
      <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3 flex items-center gap-2"><BookOpen size={18}/>{t.eyebrow}</p>
      <h2 id="dossier-heading" className="text-2xl md:text-4xl font-bold max-w-4xl leading-tight mb-5">{t.title}</h2>
      <p className="text-lg leading-relaxed text-foreground/80 max-w-4xl mb-6">{t.description}</p>
      <p className="flex gap-2 items-start text-sm text-foreground/70 mb-7"><ShieldCheck size={19} className="text-primary shrink-0 mt-0.5"/>{t.notice}</p>
      <div className="mb-6 max-w-xl">
        <label htmlFor="portfolio-dossier-search" className="block font-semibold text-sm mb-2">{t.search}</label>
        <input id="portfolio-dossier-search" type="search" value={query} onChange={event=>setQuery(event.target.value)} placeholder={t.searchHint}
          aria-controls="dossier-results" className="w-full min-h-11 px-4 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" />
      </div>
      <nav aria-label={t.caption} className="flex flex-wrap gap-2 mb-3">
        {(["all","translation","operations"] as Filter[]).map(key=><button type="button" key={key} onClick={()=>chooseFilter(key)} aria-pressed={filter===key} aria-controls="dossier-results"
          className={"inline-flex min-h-11 items-center px-4 py-2 rounded-full text-sm font-semibold border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 " + (filter===key?"bg-primary border-primary text-primary-foreground":"bg-card border-border hover:border-primary")}>{key==="all"?t.all:key==="translation"?t.translation:t.operations}</button>)}
      </nav>
      <div role="group" className="flex flex-wrap gap-2 mb-3" aria-label={t.operations}>
        {(["backoffice","research","writing","web"] as Filter[]).map(key=><button type="button" key={key} onClick={()=>chooseFilter(key)} aria-pressed={filter===key} aria-controls="dossier-results"
          className={"inline-flex min-h-11 items-center px-3 py-2 rounded-full text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 " + (filter===key?"bg-primary text-primary-foreground border-primary":"bg-card border-border hover:border-primary")}>{t[key as "backoffice"|"research"|"writing"|"web"]}</button>)}
      </div>
      <div role="group" className="flex flex-wrap gap-2 mb-8" aria-label="EN IT FR ES">
        {DIRECTIONS.map(direction=><button type="button" key={direction} onClick={()=>chooseFilter(direction)} aria-pressed={filter===direction} aria-controls="dossier-results"
          className={"inline-flex min-h-11 items-center px-3 py-2 rounded-full font-medium text-sm border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 " + (filter===direction?"bg-primary text-primary-foreground border-primary":"bg-card border-border text-foreground/80 hover:border-primary")}>{DIRECTION_LABELS[direction as keyof typeof DIRECTION_LABELS]}</button>)}
      </div>
      <p role="status" aria-live="polite" aria-atomic="true" className="mb-5 text-sm text-foreground/80">{t.results}: {displayed.length} / {visible.length}</p>
      {visible.length===0&&<p className="rounded-lg border border-border bg-card p-5 mb-5 text-foreground/80">{t.noResults}</p>}
      <div id="dossier-results" className="grid md:grid-cols-2 gap-5">
        {displayed.map(entry=>{
          const it=entry.item;
          return <article key={it.id} className="bg-card border border-border/70 hover:border-primary/50 transition-colors rounded-xl p-6 flex flex-col">
            <p className="text-xs uppercase font-bold text-primary tracking-wide mb-3 flex items-center gap-2">{entry.kind==="translation"?<Languages size={16}/>:<BriefcaseBusiness size={16}/>}
              {entry.kind==="translation" ? DIRECTION_LABELS[entry.item.direction]+" · "+entry.item.domain[lang] : entry.item.service[lang]}</p>
            <h3 className="text-xl font-bold leading-snug mb-3">{it.title[lang]}</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-5 flex-1">{entry.kind==="translation"?entry.item.context[lang]:entry.item.scenario[lang]}</p>
            <div className="border-t border-border/60 pt-4 pb-4">
              <p className="text-xs font-bold uppercase tracking-wide text-primary mb-2">{previewLabels[lang]}</p>
              <p
                lang={entry.kind==="translation"?entry.item.direction.split("-")[1].toLowerCase():(entry.item.artifacts[0]?.language??"it")}
                className="text-sm text-foreground/85 leading-relaxed whitespace-pre-line"
              >{portfolioPreview(entry.kind==="translation"?entry.item.target[0]:(entry.item.artifacts[0]?.content??""))}</p>
            </div>
            <Link to={getDeepPortfolioPath(it.id,lang)} aria-label={`${t.read}: ${it.title[lang]}`} className="inline-flex min-h-11 gap-2 items-center font-semibold text-primary hover:underline text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded">
              {t.read}<ArrowUpRight size={17} aria-hidden="true"/>
            </Link>
          </article>
        })}
      </div>
      {filter==="all"&&!query.trim()&&<div className="flex justify-center mt-7"><button type="button" aria-expanded={showAll} aria-controls="dossier-results" onClick={()=>setShowAll(value=>!value)} className="rounded-lg border border-primary px-6 py-3 text-primary font-semibold hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">{showAll ? toggleText[lang][1] : toggleText[lang][0]+" ("+visible.length+")"}</button></div>}
      <p className="mt-5 text-xs text-muted-foreground flex gap-2 items-center"><Globe2 size={16}/>{t.caption}</p>
    </div>
  </section>;
}
