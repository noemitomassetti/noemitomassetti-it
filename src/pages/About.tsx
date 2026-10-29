import { useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { BookingButton } from "@/components/BookingButton";
import {
  Language,
  getLanguageFromPath,
  getDictionary,
  getHreflangAlternates,
  getLocalizedPath,
} from "@/lib/i18n";
import {
  GraduationCap,
  Briefcase,
  Globe,
  Sparkles,
  CheckCircle2,
  Calendar,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const location = useLocation();
  const lang = getLanguageFromPath(location.pathname);
  const dict = getDictionary(lang);
  const a = dict.aboutPage;
  const sec = dict.aboutSection;
  const canonicalUrl = `https://www.noemitomassetti.it${getLocalizedPath("about", lang)}`;

  useSEO({
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDesc,
    canonical: canonicalUrl,
    alternates: getHreflangAlternates("about"),
    ogType: "website",
  });

  return (
    <Layout lang={lang}>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-border/40">
        <div className="container max-w-5xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{sec.tag}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            {a.title}
          </h1>

          <p className="text-base sm:text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-8">
            {a.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookingButton
              size="lg"
              className="w-full sm:w-auto px-8 py-6 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-md"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {dict.nav.bookCall}
            </BookingButton>
          </div>
        </div>
      </section>

      {/* ── BIO & STORY ── */}
      <section className="py-16 md:py-24 border-b border-border/40">
        <div className="container max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Visual avatar / card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-card border border-border/60 rounded-3xl p-6 sm:p-8 shadow-sm">
                <img
                  src="/noemi-tomassetti.png"
                  alt="Noemi Tomassetti - Assistente Virtuale"
                  width="96"
                  height="96"
                  loading="eager"
                  decoding="async"
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-primary/30 shadow-md mb-6"
                />
                <h2 className="text-2xl font-bold text-foreground">Noemi Tomassetti</h2>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary mt-1">
                  {dict.hero.badge}
                </p>

                <div className="pt-6 mt-6 border-t border-border/40 space-y-3">
                  {sec.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-bold text-foreground">{cred.title}</p>
                        <p className="text-xs text-muted-foreground">{cred.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location & European scope */}
              <div className="bg-secondary/20 border border-border/40 rounded-2xl p-6 text-xs text-muted-foreground space-y-2">
                <p className="font-semibold text-foreground">
                  Castelfidardo (AN), Marche, Italia
                </p>
                <p className="leading-relaxed">
                  {lang === "it"
                    ? "Collaborazione da remoto su misura per professionisti, formatori e aziende in Italia e in tutta l'Unione Europea."
                    : "Tailored remote collaboration for professionals, educators, and boutique businesses across Europe."}
                </p>
              </div>
            </div>

            {/* Story text */}
            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                {a.storyTitle}
              </h3>
              {a.storyParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-16 md:py-24 bg-secondary/15 border-b border-border/40">
        <div className="container max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 text-center">
            {lang === "it" ? "Il percorso in sintesi" : "Key Milestones"}
          </h2>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-border/60">
            {a.timeline.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 group"
              >
                <div className="md:w-1/2 md:text-right pr-6 pl-10 md:pl-0">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary block">
                    {item.period}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-0.5">{item.role}</h3>
                </div>

                <div className="absolute left-2.5 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                <div className="md:w-1/2 pl-10 md:pl-6">
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed bg-card p-4 rounded-xl border border-border/50 shadow-sm">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE PRINCIPLES & VALUES ── */}
      <section className="py-16 md:py-24">
        <div className="container max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {a.valuesTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {a.values.map((v, i) => (
              <div
                key={i}
                className="bg-card border border-border/60 rounded-2xl p-7 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <BookingButton
              size="lg"
              className="px-8 py-6 rounded-full font-bold text-sm uppercase tracking-wider shadow-md"
            >
              <Calendar className="w-4 h-4 mr-2" />
              {dict.nav.bookCall}
            </BookingButton>
          </div>
        </div>
      </section>
    </Layout>
  );
}
