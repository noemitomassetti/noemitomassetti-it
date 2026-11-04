import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  COOKIE_CONSENT_KEY,
  GA_MEASUREMENT_ID,
  getStoredConsent,
  initConsent,
  loadGoogleAnalyticsScript,
  removeGoogleAnalyticsScript,
  trackPageView,
  updateGoogleConsent,
} from "@/lib/consent";

describe("Consent & Google Analytics dynamic loading", () => {
  beforeEach(() => {
    localStorage.clear();
    const existing = document.getElementById("ga-gtag-script");
    if (existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
    }
    // Reset dataLayer
    window.dataLayer = [];
    delete window.gtag;
  });

  afterEach(() => {
    localStorage.clear();
    const existing = document.getElementById("ga-gtag-script");
    if (existing && existing.parentNode) {
      existing.parentNode.removeChild(existing);
    }
  });

  it("does not load script and returns null when no consent has been stored", () => {
    expect(getStoredConsent()).toBeNull();
    const state = initConsent();
    expect(state).toBeNull();
    expect(document.getElementById("ga-gtag-script")).toBeNull();
  });

  it("does not load script when consent is explicitly denied", () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "denied");
    const state = initConsent();
    expect(state).toBe("denied");
    expect(document.getElementById("ga-gtag-script")).toBeNull();
  });

  it("dynamically loads script when user grants consent", () => {
    updateGoogleConsent("granted");
    expect(localStorage.getItem(COOKIE_CONSENT_KEY)).toBe("granted");
    expect(getStoredConsent()).toBe("granted");

    const script = document.getElementById("ga-gtag-script") as HTMLScriptElement | null;
    expect(script).not.toBeNull();
    expect(script?.src).toContain(`googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`);
    expect(script?.async).toBe(true);
  });

  it("is idempotent when loading Google Analytics script multiple times", () => {
    loadGoogleAnalyticsScript();
    loadGoogleAnalyticsScript();
    const scripts = document.querySelectorAll("#ga-gtag-script");
    expect(scripts.length).toBe(1);
  });

  it("removes script tag and updates consent mode when user revokes or declines consent", () => {
    // First grant
    updateGoogleConsent("granted");
    expect(document.getElementById("ga-gtag-script")).not.toBeNull();

    // Now revoke / decline
    updateGoogleConsent("denied");
    expect(localStorage.getItem(COOKIE_CONSENT_KEY)).toBe("denied");
    expect(getStoredConsent()).toBe("denied");
    expect(document.getElementById("ga-gtag-script")).toBeNull();
  });

  it("only tracks page views if consent is granted", () => {
    let calledArgs: unknown[] = [];
    window.gtag = (...args: unknown[]) => {
      calledArgs = args;
    };

    // When denied
    updateGoogleConsent("denied");
    calledArgs = []; // reset spy after updateGoogleConsent
    trackPageView("/it/servizi");
    expect(calledArgs.length).toBe(0);

    // When granted
    updateGoogleConsent("granted");
    calledArgs = []; // reset spy before trackPageView
    trackPageView("/it/servizi", "Servizi");
    expect(calledArgs[0]).toBe("event");
    expect(calledArgs[1]).toBe("page_view");
    expect((calledArgs[2] as { page_path: string }).page_path).toBe("/it/servizi");
  });
});
