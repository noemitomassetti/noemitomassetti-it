import type { TranslationDeepCase } from "./portfolioDeepTypes";

/** Original illustrative demonstrations; not commissioned client work. */
export const TRANSLATION_SAMPLES_REVERSE: TranslationDeepCase[] = [
  {
    "id": "it-en-order-status-message",
    "direction": "IT-EN",
    "domain": {
      "it": "Customer care e ordini",
      "en": "Customer care and orders",
      "fr": "Relation client et commandes",
      "es": "Atención al cliente y pedidos"
    },
    "title": {
      "it": "Aggiornamento ordine: italiano → inglese",
      "en": "Existing-order update: Italian to English",
      "fr": "Suivi de commande : italien vers anglais",
      "es": "Actualización de pedido: italiano a inglés"
    },
    "context": {
      "it": "Scenario dimostrativo: un fornitore italiano informa un cliente già acquisito su una spedizione parziale, senza promettere una data di consegna.",
      "en": "Illustrative brief: an Italian supplier explains a partial shipment to an existing customer without promising a delivery date.",
      "fr": "Scénario illustratif : un fournisseur italien annonce un envoi partiel sans promettre de date de livraison.",
      "es": "Caso de ejemplo: un proveedor italiano comunica un envío parcial sin prometer una fecha de entrega."
    },
    "source": [
      "Oggetto: aggiornamento ordine IT-482. Gentile cliente, confermiamo che due dei tre articoli ordinati sono pronti per la spedizione. Il terzo articolo è ancora in attesa di riassortimento.",
      "Possiamo spedire subito gli articoli disponibili oppure attendere e organizzare un'unica spedizione. Non procederemo senza una sua conferma scritta. La data di consegna sarà comunicata dal corriere dopo la presa in carico.",
      "La invitiamo a rispondere indicando l'opzione preferita entro venerdì 20 novembre. In mancanza di risposta, l'ordine rimarrà invariato. Cordiali saluti, Servizio clienti.",
      "Seconda comunicazione, preparata ma non inviata. Oggetto: richiesta di conferma per l'ordine IT-482. Gentile cliente, la contattiamo nuovamente in merito alle due alternative già illustrate. Per evitare modifiche non autorizzate, le chiediamo di confermare per iscritto se preferisce ricevere subito i due articoli disponibili oppure attendere la disponibilità del terzo articolo. Non abbiamo effettuato alcuna spedizione e non possiamo ancora indicare una data certa di consegna. Grazie per la collaborazione. Cordiali saluti, Servizio clienti.",
      "Nota operativa interna relativa alla pratica IT-482. Articoli disponibili: due su tre. Articolo mancante: in attesa di riassortimento. Opzioni da sottoporre al cliente: spedizione parziale o unica spedizione successiva. Dati da verificare: eventuali costi aggiuntivi, condizioni di spedizione e indicazioni del cliente. Stato: bozza di risposta preparata, nessuna opzione accettata, nessuna spedizione autorizzata. Non comunicare tempi di consegna senza informazioni confermate dal soggetto incaricato."
    ],
    "target": [
      "Subject: Update on order IT-482. Dear Customer, we can confirm that two of the three items you ordered are ready for dispatch. The third item is still awaiting restocking.",
      "We can dispatch the available items now or wait and arrange a single shipment. We will not proceed without your written confirmation. The courier will provide the delivery date once the shipment has been collected.",
      "Please reply with your preferred option by Friday 20 November. If we do not hear from you, your order will remain unchanged. Kind regards, Customer Support Team.",
      "Second message, drafted but not sent. Subject: Confirmation required for order IT-482. Dear Customer, we are writing again about the two options previously outlined. To avoid making changes without your approval, please confirm in writing whether you would prefer to receive the two available items now or wait until the third item is back in stock. We have not dispatched anything, and we cannot yet provide a confirmed delivery date. Thank you for your cooperation. Kind regards, Customer Support Team.",
      "Internal case note for order IT-482. Items available: two out of three. Outstanding item: awaiting restocking. Options to put to the customer: partial dispatch or a single later shipment. Information to check: any additional charges, delivery terms and the customer's instructions. Status: reply drafted, neither option accepted, no dispatch authorised. Do not communicate a delivery date without confirmed information from the responsible team."
    ],
    "terminology": [
      {
        "source": "spedizione",
        "target": "dispatch / shipment",
        "explanation": {
          "it": "«Dispatch» indica l'azione di spedire; «delivery» sarebbe la consegna al destinatario.",
          "en": "Dispatch is distinct from delivery to the recipient.",
          "fr": "« Dispatch » ne garantit pas la livraison.",
          "es": "« Dispatch » no equivale a entrega."
        }
      },
      {
        "source": "in attesa di riassortimento",
        "target": "awaiting restocking",
        "explanation": {
          "it": "Non implica una data di disponibilità già confermata.",
          "en": "No unconfirmed restock date is implied.",
          "fr": "Aucune date de réapprovisionnement n'est préparée pour cet exemple.",
          "es": "No se inventa una fecha de reposición."
        }
      }
    ],
    "method": {
      "it": "Registro formale e naturale in inglese britannico; distinzione tra spedizione e consegna; richiesta esplicita di autorizzazione.",
      "en": "Natural formal British English; clear separation of dispatch and delivery; explicit customer approval.",
      "fr": "Anglais britannique formel et naturel, sans promesse de livraison.",
      "es": "Inglés británico formal, sin promesas de entrega."
    },
    "review": {
      "it": "Verificati codice ordine, quantità, scelta del cliente e condizione di non procedere senza conferma.",
      "en": "Checked order reference, quantities, customer choice and approval requirement.",
      "fr": "Contrôle de la référence, des quantités et de l'accord préalable.",
      "es": "Comprobación de referencia, cantidades y autorización."
    },
    "output": {
      "it": "Email completa IT → EN con glossario e controlli di coerenza.",
      "en": "Full IT-to-EN customer email with terminology and QA notes.",
      "fr": "Courriel complet IT → EN avec glossaire et contrôle.",
      "es": "Correo completo IT → EN con glosario y revisión."
    }
  },
  {
    "id": "it-fr-training-workshop",
    "direction": "IT-FR",
    "domain": {
      "it": "Formazione e comunicazioni",
      "en": "Training and communications",
      "fr": "Formation et communication",
      "es": "Formación y comunicaciones"
    },
    "title": {
      "it": "Informazioni su un corso: italiano → francese",
      "en": "Training information: Italian to French",
      "fr": "Informations sur une formation : italien vers français",
      "es": "Información sobre un curso: italiano a francés"
    },
    "context": {
      "it": "Scenario dimostrativo: comunicazione informativa rivolta a partecipanti già iscritti a un laboratorio professionale.",
      "en": "Illustrative brief: information for participants already registered for a professional workshop.",
      "fr": "Scénario illustratif : informations destinées aux personnes déjà inscrites à un atelier professionnel.",
      "es": "Caso de ejemplo: información para participantes ya inscritos en un taller profesional."
    },
    "source": [
      "Gentile partecipante, il laboratorio «Comunicare con chiarezza» si terrà giovedì 26 novembre, dalle 9:30 alle 12:30, in modalità online. Riceverà il collegamento il giorno precedente.",
      "Durante l'incontro lavoreremo su esempi di email professionali, richieste di chiarimento e risposte a clienti già acquisiti. È sufficiente avere a disposizione un computer e un documento per prendere appunti.",
      "Se ha esigenze di accessibilità o non può più partecipare, risponda a questo messaggio entro martedì 24 novembre. Le confermeremo per iscritto le eventuali soluzioni disponibili, senza garantire modalità alternative non ancora definite.",
      "Messaggio integrativo da inviare soltanto dopo conferma dell'organizzatore. Oggetto: informazioni pratiche per il laboratorio «Comunicare con chiarezza». Gentile partecipante, le confermiamo che stiamo predisponendo le istruzioni di accesso per le persone già iscritte. Il collegamento sarà trasmesso attraverso il canale autorizzato dopo il controllo del programma. Se desidera segnalarci una difficoltà di accesso, può scrivere alla segreteria indicando il tipo di supporto necessario, senza inviare dati riservati. Cordiali saluti, Segreteria organizzativa.",
      "Nota di lavorazione della segreteria, non destinata all'invio. Prima del promemoria definitivo verificare data e fuso orario, collegamento di accesso, elenco dei partecipanti già iscritti e formato dei materiali approvati. Le domande sul contenuto didattico saranno inoltrate al formatore. La segreteria non promette registrazioni, attestati, crediti o soluzioni tecniche che non risultino dal programma concordato. Stato della simulazione: comunicazioni predisposte, nessun invio e nessuna iscrizione nuova effettuati."
    ],
    "target": [
      "Madame, Monsieur, l'atelier « Communiquer avec clarté » aura lieu en ligne le jeudi 26 novembre, de 9 h 30 à 12 h 30. Vous recevrez le lien de connexion la veille.",
      "Nous travaillerons sur des exemples de courriels professionnels, de demandes de précisions et de réponses à des clients existants. Il vous suffira de disposer d'un ordinateur et de quoi prendre des notes.",
      "Si vous avez des besoins particuliers en matière d'accessibilité ou si vous ne pouvez plus participer, veuillez répondre à ce message avant le mardi 24 novembre. Nous vous confirmerons par écrit les solutions éventuellement disponibles, sans promettre de modalités qui n'ont pas encore été définies.",
      "Message complémentaire, à envoyer uniquement après confirmation de l'organisateur. Objet : informations pratiques pour l'atelier « Communiquer avec clarté ». Madame, Monsieur, nous préparons les instructions d'accès destinées aux personnes déjà inscrites. Le lien sera transmis par le canal autorisé après vérification du programme. Si vous rencontrez une difficulté d'accès, vous pouvez écrire au secrétariat en précisant le type d'aide nécessaire, sans communiquer de données confidentielles. Cordialement, Le secrétariat.",
      "Note de traitement interne, non destinée à l'envoi. Avant le rappel définitif, vérifier la date et le fuseau horaire, le lien d'accès, la liste des personnes déjà inscrites et le format des supports approuvés. Les questions relatives au contenu pédagogique seront transmises au formateur. Le secrétariat ne promet ni enregistrements, ni attestations, ni crédits, ni solutions techniques absents du programme convenu. État de la simulation : messages préparés, aucun envoi et aucune nouvelle inscription effectués."
    ],
    "terminology": [
      {
        "source": "laboratorio",
        "target": "atelier",
        "explanation": {
          "it": "«Atelier» indica un'attività formativa pratica, non un laboratorio scientifico.",
          "en": "Atelier conveys a hands-on workshop.",
          "fr": "« Atelier » convient à une formation pratique.",
          "es": "« Atelier » se ajusta a un taller práctico."
        }
      },
      {
        "source": "esigenze di accessibilità",
        "target": "besoins particuliers en matière d'accessibilité",
        "explanation": {
          "it": "Formulazione rispettosa e specifica, senza presumere una condizione personale.",
          "en": "Respectful wording without assumptions.",
          "fr": "Formulation respectueuse, sans présupposé.",
          "es": "Expresión respetuosa sin suposiciones."
        }
      }
    ],
    "method": {
      "it": "Registro di cortesia coerente; convenzioni francesi per gli orari; informazioni operative preservate.",
      "en": "Consistent formal address, French time conventions and preserved logistics.",
      "fr": "Vouvoiement cohérent, horaires à la française, informations conservées.",
      "es": "Tratamiento formal coherente y horarios adaptados."
    },
    "review": {
      "it": "Verificati date, orari, scadenza della risposta e assenza di garanzie aggiunte.",
      "en": "Dates, times, reply deadline and absence of example guarantees checked.",
      "fr": "Vérification des dates, horaires et engagements.",
      "es": "Revisión de fechas, horarios y compromisos."
    },
    "output": {
      "it": "Comunicazione IT → FR completa, con note terminologiche.",
      "en": "Full IT-to-FR communication and terminology notes.",
      "fr": "Communication complète IT → FR avec notes.",
      "es": "Comunicación completa IT → FR con notas."
    }
  },
  {
    "id": "it-es-desk-accessory-catalogue",
    "direction": "IT-ES",
    "domain": {
      "it": "Cataloghi e schede prodotto",
      "en": "Catalogues and product information",
      "fr": "Catalogues et fiches produits",
      "es": "Catálogos y fichas de producto"
    },
    "title": {
      "it": "Scheda prodotto: italiano → spagnolo",
      "en": "Product information: Italian to Spanish",
      "fr": "Fiche produit : italien vers espagnol",
      "es": "Ficha de producto: italiano a español"
    },
    "context": {
      "it": "Scenario dimostrativo: adattamento in spagnolo di una scheda per un accessorio da scrivania, mantenendo dati e limitazioni.",
      "en": "Illustrative brief: Spanish product copy for a desk accessory, preserving specifications and limitations.",
      "fr": "Scénario illustratif : adaptation d'une fiche produit en espagnol, sans modifier les caractéristiques.",
      "es": "Caso de ejemplo: adaptación al español de una ficha de producto sin alterar los datos."
    },
    "source": [
      "Portadocumenti Linea — un accessorio essenziale per tenere in ordine fogli e appunti sulla scrivania. Realizzato in feltro riciclato, è disponibile nei colori grigio e verde.",
      "Dimensioni: 32 × 24 cm. Pulire con un panno asciutto. Non lavare in lavatrice e non esporre a fonti di calore diretto. Le leggere variazioni di colore dipendono dal materiale.",
      "La disponibilità può cambiare prima della conferma dell'ordine. Per informazioni sui prodotti già acquistati, contattare il servizio clienti indicando il numero dell'ordine. Nessuna personalizzazione è prevista per questo articolo.",
      "Domande frequenti relative al prodotto immaginario. Il portadocumenti può essere lavato in lavatrice? No: le indicazioni della scheda prevedono soltanto una pulizia con un panno asciutto. È disponibile in altri colori? La scheda menziona esclusivamente grigio e verde; ulteriori varianti non sono confermate. È possibile ordinare una versione personalizzata? No, non è prevista la personalizzazione. Prima di pubblicare altre caratteristiche occorre ricevere una scheda tecnica approvata.",
      "Testo aggiuntivo per l'assistenza dopo l'acquisto. Se ha già ordinato il portadocumenti Linea e desidera informazioni sulla sua richiesta, contatti il servizio clienti indicando il numero d'ordine e una breve descrizione del problema. Non invii password o dati di pagamento. La disponibilità dei prodotti e gli eventuali tempi di spedizione devono essere verificati sul sistema del venditore prima di fornire una risposta. Questo testo non conferma acquisti, consegne o rimborsi non autorizzati."
    ],
    "target": [
      "Portadocumentos Linea: un accesorio práctico para mantener ordenados los papeles y las notas en el escritorio. Fabricado con fieltro reciclado, está disponible en gris y verde.",
      "Dimensiones: 32 × 24 cm. Limpiar con un paño seco. No lavar a máquina ni exponer a fuentes directas de calor. Las ligeras variaciones de color se deben al material.",
      "La disponibilidad puede cambiar antes de que se confirme el pedido. Para consultar cualquier cuestión sobre productos ya adquiridos, póngase en contacto con atención al cliente e indique el número de pedido. Este artículo no admite personalización.",
      "Preguntas frecuentes sobre el producto de ejemplo. ¿Se puede lavar el portadocumentos a máquina? No. Las instrucciones de la ficha indican únicamente que debe limpiarse con un paño seco. ¿Está disponible en otros colores? La ficha solo menciona gris y verde; no se han confirmado otras variantes. ¿Se puede pedir una versión personalizada? No, este artículo no admite personalización. Antes de publicar otras características, es necesario disponer de una ficha técnica aprobada.",
      "Texto adicional de atención posventa. Si ya ha pedido el portadocumentos Linea y necesita información sobre su solicitud, póngase en contacto con atención al cliente e indique el número de pedido y una breve descripción del problema. No envíe contraseñas ni datos de pago. La disponibilidad y los posibles plazos de expedición deben comprobarse en el sistema del vendedor antes de responder. Este texto no confirma compras, entregas ni reembolsos que no hayan sido autorizados."
    ],
    "terminology": [
      {
        "source": "feltro riciclato",
        "target": "fieltro reciclado",
        "explanation": {
          "it": "Il materiale è mantenuto senza aggiungere certificazioni ambientali.",
          "en": "Preserves material without adding unsupported information environmental certifications.",
          "fr": "Matériau conservé sans certification préparée pour cet exemple.",
          "es": "Se mantiene el material sin añadir certificaciones."
        }
      },
      {
        "source": "prima della conferma dell'ordine",
        "target": "antes de que se confirme el pedido",
        "explanation": {
          "it": "Non si confonde la disponibilità mostrata con un ordine confermato.",
          "en": "Distinguishes displayed stock from a confirmed order.",
          "fr": "Distingue disponibilité et commande confirmée.",
          "es": "Distingue disponibilidad y pedido confirmado."
        }
      }
    ],
    "method": {
      "it": "Spagnolo professionale neutro, registro di cortesia e informazioni tecniche coerenti.",
      "en": "Neutral professional Spanish, consistent formal address and exact specifications.",
      "fr": "Espagnol professionnel neutre, caractéristiques conservées.",
      "es": "Español profesional neutro, con especificaciones fieles."
    },
    "review": {
      "it": "Verificati dimensioni, materiali, colori, cura e assenza di personalizzazione.",
      "en": "Dimensions, material, colours, care and personalisation restriction checked.",
      "fr": "Contrôle des dimensions, matériaux et restrictions.",
      "es": "Comprobación de medidas, materiales y restricciones."
    },
    "output": {
      "it": "Scheda completa IT → ES con glossario e checklist.",
      "en": "Full IT-to-ES product sheet with glossary and checklist.",
      "fr": "Fiche complète IT → ES avec glossaire.",
      "es": "Ficha completa IT → ES con glosario."
    }
  }
];
