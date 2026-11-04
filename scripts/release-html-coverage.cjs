const fs=require("node:fs"),p=require("node:path");
const site="https://www.noemitomassetti.it";
const urls=[...fs.readFileSync("public/sitemap.xml","utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map(x=>x[1]);
if(urls.length!==204||new Set(urls).size!==204)throw Error("Bad sitemap count or duplicates: "+urls.length);
let dossiers=0,blogs=0;
for(const url of urls){
 if(!url.startsWith(site))throw Error("Wrong domain: "+url);
 const route=url.slice(site.length),file=route?p.join("dist",route,"index.html"):"dist/index.html";
 if(!fs.existsSync(file))throw Error("Missing crawlable HTML: "+file);
 const html=fs.readFileSync(file,"utf8");
 for(const tag of [`<link rel="canonical" href="${url}">`,`<meta property="og:url" content="${url}">`,`hreflang="it"`,`hreflang="en"`,`hreflang="fr"`,`hreflang="es"`,`hreflang="x-default"`])if(!html.includes(tag))throw Error("Missing "+tag+" in "+file);
 if(route.includes("/dossier/"))dossiers++;
 if(route.includes("/blog/")&&route!=="/blog"&&route!=="/en/blog"&&route!=="/fr/blog"&&route!=="/es/blog"){ blogs++;if(!html.includes(`og:type" content="article"`))throw Error("Blog OG type absent: "+url);}
}
if(dossiers!==108||blogs!==52)throw Error("Unexpected dossier/blog coverage "+dossiers+"/"+blogs);
console.log("PASS: 204/204 sitemap pages have static social/SEO HTML; 108 dossier pages; 52 article pages.");
