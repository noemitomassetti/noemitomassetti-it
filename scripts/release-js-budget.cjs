/**
 * Initial JavaScript budget for release: keep route-level lazy loading effective.
 * Asset sizes are measured from the final built dist/ entry file.
 */
const fs=require("node:fs");
const path=require("node:path");
const {gzipSync}=require("node:zlib");

const html=fs.readFileSync("dist/index.html","utf8");
const entry=html.match(/<script[^>]+src="\/(assets\/index-[^"]+\.js)"/);
if(!entry)throw Error("Unable to identify the application entry script");
const file=path.resolve("dist",entry[1]);
const data=fs.readFileSync(file);
const raw=data.length,compressed=gzipSync(data).length;
const maxRaw=600*1024,maxGzip=200*1024;
if(raw>maxRaw||compressed>maxGzip){
  throw Error("Initial JS budget exceeded: "+(raw/1024).toFixed(1)+
    " KB raw, "+(compressed/1024).toFixed(1)+" KB gzip; budget "+
    maxRaw/1024+"/"+maxGzip/1024+" KB.");
}
console.log("PASS initial JS bundle: "+(raw/1024).toFixed(1)+" KB raw, "+
  (compressed/1024).toFixed(1)+" KB gzip (budget 600/200 KB).");
