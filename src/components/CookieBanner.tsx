import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Cookie } from "lucide-react";
import {
  ConsentState,
  getStoredConsent,
  initConsent,
  trackPageView,
  updateGoogleConsent,
} from "@/lib/consent";
import { getLanguageFromPath, getLocalizedPath } from "@/lib/i18n/routes";
import { Language } from "@/lib/i18n/types";

const BANNER_STRINGS: Record<
  Language,
  {
    title: string;
    description: string;
    policyLink: string;
    currentChoicePrefix: string;
    accepted: string;
    declined: string;
    declineBtn: string;
    acceptBtn: string;
    ariaLabel: string;
  }
> = {
  it: {
    title: "Gestione Cookie e Privacy",
    description:
      "Questo sito utilizza cookie tecnici essenziali per garantire il corretto funzionamento e, previo tuo consenso, cookie analitici (Google Analytics 4) per statistiche di utilizzo. Google può trattare identificativi online e altri dati tecnici secondo la propria informativa.",
    policyLink: "Leggi la Cookie Policy completa",
    currentChoicePrefix: "Scelta attuale: ",
    accepted: "Accettati",
    declined: "Rifiutati",
    declineBtn: "Rifiuta",
    acceptBtn: "Accetta",
    ariaLabel: "Gestione Consenso Cookie",
  },
  en: {
    title: "Cookie & Privacy Management",
    description:
      "This website uses essential technical cookies for proper operation and, subject to your explicit consent, aggregated analytics cookies (Google Analytics 4) to understand site performance. Google may process online identifiers and technical usage data under its privacy terms.",
    policyLink: "Read the complete Cookie Policy",
    currentChoicePrefix: "Current choice: ",
    accepted: "Accepted",
    declined: "Declined",
    declineBtn: "Decline",
    acceptBtn: "Accept",
    ariaLabel: "Cookie Consent Management",
  },
  fr: {
    title: "Gestion des Cookies et Confidentialité",
    description:
      "Ce site utilise des traceurs techniques indispensables à son fonctionnement et, sous réserve de votre consentement, des cookies de mesure d'audience (Google Analytics 4). Google peut traiter des identifiants en ligne et des données techniques conformément à ses règles de confidentialité.",
    policyLink: "Consulter la Politique des Cookies complète",
    currentChoicePrefix: "Choix actuel : ",
    accepted: "Acceptés",
    declined: "Refusés",
    declineBtn: "Refuser",
    acceptBtn: "Accepter",
    ariaLabel: "Gestion du Consentement des Cookies",
  },
  es: {
    title: "Gestión de Cookies y Privacidad",
    description:
      "Este sitio web utiliza cookies técnicas esenciales para su correcto funcionamiento y, con su consentimiento previo, cookies analíticas agregadas (Google Analytics 4) para evaluar el rendimiento. Google puede tratar identificadores en línea y datos técnicos conforme a su política de privacidad.",
    policyLink: "Leer la Política de Cookies completa",
    currentChoicePrefix: "Elección actual: ",
    accepted: "Aceptadas",
    declined: "Rechazadas",
    declineBtn: "Rechazar",
    acceptBtn: "Aceptar",
    ariaLabel: "Gestión del Consentimiento de Cookies",
  },
};

export function CookieBanner() {
  const location = useLocation();
  const lang: Language = getLanguageFromPath(location.pathname);
  const t = BANNER_STRINGS[lang] || BANNER_STRINGS.it;
  const cookiePath = getLocalizedPath("cookie", lang);

  const [visible, setVisible] = useState(false);
  const [currentChoice, setCurrentChoice] = useState<ConsentState | null>(null);

  useEffect(() => {
    const saved = initConsent();
    if (saved === "granted" || saved === "denied") {
      setCurrentChoice(saved);
      setVisible(false);
    } else {
      // First visit: show banner
      setVisible(true);
    }

    const handleOpen = () => {
      const current = getStoredConsent();
      if (current) {
        setCurrentChoice(current);
      }
      setVisible(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpen);
    return () => {
      window.removeEventListener("open-cookie-preferences", handleOpen);
    };
  }, []);

  // Track SPA route changes when analytics consent is granted
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location.pathname, location.search]);

  const handleAccept = () => {
    updateGoogleConsent("granted");
    setCurrentChoice("granted");
    setVisible(false);
    trackPageView(location.pathname + location.search);
  };

  const handleDecline = () => {
    updateGoogleConsent("denied");
    setCurrentChoice("denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label={t.ariaLabel}
      role="dialog"
      aria-modal="false"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-lg z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="bg-card/95 backdrop-blur-md border border-border/80 rounded-2xl p-5 sm:p-6 shadow-2xl text-foreground space-y-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h2 className="text-base font-bold text-foreground flex items-center gap-1.5">
              {t.title}
            </h2>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              {t.description}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-border/40 text-xs text-muted-foreground">
          <Link
            to={cookiePath}
            onClick={() => setVisible(false)}
            className="hover:text-primary underline transition-colors"
          >
            {t.policyLink}
          </Link>
          {currentChoice && (
            <span className="text-[11px] text-muted-foreground/80 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              {t.currentChoicePrefix}
              {currentChoice === "granted" ? t.accepted : t.declined}
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleDecline}
            className="font-medium text-xs sm:text-sm h-9 hover:bg-secondary/60 transition-colors"
          >
            {t.declineBtn}
          </Button>
          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={handleAccept}
            className="font-semibold text-xs sm:text-sm h-9 shadow-sm"
          >
            {t.acceptBtn}
          </Button>
        </div>
      </div>
    </aside>
  );
}
