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
    fr: 'Je ne propose ni télémarketing, ni prospection, ni acquisition de clients, ni recherche de contacts commerciaux, ni prise de rendez-vous de vente, ni recrutement de participants à des entretiens. Mes recherches documentaires servent uniquement à soutenir les activités déjà convenues.',
    es: 'No ofrezco telemarketing, captación de clientes, generación de leads, prospección, búsqueda de contactos comerciales, citas de venta ni reclutamiento de participantes. La investigación informativa solo apoya trabajos previamente acordados.',
  },
  accounting: {
    it: 'Non offro contabilità, registrazioni contabili, fatturazione, emissione di fatture, gestione fiscale o dichiarazioni. Posso invece preparare e inviare preventivi operativi secondo le istruzioni del cliente, senza attività contabili.',
    en: 'I do not offer bookkeeping, accounting entries, invoicing, invoice issuing or tax administration. I can prepare and send operational quotations based on a client’s instructions, without accounting duties.',
    fr: 'Je ne propose ni comptabilité, ni saisie comptable, ni facturation, ni émission de factures, ni gestion fiscale. Je peux préparer et transmettre des devis commerciaux selon les instructions du client, sans effectuer de tâches comptables.',
    es: 'No ofrezco contabilidad, asientos contables, facturación, emisión de facturas ni gestión fiscal. Puedo preparar y enviar presupuestos comerciales siguiendo las instrucciones del cliente, sin realizar tareas contables.',
  },
  administration: {
    it: 'Non offro amministrazione aziendale o supporto amministrativo. I servizi disponibili comprendono segreteria organizzativa, back office operativo, gestione di dati, ordini e listini, preventivi su istruzioni del cliente e comunicazioni multilingue.',
    en: 'I do not offer business administration or administrative support. Available services cover organisational secretarial work, operational back office, data entry, orders, price-list updates, instruction-based quotations and multilingual communications.',
    fr: 'Je ne propose ni gestion administrative d’entreprise ni assistance administrative. Mes services comprennent le secrétariat organisationnel, le back-office opérationnel, la saisie de données, le suivi des commandes et tarifs, les devis préparés selon vos consignes et les communications convenues.',
    es: 'No ofrezco administración de empresas ni apoyo administrativo. Mis servicios incluyen secretaría organizativa, back office operativo, entrada de datos, pedidos, listas de precios, presupuestos según instrucciones y comunicaciones acordadas.',
  },
};

export const SCOPE_FORM_NOTICE: Record<Language, string> = {
  it: 'Servizi disponibili: segreteria organizzativa, back office operativo, assistenza scritta ai clienti già acquisiti, corrispondenza multilingue e traduzioni professionali tra IT e EN/FR/ES, oltre a contenuti digitali. Non accetto incarichi di amministrazione aziendale, contabilità, fatturazione o acquisizione commerciale.',
  en: 'For international clients: professional translation between Italian and English, French and Spanish in both directions; Italian-market localisation; written support for existing customers in Italian, English, French and Spanish; and agreed operational tasks related to Italy. No business administration, accounting, invoicing, sales prospecting or cold outreach.',
  fr: 'Pour les clients internationaux : traduction professionnelle dans les deux sens entre l’italien et l’anglais, le français et l’espagnol, localisation pour le marché italien, soutien écrit aux clients existants en italien, anglais, français et espagnol, et tâches opérationnelles convenues liées à l’Italie. Pas de gestion administrative, de comptabilité, de facturation ni de prospection.',
  es: 'Para clientes internacionales: traducción profesional en ambas direcciones entre el italiano y el inglés, francés y español, localización para el mercado italiano, apoyo escrito a clientes existentes en italiano, inglés, francés y español y tareas operativas acordadas relacionadas con Italia. No ofrezco administración empresarial, contabilidad, facturación ni captación comercial.',
};
