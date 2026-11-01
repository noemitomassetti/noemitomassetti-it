const ts=require('typescript');
const fs=require('fs'),path=require('path'),assert=require('assert/strict');
const base=path.resolve(__dirname,'..');let n=0;const errors=[];
function all(dir){for (const x of fs.readdirSync(dir,{withFileTypes:true})){const f=path.join(dir,x.name);if(x.isDirectory())all(f);else if(/\.tsx?$/.test(f)){n++;const content=fs.readFileSync(f,'utf8');const sf=ts.createSourceFile(f,content,ts.ScriptTarget.Latest,true,f.endsWith('tsx')?ts.ScriptKind.TSX:ts.ScriptKind.TS);for(const e of sf.parseDiagnostics)errors.push([f,e.messageText]);}}}
all(path.join(base,'src'));all(path.join(base,'server'));for(const f of ['server.ts','vite.config.ts','vitest.config.ts']){const fp=path.join(base,f);n++;const sf=ts.createSourceFile(fp,fs.readFileSync(fp,'utf8'),ts.ScriptTarget.Latest,true,ts.ScriptKind.TS);for(const e of sf.parseDiagnostics)errors.push([f,e.messageText]);}
const app=fs.readFileSync(path.join(base,'src/App.tsx'),'utf8');assert(!app.includes('<DataProvider>'));assert(!app.includes('PrivateWorkspace'));assert(!app.includes('import Workspace from'));
const noe=fs.readFileSync(path.join(base,'src/pages/NoeTom.tsx'),'utf8');assert(!noe.includes('<NoeTomEarlyAccessForm'));assert(!noe.includes('isAvailable ? "Ready"'));const rules=fs.readFileSync(path.join(base,'firestore.rules'),'utf8');assert(rules.includes('allow read, write: if false'));assert(!rules.includes('allow create:'));
for(const fn of ['vercel.json','package.json'])JSON.parse(fs.readFileSync(path.join(base,fn),'utf8'));
if(errors.length) {console.error(errors);process.exitCode=1;}else console.log(`PASS: ${n} TS/TSX source files parse successfully; public-only guards, rules and JSON are valid.`);
