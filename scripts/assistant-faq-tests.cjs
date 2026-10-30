const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const ts=require('typescript');
const source=fs.readFileSync(require('node:path').join(__dirname,'../src/lib/concierge/intentRecognizer.ts'),'utf8');
const clean=source.replace(/^import\s+[^;]+;\s*$/gm,'');
const js=ts.transpileModule(clean,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
const fakeModule={exports:{}};vm.runInNewContext(js,{module:fakeModule,exports:fakeModule.exports,console});
const recognize=fakeModule.exports.recognizeIntent;
const cases=[
 ['Quali lingue parli?', 'it', 'B2'],
 ['Which languages do you work in?', 'en','Italian'],
 ['Quelles langues proposez-vous?', 'fr','italien'],
 ['¿Qué idiomas ofreces?', 'es','italiano'],
 ['Siete disponibili h24?', 'it','fuori orario'],
 ['Available 24/7?', 'en','online'],
 ['Come funziona il servizio?', 'it','preventivo scritto'],
 ['Do you have a portfolio?', 'en','fictional data'],
 ['Quali sono le modalità di pagamento?', 'it','pagamento anticipato'],
 ['Quanto costa il servizio?', 'it','stima indicativa'],
 ['Vorrei la dichiarazione dei redditi', 'it','non fornisce'],
 ['Can you build a website?', 'en','not a standard listed service'],
 ['Vorrei tradurre una brochure dal francese in italiano','it','Traduzione'],
];
for(const [query,lang,needle] of cases){const r=recognize(query);assert.ok(r.explanation[lang].includes(needle),`${query}: ${r.explanation[lang]}`);}
console.log(`PASS ${cases.length} assistant FAQ and service scope tests`);
