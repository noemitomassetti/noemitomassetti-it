import type { OperationalDeepCase } from "./portfolioOperationalTypes";
/** Independent illustrative work samples, not client deliverables. */
export const OPERATIONAL_SAMPLES_C: OperationalDeepCase[] = [
  {
    "id": "commercial-quote-from-approved-pricelist",
    "category": "backoffice",
    "title": {
      "it": "Preventivo su istruzioni: da richiesta a bozza verificabile",
      "en": "Quote preparation from approved terms",
      "fr": "Préparation d'un devis à partir d'instructions",
      "es": "Preparación de presupuestos según instrucciones"
    },
    "service": {
      "it": "Back office commerciale: preventivi su indicazioni del cliente",
      "en": "Operational commercial back office and quotations",
      "fr": "Back-office commercial et devis sur consignes",
      "es": "Back office comercial y presupuestos"
    },
    "scenario": {
      "it": "Uno studio di forniture per ufficio immaginario riceve da un cliente già acquisito una richiesta di prezzo per materiali di allestimento. Le tariffe sono decise dal titolare: l’assistente prepara soltanto la bozza e segnala quanto manca.",
      "en": "An illustrative office-supply business receives a quotation request from an existing customer. The owner sets prices; the assistant prepares only an approval-ready draft.",
      "fr": "Une entreprise illustrative reçoit une demande de devis d’un client existant. La responsable valide prix et conditions.",
      "es": "Una empresa de ejemplo recibe una solicitud de presupuesto de un cliente actual. La responsable aprueba precios y condiciones."
    },
    "objective": {
      "it": "Produrre una bozza chiara, matematicamente corretta e tracciabile senza definire sconti, imposte, trasporto o condizioni non autorizzate.",
      "en": "Prepare an arithmetically correct draft without adding unsupported information discounts, taxes, shipping or terms.",
      "fr": "Préparer un brouillon fiable, sans inventer les frais ni les conditions.",
      "es": "Preparar un borrador correcto sin añadir datos sin confirmar descuentos ni condiciones."
    },
    "inputs": {
      "it": "Listino approvato di esempio: contenitore A €32,50; pannello B €45,00. Cliente chiede quattro A e tre B. Trasporto e condizioni fiscali non comunicati.",
      "en": "Approved sample prices: A €32.50, B €45.00; customer wants four A and three B. Shipping and tax treatment unknown.",
      "fr": "Tarifs illustratifs validés : A 32,50 €, B 45 €. Quatre A et trois B ; frais et taxes inconnus.",
      "es": "Tarifa aprobada de ejemplo: A 32,50 € y B 45 €; cuatro A y tres B; envío e impuestos pendientes."
    },
    "workflow": [
      {
        "it": "Leggere richiesta e listino, controllando versione e codici.",
        "en": "Compare request with approved SKUs and price-list version.",
        "fr": "Comparer demande et références approuvées.",
        "es": "Comparar pedido y tarifa aprobada."
      },
      {
        "it": "Calcolare importi di riga e totale parziale separando informazioni mancanti.",
        "en": "Calculate line amounts and provisional subtotal.",
        "fr": "Calculer les montants et le sous-total provisoire.",
        "es": "Calcular importes y subtotal provisional."
      },
      {
        "it": "Predisporre bozza con chiarimenti, evitando prezzi di esempio.",
        "en": "Prepare a draft that flags unknown conditions.",
        "fr": "Préparer un brouillon avec points ouverts.",
        "es": "Preparar borrador con datos pendientes."
      },
      {
        "it": "Inviare al responsabile per approvazione prima di ogni comunicazione esterna.",
        "en": "Submit for owner approval before customer-facing delivery.",
        "fr": "Obtenir validation avant l’envoi.",
        "es": "Solicitar aprobación antes del envío."
      },
      {
        "it": "Registrare versione, data e autorizzazione del documento finale.",
        "en": "Record version and explicit final authorisation.",
        "fr": "Tracer la version et la validation.",
        "es": "Registrar versión y autorización."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Prospetto prezzi verificato",
          "en": "Checked quote calculation",
          "fr": "Tableau de calcul",
          "es": "Cálculo comprobado"
        },
        "content": "RICHIESTA CLIENTE ESISTENTE — RIF. PREV-027\nListino di riferimento L-2026-11 v02 — DATI DI ESEMPIO\nArticolo A, codice CON-101: 4 × €32,50 = €130,00.\nArticolo B, codice PAN-205: 3 × €45,00 = €135,00.\nSOMMA ARITMETICA DELLE RIGHE: €265,00.\nDA DEFINIRE CON IL TITOLARE: eventuali spese di trasporto, trattamento fiscale, termini di consegna, validità dell'offerta, sconti eventualmente autorizzati.\nSTATO: BOZZA INTERNA NON INVIABILE. La somma non rappresenta un totale definitivo da pagare. Nessun prezzo viene cambiato dall'assistente.",
        "explanation": {
          "it": "Il calcolo è verificabile e il totale resta provvisorio finché mancano condizioni essenziali.",
          "en": "Arithmetic is transparent; the figure is not presented as a final payable quote.",
          "fr": "Calcul vérifiable, sans total définitif annoncé.",
          "es": "Cálculo verificable, sin presentarlo como total final."
        }
      },
      {
        "title": {
          "it": "Email di richiesta approvazione interna",
          "en": "Internal approval email",
          "fr": "Courriel de validation interne",
          "es": "Correo de aprobación interna"
        },
        "content": "Oggetto: PREV-027 — verifica bozza prima dell'invio al cliente\nBuongiorno,\nho preparato il riepilogo della richiesta relativa agli articoli CON-101 e PAN-205 sulla base del listino L-2026-11, versione 02. Le quantità risultano rispettivamente quattro e tre unità; la somma provvisoria delle righe verificate è €265,00.\nPrima della preparazione del documento da inviare al cliente, ti chiedo conferma di eventuali costi di trasporto, trattamento fiscale applicabile, tempi di consegna, periodo di validità e sconti autorizzati.\nNon ho modificato i prezzi del listino e non ho inviato alcuna comunicazione all'esterno. Dopo la tua conferma predisporrò la versione approvata.\nGrazie.",
        "explanation": {
          "it": "La richiesta identifica esattamente le decisioni non delegate all’assistente.",
          "en": "Approval is sought for commercial decisions that are not delegated.",
          "fr": "Les décisions tarifaires restent chez le responsable.",
          "es": "Las decisiones comerciales permanecen en la empresa."
        }
      },
      {
        "title": {
          "it": "Checklist e stato della richiesta",
          "en": "Approval and status checklist",
          "fr": "Checklist de validation",
          "es": "Lista de verificación"
        },
        "content": "CONTROLLO PREVENTIVO PREV-027\n□ Cliente già acquisito e riferimento pratica corretti.\n□ Codici articolo verificati su listino L-2026-11 v02.\n□ Quantità: 4 e 3, confermate dalla richiesta.\n□ Prodotti: 130,00 + 135,00 = 265,00 euro.\n□ Trasporto: IN ATTESA DI INDICAZIONI.\n□ Imposte e condizioni fiscali: DA DEFINIRE DAL RESPONSABILE.\n□ Tempi di consegna: NON CONFERMATI.\n□ Validità della proposta: NON DEFINITA.\n□ Approvazione commerciale: NON ANCORA RICEVUTA.\nESITO: bozza utile per il controllo, non un preventivo definitivo e non una fattura. Il campo «inviato» resta vuoto fino all'effettivo invio autorizzato.",
        "explanation": {
          "it": "Il documento impedisce di confondere la preparazione della bozza con il preventivo approvato.",
          "en": "The checklist separates drafting from an authorised offer.",
          "fr": "La checklist distingue préparation et validation.",
          "es": "Separa borrador y presupuesto aprobado."
        }
      },
      {
        "title": {
          "it": "Preventivo operativo completo: bozza, controlli e consegna",
          "en": "Complete operational quote: draft, checks and handover",
          "fr": "Devis opérationnel : projet, contrôles et remise",
          "es": "Presupuesto operativo: borrador, controles y entrega"
        },
        "language": "it",
        "content": "BOZZA DI PREVENTIVO COMMERCIALE PREV-027 — CASO DIMOSTRATIVO\nAttività simulata: preparazione di un prospetto su indicazioni di un titolare; nessun documento inviato a un cliente reale.\nFonte di riferimento: listino di prova L-2026-11 v02. Destinatario: cliente già esistente C-027.\n\nELENCO DELLE RIGHE RICHIESTE\nCON-101 | Contenitore A | Quantità 4 | Prezzo unitario da listino: 32,50 € | Totale 130,00 €.\nPAN-205 | Pannello B | Quantità 3 | Prezzo unitario da listino: 45,00 € | Totale 135,00 €.\nSomma delle due righe: 265,00 €.\nLa somma è un valore operativo di prova: non comprende eventuali costi di trasporto, imposte, sconti o altre condizioni non comunicate. Non va interpretata come importo definitivo.\n\nMODELLO DI TESTO DA ALLEGARE ALLA PROPOSTA, PREVIA APPROVAZIONE\nOggetto: Riepilogo dei materiali richiesti — riferimento PREV-027\nGentile cliente,\nabbiamo predisposto il riepilogo preliminare dei materiali richiesti, sulla base delle quantità indicate e del listino di riferimento.\nContenitore A, codice CON-101: quattro unità da 32,50 €, per un importo di 130,00 €.\nPannello B, codice PAN-205: tre unità da 45,00 €, per un importo di 135,00 €.\nLa somma parziale delle righe è di 265,00 €. Prima di poterle inviare un preventivo definitivo dobbiamo confermare con il referente competente le condizioni di trasporto, gli eventuali oneri applicabili e la validità della proposta.\nLe daremo indicazioni aggiornate dopo tali verifiche.\nCordiali saluti,\nUfficio commerciale\n\nREGISTRO DEI CONTROLLI\nC-01: codici CON-101 e PAN-205 presenti nel listino ipotetico — verificato.\nC-02: quantità 4 e 3 riportate dalla richiesta — verificato.\nC-03: somme 130,00 € e 135,00 € e totale parziale 265,00 € — ricontrollati.\nC-04: validità del listino e condizioni di pagamento — decisione riservata al titolare.\nC-05: imposte, trasporto, sconti e scadenza della proposta — dati non forniti.\nC-06: autorizzazione all'invio — non presente.\n\nNOTA AL REFERENTE\nBuongiorno,\nho preparato la bozza PREV-027 e ne ho verificato i calcoli sui dati dimostrativi ricevuti. Prima dell'invio chiedo conferma della versione applicabile del listino e delle condizioni ancora mancanti. Non ho modificato i prezzi, applicato sconti o generato fatture. La pratica rimane «bozza in attesa di approvazione».\nCordiali saluti,\nBack office\n\nRISULTATO: prospetto compilato, bozza completa, sei controlli documentati. Nessuna offerta vincolante e nessuna attività fiscale.",
        "explanation": {
          "it": "Prospetto dettagliato per un cliente esistente, senza definizione autonoma di prezzi o condizioni.",
          "en": "A complete draft based solely on an approved price list, with unresolved commercial terms flagged.",
          "fr": "Projet établi sur tarif validé, avec conditions commerciales à confirmer.",
          "es": "Presupuesto basado en una tarifa aprobada, con condiciones por confirmar."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "4 × 32,50 = 130; 3 × 45 = 135; totale 265; nessun onere di esempio.",
        "en": "Arithmetic verified; no example tax or shipping.",
        "fr": "Calcul exact, pas de frais ajoutés.",
        "es": "Cálculo exacto, sin gastos de ejemplo."
      },
      {
        "it": "Autorizzazione commerciale necessaria prima dell'invio.",
        "en": "Owner approval required before sending.",
        "fr": "Validation requise avant envoi.",
        "es": "Aprobación necesaria antes de enviar."
      }
    ],
    "limits": {
      "it": "Preparazione operativa di preventivi su istruzioni: non contabilità, fatturazione, determinazione dei prezzi o trattative commerciali autonome.",
      "en": "Operational drafting only; no accounting, invoicing, independent pricing or negotiations.",
      "fr": "Préparation sur consignes, sans comptabilité ni facturation.",
      "es": "Preparación según instrucciones, sin contabilidad ni facturación."
    },
    "handoff": {
      "it": "Prospetto importi, email di verifica interna, checklist approvativa e bozza condizionata alle istruzioni.",
      "en": "Calculation, internal approval email and approval checklist.",
      "fr": "Calculs, courriel interne et checklist.",
      "es": "Cálculo, correo interno y controles."
    }
  },
  {
    "id": "international-client-italian-aftercare",
    "category": "backoffice",
    "title": {
      "it": "Azienda estera e clienti italiani: assistenza postvendita scritta",
      "en": "An international business supporting existing Italian customers",
      "fr": "Entreprise étrangère : relation avec clients italiens",
      "es": "Empresa extranjera: atención a clientes italianos"
    },
    "service": {
      "it": "Customer care in italiano per clienti esteri",
      "en": "Italian-language customer care for international businesses",
      "fr": "Suivi en italien des clients d'entreprises étrangères",
      "es": "Atención en italiano para empresas extranjeras"
    },
    "scenario": {
      "it": "Un piccolo marchio europeo immaginario che vende già a clienti in Italia ha bisogno di risposte italiane affidabili per domande sui propri ordini. Il servizio comprende smistamento, verifica informazioni e risposte approvate, non campagne di acquisizione.",
      "en": "An illustrative European brand with established Italian customers needs accurate written replies about existing orders, without prospecting or sales outreach.",
      "fr": "Une marque européenne illustrative ayant déjà des clients italiens souhaite des réponses fiables sur les commandes existantes, sans prospection.",
      "es": "Una marca europea de ejemplo con clientes italianos actuales necesita respuestas escritas fiables, sin captación."
    },
    "objective": {
      "it": "Offrire un punto di contatto italiano ordinato e cortese, mantenendo tutte le decisioni commerciali e contrattuali presso il committente.",
      "en": "Provide clear, empathetic Italian correspondence while keeping commercial decisions with the business.",
      "fr": "Assurer des échanges italiens soignés, en laissant les décisions à l’entreprise.",
      "es": "Ofrecer respuestas claras sin decidir condiciones comerciales."
    },
    "inputs": {
      "it": "Tre richieste dimostrative di clienti già acquisiti; un codice ordine di esempio, informazioni di disponibilità non confermate e una procedura per escalation.",
      "en": "Three example existing-customer enquiries, mock order codes and a basic escalation policy.",
      "fr": "Trois demandes illustratives de clients existants et des procédures de suivi.",
      "es": "Tres solicitudes de ejemplo de clientes actuales y reglas de seguimiento."
    },
    "workflow": [
      {
        "it": "Classificare il messaggio e verificare la relazione con un ordine già esistente.",
        "en": "Classify the enquiry and verify its link to an existing order.",
        "fr": "Classer la demande et vérifier la commande.",
        "es": "Clasificar la solicitud y comprobar el pedido."
      },
      {
        "it": "Distinguere informazioni confermate, da verificare e da approvare.",
        "en": "Separate verified facts from matters requiring approval.",
        "fr": "Séparer faits confirmés et points à valider.",
        "es": "Diferenciar hechos y datos pendientes."
      },
      {
        "it": "Scrivere risposta italiana con tono concordato e prossimo passo concreto.",
        "en": "Draft an Italian reply with an agreed tone and a clear next step.",
        "fr": "Rédiger une réponse italienne précise.",
        "es": "Redactar respuesta italiana clara."
      },
      {
        "it": "Escalare richieste di rimborso, modifica ordine o impegni sui tempi.",
        "en": "Escalate refunds, order changes and delivery promises.",
        "fr": "Transmettre remboursements et modifications.",
        "es": "Escalar reembolsos y cambios."
      },
      {
        "it": "Registrare il solo esito effettivo dopo approvazione e invio.",
        "en": "Record actual completion only after approval and sending.",
        "fr": "Tracer uniquement les actions effectuées.",
        "es": "Registrar solo acciones realizadas."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Email italiana completa: ordine da verificare",
          "en": "Full Italian order-status email",
          "fr": "Courriel italien : suivi de commande",
          "es": "Correo italiano: estado del pedido"
        },
        "content": "Oggetto: aggiornamento sulla richiesta relativa all'ordine INT-651\nBuongiorno,\ngrazie per averci scritto. Abbiamo ricevuto la sua richiesta relativa alla finitura richiesta per l'ordine INT-651 e stiamo verificando la disponibilità aggiornata con il nostro referente interno.\nAl momento non disponiamo ancora di una data di spedizione confermata. Preferiamo darle una risposta attendibile dopo il controllo, anziché comunicare una stima che potrebbe cambiare.\nLe scriveremo non appena avremo informazioni verificate. Se nel frattempo desidera segnalare un'esigenza legata alle tempistiche, può rispondere a questo messaggio: la inoltreremo al responsabile incaricato, senza modificare l'ordine senza autorizzazione.\nCi scusiamo per il disagio e la ringraziamo per la comprensione.\nCordiali saluti,\nServizio clienti in italiano — marchio dimostrativo\nNOTA: bozza di esempio, non inviata a persone reali.",
        "explanation": {
          "it": "Tono professionale, nessuna data di esempio e decisioni riservate al titolare.",
          "en": "Natural Italian, no example dispatch date and clear escalation.",
          "fr": "Italien naturel, sans délai inventé.",
          "es": "Italiano natural, sin fechas de ejemplo."
        }
      },
      {
        "title": {
          "it": "Registro di presa in carico e stati",
          "en": "Support log and escalation status",
          "fr": "Suivi et escalade",
          "es": "Registro de atención"
        },
        "content": "REGISTRO ITALIAN CUSTOMER CARE — SOLO DATI DI PROVA\nIT-001 | Ordine INT-651 | Motivo: disponibilità finitura | Stato: IN VERIFICA | Referente: produzione | Azione: attendere aggiornamento.\nIT-002 | Ordine INT-642 | Motivo: richiesta modifica indirizzo | Stato: IN ATTESA DI AUTORIZZAZIONE | Referente: responsabile ordini | Azione: valutare fattibilità e dati necessari.\nIT-003 | Ordine INT-638 | Motivo: articolo arrivato danneggiato | Stato: ESCALATION | Referente: responsabile assistenza | Azione: seguire procedura approvata, senza promettere rimborso.\nRegola: nessuna pratica viene marcata CHIUSA se non è stata gestita fino all'azione concordata. Gli identificativi cliente sono simbolici e non riconducono a persone reali.",
        "explanation": {
          "it": "Il registro rende visibili i passaggi che un referente estero può monitorare.",
          "en": "The overseas owner can review open cases and approval points.",
          "fr": "La société étrangère conserve la visibilité sur les décisions.",
          "es": "La empresa extranjera puede seguir cada caso."
        }
      },
      {
        "title": {
          "it": "Sintesi bilingue per responsabile estero",
          "en": "Bilingual operational handover",
          "fr": "Synthèse pour responsable étranger",
          "es": "Resumen para responsable extranjero"
        },
        "content": "AGGIORNAMENTO OPERATIVO PER IL RESPONSABILE — ESEMPIO\nITALIANO: tre richieste di clienti già acquisiti sono state classificate. Per INT-651 si attende disponibilità; per INT-642 serve conferma prima di modificare l'indirizzo; per INT-638 occorre applicare la procedura reclami. Nessuna soluzione o spedizione è stata promessa.\nENGLISH SUMMARY: Three existing-customer enquiries have been logged. INT-651 is awaiting an availability update; INT-642 requires approval before an address change; INT-638 has been escalated under the complaints procedure. No refund, shipment or resolution has been promised.\nDECISIONI RICHIESTE: autorizzare la risposta sullo stato dell'ordine, chiarire la modifica indirizzo, assegnare il referente al reclamo. Le comunicazioni restano bozze finché non vengono approvate e inviate.",
        "explanation": {
          "it": "Dimostra come rendere il lavoro in italiano verificabile anche per il titolare estero, senza promettere traduzione certificata.",
          "en": "Shows how an overseas client can understand Italian support progress.",
          "fr": "Une synthèse permet au donneur d’ordre étranger de suivre le service italien.",
          "es": "El responsable extranjero puede seguir el servicio en italiano."
        }
      },
      {
        "title": {
          "it": "Pacchetto postvendita in italiano e rapporto bilingue",
          "en": "Complete Italian after-sales reply pack with bilingual handover",
          "fr": "Réponses après-vente en italien et compte rendu bilingue",
          "es": "Respuestas posventa en italiano e informe bilingüe"
        },
        "language": "it",
        "content": "PACCHETTO ASSISTENZA POSTVENDITA — CASO DIMOSTRATIVO\nMarchio europeo dimostrativo con clienti italiani già acquisiti. Tre pratiche: INT-651 (finitura da verificare), INT-642 (modifica indirizzo), INT-630 (segnalazione su articolo). Nessun cliente reale è stato contattato.\n\nEMAIL IT-001 — INFORMAZIONI SULLA DISPONIBILITÀ\nOggetto: Aggiornamento sulla richiesta relativa all'ordine INT-651\nGentile cliente,\ngrazie per averci scritto. Abbiamo preso nota della richiesta relativa alla finitura scelta per l'ordine INT-651.\nLa disponibilità deve ancora essere verificata con il referente competente. Non possiamo quindi confermare una data di spedizione o un'alternativa prima di aver ricevuto indicazioni attendibili.\nLe comunicheremo un aggiornamento non appena potremo farlo sulla base di informazioni verificate.\nCordiali saluti,\nServizio clienti\n\nEMAIL IT-002 — RICHIESTA DI MODIFICA DELL'INDIRIZZO\nOggetto: Verifica della richiesta di modifica — ordine INT-642\nGentile cliente,\nabbiamo registrato la sua richiesta di modifica dell'indirizzo associato all'ordine INT-642.\nPer verificare se la variazione sia ancora possibile dobbiamo controllare lo stato della spedizione e le procedure autorizzate. Al momento nessuna modifica è stata effettuata.\nLa invitiamo a non inviare dati di pagamento. Le forniremo le istruzioni necessarie dopo aver consultato il referente competente.\nCordiali saluti,\nServizio clienti\n\nEMAIL IT-003 — SEGNALAZIONE DI UN ARTICOLO\nOggetto: Segnalazione ricevuta — ordine INT-630\nGentile cliente,\nci dispiace apprendere che l'articolo ricevuto non corrisponda alle sue aspettative. Abbiamo registrato la segnalazione e la sottoporremo al reparto competente.\nPer esaminare la richiesta potrebbero essere utili alcune informazioni sul problema e, se necessario, una fotografia dell'articolo. Le indicheremo esclusivamente ciò che serve dopo la verifica della procedura applicabile.\nNon possiamo confermare sostituzioni o rimborsi prima dell'esame del caso.\nCordiali saluti,\nServizio clienti\n\nINTERNAL HANDOVER — ENGLISH VERSION\nSubject: Italian after-sales enquiries — three open cases\nThree illustrative existing-customer enquiries have been classified and drafted in Italian. INT-651 requires confirmation of the requested finish and dispatch status. INT-642 requires an authorised check before changing an address. INT-630 requires the responsible team to review the complaint and the applicable procedure. No reply was sent, no order was amended and no refund was promised. The drafts are ready for approval; please confirm the authorised next steps before they are used.\n\nNOTA FINALE\nLe tre email mantengono lo stesso registro di cortesia, distinguono dati disponibili da informazioni da verificare e non prevedono attività di acquisizione clienti. Il rapporto inglese è rivolto al responsabile immaginario e non attribuisce risultati reali.",
        "explanation": {
          "it": "Tre risposte complete per clienti già esistenti e aggiornamento al responsabile, senza promesse o attività commerciali a freddo.",
          "en": "Three complete Italian drafts for existing customers and an English-language manager update.",
          "fr": "Trois réponses italiennes et synthèse au responsable, sans prospection.",
          "es": "Tres respuestas italianas y resumen al responsable, sin captación."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Tre pratiche con stato e referente diversi, nessuna risposta inviata dichiarata.",
        "en": "Three cases, distinct owners and no false sent-status claim.",
        "fr": "Trois dossiers, sans faux envois.",
        "es": "Tres casos sin fingir envíos."
      },
      {
        "it": "Distinzione tra assistenza postvendita e acquisizione commerciale.",
        "en": "Existing-customer support only, no prospecting.",
        "fr": "Service après-vente, sans prospection.",
        "es": "Solo posventa, sin captación."
      }
    ],
    "limits": {
      "it": "Assistenza scritta per clienti già acquisiti; non ricerca contatti, acquisizione commerciale, vendita telefonica, amministrazione o fatturazione.",
      "en": "Written aftercare only; no cold calling, lead generation, accounting or invoicing.",
      "fr": "Assistance écrite, sans démarchage ni facturation.",
      "es": "Atención escrita, sin captación ni facturación."
    },
    "handoff": {
      "it": "Email italiana, registro delle richieste, sintesi per il responsabile estero e punti da approvare.",
      "en": "Italian email, case log, manager summary and approval queue.",
      "fr": "Courriel italien, registre et synthèse pour le responsable.",
      "es": "Correo italiano, registro y resumen."
    }
  }
];
