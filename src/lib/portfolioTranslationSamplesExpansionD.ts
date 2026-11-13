import type { TranslationDeepCase } from "./portfolioDeepTypes";

/** Full original Italian-to-foreign-language translations for professional communication. */
export const TRANSLATION_SAMPLES_EXPANSION_D: TranslationDeepCase[] = [
  {
    "id": "it-en-full-operations-sop-handover",
    "direction": "IT-EN",
    "domain": {
      "it": "Procedure operative e passaggio di consegne",
      "en": "Operational procedures and handover",
      "fr": "Procédures opérationnelles et passation",
      "es": "Procedimientos operativos y traspaso"
    },
    "title": {
      "it": "Procedura di segreteria completa: IT → EN",
      "en": "Complete secretarial SOP: Italian to English",
      "fr": "Procédure de secrétariat complète : italien vers anglais",
      "es": "Procedimiento de secretaría completo: italiano a inglés"
    },
    "context": {
      "it": "Una professionista italiana deve condividere con un referente estero la procedura completa per rispondere ai clienti già in carico e registrare i casi che richiedono una verifica.",
      "en": "An Italian professional needs an entire English operating procedure for an overseas manager coordinating customer correspondence in Italy.",
      "fr": "Une professionnelle italienne transmet sa procédure intégrale à un responsable étranger.",
      "es": "Una profesional italiana comparte un procedimiento completo con un responsable extranjero."
    },
    "source": [
      "PROCEDURA OPERATIVA — GESTIONE DELLE RICHIESTE SCRITTE\nScopo: assicurare un trattamento coerente delle email ricevute da clienti già acquisiti, distinguendo le attività di segreteria dalle decisioni riservate al responsabile. La procedura si applica alle richieste organizzative, agli appuntamenti e agli aggiornamenti su prestazioni già concordate. Non comprende acquisizione clienti, telemarketing, contabilità né fatturazione.",
      "1. APERTURA DELLA PRATICA\nAl ricevimento di un messaggio, registrare data, oggetto, riferimento della pratica e persona incaricata. Evitare di riportare nel registro dati personali non pertinenti. Verificare se esiste già una conversazione sullo stesso tema, così da non duplicare le attività. Identificare subito eventuali scadenze effettive e le fonti disponibili.",
      "2. CONTROLLO DELLE INFORMAZIONI\nConsultare il documento approvato più recente, ma non presumere che la data di modifica coincida con l'approvazione. Se un calendario non mostra una fascia confermata o un ordine non riporta lo stato di spedizione, indicare chiaramente che la verifica è ancora necessaria. Non completare i campi vuoti sulla base di ipotesi.",
      "3. PREPARAZIONE DELLA RISPOSTA\nRedigere un testo chiaro, cortese e coerente con la comunicazione aziendale. La risposta deve riconoscere la richiesta specifica, distinguere i fatti accertati dai punti aperti e spiegare il prossimo passaggio. Prezzi, rimborsi, modifiche delle condizioni e altre decisioni commerciali richiedono l'autorizzazione del referente.",
      "4. APPROVAZIONE, INVIO E CHIUSURA\nSalvare la bozza con un numero di versione, verificare destinatario e allegati e inoltrarla per approvazione quando previsto. Registrare l'eventuale invio soltanto dopo la sua effettiva esecuzione da parte della persona autorizzata. Chiudere la pratica quando la risposta e le attività successive risultano completate; in caso contrario, assegnare un controllo con responsabile e data.\nRevisione della procedura: il responsabile approva gli aggiornamenti e verifica periodicamente le eccezioni ricorrenti."
    ],
    "target": [
      "STANDARD OPERATING PROCEDURE — HANDLING WRITTEN ENQUIRIES\nPurpose: provide consistent responses to existing customers while keeping secretarial tasks separate from decisions reserved for the business owner. This procedure covers routine organisational enquiries, appointments and updates on previously agreed services. It does not include customer acquisition, cold calling, accounting or invoicing.",
      "1. OPEN THE CASE\nWhen a message arrives, record the date, subject, case reference and assigned colleague. Do not copy irrelevant personal information into the log. Check whether an earlier conversation already covers the same issue, so that work is not duplicated. Identify any genuine deadlines and the sources available for checking the request.",
      "2. VERIFY THE INFORMATION\nConsult the latest approved document, but do not assume that the most recently edited file has been signed off. If the calendar does not show a confirmed slot, or an order record lacks a dispatch status, state clearly that further checks are needed. Do not fill in missing information by guesswork.",
      "3. DRAFT THE REPLY\nWrite clearly and courteously, using the organisation's agreed tone of voice. The reply should acknowledge the specific question, distinguish verified facts from outstanding points and explain the next action. Prices, refunds, changes to agreed terms and other commercial decisions require approval from the responsible person.",
      "4. APPROVAL, SENDING AND CLOSURE\nSave the draft with a version number, check the recipient and attachments, and submit it for approval where required. Record a message as sent only once the authorised person has actually sent it. Close the case when the reply and any agreed follow-up have been completed; otherwise, schedule a review with a named owner and date.\nProcedure review: the business owner approves updates and periodically checks recurring exceptions."
    ],
    "terminology": [
      {
        "source": "gestione delle richieste scritte",
        "target": "handling written enquiries",
        "explanation": {
          "it": "Inglese britannico adatto a un procedimento interno.",
          "en": "Natural British English for an operating procedure.",
          "fr": "Anglais britannique idiomatique.",
          "es": "Inglés británico natural."
        }
      },
      {
        "source": "inoltrarla per approvazione",
        "target": "submit it for approval",
        "explanation": {
          "it": "Rende esplicito il passaggio autorizzativo senza attribuire l'invio.",
          "en": "Distinguishes approval from sending.",
          "fr": "Distingue validation et expédition.",
          "es": "Distingue aprobación y envío."
        }
      },
      {
        "source": "data di controllo",
        "target": "review date",
        "explanation": {
          "it": "Termine operativo più chiaro di «control date».",
          "en": "The appropriate workflow term.",
          "fr": "Terme courant de suivi.",
          "es": "Término natural de seguimiento."
        }
      }
    ],
    "method": {
      "it": "Traduzione integrale di una procedura con registro tecnico chiaro, numerazione invariata e inglese britannico.",
      "en": "Full British English SOP translation with consistent structure and controlled operational terminology.",
      "fr": "Traduction intégrale en anglais britannique, structure et responsabilités conservées.",
      "es": "Traducción completa al inglés británico con estructura consistente."
    },
    "review": {
      "it": "Controllate l'intera catena presa in carico–verifica–bozza–approvazione–chiusura e l'esclusione delle attività contabili o commerciali.",
      "en": "Verify the entire intake-to-closure workflow and professional service boundaries.",
      "fr": "Contrôle des étapes, des validations et des limites.",
      "es": "Revisión de las etapas, autorizaciones y límites."
    },
    "output": {
      "it": "Procedura italiana completa, traduzione inglese completa e note di terminologia.",
      "en": "Complete Italian SOP, full English translation and annotated terminology.",
      "fr": "Procédure italienne et anglaise intégrales avec commentaires.",
      "es": "Procedimientos italiano e inglés completos con notas."
    }
  },
  {
    "id": "it-fr-complete-meeting-followup-package",
    "direction": "IT-FR",
    "domain": {
      "it": "Riepilogo riunione e comunicazioni con la Francia",
      "en": "Meeting minutes and French-language follow-up",
      "fr": "Compte rendu de réunion et correspondance",
      "es": "Acta de reunión y correspondencia francesa"
    },
    "title": {
      "it": "Verbale e follow-up completo: IT → FR",
      "en": "Complete meeting minutes: Italian to French",
      "fr": "Compte rendu complet : italien vers français",
      "es": "Acta y seguimiento completos: italiano a francés"
    },
    "context": {
      "it": "Un'azienda italiana prepara una comunicazione di follow-up per un interlocutore francese già in contatto, con decisioni e materiali da verificare prima di rendere definitivi i prossimi passi.",
      "en": "An Italian business requires full French-language meeting minutes and a follow-up email for an existing French counterpart, carefully distinguishing proposals from approvals.",
      "fr": "Une entreprise italienne transmet un compte rendu et un courriel de suivi complets en français.",
      "es": "Una empresa italiana necesita un acta y un correo completo en francés."
    },
    "source": [
      "OGGETTO: Riepilogo incontro di coordinamento — attività e conferme\nBuongiorno,\ngrazie per il confronto dedicato all'avanzamento delle attività già concordate. Di seguito trovi il riepilogo operativo, preparato per verificare che decisioni, documenti e responsabilità siano stati riportati correttamente. Ti chiediamo di segnalare eventuali correzioni prima della condivisione della versione definitiva.",
      "1. STATO DEI MATERIALI\nAbbiamo esaminato l'indice dei documenti attualmente condivisi. La presentazione generale è disponibile nella versione approvata; la scheda relativa alle modalità di assistenza deve invece essere verificata con il referente italiano, perché circolano due file con indicazioni differenti. Fino alla conferma non utilizzeremo la bozza come fonte definitiva.",
      "2. AZIONI PROPOSTE\nIl gruppo italiano preparerà una tabella delle informazioni da chiarire; il referente francese potrà annotare le domande emerse durante l'incontro. La proposta di calendario per il prossimo controllo è ancora da approvare e non viene presentata come appuntamento fissato. Eventuali modifiche ai servizi o alle condizioni dovranno essere autorizzate dalle persone responsabili.",
      "3. COMUNICAZIONI CON I CLIENTI\nPer le richieste provenienti da clienti già in gestione in Italia utilizzeremo una risposta scritta in italiano, con riferimenti precisi al caso. Se mancano dati verificati, la risposta indicherà quali controlli sono in corso. Non comunicheremo prezzi, nuove disponibilità o scadenze che non risultino approvati.",
      "4. PROSSIMI PASSI\nTi chiediamo di confermare quali versioni documentali considerare definitive e chi dovrà validare la successiva comunicazione. Dopo la tua risposta aggiorneremo il riepilogo e predisporremo le bozze necessarie, lasciando ben distinti i compiti proposti da quelli effettivamente autorizzati.\nGrazie per la collaborazione.\nCordiali saluti,\nSegreteria organizzativa\nStato: riepilogo predisposto per revisione, non inviato."
    ],
    "target": [
      "OBJET : Compte rendu de notre réunion de coordination — actions et validations\nBonjour,\nMerci pour notre échange consacré à l'avancement des activités déjà convenues. Vous trouverez ci-dessous le compte rendu opérationnel, préparé pour vérifier que les décisions, les documents et les responsabilités ont bien été retranscrits. N'hésitez pas à nous signaler les corrections nécessaires avant la diffusion de la version définitive.",
      "1. ÉTAT DES DOCUMENTS\nNous avons passé en revue la liste des documents actuellement partagés. La présentation générale est disponible dans sa version approuvée. En revanche, la fiche relative aux modalités d'assistance doit encore être vérifiée auprès du responsable italien, car deux fichiers contiennent des indications différentes. Nous n'utiliserons pas le brouillon comme source définitive tant que ce point n'aura pas été clarifié.",
      "2. ACTIONS PROPOSÉES\nL'équipe italienne préparera un tableau des informations à préciser ; l'interlocuteur français pourra y ajouter les questions soulevées pendant la réunion. La proposition de calendrier pour le prochain point de suivi reste soumise à validation : il ne s'agit pas d'un rendez-vous confirmé. Toute modification des prestations ou des conditions devra être approuvée par les personnes habilitées.",
      "3. ÉCHANGES AVEC LES CLIENTS\nPour les demandes de clients déjà suivis en Italie, nous préparerons une réponse écrite en italien, en rappelant précisément la référence du dossier. Si certaines informations ne sont pas vérifiées, le message indiquera les contrôles en cours. Nous ne communiquerons ni tarif, ni nouvelle disponibilité, ni échéance qui n'ait été approuvée.",
      "4. PROCHAINES ÉTAPES\nMerci de nous confirmer les versions documentaires à retenir ainsi que la personne chargée de valider la prochaine communication. Dès votre retour, nous actualiserons le compte rendu et préparerons les projets de messages utiles, en distinguant clairement les tâches proposées de celles déjà autorisées.\nMerci de votre collaboration.\nBien cordialement,\nSecrétariat organisationnel\nStatut : compte rendu préparé pour relecture, non envoyé."
    ],
    "terminology": [
      {
        "source": "riepilogo operativo",
        "target": "compte rendu opérationnel",
        "explanation": {
          "it": "Termine francese professionale per una sintesi dopo la riunione.",
          "en": "Natural French meeting-minutes terminology.",
          "fr": "Terme usuel en contexte professionnel francophone.",
          "es": "Término natural en ámbito profesional."
        }
      },
      {
        "source": "referente",
        "target": "responsable / interlocuteur",
        "explanation": {
          "it": "La scelta dipende dalla responsabilità effettiva descritta.",
          "en": "Role-dependent rather than literal translation.",
          "fr": "Le terme varie selon le rôle.",
          "es": "Depende de la función de la persona."
        }
      },
      {
        "source": "appuntamento fissato",
        "target": "rendez-vous confirmé",
        "explanation": {
          "it": "Evita di suggerire che una proposta sia un impegno definitivo.",
          "en": "Keeps proposed slots distinct from confirmed meetings.",
          "fr": "Distingue proposition et confirmation.",
          "es": "Distingue propuesta y reunión confirmada."
        }
      }
    ],
    "method": {
      "it": "Francese professionale con registro di cortesia coerente, struttura integra e passaggi di approvazione mantenuti.",
      "en": "Complete formal French localisation retaining decisions, status and owner approval.",
      "fr": "Français naturel et complet avec responsabilités préservées.",
      "es": "Francés completo y natural con autorizaciones conservadas."
    },
    "review": {
      "it": "Verificati i riferimenti a versioni, follow-up, approvazioni e condizioni commerciali; non viene dichiarata una riunione realmente svolta.",
      "en": "Check status, document versions and the absence of unsupported scheduling claims.",
      "fr": "Vérification des versions et des validations.",
      "es": "Control de versiones, plazos y aprobaciones."
    },
    "output": {
      "it": "Riepilogo italiano completo, traduzione francese integrale e glossario commentato.",
      "en": "Complete Italian meeting record, full French target and terminology notes.",
      "fr": "Compte rendu italien et français intégraux, avec glossaire.",
      "es": "Acta italiana y francesa completas con glosario."
    }
  },
  {
    "id": "it-es-complete-service-information-and-faq",
    "direction": "IT-ES",
    "domain": {
      "it": "Scheda servizi e assistenza clienti",
      "en": "Service information and customer help",
      "fr": "Information sur les prestations et relation client",
      "es": "Información sobre servicios y atención al cliente"
    },
    "title": {
      "it": "Pagina informativa completa: IT → ES",
      "en": "Complete service-information page: Italian to Spanish",
      "fr": "Page de services complète : italien vers espagnol",
      "es": "Página completa de servicios: italiano a español"
    },
    "context": {
      "it": "Un servizio professionale italiano desidera fornire agli interlocutori ispanofoni una pagina chiara sulle modalità di assistenza, sulla gestione delle richieste e sui limiti dell'incarico.",
      "en": "An Italian professional service needs a complete Spanish information page for existing customers and overseas counterparts.",
      "fr": "Un service italien adapte une page informative complète pour ses interlocuteurs hispanophones.",
      "es": "Un servicio italiano adapta toda una página informativa para interlocutores hispanohablantes."
    },
    "source": [
      "COME FUNZIONA L'ASSISTENZA ORGANIZZATIVA\nIl servizio di assistenza organizzativa aiuta professionisti e piccole attività a gestire comunicazioni scritte, appuntamenti, documenti e richieste relative ad attività già avviate. L'obiettivo è rendere più chiaro chi deve occuparsi di ogni passaggio e quali informazioni servono prima di dare una risposta. Le attività vengono definite per iscritto e svolte nei limiti concordati.",
      "GESTIONE DELLE COMUNICAZIONI\nPossiamo predisporre bozze di email professionali, classificare le richieste ricevute e organizzare un registro delle attività da seguire. Prima di rispondere, verifichiamo le informazioni disponibili e individuiamo eventuali punti da sottoporre al responsabile. Non comunichiamo prezzi, date di consegna o modifiche contrattuali senza una fonte autorizzata.",
      "AGENDA E DOCUMENTI\nPer gli appuntamenti possiamo proporre fasce orarie risultanti da un calendario condiviso, preparare inviti e tenere traccia delle conferme. Per i documenti possiamo ordinare cartelle, applicare convenzioni ai nomi dei file e separare bozze e versioni approvate. Ogni accesso deve essere concesso in funzione delle attività necessarie; i documenti riservati possono rimanere fuori dall'incarico.",
      "DOMANDE FREQUENTI\nDevo condividere tutte le mie credenziali? No. Gli accessi vanno concordati e, quando disponibili, assegnati mediante account o autorizzazioni dedicate.\nPosso chiedere supporto per clienti che parlano italiano? Sì, per la corrispondenza e l'organizzazione delle pratiche nel perimetro concordato.\nIl servizio comprende fatture o contabilità? No. Queste attività spettano ai professionisti o ai referenti competenti.",
      "COME RICHIEDERE UN PREVENTIVO\nDescrivi le attività che vorresti delegare, gli strumenti che utilizzi e il volume indicativo delle richieste. Ti verranno chieste solo le informazioni necessarie per definire il lavoro e preparare un preventivo scritto. Le modalità operative e le autorizzazioni saranno concordate prima dell'avvio.\nContatto: utilizza il modulo di richiesta informazioni disponibile sul sito."
    ],
    "target": [
      "CÓMO FUNCIONA EL APOYO ORGANIZATIVO\nEl servicio de apoyo organizativo ayuda a profesionales y pequeños negocios a gestionar comunicaciones escritas, citas, documentos y solicitudes relacionadas con actividades ya iniciadas. Su objetivo es aclarar quién se encarga de cada paso y qué información hace falta antes de responder. Las tareas se definen por escrito y se realizan dentro del alcance acordado.",
      "GESTIÓN DE LAS COMUNICACIONES\nPodemos preparar borradores de correos profesionales, clasificar las solicitudes recibidas y organizar un registro de tareas pendientes. Antes de responder, comprobamos la información disponible e identificamos los puntos que debe revisar la persona responsable. No comunicamos precios, fechas de entrega ni cambios contractuales sin una fuente autorizada.",
      "AGENDA Y DOCUMENTOS\nEn cuanto a las citas, podemos proponer franjas disponibles según un calendario compartido, preparar invitaciones y hacer seguimiento de las confirmaciones. Para los documentos, podemos organizar carpetas, establecer criterios para nombrar los archivos y distinguir borradores de versiones aprobadas. Los permisos de acceso deben limitarse a lo necesario para el trabajo; la documentación confidencial puede quedar fuera del encargo.",
      "PREGUNTAS FRECUENTES\n¿Tengo que compartir todas mis contraseñas? No. Los accesos deben acordarse y, cuando sea posible, asignarse mediante cuentas o permisos específicos.\n¿Puedo solicitar apoyo para clientes que hablan italiano? Sí, para la correspondencia y la organización de expedientes dentro del alcance acordado.\n¿El servicio incluye facturación o contabilidad? No. Esas tareas corresponden a los profesionales o responsables autorizados.",
      "CÓMO SOLICITAR UN PRESUPUESTO\nDescribe las tareas que te gustaría delegar, las herramientas que utilizas y el volumen aproximado de consultas. Solo te pediremos la información necesaria para definir el trabajo y preparar una propuesta por escrito. Acordaremos las condiciones operativas y los permisos antes de empezar.\nContacto: utiliza el formulario de solicitud de información disponible en la web."
    ],
    "terminology": [
      {
        "source": "assistenza organizzativa",
        "target": "apoyo organizativo",
        "explanation": {
          "it": "Evita l'uso eccessivamente ampio di «asistencia» senza contesto.",
          "en": "Clear term for administrative and operational coordination.",
          "fr": "Expression précise dans ce contexte.",
          "es": "Término adecuado para tareas organizativas."
        }
      },
      {
        "source": "pratiche",
        "target": "expedientes / solicitudes",
        "explanation": {
          "it": "Varia in base al contesto della comunicazione, senza traduzione rigida.",
          "en": "Context-sensitive rendering for cases and requests.",
          "fr": "Traduction selon le contexte.",
          "es": "Equivalente natural según el caso."
        }
      },
      {
        "source": "preventivo scritto",
        "target": "propuesta por escrito / presupuesto",
        "explanation": {
          "it": "Mantiene l'idea di definizione preventiva dei costi senza evocare fatturazione.",
          "en": "Preserves the meaning of an agreed written quotation.",
          "fr": "Préserve la notion de devis écrit.",
          "es": "Mantiene el sentido de presupuesto acordado."
        }
      }
    ],
    "method": {
      "it": "Adattamento spagnolo integrale di una pagina informativa, mantenendo coerenza tra attività offerte, esclusioni e richiesta di preventivo.",
      "en": "Complete Spanish localisation preserving scope, exclusions and a written quotation CTA.",
      "fr": "Adaptation complète en espagnol avec périmètre et limites cohérents.",
      "es": "Adaptación española integral con servicios, límites y CTA coherentes."
    },
    "review": {
      "it": "Controllo grammaticale, terminologico, coerenza dei pronomi e assenza di servizi non offerti.",
      "en": "Check grammar, register, consistency and scope of services.",
      "fr": "Vérification du registre et des limites.",
      "es": "Revisión de estilo, términos y alcance. "
    },
    "output": {
      "it": "Pagina italiana integrale, versione spagnola completa e note di traduzione.",
      "en": "Complete Italian source and Spanish target page with commented choices.",
      "fr": "Page italienne et espagnole intégrales.",
      "es": "Página italiana y española completas con glosario."
    }
  }
];
