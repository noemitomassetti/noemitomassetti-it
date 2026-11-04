/**
 * Generate HTML with server-visible Open Graph metadata for the four portfolio
 * hubs and all deep dossiers. React still renders the interactive client app.
 * All material is original and explicitly marked as fictional.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { DEEP_PORTFOLIO_ITEMS, getDeepPortfolioPath } from "../src/lib/portfolioDeepCatalog";
import { ROUTES } from "../src/lib/i18n/routes";
import { itLocale } from "../src/lib/i18n/locales/it";
import { enLocale } from "../src/lib/i18n/locales/en";
import { frLocale } from "../src/lib/i18n/locales/fr";
import { esLocale } from "../src/lib/i18n/locales/es";
import { ITALIAN_LOCALISATION_META } from "../src/lib/i18n/italianLocalisationMeta";
import { getBlogPosts, getBlogIndexPath, getBlogPostPath } from "../src/lib/blogData";
import { alignLegacyBlogCopy } from "../src/lib/blogEditorialOverrides";
import { PORTFOLIO_DOCUMENTS } from "../src/lib/portfolioData";
import { getPortfolioDocumentPath } from "../src/lib/portfolioDocumentPaths";

type Language = "it" | "en" | "fr" | "es";
const LANGS: Language[] = ["it", "en", "fr", "es"];
const DICTS = {it:itLocale,en:enLocale,fr:frLocale,es:esLocale};
const PAGE_META = [
  ["home","homeTitle","homeDesc"],
  ["services","servicesTitle","servicesDesc"],
  ["about","aboutTitle","aboutDesc"],
  ["resources","resourcesTitle","resourcesDesc"],
  ["contact","contactTitle","contactDesc"],
  ["privacy","privacyTitle","privacyDesc"],
  ["cookie","cookieTitle","cookieDesc"],
  ["italianLocalisation","servicesTitle","servicesDesc"]
] as const;
const BASE = "https://www.noemitomassetti.it";
const OG_IMAGE = BASE + "/noemi-tomassetti.png";
const LOCALES: Record<Language, string> = { it: "it_IT", en: "en_GB", fr: "fr_FR", es: "es_ES" };
const ROOTS: Record<Language, string> = {
  it: "/it/esempi-di-lavoro", en: "/work-examples",
  fr: "/fr/exemples-de-projets", es: "/es/ejemplos-de-trabajo"
};
const TITLES: Record<Language,string> = {
  it: "Portfolio professionale: traduzioni e assistenza operativa | Noemi Tomassetti",
  en: "Work samples: translations and operational assistance | Noemi Tomassetti",
  fr: "Portfolio : traductions et assistance opérationnelle | Noemi Tomassetti",
  es: "Portfolio: traducciones y asistencia operativa | Noemi Tomassetti"
};
const DESCRIPTIONS: Record<Language,string> = {
  it: "Esplora esempi dimostrativi originali di traduzione IT↔EN/FR/ES, segreteria, customer care, back office e scrittura professionale.",
  en: "Explore original fictional samples of IT↔EN/FR/ES translation, customer communication, back-office organisation and editorial work.",
  fr: "Découvrez des exemples fictifs originaux de traduction IT↔EN/FR/ES, relation client, secrétariat et rédaction professionnelle.",
  es: "Descubre ejemplos originales ficticios de traducción IT↔EN/FR/ES, atención al cliente, organización y redacción profesional."
};
const FICTIONAL: Record<Language,string> = {
  it: "Esempio dimostrativo originale, con dati fittizi; non è un incarico reale.",
  en: "Original fictional demonstration, not a commissioned client project.",
  fr: "Exemple original fictif, non commandé par un client.",
  es: "Ejemplo original ficticio, no encargado por un cliente."
};
const esc = (s:string) => s.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;");
const templatePath = "dist/index.html";
if (!existsSync(templatePath)) throw new Error("Build output not found. Run vite build first.");
const template = readFileSync(templatePath, "utf8");
const isProduction = process.env.VERCEL_ENV === "production" || process.env.CONTEXT === "production" || process.env.SITE_PUBLIC_RELEASE === "true";
const robots = isProduction ? "index, follow" : "noindex, nofollow";

function updateMeta(html:string, attr:string, key:string, value:string) {
  const rex = new RegExp('<meta\\s+'+attr+'="'+key+'"\\s+content="[^"]*"\\s*\\/?>', "i");
  const replacement = '<meta '+attr+'="'+key+'" content="'+esc(value)+'">';
  if (!rex.test(html)) throw new Error("Missing metadata key: "+key);
  return html.replace(rex,replacement);
}

function render(path:string, lang:Language, title:string, description:string, alternates:(l:Language)=>string, summary:string, pageType:"WebPage"|"BlogPosting"="WebPage") {
  const canonical = BASE + path;
  let html = template.replace(/<html lang="[^"]+"/, '<html lang="'+lang+'"');
  html = html.replace(/<title>[\s\S]*?<\/title>/, "<title>"+esc(title)+"</title>");
  html = updateMeta(html,"name","description",description);
  html = updateMeta(html,"name","robots",robots);
  html = updateMeta(html,"property","og:title",title);
  if (pageType==="BlogPosting") html = updateMeta(html,"property","og:type","article");
  html = updateMeta(html,"property","og:description",description);
  html = updateMeta(html,"property","og:url",canonical);
  html = updateMeta(html,"property","og:locale",LOCALES[lang]);
  html = updateMeta(html,"property","og:image",OG_IMAGE);
  html = updateMeta(html,"name","twitter:title",title);
  html = updateMeta(html,"name","twitter:description",description);
  html = updateMeta(html,"name","twitter:image",OG_IMAGE);
  html = html.replace(/<link rel="canonical"[^>]+>/i,'<link rel="canonical" href="'+canonical+'">');
  html = html.replace(/\s*<link rel="alternate"[^>]+>/g,"");
  const altTags = [...LANGS.map(l=>'<link rel="alternate" hreflang="'+l+'" href="'+BASE+alternates(l)+'">'),
    '<link rel="alternate" hreflang="x-default" href="'+BASE+alternates("en")+'">'];
  const isFictionalExample=path.includes("/dossier/") || Object.values(ROOTS).includes(path) || /\/(?:sample|esempio|exemple|ejemplo)\/\d{2}$/.test(path);
  const schema = {
    "@context":"https://schema.org",
    "@type":isFictionalExample ? "CreativeWork" : pageType, name:title,description,
    inLanguage:lang,url:canonical,
    ...(isFictionalExample ? {genre:"Original fictional portfolio demonstration"} : {}),
    author:{"@type":"Person",name:"Noemi Tomassetti"}
  };
  html = html.replace("</head>", altTags.join("\n")+"\n<script type=\"application/ld+json\">"+JSON.stringify(schema).replaceAll("<","\\u003c")+"</script>\n</head>");
  html = html.replace('<div id="root"></div>','<div id="root"><noscript><main><h1>'+esc(title)+'</h1><p>'+esc(summary)+'</p>'+(isFictionalExample?'<p>'+esc(FICTIONAL[lang])+'</p>':'')+'<a href="'+esc(BASE+ROOTS[lang])+'">Portfolio</a></main></noscript></div>');
  const out = join("dist",path.replace(/^\/+/,""),"index.html");
  mkdirSync(dirname(out),{recursive:true});
  writeFileSync(out,html,"utf8");
  const built = readFileSync(out,"utf8");
  if (!built.includes('<meta property="og:url" content="'+canonical+'">') ||
      !built.includes('<link rel="canonical" href="'+canonical+'">') ||
      !built.includes('hreflang="fr"') ||
      built.includes("NoeTom, the AI operations assistant")) {
    throw new Error("Invalid share preview output: "+path);
  }
}

let count = 0;
for (const [key,titleKey,descKey] of PAGE_META) {
  for (const lang of LANGS) {
    const title=key==="italianLocalisation" ? ITALIAN_LOCALISATION_META[lang].title : DICTS[lang].meta[titleKey];
    const description=key==="italianLocalisation" ? ITALIAN_LOCALISATION_META[lang].description : DICTS[lang].meta[descKey];
    const path=ROUTES[key].paths[lang];
    if (path==="/") {
      // Root SPA entry: meaningful English metadata for visitors without JavaScript.
      continue;
    }
    render(path,lang,title,description,l=>ROUTES[key].paths[l],description);
    count++;
  }
}
for (const lang of LANGS) {
  render(ROOTS[lang],lang,TITLES[lang],DESCRIPTIONS[lang],l=>ROOTS[l],DESCRIPTIONS[lang]);
  count++;
}
for (const entry of DEEP_PORTFOLIO_ITEMS) {
  for (const lang of LANGS) {
    const item = entry.item;
    const title = item.title[lang]+" | Noemi Tomassetti";
    const context = entry.kind==="translation" ? entry.item.context[lang] : entry.item.scenario[lang];
    const description = (context.slice(0,165).trim() + " — " + FICTIONAL[lang]).slice(0,240);
    render(getDeepPortfolioPath(item.id,lang),lang,title,description,l=>getDeepPortfolioPath(item.id,l),context);
    count++;
  }
}

// The 22 full-document readers are first-class portfolio routes, not invisible SPA links.
for(const doc of PORTFOLIO_DOCUMENTS){
  for(const lang of LANGS){
    const title=doc.title[lang]+" · DOC "+doc.num+" | Noemi Tomassetti";
    const description=(doc.subtitle[lang]+". "+FICTIONAL[lang]).slice(0,235);
    render(getPortfolioDocumentPath(doc.num,lang),lang,title,description,
      l=>getPortfolioDocumentPath(doc.num,l),doc.subtitle[lang]);
    count++;
  }
}
const BLOG_DESC:Record<Language,string> = {
  it:"Articoli pratici di organizzazione, back office, comunicazione professionale, traduzione e localizzazione.",
  en:"Practical articles on Italian translation, localisation and communication with existing Italian customers.",
  fr:"Articles sur la traduction vers l’italien, la localisation et les échanges avec des clients italiens existants.",
  es:"Artículos sobre traducción al italiano, localización y comunicación con clientes italianos actuales."
};
for (const lang of LANGS) {
  render(getBlogIndexPath(lang),lang,DICTS[lang].meta.resourcesTitle+" | Blog",BLOG_DESC[lang],getBlogIndexPath,BLOG_DESC[lang]);
  count++;
}
const publishedIds = getBlogPosts("it").filter(p=>p.published!==false).map(p=>p.id);
for (const id of publishedIds) {
  for (const lang of LANGS) {
    const article=getBlogPosts(lang).find(p=>p.id===id && p.published!==false);
    if (!article) throw new Error("Missing published blog post "+id+"/"+lang);
    const post=alignLegacyBlogCopy(article);
    const alt=(l:Language)=>{
      const counterpart=getBlogPosts(l).find(p=>p.id===id && p.published!==false);
      if(!counterpart) throw new Error("Missing blog alternate "+id+"/"+l);
      return getBlogPostPath(counterpart.slug,l);
    };
    render(getBlogPostPath(post.slug,lang),lang,post.title+" | Noemi Tomassetti",post.excerpt,alt,post.excerpt,"BlogPosting");
    count++;
  }
}
const QUESTIONNAIRE_META:Record<Language,{title:string;description:string}> = {
  it:{title:"Richiesta guidata di supporto professionale | Noemi Tomassetti",description:"Descrivi la tua attività e le esigenze di segreteria, back office, comunicazione o traduzione attraverso un percorso guidato."},
  en:{title:"Request Operational or Italian-Language Support | Noemi Tomassetti",description:"Describe your translation, Italian-market localisation or existing-customer communication needs through a guided enquiry."},
  fr:{title:"Demande de soutien professionnel | Noemi Tomassetti",description:"Présentez vos besoins de traduction vers l’italien, de localisation ou de communication avec vos clients italiens existants."},
  es:{title:"Solicitud de asistencia profesional | Noemi Tomassetti",description:"Describe tus necesidades de traducción al italiano, localización y atención a clientes italianos existentes."}
};
for(const lang of LANGS) {
  const details=QUESTIONNAIRE_META[lang];
  render(ROUTES.questionnaire.paths[lang],lang,details.title,details.description,
    l=>ROUTES.questionnaire.paths[l],details.description);
  count++;
}
const expected = PAGE_META.length*LANGS.length-1 + 4 + DEEP_PORTFOLIO_ITEMS.length*4
  + PORTFOLIO_DOCUMENTS.length*LANGS.length + 4 + publishedIds.length*4 + 4;
if (count !== expected) throw new Error("Incomplete page generation: "+count+"/"+expected);

if (!isProduction) {
  let shell = readFileSync(templatePath,"utf8");
  shell = updateMeta(shell,"name","robots","noindex, nofollow");
  writeFileSync(templatePath,shell,"utf8");
}
console.log("PASS: "+count+" static multilingual pages (all public sitemap URLs except root), production="+isProduction);
