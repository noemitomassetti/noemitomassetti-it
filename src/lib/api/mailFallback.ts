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

const ADDRESS = 'info@noemitomassetti.it';
const cleanHeader = (s: string) => s.replace(/[\r\n\t]+/g, ' ').trim().slice(0, 160);

export function createManualContactText(data: ManualContactDraft): {subject: string; body: string} {
  const service = cleanHeader(data.service || 'Richiesta generale') || 'Richiesta generale';
  const subject = 'Richiesta dal sito - ' + service;
  const parts = [
    'RICHIESTA DI CONTATTO / PREVENTIVO',
    '',
    'Nome: ' + cleanHeader(data.fullName),
    'Email del mittente: ' + cleanHeader(data.email),
    'Telefono: ' + (cleanHeader(data.phone || '') || 'Non indicato'),
    'Servizio: ' + service,
    ...(data.reference ? ['Riferimento: ' + cleanHeader(data.reference)] : []),
    '',
    'Descrizione:',
    data.message.trim(),
    '',
    'Inviato manualmente tramite il programma email del mittente.',
  ];
  return {subject, body: parts.join('\n')};
}

export function getManualContactMailto(data: ManualContactDraft): string {
  const {subject, body} = createManualContactText(data);
  return 'mailto:' + ADDRESS + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
}

export function getManualContactPlainText(data: ManualContactDraft): string {
  const {subject, body} = createManualContactText(data);
  return 'A: ' + ADDRESS + '\nOggetto: ' + subject + '\n\n' + body;
}
