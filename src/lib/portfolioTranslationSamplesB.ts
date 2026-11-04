import type { TranslationDeepCase } from "./portfolioDeepTypes";

/** Original fiction, not commissioned translation jobs or customer correspondence. */
export const TRANSLATION_SAMPLES_B: TranslationDeepCase[] = [
  {
    "id": "it-en-existing-order",
    "direction": "IT-EN",
    "domain": {
      "it": "Comunicazioni B2B e ordini",
      "en": "Existing-order B2B email",
      "fr": "Courriel B2B de suivi",
      "es": "Correo B2B de pedidos"
    },
    "title": {
      "it": "Aggiornamento ordine per partner inglese IT → EN",
      "en": "Existing-order update: Italian to English",
      "fr": "Suivi de commande : italien vers anglais",
      "es": "Actualización de pedido: italiano a inglés"
    },
    "context": {
      "it": "Un fornitore fittizio italiano risponde a un cliente estero già acquisito su una spedizione in attesa di conferma. Il testo deve evitare promesse di consegna non autorizzate.",
      "en": "A fictional Italian supplier responds to an existing overseas customer without promising an unverified shipping date.",
      "fr": "Un fournisseur italien fictif répond à un client international existant sans promettre une date non confirmée.",
      "es": "Un proveedor italiano ficticio informa a un cliente extranjero actual sin inventar fechas."
    },
    "source": [
      "Oggetto: aggiornamento sull’ordine IT-4082. Buongiorno, abbiamo ricevuto la sua richiesta relativa all’ordine di accessori per l’allestimento del punto vendita. Le confermiamo che due delle tre referenze sono già disponibili; la terza è in attesa della verifica finale del reparto produzione.",
      "Non possiamo ancora confermare la data di spedizione complessiva, perché il calendario del produttore deve essere aggiornato. Preferiamo quindi inviarle una comunicazione affidabile dopo il controllo, invece di indicare una data provvisoria che potrebbe cambiare. Per il momento non è richiesta alcuna azione da parte sua.",
      "Se la sua organizzazione necessita di un invio parziale, può rispondere a questa email. Verificheremo con il responsabile commerciale se questa possibilità è prevista dalle condizioni dell’ordine e le comunicheremo l’esito prima di apportare modifiche. Cordiali saluti, Ufficio assistenza ordini."
    ],
    "target": [
      "Subject: Update on order IT-4082. Dear Customer, thank you for your enquiry about your order for retail display accessories. We can confirm that two of the three items are available. The third is awaiting a final check by our production team.",
      "We are not yet able to confirm a dispatch date for the full order, as the manufacturer's schedule still needs to be updated. We would therefore prefer to provide a reliable update after this check rather than give you a provisional date that might change. No action is required on your part at this stage.",
      "If your team would benefit from a partial shipment, please reply to this email. We will ask the commercial manager whether this option is available under your order terms and will confirm the outcome before making any changes. Kind regards, Order Support Team."
    ],
    "terminology": [
      {
        "source": "data di spedizione",
        "target": "dispatch date",
        "explanation": {
          "it": "«Dispatch» riguarda la partenza della merce, non l’arrivo.",
          "en": "Dispatch refers to despatch, not delivery.",
          "fr": "La date d’expédition ne doit pas devenir une date de livraison.",
          "es": "Fecha de expedición, no de entrega."
        }
      },
      {
        "source": "invio parziale",
        "target": "partial shipment",
        "explanation": {
          "it": "Termine commerciale preciso, senza implicare gratuità o condizioni non specificate.",
          "en": "Accurate operational term without suggesting free delivery.",
          "fr": "Terme commercial sans conditions inventées.",
          "es": "Expresión de envío parcial sin condiciones inventadas."
        }
      },
      {
        "source": "non è richiesta alcuna azione",
        "target": "no action is required",
        "explanation": {
          "it": "Formula chiara e naturale nel customer service britannico.",
          "en": "Natural customer-service phrasing.",
          "fr": "Formulation claire pour la relation client.",
          "es": "Frase natural de atención al cliente."
        }
      }
    ],
    "method": {
      "it": "Testo in inglese professionale britannico con registro neutro, differenza tra spedizione e consegna e approvazione delle modifiche preservate.",
      "en": "Clear British business English that preserves dispatch/delivery differences and approval conditions.",
      "fr": "Anglais professionnel britannique, respect de l’incertitude et des autorisations.",
      "es": "Inglés profesional británico y respeto de autorizaciones."
    },
    "review": {
      "it": "Controllati numero ordine, stato delle tre referenze, assenza di tempi promessi e natura condizionata della spedizione parziale.",
      "en": "Checks cover order ID, three-item status, unconfirmed timing and conditional partial shipment.",
      "fr": "Vérification de la référence et des délais non confirmés.",
      "es": "Se verifican referencia y plazos no confirmados."
    },
    "output": {
      "it": "Email integrale IT → EN, terminologia di assistenza ordini e checklist di approvazione.",
      "en": "Full IT-to-EN email with terminology and approval checks.",
      "fr": "Courriel complet IT → EN et contrôles.",
      "es": "Correo completo IT → EN y revisión."
    }
  },
  {
    "id": "en-it-professional-faq",
    "direction": "EN-IT",
    "domain": {
      "it": "FAQ di assistenza e servizi",
      "en": "Existing-customer help centre",
      "fr": "Centre d’aide client",
      "es": "Centro de ayuda"
    },
    "title": {
      "it": "FAQ di supporto per clienti italiani EN → IT",
      "en": "Help-centre FAQ: English to Italian",
      "fr": "FAQ clients : anglais vers italien",
      "es": "FAQ de clientes: inglés a italiano"
    },
    "context": {
      "it": "Un servizio immaginario SaaS con clienti in Italia vuole chiarire quando viene registrata una richiesta, come funzionano le notifiche e quali dati non inviare.",
      "en": "A fictional SaaS provider adapts support FAQs for existing Italian users, with clear privacy and access instructions.",
      "fr": "Un prestataire SaaS fictif adapte sa FAQ pour ses clients italiens existants.",
      "es": "Un proveedor SaaS ficticio adapta sus preguntas frecuentes para Italia."
    },
    "source": [
      "How do I know my request has been received? When you submit the support form, a confirmation screen displays a reference number. Keep that number for future enquiries. The confirmation means that the form has been recorded; it does not mean that a support specialist has reviewed it.",
      "Can I change the email address used for updates? Yes. Open your account preferences and select Contact details. You may be asked to confirm the new address before notifications can be sent to it. Changing this address does not automatically change the email used to sign in.",
      "What should I include in a support request? Describe the issue, indicate the steps you took before it occurred and add a screenshot if it helps. Do not share passwords, payment card numbers or confidential third-party data. If your request relates to someone else's account, ask the account owner to contact support directly."
    ],
    "target": [
      "Come faccio a sapere se la richiesta è stata ricevuta? Dopo l’invio del modulo di assistenza, compare una schermata di conferma con un numero di riferimento. Conservalo per eventuali comunicazioni successive. La conferma indica che il modulo è stato registrato, non che un operatore abbia già esaminato la richiesta.",
      "Posso modificare l’indirizzo email per gli aggiornamenti? Sì. Apri le preferenze dell’account e seleziona Dati di contatto. Potrebbe esserti chiesto di verificare il nuovo indirizzo prima di attivare le notifiche. Questa modifica non aggiorna automaticamente l’email utilizzata per accedere.",
      "Quali informazioni devo inserire nella richiesta? Descrivi il problema, indica quali passaggi hai eseguito prima che si verificasse e, se utile, allega una schermata. Non condividere password, numeri di carte di pagamento o dati riservati di terzi. Se la richiesta riguarda l’account di un’altra persona, chiedi al titolare dell’account di contattare direttamente l’assistenza."
    ],
    "terminology": [
      {
        "source": "recorded",
        "target": "registrato",
        "explanation": {
          "it": "Distinto da «preso in carico», che presupporrebbe una verifica umana.",
          "en": "Not confused with a human review.",
          "fr": "Différent d’une prise en charge humaine.",
          "es": "No equivale a una revisión humana."
        }
      },
      {
        "source": "email used to sign in",
        "target": "email utilizzata per accedere",
        "explanation": {
          "it": "La distinzione tra indirizzo notifiche e login evita un’inferenza tecnica errata.",
          "en": "Separates notification contact from login credentials.",
          "fr": "Sépare contact et identifiants.",
          "es": "Distingue correo de contacto y acceso."
        }
      }
    ],
    "method": {
      "it": "Ho mantenuto una domanda per ogni problema e risposte facilmente consultabili, eliminando calchi della terminologia informatica.",
      "en": "Problem-based questions with clear, idiomatic Italian answers.",
      "fr": "Questions orientées problèmes et réponses naturelles.",
      "es": "Preguntas por problemas y respuestas en italiano natural."
    },
    "review": {
      "it": "Verificati i limiti della conferma, delle modifiche account e della raccolta di dati sensibili; controllata coerenza delle etichette UI.",
      "en": "Checks cover confirmation status, account settings and sensitive-data warnings.",
      "fr": "Contrôle des statuts de confirmation, des paramètres du compte et des avertissements de confidentialité.",
      "es": "Se verifican estados y advertencias de datos sensibles."
    },
    "output": {
      "it": "Tre FAQ complete pronte per essere adattate alle etichette reali della piattaforma.",
      "en": "Three full FAQs ready for final product-UI matching.",
      "fr": "Trois FAQ à valider avec l’interface réelle.",
      "es": "Tres preguntas completas para ajustar al producto."
    }
  },
  {
    "id": "fr-it-workshop-details",
    "direction": "FR-IT",
    "domain": {
      "it": "Comunicazioni per corsi",
      "en": "Professional webinar communications",
      "fr": "Communication sur les formations",
      "es": "Comunicación de cursos"
    },
    "title": {
      "it": "Programma formativo e iscrizioni FR → IT",
      "en": "Training course information: French to Italian",
      "fr": "Formation et inscriptions : français vers italien",
      "es": "Programa e inscripción: francés a italiano"
    },
    "context": {
      "it": "Un ente formativo francese immaginario comunica a professionisti italiani contenuto, durata, condizioni di partecipazione e limiti degli attestati.",
      "en": "A fictional French training provider needs Italian information on course duration, enrolment and certificates.",
      "fr": "Un organisme fictif de formation explique en italien les conditions d’un atelier professionnel.",
      "es": "Una entidad ficticia francesa explica condiciones de un curso en italiano."
    },
    "source": [
      "Atelier : organiser les échanges écrits avec les clients existants. Cette formation à distance s’adresse aux indépendants et aux petites équipes souhaitant améliorer leur organisation quotidienne. Elle présente des méthodes de classement des demandes, de préparation des réponses et de suivi des décisions en attente.",
      "Le programme comprend trois séances en direct de deux heures, soit six heures au total. Les participants reçoivent des exercices pratiques et une liste de contrôle. Les séances ne sont pas enregistrées ; la participation nécessite un ordinateur et une connexion Internet stable. Aucun logiciel payant n’est imposé.",
      "Les inscriptions sont ouvertes dans la limite des places disponibles. Le calendrier final et les modalités de paiement sont communiqués avant confirmation de l'inscription. L’atelier ne délivre pas de certification professionnelle. Pour toute question, contactez le secrétariat par écrit avant de transmettre des informations personnelles supplémentaires."
    ],
    "target": [
      "Laboratorio: organizzare le comunicazioni scritte con i clienti già acquisiti. Il corso online si rivolge a liberi professionisti e piccoli team che desiderano gestire meglio le attività quotidiane. Presenta metodi per classificare le richieste, preparare le risposte e monitorare le decisioni ancora in sospeso.",
      "Il programma prevede tre incontri in diretta di due ore ciascuno, per un totale di sei ore. I partecipanti ricevono esercitazioni pratiche e una checklist. Gli incontri non vengono registrati; per partecipare sono necessari un computer e una connessione Internet stabile. Non è richiesto alcun software a pagamento.",
      "Le iscrizioni sono aperte fino a esaurimento dei posti. Il calendario definitivo e le modalità di pagamento vengono comunicati prima della conferma dell’iscrizione. Il laboratorio non rilascia certificazioni professionali. Per qualsiasi domanda, contatta la segreteria per iscritto prima di inviare ulteriori dati personali."
    ],
    "terminology": [
      {
        "source": "atelier",
        "target": "laboratorio",
        "explanation": {
          "it": "Evidenzia il carattere pratico, senza suggerire un laboratorio scientifico.",
          "en": "Signals practical training, not a physical laboratory.",
          "fr": "Restitue le caractère pratique.",
          "es": "Expresa el carácter práctico."
        }
      },
      {
        "source": "séances en direct",
        "target": "incontri in diretta",
        "explanation": {
          "it": "Non equivale a moduli registrati o on demand.",
          "en": "Not recorded modules.",
          "fr": "Ne confond pas direct et replay.",
          "es": "No implica grabaciones."
        }
      }
    ],
    "method": {
      "it": "Struttura informativa invariata: destinatari, contenuti, durata, requisiti, iscrizioni e certificazione.",
      "en": "Preserves audience, course format, time, access and certification boundaries.",
      "fr": "Respecte programme, durée et conditions.",
      "es": "Respeta programa, duración y requisitos."
    },
    "review": {
      "it": "Controllo numerico 3 × 2 = 6 ore; nessun attestato inventato; nessun requisito software aggiunto.",
      "en": "Verified total duration and absence of certificate or required paid tools.",
      "fr": "Durée de six heures vérifiée, sans certificat inventé.",
      "es": "Se comprueba la duración y que no se ofrece certificado."
    },
    "output": {
      "it": "Scheda corso FR → IT completa e pronta per approvazione organizzativa.",
      "en": "Complete Italian course description for organiser review.",
      "fr": "Fiche de cours italienne à valider.",
      "es": "Ficha italiana del curso para revisar."
    }
  },
  {
    "id": "it-fr-product-order-guide",
    "direction": "IT-FR",
    "domain": {
      "it": "Catalogo e guida ordini",
      "en": "Product catalogue and ordering guide",
      "fr": "Catalogue et guide de commande",
      "es": "Catálogo y pedidos"
    },
    "title": {
      "it": "Scheda prodotto e ordini IT → FR",
      "en": "Product and ordering guide: Italian to French",
      "fr": "Fiche produit et commandes : italien vers français",
      "es": "Ficha de producto y pedidos: italiano a francés"
    },
    "context": {
      "it": "Una piccola impresa artigiana italiana immaginaria deve spiegare a rivenditori francofoni materiali, quantitativi e condizioni di controllo delle scorte senza inventare impegni logistici.",
      "en": "A fictional Italian craft producer needs French product and order details for existing resellers, without invented stock guarantees.",
      "fr": "Une entreprise artisanale italienne fictive prépare une fiche française pour ses revendeurs existants.",
      "es": "Una empresa artesanal ficticia prepara información francesa para distribuidores existentes."
    },
    "source": [
      "Set di sottobicchieri Selce — ceramica smaltata per la tavola. Ogni confezione contiene quattro pezzi con superficie opaca e leggere variazioni di tonalità dovute alla lavorazione. Diametro indicativo di ciascun pezzo: 9 cm. La tonalità può differire leggermente dalle fotografie del catalogo.",
      "Pulire con un panno morbido e umido. Evitare detergenti abrasivi e urti. I sottobicchieri sono destinati all’uso domestico; non sono adatti alla cottura né al contatto diretto con fiamme o superfici ad alta temperatura. Le indicazioni si riferiscono esclusivamente al prodotto descritto.",
      "Per i rivenditori già accreditati, le disponibilità vengono confermate dopo il controllo del magazzino. L’invio di un modulo d’ordine non costituisce accettazione definitiva: il referente commerciale verifica quantità, variante e condizioni approvate. In caso di dubbi sulle finiture, richiedere informazioni prima di confermare il riepilogo."
    ],
    "target": [
      "Lot de sous-verres Selce — céramique émaillée pour la table. Chaque boîte contient quatre pièces à la surface mate, présentant de légères variations de teinte liées à la fabrication. Diamètre indicatif de chaque pièce : 9 cm. La couleur peut différer légèrement des photographies du catalogue.",
      "Nettoyer avec un chiffon doux et humide. Éviter les produits abrasifs et les chocs. Ces sous-verres sont destinés à un usage domestique ; ils ne conviennent ni à la cuisson ni au contact direct avec des flammes ou des surfaces très chaudes. Ces indications concernent exclusivement le produit décrit.",
      "Pour les revendeurs déjà agréés, la disponibilité est confirmée après vérification des stocks. L’envoi d’un bon de commande ne vaut pas acceptation définitive : le responsable commercial vérifie les quantités, la finition choisie et les conditions convenues. En cas de doute sur les finitions, merci de demander des précisions avant de valider le récapitulatif."
    ],
    "terminology": [
      {
        "source": "sottobicchieri",
        "target": "sous-verres",
        "explanation": {
          "it": "Termine francese naturale per il prodotto.",
          "en": "Natural target-market term.",
          "fr": "Terme exact en français.",
          "es": "Término francés correcto."
        }
      },
      {
        "source": "non costituisce accettazione definitiva",
        "target": "ne vaut pas acceptation définitive",
        "explanation": {
          "it": "Preserva il carattere non vincolante del modulo.",
          "en": "Preserves the distinction between request and acceptance.",
          "fr": "Conserve la distinction commerciale essentielle.",
          "es": "Preserva la diferencia entre solicitud y aceptación."
        }
      }
    ],
    "method": {
      "it": "Francese professionale rivolto a rivenditori, con misure, quantità, limiti d’uso e condizioni di conferma preservati.",
      "en": "Professional French for existing resellers with quantities, care limits and approval conditions intact.",
      "fr": "Français pour revendeurs, données techniques et conditions conservées.",
      "es": "Francés para distribuidores con datos y condiciones intactos."
    },
    "review": {
      "it": "Controllati quattro pezzi, 9 cm, superficie opaca, divieti d’uso e disponibilità da confermare.",
      "en": "Checks cover pack size, diameter, care warnings and stock confirmation.",
      "fr": "Contrôle du nombre, du diamètre et des réserves.",
      "es": "Se verifican unidades, diámetro y advertencias."
    },
    "output": {
      "it": "Scheda prodotto e istruzioni di ordine IT → FR, con note terminologiche.",
      "en": "French product sheet and order instructions.",
      "fr": "Fiche française avec consignes commerciales.",
      "es": "Ficha francesa e instrucciones comerciales."
    }
  },
  {
    "id": "es-it-existing-customer-onboarding",
    "direction": "ES-IT",
    "domain": {
      "it": "Comunicazioni postvendita",
      "en": "Existing-customer onboarding",
      "fr": "Accueil de clients existants",
      "es": "Atención postventa"
    },
    "title": {
      "it": "Attivazione del servizio ES → IT",
      "en": "Service activation email: Spanish to Italian",
      "fr": "Activation d’un service : espagnol vers italien",
      "es": "Activación del servicio: español a italiano"
    },
    "context": {
      "it": "Una società immaginaria spagnola presenta ai suoi clienti italiani già acquisiti i passaggi per accedere a un portale, distinguendo attivazione e conferma delle autorizzazioni.",
      "en": "A fictional Spanish provider explains access activation to existing Italian clients, without promising permissions before verification.",
      "fr": "Un prestataire espagnol fictif explique l’activation à ses clients italiens existants.",
      "es": "Una empresa ficticia española explica cómo acceder a su portal a clientes italianos actuales."
    },
    "source": [
      "Asunto: pasos para activar el acceso a su espacio de clientes. Buenos días: le confirmamos que hemos recibido la solicitud de acceso asociada a su empresa. Antes de habilitar las funciones compartidas, nuestro equipo debe comprobar qué usuarios figuran como autorizados por el responsable de la cuenta.",
      "En primer lugar, abra el enlace de activación que recibirá en el correo registrado. Después, compruebe que el nombre de su empresa aparezca correctamente. Si observa datos incorrectos, no continúe con la configuración: responda a este mensaje para que podamos revisar la información antes de modificarla.",
      "La recepción del enlace no significa que todos los permisos estén activos. Le enviaremos una confirmación cuando finalicen las comprobaciones necesarias. Por seguridad, no comparta su contraseña ni códigos de verificación con otras personas, aunque afirmen formar parte del equipo de asistencia. Muchas gracias por su colaboración."
    ],
    "target": [
      "Oggetto: come attivare l’accesso alla sua area clienti. Buongiorno, le confermiamo di aver ricevuto la richiesta di accesso associata alla sua azienda. Prima di abilitare le funzioni condivise, il nostro team deve verificare quali utenti risultano autorizzati dal responsabile dell’account.",
      "Per prima cosa, apra il collegamento di attivazione che riceverà all’indirizzo email registrato. Verifichi quindi che il nome dell’azienda sia riportato correttamente. Se nota informazioni errate, non prosegua con la configurazione: risponda a questo messaggio, così potremo controllare i dati prima di modificarli.",
      "La ricezione del collegamento non significa che tutti i permessi siano già attivi. Le invieremo una conferma dopo aver completato le verifiche necessarie. Per motivi di sicurezza, non condivida la password o i codici di verifica con altre persone, anche se dichiarano di far parte dell’assistenza. Grazie per la collaborazione."
    ],
    "terminology": [
      {
        "source": "habilitar las funciones compartidas",
        "target": "abilitare le funzioni condivise",
        "explanation": {
          "it": "Non confondere l'invio di un link con l'abilitazione dei permessi.",
          "en": "Activation link and permissions are distinct steps.",
          "fr": "Le lien ne vaut pas autorisation.",
          "es": "Recibir enlace no implica permisos activos."
        }
      },
      {
        "source": "responsable de la cuenta",
        "target": "responsabile dell’account",
        "explanation": {
          "it": "Ruolo autorizzativo reso coerente con il contesto digitale.",
          "en": "Accurate role description for business account access.",
          "fr": "Terme précis pour le responsable du compte.",
          "es": "Rol de autorización expresado correctamente."
        }
      }
    ],
    "method": {
      "it": "Ho preservato la sequenza operativa e il registro formale, rafforzando la chiarezza senza aggiungere nuove istruzioni tecniche.",
      "en": "Maintains the formal tone and access sequence without adding unsupported technical steps.",
      "fr": "Conserve les étapes et le vouvoiement.",
      "es": "Mantiene el orden de las instrucciones, el tratamiento formal y las condiciones de autorización."
    },
    "review": {
      "it": "Controllati limiti di accesso, comunicazione della conferma e avvertenze contro la condivisione di credenziali.",
      "en": "Checks cover permissions, confirmation messaging and credential safety.",
      "fr": "Contrôle des droits, confirmations et avertissements.",
      "es": "Se revisan los permisos, las confirmaciones de acceso y las advertencias para proteger las credenciales."
    },
    "output": {
      "it": "Email ES → IT completa, utilizzabile come dimostrazione di comunicazione postvendita.",
      "en": "Complete Italian activation email example.",
      "fr": "Courriel italien complet.",
      "es": "Correo italiano completo."
    }
  },
  {
    "id": "it-es-workshop-reminder",
    "direction": "IT-ES",
    "domain": {
      "it": "Comunicazioni corsi e webinar",
      "en": "Webinar participant communication",
      "fr": "Communication autour d’un webinaire",
      "es": "Comunicación de webinars"
    },
    "title": {
      "it": "Promemoria webinar IT → ES",
      "en": "Webinar reminder: Italian to Spanish",
      "fr": "Rappel de webinaire : italien vers espagnol",
      "es": "Recordatorio de seminario: italiano a español"
    },
    "context": {
      "it": "Un'organizzazione italiana immaginaria deve inviare in spagnolo un promemoria pratico a partecipanti già iscritti, senza promuovere nuove iscrizioni o attestati non previsti.",
      "en": "A fictional Italian organiser sends an accurate Spanish reminder to existing registrants, without recruitment or false certificates.",
      "fr": "Un organisateur italien fictif informe les participants hispanophones déjà inscrits.",
      "es": "Una entidad italiana ficticia recuerda el acceso a participantes ya inscritos."
    },
    "source": [
      "Oggetto: promemoria per il webinar di giovedì. Buongiorno, ti ricordiamo che sei già iscritto al webinar «Organizzare le richieste dei clienti», previsto per giovedì 12 novembre dalle 17:00 alle 18:30, ora italiana (Europe/Rome). L'incontro si svolgerà in diretta e non è prevista una registrazione da consultare in seguito.",
      "Il collegamento per partecipare sarà inviato separatamente all’indirizzo email utilizzato per l’iscrizione, dopo la verifica tecnica dell'organizzazione. Ti consigliamo di controllare la connessione qualche minuto prima dell’avvio e di tenere disponibili i materiali già condivisi. Non inviare password o credenziali all'assistenza.",
      "Se non puoi partecipare, rispondi a questa email per informare la segreteria. Eventuali informazioni sui materiali successivi saranno comunicate dopo l'incontro, se approvate dalla formatrice. Non è previsto il rilascio di un attestato professionale. Ti ringraziamo per la collaborazione."
    ],
    "target": [
      "Asunto: recordatorio del seminario web del jueves. Hola: te recordamos que ya estás inscrito en el seminario web «Organizar las solicitudes de los clientes», que tendrá lugar el jueves 12 de noviembre, de 17:00 a 18:30, hora de Italia (Europe/Rome). La sesión será en directo y no está prevista una grabación para verla más adelante.",
      "El enlace de acceso se enviará por separado a la dirección de correo utilizada durante la inscripción, una vez completada la comprobación técnica de la organización. Te recomendamos comprobar la conexión unos minutos antes de empezar y tener a mano los materiales que ya se hayan compartido. No envíes contraseñas ni credenciales al servicio de asistencia.",
      "Si no puedes asistir, responde a este correo para informar a la secretaría. Si la formadora lo autoriza, después de la sesión se comunicará qué materiales estarán disponibles. No se expedirá ningún certificado profesional. Gracias por tu colaboración."
    ],
    "terminology": [
      {
        "source": "promemoria",
        "target": "recordatorio",
        "explanation": {
          "it": "Termine neutro, adatto alla comunicazione organizzativa.",
          "en": "Natural reminder terminology.",
          "fr": "Terme de rappel approprié.",
          "es": "Expresión habitual y clara."
        }
      },
      {
        "source": "già iscritto",
        "target": "ya estás inscrito",
        "explanation": {
          "it": "Conserva la natura di messaggio a iscritti, non di promozione.",
          "en": "Keeps the message directed to existing registrants.",
          "fr": "Reste une communication pour inscrits.",
          "es": "No es publicidad ni captación."
        }
      }
    ],
    "method": {
      "it": "Spagnolo informativo e diretto; mantenuti data, orario e fuso, nonché la distinzione tra partecipazione e certificazione.",
      "en": "Accessible Spanish with accurate date, time zone and certification conditions.",
      "fr": "Espagnol clair, horaires et conditions conservés.",
      "es": "Español claro y fechas y condiciones correctas."
    },
    "review": {
      "it": "Il 12 novembre 2026 è giovedì; verificati fascia oraria, iscrizione già avvenuta, assenza di registrazione e attestati.",
      "en": "Checks include Thursday 12 November 2026, time zone, prior registration and no recording/certificate.",
      "fr": "Contrôle du jeudi 12 novembre 2026 et des limites.",
      "es": "Se verifica jueves 12 de noviembre de 2026, horario y ausencia de certificado."
    },
    "output": {
      "it": "Email promemoria IT → ES completa, con istruzioni di accesso e conferme da verificare prima dell’invio.",
      "en": "Complete Spanish webinar reminder for approval.",
      "fr": "Rappel espagnol complet à approuver.",
      "es": "Correo recordatorio en español para aprobar."
    }
  }
];
