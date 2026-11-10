import { Link, useLocation } from "react-router-dom";
import { BookOpen, ExternalLink, FileText } from "lucide-react";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { getLanguageFromPath, getLocalizedPath } from "@/lib/i18n/routes";
import { getPublishedBooks } from "@/lib/publicationsCatalog";
import type { Language } from "@/lib/i18n/types";

const COPY: Record<Language, {
  title: string; heading: string; eyebrow: string; intro: string;
  collection: string; collectionDesc: string; preparing: string;
  note: string; buy: string; sample: string; back: string;
}> = {
  it: {
    title: "Libri e pubblicazioni | Noemi Tomassetti",
    heading: "Libri e pubblicazioni", eyebrow: "PROGETTI EDITORIALI",
    intro: "Risorse pratiche per affrontare situazioni reali di comunicazione professionale tra lingue e culture.",
    collection: "Professional Languages in Practice",
    collectionDesc: "Una collana di prontuari operativi dedicati alle comunicazioni professionali: frasi, modelli, situazioni d'uso e indicazioni contestuali.",
    preparing: "Pubblicazioni in preparazione",
    note: "I titoli e gli eventuali collegamenti ad Amazon saranno disponibili qui soltanto dopo la pubblicazione effettiva. Non sono ancora disponibili prodotti da acquistare.",
    buy: "Vedi il libro su Amazon", sample: "Leggi un estratto", back: "Scopri i servizi",
  },
  en: {
    title: "Books and publications | Noemi Tomassetti",
    heading: "Books & publications", eyebrow: "EDITORIAL PROJECTS",
    intro: "Practical resources for real-world professional communication across languages and cultures.",
    collection: "Professional Languages in Practice",
    collectionDesc: "A planned collection of practical business-language guides organised around workplace situations, reusable examples and cultural context.",
    preparing: "Publications in preparation",
    note: "Book details and verified Amazon links will appear here only after each title is published. No books are currently offered for sale on this page.",
    buy: "View on Amazon", sample: "Read a sample", back: "Explore services",
  },
  fr: {
    title: "Livres et publications | Noemi Tomassetti",
    heading: "Livres et publications", eyebrow: "PROJETS ÉDITORIAUX",
    intro: "Des ressources pratiques pour communiquer dans des situations professionnelles réelles, entre langues et cultures.",
    collection: "Professional Languages in Practice",
    collectionDesc: "Une collection en préparation de guides linguistiques pratiques, organisés par situations professionnelles, avec modèles réutilisables et repères culturels.",
    preparing: "Publications en préparation",
    note: "Les titres et les liens Amazon vérifiés seront ajoutés après leur publication effective. Aucun livre n'est actuellement proposé à la vente sur cette page.",
    buy: "Voir le livre sur Amazon", sample: "Lire un extrait", back: "Découvrir les services",
  },
  es: {
    title: "Libros y publicaciones | Noemi Tomassetti",
    heading: "Libros y publicaciones", eyebrow: "PROYECTOS EDITORIALES",
    intro: "Recursos prácticos para comunicarte en situaciones profesionales reales, entre idiomas y culturas.",
    collection: "Professional Languages in Practice",
    collectionDesc: "Una colección en preparación de guías prácticas de idiomas profesionales, organizadas por situaciones, con modelos reutilizables y claves culturales.",
    preparing: "Publicaciones en preparación",
    note: "Los títulos y los enlaces verificados a Amazon se añadirán cuando se publiquen realmente. Esta página todavía no ofrece libros a la venta.",
    buy: "Ver el libro en Amazon", sample: "Leer un extracto", back: "Explorar servicios",
  },
};


/** Pre-launch copy: no Amazon URL or sale claim until a verified listing exists. */
const PRELAUNCH: Record<Language, {
  status: string; headline: string; premise: string;
  label: string; useCases: string[]; distinction: string;
  details: string; notice: string;
}> = {
  it: {
    status: "IN PREPARAZIONE · NON ANCORA IN VENDITA",
    headline: "Business English in Practice",
    premise: "L’inglese professionale, quando ti serve. Un prontuario bilingue per trovare rapidamente come scrivere un’email, rispondere a un cliente, gestire una telefonata o preparare un documento di lavoro.",
    label: "Che cosa troverai",
    useCases: ["103 situazioni di lavoro con esempi per email, chat e telefono", "41 schede operative con documenti e formulazioni da adattare", "Percorsi rapidi, glossari e spiegazioni in italiano", "Esercizi e controlli per comunicare con precisione, senza trasformare ipotesi in promesse"],
    distinction: "Parti dal problema, scegli il canale, adatta il modello e controlla i dati prima dell’invio. Pensato per professionisti e freelance italofoni che lavorano in contesti internazionali.",
    details: "Dalla collana Professional Languages in Practice, di Noemi Tomassetti, laureata in Mediazione Linguistica e con formazione specialistica in traduzione. Il libro nasce dall’esperienza nella comunicazione professionale e nel back office.",
    notice: "Edizione in fase di revisione e collaudo. Prezzo, anteprima gratuita e collegamento Amazon saranno pubblicati soltanto dopo l’approvazione finale."
  },
  en: {
    status: "IN PREPARATION · NOT YET FOR SALE",
    headline: "Business English in Practice",
    premise: "Practical professional English, when you need it. An Italian–English reference guide designed to help Italian-speaking professionals write emails, reply to clients, handle calls and prepare workplace documents.",
    label: "What the guide includes",
    useCases: ["103 workplace situations with email, chat and telephone examples", "41 practical templates and document guides to adapt", "Quick-reference routes, glossaries and explanations in Italian", "Exercises and checks to help avoid unsupported promises or claims"],
    distinction: "Start with the situation, select the channel, adapt the wording and check the facts before sending. Written primarily for Italian-speaking professionals and freelancers.",
    details: "Part of the Professional Languages in Practice collection, by Noemi Tomassetti, a graduate in Language Mediation with postgraduate training in specialist translation and experience in professional communications and back-office support.",
    notice: "Currently undergoing editorial review and testing. A sample, price and Amazon purchase link will appear only after final approval."
  },
  fr: {
    status: "EN PRÉPARATION · PAS ENCORE EN VENTE",
    headline: "Business English in Practice",
    premise: "L’anglais professionnel au moment où vous en avez besoin. Un guide pratique bilingue italien-anglais pour rédiger des courriels, répondre aux clients, gérer des appels et préparer des documents de travail.",
    label: "Ce que contient le guide",
    useCases: ["103 situations professionnelles avec modèles de courriels, de messages et d’appels", "41 fiches pratiques et modèles de documents à adapter", "Accès rapides, glossaires et explications en italien", "Exercices et vérifications pour communiquer avec précision"],
    distinction: "Partez de la situation, choisissez le canal, adaptez le modèle et vérifiez les informations avant de l’envoyer. Le guide s’adresse avant tout aux professionnels italophones.",
    details: "Un titre de la collection Professional Languages in Practice, signé Noemi Tomassetti, diplômée en médiation linguistique et formée à la traduction spécialisée, avec une expérience en communication professionnelle et back-office.",
    notice: "Livre en cours de révision et de test. L’extrait, le prix et le lien d’achat Amazon seront communiqués après validation finale."
  },
  es: {
    status: "EN PREPARACIÓN · TODAVÍA NO ESTÁ A LA VENTA",
    headline: "Business English in Practice",
    premise: "Inglés profesional cuando lo necesitas. Una guía práctica bilingüe italiano-inglés para escribir correos, responder a clientes, atender llamadas y preparar documentos de trabajo.",
    label: "Qué incluye",
    useCases: ["103 situaciones laborales con ejemplos para correo, chat y teléfono", "41 fichas prácticas con modelos y documentos adaptables", "Accesos rápidos, glosarios y explicaciones en italiano", "Ejercicios y comprobaciones para comunicarte con precisión"],
    distinction: "Parte de una situación, elige el canal, adapta el modelo y comprueba los datos antes de enviarlo. Dirigido principalmente a profesionales y autónomos italohablantes.",
    details: "De la colección Professional Languages in Practice, de Noemi Tomassetti, graduada en Mediación Lingüística y formada en traducción especializada, con experiencia en comunicación profesional y tareas de back office.",
    notice: "Libro en revisión editorial y pruebas. El extracto, el precio y el enlace de compra de Amazon se publicarán tras la aprobación final."
  },
};

export default function Publications() {
  const { pathname } = useLocation();
  const lang = getLanguageFromPath(pathname);
  const t = COPY[lang];
  const p = PRELAUNCH[lang];
  const books = getPublishedBooks();
  useSEO({
    title: t.title,
    description: t.intro,
    pageKey: "publications",
    currentLang: lang,
    noindex: false,
  });

  return (
    <Layout lang={lang}>
      <div className="container max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wide text-xs mb-5">
            <BookOpen className="h-4 w-4" aria-hidden="true" /> {t.eyebrow}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">{t.heading}</h1>
          <p className="text-lg text-foreground/80 leading-relaxed">{t.intro}</p>
        </div>

        {books.length === 0 && (
          <section aria-labelledby="book-prelaunch" className="mt-10 rounded-2xl border border-primary/30 bg-card overflow-hidden">
            <div className="grid lg:grid-cols-[minmax(210px,0.75fr)_minmax(0,1.75fr)]">
              <div className="min-h-[280px] p-7 md:p-9 flex items-center justify-center bg-gradient-to-br from-[#163f47] via-[#1e555c] to-[#0b2935] text-white">
                <div className="w-full max-w-[230px] aspect-[2/3] border border-[#e2afa0]/60 rounded-sm shadow-xl p-5 flex flex-col justify-between" aria-hidden="true">
                  <span className="text-xs uppercase tracking-widest text-[#f3c7af]">Professional Languages in Practice</span>
                  <strong className="text-3xl leading-tight">Business<br/>English<br/>in Practice</strong>
                  <span className="text-xs text-[#f3c7af]">Noemi Tomassetti</span>
                </div>
              </div>
              <div className="p-7 md:p-10">
                <p className="text-xs font-bold uppercase tracking-wide text-primary mb-3">{p.status}</p>
                <h2 id="book-prelaunch" className="text-2xl md:text-3xl font-bold mb-4">{p.headline}</h2>
                <p className="text-foreground/85 leading-relaxed mb-6">{p.premise}</p>
                <h3 className="font-semibold mb-3">{p.label}</h3>
                <ul className="list-disc pl-5 space-y-2 text-foreground/80 mb-6">
                  {p.useCases.map(item => <li key={item}>{item}</li>)}
                </ul>
                <p className="leading-relaxed text-foreground/80 mb-4">{p.distinction}</p>
                <p className="text-sm leading-relaxed text-foreground/70 mb-5">{p.details}</p>
                <p className="text-sm font-medium rounded-lg bg-muted p-4" role="status">{p.notice}</p>
              </div>
            </div>
          </section>
        )}
        <section aria-labelledby="publication-collection" className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-9">
          <h2 id="publication-collection" className="text-2xl font-semibold text-primary mb-4">{t.collection}</h2>
          <p className="text-foreground/80 max-w-3xl">{t.collectionDesc}</p>
        </section>
        {books.length === 0 ? (
          <section className="mt-9 rounded-xl border border-border/70 p-7 md:p-9" aria-live="polite">
            <h2 className="text-xl font-semibold mb-3">{t.preparing}</h2>
            <p className="text-foreground/75">{t.note}</p>
          </section>
        ) : (
          <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" aria-label={t.heading}>
            {books.map(book => (
              <article key={book.id} className="rounded-xl border border-border bg-card p-5 flex flex-col gap-4">
                {book.coverPath && <img src={book.coverPath} alt={book.title[lang]} className="w-full aspect-[2/3] object-contain rounded-lg" loading="lazy" />}
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wide text-primary mb-2">{book.collection}</p>
                  <h2 className="text-xl font-semibold mb-2">{book.title[lang]}</h2>
                  <p className="text-sm text-foreground/75">{book.description[lang]}</p>
                </div>
                <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer" className="inline-flex gap-2 items-center font-semibold text-primary hover:underline">
                  {t.buy} <ExternalLink className="h-4 w-4" aria-hidden="true"/>
                </a>
                {book.samplePath && <a href={book.samplePath} className="inline-flex gap-2 items-center text-sm text-foreground/75 hover:text-primary">
                  <FileText className="h-4 w-4" aria-hidden="true" /> {t.sample}
                </a>}
              </article>
            ))}
          </section>
        )}
        <div className="mt-12">
          <Link to={getLocalizedPath("services", lang)} className="text-primary font-semibold hover:underline">{t.back}</Link>
        </div>
      </div>
    </Layout>
  );
}
