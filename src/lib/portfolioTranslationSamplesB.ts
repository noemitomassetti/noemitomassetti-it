import type { TranslationDeepCase } from "./portfolioDeepTypes";

/** Public professional translation demonstrations: source language → Italian only. */
export const TRANSLATION_SAMPLES_B: TranslationDeepCase[] = [
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
        "Le iscrizioni sono aperte fino a esaurimento dei posti. Il calendario definitivo e le modalità di pagamento vengono comunicati prima della conferma dell’iscrizione. Il laboratorio non rilascia certificazioni professionali. Per qualsiasi domanda, contatti la segreteria per iscritto prima di inviare ulteriori dati personali."
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
        "it": "Struttura informativa invariata: destinatari, contenuti, durata, requisiti, iscrizioni e certificazione; mantenuto il registro di cortesia del testo originale.",
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
        "fr": "Courriel italien complet présentant les étapes d’activation et les limites des autorisations.",
        "es": "Correo completo en italiano con instrucciones de activación y aclaraciones sobre los permisos."
      }
    }
];
