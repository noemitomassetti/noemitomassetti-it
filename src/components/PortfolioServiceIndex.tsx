import { Link } from "react-router-dom";
import { getDeepPortfolioItem, getDeepPortfolioPath } from "@/lib/portfolioDeepCatalog";
import type { Language } from "@/lib/i18n/types";

/** A service-led route into complete dossiers: each professional service has multiple examples. */
export const PORTFOLIO_SERVICE_GROUPS = [
  {
    "label": {
      "it": "Email e segreteria",
      "en": "Email and secretarial support",
      "fr": "Courriels et secrétariat",
      "es": "Correo y secretaría"
    },
    "ids": [
      "inbox-calendar-triage",
      "email-inbox-italy-routing",
      "existing-customer-multilingual-email-pack",
      "inbox-handover-cover-full",
      "en-it-complete-italian-onboarding-communications",
      "it-fr-complete-meeting-followup-package"
    ]
  },
  {
    "label": {
      "it": "Agenda e appuntamenti",
      "en": "Calendar and appointments",
      "fr": "Agenda et rendez-vous",
      "es": "Agenda y citas"
    },
    "ids": [
      "calendar-conflict-timezone-confirmations",
      "inbox-calendar-triage",
      "multilingual-course-secretariat-schedule",
      "diary-conflict-multilingual-rebooking"
    ]
  },
  {
    "label": {
      "it": "Assistenza clienti scritta",
      "en": "Written customer care",
      "fr": "Relation client écrite",
      "es": "Atención escrita al cliente"
    },
    "ids": [
      "customer-care-escalations",
      "international-client-italian-aftercare",
      "italian-customer-service-multilingual-followup",
      "existing-customer-multilingual-email-pack",
      "written-customer-complaint-four-language-response",
      "es-it-complete-customer-help-policy-and-replies",
      "en-it-complete-italian-onboarding-communications"
    ]
  },
  {
    "label": {
      "it": "Gestione ordini e back office",
      "en": "Order management and back office",
      "fr": "Commandes et back-office",
      "es": "Pedidos y back office"
    },
    "ids": [
      "order-entry-price-list",
      "customer-record-data-entry-audit",
      "approved-quotes-order-variations",
      "orders-multi-item-exception-control",
      "client-records-data-quality-complete"
    ]
  },
  {
    "label": {
      "it": "Preventivi e listini su istruzioni",
      "en": "Quotations and approved price lists",
      "fr": "Devis et tarifs approuvés",
      "es": "Presupuestos y listas aprobadas"
    },
    "ids": [
      "commercial-quote-from-approved-pricelist",
      "approved-quotes-order-variations",
      "order-entry-price-list",
      "orders-multi-item-exception-control"
    ]
  },
  {
    "label": {
      "it": "Data entry e registri",
      "en": "Data entry and registers",
      "fr": "Saisie et suivi des données",
      "es": "Entrada y registro de datos"
    },
    "ids": [
      "customer-record-data-entry-audit",
      "order-entry-price-list",
      "information-research-verifiable-source-matrix",
      "orders-multi-item-exception-control",
      "client-records-data-quality-complete"
    ]
  },
  {
    "label": {
      "it": "Archivi digitali e gestione file",
      "en": "Digital archives and file organisation",
      "fr": "Archives numériques et dossiers",
      "es": "Archivos digitales y documentos"
    },
    "ids": [
      "shared-drive-version-control",
      "digital-archive-duplicates-access-matrix",
      "digital-tools-request-workflow",
      "shared-drive-handover-client-documents"
    ]
  },
  {
    "label": {
      "it": "Organizzazione corsi e materiali",
      "en": "Course and learning materials support",
      "fr": "Organisation de formations",
      "es": "Organización de cursos"
    },
    "ids": [
      "online-course-secretariat",
      "multilingual-course-secretariat-schedule",
      "course-information-source-audit",
      "course-participant-support-complete-pack"
    ]
  },
  {
    "label": {
      "it": "Ricerche informative e verifiche",
      "en": "Desk research and fact-checking",
      "fr": "Recherche documentaire et vérification",
      "es": "Investigación documental y verificación"
    },
    "ids": [
      "research-existing-italian-customers",
      "information-research-verifiable-source-matrix",
      "course-information-source-audit",
      "practical-research-options-decision-pack"
    ]
  },
  {
    "label": {
      "it": "Procedure e organizzazione operativa",
      "en": "Workflows and operating procedures",
      "fr": "Procédures et organisation",
      "es": "Procedimientos y organización"
    },
    "ids": [
      "digital-tools-request-workflow",
      "inbox-calendar-triage",
      "shared-drive-version-control",
      "inbox-handover-cover-full",
      "shared-drive-handover-client-documents",
      "it-en-full-operations-sop-handover"
    ]
  },
  {
    "label": {
      "it": "Traduzione e localizzazione IT ↔ EN/FR/ES",
      "en": "Translation and localisation IT ↔ EN/FR/ES",
      "fr": "Traduction et localisation IT ↔ EN/FR/ES",
      "es": "Traducción y localización IT ↔ EN/FR/ES"
    },
    "ids": [
      "en-it-service-landing-localisation-complete",
      "fr-it-product-information-full",
      "es-it-existing-customer-service-email-full",
      "it-en-order-status-message",
      "it-fr-customer-service-followup",
      "it-es-support-faq-complete",
      "en-it-complete-italian-onboarding-communications",
      "fr-it-complete-product-information-and-faq",
      "es-it-complete-customer-help-policy-and-replies",
      "it-en-full-operations-sop-handover",
      "it-fr-complete-meeting-followup-package",
      "it-es-complete-service-information-and-faq"
    ]
  },
  {
    "label": {
      "it": "Redazione e localizzazione di contenuti web",
      "en": "Website writing and localisation",
      "fr": "Rédaction et localisation web",
      "es": "Redacción y localización web"
    },
    "ids": [
      "web-copy-before-after",
      "italian-market-website-copy-four-languages",
      "website-help-page-microcopy",
      "online-service-information-multilingual-profile-pack",
      "italy-website-service-copy-full-localisations",
      "en-it-complete-italian-onboarding-communications",
      "it-es-complete-service-information-and-faq"
    ]
  },
  {
    "label": {
      "it": "Revisione, proofreading e cataloghi",
      "en": "Editing, proofreading and catalogues",
      "fr": "Révision, correction et catalogues",
      "es": "Revisión, corrección y catálogos"
    },
    "ids": [
      "catalogue-price-list-proofreading",
      "existing-client-notice-editing",
      "multilingual-proofreading-written-notices",
      "fr-it-handmade-product",
      "fr-it-complete-product-information-and-faq",
      "it-es-complete-service-information-and-faq"
    ]
  },
  {
    "label": {
      "it": "Blog, newsletter e contenuti digitali",
      "en": "Blog, newsletters and digital content",
      "fr": "Blog, lettres d’information et contenus",
      "es": "Blog, boletines y contenidos digitales"
    },
    "ids": [
      "blog-editorial-feature-four-languages",
      "newsletter-existing-clients-multilingual",
      "professional-social-editorial-series-italy"
    ]
  }
] as const;
const LABELS: Record<Language,{eyebrow:string;title:string;description:string;open:string;count:string;note:string}> = {
  it: {eyebrow:"ESPLORA PER SERVIZIO",title:"Più lavori completi per ogni competenza",description:"Scegli un servizio e apri più dossier originali: documenti, corrispondenza, procedure, traduzioni e revisioni consultabili integralmente. Ogni lavoro mostra il contesto, le scelte e i materiali prodotti.",open:"Leggi il dossier completo",count:"esempi",note:"La presentazione nella tua lingua accompagna i testi originali, che restano nella lingua di lavoro indicata."},
  en: {eyebrow:"BROWSE BY SERVICE",title:"Several complete examples for every service",description:"Explore original professional dossiers for Italian-market work: full correspondence, procedures, research, editing and independent translation or localisation projects. Each dossier includes the brief, approach and actual written deliverables.",open:"Read full dossier",count:"examples",note:"Explanations are available in English; deliverables are shown in their original working language."},
  fr: {eyebrow:"PAR PRESTATION",title:"Plusieurs réalisations complètes pour chaque prestation",description:"Consultez plusieurs dossiers détaillés : courriels, organisation, recherche documentaire, rédaction, traduction et localisation pour travailler avec l'Italie. Chaque dossier présente le contexte, la méthode et les documents complets.",open:"Consulter le dossier",count:"exemples",note:"Les explications sont en français et les documents sont présentés dans leur langue de travail."},
  es: {eyebrow:"POR SERVICIO",title:"Varios trabajos completos por cada servicio",description:"Consulta distintos dosieres de asistencia virtual, correo, organización, investigación, contenidos, traducción y localización para trabajar con Italia. Cada proyecto incluye contexto, método y documentos íntegros.",open:"Leer el dosier completo",count:"ejemplos",note:"Las explicaciones están en español; los documentos se muestran en su idioma de trabajo."}
};

export function PortfolioServiceIndex({lang}:{lang:Language}) {
 const copy=LABELS[lang];
 return <section id="portfolio-service-index" className="py-14 md:py-20 border-b border-border/60 bg-secondary/10" aria-labelledby="portfolio-service-index-heading">
   <div className="container max-w-5xl mx-auto px-4 md:px-6">
     <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">{copy.eyebrow}</p>
     <h2 id="portfolio-service-index-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-4">{copy.title}</h2>
     <p className="text-foreground/80 leading-relaxed max-w-3xl mb-3">{copy.description}</p>
     <p className="text-sm text-muted-foreground max-w-3xl mb-8">{copy.note}</p>
     <div className="grid md:grid-cols-2 gap-4">
       {PORTFOLIO_SERVICE_GROUPS.map((group,index)=>{
          const entries=group.ids.map(id=>getDeepPortfolioItem(id)).filter((v):v is NonNullable<typeof v>=>Boolean(v));
          return <details key={index} className="group rounded-xl border border-border/70 bg-card p-5 open:border-primary/40">
             <summary className="cursor-pointer list-none flex items-start justify-between gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded">
               <span className="font-bold text-foreground leading-snug">{group.label[lang]}</span>
               <span className="text-xs text-muted-foreground shrink-0">{entries.length} {copy.count} ＋</span>
             </summary>
             <ul className="border-t border-border/60 mt-4 pt-4 space-y-3">
               {entries.map(({item,kind})=><li key={item.id} className="border-l-2 border-primary/30 pl-3">
                 <Link to={getDeepPortfolioPath(item.id,lang)} className="font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-primary">
                   {item.title[lang]}
                 </Link>
                 <p className="text-xs leading-relaxed text-muted-foreground mt-1">{kind==="translation"?item.domain[lang]:item.service[lang]}</p>
               </li>)}
             </ul>
          </details>;
       })}
     </div>
   </div>
 </section>;
}
