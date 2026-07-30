import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Facebook, Mail, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/BookingButton";
import { useState, useEffect } from "react";

const mainLinks = [
  { href: "#home", label: "Home" },
  { href: "#chi-sono", label: "Chi Sono" },
  { href: "#servizi", label: "Servizi" },
  { href: "#collaborazione", label: "Modalità" },
  { href: "#faq", label: "FAQ" },
  { href: "#blog", label: "Blog" },
  { href: "/risorse", label: "Risorse" },
  { href: "#contatti", label: "Contatti" },
];

const NavLogo = () => (
  <svg viewBox="0 0 240 46" className="w-[180px] sm:w-[240px] h-auto" xmlns="http://www.w3.org/2000/svg" aria-label="Noemi Tomassetti" role="img">
    <title>Noemi Tomassetti</title>
    <text x="0" y="28" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="600" fontSize="26" fill="hsl(27 58% 78%)" textLength="240" lengthAdjust="spacing">Noemi Tomassetti</text>
    <text x="0" y="44" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="300" fontSize="9.5" fill="hsl(27 58% 78% / 0.75)" letterSpacing="4" textLength="240" lengthAdjust="spacing">VIRTUAL ASSISTANT</text>
  </svg>
);

const scrollToSection = (href: string) => {
  if (href.startsWith("#")) {
    const el = document.getElementById(href.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        scrollToSection(location.hash);
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileOpen(false);
      if (!isHome) {
        navigate({ pathname: "/", hash: href });
      } else {
        scrollToSection(href);
      }
    } else {
      setMobileOpen(false);
    }
  };

  return (
    <div className="bg-background text-foreground font-sans flex flex-col min-h-screen overflow-x-hidden relative">


      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 md:px-6 flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <a href="/#home" onClick={(e) => { e.preventDefault(); if (isHome) scrollToSection("#home"); else navigate({ pathname: "/", hash: "#home" }); }} className="shrink-0 block">
              <NavLogo />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex gap-4 items-center flex-1 justify-center">
            {mainLinks.map((link) => (
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={isHome ? link.href : "/" + link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="text-xs font-medium transition-colors hover:text-primary whitespace-nowrap text-muted-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-xs font-medium transition-colors hover:text-primary whitespace-nowrap text-muted-foreground"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Social icons + CTA + hamburger */}
          <div className="flex items-center gap-1 shrink-0">
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary h-9 w-9 hidden sm:flex">
              <a href="https://www.instagram.com/noemitomassetti_va" target="_blank" rel="noopener noreferrer" aria-label="Profilo Instagram"><Instagram className="h-4 w-4" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary h-9 w-9 hidden sm:flex">
              <a href="https://www.facebook.com/profile.php?id=61588891083364" target="_blank" rel="noopener noreferrer" aria-label="Pagina Facebook"><Facebook className="h-4 w-4" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary h-9 w-9 hidden sm:flex">
              <a href="https://www.linkedin.com/in/noemi-tomassetti/" target="_blank" rel="noopener noreferrer" aria-label="Profilo LinkedIn"><Linkedin className="h-4 w-4" /></a>
            </Button>
            {/* CTA — desktop only */}
            <BookingButton
              size="sm"
              aria-label="Prenota Call Conoscitiva"
              className="hidden lg:inline-flex ml-2 text-xs px-4 py-2 rounded-full font-bold uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_15px_rgba(229,192,161,0.3)] transition-all duration-300"
            >
              PRENOTA CALL
            </BookingButton>
            {/* Hamburger for mobile / tablet */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-muted-foreground hover:text-primary h-9 w-9"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileOpen && (
          <nav className="lg:hidden border-t border-border/40 bg-background/98 backdrop-blur py-4 px-6 flex flex-col gap-1">
            {mainLinks.map((link) => (
              link.href.startsWith("#") ? (
                <a
                  key={link.href}
                  href={isHome ? link.href : "/" + link.href}
                  onClick={(e) => handleNavClick(link.href, e)}
                  className="py-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors border-b border-border/20 last:border-0"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors border-b border-border/20 last:border-0"
                >
                  {link.label}
                </Link>
              )
            ))}
            {/* CTA in mobile menu */}
            <BookingButton
              aria-label="Prenota Call Conoscitiva"
              className="mt-4 py-6 rounded-full font-bold text-base uppercase tracking-wider"
              onClick={() => setMobileOpen(false)}
            >
              PRENOTA CALL
            </BookingButton>
            {/* Social in mobile menu */}
            <div className="flex gap-2 pt-3">
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary h-9 w-9">
                <a href="https://www.instagram.com/noemitomassetti_va" target="_blank" rel="noopener noreferrer" aria-label="Profilo Instagram"><Instagram className="h-4 w-4" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary h-9 w-9">
                <a href="https://www.facebook.com/profile.php?id=61588891083364" target="_blank" rel="noopener noreferrer" aria-label="Pagina Facebook"><Facebook className="h-4 w-4" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary h-9 w-9">
                <a href="https://www.linkedin.com/in/noemi-tomassetti/" target="_blank" rel="noopener noreferrer" aria-label="Profilo LinkedIn"><Linkedin className="h-4 w-4" /></a>
              </Button>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border/40 bg-card/60 text-foreground">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <NavLogo />
          </div>

          {/* Contatti & social */}
          <address className="flex flex-col items-center md:items-end gap-3 not-italic" itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="Noemi Tomassetti Virtual Assistant" />
            <a href="mailto:info@noemitomassetti.it" itemProp="email" className="flex items-center gap-2 text-base md:text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              info@noemitomassetti.it
            </a>
            <a href="tel:+393884718600" itemProp="telephone" className="flex items-center gap-2 text-base md:text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              +39 388 471 8600
            </a>
            <div className="flex flex-col items-center md:items-end text-sm md:text-xs text-muted-foreground/70 leading-relaxed" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span>📍 <span itemProp="addressLocality">Castelfidardo</span> (<span itemProp="addressRegion">AN</span>)</span>
              <span>Supporto da remoto in tutta Italia</span>
            </div>
            <p className="text-sm md:text-xs text-muted-foreground/70">P. IVA 03050740426</p>
            <div className="flex items-center gap-2 mt-1">
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary h-8 w-8">
                <a href="https://www.instagram.com/noemitomassetti_va" target="_blank" rel="noopener noreferrer" aria-label="Profilo Instagram"><Instagram className="h-4 w-4" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary h-8 w-8">
                <a href="https://www.facebook.com/profile.php?id=61588891083364" target="_blank" rel="noopener noreferrer" aria-label="Pagina Facebook"><Facebook className="h-4 w-4" /></a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-primary h-8 w-8">
                <a href="https://www.linkedin.com/in/noemi-tomassetti/" target="_blank" rel="noopener noreferrer" aria-label="Profilo LinkedIn"><Linkedin className="h-4 w-4" /></a>
              </Button>
            </div>
          </address>
        </div>

        {/* Copyright + legal */}
        <div className="border-t border-border/30 py-4 text-center text-sm md:text-xs text-muted-foreground space-y-2">
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <span className="opacity-30">|</span>
            <Link to="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </div>
          <p>© {new Date().getFullYear()} Noemi Tomassetti — Virtual Assistant. Oltre 25 anni di esperienza amministrativa.<br />Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
};
