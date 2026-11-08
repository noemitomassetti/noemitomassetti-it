import type { TranslationDeepCase } from "./portfolioDeepTypes";

/** Public professional translation demonstrations: source language → Italian only. */
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
        "Dimensioni: altezza 26 cm, diametro massimo 15 cm. Il vaso è pensato per fiori secchi o come elemento decorativo. Poiché non è garantita la tenuta stagna dell’interno, sconsigliamo di riempirlo d’acqua. Rimuova la polvere con un panno morbido e asciutto; eviti prodotti abrasivi.",
        "I pezzi sono realizzati in piccole serie. Se il colore desiderato è esaurito, può chiedere di ricevere un avviso quando tornerà disponibile. L’iscrizione all’avviso non equivale a una prenotazione né a un ordine. Per informazioni sulle caratteristiche del prodotto, contatti il nostro team."
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
        "it": "Ho separato lo stile evocativo dalle informazioni di sicurezza, mantenendo le condizioni d’uso e il registro di cortesia del testo originale.",
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
        "Oggetto: aggiornamento sull’ordine ES-2148. Buongiorno Lucía, grazie per il messaggio. Abbiamo verificato il suo ordine e le confermiamo che la finitura rovere chiaro è ancora in attesa di una nuova fornitura del produttore. Gli altri articoli sono pronti, ma non sono ancora stati spediti.",
        "Per questo motivo non possiamo confermare la settimana di spedizione inizialmente stimata. Il nostro team aggiornerà la pianificazione non appena riceverà conferma dal fornitore. Le scriveremo quando avremo una data di spedizione attendibile. Per il momento non è necessario che faccia nulla.",
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
    }
];
