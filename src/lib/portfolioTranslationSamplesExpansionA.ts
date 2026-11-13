import type { TranslationDeepCase } from "./portfolioDeepTypes";

/** Independently authored, full-length professional translation examples. */
export const TRANSLATION_SAMPLES_EXPANSION_A: TranslationDeepCase[] = [
  {
    "id": "it-fr-customer-service-followup",
    "direction": "IT-FR",
    "domain": {
      "it": "Corrispondenza clienti e follow-up",
      "en": "Customer care and follow-up",
      "fr": "Relation client et suivi",
      "es": "Atención al cliente y seguimiento"
    },
    "title": {
      "it": "Comunicazione completa a un cliente: IT → FR",
      "en": "Full customer-care message: Italian to French",
      "fr": "Courriel complet de relation client : IT → FR",
      "es": "Correo completo de atención al cliente: IT → FR"
    },
    "context": {
      "it": "Traduzione di una comunicazione postvendita a un cliente francofono già acquisito, con richiesta di conferma e passaggio al responsabile. Nessun cliente o ordine reale viene rappresentato.",
      "en": "A full after-sales email for an existing French-speaking customer, including a confirmation request and internal handover.",
      "fr": "Traduction d'un message après-vente destiné à un client francophone existant, avec suivi et validation.",
      "es": "Traducción de un mensaje de posventa para un cliente francófono actual, con seguimiento y aprobación."
    },
    "source": [
      "Oggetto: Aggiornamento relativo alla sua richiesta — riferimento RS-280\n\nGentile Cliente,\nla ringraziamo per il messaggio con cui ci ha chiesto di verificare alcuni elementi della fornitura già concordata. Abbiamo preso in carico la richiesta e ricostruito i punti che richiedono un controllo con il referente competente. In particolare, dobbiamo verificare la versione dell'elenco articoli, la disponibilità delle quantità indicate e l'eventuale possibilità di organizzare una consegna separata.",
      "Per evitare equivoci, le confermiamo che al momento non è stata approvata alcuna modifica alle condizioni dell'ordine. La documentazione ricevuta è stata registrata, ma alcune informazioni rimangono da confermare: per questo preferiamo non comunicarle una data di spedizione o un nuovo importo finché non saranno stati verificati dal responsabile. La ringraziamo per aver indicato la sua preferenza, che è stata riportata nella pratica senza essere trattata come un'autorizzazione definitiva.",
      "Se desidera aggiungere informazioni utili al controllo, può rispondere a questa email riportando il riferimento RS-280. Non è necessario reinviare documenti già trasmessi né condividere dati personali non pertinenti. Ricevute le conferme necessarie, le faremo avere un aggiornamento scritto che distingua chiaramente le alternative disponibili e gli aspetti ancora soggetti alla sua approvazione.",
      "La ringraziamo per la collaborazione e restiamo a disposizione per gli aspetti organizzativi della richiesta.\n\nCordiali saluti,\nServizio clienti\n\nNOTA INTERNA — Bozza di corrispondenza; verificare stato dell'ordine, condizioni e autorizzazioni prima dell'invio."
    ],
    "target": [
      "Objet : Suivi de votre demande — référence RS-280\n\nBonjour,\nNous vous remercions pour votre message concernant certains éléments de la fourniture déjà convenue. Nous avons pris en charge votre demande et relevé les points qui doivent être vérifiés auprès de la personne responsable. Il nous faut notamment confirmer la version de la liste des articles, les quantités disponibles et la possibilité éventuelle d'organiser une livraison distincte.",
      "Afin d'éviter tout malentendu, nous vous précisons qu'aucune modification des conditions de commande n'a été approuvée à ce stade. Les documents reçus ont bien été enregistrés, mais certaines informations restent à confirmer. Nous préférons donc ne pas vous annoncer de date d'expédition ou de nouveau montant avant validation par notre responsable. Votre préférence a été notée dans le dossier, sans être considérée comme une autorisation définitive.",
      "Si vous souhaitez apporter des précisions utiles à cette vérification, vous pouvez répondre à ce courriel en rappelant la référence RS-280. Il n'est pas nécessaire de renvoyer les documents déjà transmis ni de communiquer des données personnelles sans rapport avec votre demande. Dès que les confirmations nécessaires auront été obtenues, nous vous adresserons un point écrit distinguant les solutions envisageables des éléments qui nécessitent encore votre accord.",
      "Nous vous remercions de votre coopération et restons à votre disposition pour toute question d'ordre organisationnel.\n\nCordialement,\nService client\n\nNOTE INTERNE — Projet de courriel ; vérifier le statut de la commande, les conditions applicables et les validations avant tout envoi."
    ],
    "terminology": [
      {
        "source": "prendere in carico la richiesta",
        "target": "prendre en charge votre demande",
        "explanation": {
          "it": "Formula naturale di gestione della richiesta, senza implicare una soluzione già raggiunta.",
          "en": "Natural case-taking terminology without promising resolution.",
          "fr": "« Prendre en charge » indique le suivi, pas la résolution.",
          "es": "Expresa gestión de la consulta sin prometer solución."
        }
      },
      {
        "source": "consegna separata",
        "target": "livraison distincte",
        "explanation": {
          "it": "Si distingue da «expédition» quando si parla di consegna.",
          "en": "Delivery to the recipient is distinguished from dispatch.",
          "fr": "« Livraison » concerne la remise au destinataire.",
          "es": "Distingue entrega de expedición."
        }
      },
      {
        "source": "aspetti organizzativi",
        "target": "questions d'ordre organisationnel",
        "explanation": {
          "it": "Restringe correttamente il perimetro dell'assistenza.",
          "en": "Defines the operational support remit.",
          "fr": "Formulation précise des limites du secrétariat.",
          "es": "Delimita el alcance de la asistencia."
        }
      }
    ],
    "method": {
      "it": "Traduzione integrale del messaggio postvendita, con tono francese professionale ma non burocratico.",
      "en": "Complete after-sales letter in natural French, not a word-for-word rendering.",
      "fr": "Courriel intégral au registre professionnel, sans calque de l'italien.",
      "es": "Carta completa en francés natural, sin calcos."
    },
    "review": {
      "it": "Controllo di registro, coerenza dei riferimenti e condizioni non ancora approvate.",
      "en": "Check the tone, case reference and conditional statements.",
      "fr": "Vérification du registre, des références et des conditions non approuvées.",
      "es": "Control del tono, referencias y condiciones pendientes."
    },
    "output": {
      "it": "Email originale in italiano, traduzione completa in francese e tre scelte terminologiche commentate.",
      "en": "Complete IT source and FR target letter, with terminology and checking notes.",
      "fr": "Texte italien et traduction française intégrale, avec commentaires terminologiques.",
      "es": "Texto italiano y francés completos con análisis terminológico."
    }
  },
  {
    "id": "it-es-support-faq-complete",
    "direction": "IT-ES",
    "domain": {
      "it": "FAQ e assistenza per servizi esistenti",
      "en": "Help-centre FAQ and existing services",
      "fr": "FAQ et assistance aux services existants",
      "es": "Preguntas frecuentes y servicios actuales"
    },
    "title": {
      "it": "FAQ di assistenza completa: italiano → spagnolo",
      "en": "Complete support FAQ: Italian to Spanish",
      "fr": "FAQ d'assistance complète : italien vers espagnol",
      "es": "Preguntas frecuentes completas: italiano → español"
    },
    "context": {
      "it": "Una pagina di assistenza per clienti già acquisiti deve essere tradotta in spagnolo mantenendo limiti, condizioni e istruzioni chiari.",
      "en": "A complete support page for existing customers requires Spanish localisation that preserves conditions and instructions.",
      "fr": "Une page d'aide doit être adaptée en espagnol pour les clients existants.",
      "es": "Adaptación española de una guía de ayuda completa para clientes actuales."
    },
    "source": [
      "GUIDA ASSISTENZA — RICHIESTE RELATIVE A SERVIZI GIÀ ATTIVI\n\nCome faccio a chiedere informazioni su una pratica già aperta?\nUtilizzi il canale di contatto indicato nella comunicazione ricevuta all'apertura della pratica. Se le è stato assegnato un numero di riferimento, lo riporti nell'oggetto del messaggio: ci aiuterà a individuare la documentazione corretta. Non è necessario comunicare password o informazioni personali estranee alla richiesta.",
      "Come posso chiedere di spostare un appuntamento?\nScriva al referente organizzativo con il maggior anticipo possibile, indicando la data dell'appuntamento e gli orari in cui sarebbe disponibile. La richiesta di modifica non comporta lo spostamento automatico: le nuove disponibilità devono essere verificate e confermate per iscritto. Se l'incontro si svolge a distanza, controlli sempre il fuso orario indicato nell'invito.",
      "Se un documento allegato contiene un errore, cosa devo fare?\nRisponda alla comunicazione con cui ha ricevuto il file, descrivendo il punto da controllare. Eviti di modificare direttamente un documento già approvato se non dispone di autorizzazione. Il team registrerà la segnalazione e chiederà al responsabile di verificare quale versione debba essere utilizzata. Se il problema riguarda aspetti amministrativi o fiscali, la richiesta sarà inoltrata al referente competente.",
      "Quando riceverò una risposta?\nI tempi dipendono dalla tipologia della richiesta e dalle verifiche necessarie. Qualora sia richiesta una decisione da parte del responsabile, non potremo confermare l'esito prima di aver ricevuto le istruzioni appropriate. Per questo motivo non comunichiamo scadenze non approvate. La nostra priorità è fornire indicazioni accurate e coerenti con la documentazione disponibile.\n\nContatti e privacy\nUtilizzi esclusivamente il canale autorizzato per la sua pratica e non invii dati sensibili non richiesti."
    ],
    "target": [
      "CENTRO DE AYUDA — CONSULTAS SOBRE SERVICIOS YA ACTIVOS\n\n¿Cómo puedo solicitar información sobre un expediente abierto?\nUtilice el canal de contacto indicado en el mensaje que recibió al abrir el expediente. Si dispone de un número de referencia, inclúyalo en el asunto del correo para ayudarnos a localizar la documentación correspondiente. No es necesario enviar contraseñas ni datos personales ajenos a su consulta.",
      "¿Cómo puedo solicitar un cambio de cita?\nEscriba a la persona encargada de la coordinación con la mayor antelación posible e indique la fecha prevista y los horarios en los que podría asistir. La solicitud no modifica automáticamente la cita: primero debemos comprobar las alternativas y confirmar el cambio por escrito. Si la reunión es en línea, revise siempre el huso horario que figura en la invitación.",
      "¿Qué debo hacer si detecto un error en un archivo adjunto?\nResponda al correo con el que recibió el documento y explique qué dato necesita una revisión. No modifique directamente un archivo ya aprobado si no dispone de autorización para hacerlo. El equipo registrará la incidencia y pedirá a la persona responsable que confirme qué versión debe utilizarse. Si la consulta se refiere a cuestiones administrativas o fiscales, se trasladará al departamento competente.",
      "¿Cuándo recibiré una respuesta?\nEl plazo dependerá del tipo de solicitud y de las comprobaciones que sean necesarias. Cuando una decisión corresponda a la persona responsable, no podremos confirmar el resultado hasta que recibamos sus instrucciones. Por ello, evitamos comunicar fechas que todavía no se han aprobado. Nuestro objetivo es ofrecer información precisa y coherente con los documentos disponibles.\n\nContacto y privacidad\nUtilice únicamente el canal autorizado para su expediente y no envíe datos sensibles que no se le hayan solicitado."
    ],
    "terminology": [
      {
        "source": "pratica già aperta",
        "target": "expediente abierto",
        "explanation": {
          "it": "«Expediente» è adatto al contesto amministrativo-operativo, senza evocare procedure legali.",
          "en": "Use an appropriate customer-case term.",
          "fr": "« Expediente » est adapté au contexte du suivi.",
          "es": "« Expediente abierto » resulta natural."
        }
      },
      {
        "source": "spostare un appuntamento",
        "target": "cambiar una cita",
        "explanation": {
          "it": "Meglio di una trasposizione formale poco naturale.",
          "en": "Natural rather than overly literal phrasing.",
          "fr": "Formulation idiomatique pour le public espagnol.",
          "es": "« Cambiar una cita » es claro y directo."
        }
      },
      {
        "source": "inoltrare al referente",
        "target": "trasladar a la persona responsable",
        "explanation": {
          "it": "Non implica l'emissione di un parere fiscale o amministrativo.",
          "en": "Referral is not providing regulated advice.",
          "fr": "Transmission au responsable compétent.",
          "es": "La derivación no constituye asesoramiento."
        }
      }
    ],
    "method": {
      "it": "Localizzazione completa in spagnolo con domande, risposte e registro coerenti.",
      "en": "Full Spanish help-centre page with consistent customer-facing terminology.",
      "fr": "Page d'assistance traduite intégralement en espagnol.",
      "es": "FAQ española completa con terminología coherente."
    },
    "review": {
      "it": "Revisione di tono formale, coerenza dei nomi delle funzioni e rispetto dei limiti dell'incarico.",
      "en": "Consistent formal address, terminology and operational scope.",
      "fr": "Cohérence du vouvoiement et de la terminologie.",
      "es": "Coherencia en el tratamiento de usted y la terminología."
    },
    "output": {
      "it": "Pagina FAQ integrale IT/ES con cinque sezioni e note terminologiche.",
      "en": "Full IT/ES FAQ with five sections and editorial notes.",
      "fr": "FAQ bilingue intégrale accompagnée des choix terminologiques.",
      "es": "Guía bilingüe completa con análisis lingüístico."
    }
  },
  {
    "id": "it-en-internal-procedure-translation",
    "direction": "IT-EN",
    "domain": {
      "it": "Procedure interne e comunicazioni operative",
      "en": "Internal procedures and operational communication",
      "fr": "Procédures internes et communication opérationnelle",
      "es": "Procedimientos internos y comunicación operativa"
    },
    "title": {
      "it": "Procedura operativa completa: italiano → inglese britannico",
      "en": "Complete operational SOP: Italian to British English",
      "fr": "Procédure opérationnelle complète : italien vers anglais",
      "es": "Procedimiento operativo completo: italiano → inglés"
    },
    "context": {
      "it": "Versione inglese britannica di una procedura aziendale per gestire messaggi di clienti già acquisiti, controlli e approvazioni.",
      "en": "A complete SOP for handling existing-customer email and approvals, translated into British English.",
      "fr": "Procédure de traitement des courriels existants, traduite en anglais britannique.",
      "es": "Procedimiento de atención a clientes actuales, traducido al inglés británico."
    },
    "source": [
      "PROCEDURA OPERATIVA — GESTIONE DELLE EMAIL DEI CLIENTI ESISTENTI\nScopo: assicurare che le richieste siano registrate, assegnate e gestite secondo le istruzioni concordate.\nCampo di applicazione: email relative a servizi e pratiche già attivi. Sono escluse attività di acquisizione clienti, telemarketing, fatturazione e decisioni commerciali non autorizzate.",
      "1. Ricezione e classificazione\nVerificare che il messaggio sia indirizzato alla casella condivisa prevista. Registrare il riferimento della pratica, la lingua del messaggio e la categoria della richiesta. Non inoltrare a terzi dati non necessari. Se non è possibile individuare il responsabile corretto, segnare il messaggio come «da assegnare» e chiedere indicazioni.",
      "2. Preparazione della risposta\nConsultare la documentazione approvata. Utilizzare il modello pertinente soltanto se il testo risponde ai fatti disponibili. Non promettere rimborsi, tempi di consegna, prezzi o esiti senza autorizzazione. Quando una richiesta necessita di una decisione, preparare un messaggio di presa in carico e inoltrare i punti specifici al referente.",
      "3. Verifica e invio\nControllare il destinatario, gli allegati, la coerenza delle date e la lingua di risposta. In presenza di dati riservati, applicare i livelli di accesso definiti dal titolare. Inviare il messaggio solo dopo aver ricevuto le approvazioni richieste. Annotare chi ha validato il testo e quale versione è stata utilizzata.",
      "4. Follow-up e chiusura\nRegistrare la prossima azione e la persona responsabile. Non contrassegnare una pratica come chiusa finché non è stata completata l'attività o confermato il passaggio al reparto competente. Se la procedura mostra un caso non previsto, sospendere la decisione e chiedere istruzioni.\n\nRevisione: la procedura deve essere aggiornata quando cambiano ruoli, strumenti o modelli approvati."
    ],
    "target": [
      "STANDARD OPERATING PROCEDURE — EXISTING CUSTOMER EMAILS\nPurpose: to ensure that enquiries are recorded, assigned and handled in accordance with agreed instructions.\nScope: messages concerning existing services and open cases. The procedure excludes lead generation, cold calling, invoicing and unauthorised commercial decisions.",
      "1. Receipt and classification\nCheck that the message has reached the designated shared mailbox. Record the case reference, language and enquiry category. Do not forward unnecessary personal data. If the correct owner cannot be identified, mark the message as 'awaiting assignment' and request guidance.",
      "2. Drafting the reply\nConsult the approved documentation. Use an existing template only when its wording is supported by the available facts. Do not promise refunds, delivery times, prices or outcomes without authorisation. Where a decision is required, prepare an acknowledgement and refer the specific points to the responsible colleague.",
      "3. Review and sending\nCheck the recipient, attachments, date consistency and reply language. Where confidential information is involved, follow the access permissions set by the business owner. Send the message only after obtaining the required approvals. Record who approved the wording and which version was used.",
      "4. Follow-up and closure\nLog the next action and the person responsible. Do not close a case until the task has been completed or the handover to the relevant department has been acknowledged. If an issue falls outside the procedure, pause the decision and ask for instructions.\n\nReview: update this procedure whenever roles, systems or approved templates change."
    ],
    "terminology": [
      {
        "source": "presa in carico",
        "target": "acknowledgement",
        "explanation": {
          "it": "In inglese operativo chiarisce che non si promette ancora una soluzione.",
          "en": "An acknowledgement is not a commitment to resolve the case immediately.",
          "fr": "Un accusé de réception ne vaut pas résolution.",
          "es": "Acuse de recibo no equivale a solución."
        }
      },
      {
        "source": "da assegnare",
        "target": "awaiting assignment",
        "explanation": {
          "it": "Stato di lavorazione, non persona inesistente.",
          "en": "A workflow state, not a claim of delegation.",
          "fr": "État du dossier en attente de responsable.",
          "es": "Estado pendiente de asignación."
        }
      },
      {
        "source": "inoltrare al referente",
        "target": "refer ... to the responsible colleague",
        "explanation": {
          "it": "Richiamo al processo interno, non attività commerciale.",
          "en": "A clear internal escalation action.",
          "fr": "Transfert au collaborateur habilité.",
          "es": "Derivación al responsable."
        }
      }
    ],
    "method": {
      "it": "Traduzione integrale di SOP con terminologia coerente e inglese britannico naturale.",
      "en": "Complete SOP in professional British English.",
      "fr": "Procédure complète traduite en anglais britannique.",
      "es": "Procedimiento completo en inglés británico."
    },
    "review": {
      "it": "Controllati i verbi modali, la terminologia approvativa e la distinzione fra presa in carico e risoluzione.",
      "en": "Checked modal verbs, approval terminology and case status.",
      "fr": "Vérification des obligations et statuts du dossier.",
      "es": "Revisión de obligaciones y estados del proceso."
    },
    "output": {
      "it": "Procedura IT/EN completa, quattro fasi, limiti e criteri di revisione, con commento terminologico.",
      "en": "Complete Italian and English SOP with four stages and terminology review.",
      "fr": "Procédure complète IT/EN avec notes terminologiques.",
      "es": "Procedimiento bilingüe completo con notas de traducción."
    }
  }
];
