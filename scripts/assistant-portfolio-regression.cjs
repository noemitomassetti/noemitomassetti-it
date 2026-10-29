/** Local-only test: text extraction, no browser/network/hosting. */
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const ts=require('typescript');
const root=path.resolve(__dirname,'..');
function loadTS(file){
 const src=fs.readFileSync(path.join(root,file),'utf8');
 const compiled=ts.transpileModule(src,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
 const module={exports:{}};vm.runInNewContext(compiled,{module,exports:module.exports,require(){throw new Error('unexpected import')}},{filename:file});return module.exports;
}
const {recognizeIntent}=loadTS('src/lib/concierge/intentRecognizer.ts');
const cases=[
 ['Ciao, posso chiedere una traduzione dal francese in italiano?', 'translation'],
 ['Vorrei gestire le email dei miei clienti', 'backoffice'],
 ['Can you help with customer care?', 'backoffice'],
 ['Je cherche une traduction en italien', 'translation'],
 ['Necesito una traducción al italiano', 'translation'],
 ['I need website content localisation', 'web'],
 ['Si può avere un pacchetto di assistenza?', undefined],
 ['Gestione ordini clienti e dati CRM', undefined],
 ['Mi serve la dichiarazione dei redditi', undefined],
 ['How much does translation cost?', undefined],
];
for(const [input,service] of cases){const x=recognizeIntent(input);assert.equal(x.serviceKey,service,`${input}: ${x.serviceKey}`);for(const l of ['it','en','fr','es'])assert.ok(x.explanation[l].length>35,`${l}: ${input}`)}
for(const input of ['fiscal returns for a client','voglio pagare l F24']) assert.equal(recognizeIntent(input).isScopeExcluded,true,input);
const assistant=fs.readFileSync(path.join(root,'src/components/DigitalConcierge.tsx'),'utf8');
assert.match(assistant,/Noemi’s Assistant/);assert.match(assistant,/Assistant de Noemi/);assert.match(assistant,/Asistente de Noemi/);
assert.match(assistant,/Risposte automatiche, non una chat con Noemi in diretta/);
const portfolio=fs.readFileSync(path.join(root,'src/lib/portfolioData.ts'),'utf8');
const links=[...portfolio.matchAll(/url:\s*"(\/portfolio-documenti\/[^"\n]+\.html)"/g)].map(m=>m[1]);
assert.equal(links.length,20);assert.equal(new Set(links).size,links.length);
for(const url of links){const doc=fs.readFileSync(path.join(root,'public'+url),'utf8');assert.match(doc,/<title>/i);assert.match(doc,/demo|dimostrativ|synthet|fittiz|fictif/i, url)}
const page=fs.readFileSync(path.join(root,'src/pages/Portfolio.tsx'),'utf8');assert.match(page,/\$\{PORTFOLIO_DOCUMENTS\.length\}/);
assert.doesNotMatch(page,/10 Documenti di Lavoro Dimostrativi/);
console.log(`PASS 12 intent examples, 4 language responses, assistant transparency & 20 portfolio documents`);
