import { Link } from "react-router-dom";
import type { Language } from "@/lib/i18n/types";
import { getDeepPortfolioItem, getDeepPortfolioPath } from "@/lib/portfolioDeepCatalog";

/**
 * Service-first discovery. Each service points to several complete, original
 * portfolio dossiers. These are examples, not historical client commissions.
 */
type ServiceTrack = {
  id: string;
  title: Record<Language,string>;
  description: Record<Language,string>;
  ids: readonly string[];
};
export const PORTFOLIO_SERVICE_TRACKS: ServiceTrack[] = [
  {
    "id": "email",
    "title": {
      "it": "Gestione email e corrispondenza",
      "en": "Email and correspondence",
      "fr": "Courriels et correspondance",
      "es": "Correo y correspondencia"
    },
    "description": {
      "it": "Organizzare la casella e preparare risposte complete con verifiche e follow-up.",
      "en": "Inbox triage, full replies, approval checks and follow-up.",
      "fr": "Tri des courriels, réponses complètes, validations et suivi.",
      "es": "Clasificación del correo, respuestas completas, autorizaciones y seguimiento."
    },
    "ids": [
      "email-inbox-italy-routing",
      "inbox-calendar-triage",
      "existing-customer-multilingual-email-pack"
    ]
  },
  {
    "id": "agenda",
    "title": {
      "it": "Segreteria e appuntamenti",
      "en": "Secretarial support and appointments",
      "fr": "Secrétariat et rendez-vous",
      "es": "Secretaría y citas"
    },
    "description": {
      "it": "Agenda, conflitti, conferme e comunicazioni in più lingue.",
      "en": "Calendars, conflicts, confirmations and multilingual scheduling.",
      "fr": "Agendas, conflits et confirmations multilingues.",
      "es": "Agenda, conflictos y confirmaciones multilingües."
    },
    "ids": [
      "calendar-conflict-timezone-confirmations",
      "inbox-calendar-triage",
      "digital-tools-request-workflow"
    ]
  },
  {
    "id": "customer",
    "title": {
      "it": "Assistenza clienti scritta",
      "en": "Written customer care",
      "fr": "Relation client écrite",
      "es": "Atención escrita al cliente"
    },
    "description": {
      "it": "Richieste, risposte postvendita, escalation e registri operativi.",
      "en": "Customer enquiries, after-sales replies, escalation and case files.",
      "fr": "Demandes de clients, suivi après-vente et registres.",
      "es": "Consultas, respuestas posventa, escalado y registros."
    },
    "ids": [
      "customer-care-escalations",
      "italian-customer-service-multilingual-followup",
      "international-client-italian-aftercare"
    ]
  },
  {
    "id": "orders",
    "title": {
      "it": "Ordini, listini e preventivi",
      "en": "Orders, price lists and draft quotations",
      "fr": "Commandes, tarifs et projets de devis",
      "es": "Pedidos, tarifas y borradores de presupuesto"
    },
    "description": {
      "it": "Registri e bozze da approvare, non attività contabili.",
      "en": "Approved-data tracking and draft documents, not accounting.",
      "fr": "Registres et projets à valider, sans comptabilité.",
      "es": "Registros y borradores por aprobar, sin contabilidad."
    },
    "ids": [
      "order-entry-price-list",
      "commercial-quote-from-approved-pricelist",
      "approved-quotes-order-variations"
    ]
  },
  {
    "id": "data",
    "title": {
      "it": "Data entry e aggiornamento dati",
      "en": "Data entry and record updates",
      "fr": "Saisie et mise à jour de données",
      "es": "Entrada y actualización de datos"
    },
    "description": {
      "it": "Schede esistenti, verifica duplicati e registri di modifiche.",
      "en": "Existing records, duplicate checks and change logs.",
      "fr": "Fiches existantes, doublons et registre des changements.",
      "es": "Registros existentes, duplicados y control de cambios."
    },
    "ids": [
      "customer-record-data-entry-audit",
      "order-entry-price-list",
      "approved-quotes-order-variations"
    ]
  },
  {
    "id": "archives",
    "title": {
      "it": "Archivi digitali e Drive",
      "en": "Shared drives and digital archives",
      "fr": "Archives numériques et dossiers partagés",
      "es": "Archivos digitales y Drive"
    },
    "description": {
      "it": "Cartelle, accessi, duplicati, versioni e consegna documentale.",
      "en": "Folder structures, permissions, versions and document handovers.",
      "fr": "Classement, accès, versions et transmission des documents.",
      "es": "Carpetas, permisos, versiones y entrega documental."
    },
    "ids": [
      "digital-archive-duplicates-access-matrix",
      "shared-drive-version-control",
      "customer-record-data-entry-audit"
    ]
  },
  {
    "id": "tools",
    "title": {
      "it": "Organizzazione digitale e flussi",
      "en": "Digital tools and workflows",
      "fr": "Outils numériques et flux de travail",
      "es": "Herramientas digitales y flujos"
    },
    "description": {
      "it": "Registri, assegnazione delle attività, responsabilità e passaggi approvativi.",
      "en": "Working registers, responsibilities and approvals.",
      "fr": "Suivi des tâches, responsabilités et validations.",
      "es": "Seguimiento de tareas, responsables y autorizaciones."
    },
    "ids": [
      "digital-tools-request-workflow",
      "inbox-calendar-triage",
      "shared-drive-version-control"
    ]
  },
  {
    "id": "courses",
    "title": {
      "it": "Supporto organizzativo ai corsi",
      "en": "Online course organisation",
      "fr": "Organisation de formations en ligne",
      "es": "Organización de cursos en línea"
    },
    "description": {
      "it": "Comunicazioni agli iscritti, materiali, FAQ e verifiche delle informazioni.",
      "en": "Enrolled-learner emails, materials, FAQs and information checks.",
      "fr": "Courriels aux inscrits, supports, FAQ et vérifications.",
      "es": "Correos a inscritos, materiales, FAQ y controles."
    },
    "ids": [
      "online-course-secretariat",
      "multilingual-course-secretariat-schedule",
      "course-information-source-audit"
    ]
  },
  {
    "id": "research",
    "title": {
      "it": "Ricerche e confronti informativi",
      "en": "Desk research and comparisons",
      "fr": "Recherche documentaire et comparaisons",
      "es": "Investigación documental y comparativas"
    },
    "description": {
      "it": "Criteri espliciti, fonti, tabelle e decisioni ancora aperte.",
      "en": "Source records, criteria, comparison matrices and open decisions.",
      "fr": "Sources, critères, tableaux et validations en attente.",
      "es": "Fuentes, criterios, matrices y datos pendientes."
    },
    "ids": [
      "research-existing-italian-customers",
      "information-research-verifiable-source-matrix",
      "course-information-source-audit"
    ]
  },
  {
    "id": "sops",
    "title": {
      "it": "Procedure operative e checklist",
      "en": "Operational procedures and checklists",
      "fr": "Procédures et listes de contrôle",
      "es": "Procedimientos y listas de control"
    },
    "description": {
      "it": "Istruzioni riutilizzabili con eccezioni, controlli e approvazioni.",
      "en": "Reusable procedures with exception handling and approval checks.",
      "fr": "Procédures réutilisables avec exceptions et contrôles.",
      "es": "Procedimientos con excepciones, controles y permisos."
    },
    "ids": [
      "digital-tools-request-workflow",
      "shared-drive-version-control",
      "digital-archive-duplicates-access-matrix"
    ]
  },
  {
    "id": "proofreading",
    "title": {
      "it": "Proofreading e revisione editoriale",
      "en": "Proofreading and editorial revision",
      "fr": "Relecture et révision éditoriale",
      "es": "Corrección y revisión editorial"
    },
    "description": {
      "it": "Testi prima e dopo, spiegazioni editoriali e controllo della terminologia.",
      "en": "Complete before-and-after revisions with editorial notes.",
      "fr": "Textes avant/après et décisions éditoriales.",
      "es": "Textos antes/después y decisiones editoriales."
    },
    "ids": [
      "multilingual-proofreading-written-notices",
      "existing-client-notice-editing",
      "catalogue-price-list-proofreading"
    ]
  },
  {
    "id": "web",
    "title": {
      "it": "Siti web, landing page e FAQ",
      "en": "Website copy, landing pages and FAQs",
      "fr": "Textes web, pages de présentation et FAQ",
      "es": "Textos web, páginas de destino y FAQ"
    },
    "description": {
      "it": "Sezioni integrali, descrizioni servizi e adattamenti per il mercato italiano.",
      "en": "Full website sections and Italian-market localisation.",
      "fr": "Pages complètes et adaptation au marché italien.",
      "es": "Páginas completas y adaptación al mercado italiano."
    },
    "ids": [
      "italian-market-website-copy-four-languages",
      "web-copy-before-after",
      "website-help-page-microcopy",
      "en-it-service-landing-localisation-complete"
    ]
  },
  {
    "id": "blog",
    "title": {
      "it": "Articoli e contenuti informativi",
      "en": "Blog articles and informative copy",
      "fr": "Articles de blog et contenus informatifs",
      "es": "Artículos de blog y contenidos informativos"
    },
    "description": {
      "it": "Articoli integrali, sviluppo degli argomenti e testi collegati.",
      "en": "Full articles, editorial development and supporting copy.",
      "fr": "Articles complets et contenus de soutien.",
      "es": "Artículos completos y textos complementarios."
    },
    "ids": [
      "blog-editorial-feature-four-languages",
      "italian-market-website-copy-four-languages",
      "website-help-page-microcopy"
    ]
  },
  {
    "id": "social",
    "title": {
      "it": "Newsletter, post e profili digitali",
      "en": "Newsletters, social posts and digital profiles",
      "fr": "Lettres d'information, publications et profils",
      "es": "Boletines, publicaciones y perfiles digitales"
    },
    "description": {
      "it": "Testi per le comunicazioni autorizzate e contenuti organici, senza acquisizione contatti.",
      "en": "Complete opted-in newsletters and organic posts, not prospecting.",
      "fr": "Lettres complètes et publications organiques, sans prospection.",
      "es": "Boletines y publicaciones orgánicas, sin captación."
    },
    "ids": [
      "newsletter-existing-clients-multilingual",
      "professional-social-editorial-series-italy",
      "online-service-information-multilingual-profile-pack"
    ]
  },
  {
    "id": "catalogue",
    "title": {
      "it": "Schede prodotto e cataloghi",
      "en": "Product listings and catalogues",
      "fr": "Fiches produit et catalogues",
      "es": "Fichas de producto y catálogos"
    },
    "description": {
      "it": "Descrizioni complete, revisione dei listini e traduzioni a fronte.",
      "en": "Full product copy, catalogue editing and side-by-side translations.",
      "fr": "Fiches complètes, révision et traduction.",
      "es": "Descripciones completas, revisión y traducción."
    },
    "ids": [
      "catalogue-price-list-proofreading",
      "fr-it-product-information-full",
      "it-es-desk-accessory-catalogue"
    ]
  },
  {
    "id": "translations",
    "title": {
      "it": "Traduzione e localizzazione IT ↔ EN/FR/ES",
      "en": "IT ↔ EN/FR/ES translation and localisation",
      "fr": "Traduction et localisation IT ↔ EN/FR/ES",
      "es": "Traducción y localización IT ↔ EN/FR/ES"
    },
    "description": {
      "it": "Sei direzioni linguistiche, testi originali e traduzioni integrali.",
      "en": "All six language directions, complete source and target texts.",
      "fr": "Six sens de traduction et textes complets.",
      "es": "Seis direcciones con originales y traducciones completas."
    },
    "ids": [
      "en-it-service-landing-localisation-complete",
      "fr-it-product-information-full",
      "es-it-existing-customer-service-email-full",
      "it-en-internal-procedure-translation",
      "it-fr-customer-service-followup",
      "it-es-support-faq-complete"
    ]
  }
];

const COPY: Record<Language,{eyebrow:string;title:string;intro:string;open:string;count:string}> = {
  it:{eyebrow:"Portfolio per competenza",title:"Più esempi per ogni servizio",intro:"Scegli l'attività che ti interessa. Ogni collegamento apre un dossier con il contesto del lavoro, i documenti integrali e i controlli effettuati o da approvare.",open:"Leggi il dossier",count:"elaborati"},
  en:{eyebrow:"Explore by service",title:"Several full work examples for every service",intro:"Choose a service and open the full dossiers. Each one includes the working context, complete documents and the checks or approvals involved.",open:"Read the full dossier",count:"work examples"},
  fr:{eyebrow:"Par prestation",title:"Plusieurs réalisations pour chaque prestation",intro:"Choisissez une prestation et ouvrez les dossiers complets : contexte, documents intégraux, choix professionnels et contrôles.",open:"Consulter le dossier",count:"exemples"},
  es:{eyebrow:"Por servicio",title:"Varios trabajos completos por cada servicio",intro:"Elige un servicio y consulta los dosieres completos, con contexto, documentos íntegros, decisiones y comprobaciones.",open:"Leer el dosier",count:"ejemplos"}
};

export function PortfolioServiceLibrary({lang}:{lang:Language}) {
  const t=COPY[lang];
  return <section id="portfolio-service-library" aria-labelledby="portfolio-service-library-title" className="scroll-mt-28 py-14 md:py-20 bg-secondary/10 border-y border-border/60">
    <div className="container max-w-5xl mx-auto px-4 md:px-6">
      <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-2">{t.eyebrow}</p>
      <h2 id="portfolio-service-library-title" className="text-2xl md:text-4xl font-bold leading-tight mb-4">{t.title}</h2>
      <p className="text-foreground/80 leading-relaxed max-w-3xl mb-10">{t.intro}</p>
      <div className="grid md:grid-cols-2 gap-5">
        {PORTFOLIO_SERVICE_TRACKS.map(track=>{
          const entries=track.ids.map(getDeepPortfolioItem).filter((entry):entry is NonNullable<typeof entry>=>Boolean(entry));
          return <article key={track.id} className="rounded-2xl border border-border/70 bg-card p-5 md:p-6 flex flex-col gap-3">
            <div>
              <h3 className="text-lg font-bold leading-snug">{track.title[lang]}</h3>
              <p className="mt-2 text-sm text-foreground/75 leading-relaxed">{track.description[lang]}</p>
            </div>
            <p className="text-xs text-muted-foreground">{entries.length} {t.count}</p>
            <ul className="space-y-2 mt-1">
              {entries.map(entry=><li key={entry.item.id}>
                <Link to={getDeepPortfolioPath(entry.item.id,lang)} className="flex justify-between items-start gap-3 px-3 py-3 rounded-lg border border-border/60 hover:border-primary/60 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors text-sm">
                  <span className="font-medium text-foreground">{entry.item.title[lang]}</span>
                  <span aria-hidden="true" className="text-primary shrink-0">↗</span>
                </Link>
              </li>)}
            </ul>
          </article>;
        })}
      </div>
    </div>
  </section>;
}
