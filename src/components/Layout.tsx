import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/BookingButton";
import { DigitalConcierge } from "@/components/DigitalConcierge";
import { openCookiePreferences } from "@/lib/consent";
import {
  Language,
  SUPPORTED_LANGUAGES,
  getLanguageFromPath,
  getDictionary,
  getLocalizedPath,
  switchLanguageUrl,
} from "@/lib/i18n";

interface LayoutProps {
  children: React.ReactNode;
  lang?: Language;
}

export const BrandLogo = ({ className = "w-[180px] sm:w-[240px] h-auto" }: { className?: string }) => (
  <svg
    viewBox="0 0 240 46"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Noemi Tomassetti Virtual Assistant"
    role="img"
  >
    <title>Noemi Tomassetti - Virtual Assistant</title>
    <text
      x="0"
      y="28"
      fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
      fontWeight="600"
      fontSize="26"
      fill="hsl(27 58% 78%)"
      textLength="240"
      lengthAdjust="spacing"
    >
      Noemi Tomassetti
    </text>
    <text
      x="0"
      y="44"
      fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
      fontWeight="300"
      fontSize="9.5"
      fill="hsl(27 58% 78% / 0.75)"
      letterSpacing="4"
      textLength="240"
      lengthAdjust="spacing"
    >
      VIRTUAL ASSISTANT
    </text>
  </svg>
);

export const Layout = ({ children, lang: explicitLang }: LayoutProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentLang = explicitLang || getLanguageFromPath(location.pathname);
  const dict = getDictionary(currentLang);

  const homePath = getLocalizedPath("home", currentLang);
  const italianLocalisationPath = getLocalizedPath("italianLocalisation", currentLang);
  const portfolioPath = getLocalizedPath("portfolio", currentLang);
  const questionnairePath = getLocalizedPath("questionnaire", currentLang);
  const noetomPath = getLocalizedPath("noetom", currentLang);
  const resourcesPath = getLocalizedPath("resources", currentLang);
  const privacyPath = getLocalizedPath("privacy", currentLang);
  const cookiePath = getLocalizedPath("cookie", currentLang);

  const isHome =
    location.pathname === homePath ||
    location.pathname === "/" ||
    location.pathname === `/${currentLang}`;

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      if (isHome) {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
        }
      } else {
        navigate(`${homePath}${href}`);
      }
    }
  };

  const handleLangChange = (targetLang: Language) => {
    if (targetLang === currentLang) return;
    const newUrl = switchLanguageUrl(location.pathname, targetLang);
    navigate(newUrl);
    setMobileOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#chi-sono", label: currentLang === "it" ? "Chi Sono" : currentLang === "fr" ? "À Propos" : currentLang === "es" ? "Sobre Mí" : "About" },
    { href: "#servizi", label: currentLang === "it" ? "Servizi" : currentLang === "fr" ? "Services" : currentLang === "es" ? "Servicios" : "Services" },
    {
      href: italianLocalisationPath,
      label:
        currentLang === "it"
          ? "Localizzazione IT"
          : currentLang === "fr"
          ? "Localisation Italien"
          : currentLang === "es"
          ? "Localización Italiano"
          : "Italian Localisation",
      isPage: true,
      badge: currentLang === "it" ? undefined : "Flagship",
    },
    { href: portfolioPath, label: currentLang === "it" ? "Esempi di Lavoro" : currentLang === "fr" ? "Exemples de Projets" : currentLang === "es" ? "Ejemplos de Trabajo" : "Work Examples", isPage: true },
    { href: noetomPath, label: "NoeTom", isPage: true, badge: "AI" },
    { href: resourcesPath, label: currentLang === "it" ? "Risorse" : currentLang === "fr" ? "Ressources" : currentLang === "es" ? "Recursos" : "Resources", isPage: true },
    { href: "#contatti", label: currentLang === "it" ? "Contatti" : currentLang === "fr" ? "Contact" : currentLang === "es" ? "Contacto" : "Contact" },
  ];

  const vatLabel =
    currentLang === "it"
      ? "P. IVA 03050740426"
      : currentLang === "fr"
      ? "N° de TVA italienne 03050740426"
      : currentLang === "es"
      ? "NIF-IVA italiano 03050740426"
      : "Italian VAT No. 03050740426";

  const copyrightLabel =
    currentLang === "it"
      ? `© ${new Date().getFullYear()} Noemi Tomassetti · Virtual Assistant. Tutti i diritti riservati.`
      : currentLang === "fr"
      ? `© ${new Date().getFullYear()} Noemi Tomassetti · Assistante Virtuelle. Tous droits réservés.`
      : currentLang === "es"
      ? `© ${new Date().getFullYear()} Noemi Tomassetti · Asistente Virtual. Todos los derechos reservados.`
      : `© ${new Date().getFullYear()} Noemi Tomassetti · Virtual Assistant. All rights reserved.`;

  return (
    <div className="bg-background text-foreground font-sans flex flex-col min-h-screen overflow-x-clip relative selection:bg-primary/20 selection:text-primary">
      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
        <div className="container px-4 md:px-6 flex h-16 items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            to={homePath}
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex-shrink-0 group"
          >
            <BrandLogo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden 2xl:flex items-center gap-4 text-sm">
            {navLinks.map((item) => {
              if (item.isPage) {
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="relative text-foreground/80 hover:text-primary transition-colors font-medium flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.2 rounded bg-primary/20 text-primary border border-primary/30">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              }
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Header Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Social Icons (Desktop) */}
            <div className="hidden 2xl:flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary h-8 w-8"
              >
                <a
                  href="https://www.instagram.com/noemitomassetti_va"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary h-8 w-8"
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61588891083364"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Page"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary h-8 w-8"
              >
                <a
                  href="https://www.linkedin.com/in/noemi-tomassetti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Compact Language Selector: EN | IT | FR | ES */}
            <div className="hidden xl:flex items-center text-xs font-semibold tracking-wider text-muted-foreground px-1">
              {SUPPORTED_LANGUAGES.map((langCode, index) => (
                <span key={langCode} className="flex items-center">
                  {index > 0 && <span className="text-border/60 mx-1">|</span>}
                  <button
                    type="button"
                    onClick={() => handleLangChange(langCode)}
                    className={cn(
                      "uppercase px-1 py-0.5 transition-colors cursor-pointer",
                      currentLang === langCode
                        ? "text-primary font-bold"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                    aria-label={`Switch language to ${langCode.toUpperCase()}`}
                  >
                    {langCode}
                  </button>
                </span>
              ))}
            </div>

            {/* Written Quote Request CTA */}
            <BookingButton
              size="sm"
              lang={currentLang}
              aria-label={dict.nav.bookCall}
              className="hidden xl:inline-flex ml-1 text-xs px-4 py-2 rounded-full font-bold uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_15px_rgba(229,192,161,0.3)] transition-all duration-300 bg-primary text-primary-foreground"
            />

            {/* Mobile Hamburger Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="2xl:hidden text-foreground hover:text-primary h-9 w-9"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileOpen && (
          <div className="2xl:hidden border-t border-border/50 bg-background/98 backdrop-blur-md px-6 py-6 space-y-5 animate-in slide-in-from-top-3 duration-200">
            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-between pb-3 border-b border-border/40">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {dict.nav.language || "Lingua"}
              </span>
              <div className="flex items-center gap-1 bg-secondary/50 p-1 rounded-full">
                {SUPPORTED_LANGUAGES.map((langCode) => (
                  <button
                    key={langCode}
                    type="button"
                    onClick={() => handleLangChange(langCode)}
                    className={cn(
                      "px-2.5 py-1 text-xs font-bold rounded-full uppercase transition-colors",
                      currentLang === langCode
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {langCode}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col space-y-1">
              {navLinks.map((item) => {
                if (item.isPage) {
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between py-2 text-base font-medium text-foreground hover:text-primary transition-colors"
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-primary/20 text-primary border border-primary/30">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                }
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className="flex items-center justify-between py-2 text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            {/* Mobile Booking CTA */}
            <div className="pt-2">
              <BookingButton
                lang={currentLang}
                aria-label={dict.nav.bookCall}
                className="w-full py-5 rounded-md font-bold text-xs uppercase tracking-wider bg-primary text-primary-foreground shadow-md hover:scale-102 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                {dict.nav.bookCall}
              </BookingButton>
            </div>

            {/* Direct contact and socials in mobile drawer */}
            <div className="pt-4 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
              <a
                href="mailto:info@noemitomassetti.it"
                className="hover:text-primary transition-colors"
              >
                info@noemitomassetti.it
              </a>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.instagram.com/noemitomassetti_va"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61588891083364"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/noemi-tomassetti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="flex-1">{children}</main>

      {/* ── FOOTER (EXACT MATCH TO LIVE SITE) ── */}
      <footer className="border-t border-border/40 bg-card/60 text-foreground">
        <div className="container px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <Link to={homePath} className="inline-block group">
              <BrandLogo className="w-[200px] sm:w-[240px] h-auto" />
            </Link>
          </div>

          <address
            className="flex flex-col items-center md:items-end gap-2.5 not-italic text-center md:text-right"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <meta itemProp="name" content="Noemi Tomassetti Virtual Assistant" />
            <a
              href="mailto:info@noemitomassetti.it"
              itemProp="email"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 text-primary" />
              info@noemitomassetti.it
            </a>
            <a
              href="tel:+393884718600"
              itemProp="telephone"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 text-primary" />
              +39 388 471 8600
            </a>
            <div
              className="flex flex-col items-center md:items-end text-xs text-muted-foreground/80 leading-relaxed"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span>
                📍 <span itemProp="addressLocality">Castelfidardo</span> (
                <span itemProp="addressRegion">AN</span>)
              </span>
              <span>
                {currentLang === "it"
                  ? "Supporto da remoto in tutta Italia"
                  : currentLang === "fr"
                  ? "Accompagnement à distance en France et international"
                  : currentLang === "es"
                  ? "Soporte en remoto en España e internacional"
                  : "Remote support worldwide"}
              </span>
            </div>
            <p className="text-xs text-muted-foreground/80">{vatLabel}</p>

            <div className="flex items-center gap-2 mt-1">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary h-8 w-8"
              >
                <a
                  href="https://www.instagram.com/noemitomassetti_va"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profilo Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary h-8 w-8"
              >
                <a
                  href="https://www.facebook.com/profile.php?id=61588891083364"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Pagina Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-muted-foreground hover:text-primary h-8 w-8"
              >
                <a
                  href="https://www.linkedin.com/in/noemi-tomassetti/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Profilo LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </address>
        </div>

        <div className="border-t border-border/30 py-4 text-center text-xs text-muted-foreground space-y-2 px-4">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link to={italianLocalisationPath} className="hover:text-primary transition-colors font-medium">
              {currentLang === "it" ? "Localizzazione Italiano" : currentLang === "fr" ? "Localisation Italien" : currentLang === "es" ? "Localización Italiano" : "Italian Localisation"}
            </Link>
            <span className="opacity-30">|</span>
            <Link to={portfolioPath} className="hover:text-primary transition-colors">
              {currentLang === "it" ? "Esempi di Lavoro" : currentLang === "fr" ? "Exemples de Projets" : currentLang === "es" ? "Ejemplos de Trabajo" : "Work Examples"}
            </Link>
            <span className="opacity-30">|</span>
            <Link to={questionnairePath} className="hover:text-primary transition-colors">
              {currentLang === "it" ? "Questionario Operativo" : currentLang === "fr" ? "Questionnaire Opérationnel" : currentLang === "es" ? "Cuestionario Operativo" : "Assessment Questionnaire"}
            </Link>
            <span className="opacity-30">|</span>
            <Link to={privacyPath} className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <span className="opacity-30">|</span>
            <Link to={cookiePath} className="hover:text-primary transition-colors">
              Cookie Policy
            </Link>
            <span className="opacity-30">|</span>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="hover:text-primary transition-colors cursor-pointer"
            >
              {currentLang === "it"
                ? "Preferenze Cookie"
                : currentLang === "fr"
                ? "Préférences des cookies"
                : currentLang === "es"
                ? "Preferencias de cookies"
                : "Cookie Preferences"}
            </button>
          </div>
          <p>
            {copyrightLabel}
          </p>
        </div>
      </footer>

      {/* ── DIGITAL CONCIERGE GUIDED ASSISTANT ── */}
      <DigitalConcierge lang={currentLang} />
    </div>
  );
};
