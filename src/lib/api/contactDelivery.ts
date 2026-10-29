/**
 * The public professional contact is info@noemitomassetti.it.
 * The provider recipient is deliberately configurable and MAY BE DIFFERENT:
 * the existing Gmail destination is preserved until the professional mailbox
 * has been activated and its actual delivery has been tested.
 * An environment value is NOT a secret; never place API keys in VITE_* variables.
 */
const LEGACY_PROVIDER_RECIPIENT = 'noemitom@gmail.com';

export function getFormSubmitRecipient(): string {
  const supplied = (import.meta.env?.VITE_FORM_RECIPIENT_EMAIL || '').trim();
  const recipient = supplied || LEGACY_PROVIDER_RECIPIENT;
  if (recipient.length > 150 || !/^[^\s@/]+@[^\s@/]+\.[^\s@/]+$/.test(recipient)) {
    throw new Error('Destinatario del modulo non valido: controllare VITE_FORM_RECIPIENT_EMAIL.');
  }
  return recipient;
}

export function getFormSubmitUrl(): string {
  return `https://formsubmit.co/ajax/${encodeURIComponent(getFormSubmitRecipient())}`;
}
