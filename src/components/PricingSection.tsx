import { Language } from "@/lib/i18n";
import { BookingButton } from "@/components/BookingButton";
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { PRICING_DATA } from "@/lib/pricingData";

interface PricingSectionProps {
  lang: Language;
}

export function PricingSection({ lang }: PricingSectionProps) {
  const badge = PRICING_DATA.badge[lang] || PRICING_DATA.badge.en;
  const title = PRICING_DATA.title[lang] || PRICING_DATA.title.en;
  const subtitle = PRICING_DATA.subtitle[lang] || PRICING_DATA.subtitle.en;
  const disclaimer = PRICING_DATA.disclaimer[lang] || PRICING_DATA.disclaimer.en;
  const bookCall = PRICING_DATA.bookCall[lang] || PRICING_DATA.bookCall.en;

  const disclaimerPrefix =
    lang === "it"
      ? "Nota di trasparenza: "
      : lang === "fr"
      ? "Note de transparence : "
      : lang === "es"
      ? "Nota de transparencia: "
      : "Transparency notice: ";

  return (
    <section id="pricing" className="py-16 md:py-24 bg-card/40 border-b border-border/40">
      <div className="container max-w-6xl px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>{badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRICING_DATA.categories.map((srv) => {
            const catTitle = srv.title[lang] || srv.title.en;
            const catRate = srv.rate[lang] || srv.rate.en;
            const catRateDetail = srv.rateDetail[lang] || srv.rateDetail.en;
            const catItems = srv.items[lang] || srv.items.en;
            const catHighlight = srv.highlight ? (srv.highlight[lang] || srv.highlight.en) : undefined;

            return (
              <div
                key={srv.id}
                className={`bg-card border rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-md ${
                  catHighlight
                    ? "border-primary/50 ring-1 ring-primary/20 bg-primary/[0.02]"
                    : "border-border/60 hover:border-primary/40"
                }`}
              >
                <div className="space-y-4">
                  {catHighlight && (
                    <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25">
                      <Sparkles className="w-3 h-3" />
                      <span>{catHighlight}</span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      {catTitle}
                    </h3>
                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-extrabold text-primary">
                        {catRate}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {catRateDetail}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/40">
                    <ul className="space-y-2.5">
                      {catItems.map((it, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85 leading-normal"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/40">
                  <BookingButton
                    lang={lang}
                    variant={catHighlight ? "default" : "outline"}
                    className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider"
                  >
                    <span>{bookCall}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </BookingButton>
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer box */}
        <div className="mt-10 max-w-3xl mx-auto bg-muted/30 border border-border/60 rounded-xl p-5 text-center text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">{disclaimerPrefix}</strong>
            {disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
