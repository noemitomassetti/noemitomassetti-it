#!/usr/bin/env node
'use strict';
/** Offline release preflight. This does not replace a Vite build, browser tests or delivery verification. */
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
const failures = [];
const checks = [];
const exists = p => fs.existsSync(p);
const read = p => fs.readFileSync(path.join(root,p), 'utf8');
function walk(dir, re) {
  if (!exists(dir)) return [];
  const out=[];
  for (const e of fs.readdirSync(dir,{withFileTypes:true})) {
    const p=path.join(dir,e.name);
    if (e.isDirectory()) out.push(...walk(p,re));
    else if (re.test(p)) out.push(p);
  }
  return out;
}
function check(cond, message){if(cond) checks.push(message); else failures.push(message);}
const sources = walk(path.join(root,'src'),/\.[jt]sx?$/);
let imports=0;
for(const file of sources) {
  const code=fs.readFileSync(file,'utf8');
  const sf=ts.createSourceFile(file,code,ts.ScriptTarget.Latest,true,file.endsWith('tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);
  for(const diag of sf.parseDiagnostics) failures.push(`Syntax ${path.relative(root,file)}: ${ts.flattenDiagnosticMessageText(diag.messageText,' ')}`);
  for (const statement of sf.statements) {
    if (!ts.isImportDeclaration(statement) && !ts.isExportDeclaration(statement)) continue;
    const spec=statement.moduleSpecifier;
    if(!spec || !ts.isStringLiteral(spec)) continue;
    const name=spec.text;
    if (!name.startsWith('@/') && !name.startsWith('./') && !name.startsWith('../'))continue;
    imports++;
    const stem=name.startsWith('@/')?path.join(root,'src',name.slice(2)):path.resolve(path.dirname(file),name);
    const candidates=[stem,stem+'.tsx',stem+'.ts',stem+'.jsx',stem+'.js',stem+'.json',stem+'.css',path.join(stem,'index.ts'),path.join(stem,'index.tsx')];
    if(!candidates.some(exists)) failures.push(`Missing module ${path.relative(root,file)}: ${name}`);
  }
}
check(imports>100, `Local source imports resolved (${imports} imports)`);
const assets=walk(path.join(root,'public'),/\.(html|png|svg|xml|txt)$/);
const portfolio=assets.filter(f=>f.includes(`${path.sep}portfolio-documenti${path.sep}`)&&f.endsWith('.html'));
check(portfolio.length===20, '20 standalone portfolio documents exist');
const catalog=read('src/lib/portfolioData.ts');
const matchAll=[...catalog.matchAll(/url:\s*['"](\/portfolio-documenti\/[^'"]+\.html)['"]/g)];
check(matchAll.length===20, '20 portfolio catalog document paths declared');
for(const m of matchAll)if(!exists(path.join(root,'public',m[1].slice(1))))failures.push(`Missing portfolio asset ${m[1]}`);
const blog=read('src/lib/blogData.ts');
check(!/prenota (?:subito )?una (?:call|videochiamata) conoscitiva gratuita/i.test(blog),'No obsolete free-call CTAs in blog');
check(!blog.includes('href="/#contatti"'),'Blog CTA links do not point to the deprecated homepage anchor');
check(exists(path.join(root,'public','favicon.svg')) && read('index.html').includes('href="/favicon.svg"'),'Favicon self-hosted');
const route=read('src/App.tsx');
for (const p of ['/it/contatti','/fr/contact','/es/contacto','/contact','/it/esempi-di-lavoro','/fr/exemples-de-projets','/es/ejemplos-de-trabajo','/work-examples']) check(route.includes(`path="${p}"`), `Route ${p}`);
const jsonFiles=['package.json','vercel.json','tsconfig.json','tsconfig.app.json','tsconfig.node.json'];
for(const p of jsonFiles){if(!exists(path.join(root,p)))continue;try{
  if(p.startsWith('tsconfig')){const result=ts.parseConfigFileTextToJson(p,read(p));if(result.error)throw new Error(ts.flattenDiagnosticMessageText(result.error.messageText,' '));}
  else JSON.parse(read(p));
  checks.push(`Config valid: ${p}`);
}catch(e){failures.push(`Invalid configuration ${p}: ${e.message}`);}}
check(!route.includes('<DataProvider>')&&!route.includes('<PrivateWorkspace'),'Private workspace not mounted on public website');
check(read('firestore.rules').includes('allow read, write: if false'),'Public website Firestore rules deny all');
check(!exists(path.join(root,'data','users'))&&!exists(path.join(root,'data','public_requests.json')),'No local client records bundled');
if(failures.length){console.error(`RELEASE PREFLIGHT FAILED (${failures.length} issues):\n- ${failures.join('\n- ')}`);process.exitCode=1;}
else console.log(`PASS offline preflight: ${sources.length} TS/TSX sources; ${imports} local import references; ${portfolio.length} HTML portfolio documents; ${checks.length} checks passed. No build/network/email claim.`);
