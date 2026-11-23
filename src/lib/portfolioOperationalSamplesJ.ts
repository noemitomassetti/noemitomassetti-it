import type { OperationalDeepCase } from "./portfolioOperationalTypes";

/** Complete, original working samples for professional operational support. */
export const OPERATIONAL_SAMPLES_J: OperationalDeepCase[] = [
  {
    "id": "diary-conflict-multilingual-rebooking",
    "category": "backoffice",
    "title": {
      "it": "Agenda: conflitti, fusi orari e conferme multilingui",
      "en": "Calendar clashes: multilingual rebooking and clear approvals",
      "fr": "Agenda : conflits, fuseaux horaires et confirmations",
      "es": "Agenda: conflictos, zonas horarias y confirmaciones"
    },
    "service": {
      "it": "Segreteria e coordinamento appuntamenti",
      "en": "Diary management and appointment coordination",
      "fr": "Gestion d'agenda et coordination des rendez-vous",
      "es": "Gestión de agenda y coordinación de citas"
    },
    "scenario": {
      "it": "Due clienti già in carico richiedono la stessa fascia oraria. Un referente lavora da Parigi, l'altro in Italia. È necessario proporre alternative senza prenotare automaticamente né presumere disponibilità.",
      "en": "Two established customers request the same appointment slot. A coordinator working across Italy and France needs careful alternatives and confirmation.",
      "fr": "Deux clients existants demandent le même créneau entre l'Italie et la France ; la confirmation doit rester explicite.",
      "es": "Dos clientes actuales piden la misma franja horaria; hay que coordinar Italia y Francia sin confirmar una cita por anticipado."
    },
    "objective": {
      "it": "Produrre la matrice delle disponibilità, due risposte complete in lingue diverse, un riepilogo al responsabile e una procedura di chiusura.",
      "en": "Prepare a conflict matrix, two full-language replies, a manager handover and a closure procedure.",
      "fr": "Préparer tableau des disponibilités, réponses et compte rendu.",
      "es": "Preparar matriz de disponibilidad, respuestas completas y seguimiento."
    },
    "inputs": {
      "it": "Calendario approvato con due fasce utilizzabili, richieste A-52 e B-53, istruzioni di conferma e fuso orario di riferimento Europe/Rome.",
      "en": "Approved sample availability, two incoming appointment requests and Europe/Rome as the reference time zone.",
      "fr": "Disponibilités approuvées, deux demandes et fuseau Europe/Rome.",
      "es": "Disponibilidad aprobada, dos solicitudes y zona Europe/Rome."
    },
    "workflow": [
      {
        "it": "Individuare il conflitto e bloccare conferme premature.",
        "en": "Detect the overlap and avoid premature confirmation.",
        "fr": "Identifier le conflit sans confirmer.",
        "es": "Detectar el conflicto sin confirmar."
      },
      {
        "it": "Confrontare il fuso orario della data prevista e gli intervalli possibili.",
        "en": "Check time zone and alternative slots.",
        "fr": "Vérifier fuseau horaire et solutions.",
        "es": "Comprobar zona horaria y alternativas."
      },
      {
        "it": "Richiedere esplicitamente la scelta e aggiornare il registro soltanto dopo l'approvazione.",
        "en": "Request explicit agreement before updating the calendar.",
        "fr": "Recueillir un accord avant modification.",
        "es": "Pedir confirmación antes de actualizar."
      },
      {
        "it": "Consegnare al referente il quadro delle fasce ancora libere.",
        "en": "Hand over remaining free slots to the owner.",
        "fr": "Transmettre les créneaux restants.",
        "es": "Entregar las franjas disponibles."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Matrice agenda e autorizzazioni",
          "en": "Calendar clash register",
          "fr": "Registre des conflits",
          "es": "Registro de conflictos"
        },
        "language": "it",
        "content": "CONTROLLO AGENDA | CASI A-52 E B-53\nFuso di riferimento: Europe/Rome. Data proposta: 26 novembre 2026.\nSlot A: 10:00–10:30 | Richiesta A-52 (già ricevuta) | Stato: PROPOSTA, non confermata.\nSlot B: 10:00–10:30 | Richiesta B-53 (ricevuta successivamente) | Stato: CONFLITTO.\nSlot C: 11:00–11:30 | Disponibilità da calendario approvato | Stato: PROPONIBILE, non riservata.\nSlot D: 14:00–14:30 | Disponibilità da calendario approvato | Stato: PROPONIBILE, non riservata.\nRegola: una richiesta non blocca definitivamente una fascia; il referente deve indicare se una prenotazione provvisoria è ammessa e quanto dura.\nVerifiche: data, fuso, partecipanti, eventuale collegamento video, necessità di materiali, conferma della durata.\nStato operativo: nessun invito inviato; nessuna fascia spostata; due bozze di risposta pronte e da approvare.\nHandover: il responsabile decide l'ordine con cui offrire i due slot alternativi e conferma prima dell'invio.",
        "explanation": {
          "it": "Il registro distingue richieste, proposte e conferme.",
          "en": "The register clearly separates requests, proposals and confirmations.",
          "fr": "Le registre distingue demandes et confirmations.",
          "es": "El registro separa solicitudes y confirmaciones."
        }
      },
      {
        "title": {
          "it": "Email di proposta in italiano",
          "en": "Full Italian rebooking email",
          "fr": "Courriel italien intégral",
          "es": "Correo completo en italiano"
        },
        "language": "it",
        "content": "Oggetto: Proposta di nuova fascia oraria per il nostro incontro\nBuongiorno,\ngrazie per il messaggio relativo all'incontro del 26 novembre.\nStiamo verificando le richieste già pervenute per la fascia delle 10:00, in modo da evitare sovrapposizioni nel calendario. Al momento non possiamo confermarle quell'orario.\nPossiamo sottoporle come alternative le 11:00 oppure le 14:00, entrambe con durata indicativa di trenta minuti e riferite all'ora italiana. Le due possibilità sono ancora da convalidare: non sono prenotazioni definitive.\nSe una delle proposte è compatibile con i suoi impegni, la invitiamo a comunicarcelo; dopo la verifica conclusiva le invieremo la conferma scritta e, se previsto, il collegamento approvato per l'incontro.\nCordiali saluti,\nSegreteria organizzativa\nStato della comunicazione: bozza preparata, non inviata.",
        "explanation": {
          "it": "Messaggio completo con alternative esplicite e senza conferma implicita.",
          "en": "Full response with conditional alternative slots.",
          "fr": "Réponse complète avec créneaux à valider.",
          "es": "Respuesta completa con alternativas pendientes."
        }
      },
      {
        "title": {
          "it": "Message de coordination en français",
          "en": "Full French coordination email",
          "fr": "Courriel de coordination en français",
          "es": "Correo de coordinación en francés"
        },
        "language": "fr",
        "content": "Objet : Proposition de nouvel horaire pour notre rendez-vous\nBonjour,\nMerci pour votre message concernant le rendez-vous prévu le 26 novembre.\nNous vérifions actuellement les demandes portant sur le créneau de 10 h afin d'éviter tout chevauchement. Nous ne sommes donc pas encore en mesure de confirmer cette heure.\nDeux autres plages pourraient convenir : de 11 h à 11 h 30 ou de 14 h à 14 h 30, heure de Rome et de Paris à cette date. Ces créneaux restent proposés sous réserve de validation ; aucune réservation définitive n'a été effectuée.\nPourriez-vous nous indiquer l'option qui vous conviendrait le mieux ? Après vérification du calendrier et confirmation du responsable, nous vous adresserons une invitation précisant l'heure retenue et les modalités de connexion.\nJe vous remercie de votre compréhension.\nBien cordialement,\nSecrétariat\nStatut : brouillon préparé, non envoyé.",
        "explanation": {
          "it": "Il francese usa convenzioni di appuntamento naturali.",
          "en": "Natural French appointment language with explicit next step.",
          "fr": "Texte naturel et complet pour un destinataire francophone.",
          "es": "Mensaje francés completo con siguiente paso claro."
        }
      },
      {
        "title": {
          "it": "Handover and end-of-week check",
          "en": "English diary handover",
          "fr": "Note de suivi en anglais",
          "es": "Informe de agenda en inglés"
        },
        "language": "en",
        "content": "CALENDAR HANDOVER — A-52 / B-53\nPrepared for the responsible diary owner.\nTwo established customers have requested the same time on 26 November. Neither request is represented as a confirmed booking. The owner-approved diary currently suggests two other possible slots: 11:00–11:30 and 14:00–14:30, both Europe/Rome.\nDecision required: confirm which customer should first receive the available alternatives and whether tentative holds are permitted under the existing appointment policy.\nDrafts ready: one complete Italian response and one complete French response. The French message explicitly notes that Rome and Paris share the same local time on the chosen date. This must be rechecked if the appointment date changes.\nBefore sending: verify the correct recipient, latest calendar state, proposed slot duration, any participation link, and the authorised sender. Do not send an untested meeting link or disclose another customer's details.\nWhen an option has been accepted: record the reply, obtain final approval, send the calendar invitation through the authorised account, and close the original request.\nWeekly review: check overlapping invitations, open approvals, time-zone notation and outstanding follow-ups. This portfolio record documents a proposed workflow, not a booking made on a live calendar.",
        "explanation": {
          "it": "La consegna in inglese chiarisce come chiudere la pratica.",
          "en": "Complete English follow-up and closure checklist.",
          "fr": "Note anglaise complète pour la passation.",
          "es": "Informe inglés completo con cierre."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Nessuna prenotazione è dichiarata effettuata.",
        "en": "No calendar changes are claimed.",
        "fr": "Aucune réservation n'est présentée comme effectuée.",
        "es": "No se afirma que se hayan creado reservas."
      },
      {
        "it": "Fusi, durate e partecipanti sono controllati prima degli inviti.",
        "en": "Time zones, duration and recipients are verified.",
        "fr": "Fuseaux, durée et destinataires vérifiés.",
        "es": "Zonas, duración y participantes verificados."
      }
    ],
    "limits": {
      "it": "Segreteria, back office e comunicazione secondo istruzioni autorizzate. Esclusi contabilità, fatturazione, telemarketing, ricerca di nuovi clienti, reclutamento e decisioni commerciali non approvate.",
      "en": "Secretarial, back-office and communication work under authorised instructions; no accounting, invoicing, prospecting, cold calling, recruitment or unilateral business decisions.",
      "fr": "Secrétariat, back-office et communication sur consignes approuvées ; sans comptabilité, facturation, prospection, démarchage, recrutement ni décisions commerciales autonomes.",
      "es": "Secretaría, back office y comunicación según instrucciones aprobadas; sin contabilidad, facturación, captación, llamadas en frío, selección de participantes ni decisiones comerciales autónomas."
    },
    "handoff": {
      "it": "Registro, email italiana, email francese e rapporto inglese.",
      "en": "Diary register, full Italian and French emails, English handover.",
      "fr": "Registre, courriels italien/français et synthèse anglaise.",
      "es": "Registro, correos italiano y francés e informe inglés."
    }
  },
  {
    "id": "written-customer-complaint-four-language-response",
    "category": "backoffice",
    "title": {
      "it": "Reclami scritti: presa in carico, risposta e inoltro",
      "en": "Written complaints: acknowledgement and safe escalation",
      "fr": "Réclamations écrites : prise en charge et transmission",
      "es": "Reclamaciones escritas: respuesta y derivación"
    },
    "service": {
      "it": "Customer care scritto e postvendita",
      "en": "Written customer care for existing customers",
      "fr": "Relation client écrite après-vente",
      "es": "Atención escrita al cliente y posventa"
    },
    "scenario": {
      "it": "Un cliente segnala che l'articolo ricevuto presenta una finitura diversa dalla descrizione. Serve un percorso di assistenza che non prometta rimborsi, resi o sostituzioni senza approvazione.",
      "en": "An existing customer reports a mismatch between the received item and its description. The response requires careful ownership and no unapproved return promise.",
      "fr": "Un client signale un écart entre l'article reçu et sa description ; il faut éviter toute décision de remboursement sans validation.",
      "es": "Un cliente notifica una diferencia entre el producto recibido y su descripción; la resolución requiere revisión."
    },
    "objective": {
      "it": "Redigere il messaggio di presa in carico in italiano, un modello di aggiornamento in spagnolo, la procedura di escalation e il rapporto finale.",
      "en": "Write an Italian acknowledgement, Spanish status update, French escalation procedure and English case handover.",
      "fr": "Rédiger des réponses complètes et un protocole de transmission.",
      "es": "Redactar respuestas completas y un protocolo de derivación."
    },
    "inputs": {
      "it": "Segnalazione CL-208, riferimento ordine disponibile, foto da richiedere solo se necessaria, condizioni applicabili da controllare.",
      "en": "Existing case CL-208, order reference and a policy requiring authorised product review.",
      "fr": "Dossier CL-208 et procédure de contrôle du produit.",
      "es": "Expediente CL-208 y procedimiento de revisión."
    },
    "workflow": [
      {
        "it": "Registrare il problema con parole neutrali e verificare dati necessari.",
        "en": "Log the concern objectively and check necessary information.",
        "fr": "Enregistrer le signalement avec neutralité.",
        "es": "Registrar el caso con neutralidad."
      },
      {
        "it": "Preparare una risposta cortese, senza assumere responsabilità non accertate.",
        "en": "Acknowledge politely without guessing liability.",
        "fr": "Répondre avec courtoisie sans présumer la responsabilité.",
        "es": "Responder cortésmente sin atribuir responsabilidad."
      },
      {
        "it": "Inoltrare al referente con documento e domanda precisa.",
        "en": "Escalate with the relevant documents and a clear decision request.",
        "fr": "Transmettre les éléments utiles au responsable.",
        "es": "Derivar con documentos y petición precisa."
      },
      {
        "it": "Aggiornare il cliente solo sulla base di decisioni approvate.",
        "en": "Update the customer only on confirmed next steps.",
        "fr": "Informer le client après validation.",
        "es": "Informar al cliente tras la aprobación."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Email italiana di presa in carico",
          "en": "Italian acknowledgement email",
          "fr": "Courriel italien de réception",
          "es": "Correo italiano de recepción"
        },
        "language": "it",
        "content": "Oggetto: Re: segnalazione relativa all'ordine CL-208\nBuongiorno,\ngrazie per averci scritto e per averci descritto il problema riscontrato con l'articolo ricevuto.\nAbbiamo registrato la segnalazione relativa all'ordine CL-208 e la sottoporremo al reparto competente, così da verificare la descrizione applicabile al prodotto e le condizioni del suo acquisto.\nPrima di indicarle una soluzione, dobbiamo completare questa verifica. Se sarà utile inviare ulteriori informazioni o una fotografia dell'articolo, le comunicheremo quali elementi sono necessari e attraverso quale canale trasmetterli.\nComprendiamo il disagio e desideriamo fornirle indicazioni accurate. Al momento non possiamo confermare una sostituzione, un rimborso o specifiche tempistiche, perché non è stata ancora effettuata la valutazione prevista.\nLa ringraziamo per la collaborazione.\nCordiali saluti,\nAssistenza clienti\nStato: bozza da approvare, non inviata.",
        "explanation": {
          "it": "Un messaggio completo e non difensivo.",
          "en": "Complete, empathetic and fact-based acknowledgement.",
          "fr": "Message intégral, courtois et précis.",
          "es": "Mensaje completo, atento y prudente."
        }
      },
      {
        "title": {
          "it": "Actualización completa en español",
          "en": "Complete Spanish status update",
          "fr": "Suivi en espagnol",
          "es": "Actualización completa en español"
        },
        "language": "es",
        "content": "Asunto: Seguimiento de su consulta sobre el pedido CL-208\nBuenos días:\nGracias por su paciencia mientras revisamos la información relativa al artículo recibido.\nSu consulta está registrada y se ha preparado para su revisión por el equipo responsable. La documentación disponible debe contrastarse con las características del producto y las condiciones aplicables a su pedido. Todavía no disponemos de una decisión confirmada sobre las posibles soluciones.\nPara evitar indicaciones contradictorias, no le pediremos que devuelva el artículo ni que realice ningún trámite adicional hasta que el responsable nos facilite las instrucciones autorizadas.\nEn cuanto podamos comunicarle un siguiente paso concreto y verificado, le facilitaremos la información correspondiente. Si necesitamos alguna prueba adicional, le indicaremos qué dato es necesario y cómo compartirlo de forma adecuada.\nGracias de nuevo por ponerse en contacto.\nUn cordial saludo,\nAtención al cliente\nEstado: respuesta preparada para ilustrar el seguimiento; no enviada.",
        "explanation": {
          "it": "Spagnolo naturale con informazioni verificabili.",
          "en": "A complete Spanish follow-up that avoids unsupported outcomes.",
          "fr": "Suivi espagnol naturel, sans promesse non validée.",
          "es": "Respuesta completa y profesional en español."
        }
      },
      {
        "title": {
          "it": "Procédure de transmission au responsable",
          "en": "French escalation SOP",
          "fr": "Procédure française de transmission",
          "es": "Procedimiento francés de derivación"
        },
        "language": "fr",
        "content": "PROCÉDURE DE TRAITEMENT — RÉCLAMATION CLIENT CL-208\nObjectif : transmettre une réclamation écrite à la personne compétente sans modifier les conditions de vente ni promettre une issue.\nÉtape 1. Vérifier la référence de commande et la description du problème. Ne demander que les données nécessaires pour identifier le dossier.\nÉtape 2. Accuser réception avec une formulation professionnelle. Ne pas reconnaître une responsabilité juridique ou une garantie non vérifiée.\nÉtape 3. Comparer les informations disponibles : commande, description de l'article et procédure de retour applicable au moment de l'achat.\nÉtape 4. Identifier les faits confirmés et les questions ouvertes. Si une photographie est nécessaire, vérifier que la demande et le canal prévu sont appropriés.\nÉtape 5. Préparer une note au responsable, avec le problème signalé, les vérifications réalisées et la décision attendue.\nÉtape 6. Ne pas annoncer de remboursement, d'échange, de délai de livraison ou de frais tant que la décision n'a pas été validée.\nÉtape 7. Communiquer au client la réponse approuvée dans la langue utilisée pour les échanges, puis consigner le résultat.\nÉtape 8. Vérifier que l'enregistrement du dossier ne conserve pas de données personnelles inutiles.\nStatut de ce dossier : procédure rédigée ; aucune opération commerciale effectuée.",
        "explanation": {
          "it": "Procedura francese completa con limiti e verifiche.",
          "en": "Full French operating procedure and approval boundaries.",
          "fr": "Procédure complète, directement exploitable.",
          "es": "Procedimiento completo en francés con controles."
        }
      },
      {
        "title": {
          "it": "Manager handover and case decision sheet",
          "en": "English internal case report",
          "fr": "Rapport au responsable en anglais",
          "es": "Informe interno inglés"
        },
        "language": "en",
        "content": "CUSTOMER SUPPORT HANDOVER — CASE CL-208\nCustomer issue: an established buyer states that an item's finish differs from the description associated with the order.\nInformation available: customer complaint and order reference. Information still required: verified item description, relevant return policy, any approved photographs, and an authorised resolution.\nActions prepared: Italian acknowledgement; Spanish follow-up template; French process note for escalation. None has been issued to a customer.\nDecision request to the responsible team:\n1. Confirm that the order record and product information belong to the same item.\n2. Identify whether further evidence is necessary, and if so specify a secure submission channel.\n3. Confirm the applicable process for discussing a return, replacement or other resolution.\n4. Approve the exact wording, responsible team and next customer update.\nWhat has not happened: no product was returned, no refund was approved, no replacement ordered, and no service deadline promised.\nClosure criteria: written authorisation, verified customer-facing reply, updated case record and completion of any agreed follow-up.\nEditorial check: avoid placing blame on the customer, making unsupported commitments or copying a generic response that fails to address the reported issue.",
        "explanation": {
          "it": "Il rapporto elenca fatti, approvazioni e condizioni di chiusura.",
          "en": "Detailed owner report covering verified facts, approvals and closure.",
          "fr": "Rapport détaillé sur les validations et la clôture.",
          "es": "Informe completo sobre hechos, decisiones y cierre."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Le quattro lingue sono usate in materiali completi, non nelle sole intestazioni.",
        "en": "All four languages appear in full deliverables.",
        "fr": "Quatre langues dans des documents intégraux.",
        "es": "Cuatro idiomas en documentos completos."
      },
      {
        "it": "Risoluzioni commerciali sempre rimesse al responsabile.",
        "en": "Commercial remedies require owner approval.",
        "fr": "Les solutions commerciales requièrent validation.",
        "es": "Las soluciones comerciales necesitan aprobación."
      }
    ],
    "limits": {
      "it": "Segreteria, back office e comunicazione secondo istruzioni autorizzate. Esclusi contabilità, fatturazione, telemarketing, ricerca di nuovi clienti, reclutamento e decisioni commerciali non approvate.",
      "en": "Secretarial, back-office and communication work under authorised instructions; no accounting, invoicing, prospecting, cold calling, recruitment or unilateral business decisions.",
      "fr": "Secrétariat, back-office et communication sur consignes approuvées ; sans comptabilité, facturation, prospection, démarchage, recrutement ni décisions commerciales autonomes.",
      "es": "Secretaría, back office y comunicación según instrucciones aprobadas; sin contabilidad, facturación, captación, llamadas en frío, selección de participantes ni decisiones comerciales autónomas."
    },
    "handoff": {
      "it": "Email italiana, aggiornamento spagnolo, procedura francese e rapporto inglese.",
      "en": "Italian acknowledgement, Spanish update, French SOP and English report.",
      "fr": "Courriel italien, suivi espagnol, procédure française et rapport anglais.",
      "es": "Correo italiano, seguimiento español, procedimiento francés e informe inglés."
    }
  },
  {
    "id": "course-participant-support-complete-pack",
    "category": "backoffice",
    "title": {
      "it": "Corso online: segreteria e comunicazioni ai partecipanti",
      "en": "Online course: complete attendee support and communications",
      "fr": "Formation en ligne : secrétariat et messages aux inscrits",
      "es": "Curso en línea: secretaría y comunicaciones a participantes"
    },
    "service": {
      "it": "Segreteria corsi e supporto documentale",
      "en": "Online course administration support",
      "fr": "Secrétariat des formations",
      "es": "Secretaría de cursos y apoyo documental"
    },
    "scenario": {
      "it": "Un corso riservato a persone già iscritte necessita di promemoria, gestione dei materiali e una procedura per problemi di accesso. Nessuna attività di ricerca o reclutamento dei partecipanti.",
      "en": "An existing cohort needs organised reminders, materials and access support, without participant recruitment.",
      "fr": "Un cours destiné à des inscrits existants nécessite messages, documents et assistance d'accès.",
      "es": "Un curso para personas ya inscritas requiere avisos, documentos y apoyo de acceso."
    },
    "objective": {
      "it": "Predisporre due comunicazioni integrali in italiano, una guida di supporto in francese, FAQ in spagnolo e riepilogo per l'organizzatrice in inglese.",
      "en": "Prepare two full Italian emails, a French help procedure, Spanish FAQs and an English organiser handover.",
      "fr": "Préparer des messages complets, une procédure et des FAQ multilingues.",
      "es": "Preparar correos completos, procedimiento y preguntas frecuentes multilingües."
    },
    "inputs": {
      "it": "Calendario del modulo, elenco partecipanti autorizzato, materiali approvati e istruzioni tecniche non ancora diffuse.",
      "en": "Approved course timetable, access list, prepared materials and distribution instructions.",
      "fr": "Programme, liste d'inscrits et documents à valider.",
      "es": "Programa, lista de inscritos y documentos aprobados."
    },
    "workflow": [
      {
        "it": "Verificare versione del programma e materiale approvato.",
        "en": "Check timetable version and approved materials.",
        "fr": "Vérifier versions et documents approuvés.",
        "es": "Verificar versiones y materiales aprobados."
      },
      {
        "it": "Preparare comunicazioni per i soli iscritti e ottenere autorizzazione all'invio.",
        "en": "Draft communications for registered attendees only.",
        "fr": "Rédiger uniquement pour les inscrits.",
        "es": "Redactar solo para participantes inscritos."
      },
      {
        "it": "Registrare problemi di accesso, risposte e referenti.",
        "en": "Log access issues and assigned owners.",
        "fr": "Suivre les problèmes d'accès.",
        "es": "Registrar incidencias de acceso."
      },
      {
        "it": "Consegnare un quadro dei punti rimasti aperti all'organizzatrice.",
        "en": "Handover outstanding queries to the organiser.",
        "fr": "Transmettre les questions ouvertes.",
        "es": "Entregar asuntos pendientes a la organización."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Email di benvenuto completa",
          "en": "Complete Italian welcome message",
          "fr": "Courriel d'accueil intégral",
          "es": "Correo italiano de bienvenida"
        },
        "language": "it",
        "content": "Oggetto: Benvenuto al corso — informazioni organizzative\nBuongiorno,\ngrazie per aver confermato la partecipazione al percorso formativo.\nIn vista del primo incontro, le trasmetteremo il programma definitivo e le istruzioni di collegamento attraverso il canale indicato al momento dell'iscrizione, una volta che l'organizzazione avrà validato le informazioni tecniche.\nLe suggeriamo di conservare i messaggi di conferma ricevuti e di verificare di poter accedere alla casella email utilizzata per le comunicazioni del corso. Non è necessario trasmettere password o altri dati riservati.\nDurante il percorso potrà rivolgere alla segreteria le domande relative a calendario, materiali e accesso. Le richieste sul contenuto delle lezioni saranno indirizzate al docente o al referente didattico.\nEventuali modifiche al programma saranno comunicate soltanto dopo l'approvazione dell'organizzazione; una bozza non sostituisce l'informazione ufficiale.\nLa ringraziamo e le auguriamo un'esperienza formativa piacevole.\nCordiali saluti,\nSegreteria del corso\nStato: email completa in bozza, non inviata.",
        "explanation": {
          "it": "Messaggio iniziale utilizzabile come modello, senza riferimenti tecnici non verificati.",
          "en": "Complete welcome email without unconfirmed technical details.",
          "fr": "Message d'accueil intégral, sans détail non confirmé.",
          "es": "Mensaje de bienvenida completo y prudente."
        }
      },
      {
        "title": {
          "it": "Promemoria ai partecipanti",
          "en": "Full Italian lesson reminder",
          "fr": "Rappel intégral aux participants",
          "es": "Recordatorio completo para participantes"
        },
        "language": "it",
        "content": "Oggetto: Promemoria organizzativo — prossimo incontro\nBuongiorno,\nle scriviamo per ricordarle il prossimo appuntamento del percorso formativo al quale risulta già iscritta o iscritto.\nPrima dell'invio del promemoria definitivo, l'organizzazione completerà il controllo dell'orario, del fuso di riferimento e delle istruzioni di collegamento. Il messaggio finale conterrà soltanto le informazioni approvate.\nPer prepararsi può consultare i materiali già condivisi e tenere a disposizione gli appunti delle lezioni precedenti. Se non riesce ad aprire un documento, risponda a questo messaggio specificando il nome del materiale e il tipo di difficoltà riscontrata, senza comunicare credenziali personali.\nLe domande organizzative saranno prese in carico dalla segreteria; quelle relative ai contenuti didattici saranno indirizzate al docente.\nGrazie per l'attenzione e per la collaborazione.\nCordiali saluti,\nSegreteria organizzativa\nNota interna: sostituire i riferimenti generici con programma e link effettivamente approvati, prima di qualsiasi invio.",
        "explanation": {
          "it": "Promemoria completo che distingue organizzazione e docenza.",
          "en": "Full reminder separates administration from teaching.",
          "fr": "Rappel complet, distinct de l'enseignement.",
          "es": "Recordatorio completo y delimitado."
        }
      },
      {
        "title": {
          "it": "Procédure d'assistance aux inscrits",
          "en": "French attendee-support SOP",
          "fr": "Procédure française d'assistance",
          "es": "Procedimiento francés de apoyo"
        },
        "language": "fr",
        "content": "PROCÉDURE DE SECRÉTARIAT — FORMATION EN LIGNE\nChamp d'application : assistance organisationnelle aux personnes déjà inscrites. Aucun recrutement ni démarchage.\n1. Vérifier que la demande est liée à une inscription existante, sans réclamer d'informations personnelles superflues.\n2. Identifier le sujet : calendrier, invitation, accès, document, attestation éventuelle, contenu pédagogique.\n3. Utiliser uniquement le programme validé par l'organisateur. Si deux versions se contredisent, suspendre la confirmation et demander la bonne version.\n4. Répondre aux questions pratiques dans les limites des consignes approuvées. Ne jamais demander de mot de passe ni transmettre un lien d'accès non vérifié.\n5. Orienter toute question de cours vers l'enseignant et les demandes de paiement ou de facture vers la personne autorisée.\n6. Enregistrer les demandes ouvertes avec leur date, responsable, état et prochaine action. Ne pas noter des données sans rapport avec l'assistance.\n7. Avant un envoi collectif, contrôler la liste des destinataires, l'objet, les pièces jointes, la version et la confidentialité. Préserver les adresses des participants.\n8. Après l'envoi autorisé, traiter les éventuels retours d'erreur et préparer un point de suivi pour l'organisateur.\n9. À la clôture du module, vérifier que les supports promis ont été transmis et que les demandes restées ouvertes ont un responsable.\nStatut : exemple professionnel de procédure, sans message envoyé ni intervention effectuée sur une plateforme réelle.",
        "explanation": {
          "it": "Procedura completa per gestire richieste ricorrenti.",
          "en": "Full repeatable French-language procedure.",
          "fr": "Procédure française opérationnelle et exhaustive.",
          "es": "Procedimiento francés completo y operativo."
        }
      },
      {
        "title": {
          "it": "Preguntas frecuentes en español",
          "en": "Complete Spanish attendee FAQ",
          "fr": "FAQ espagnole complète",
          "es": "Preguntas frecuentes completas"
        },
        "language": "es",
        "content": "PREGUNTAS FRECUENTES — ASISTENCIA ORGANIZATIVA DEL CURSO\n¿Dónde puedo consultar el horario de las sesiones?\nRecibirás el programa aprobado a través del canal de comunicación establecido en tu inscripción. Si tienes una versión anterior, utiliza únicamente la información confirmada por la organización.\n\n¿Qué hago si no recibo el enlace de acceso?\nComprueba primero el correo utilizado para inscribirte y las carpetas de mensajes no deseados. Si no encuentras las instrucciones, escribe a la secretaría indicando la sesión correspondiente. No compartas contraseñas ni códigos personales.\n\n¿Puedo pedir de nuevo un material que no se abre?\nSí. Indica el título del documento y describe el problema. La secretaría comprobará si existe una versión aprobada accesible y te indicará cómo obtenerla.\n\n¿A quién debo dirigir las preguntas sobre los contenidos?\nLas dudas sobre el programa, los ejercicios o las explicaciones deben trasladarse al docente o responsable académico. La secretaría atiende cuestiones organizativas.\n\n¿Se entregará una grabación o un certificado?\nSolo si la organización lo ha confirmado expresamente. No se deben dar por incluidos materiales ni certificados que no figuren en las condiciones aprobadas.\n\n¿Puedo modificar mis datos de contacto?\nLa secretaría te indicará el canal autorizado para solicitar una modificación, tras comprobar los requisitos necesarios para proteger tus datos.\n\nEstado editorial: FAQ preparada para revisar con la organización antes de su difusión.",
        "explanation": {
          "it": "FAQ integrale in spagnolo, non un elenco di titoli.",
          "en": "Six fully written Spanish FAQs.",
          "fr": "Six réponses complètes en espagnol.",
          "es": "Seis preguntas con respuestas íntegras."
        }
      },
      {
        "title": {
          "it": "Organiser's handover report",
          "en": "English course support handover",
          "fr": "Rapport anglais à l'organisateur",
          "es": "Informe inglés para la organización"
        },
        "language": "en",
        "content": "ONLINE COURSE — ADMINISTRATIVE HANDOVER\nAudience: already-registered attendees. Purpose: coordinate approved messages, materials and support.\nDocuments prepared: Italian welcome email, Italian session reminder, French support procedure and Spanish frequently asked questions. All are draft materials for the present work sample.\nChecks to complete before use:\n- Obtain the approved timetable and reference time zone; do not choose between conflicting schedule drafts without sign-off.\n- Verify the authorised way to distribute access details and confirm that any meeting link works.\n- Confirm whether supplementary handouts, recordings or completion certificates actually form part of the course.\n- Review every mailing list to avoid showing participant addresses to other recipients.\n- Specify the teacher or course leader who will receive questions on course content.\n- Identify the responsible person for payments, invoices, refunds and changes to enrolment conditions.\nIssues register template: case ID; incoming date; type of difficulty; document or session; owner; verified facts; draft response; approval; next review date; closure.\nWhat is outside the assignment: recruiting participants, sales contact gathering, teaching, invoicing or guaranteeing technical access.\nSign-off requested: approval of the communications and responsibility assignments before any correspondence is issued.",
        "explanation": {
          "it": "Report finale completo in inglese con verifiche prima della diffusione.",
          "en": "Full English course administration report.",
          "fr": "Rapport complet avec vérifications avant diffusion.",
          "es": "Informe inglés completo con controles previos."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Supporto riservato alle persone già iscritte.",
        "en": "Only already-enrolled attendees are in scope.",
        "fr": "Uniquement les personnes déjà inscrites.",
        "es": "Solo participantes ya inscritos."
      },
      {
        "it": "Nessun link o attestato è presentato come già autorizzato.",
        "en": "No unauthorised links or certificates are promised.",
        "fr": "Aucun accès ni certificat non validé.",
        "es": "No se prometen enlaces ni certificados sin autorización."
      }
    ],
    "limits": {
      "it": "Segreteria, back office e comunicazione secondo istruzioni autorizzate. Esclusi contabilità, fatturazione, telemarketing, ricerca di nuovi clienti, reclutamento e decisioni commerciali non approvate.",
      "en": "Secretarial, back-office and communication work under authorised instructions; no accounting, invoicing, prospecting, cold calling, recruitment or unilateral business decisions.",
      "fr": "Secrétariat, back-office et communication sur consignes approuvées ; sans comptabilité, facturation, prospection, démarchage, recrutement ni décisions commerciales autonomes.",
      "es": "Secretaría, back office y comunicación según instrucciones aprobadas; sin contabilidad, facturación, captación, llamadas en frío, selección de participantes ni decisiones comerciales autónomas."
    },
    "handoff": {
      "it": "Due email IT, procedura FR, FAQ ES e rapporto EN, tutti integrali.",
      "en": "Two Italian emails, a French procedure, Spanish FAQ and English report.",
      "fr": "Deux courriels italiens, procédure française, FAQ espagnole et rapport anglais.",
      "es": "Dos correos italianos, procedimiento francés, FAQ española e informe inglés."
    }
  }
];
