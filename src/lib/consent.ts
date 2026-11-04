export const COOKIE_CONSENT_KEY = "cookie_consent_v1";
export const GA_MEASUREMENT_ID = "G-LQZF73ZS1S";

const SCRIPT_ID = "ga-gtag-script";

export type ConsentState = "granted" | "denied";

/**
 * Returns current user consent stored in localStorage, or null if undecided.
 */
export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const val = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (val === "granted" || val === "denied") {
      return val;
    }
  } catch (e) {
    console.warn("Unable to read cookie consent preference from localStorage:", e);
  }
  return null;
}

/**
 * Dynamically injects Google Analytics script tag into document head.
 * Idempotent: will not inject multiple copies.
 */
export function loadGoogleAnalyticsScript(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  // Ensure gtag and dataLayer exist
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    window.gtag = function (...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }

  // Check if script tag is already in DOM
  const existing = document.getElementById(SCRIPT_ID);
  if (!existing) {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  // Update consent & configure GA4 with IP anonymization
  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false, // SPA handles page views explicitly
  });
}

/**
 * Removes Google Analytics script tag and deletes Google Analytics cookies (_ga, _gid, etc.).
 */
export function removeGoogleAnalyticsScript(): void {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  // Inform gtag consent mode is denied
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: "denied",
    });
  }

  // Remove script tag from DOM
  const scriptNode = document.getElementById(SCRIPT_ID);
  if (scriptNode && scriptNode.parentNode) {
    scriptNode.parentNode.removeChild(scriptNode);
  }

  // Clean up GA cookies on current hostname and root domain
  try {
    const cookies = document.cookie.split(";");
    const hostParts = window.location.hostname.split(".");
    const domainsToClear = [
      "",
      window.location.hostname,
      `.${window.location.hostname}`,
    ];

    if (hostParts.length > 2) {
      const rootDomain = hostParts.slice(-2).join(".");
      domainsToClear.push(rootDomain, `.${rootDomain}`);
    }

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
      if (name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name === "_gat") {
        for (const domain of domainsToClear) {
          const domainAttr = domain ? `; domain=${domain}` : "";
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domainAttr}`;
        }
      }
    }
  } catch (e) {
    console.warn("Unable to clear analytics cookies:", e);
  }
}

/**
 * Updates Google Consent Mode state, stores choice in localStorage,
 * and dynamically loads or removes the Google Analytics script tag.
 */
export function updateGoogleConsent(state: ConsentState): void {
  try {
    localStorage.setItem(COOKIE_CONSENT_KEY, state);
  } catch (e) {
    console.warn("Unable to save cookie consent preference to localStorage:", e);
  }

  if (state === "granted") {
    loadGoogleAnalyticsScript();
  } else {
    removeGoogleAnalyticsScript();
  }
}

/**
 * Initializes consent on page load.
 * If user already granted consent in a previous visit, loads GA script.
 * If user declined or hasn't decided, does NOT request GA script over the network.
 */
export function initConsent(): ConsentState | null {
  const current = getStoredConsent();
  if (current === "granted") {
    loadGoogleAnalyticsScript();
  } else if (current === "denied") {
    removeGoogleAnalyticsScript();
  }
  return current;
}

/**
 * Tracks a page view in GA4 if analytics consent is granted.
 * Safe to call on every client-side route change in SPA.
 */
export function trackPageView(path: string, title?: string): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (getStoredConsent() !== "granted") return;

  window.gtag("event", "page_view", {
    page_path: path,
    page_title: title || (typeof document !== "undefined" ? document.title : ""),
    page_location: window.location.href,
  });
}

/**
 * Triggers reopening the cookie preference modal/banner
 */
export function openCookiePreferences(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-cookie-preferences"));
  }
}
