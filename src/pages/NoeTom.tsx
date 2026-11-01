import { useLocation, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";

import {
  Language,
  getLanguageFromPath,
  getDictionary,
  getHreflangAlternates,
  getLocalizedPath,
} from "@/lib/i18n";
import {
  Sparkles,
  Radar,
  Brain,
  Clock,
  CheckCheck,
  Send,
  Coins,
  Mic,
  HelpCircle,
  XCircle,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Layers,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NoeTomPage() {
  const location = useLocation();
  const lang = getLanguageFromPath(location.pathname);
  const dict = getDictionary(lang);
  const p = dict.noetomPage;
  const canonicalUrl = `https://www.noemitomassetti.it${getLocalizedPath("noetom", lang)}`;

  useSEO({
    title: dict.meta.noetomTitle,
    description: dict.meta.noetomDesc,
    canonical: canonicalUrl,
    alternates: getHreflangAlternates("noetom"),
    ogType: "website",
  });

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case "radar":
        return Radar;
      case "client-memory":
        return Brain;
      case "open-loops":
        return Clock;
      case "i-promised":
        return CheckCheck;
      case "smart-followup":
        return Send;
      case "money-radar":
        return Coins;
      case "tell-noetom":
        return Mic;
      case "what-am-i-missing":
        return HelpCircle;
      default:
        return Sparkles;
    }
  };


  return (
    <Layout lang={lang}>
      {/* ── HERO SECTION ── */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-border/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(229,192,161,0.15),rgba(255,255,255,0))]" />
        
        <div className="container max-w-5xl px-4 sm:px-6 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{p.hero.status}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            {p.hero.title}
          </h1>

          <p className="text-xl sm:text-2xl font-serif italic text-primary mb-6 max-w-2xl mx-auto">
            {p.hero.tagline}
          </p>

          <p className="text-base sm:text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-10">
            {p.hero.valueProp}
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Button asChild size="lg" className="w-full sm:w-auto px-8 py-6 rounded-full font-bold text-base uppercase tracking-wider shadow-lg shadow-primary/20">
              <Link to={getLocalizedPath('contact', lang)}>
                {lang === 'it' ? 'Richiedi un preventivo scritto' : lang === 'fr' ? 'Demander un devis écrit' : lang === 'es' ? 'Solicitar presupuesto por escrito' : 'Request a written quote'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          {/* Quote */}
          <div className="bg-card/70 border border-border/60 rounded-2xl p-6 sm:p-8 max-w-3xl mx-auto shadow-sm text-left relative">
            <div className="text-4xl text-primary/30 font-serif leading-none absolute top-4 left-4">“</div>
            <blockquote className="text-base sm:text-lg text-foreground/90 font-serif italic leading-relaxed pl-6 mb-3">
              {p.hero.emotionalQuote}
            </blockquote>
            <p className="text-xs sm:text-sm font-semibold text-primary pl-6">
              — {p.hero.author}
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT IT IS NOT SECTION ── */}
      <section className="py-16 md:py-24 bg-secondary/20 border-b border-border/40">
        <div className="container max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {p.whatItIsNot.title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {p.whatItIsNot.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {p.whatItIsNot.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border/60 rounded-2xl p-6 sm:p-7 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Bad pattern */}
                  <div className="flex items-start gap-3 text-destructive/90 pb-3 border-b border-border/40">
                    <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold line-through decoration-destructive/60">
                      {item.bad}
                    </span>
                  </div>
                  {/* Good pattern */}
                  <div className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                    <span className="text-sm sm:text-base leading-relaxed font-medium">
                      {item.good}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES SECTION / THE NOETOM RADAR ── */}
      <section className="py-16 md:py-24 border-b border-border/40">
        <div className="container max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-2">
              <Radar className="w-4 h-4" />
              <span>{p.capabilities.radarTitle}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {p.capabilities.title}
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              {p.capabilities.subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {p.capabilities.features.map((feature) => {
              const IconComponent = getFeatureIcon(feature.id);

              return (
                <div
                  key={feature.id}
                  className="bg-card border border-border/60 rounded-2xl p-6 flex flex-col justify-between hover:border-primary/50 transition-all shadow-sm hover:shadow-md group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 border border-amber-500/20">
                        {lang === 'it' ? 'In sviluppo' : lang === 'fr' ? 'En développement' : lang === 'es' ? 'En desarrollo' : 'In development'}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {feature.name}
                      </h3>
                      <p className="text-xs font-semibold text-primary/80 mt-0.5">
                        {feature.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CREATOR STORY SECTION ── */}
      <section className="py-16 md:py-24 bg-secondary/15 border-b border-border/40">
        <div className="container max-w-4xl px-4 sm:px-6">
          <div className="bg-card border border-border/60 rounded-3xl p-8 sm:p-12 shadow-md">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-3">
              <Layers className="w-4 h-4" />
              <span>{p.creatorStory.tag}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6">
              {p.creatorStory.title}
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed font-sans">
              <p>{p.creatorStory.storyP1}</p>
              <p>{p.creatorStory.storyP2}</p>
              <p>{p.creatorStory.storyP3}</p>
            </div>

            <div className="pt-8 mt-8 border-t border-border/40 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-lg font-bold text-foreground">Noemi Tomassetti</p>
                <p className="text-xs text-primary font-semibold">{p.creatorStory.signatureRole}</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>Castelfidardo (AN), Italia · Servizi da remoto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No SaaS/early access offered publicly; NoeTom is internal software under development. */}
      <section className="py-12 border-t border-border/40">
        <div className="container max-w-3xl px-4 sm:px-6 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            {lang === 'it' ? 'NoeTom è uno strumento operativo interno in fase di sviluppo, non un servizio software in vendita.' :
             lang === 'fr' ? 'NoeTom est un outil de travail interne en développement et non un logiciel proposé à la vente.' :
             lang === 'es' ? 'NoeTom es una herramienta interna en desarrollo, no un producto de software a la venta.' :
             'NoeTom is an internal tool in development, not a software product currently offered for sale.'}
          </p>
          <Link className="text-primary font-semibold hover:underline" to={getLocalizedPath('contact', lang)}>
            {lang === 'it' ? 'Contatta Noemi per i servizi professionali' : lang === 'fr' ? 'Contacter Noemi pour ses prestations' : lang === 'es' ? 'Contactar con Noemi para sus servicios' : 'Contact Noemi about professional services'}
          </Link>
        </div>
      </section>
    </Layout>
  );
}
