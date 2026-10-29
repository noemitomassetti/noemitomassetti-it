import { useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { openCookiePreferences } from "@/lib/consent";
import { useSEO } from "@/hooks/useSEO";
import {
  Language,
  getLanguageFromPath,
  getLocalizedPath,
  getHreflangAlternates,
} from "@/lib/i18n";

const COOKIE_CONTENT = {
  it: {
    title: "Informativa sui Cookie",
    seoTitle: "Cookie Policy | Noemi Tomassetti Assistente Virtuale",
    seoDesc: "Informativa estesa sull'uso dei cookie ai sensi del Provvedimento del Garante Privacy e del GDPR. Gestisci le tue preferenze di navigazione.",
    subtitle: "Informativa estesa ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR — Ultimo aggiornamento: Settembre 2026",
    sections: {
      ownerTitle: "1. Titolare del Trattamento",
      ownerRole: "Virtual Assistant / Translator — Libera professionista",
      vatLabel: "P. IVA 03050740426",
      headquarters: "Castelfidardo (AN), Marche, Italia",
      whatAreTitle: "2. Cosa sono i Cookie?",
      whatAreDesc: "I cookie sono piccoli file di testo che i siti web visitati inviano al terminale dell'utente (computer, tablet, smartphone), dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva. I cookie consentono al sito di riconoscere il dispositivo dell'utente e di conservare informazioni sulle sue preferenze o azioni passate.",
      typesTitle: "3. Tipologie di Cookie Utilizzati da Questo Sito",
      techTitle: "Cookie Tecnici (Necessari)",
      techDesc: "Questi cookie sono strettamente necessari al funzionamento del sito e alla sicurezza della navigazione. Non richiedono il consenso preventivo dell'utente.",
      analyticsTitle: "Cookie Analitici (con consenso)",
      analyticsDesc: "Questo sito utilizza Google Analytics 4 (Measurement ID: G-LQZF73ZS1S) con anonimizzazione dell'indirizzo IP e supporto a Google Consent Mode v2. Raccolgono statistiche di utilizzo; Google può trattare identificativi online e dati tecnici, anche personali. Tali cookie vengono attivati esclusivamente previo consenso esplicito, sempre revocabile.",
      preferencesBtn: "Modifica Preferenze Cookie",
      thirdPartyTitle: "Cookie di Terze Parti",
      thirdPartyDesc: "Il sito contiene link a profili social professionali esterni (LinkedIn, Instagram, Facebook). Ciascuna piattaforma applica la propria policy sui cookie.",
      manageTitle: "4. Come Gestire e Disabilitare i Cookie dal Browser",
      manageDesc: "È sempre possibile bloccare o rimuovere i cookie configurando le opzioni di riservatezza del proprio browser:",
      browsers: ["Google Chrome", "Mozilla Firefox", "Apple Safari", "Microsoft Edge"],
      privacyLinkPrefix: "Per maggiori dettagli sul trattamento dei dati personali, consulta la nostra",
    },
  },
  en: {
    title: "Cookie Policy",
    seoTitle: "Cookie Policy | Noemi Tomassetti Virtual Assistant",
    seoDesc: "Detailed cookie policy under EU GDPR and Italian Data Protection guidelines. Learn about cookies used and manage your tracking preferences.",
    subtitle: "Under European GDPR regulations and Italian Data Protection Authority Guidelines — Last updated: September 2026",
    sections: {
      ownerTitle: "1. Data Controller",
      ownerRole: "Virtual Assistant & Specialist Translator — Sole Proprietor",
      vatLabel: "Italian VAT No. 03050740426",
      headquarters: "Castelfidardo (AN), Marche, Italy",
      whatAreTitle: "2. What are Cookies?",
      whatAreDesc: "Cookies are small text files sent to your browser by websites you visit. They help the website remember information about your visit, which can make it easier to visit the site again and make the site more useful to you.",
      typesTitle: "3. Types of Cookies Used on This Website",
      techTitle: "Technical Cookies (Essential)",
      techDesc: "These cookies are strictly required for core website features, session stability, and security. They do not require prior consent.",
      analyticsTitle: "Analytics Cookies (Consent-Based)",
      analyticsDesc: "We use Google Analytics 4 (Measurement ID: G-LQZF73ZS1S) with IP anonymisation and full Google Consent Mode v2 compliance. Google may process online identifiers and technical usage data, including personal data. They are activated only with your affirmative consent, which you can adjust or withdraw at any time.",
      preferencesBtn: "Change Cookie Preferences",
      thirdPartyTitle: "Third-Party Platforms",
      thirdPartyDesc: "Our website includes outbound links to professional social platforms (LinkedIn, Instagram, Facebook). Each respective service operates under its own privacy and cookie rules.",
      manageTitle: "4. Managing Cookies via Browser Settings",
      manageDesc: "You can also manage or block cookies through your browser settings:",
      browsers: ["Google Chrome", "Mozilla Firefox", "Apple Safari", "Microsoft Edge"],
      privacyLinkPrefix: "For full information regarding personal data protection, please see our",
    },
  },
  fr: {
    title: "Politique des Cookies",
    seoTitle: "Politique des Cookies | Noemi Tomassetti Assistante Virtuelle",
    seoDesc: "Politique d'utilisation des traceurs conformément au RGPD et aux directives européennes. Gérez vos préférences de navigation.",
    subtitle: "Conformément au RGPD et aux directives des autorités de protection des données — Dernière mise à jour : Septembre 2026",
    sections: {
      ownerTitle: "1. Responsable du Traitement",
      ownerRole: "Assistante Virtuelle & Traductrice Spécialisée — Professionnelle Indépendante",
      vatLabel: "N° de TVA italienne 03050740426",
      headquarters: "Castelfidardo (AN), Marches, Italie",
      whatAreTitle: "2. Qu'est-ce qu'un Cookie ?",
      whatAreDesc: "Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette ou mobile) lors de la visite d'un site. Il permet de conserver des données d'usage et d'optimiser votre navigation.",
      typesTitle: "3. Catégories de Cookies Utilisés",
      techTitle: "Cookies Techniques (Nécessaires)",
      techDesc: "Indispensables au fonctionnement sécurisé et fluide de la plateforme. Ils ne requièrent pas de consentement préalable.",
      analyticsTitle: "Cookies d'Audience et de Mesure (Sur consentement)",
      analyticsDesc: "Ce site utilise Google Analytics 4 (Measurement ID: G-LQZF73ZS1S) avec anonymisation d'IP et intégration du Consent Mode v2. Ces traceurs permettent de mesurer l'audience à l’aide de données techniques susceptibles d’être personnelles, uniquement après acceptation de votre part.",
      preferencesBtn: "Modifier les Préférences Cookies",
      thirdPartyTitle: "Services Tiers",
      thirdPartyDesc: "Des liens renvoient vers nos profils sur les réseaux sociaux (LinkedIn, Instagram, Facebook). Ces tiers disposent de leurs propres chartes de confidentialité.",
      manageTitle: "4. Gestion des Cookies via votre Navigateur",
      manageDesc: "Vous pouvez à tout moment configurer votre navigateur pour autoriser ou refuser l'enregistrement de traceurs :",
      browsers: ["Google Chrome", "Mozilla Firefox", "Apple Safari", "Microsoft Edge"],
      privacyLinkPrefix: "Pour en savoir plus sur la protection de vos données, consultez notre",
    },
  },
  es: {
    title: "Política de Cookies",
    seoTitle: "Política de Cookies | Noemi Tomassetti Asistente Virtual",
    seoDesc: "Información detallada sobre el uso de cookies conforme al RGPD y la normativa europea. Configura tus preferencias de privacidad.",
    subtitle: "Conforme al RGPD y a las directrices de protección de datos — Última actualización: Septiembre de 2026",
    sections: {
      ownerTitle: "1. Responsable del Tratamiento",
      ownerRole: "Asistente Virtual & Traductora Especializada — Profesional Autónoma",
      vatLabel: "NIF-IVA italiano 03050740426",
      headquarters: "Castelfidardo (AN), Marcas, Italia",
      whatAreTitle: "2. ¿Qué son las Cookies?",
      whatAreDesc: "Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo (ordenador, tableta o teléfono móvil) para recordar información de navegación y optimizar la experiencia de uso.",
      typesTitle: "3. Tipos de Cookies Utilizadas",
      techTitle: "Cookies Técnicas (Estrictamente necesarias)",
      techDesc: "Son indispensables para el correcto funcionamiento del sitio web y la seguridad de la navegación. No requieren consentimiento previo.",
      analyticsTitle: "Cookies de Medición y Analítica (Con consentimiento)",
      analyticsDesc: "Este sitio web utiliza Google Analytics 4 (Measurement ID: G-LQZF73ZS1S) con anonimización de direcciones IP y compatibilidad con Google Consent Mode v2. Permiten analizar de forma estadística y anónima la interacción con las páginas, activándose únicamente tras tu consentimiento explícito.",
      preferencesBtn: "Modificar Preferencias de Cookies",
      thirdPartyTitle: "Servicios de Terceros",
      thirdPartyDesc: "El sitio incluye enlaces a perfiles en redes sociales (LinkedIn, Instagram, Facebook). Cada plataforma gestiona sus propias políticas de privacidad y cookies.",
      manageTitle: "4. Cómo Gestionar las Cookies en tu Navegador",
      manageDesc: "Puedes configurar tu navegador en cualquier momento para aceptar, rechazar o eliminar las cookies instaladas:",
      browsers: ["Google Chrome", "Mozilla Firefox", "Apple Safari", "Microsoft Edge"],
      privacyLinkPrefix: "Para más información sobre el tratamiento de tus datos, consulta nuestra",
    },
  },
};

export default function CookiePolicy() {
  const location = useLocation();
  const lang: Language = getLanguageFromPath(location.pathname);
  const t = COOKIE_CONTENT[lang] || COOKIE_CONTENT.en;
  const canonicalUrl = `https://www.noemitomassetti.it${getLocalizedPath("cookie", lang)}`;
  const privacyPath = getLocalizedPath("privacy", lang);

  useSEO({
    title: t.seoTitle,
    description: t.seoDesc,
    canonical: canonicalUrl,
    alternates: getHreflangAlternates("cookie"),
    ogType: "website",
  });

  return (
    <Layout lang={lang}>
      <div className="container py-16 md:py-24 max-w-4xl px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
          {t.title}
        </h1>
        <p className="text-foreground/60 text-sm mb-12">
          {t.subtitle}
        </p>

        <div className="space-y-12 text-foreground/85 leading-relaxed">
          {/* Section 1: Controller */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.sections.ownerTitle}
            </h2>
            <div className="bg-card border border-border rounded-xl p-6 space-y-1.5 text-sm shadow-sm">
              <p>
                <strong className="text-primary">Titolare / Controller:</strong> Noemi Tomassetti
              </p>
              <p>
                <strong className="text-primary">Attività / Role:</strong> {t.sections.ownerRole}
              </p>
              <p>
                <strong className="text-primary">Identità Fiscale:</strong> {t.sections.vatLabel}
              </p>
              <p>
                <strong className="text-primary">Email:</strong>{" "}
                <a href="mailto:info@noemitomassetti.it" className="text-primary hover:underline font-medium">
                  info@noemitomassetti.it
                </a>
              </p>
              <p>
                <strong className="text-primary">Sede / Location:</strong> {t.sections.headquarters}
              </p>
            </div>
          </section>

          {/* Section 2: What are Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.sections.whatAreTitle}
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {t.sections.whatAreDesc}
            </p>
          </section>

          {/* Section 3: Types of cookies */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {t.sections.typesTitle}
            </h2>
            <div className="space-y-6">
              {/* Technical */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="bg-primary/20 text-primary border border-primary/30 text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {lang === "it" ? "Tecnici" : "Technical"}
                  </span>
                  <h3 className="font-bold text-foreground text-base">
                    {t.sections.techTitle}
                  </h3>
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  {t.sections.techDesc}
                </p>
              </div>

              {/* Analytics with Preference Button */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {lang === "it" ? "Analitici" : "Analytics"}
                    </span>
                    <h3 className="font-bold text-foreground text-base">
                      {t.sections.analyticsTitle}
                    </h3>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={openCookiePreferences}
                    className="text-xs font-semibold"
                  >
                    {t.sections.preferencesBtn}
                  </Button>
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed">
                  {t.sections.analyticsDesc}
                </p>
              </div>

              {/* Third-Party */}
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="bg-muted text-muted-foreground text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {lang === "it" ? "Terze parti" : "Third Parties"}
                  </span>
                  <h3 className="font-bold text-foreground text-base">
                    {t.sections.thirdPartyTitle}
                  </h3>
                </div>
                <p className="text-sm text-foreground/75 leading-relaxed mb-4">
                  {t.sections.thirdPartyDesc}
                </p>
                <div className="flex flex-wrap gap-4 text-xs">
                  <a
                    href="https://www.linkedin.com/legal/cookie-policy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    LinkedIn Cookie Policy →
                  </a>
                  <a
                    href="https://privacycenter.instagram.com/policy"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    Instagram Cookie Policy →
                  </a>
                  <a
                    href="https://www.facebook.com/policy/cookies/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    Facebook Cookie Policy →
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Browser Settings */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.sections.manageTitle}
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed mb-4">
              {t.sections.manageDesc}
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {t.sections.browsers.map((b, idx) => (
                <li
                  key={idx}
                  className="bg-secondary/30 border border-border/50 rounded-lg p-3 text-xs font-semibold text-center text-foreground"
                >
                  {b}
                </li>
              ))}
            </ul>
          </section>

          {/* Cross-link to Privacy */}
          <section className="bg-muted/30 border border-border rounded-xl p-6">
            <p className="text-sm text-foreground/80">
              {t.sections.privacyLinkPrefix}{" "}
              <a href={privacyPath} className="text-primary font-bold hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
