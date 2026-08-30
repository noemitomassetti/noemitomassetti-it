import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface FormDataState {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  oggetto: string;
  messaggio: string;
  gdpr: boolean;
  newsletter: boolean;
}

const INITIAL_FORM: FormDataState = {
  nome: "",
  cognome: "",
  email: "",
  telefono: "",
  oggetto: "",
  messaggio: "",
  gdpr: false,
  newsletter: false,
};

export function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormDataState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (field: keyof FormDataState, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Basic validations
    if (!formData.nome.trim() || !formData.cognome.trim() || !formData.email.trim() || !formData.messaggio.trim()) {
      setErrorMessage("Compila tutti i campi obbligatori contrassegnati con l'asterisco (*).");
      return;
    }

    if (!formData.gdpr) {
      setErrorMessage("È necessario accettare l'informativa sulla privacy (GDPR) per procedere.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Inserisci un indirizzo email valido.");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        nome: formData.nome.trim(),
        cognome: formData.cognome.trim(),
        email: formData.email.trim(),
        telefono: formData.telefono.trim() || "Non specificato",
        oggetto: formData.oggetto.trim() || "Richiesta informazioni dal sito",
        messaggio: formData.messaggio.trim(),
        consenso_gdpr: "Accettato",
        newsletter: formData.newsletter ? "Sì" : "No",
        _subject: formData.oggetto.trim()
          ? `Nuovo messaggio: ${formData.oggetto.trim()} (${formData.nome.trim()} ${formData.cognome.trim()})`
          : `Nuovo messaggio dal sito da ${formData.nome.trim()} ${formData.cognome.trim()}`,
        _replyto: formData.email.trim(),
        _captcha: "false",
      };

      const response = await fetch("https://formsubmit.co/ajax/info@noemitomassetti.it", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Errore di invio (HTTP ${response.status})`);
      }

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        setIsSuccess(true);
        setFormData(INITIAL_FORM);
        toast({
          title: "Messaggio inviato con successo!",
          description: "Grazie per avermi contattata. Ti risponderò il prima possibile.",
        });
      } else {
        throw new Error(result.message || "Errore durante l'elaborazione del messaggio.");
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Si è verificato un errore durante l'invio del messaggio. Riprova più tardi.";
      setErrorMessage(errorMsg);
      toast({
        title: "Invio non riuscito",
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
      <h3 className="text-xl font-semibold text-primary mb-6">Scrivimi un messaggio</h3>

      {isSuccess ? (
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center space-y-4 py-8">
          <div className="flex justify-center">
            <CheckCircle2 className="w-12 h-12 text-primary animate-bounce" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-foreground">Messaggio inviato con successo!</h4>
            <p className="text-sm text-foreground/80 max-w-md mx-auto leading-relaxed">
              Grazie per avermi scritto. Ho ricevuto la tua richiesta e ti risponderò al più presto all'indirizzo email che hai indicato.
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => setIsSuccess(false)}
            className="mt-4"
          >
            Invia un altro messaggio
          </Button>
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
              <label htmlFor="form-firstName" className="text-sm font-medium text-foreground/80">
                Nome *
              </label>
              <Input
                id="form-firstName"
                required
                placeholder="Il tuo nome"
                value={formData.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="form-lastName" className="text-sm font-medium text-foreground/80">
                Cognome *
              </label>
              <Input
                id="form-lastName"
                required
                placeholder="Il tuo cognome"
                value={formData.cognome}
                onChange={(e) => handleChange("cognome", e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="form-email" className="text-sm font-medium text-foreground/80">
                Email *
              </label>
              <Input
                id="form-email"
                type="email"
                required
                placeholder="La tua email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="form-phone" className="text-sm font-medium text-foreground/80">
                Telefono
              </label>
              <Input
                id="form-phone"
                type="tel"
                placeholder="Numero (opzionale)"
                value={formData.telefono}
                onChange={(e) => handleChange("telefono", e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="form-subject" className="text-sm font-medium text-foreground/80">
              Oggetto
            </label>
            <Input
              id="form-subject"
              placeholder="Come posso aiutarti?"
              value={formData.oggetto}
              onChange={(e) => handleChange("oggetto", e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="form-message" className="text-sm font-medium text-foreground/80">
              Messaggio *
            </label>
            <Textarea
              id="form-message"
              required
              placeholder="Raccontami brevemente la tua attività e quali aspetti vorresti delegare o organizzare meglio."
              className="min-h-[120px] resize-none"
              value={formData.messaggio}
              onChange={(e) => handleChange("messaggio", e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          <div className="space-y-3">
            <div className="bg-secondary/20 border border-border/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="form-gdprConsent"
                  required
                  checked={formData.gdpr}
                  onChange={(e) => handleChange("gdpr", e.target.checked)}
                  disabled={isSubmitting}
                  className="mt-0.5 w-4 h-4 accent-primary cursor-pointer flex-shrink-0"
                />
                <label
                  htmlFor="form-gdprConsent"
                  className="text-sm md:text-xs text-foreground/70 leading-relaxed cursor-pointer"
                >
                  Ho letto e accetto l'
                  <Link to="/privacy-policy" className="text-primary hover:underline font-medium">
                    Informativa Privacy
                  </Link>{" "}
                  e acconsento al trattamento dei miei dati personali ai fini della richiesta di contatto, ai sensi del{" "}
                  <strong className="text-foreground/80">Regolamento UE 2016/679 (GDPR)</strong>. *
                </label>
              </div>
            </div>

            <div className="bg-secondary/20 border border-border/50 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="form-newsletterConsent"
                  checked={formData.newsletter}
                  onChange={(e) => handleChange("newsletter", e.target.checked)}
                  disabled={isSubmitting}
                  className="mt-0.5 w-4 h-4 accent-primary cursor-pointer flex-shrink-0"
                />
                <label
                  htmlFor="form-newsletterConsent"
                  className="text-sm md:text-xs text-foreground/70 leading-relaxed cursor-pointer"
                >
                  Desidero ricevere aggiornamenti, consigli pratici e risorse utili via email. Acconsento al trattamento
                  dei dati per finalità informative e di marketing ai sensi del{" "}
                  <strong className="text-foreground/80">Regolamento UE 2016/679 (GDPR)</strong>.{" "}
                  <em className="italic opacity-80">Nessuno spam. Solo contenuti utili e aggiornamenti occasionali.</em>
                </label>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(229,192,161,0.3)] transition-all duration-300 py-6 text-base font-semibold uppercase tracking-wide"
            disabled={!formData.gdpr || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                INVIO IN CORSO...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                INVIA MESSAGGIO
              </>
            )}
          </Button>

          <p className="text-xs text-foreground/50 text-center">* campi obbligatori</p>
        </form>
      )}
    </div>
  );
}
