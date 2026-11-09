import type { TranslationDeepCase } from "./portfolioDeepTypes";

/** Original fictional demonstrations; not commissioned client work. */
export const TRANSLATION_SAMPLES_REVERSE: TranslationDeepCase[] = [
  {
    "id": "it-en-existing-order-update",
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
      "it": "Scenario fittizio: un fornitore italiano informa un cliente già acquisito su una spedizione parziale, senza promettere una data di consegna.",
      "en": "Fictional brief: an Italian supplier explains a partial shipment to an existing customer without promising a delivery date.",
      "fr": "Scénario fictif : un fournisseur italien annonce un envoi partiel sans promettre de date de livraison.",
      "es": "Caso ficticio: un proveedor italiano comunica un envío parcial sin prometer una fecha de entrega."
    },
    "source": [
      "Oggetto: aggiornamento ordine IT-482. Gentile cliente, confermiamo che due dei tre articoli ordinati sono pronti per la spedizione. Il terzo articolo è ancora in attesa di riassortimento.",
      "Possiamo spedire subito gli articoli disponibili oppure attendere e organizzare un'unica spedizione. Non procederemo senza una sua conferma scritta. La data di consegna sarà comunicata dal corriere dopo la presa in carico.",
      "La invitiamo a rispondere indicando l'opzione preferita entro venerdì 20 novembre. In mancanza di risposta, l'ordine rimarrà invariato. Cordiali saluti, Servizio clienti."
    ],
    "target": [
      "Subject: Update on order IT-482. Dear Customer, we can confirm that two of the three items you ordered are ready for dispatch. The third item is still awaiting restocking.",
      "We can dispatch the available items now or wait and arrange a single shipment. We will not proceed without your written confirmation. The courier will provide the delivery date once the shipment has been collected.",
      "Please reply with your preferred option by Friday 20 November. If we do not hear from you, your order will remain unchanged. Kind regards, Customer Support Team."
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
          "fr": "Aucune date de réapprovisionnement n'est inventée.",
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
      "it": "Scenario fittizio: comunicazione informativa rivolta a partecipanti già iscritti a un laboratorio professionale.",
      "en": "Fictional brief: information for participants already registered for a professional workshop.",
      "fr": "Scénario fictif : informations destinées aux personnes déjà inscrites à un atelier professionnel.",
      "es": "Caso ficticio: información para participantes ya inscritos en un taller profesional."
    },
    "source": [
      "Gentile partecipante, il laboratorio «Comunicare con chiarezza» si terrà giovedì 26 novembre, dalle 9:30 alle 12:30, in modalità online. Riceverà il collegamento il giorno precedente.",
      "Durante l'incontro lavoreremo su esempi di email professionali, richieste di chiarimento e risposte a clienti già acquisiti. È sufficiente avere a disposizione un computer e un documento per prendere appunti.",
      "Se ha esigenze di accessibilità o non può più partecipare, risponda a questo messaggio entro martedì 24 novembre. Le confermeremo per iscritto le eventuali soluzioni disponibili, senza garantire modalità alternative non ancora definite."
    ],
    "target": [
      "Madame, Monsieur, l'atelier « Communiquer avec clarté » aura lieu en ligne le jeudi 26 novembre, de 9 h 30 à 12 h 30. Vous recevrez le lien de connexion la veille.",
      "Nous travaillerons sur des exemples de courriels professionnels, de demandes de précisions et de réponses à des clients existants. Il vous suffira de disposer d'un ordinateur et de quoi prendre des notes.",
      "Si vous avez des besoins particuliers en matière d'accessibilité ou si vous ne pouvez plus participer, veuillez répondre à ce message avant le mardi 24 novembre. Nous vous confirmerons par écrit les solutions éventuellement disponibles, sans promettre de modalités qui n'ont pas encore été définies."
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
      "en": "Dates, times, reply deadline and absence of invented guarantees checked.",
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
    "id": "it-es-product-information",
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
      "it": "Scenario fittizio: adattamento in spagnolo di una scheda per un accessorio da scrivania, mantenendo dati e limitazioni.",
      "en": "Fictional brief: Spanish product copy for a desk accessory, preserving specifications and limitations.",
      "fr": "Scénario fictif : adaptation d'une fiche produit en espagnol, sans modifier les caractéristiques.",
      "es": "Caso ficticio: adaptación al español de una ficha de producto sin alterar los datos."
    },
    "source": [
      "Portadocumenti Linea — un accessorio essenziale per tenere in ordine fogli e appunti sulla scrivania. Realizzato in feltro riciclato, è disponibile nei colori grigio e verde.",
      "Dimensioni: 32 × 24 cm. Pulire con un panno asciutto. Non lavare in lavatrice e non esporre a fonti di calore diretto. Le leggere variazioni di colore dipendono dal materiale.",
      "La disponibilità può cambiare prima della conferma dell'ordine. Per informazioni sui prodotti già acquistati, contattare il servizio clienti indicando il numero dell'ordine. Nessuna personalizzazione è prevista per questo articolo."
    ],
    "target": [
      "Portadocumentos Linea: un accesorio práctico para mantener ordenados los papeles y las notas en el escritorio. Fabricado con fieltro reciclado, está disponible en gris y verde.",
      "Dimensiones: 32 × 24 cm. Limpiar con un paño seco. No lavar a máquina ni exponer a fuentes directas de calor. Las ligeras variaciones de color se deben al material.",
      "La disponibilidad puede cambiar antes de que se confirme el pedido. Para consultar cualquier cuestión sobre productos ya adquiridos, póngase en contacto con atención al cliente e indique el número de pedido. Este artículo no admite personalización."
    ],
    "terminology": [
      {
        "source": "feltro riciclato",
        "target": "fieltro reciclado",
        "explanation": {
          "it": "Il materiale è mantenuto senza aggiungere certificazioni ambientali.",
          "en": "Preserves material without inventing environmental certifications.",
          "fr": "Matériau conservé sans certification inventée.",
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
