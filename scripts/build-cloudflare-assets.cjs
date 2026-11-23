#!/usr/bin/env node
'use strict';
/**
 * Safe offline Cloudflare static assets preparation.
 * This DOES NOT deploy, create an account, purchase anything or change DNS.
 */
const fs=require('node:fs');
const path=require('node:path');
const root=path.resolve(__dirname,'..');
const dist=path.join(root,'dist');
if(!fs.existsSync(path.join(dist,'index.html'))) {
  console.error('Run npm run build before preparing Cloudflare assets.');
  process.exit(1);
}
const vercel=JSON.parse(fs.readFileSync(path.join(root,'vercel.json'),'utf8'));
const redirects=(vercel.redirects||[]).map(rule=>{
  if(typeof rule.source!=='string'||typeof rule.destination!=='string'||!rule.source.startsWith('/')||!rule.destination.startsWith('/')) {
    throw new Error('Unsafe legacy redirect entry.');
  }
  return rule.source+' '+rule.destination+' '+(rule.permanent?'301':'302');
});
const redirectDoc=['# NoeTom legacy redirects migrated from vercel.json',...redirects,''].join('\n');
fs.writeFileSync(path.join(dist,'_redirects'),redirectDoc,'utf8');
const headers=[
  '/*',
  '  X-Content-Type-Options: nosniff',
  '  Referrer-Policy: strict-origin-when-cross-origin',
  '  X-Frame-Options: SAMEORIGIN',
  '  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()',
  '',
  '/assets/*',
  '  Cache-Control: public, max-age=31536000, immutable',
  '',
].join('\n');
fs.writeFileSync(path.join(dist,'_headers'),headers,'utf8');
console.log('PASS: Cloudflare assets generated: '+redirects.length+' legacy redirects, static security headers; no deployment.');
