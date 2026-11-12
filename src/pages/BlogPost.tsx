import { Layout } from "@/components/Layout";
import { BLOG_PHOTO_ATTRIBUTION_LABEL } from "@/lib/blogPhotography";
import { useParams, useLocation, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getBlogPostBySlug, getBlogPosts, getBlogPostPath, getBlogIndexPath, getBlogPostAlternates } from "@/lib/blogData";
import { alignLegacyBlogCopy } from "@/lib/blogEditorialOverrides";
import { useSEO } from "@/hooks/useSEO";
import { getLanguageFromPath, getLocalizedPath } from "@/lib/i18n/routes";
import type { Language } from "@/lib/i18n/types";

const COPY: Record<Language, {back: string; ctaTitle: string; ctaDesc: string; ctaBtn: string; authorBio: string; related: string; sample: string}> = {
  it: {
    back: "Torna al blog",
    ctaTitle: "Hai bisogno di supporto per il tuo lavoro?",
    ctaDesc: "Descrivimi la tua attività e le tue esigenze: valuteremo insieme le prestazioni più adatte.",
    ctaBtn: "Richiedi un preventivo",
    authorBio: "Assistente virtuale multilingue e traduttrice tra italiano e inglese, francese e spagnolo in entrambe le direzioni. Oltre vent'anni di esperienza professionale, laurea in Mediazione Linguistica e master in Traduzione Specialistica.",
    related: "Altri articoli",
    sample: ""
  },
  en: {
    back: "Back to the blog",
    ctaTitle: "Need natural Italian-language communication?",
    ctaDesc: "Tell me about your translation, localisation or existing-customer communication needs for Italy.",
    ctaBtn: "Request a quote",
    authorBio: "Native Italian speaker, trained translator and virtual assistant. My professional experience spans more than twenty years across different roles; I hold a degree in Language Mediation and an Italian university Master’s qualification in Specialised Translation.",
    related: "Related reading",
    sample: "This article is an editorial adaptation for English-language readers."
  },
  fr: {
    back: "Retour au blog",
    ctaTitle: "Besoin de communiquer naturellement avec vos clients italiens ?",
    ctaDesc: "Présentez vos besoins en traduction vers l’italien, localisation ou échanges avec vos clients existants.",
    ctaBtn: "Demander un devis",
    authorBio: "Italienne de langue maternelle, traductrice formée à la traduction spécialisée et assistante virtuelle. Mon parcours professionnel dépasse vingt ans, dans des fonctions variées.",
    related: "À lire également",
    sample: "Cet article a été adapté pour les lecteurs francophones."
  },
  es: {
    back: "Volver al blog",
    ctaTitle: "¿Necesitas comunicarte de forma natural con clientes italianos?",
    ctaDesc: "Cuéntame qué contenidos necesitas traducir al italiano o qué comunicaciones con clientes actuales deseas organizar.",
    ctaBtn: "Solicitar un presupuesto",
    authorBio: "Italiana de lengua materna, traductora con formación especializada y asistente virtual. Mi trayectoria profesional supera los veinte años en distintas funciones.",
    related: "Otros artículos",
    sample: "Este artículo se ha adaptado editorialmente para lectores hispanohablantes."
  }
};

// Provider plan limits checked against official provider pages on 8 November 2026.
const FREE_PLAN_NOTICE:Record<Language,{title:string;body:string;sources:string;links:{name:string;url:string}[]}>={
  it:{title:"Piani gratuiti: verifica i limiti",body:"Informazioni verificate l’8 novembre 2026. Calendly Free include un tipo di evento e un calendario collegato; Zoom Basic limita normalmente le riunioni a 40 minuti; Asana Personal è pensato per una o due persone. Funzioni e condizioni possono cambiare: consulta le pagine ufficiali prima di scegliere.",sources:"Piani e condizioni ufficiali",links:[{name:"Calendly",url:"https://calendly.com/pricing"},{name:"Zoom",url:"https://support.zoom.com/hc/it/article?id=zm_kb&sysparm_article=KB0067973"},{name:"Asana",url:"https://asana.com/it/pricing"}]},
  en:{title:"Free plans: check the limits",body:"Information checked on 8 November 2026. This article discusses Google Calendar, Google Drive, Trello, Notion and Google Forms. Free features, storage, collaboration limits and integrations vary by account type and plan; check the providers’ official pages before choosing.",sources:"Official plans and terms",links:[{name:"Google Workspace",url:"https://workspace.google.com/pricing/"},{name:"Trello",url:"https://trello.com/en/pricing"},{name:"Notion",url:"https://www.notion.com/pricing"}]},
  fr:{title:"Offres gratuites : vérifiez les limites",body:"Informations vérifiées le 8 novembre 2026. Cet article présente Google Agenda, Google Drive, Trello, Notion et Google Forms. Les fonctions gratuites, le stockage, les limites de collaboration et les intégrations dépendent du type de compte et de l’offre ; consultez les pages officielles avant de choisir.",sources:"Offres et conditions officielles",links:[{name:"Google Workspace",url:"https://workspace.google.com/pricing/"},{name:"Trello",url:"https://trello.com/en/pricing"},{name:"Notion",url:"https://www.notion.com/pricing"}]},
  es:{title:"Planes gratuitos: comprueba los límites",body:"Información comprobada el 8 de noviembre de 2026. Este artículo presenta Google Calendar, Google Drive, Trello, Notion y Google Forms. Las funciones gratuitas, el almacenamiento, los límites de colaboración y las integraciones dependen del tipo de cuenta y del plan; consulta las páginas oficiales antes de elegir.",sources:"Planes y condiciones oficiales",links:[{name:"Google Workspace",url:"https://workspace.google.com/pricing/"},{name:"Trello",url:"https://trello.com/en/pricing"},{name:"Notion",url:"https://www.notion.com/pricing"}]}
};

export default function BlogPost() {
  const { slug } = useParams();
  const { pathname } = useLocation();
  const lang: Language = pathname.startsWith("/blog/") ? "it" : getLanguageFromPath(pathname);
  const post = slug ? getBlogPostBySlug(slug,lang) : undefined;
  const visible = post && post.published !== false ? alignLegacyBlogCopy(post) : undefined;
  const copy = COPY[lang];
  const canonical = visible
    ? "https://www.noemitomassetti.it" + getBlogPostPath(visible.slug,lang)
    : "https://www.noemitomassetti.it" + getBlogIndexPath(lang);

  useSEO({
    title: visible ? visible.title + " | Noemi Tomassetti" : copy.back,
    description: visible?.excerpt || "",
    canonical,
    alternates: visible ? getBlogPostAlternates(visible.id) : [],
    ogImage: visible?.image,
    ogType: "article",
    ogLocale: {it:"it_IT",en:"en_GB",fr:"fr_FR",es:"es_ES"}[lang],
    noindex: !visible,
    schema: visible ? {
      "@context":"https://schema.org",
      "@type":"BlogPosting",
      headline:visible.title,
      description:visible.excerpt,
      image:new URL(visible.image,"https://www.noemitomassetti.it").href,
      datePublished:visible.dateISO,
      inLanguage:lang,
      mainEntityOfPage:canonical,
      author:{"@type":"Person",name:"Noemi Tomassetti",url:"https://www.noemitomassetti.it"},
      publisher:{"@type":"Organization",name:"Noemi Tomassetti",url:"https://www.noemitomassetti.it"}
    } : undefined
  });

  if (!visible) return <Navigate to={getBlogIndexPath(lang)} replace />;

  const related = getBlogPosts(lang)
    .filter(item => item.id !== visible.id && item.published !== false)
    .map(item => alignLegacyBlogCopy(item))
    .sort((a,b) => b.dateISO.localeCompare(a.dateISO))
    .slice(0,2);

  return (
    <Layout lang={lang}>
      <article className="container px-4 md:px-6 py-10 md:py-16 max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-8 -ml-4 text-foreground/70 hover:text-primary">
          <Link to={getBlogIndexPath(lang)}><ArrowLeft className="w-4 h-4 mr-2" />{copy.back}</Link>
        </Button>
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="text-sm font-medium text-primary">{visible.category}</span>
            <time className="text-sm text-muted-foreground" dateTime={visible.dateISO}>
              {new Date(visible.dateISO + "T12:00:00").toLocaleDateString({it:"it-IT",en:"en-GB",fr:"fr-FR",es:"es-ES"}[lang],{day:"numeric",month:"long",year:"numeric"})}
            </time>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">{visible.title}</h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-7">{visible.excerpt}</p>
          {copy.sample && <p className="text-xs text-muted-foreground mb-6">{copy.sample}</p>}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-border/50 bg-muted/10">
            <img src={visible.image} alt={visible.alt || visible.title} width="800" height="500" loading="eager" decoding="async" referrerPolicy="no-referrer" className="w-full aspect-[8/5] object-cover" />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-right">
            {BLOG_PHOTO_ATTRIBUTION_LABEL[lang]}: <a href={visible.photoSource} target="_blank" rel="noopener noreferrer" referrerPolicy="no-referrer" className="underline underline-offset-2 hover:text-primary">{visible.photoCredit} · Unsplash</a>
          </p>
        </header>
        <div className="prose prose-invert prose-lg max-w-none text-foreground/90 prose-headings:text-primary prose-strong:text-primary prose-a:text-primary prose-p:leading-relaxed prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6" dangerouslySetInnerHTML={{__html:visible.content}} />
        {visible.id===3 && <aside aria-label={FREE_PLAN_NOTICE[lang].title} className="mt-8 rounded-xl border border-border/70 bg-card px-5 py-5 text-sm leading-relaxed text-foreground/85">
          <h2 className="font-semibold text-base text-foreground mb-2">{FREE_PLAN_NOTICE[lang].title}</h2>
          <p>{FREE_PLAN_NOTICE[lang].body}</p>
          <p className="mt-3 text-muted-foreground">{FREE_PLAN_NOTICE[lang].sources}: {FREE_PLAN_NOTICE[lang].links.map((ref,i)=><span key={ref.name}>{i>0?" · ":null}<a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">{ref.name}</a></span>)}</p>
        </aside>}
        <div className="my-12 p-6 md:p-8 bg-card border border-primary/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-primary">{copy.ctaTitle}</h2>
            <p className="text-sm text-foreground/80">{copy.ctaDesc}</p>
          </div>
          <Button asChild size="lg"><Link to={getLocalizedPath("contact",lang)+"#contact-section"}>{copy.ctaBtn}</Link></Button>
        </div>
        <section className="mt-12 p-6 md:p-8 bg-card border border-border/50 rounded-2xl" aria-label="Author">
          <h2 className="text-xl font-bold text-primary mb-2">Noemi Tomassetti</h2>
          <p className="text-sm text-foreground/80">{copy.authorBio}</p>
        </section>
        <section className="mt-16 pt-10 border-t border-border/50">
          <h2 className="text-2xl font-bold text-primary mb-6">{copy.related}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {related.map(item => (
              <Link key={item.id} to={getBlogPostPath(item.slug,lang)} className="group bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                <img src={item.image} alt={item.alt || item.title} loading="lazy" className="w-full h-32 object-cover" />
                <div className="p-4">
                  <span className="text-xs font-medium text-primary block mb-2">{item.category}</span>
                  <h3 className="text-base font-bold text-foreground group-hover:text-primary">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </Layout>
  );
}
