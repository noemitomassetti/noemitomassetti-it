import type { Language } from "./i18n/types";

/**
 * Future Amazon KDP catalogue. Keep this false until real book listings,
 * accurate descriptions, cover permissions and purchase links are approved.
 * When enabled, this automatically shows the four-language publication page
 * in the navigation and footer; routes already exist for each language.
 */
export const PUBLICATIONS_VISIBLE = false;

export type PublicationStatus = "in_preparation" | "published";

export interface Publication {
  id: string;
  collection: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  language: Language;
  status: PublicationStatus;
  /** Approved public cover asset in /public, not a temporary design. */
  coverPath?: string;
  /** Verified public Amazon book listing, not an unpublished KDP draft URL. */
  amazonUrl?: string;
  /** Optional extract hosted on this site after rights and content review. */
  samplePath?: string;
}

/** Add each verified ebook here when available; never show invented listings. */
export const PUBLICATIONS: Publication[] = [];

export function getPublishedBooks(): Publication[] {
  return PUBLICATIONS.filter(book =>
    book.status === "published" &&
    typeof book.amazonUrl === "string" &&
    /^https:\/\/(?:www\.)?amazon\.[a-z.]+\//i.test(book.amazonUrl)
  );
}
