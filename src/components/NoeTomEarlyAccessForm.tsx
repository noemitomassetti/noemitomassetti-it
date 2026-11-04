import { getFormSubmitUrl } from "@/lib/api/contactDelivery";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Sparkles, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Language, getDictionary, getLocalizedPath } from "@/lib/i18n";

interface EarlyAccessData {
  name: string;
  email: string;
  profession: string;
  painPoint: string;
  gdpr: boolean;
}

const INITIAL_DATA: EarlyAccessData = {
  name: "",
  email: "",
  profession: "",
  painPoint: "",
  gdpr: false,
};

export function NoeTomEarlyAccessForm({ lang }: { lang: Language }) {
  const dict = getDictionary(lang);
  const t = dict.noetomPage.earlyAccessForm;
  const privacyPath = getLocalizedPath("privacy", lang);

  const { toast } = useToast();
  const [formData, setFormData] = useState<EarlyAccessData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (field: keyof EarlyAccessData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim() || !formData.email.trim() || !formData.profession.trim()) {
      setErrorMessage(
        lang === "it"
          ? "Compila tutti i campi obbligatori contrassegnati con l'asterisco (*)."
          : lang === "fr"
          ? "Veuillez remplir tous les champs obligatoires (*)."
          : lang === "es"
          ? "Por favor, completa todos los campos obligatorios (*)."
          : "Please complete all required fields (*)."
      );
      return;
    }

    if (!formData.gdpr) {
      setErrorMessage(
        lang === "it"
          ? "È necessario acconsentire al trattamento dei dati per ricevere gli aggiornamenti."
          : lang === "fr"
          ? "Le consentement est requis pour recevoir les actualités."
          : lang === "es"
          ? "Es necesario aceptar el tratamiento de datos para recibir las novedades."
          : "Consent is required to receive updates."
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage(
        lang === "it"
          ? "Inserisci un indirizzo email valido."
          : lang === "fr"
          ? "Veuillez saisir une adresse email valide."
          : lang === "es"
          ? "Por favor, introduce una dirección de correo válida."
          : "Please enter a valid email address."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        type: "noetom-informational-list",
        nome: formData.name.trim(),
        email: formData.email.trim(),
        professione: formData.profession.trim(),
        difficolta_operativa: formData.painPoint.trim() || "Non specificata",
        lingua_preferita: lang.toUpperCase(),
        consenso_gdpr: "Accettato",
        _subject: `[NoeTom Info List] ${formData.name.trim()} (${formData.profession.trim()})`,
        _replyto: formData.email.trim(),
      };

      const response = await fetch(getFormSubmitUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      const providerResult = await response.json().catch(() => null);
      if (!providerResult || (providerResult.success !== true && providerResult.success !== 'true')) {
        throw new Error('Provider did not confirm acceptance.');
      }
      setIsSuccess(true);
      setFormData(INITIAL_DATA);
      toast({
        title: t.successTitle,
        description: t.successMsg,
      });
    } catch {
      setIsSuccess(false);
      setErrorMessage(lang === 'it'
        ? 'Invio non confermato. Scrivi direttamente a info@noemitomassetti.it.'
        : lang === 'fr'
        ? 'Envoi non confirmé. Écrivez directement à info@noemitomassetti.it.'
        : lang === 'es'
        ? 'Envío no confirmado. Escribe directamente a info@noemitomassetti.it.'
        : 'Submission not confirmed. Please write directly to info@noemitomassetti.it.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="waitlist-form" className="bg-card/90 backdrop-blur border border-primary/30 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary mb-2">
          <Sparkles className="w-4 h-4 text-primary" />
          <span>
            {lang === "it"
              ? "Progetto Interno · Test Privato"
              : lang === "fr"
              ? "Projet Interne · Test Privé"
              : lang === "es"
              ? "Proyecto Interno · Pruebas Privadas"
              : "Internal Project · Private Testing"}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">{t.title}</h3>
        <p className="text-sm sm:text-base text-foreground/80 mb-6 leading-relaxed max-w-xl">
          {t.subtitle}
        </p>

        {isSuccess ? (
          <div className="bg-primary/10 border border-primary/30 rounded-xl p-8 text-center space-y-4 my-4">
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto animate-bounce" />
            <h4 className="text-xl font-bold text-foreground">{t.successTitle}</h4>
            <p className="text-sm text-foreground/85 max-w-md mx-auto leading-relaxed">
              {t.successMsg}
            </p>
            <p className="text-xs text-muted-foreground pt-2">{t.privacyNote}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {errorMessage && (
              <div className="bg-destructive/10 border border-destructive/30 text-destructive text-sm p-3 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="noetom-name" className="text-xs font-medium text-foreground/80 uppercase tracking-wide">
                  {t.nameLabel}
                </label>
                <Input
                  id="noetom-name"
                  required
                  placeholder={lang === "it" ? "Il tuo nome e cognome" : "Your full name"}
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="noetom-email" className="text-xs font-medium text-foreground/80 uppercase tracking-wide">
                  {t.emailLabel}
                </label>
                <Input
                  id="noetom-email"
                  type="email"
                  required
                  placeholder={lang === "it" ? "nome@azienda.com" : "you@company.com"}
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="noetom-profession" className="text-xs font-medium text-foreground/80 uppercase tracking-wide">
                {t.professionLabel}
              </label>
              <Input
                id="noetom-profession"
                required
                placeholder={
                  lang === "it"
                    ? "Es. Consulente di direzione, Formatrice, Traduttore freelance, Coach"
                    : "e.g. Independent Consultant, Executive Coach, Freelance Specialist"
                }
                value={formData.profession}
                onChange={(e) => handleChange("profession", e.target.value)}
                disabled={isSubmitting}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="noetom-pain" className="text-xs font-medium text-foreground/80 uppercase tracking-wide">
                {t.painPointLabel}
              </label>
              <Textarea
                id="noetom-pain"
                placeholder={
                  lang === "it"
                    ? "Es. Tenere traccia dei 20 clienti contemporaneamente, non dimenticare i solleciti, ricordarmi cosa ho promesso nelle call..."
                    : "e.g. Keeping track of 20 concurrent client agreements, follow-up reminders, remembering promises made on calls..."
                }
                className="min-h-[90px] resize-none"
                value={formData.painPoint}
                onChange={(e) => handleChange("painPoint", e.target.value)}
                disabled={isSubmitting}
              />
            </div>

            <div className="bg-secondary/30 border border-border/60 rounded-lg p-3 sm:p-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="noetom-gdpr"
                  required
                  checked={formData.gdpr}
                  onChange={(e) => handleChange("gdpr", e.target.checked)}
                  disabled={isSubmitting}
                  className="mt-0.5 w-4 h-4 accent-primary cursor-pointer flex-shrink-0"
                />
                <label htmlFor="noetom-gdpr" className="text-xs text-foreground/75 leading-relaxed cursor-pointer">
                  {t.gdprLabel}{" "}
                  <Link to={privacyPath} className="text-primary hover:underline font-medium">
                    (Privacy Policy)
                  </Link>
                </label>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(229,192,161,0.35)] transition-all duration-300 py-6 text-base font-bold uppercase tracking-wider"
              disabled={!formData.gdpr || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  {t.submitting}
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  {t.submitBtn}
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">{t.privacyNote}</p>
          </form>
        )}
      </div>
    </div>
  );
}
