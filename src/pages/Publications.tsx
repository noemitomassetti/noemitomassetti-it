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

export default function Publications() {
  const { pathname } = useLocation();
  const lang = getLanguageFromPath(pathname);
  const t = COPY[lang];
  const books = getPublishedBooks();
  useSEO({
    title: t.title,
    description: t.intro,
    pageKey: "publications",
    currentLang: lang,
    noindex: books.length === 0,
  });

  return (
    <Layout lang={lang}>
      <main className="container max-w-5xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wide text-xs mb-5">
            <BookOpen className="h-4 w-4" aria-hidden="true" /> {t.eyebrow}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-5">{t.heading}</h1>
          <p className="text-lg text-foreground/80 leading-relaxed">{t.intro}</p>
        </div>
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
      </main>
    </Layout>
  );
}
