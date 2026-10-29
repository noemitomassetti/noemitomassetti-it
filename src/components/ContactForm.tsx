import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Language, getDictionary, getLanguageFromPath, getLocalizedPath } from "@/lib/i18n";
import { getQuoteDraft, clearQuoteDraft } from "@/lib/concierge/quoteDraftStore";
import { submitQuoteRequest, generateIdempotencyKey } from "@/lib/api/clientAdapter";
import { localizeContactError, CONTACT_ERROR_TITLES, INVALID_EMAIL } from "@/lib/api/submitErrorI18n";

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

export interface ContactFormProps {
  lang?: Language;
  selectedService?: string;
  initialMessage?: string;
}

export function ContactForm({ lang: explicitLang, selectedService, initialMessage }: ContactFormProps) {
  const location = useLocation();
  const lang = explicitLang || getLanguageFromPath(location.pathname);
  const dict = getDictionary(lang);
  const t = dict.contactSection.form;
  const privacyPath = getLocalizedPath("privacy", lang);

  const { toast } = useToast();
  const [formData, setFormData] = useState<FormDataState>(() => {
    // If a draft is already pending in transient store, initialize with its summary unless initialMessage is passed
    const pendingDraft = getQuoteDraft();
    const draftText = initialMessage || (pendingDraft ? (pendingDraft.formattedSummary[lang] || pendingDraft.formattedSummary.it) : "");

    return {
      ...INITIAL_FORM,
      oggetto: selectedService || "",
      messaggio: draftText || "",
    };
  });
  const [idempotencyKey, setIdempotencyKey] = useState<string>(() => generateIdempotencyKey());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionDetails, setSubmissionDetails] = useState<{
    requestId: string;
    deliveryStatus: string;
    clientEmail: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  // Synchronize formData.oggetto whenever selectedService prop changes
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        oggetto: selectedService,
      }));
    }
  }, [selectedService]);

  // Synchronize initialMessage if provided, without overwriting user-typed text
  useEffect(() => {
    if (initialMessage) {
      setFormData((prev) => {
        if (!prev.messaggio.trim()) {
          return { ...prev, messaggio: initialMessage };
        }
        return prev;
      });
    }
  }, [initialMessage]);

  const handleChange = (field: keyof FormDataState, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double-submission
    setErrorMessage(null);

    // Basic validations
    if (!formData.nome.trim() || !formData.cognome.trim() || !formData.email.trim() || !formData.messaggio.trim()) {
      setErrorMessage(t.errorMsg);
      return;
    }

    if (!formData.gdpr) {
      setErrorMessage(t.errorMsg);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage(INVALID_EMAIL[lang]);
      return;
    }

    setIsSubmitting(true);

    try {
      const activeKey = idempotencyKey || generateIdempotencyKey();
      const fullName = `${formData.nome.trim()} ${formData.cognome.trim()}`;
      const serviceId = formData.oggetto.trim() || 'richiesta_generale';

      const result = await submitQuoteRequest({
        fullName,
        email: formData.email.trim(),
        phone: formData.telefono.trim() || undefined,
        serviceId,
        locale: lang,
        engagementType: 'hourly_ad_hoc',
        brief: formData.messaggio.trim(),
        privacyGdprConsent: formData.gdpr,
        newsletterConsent: formData.newsletter,
        idempotencyKey: activeKey,
        honeypot,
      });

      if (result.success) {
        const sentEmail = formData.email.trim();
        setSubmissionDetails({
          requestId: result.requestId,
          deliveryStatus: result.deliveryStatus,
          clientEmail: sentEmail,
        });
        setIsSuccess(true);
        clearQuoteDraft();
        setFormData(INITIAL_FORM);
        setHoneypot("");
        setIdempotencyKey(generateIdempotencyKey()); // Refresh key for next message
        toast({
          title: t.successTitle,
          description: result.deliveryStatus === 'email_received_by_provider'
            ? (lang === 'it' ? 'Richiesta accettata dal provider email; recapito finale da verificare.'
              : lang === 'fr' ? 'Demande acceptée par le service de transfert ; remise finale à confirmer.'
              : lang === 'es' ? 'Solicitud aceptada por el servicio de reenvío; entrega pendiente de verificar.'
              : 'Request accepted by the email relay; final delivery is not yet confirmed.')
            : (lang === 'it' ? 'Richiesta registrata nel sistema NoeTom.' : lang === 'fr' ? 'Demande enregistrée dans le système NoeTom.' : lang === 'es' ? 'Solicitud registrada en el sistema NoeTom.' : 'Enquiry saved in the NoeTom system.'),
        });
      } else {
        throw new Error(result.message || "Errore durante l'elaborazione del messaggio.");
      }
    } catch (err: unknown) {
      const errorMsg = localizeContactError(err, lang);
      setErrorMessage(errorMsg);
      toast({
        title: CONTACT_ERROR_TITLES[lang],
        description: errorMsg,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const pendingDraft = getQuoteDraft();
  const hasConciergeBrief = Boolean(initialMessage || pendingDraft);

  const contextualHeaders = {
    it: {
      title: "Richiesta di Preventivo Scritto",
      badge: "Bozza predisposta con l’Assistente di Noemi · Puoi modificare liberamente il messaggio",
    },
    en: {
      title: "Written Quote Request",
      badge: "Brief prepared with Noemi’s Assistant · Feel free to edit the message below",
    },
    fr: {
      title: "Demande de Devis Écrit",
      badge: "Synthèse préparée avec l’assistant de Noemi · Modifiez librement le texte",
    },
    es: {
      title: "Solicitud de Presupuesto por Escrito",
      badge: "Borrador preparado con el asistente de Noemi · Puedes modificar el mensaje",
    },
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-primary">
          {hasConciergeBrief ? contextualHeaders[lang].title : dict.contactSection.title}
        </h3>
        {hasConciergeBrief && (
          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5 font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
            {contextualHeaders[lang].badge}
          </p>
        )}
      </div>

      {isSuccess ? (
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center space-y-4 py-8">
          <div className="flex justify-center">
            <CheckCircle2 className="w-12 h-12 text-primary" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold text-foreground">{t.successTitle}</h4>
            <p className="text-sm text-foreground/85 max-w-md mx-auto leading-relaxed">
              {submissionDetails?.deliveryStatus === 'persisted_in_noetom'
                ? (lang === 'it'
                    ? `Richiesta registrata in NoeTom. Riferimento: ${submissionDetails.requestId}. Ti contatterò via email.`
                    : lang === 'fr'
                    ? `Demande enregistrée dans NoeTom. Référence : ${submissionDetails.requestId}. Je vous contacterai par courriel.`
                    : lang === 'es'
                    ? `Solicitud registrada en NoeTom. Referencia: ${submissionDetails.requestId}. Me pondré en contacto por correo.`
                    : `Request saved in NoeTom. Reference: ${submissionDetails.requestId}. I will follow up by email.`)
                : (lang === 'it'
                    ? `Il servizio di inoltro email ha accettato la richiesta (rif. ${submissionDetails?.requestId}). La consegna alla casella di Noemi non è ancora verificata.`
                    : lang === 'fr'
                    ? `Le service de transfert a accepté la demande (réf. ${submissionDetails?.requestId}). La réception dans la boîte de Noemi reste à confirmer.`
                    : lang === 'es'
                    ? `El servicio de reenvío aceptó la solicitud (ref. ${submissionDetails?.requestId}). Aún no se ha confirmado la entrega al buzón de Noemi.`
                    : `The email forwarding service accepted your request (ref. ${submissionDetails?.requestId}). Delivery to Noemi’s inbox has not been verified.`)}
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setIsSuccess(false);
              setSubmissionDetails(null);
            }}
            className="mt-4"
          >
            {lang === 'it' ? "Invia un altro messaggio" : lang === 'fr' ? "Envoyer un autre message" : lang === 'es' ? "Enviar otro mensaje" : "Send another message"}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {/* Honeypot field for anti-bot spam defense - hidden from users */}
          <div
            className="opacity-0 absolute -left-[9999px] h-0 w-0 overflow-hidden pointer-events-none"
            aria-hidden="true"
            tabIndex={-1}
          >
            <label htmlFor="form-company_fax">Do not fill this field</label>
            <input
              id="form-company_fax"
              type="text"
              name="company_fax"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {errorMessage && (
            <div className="bg-destructive/10 border border-destructive/30 text-destructive text-sm p-3 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{errorMessage}{' '}<a href="mailto:info@noemitomassetti.it" className="underline font-semibold">{lang === 'it' ? 'Scrivimi direttamente' : lang === 'fr' ? 'Écrivez-moi directement' : lang === 'es' ? 'Escríbeme directamente' : 'Email me directly'}</a></span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="form-firstName" className="text-sm font-medium text-foreground/80">
                {t.name}
              </label>
              <Input
                id="form-firstName"
                required
                placeholder={t.name.replace('*', '').trim()}
                value={formData.nome}
                onChange={(e) => handleChange("nome", e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="form-lastName" className="text-sm font-medium text-foreground/80">
                {t.surname}
              </label>
              <Input
                id="form-lastName"
                required
                placeholder={t.surname.replace('*', '').trim()}
                value={formData.cognome}
                onChange={(e) => handleChange("cognome", e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="form-email" className="text-sm font-medium text-foreground/80">
                {t.email}
              </label>
              <Input
                id="form-email"
                type="email"
                required
                placeholder={t.email.replace('*', '').trim()}
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                disabled={isSubmitting}
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="form-phone" className="text-sm font-medium text-foreground/80">
                {lang === 'it' ? "Telefono" : lang === 'fr' ? "Téléphone" : lang === 'es' ? "Teléfono" : "Phone"}
              </label>
              <Input
                id="form-phone"
                type="tel"
                placeholder={lang === 'it' ? "Numero (opzionale)" : "(Optional)"}
                value={formData.telefono}
                onChange={(e) => handleChange("telefono", e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="form-service" className="text-sm font-medium text-foreground/80">
              {t.serviceNeeded}
            </label>
            <select
              id="form-service"
              className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={formData.oggetto}
              onChange={(e) => handleChange("oggetto", e.target.value)}
              disabled={isSubmitting}
            >
              <option value="">{lang === 'it' ? "-- Seleziona un'area di interesse --" : "-- Select area of interest --"}</option>
              {t.serviceOptions.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="form-message" className="text-sm font-medium text-foreground/80">
              {t.message}
            </label>
            <Textarea
              id="form-message"
              required
              placeholder={lang === 'it' ? "Raccontami brevemente la tua attività e quali aspetti vorresti delegare o organizzare meglio." : "Tell me about your business and which operational areas you would like to streamline."}
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
                  {t.gdpr}{" "}
                  <Link to={privacyPath} className="text-primary hover:underline font-medium">
                    (Privacy Policy)
                  </Link>
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
                {t.sending}
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {t.submit}
              </>
            )}
          </Button>

          <div className="pt-1 text-[11px] text-muted-foreground/80 text-center leading-relaxed">
            <span className="inline-block mr-1">🔒</span>
            {lang === 'it'
              ? "La richiesta viene inviata tramite FormSubmit oppure, se configurato, tramite il sistema NoeTom. Consulta la privacy policy per i fornitori coinvolti e il trattamento dei dati."
              : lang === 'fr'
              ? "La demande est envoyée via FormSubmit ou, si configuré, via NoeTom. Consultez notre politique de confidentialité pour en savoir plus sur les fournisseurs et les données traitées."
              : lang === 'es'
              ? "La solicitud se envía mediante FormSubmit o, si está configurado, mediante NoeTom. Consulta nuestra política de privacidad para conocer a los proveedores y el tratamiento de los datos."
              : "Your inquiry is sent via FormSubmit or, if configured, NoeTom. Please read the privacy policy for information about service providers and data processing."}
          </div>

          <p className="text-xs text-foreground/50 text-center">* {lang === 'it' ? "campi obbligatori" : "required fields"}</p>
        </form>
      )}
    </div>
  );
}
