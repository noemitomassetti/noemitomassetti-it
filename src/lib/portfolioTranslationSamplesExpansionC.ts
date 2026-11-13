import type { TranslationDeepCase } from "./portfolioDeepTypes";

/** Full original source-and-target texts, with no client commission implied. */
export const TRANSLATION_SAMPLES_EXPANSION_C: TranslationDeepCase[] = [
  {
    "id": "en-it-complete-italian-onboarding-communications",
    "direction": "EN-IT",
    "domain": {
      "it": "Email di onboarding e assistenza ai clienti italiani",
      "en": "Italian customer onboarding and support communications",
      "fr": "Accueil des clients italiens et courriels de suivi",
      "es": "Incorporación de clientes italianos y comunicaciones"
    },
    "title": {
      "it": "Onboarding clienti: email completa EN → IT",
      "en": "Complete onboarding email: English to Italian",
      "fr": "Courriel d'accueil complet : anglais vers italien",
      "es": "Correo de bienvenida completo: inglés a italiano"
    },
    "context": {
      "it": "Un fornitore di servizi digitali europeo deve adattare per i propri clienti italiani una comunicazione di benvenuto completa, mantenendo indicazioni operative accurate e un registro naturale.",
      "en": "A European digital-services provider requires a complete Italian welcome message for established customers, with careful instructions and no unsupported promises.",
      "fr": "Un prestataire européen souhaite adapter un courriel d'accueil complet pour ses clients italiens.",
      "es": "Un proveedor europeo desea adaptar al italiano un correo completo de bienvenida."
    },
    "source": [
      "Subject: Welcome to your client workspace — first steps\nDear Customer,\nThank you for choosing our document-organisation service. This message explains the steps we will follow to set up your shared workspace and the information we need from you before any changes are made. Please keep it for reference while we prepare the first review.",
      "First, we will ask you to identify the folders that should be included in the assignment and the person authorised to approve changes. You do not need to grant access to your entire drive. If a document contains confidential information unrelated to the work, please leave it outside the shared area. We can begin with a small set of documents and review the proposed structure together.",
      "After examining the agreed materials, we will send you a proposed folder layout, practical file-naming rules and a brief note explaining how drafts can be distinguished from approved versions. Nothing will be deleted or shared with additional people without your instructions. If we discover two files that appear identical, we will flag them for your review rather than remove one automatically.",
      "Once you approve the proposed arrangement, we will agree on the next steps and the documents needed for handover. If you notice an incorrect file name or cannot find a document, reply to this email with its title or reference and a short description of the issue. Please do not send passwords or authentication codes by email.",
      "We hope these practical steps will help your team work with clearer information. If any part of the process is unclear, let us know and we will explain what can be checked and who is responsible for the decision.\nKind regards,\nCustomer Support Team\nStatus: model communication prepared for editorial review."
    ],
    "target": [
      "Oggetto: Benvenuto nel tuo spazio di lavoro condiviso — primi passi\nGentile cliente,\ngrazie per aver scelto il nostro servizio di organizzazione documentale. In questo messaggio ti spieghiamo come procederemo per predisporre lo spazio di lavoro condiviso e quali informazioni ci servono prima di apportare modifiche. Ti consigliamo di conservarlo per consultarlo durante la prima fase di verifica.",
      "Per iniziare, ti chiederemo di indicarci quali cartelle rientrano nell'incarico e chi è autorizzato ad approvare gli interventi. Non è necessario concedere l'accesso all'intero archivio. Se un documento contiene informazioni riservate che non riguardano il lavoro, puoi lasciarlo fuori dallo spazio condiviso. Possiamo partire da una selezione limitata di file e valutare insieme la struttura proposta.",
      "Dopo aver esaminato il materiale concordato, ti invieremo una proposta di organizzazione delle cartelle, alcune regole pratiche per nominare i file e una breve guida per distinguere le bozze dalle versioni approvate. Non cancelleremo documenti né li condivideremo con altre persone senza istruzioni. Se individueremo due file apparentemente identici, li segnaleremo per una verifica invece di eliminarne automaticamente uno.",
      "Una volta approvata la proposta, concorderemo i passaggi successivi e la documentazione necessaria per la consegna del lavoro. Se noti un nome file errato o non riesci a trovare un documento, rispondi a questa email indicando il titolo o il riferimento del file e descrivendo brevemente il problema. Non inviare password o codici di autenticazione via email.",
      "Ci auguriamo che queste indicazioni possano aiutare il tuo gruppo di lavoro a gestire le informazioni con maggiore chiarezza. Se qualche passaggio non è chiaro, scrivici: ti spiegheremo quali verifiche sono possibili e chi è responsabile delle decisioni.\nCordiali saluti,\nServizio clienti\nStato: testo modello predisposto per la revisione editoriale."
    ],
    "terminology": [
      {
        "source": "client workspace",
        "target": "spazio di lavoro condiviso",
        "explanation": {
          "it": "Scelta comprensibile in ambito organizzativo; non si traduce «workspace» come luogo fisico.",
          "en": "Natural Italian for a shared online work area.",
          "fr": "Expression naturelle pour un espace numérique partagé.",
          "es": "Expresión italiana natural para un entorno compartido."
        }
      },
      {
        "source": "folder layout",
        "target": "organizzazione delle cartelle",
        "explanation": {
          "it": "Una formula più idiomatica di «layout delle cartelle».",
          "en": "Less literal and clearer for Italian users.",
          "fr": "Formulation moins calquée sur l'anglais.",
          "es": "Fórmula menos literal y más clara."
        }
      },
      {
        "source": "flag them for your review",
        "target": "li segnaleremo per una verifica",
        "explanation": {
          "it": "Conserva il controllo del cliente sui possibili duplicati.",
          "en": "Preserves the client's decision over duplicates.",
          "fr": "Préserve la validation du client.",
          "es": "Mantiene el control del cliente."
        }
      }
    ],
    "method": {
      "it": "Localizzazione integrale di un'email con registro coerente al «tu», scelte lessicali naturali e messaggi operativi non ambigui.",
      "en": "Complete localisation with consistent direct address and clear operational constraints.",
      "fr": "Adaptation intégrale, naturelle et cohérente dans le tutoiement.",
      "es": "Adaptación integral con tono y terminología consistentes."
    },
    "review": {
      "it": "Verifica della corrispondenza di ogni istruzione, assenza di promesse di cancellazione o sicurezza certificata, controllo del tono e della chiusura.",
      "en": "Check each instruction, avoid unapproved guarantees and maintain consistent Italian tone.",
      "fr": "Contrôle de chaque consigne et du registre italien.",
      "es": "Verificación de instrucciones, tono y límites."
    },
    "output": {
      "it": "Email sorgente inglese completa, versione italiana completa e glossario ragionato.",
      "en": "Complete English source email, complete Italian target and annotated terminology.",
      "fr": "Courriel anglais et italien intégraux avec notes terminologiques.",
      "es": "Correos inglés e italiano completos y glosario."
    }
  },
  {
    "id": "fr-it-complete-product-information-and-faq",
    "direction": "FR-IT",
    "domain": {
      "it": "Scheda prodotto per e-commerce e assistenza",
      "en": "Product description and customer FAQs",
      "fr": "Fiche produit et questions fréquentes",
      "es": "Ficha de producto y preguntas frecuentes"
    },
    "title": {
      "it": "Scheda prodotto e FAQ complete FR → IT",
      "en": "Full product page and FAQ: French to Italian",
      "fr": "Fiche produit et FAQ complètes : français vers italien",
      "es": "Ficha y preguntas frecuentes completas: francés a italiano"
    },
    "context": {
      "it": "Un produttore di accessori per l'ufficio vuole rendere leggibile in italiano una scheda articolo con informazioni d'uso, specifiche e FAQ, senza aggiungere qualità o certificazioni non presenti nell'originale.",
      "en": "A French office-accessories business needs an accurate Italian product page with specifications and customer questions, avoiding unapproved claims.",
      "fr": "Une entreprise souhaite adapter une fiche produit intégrale pour le public italien sans ajouter de caractéristiques.",
      "es": "Una empresa necesita una ficha completa en italiano sin añadir características no documentadas."
    },
    "source": [
      "ORGANISEUR DE BUREAU MODULABLE — PRÉSENTATION\nConçu pour rassembler les petits accessoires du quotidien, cet organiseur modulaire permet de répartir stylos, notes et objets de papeterie dans des compartiments séparés. Son format compact convient à un bureau individuel et facilite le rangement sans imposer une nouvelle disposition de l'espace de travail. La composition et les dimensions indiquées ci-dessous correspondent au modèle présenté dans cet exemple.",
      "COMPOSITION ET DIMENSIONS\nLe module comprend trois compartiments amovibles placés sur une base rigide. Dimensions de l'ensemble : 24 cm de largeur, 12 cm de profondeur et 8 cm de hauteur. Coloris présenté : gris clair. Le produit est destiné aux petits accessoires de papeterie ; il ne doit pas être utilisé pour des objets chauds ou pour des aliments. Les mesures sont données pour l'ensemble monté.",
      "CONSEILS D'UTILISATION\nPlacez l'organiseur sur une surface stable et sèche. Répartissez les accessoires de façon équilibrée dans les compartiments, puis retirez chaque élément séparément lorsque vous souhaitez nettoyer la base. Pour l'entretien courant, utilisez un chiffon doux légèrement humide et laissez sécher les pièces avant de les remettre en place. N'utilisez pas de produits abrasifs.",
      "QUESTIONS FRÉQUENTES\nPeut-on retirer les compartiments ? Oui, les trois compartiments peuvent être retirés de la base pour faciliter le rangement et l'entretien.\nL'organiseur peut-il contenir un ordinateur portable ? Non. Ses dimensions et sa fonction ne sont pas adaptées au rangement d'un ordinateur.\nLes dimensions comprennent-elles la base ? Oui. La largeur, la profondeur et la hauteur correspondent à l'ensemble monté.",
      "INFORMATIONS AVANT COMMANDE\nAvant de passer commande, vérifiez les dimensions et la description du modèle sélectionné. La disponibilité, les frais d'expédition et les délais éventuels doivent être confirmés par le vendeur au moment de l'achat. Cette fiche ne constitue pas une garantie de stock ou de livraison."
    ],
    "target": [
      "ORGANIZER MODULARE DA SCRIVANIA — PRESENTAZIONE\nPensato per tenere in ordine i piccoli accessori di tutti i giorni, questo organizer modulare consente di sistemare penne, foglietti e altri articoli di cancelleria in scomparti separati. Le dimensioni contenute lo rendono adatto a una scrivania individuale, senza richiedere di riorganizzare l'intero spazio di lavoro. La composizione e le misure riportate di seguito si riferiscono al modello presentato in questo esempio.",
      "COMPOSIZIONE E DIMENSIONI\nIl modulo è composto da tre scomparti rimovibili inseriti in una base rigida. Dimensioni complessive: 24 cm di larghezza, 12 cm di profondità e 8 cm di altezza. Colore indicato: grigio chiaro. Il prodotto è destinato ai piccoli accessori di cancelleria: non utilizzarlo per riporre oggetti caldi o alimenti. Le misure si riferiscono all'organizer assemblato.",
      "ISTRUZIONI PER L'USO\nPosiziona l'organizer su una superficie stabile e asciutta. Distribuisci gli oggetti in modo equilibrato tra gli scomparti e rimuovi i singoli elementi quando devi pulire la base. Per la pulizia ordinaria, usa un panno morbido leggermente umido e lascia asciugare tutti i componenti prima di rimontarli. Non utilizzare detergenti abrasivi.",
      "DOMANDE FREQUENTI\nGli scomparti sono rimovibili? Sì, tutti e tre possono essere estratti dalla base per facilitare l'organizzazione e la pulizia.\nL'organizer può contenere un computer portatile? No. Le sue dimensioni e la sua funzione non sono adatte a questo utilizzo.\nLe dimensioni comprendono la base? Sì. Larghezza, profondità e altezza si riferiscono al prodotto assemblato.",
      "INFORMAZIONI PRIMA DELL'ACQUISTO\nPrima di ordinare, controlla le dimensioni e la descrizione del modello selezionato. Disponibilità, spese di spedizione e tempi di consegna devono essere confermati dal venditore al momento dell'acquisto. Questa scheda non garantisce la presenza del prodotto in magazzino né una data di consegna."
    ],
    "terminology": [
      {
        "source": "compartiments amovibles",
        "target": "scomparti rimovibili",
        "explanation": {
          "it": "Preferenza per il termine standard nelle schede prodotto italiane.",
          "en": "Common Italian e-commerce wording.",
          "fr": "Terme naturel pour une fiche italienne.",
          "es": "Término habitual en italiano."
        }
      },
      {
        "source": "dimensions de l'ensemble",
        "target": "dimensioni complessive",
        "explanation": {
          "it": "Formula sintetica coerente con le misure riportate.",
          "en": "Accurate reference to the assembled item.",
          "fr": "Référence claire aux dimensions du produit assemblé.",
          "es": "Referencia clara al producto montado."
        }
      },
      {
        "source": "passer commande",
        "target": "ordinare",
        "explanation": {
          "it": "Uso diretto e naturale in contesto e-commerce.",
          "en": "Natural Italian purchasing language.",
          "fr": "Formulation italienne idiomatique.",
          "es": "Verbo directo y natural."
        }
      }
    ],
    "method": {
      "it": "Localizzazione del testo prodotto per l'e-commerce italiano, con informazioni mantenute senza aggiunte promozionali.",
      "en": "Full e-commerce localisation with no extra product claims.",
      "fr": "Adaptation fidèle de toutes les rubriques sans arguments ajoutés.",
      "es": "Localización completa sin promesas adicionales."
    },
    "review": {
      "it": "Controllo puntuale di misure, numero di componenti, limitazioni d'uso e risposte alle FAQ; testo di esempio originale.",
      "en": "Verify dimensions, features, safety wording and FAQs against source.",
      "fr": "Vérification des dimensions, des usages et des questions fréquentes.",
      "es": "Revisión de medidas, advertencias y respuestas."
    },
    "output": {
      "it": "Scheda completa in francese, versione italiana integrale e tre scelte terminologiche commentate.",
      "en": "Complete French source and Italian target product page with glossary.",
      "fr": "Fiche française et traduction italienne complètes, avec glossaire.",
      "es": "Ficha francesa e italiana completas con glosario."
    }
  },
  {
    "id": "es-it-complete-customer-help-policy-and-replies",
    "direction": "ES-IT",
    "domain": {
      "it": "FAQ di assistenza, ordini e appuntamenti",
      "en": "Customer-service FAQ and process messages",
      "fr": "FAQ de relation client et procédure",
      "es": "Preguntas frecuentes de atención al cliente"
    },
    "title": {
      "it": "Centro assistenza: pagina completa ES → IT",
      "en": "Complete help-centre page: Spanish to Italian",
      "fr": "Centre d'aide complet : espagnol vers italien",
      "es": "Centro de ayuda completo: español a italiano"
    },
    "context": {
      "it": "Una società che assiste clienti italiani deve adattare un'intera pagina di aiuto da spagnolo a italiano, distinguendo l'aggiornamento di un ordine, la modifica di un appuntamento e la richiesta documentale.",
      "en": "A provider serving Italian customers needs an entire help page localised from Spanish, with accurate distinctions between order updates, appointments and documentation.",
      "fr": "Un prestataire adapte en italien une page complète d'aide rédigée en espagnol.",
      "es": "Un proveedor adapta una página de ayuda del español al italiano."
    },
    "source": [
      "CENTRO DE AYUDA — PEDIDOS Y SOLICITUDES\nEste espacio reúne las instrucciones principales para las personas que ya utilizan nuestros servicios. Antes de escribirnos, comprueba que tienes a mano la referencia de tu solicitud. Nuestro equipo puede ayudarte a localizar el siguiente paso, pero no modificará un pedido ni confirmará una entrega sin la autorización correspondiente.",
      "CONSULTAR EL ESTADO DE UN PEDIDO\nSi necesitas información sobre un pedido existente, indica su referencia y explica qué dato deseas confirmar: preparación, envío o entrega. Estos estados no significan lo mismo. Si el pedido está preparado, no implica necesariamente que el transportista lo haya recogido. Cuando no dispongamos de una fecha confirmada, te lo indicaremos expresamente y solicitaremos la verificación al departamento responsable.",
      "CAMBIAR UNA CITA\nPuedes pedir una modificación respondiendo al mensaje de confirmación que recibiste. Para ayudarte, incluye la fecha original y, si es posible, dos alternativas que te vengan bien. Revisaremos las franjas autorizadas y te enviaremos una propuesta. La cita no se considerará modificada hasta que recibas una confirmación expresa con la nueva fecha y hora.",
      "SOLICITAR DOCUMENTACIÓN\nSi no encuentras un documento vinculado a un servicio, indícanos su nombre o referencia. Comprobaremos si existe una versión aprobada que podamos compartir. Evita adjuntar contraseñas o información personal que no sea necesaria para resolver la consulta. Cuando la solicitud esté relacionada con facturas u otros documentos contables, te indicaremos cómo contactar con el departamento competente.",
      "¿CUÁNDO SE CIERRA UNA SOLICITUD?\nEl caso se cierra cuando se ha dado una respuesta conforme al procedimiento y no quedan acciones pendientes del equipo. Si tu petición requiere otra validación, permanecerá abierta y registraremos el seguimiento. Si necesitas aportar más información, responde al mismo hilo para conservar el contexto.\nGracias por utilizar nuestros servicios.\nEquipo de Atención al Cliente."
    ],
    "target": [
      "CENTRO ASSISTENZA — ORDINI E RICHIESTE\nIn questa sezione trovi le indicazioni principali per chi utilizza già i nostri servizi. Prima di contattarci, tieni a portata di mano il riferimento della tua richiesta. Il nostro gruppo di assistenza può aiutarti a individuare il passaggio successivo, ma non modificherà un ordine né confermerà una consegna senza la necessaria autorizzazione.",
      "VERIFICARE LO STATO DI UN ORDINE\nSe ti occorrono informazioni su un ordine già effettuato, indica il relativo riferimento e specifica che cosa desideri sapere: preparazione, spedizione o consegna. Si tratta di fasi diverse. Un ordine pronto, per esempio, non è necessariamente già stato affidato al corriere. Quando non disponiamo di una data confermata, te lo comunicheremo chiaramente e chiederemo una verifica al reparto competente.",
      "MODIFICARE UN APPUNTAMENTO\nPuoi richiedere uno spostamento rispondendo al messaggio di conferma ricevuto. Per aiutarci a gestire la richiesta, indica la data originaria e, se possibile, due fasce alternative per te comode. Controlleremo le disponibilità autorizzate e ti invieremo una proposta. L'appuntamento sarà considerato modificato solo dopo una conferma esplicita della nuova data e del nuovo orario.",
      "RICHIEDERE UN DOCUMENTO\nSe non trovi un documento relativo a un servizio, comunicaci il nome o il riferimento. Verificheremo se esiste una versione approvata che possiamo condividere. Evita di allegare password o dati personali non necessari a gestire la richiesta. Se la domanda riguarda fatture o altri documenti contabili, ti indicheremo come rivolgerti all'ufficio competente.",
      "QUANDO VIENE CHIUSA UNA RICHIESTA?\nLa pratica viene chiusa quando è stata fornita una risposta secondo la procedura prevista e non restano attività in carico al gruppo di assistenza. Se occorre un'ulteriore approvazione, la richiesta rimarrà aperta e ne registreremo il seguito. Se devi aggiungere informazioni, rispondi alla stessa conversazione per mantenerne il contesto.\nGrazie per aver scelto i nostri servizi.\nServizio clienti."
    ],
    "terminology": [
      {
        "source": "pedido existente",
        "target": "ordine già effettuato",
        "explanation": {
          "it": "Evita «ordine esistente», poco idiomatico per una richiesta commerciale.",
          "en": "Natural Italian for an already placed order.",
          "fr": "Expression idiomatique pour une commande en cours.",
          "es": "Evita un calco literal."
        }
      },
      {
        "source": "franjas autorizadas",
        "target": "disponibilità autorizzate",
        "explanation": {
          "it": "Esplicita il controllo sul calendario condiviso.",
          "en": "Clarifies approved diary availability.",
          "fr": "Précise la disponibilité validée.",
          "es": "Aclara que las franjas requieren autorización."
        }
      },
      {
        "source": "mismo hilo",
        "target": "stessa conversazione",
        "explanation": {
          "it": "Più naturale per assistenza clienti via email o piattaforma.",
          "en": "Suitable for an email or help-centre thread.",
          "fr": "Naturel pour le suivi d'une conversation.",
          "es": "Adecuado para el seguimiento de mensajes."
        }
      }
    ],
    "method": {
      "it": "Adattamento completo di istruzioni e FAQ destinate ai clienti italiani, con tono diretto e affidabile.",
      "en": "Full help-centre localisation for established Italian customers.",
      "fr": "Adaptation intégrale des consignes et FAQ pour clients italiens.",
      "es": "Localización completa de una página de ayuda."
    },
    "review": {
      "it": "Verificati i passaggi su ordine, appuntamenti, documento e chiusura della pratica; nessuna promessa non contenuta nel testo sorgente.",
      "en": "Check the operational sequence and preserve approval requirements.",
      "fr": "Contrôle des étapes et validations.",
      "es": "Verificación del proceso y de las autorizaciones."
    },
    "output": {
      "it": "Pagina sorgente spagnola completa, localizzazione italiana integrale e glossario con note.",
      "en": "Full Spanish and Italian help-centre pages plus terminology notes.",
      "fr": "Page espagnole et italienne intégrales avec commentaires.",
      "es": "Página española e italiana completas con glosario."
    }
  }
];
