import type { Language } from "./i18n/types";
import { getLocalizedPath } from "./i18n/routes";
const SUBPATH: Record<Language,string> = { it:"esempio", en:"sample", fr:"exemple", es:"ejemplo" };
export function getPortfolioDocumentPath(num:string,lang:Language):string {
  if(!/^\d{2}$/.test(num)) return getLocalizedPath("portfolio",lang);
  return getLocalizedPath("portfolio",lang)+"/"+SUBPATH[lang]+"/"+num;
}
export function getPortfolioDocumentNum(pathname:string):string|null {
  const match=pathname.match(/\/(?:sample|esempio|exemple|ejemplo)\/(\d{2})\/?$/);
  return match?.[1]??null;
}
