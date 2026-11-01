import { Language } from '../i18n/types';

export type ServiceKey = 'backoffice' | 'translation' | 'writing' | 'research' | 'web';

export type OfficialServiceId =
  | 'virtual-assistance'
  | 'translation-localization'
  | 'content-writing'
  | 'online-research'
  | 'web-landing';

export const CONCIERGE_TO_OFFICIAL_SERVICE_ID: Record<ServiceKey, OfficialServiceId> = {
  backoffice: 'virtual-assistance',
  translation: 'translation-localization',
  writing: 'content-writing',
  research: 'online-research',
  web: 'web-landing',
};

export const OFFICIAL_SERVICE_ID_TO_CONCIERGE: Record<OfficialServiceId, ServiceKey> = {
  'virtual-assistance': 'backoffice',
  'translation-localization': 'translation',
  'content-writing': 'writing',
  'online-research': 'research',
  'web-landing': 'web',
};

export interface IntakeQuestionChoice {
  id: string;
  label: Record<Language, string>;
}

export interface IntakeQuestion {
  id: string;
  prompt: Record<Language, string>;
  subtitle?: Record<Language, string>;
  placeholder?: Record<Language, string>;
  choices?: IntakeQuestionChoice[];
  allowCustomText?: boolean;
}

export interface ServiceIntakeSchema {
  serviceKey: ServiceKey;
  serviceId: OfficialServiceId;
  title: Record<Language, string>;
  shortDescription: Record<Language, string>;
  questions: IntakeQuestion[];
}

export interface QuoteDraft {
  serviceKey: ServiceKey;
  serviceId: OfficialServiceId;
  serviceTitle: Record<Language, string>;
  answers: Record<string, string>;
  customNotes?: string;
  formattedSummary: Record<Language, string>;
  createdAt: number;
}

/**
 * Technical contract interface for a future server-side AI endpoint.
 * In this version, the AI mode is strictly disabled by default.
 */
export interface ConciergeAiRequest {
  userMessage: string;
  conversationHistory: Array<{ role: 'user' | 'assistant'; content: string }>;
  lang: Language;
  currentService?: ServiceKey;
}

export interface ConciergeAiResponse {
  replyText: string;
  suggestedService?: ServiceKey;
  isAiGenerated: boolean;
  fallbackReason?: string;
}
