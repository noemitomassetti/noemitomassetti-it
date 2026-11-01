import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { BookingButton } from "@/components/BookingButton";
import { ContactForm } from "@/components/ContactForm";
import { PricingSection } from "@/components/PricingSection";
import {
  Language,
  getLanguageFromPath,
  getDictionary,
  getHreflangAlternates,
  getLocalizedPath,
} from "@/lib/i18n";
import {
  Mail,
  Globe,
  PenTool,
  Search,
  Cpu,
  Layout as LayoutIcon,
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const SERVICE_ID_TO_INDEX: Record<string, number> = {
  "virtual-assistance": 0,
  "translation-localization": 1,
  "content-writing": 2,
  "online-research": 3,
  "digital-support": 4,
  "web-landing": 5,
};

export default function ServicesPage() {
  const location = useLocation();
  const lang = getLanguageFromPath(location.pathname);
  const dict = getDictionary(lang);
  const s = dict.servicesSection;
  const p = dict.productized;
  const canonicalUrl = `https://www.noemitomassetti.it${getLocalizedPath("services", lang)}`;

  useSEO({
    title: dict.meta.servicesTitle,
    description: dict.meta.servicesDesc,
    canonical: canonicalUrl,
    alternates: getHreflangAlternates("services"),
    ogType: "website",
  });

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "virtual-assistance":
        return Mail;
      case "translation-localization":
        return Globe;
      case "content-writing":
        return PenTool;
      case "online-research":
        return Search;
      case "digital-support":
        return Cpu;
      case "web-landing":
        return LayoutIcon;
      default:
        return CheckCircle2;
    }
  };

  const [selectedService, setSelectedService] = useState<string>("");
  const locationState = location.state as { quoteDraft?: string; serviceId?: string } | null;

  const handleRequestService = (catId: string) => {
    const idx = SERVICE_ID_TO_INDEX[catId];
    const serviceName =
      typeof idx === "number" && dict.contactSection.form.serviceOptions[idx]
        ? dict.contactSection.form.serviceOptions[idx]
        : "";

    setSelectedService(serviceName);

    // Smooth scroll to the written contact/quote form
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Gentle focus on message field to allow seamless quote details entry
    setTimeout(() => {
      const messageField = document.getElementById("form-message");
      if (messageField) {
        messageField.focus();
      }
    }, 450);
  };

  // Sync selectedService from URL parameter (e.g. ?service=translation-localization)
  // and handle smooth scrolling on both desktop and mobile
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const serviceParam = searchParams.get("service");

    if (serviceParam && serviceParam in SERVICE_ID_TO_INDEX) {
      const idx = SERVICE_ID_TO_INDEX[serviceParam];
      const serviceName =
        typeof idx === "number" && dict.contactSection.form.serviceOptions[idx]
          ? dict.contactSection.form.serviceOptions[idx]
          : "";

      if (serviceName) {
        setSelectedService(serviceName);
      }
    }

    if (location.hash === "#contact-section" || serviceParam) {
      const timer = setTimeout(() => {
        const contactSection = document.getElementById("contact-section");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [location.search, location.hash, lang, dict]);

  return (
    <Layout lang={lang}>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-border/40">
        <div className="container max-w-5xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{s.tag}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {s.title}
          </h1>

          <p className="text-base sm:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-8">
            {s.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookingButton
              size="lg"
              className="w-full sm:w-auto px-8 py-6 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-md"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {dict.nav.bookCall}
            </BookingButton>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto px-8 py-6 rounded-full font-semibold text-sm"
            >
              <a href="#contact-section">
                {dict.nav.getInTouch}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── DETAILED SERVICES BREAKDOWN ── */}
      <section className="py-16 md:py-24 border-b border-border/40">
        <div className="container max-w-6xl px-4 sm:px-6">
          {/* International Market Highlight Banner */}
          <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5" />
                <span>
                  {lang === "it"
                    ? "Mercato Estero & Internazionale"
                    : "Italian localisation for international clients"}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                {lang === "it"
                  ? "Sei un'azienda estera che deve comunicare o vendere in Italia?"
                  : "Reaching Italian customers? EN/FR → IT localisation"}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
                {lang === "it"
                  ? "Scopri il nostro servizio di punta dedicato alla localizzazione culturale, traduzione specialistica e post-editing AI (MTPE) verso l'italiano."
                  : "Discover our dedicated flagship service: Specialist Translation, Cultural Localization, and AI MTPE for international businesses."}
              </p>
            </div>
            <Button asChild className="rounded-full shrink-0 font-semibold text-xs uppercase tracking-wider">
              <Link to={getLocalizedPath("italianLocalisation", lang)}>
                <span>{lang === "it" ? "Scopri la Localizzazione IT" : "View Italian Localisation"}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {s.categories.map((cat) => {
              const IconComponent = getServiceIcon(cat.id);
              const macroTag =
                cat.id === "virtual-assistance"
                  ? (lang === "it" ? "Macroarea 1 · Back Office" : "Macroarea 1 · Back Office")
                  : cat.id === "digital-support"
                  ? (lang === "it" ? "Macroarea 2 · Customer Care Scritto" : "Macroarea 2 · Written Care")
                  : cat.id === "translation-localization"
                  ? (lang === "it" ? "Macroarea 3 · Traduzione & Localizzazione" : "Macroarea 3 · Translation & Localisation")
                  : cat.id === "content-writing"
                  ? (lang === "it" ? "Macroarea 3 · Scrittura & Revisione" : "Macroarea 3 · Copy & Revision")
                  : cat.id === "online-research"
                  ? (lang === "it" ? "Capacità Trasversale · Desk Research" : "Core Skill · Desk Research")
                  : (lang === "it" ? "Supporto Tecnico · Valutazione su richiesta" : "Technical · Evaluated on request");

              return (
                <div
                  key={cat.id}
                  id={cat.id}
                  className="bg-card border border-border/60 rounded-2xl p-7 flex flex-col justify-between hover:border-primary/50 transition-all shadow-sm hover:shadow-md group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border/40">
                        {macroTag}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {cat.title}
                      </h2>
                      <p className="text-xs font-semibold text-primary/85 mt-1">
                        {cat.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {cat.description}
                    </p>

                    <div className="pt-2 border-t border-border/40">
                      <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        {lang === "it"
                          ? "Cosa include:"
                          : lang === "fr"
                          ? "Exemples de réalisations :"
                          : lang === "es"
                          ? "Qué incluye:"
                          : "What is included:"}
                      </p>
                      <ul className="space-y-2">
                        {cat.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 mt-4 border-t border-border/30">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRequestService(cat.id)}
                      className="w-full text-xs font-semibold text-primary hover:bg-primary/10 justify-between px-2 transition-colors cursor-pointer"
                    >
                      <span>
                        {lang === "it"
                          ? "Richiedi questo servizio"
                          : lang === "fr"
                          ? "Demander ce service"
                          : lang === "es"
                          ? "Solicitar este servicio"
                          : "Inquire about this service"}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRODUCTIZED PACKAGES ── */}
      <section className="py-16 md:py-24 bg-secondary/15 border-b border-border/40">
        <div className="container max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>{p.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              {p.title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {p.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {p.packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-card border border-border/60 rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:border-primary/40 transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {pkg.badge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{pkg.turnaround}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground">{pkg.title}</h3>
                  <p className="text-sm text-foreground/80 leading-relaxed">{pkg.description}</p>

                  <div className="pt-3 border-t border-border/40">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                      {lang === "it"
                        ? "Risultati previsti:"
                        : lang === "fr"
                        ? "Livrables prévus :"
                        : lang === "es"
                        ? "Entregables previstos:"
                        : "Expected deliverables:"}
                    </p>
                    <ul className="space-y-2">
                      {pkg.deliverables.map((d, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/40">
                  <BookingButton
                    className="w-full py-5 rounded-xl font-bold text-xs uppercase tracking-wider"
                  >
                    {dict.nav.bookCall}
                  </BookingButton>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
            {p.customScopeNote}
          </p>
        </div>
      </section>

      {/* ── TRANSPARENT REFERENCE PRICING ── */}
      <PricingSection lang={lang} />

      {/* ── CONTACT & BOOKING SECTION ── */}
      <section id="contact-section" className="py-16 md:py-24 scroll-mt-12">
        <div className="container max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7">
              <ContactForm lang={lang} selectedService={selectedService} initialMessage={locationState?.quoteDraft} />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {dict.contactSection.directBooking.title}
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  {dict.contactSection.directBooking.desc}
                </p>

                <ul className="space-y-2 mb-6">
                  {dict.contactSection.directBooking.specs.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <BookingButton
                  className="w-full py-6 rounded-xl font-bold text-xs uppercase tracking-wider"
                >
                  {dict.contactSection.directBooking.btnLabel}
                </BookingButton>
              </div>

              <div className="bg-secondary/20 border border-border/40 rounded-2xl p-6 text-xs text-muted-foreground space-y-2">
                <p className="font-semibold text-foreground">
                  {lang === "it"
                    ? "Informativa sull'ambito delle prestazioni:"
                    : "Scope and compliance disclosure:"}
                </p>
                <p className="leading-relaxed">
                  {dict.footer.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
