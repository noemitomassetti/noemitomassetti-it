import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Cookie } from "lucide-react";
import { COOKIE_CONSENT_KEY, updateGoogleConsent } from "@/lib/consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [currentChoice, setCurrentChoice] = useState<"granted" | "denied" | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (saved === "granted" || saved === "denied") {
        setCurrentChoice(saved);
        updateGoogleConsent(saved);
        setVisible(false);
      } else {
        // First visit: show banner
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }

    const handleOpen = () => {
      try {
        const saved = localStorage.getItem(COOKIE_CONSENT_KEY);
        if (saved === "granted" || saved === "denied") {
          setCurrentChoice(saved);
        }
      } catch {
        // ignore
      }
      setVisible(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpen);
    return () => {
      window.removeEventListener("open-cookie-preferences", handleOpen);
    };
  }, []);

  const handleAccept = () => {
    updateGoogleConsent("granted");
    setCurrentChoice("granted");
    setVisible(false);
  };

  const handleDecline = () => {
    updateGoogleConsent("denied");
    setCurrentChoice("denied");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Gestione Consenso Cookie"
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
              Gestione Cookie e Privacy
            </h2>
            <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
              Questo sito utilizza cookie tecnici essenziali per garantire il corretto funzionamento e,
              previo tuo consenso, cookie analitici (Google Analytics 4 con IP anonimizzato) in forma aggregata
              per comprendere come viene utilizzato il sito e migliorarne le prestazioni. Nessun dato personale identificativo
              (come nomi, email o note) viene raccolto o trasmesso.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1 border-t border-border/40 text-xs text-muted-foreground">
          <Link
            to="/cookie-policy"
            onClick={() => setVisible(false)}
            className="hover:text-primary underline transition-colors"
          >
            Leggi la Cookie Policy completa
          </Link>
          {currentChoice && (
            <span className="text-[11px] text-muted-foreground/80 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              Scelta attuale: {currentChoice === "granted" ? "Accettati" : "Rifiutati"}
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
            Rifiuta
          </Button>
          <Button
            type="button"
            variant="default"
            size="sm"
            onClick={handleAccept}
            className="font-semibold text-xs sm:text-sm h-9 shadow-sm"
          >
            Accetta
          </Button>
        </div>
      </div>
    </aside>
  );
}
