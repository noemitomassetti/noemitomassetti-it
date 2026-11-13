import {describe,expect,it} from "vitest";
import {getBlogPosts} from "../lib/blogData";
import {BLOG_PHOTOGRAPHS} from "../lib/blogPhotography";
import {readFileSync} from "node:fs";
const LANGUAGES=["it","en","fr","es"] as const;

describe("Authentic and distinct blog photography",()=>{
 it("associates all 16 articles with distinct photographed assets, not anonymous illustration providers",()=>{
   const shots=Object.entries(BLOG_PHOTOGRAPHS);
   expect(shots).toHaveLength(16);
   const images=shots.map(([_,photo])=>new URL(photo.url).pathname);
   expect(new Set(images).size).toBe(16);
   for(const [id,photo] of shots){
     expect(Number(id)).toBeGreaterThan(0);
     const url=new URL(photo.url),source=new URL(photo.sourceUrl);
     expect(url.hostname).toBe("images.unsplash.com");
     expect(url.pathname).toMatch(/^\/photo-\d{13}-[a-z0-9]+$/);
     expect(source.hostname).toBe("unsplash.com");
     expect(source.pathname).toMatch(/^\/photos\/[a-z0-9-]+$/i);
     expect(photo.photographer.trim().length).toBeGreaterThanOrEqual(3);
     expect(photo.license).toBe("Unsplash License");
     expect(photo.url).not.toMatch(/\.svg|\.png|vibe\.filesafe|generated|placeholder|source\.unsplash/i);
     expect(new URL(photo.url).searchParams.get("q")).toBe("75");
   }
 });
 it("preserves the same original photograph but has correctly localized alt text in all languages",()=>{
   for(const lang of LANGUAGES){
     const posts=getBlogPosts(lang);
     expect(posts).toHaveLength(16);
     expect(new Set(posts.map(post=>post.image)).size).toBe(posts.length);
     for(const post of posts){
       const photo=BLOG_PHOTOGRAPHS[post.id];
       expect(post.image).toBe(photo.url);
       expect(post.alt).toBe(photo.alt[lang]);
       expect(post.photoCredit).toBe(photo.photographer);
       expect(post.photoSource).toBe(photo.sourceUrl);
       expect(post.alt.length).toBeGreaterThan(28);
     }
   }
 });
 it("shows image provenance and avoids the artificial-looking contain crop in the blog",()=>{
   const index=readFileSync("src/pages/Blog.tsx","utf8");
   const post=readFileSync("src/pages/BlogPost.tsx","utf8");
   expect(index).toContain("object-cover");
   expect(post).toContain("BLOG_PHOTO_ATTRIBUTION_LABEL");
   expect(post).toContain("photoSource");
   expect(post).toContain("photoCredit");
   expect(post).toContain("referrerPolicy=\"no-referrer\"");
 });
});
