import type { Language } from "./i18n/types";

/** Complete, invented customer-care work samples. Nothing was sent or handled for a real customer. */
export interface CustomerCareWorkSample {
 id: string; title: string; priority: string; sender: string; request: string; subject: string; reply: string; note: string; status: string;
}
export const CUSTOMER_CARE_SAMPLES: CustomerCareWorkSample[] = [
  {
    "id": "CC-101",
    "title": "Disponibilità di un articolo",
    "priority": "Normale",
    "sender": "Cliente A",
    "request": "Buongiorno, vorrei acquistare il quaderno A5, codice QA-120. Potete dirmi se è disponibile e se posso ritirarlo in negozio? Grazie.",
    "subject": "Re: Disponibilità quaderno QA-120",
    "reply": "Gentile Cliente,\n\ngrazie per averci scritto. Stiamo verificando sia la disponibilità del quaderno QA-120 sia la possibilità di ritirarlo in negozio.\n\nLe risponderemo appena avremo conferma di queste informazioni, così da darle indicazioni corrette prima dell'acquisto.\n\nCordiali saluti,\nServizio clienti",
    "note": "Consultare il catalogo autorizzato; verificare la giacenza effettiva e le condizioni per il ritiro con il referente. Nessuna disponibilità dichiarata prima della conferma.",
    "status": "Bozza pronta · In attesa di verifica della disponibilità e approvazione"
  },
  {
    "id": "CC-102",
    "title": "Consegna di un ordine",
    "priority": "Alta",
    "sender": "Cliente B",
    "request": "Buongiorno, ho ricevuto la conferma dell'ordine OR-204, ma non trovo una data di consegna. Potete dirmi quando arriverà? Mi serve per la prossima settimana. Grazie.",
    "subject": "Re: Informazioni sulla consegna dell'ordine OR-204",
    "reply": "Gentile Cliente,\n\ngrazie per il messaggio. Abbiamo registrato la sua richiesta relativa all'ordine OR-204.\n\nAl momento non abbiamo una data di consegna confermata. Abbiamo predisposto una verifica dello stato dell'ordine con il referente competente e le forniremo un aggiornamento non appena avremo informazioni attendibili.\n\nComprendiamo che la tempistica sia importante per lei e preferiamo non indicare una data che non possiamo ancora confermare.\n\nCordiali saluti,\nServizio clienti",
    "note": "Controllare numero ordine e stato registrato; chiedere conferma al referente logistico. Non confondere ordine ricevuto, ordine spedito e consegna prevista. Non promettere l'arrivo entro la settimana successiva.",
    "status": "Bozza pronta · Verifica logistica richiesta nello scenario · Approvazione necessaria"
  },
  {
    "id": "CC-103",
    "title": "Richiesta relativa a un documento fiscale",
    "priority": "Normale",
    "sender": "Cliente C",
    "request": "Buongiorno, avrei bisogno di un chiarimento sui dati indicati nella fattura del mio ultimo acquisto. Potete aiutarmi? Grazie.",
    "subject": "Re: Richiesta di chiarimento sul documento fiscale",
    "reply": "Gentile Cliente,\n\ngrazie per averci contattato. La sua richiesta riguarda un documento fiscale e richiede una verifica da parte dell'ufficio competente.\n\nProvvederemo a indirizzare la richiesta al referente autorizzato, che potrà fornirle le indicazioni necessarie. Se saranno richieste informazioni aggiuntive, sarà il personale incaricato a comunicarle come procedere.\n\nCordiali saluti,\nServizio clienti",
    "note": "Classificare la richiesta come amministrativa; predisporre l'inoltro al referente autorizzato, senza aprire o modificare documenti contabili, emettere fatture o fornire interpretazioni fiscali.",
    "status": "Bozza pronta · Inoltro amministrativo da autorizzare"
  }
];
export const CUSTOMER_CARE_SAMPLE_NOTICE: Record<Language,string> = {
 it:"Tre richieste, tre risposte scritte integralmente e un registro delle verifiche. Elaborati originali per il portfolio: le risposte sono bozze da approvare, non comunicazioni inviate.",
 en:"Three enquiries, three complete draft replies and an approval log. Original portfolio work: the replies are not correspondence that was sent.",
 fr:"Trois demandes, trois réponses intégrales et un tableau de suivi. Travaux originaux du portfolio : les messages sont des brouillons à valider.",
 es:"Tres solicitudes, tres respuestas completas y un registro de comprobaciones. Trabajos originales del portfolio: los mensajes son borradores pendientes de aprobación."
};
