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
    "sender": "Marta B. (nome di fantasia)",
    "request": "Buongiorno, vorrei acquistare il quaderno A5, codice QA-120. Potete dirmi se è disponibile e se posso ritirarlo in negozio? Grazie, Marta B.",
    "subject": "Re: Disponibilità quaderno QA-120",
    "reply": "Gentile Marta,\n\ngrazie per averci scritto. Stiamo verificando sia la disponibilità del quaderno QA-120 sia la possibilità di ritirarlo in negozio.\n\nLe risponderemo appena avremo conferma di queste informazioni, così da darle indicazioni corrette prima dell'acquisto.\n\nCordiali saluti,\nServizio clienti",
    "note": "Consultare il catalogo autorizzato; verificare la giacenza effettiva e le condizioni per il ritiro con il referente. Nessuna disponibilità dichiarata prima della conferma.",
    "status": "Bozza pronta · In attesa di verifica della disponibilità e approvazione"
  },
  {
    "id": "CC-102",
    "title": "Consegna di un ordine",
    "priority": "Alta",
    "sender": "Luca R. (nome di fantasia)",
    "request": "Buongiorno, ho ricevuto la conferma dell'ordine OR-204, ma non trovo una data di consegna. Potete dirmi quando arriverà? Mi serve per la prossima settimana. Grazie, Luca R.",
    "subject": "Re: Informazioni sulla consegna dell'ordine OR-204",
    "reply": "Gentile Luca,\n\ngrazie per il messaggio. Abbiamo registrato la sua richiesta relativa all'ordine OR-204.\n\nAl momento non abbiamo una data di consegna confermata. Abbiamo predisposto una verifica dello stato dell'ordine con il referente competente e le forniremo un aggiornamento non appena avremo informazioni attendibili.\n\nComprendiamo che la tempistica sia importante per lei e preferiamo non indicare una data che non possiamo ancora confermare.\n\nCordiali saluti,\nServizio clienti",
    "note": "Controllare numero ordine e stato registrato; chiedere conferma al referente logistico. Non confondere ordine ricevuto, ordine spedito e consegna prevista. Non promettere l'arrivo entro la settimana successiva.",
    "status": "Bozza pronta · Verifica logistica richiesta nello scenario · Approvazione necessaria"
  },
  {
    "id": "CC-103",
    "title": "Richiesta relativa a un documento fiscale",
    "priority": "Normale",
    "sender": "Giulia S. (nome di fantasia)",
    "request": "Buongiorno, avrei bisogno di un chiarimento sui dati indicati nella fattura del mio ultimo acquisto. Potete aiutarmi? Grazie, Giulia S.",
    "subject": "Re: Richiesta di chiarimento sul documento fiscale",
    "reply": "Gentile Giulia,\n\ngrazie per averci contattato. La sua richiesta riguarda un documento fiscale e richiede una verifica da parte dell'ufficio competente.\n\nProvvederemo a indirizzare la richiesta al referente autorizzato, che potrà fornirle le indicazioni necessarie. Se saranno richieste informazioni aggiuntive, sarà il personale incaricato a comunicarle come procedere.\n\nCordiali saluti,\nServizio clienti",
    "note": "Classificare la richiesta come amministrativa; predisporre l'inoltro al referente autorizzato, senza aprire o modificare documenti contabili, emettere fatture o fornire interpretazioni fiscali.",
    "status": "Bozza pronta · Inoltro amministrativo da autorizzare"
  }
];
export const CUSTOMER_CARE_SAMPLE_NOTICE: Record<Language,string> = {
 it:"Tre richieste simulate, tre risposte redatte integralmente e un registro di lavorazione. Nomi, codici e situazioni sono inventati. Le risposte sono bozze da approvare: nessun messaggio è stato inviato.",
 en:"Three invented customer enquiries, three complete draft replies and an illustrative case log. Names, order details and scenarios are fictional; no reply was sent.",
 fr:"Trois demandes fictives, trois réponses intégralement rédigées et un registre de suivi. Les noms et les situations sont inventés ; aucun message n’a été envoyé.",
 es:"Tres solicitudes ficticias, tres respuestas completas y un registro de seguimiento. Los nombres y los casos son inventados; no se ha enviado ningún mensaje."
};
