import type { OperationalDeepCase } from "./portfolioOperationalTypes";

/** Every scenario, name, email and document is invented for demonstration. */
export const OPERATIONAL_SAMPLES_A: OperationalDeepCase[] = [
  {
    "id": "inbox-calendar-triage",
    "category": "backoffice",
    "title": {
      "it": "Posta e agenda: una settimana senza richieste perse",
      "en": "Inbox and calendar: a clearly managed week",
      "fr": "Messagerie et agenda : une semaine structurée",
      "es": "Correo y agenda: una semana organizada"
    },
    "service": {
      "it": "Segreteria organizzativa",
      "en": "Organisational secretarial support",
      "fr": "Secrétariat organisationnel",
      "es": "Secretaría organizativa"
    },
    "scenario": {
      "it": "Una consulente immaginaria riceve 27 email di clienti già acquisiti in tre giorni, ha due appuntamenti provvisori e deve predisporre un quadro attendibile delle priorità.",
      "en": "A fictional consultant has 27 emails from existing customers, two tentative appointments and no clear way to track priorities.",
      "fr": "Une consultante fictive reçoit 27 e-mails de clients existants et doit clarifier deux rendez-vous provisoires.",
      "es": "Una consultora ficticia recibe 27 correos de clientes actuales y necesita organizar dos citas provisionales."
    },
    "objective": {
      "it": "Separare richieste urgenti, attività rinviabili e messaggi informativi; predisporre risposte autorizzabili e un'agenda senza prenotazioni inventate.",
      "en": "Triage requests, prepare drafts for approval and avoid treating tentative meetings as confirmed.",
      "fr": "Classer les demandes, préparer les brouillons et éviter les confirmations non autorisées.",
      "es": "Clasificar solicitudes, preparar respuestas y no confirmar citas no autorizadas."
    },
    "inputs": {
      "it": "27 messaggi di prova, disponibilità settimanali inventate, policy ipotetica di risposta entro due giorni lavorativi e una casella condivisa.",
      "en": "27 synthetic messages, illustrative availability windows and a fictional two-business-day response policy.",
      "fr": "27 messages fictifs, créneaux inventés et règle illustrative de réponse sous deux jours ouvrables.",
      "es": "27 mensajes ficticios, disponibilidad inventada y una norma de respuesta de dos días laborables."
    },
    "workflow": [
      {
        "it": "Classificazione iniziale: richiede risposta, appuntamento, informazione o intervento della titolare.",
        "en": "Classify messages into reply, meeting, information and owner decision.",
        "fr": "Classer les messages : réponse, rendez-vous, information ou décision.",
        "es": "Clasificar mensajes: respuesta, cita, información o decisión."
      },
      {
        "it": "Registro unico: identificativo, stato, responsabile, data e prossimo passo; evitare copie non necessarie.",
        "en": "Maintain a single case log with status, owner, date and next action.",
        "fr": "Tenir un registre unique des dossiers et des prochaines actions.",
        "es": "Mantener un registro único con estado, responsable y siguiente paso."
      },
      {
        "it": "Bozze adattate al tono approvato; nessuna risposta sensibile inviata automaticamente.",
        "en": "Draft replies using the agreed tone; never send sensitive messages automatically.",
        "fr": "Rédiger des réponses selon le ton validé, sans envoi automatique sensible.",
        "es": "Preparar respuestas aprobables, sin envíos automáticos sensibles."
      },
      {
        "it": "Agenda: distinguere opzioni proposte da appuntamenti confermati dopo approvazione.",
        "en": "Separate proposed time slots from approved confirmed meetings.",
        "fr": "Distinguer les créneaux proposés des rendez-vous confirmés.",
        "es": "Distinguir propuestas de horarios de citas confirmadas."
      },
      {
        "it": "Sintesi di fine settimana: attività completate, risposte in attesa, decisioni da prendere.",
        "en": "Summarise completed work, open replies and owner decisions.",
        "fr": "Récapituler les tâches terminées et les points en attente.",
        "es": "Resumir tareas cerradas, respuestas pendientes y decisiones."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Registro operativo delle richieste",
          "en": "Enquiry tracking log",
          "fr": "Registre de suivi",
          "es": "Registro de solicitudes"
        },
        "content": "REGISTRO EMAIL — SETTIMANA DIMOSTRATIVA (TUTTI I 27 MESSAGGI, DATI FITTIZI)\nID | Categoria | Oggetto sintetico | Priorità | Stato | Prossimo passo\nE-01 | RISPOSTA | Conferma ricezione allegato | media | Bozza predisposta | Verificare i file ricevuti e approvare conferma\nE-02 | RISPOSTA | Richiesta aggiornamento tempi progetto | alta | Bozza predisposta | Convalidare le date prima della risposta\nE-03 | RISPOSTA | Informazioni su documento consegnato | media | Bozza predisposta | Citare solo versione già approvata\nE-04 | RISPOSTA | Richiesta chiarimento istruzioni | media | Bozza predisposta | Controllare procedura autorizzata\nE-05 | RISPOSTA | Domanda su prossimi passaggi | media | Bozza predisposta | Confermare prossima attività con titolare\nE-06 | RISPOSTA | Richiesta materiale informativo esistente | bassa | Bozza predisposta | Verificare autorizzazione alla condivisione\nE-07 | RISPOSTA | Correzione recapito su pratica attiva | alta | Bozza predisposta | Verificare dato nel registro del cliente\nE-08 | RISPOSTA | Aggiornamento ordine già registrato | alta | Bozza predisposta | Controllare stato confermato dell'ordine\nE-09 | RISPOSTA | Richiesta copia ultima revisione | media | Bozza predisposta | Confrontare revisioni prima della risposta\nE-10 | RISPOSTA | Domanda su modalità di consegna | media | Bozza predisposta | Convalidare canale e autorizzazioni\nE-11 | RISPOSTA | Verifica ricezione note editoriali | bassa | Bozza predisposta | Confrontare note con versione corrente\nE-12 | INFORMATIVA | Circolare operativa interna | bassa | Classificata | Archiviare nella cartella autorizzata\nE-13 | INFORMATIVA | Aggiornamento disponibilità già condiviso | bassa | Classificata | Annotare senza impegnare agenda\nE-14 | RISPOSTA | Conferma ricezione file pratica Alpha | media | Bozza pronta E-014 | Sottoporre la risposta all'approvazione\nE-15 | APPUNTAMENTO | Anticipo incontro pratica Beta | alta | Verifica agenda E-015 | Controllare disponibilità prima di proporre alternative\nE-16 | INFORMATIVA | Versione corretta documento di progetto | media | Verifica versione E-016 | Confrontare versione 03 e approvata\nE-17 | INFORMATIVA | Nota informativa sul catalogo | bassa | Classificata | Archiviare versione e data\nE-18 | INFORMATIVA | Promemoria riunione già confermata | bassa | Classificata | Allineare alla voce esistente, senza duplicare\nE-19 | INFORMATIVA | Comunicazione calendario festività | bassa | Classificata | Annotare vincoli informativi\nE-20 | INFORMATIVA | Conferma ricezione materiale da collaboratore | bassa | Classificata | Archiviare ricevuta nel fascicolo\nE-21 | INFORMATIVA | Avviso di aggiornamento policy interna | media | Classificata | Richiedere versione ufficiale, se necessaria\nE-22 | APPUNTAMENTO | Richiesta incontro online | media | Proposta da verificare | Controllare finestra e referente\nE-23 | APPUNTAMENTO | Spostamento colloquio operativo | media | Proposta da verificare | Attendere conferma esplicita\nE-24 | APPUNTAMENTO | Richiesta disponibilità per revisione | bassa | Proposta da verificare | Verificare calendario prima di rispondere\nE-25 | DECISIONE TITOLARE | Eccezione alle condizioni concordate | alta | Escalation | Richiedere decisione formale\nE-26 | DECISIONE TITOLARE | Richiesta accesso a file riservato | alta | Escalation | Non condividere senza autorizzazione\nE-27 | DECISIONE TITOLARE | Richiesta modifica ambito incarico | alta | Escalation | Valutare perimetro e nuovo preventivo\nTOTALI: 12 richieste di risposta, 8 messaggi informativi, 4 richieste di appuntamento, 3 decisioni riservate = 27.\nLe 12 risposte sono bozze da approvare, non invii eseguiti. Nessun appuntamento è confermato in questo esempio.\nREGOLA OPERATIVA: stato «chiuso» solo dopo invio o conferma effettivi; niente accessi o modifiche non autorizzati.",
        "explanation": {
          "it": "Un registro leggibile sostituisce i promemoria sparsi: ID, stato e azione successiva rendono verificabile ogni richiesta.",
          "en": "A usable log shows the status and next action for each request without relying on scattered reminders.",
          "fr": "Le registre rend visibles l’état et la prochaine action de chaque demande.",
          "es": "El registro muestra estado y próxima acción sin depender de notas dispersas."
        }
      },
      {
        "title": {
          "it": "Email di proposta appuntamento",
          "en": "Proposed appointment email",
          "fr": "Courriel de proposition de rendez-vous",
          "es": "Correo de propuesta de cita"
        },
        "content": "Oggetto: proposta di nuovo orario per il confronto sul progetto Beta\nBuongiorno,\nabbiamo ricevuto la richiesta di anticipare l'incontro. Prima di confermare una modifica, stiamo verificando le disponibilità aggiornate. Le proporremo eventuali alternative non appena avremo un riscontro attendibile; nel frattempo, l'appuntamento concordato in precedenza resta invariato.\nPer evitare fraintendimenti, nessuno spostamento sarà effettuato senza la sua conferma. Grazie per la collaborazione.\nCordiali saluti,\nSegreteria organizzativa — Studio dimostrativo\nNOTA INTERNA: messaggio da approvare; non inviare prima del controllo dell'agenda.",
        "explanation": {
          "it": "La bozza non promette una disponibilità non verificata e conserva l’appuntamento già concordato.",
          "en": "The draft avoids offering unverified times and preserves the existing appointment.",
          "fr": "Le brouillon ne propose aucun créneau non vérifié et conserve le rendez-vous initial.",
          "es": "El borrador no promete horarios sin comprobar y conserva la cita anterior."
        }
      },
      {
        "title": {
          "it": "Riepilogo settimanale per la titolare",
          "en": "Weekly handover summary",
          "fr": "Synthèse hebdomadaire",
          "es": "Resumen semanal"
        },
        "content": "RIEPILOGO OPERATIVO — ESEMPIO\nMessaggi esaminati: 27; richieste che richiedono risposta: 12; messaggi soltanto informativi: 8; richieste di appuntamento: 4; casi da sottoporre alla titolare: 3. I totali descrivono categorie disgiunte e sommano a 27.\nCompletati: classificazione e archiviazione di tutti i messaggi; preparazione delle 12 bozze di risposta; verifica dei documenti relativi a E-016.\nIn attesa: autorizzazione per E-014; verifica disponibilità per E-015; decisioni sulle tre richieste riservate.\nPriorità successiva: approvare le bozze più urgenti, rispondere nei tempi concordati e registrare soltanto gli invii effettivamente avvenuti. Nessun appuntamento è stato modificato nell’esempio.",
        "explanation": {
          "it": "Il riepilogo distingue ciò che è predisposto da ciò che è effettivamente inviato o confermato.",
          "en": "The handover distinguishes prepared work from messages actually sent or meetings confirmed.",
          "fr": "La synthèse distingue les tâches préparées des actions réellement validées.",
          "es": "El resumen distingue borradores de acciones realmente enviadas o confirmadas."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Categorie disgiunte: 12 + 8 + 4 + 3 = 27.",
        "en": "Disjoint categories total 27.",
        "fr": "12 + 8 + 4 + 3 = 27.",
        "es": "12 + 8 + 4 + 3 = 27."
      },
      {
        "it": "Nessuna conferma di appuntamento senza autorizzazione.",
        "en": "No meeting confirmed without approval.",
        "fr": "Aucun rendez-vous confirmé sans accord.",
        "es": "No se confirma ninguna cita sin autorización."
      },
      {
        "it": "Indicazione dello stato e della prossima azione per ogni richiesta.",
        "en": "Every request has a state and next action.",
        "fr": "Chaque demande a un statut et une action suivante.",
        "es": "Cada solicitud tiene estado y siguiente acción."
      }
    ],
    "limits": {
      "it": "Nessuna chiamata commerciale, ricerca di nuovi clienti, gestione di fatture o accesso indiscriminato alla corrispondenza.",
      "en": "No prospecting, invoicing or unrestricted inbox access.",
      "fr": "Aucune prospection, facturation ni consultation illimitée de la messagerie.",
      "es": "Sin prospección, facturación ni acceso indiscriminado al correo."
    },
    "handoff": {
      "it": "Registro filtrabile, bozze da approvare e riepilogo settimanale verificabile.",
      "en": "Filterable log, drafts for approval and an auditable weekly summary.",
      "fr": "Registre filtrable, brouillons à valider et synthèse de suivi.",
      "es": "Registro filtrable, borradores y resumen verificable."
    }
  },
  {
    "id": "customer-care-escalations",
    "category": "backoffice",
    "title": {
      "it": "Customer care: tre casi, tre risposte e un protocollo",
      "en": "Written customer care: three realistic scenarios",
      "fr": "Relation client écrite : trois situations",
      "es": "Atención al cliente: tres situaciones"
    },
    "service": {
      "it": "Customer care per clienti già acquisiti",
      "en": "Written support for existing customers",
      "fr": "Relation écrite avec clients existants",
      "es": "Atención escrita a clientes actuales"
    },
    "scenario": {
      "it": "Un negozio immaginario riceve richieste di assistenza su disponibilità, reso e articolo danneggiato. L’assistente deve rispondere nei limiti delle procedure, senza inventare diritti o rimborsi.",
      "en": "A fictional shop receives availability, return and damage enquiries from existing customers; replies must follow approved policies.",
      "fr": "Une boutique fictive traite trois demandes de clients existants en respectant les procédures.",
      "es": "Una tienda ficticia atiende tres consultas sin inventar derechos ni reembolsos."
    },
    "objective": {
      "it": "Preparare risposte empatiche e operative, assegnare correttamente i casi delicati e mantenere una traccia delle verifiche.",
      "en": "Prepare clear replies, escalate sensitive decisions and preserve a traceable case history.",
      "fr": "Rédiger des réponses utiles, transférer les décisions délicates et suivre chaque dossier.",
      "es": "Redactar respuestas útiles, escalar decisiones sensibles y registrar cada caso."
    },
    "inputs": {
      "it": "Tre ticket fittizi, estratto delle condizioni commerciali non completo, stato degli ordini non verificato e matrice di autorizzazioni esemplificativa.",
      "en": "Three fictional tickets, incomplete terms, unverified stock/order states and an illustrative approval matrix.",
      "fr": "Trois tickets fictifs, conditions incomplètes et matrice d’autorisations.",
      "es": "Tres tickets ficticios, condiciones incompletas y matriz de autorizaciones."
    },
    "workflow": [
      {
        "it": "Leggere la richiesta distinguendo fatti comunicati dal cliente e informazioni da controllare.",
        "en": "Separate the customer’s statements from facts needing verification.",
        "fr": "Distinguer déclarations du client et informations à vérifier.",
        "es": "Diferenciar lo dicho por el cliente de los hechos por comprobar."
      },
      {
        "it": "Consultare la procedura approvata, senza interpretare autonomamente regole di rimborso.",
        "en": "Check approved procedures; do not invent refund rules.",
        "fr": "Consulter la procédure validée, sans inventer les remboursements.",
        "es": "Consultar normas aprobadas, sin inventar reembolsos."
      },
      {
        "it": "Preparare una risposta con un solo prossimo passo e un termine soltanto se confermato.",
        "en": "Draft one clear next step and no unverified dates.",
        "fr": "Formuler une étape suivante claire, sans date non confirmée.",
        "es": "Indicar un siguiente paso claro sin fechas inciertas."
      },
      {
        "it": "Escalation per reclami, rimborsi, anomalie o informazioni non presenti.",
        "en": "Escalate refunds, complaints and unknown conditions.",
        "fr": "Transmettre les remboursements et les litiges.",
        "es": "Escalar reembolsos, quejas y condiciones desconocidas."
      },
      {
        "it": "Aggiornare il registro dopo l’approvazione, senza segnare come inviati i messaggi in bozza.",
        "en": "Record outcomes only after approval and action.",
        "fr": "Mettre à jour le suivi après validation.",
        "es": "Actualizar el registro solo tras aprobar y actuar."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Ticket 1: disponibilità non confermata",
          "en": "Ticket 1: stock status",
          "fr": "Ticket 1 : disponibilité",
          "es": "Ticket 1: disponibilidad"
        },
        "content": "ID CC-201 | Oggetto: disponibilità della finitura sabbia\nOggetto email: richiesta ricevuta — finitura sabbia\nBuongiorno,\ngrazie per averci contattato in merito al suo ordine. Stiamo verificando la disponibilità della finitura richiesta e non vogliamo comunicarle un dato non ancora confermato. La aggiorneremo via email quando il magazzino avrà fornito un riscontro attendibile.\nNel frattempo, non è necessario che effettui un nuovo ordine. Se desidera modificare la richiesta, può rispondere direttamente a questo messaggio.\nCordiali saluti, Servizio clienti.\nREGISTRO: stato «verifica magazzino»; nessuna data promessa; bozza da approvare.",
        "explanation": {
          "it": "Risposta informativa: evita una disponibilità inventata e indica il canale di aggiornamento.",
          "en": "A status reply without inventing stock availability or a date.",
          "fr": "Réponse sans inventer de stock ni de date.",
          "es": "Respuesta sin inventar existencias ni fecha."
        }
      },
      {
        "title": {
          "it": "Ticket 2: richiesta di reso",
          "en": "Ticket 2: return enquiry",
          "fr": "Ticket 2 : retour produit",
          "es": "Ticket 2: solicitud de devolución"
        },
        "content": "ID CC-202 | Oggetto: richiesta informazioni su reso\nOggetto email: verifica della sua richiesta di reso\nBuongiorno,\nabbiamo ricevuto la richiesta relativa all'articolo indicato. Per fornirle istruzioni corrette dobbiamo prima verificare la data dell'acquisto e le condizioni applicabili all'ordine. La invitiamo quindi a rispondere indicando il riferimento dell'ordine, senza inviare documenti di pagamento o dati bancari.\nDopo la verifica le comunicheremo la procedura prevista per il suo caso. Questa risposta non costituisce ancora accettazione del reso o conferma di un rimborso.\nCordiali saluti, Servizio clienti.\nREGISTRO: stato «attesa riferimento ordine», assegnazione al referente autorizzato per le decisioni.",
        "explanation": {
          "it": "Separazione netta fra presa in carico e approvazione di un reso, che resta di competenza del committente.",
          "en": "Clearly distinguishes acknowledgement from approval of a return.",
          "fr": "Distingue accusé de réception et acceptation du retour.",
          "es": "Distingue recepción de solicitud y aprobación de devolución."
        }
      },
      {
        "title": {
          "it": "Ticket 3: articolo danneggiato",
          "en": "Ticket 3: damaged item",
          "fr": "Ticket 3 : article endommagé",
          "es": "Ticket 3: artículo dañado"
        },
        "content": "ID CC-203 | Oggetto: segnalazione di articolo danneggiato\nOggetto email: segnalazione ricevuta — verifica in corso\nBuongiorno,\nci dispiace che l'articolo sia arrivato nelle condizioni descritte. Abbiamo registrato la segnalazione e la stiamo inoltrando al referente incaricato della verifica. Per agevolare il controllo, se possibile, può rispondere con una fotografia del danno e il numero d'ordine; non servono ulteriori dati personali.\nNon appena avremo verificato la situazione e le opzioni previste dalle condizioni di acquisto, le invieremo le indicazioni successive. La ringraziamo per la collaborazione.\nREGISTRO: priorità alta; richiesta immagini limitata allo stretto necessario; escalation al responsabile.",
        "explanation": {
          "it": "La risposta mostra empatia, raccoglie solo elementi necessari e non promette una sostituzione anticipata.",
          "en": "The reply is empathetic, minimises data collection and avoids promising an unapproved replacement.",
          "fr": "Réponse empathique, collecte limitée et aucun remplacement promis.",
          "es": "Respuesta empática, datos mínimos y sin prometer sustitución."
        }
      },
      {
        "title": {
          "it": "Registro completo di gestione e comunicazioni di verifica",
          "en": "Complete support log and follow-up communications",
          "fr": "Registre de suivi et communications de vérification",
          "es": "Registro de seguimiento y comunicaciones de comprobación"
        },
        "language": "it",
        "content": "ESEMPIO OPERATIVO ORIGINALE — DATI INTERAMENTE INVENTATI\nScenario: negozio online immaginario, richieste di tre clienti già esistenti. Nessuna email è stata inviata; i dati su stock, resi e rimborsi non sono confermati.\n\nREGISTRO DELLE PRATICHE\nCC-201 | Disponibilità finitura sabbia | Priorità media | Referente: magazzino | Stato: VERIFICA IN CORSO | Prossimo passo: richiedere conferma della giacenza.\nCC-202 | Informazioni sul reso | Priorità media | Referente: assistenza/resi | Stato: IN ATTESA DI RIFERIMENTI | Prossimo passo: verificare identificativo dell'ordine e condizioni approvate.\nCC-203 | Articolo arrivato danneggiato | Priorità alta | Referente: responsabile assistenza | Stato: DA VALUTARE | Prossimo passo: raccogliere esclusivamente le immagini necessarie e richiedere istruzioni.\n\nEMAIL AGGIUNTIVA — CC-202, BOZZA DA APPROVARE\nOggetto: La sua richiesta di reso — informazioni necessarie\nGentile cliente,\ngrazie per averci contattato. Abbiamo registrato la sua richiesta relativa all'articolo acquistato. Per verificare la pratica avremmo bisogno del riferimento dell'ordine e di una breve descrizione della situazione.\nUna volta ricevute queste informazioni, potremo sottoporle al reparto competente e fornirle indicazioni basate sulle condizioni applicabili. Al momento non possiamo confermare l'accettazione del reso, la modalità di restituzione o un eventuale rimborso.\nLa invitiamo a non inviare dati di pagamento o documenti personali non richiesti.\nCordiali saluti,\nServizio clienti\n\nNOTA INTERNA PER CC-203\nSegnalazione: prodotto potenzialmente danneggiato alla consegna. Non suggerire che il danno sia stato causato dal trasporto prima dell'esame. Non chiedere fotografie contenenti informazioni personali non necessarie. Annotare la priorità e il responsabile; preparare un messaggio che riconosca la segnalazione e indichi la verifica successiva, senza promettere sostituzioni o rimborsi.\n\nRIEPILOGO AL RESPONSABILE — BOZZA NON INVIATA\nOggetto: Tre richieste clienti in lavorazione — quadro delle verifiche\nBuongiorno,\nho classificato tre richieste ricevute nello scenario dimostrativo e predisposto le risposte scritte. CC-201 richiede un controllo della disponibilità; CC-202 necessita del riferimento d'ordine e della verifica delle condizioni di reso; CC-203 richiede una valutazione prioritaria da parte del responsabile. Nessuna risposta è stata spedita e nessun ordine, rimborso o dato contabile è stato modificato.\nLe bozze sono pronte per il controllo. Prima dell'invio occorre validare le informazioni di stock, le procedure applicabili e le autorizzazioni previste.\nCordiali saluti,\nSegreteria assistenza clienti\n\nESITO: tre ticket descritti e tracciati; quattro bozze/esempi di comunicazione disponibili nell'intero dossier; decisioni economiche e amministrative riservate ai referenti competenti.",
        "explanation": {
          "it": "Registro unico con tre ticket, bozze complete, decisioni riservate e nota di consegna al responsabile.",
          "en": "One consolidated case log, with written replies, escalation rules and a complete handover note.",
          "fr": "Registre des demandes, réponses rédigées et note de transmission au responsable.",
          "es": "Registro de consultas, respuestas redactadas y entrega al responsable."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Nessuna risposta contiene rimborsi o date non autorizzati.",
        "en": "No unsupported refunds or delivery dates.",
        "fr": "Aucun remboursement ou délai inventé.",
        "es": "Sin reembolsos ni fechas inventadas."
      },
      {
        "it": "Ogni ticket distingue stato, responsabile e documenti necessari.",
        "en": "Each ticket records status, owner and required information.",
        "fr": "Chaque ticket précise le statut et les informations nécessaires.",
        "es": "Cada caso registra estado, responsable y datos mínimos."
      }
    ],
    "limits": {
      "it": "Il servizio riguarda clienti esistenti e non comprende attività legale, emissione di rimborsi, fatture o ricerca di nuovi acquirenti.",
      "en": "Existing-customer support only; no legal advice, processing refunds, invoicing or prospecting.",
      "fr": "Clients existants uniquement, sans conseil juridique, remboursement, facturation ni prospection.",
      "es": "Solo clientes actuales; sin asesoría jurídica, reembolsos, facturas ni captación."
    },
    "handoff": {
      "it": "Tre email complete, registro ticket, regole di escalation e checklist di approvazione.",
      "en": "Three complete emails, ticket log, escalation rules and approval checklist.",
      "fr": "Trois courriels, suivi des tickets et règles de validation.",
      "es": "Tres correos, registro de tickets y controles."
    }
  },
  {
    "id": "order-entry-price-list",
    "category": "backoffice",
    "title": {
      "it": "Ordini e listini: verifiche, anomalie e consegna",
      "en": "Order entry and price lists: controlled workflow",
      "fr": "Commandes et tarifs : vérification et suivi",
      "es": "Pedidos y tarifas: control y seguimiento"
    },
    "service": {
      "it": "Inserimento ordini, dati e listini",
      "en": "Operational order and data entry",
      "fr": "Saisie opérationnelle de commandes",
      "es": "Registro operativo de pedidos"
    },
    "scenario": {
      "it": "Un distributore immaginario deve registrare un ordine per un cliente già acquisito usando un listino approvato, senza sostituirsi al commerciale nelle decisioni su prezzi o conferme.",
      "en": "A fictional distributor needs an existing-customer order recorded against an approved price list without independent price decisions.",
      "fr": "Un distributeur fictif doit vérifier une commande déjà reçue selon les tarifs approuvés.",
      "es": "Un distribuidor ficticio debe registrar un pedido existente sin decidir precios."
    },
    "objective": {
      "it": "Individuare codici errati, controllare moltiplicazioni e mantenere lo stato «da validare» fino alla conferma autorizzata.",
      "en": "Identify invalid product codes, check arithmetic and keep the order pending approval.",
      "fr": "Repérer les références incorrectes, vérifier les montants et conserver la validation.",
      "es": "Detectar códigos incorrectos, comprobar importes y esperar autorización."
    },
    "inputs": {
      "it": "Listino dimostrativo: AR-101 €22,50; AR-205 €68,00; AR-310 €14,00. Ordine di prova: 2 × AR-101; 1 × AR-205; una riga con codice incompleto.",
      "en": "Fictional catalogue: AR-101 €22.50, AR-205 €68.00, AR-310 €14.00; sample order with an incomplete code.",
      "fr": "Tarifs fictifs : AR-101 22,50 €, AR-205 68 €, AR-310 14 € ; une ligne incomplète.",
      "es": "Tarifas ficticias y un pedido con una referencia incompleta."
    },
    "workflow": [
      {
        "it": "Controllo formale: codice, quantità, unità, valuta e versione del listino.",
        "en": "Check SKU, quantity, unit, currency and price-list version.",
        "fr": "Vérifier référence, quantité, unité, devise et version.",
        "es": "Verificar referencia, cantidad, unidad, moneda y versión."
      },
      {
        "it": "Confronto con listino approvato; le righe non riconosciute non vengono indovinate.",
        "en": "Match against approved prices; never guess missing SKUs.",
        "fr": "Comparer au tarif validé sans deviner les références.",
        "es": "Cruzar con tarifa aprobada sin adivinar códigos."
      },
      {
        "it": "Calcolo dei totali di riga, separati da imposte e trasporto non noti.",
        "en": "Calculate line totals separately from unknown taxes and transport.",
        "fr": "Calculer les lignes sans inventer frais et taxes.",
        "es": "Calcular importes sin inventar impuestos y portes."
      },
      {
        "it": "Segnalazione dell’anomalia per correzione del cliente o referente autorizzato.",
        "en": "Escalate exceptions for owner or customer confirmation.",
        "fr": "Transmettre les anomalies pour confirmation.",
        "es": "Escalar anomalías para validación."
      },
      {
        "it": "Archiviazione con stato «in verifica», tracciando la versione approvata.",
        "en": "Archive as pending, recording the approved version.",
        "fr": "Conserver l’état « à vérifier » et la version.",
        "es": "Archivar con estado pendiente y versión."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Matrice di controllo ordine",
          "en": "Order-check matrix",
          "fr": "Tableau de contrôle commande",
          "es": "Matriz de control del pedido"
        },
        "content": "LISTINO DI RIFERIMENTO: L-2026-11, versione ipotetica 03\nAR-101 | Accessorio A | €22,50 | Quantità 2 | Totale riga €45,00 | Esito: OK\nAR-205 | Accessorio B | €68,00 | Quantità 1 | Totale riga €68,00 | Esito: OK\nAR-3?0 | Accessorio C | prezzo non applicato | Quantità 3 | Totale: non calcolabile | Esito: CODICE DA CHIARIRE\nTOTALE PROVVISORIO SOLE RIGHE VERIFICATE: €113,00. Esclusi trasporto e imposte. Il totale dell’ordine NON è definitivo: una riga non è validata.\nSTATO: in verifica, non confermato. Nessuna fattura o ordine definitivo generati.",
        "explanation": {
          "it": "Il totale provvisorio somma solo le righe valide: 45 + 68 = 113 euro, senza attribuire un prezzo alla riga incerta.",
          "en": "Only approved lines are totalled: €45 + €68 = €113; the unknown SKU remains unresolved.",
          "fr": "Seules les lignes validées entrent dans le total de 113 € ; la référence incomplète est signalée.",
          "es": "Solo se suman líneas verificadas: 45 + 68 = 113 euros; la referencia dudosa queda pendiente."
        }
      },
      {
        "title": {
          "it": "Email di richiesta chiarimento",
          "en": "Exception clarification email",
          "fr": "Courriel de clarification",
          "es": "Correo de aclaración"
        },
        "content": "Oggetto: verifica di un codice nell’ordine — riferimento ORD-058\nBuongiorno,\nnel controllo preliminare dell’ordine ORD-058 abbiamo riscontrato un codice prodotto non completo: «AR-3?0». Per evitare un inserimento errato, abbiamo lasciato la riga in sospeso e non abbiamo applicato un prezzo presunto.\nLe altre due righe risultano coerenti con il listino di riferimento. Prima di procedere, può confermarci il codice corretto dell’ultimo articolo e la quantità desiderata?\nUna volta ricevuta l’indicazione, sottoporremo il riepilogo aggiornato alla consueta verifica prevista dalla procedura. Grazie.\nNOTA: modello da autorizzare prima dell’invio.",
        "explanation": {
          "it": "La richiesta evidenzia una sola anomalia concreta e non scarica sul cliente controlli interni superflui.",
          "en": "The email asks a focused question, without making an unauthorised assumption.",
          "fr": "Le courriel cible une anomalie précise sans hypothèse.",
          "es": "El correo plantea una duda concreta y evita suposiciones."
        }
      },
      {
        "title": {
          "it": "Nota di consegna operativa",
          "en": "Operational handover note",
          "fr": "Note de transmission",
          "es": "Nota de entrega operativa"
        },
        "content": "CONSEGNA AL REFERENTE — ORD-058\nStato: IN VERIFICA. Listino utilizzato: L-2026-11 v03. Righe validate: 2 di 3. Somma parziale: €113,00 esclusi oneri non disponibili.\nAnomalia aperta: riferimento «AR-3?0», quantità dichiarata 3, prezzo non attribuito. Azione richiesta: attendere conferma del codice, aggiornare la matrice, ricontrollare quantità e importi.\nControlli finali prima della conferma: versione listino, codice SKU, duplicati, indicazione valuta, eventuali condizioni commerciali approvate e autorizzazione del referente.\nNon è stata effettuata emissione di fattura né conferma commerciale; il file è un prospetto di supporto.",
        "explanation": {
          "it": "Una consegna utile esplicita cosa è verificato, cosa manca e chi deve decidere.",
          "en": "The handover makes verified facts, outstanding exceptions and decision authority explicit.",
          "fr": "La note précise les vérifications, les points ouverts et l’autorisation nécessaire.",
          "es": "La nota distingue datos verificados, pendientes y autorización."
        }
      },
      {
        "title": {
          "it": "Riepilogo ordine e verifica anomalie: rapporto completo",
          "en": "Full order and pricing discrepancy report",
          "fr": "Compte rendu des commandes et écarts tarifaires",
          "es": "Informe completo de pedidos y diferencias de precios"
        },
        "language": "it",
        "content": "RAPPORTO ORDINE ORD-058 — ESEMPIO ORIGINALE, NESSUN ORDINE REALE\nListino di prova L-2026-11, v03. Cliente C-058 già esistente nello scenario. Il listino e i codici sono tutti inventati.\n\nDATI REGISTRATI\nRiga 1 | AR-101 | Quantità 2 | Prezzo approvato nello scenario: 22,50 € | 2 × 22,50 = 45,00 € | Codice e quantità coerenti.\nRiga 2 | AR-205 | Quantità 1 | Prezzo approvato nello scenario: 68,00 € | 1 × 68,00 = 68,00 € | Codice e quantità coerenti.\nRiga 3 | AR-3?0 | Quantità da verificare | Prezzo: non applicabile | Non calcolata | Codice incompleto, riga sospesa.\nSomma delle sole righe verificate: 113,00 €, prima di eventuali trasporto, imposte e condizioni non note. Il valore non equivale a un totale d'ordine definitivo.\n\nCONTROLLO DELLE ANOMALIE\nA-01, priorità alta: codice AR-3?0 incompleto, nessuna sostituzione automatica con AR-310.\nA-02, priorità alta: quantità della terza riga non confermata; nessun calcolo consentito.\nA-03, priorità media: trasporto e termini di consegna assenti dalla richiesta.\nA-04, priorità media: verificare che la versione del listino utilizzata sia quella autorizzata per la pratica.\nA-05, priorità alta: l'approvazione commerciale dell'ordine non risulta presente.\n\nEMAIL DI CHIARIMENTO — BOZZA INTERNA NON INVIATA\nOggetto: ORD-058 — verifica di un codice e delle condizioni\nBuongiorno,\ndurante il controllo della richiesta ORD-058 abbiamo rilevato che la terza riga riporta un codice incompleto («AR-3?0») e non consente di associare con certezza l'articolo al listino di riferimento.\nLe prime due righe sono coerenti con il listino dimostrativo L-2026-11 v03 e presentano una somma parziale di 113,00 €, esclusi gli elementi non ancora definiti.\nPrima di proseguire avremmo bisogno di confermare il codice corretto, la quantità della terza riga e le condizioni di consegna applicabili. Nessun prezzo è stato modificato e nessun ordine è stato confermato.\nCordiali saluti,\nBack office\n\nNOTA DI CONSEGNA AL RESPONSABILE\nHo predisposto il prospetto delle righe verificabili e l'elenco delle questioni aperte. Chiedo l'approvazione della richiesta di chiarimento prima dell'invio. Il registro rimane nello stato «in verifica». Non vengono emessi documenti fiscali, effettuati ordini o negoziate condizioni economiche.\n\nESITO: tabella controllata, calcoli espliciti, anomalie classificate e messaggi di lavoro pronti per la supervisione.",
        "explanation": {
          "it": "Registro delle righe, controllo aritmetico, richiesta di chiarimento e report da consegnare al referente.",
          "en": "Order-line checks, calculations, clarification request and a handover report.",
          "fr": "Contrôle des lignes, calculs, question à clarifier et rapport au responsable.",
          "es": "Comprobación de líneas, cálculos, aclaraciones e informe para el responsable."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Moltiplicazioni controllate e totale provvisorio coerente.",
        "en": "Line arithmetic and subtotal checked.",
        "fr": "Calculs et sous-total vérifiés.",
        "es": "Cálculos y subtotal verificados."
      },
      {
        "it": "Un codice incompleto non riceve un prezzo presunto.",
        "en": "No inferred price for an incomplete code.",
        "fr": "Aucun prix supposé pour la référence incomplète.",
        "es": "No se asigna precio a códigos incompletos."
      }
    ],
    "limits": {
      "it": "Supporto commerciale-operativo, non contabilità, fatturazione, determinazione autonoma dei prezzi o acquisizione clienti.",
      "en": "Operational commercial support only: no accounting, invoicing, independent pricing or prospecting.",
      "fr": "Appui commercial opérationnel uniquement, sans comptabilité ni prospection.",
      "es": "Apoyo comercial operativo, sin contabilidad, facturas ni captación."
    },
    "handoff": {
      "it": "Registro ordini, foglio delle eccezioni, bozza email e nota di consegna.",
      "en": "Order register, exception log, email draft and handover note.",
      "fr": "Registre, anomalies, projet de courriel et note de transmission.",
      "es": "Registro, anomalías, correo y resumen."
    }
  },
  {
    "id": "shared-drive-version-control",
    "category": "backoffice",
    "title": {
      "it": "Archivi digitali: struttura cartelle, versioni e accessi",
      "en": "Shared files: folders, versions and permissions",
      "fr": "Archives numériques : versions et accès",
      "es": "Archivos digitales: versiones y permisos"
    },
    "service": {
      "it": "Organizzazione documenti e Drive",
      "en": "Digital archive organisation",
      "fr": "Organisation documentaire numérique",
      "es": "Organización de archivos y Drive"
    },
    "scenario": {
      "it": "Uno studio professionale inventato conserva presentazioni, cataloghi e comunicazioni in cartelle con nomi incoerenti e versioni duplicate.",
      "en": "A fictional professional studio has inconsistent folder names and duplicate versions of catalogues, communications and presentations.",
      "fr": "Un cabinet fictif retrouve difficilement ses documents, avec doublons et versions incertaines.",
      "es": "Un despacho ficticio tiene carpetas desordenadas y documentos duplicados."
    },
    "objective": {
      "it": "Definire una struttura semplice per i materiali operativi e ridurre il rischio di usare file non approvati, senza richiedere accesso a dati non necessari.",
      "en": "Create a practical structure, reduce accidental use of outdated files and limit access.",
      "fr": "Structurer les documents, éviter les versions obsolètes et limiter les accès.",
      "es": "Organizar documentos, evitar versiones antiguas y limitar accesos."
    },
    "inputs": {
      "it": "Cartelle di prova con 42 file sintetici, cinque tipologie documentali e tre ruoli: titolare, collaboratore, revisore esterno.",
      "en": "42 entirely synthetic files, five document groups and three fictional access roles.",
      "fr": "42 fichiers fictifs, cinq types de documents et trois rôles d’accès.",
      "es": "42 archivos ficticios, cinco grupos y tres roles."
    },
    "workflow": [
      {
        "it": "Inventario di cartelle e tipologie senza aprire materiale riservato non necessario.",
        "en": "Inventory names and categories without unnecessarily accessing confidential content.",
        "fr": "Inventorier les dossiers sans ouvrir des données sensibles.",
        "es": "Inventariar sin abrir datos sensibles innecesarios."
      },
      {
        "it": "Definire un albero con poche cartelle stabili e una posizione separata per le bozze.",
        "en": "Create a small, stable folder hierarchy with separate drafts.",
        "fr": "Créer une arborescence stable avec brouillons séparés.",
        "es": "Crear carpetas estables y borradores separados."
      },
      {
        "it": "Applicare convenzioni di naming, data, versione e stato di approvazione.",
        "en": "Apply consistent filename, date, version and status rules.",
        "fr": "Définir nommage, date, version et validation.",
        "es": "Aplicar nombres, fechas, versiones y estados."
      },
      {
        "it": "Mappare le autorizzazioni strettamente necessarie e farle confermare al titolare.",
        "en": "Map least-privilege permissions for owner approval.",
        "fr": "Préparer les autorisations minimales à valider.",
        "es": "Preparar permisos mínimos para aprobación."
      },
      {
        "it": "Consegnare guida di utilizzo e checklist di verifica periodica.",
        "en": "Deliver a short maintenance SOP and review checklist.",
        "fr": "Fournir une procédure et une checklist de suivi.",
        "es": "Entregar instrucciones y lista de control."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Albero di archivio e convenzioni",
          "en": "Folder taxonomy and naming",
          "fr": "Arborescence et nommage",
          "es": "Árbol de carpetas y nombres"
        },
        "content": "ARCHIVIO_OPERATIVO/\n01_CLIENTI_ESISTENTI/ [solo informazioni necessarie alle attività in corso]\n  2026_Cliente-Alpha/01_RICHIESTE | 02_MATERIALI | 03_CONSEGNE_APPROVATE\n02_CONTENUTI/ 01_BOZZE | 02_IN_REVISIONE | 03_APPROVATI\n03_LISTINI/ 01_CORRENTI | 99_ARCHIVIATI\n04_PROCEDURE/ 01_TEMPLATE | 02_CHECKLIST\n99_ARCHIVIO_STORICO/\nREGOLA NOMI: AAAA-MM-GG_progetto_tipo_vNN_stato.ext\nESEMPIO: 2026-11-04_catalogo_scheda-prodotto_v03_APPROVATO.docx\nNon usare «finale_finalissimo»; un nuovo file approvato sostituisce la versione corrente, senza eliminare la cronologia richiesta.",
        "explanation": {
          "it": "La struttura separa bozze e approvati, rende evidente la versione attuale e limita cartelle ambigue.",
          "en": "Clear draft/approved separation, stable filenames and predictable retrieval.",
          "fr": "Séparation nette des brouillons et fichiers validés ; versions lisibles.",
          "es": "Separación clara entre borradores, aprobados y versiones."
        }
      },
      {
        "title": {
          "it": "Matrice permessi proposta",
          "en": "Proposed access matrix",
          "fr": "Matrice d’autorisations",
          "es": "Matriz de permisos"
        },
        "content": "MATRICE DI ACCESSO — DA VALIDARE CON IL TITOLARE\nTitolare: lettura e modifica su tutto il progetto; gestione delle autorizzazioni.\nCollaboratore operativo: modifica nelle cartelle 01_RICHIESTE e 02_MATERIALI assegnate; sola lettura su 03_CONSEGNE_APPROVATE.\nRevisore esterno: accesso temporaneo in sola lettura alla singola cartella 02_IN_REVISIONE, senza visibilità sul restante archivio.\nAccessi da revocare quando la collaborazione termina; evitare collegamenti pubblici «chiunque abbia il link».\nATTENZIONE: la matrice descrive una proposta operativa. Non certifica la configurazione reale di sicurezza di alcun provider cloud.",
        "explanation": {
          "it": "Ruoli e limiti di accesso sono documentati prima di qualsiasi modifica, senza dichiarare una sicurezza certificata.",
          "en": "Permission proposals require owner sign-off and do not claim provider-level security guarantees.",
          "fr": "Les droits proposés doivent être validés et ne constituent pas une certification.",
          "es": "Los permisos son propuestas para aprobar, no una certificación técnica."
        }
      },
      {
        "title": {
          "it": "Procedura di manutenzione archivio",
          "en": "Archive maintenance checklist",
          "fr": "Procédure de maintenance",
          "es": "Procedimiento de mantenimiento"
        },
        "content": "CHECKLIST OGNI VENERDÌ\n1. Verificare i file aggiornati nella cartella 02_IN_REVISIONE e identificare quelli in attesa di approvazione.\n2. Controllare che ogni consegna abbia codice progetto, data, numero di versione e stato.\n3. Prima di spostare il file in 03_APPROVATI, verificare l’autorizzazione scritta del responsabile.\n4. Non cancellare le versioni precedenti se esistono vincoli di conservazione concordati; spostarle in archivio controllato.\n5. Controllare che gli accessi temporanei abbiano ancora una motivazione operativa.\n6. Annotare interventi e anomalie in un registro accessibile al titolare.\nESITO DIMOSTRATIVO: 42 file classificati nel modello; un file senza versione da correggere; nessun dato cliente reale trattato.",
        "explanation": {
          "it": "La checklist impedisce che il riordino rimanga un intervento una tantum senza manutenzione.",
          "en": "A repeatable SOP turns initial cleanup into maintainable organisation.",
          "fr": "La procédure rend le classement durable et vérifiable.",
          "es": "El procedimiento permite mantener el orden de forma continua."
        }
      },
      {
        "title": {
          "it": "Inventario documentale e verbale di riordino",
          "en": "Document inventory and reorganisation handover",
          "fr": "Inventaire documentaire et compte rendu de classement",
          "es": "Inventario de documentos e informe de reorganización"
        },
        "language": "it",
        "content": "ARCHIVIO DIGITALE DIMOSTRATIVO — NON CONNESSO A UN ACCOUNT REALE\nLo scenario ipotizza 42 file di prova. L'estratto seguente mostra dieci registrazioni complete con origine, collocazione e stato. Nessun file reale è stato trasferito o eliminato.\n\nINVENTARIO E PROPOSTA DI RINOMINA\n01 | preventivo ultimo.pdf → 2026-11-03_alpha_preventivo_v01.pdf | 01_RICHIESTE | Verificare approvazione.\n02 | preventivo ultimo2.pdf → 2026-11-05_alpha_preventivo_v02.pdf | 01_RICHIESTE | Bozza successiva, non approvata.\n03 | catalogo finale.docx → 2026-11-04_alpha_catalogo_v01.docx | 02_MATERIALI | Versione da controllare.\n04 | catalogo finale_ok.docx → 2026-11-06_alpha_catalogo_v02.docx | 02_MATERIALI | Confermare lo stato di approvazione.\n05 | logo grande.png → 2026-11-01_alpha_logo_originale.png | 02_MATERIALI | Originale da conservare.\n06 | logo sito.png → 2026-11-02_alpha_logo_web_v01.png | 03_LAVORAZIONE | Derivato.\n07 | mail cliente.txt → 2026-11-07_alpha_nota_corrispondenza_v01.txt | 01_RICHIESTE | Accesso limitato.\n08 | faq aggiornata.docx → 2026-11-08_alpha_faq_v02.docx | 03_LAVORAZIONE | In revisione.\n09 | report-v1.pdf → 2026-11-09_alpha_report_v01.pdf | 04_APPROVAZIONI | Da approvare.\n10 | consegna.pdf → 2026-11-10_alpha_consegna_v01.pdf | 05_CONSEGNE | Non inviata.\n\nREGISTRO DELLE ANOMALIE\nD-01: due file chiamati «ultimo» non indicano quale sia quello approvato.\nD-02: «finale_ok» non vale come conferma documentata del titolare.\nD-03: il logo originale deve rimanere distinto dal file modificato per il web.\nD-04: la cartella delle consegne contiene un file che, nella simulazione, non risulta ancora inviato.\nD-05: il documento di corrispondenza richiede permessi limitati.\n\nEMAIL DI CONSEGNA — BOZZA DIMOSTRATIVA\nOggetto: Proposta di riordino dell'archivio — versioni e permessi\nBuongiorno,\nho predisposto una classificazione per tipologia e stato dei documenti del progetto Alpha, con una convenzione uniforme per i nomi dei file. La proposta distingue i file originali dalle copie di lavoro e dalle versioni da sottoporre ad approvazione.\nPrima di applicare qualunque modifica all'archivio è necessario confermare quale preventivo sia valido, se i testi del catalogo siano stati approvati e a chi debba essere consentito l'accesso alle comunicazioni del cliente. Il file collocato in «consegne» resta contrassegnato come non inviato.\nNon ho eliminato documenti, modificato autorizzazioni né condiviso materiale con terzi.\nCordiali saluti,\nSegreteria organizzativa\n\nCONSEGNA: inventario, proposta di struttura cartelle, registro anomalie e modello di comunicazione. La verifica dell'effettiva configurazione dei permessi spetta al responsabile autorizzato.",
        "explanation": {
          "it": "Esempio concreto di registrazione delle versioni, collocazione dei file e richieste di approvazione.",
          "en": "Concrete example of version tracking, file placement and approvals.",
          "fr": "Suivi des versions, classement et validations nécessaires.",
          "es": "Control de versiones, clasificación y aprobaciones necesarias."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Le bozze non vengono presentate come documenti approvati.",
        "en": "Drafts never shown as approved documents.",
        "fr": "Un brouillon n’est jamais présenté comme validé.",
        "es": "Un borrador no aparece como aprobado."
      },
      {
        "it": "Permessi minimi da approvare e revocare secondo necessità.",
        "en": "Least-privilege access for approval and revocation.",
        "fr": "Accès minimaux à approuver et révoquer.",
        "es": "Permisos mínimos sujetos a validación y revocación."
      }
    ],
    "limits": {
      "it": "Organizzazione documentale; non amministrazione aziendale, gestione contabile o consulenza specialistica di cybersecurity.",
      "en": "Document organisation, not administration, bookkeeping or certified cybersecurity consultancy.",
      "fr": "Classement documentaire, pas gestion administrative ni audit de cybersécurité.",
      "es": "Organización documental, no administración, contabilidad ni auditoría de ciberseguridad."
    },
    "handoff": {
      "it": "Schema cartelle, convenzione file, matrice accessi e procedura settimanale.",
      "en": "Folder taxonomy, naming conventions, permissions matrix and weekly SOP.",
      "fr": "Arborescence, nommage, droits et procédure.",
      "es": "Carpetas, nombres, permisos y procedimiento."
    }
  },
  {
    "id": "online-course-secretariat",
    "category": "backoffice",
    "title": {
      "it": "Corso online: comunicazioni e materiali senza disordine",
      "en": "Online course: organiser, participants and materials",
      "fr": "Formation en ligne : organisation et supports",
      "es": "Curso online: organización y materiales"
    },
    "service": {
      "it": "Supporto organizzativo a corsi e webinar",
      "en": "Operational support for courses and webinars",
      "fr": "Appui organisationnel aux formations",
      "es": "Apoyo organizativo a cursos"
    },
    "scenario": {
      "it": "Una formatrice immaginaria deve organizzare un webinar per partecipanti già iscritti: inviti, link, materiali, domande frequenti e follow-up informativo.",
      "en": "A fictional trainer needs operational assistance for a webinar with already registered participants, not marketing or recruitment.",
      "fr": "Une formatrice fictive prépare un webinaire pour des participants déjà inscrits, sans recrutement.",
      "es": "Una formadora ficticia organiza un webinar para inscritos existentes, sin captación."
    },
    "objective": {
      "it": "Consegne corrette, comunicazioni puntuali e informazioni coerenti, senza assumere il ruolo di docente o reclutare partecipanti.",
      "en": "Keep logistics clear without teaching, marketing or recruiting attendees.",
      "fr": "Gérer les aspects pratiques sans enseigner ni recruter.",
      "es": "Organizar sin impartir clases ni captar participantes."
    },
    "inputs": {
      "it": "Evento simulato: 12 novembre, ore 17:00–18:30, fuso Europe/Rome; iscritti fittizi già confermati e link dimostrativo non attivo.",
      "en": "Fictional event 12 November 17:00–18:30 Europe/Rome; existing synthetic registrants and a placeholder meeting link.",
      "fr": "Événement fictif le 12 novembre, 17 h–18 h 30, Europe/Rome ; inscrits fictifs.",
      "es": "Evento ficticio el 12 de noviembre, 17:00–18:30, Europe/Rome; inscritos inventados."
    },
    "workflow": [
      {
        "it": "Confermare con la formatrice programma, orario, modalità di accesso e file autorizzati.",
        "en": "Confirm timing, access details and approved files with the trainer.",
        "fr": "Confirmer horaires, accès et documents validés.",
        "es": "Confirmar horario, acceso y materiales aprobados."
      },
      {
        "it": "Preparare invito e promemoria, controllando fuso e durata.",
        "en": "Draft invitations and reminders, checking time zone and duration.",
        "fr": "Préparer invitations et rappels avec fuseau horaire.",
        "es": "Preparar invitaciones y recordatorios con zona horaria."
      },
      {
        "it": "Raccogliere FAQ logistiche da comunicazioni dei partecipanti già iscritti.",
        "en": "Consolidate logistical FAQs from already registered participants.",
        "fr": "Regrouper les questions pratiques des inscrits.",
        "es": "Recopilar preguntas prácticas de los inscritos."
      },
      {
        "it": "Verificare checklist prima dell’evento e segnalare problemi tecnici al referente.",
        "en": "Run pre-event checks and escalate technical issues.",
        "fr": "Vérifier les points clés et transmettre les problèmes techniques.",
        "es": "Revisar checklist y escalar incidencias técnicas."
      },
      {
        "it": "Predisporre email successiva con materiali approvati, senza promesse di attestati.",
        "en": "Draft approved-material follow-up without invented certificates.",
        "fr": "Préparer le suivi sans attestation inventée.",
        "es": "Preparar seguimiento sin prometer certificados."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Email di benvenuto ai già iscritti",
          "en": "Welcome email to registrants",
          "fr": "Courriel de bienvenue",
          "es": "Correo de bienvenida"
        },
        "content": "Oggetto: informazioni pratiche sul webinar del 12 novembre\nBuongiorno,\nti confermiamo che la tua iscrizione al webinar «Comunicazioni professionali più chiare» è registrata. L'incontro dimostrativo si terrà il 12 novembre, dalle 17:00 alle 18:30, ora italiana (Europe/Rome).\nRiceverai il link di accesso nell'email di promemoria, dopo la verifica dell'organizzazione. Ti consigliamo di collegarti dieci minuti prima e di tenere a portata di mano il materiale condiviso.\nSe hai esigenze pratiche relative all'accesso, rispondi a questa email. La segreteria organizzativa ti aiuterà a individuare il referente corretto.\nNOTA: nessun link reale è stato pubblicato in questo esempio; l'evento non è effettivamente previsto.",
        "explanation": {
          "it": "L'invito distingue gli iscritti già presenti dal reclutamento di nuovi partecipanti.",
          "en": "Only already registered participants are addressed; no recruitment.",
          "fr": "Le courriel s’adresse uniquement aux personnes déjà inscrites.",
          "es": "Solo se escribe a inscritos existentes; no hay captación."
        }
      },
      {
        "title": {
          "it": "FAQ logistiche per partecipanti",
          "en": "Participant logistics FAQ",
          "fr": "FAQ pratique des participants",
          "es": "Preguntas frecuentes de asistencia"
        },
        "content": "FAQ ORGANIZZATIVA — VERSIONE DI PROVA\nA che ora inizia? Il webinar inizia alle 17:00, ora italiana, e termina alle 18:30.\nDove trovo il link? Il collegamento viene comunicato via email dopo la verifica da parte dell'organizzazione; non utilizzare link ricevuti da fonti non autorizzate.\nDevo installare un programma? Attendi le istruzioni tecniche ufficiali: non sono specificati software o requisiti inventati.\nRiceverò un attestato? L'organizzazione non ne ha previsto il rilascio in questa simulazione.\nPosso ottenere i materiali? I file eventualmente disponibili saranno indicati dall'organizzazione dopo l'approvazione della formatrice.\nA chi scrivo se ho difficoltà? Rispondi alla comunicazione di servizio, senza includere password.",
        "explanation": {
          "it": "La FAQ mantiene soltanto informazioni confermate e segnala chiaramente ciò che dipende dall’organizzazione.",
          "en": "The FAQ distinguishes confirmed details from items requiring the organiser's approval.",
          "fr": "La FAQ sépare les informations confirmées des éléments à valider.",
          "es": "La FAQ distingue datos confirmados de información pendiente."
        }
      },
      {
        "title": {
          "it": "Checklist prima e dopo evento",
          "en": "Pre/post-event checklist",
          "fr": "Checklist avant/après",
          "es": "Lista antes y después"
        },
        "content": "CONTROLLO PRIMA DELL'EVENTO\n□ Programma finale approvato □ Orario e fuso ricontrollati □ Destinatari limitati agli iscritti □ Link verificato dal referente □ File autorizzati e denominati □ Test tecnico eseguito da chi gestisce la piattaforma □ Messaggio di supporto pronto.\nCONTROLLO DOPO L'EVENTO\n□ Disponibilità dei materiali verificata □ Link eventuali approvati □ Email di ringraziamento in bozza □ Eventuali problemi tecnici registrati senza dati non necessari □ Domande didattiche rinviate alla formatrice.\nSINTESI OPERATIVA: 90 minuti pianificati; nessun attestato dichiarato; nessun partecipante reclutato; nessuna attività didattica svolta dall’assistente.",
        "explanation": {
          "it": "Il documento mostra la distinzione fra coordinamento e attività didattica, con verifiche prima di ogni invio.",
          "en": "Separates logistics from teaching and adds approval gates.",
          "fr": "Distingue logistique et pédagogie avec étapes de validation.",
          "es": "Distingue coordinación y docencia con controles antes de enviar."
        }
      },
      {
        "title": {
          "it": "Registro iscritti e comunicazioni: pacchetto operativo",
          "en": "Participant log and complete course correspondence",
          "fr": "Suivi des inscrits et communications complètes",
          "es": "Registro de inscritos y comunicaciones completas"
        },
        "language": "it",
        "content": "PACCHETTO DI SEGRETERIA PER WEBINAR — SCENARIO INVENTATO\nEvento di prova: «Comunicazioni professionali più chiare», 12 novembre, ore 17:00–18:30 (Europe/Rome). Nessun webinar reale è stato programmato, nessuna iscrizione acquisita e nessuna email inviata.\n\nREGISTRO DI CINQUE PARTECIPANTI GIÀ ISCRITTI\nP-01 | Iscrizione fittizia registrata | Istruzioni da verificare | Nessuna segnalazione.\nP-02 | Iscrizione fittizia registrata | Chiede conferma dell'orario | Bozza pronta.\nP-03 | Iscrizione fittizia registrata | Non trova il collegamento | Chiedere al referente il link approvato.\nP-04 | Iscrizione fittizia registrata | Chiede materiali successivi | Autorizzazione da verificare.\nP-05 | Iscrizione fittizia registrata | Domanda sui contenuti | Inoltro alla formatrice.\n\nEMAIL COMPLETA — CHIARIMENTO ORARIO\nOggetto: Orario del webinar — richiesta ricevuta\nBuongiorno,\ngrazie per il suo messaggio. Nel programma dimostrativo l'incontro è previsto per il 12 novembre dalle 17:00 alle 18:30, ora italiana. Prima di inviare una conferma definitiva dobbiamo verificare con l'organizzatrice che data, orario e istruzioni di accesso siano quelli aggiornati.\nLe daremo riscontro dopo tale verifica. Se ha ricevuto comunicazioni diverse, può indicarcelo rispondendo a questa email.\nCordiali saluti,\nSegreteria organizzativa\n\nEMAIL COMPLETA — RICHIESTA DI MATERIALI\nOggetto: Materiali del webinar — informazioni disponibili\nBuongiorno,\nabbiamo registrato la sua richiesta relativa ai materiali dell'incontro. Stiamo verificando con l'organizzatrice quali documenti possano essere distribuiti ai partecipanti e attraverso quale canale.\nNon possiamo confermare la disponibilità di una registrazione o di altri materiali finché non riceviamo le indicazioni approvate. Non è necessario inviare ulteriori dati personali.\nCordiali saluti,\nSegreteria organizzativa\n\nMEMO ALLA FORMATRICE\nHo organizzato cinque registrazioni di prova. Sono aperte tre verifiche: conferma dell'orario per P-02, disponibilità del collegamento per P-03 e autorizzazione dei materiali per P-04. La domanda didattica di P-05 richiede una risposta da parte sua. Le due email sono pronte per l'approvazione; non sono state spedite.\nPrima dell'evento: verificare elenco iscritti, fuso orario, link, eventuali accessibilità e materiali consentiti. Dopo l'evento: condividere esclusivamente le risorse approvate e registrare le richieste residue.\nNon è stata svolta attività didattica, promozionale o di reclutamento.",
        "explanation": {
          "it": "Tracciamento organizzativo dei partecipanti già iscritti, bozze email e relazione per la formatrice.",
          "en": "Organisation for existing registrants, complete email drafts and a trainer handover.",
          "fr": "Organisation des personnes inscrites, courriels et compte rendu à la formatrice.",
          "es": "Organización de inscritos, borradores y entrega al formador."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Orario, durata, fuso e link verificati prima della comunicazione.",
        "en": "Time, duration, time zone and link require validation.",
        "fr": "Horaire, durée, fuseau et accès validés.",
        "es": "Horario, duración, zona horaria y enlace verificados."
      },
      {
        "it": "Nessuna raccolta di iscritti nuovi, attestati o crediti inventati.",
        "en": "No recruitment or invented certificates.",
        "fr": "Pas de recrutement ni certification inventée.",
        "es": "Sin captación ni certificados inventados."
      }
    ],
    "limits": {
      "it": "Segreteria e supporto logistico: non docenza, certificazione, marketing o reclutamento di partecipanti.",
      "en": "Logistical assistance only; not teaching, certification, marketing or attendee recruitment.",
      "fr": "Logistique uniquement, sans enseignement ni recrutement.",
      "es": "Solo logística; no docencia, certificados ni captación."
    },
    "handoff": {
      "it": "Inviti, FAQ, checklist, promemoria e follow-up da approvare.",
      "en": "Invitations, FAQs, checklists, reminders and approval-ready follow-up.",
      "fr": "Invitations, FAQ, checklist et suivi.",
      "es": "Invitaciones, FAQ, controles y seguimiento."
    }
  }
];
