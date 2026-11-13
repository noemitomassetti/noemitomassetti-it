import { Layout } from "@/components/Layout";
import { Link, useLocation } from "react-router-dom";
import { getBlogPosts, getBlogIndexPath, getBlogIndexAlternates, getBlogPostPath } from "@/lib/blogData";
import { alignLegacyBlogCopy } from "@/lib/blogEditorialOverrides";
import { getLanguageFromPath } from "@/lib/i18n/routes";
import type { Language } from "@/lib/i18n/types";
import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const COPY: Record<Language, {title: string; heading: string; introduction: string; read: string}> = {
  it: {
    title: "Blog e approfondimenti | Noemi Tomassetti",
    heading: "Idee e strumenti per lavorare e comunicare meglio",
    introduction: "Articoli su organizzazione del lavoro, comunicazione professionale, traduzione e strumenti digitali, con esempi e suggerimenti applicabili alle attività quotidiane.",
    read: "Leggi l’articolo"
  },
  en: {
    title: "Italian Virtual Assistant | Business Support & Communication Blog | Noemi Tomassetti",
    heading: "Virtual assistance for working with the Italian market",
    introduction: "Practical guides for professionals and small businesses already working with Italy or preparing to enter the Italian market. Explore Italian-speaking virtual assistance, email and back-office organisation, written customer care and the preparation of Italian-language communications. Translation and localisation support these services.",
    read: "Read article"
  },
  fr: {
    title: "Assistante virtuelle italophone | Blog et conseils | Noemi Tomassetti",
    heading: "Assistance virtuelle pour vos activités avec le marché italien",
    introduction: "Des conseils destinés aux indépendants et petites entreprises qui travaillent déjà avec l’Italie ou préparent leur arrivée sur le marché italien. Découvrez comment organiser le secrétariat à distance, le back-office, les courriels et les échanges écrits en italien. Traduction et localisation viennent compléter cet accompagnement opérationnel.",
    read: "Lire l’article"
  },
  es: {
    title: "Asistencia virtual en italiano | Blog y recursos | Noemi Tomassetti",
    heading: "Asistencia virtual para trabajar con el mercado italiano",
    introduction: "Guías para profesionales y pequeñas empresas que ya trabajan con Italia o se preparan para entrar en el mercado italiano. Aprende a organizar la secretaría a distancia, el correo, el back office y las comunicaciones escritas en italiano. La traducción y la localización complementan este apoyo operativo.",
    read: "Leer el artículo"
  }
};

export default function Blog() {
  const {pathname} = useLocation();
  const lang: Language = pathname === "/blog" || pathname.startsWith("/blog/") ? "it" : getLanguageFromPath(pathname);
  const copy = COPY[lang];
  const canonical = "https://www.noemitomassetti.it" + getBlogIndexPath(lang);
  const posts = getBlogPosts(lang)
    .filter(post => post.published !== false)
    .map(post => alignLegacyBlogCopy(post))
    .sort((a,b) => b.dateISO.localeCompare(a.dateISO));

  useSEO({
    title: copy.title,
    description: copy.introduction,
    canonical,
    alternates: getBlogIndexAlternates(),
    currentLang: lang,
    ogLocale: {it: "it_IT", en: "en_GB", fr: "fr_FR", es: "es_ES"}[lang],
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: copy.title,
      description: copy.introduction,
      url: canonical,
      inLanguage: lang,
      author: {"@type": "Person", name: "Noemi Tomassetti"}
    }
  });

  return (
    <Layout lang={lang}>
      <div className="container px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">{copy.heading}</h1>
          <p className="text-lg md:text-xl text-foreground/80">{copy.introduction}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post,index) => (
            <Card key={post.id} className="flex flex-col h-full bg-card border-border/50 hover:border-primary/50 transition-colors overflow-hidden">
              <div className="h-48 w-full bg-muted overflow-hidden">
                <img src={post.image} alt={post.alt || post.title} loading={index < 2 ? "eager" : "lazy"} width="600" height="300" className="w-full h-full object-cover bg-background" decoding="async" referrerPolicy="no-referrer" />
              </div>
              <CardHeader className="pt-4">
                <div className="flex items-center justify-between mb-2 gap-2">
                  <span className="text-sm font-medium text-primary">{post.category}</span>
                  <time className="text-xs text-muted-foreground" dateTime={post.dateISO}>
                    {new Date(post.dateISO + "T12:00:00").toLocaleDateString({it:"it-IT",en:"en-GB",fr:"fr-FR",es:"es-ES"}[lang],{year:"numeric",month:"long",day:"numeric"})}
                  </time>
                </div>
                <h2 className="text-lg font-semibold tracking-tight text-primary leading-tight">{post.title}</h2>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="text-sm text-card-foreground/80 mb-5">{post.excerpt}</CardDescription>
                <Button variant="outline" className="w-full mt-auto text-sm" asChild>
                  <Link to={getBlogPostPath(post.slug,lang)}>{copy.read}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
