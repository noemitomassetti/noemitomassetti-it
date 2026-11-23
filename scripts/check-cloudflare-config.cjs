#!/usr/bin/env node
'use strict';
const fs=require('node:fs');
const path=require('node:path');
const ts=require('typescript');
const root=path.resolve(__dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const exists=p=>fs.existsSync(path.join(root,p));
const parsed=ts.parseConfigFileTextToJson('wrangler.jsonc',read('wrangler.jsonc'));
if(parsed.error)throw new Error('Invalid Cloudflare Worker config: '+ts.flattenDiagnosticMessageText(parsed.error.messageText,' '));
const w=parsed.config;
const checks=[
  [w.workers_dev===false,'Workers.dev deployment disabled by default'],
  [w.assets?.directory==='./dist','Serves the existing SEO prerendered Vite output'],
  [w.assets?.html_handling==='drop-trailing-slash','Preserves existing no-trailing-slash canonical paths'],
  [w.assets?.run_worker_first?.length===1&&w.assets.run_worker_first[0]==='/api/*','Only API requests invoke paid-counted Worker logic'],
  [w.assets?.not_found_handling==='single-page-application','Unknown SPA routes fallback to React NotFound'],
  [!JSON.stringify(w).match(/API_KEY|authToken|access_token/i),'No provider keys in deploy config'],
  [read('cloudflare/worker.ts').includes('createConciergeGateway(env)'),'Cloudflare uses exactly the verified Vercel AI gateway'],
  [exists('dist/index.html'),'Build exists'],
  [exists('dist/_redirects')&&exists('dist/_headers'),'Cloudflare redirects and security headers generated'],
  [!read('dist/_redirects').includes(' /publications '),'Unpublished book section is not advertised'],
];
const cfg=JSON.parse(read('vercel.json'));
const redirects=(cfg.redirects||[]).map(v=>v.source+' '+v.destination+' '+(v.permanent?'301':'302'));
const actual=read('dist/_redirects');
checks.push([redirects.every(line=>actual.includes('\n'+line+'\n')),'All original Vercel legacy redirects preserved']);
const failed=checks.filter(([pass])=>!pass).map(x=>x[1]);
if(failed.length){console.error('Cloudflare offline QA failed: '+failed.join(' | '));process.exit(1);}
console.log('PASS Cloudflare offline configuration: '+checks.length+' conditions; '+redirects.length+' redirect rules; no deployment performed.');
