import type { OperationalDeepCase } from "./portfolioOperationalTypes";

/** Independently authored complete operational work examples for service-led browsing. */
export const OPERATIONAL_SAMPLES_I: OperationalDeepCase[] = [
  {
    "id": "inbox-handover-cover-full",
    "category": "backoffice",
    "title": {
      "it": "Casella condivisa: passaggio di consegne e risposte ai clienti",
      "en": "Shared inbox: full cover handover and customer replies",
      "fr": "Boîte partagée : passation et réponses aux clients",
      "es": "Buzón compartido: traspaso y respuestas a clientes"
    },
    "service": {
      "it": "Segreteria digitale, email e follow-up",
      "en": "Email and delegated inbox support",
      "fr": "Secrétariat numérique et suivi des courriels",
      "es": "Secretaría digital y seguimiento de correos"
    },
    "scenario": {
      "it": "Una professionista deve assentarsi per alcuni giorni e vuole assicurare continuità alle comunicazioni con clienti già in carico, senza concedere accessi indiscriminati né promettere tempi non autorizzati.",
      "en": "A professional is temporarily away and needs an orderly handover of correspondence with existing customers, with limited access and authorised replies.",
      "fr": "Une professionnelle doit s'absenter et organiser le suivi des courriels de clients existants, avec des accès limités.",
      "es": "Una profesional se ausenta temporalmente y necesita organizar el correo de clientes actuales con accesos limitados."
    },
    "objective": {
      "it": "Preparare una presa in carico ripetibile, una matrice dei messaggi, tre risposte integrali e un passaggio finale al titolare.",
      "en": "Build a reproducible handover with message categories, three complete replies and a final owner report.",
      "fr": "Préparer un relais opérationnel, trois réponses complètes et un compte rendu.",
      "es": "Preparar un relevo operativo, tres respuestas completas y un informe."
    },
    "inputs": {
      "it": "Istruzioni scritte di delega, calendario condiviso, schede dei servizi approvati e richieste già pervenute.",
      "en": "Written delegation, approved diary and service notes, and incoming existing-customer requests.",
      "fr": "Consignes de délégation, agenda et fiches des services validés.",
      "es": "Instrucciones de delegación, calendario y fichas de servicios aprobados."
    },
    "workflow": [
      {
        "it": "Identificare richieste, scadenze, stato e referente.",
        "en": "Identify each request, due date, status and owner.",
        "fr": "Identifier chaque demande, son échéance et son responsable.",
        "es": "Identificar cada solicitud, plazo y responsable."
      },
      {
        "it": "Distinguere le comunicazioni ordinarie da quelle da approvare.",
        "en": "Separate routine replies from owner decisions.",
        "fr": "Séparer réponses courantes et décisions à valider.",
        "es": "Separar respuestas habituales y decisiones pendientes."
      },
      {
        "it": "Predisporre bozze complete senza segnare messaggi come inviati.",
        "en": "Prepare full draft replies without claiming they were sent.",
        "fr": "Rédiger les réponses sans les présenter comme envoyées.",
        "es": "Redactar respuestas sin afirmar que se enviaron."
      },
      {
        "it": "Concludere con un registro delle questioni irrisolte e delle autorizzazioni da revocare.",
        "en": "Handover unresolved cases and review delegated access.",
        "fr": "Transmettre les dossiers ouverts et réviser les droits d'accès.",
        "es": "Entregar casos abiertos y revisar permisos."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Registro di presa in carico",
          "en": "Handover register",
          "fr": "Registre de passation",
          "es": "Registro de traspaso"
        },
        "language": "it",
        "content": "REGISTRO DI PRESA IN CARICO | VERSIONE 1.0\nPerimetro: clienti già in gestione; nessun invio prima della conferma del responsabile.\nID E-201 | Cliente: pratica già aperta | Richiesta: riprogrammare incontro | Fonte: messaggio ricevuto | Verifica: calendario condiviso, fascia ancora da convalidare | Responsabile: referente agenda | Stato: BOZZA | Prossimo controllo: verifica disponibilità.\nID E-202 | Cliente: ordine attivo | Richiesta: sapere se il materiale è partito | Fonte: messaggio ricevuto | Verifica: stato spedizione non disponibile nelle note | Responsabile: referente logistico | Stato: IN ATTESA | Prossimo controllo: reperire conferma scritta.\nID E-203 | Cliente: servizio attivo | Richiesta: chiarimento su modifica condizioni | Fonte: precedente accordo da recuperare | Responsabile: titolare | Stato: DA APPROVARE | Prossimo controllo: inoltrare al referente.\nID E-204 | Comunicazione interna | Richiesta: aggiornare documenti della riunione | Fonte: istruzioni approvate | Responsabile: segreteria | Stato: IN LAVORAZIONE | Prossimo controllo: verificare versione allegata.\nRegole: nessuna chiusura senza esito registrato; evitare dati personali non necessari; ogni bozza deve indicare versione, autore e approvazione. Non cancellare messaggi né modificare condizioni senza istruzioni.\nRiepilogo: 4 attività esaminate, 1 pronta per semplice aggiornamento, 2 in verifica, 1 da sottoporre al titolare.",
        "explanation": {
          "it": "Registro con responsabilità e stato reale delle bozze.",
          "en": "Register with responsibility and accurate draft status.",
          "fr": "Registre avec responsabilités et états contrôlables.",
          "es": "Registro con responsables y estado verificable."
        }
      },
      {
        "title": {
          "it": "Tre email complete per clienti italiani",
          "en": "Three full replies to Italian customers",
          "fr": "Trois réponses intégrales en italien",
          "es": "Tres respuestas completas en italiano"
        },
        "language": "it",
        "content": "EMAIL E-201 — APPUNTAMENTO\nOggetto: Re: richiesta di modifica dell'appuntamento\nBuongiorno,\ngrazie per averci avvisato. Abbiamo registrato la sua richiesta di modificare l'appuntamento.\nPrima di proporle un'alternativa, stiamo verificando le fasce disponibili e le eventuali condizioni già concordate. Al momento l'appuntamento originario non è stato modificato.\nLe scriveremo con una proposta precisa non appena avremo ricevuto conferma dal referente. Nel frattempo non deve effettuare nuove prenotazioni.\nCordiali saluti,\nSegreteria\nStato: bozza da approvare.\n\nEMAIL E-202 — SPEDIZIONE\nOggetto: Re: aggiornamento relativo al suo ordine\nBuongiorno,\ngrazie per averci contattato. Abbiamo preso in carico la richiesta di aggiornamento sulla spedizione del suo ordine.\nStiamo verificando lo stato effettivo con il reparto competente. Le informazioni disponibili al momento non consentono di confermare che il materiale sia stato affidato al corriere, né di indicare una data di consegna.\nLe invieremo un aggiornamento quando avremo ricevuto il riscontro necessario, evitando di comunicarle tempistiche non verificate.\nCordiali saluti,\nAssistenza clienti\nStato: bozza da approvare.\n\nEMAIL E-203 — CONDIZIONI COMMERCIALI\nOggetto: Re: chiarimento sulle condizioni del servizio\nBuongiorno,\nla ringraziamo per il messaggio. La sua richiesta riguarda una possibile modifica delle condizioni concordate.\nPer fornirle una risposta accurata, abbiamo predisposto una verifica della documentazione e un confronto con il responsabile del servizio. Non possiamo confermare variazioni o nuove condizioni prima della relativa approvazione.\nNon appena avremo indicazioni ufficiali, le comunicheremo i passaggi successivi.\nCordiali saluti,\nSegreteria organizzativa\nStato: bozza per il titolare.",
        "explanation": {
          "it": "Tre risposte autonome, complete e prudenti.",
          "en": "Three separate, full-length and careful replies.",
          "fr": "Trois réponses distinctes, rédigées intégralement.",
          "es": "Tres respuestas independientes y completas."
        }
      },
      {
        "title": {
          "it": "Protocollo di gestione in inglese",
          "en": "English handover procedure",
          "fr": "Procédure de passation en anglais",
          "es": "Procedimiento de traspaso en inglés"
        },
        "language": "en",
        "content": "SHARED INBOX COVER — OPERATING PROCEDURE\nScope: existing customers and approved internal communications. No prospecting, new-customer outreach, accounting or billing tasks.\n1. Access: use the delegated account or approved mailbox role. Do not share personal passwords or forward private messages to an unrelated account.\n2. Intake: read newly assigned messages, log case number, channel, subject, relevant deadline, current information and next action. Record only the information required to complete the work.\n3. Classification: APPOINTMENT, ORDER STATUS, SERVICE QUESTION, OWNER APPROVAL, INTERNAL DOCUMENT. Mark a request as urgent only where there is an actual operational deadline.\n4. Verification: consult the most recent approved document. An old email or a draft quotation is not evidence that a term remains valid.\n5. Drafting: acknowledge the specific request in natural Italian; distinguish confirmed information from matters being checked. Do not promise stock, delivery dates, refunds or commercial exceptions.\n6. Approval: routine messages follow the agreed template; changes to service terms, fees or exceptional arrangements go to the business owner. Save the final approved wording and the approver.\n7. Follow-up: give every open item a named owner and a review date. Close it only when there is a recorded outcome.\n8. End of cover: send the handover report, mark outstanding decisions, return relevant documents to the agreed folder and review access revocation.\nFinal check: recipient, attachments, case identifier, wording, version, approval and confidentiality. No message in this portfolio example has been sent.",
        "explanation": {
          "it": "Procedura completa destinata anche a un committente estero.",
          "en": "Full SOP suitable for an overseas client.",
          "fr": "Procédure intégrale pour un donneur d'ordre étranger.",
          "es": "Procedimiento íntegro para un cliente internacional."
        }
      },
      {
        "title": {
          "it": "Rapporto conclusivo al titolare",
          "en": "Owner handover memo",
          "fr": "Rapport au responsable",
          "es": "Informe al titular"
        },
        "language": "fr",
        "content": "NOTE DE PASSATION — COUVERTURE DE LA MESSAGERIE\nObjet : synthèse des demandes en cours et validations à effectuer\nBonjour,\nJ'ai préparé le tableau de suivi des quatre dossiers retenus pour ce travail de démonstration. Deux demandes nécessitent la confirmation d'un autre service : le report d'un rendez-vous et l'état d'une expédition. Une troisième demande porte sur les conditions commerciales et relève directement de votre décision.\nLes trois réponses en italien sont rédigées, mais restent au stade de projet. Aucun message n'a été envoyé et aucune réservation, commande ou condition contractuelle n'a été modifiée.\nJe vous invite à vérifier en priorité les informations de disponibilité, l'état réel de l'expédition et la version applicable des conditions du service. Après vos validations, les réponses pourront être relues une dernière fois avant tout envoi.\nLes documents sont regroupés par référence et version afin d'éviter la circulation de brouillons contradictoires. Il conviendra également de vérifier la fin des autorisations d'accès accordées pour cette période de remplacement.\nBien cordialement,\nSecrétariat\nStatut : note rédigée pour illustrer un processus de passation.",
        "explanation": {
          "it": "Promemoria finale in francese con decisioni aperte.",
          "en": "Full French handover memo identifying outstanding decisions.",
          "fr": "Note française complète précisant les validations en attente.",
          "es": "Informe francés completo con decisiones pendientes."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Le risposte distinguono chiaramente bozze e invii.",
        "en": "Drafts are never described as sent.",
        "fr": "Les projets ne sont jamais présentés comme envoyés.",
        "es": "Los borradores no se presentan como enviados."
      },
      {
        "it": "Accessi e responsabilità sono limitati all'incarico.",
        "en": "Access and decisions are limited to the assignment.",
        "fr": "Accès et responsabilités limités à la mission.",
        "es": "Accesos y responsabilidades limitados al encargo."
      }
    ],
    "limits": {
      "it": "Attività di organizzazione, comunicazione e back office secondo istruzioni approvate. Non comprende contabilità, fatturazione, telemarketing, prospezione commerciale, ricerca di nuovi contatti o decisioni economiche autonome.",
      "en": "Operational organisation, written support and back-office tasks under approved instructions. No accounting, invoicing, cold calling, sales prospecting or unilateral commercial decisions.",
      "fr": "Organisation, correspondance et back-office sur consignes validées. Sans comptabilité, facturation, démarchage commercial, recherche de prospects ni décisions financières autonomes.",
      "es": "Organización, correspondencia y back office según instrucciones autorizadas. Sin contabilidad, facturación, llamadas en frío, captación ni decisiones económicas autónomas."
    },
    "handoff": {
      "it": "Registro, tre email italiane, procedura inglese e nota di consegna francese.",
      "en": "Register, three Italian replies, English SOP and French handover.",
      "fr": "Registre, trois courriels italiens, procédure anglaise et note de passation française.",
      "es": "Registro, tres correos italianos, procedimiento inglés e informe francés."
    }
  },
  {
    "id": "orders-multi-item-exception-control",
    "category": "backoffice",
    "title": {
      "it": "Ordini e listini: controllo di una fornitura con anomalie",
      "en": "Orders and price lists: complete exception handling",
      "fr": "Commandes et tarifs : contrôle des écarts",
      "es": "Pedidos y precios: control de incidencias"
    },
    "service": {
      "it": "Back office ordini e controllo dati",
      "en": "Order entry and operational checks",
      "fr": "Back-office commandes et contrôle des données",
      "es": "Back office de pedidos y control de datos"
    },
    "scenario": {
      "it": "Un cliente già acquisito chiede tre articoli; una riga non coincide con il listino approvato e un articolo presenta un codice non valido. Occorre preparare il registro e una risposta senza autorizzare modifiche.",
      "en": "An existing customer's order contains a price-list discrepancy and an unmatched product code. The assistant must prepare an accurate handover without approving changes.",
      "fr": "Une commande contient un écart tarifaire et une référence inconnue : il faut documenter les vérifications avant validation.",
      "es": "Un pedido de un cliente actual presenta una diferencia de precio y una referencia desconocida."
    },
    "objective": {
      "it": "Confrontare richiesta e listino, calcolare soltanto i dati confermati e produrre documenti pronti alla verifica del responsabile.",
      "en": "Reconcile the request and approved price list, avoiding unsupported pricing and preparing a full approval pack.",
      "fr": "Comparer la demande au tarif approuvé et transmettre les anomalies.",
      "es": "Comparar el pedido con la lista aprobada y documentar incidencias."
    },
    "inputs": {
      "it": "Richiesta cliente ORD-431, listino LP-07 approvato, regole di verifica quantità e prezzi definite dal responsabile.",
      "en": "Order ORD-431, approved price sheet LP-07 and owner instructions.",
      "fr": "Commande ORD-431, tarif LP-07 approuvé et consignes.",
      "es": "Pedido ORD-431, lista LP-07 aprobada e instrucciones."
    },
    "workflow": [
      {
        "it": "Verificare descrizione, codice, quantità e versione del listino.",
        "en": "Check description, item code, quantity and price-list version.",
        "fr": "Vérifier codes, quantités et version du tarif.",
        "es": "Verificar código, cantidad y versión del precio."
      },
      {
        "it": "Evidenziare le incongruenze senza sostituire autonomamente i valori.",
        "en": "Flag discrepancies without replacing values.",
        "fr": "Signaler les écarts sans correction non autorisée.",
        "es": "Marcar las diferencias sin cambios no autorizados."
      },
      {
        "it": "Preparare comunicazione al cliente e memo di approvazione.",
        "en": "Prepare customer reply and approval memo.",
        "fr": "Préparer la réponse et la demande de validation.",
        "es": "Preparar respuesta e informe de aprobación."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Scheda di controllo dell'ordine",
          "en": "Order-reconciliation worksheet",
          "fr": "Tableau de contrôle de commande",
          "es": "Hoja de conciliación de pedido"
        },
        "language": "it",
        "content": "REGISTRO ORDINI | ORD-431 | Revisione 1.0\nFonte autorizzata: listino LP-07, utilizzato solo per questo caso esemplificativo.\nRIGA 1 | Codice: T-120 | Descrizione: raccoglitore A4 | Q.tà richiesta: 4 | Prezzo listino: €7,50 | Importo calcolabile: €30,00 | Stato: congruente.\nRIGA 2 | Codice: Q-210 | Descrizione: quaderno A5 | Q.tà richiesta: 6 | Prezzo indicato nel messaggio: €3,40 | Prezzo LP-07: €3,60 | Importo di listino: €21,60 | Stato: DIFFERENZA DA CHIARIRE, non sostituire in un ordine confermato.\nRIGA 3 | Codice: P-999 | Descrizione: penna tecnica | Q.tà richiesta: 3 | Codice non presente nel LP-07 | Prezzo: NON CONFERMATO | Stato: verifica descrizione/codice necessaria.\nTotale parziale di listino delle sole righe con codice valido: €51,60. Non è un importo da comunicare come totale definitivo dell'ordine: manca la riga 3 e restano da verificare condizioni e imposte applicabili.\nANOMALIA A-01: prezzo della riga 2 discordante dalla fonte approvata.\nANOMALIA A-02: codice della riga 3 assente dal listino.\nDECISIONI: chiedere al responsabile se la riga 2 richiede aggiornamento del documento commerciale e quale sia il codice corretto della riga 3. Nessuna conferma al cliente prima della revisione.\nIl registro non è un documento contabile e non genera fatture.",
        "explanation": {
          "it": "Il parziale è esplicitamente distinto dal totale autorizzato.",
          "en": "The provisional subtotal is not a customer-facing final amount.",
          "fr": "Le sous-total n'est pas un montant définitif.",
          "es": "El subtotal no es un importe definitivo."
        }
      },
      {
        "title": {
          "it": "Email di chiarimento al cliente",
          "en": "Complete customer clarification email",
          "fr": "Courriel intégral au client",
          "es": "Correo completo de aclaración"
        },
        "language": "it",
        "content": "Oggetto: Verifica delle referenze per la richiesta ORD-431\nBuongiorno,\ngrazie per averci trasmesso la richiesta relativa ai materiali da ufficio.\nDurante il controllo delle referenze abbiamo rilevato due punti che richiedono una conferma prima di completare la preparazione del documento: il prezzo indicato per il quaderno A5 non coincide con la versione di listino disponibile e il codice della penna tecnica non risulta associato alla descrizione ricevuta.\nAbbiamo sottoposto le informazioni al referente competente per evitare di riportare un importo o un articolo non corretti. Non abbiamo modificato né confermato l'ordine.\nLe daremo un riscontro non appena saranno disponibili indicazioni approvate e, se necessario, le proporremo una scheda riepilogativa aggiornata da verificare.\nLa ringraziamo per la collaborazione.\nCordiali saluti,\nUfficio ordini\nStato: bozza non inviata, da approvare.",
        "explanation": {
          "it": "La risposta è completa ma non anticipa prezzi o disponibilità.",
          "en": "Full email without unsupported price commitments.",
          "fr": "Courriel complet sans prix non confirmé.",
          "es": "Correo completo sin comprometer precios no aprobados."
        }
      },
      {
        "title": {
          "it": "Nota interna sulle due anomalie",
          "en": "English owner-approval memo",
          "fr": "Note interne de validation",
          "es": "Nota interna de aprobación"
        },
        "language": "en",
        "content": "ORDER REVIEW — INTERNAL APPROVAL MEMO\nReference: ORD-431 / approved reference sheet LP-07\nPurpose: resolve two discrepancies before preparing a customer-facing order confirmation.\nLine 1: T-120, four A4 binders at €7.50 each. This matches the approved worksheet and amounts to €30.00 for this sample.\nLine 2: Q-210, six A5 notebooks. The incoming request shows €3.40 each, while LP-07 shows €3.60. The price difference is €0.20 per unit or €1.20 across six units. Do not unilaterally adjust an agreed customer term.\nLine 3: P-999, three technical pens. This product reference is not listed in LP-07. Neither the correct code nor the price is established.\nRequired owner decisions: (1) identify the document and price applicable to line 2; (2) confirm the correct product reference and approved price for line 3; (3) decide whether additional delivery terms apply.\nOperational status: order record checked, discrepancy note completed, Italian customer reply drafted but not sent. No order acceptance or invoicing has taken place.\nNext step: owner signs off the corrected reference information; the assistant updates only the authorised fields and prepares the final draft for approval.\nControl: keep LP-07 unchanged, retain the original request and note the date of the approved correction.",
        "explanation": {
          "it": "La nota distingue controllo operativo e decisioni commerciali.",
          "en": "Memo separates order checking from commercial approval.",
          "fr": "La note distingue contrôle et décision commerciale.",
          "es": "La nota separa control y autorización."
        }
      },
      {
        "title": {
          "it": "Procedura di chiusura della pratica",
          "en": "Case closure procedure",
          "fr": "Procédure de clôture",
          "es": "Procedimiento de cierre"
        },
        "language": "es",
        "content": "PROCEDIMIENTO DE CIERRE DE UNA SOLICITUD DE PEDIDO\nReferencia: ORD-431. Objetivo: no dar por cerrado un pedido mientras existan diferencias entre la solicitud y la lista autorizada.\nPaso 1. Confirmar que los códigos coinciden con las descripciones y las cantidades solicitadas.\nPaso 2. Comparar los importes con la versión de precios que corresponda al acuerdo vigente; no sustituir un precio negociado sin autorización.\nPaso 3. Registrar las diferencias en un documento aparte y asignar un responsable a cada una.\nPaso 4. Preparar el mensaje al cliente en su idioma, indicando los puntos que se están revisando, sin anunciar una aceptación o entrega todavía no confirmadas.\nPaso 5. Solicitar aprobación expresa para los cambios y conservar el registro de versiones.\nPaso 6. Una vez recibidas las decisiones, revisar cálculos, destinatario y adjuntos; enviar únicamente por el canal autorizado.\nPaso 7. Cerrar el seguimiento cuando se haya registrado la respuesta final, no cuando simplemente se haya escrito un borrador.\nLímites: este procedimiento describe tareas de back office. No supone emitir facturas, gestionar pagos ni decidir condiciones comerciales.",
        "explanation": {
          "it": "I passaggi conclusivi sono completi e traducibili in un flusso reale.",
          "en": "Complete, practical closing procedure in Spanish.",
          "fr": "Procédure de clôture exploitable rédigée en espagnol.",
          "es": "Procedimiento íntegro y reutilizable."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Nessun ordine è presentato come confermato.",
        "en": "No order is described as confirmed.",
        "fr": "Aucune commande n'est présentée comme confirmée.",
        "es": "No se presenta el pedido como confirmado."
      },
      {
        "it": "Calcoli, condizioni e scelte restano distinguibili.",
        "en": "Calculations, terms and decisions remain separate.",
        "fr": "Calculs, conditions et décisions restent distincts.",
        "es": "Cálculos, condiciones y decisiones quedan diferenciados."
      }
    ],
    "limits": {
      "it": "Attività di organizzazione, comunicazione e back office secondo istruzioni approvate. Non comprende contabilità, fatturazione, telemarketing, prospezione commerciale, ricerca di nuovi contatti o decisioni economiche autonome.",
      "en": "Operational organisation, written support and back-office tasks under approved instructions. No accounting, invoicing, cold calling, sales prospecting or unilateral commercial decisions.",
      "fr": "Organisation, correspondance et back-office sur consignes validées. Sans comptabilité, facturation, démarchage commercial, recherche de prospects ni décisions financières autonomes.",
      "es": "Organización, correspondencia y back office según instrucciones autorizadas. Sin contabilidad, facturación, llamadas en frío, captación ni decisiones económicas autónomas."
    },
    "handoff": {
      "it": "Scheda righe con anomalie, email al cliente, memo inglese e procedura spagnola.",
      "en": "Reconciliation register, Italian reply, English memo and Spanish SOP.",
      "fr": "Tableau des écarts, réponse italienne, note anglaise et procédure espagnole.",
      "es": "Registro de diferencias, correo italiano, informe inglés y procedimiento español."
    }
  },
  {
    "id": "shared-drive-handover-client-documents",
    "category": "backoffice",
    "title": {
      "it": "Archivio digitale: riordino, duplicati e guida di consegna",
      "en": "Shared files: document reorganisation and complete handover",
      "fr": "Archives partagées : classement et guide de remise",
      "es": "Archivos compartidos: organización y guía de entrega"
    },
    "service": {
      "it": "Organizzazione Drive, documenti e versioni",
      "en": "Digital-file organisation and version control",
      "fr": "Organisation Drive et contrôle des versions",
      "es": "Organización de Drive y control de versiones"
    },
    "scenario": {
      "it": "Una piccola attività ha più copie di preventivi, schede di servizio e documentazione formativa. Occorre una proposta verificabile senza eliminare file e senza intervenire su contenuti contabili.",
      "en": "A small business stores conflicting copies of approved documents. The project concerns folder design, permissions and version tracking without deleting files.",
      "fr": "Une petite structure conserve plusieurs versions de ses documents et veut clarifier rangement, accès et suivi.",
      "es": "Una pequeña empresa tiene documentos repetidos y busca ordenar carpetas, permisos y versiones."
    },
    "objective": {
      "it": "Consegnare un inventario, un piano di migrazione reversibile, una convenzione per i nomi e una guida d'uso completa.",
      "en": "Deliver an inventory, reversible migration plan, naming policy and complete user guide.",
      "fr": "Livrer inventaire, plan de classement réversible et mode d'emploi.",
      "es": "Entregar inventario, plan de migración reversible y guía."
    },
    "inputs": {
      "it": "Elenco dei file autorizzati, struttura attuale, responsabili dei documenti e permessi previsti.",
      "en": "Approved list of files, existing folders, document owners and access rules.",
      "fr": "Liste des documents autorisés, arborescence et responsables.",
      "es": "Lista de documentos autorizados, carpetas y responsables."
    },
    "workflow": [
      {
        "it": "Inventariare i file e distinguere originale, copia e versione approvata.",
        "en": "Classify source, duplicate and approved versions.",
        "fr": "Distinguer original, doublon et version approuvée.",
        "es": "Distinguir original, copia y versión aprobada."
      },
      {
        "it": "Definire prima la struttura proposta e le autorizzazioni.",
        "en": "Define proposed folders and access rights.",
        "fr": "Définir dossiers et droits d'accès.",
        "es": "Definir carpetas y permisos."
      },
      {
        "it": "Eseguire cambiamenti solo dopo approvazione e con possibilità di ripristino.",
        "en": "Make changes only after approval and with rollback notes.",
        "fr": "Modifier uniquement après validation, avec retour possible.",
        "es": "Modificar solo con aprobación y plan de reversión."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Inventario documentale completo",
          "en": "Complete file inventory",
          "fr": "Inventaire documentaire complet",
          "es": "Inventario documental completo"
        },
        "language": "it",
        "content": "INVENTARIO INIZIALE — ARCHIVIO PROGETTO\nFile: Preventivo_servizi_v2.docx | Cartella attuale: /Varie | Tipo: bozza | Responsabile: titolare | Azione proposta: conservare come bozza in /03_Proposte/Bozze.\nFile: Preventivo_servizi_APPROVATO.pdf | Cartella attuale: /Desktop_backup | Tipo: approvato | Responsabile: titolare | Azione proposta: catalogare come versione approvata, senza modificarne il contenuto.\nFile: FAQ_servizi_2026.docx | Cartella attuale: /Email | Tipo: da verificare | Responsabile: comunicazione | Azione: confrontare con ultima scheda approvata.\nFile: Materiali_corso_1.zip | Cartella attuale: /Materiali | Tipo: materiale partecipanti | Responsabile: organizzatrice | Azione: verificare autorizzazioni prima della condivisione.\nFile: Materiali_corso_1_copia.zip | Cartella attuale: /Download | Tipo: copia possibile | Responsabile: organizzatrice | Azione: controllare hash/contenuto; nessuna cancellazione automatica.\nFile: Appunti_riunione.txt | Cartella attuale: /Condivisi | Tipo: note interne | Responsabile: titolare | Azione: limitare accesso e attribuire versione.\nLegenda: APPROVATO / BOZZA / DA VERIFICARE / POSSIBILE COPIA / RISERVATO.\nDivieti: non rinominare file dei quali non si conosce la funzione; non eliminare possibili duplicati; non cambiare gli accessi senza consenso; non inserire password nell'inventario.",
        "explanation": {
          "it": "Inventario con azioni specifiche per ciascun file.",
          "en": "Detailed file-by-file inventory and next actions.",
          "fr": "Inventaire détaillé et actions proposées.",
          "es": "Inventario detallado y siguientes pasos."
        }
      },
      {
        "title": {
          "it": "Struttura cartelle e regole di versione",
          "en": "Folder tree and naming convention",
          "fr": "Arborescence et convention de nommage",
          "es": "Carpetas y convenciones de nombres"
        },
        "language": "en",
        "content": "PROPOSED DOCUMENT STRUCTURE — NOT YET APPLIED\n/00_README — folder guide and latest approved policy\n/01_SERVICES — approved service descriptions, separate /Drafts\n/02_CUSTOMERS_ACTIVE — one project folder per authorised existing customer; limited access\n/03_QUOTES — /Drafts, /For_Approval and /Approved\n/04_COURSE_SUPPORT — /Participant_Materials, /Internal_Checklists, /Approved_Messages\n/05_INTERNAL — restricted handover notes and procedures\n/99_ARCHIVE — superseded versions retained under the owner's rules\nNaming format: YYYY-MM-DD_topic_status_vNN.ext. Use dates consistently. Do not overwrite an approved file with a draft.\nVersion control: DRAFT = editable work; FOR_APPROVAL = ready for review; APPROVED = explicitly signed off. Only authorised users may change the status.\nDuplicates: compare file contents and ownership before marking a copy redundant. Never erase based solely on similar file names.\nAccess: grant folder-specific permissions where the platform permits; review links shared with third parties, especially those marked “anyone with the link”.\nMigration: first copy a limited group, verify retrieval, obtain confirmation, then move the next group. Keep a dated mapping of previous and new paths.\nRecovery: record original location and identifier before any authorised move; follow the organisation's documented restoration process.",
        "explanation": {
          "it": "Convenzione e struttura complete, con controlli accessi e recupero.",
          "en": "Full proposed tree, naming rules and recovery safeguards.",
          "fr": "Arborescence et règles complètes avec contrôles d'accès.",
          "es": "Estructura y reglas completas con protección de accesos."
        }
      },
      {
        "title": {
          "it": "Messaggio di consegna in francese",
          "en": "French client handover",
          "fr": "Courriel de remise en français",
          "es": "Correo de entrega en francés"
        },
        "language": "fr",
        "content": "Objet : Proposition de classement documentaire — dossier à valider\nBonjour,\nVous trouverez dans les documents préparés une proposition de nouvelle arborescence pour les dossiers partagés, accompagnée d'un inventaire des fichiers et des règles de nommage.\nL'objectif est de distinguer les documents validés des brouillons et de retrouver plus facilement la bonne version, sans modifier le contenu des fichiers ni supprimer les doublons présumés.\nAvant toute intervention dans votre espace partagé, je vous propose de vérifier ensemble trois points : la personne responsable de chaque dossier, les accès à conserver et les règles de conservation applicables à vos documents.\nLes copies repérées dans l'inventaire n'ont pas été effacées. Elles doivent être comparées et validées par le responsable concerné. De même, la structure jointe est une proposition : aucun déplacement n'est considéré comme effectué.\nAprès validation, le transfert pourra être réalisé par étapes, avec une liste des anciens et des nouveaux emplacements afin de faciliter les contrôles.\nBien cordialement,\nAssistance opérationnelle\nPièces prévues : inventaire, arborescence proposée, procédure de validation. Statut : message préparé, non envoyé.",
        "explanation": {
          "it": "Il cliente riceve un messaggio di consegna completo e trasparente.",
          "en": "Complete French-language handover message.",
          "fr": "Courriel complet, adapté à un client francophone.",
          "es": "Correo completo y transparente para un cliente francófono."
        }
      },
      {
        "title": {
          "it": "Guida operativa interna in spagnolo",
          "en": "Spanish user guide",
          "fr": "Guía interna en español",
          "es": "Guía de uso completa"
        },
        "language": "es",
        "content": "GUÍA DE USO DEL ARCHIVO COMPARTIDO\nPropósito: encontrar el documento adecuado y evitar que un borrador sustituya una versión aprobada.\n1. Antes de guardar un archivo, identifica su finalidad: documento de servicio, propuesta, material de formación, nota interna o expediente de un cliente actual.\n2. Elige la carpeta correspondiente. Los archivos internos y las notas que contengan información reservada no deben almacenarse en carpetas de acceso general.\n3. Nombra el archivo siguiendo el patrón fecha_tema_estado_versión. Por ejemplo: 2026-11-13_servicios_BORRADOR_v01.docx.\n4. Marca como APROBADO únicamente el documento validado por la persona responsable. Una versión más reciente no implica aprobación automática.\n5. Si encuentras dos archivos aparentemente iguales, registra sus ubicaciones y solicita la comprobación del contenido; no borres ninguno por tu cuenta.\n6. Para compartir, verifica destinatario, permisos y fecha de caducidad del enlace, si la herramienta dispone de esa función.\n7. Si el documento cambia, crea una versión identificable y registra el motivo. No sobrescribas el material aprobado sin instrucciones.\n8. Al finalizar la colaboración, revisa los accesos delegados y conserva o devuelve los archivos según lo acordado.\nControl mensual: enlaces compartidos, permisos, versiones pendientes, nombres ambiguos y posibles duplicados.\nEsta guía describe una forma de trabajo; no certifica el cumplimiento normativo ni la seguridad técnica del proveedor.",
        "explanation": {
          "it": "Una guida autonoma e utilizzabile senza spiegazioni supplementari.",
          "en": "Standalone Spanish guide with practical safeguards.",
          "fr": "Guide espagnol autonome et détaillé.",
          "es": "Guía práctica autónoma en español."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Nessun file risulta spostato o cancellato nel caso.",
        "en": "No move or deletion is claimed.",
        "fr": "Aucun déplacement ni suppression n'est présenté comme réalisé.",
        "es": "No se afirma haber movido ni borrado archivos."
      },
      {
        "it": "Decisioni su accessi e conservazione restano autorizzate.",
        "en": "Access and retention decisions remain authorised.",
        "fr": "Accès et conservation soumis à validation.",
        "es": "Accesos y conservación sujetos a autorización."
      }
    ],
    "limits": {
      "it": "Attività di organizzazione, comunicazione e back office secondo istruzioni approvate. Non comprende contabilità, fatturazione, telemarketing, prospezione commerciale, ricerca di nuovi contatti o decisioni economiche autonome.",
      "en": "Operational organisation, written support and back-office tasks under approved instructions. No accounting, invoicing, cold calling, sales prospecting or unilateral commercial decisions.",
      "fr": "Organisation, correspondance et back-office sur consignes validées. Sans comptabilité, facturation, démarchage commercial, recherche de prospects ni décisions financières autonomes.",
      "es": "Organización, correspondencia y back office según instrucciones autorizadas. Sin contabilidad, facturación, llamadas en frío, captación ni decisiones económicas autónomas."
    },
    "handoff": {
      "it": "Inventario, struttura, guida spagnola e messaggio francese di consegna.",
      "en": "Inventory, folder plan, Spanish manual and French handover.",
      "fr": "Inventaire, arborescence, guide espagnol et courrier français.",
      "es": "Inventario, estructura, guía española y correo francés."
    }
  }
];
