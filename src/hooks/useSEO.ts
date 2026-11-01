import { useEffect } from "react";
import { BASE_DOMAIN, getHreflangAlternates, getLocalizedPath } from "@/lib/i18n/routes";
import type { Language, PageKey } from "@/lib/i18n/types";

export interface AlternateLink {
  hrefLang: string;
  href: string;
}

interface SEOProps {
  /** Used to produce the matching canonical/hreflang links on localized pages. */
  pageKey?: PageKey;
  currentLang?: Language;
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  ogLocale?: string;
  noindex?: boolean;
  alternates?: AlternateLink[];
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export const useSEO = ({
  pageKey,
  currentLang,
  title,
  description,
  canonical,
  ogImage = "/noemi-tomassetti.png",
  ogType = "website",
  ogLocale = "it_IT",
  noindex = false,
  alternates,
  schema,
}: SEOProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attr = property ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:locale", ogLocale, true);
    const absoluteOgImage = new URL(ogImage, "https://www.noemitomassetti.it").href;
    updateMetaTag("og:image", absoluteOgImage, true);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", absoluteOgImage);
    updateMetaTag("twitter:card", "summary_large_image");

    // Never override staging noindex with the page's default index setting.
    const hostname = window.location.hostname.toLowerCase();
    const isPublicHost = hostname === "www.noemitomassetti.it" || hostname === "noemitomassetti.it";
    updateMetaTag("robots", noindex || !isPublicHost ? "noindex, nofollow" : "index, follow");

    // Update canonical link. Older callers can supply canonical explicitly.
    const resolvedCanonical = canonical || (pageKey && currentLang
      ? `${BASE_DOMAIN}${getLocalizedPath(pageKey, currentLang)}`
      : undefined);
    if (resolvedCanonical) {
      let link = document.querySelector(`link[rel="canonical"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", resolvedCanonical);
      updateMetaTag("og:url", resolvedCanonical, true);
    }

    // Manage hreflang alternate links
    const defaultAlternates: AlternateLink[] = pageKey
      ? getHreflangAlternates(pageKey)
      : resolvedCanonical
      ? [
          { hrefLang: "it", href: resolvedCanonical },
          { hrefLang: "x-default", href: resolvedCanonical },
        ]
      : [];

    const effectiveAlternates = alternates && alternates.length > 0 ? alternates : defaultAlternates;

    // Remove existing hreflang tags to prevent duplicates
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());

    // Inject effective hreflang links
    effectiveAlternates.forEach((alt) => {
      const altLink = document.createElement("link");
      altLink.setAttribute("rel", "alternate");
      altLink.setAttribute("hreflang", alt.hrefLang);
      altLink.setAttribute("href", alt.href);
      document.head.appendChild(altLink);
    });

    // Update structured data (schema)
    let script = document.querySelector('script[type="application/ld+json"]');
    if (schema) {
      if (!script) {
        script = document.createElement("script");
        script.setAttribute("type", "application/ld+json");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    } else if (script) {
      script.remove();
    }
  }, [title, description, canonical, pageKey, currentLang, ogImage, ogType, ogLocale, noindex, alternates, schema]);
};
