import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Globe2, BriefcaseBusiness, Languages, ShieldCheck } from "lucide-react";
import type { Language } from "@/lib/i18n/types";
import { DEEP_PORTFOLIO_ITEMS, getDeepPortfolioPath } from "@/lib/portfolioDeepCatalog";
import type { DeepPortfolioItem } from "@/lib/portfolioDeepCatalog";
import { DIRECTION_LABELS } from "@/lib/portfolioDeepTypes";

const FEATURED_IDS=["it-en-consultancy-services","fr-it-handmade-product","inbox-calendar-triage","customer-care-escalations","existing-client-notice-editing","website-help-page-microcopy","course-information-source-audit","existing-customer-multilingual-email-pack"];
type Filter = "all" | "translation" | "operations" | "backoffice" | "research" | "writing" | "web" | "EN-IT" | "IT-EN" | "FR-IT" | "IT-FR" | "ES-IT" | "IT-ES";
const text = {
  it: {eyebrow:"Approfondimenti e lavori completi",title:"Scopri come lavoro, attraverso gli elaborati",description:"Oltre alle schede sintetiche, consulta dossier originali con brief realistici, documenti completi, traduzioni a fronte, scelte terminologiche, procedure e controlli. Ogni dossier presenta un problema concreto, l’approccio proposto e un elaborato consultabile.",all:"Tutti i dossier",translation:"Traduzioni a fronte",operations:"Assistenza e organizzazione",backoffice:"Segreteria, customer care e back office",research:"Ricerche informative",writing:"Revisione e cataloghi",web:"Contenuti web",read:"Esplora il dossier completo",source:"Traduzione",context:"Caso operativo",notice:"Materiali dimostrativi originali: non sono estratti di lavori commissionati né contengono dati di clienti reali.",caption:"Documenti, testi e metodi consultabili"},
  en: {eyebrow:"In-depth work examples",title:"Explore the actual work behind each service",description:"Read original, detailed dossiers with realistic briefs, complete sample documents, source/target translations, terminology decisions, workflows and QA. Each dossier demonstrates a practical problem, a proposed approach and a concrete deliverable.",all:"All dossiers",translation:"Translation samples",operations:"Operational work",backoffice:"Secretarial & customer support",research:"Desk research",writing:"Editorial revision",web:"Website content",read:"Read the complete dossier",source:"Translation",context:"Operational study",notice:"Original fictional samples, not excerpts from commissioned work or real customer data.",caption:"Sample deliverables and working methods"},
  fr: {eyebrow:"Exemples approfondis",title:"Découvrez le travail concret derrière chaque prestation",description:"Consultez des dossiers détaillés : scénarios plausibles, documents complets, traductions en regard, choix terminologiques, procédures et contrôles. Chaque dossier présente un besoin concret, une méthode et un livrable consultable.",all:"Tous les dossiers",translation:"Exemples de traduction",operations:"Soutien opérationnel",backoffice:"Secrétariat et relation client",research:"Recherche documentaire",writing:"Révision éditoriale",web:"Contenus web",read:"Consulter le dossier complet",source:"Traduction",context:"Étude opérationnelle",notice:"Échantillons fictifs originaux, et non extraits de travaux réels ou de données clients.",caption:"Livrables et méthodes à consulter"},
  es: {eyebrow:"Muestras de trabajo detalladas",title:"Descubre el trabajo concreto detrás de cada servicio",description:"Consulta dossiers originales y detallados con supuestos verosímiles, documentos completos, traducciones en paralelo, decisiones terminológicas, procedimientos y controles. Cada dossier presenta una situación concreta, el método y un entregable.",all:"Todos los dossiers",translation:"Muestras de traducción",operations:"Apoyo operativo",backoffice:"Secretaría y atención al cliente",research:"Investigación documental",writing:"Revisión editorial",web:"Contenidos web",read:"Ver dossier completo",source:"Traducción",context:"Caso operativo",notice:"Ejemplos originales ficticios, no extractos de trabajos encargados ni datos de clientes reales.",caption:"Entregables y métodos para consultar"}
} satisfies Record<Language,Record<string,string>>;
const DIRECTIONS: Filter[] = ["EN-IT","IT-EN","FR-IT","IT-FR","ES-IT","IT-ES"];

export function PortfolioDeepShowcase({lang}:{lang:Language}) {
  const [filter,setFilter]=useState<Filter>("all");
  const [showAll,setShowAll]=useState(false);
  const t=text[lang];
  const visible=useMemo(()=>DEEP_PORTFOLIO_ITEMS.filter(entry=>{
    if(filter==="all") return true;
    if(filter==="translation" || filter==="operations") return entry.kind===filter;
    if(["backoffice","research","writing","web"].includes(filter)) return entry.kind==="operations" && entry.item.category===filter;
    return entry.kind==="translation" && entry.item.direction===filter;
  }),[filter]);
  const displayed=filter==="all"&&!showAll ? FEATURED_IDS.map(id=>DEEP_PORTFOLIO_ITEMS.find(entry=>entry.item.id===id)).filter((entry):entry is DeepPortfolioItem=>Boolean(entry)) : visible;
  const toggleText={it:["Esplora tutti i dossier","Torna alla selezione"],en:["Explore all dossiers","Back to selected work"],fr:["Voir tous les dossiers","Revenir à la sélection"],es:["Explorar todos los dossiers","Volver a la selección"]};
  return <section id="portfolio-complete-dossiers" aria-labelledby="dossier-heading" className="scroll-mt-24 py-16 md:py-20 border-b border-border/60 bg-background">
    <div className="container max-w-5xl mx-auto px-5">
      <p className="text-xs uppercase tracking-widest text-primary font-bold mb-3 flex items-center gap-2"><BookOpen size={18}/>{t.eyebrow}</p>
      <h2 id="dossier-heading" className="text-2xl md:text-4xl font-bold max-w-4xl leading-tight mb-5">{t.title}</h2>
      <p className="text-lg leading-relaxed text-foreground/80 max-w-4xl mb-6">{t.description}</p>
      <p className="flex gap-2 items-start text-sm text-foreground/70 mb-7"><ShieldCheck size={19} className="text-primary shrink-0 mt-0.5"/>{t.notice}</p>
      <nav aria-label={t.caption} className="flex flex-wrap gap-2 mb-3">
        {(["all","translation","operations"] as Filter[]).map(key=><button type="button" key={key} onClick={()=>setFilter(key)} aria-pressed={filter===key}
          className={"px-4 py-2 rounded-full text-sm font-semibold border transition-colors " + (filter===key?"bg-primary border-primary text-primary-foreground":"bg-card border-border hover:border-primary")}>{key==="all"?t.all:key==="translation"?t.translation:t.operations}</button>)}
      </nav>
      <div className="flex flex-wrap gap-2 mb-3" aria-label={t.operations}>
        {(["backoffice","research","writing","web"] as Filter[]).map(key=><button type="button" key={key} onClick={()=>setFilter(key)} aria-pressed={filter===key}
          className={"px-3 py-1.5 rounded-full text-xs font-medium border transition-colors " + (filter===key?"bg-primary text-primary-foreground border-primary":"bg-card border-border hover:border-primary")}>{t[key as "backoffice"|"research"|"writing"|"web"]}</button>)}
      </div>
      <div className="flex flex-wrap gap-2 mb-8" aria-label="EN IT FR ES">
        {DIRECTIONS.map(direction=><button type="button" key={direction} onClick={()=>setFilter(direction)} aria-pressed={filter===direction}
          className={"px-3 py-1.5 rounded-full font-medium text-xs border transition-colors " + (filter===direction?"bg-primary text-primary-foreground border-primary":"bg-card border-border text-foreground/80 hover:border-primary")}>{DIRECTION_LABELS[direction as keyof typeof DIRECTION_LABELS]}</button>)}
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {displayed.map(entry=>{
          const it=entry.item;
          return <article key={it.id} className="bg-card border border-border/70 hover:border-primary/50 transition-colors rounded-xl p-6 flex flex-col">
            <p className="text-xs uppercase font-bold text-primary tracking-wide mb-3 flex items-center gap-2">{entry.kind==="translation"?<Languages size={16}/>:<BriefcaseBusiness size={16}/>}
              {entry.kind==="translation" ? DIRECTION_LABELS[entry.item.direction]+" · "+entry.item.domain[lang] : entry.item.service[lang]}</p>
            <h3 className="text-xl font-bold leading-snug mb-3">{it.title[lang]}</h3>
            <p className="text-sm text-foreground/80 leading-relaxed mb-5 flex-1">{entry.kind==="translation"?entry.item.context[lang]:entry.item.scenario[lang]}</p>
            <Link to={getDeepPortfolioPath(it.id,lang)} className="inline-flex gap-2 items-center font-semibold text-primary hover:underline text-sm">
              {t.read}<ArrowUpRight size={17} aria-hidden="true"/>
            </Link>
          </article>
        })}
      </div>
      {filter==="all"&&<div className="flex justify-center mt-7"><button type="button" aria-expanded={showAll} onClick={()=>setShowAll(value=>!value)} className="rounded-lg border border-primary px-6 py-3 text-primary font-semibold hover:bg-primary/10">{showAll ? toggleText[lang][1] : toggleText[lang][0]+" ("+visible.length+")"}</button></div>}
      <p className="mt-5 text-xs text-muted-foreground flex gap-2 items-center"><Globe2 size={16}/>{t.caption} · {displayed.length}/{visible.length}</p>
    </div>
  </section>;
}
