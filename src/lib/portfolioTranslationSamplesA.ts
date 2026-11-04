import type { TranslationDeepCase } from "./portfolioDeepTypes";

/** Original fictional editorial exercises, not customer commissions. */
export const TRANSLATION_SAMPLES_A: TranslationDeepCase[] = [
  {
    "id": "en-it-digital-onboarding",
    "direction": "EN-IT",
    "domain": {
      "it": "Software e assistenza digitale",
      "en": "Software and user onboarding",
      "fr": "Logiciels et accueil utilisateur",
      "es": "Software e incorporación"
    },
    "title": {
      "it": "Onboarding software: istruzioni EN → IT",
      "en": "Software onboarding: English to Italian",
      "fr": "Parcours logiciel : anglais vers italien",
      "es": "Incorporación de software: inglés a italiano"
    },
    "context": {
      "it": "Una piattaforma immaginaria di gestione progetti deve adattare in italiano tre schermate di onboarding, spiegando autorizzazioni, notifiche e assistenza senza promesse non verificate.",
      "en": "A fictional project platform needs three onboarding screens in Italian: roles, notifications and support, without unsupported product claims.",
      "fr": "Une plateforme fictive veut adapter trois écrans en italien : autorisations, notifications et aide, sans ajouter de fonctionnalités.",
      "es": "Una plataforma ficticia necesita tres pantallas en italiano sobre permisos, notificaciones y ayuda, sin inventar funciones."
    },
    "source": [
      "Welcome to Northline Workspace. Start by choosing which projects you want to see on your home screen. You can change your selection at any time. This choice only affects your own view: it does not change the projects your colleagues are allowed to access.",
      "Before inviting your team, review the sharing settings for each project. People with viewer access can read updates and download shared files, but they cannot edit tasks. Editors can update tasks only in projects they have been invited to join. Check the role assigned to each person before sending an invitation.",
      "Notifications are switched off by default. Turn on daily email updates if you want a summary of tasks assigned to you. You can change your preference later under Settings. If you need help, open the Help Centre or write to our support team; do not include passwords or payment details in your message."
    ],
    "target": [
      "Benvenuto in Northline Workspace. Per iniziare, scegli quali progetti vuoi visualizzare nella schermata iniziale. Potrai modificare la selezione in qualsiasi momento. Questa scelta riguarda soltanto la tua visualizzazione: non modifica i progetti ai quali i colleghi possono accedere.",
      "Prima di invitare il team, verifica le impostazioni di condivisione di ogni progetto. Gli utenti con accesso in sola lettura possono consultare gli aggiornamenti e scaricare i file condivisi, ma non modificare le attività. Chi dispone dei permessi di modifica può aggiornare le attività soltanto nei progetti ai quali è stato invitato. Controlla il ruolo assegnato a ciascuno prima di inviare l’invito.",
      "Le notifiche sono disattivate per impostazione predefinita. Se desideri ricevere ogni giorno un riepilogo delle attività assegnate, attiva gli aggiornamenti via email. Puoi modificare questa preferenza in seguito, nella sezione Impostazioni. Per ricevere assistenza, consulta il Centro assistenza oppure scrivi al team di supporto. Non inserire password o dati di pagamento nel messaggio."
    ],
    "terminology": [
      {
        "source": "viewer access",
        "target": "accesso in sola lettura",
        "explanation": {
          "it": "Esplicita un livello di autorizzazione, anziché calcare «viewer».",
          "en": "Names the actual permission level instead of retaining an obscure role label.",
          "fr": "Précise le niveau d’autorisation plutôt que de conserver « viewer ».",
          "es": "Explica el permiso real, sin calcar la etiqueta «viewer»."
        }
      },
      {
        "source": "only affects your own view",
        "target": "riguarda soltanto la tua visualizzazione",
        "explanation": {
          "it": "Distingue preferenze personali e permessi condivisi.",
          "en": "Keeps personal display preferences separate from team access rights.",
          "fr": "Sépare les préférences d’affichage des droits d’accès.",
          "es": "Distingue la vista personal de los permisos del equipo."
        }
      },
      {
        "source": "switched off by default",
        "target": "disattivate per impostazione predefinita",
        "explanation": {
          "it": "Descrive lo stato iniziale, senza suggerire un guasto.",
          "en": "States the default setting, not a fault.",
          "fr": "Indique un réglage initial, et non une panne.",
          "es": "Indica una configuración inicial, no un fallo."
        }
      }
    ],
    "method": {
      "it": "Ho conservato l’ordine delle azioni, separando le preferenze personali dalle autorizzazioni del team; ho utilizzato comandi brevi e terminologia coerente con un’interfaccia.",
      "en": "The structure preserves action order, separates preferences from permissions and uses interface-friendly commands.",
      "fr": "La structure conserve l’ordre des actions, sépare préférences et autorisations et emploie des consignes adaptées à une interface.",
      "es": "Se mantiene el orden de las acciones, la distinción entre preferencias y permisos, y unas instrucciones adecuadas para la interfaz."
    },
    "review": {
      "it": "Controllo di ruoli, notifiche, divieto di condividere credenziali, uniformità dei termini «progetto», «attività» e «invito». Le stringhe finali andrebbero verificate nel prodotto reale.",
      "en": "QA covers roles, default notifications, credential warnings and consistent UI terms. Final strings would need in-product verification.",
      "fr": "Contrôle des rôles, des réglages initiaux, de la confidentialité et des libellés. Une validation dans le produit réel resterait nécessaire.",
      "es": "Se comprueban permisos, notificaciones, advertencias y terminología; faltaría validación en el producto real."
    },
    "output": {
      "it": "Tre schermate complete, glossario delle autorizzazioni e checklist di revisione UI.",
      "en": "Three full onboarding screens, permissions terminology and a UI QA checklist.",
      "fr": "Trois écrans complets, glossaire des droits et checklist qualité.",
      "es": "Tres pantallas completas, glosario de permisos y lista de control."
    }
  },
  {
    "id": "it-en-consultancy-services",
    "direction": "IT-EN",
    "domain": {
      "it": "Comunicazione professionale B2B",
      "en": "B2B service website copy",
      "fr": "Présentation B2B",
      "es": "Presentación de servicios B2B"
    },
    "title": {
      "it": "Pagina servizi di una consulente IT → EN",
      "en": "Consultancy services page: Italian to English",
      "fr": "Page de services : italien vers anglais",
      "es": "Página de servicios: italiano a inglés"
    },
    "context": {
      "it": "Una consulente immaginaria deve presentare a interlocutori anglofoni una collaborazione di back office operativo, senza far credere che offra contabilità o acquisizione clienti.",
      "en": "A fictional independent consultant needs an English service page defining operational support without suggesting accounting or sales prospecting.",
      "fr": "Une indépendante fictive doit présenter ses services en anglais sans laisser entendre qu’elle gère la comptabilité ou la prospection.",
      "es": "Una consultora ficticia necesita textos ingleses claros sin promesas de contabilidad ni captación comercial."
    },
    "source": [
      "Un supporto organizzativo costruito sulle attività reali del tuo studio. Ti aiuto a tenere in ordine le richieste dei clienti già acquisiti, la corrispondenza quotidiana e i materiali di lavoro, in modo che informazioni e scadenze siano facili da ritrovare. Non devi affidarmi tutto: possiamo partire da un solo processo.",
      "Il servizio può comprendere la classificazione delle email, l’aggiornamento di registri operativi, l’organizzazione dei documenti condivisi e la preparazione di bozze di risposta secondo le istruzioni concordate. Definiamo prima dell’avvio quali attività posso svolgere autonomamente e quali richiedono la tua approvazione.",
      "Non mi occupo di contabilità, emissione di fatture, ricerca di nuovi clienti o chiamate commerciali. Per capire se il supporto è adatto alla tua attività, descrivimi il lavoro che vorresti delegare. Ti invierò una proposta scritta con attività, tempi e condizioni, senza impegno da parte tua."
    ],
    "target": [
      "Organisational support shaped around the way your practice actually works. I help you keep existing customer enquiries, everyday correspondence and working documents in order, making information and deadlines easier to find. You do not need to delegate everything: we can start with a single workflow.",
      "The service can include email triage, updating operational trackers, organising shared files and preparing reply drafts in line with agreed instructions. Before work begins, we define which tasks I may carry out independently and which require your approval.",
      "I do not provide bookkeeping, invoicing, lead generation or cold calling. To find out whether this support would suit your business, tell me which tasks you would like to delegate. I will send you a written proposal outlining the scope, timescales and terms, with no obligation to proceed."
    ],
    "terminology": [
      {
        "source": "studio",
        "target": "practice",
        "explanation": {
          "it": "Per consulenti e professionisti è spesso più naturale di «studio», che in inglese può indicare uno spazio creativo.",
          "en": "Appropriate for a professional practice; avoids a misleading literal ‘studio’.",
          "fr": "Convient à une activité libérale, sans faux sens.",
          "es": "Adecuado para un despacho profesional y no un estudio artístico."
        }
      },
      {
        "source": "registri operativi",
        "target": "operational trackers",
        "explanation": {
          "it": "Evidenzia attività e stati di avanzamento, non registrazioni contabili.",
          "en": "Makes it clear these are workflow logs rather than financial ledgers.",
          "fr": "Évite de confondre tableaux de suivi et comptabilité.",
          "es": "Evita confundir registros operativos con libros contables."
        }
      },
      {
        "source": "senza impegno",
        "target": "with no obligation to proceed",
        "explanation": {
          "it": "La formulazione spiega la scelta del cliente, senza promettere consulenza gratuita.",
          "en": "Describes a no-obligation proposal, not free work.",
          "fr": "Clarifie la liberté de donner suite au devis.",
          "es": "Aclara que la propuesta no obliga a contratar."
        }
      }
    ],
    "method": {
      "it": "Ho mantenuto un registro professionale britannico, reso i confini dei servizi espliciti ed evitato formule enfatiche tipiche del marketing generico.",
      "en": "Uses restrained British professional English, explicit service boundaries and a practical call to action.",
      "fr": "Anglais professionnel britannique, périmètre clair et appel à l’action mesuré.",
      "es": "Inglés profesional británico, alcance delimitado y llamada a la acción concreta."
    },
    "review": {
      "it": "Verificati parallelismo degli elenchi, differenza tra proposta e incarico, divieto di implicare servizi contabili e coerenza del termine «approval».",
      "en": "Checks cover parallel lists, the distinction between proposal and contract, excluded services and the meaning of approval.",
      "fr": "Contrôle des énumérations, du périmètre et de la validation.",
      "es": "Control de listas, exclusiones y condiciones de aprobación."
    },
    "output": {
      "it": "Tre sezioni web complete: promessa di valore, perimetro del servizio e richiesta di preventivo, con glossario di riferimento.",
      "en": "Three complete web sections: value proposition, scope and enquiry CTA, with a mini glossary.",
      "fr": "Trois sections prêtes pour un site : bénéfice, périmètre, devis.",
      "es": "Tres secciones listas para web: propuesta, alcance y contacto."
    }
  },
  {
    "id": "fr-it-handmade-product",
    "direction": "FR-IT",
    "domain": {
      "it": "Scheda prodotto e catalogo",
      "en": "Product detail page",
      "fr": "Fiche produit",
      "es": "Ficha de producto"
    },
    "title": {
      "it": "Ceramica artigianale: scheda FR → IT",
      "en": "Handmade ceramics product page: French to Italian",
      "fr": "Céramique artisanale : français vers italien",
      "es": "Cerámica artesanal: francés a italiano"
    },
    "context": {
      "it": "Un marchio fittizio francese vuole descrivere per i clienti italiani materiale, finitura, manutenzione e disponibilità di un vaso; senza inventare certificazioni o garanzie.",
      "en": "A fictional French brand needs Italian product copy covering materials, care and availability without inventing certifications.",
      "fr": "Une marque française fictive prépare une fiche italienne décrivant matières, entretien et disponibilité, sans labels inventés.",
      "es": "Una marca francesa ficticia necesita una ficha italiana de materiales, cuidado y disponibilidad, sin certificaciones inventadas."
    },
    "source": [
      "Vase Sillage — une présence discrète, façonnée à la main. Chaque vase est réalisé dans notre atelier en grès, puis recouvert d’un émail mat qui laisse apparaître de légères variations de teinte. Ces nuances font partie du procédé artisanal et ne constituent pas des défauts.",
      "Dimensions : hauteur 26 cm, diamètre maximal 15 cm. Le vase est destiné aux fleurs séchées ou à une utilisation décorative. L’intérieur n’étant pas garanti étanche, nous déconseillons d’y verser de l’eau. Dépoussiérez la surface avec un chiffon doux et sec ; évitez les produits abrasifs.",
      "Les pièces sont fabriquées en petites séries. Si la couleur souhaitée est épuisée, vous pouvez demander à être averti de son retour. Cette inscription ne constitue ni une réservation ni une commande. Pour toute question sur les caractéristiques d’une pièce, contactez notre équipe."
    ],
    "target": [
      "Vaso Sillage — una presenza discreta, modellata a mano. Ogni vaso è realizzato nel nostro laboratorio in gres e rifinito con uno smalto opaco che lascia emergere leggere variazioni di tonalità. Queste sfumature sono caratteristiche della lavorazione artigianale e non costituiscono difetti.",
      "Dimensioni: altezza 26 cm, diametro massimo 15 cm. Il vaso è pensato per fiori secchi o come elemento decorativo. Poiché non è garantita la tenuta stagna dell’interno, sconsigliamo di riempirlo d’acqua. Rimuovi la polvere con un panno morbido e asciutto; evita prodotti abrasivi.",
      "I pezzi sono realizzati in piccole serie. Se il colore che desideri è esaurito, puoi chiedere di essere avvisato quando tornerà disponibile. L’iscrizione all’avviso non equivale a una prenotazione né a un ordine. Per informazioni sulle caratteristiche del prodotto, contatta il nostro team."
    ],
    "terminology": [
      {
        "source": "grès",
        "target": "gres",
        "explanation": {
          "it": "Denominazione del materiale in italiano, senza sostituirlo genericamente con «ceramica».",
          "en": "Uses the specific material name, not a vague ‘ceramic’.",
          "fr": "Conserve la spécificité du matériau.",
          "es": "Mantiene el material específico, no una etiqueta genérica."
        }
      },
      {
        "source": "n’étant pas garanti étanche",
        "target": "non è garantita la tenuta stagna",
        "explanation": {
          "it": "La cautela è essenziale per evitare un uso con acqua non previsto.",
          "en": "Preserves the important limitation on water use.",
          "fr": "Préserve une restriction d’usage déterminante.",
          "es": "Conserva la advertencia esencial sobre el agua."
        }
      },
      {
        "source": "petites séries",
        "target": "piccole serie",
        "explanation": {
          "it": "Non si aggiunge una promessa di esclusività o numerazione.",
          "en": "No invented numbered-edition or exclusivity promise.",
          "fr": "Aucune exclusivité inventée.",
          "es": "No se inventa una edición limitada numerada."
        }
      }
    ],
    "method": {
      "it": "Ho separato stile evocativo e informazioni di sicurezza, mantenendo le condizioni d’uso e il trattamento coerente con il tono del marchio.",
      "en": "Separates brand tone from important use restrictions, while retaining measurements and product care.",
      "fr": "Distingue style évocateur et consignes d’usage sans altérer les mesures.",
      "es": "Separa estilo y advertencias, manteniendo medidas y cuidado."
    },
    "review": {
      "it": "Controllati 26 cm, 15 cm, gres, smalto opaco, uso senza acqua e assenza di prenotazione implicita.",
      "en": "Checks cover both measurements, stoneware, matte glaze, water warning and the no-reservation condition.",
      "fr": "Contrôle des mesures, du grès, du vernis, de l’eau et de la réservation.",
      "es": "Control de medidas, material, esmalte, agua y reservas."
    },
    "output": {
      "it": "Scheda italiana completa: descrizione, dati tecnici, manutenzione, limitazioni e disponibilità.",
      "en": "Complete Italian product page with description, specifications, care, limitations and availability.",
      "fr": "Fiche italienne complète, de la description aux restrictions.",
      "es": "Ficha italiana completa, incluida la información de uso."
    }
  },
  {
    "id": "it-fr-professional-training",
    "direction": "IT-FR",
    "domain": {
      "it": "Comunicazione corsi e iscrizioni",
      "en": "Professional course communication",
      "fr": "Formation et inscriptions",
      "es": "Formación e inscripciones"
    },
    "title": {
      "it": "Presentazione di un corso IT → FR",
      "en": "Training course information: Italian to French",
      "fr": "Présentation d’une formation : italien vers français",
      "es": "Presentación de un curso: italiano a francés"
    },
    "context": {
      "it": "Un centro formativo immaginario presenta un percorso a professionisti francofoni. L’obiettivo è trasmettere durata, requisiti e modalità senza creare attestazioni non dichiarate.",
      "en": "A fictional training provider needs a faithful French course description preserving duration, prerequisites and participation terms.",
      "fr": "Un organisme fictif souhaite communiquer aux professionnels francophones les horaires, prérequis et conditions, sans promettre de certification.",
      "es": "Una entidad ficticia necesita información de un curso en francés con duración, requisitos y condiciones reales."
    },
    "source": [
      "Laboratorio di comunicazione professionale: gestire le richieste scritte dei clienti. Il percorso online è rivolto a professionisti e piccoli team che desiderano organizzare meglio le comunicazioni con clienti già acquisiti. Si lavora su messaggi, priorità, modelli di risposta e procedure di verifica prima dell’invio.",
      "Il laboratorio comprende quattro incontri in diretta da 90 minuti ciascuno, per un totale di sei ore. Ai partecipanti vengono forniti materiali di esercitazione e una checklist operativa. Non sono richieste competenze tecniche avanzate, ma è necessario poter accedere a una piattaforma di videoconferenza.",
      "Le iscrizioni si chiudono cinque giorni prima dell’avvio, salvo esaurimento dei posti disponibili. Il calendario dettagliato e le modalità di pagamento vengono comunicati prima della conferma definitiva. Al termine non è previsto il rilascio di una certificazione professionale. Per informazioni, invia una richiesta scritta al team organizzativo."
    ],
    "target": [
      "Atelier de communication professionnelle : gérer les demandes écrites des clients. Cette formation en ligne s’adresse aux professionnels et aux petites équipes qui souhaitent mieux organiser leurs échanges avec des clients déjà acquis. Les exercices portent sur les messages, les priorités, les modèles de réponse et les vérifications à effectuer avant l’envoi.",
      "L’atelier comprend quatre séances en direct de 90 minutes chacune, soit six heures au total. Les participants reçoivent des supports d’exercice et une liste de contrôle opérationnelle. Aucune compétence technique avancée n’est requise, mais il faut pouvoir accéder à une plateforme de visioconférence.",
      "Les inscriptions prennent fin cinq jours avant le début de la formation, sous réserve des places disponibles. Le calendrier détaillé et les modalités de paiement sont communiqués avant la confirmation définitive. La formation ne donne pas lieu à la délivrance d’une certification professionnelle. Pour toute question, adressez une demande écrite à l’équipe organisatrice."
    ],
    "terminology": [
      {
        "source": "laboratorio",
        "target": "atelier",
        "explanation": {
          "it": "Restituisce la componente pratica, più chiaramente di «laboratoire».",
          "en": "Signals a practical workshop rather than a literal laboratory.",
          "fr": "Évoque le travail pratique ; « laboratoire » serait trompeur.",
          "es": "Expresa trabajo práctico, no un laboratorio científico."
        }
      },
      {
        "source": "incontri in diretta",
        "target": "séances en direct",
        "explanation": {
          "it": "Distingue sessioni sincrone da video registrati.",
          "en": "Distinguishes live sessions from recordings.",
          "fr": "Distingue les séances synchrones des vidéos enregistrées.",
          "es": "Distingue sesiones en vivo de grabaciones."
        }
      },
      {
        "source": "certificazione professionale",
        "target": "certification professionnelle",
        "explanation": {
          "it": "Mantiene il limite della proposta: nessun titolo rilasciato.",
          "en": "Retains the explicit no-certification condition.",
          "fr": "Conserve l’absence de certification.",
          "es": "Mantiene la ausencia de certificación."
        }
      }
    ],
    "method": {
      "it": "Registro francese professionale coerente, adattamento delle formule di iscrizione e verifica dei numeri: quattro incontri da 90 minuti sono sei ore.",
      "en": "Uses natural professional French, adapts enrolment phrasing and checks that four 90-minute sessions total six hours.",
      "fr": "Français professionnel naturel ; conditions d’inscription fidèles ; durée totale vérifiée.",
      "es": "Francés profesional natural, condiciones fieles y cálculo de horas comprobado."
    },
    "review": {
      "it": "Verificati destinatari, requisiti, scadenza, condizioni di pagamento e assenza di certificazione. Non sono state aggiunte promesse di riconoscimento dei crediti.",
      "en": "Checks audience, prerequisites, deadline, payment conditions and no certification; no invented credits.",
      "fr": "Vérification du public, des prérequis, du délai, des paiements et de l’absence de certification.",
      "es": "Se revisan público, requisitos, plazo, pago y ausencia de certificación."
    },
    "output": {
      "it": "Pagina informativa FR con descrizione, programma, modalità, iscrizioni e note terminologiche.",
      "en": "French course page with programme, access, registration terms and terminology notes.",
      "fr": "Page française complète : programme, accès, inscription, précisions.",
      "es": "Página francesa completa con programa, acceso, inscripción y notas."
    }
  },
  {
    "id": "es-it-existing-customer",
    "direction": "ES-IT",
    "domain": {
      "it": "Customer care e ordini",
      "en": "Existing-order customer care",
      "fr": "Relation client et commandes",
      "es": "Atención al cliente y pedidos"
    },
    "title": {
      "it": "Aggiornamento di un ordine ES → IT",
      "en": "Existing-order email: Spanish to Italian",
      "fr": "Courriel client : espagnol vers italien",
      "es": "Correo de pedido: español a italiano"
    },
    "context": {
      "it": "Un fornitore immaginario comunica a un cliente italiano già acquisito un aggiornamento sulla disponibilità, senza confondere data di spedizione e consegna.",
      "en": "A fictional supplier informs an existing Italian customer about stock and shipping without promising delivery timing.",
      "fr": "Un fournisseur fictif informe un client italien existant sans confondre expédition et livraison.",
      "es": "Un proveedor ficticio informa a un cliente italiano actual, sin confundir envío y entrega."
    },
    "source": [
      "Asunto: actualización de su pedido ES-2148. Buenos días, Lucía: gracias por su mensaje. Hemos revisado su pedido y le confirmamos que el acabado roble claro sigue pendiente de una nueva remesa del fabricante. El resto de los artículos está preparado, pero todavía no se ha enviado.",
      "Por este motivo, no podemos mantener la semana de expedición estimada inicialmente. Nuestro equipo actualizará la planificación cuando reciba la confirmación del proveedor. Le escribiremos en cuanto dispongamos de una fecha de salida fiable. Por ahora no es necesario que realice ninguna gestión.",
      "Si los nuevos plazos no se ajustan a las necesidades de su proyecto, puede responder a este correo. Le explicaremos las opciones previstas en las condiciones de su pedido, sin realizar cambios sin su autorización. Lamentamos las molestias y agradecemos su comprensión. Atentamente, Equipo de Atención al Cliente."
    ],
    "target": [
      "Oggetto: aggiornamento sull’ordine ES-2148. Buongiorno Lucia, grazie per il messaggio. Abbiamo verificato il suo ordine e le confermiamo che la finitura rovere chiaro è ancora in attesa di una nuova fornitura del produttore. Gli altri articoli sono pronti, ma non sono ancora stati spediti.",
      "Per questo motivo non possiamo confermare la settimana di spedizione inizialmente stimata. Il nostro team aggiornerà la pianificazione non appena riceverà conferma dal fornitore. Le scriveremo quando avremo una data di partenza attendibile. Per il momento non è necessario che faccia nulla.",
      "Se le nuove tempistiche non fossero compatibili con le esigenze del suo progetto, può rispondere a questa email. Le illustreremo le possibilità previste dalle condizioni dell’ordine, senza apportare modifiche senza la sua autorizzazione. Ci scusiamo per il disagio e la ringraziamo per la comprensione. Cordiali saluti, Servizio clienti."
    ],
    "terminology": [
      {
        "source": "expedición",
        "target": "spedizione",
        "explanation": {
          "it": "Non si traduce con «consegna», che ha un significato diverso.",
          "en": "Dispatch does not mean final delivery.",
          "fr": "L’expédition n’est pas la livraison.",
          "es": "La expedición no es la entrega."
        }
      },
      {
        "source": "remesa",
        "target": "fornitura",
        "explanation": {
          "it": "Termine adatto al contesto dei materiali in arrivo dal produttore.",
          "en": "Natural in a supplier replenishment context.",
          "fr": "Adapté à un réapprovisionnement du fabricant.",
          "es": "Adecuado para mercancía pendiente del fabricante."
        }
      },
      {
        "source": "sin su autorización",
        "target": "senza la sua autorizzazione",
        "explanation": {
          "it": "Mantiene esplicitamente il controllo del cliente sulle modifiche.",
          "en": "Preserves the requirement for customer authorisation.",
          "fr": "Préserve l’accord préalable du client.",
          "es": "Conserva el consentimiento antes de cambios."
        }
      }
    ],
    "method": {
      "it": "Ho mantenuto il registro formale coerente con «usted», l’incertezza sulle tempistiche e il controllo delle modifiche da parte del cliente.",
      "en": "Maintains formal address, timing uncertainty and the customer's control over changes.",
      "fr": "Conserve le vouvoiement, l’incertitude et l’accord du client.",
      "es": "Mantiene trato formal, incertidumbre de plazos y autorización del cliente."
    },
    "review": {
      "it": "Controllati ordine ES-2148, stato degli articoli, distinzione spedizione/consegna, assenza di rimborsi non previsti.",
      "en": "Checked order reference, status, dispatch/delivery distinction and no invented refunds.",
      "fr": "Contrôle de la référence, du statut et de l’absence de promesses.",
      "es": "Se verifica referencia, estado, diferencia envío/entrega y ausencia de promesas."
    },
    "output": {
      "it": "Email completa in italiano pronta per la revisione e approvazione prima dell’invio.",
      "en": "Complete Italian email for review and approval before sending.",
      "fr": "Courriel complet en italien à valider avant envoi.",
      "es": "Correo completo en italiano para revisión antes del envío."
    }
  },
  {
    "id": "it-es-product-information",
    "direction": "IT-ES",
    "domain": {
      "it": "Cataloghi e schede prodotto",
      "en": "Product information and catalogues",
      "fr": "Catalogues de produits",
      "es": "Catálogos y fichas de producto"
    },
    "title": {
      "it": "Scheda prodotto sostenibile IT → ES",
      "en": "Sustainable homeware product page: Italian to Spanish",
      "fr": "Fiche produit : italien vers espagnol",
      "es": "Ficha de producto: italiano a español"
    },
    "context": {
      "it": "Un’azienda immaginaria italiana desidera una scheda in spagnolo per un articolo di tessile casa: materiali, manutenzione e condizioni di disponibilità, senza dichiarazioni ambientali non verificabili.",
      "en": "A fictional Italian home-textile company needs a Spanish product listing with accurate care, stock terms and no unsupported sustainability claims.",
      "fr": "Une marque italienne fictive souhaite une fiche espagnole précise, sans allégations écologiques infondées.",
      "es": "Una marca italiana ficticia necesita una ficha en español con cuidados y disponibilidad, sin promesas medioambientales no verificadas."
    },
    "source": [
      "Tovaglia Linea — lino e cotone per la tavola di ogni giorno. Un tessuto dalla trama leggermente irregolare, piacevole al tatto e adatto sia agli ambienti contemporanei sia alle tavole più tradizionali. La finitura è pensata per valorizzare il materiale senza alterarne l’aspetto naturale.",
      "Composizione: 55% lino, 45% cotone. Misure: 150 × 250 cm. Lavare a 30 °C con ciclo delicato e colori simili; non candeggiare. Asciugare all’aria. Stirare a temperatura media, preferibilmente quando il tessuto è ancora leggermente umido. Le dimensioni indicate si riferiscono al prodotto prima del primo lavaggio.",
      "La tovaglia è disponibile fino a esaurimento delle scorte. Puoi verificare i colori presenti a catalogo prima di inviare un ordine. L’aggiunta al carrello non garantisce la disponibilità fino alla conferma dell’acquisto. Per informazioni su dimensioni e manutenzione, scrivi al nostro servizio clienti."
    ],
    "target": [
      "Mantel Linea — lino y algodón para la mesa de cada día. Un tejido de trama ligeramente irregular, agradable al tacto y adecuado tanto para ambientes contemporáneos como para mesas de estilo más tradicional. El acabado realza el material sin alterar su aspecto natural.",
      "Composición: 55 % lino y 45 % algodón. Medidas: 150 × 250 cm. Lavar a 30 °C con un programa delicado y con colores similares; no utilizar lejía. Secar al aire. Planchar a temperatura media, preferiblemente cuando el tejido esté todavía ligeramente húmedo. Las medidas indicadas corresponden al producto antes del primer lavado.",
      "El mantel está disponible hasta agotar existencias. Puedes comprobar los colores disponibles en el catálogo antes de realizar el pedido. Añadir el artículo al carrito no garantiza su disponibilidad hasta que se confirme la compra. Si necesitas información sobre las medidas o el cuidado del producto, escribe a nuestro servicio de atención al cliente."
    ],
    "terminology": [
      {
        "source": "tovaglia",
        "target": "mantel",
        "explanation": {
          "it": "Termine comune e univoco nel commercio tessile spagnolo.",
          "en": "Standard Spanish product term.",
          "fr": "Terme commercial usuel en espagnol.",
          "es": "Término habitual para textiles de mesa."
        }
      },
      {
        "source": "non candeggiare",
        "target": "no utilizar lejía",
        "explanation": {
          "it": "Resa chiara dell’avvertenza di manutenzione nel contesto spagnolo.",
          "en": "Clear care warning for Spanish-speaking customers.",
          "fr": "Consigne d’entretien explicite.",
          "es": "Advertencia de cuidado clara y natural."
        }
      },
      {
        "source": "fino a esaurimento delle scorte",
        "target": "hasta agotar existencias",
        "explanation": {
          "it": "Formula commerciale idiomatica, senza garanzie di disponibilità.",
          "en": "Idiomatic stock limitation without a guaranteed reservation.",
          "fr": "Limitation de stock explicite.",
          "es": "Expresión comercial habitual, sin garantizar existencias."
        }
      }
    ],
    "method": {
      "it": "Ho mantenuto invariati percentuali, misure e istruzioni. Le scelte lessicali si rivolgono a un pubblico spagnolo generico, da adattare se richiesto a uno specifico mercato nazionale.",
      "en": "Preserves figures and care instructions, using broadly accessible Spanish to be localised further for a named target market if necessary.",
      "fr": "Conserve les chiffres et consignes ; espagnol général à adapter selon le pays visé.",
      "es": "Se mantienen porcentajes y cuidados; el español puede ajustarse al mercado nacional elegido."
    },
    "review": {
      "it": "Verificati 55/45%, 150 × 250 cm, 30 °C, divieto di candeggiare e condizioni di disponibilità. Nessuna certificazione ecologica inventata.",
      "en": "QA covers composition, dimensions, temperature, bleach warning and availability; no invented eco certification.",
      "fr": "Contrôle de la composition, des mesures, de l’entretien et de la disponibilité.",
      "es": "Se revisan porcentajes, medidas, lavado, lejía y existencias."
    },
    "output": {
      "it": "Scheda spagnola articolata in presentazione, informazioni tecniche, manutenzione e acquisto.",
      "en": "Spanish product listing with description, specifications, care and purchasing conditions.",
      "fr": "Fiche espagnole détaillée, prête à être relue pour un marché donné.",
      "es": "Ficha española con descripción, datos, cuidado y condiciones de compra."
    }
  }
];
