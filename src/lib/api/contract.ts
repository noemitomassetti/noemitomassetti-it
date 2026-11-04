/**
 * BINDING CONTRACT SPECIFICATION: NOEMI (PUBLIC SITE) <-> NOETOM (OPS ENGINE)
 * Shared Domain Entities, Lifecycle States, and Public REST Interfaces.
 * Version: 2.0.0 (October 2026)
 */

import { Language } from '../i18n/types';

// ============================================================================
// 1. LIFECYCLE STATES & ENUMS
// ============================================================================

export type JobStatus =
  | 'received'
  | 'needs_info'
  | 'quoted'
  | 'awaiting_acceptance'
  | 'accepted'
  | 'in_progress'
  | 'ready_for_review'
  | 'revision_requested'
  | 'approved'
  | 'delivery_pending'
  | 'delivered'
  | 'closed'
  | 'canceled'
  | 'failed';

export type AgreementType =
  | 'fixed_one_off'
  | 'hourly_ad_hoc'
  | 'hourly_package_10'
  | 'hourly_package_20'
  | 'monthly_retainer';

export type AgreementStatus =
  | 'draft'
  | 'proposed'
  | 'accepted'
  | 'active'
  | 'paused'
  | 'completed'
  | 'terminated';

export type ServiceCategory =
  | 'virtual_assistance'
  | 'customer_care'
  | 'translation_localisation'
  | 'content_writing'
  | 'online_research'
  | 'digital_support';

// ============================================================================
// 2. DOMAIN ENTITIES
// ============================================================================

export interface ServiceEntity {
  id: string;
  slug: string;
  category: ServiceCategory;
  title: Record<Language, string>;
  description: Record<Language, string>;
  deliverables: Record<Language, string[]>;
  exclusions: Record<Language, string[]>;
  pricingRule: {
    ruleVersion: string;
    model: 'hourly' | 'per_word' | 'package' | 'custom';
    baseRate: number;
    currency: 'EUR';
    vatNotice: Record<Language, string>;
  };
  enabled: boolean;
}

export interface LeadEntity {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  locale: Language;
  consents: {
    privacyGdpr: boolean;
    newsletter?: boolean;
    timestamp: string;
    userAgent?: string;
  };
  createdAt: string;
}

export interface ClientEntity {
  id: string;
  leadId: string;
  organization?: string;
  country: string;
  locale: Language;
  preferences?: {
    communicationChannel: 'email' | 'portal';
    approvedGlossaryId?: string;
  };
  retentionPolicy: {
    dataRetentionMonths: number;
    purgeAfterCompletion: boolean;
  };
  createdAt: string;
}

export interface RequestEntity {
  id: string;
  leadId: string;
  serviceId: string;
  sourceLocale?: Language;
  targetLocale?: Language;
  engagementType: AgreementType;
  brief: {
    summary: string;
    details?: string;
    wordCountEstimate?: number;
    hoursEstimate?: number;
    deadlineDesired?: string;
    sourceMaterialsNotice?: string;
    glossaryAvailable?: boolean;
  };
  attachments?: Array<{
    fileName: string;
    storageKey?: string;
    sizeBytes: number;
    mimeType: string;
  }>;
  consentSnapshot: {
    acceptedAt: string;
    privacyNoticeVersion: string;
  };
  createdAt: string;
}

export interface QuoteEntity {
  id: string;
  requestId: string;
  ruleVersion: string;
  inputs: Record<string, unknown>;
  estimateAmount: number;
  currency: 'EUR';
  taxDisclosure: {
    regime: string;
    appliesVat: boolean;
    statutoryContributionNotice: string;
  };
  status: 'draft' | 'presented' | 'accepted' | 'rejected' | 'superseded';
  approvedByNoemiAt?: string;
  acceptedByClientAt?: string;
  expiresAt: string;
  createdAt: string;
}

export interface AgreementEntity {
  id: string;
  clientId: string;
  serviceIds: string[];
  type: AgreementType;
  scope: string;
  excludedTasks: string[];
  rateOrFee: number;
  currency: 'EUR';
  periodStart: string;
  periodEnd?: string;
  renewalPolicy: 'manual' | 'none';
  monthlyHourCap?: number;
  approvedByNoemiAt: string;
  acceptedByClientAt: string;
  status: AgreementStatus;
  version: number;
}

export interface TimeEntryEntity {
  id: string;
  jobId: string;
  agreementId?: string;
  startedAt: string;
  endedAt: string;
  minutes: number;
  description: string;
  isBillable: boolean;
  reviewedBy: 'Noemi';
  status: 'recorded' | 'approved' | 'invoiced';
}

export interface JobEntity {
  id: string;
  requestId: string;
  clientId: string;
  quoteId?: string;
  agreementId?: string;
  status: JobStatus;
  assignedWorkflow: string;
  deadline?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ReviewEntity {
  id: string;
  jobId: string;
  version: number;
  decision: 'approved' | 'revision_required';
  notes: string;
  reviewedBy: 'Noemi';
  reviewedAt: string;
}

export interface DeliveryEntity {
  id: string;
  jobId: string;
  approvedVersion: number;
  recipient: string;
  status: 'pending' | 'sent' | 'acknowledged';
  sentAt?: string;
}

export interface AIUsageEntity {
  id: string;
  jobId: string;
  model: string;
  tokensTotal: number;
  estimatedCostEur: number;
  internalOnly: true;
  status: 'logged';
  timestamp: string;
}

// ============================================================================
// 3. PUBLIC API SCHEMAS & DTOs (/api/v1/public)
// ============================================================================

export type SubmissionDeliveryStatus =
  | 'persisted_in_noetom'
  | 'email_received_by_provider'
  | 'failed';

export interface CreatePublicRequestPayload {
  fullName: string;
  email: string;
  phone?: string;
  serviceId: string;
  locale: Language;
  engagementType: AgreementType;
  brief: string;
  sourceLocale?: Language;
  targetLocale?: Language;
  wordCountEstimate?: number;
  hoursEstimate?: number;
  deadlineDesired?: string;
  glossaryAvailable?: boolean;
  privacyGdprConsent: boolean;
  newsletterConsent?: boolean;
  idempotencyKey: string;
  honeypot?: string;
}

export interface CreatePublicRequestResult {
  success: boolean;
  requestId?: string;
  leadId?: string;
  status: 'received' | 'needs_info' | 'failed';
  deliveryStatus: SubmissionDeliveryStatus;
  message: string;
  createdAt: string;
  mode?: 'production' | 'demo';
}

export interface PublicServiceCatalogItem {
  id: string;
  slug: string;
  category: ServiceCategory;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  inclusions: string[];
  exclusions: string[];
  pricing: {
    displayRate: string;
    model: string;
    isIndicative: true;
  };
}
