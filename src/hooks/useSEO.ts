import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  ogLocale?: string;
  noindex?: boolean;
  schema?: Record<string, any> | Record<string, any>[];
}

export const useSEO = ({
  title,
  description,
  canonical,
  ogImage = "https://vibe.filesafe.space/1776423224485175331/attachments/bbb7dfc5-9986-426b-b55f-1df8c6232a6b.jpg",
  ogType = "website",
  ogLocale = "it_IT",
  noindex = false,
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
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);
    updateMetaTag("twitter:card", "summary_large_image");

    if (noindex) {
      updateMetaTag("robots", "noindex, nofollow");
    } else {
      updateMetaTag("robots", "index, follow");
    }

    // Update canonical link
    if (canonical) {
      let link = document.querySelector(`link[rel="canonical"]`);
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
      updateMetaTag("og:url", canonical, true);
    }

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
  }, [title, description, canonical, ogImage, ogType, noindex, schema]);
};
