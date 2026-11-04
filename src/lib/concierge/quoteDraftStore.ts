import { QuoteDraft } from './types';

const STORAGE_KEY = 'noetom_concierge_quote_draft';

// In-memory cache for fast, zero-side-effect retrieval during single-page transitions
let inMemoryDraft: QuoteDraft | null = null;

/**
 * Saves a confirmed quote draft temporarily.
 * Uses in-memory storage and safe browser sessionStorage as a fallback across route transitions.
 * Does NOT persist long-term or leak data to external trackers.
 */
export function saveQuoteDraft(draft: QuoteDraft): void {
  inMemoryDraft = draft;
  if (typeof window !== 'undefined' && window.sessionStorage) {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    } catch {
      // In case private browsing blocks storage access, inMemoryDraft remains active
    }
  }
}

/**
 * Retrieves the pending quote draft if present.
 */
export function getQuoteDraft(): QuoteDraft | null {
  if (inMemoryDraft) {
    return inMemoryDraft;
  }

  if (typeof window !== 'undefined' && window.sessionStorage) {
    try {
      const stored = window.sessionStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as QuoteDraft;
        inMemoryDraft = parsed;
        return parsed;
      }
    } catch {
      return null;
    }
  }

  return null;
}

/**
 * Clears the temporary quote draft after consumption or upon explicit user reset.
 */
export function clearQuoteDraft(): void {
  inMemoryDraft = null;
  if (typeof window !== 'undefined' && window.sessionStorage) {
    try {
      window.sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  }
}
