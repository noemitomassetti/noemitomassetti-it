import { useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { ContactForm } from "@/components/ContactForm";
import { BookingButton } from "@/components/BookingButton";
import {
  Language,
  getLanguageFromPath,
  getDictionary,
  getHreflangAlternates,
  getLocalizedPath,
} from "@/lib/i18n";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const location = useLocation();
  const lang = getLanguageFromPath(location.pathname);
  const dict = getDictionary(lang);
  const c = dict.contactSection;
  const canonicalUrl = `https://www.noemitomassetti.it${getLocalizedPath("contact", lang)}`;

  useSEO({
    title: dict.meta.contactTitle,
    description: dict.meta.contactDesc,
    canonical: canonicalUrl,
    alternates: getHreflangAlternates("contact"),
    ogType: "website",
  });

  return (
    <Layout lang={lang}>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-12 pb-14 md:pt-18 md:pb-20 border-b border-border/40">
        <div className="container max-w-5xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{c.tag}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {c.title}
          </h1>

          <p className="text-base sm:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            {c.subtitle}
          </p>
        </div>
      </section>

      {/* ── WRITTEN REQUEST FORM ── */}
      <section id="contact-section" className="py-14 md:py-22">
        <div className="container max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm lang={lang} />
            </div>

            {/* Written request guidance and contact details */}
            <div className="lg:col-span-5 space-y-6">
              {/* Written quote guidance */}
              <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                  <Calendar className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {c.directBooking.title}
                </h3>
                <p className="text-sm text-foreground/80 leading-relaxed mb-6">
                  {c.directBooking.desc}
                </p>

                <ul className="space-y-2.5 mb-6">
                  {c.directBooking.specs.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/85">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <BookingButton
                  lang={lang}
                  className="w-full py-6 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  {c.directBooking.btnLabel}
                </BookingButton>
              </div>

              {/* Direct Info Card */}
              <div className="bg-card border border-border/60 rounded-2xl p-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
                  {lang === "it"
                    ? "Recapiti diretti"
                    : lang === "fr"
                    ? "Coordonnées directes"
                    : lang === "es"
                    ? "Datos de contacto"
                    : "Direct Contact"}
                </h4>

                <div className="space-y-3 text-sm text-foreground/80">
                  <a
                    href={`mailto:${c.directInfo.email}`}
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <span>{c.directInfo.email}</span>
                  </a>
                  <a
                    href="tel:+393884718600"
                    className="flex items-center gap-3 hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <span>{c.directInfo.phone}</span>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span className="leading-relaxed">{c.directInfo.location}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 text-xs text-muted-foreground">
                  <p>P. IVA: 03050740426</p>
                  <p className="mt-1">
                    {lang === "it"
                      ? "Rispondo personalmente alle richieste scritte compatibilmente con gli incarichi in corso."
                      : lang === "fr"
                      ? "Je réponds personnellement aux demandes écrites selon mes disponibilités."
                      : lang === "es"
                      ? "Respondo personalmente a las solicitudes escritas según mi disponibilidad."
                      : "I personally review written enquiries and reply according to availability."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
