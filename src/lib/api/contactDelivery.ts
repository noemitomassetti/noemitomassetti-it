/**
 * The public professional contact is info@noemitomassetti.it.
 * The professional mailbox is also the default for an explicitly enabled
 * legacy provider. Web3Forms recipients are configured in its dashboard.
 * An environment value is NOT a secret; never place API keys in VITE_* variables.
 */
const LEGACY_PROVIDER_RECIPIENT = 'info@noemitomassetti.it';

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
