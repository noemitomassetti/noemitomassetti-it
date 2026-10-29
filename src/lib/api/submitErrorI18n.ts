/** UI-only translation for contact form failures. No provider error is shown verbatim
 * to visitors: it can be Italian-only or contain technical/internal details.
 * Unknown/ambiguous outcomes must never encourage a second request with a new key.
 */
export type ContactLocale = 'it' | 'en' | 'fr' | 'es';
export type ContactProblem = 'validation' | 'rateLimit' | 'uncertain';
const MESSAGES: Record<ContactLocale, Record<ContactProblem, string>> = {
  it: {
    validation: 'Controlla i dati inseriti. Verifica nome, email, descrizione e presa visione della privacy.',
    rateLimit: 'Hai effettuato troppi tentativi. Riprova più tardi senza creare richieste duplicate.',
    uncertain: 'Non è possibile confermare la ricezione. Per evitare duplicazioni, contatta Noemi direttamente prima di inviare di nuovo.',
  },
  en: {
    validation: 'Please check your name, email, request description and privacy notice acknowledgement.',
    rateLimit: 'Too many attempts. Please try again later without creating duplicate enquiries.',
    uncertain: 'We cannot confirm receipt. To avoid duplicates, please contact Noemi directly before sending your enquiry again.',
  },
  fr: {
    validation: 'Vérifiez votre nom, votre adresse e-mail, la description de votre demande et la prise de connaissance de la politique de confidentialité.',
    rateLimit: 'Trop de tentatives. Réessayez plus tard sans créer de demandes en double.',
    uncertain: 'La réception ne peut pas être confirmée. Pour éviter les doublons, contactez directement Noemi avant tout nouvel envoi.',
  },
  es: {
    validation: 'Comprueba el nombre, el correo electrónico, la descripción de la solicitud y la lectura del aviso de privacidad.',
    rateLimit: 'Demasiados intentos. Vuelve a intentarlo más tarde sin duplicar solicitudes.',
    uncertain: 'No podemos confirmar la recepción. Para evitar duplicados, contacta directamente con Noemi antes de volver a enviar la solicitud.',
  },
};

export function localizeContactError(err: unknown, locale: ContactLocale): string {
  const message = err instanceof Error ? err.message : String(err ?? '');
  const kind: ContactProblem = /429|troppe richieste|troppi tentativi|too many/i.test(message)
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
