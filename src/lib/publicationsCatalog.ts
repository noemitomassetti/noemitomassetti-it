import type { Language } from "./i18n/types";

/**
 * The editorial section can be visible before any books are on sale.
 * Only published books with a manually verified Amazon product listing are
 * eligible for purchase links. A draft / KDP dashboard URL is never a listing.
 * The website does not process payments; customers check out on Amazon.
 */
export const PUBLICATIONS_VISIBLE = true;

export type PublicationStatus = "in_preparation" | "published";

export interface Publication {
  id: string;
  collection: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  /** Primary language of the book's editorial content. */
  language: Language;
  status: PublicationStatus;
  /** Approved public cover asset in /public, not a temporary mock-up. */
  coverPath?: string;
  /** Manually verified LIVE Amazon product URL, never a KDP draft URL. */
  amazonUrl?: string;
  /** Optional extract hosted after checking distribution rights. */
  samplePath?: string;
}

/**
 * Add a verified title after publication. Until then the page must remain a
 * truthful pre-launch presentation with no price or buy button.
 */
export const PUBLICATIONS: Publication[] = [];

/** Allow only real Amazon marketplaces and product paths; never arbitrary URLs. */
const AMAZON_MARKETPLACES = new Set([
  "amazon.it", "amazon.com", "amazon.co.uk", "amazon.fr", "amazon.es",
  "amazon.de", "amazon.ca", "amazon.com.au", "amazon.com.br", "amazon.co.jp",
  "amazon.in", "amazon.nl", "amazon.se", "amazon.pl", "amazon.com.mx",
]);

export function isAmazonBookUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.toLowerCase().replace(/^www\./, "");
    return parsed.protocol === "https:" &&
      parsed.username === "" &&
      parsed.password === "" &&
      AMAZON_MARKETPLACES.has(hostname) &&
      /\/(?:dp|gp\/product|gp\/aw\/d)\/[A-Z0-9]{10}(?:\/|$)/i.test(parsed.pathname);
  } catch {
    return false;
  }
}

export function getPublishedBooks(): Publication[] {
  return PUBLICATIONS.filter(book =>
    book.status === "published" &&
    typeof book.amazonUrl === "string" &&
    isAmazonBookUrl(book.amazonUrl)
  );
}
