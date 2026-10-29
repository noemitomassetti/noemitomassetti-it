import { Language, PageKey, RouteConfig } from './types';

export const BASE_DOMAIN = 'https://www.noemitomassetti.it';

export const ROUTES: Record<PageKey, RouteConfig> = {
  home: {
    key: 'home',
    paths: {
      en: '/',
      it: '/it',
      fr: '/fr',
      es: '/es',
    },
  },
  services: {
    key: 'services',
    paths: {
      en: '/services',
      it: '/it/servizi',
      fr: '/fr/services',
      es: '/es/servicios',
    },
  },
  noetom: {
    key: 'noetom',
    paths: {
      en: '/noetom',
      it: '/it/noetom',
      fr: '/fr/noetom',
      es: '/es/noetom',
    },
  },
  about: {
    key: 'about',
    paths: {
      en: '/about',
      it: '/it/chi-sono',
      fr: '/fr/a-propos',
      es: '/es/sobre-mi',
    },
  },
  resources: {
    key: 'resources',
    paths: {
      en: '/resources',
      it: '/it/risorse',
      fr: '/fr/ressources',
      es: '/es/recursos',
    },
  },
  contact: {
    key: 'contact',
    paths: {
      en: '/contact',
      it: '/it/contatti',
      fr: '/fr/contact',
      es: '/es/contacto',
    },
  },
  privacy: {
    key: 'privacy',
    paths: {
      en: '/privacy-policy',
      it: '/it/privacy-policy',
      fr: '/fr/politique-de-confidentialite',
      es: '/es/politica-de-privacidad',
    },
  },
  cookie: {
    key: 'cookie',
    paths: {
      en: '/cookie-policy',
      it: '/it/cookie-policy',
      fr: '/fr/politique-de-cookies',
      es: '/es/politica-de-cookies',
    },
  },
  portfolio: {
    key: 'portfolio',
    paths: {
      en: '/work-examples',
      it: '/it/esempi-di-lavoro',
      fr: '/fr/exemples-de-projets',
      es: '/es/ejemplos-de-trabajo',
    },
  },
  questionnaire: {
    key: 'questionnaire',
    paths: {
      en: '/professional-research',
      it: '/it/ricerca-professionisti',
      fr: '/fr/recherche-professionnels',
      es: '/es/investigacion-profesionales',
    },
  },
  italianLocalisation: {
    key: 'italianLocalisation',
    paths: {
      en: '/italian-localisation',
      it: '/it/localizzazione-italiano',
      fr: '/fr/localisation-italien',
      es: '/es/localizacion-italiano',
    },
  },
};

/**
 * Identify the current language from the URL pathname.
 */
export function getLanguageFromPath(pathname: string): Language {
  const normalized = pathname.toLowerCase();
  if (normalized === '/it' || normalized.startsWith('/it/')) return 'it';
  if (normalized === '/fr' || normalized.startsWith('/fr/')) return 'fr';
  if (normalized === '/es' || normalized.startsWith('/es/')) return 'es';
  return 'en';
}

/**
 * Identify the PageKey from the current pathname.
 */
export function getPageKeyFromPath(pathname: string): PageKey {
  const clean = pathname.replace(/\/+$/, '') || '/';
  
  for (const config of Object.values(ROUTES)) {
    for (const p of Object.values(config.paths)) {
      const matchPath = p.replace(/\/+$/, '') || '/';
      if (clean === matchPath) {
        return config.key;
      }
    }
  }

  // Check prefix or partial match
  if (clean.includes('esempi-di-lavoro') || clean.includes('work-examples') || clean.includes('exemples-de-projets') || clean.includes('ejemplos-de-trabajo') || clean.includes('portfolio')) return 'portfolio';
  if (clean.includes('ricerca-professionisti') || clean.includes('professional-research') || clean.includes('recherche-professionnels') || clean.includes('investigacion-profesionales')) return 'questionnaire';
  if (clean.includes('servizi') || clean.includes('services') || clean.includes('servicios')) return 'services';
  if (clean.includes('noetom')) return 'noetom';
  if (clean.includes('chi-sono') || clean.includes('about') || clean.includes('a-propos') || clean.includes('sobre-mi')) return 'about';
  if (clean.includes('risorse') || clean.includes('resources') || clean.includes('ressources') || clean.includes('recursos') || clean.includes('blog')) return 'resources';
  if (clean.includes('contatt') || clean.includes('contact')) return 'contact';
  if (clean.includes('privacy') || clean.includes('confidentialite') || clean.includes('privacidad')) return 'privacy';
  if (clean.includes('cookie')) return 'cookie';

  return 'home';
}

/**
 * Get the exact localized path for a page and language.
 */
export function getLocalizedPath(pageKey: PageKey, lang: Language): string {
  return ROUTES[pageKey]?.paths[lang] || (lang === 'en' ? '/' : `/${lang}`);
}

/**
 * Generate hreflang alternates array for useSEO hook.
 */
export function getHreflangAlternates(pageKey: PageKey): Array<{ hrefLang: string; href: string }> {
  const config = ROUTES[pageKey];
  if (!config) return [];

  return [
    { hrefLang: 'en', href: `${BASE_DOMAIN}${config.paths.en}` },
    { hrefLang: 'it', href: `${BASE_DOMAIN}${config.paths.it}` },
    { hrefLang: 'fr', href: `${BASE_DOMAIN}${config.paths.fr}` },
    { hrefLang: 'es', href: `${BASE_DOMAIN}${config.paths.es}` },
    { hrefLang: 'x-default', href: `${BASE_DOMAIN}${config.paths.en}` },
  ];
}

/**
 * Switch from current path to the corresponding target language path.
 */
export function switchLanguageUrl(currentPathname: string, targetLang: Language): string {
  const pageKey = getPageKeyFromPath(currentPathname);
  return getLocalizedPath(pageKey, targetLang);
}
