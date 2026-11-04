/**
 * Automated accessibility smoke on representative public pages.
 * This complements but does not replace manual WCAG evaluation.
 * Run on the locally running Vite preview at localhost:4173.
 */
const {chromium}=require("playwright");
const path=require("node:path");
const routes=[
  "/","/it","/fr","/es",
  "/services","/it/servizi","/fr/services","/es/servicios",
  "/work-examples","/it/esempi-di-lavoro","/fr/exemples-de-projets","/es/ejemplos-de-trabajo",
  "/it/esempi-di-lavoro/dossier/it-en-consultancy-services",
  "/work-examples/dossier/existing-customer-multilingual-email-pack",
  "/it/contatti","/contact","/it/privacy-policy","/blog"
];
(async ()=>{
  const browser=await chromium.launch({channel:"chrome",headless:true,args:["--no-sandbox"]});
  try{
    const page=await browser.newPage({viewport:{width:1280,height:900},reducedMotion:"reduce"});
    let failures=0;
    for(const route of routes){
      await page.goto("http://127.0.0.1:4173"+route,{waitUntil:"domcontentloaded",timeout:30000});
      await page.locator("main h1").waitFor({timeout:12000});
      await page.addScriptTag({path:require.resolve("axe-core/axe.min.js")});
      const report=await page.evaluate(async ()=>{
        return window.axe.run(document,{runOnly:{type:"tag",values:["wcag2a","wcag2aa","wcag21a","wcag21aa","wcag22aa"]}});
      });
      const severe=report.violations.filter(x=>x.impact==="critical"||x.impact==="serious");
      if(severe.length){
        failures+=severe.length;
        for(const v of severe){
          console.error("ACCESSIBILITY "+route+" "+v.id+" ("+v.impact+"): "+v.help);
          for(const n of v.nodes.slice(0,3))console.error("  "+n.target.join(" ")+" "+n.failureSummary?.slice(0,170));
        }
      }else console.log("PASS automated WCAG AA smoke "+route+" (minor="+report.violations.length+")");
    }
    if(failures)throw Error(failures+" serious/critical WCAG findings across representative routes");
    console.log("PASS "+routes.length+" representative pages, no serious/critical axe-core findings; manual checks still required.");
  }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exit(1)});
