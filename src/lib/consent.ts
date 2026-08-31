export const COOKIE_CONSENT_KEY = "cookie_consent_v1";

/**
 * Updates Google Consent Mode state and stores choice in localStorage
 */
export function updateGoogleConsent(state: "granted" | "denied") {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, state);
  } catch (e) {
    console.warn("Unable to save cookie consent preference to localStorage:", e);
  }

  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: state,
    });
  }
}

/**
 * Triggers reopening the cookie preference modal/banner
 */
export function openCookiePreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
  }
}
