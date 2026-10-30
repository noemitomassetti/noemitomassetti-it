/** UI-only translation for contact form failures. No provider error is shown verbatim
 * to visitors: it can be Italian-only or contain technical/internal details.
 * Unknown/ambiguous outcomes must never encourage a second request with a new key.
 */
export type ContactLocale = 'it' | 'en' | 'fr' | 'es';
export type ContactProblem = 'validation' | 'rateLimit' | 'activation' | 'blocked' | 'unconfigured' | 'uncertain';
const MESSAGES: Record<ContactLocale, Record<ContactProblem, string>> = {
  it: {
    validation: 'Controlla i dati inseriti. Verifica nome, email, descrizione e presa visione della privacy.',
    rateLimit: 'Hai effettuato troppi tentativi. Riprova più tardi senza creare richieste duplicate.',
    activation: 'Il servizio di inoltro richiede l’attivazione dell’indirizzo destinatario. L’invio non è confermato: usa l’alternativa email qui sotto.',
    blocked: 'Il servizio di inoltro ha bloccato la richiesta. Il modulo non può confermare l’invio: usa l’alternativa email qui sotto.',
    unconfigured: 'Il sistema di invio automatico non è ancora attivo. La tua richiesta non è stata inviata: usa l’email già compilata qui sotto.',
    uncertain: 'Non è possibile confermare la ricezione. Per evitare duplicazioni, contatta Noemi direttamente prima di inviare di nuovo.',
  },
  en: {
    validation: 'Please check your name, email, request description and privacy notice acknowledgement.',
    rateLimit: 'Too many attempts. Please try again later without creating duplicate enquiries.',
    activation: 'The email relay requires the recipient address to be activated. Delivery is unconfirmed; please use the email option below.',
    blocked: 'The email relay blocked the request. Delivery is unconfirmed; please use the email option below.',
    unconfigured: 'Automatic form delivery is not yet active. Your enquiry has not been sent; please use the prepared email below.',
    uncertain: 'We cannot confirm receipt. To avoid duplicates, please contact Noemi directly before sending your enquiry again.',
  },
  fr: {
    validation: 'Vérifiez votre nom, votre adresse e-mail, la description de votre demande et la prise de connaissance de la politique de confidentialité.',
    rateLimit: 'Trop de tentatives. Réessayez plus tard sans créer de demandes en double.',
    activation: 'Le service de transfert exige l’activation de l’adresse destinataire. L’envoi n’est pas confirmé ; utilisez l’option e-mail ci-dessous.',
    blocked: 'Le service de transfert a bloqué la demande. L’envoi n’est pas confirmé ; utilisez l’option e-mail ci-dessous.',
    unconfigured: 'L’envoi automatique n’est pas encore actif. Votre demande n’a pas été envoyée : utilisez l’e-mail préparé ci-dessous.',
    uncertain: 'La réception ne peut pas être confirmée. Pour éviter les doublons, contactez directement Noemi avant tout nouvel envoi.',
  },
  es: {
    validation: 'Comprueba el nombre, el correo electrónico, la descripción de la solicitud y la lectura del aviso de privacidad.',
    rateLimit: 'Demasiados intentos. Vuelve a intentarlo más tarde sin duplicar solicitudes.',
    activation: 'El servicio de reenvío requiere activar la dirección de destino. El envío no está confirmado; usa la opción de correo.',
    blocked: 'El servicio de reenvío ha bloqueado la solicitud. El envío no está confirmado; usa la opción de correo.',
    unconfigured: 'El envío automático aún no está activo. La solicitud no se ha enviado: utiliza el correo preparado abajo.',
    uncertain: 'No podemos confirmar la recepción. Para evitar duplicados, contacta directamente con Noemi antes de volver a enviar la solicitud.',
  },
};

export function localizeContactError(err: unknown, locale: ContactLocale): string {
  const message = err instanceof Error ? err.message : String(err ?? '');
  const kind: ContactProblem = /FORM_PROVIDER_NOT_CONFIGURED/.test(message)
    ? 'unconfigured'
    : /FORM_PROVIDER_ACTIVATION_REQUIRED/.test(message)
    ? 'activation'
    : /FORM_PROVIDER_BLOCKED/.test(message)
    ? 'blocked'
    : /FORM_PROVIDER_RATE_LIMIT|429|troppe richieste|troppi tentativi|too many/i.test(message)
    ? 'rateLimit'
    : /campi obbligatori|descrizione.*breve|indirizzo email.*valido|informativa privacy|dati inseriti/i.test(message)
    ? 'validation'
    : 'uncertain';
  return MESSAGES[locale][kind];
}

export const CONTACT_ERROR_TITLES: Record<ContactLocale, string> = {
  it: 'Impossibile confermare l’invio',
  en: 'Unable to confirm submission',
  fr: 'Envoi non confirmé',
  es: 'No se ha confirmado el envío',
};
export const INVALID_EMAIL: Record<ContactLocale, string> = {
  it: 'Inserisci un indirizzo email valido.',
  en: 'Please enter a valid email address.',
  fr: 'Saisissez une adresse e-mail valide.',
  es: 'Introduce una dirección de correo electrónico válida.',
};
