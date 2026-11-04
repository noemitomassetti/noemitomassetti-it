import { ConciergeAiRequest, ConciergeAiResponse } from './types';

/**
 * Technical Client-Side Adapter for NoeTom AI Concierge.
 *
 * SAFETY INVARIANTS:
 * 1. AI mode is STRICTLY DISABLED BY DEFAULT.
 * 2. NO API keys are stored in frontend code, VITE_* environment variables, or client bundles.
 * 3. NO direct browser calls to external AI providers (Gemini, OpenAI, Anthropic).
 * 4. Deterministic guided fallback is guaranteed without error popups or broken flows.
 *
 * FUTURE SERVER-SIDE BACKEND REQUIREMENTS:
 * When a dedicated backend proxy endpoint (e.g. `/api/concierge/chat`) is provisioned:
 * - Architecture: Node.js/Express or serverless cloud function acting as a secure gateway.
 * - Authentication: CSRF tokens, session integrity, or origin validation.
 * - Rate Limiting: Strict throttling (e.g., max 15 requests/minute per client IP).
 * - Consumption Controls: Strict token caps (e.g., max 500 input tokens, max 350 output tokens).
 * - System Grounding: Injected system instructions strictly bound to Noemi's official services,
 *   referencing `PRICING_DATA`, explicitly refusing legal/tax advice, and clarifying that final
 *   quotes require human review.
 * - Safety & Moderation: Input sanitization and prompt injection shields.
 */

// Toggle flag: false by default. No simulated generation.
const IS_AI_ENABLED = false;

// Future secure proxy route (must run on backend, never directly to Gemini from client)
const AI_PROXY_ENDPOINT = '/api/concierge/chat';

/**
 * Checks whether the server-side AI concierge backend is currently enabled and configured.
 */
export function isAiConciergeEnabled(): boolean {
  return IS_AI_ENABLED;
}

/**
 * Queries the AI Concierge backend if enabled.
 * If disabled (the current safe production default), returns a structured fallback
 * instructing the component to use the deterministic guided path.
 */
export async function queryAiConcierge(
  request: ConciergeAiRequest
): Promise<ConciergeAiResponse> {
  if (!isAiConciergeEnabled()) {
    return {
      replyText: '',
      isAiGenerated: false,
      fallbackReason: 'AI_DISABLED_SAFE_MODE',
    };
  }

  // Future implementation when server-side proxy is deployed:
  try {
    const response = await fetch(AI_PROXY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`AI Gateway error (HTTP ${response.status})`);
    }

    const data = await response.json();
    return {
      replyText: data.replyText || '',
      suggestedService: data.suggestedService,
      isAiGenerated: true,
    };
  } catch (error) {
    console.warn('[NoeTom AI Adapter] Server gateway unavailable, falling back to deterministic mode:', error);
    return {
      replyText: '',
      isAiGenerated: false,
      fallbackReason: 'GATEWAY_UNAVAILABLE',
    };
  }
}
