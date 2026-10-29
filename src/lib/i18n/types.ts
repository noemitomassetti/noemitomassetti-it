export type Language = 'en' | 'it' | 'fr' | 'es';

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'it', 'fr', 'es'];

export type PageKey =
  | 'home'
  | 'services'
  | 'noetom'
  | 'about'
  | 'resources'
  | 'contact'
  | 'privacy'
  | 'cookie'
  | 'portfolio'
  | 'questionnaire'
  | 'italianLocalisation';

export interface RouteConfig {
  key: PageKey;
  paths: Record<Language, string>;
}

export interface NavItem {
  key: PageKey;
  label: string;
  href: string;
  badge?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  items: string[];
  deliverables?: string[];
  audience?: string;
}

export interface ProductizedPackage {
  id: string;
  title: string;
  badge: string;
  description: string;
  deliverables: string[];
  turnaround: string;
}

export interface NoeTomFeature {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'available' | 'in_development' | 'preview';
}

export interface BlogPostItem {
  id: string | number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
}

export interface TranslationDictionary {
  lang: Language;
  meta: {
    siteName: string;
    homeTitle: string;
    homeDesc: string;
    servicesTitle: string;
    servicesDesc: string;
    noetomTitle: string;
    noetomDesc: string;
    aboutTitle: string;
    aboutDesc: string;
    resourcesTitle: string;
    resourcesDesc: string;
    contactTitle: string;
    contactDesc: string;
    privacyTitle: string;
    privacyDesc: string;
    cookieTitle: string;
    cookieDesc: string;
  };
  nav: {
    home: string;
    services: string;
    portfolio?: string;
    noetom: string;
    about: string;
    resources: string;
    questionnaire?: string;
    contact: string;
    bookCall: string;
    getInTouch: string;
    language: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
    headline?: string;
    desc1?: string;
    desc2?: string;
    ctaButton?: string;
    callReassurance?: string;
    ctaServices: string;
    ctaNoeTom: string;
    quickStats: {
      experience: string;
      languages: string;
      focus: string;
    };
    callNote: string;
  };
  trust: {
    tagline: string;
    headline: string;
    paragraph: string;
    pillars: Array<{
      title: string;
      desc: string;
    }>;
  };
  servicesSection: {
    tag: string;
    title: string;
    subtitle: string;
    viewAllCta: string;
    categories: ServiceCategory[];
  };
  multilingualAdvantage: {
    tag: string;
    title: string;
    description: string;
    points: Array<{
      title: string;
      desc: string;
    }>;
    badgeNote: string;
  };
  productized: {
    tag: string;
    title: string;
    subtitle: string;
    packages: ProductizedPackage[];
    customScopeNote: string;
  };
  noetomTeaser: {
    tag: string;
    statusBadge: string;
    productName: string;
    tagline: string;
    emotionalPromise: string;
    description: string;
    featuresList: string[];
    ctaDiscover: string;
    ctaWaitlist: string;
  };
  noetomPage: {
    hero: {
      status: string;
      title: string;
      tagline: string;
      valueProp: string;
      emotionalQuote: string;
      author: string;
      ctaJoin: string;
    };
    whatItIsNot: {
      title: string;
      subtitle: string;
      items: Array<{
        bad: string;
        good: string;
      }>;
    };
    capabilities: {
      title: string;
      subtitle: string;
      radarTitle: string;
      radarDesc: string;
      features: NoeTomFeature[];
    };
    creatorStory: {
      tag: string;
      title: string;
      storyP1: string;
      storyP2: string;
      storyP3: string;
      signatureRole: string;
    };
    earlyAccessForm: {
      title: string;
      subtitle: string;
      nameLabel: string;
      emailLabel: string;
      professionLabel: string;
      painPointLabel: string;
      langLabel: string;
      gdprLabel: string;
      submitBtn: string;
      submitting: string;
      successTitle: string;
      successMsg: string;
      privacyNote: string;
    };
  };
  aboutSection: {
    tag: string;
    title: string;
    lead: string;
    bioParagraphs: string[];
    credentials: Array<{
      title: string;
      detail: string;
    }>;
    ctaReadMore: string;
  };
  aboutPage: {
    title: string;
    subtitle: string;
    storyTitle: string;
    storyParagraphs: string[];
    timeline: Array<{
      period: string;
      role: string;
      detail: string;
    }>;
    valuesTitle: string;
    values: Array<{
      title: string;
      desc: string;
    }>;
  };
  howWeWork: {
    tag: string;
    title: string;
    subtitle: string;
    steps: Array<{
      num: string;
      title: string;
      desc: string;
    }>;
  };
  contactSection: {
    tag: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      surname: string;
      email: string;
      company: string;
      serviceNeeded: string;
      serviceOptions: string[];
      preferredLanguage: string;
      message: string;
      gdpr: string;
      submit: string;
      sending: string;
      successTitle: string;
      successDesc: string;
      errorMsg: string;
    };
    directBooking: {
      title: string;
      desc: string;
      btnLabel: string;
      specs: string[];
    };
    directInfo: {
      email: string;
      phone: string;
      location: string;
    };
  };
  resourcesPage: {
    tag: string;
    title: string;
    subtitle: string;
    categories: string[];
    articles: BlogPostItem[];
  };
  footer: {
    brandBio: string;
    servicesTitle: string;
    noetomTitle: string;
    companyTitle: string;
    legalTitle: string;
    rights: string;
    disclaimer: string;
    cookiePrefs: string;
  };
}
