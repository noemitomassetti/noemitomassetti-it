import type { Language } from './i18n/types';

/**
 * Public professional service perimeter shared by the site and NoeTom intake.
 * Personal bookkeeping features, if any, belong solely to the private owner
 * workspace; they must never be proposed as customer-facing assignments.
 *
 * Only classify explicit operations, not generic references to business,
 * customers, commercial correspondence, quotations or order updates.
 */
export type ExcludedService = 'administration' | 'accounting' | 'acquisition';

const normalize = (value: string): string => value.toLowerCase()
  .replace(/[’']/g, ' ')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/\s+/g, ' ').trim();

const acquisition = [
  /lead[ -]?gen(?:eration)?/, /prospect(?:ing|ion|ar)?/, /cold[ -]?(?:call|outreach|email)/,
  /telemarketing/, /chiamat[ea] (?:a freddo|commercial)/,
  /ricerca (?:di )?contatti/, /trova(?:re)? (?:nuovi )?clienti/,
  /acquisizion[ei] (?:di )?clienti/, /captacion (?:de )?clientes/,
  /acquisition de clients/, /customer acquisition/, /find new customers/,
  /appointment setting/, /fissare appuntamenti commerciali/,
  /prise de rendez-vous commerciaux/, /concertar citas comerciales/,
  /reclutament[oi] (?:di )?(?:intervistat|partecipant)/,
  /recrutement de participants/, /recruit(?:ing)? (?:interview )?participants/, /interview participants? recruitment/, /interview participant recruitment/, /recruitment of interview participants/, 
  /reclutamiento de participantes/, /pay.per.(?:appointment|interview)/,
  /compenso (?:a risultato )?per (?:appuntament|intervist)/,
  /remuneration par rendez-vous/, /pago por (?:cita|entrevista)/,
];
const accounting = [
  /contabilit/, /registrazion[ei] contabil/, /tenuta (?:della )?contabil/,
  /fatturazion/, /emissione fattur/, /gestione (?:di |delle? )?fattur/, /emissione di fattur/, /gestione fiscale/, /preparazione fattur/, 
  /emett(?:ere|i) fattur/, /predisposizione fattur/,
  /bookkeep/, /accounting services/, /manage (?:my |our )?invoic/,
  /issu(?:e|ing) invoic/, /invoic(?:ing|e generation)/,
  /tax filing/, /tax returns?/, /tax administration/,
  /gestion (?:des )?factur/, /facturation/, /comptabilit/,
  /declarations? fiscales?/, /gestion (?:de )?factur/,
  /facturacion/, /contabilidad/, /declaracion(?:es)? fiscales?/,
  /f24/, /dichiarazion[ei] (?:iva|dei redditi|fiscal)/,
  /tenuta libri contabil/,
];
const administration = [
  /amministrazione aziendale/, /supporto amministrativo/,
  /attivit[aa] amministrativ/, /gestione amministrativa aziendale/,
  /business administration/, /administrative services/,
  /administrative support/, /office administration/,
  /gestion administrative (?:d|de|des|du)/, /assistance administrative/,
  /administration d entreprise/, /gestion administrativa/,
  /administracion (?:de empresas|empresarial)/,
  /apoyo administrativo/,
];

export function detectExcludedService(raw: string): ExcludedService | null {
  const text = normalize(raw);
  if (!text) return null;
  if (acquisition.some((rule) => rule.test(text))) return 'acquisition';
  if (accounting.some((rule) => rule.test(text))) return 'accounting';
  if (administration.some((rule) => rule.test(text))) return 'administration';
  return null;
}

export const SCOPE_EXCLUDED_REPLY: Record<ExcludedService, Record<Language, string>> = {
  acquisition: {
    it: 'Non offro telemarketing, acquisizione clienti, lead generation, prospecting, ricerca contatti commerciali, appuntamenti di vendita o reclutamento di intervistati. Posso svolgere soltanto ricerche informative a supporto delle attività già concordate.',
    en: 'I do not offer telemarketing, customer acquisition, lead generation, prospecting, sales contact lists, appointment setting or interview recruitment. Informational research is available only in support of an existing agreed assignment.',
    fr: 'Je ne propose ni télémarketing, ni prospection, ni acquisition de clients, ni recherche de contacts commerciaux, ni prise de rendez-vous de vente, ni recrutement de participants. Les recherches documentaires servent uniquement à soutenir un travail déjà convenu.',
    es: 'No ofrezco telemarketing, captación de clientes, generación de leads, prospeccion, búsqueda de contactos comerciales, citas de venta ni reclutamiento de participantes. La investigación informativa solo apoya trabajos previamente acordados.',
  },
  accounting: {
    it: 'Non offro contabilità, registrazioni contabili, fatturazione, emissione di fatture, gestione fiscale o dichiarazioni. Posso invece preparare e inviare preventivi operativi secondo le istruzioni del cliente, senza attività contabili.',
    en: 'I do not offer bookkeeping, accounting entries, invoicing, invoice issuing or tax administration. I can prepare and send operational quotations based on a client’s instructions, without accounting duties.',
    fr: 'Je ne propose pas de comptabilite, de saisie comptable, de facturation, d emission de factures ni de gestion fiscale. Je peux preparer et envoyer des devis operationnels selon les consignes du client, sans comptabilite.',
    es: 'No ofrezco contabilidad, asientos contables, facturacion, emision de facturas ni gestion fiscal. Puedo preparar y enviar presupuestos operativos siguiendo las instrucciones del cliente, sin tareas contables.',
  },
  administration: {
    it: 'Non offro amministrazione aziendale o supporto amministrativo. I servizi disponibili comprendono segreteria organizzativa, back office operativo, gestione di dati, ordini e listini, preventivi su istruzioni del cliente e comunicazioni multilingue.',
    en: 'I do not offer business administration or administrative support. Available services cover organisational secretarial work, operational back office, data entry, orders, price-list updates, instruction-based quotations and multilingual communications.',
    fr: 'Je ne propose pas de gestion administrative d entreprise ni d assistance administrative. Mes services couvrent le secretariat organisationnel, le back-office operationnel, la saisie de donnees, les commandes, les tarifs, les devis sur consignes et les communications multilingues.',
    es: 'No ofrezco administracion de empresas ni apoyo administrativo. Mis servicios incluyen secretaria organizativa, back office operativo, entrada de datos, pedidos, tarifas, presupuestos segun instrucciones y comunicacion multilingue.',
  },
};

export const SCOPE_FORM_NOTICE: Record<Language, string> = {
  it: 'Servizi disponibili: segreteria organizzativa, back office operativo, assistenza ai clienti gia acquisiti, comunicazioni multilingue, traduzioni e contenuti digitali. Non sono accettate richieste di amministrazione aziendale, contabilità, fatturazione o acquisizione commerciale.',
  en: 'Available: organisational secretarial work, operational back office, existing-customer care, multilingual correspondence, translation and digital content. Business administration, accounting, invoicing and sales prospecting are not accepted.',
  fr: 'Services : secretariat organisationnel, back-office operationnel, service aux clients existants, correspondance multilingue, traduction et contenus numeriques. Les demandes de gestion administrative, comptabilite, facturation ou prospection ne sont pas acceptees.',
  es: 'Servicios: secretaria organizativa, back office operativo, atencion a clientes existentes, correspondencia multilingue, traduccion y contenidos digitales. No se aceptan solicitudes de administracion empresarial, contabilidad, facturacion ni captacion comercial.',
};
