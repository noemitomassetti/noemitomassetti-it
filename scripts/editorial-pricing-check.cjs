/** Offline consistency checks; deliberately not a browser or production test. */
const fs = require('fs'); const path = require('path'); const assert = require('node:assert/strict');
const ts = require('typescript'); const vm = require('node:vm');
const root=path.resolve(__dirname,'..');
function loadTS(relative) {
  const filepath=path.join(root,relative); const input=fs.readFileSync(filepath,'utf8');
  const compiled=ts.transpileModule(input,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
  const module={exports:{}};const ctx={module,exports:module.exports,require:(x)=>{throw new Error(`unexpected require ${x}`)}};
  vm.runInNewContext(compiled,ctx,{filename:relative});return module.exports;
}
const locales=['it','en','fr','es']; const pricing=loadTS('src/lib/pricingData.ts'); const data=pricing.PRICING_DATA;
assert.equal(data.categories.length,3);assert.deepEqual(Array.from(data.categories.map(x=>x.id)),['va','support','trans']);
for(const lang of locales){
  const dict=loadTS(`src/lib/i18n/locales/${lang}.ts`)[`${lang}Locale`];assert(dict);
  assert.equal(dict.servicesSection.categories.length,6);
  assert.equal(dict.productized.packages.length,4);
  assert.equal(dict.productized.packages[0].id,'p1');
  assert.match(data.categories[0].rate[lang],/25/);
  assert.match(data.categories[0].items[lang].join(' '),/125/);
  assert.match(data.categories[0].items[lang].join(' '),/240/);
  assert.match(data.categories[0].items[lang].join(' '),/460/);
  assert.match(data.categories[2].rate[lang],/0[.,]09/);
  assert(!dict.productized.packages.some(x=>/guaranteed|garantiti|garantizado|garanti/i.test(x.turnaround)));
  assert(dict.servicesSection.categories.find(x=>x.id==='web-landing').description.length > 80);
  assert(data.disclaimer[lang].length>120);
  console.log(`PASS locale ${lang}: 6 service briefs, 4 scoped cases, 3 price cards`);
}
const appCalcPath=path.join(process.env.NOETOM_APP_ROOT || path.resolve(root,'../app'),'server/pricingCalculator.ts');
if(!fs.existsSync(appCalcPath)){console.log('SKIP cross-project pricing check: NoeTom source not supplied');process.exit(0)}
const appCalc=fs.readFileSync(appCalcPath,'utf8');
assert.match(appCalc,/hourlyConsultingRate: 25\.00/);assert.match(appCalc,/translationPerWord: 0\.09/);assert.match(appCalc,/revisionPerWord: 0\.03/);
assert.match(appCalc,/hours === 5 \? 125 : hours === 10 \? 240 : 460/);
console.log('PASS site and NoeTom pricing alignment (source checks)');
