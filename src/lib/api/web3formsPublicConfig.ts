/**
 * Public Web3Forms form identifier. Not a secret or a privileged API token.
 *
 * Configured for the release preview. Recipient selection is managed in the
 * Web3Forms dashboard; this identifier alone does not prove inbox delivery.
 * Production publication requires a verified end-to-end delivery test.
 * The VITE_WEB3FORMS_ACCESS_KEY environment value, when defined, overrides it.
 *
 * NEVER store Web3Forms secret API keys, login tokens, or credentials here.
 */
export const WEB3FORMS_PUBLIC_ACCESS_KEY = '9e1b181f-fe7c-40d4-870e-6d1de9796288';
