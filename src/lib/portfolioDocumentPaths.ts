import type { Language } from "./i18n/types";
const ROOT: Record<Language,string> = {it:"/it/esempi-di-lavoro",en:"/work-examples",fr:"/fr/exemples-de-projets",es:"/es/ejemplos-de-trabajo"};
const SUBPATH: Record<Language,string> = { it:"esempio", en:"sample", fr:"exemple", es:"ejemplo" };
export function getPortfolioDocumentPath(num:string,lang:Language):string {
  if(!/^\d{2}$/.test(num)) return ROOT[lang];
  return ROOT[lang]+"/"+SUBPATH[lang]+"/"+num;
}
export function getPortfolioDocumentNum(pathname:string):string|null {
  const match=pathname.match(/\/(?:sample|esempio|exemple|ejemplo)\/(\d{2})\/?$/);
  return match?.[1]??null;
}
