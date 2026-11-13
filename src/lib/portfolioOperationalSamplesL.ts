import type { OperationalDeepCase } from "./portfolioOperationalTypes";

/** Independently authored complete portfolio demonstrations, not client commissions. */
export const OPERATIONAL_SAMPLES_L: OperationalDeepCase[] = [
  {
    "id": "italian-customer-inbox-weekly-operations",
    "category": "backoffice",
    "title": {
      "it": "Segreteria email: settimana completa di smistamento e risposte",
      "en": "Italian inbox: a full weekly triage and reply pack",
      "fr": "Secrétariat : une semaine de courriels et de réponses",
      "es": "Secretaría: semana completa de correo y respuestas"
    },
    "service": {
      "it": "Gestione email, segreteria e customer care scritto",
      "en": "Inbox administration and written customer care",
      "fr": "Gestion des courriels et relation client écrite",
      "es": "Gestión del correo y atención escrita al cliente"
    },
    "scenario": {
      "it": "Un piccolo studio di servizi deve distinguere richieste di appuntamento, aggiornamenti e pratiche da inoltrare, senza perdere il filo dei messaggi.",
      "en": "An Italian-facing professional firm needs to sort appointment, follow-up and referral messages accurately.",
      "fr": "Un cabinet travaillant avec l'Italie souhaite organiser les rendez-vous, suivis et transferts.",
      "es": "Un despacho con clientes italianos necesita clasificar citas, consultas y derivaciones."
    },
    "objective": {
      "it": "Offrire una procedura applicabile, tre comunicazioni complete e un riepilogo di fine settimana.",
      "en": "Provide a repeatable workflow, three complete messages and a weekly handover.",
      "fr": "Fournir un processus, trois courriels complets et un bilan hebdomadaire.",
      "es": "Entregar proceso, tres correos completos y resumen semanal."
    },
    "inputs": {
      "it": "Cinque richieste di esempio, disponibilità ancora da confermare e una guida ai servizi autorizzati.",
      "en": "Five sample enquiries, unconfirmed availability and an approved service guide.",
      "fr": "Cinq demandes d'exemple, disponibilités en attente et consignes.",
      "es": "Cinco consultas de ejemplo, disponibilidad pendiente e instrucciones."
    },
    "workflow": [
      {
        "it": "Registrare canale, tema, responsabile e prossimo controllo.",
        "en": "Log channel, topic, owner and next review.",
        "fr": "Consigner canal, objet, responsable et suivi.",
        "es": "Registrar canal, tema, responsable y seguimiento."
      },
      {
        "it": "Controllare i dati nelle fonti concordate prima di rispondere.",
        "en": "Check authorised sources before replying.",
        "fr": "Vérifier les sources avant de répondre.",
        "es": "Verificar las fuentes antes de responder."
      },
      {
        "it": "Scrivere il testo completo e sottoporlo all'approvazione prevista.",
        "en": "Prepare full replies for the agreed approval.",
        "fr": "Rédiger les réponses intégrales pour validation.",
        "es": "Redactar las respuestas y someterlas a aprobación."
      },
      {
        "it": "Consegnare le attività aperte con scadenze di verifica, non promesse al cliente.",
        "en": "Handover open items with internal review dates, not unsupported promises.",
        "fr": "Transmettre les tâches ouvertes sans promettre de délais injustifiés.",
        "es": "Entregar tareas pendientes sin prometer plazos no confirmados."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Registro operativo della settimana",
          "en": "Weekly operational register",
          "fr": "Registre de suivi hebdomadaire",
          "es": "Registro semanal"
        },
        "language": "it",
        "content": "SETTIMANA DI GESTIONE EMAIL — MODELLO OPERATIVO\nLunedì, ore 09:00 — E-101 | richiesta spostamento incontro | referente: segreteria | priorità: ordinaria | verifica: disponibilità approvata | stato: IN CONTROLLO.\nLunedì, ore 11:15 — E-102 | chiarimento su materiale già richiesto | referente: responsabile servizio | priorità: ordinaria | verifica: versione aggiornata della scheda | stato: DA APPROVARE.\nMartedì, ore 08:45 — E-103 | richiesta di modifica ordine già acquisito | referente: back office | priorità: alta per scadenza comunicata | verifica: stato ordine e autorizzazione | stato: APERTO.\nMercoledì, ore 10:30 — E-104 | domanda su documento fiscale | referente: ufficio amministrativo del cliente | priorità: ordinaria | verifica: inoltro autorizzato | stato: DA INOLTRARE.\nGiovedì, ore 14:10 — E-105 | materiale per corso già prenotato | referente: segreteria corsi | priorità: ordinaria | verifica: ultimo file approvato | stato: BOZZA.\nCONTROLLO VENERDÌ: E-101 senza fascia confermata; E-102 in attesa del testo approvato; E-103 non modifica alcun ordine; E-104 da inoltrare; E-105 pronta per controllo del referente.\nREGOLA: una pratica non è CHIUSA soltanto perché è stata redatta una bozza. Gli invii esterni e le decisioni devono essere verificati.",
        "explanation": {
          "it": "Stati, responsabili e passaggi successivi sono riportati per esteso.",
          "en": "Full case states, owners and next actions.",
          "fr": "États, responsables et suites sont détaillés.",
          "es": "Estados, responsables y próximos pasos detallados."
        }
      },
      {
        "title": {
          "it": "Tre risposte email complete",
          "en": "Three complete Italian replies",
          "fr": "Trois réponses italiennes intégrales",
          "es": "Tres respuestas italianas completas"
        },
        "language": "it",
        "content": "EMAIL E-101 — SPOSTAMENTO APPUNTAMENTO\nOggetto: Re: richiesta di una nuova data\nBuongiorno,\ngrazie per averci avvisato. Abbiamo registrato la richiesta di modificare la data dell'incontro già previsto. Prima di proporle una nuova fascia oraria, dobbiamo verificare le disponibilità aggiornate del referente.\nAl momento l'appuntamento non è stato spostato. Le invieremo una proposta soltanto quando avremo conferma di una data compatibile con gli impegni già presenti in agenda.\nLa ringraziamo per la collaborazione.\nCordiali saluti,\nSegreteria organizzativa\nStato: bozza da approvare; nessun invio effettuato.\n\nEMAIL E-103 — MODIFICA ORDINE\nOggetto: Re: variazione richiesta per l'ordine\nBuongiorno,\nabbiamo preso nota della sua richiesta relativa all'ordine già registrato. Per verificare se la modifica sia ancora possibile, confronteremo i dati della pratica con lo stato di lavorazione e le indicazioni del reparto competente.\nNon abbiamo ancora apportato variazioni all'ordine. Le comunicheremo le alternative autorizzate, insieme alle eventuali condizioni applicabili, dopo aver ricevuto conferma.\nCordiali saluti,\nBack office clienti\nStato: bozza non inviata; istruzioni ancora da confermare.\n\nEMAIL E-105 — MATERIALI DI UN CORSO\nOggetto: Informazioni sui materiali del prossimo incontro\nBuongiorno,\ngrazie per la sua richiesta. Stiamo controllando con il responsabile del corso quale versione dei materiali possa essere condivisa con i partecipanti già iscritti.\nPer evitare che riceva documenti non aggiornati, provvederemo a inviare il riferimento corretto soltanto dopo la verifica. Non è necessaria una nuova iscrizione.\nCordiali saluti,\nSegreteria corsi\nStato: bozza; materiale da approvare.",
        "explanation": {
          "it": "Tre messaggi completi, ciascuno con un diverso limite di autorizzazione.",
          "en": "Three finished drafts with distinct approval boundaries.",
          "fr": "Trois courriels complets et leur état de validation.",
          "es": "Tres correos completos con límites de aprobación."
        }
      },
      {
        "title": {
          "it": "Weekly handover in English",
          "en": "Complete English handover",
          "fr": "Rapport de transmission en anglais",
          "es": "Informe completo en inglés"
        },
        "language": "en",
        "content": "SUBJECT: Weekly Italian inbox review — open items and approvals\n\nHello,\nPlease find below the operational summary of the five enquiries prepared as a portfolio work example. None of these drafts has been sent, and no customer records have been changed.\n\nAppointment request E-101: the proposed change has been recorded. A verified alternative slot is still required before any confirmation can be drafted for release.\nService information E-102: the response needs to be checked against the current approved service description. The latest version is still awaited from the service owner.\nExisting order E-103: the request has been classified as time-sensitive, but the order must remain unchanged until the responsible colleague confirms what is possible.\nDocument query E-104: this matter concerns an administrative document; the message should be referred to the authorised department. No accounting interpretation will be provided by the secretarial team.\nCourse materials E-105: the Italian response is ready for review. The attachment or access link must be approved before it is included.\n\nNEXT REVIEW\nPlease identify the person who can approve the outstanding appointment slot, current service sheet and course attachment. Once those items have been confirmed, the drafts can be updated and checked for correct recipients, attachments and tone.\n\nBest regards,\nVirtual assistant — operational support\n\nInternal note: This handover records the status of prepared documents only, not an executed client service.",
        "explanation": {
          "it": "Riepilogo completo per un responsabile internazionale, non un'etichetta generica.",
          "en": "Complete manager-facing handover in natural English.",
          "fr": "Transmission complète à un responsable international.",
          "es": "Informe completo para un responsable internacional."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Ogni messaggio e ogni documento conserva un chiaro stato di approvazione.",
        "en": "Every document has an explicit approval status.",
        "fr": "Chaque document présente son état de validation.",
        "es": "Cada documento identifica su estado de aprobación."
      },
      {
        "it": "Non vengono dichiarati risultati, invii o attività effettivamente svolte per clienti.",
        "en": "No actual client results, dispatches or completed engagements are claimed.",
        "fr": "Aucun résultat ni envoi effectué pour un client n'est revendiqué.",
        "es": "No se atribuyen encargos, envíos ni resultados de clientes reales."
      }
    ],
    "limits": {
      "it": "Supporto operativo, comunicazioni e documenti secondo istruzioni del committente; sono esclusi contabilità, emissione di fatture, telemarketing, acquisizione di contatti, reclutamento e decisioni commerciali non autorizzate.",
      "en": "Operational documentation and existing-customer communication under agreed instructions; excludes accounting, invoicing, cold outreach, contact prospecting, recruitment and unapproved commercial decisions.",
      "fr": "Documentation et communication avec les clients existants sur consignes ; sans comptabilité, facturation, démarchage, prospection, recrutement ni décisions commerciales non autorisées.",
      "es": "Documentación y comunicación con clientes actuales según instrucciones; sin contabilidad, facturación, telemarketing, captación, reclutamiento ni decisiones comerciales no autorizadas."
    },
    "handoff": {
      "it": "Registro settimanale, tre risposte in italiano e relazione in inglese.",
      "en": "Weekly log, three complete Italian replies and English management report.",
      "fr": "Registre hebdomadaire, trois réponses italiennes et rapport anglais.",
      "es": "Registro semanal, tres correos italianos e informe inglés."
    }
  },
  {
    "id": "italy-partner-fr-es-schedule-followup",
    "category": "backoffice",
    "title": {
      "it": "Agenda internazionale: corrispondenza completa IT, FR ed ES",
      "en": "Cross-border diary management: Italian, French and Spanish follow-up",
      "fr": "Agenda internationale : coordination en italien, français et espagnol",
      "es": "Agenda internacional: coordinación en italiano, francés y español"
    },
    "service": {
      "it": "Agenda, appuntamenti e segreteria multilingue",
      "en": "Diary management and multilingual secretarial support",
      "fr": "Agenda et secrétariat multilingue",
      "es": "Agenda y secretaría multilingüe"
    },
    "scenario": {
      "it": "Un professionista coordina con interlocutori già conosciuti una riunione operativa tra Italia, Francia e Spagna; occorrono inviti, ordine del giorno e seguito.",
      "en": "A professional coordinates an existing cross-border working meeting with colleagues in Italy, France and Spain.",
      "fr": "Un professionnel organise une réunion déjà prévue entre des partenaires italiens, français et espagnols.",
      "es": "Un profesional organiza una reunión ya prevista entre colaboradores de Italia, Francia y España."
    },
    "objective": {
      "it": "Mostrare l'intera filiera: email nelle lingue dei destinatari, agenda e memo delle decisioni aperte.",
      "en": "Show full invitations, meeting plan and handover across three languages.",
      "fr": "Présenter les invitations, l'ordre du jour et le suivi.",
      "es": "Mostrar invitaciones completas, agenda y seguimiento."
    },
    "inputs": {
      "it": "Tre recapiti di esempio, fascia proposta con fuso orario esplicito e tre punti concordati.",
      "en": "Sample contacts, proposed time slot with time zones, and three agenda items.",
      "fr": "Coordonnées d'exemple, créneau proposé et ordre du jour.",
      "es": "Contactos de ejemplo, horario propuesto y agenda."
    },
    "workflow": [
      {
        "it": "Separare proposta di data da convocazione confermata.",
        "en": "Separate a proposed slot from a confirmed invitation.",
        "fr": "Distinguer proposition et confirmation.",
        "es": "Distinguir propuesta y confirmación."
      },
      {
        "it": "Preparare comunicazioni naturali in italiano, francese e spagnolo.",
        "en": "Write idiomatic messages in three languages.",
        "fr": "Rédiger trois messages idiomatiques.",
        "es": "Redactar mensajes naturales en tres lenguas."
      },
      {
        "it": "Registrare esiti e compiti solo dopo l'approvazione dei referenti.",
        "en": "Record actions only after approval.",
        "fr": "Consigner les actions après validation.",
        "es": "Registrar tareas después de aprobación."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Invito completo in italiano",
          "en": "Italian invitation",
          "fr": "Invitation italienne intégrale",
          "es": "Invitación italiana completa"
        },
        "language": "it",
        "content": "Oggetto: Proposta di riunione di coordinamento — 26 novembre\nBuongiorno,\nnell'ambito delle attività già concordate, proponiamo un incontro di coordinamento per giovedì 26 novembre, dalle 11:00 alle 11:50 (ora di Roma, Parigi e Madrid).\nL'obiettivo è verificare lo stato dei materiali condivisi, individuare eventuali informazioni mancanti e definire le attività successive. Vi chiediamo di confermare la disponibilità prima dell'inserimento definitivo in agenda; il collegamento sarà trasmesso soltanto dopo l'approvazione del referente.\nL'ordine del giorno proposto comprende: 1) aggiornamento sulle attività in corso; 2) revisione della documentazione; 3) responsabilità e punti da confermare.\nResto a disposizione per raccogliere eventuali modifiche alla scaletta.\nCordiali saluti,\nSegreteria organizzativa\nStato: invito proposto, non confermato né inviato.",
        "explanation": {
          "it": "Un invito completo distingue proposta e appuntamento confermato.",
          "en": "Complete invitation with clear proposed status.",
          "fr": "Invitation complète sans fausse confirmation.",
          "es": "Invitación completa sin confirmar citas no aprobadas."
        }
      },
      {
        "title": {
          "it": "Invitation complète en français",
          "en": "French full invitation",
          "fr": "Invitation française intégrale",
          "es": "Invitación francesa completa"
        },
        "language": "fr",
        "content": "Objet : Proposition de réunion de coordination — 26 novembre\nBonjour,\nDans le cadre de nos échanges déjà engagés, nous vous proposons une réunion de coordination le jeudi 26 novembre, de 11 h à 11 h 50, heure de Rome, Paris et Madrid.\nCette réunion aurait pour objectif de faire le point sur les documents partagés, de repérer les informations encore manquantes et de préparer les prochaines étapes. Le créneau reste une proposition : merci de confirmer votre disponibilité avant l'envoi de l'invitation définitive. Le lien de visioconférence sera communiqué une fois validé.\nOrdre du jour proposé : 1. Avancement des activités. 2. Vérification des dernières versions des documents. 3. Responsables, décisions en attente et actions suivantes.\nN'hésitez pas à nous signaler les points que vous souhaiteriez ajouter.\nBien cordialement,\nSecrétariat\nStatut : projet de message non envoyé.",
        "explanation": {
          "it": "Francese professionale e naturale, con orario e conferme.",
          "en": "Natural French correspondence and careful time-zone wording.",
          "fr": "Formulation naturelle et horaires explicites.",
          "es": "Francés profesional con horario explícito."
        }
      },
      {
        "title": {
          "it": "Convocatoria en español",
          "en": "Complete Spanish invitation",
          "fr": "Convocation espagnole complète",
          "es": "Invitación completa en español"
        },
        "language": "es",
        "content": "Asunto: Propuesta de reunión de coordinación — 26 de noviembre\nBuenos días:\nEn relación con las actividades que ya hemos acordado, les proponemos celebrar una reunión de coordinación el jueves 26 de noviembre, de 11:00 a 11:50, hora de Roma, París y Madrid.\nLa finalidad sería revisar el estado de los documentos compartidos, señalar la información que todavía falta y preparar las siguientes tareas. Les agradeceríamos que confirmaran su disponibilidad antes de cerrar la cita en el calendario. El enlace de acceso se facilitará cuando haya sido comprobado y autorizado.\nProponemos el siguiente orden del día: 1. Situación de las tareas en curso. 2. Revisión de documentos y versiones. 3. Responsables, decisiones pendientes y próximos pasos.\nQuedamos a su disposición para incorporar los asuntos que consideren necesarios.\nUn cordial saludo,\nSecretaría de coordinación\nEstado: borrador sin enviar; horario pendiente de confirmación.",
        "explanation": {
          "it": "Email completa in spagnolo destinata a contatti professionali esistenti.",
          "en": "Complete Spanish meeting proposal for existing contacts.",
          "fr": "Message espagnol complet pour des interlocuteurs existants.",
          "es": "Correo completo en español sin confirmar una reunión no aprobada."
        }
      },
      {
        "title": {
          "it": "Agenda e promemoria di consegna",
          "en": "Meeting agenda and complete follow-up",
          "fr": "Ordre du jour et compte rendu préparatoire",
          "es": "Agenda y resumen de entrega"
        },
        "language": "en",
        "content": "MEETING COORDINATION DOSSIER — PROPOSED, NOT BOOKED\nReference: COORD-26 | Date proposed: 26 November | Time: 11:00–11:50 Rome/Paris/Madrid.\nPreparation check: confirm participants, verify the shared document version, check the videoconferencing link, confirm time zones and obtain approval to send invitations.\nAGENDA\n11:00–11:10 — Confirm current status and agenda.\n11:10–11:25 — Check outstanding documents against the approved register.\n11:25–11:40 — Review unresolved decisions; assign a proposed owner.\n11:40–11:50 — Agree which items require written confirmation after the meeting.\nACTION LOG TEMPLATE\nA-01 Document list | Proposed owner: project coordinator | Status: awaiting confirmation.\nA-02 Italian client communication | Proposed owner: correspondence support | Status: drafting.\nA-03 Next meeting | Owner: participants | Status: not scheduled.\nFOLLOW-UP DRAFT\nSubject: Coordination meeting — action list for confirmation\nHello,\nThank you for reviewing the proposed work plan. Attached is the draft action list for your consideration. Please verify the responsible person and timing for each point before the list is treated as approved. The document register and communication draft remain open pending your comments. We will circulate the updated version once the required confirmations have been received.\nKind regards,\nSecretarial support\nStatus: draft only. No meeting has taken place in this work example.",
        "explanation": {
          "it": "Il dossier contiene la scaletta, gli stati e il messaggio completo di follow-up.",
          "en": "Includes agenda, action log and an entire follow-up message.",
          "fr": "Comprend l'ordre du jour, le registre et le message de suivi.",
          "es": "Incluye agenda, registro y correo completo de seguimiento."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Ogni messaggio e ogni documento conserva un chiaro stato di approvazione.",
        "en": "Every document has an explicit approval status.",
        "fr": "Chaque document présente son état de validation.",
        "es": "Cada documento identifica su estado de aprobación."
      },
      {
        "it": "Non vengono dichiarati risultati, invii o attività effettivamente svolte per clienti.",
        "en": "No actual client results, dispatches or completed engagements are claimed.",
        "fr": "Aucun résultat ni envoi effectué pour un client n'est revendiqué.",
        "es": "No se atribuyen encargos, envíos ni resultados de clientes reales."
      }
    ],
    "limits": {
      "it": "Supporto operativo, comunicazioni e documenti secondo istruzioni del committente; sono esclusi contabilità, emissione di fatture, telemarketing, acquisizione di contatti, reclutamento e decisioni commerciali non autorizzate.",
      "en": "Operational documentation and existing-customer communication under agreed instructions; excludes accounting, invoicing, cold outreach, contact prospecting, recruitment and unapproved commercial decisions.",
      "fr": "Documentation et communication avec les clients existants sur consignes ; sans comptabilité, facturation, démarchage, prospection, recrutement ni décisions commerciales non autorisées.",
      "es": "Documentación y comunicación con clientes actuales según instrucciones; sin contabilidad, facturación, telemarketing, captación, reclutamiento ni decisiones comerciales no autorizadas."
    },
    "handoff": {
      "it": "Tre inviti completi IT/FR/ES, agenda e follow-up EN.",
      "en": "Three complete invitations and English-language coordination handover.",
      "fr": "Trois invitations IT/FR/ES et compte rendu anglais.",
      "es": "Tres invitaciones IT/FR/ES y seguimiento inglés."
    }
  },
  {
    "id": "italian-market-existing-customer-documents",
    "category": "research",
    "title": {
      "it": "Ricerca informativa: confronto documentale per il mercato italiano",
      "en": "Italy-focused desk research: complete evidence and decision dossier",
      "fr": "Recherche pour le marché italien : dossier complet de vérification",
      "es": "Investigación para Italia: dossier documental completo"
    },
    "service": {
      "it": "Ricerche informative, verifica fonti e sintesi",
      "en": "Desk research, evidence checks and briefing",
      "fr": "Recherche documentaire et synthèse",
      "es": "Investigación documental y síntesis"
    },
    "scenario": {
      "it": "Un’attività europea deve decidere come spiegare ai propri clienti italiani già esistenti una procedura di assistenza, confrontando tre documenti interni non coerenti.",
      "en": "A European business must reconcile three conflicting internal instructions before updating its Italian help page.",
      "fr": "Une entreprise européenne doit vérifier trois versions de consignes avant de publier sa page d'aide italienne.",
      "es": "Una empresa europea debe contrastar tres instrucciones antes de actualizar su página de ayuda italiana."
    },
    "objective": {
      "it": "Produrre matrice delle discrepanze, FAQ italiana pronta per revisione e memo in inglese per il responsabile.",
      "en": "Prepare an evidence matrix, complete Italian FAQ and English decision memo.",
      "fr": "Livrer un tableau de contradictions, une FAQ italienne et une note anglaise.",
      "es": "Entregar matriz de diferencias, FAQ italiana e informe inglés."
    },
    "inputs": {
      "it": "Documento A v1: risposta entro due giorni; documento B v2: nessuna tempistica; nota C: tempi da confermare. Nessuna fonte è approvata come definitiva.",
      "en": "Document A v1 says two days, B v2 gives no response deadline, and note C marks timing as unresolved.",
      "fr": "La version A indique deux jours, B aucun délai et C une validation manquante.",
      "es": "A indica dos días, B no establece plazo y C requiere confirmación."
    },
    "workflow": [
      {
        "it": "Inventariare versione, autore, origine e stato.",
        "en": "Record source, version, owner and status.",
        "fr": "Consigner versions, auteurs et statut.",
        "es": "Registrar fuentes, versiones y estado."
      },
      {
        "it": "Non scegliere automaticamente il documento più recente.",
        "en": "Do not assume that the newest version is authorised.",
        "fr": "Ne pas assimiler nouveauté et validation.",
        "es": "No dar por aprobada la versión más reciente."
      },
      {
        "it": "Scrivere le risposte usando solo dati confermati.",
        "en": "Draft only from confirmed facts.",
        "fr": "Rédiger selon les faits validés.",
        "es": "Redactar según datos confirmados."
      },
      {
        "it": "Preparare un memo con decisioni da richiedere prima della pubblicazione.",
        "en": "Escalate decisions before publication.",
        "fr": "Transmettre les décisions à valider.",
        "es": "Solicitar aprobación antes de publicar."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Matrice di confronto delle fonti",
          "en": "Evidence comparison matrix",
          "fr": "Tableau de comparaison des sources",
          "es": "Matriz de comparación de fuentes"
        },
        "language": "it",
        "content": "MATRICE DOCUMENTALE — ESEMPIO DI VERIFICA\nA-v1 | Titolo: procedura assistenza | Termine indicato: due giorni lavorativi | Autore: referente operativo | Stato: precedente; non dimostrata l'approvazione attuale.\nB-v2 | Titolo: aggiornamento pagina di aiuto | Termine indicato: non specificato | Autore: revisore editoriale | Stato: bozza più recente, non approvata.\nC-01 | Titolo: nota del responsabile | Termine indicato: da confermare | Autore: responsabile servizio | Stato: richiesta di verifica aperta.\nDISCREPANZA D-01 — Tempi della prima risposta: A-v1 contiene una promessa, B-v2 non la riprende, C-01 la segnala come ancora da definire.\nRISCHIO — Pubblicare un tempo non approvato creerebbe aspettative che non trovano sostegno nelle istruzioni disponibili.\nDECISIONE RICHIESTA — Confermare se il servizio prevede una finestra temporale effettiva e a quali richieste si applica.\nPROPOSTA — Nel frattempo utilizzare una formulazione priva di scadenze garantite.\nSTATO DEL DOCUMENTO — Matrice preparata per la revisione del responsabile, non una ricerca di mercato e non un controllo normativo.",
        "explanation": {
          "it": "Ogni conclusione rinvia alle fonti del caso e segnala le informazioni mancanti.",
          "en": "Each finding maps to its sample source and flags gaps.",
          "fr": "Chaque constat renvoie à la source et à sa validation.",
          "es": "Cada conclusión indica la fuente y su estado."
        }
      },
      {
        "title": {
          "it": "FAQ italiana completa",
          "en": "Complete Italian customer FAQ",
          "fr": "FAQ complète en italien",
          "es": "Preguntas frecuentes completas en italiano"
        },
        "language": "it",
        "content": "PAGINA DI ASSISTENZA — TESTO ITALIANO DA APPROVARE\nTitolo: Come gestiamo le richieste di assistenza\nIntroduzione: Per aiutarci a comprendere la sua richiesta, ci scriva utilizzando il canale indicato nella documentazione del servizio. Descriva il problema e inserisca soltanto le informazioni necessarie a identificare la pratica.\nDOMANDA 1 — Come posso sapere se la mia richiesta è stata ricevuta?\nRISPOSTA — Se il servizio utilizzato prevede un messaggio di conferma, lo riceverà attraverso il canale indicato. Qualora non compaia, verifichi la cartella dei messaggi indesiderati e utilizzi il contatto ufficiale per segnalare il problema. Le modalità effettive devono essere convalidate dal responsabile prima della pubblicazione.\nDOMANDA 2 — Quando riceverò una risposta?\nRISPOSTA — Le tempistiche dipendono dalla tipologia di richiesta e dal procedimento previsto per il servizio. Questa pagina non indica un termine garantito finché il responsabile non ne avrà approvato uno.\nDOMANDA 3 — Posso allegare documenti?\nRISPOSTA — Invii esclusivamente i documenti richiesti per la sua pratica, attraverso il canale autorizzato. Non trasmetta password, codici di accesso o informazioni di pagamento non espressamente necessarie.\nDOMANDA 4 — Posso chiedere la modifica di un ordine già registrato?\nRISPOSTA — Può comunicare la richiesta al servizio clienti. La possibilità di intervenire dipende dallo stato dell'ordine e dalle condizioni applicabili. Nessuna variazione viene confermata finché non è verificata dal referente competente.\nDOMANDA 5 — Chi gestisce le questioni amministrative?\nRISPOSTA — Le richieste relative a fatture, pagamenti o documenti fiscali vengono inoltrate ai referenti autorizzati. Il personale di supporto può raccogliere la segnalazione, ma non modificare documenti o fornire pareri fiscali.\nINVITO ALL'AZIONE — Per informazioni relative a una pratica esistente, utilizzi il contatto di assistenza indicato nella sua documentazione.\nSTATO: testo editoriale completo, subordinato all'approvazione delle caratteristiche effettive del servizio.",
        "explanation": {
          "it": "Cinque risposte formulate integralmente senza aggiungere garanzie inesistenti.",
          "en": "Five complete FAQ answers without unsupported service promises.",
          "fr": "Cinq réponses complètes sans garantie injustifiée.",
          "es": "Cinco respuestas completas sin garantías no verificadas."
        }
      },
      {
        "title": {
          "it": "Decision memo — English",
          "en": "English management memo",
          "fr": "Note de décision en anglais",
          "es": "Informe de decisión en inglés"
        },
        "language": "en",
        "content": "SUBJECT: Italian customer help page — source discrepancies requiring sign-off\nHello,\nI have compared three versions of the internal support guidance for the proposed Italian help page. The documents do not currently support a consistent response-time statement: the previous procedure specifies two working days, the newer editorial draft omits the timeframe, and the owner note explicitly requests confirmation.\nTo avoid publishing an unauthorised promise, I have prepared a complete Italian FAQ that describes the support process without making a guaranteed time commitment. The draft also separates ordinary customer enquiries from requests involving invoices or payments, which should be handled by the authorised team.\nDECISIONS REQUESTED\n1. Confirm whether a formal acknowledgement is sent to every incoming request.\n2. Confirm whether any response-time target is contractually or operationally approved.\n3. Approve the customer-support contact channel and the procedure for attachments.\n4. Verify whether the order-change and escalation wording matches current operations.\nNEXT STEPS\nOnce the responsible people confirm these points, I can incorporate the authorised wording into the Italian document and conduct a final check of terminology, headings, link destinations and consistency.\nNo live website has been changed and no customer has been contacted as part of this work sample.\nKind regards,\nVirtual assistance — research and documentation",
        "explanation": {
          "it": "Rapporto completo in inglese per una decisione documentata.",
          "en": "Complete English handover with specific decisions.",
          "fr": "Note complète en anglais, avec décisions à confirmer.",
          "es": "Informe completo en inglés con decisiones pendientes."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Ogni messaggio e ogni documento conserva un chiaro stato di approvazione.",
        "en": "Every document has an explicit approval status.",
        "fr": "Chaque document présente son état de validation.",
        "es": "Cada documento identifica su estado de aprobación."
      },
      {
        "it": "Non vengono dichiarati risultati, invii o attività effettivamente svolte per clienti.",
        "en": "No actual client results, dispatches or completed engagements are claimed.",
        "fr": "Aucun résultat ni envoi effectué pour un client n'est revendiqué.",
        "es": "No se atribuyen encargos, envíos ni resultados de clientes reales."
      }
    ],
    "limits": {
      "it": "Supporto operativo, comunicazioni e documenti secondo istruzioni del committente; sono esclusi contabilità, emissione di fatture, telemarketing, acquisizione di contatti, reclutamento e decisioni commerciali non autorizzate.",
      "en": "Operational documentation and existing-customer communication under agreed instructions; excludes accounting, invoicing, cold outreach, contact prospecting, recruitment and unapproved commercial decisions.",
      "fr": "Documentation et communication avec les clients existants sur consignes ; sans comptabilité, facturation, démarchage, prospection, recrutement ni décisions commerciales non autorisées.",
      "es": "Documentación y comunicación con clientes actuales según instrucciones; sin contabilidad, facturación, telemarketing, captación, reclutamiento ni decisiones comerciales no autorizadas."
    },
    "handoff": {
      "it": "Matrice fonti, FAQ italiana completa e memo inglese con quattro richieste di validazione.",
      "en": "Evidence register, complete Italian FAQ and English decision memo.",
      "fr": "Tableau des sources, FAQ italienne et note anglaise.",
      "es": "Matriz de fuentes, FAQ italiana e informe inglés."
    }
  },
  {
    "id": "italian-products-catalogue-editorial-quality",
    "category": "writing",
    "title": {
      "it": "Contenuti di catalogo: revisione integrale e glossario IT/EN",
      "en": "Catalogue editing: full Italian copy and English quality memo",
      "fr": "Catalogue : révision italienne complète et contrôle anglais",
      "es": "Catálogo: revisión italiana completa e informe inglés"
    },
    "service": {
      "it": "Revisione editoriale, cataloghi, contenuti web",
      "en": "Editorial proofreading, catalogues and web copy",
      "fr": "Révision, catalogues et contenus web",
      "es": "Corrección editorial, catálogos y contenidos web"
    },
    "scenario": {
      "it": "Un’attività prepara per l'Italia tre schede di accessori da scrivania e una pagina informativa; i dati tecnici devono restare verificabili.",
      "en": "A small business needs consistent Italian product copy with specifications kept separate from promotional claims.",
      "fr": "Une entreprise prépare des fiches de produits en italien, avec caractéristiques à vérifier.",
      "es": "Una empresa prepara fichas en italiano manteniendo verificables las especificaciones."
    },
    "objective": {
      "it": "Produrre schede complete, un registro delle revisioni e la nota di consegna in inglese.",
      "en": "Produce full product entries, an editing log and English handover.",
      "fr": "Fournir fiches intégrales, tableau des corrections et note anglaise.",
      "es": "Entregar fichas completas, registro de cambios e informe inglés."
    },
    "inputs": {
      "it": "Tre schede base con materiali e misure di esempio, senza certificazioni o prestazioni dichiarate.",
      "en": "Three source entries with sample dimensions and no certified performance claims.",
      "fr": "Trois fiches avec mesures d'exemple et sans certifications annoncées.",
      "es": "Tres fichas con medidas de ejemplo, sin certificaciones."
    },
    "workflow": [
      {
        "it": "Verificare che ogni claim corrisponda al materiale autorizzato.",
        "en": "Check all claims against the brief.",
        "fr": "Vérifier les affirmations.",
        "es": "Verificar todas las afirmaciones."
      },
      {
        "it": "Mantenere terminologia uniforme e descrizioni leggibili.",
        "en": "Keep language and terminology consistent.",
        "fr": "Harmoniser terminologie et style.",
        "es": "Unificar términos y estilo."
      },
      {
        "it": "Separare note interne e testi destinati al pubblico.",
        "en": "Separate internal notes from publishable text.",
        "fr": "Distinguer notes internes et textes publics.",
        "es": "Separar notas internas de textos públicos."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Tre schede prodotto integrali",
          "en": "Three complete product descriptions",
          "fr": "Trois fiches produit complètes",
          "es": "Tres fichas de producto completas"
        },
        "language": "it",
        "content": "CATALOGO ACCESSORI DA SCRIVANIA — TESTI ITALIANI\n\nSCHEDA 01 — PORTADOCUMENTI VERTICALE\nTitolo: Portadocumenti verticale a tre scomparti\nDescrizione: Un accessorio da scrivania per tenere separati documenti, cartelline e materiali da consultare durante la giornata. I tre scomparti consentono di suddividere i contenuti per attività oppure per stato di lavorazione, mantenendo la documentazione facilmente individuabile.\nCaratteristiche indicate nel brief: tre vani; struttura rigida; finitura opaca; utilizzo da appoggio.\nInformazioni da confermare prima della pubblicazione: dimensioni, materiale effettivo, colori disponibili, istruzioni di pulizia e codice prodotto.\nSuggerimento d'uso: organizzare in sequenza documenti da leggere, in lavorazione e pronti per l'archiviazione.\nInvito all'azione: richiedi le caratteristiche aggiornate dell'articolo prima dell'ordine.\n\nSCHEDA 02 — SUPPORTO PER BLOCCO NOTE\nTitolo: Supporto da scrivania per blocco note\nDescrizione: Il supporto offre un posto riconoscibile al blocco note utilizzato per promemoria e appunti operativi. Il profilo essenziale si integra in postazioni di lavoro domestiche e professionali senza richiedere una modifica dell'arredo esistente.\nCaratteristiche indicate nel brief: base da appoggio; piano inclinato; alloggiamento per un blocco.\nInformazioni da confermare: compatibilità con formati di carta, materiale e misura del piano di appoggio.\nSuggerimento d'uso: tenere a portata di mano la lista delle attività senza mescolarla alle cartelle operative.\nInvito all'azione: consulta la scheda tecnica aggiornata prima dell'acquisto.\n\nSCHEDA 03 — ORGANIZZATORE COMPATTO\nTitolo: Organizzatore compatto per accessori d'ufficio\nDescrizione: Un contenitore con sezioni dedicate agli oggetti utilizzati più spesso durante il lavoro, come penne, fermagli e piccoli accessori. La divisione interna facilita l'individuazione del materiale e aiuta a mantenere ordinata la superficie di lavoro.\nCaratteristiche indicate nel brief: struttura da appoggio; vani separati; profilo compatto.\nInformazioni da confermare: numero esatto di vani, dimensioni, finiture e composizione.\nSuggerimento d'uso: assegnare un vano agli oggetti quotidiani e uno ai materiali da conservare.\nInvito all'azione: richiedi dettagli su dimensioni e varianti disponibili.\n\nNOTA EDITORIALE: tutte le descrizioni sono testi di portfolio; prima di una pubblicazione commerciale occorre completare le specifiche mediante documentazione tecnica approvata. Nessuna prestazione è stata certificata.",
        "explanation": {
          "it": "Tre descrizioni complete, con limiti verificabili e inviti all'azione prudenti.",
          "en": "Three full Italian product descriptions, each with publishable and pending fields.",
          "fr": "Trois textes italiens complets et points techniques à vérifier.",
          "es": "Tres fichas completas en italiano con comprobaciones."
        }
      },
      {
        "title": {
          "it": "Registro di revisione",
          "en": "Full editorial change log",
          "fr": "Registre de révision",
          "es": "Registro de revisión"
        },
        "language": "fr",
        "content": "REGISTRE DE RÉVISION — CONTENUS DESTINÉS À L'ITALIE\n01. TON — Remplacer « l'accessorio perfetto per ogni scrivania » par une description concrète de l'utilisation. L'adjectif « perfetto » exprimerait une supériorité impossible à vérifier.\n02. DONNÉES — Ne pas ajouter de dimensions sans fiche technique approuvée. Conserver un champ explicite pour les caractéristiques à confirmer.\n03. COHÉRENCE — Employer « scomparto » pour chaque compartiment et « vano » lorsque la fiche officielle utilise ce terme ; ne pas alterner les mots sans raison.\n04. FORMATS — Vérifier la compatibilité avec les formats A4 ou A5 avant d'utiliser ces références dans la description.\n05. MATÉRIAUX — Éviter des expressions comme « écologicamente sostenibile » lorsque aucune preuve n'a été fournie.\n06. APPELS À L'ACTION — Préférer « richiedi le caratteristiche aggiornate » à « acquista subito » tant que les informations de commande ne sont pas validées.\n07. DESCRIPTION — Présenter le besoin, la fonction et les caractéristiques disponibles sans transformer une préférence personnelle en qualité objective.\n08. REMISE — Soumettre les trois descriptions au responsable produit, demander la documentation manquante, puis effectuer une dernière lecture de la version destinée au public.\nSTATUT : dossier de révision préparé, publication et validation en attente.",
        "explanation": {
          "it": "Registro editoriale in francese con otto controlli concreti.",
          "en": "French-language eight-point editorial audit.",
          "fr": "Huit points de contrôle éditorial détaillés.",
          "es": "Auditoría editorial completa en francés."
        }
      },
      {
        "title": {
          "it": "Editorial handover to the client",
          "en": "English handover for catalogue copy",
          "fr": "Transmission anglaise au responsable",
          "es": "Informe editorial completo en inglés"
        },
        "language": "en",
        "content": "SUBJECT: Italian catalogue copy — completed drafts and approval items\nHello,\nThe Italian descriptions for the vertical document holder, notepad support and compact desk organiser have been drafted in full. The copy is deliberately practical and focused on the intended use of each item. I have avoided unsupported claims about durability, environmental impact, guaranteed performance or universal compatibility.\nBefore the descriptions are published, please confirm the technical specifications for each product: materials, dimensions, precise product codes, available variants and any mandatory product information. Those details have been clearly separated from the proposed wording rather than inserted as assumptions.\nI have also prepared an editorial change log explaining the choices made in the Italian copy, including terminology, consistency, calls to action and the difference between confirmed specifications and details still needed.\nSUGGESTED APPROVAL ORDER\nFirst, the product owner confirms the technical information. Next, the Italian text is updated against the approved source. Finally, the responsible person reviews the customer-facing wording before release.\nNo catalogue has been published and no product specifications have been verified independently for this demonstration.\nKind regards,\nEditorial and language support",
        "explanation": {
          "it": "Consegna completa in inglese che documenta approvazioni e limiti.",
          "en": "Complete English editorial handover with sign-off process.",
          "fr": "Rapport anglais avec étapes de validation.",
          "es": "Informe inglés con validaciones."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Ogni messaggio e ogni documento conserva un chiaro stato di approvazione.",
        "en": "Every document has an explicit approval status.",
        "fr": "Chaque document présente son état de validation.",
        "es": "Cada documento identifica su estado de aprobación."
      },
      {
        "it": "Non vengono dichiarati risultati, invii o attività effettivamente svolte per clienti.",
        "en": "No actual client results, dispatches or completed engagements are claimed.",
        "fr": "Aucun résultat ni envoi effectué pour un client n'est revendiqué.",
        "es": "No se atribuyen encargos, envíos ni resultados de clientes reales."
      }
    ],
    "limits": {
      "it": "Supporto operativo, comunicazioni e documenti secondo istruzioni del committente; sono esclusi contabilità, emissione di fatture, telemarketing, acquisizione di contatti, reclutamento e decisioni commerciali non autorizzate.",
      "en": "Operational documentation and existing-customer communication under agreed instructions; excludes accounting, invoicing, cold outreach, contact prospecting, recruitment and unapproved commercial decisions.",
      "fr": "Documentation et communication avec les clients existants sur consignes ; sans comptabilité, facturation, démarchage, prospection, recrutement ni décisions commerciales non autorisées.",
      "es": "Documentación y comunicación con clientes actuales según instrucciones; sin contabilidad, facturación, telemarketing, captación, reclutamiento ni decisiones comerciales no autorizadas."
    },
    "handoff": {
      "it": "Tre schede italiane complete, registro di revisione francese e relazione inglese.",
      "en": "Three complete Italian product pages, French change log and English handover.",
      "fr": "Trois fiches italiennes, registre français et note anglaise.",
      "es": "Tres fichas italianas, registro francés e informe inglés."
    }
  }
];
