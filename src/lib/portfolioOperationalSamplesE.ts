import type { OperationalDeepCase } from "./portfolioOperationalTypes";

/** Original, independently authored service demonstrations. Not commissioned client work. */
export const OPERATIONAL_SAMPLES_E: OperationalDeepCase[] = [
  {
    "id": "email-inbox-italy-routing",
    "category": "backoffice",
    "title": {
      "it": "Email professionali: classificazione, risposte e registro di follow-up",
      "en": "Professional inbox: triage, replies and follow-up log",
      "fr": "Messagerie professionnelle : tri, réponses et suivi",
      "es": "Correo profesional: clasificación, respuestas y seguimiento"
    },
    "service": {
      "it": "Segreteria email e gestione delle comunicazioni",
      "en": "Email secretarial support and written correspondence",
      "fr": "Secrétariat et gestion des courriels",
      "es": "Secretaría y gestión del correo"
    },
    "scenario": {
      "it": "Un consulente che lavora con clienti italiani riceve richieste in tre lingue e desidera mantenere un unico registro delle risposte approvate, senza delegare decisioni commerciali.",
      "en": "A consultant serving clients in Italy needs consistent triage for enquiries in several languages, without delegating commercial decisions.",
      "fr": "Un cabinet intervenant en Italie reçoit des courriels dans plusieurs langues et souhaite un suivi cohérent sans déléguer les décisions commerciales.",
      "es": "Un consultor que trabaja con Italia recibe mensajes en varios idiomas y necesita un registro organizado sin delegar decisiones comerciales."
    },
    "objective": {
      "it": "Progettare una procedura concreta per una casella condivisa e produrre risposte complete nelle lingue utili al cliente.",
      "en": "Create a usable shared-inbox process and full message drafts in the languages customers use.",
      "fr": "Créer une procédure utilisable et des courriels rédigés entièrement.",
      "es": "Crear un procedimiento operativo y respuestas completas en los idiomas necesarios."
    },
    "inputs": {
      "it": "Tre richieste di prova: conferma ricezione di documenti, spostamento appuntamento, richiesta di condizioni da approvare; casella e nominativi non corrispondono a clienti reali.",
      "en": "Three original example enquiries about document receipt, a changed appointment and commercial terms requiring approval.",
      "fr": "Trois messages d'exemple sur la réception de documents, un rendez-vous et des conditions à faire valider.",
      "es": "Tres consultas de ejemplo sobre documentos, una cita y condiciones que requieren autorización."
    },
    "workflow": [
      {
        "it": "Definire categorie e autorizzazioni prima di aprire la casella condivisa.",
        "en": "Define inbox categories and permissions before accessing messages.",
        "fr": "Définir les catégories et les autorisations avant de consulter la boîte.",
        "es": "Definir categorías y permisos antes de acceder al buzón."
      },
      {
        "it": "Distinguere comunicazioni da elaborare, richieste da approvare e messaggi riservati.",
        "en": "Separate routine requests, approval-needed messages and restricted correspondence.",
        "fr": "Distinguer les demandes courantes, à valider et confidentielles.",
        "es": "Distinguir solicitudes rutinarias, pendientes de aprobación y confidenciales."
      },
      {
        "it": "Preparare risposte complete, associare un responsabile e segnare la prossima verifica.",
        "en": "Draft complete replies, assign an owner and log the next check.",
        "fr": "Rédiger les réponses, désigner un responsable et fixer une vérification.",
        "es": "Redactar respuestas, asignar responsable y fecha de seguimiento."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Registro operativo della casella",
          "en": "Inbox working register",
          "fr": "Registre de la messagerie",
          "es": "Registro operativo del correo"
        },
        "language": "it",
        "content": "REGISTRO CASELLA CONDIVISA — PROCEDURA DI LAVORO\nCampi: ID pratica | lingua | categoria | data ricezione | priorità | responsabile | bozza | approvazione | prossima verifica.\nE-201 | IT | Ricezione documenti | Giorno 1 | Normale | Segreteria | Pronta | Conferma ricezione da verificare | Giorno 2.\nE-202 | EN | Appuntamento con referente italiano | Giorno 1 | Normale | Referente calendario | Pronta | Fascia oraria non ancora autorizzata | Giorno 2.\nE-203 | FR | Richiesta su condizioni commerciali | Giorno 2 | Da verificare | Responsabile commerciale | Risposta di cortesia pronta | Prezzo e condizioni non confermati | Giorno 3.\n\nREGOLE DI LAVORAZIONE\n1. La ricezione del messaggio non coincide con la presa in carico della richiesta.\n2. Segnare un messaggio come «risolto» solo quando l'azione richiesta è conclusa o la competenza è stata trasferita con conferma.\n3. Per documenti e appuntamenti verificare i riferimenti prima di comunicare conferme.\n4. Le modifiche a prezzi, offerte e condizioni vengono demandate al responsabile autorizzato.\n5. Nessun invio senza approvazione quando lo richiedono le istruzioni del cliente.\n\nCONSEGNA: registro aggiornabile, tre bozze complete, promemoria sulle verifiche aperte. Nessun messaggio è stato realmente inviato.",
        "explanation": {
          "it": "Il registro distingue stato del messaggio, autorizzazione e prossimo controllo.",
          "en": "The register distinguishes message status, approval and next action.",
          "fr": "Le registre sépare traitement, validation et prochaine action.",
          "es": "El registro distingue estado, autorización y siguiente paso."
        }
      },
      {
        "title": {
          "it": "Risposta in italiano: documenti ricevuti",
          "en": "Italian reply: document receipt",
          "fr": "Réponse en italien : documents reçus",
          "es": "Respuesta en italiano: documentos recibidos"
        },
        "language": "it",
        "content": "Oggetto: Documentazione relativa alla pratica E-201\n\nBuongiorno,\n\ngrazie per averci inviato la documentazione relativa alla pratica indicata.\n\nAbbiamo preso in carico il suo messaggio. Prima di confermarle che il materiale è completo, verificheremo la presenza degli allegati e la corrispondenza con l'elenco previsto per questa attività.\n\nQualora fosse necessario integrare la documentazione, le scriveremo specificando gli elementi mancanti. Per evitare invii duplicati, le chiediamo di attendere il nostro aggiornamento prima di trasmettere nuovamente i file.\n\nResto a disposizione per le informazioni di carattere organizzativo.\n\nCordiali saluti,\nSegreteria organizzativa\n\nNOTA INTERNA — Non dichiarare «documentazione completa» senza verifica. La presente è una bozza da approvare.",
        "explanation": {
          "it": "La risposta conferma solo ciò che risulta dal messaggio e distingue ricezione da verifica di completezza.",
          "en": "The wording distinguishes acknowledgement from confirmation that the documents are complete.",
          "fr": "Le message distingue l'accusé de réception du contrôle de complétude.",
          "es": "El texto distingue la recepción de la comprobación de que la documentación esté completa."
        }
      },
      {
        "title": {
          "it": "Email in inglese: richiesta di cambio appuntamento",
          "en": "English email: appointment rescheduling",
          "fr": "Courriel en anglais : report de rendez-vous",
          "es": "Correo en inglés: cambio de cita"
        },
        "language": "en",
        "content": "Subject: Re: Request to reschedule your meeting\n\nDear Ms Taylor,\n\nThank you for letting us know that you need to rearrange your meeting with our Italy-based colleague.\n\nI have noted your request and asked the colleague responsible for the calendar to confirm the next available times. As the new appointment has not yet been approved, I do not want to suggest a slot that may no longer be available.\n\nWe will write again with the options once they have been checked. Any invitation will specify the time in Rome and the relevant time zone so that everyone has the same information.\n\nIf you have particular days you cannot attend, please reply to this email and we will include them in the scheduling request.\n\nKind regards,\nClient Support Desk\n\nINTERNAL HANDOVER — Await authorised availability; check daylight-saving differences before sending an invitation. Draft only, not sent.",
        "explanation": {
          "it": "Un testo inglese completo, con tono naturale e attenzione ai fusi orari.",
          "en": "A complete British English message that does not invent availability.",
          "fr": "Un courriel complet en anglais britannique, sans créneau non confirmé.",
          "es": "Un correo completo en inglés británico que evita inventar disponibilidad."
        }
      },
      {
        "title": {
          "it": "Email in francese: richiesta sulle condizioni",
          "en": "French email: terms awaiting approval",
          "fr": "Courriel français : conditions à valider",
          "es": "Correo en francés: condiciones por aprobar"
        },
        "language": "fr",
        "content": "Objet : Votre demande de précisions sur les conditions de service\n\nBonjour,\n\nNous vous remercions pour votre message et pour les précisions apportées à votre demande.\n\nLes conditions que vous mentionnez doivent être examinées par la personne responsable de l'offre. Nous avons transmis vos questions afin de vérifier les éléments concernés avant de vous répondre.\n\nÀ ce stade, nous ne pouvons pas confirmer de modification du tarif, des délais ou du périmètre de la prestation. Nous reviendrons vers vous dès que nous disposerons d'une réponse validée.\n\nSi vous souhaitez ajouter une référence au dossier en cours, vous pouvez répondre directement à ce courriel, sans transmettre de données personnelles qui ne seraient pas nécessaires au traitement de votre demande.\n\nCordialement,\nService de coordination\n\nNOTE INTERNE — Aucune condition commerciale négociée ou approuvée dans cet exemple ; réponse préparée, non envoyée.",
        "explanation": {
          "it": "Il messaggio evita trattative implicite e rinvia le decisioni al referente.",
          "en": "The French reply preserves the boundary between client care and commercial negotiation.",
          "fr": "La réponse reste courtoise sans engager des conditions commerciales non validées.",
          "es": "La respuesta es cortés y no asume compromisos comerciales sin aprobar."
        }
      }
    ],
    "checks": [
      {
        "it": "Approvazioni distinguibili dalle bozze.",
        "en": "Approvals are distinguishable from drafts.",
        "fr": "Les validations restent distinctes des brouillons.",
        "es": "Las aprobaciones se distinguen de los borradores."
      },
      {
        "it": "Nessun riferimento a prospecting o acquisizione clienti.",
        "en": "No lead generation or outreach.",
        "fr": "Aucune prospection commerciale.",
        "es": "Sin prospección ni captación."
      },
      {
        "it": "Tono appropriato in italiano, inglese britannico e francese.",
        "en": "Appropriate Italian, British English and French registers.",
        "fr": "Registres naturels en italien, anglais britannique et français.",
        "es": "Registro natural en italiano, inglés británico y francés."
      }
    ],
    "limits": {
      "it": "Solo corrispondenza operativa su richieste già ricevute; nessuna chiamata a freddo, acquisizione contatti, decisione su prezzi o fatturazione.",
      "en": "Written support for existing enquiries only; no cold outreach, sales prospecting, pricing decisions or invoicing.",
      "fr": "Gestion écrite des demandes existantes uniquement ; sans prospection, fixation de tarifs ni facturation.",
      "es": "Atención escrita a consultas existentes; sin captación, decisiones de precio ni facturación."
    },
    "handoff": {
      "it": "Registro della casella, tre risposte complete e istruzioni per approvazioni e follow-up.",
      "en": "Inbox register, three complete replies and an approval/follow-up workflow.",
      "fr": "Registre, trois courriels complets et procédure de validation.",
      "es": "Registro, tres correos completos y procedimiento de aprobación."
    }
  },
  {
    "id": "calendar-conflict-timezone-confirmations",
    "category": "backoffice",
    "title": {
      "it": "Agenda professionale: sovrapposizioni, fusi orari e conferme",
      "en": "Calendar coordination: conflicts, time zones and confirmations",
      "fr": "Agenda : conflits, fuseaux horaires et confirmations",
      "es": "Agenda: conflictos, husos horarios y confirmaciones"
    },
    "service": {
      "it": "Gestione agenda e appuntamenti",
      "en": "Calendar and appointment coordination",
      "fr": "Gestion d'agenda et de rendez-vous",
      "es": "Gestión de agenda y citas"
    },
    "scenario": {
      "it": "Una professionista segue progetti con interlocutori in Italia, Regno Unito e Spagna. Due proposte di appuntamento si sovrappongono e una non riporta il fuso orario.",
      "en": "A professional coordinates Italian, British and Spanish contacts; two tentative meetings overlap and one lacks a time zone.",
      "fr": "Une professionnelle collabore avec des interlocuteurs en Italie, au Royaume-Uni et en Espagne ; deux rendez-vous provisoires se chevauchent.",
      "es": "Una profesional trabaja con Italia, Reino Unido y España; dos citas provisionales se solapan."
    },
    "objective": {
      "it": "Rendere verificabile la gestione dei conflitti e predisporre conferme multilingue senza prenotare fasce non autorizzate.",
      "en": "Show a traceable scheduling process and multilingual replies without booking unapproved slots.",
      "fr": "Mettre en place un suivi clair des conflits et confirmations multilingues.",
      "es": "Crear un proceso verificable para conflictos y confirmaciones multilingües."
    },
    "inputs": {
      "it": "Un calendario provvisorio e tre richieste in lingua italiana, inglese e spagnola; disponibilità finale da approvare.",
      "en": "One provisional calendar and three requests in Italian, English and Spanish; final availability remains unapproved.",
      "fr": "Un agenda provisoire et trois demandes ; disponibilités à confirmer.",
      "es": "Una agenda provisional y tres consultas; disponibilidad final por aprobar."
    },
    "workflow": [
      {
        "it": "Confrontare richieste, fusi orari e disponibilità autorizzate.",
        "en": "Check requests, time zones and approved availability.",
        "fr": "Comparer les demandes, les fuseaux horaires et les créneaux validés.",
        "es": "Contrastar solicitudes, husos horarios y disponibilidad aprobada."
      },
      {
        "it": "Registrare lo stato provvisorio e chiedere conferma prima di bloccare uno slot.",
        "en": "Mark tentative bookings and request approval before blocking a slot.",
        "fr": "Consigner les rendez-vous provisoires et demander validation.",
        "es": "Registrar citas provisionales y pedir confirmación."
      },
      {
        "it": "Inviare comunicazioni concordate e conservare la prova della conferma.",
        "en": "Send agreed messages and retain confirmation records.",
        "fr": "Envoyer les messages validés et garder trace de la confirmation.",
        "es": "Enviar mensajes aprobados y conservar el registro de confirmación."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Registro dei conflitti in agenda",
          "en": "Calendar conflict register",
          "fr": "Registre des conflits d'agenda",
          "es": "Registro de conflictos de agenda"
        },
        "language": "it",
        "content": "AGENDA DI LAVORO — SETTIMANA DI ESEMPIO\nLunedì 09:30–10:15 (Roma) | Riunione già confermata | Stato: bloccata.\nMartedì 15:00–15:45 (Roma) | Consulenza A | Stato: proposta in attesa di conferma.\nMartedì 15:30–16:00 (Roma) | Revisione progetto B | Stato: richiesta; CONFLITTO con A.\nMercoledì 11:00–11:30 (Roma) | Incontro C | Stato: richiesta con orario senza fuso.\n\nINTERVENTI\n1. Non eliminare né spostare appuntamenti confermati.\n2. Non comunicare un'alternativa finché la professionista non ha indicato disponibilità effettive.\n3. Chiarire la città/fuso orario dell'interlocutore prima di inviare inviti.\n4. Segnare la fonte della conferma e allegare l'eventuale email di approvazione.\n5. Riesaminare gli appuntamenti provvisori non confermati dopo il termine concordato.\n\nESITO: nessuna sovrapposizione viene accettata automaticamente; tre richieste restano tracciate in attesa delle rispettive risposte.",
        "explanation": {
          "it": "Le fasce sono esempi di lavoro: il registro non le presenta come prenotazioni reali.",
          "en": "The entries show how conflicts are recorded without implying actual bookings.",
          "fr": "Le registre démontre la traçabilité des créneaux provisoires.",
          "es": "El registro muestra cómo documentar franjas provisionales."
        }
      },
      {
        "title": {
          "it": "Richiesta di disponibilità in inglese",
          "en": "English email requesting availability",
          "fr": "Courriel anglais pour vérifier un créneau",
          "es": "Correo en inglés para confirmar disponibilidad"
        },
        "language": "en",
        "content": "Subject: Proposed meeting time — confirmation pending\n\nDear Mr Reed,\n\nThank you for suggesting a meeting next week.\n\nWe are currently checking the relevant colleague's diary. The time you mentioned has not yet been confirmed, so please do not treat it as a booked appointment.\n\nCould you also confirm whether your proposed time is in UK local time? We will compare it with the time in Rome before sending a calendar invitation.\n\nOnce we receive approval for an available slot, we will send an invitation showing the date, time zone and joining details. If the suggested time does not work, we will ask for an alternative rather than making a change without agreement.\n\nKind regards,\nScheduling Support\n\nINTERNAL NOTE: no meeting invitation sent; UK/Rome conversion to be checked on the actual date, including daylight-saving changes.",
        "explanation": {
          "it": "Non effettua conversioni a priori senza una data concreta.",
          "en": "The wording avoids an inaccurate fixed UK–Italy time difference.",
          "fr": "Le décalage horaire sera vérifié à la date précise.",
          "es": "La diferencia horaria se revisará para la fecha concreta."
        }
      },
      {
        "title": {
          "it": "Conferma in spagnolo dopo l'approvazione",
          "en": "Spanish approval-stage confirmation",
          "fr": "Confirmation en espagnol après validation",
          "es": "Confirmación en español tras aprobación"
        },
        "language": "es",
        "content": "Asunto: Confirmación de la reunión — datos para la invitación\n\nEstimada Sra. Moreno:\n\nGracias por su disponibilidad. Hemos recibido la confirmación interna del horario acordado para la próxima reunión.\n\nAntes de enviarle la invitación definitiva, le agradeceríamos que nos confirmara la dirección de correo en la que desea recibirla y si participará desde España o desde otra zona horaria.\n\nLa invitación indicará expresamente la fecha y la hora de Roma, junto con la información necesaria para conectarse. Si detecta alguna diferencia respecto a lo acordado, por favor, comuníquenoslo antes de aceptar.\n\nLe agradecemos su colaboración.\n\nUn cordial saludo,\nSecretaría de coordinación\n\nNOTA INTERNA: el ejemplo no contiene una fecha concreta aprobada. Este texto es una plantilla de etapa posterior a la aprobación, no una confirmación efectivamente enviada.",
        "explanation": {
          "it": "L'esempio distingue il modello utilizzabile dopo l'autorizzazione dalla bozza in attesa.",
          "en": "The Spanish message is explicitly a post-approval template, not a sent invitation.",
          "fr": "Le message espagnol est un modèle d'après-validation.",
          "es": "El texto es una plantilla posterior a la aprobación, no una cita ya confirmada."
        }
      },
      {
        "title": {
          "it": "Procedura per gestire eccezioni e cancellazioni",
          "en": "Exception and cancellation procedure",
          "fr": "Procédure d'exception et d'annulation",
          "es": "Procedimiento de excepciones y cancelaciones"
        },
        "language": "it",
        "content": "PROCEDURA — CAMBIO APPUNTAMENTO\nRicezione: annotare data, mittente, riferimento del calendario e motivo organizzativo, se comunicato spontaneamente.\nVerifica: individuare lo stato dell'appuntamento (richiesto, proposto, confermato, annullato).\nAutorizzazioni: chiedere al responsabile quali fasce possono essere proposte; nessuna cancellazione di slot confermati senza permesso.\nComunicazione: fornire una risposta nella lingua appropriata, indicando il fuso orario; evitare il solo termine «alle tre» senza data e zona.\nControllo: confrontare invito e email di conferma, verificare destinatari e modalità di partecipazione.\nChiusura: registrare la risposta del partecipante e aggiornare la pratica, mantenendo lo storico del cambio.\n\nCASO PARTICOLARE — DUE RICHIESTE SULLO STESSO SLOT\nRegistrare entrambe con orario di ricezione; non assegnare automaticamente la precedenza né promettere la fascia. Richiedere un criterio autorizzato e preparare comunicazioni separate.\n\nCONSEGNA: registro delle proposte, tre bozze, check di coerenza tra email e invito.",
        "explanation": {
          "it": "Una procedura concreta, utilizzabile come riferimento per il lavoro quotidiano.",
          "en": "A complete exception-handling procedure, not a generic tip list.",
          "fr": "Une procédure opérationnelle exploitable, avec règles d'escalade.",
          "es": "Un procedimiento práctico con reglas de validación."
        }
      }
    ],
    "checks": [
      {
        "it": "Inviti e bozze distinti; nessuna prenotazione dichiarata senza conferma.",
        "en": "Drafts and confirmed bookings remain separate.",
        "fr": "Les propositions restent distinctes des confirmations.",
        "es": "Las propuestas se distinguen de las citas confirmadas."
      },
      {
        "it": "Attenzione ai fusi orari e ai cambi di ora.",
        "en": "Date-specific time-zone checks.",
        "fr": "Fuseaux horaires vérifiés selon la date.",
        "es": "Husos horarios revisados según la fecha."
      }
    ],
    "limits": {
      "it": "Coordinamento organizzativo secondo disponibilità autorizzate; nessuna gestione autonoma delle condizioni di vendita.",
      "en": "Administrative scheduling within approved availability; no independent commercial decisions.",
      "fr": "Coordination des rendez-vous dans le cadre autorisé.",
      "es": "Coordinación de citas dentro de las autorizaciones dadas."
    },
    "handoff": {
      "it": "Registro conflitti, messaggi completi EN/ES e procedura per riprogrammazioni.",
      "en": "Conflict log, complete EN/ES messages and rescheduling procedure.",
      "fr": "Registre des conflits, courriels EN/ES et procédure.",
      "es": "Registro de conflictos, correos EN/ES y procedimiento."
    }
  },
  {
    "id": "italian-customer-service-multilingual-followup",
    "category": "backoffice",
    "title": {
      "it": "Assistenza postvendita: tre lingue, una pratica tracciabile",
      "en": "After-sales support: three languages, one traceable case",
      "fr": "Service après-vente : trois langues et un dossier suivi",
      "es": "Atención posventa: tres idiomas y un expediente trazable"
    },
    "service": {
      "it": "Assistenza clienti scritta multilingue",
      "en": "Multilingual written customer care",
      "fr": "Relation client écrite multilingue",
      "es": "Atención escrita multilingüe al cliente"
    },
    "scenario": {
      "it": "Un'azienda che serve clienti in Italia riceve domande su una consegna parziale; la risposta deve essere coerente in italiano, inglese e spagnolo, senza garantire consegne non confermate.",
      "en": "A business serving Italian customers receives partial-delivery enquiries and needs consistent replies in Italian, English and Spanish.",
      "fr": "Une entreprise travaillant avec l'Italie doit répondre à des demandes de suivi de livraison en plusieurs langues.",
      "es": "Una empresa que trabaja con Italia necesita respuestas coherentes sobre entregas parciales en varios idiomas."
    },
    "objective": {
      "it": "Progettare una sequenza di risposta, sollecito e chiusura condizionata alla verifica logistica.",
      "en": "Prepare a full holding reply, follow-up and case closure workflow subject to logistics verification.",
      "fr": "Préparer une réponse d'attente, une relance et une clôture après vérification.",
      "es": "Preparar respuesta inicial, seguimiento y cierre tras verificación."
    },
    "inputs": {
      "it": "Pratica di prova PS-310: due articoli risultano preparati, uno ancora da verificare; nessun corriere o consegna confermata.",
      "en": "Example case PS-310: two items prepared, one pending; no confirmed carrier or delivery date.",
      "fr": "Dossier PS-310 : deux articles prêts, un troisième en attente de vérification.",
      "es": "Caso PS-310: dos artículos preparados y uno pendiente; sin fecha de entrega."
    },
    "workflow": [
      {
        "it": "Identificare la pratica già aperta e le informazioni che possono essere comunicate.",
        "en": "Identify the existing case and information that may be disclosed.",
        "fr": "Identifier le dossier existant et les informations communicables.",
        "es": "Identificar el expediente existente y la información comunicable."
      },
      {
        "it": "Preparare la risposta nella lingua adatta, evitando date o condizioni non verificate.",
        "en": "Draft in the appropriate language without unverified dates or terms.",
        "fr": "Rédiger dans la langue appropriée sans dates ni conditions non vérifiées.",
        "es": "Redactar en el idioma adecuado sin plazos ni condiciones sin confirmar."
      },
      {
        "it": "Registrare il passaggio al referente autorizzato e i controlli successivi.",
        "en": "Log escalation to the authorised colleague and subsequent checks.",
        "fr": "Tracer le transfert au responsable et les vérifications suivantes.",
        "es": "Registrar la derivación al responsable y las comprobaciones posteriores."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Risposta completa al cliente italiano",
          "en": "Complete Italian customer reply",
          "fr": "Réponse italienne au client",
          "es": "Respuesta completa en italiano"
        },
        "language": "it",
        "content": "Oggetto: Aggiornamento sulla richiesta relativa all'ordine PS-310\n\nGentile Cliente,\n\nla ringraziamo per averci scritto e comprendiamo l'importanza di ricevere un aggiornamento preciso sul suo ordine.\n\nDalle informazioni attualmente disponibili risultano preparati due dei tre articoli previsti. La disponibilità del terzo articolo e le eventuali possibilità di spedizione separata devono ancora essere confermate dal referente competente.\n\nPer questo motivo non le indichiamo una data di consegna che, al momento, non possiamo garantire. Abbiamo registrato la sua richiesta e predisposto la verifica delle opzioni disponibili.\n\nLe comunicheremo le informazioni confermate non appena il referente avrà completato il controllo. Non modificheremo le modalità dell'ordine senza l'autorizzazione prevista.\n\nLa ringraziamo per la pazienza.\n\nCordiali saluti,\nServizio assistenza clienti\n\nSTATO: bozza da approvare, non inviata. Controllo aperto con logistica; evitare formule come «consegna assicurata».",
        "explanation": {
          "it": "Una risposta completa, senza promesse di disponibilità o spedizione.",
          "en": "Full written response with no invented shipping assurance.",
          "fr": "Réponse intégrale sans promesse de livraison non validée.",
          "es": "Respuesta completa sin promesas de envío."
        }
      },
      {
        "title": {
          "it": "Risposta in inglese per cliente internazionale",
          "en": "English customer-care reply",
          "fr": "Réponse en anglais au client international",
          "es": "Respuesta en inglés al cliente internacional"
        },
        "language": "en",
        "content": "Subject: Update on your existing order — case PS-310\n\nDear Customer,\n\nThank you for contacting us about your order.\n\nOur current records indicate that two of the three items are prepared. We are still checking the status of the remaining item and whether a separate dispatch would be possible under the terms already agreed.\n\nWe appreciate that you may need a reliable delivery date. We cannot confirm one at this stage, and we would rather give you an accurate update than an estimate presented as a promise.\n\nYour enquiry has been logged for the colleague responsible for order fulfilment. Once we have verified the available options, we will contact you again with the information you need to decide how to proceed.\n\nNo changes will be made to the order without the approval required by the applicable process.\n\nKind regards,\nCustomer Support\n\nCASE NOTE: draft only. Confirm whether partial dispatch is permitted and whether any extra charges apply before proposing it.",
        "explanation": {
          "it": "Inglese britannico naturale per un cliente internazionale già acquisito.",
          "en": "Natural British English for an existing customer.",
          "fr": "Anglais britannique naturel, adapté à un client déjà acquis.",
          "es": "Inglés británico natural para un cliente actual."
        }
      },
      {
        "title": {
          "it": "Risposta in spagnolo: aggiornamento senza data certa",
          "en": "Spanish update without a confirmed date",
          "fr": "Réponse en espagnol sans délai confirmé",
          "es": "Actualización en español sin fecha confirmada"
        },
        "language": "es",
        "content": "Asunto: Seguimiento de su pedido — referencia PS-310\n\nEstimado cliente:\n\nGracias por ponerse en contacto con nosotros. Hemos registrado su consulta y estamos revisando el estado de los tres artículos incluidos en su pedido.\n\nSegún la información de trabajo disponible, dos artículos están preparados y el tercero requiere una comprobación adicional. Por ahora, no disponemos de una fecha de entrega confirmada ni de autorización para modificar el envío.\n\nEntendemos que esta información es importante para su planificación. Por ese motivo, preferimos verificarla antes de facilitarle una previsión que podría no cumplirse.\n\nLe enviaremos una actualización cuando el departamento responsable confirme el estado del artículo pendiente y las alternativas permitidas.\n\nGracias por su comprensión.\n\nAtentamente,\nEquipo de atención al cliente\n\nNOTA DE CONTROL: borrador pendiente de aprobación; no afirmar que el pedido ya se ha enviado.",
        "explanation": {
          "it": "La versione spagnola non è un calco: usa formule naturali e coerenti.",
          "en": "The Spanish wording is independently adapted, not mechanically translated.",
          "fr": "Rédaction espagnole naturelle et non calquée.",
          "es": "Redacción española natural y no traducida palabra por palabra."
        }
      },
      {
        "title": {
          "it": "Registro della pratica e nota al responsabile",
          "en": "Case log and owner handover",
          "fr": "Suivi du dossier et note au responsable",
          "es": "Registro e informe al responsable"
        },
        "language": "it",
        "content": "SCHEDA PRATICA PS-310 — POSTVENDITA\nCanale: email | Stato: in verifica | Lingue: IT / EN / ES\nInformazione acquisita: due articoli preparati; terzo da verificare.\nInformazione non disponibile: data di spedizione, data consegna, eventuali spese aggiuntive.\nAzione consentita: comunicare la presa in carico e richiedere verifica.\nAzione NON consentita: modificare ordine, promettere tempi, applicare sconti o rimborsi.\n\nMEMO AL REFERENTE\nOggetto: PS-310 — conferma dati necessaria\nBuongiorno,\nho predisposto tre bozze di risposta relative alla stessa richiesta postvendita, nelle lingue utilizzate dai clienti. Prima di qualsiasi invio chiedo di confermare lo stato del terzo articolo, la possibilità di un invio parziale, eventuali condizioni aggiuntive e la modalità approvata per informare il cliente.\nNon è stata comunicata alcuna data di consegna. Una volta ricevute le indicazioni, aggiornerò il registro, adeguerò i testi alle informazioni confermate e sottoporrò la versione finale all'approvazione prevista.\nGrazie.\n\nCONTROLLO FINALE: destinatario corretto, riferimento ordine, lingua, informazioni verificate, autorizzazione, data prossimo aggiornamento.",
        "explanation": {
          "it": "Il registro unifica le tre comunicazioni e indica cosa manca alla chiusura.",
          "en": "One case log supports the three language versions and makes open decisions visible.",
          "fr": "Un registre unique relie les trois versions et les décisions en attente.",
          "es": "Un único registro vincula las tres versiones y las decisiones pendientes."
        }
      }
    ],
    "checks": [
      {
        "it": "Le tre email non contraddicono lo stato della pratica.",
        "en": "All three replies match the case status.",
        "fr": "Les trois réponses respectent l'état du dossier.",
        "es": "Las tres respuestas reflejan el estado del caso."
      },
      {
        "it": "Nessuna data di consegna non documentata.",
        "en": "No unsupported delivery promises.",
        "fr": "Aucun délai de livraison non confirmé.",
        "es": "Sin fechas de entrega no confirmadas."
      }
    ],
    "limits": {
      "it": "Corrispondenza e follow-up su ordini esistenti; non comprende negoziazioni, rimborsi, fatturazione o acquisizione clienti.",
      "en": "Written after-sales care for existing orders; no negotiation, refunds, invoicing or lead generation.",
      "fr": "Suivi écrit des commandes existantes, sans négociation ni facturation.",
      "es": "Atención escrita de pedidos existentes, sin negociación ni facturación."
    },
    "handoff": {
      "it": "Tre email integrali in IT/EN/ES, scheda pratica e memo di approvazione.",
      "en": "Three full IT/EN/ES replies, case file and approval handover.",
      "fr": "Trois courriels complets, fiche de suivi et note de validation.",
      "es": "Tres correos completos, ficha del caso e informe."
    }
  },
  {
    "id": "approved-quotes-order-variations",
    "category": "backoffice",
    "title": {
      "it": "Ordini e preventivi: controllare una modifica prima della bozza",
      "en": "Orders and quotations: checking a variation before drafting",
      "fr": "Commandes et devis : vérifier une modification avant rédaction",
      "es": "Pedidos y presupuestos: verificar un cambio antes de redactar"
    },
    "service": {
      "it": "Back office, ordini e bozze di preventivo",
      "en": "Operational back office, order tracking and draft quotes",
      "fr": "Back-office, suivi de commandes et projets de devis",
      "es": "Back office, seguimiento de pedidos y borradores de presupuesto"
    },
    "scenario": {
      "it": "Un fornitore di materiali per ufficio riceve da un cliente già attivo una modifica alle quantità. Il vecchio listino contiene un codice articolo diverso da quello approvato oggi.",
      "en": "An office-supply provider receives changed quantities from an existing customer; an older price list uses a conflicting item code.",
      "fr": "Un fournisseur reçoit une modification de quantités ; deux versions du tarif ne concordent pas.",
      "es": "Un proveedor recibe un cambio de cantidades; dos listados de precios no coinciden."
    },
    "objective": {
      "it": "Rendere chiari dati iniziali, incongruenze, verifiche e bozza da approvare senza decidere prezzi.",
      "en": "Produce a traceable discrepancy report and draft reply without independently setting prices.",
      "fr": "Rédiger une synthèse vérifiable et un brouillon sans fixer les prix.",
      "es": "Preparar un informe y un borrador sin decidir precios."
    },
    "inputs": {
      "it": "Ordine O-44, richiesta di modifica ricevuta e due versioni interne del listino; le cifre servono soltanto all'esempio.",
      "en": "Example order O-44, a change request and two internally drafted price-list versions.",
      "fr": "Commande O-44, demande de modification et deux versions de tarif préparées pour l'exemple.",
      "es": "Pedido O-44, solicitud de cambio y dos versiones de tarifas de ejemplo."
    },
    "workflow": [
      {
        "it": "Verificare riferimenti articolo, quantità e versione del listino già approvato.",
        "en": "Check product references, quantities and the approved price-list version.",
        "fr": "Vérifier références, quantités et version validée du tarif.",
        "es": "Comprobar referencias, cantidades y versión aprobada del listado."
      },
      {
        "it": "Separare bozze e documenti autorizzati, evidenziando ogni discordanza.",
        "en": "Separate drafts from approved documents and flag every discrepancy.",
        "fr": "Séparer les brouillons des documents validés et signaler les écarts.",
        "es": "Separar borradores de documentos aprobados y señalar discrepancias."
      },
      {
        "it": "Preparare un riepilogo per il responsabile senza modificare prezzi o condizioni.",
        "en": "Prepare the owner handover without changing prices or terms.",
        "fr": "Préparer la transmission sans modifier prix ni conditions.",
        "es": "Preparar el informe sin modificar precios ni condiciones."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Registro ordini con discrepanze",
          "en": "Order discrepancy log",
          "fr": "Registre des écarts sur commande",
          "es": "Registro de discrepancias de pedidos"
        },
        "language": "it",
        "content": "REGISTRO O-44 — VERIFICA VERSIONI\nRichiesta del cliente esistente: aumentare da 20 a 25 le cartelline modello A5.\nVersione listino L-v1: codice CA-05 — quantità base 20 — prezzo unitario di prova €2,80.\nVersione listino L-v2: codice CA-05B — quantità base 20 — prezzo unitario di prova €3,10.\nCondizione approvata: NON DOCUMENTATA per la nuova quantità.\nStato: verifica necessaria.\n\nANOMALIE\nA-01 | Codice prodotto discordante fra L-v1 e L-v2 | Chiedere quale codice sia in vigore.\nA-02 | Nuova quantità 25 | Chiedere se sono previste condizioni differenti.\nA-03 | Data di consegna assente | Non stimare autonomamente tempi.\nA-04 | Supplementi/trasporto | Informazione non fornita.\n\nCONSEGNA PREVISTA\n1. Riepilogo della richiesta e dei dati ricevuti.\n2. Elenco discrepanze da sottoporre al referente.\n3. Bozza di risposta da finalizzare dopo approvazione.\n4. Versione documentale identificabile.\nNessun nuovo ordine è stato inserito in un gestionale reale.",
        "explanation": {
          "it": "Prezzi e codici sono dati di lavoro d'esempio e non offerte sul mercato.",
          "en": "The prices and codes illustrate the method, not market quotations.",
          "fr": "Les valeurs permettent de montrer le contrôle, pas de publier un prix réel.",
          "es": "Los datos muestran el control, no una oferta comercial real."
        }
      },
      {
        "title": {
          "it": "Email al referente per approvazione",
          "en": "Approval request to the account owner",
          "fr": "Demande de validation au responsable",
          "es": "Solicitud de aprobación al responsable"
        },
        "language": "it",
        "content": "Oggetto: Ordine O-44 — verifica modifica quantità e codice articolo\n\nBuongiorno,\n\nho esaminato la richiesta di variazione arrivata dal cliente già in carico: la quantità delle cartelline A5 passerebbe da 20 a 25 unità.\n\nNel confronto tra i documenti disponibili ho rilevato una discrepanza: il listino L-v1 riporta il codice CA-05, mentre L-v2 utilizza CA-05B e un valore unitario diverso. Non risulta inoltre un'indicazione approvata circa le condizioni applicabili alla nuova quantità.\n\nPrima di preparare il preventivo aggiornato, ti chiedo di confermare per iscritto:\n- il codice articolo da utilizzare;\n- il listino e la versione approvati;\n- eventuali costi di trasporto e le condizioni per 25 unità;\n- le tempistiche comunicabili al cliente.\n\nHo lasciato il documento in stato di bozza e non ho applicato alcuna variazione al prezzo o all'ordine.\n\nGrazie,\nSupporto back office",
        "explanation": {
          "it": "L'assistente prepara la documentazione ma non assume decisioni commerciali.",
          "en": "The assistant identifies issues but does not make commercial decisions.",
          "fr": "Le support identifie les écarts sans décider les conditions.",
          "es": "El apoyo identifica problemas sin decidir condiciones."
        }
      },
      {
        "title": {
          "it": "Aggiornamento al cliente in francese",
          "en": "French customer status reply",
          "fr": "Réponse en français au client",
          "es": "Actualización al cliente en francés"
        },
        "language": "fr",
        "content": "Objet : Votre demande de modification de commande — référence O-44\n\nBonjour,\n\nNous avons bien reçu votre demande concernant la modification des quantités de la commande O-44. Merci de nous avoir transmis cette précision.\n\nNous procédons actuellement à une vérification des références et des conditions applicables avant de préparer le document mis à jour. À ce stade, nous ne souhaitons pas vous confirmer un montant ou un délai qui n'aurait pas été validé par notre responsable.\n\nDès que les informations auront été vérifiées, nous pourrons vous adresser une proposition révisée pour examen. Aucune modification ne sera considérée comme acceptée sans l'accord requis.\n\nNous vous remercions de votre compréhension.\n\nCordialement,\nService de coordination des commandes\n\nSUIVI INTERNE : document non envoyé ; attendre la validation du tarif et de la quantité.",
        "explanation": {
          "it": "La risposta francese documenta la presa in carico senza approvare la variazione.",
          "en": "The French reply acknowledges the request without confirming revised terms.",
          "fr": "Le courriel ne confirme ni le montant ni la modification.",
          "es": "El correo no confirma el importe ni la modificación."
        }
      },
      {
        "title": {
          "it": "Checklist di controllo pre-invio",
          "en": "Pre-release quality checklist",
          "fr": "Liste de vérification avant envoi",
          "es": "Lista de comprobación previa"
        },
        "language": "en",
        "content": "PRE-RELEASE CHECKLIST — ORDER O-44\n[ ] Existing customer and request reference verified.\n[ ] Original quantity and revised quantity recorded separately.\n[ ] Item code checked against the correct approved catalogue.\n[ ] Price-list version and effective date confirmed by owner.\n[ ] Delivery and transport terms checked, not assumed.\n[ ] Draft quotation identified as draft; no unauthorised price change.\n[ ] Recipient and attachments double-checked.\n[ ] Approval date, approver and revision history retained.\n\nHANDOVER NOTE\nThe amended quantity is known, but the applicable product code, approved unit price and delivery conditions still require confirmation. The customer-facing French response is prepared as a holding reply. No quotation may be released until the responsible person approves the commercial data.\n\nSERVICE BOUNDARY\nThis is order-entry and document preparation support. It does not include accounting, issuing invoices, setting prices, negotiating contractual conditions or contacting prospective customers.",
        "explanation": {
          "it": "La checklist in inglese rende verificabile ogni passaggio della preparazione documentale.",
          "en": "A complete English checklist distinguishes data-entry checks from authorisation.",
          "fr": "La checklist distingue le contrôles opérationnels de la validation commerciale.",
          "es": "La lista separa comprobaciones administrativas de autorización comercial."
        }
      }
    ],
    "checks": [
      {
        "it": "Non confondere listino e preventivo approvato.",
        "en": "Never confuse a price list with an approved offer.",
        "fr": "Ne pas confondre tarif et devis validé.",
        "es": "No confundir listado de precios con presupuesto aprobado."
      },
      {
        "it": "Nessuna fatturazione o contabilizzazione.",
        "en": "No invoicing or bookkeeping.",
        "fr": "Aucune facturation ni comptabilité.",
        "es": "Sin facturación ni contabilidad."
      }
    ],
    "limits": {
      "it": "Aggiornamento registri e preparazione bozze sotto istruzioni; escluse approvazioni commerciali, fatturazione e contabilità.",
      "en": "Tracking and drafting from approved instructions only; no price setting, invoicing or bookkeeping.",
      "fr": "Suivi et rédaction sur instructions ; sans décision tarifaire ni facturation.",
      "es": "Seguimiento y borradores según instrucciones, sin decisiones de precio ni facturación."
    },
    "handoff": {
      "it": "Registro variazioni, email italiana e francese complete, checklist inglese di controllo.",
      "en": "Change register, complete Italian and French correspondence, English review checklist.",
      "fr": "Registre des écarts, courriels complets et checklist anglaise.",
      "es": "Registro, correos completos y lista de control inglesa."
    }
  },
  {
    "id": "multilingual-course-secretariat-schedule",
    "category": "backoffice",
    "title": {
      "it": "Corso online per partecipanti internazionali: comunicazioni e assistenza",
      "en": "International online course: attendee emails and operational support",
      "fr": "Formation en ligne internationale : courriels et organisation",
      "es": "Curso en línea internacional: comunicaciones y organización"
    },
    "service": {
      "it": "Segreteria organizzativa e supporto corsi",
      "en": "Course administration and learner communications",
      "fr": "Secrétariat de formation et communication avec les inscrits",
      "es": "Secretaría de cursos y comunicación con inscritos"
    },
    "scenario": {
      "it": "Un ente che organizza una formazione in Italia deve inviare istruzioni chiare a persone già iscritte che comunicano in inglese, francese e spagnolo.",
      "en": "An Italy-based course organiser needs clear English, French and Spanish correspondence for participants who are already enrolled.",
      "fr": "Un organisme italien doit informer des participants déjà inscrits en anglais, français et espagnol.",
      "es": "Una entidad italiana necesita informar a participantes ya inscritos en inglés, francés y español."
    },
    "objective": {
      "it": "Predisporre comunicazioni complete e una procedura di verifica dei materiali, senza gestire iscrizioni commerciali o pagamenti.",
      "en": "Produce complete participant emails and a materials-control procedure, excluding sales enrolment and payments.",
      "fr": "Préparer les messages complets et vérifier les supports sans gérer les paiements.",
      "es": "Preparar correos completos y control de materiales sin pagos ni captación."
    },
    "inputs": {
      "it": "Programma approvato nell'esempio: modulo introduttivo da remoto, accesso da inviare singolarmente; nessun link effettivo o data certa viene pubblicato.",
      "en": "Approved example module outline; meeting details are withheld until confirmed.",
      "fr": "Programme indicatif et informations de connexion à transmettre après vérification.",
      "es": "Programa introductorio y acceso pendiente de confirmación."
    },
    "workflow": [
      {
        "it": "Verificare l'elenco degli iscritti e le versioni approvate di programma e materiali.",
        "en": "Check the existing attendee list and approved schedule and material versions.",
        "fr": "Vérifier la liste des inscrits ainsi que les versions validées.",
        "es": "Comprobar la lista de inscritos y las versiones aprobadas."
      },
      {
        "it": "Preparare comunicazioni nelle lingue richieste e verificare date, link e fusi orari.",
        "en": "Draft communications in requested languages and verify dates, links and time zones.",
        "fr": "Rédiger les messages adaptés et vérifier dates, liens et fuseaux.",
        "es": "Preparar comunicaciones y verificar fechas, enlaces y husos horarios."
      },
      {
        "it": "Registrare domande ricorrenti, problemi di accesso e approvazioni da ottenere.",
        "en": "Log recurring questions, access issues and pending approvals.",
        "fr": "Consigner les questions, problèmes d'accès et validations en attente.",
        "es": "Registrar dudas frecuentes, incidencias de acceso y aprobaciones pendientes."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Email di benvenuto ai partecipanti italiani",
          "en": "Italian attendee welcome email",
          "fr": "Courriel d'accueil en italien",
          "es": "Correo de bienvenida en italiano"
        },
        "language": "it",
        "content": "Oggetto: Benvenuto al percorso online — informazioni organizzative\n\nBuongiorno,\n\nsiamo lieti di darle il benvenuto al percorso formativo al quale risulta già iscritta/o.\n\nPer prepararsi al primo incontro, le chiediamo di controllare l'indirizzo email utilizzato in fase di iscrizione: sarà il recapito impiegato per le successive comunicazioni organizzative. Il programma aggiornato e le istruzioni di collegamento saranno trasmessi dal referente autorizzato quando saranno state confermate le informazioni tecniche.\n\nNel frattempo, può predisporre una postazione tranquilla e verificare di poter utilizzare audio e connessione Internet. Non è necessario inviare documenti personali aggiuntivi in risposta a questo messaggio.\n\nPer eventuali difficoltà di accesso o per domande sui materiali può rispondere alla stessa email, indicando il nome del corso e una descrizione del problema. Le richieste didattiche verranno inoltrate al docente competente.\n\nCordiali saluti,\nSegreteria organizzativa\n\nNOTA: messaggio di esempio; inviare solo dopo conferma di programma e destinatari.",
        "explanation": {
          "it": "Distingue assistenza organizzativa da risposte didattiche e commerciali.",
          "en": "The message distinguishes course logistics from teaching decisions.",
          "fr": "Le message distingue le secrétariat de l'enseignement.",
          "es": "El correo distingue organización de docencia."
        }
      },
      {
        "title": {
          "it": "Email in inglese ai partecipanti internazionali",
          "en": "English participant information email",
          "fr": "Courriel anglais aux participants",
          "es": "Correo en inglés a participantes"
        },
        "language": "en",
        "content": "Subject: Your online course — joining information and support\n\nDear Participant,\n\nThank you for enrolling in the online programme. We are writing to explain how you will receive practical information before your first session.\n\nThe approved schedule and joining instructions will be sent to your registered email address once the organiser has completed the final checks. Please follow the time zone stated in that message rather than relying on an earlier draft of the timetable.\n\nYou will also receive information about the materials required for the opening module. If you have difficulty accessing a document or opening an invitation, reply to this email with a brief description of the issue. The course support desk will check the administrative details and, where necessary, refer your question to the appropriate colleague.\n\nQuestions about the content of lessons or assessment should be directed to the teaching team. We cannot confirm recordings, certificates or alternative sessions unless these have been specifically approved.\n\nKind regards,\nCourse Support Desk\n\nSTATUS: prepared template, not sent; actual date and link must be inserted only after approval.",
        "explanation": {
          "it": "Email completa in inglese britannico con indicazioni concrete, senza link di prova fuorvianti.",
          "en": "Full British English email without fabricated session links.",
          "fr": "Courriel complet en anglais britannique, sans lien trompeur.",
          "es": "Correo completo en inglés británico, sin enlaces ficticios."
        }
      },
      {
        "title": {
          "it": "Email francese: informazioni di accesso e supporto",
          "en": "French access and support email",
          "fr": "Courriel français : accès et assistance",
          "es": "Correo francés de acceso y ayuda"
        },
        "language": "fr",
        "content": "Objet : Votre formation en ligne — informations pratiques\n\nBonjour,\n\nNous vous remercions de votre inscription à la formation en ligne.\n\nAvant le premier module, vous recevrez à l'adresse utilisée lors de l'inscription le programme confirmé ainsi que les consignes de connexion. Nous vous invitons à vérifier le fuseau horaire indiqué sur l'invitation : il s'agit de l'heure de référence pour la session.\n\nSi vous ne retrouvez pas le message d'accès ou si un document ne s'ouvre pas, vous pouvez répondre directement à ce courriel en précisant le module concerné et la difficulté rencontrée. Notre secrétariat vérifiera les informations de connexion et transmettra les questions pédagogiques à l'équipe enseignante.\n\nNous ne vous demanderons pas de communiquer de mot de passe ou de données personnelles supplémentaires pour recevoir ces indications.\n\nNous vous souhaitons une excellente formation.\n\nCordialement,\nSecrétariat de formation\n\nNOTE INTERNE : texte à compléter avec les consignes réellement approuvées ; aucun lien ni horaire n'est présumé.",
        "explanation": {
          "it": "Francese naturale e distinzione tra supporto tecnico-organizzativo e docenza.",
          "en": "Natural French and a clear division between logistics and teaching.",
          "fr": "Français idiomatique et répartition claire des rôles.",
          "es": "Francés natural y funciones claramente delimitadas."
        }
      },
      {
        "title": {
          "it": "Messaggio spagnolo e registro delle richieste",
          "en": "Spanish participant reply and issue log",
          "fr": "Réponse espagnole et registre des demandes",
          "es": "Respuesta española y registro de consultas"
        },
        "language": "es",
        "content": "Asunto: Re: Consulta sobre el acceso al módulo inicial\n\nEstimada participante:\n\nGracias por escribirnos. Hemos registrado tu consulta sobre el acceso al primer módulo del curso.\n\nAntes de reenviar cualquier instrucción, comprobaremos que disponemos de la versión aprobada del calendario y de los datos de conexión. Si el problema está relacionado con el formato de un documento, te indicaremos las opciones que la organización haya autorizado.\n\nPor ahora, no podemos confirmar un enlace alternativo ni un horario distinto del que figure en la comunicación oficial. Te responderemos por este mismo medio en cuanto tengamos información verificada.\n\nMuchas gracias por tu paciencia.\n\nUn cordial saludo,\nSecretaría del curso\n\nREGISTRO OPERATIVO\nC-01 | Solicitud: enlace no localizado | Estado: comprobar envío original | Responsable: secretaría.\nC-02 | Solicitud: archivo no accesible | Estado: comprobar formato y permisos | Responsable: coordinación.\nC-03 | Solicitud: cambio de horario | Estado: requiere decisión del organizador | Responsable: dirección.\nCIERRE: actualizar estado solo después de responder o derivar con confirmación. No se han enviado mensajes reales.",
        "explanation": {
          "it": "Un'email spagnola completa accompagnata dal registro di assistenza.",
          "en": "Full Spanish reply with a practical participant-support log.",
          "fr": "Courriel espagnol complet et registre de suivi.",
          "es": "Correo español completo junto a un registro de incidencias."
        }
      }
    ],
    "checks": [
      {
        "it": "Le comunicazioni non inventano orari o collegamenti.",
        "en": "No invented joining links or times.",
        "fr": "Aucun horaire ni lien inventé.",
        "es": "Sin horarios ni enlaces inventados."
      },
      {
        "it": "La gestione riguarda solo persone già iscritte.",
        "en": "Only existing registrants are involved.",
        "fr": "Uniquement les participants inscrits.",
        "es": "Solo personas ya inscritas."
      }
    ],
    "limits": {
      "it": "Supporto organizzativo a partecipanti già iscritti; non comprende reclutamento, fatturazione, insegnamento o valutazioni.",
      "en": "Organisational support for enrolled participants only; no recruitment, invoicing or teaching.",
      "fr": "Soutien aux inscrits, sans recrutement, facturation ni enseignement.",
      "es": "Apoyo a inscritos, sin captación, facturación ni docencia."
    },
    "handoff": {
      "it": "Quattro comunicazioni IT/EN/FR/ES e registro delle richieste con responsabili.",
      "en": "Four IT/EN/FR/ES messages and an attendee support register.",
      "fr": "Quatre messages et registre des demandes.",
      "es": "Cuatro correos y registro de consultas."
    }
  }
];
