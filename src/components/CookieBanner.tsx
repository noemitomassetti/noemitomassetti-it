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
  }
> = {
  it: {
    title: "Gestione Cookie e Privacy",
    description:
      "Cookie tecnici necessari al funzionamento; Google Analytics 4 si attiva solo con il tuo consenso per misurare l’utilizzo del sito. Dettagli sul trattamento dei dati nella Cookie Policy.",
    policyLink: "Leggi la Cookie Policy completa",
    currentChoicePrefix: "Scelta attuale: ",
    accepted: "Accettati",
    declined: "Rifiutati",
    declineBtn: "Rifiuta",
    acceptBtn: "Accetta",
  },
  en: {
    title: "Cookie & Privacy Management",
    description:
      "Essential cookies keep this site working. Google Analytics 4 is activated only with your consent to measure site usage. See the Cookie Policy for details on data processing.",
    policyLink: "Read the complete Cookie Policy",
    currentChoicePrefix: "Current choice: ",
    accepted: "Accepted",
    declined: "Declined",
    declineBtn: "Decline",
    acceptBtn: "Accept",
  },
  fr: {
    title: "Gestion des Cookies et Confidentialité",
    description:
      "Les cookies nécessaires assurent le fonctionnement du site. Google Analytics 4 ne s’active qu’avec votre accord pour mesurer l’audience. Consultez la politique pour les détails sur les données.",
    policyLink: "Consulter la Politique des Cookies complète",
    currentChoicePrefix: "Choix actuel : ",
    accepted: "Acceptés",
    declined: "Refusés",
    declineBtn: "Refuser",
    acceptBtn: "Accepter",
  },
  es: {
    title: "Gestión de Cookies y Privacidad",
    description:
      "Las cookies necesarias permiten el funcionamiento del sitio. Google Analytics 4 solo se activa con tu consentimiento para medir el uso. Consulta la Política de Cookies para conocer el tratamiento de datos.",
    policyLink: "Leer la Política de Cookies completa",
    currentChoicePrefix: "Elección actual: ",
    accepted: "Aceptadas",
    declined: "Rechazadas",
    declineBtn: "Rechazar",
    acceptBtn: "Aceptar",
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
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-lg z-50 animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="bg-card/95 backdrop-blur-md border border-border/80 rounded-2xl p-4 sm:p-5 shadow-2xl text-foreground space-y-3">
        <div className="flex items-start gap-2.5">
          <div className="p-2 rounded-xl bg-primary/10 text-primary shrink-0 mt-0.5">
            <Cookie className="w-5 h-5" />
          </div>
          <div className="space-y-1.5 flex-1">
            <h2 id="cookie-consent-title" className="text-base font-bold text-foreground flex items-center gap-1.5">
              {t.title}
            </h2>
            <p id="cookie-consent-description" className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
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
