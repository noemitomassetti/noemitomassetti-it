/**
 * Explicit manual alternative when the automated contact provider is not confirmed.
 * This does not send any message. The visitor must press Send in their mail client.
 * Keep the request details in-memory: never place them in internal page URLs or logs.
 */
export type ManualContactDraft = {
  fullName: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  reference?: string;
};

export type ManualContactLocale = 'it' | 'en' | 'fr' | 'es';
const ADDRESS = 'info@noemitomassetti.it';
const cleanHeader = (s: string) => s.replace(/[\r\n\t]+/g, ' ').trim().slice(0, 160);

const LABELS: Record<ManualContactLocale, {
  generic: string; subject: string; title: string; name: string; senderEmail: string;
  phone: string; notProvided: string; service: string; reference: string; description: string;
  sentManually: string; to: string; emailSubject: string;
}> = {
  it: {generic:'Richiesta generale',subject:'Richiesta dal sito - ',title:'RICHIESTA DI CONTATTO / PREVENTIVO',
    name:'Nome',senderEmail:'Email del mittente',phone:'Telefono',notProvided:'Non indicato',
    service:'Servizio',reference:'Riferimento',description:'Descrizione',
    sentManually:'Inviato manualmente tramite il programma email del mittente.',to:'A',emailSubject:'Oggetto'},
  en: {generic:'General enquiry',subject:'Website enquiry - ',title:'CONTACT / QUOTATION ENQUIRY',
    name:'Name',senderEmail:'Sender email',phone:'Phone',notProvided:'Not provided',
    service:'Service',reference:'Reference',description:'Description',
    sentManually:'Sent manually using the sender’s email application.',to:'To',emailSubject:'Subject'},
  fr: {generic:'Demande générale',subject:'Demande depuis le site - ',title:'DEMANDE DE CONTACT / DE DEVIS',
    name:'Nom',senderEmail:'Adresse e-mail de l’expéditeur',phone:'Téléphone',notProvided:'Non renseigné',
    service:'Prestation',reference:'Référence',description:'Description',
    sentManually:'Message envoyé manuellement depuis la messagerie de l’expéditeur.',to:'À',emailSubject:'Objet'},
  es: {generic:'Consulta general',subject:'Solicitud desde el sitio web - ',title:'SOLICITUD DE CONTACTO / PRESUPUESTO',
    name:'Nombre',senderEmail:'Correo electrónico del remitente',phone:'Teléfono',notProvided:'No indicado',
    service:'Servicio',reference:'Referencia',description:'Descripción',
    sentManually:'Mensaje enviado manualmente desde el correo electrónico del remitente.',to:'Para',emailSubject:'Asunto'},
};

export function createManualContactText(data: ManualContactDraft, locale: ManualContactLocale = 'it'): {subject: string; body: string} {
  const t = LABELS[locale];
  const service = cleanHeader(data.service || t.generic) || t.generic;
  const subject = t.subject + service;
  const parts = [
    t.title, '',
    t.name + ': ' + cleanHeader(data.fullName),
    t.senderEmail + ': ' + cleanHeader(data.email),
    t.phone + ': ' + (cleanHeader(data.phone || '') || t.notProvided),
    t.service + ': ' + service,
    ...(data.reference ? [t.reference + ': ' + cleanHeader(data.reference)] : []),
    '', t.description + ':', data.message.trim(), '',
    t.sentManually,
  ];
  return {subject, body: parts.join('\n')};
}

export function getManualContactMailto(data: ManualContactDraft, locale: ManualContactLocale = 'it'): string {
  const {subject, body} = createManualContactText(data, locale);
  return 'mailto:' + ADDRESS + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

export function getManualContactPlainText(data: ManualContactDraft, locale: ManualContactLocale = 'it'): string {
  const {subject, body} = createManualContactText(data, locale);
  const t = LABELS[locale];
  return t.to + ': ' + ADDRESS + '\n' + t.emailSubject + ': ' + subject + '\n\n' + body;
}
