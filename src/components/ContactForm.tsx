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
import { getManualContactMailto, getManualContactPlainText } from "@/lib/api/mailFallback";
import { WEB3FORMS_PUBLIC_ACCESS_KEY } from "@/lib/api/web3formsPublicConfig";
import { localizeContactError, CONTACT_ERROR_TITLES, INVALID_EMAIL } from "@/lib/api/submitErrorI18n";
import { detectExcludedService, SCOPE_EXCLUDED_REPLY, SCOPE_FORM_NOTICE } from "@/lib/serviceScope";

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
  // A released static build may deliberately have no verified provider:
  // the site must tell visitors before they fill the form.
  const automatedDeliveryConfigured = Boolean(
    import.meta.env.VITE_API_BASE_URL?.trim() ||
    (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? WEB3FORMS_PUBLIC_ACCESS_KEY).trim() ||
    import.meta.env.VITE_LEGACY_FORMSUBMIT_ENABLED === "true"
  );

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
  const [manualCopyVisible, setManualCopyVisible] = useState(false);

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

  // These draft details remain in memory after an ambiguous provider outcome.
  // Never silently send a second request: the visitor must choose manual email.
  const manualDraft = {
    fullName: `${formData.nome.trim()} ${formData.cognome.trim()}`.trim(),
    email: formData.email.trim(),
    phone: formData.telefono.trim(),
    service: formData.oggetto.trim(),
    message: formData.messaggio.trim(),
    reference: idempotencyKey,
  };
  const manualRequestText = getManualContactPlainText(manualDraft, lang);
  const manualEmailLink = getManualContactMailto(manualDraft, lang);

  const copyRequest = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(manualRequestText);
      toast({
        title: lang === 'it' ? 'Richiesta copiata' : lang === 'fr' ? 'Demande copiée' : lang === 'es' ? 'Solicitud copiada' : 'Request copied',
        description: lang === 'it' ? 'Incolla il messaggio in un’email e premi Invia.' : lang === 'fr' ? 'Collez le message dans un e-mail et envoyez-le.' : lang === 'es' ? 'Pega el mensaje en un correo y envíalo.' : 'Paste the message into an email and send it.',
      });
    } catch {
      // Explicitly show selectable text if clipboard access is denied.
      setManualCopyVisible(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent double-submission
    setErrorMessage(null);
    setManualCopyVisible(false);

    // Basic validations
    if (!formData.nome.trim() || !formData.cognome.trim() || !formData.email.trim() || !formData.oggetto.trim() || !formData.messaggio.trim()) {
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

    const outsideScope = detectExcludedService(formData.messaggio);
    if (outsideScope) {
      setErrorMessage(SCOPE_EXCLUDED_REPLY[outsideScope][lang]);
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
        // An email provider accepting a form does not prove inbox delivery.
        // Preserve its contents/reference so a visitor can send the same
        // request manually if the provider notification is not delivered.
        if (result.deliveryStatus === 'persisted_in_noetom') {
          setFormData(INITIAL_FORM);
          setIdempotencyKey(generateIdempotencyKey());
        }
        setHoneypot("");
        toast({
          title: t.successTitle,
          description: result.deliveryStatus === 'email_received_by_provider'
            ? (lang === 'it' ? 'Richiesta accettata dal provider email; recapito finale da verificare.'
              : lang === 'fr' ? 'Demande acceptée par le service de transfert ; remise finale à confirmer.'
              : lang === 'es' ? 'Solicitud aceptada por el servicio de reenvío; entrega pendiente de verificar.'
              : 'Request accepted by the email relay; final delivery is not yet confirmed.')
            : (lang === 'it' ? 'Richiesta registrata. Ti ricontatterò tramite email.' : lang === 'fr' ? 'Demande enregistrée. Je vous contacterai par courriel.' : lang === 'es' ? 'Solicitud registrada. Me pondré en contacto por correo electrónico.' : 'Enquiry recorded. I will follow up by email.'),
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
      title: "Richiedi un preventivo",
      badge: "Bozza predisposta con l’Assistente di Noemi · Puoi modificare liberamente il messaggio",
    },
    en: {
      title: "Request a quote",
      badge: "Brief prepared with Noemi’s Assistant · Feel free to edit the message below",
    },
    fr: {
      title: "Demander un devis",
      badge: "Synthèse préparée avec l’assistant de Noemi · Modifiez librement le texte",
    },
    es: {
      title: "Solicitar presupuesto",
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

      {!automatedDeliveryConfigured && (
        <div role="status" data-testid="manual-email-first" className="mb-5 rounded-xl border border-primary/40 bg-primary/10 px-4 py-4 text-sm leading-relaxed text-foreground/90">
          <p>
            {lang === "it"
              ? "Per contattarmi subito, puoi inviarmi una email. L'invio automatico del modulo è in fase di verifica: puoi comunque compilare i campi qui sotto per preparare un messaggio da inviare dal tuo programma di posta."
              : lang === "fr"
              ? "Vous pouvez me contacter directement par e-mail. L'envoi automatique du formulaire est en cours de vérification ; les champs ci-dessous permettent de préparer un message à envoyer depuis votre messagerie."
              : lang === "es"
              ? "Puedes contactar conmigo directamente por correo electrónico. El envío automático del formulario está en fase de verificación; puedes utilizar los campos siguientes para preparar un mensaje y enviarlo desde tu correo."
              : "You can email me directly. Automated form delivery is being verified; you can still complete the fields below to prepare a message for your email application."}
          </p>
          <a href="mailto:info@noemitomassetti.it" className="mt-2 inline-block font-semibold text-primary underline underline-offset-4 hover:text-foreground">
            {lang === "it" ? "Scrivimi direttamente" : lang === "fr" ? "M'écrire directement" : lang === "es" ? "Escríbeme directamente" : "Email me directly"}
          </a>
        </div>
      )}

      <p className="text-xs text-muted-foreground mt-3 leading-relaxed" data-testid="service-scope-notice">{SCOPE_FORM_NOTICE[lang]}</p>

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
                    ? `Richiesta registrata (rif. ${submissionDetails.requestId}). Ti risponderò via email.`
                    : lang === 'fr'
                    ? `Demande enregistrée (réf. ${submissionDetails.requestId}). Je vous répondrai par courriel.`
                    : lang === 'es'
                    ? `Solicitud registrada (ref. ${submissionDetails.requestId}). Te responderé por correo electrónico.`
                    : `Enquiry recorded (ref. ${submissionDetails.requestId}). I will reply by email.`)
                : (lang === 'it'
                    ? `Il servizio di inoltro email ha accettato la richiesta (rif. ${submissionDetails?.requestId}). La consegna alla casella di Noemi non è ancora verificata.`
                    : lang === 'fr'
                    ? `Le service de transfert a accepté la demande (réf. ${submissionDetails?.requestId}). La réception dans la boîte de Noemi reste à confirmer.`
                    : lang === 'es'
                    ? `El servicio de reenvío aceptó la solicitud (ref. ${submissionDetails?.requestId}). Aún no se ha confirmado la entrega al buzón de Noemi.`
                    : `The email forwarding service accepted your request (ref. ${submissionDetails?.requestId}). Delivery to Noemi’s inbox has not been verified.`)}
            </p>
          </div>
          {submissionDetails?.deliveryStatus === 'email_received_by_provider' && (
            <div className="border border-border/60 rounded-xl p-4 text-left space-y-3">
              <p className="text-sm text-foreground/80">
                {lang === 'it'
                  ? 'Il recapito finale non è ancora verificato. Se necessario, puoi inviare la stessa richiesta per email, mantenendo il riferimento, così Noemi potrà riconoscere eventuali duplicati.'
                  : lang === 'fr'
                  ? 'La réception finale reste à confirmer. Si nécessaire, envoyez la même demande par e-mail avec sa référence pour identifier les éventuels doublons.'
                  : lang === 'es'
                  ? 'La entrega final sigue sin confirmarse. Si es necesario, envía la misma solicitud por correo con su referencia para identificar posibles duplicados.'
                  : 'Final email delivery has not been verified. If needed, send the same request by email with its reference so potential duplicates can be identified.'}
              </p>
              <a className="text-primary underline underline-offset-4 font-semibold text-sm" href={manualEmailLink}>
                {lang === 'it' ? 'Apri la richiesta nell’email' : lang === 'fr' ? 'Ouvrir la demande par e-mail' : lang === 'es' ? 'Abrir solicitud por correo' : 'Open request in email'}
              </a>
            </div>
          )}
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setIsSuccess(false);
              setSubmissionDetails(null);
              setFormData(INITIAL_FORM);
              setIdempotencyKey(generateIdempotencyKey());
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
            <div role="alert" aria-live="assertive" className="bg-destructive/10 border border-destructive/30 text-destructive text-sm p-4 rounded-lg space-y-3">
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <p>{errorMessage}</p>
              </div>
              <p className="text-foreground/90 text-xs leading-relaxed">
                {lang === 'it'
                  ? 'I dati compilati sono stati conservati. Per non rischiare richieste duplicate, non ritentare subito: puoi inviare personalmente la stessa richiesta dal tuo programma email.'
                  : lang === 'fr'
                  ? 'Vos données restent dans le formulaire. Évitez les doublons et envoyez vous-même le message depuis votre messagerie.'
                  : lang === 'es'
                  ? 'Tus datos permanecen en el formulario. Evita duplicados y envía personalmente el correo desde tu aplicación.'
                  : 'Your details are preserved. To avoid duplicate requests, use your email app to send this message yourself.'}
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={manualEmailLink}
                  className="inline-flex items-center justify-center rounded-md border border-primary/60 bg-primary text-primary-foreground px-3 py-2 font-semibold text-xs hover:opacity-90"
                >
                  {lang === 'it' ? 'Apri email già compilata' : lang === 'fr' ? 'Ouvrir l’e-mail préparé' : lang === 'es' ? 'Abrir correo preparado' : 'Open prepared email'}
                </a>
                <Button type="button" variant="outline" size="sm" onClick={copyRequest} className="font-semibold text-xs">
                  {lang === 'it' ? 'Copia richiesta' : lang === 'fr' ? 'Copier la demande' : lang === 'es' ? 'Copiar solicitud' : 'Copy request'}
                </Button>
              </div>
              <p className="text-xs text-foreground/75">
                {lang === 'it'
                  ? 'L’email NON viene inviata automaticamente: dopo l’apertura devi premere Invia nel tuo programma email.'
                  : lang === 'fr'
                  ? 'L’e-mail n’est PAS envoyée automatiquement : cliquez sur Envoyer dans votre messagerie.'
                  : lang === 'es'
                  ? 'El correo NO se envía automáticamente: pulsa Enviar en tu aplicación.'
                  : 'The email is NOT sent automatically: press Send in your email app.'}
              </p>
              {manualCopyVisible && (
                <textarea
                  readOnly
                  aria-label={lang === "it" ? "Richiesta da copiare manualmente" : lang === "fr" ? "Texte de la demande à copier manuellement" : lang === "es" ? "Texto de la solicitud para copiar manualmente" : "Request text to copy"}
                  className="w-full h-40 rounded-md border border-border bg-background p-2 text-foreground text-xs"
                  value={manualRequestText}
                  onFocus={e => e.currentTarget.select()}
                />
              )}
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
                placeholder={lang === "it" ? "Numero (opzionale)" : lang === "fr" ? "Numéro (facultatif)" : lang === "es" ? "Número (opcional)" : "(Optional)"}
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
              required
              aria-required="true"
              className="w-full h-10 px-3 py-2 rounded-md border border-input bg-background text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              value={formData.oggetto}
              onChange={(e) => handleChange("oggetto", e.target.value)}
              disabled={isSubmitting}
            >
              <option value="">{lang === 'it' ? "-- Seleziona un'area di interesse --" : lang === 'fr' ? "-- Choisissez un domaine de service --" : lang === 'es' ? "-- Selecciona un área de interés --" : "-- Select area of interest --"}</option>
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
              placeholder={lang === "it" ? "Raccontami brevemente la tua attività e quali aspetti vorresti delegare o organizzare meglio." : lang === "fr" ? "Présentez votre activité et les tâches de secrétariat, de back-office ou de traduction que vous souhaitez me confier." : lang === "es" ? "Describe tu actividad y las tareas de secretaría, back office, comunicación o traducción para las que necesitas apoyo." : "Tell me about your business and the back-office, communication, content or translation tasks you would like help with."}
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
                {automatedDeliveryConfigured ? t.submit
                    : lang === "it" ? "Prepara l'email"
                    : lang === "fr" ? "Préparer l’e-mail"
                    : lang === "es" ? "Preparar el correo"
                    : "Prepare email"}
              </>
            )}
          </Button>

          <div className="pt-1 text-[11px] text-muted-foreground/80 text-center leading-relaxed">
            <span className="inline-block mr-1">🔒</span>
            {!automatedDeliveryConfigured
              ? (lang === "it" ? "La compilazione non invia automaticamente alcun dato. Dovrai aprire l'email preparata e confermare personalmente l'invio."
                : lang === "fr" ? "Aucune donnée n'est envoyée automatiquement. Vous devrez ouvrir le courriel préparé et confirmer son envoi."
                : lang === "es" ? "No se envían datos automáticamente. Tendrás que abrir el correo preparado y confirmar su envío."
                : "No data is sent automatically. You will need to open the prepared email and confirm sending it.")
              : lang === 'it'
              ? "La richiesta viene inoltrata tramite il servizio email configurato oppure registrata nel sistema di gestione delle richieste. Consulta l’informativa privacy per conoscere i fornitori e il trattamento dei dati."
              : lang === 'fr'
              ? "Votre demande est transmise par le service d’envoi d’e-mails configuré ou enregistrée dans le système de gestion des demandes. Consultez la politique de confidentialité pour connaître les prestataires et les traitements effectués."
              : lang === 'es'
              ? "La solicitud se transmite mediante el servicio de correo electrónico configurado o se registra en el sistema de gestión de solicitudes. Consulta la política de privacidad para conocer los proveedores y el tratamiento de los datos."
              : "Your enquiry is sent through the configured email delivery service or recorded in the request management system. Please read the privacy policy for details about service providers and data processing."}
          </div>

          <p className="text-xs text-foreground/50 text-center">* {lang === "it" ? "campi obbligatori" : lang === "fr" ? "champs obligatoires" : lang === "es" ? "campos obligatorios" : "required fields"}</p>
        </form>
      )}
    </div>
  );
}
