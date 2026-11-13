import type { OperationalDeepCase } from "./portfolioOperationalTypes";

/** Original fictional work samples. No client data or commissioned work is disclosed. */
export const OPERATIONAL_SAMPLES_B: OperationalDeepCase[] = [
  {
    "id": "research-existing-italian-customers",
    "category": "research",
    "title": {
      "it": "Ricerca informativa: confronto strumenti per clienti italiani già acquisiti",
      "en": "Italy-focused desk research: tool comparison",
      "fr": "Recherche documentaire liée aux clients italiens",
      "es": "Investigación documental para clientes italianos"
    },
    "service": {
      "it": "Ricerche informative e benchmark",
      "en": "Desk research and informational benchmarks",
      "fr": "Recherche documentaire et comparaison",
      "es": "Investigación documental y comparación"
    },
    "scenario": {
      "it": "Una piccola azienda europea immaginaria con clienti italiani già acquisiti deve valutare strumenti per organizzare le richieste di assistenza; non cerca lead o contatti di vendita.",
      "en": "A fictional EU microbusiness serving existing Italian customers needs a support-workflow comparison, not sales leads.",
      "fr": "Une petite entreprise européenne fictive compare des outils de suivi des clients italiens existants, sans prospection.",
      "es": "Una microempresa europea ficticia compara herramientas para atender clientes italianos actuales, sin captación."
    },
    "objective": {
      "it": "Proporre un confronto verificabile di funzionalità, costi e requisiti, senza inventare fonti, listini aggiornati o certificazioni.",
      "en": "Create a reproducible comparison with explicit unknowns and no invented vendor facts.",
      "fr": "Comparer les critères de façon transparente, sans inventer des prix ou des sources.",
      "es": "Comparar criterios sin inventar precios ni fuentes verificadas."
    },
    "inputs": {
      "it": "Tre soluzioni chiamate A, B e C, tutte fittizie; requisiti di prova: permessi, esportazione, italiano, semplicità e prezzi.",
      "en": "Three entirely fictional product profiles; criteria: roles, export, Italian UI, complexity and pricing.",
      "fr": "Trois outils fictifs et des critères explicites.",
      "es": "Tres herramientas inventadas y criterios explícitos."
    },
    "workflow": [
      {
        "it": "Definire scopo e criteri assieme al responsabile.",
        "en": "Agree scope and selection criteria with the owner.",
        "fr": "Définir les critères avec le responsable.",
        "es": "Definir el alcance y los criterios."
      },
      {
        "it": "Separare documentazione ufficiale, dati da verificare e ipotesi.",
        "en": "Distinguish documented facts, gaps and hypotheses.",
        "fr": "Séparer faits, lacunes et hypothèses.",
        "es": "Separar hechos, dudas e hipótesis."
      },
      {
        "it": "Organizzare una matrice che non trasformi le lacune in punteggi inventati.",
        "en": "Use a matrix that preserves unknowns instead of guessed scores.",
        "fr": "Afficher les informations manquantes.",
        "es": "Mostrar los datos pendientes."
      },
      {
        "it": "Preparare un memo con verifiche successive e decisioni da confermare.",
        "en": "Deliver a decision memo and verification steps.",
        "fr": "Remettre une note de synthèse.",
        "es": "Entregar un informe de decisión."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Brief e criteri di ricerca",
          "en": "Research brief",
          "fr": "Cahier des critères",
          "es": "Brief de investigación"
        },
        "content": "RICERCA INFORMATIVA — SCENARIO INTERAMENTE FITTIZIO\nScopo: scegliere uno strumento per tracciare le richieste postvendita di clienti italiani già acquisiti.\nPesi concordabili: ruoli/permessi 30%; esportazione dati 25%; interfaccia italiana 20%; facilità d'uso 15%; costi trasparenti 10%. Totale 100%.\nRequisiti minimi: almeno due livelli di accesso; registrazione stato e responsabile; esportazione dati in formato leggibile.\nFonti da consultare in un incarico reale: documentazione ufficiale del fornitore, listini pubblici datati, pagine sulle autorizzazioni e condizioni di conservazione dei dati.\nEscluso: ricerca di nuovi potenziali clienti, raccolta di contatti commerciali o attività di outreach.\nQuesto testo dimostra il metodo, non dichiara che le fonti siano già state consultate.",
        "explanation": {
          "it": "I criteri precedono il confronto, evitando valutazioni arbitrarie.",
          "en": "Criteria are set before comparing products, reducing subjective rankings.",
          "fr": "Les critères précèdent la comparaison.",
          "es": "Los criterios preceden la comparación."
        }
      },
      {
        "title": {
          "it": "Matrice e memo di verifica",
          "en": "Comparison matrix and verification memo",
          "fr": "Tableau et note de vérification",
          "es": "Matriz e informe"
        },
        "content": "MATRICE DIMOSTRATIVA — NESSUNA AZIENDA REALE\nSoluzione A (inventata) | Ruoli: sì | Export: CSV | Italiano: sì | Prezzo: DA VERIFICARE.\nSoluzione B (inventata) | Ruoli: da verificare | Export: da verificare | Italiano: no | Prezzo: DA VERIFICARE.\nSoluzione C (inventata) | Ruoli: sì | Export: JSON | Italiano: parziale | Prezzo: DA VERIFICARE.\nNOTA AL RESPONSABILE: il profilo fittizio A sembra soddisfare i requisiti minimi, ma non è possibile consigliarlo sul mercato reale senza documenti verificati, prova autorizzata e condizioni economiche effettive.\nVERIFICHE NECESSARIE: eventuali costi aggiuntivi, revoca degli accessi, accessibilità, politiche di conservazione, esportazione completa e disponibilità della lingua italiana.\nCONSEGNA REALE PREVISTA: matrice con URL e date consultazione, sintesi delle differenze, rischi e aspetti irrisolti.",
        "explanation": {
          "it": "Le lacune restano visibili: non si inventano giudizi o prezzi verificati.",
          "en": "Unknowns remain visible; the matrix does not invent live prices.",
          "fr": "Les inconnues restent visibles.",
          "es": "Las incógnitas quedan visibles."
        }
      },
      {
        "title": {
          "it": "Matrice decisionale e approvazioni",
          "en": "Decision matrix and approval trail",
          "fr": "Matrice de décision et validations",
          "es": "Matriz de decisión y aprobaciones"
        },
        "content": "MATRICE DECISIONALE — SOLUZIONI E DATI INVENTATI\nCriteri di riferimento, coerenti con il brief: ruoli e permessi 30%; esportazione dei dati 25%; interfaccia italiana 20%; facilità d'uso 15%; trasparenza dei costi 10%. Totale 100%.\nSoluzione A: ruoli dichiarati, esportazione CSV e interfaccia italiana indicate nello scenario; costo non verificato. Richiede conferma sulla configurazione dei permessi e sulla completezza dell'esportazione.\nSoluzione B: ruoli ed esportazione non verificati; italiano non disponibile nello scenario; costo non verificato. Il requisito linguistico risulta mancante.\nSoluzione C: ruoli dichiarati, esportazione JSON e interfaccia italiana parziale; costi non verificati. Necessario un controllo della copertura linguistica e dell'esportazione.\nNon vengono attribuiti punteggi numerici non documentati: i dati sono fittizi e mancano le informazioni necessarie per applicare una valutazione ponderata.\nCampi indispensabili in un'analisi reale: link alla fonte ufficiale, data di consultazione, criterio verificato, limitazioni del piano, persona responsabile e autorizzazione.\nStato: in attesa di verifica e approvazione. Nessun acquisto, contratto, accesso a sistemi o contatto commerciale è stato effettuato.",
        "explanation": {
          "it": "Il confronto distingue dati verificati, valutazioni interne e decisione riservata al cliente, senza trasformarsi in acquisizione di contatti.",
          "en": "The matrix separates verifiable facts, fictional scoring and the client's final approval; it is not a prospecting exercise.",
          "fr": "La matrice sépare faits vérifiables, notes fictives et décision du client, sans démarche de prospection.",
          "es": "La matriz distingue los hechos verificables, las puntuaciones ficticias y la aprobación del cliente, sin prospección comercial."
        }
      },
      {
        "title": {
          "it": "Relazione finale sulla selezione di uno strumento: verifiche aperte",
          "en": "Complete software assessment memo and outstanding checks",
          "fr": "Note de comparaison et vérifications à effectuer",
          "es": "Informe comparativo y verificaciones pendientes"
        },
        "language": "it",
        "content": "MEMO COMPARATIVO — TRE SOLUZIONI SOFTWARE INTERAMENTE FITTIZIE\nDestinatario: responsabile di una piccola attività immaginaria con clienti italiani già acquisiti.\nOggetto: gestione delle richieste postvendita; esclusa la ricerca di nuovi clienti.\n\nREQUISITI CONCORDABILI\n1. Permessi: almeno due livelli di autorizzazione verificabili.\n2. Esportazione dei dati: formato leggibile, con verifica delle condizioni d'uso.\n3. Interfaccia italiana: traduzione effettivamente presente e comprensibile.\n4. Semplicità: utilizzo compatibile con le procedure del team.\n5. Costi: prezzo totale, limiti di piano e condizioni da verificare.\nPesi di riferimento per un eventuale confronto documentato: 30%, 25%, 20%, 15%, 10%. I pesi non autorizzano a inventare voti in assenza di evidenze.\n\nSCHEDA A — FONTE INVENTATA\nDati dichiarati nello scenario: ruoli disponibili, esportazione CSV, interfaccia italiana; costo sconosciuto.\nValutazione descrittiva: potrebbe soddisfare i requisiti iniziali, ma occorre verificare se i permessi siano configurabili, se l'esportazione includa tutti i campi necessari e quali siano i limiti della versione prevista. Nessuna prova è stata effettuata.\n\nSCHEDA B — FONTE INVENTATA\nDati dichiarati: permessi ed esportazione non ancora verificati, interfaccia italiana non disponibile, prezzo sconosciuto.\nValutazione descrittiva: non soddisfa il requisito linguistico indicato nello scenario. Senza documentazione non è appropriato attribuire un voto o considerarla idonea.\n\nSCHEDA C — FONTE INVENTATA\nDati dichiarati: ruoli disponibili, esportazione JSON, localizzazione italiana parziale, prezzo sconosciuto.\nValutazione descrittiva: necessita di verifica sull'effettiva copertura linguistica e sulla facilità di utilizzo del formato esportato. Non è stata testata.\n\nNOTA AL RESPONSABILE — VERSIONE PRONTA PER LA REVISIONE\nBuongiorno,\nho organizzato le informazioni di prova relative alle tre opzioni A, B e C in base ai criteri concordabili per il progetto. La matrice evidenzia informazioni mancanti su costi, limiti d'uso ed esportazione. Non ho assegnato punteggi di qualità o raccomandato un acquisto, perché le informazioni non sono state verificate su documenti ufficiali o mediante una prova autorizzata.\nPer procedere chiederei di definire quali requisiti siano indispensabili e di autorizzare la consultazione delle fonti pubbliche pertinenti. Il confronto definitivo dovrebbe riportare, per ogni dato, URL, data, eventuali limitazioni e osservazioni da controllare.\nIl presente esempio non contiene recensioni di strumenti reali, non prevede contratti e non comporta attività di acquisizione clienti.\nCordiali saluti,\nSupporto alla ricerca informativa\n\nSTATO: memo dimostrativo completato; selezione e acquisto non effettuati.",
        "explanation": {
          "it": "Sintesi professionale di tre soluzioni inventate, senza punteggi arbitrari né acquisti o prove realmente effettuati.",
          "en": "Professional comparison of three fictional tools, without invented verified ratings or purchases.",
          "fr": "Comparaison de trois outils fictifs, sans notes présentées comme vérifiées.",
          "es": "Comparación de tres herramientas ficticias sin puntuaciones verificadas ni compras."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Pesi sommati e nessuna fonte inventata attribuita a imprese reali.",
        "en": "Weights sum to 100%; no fictional claims about real vendors.",
        "fr": "Pondérations à 100 %, sans fausses sources.",
        "es": "Pesos al 100 %, sin fuentes ficticias como reales."
      },
      {
        "it": "Nessuna attività assimilabile a lead generation.",
        "en": "No lead generation or prospect sourcing.",
        "fr": "Aucune prospection.",
        "es": "Sin captación comercial."
      }
    ],
    "limits": {
      "it": "Solo ricerche informative a supporto di attività in corso; non consulenza legale, certificazioni privacy o acquisizione clienti.",
      "en": "Informational research, not legal advice, privacy certification or customer acquisition.",
      "fr": "Recherche documentaire, sans conseil juridique ni prospection.",
      "es": "Investigación informativa, sin asesoría jurídica ni captación."
    },
    "handoff": {
      "it": "Brief, matrice confrontabile e memo con controlli da eseguire.",
      "en": "Brief, comparison and verification memo.",
      "fr": "Brief, matrice et note de vérification.",
      "es": "Brief, matriz y comprobaciones."
    }
  },
  {
    "id": "web-copy-before-after",
    "category": "web",
    "title": {
      "it": "Contenuti web: pagina servizi riscritta, con FAQ e CTA",
      "en": "Website copy: full service-page before and after",
      "fr": "Révision d'une page de services et de sa FAQ",
      "es": "Contenido web: página de servicios antes y después"
    },
    "service": {
      "it": "Contenuti per siti e landing page",
      "en": "Existing website and landing-page copy",
      "fr": "Contenus de sites et pages de destination",
      "es": "Contenidos para sitios y páginas de destino"
    },
    "scenario": {
      "it": "Una microimpresa immaginaria con clienti già acquisiti ha una pagina servizi con promesse vaghe e nessuna spiegazione delle richieste gestibili.",
      "en": "A fictional microbusiness has vague service copy and no useful information about supporting existing customers.",
      "fr": "Une microentreprise fictive utilise une présentation imprécise pour ses clients existants.",
      "es": "Una microempresa ficticia tiene mensajes vagos sobre la atención a sus clientes actuales."
    },
    "objective": {
      "it": "Riscrivere la pagina in modo chiaro e utile, con destinatari, limiti, modalità, FAQ e richiesta di contatto, senza inventare tempi garantiti.",
      "en": "Deliver accurate CMS-ready copy, FAQs and next steps without invented service promises.",
      "fr": "Créer des textes fiables pour CMS, FAQ et prise de contact.",
      "es": "Crear textos claros listos para CMS, preguntas y contacto."
    },
    "inputs": {
      "it": "Bozza inventata: «Siamo leader, rispondiamo sempre immediatamente e risolviamo ogni problema». Nel brief non ci sono prove del primato né tempi di risposta garantiti.",
      "en": "Fictional original claims to be a market leader and always reply instantly, without supporting evidence.",
      "fr": "Texte fictif promettant une réponse immédiate sans preuve.",
      "es": "Borrador ficticio que promete atención inmediata sin confirmación."
    },
    "workflow": [
      {
        "it": "Individuare affermazioni non dimostrate.",
        "en": "Identify unsupported claims.",
        "fr": "Identifier les affirmations non fondées.",
        "es": "Identificar afirmaciones sin base."
      },
      {
        "it": "Definire struttura informativa e pubblico.",
        "en": "Define content hierarchy and audience.",
        "fr": "Définir l'architecture et le public.",
        "es": "Definir estructura y público."
      },
      {
        "it": "Riscrivere testi e microcopy con perimetro chiaro.",
        "en": "Rewrite copy and UI labels with clear scope.",
        "fr": "Réviser le texte et les libellés.",
        "es": "Reescribir textos y etiquetas."
      },
      {
        "it": "Preparare FAQ e controlli pre-pubblicazione.",
        "en": "Prepare FAQs and pre-publication checks.",
        "fr": "Préparer FAQ et vérifications.",
        "es": "Preparar preguntas y controles."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Prima/dopo: presentazione del servizio",
          "en": "Before/after: service copy",
          "fr": "Avant/après : présentation",
          "es": "Antes/después: presentación"
        },
        "content": "VERSIONE INIZIALE — TESTO FITTIZIO\nH1: Soluzioni complete per ogni esigenza\nTesto: Siamo leader del settore e rispondiamo sempre in tempo reale. Ogni problema sarà risolto subito.\nPulsante: Scopri di più\n\nVERSIONE REVISIONATA — ESEMPIO EDITORIALE\nH1: Informazioni e assistenza scritta per i tuoi ordini in corso\nSottotitolo: Hai un ordine già effettuato e vuoi verificare un documento, una disponibilità o lo stato della tua richiesta? Scrivici: raccogliamo le informazioni necessarie e le verifichiamo con il referente competente.\nH2: Che cosa possiamo verificare\n• Stato delle richieste associate a ordini esistenti.\n• Documenti e informazioni già disponibili.\n• Segnalazioni da inoltrare al reparto competente.\nH2: Come funziona\n1. Invia il riferimento dell'ordine, senza dati bancari o credenziali.\n2. Verifichiamo la richiesta ed eventuali informazioni mancanti.\n3. Ti comunichiamo un aggiornamento attendibile oppure il prossimo passo.\nPulsante: Invia una richiesta di assistenza.\nNota editoriale: non promettere tempi di risposta senza accordo e dati verificati.",
        "explanation": {
          "it": "Il testo rivisto chiarisce il valore concreto senza promettere risultati non documentati.",
          "en": "The revision explains the process without fabricating outcomes.",
          "fr": "La version révisée explique les étapes sans promesses inventées.",
          "es": "La versión revisada concreta el proceso sin promesas inventadas."
        }
      },
      {
        "title": {
          "it": "FAQ e controllo editoriale",
          "en": "FAQ and editorial checks",
          "fr": "FAQ et vérification",
          "es": "FAQ y revisión"
        },
        "content": "FAQ — ESEMPIO PER IL SITO\nD: Posso chiedere un aggiornamento su un ordine esistente?\nR: Sì, comunicando il riferimento, in modo che il team possa individuare la richiesta.\nD: Posso ottenere una conferma immediata della consegna?\nR: La data può essere comunicata soltanto dopo verifica delle informazioni disponibili.\nD: Posso modificare l'ordine dal modulo?\nR: Puoi inviare una richiesta di modifica; eventuali variazioni richiedono conferma del referente autorizzato.\n\nCHECKLIST PER LA PUBBLICAZIONE\n□ H1 descrittivo e pertinente.\n□ Nessun «leader del mercato» non dimostrato.\n□ Nessun tempo di risposta garantito senza prova.\n□ CTA coerente con ciò che il modulo può realmente gestire.\n□ Dati sensibili non richiesti.\n□ Testi e condizioni verificati e approvati dal committente.\nCONSEGNA: testo editoriale pronto per CMS esistente; non include sviluppo, hosting o configurazione del sito.",
        "explanation": {
          "it": "Le FAQ rendono il servizio comprensibile e preservano le autorizzazioni del committente.",
          "en": "FAQs clarify scope and approval conditions.",
          "fr": "La FAQ clarifie le périmètre et les validations.",
          "es": "La FAQ aclara el servicio y las autorizaciones."
        }
      },
      {
        "title": {
          "it": "Scheda pronta per l'inserimento nel CMS",
          "en": "CMS-ready editorial content sheet",
          "fr": "Fiche éditoriale prête pour le CMS",
          "es": "Ficha editorial lista para el CMS"
        },
        "content": "ESEMPIO DIMOSTRATIVO — SCHEDA REDAZIONALE PER SITO ESISTENTE\nPagina: Servizio di assistenza scritta ai clienti già acquisiti.\nTitolo SEO proposto: Assistenza clienti via email | Servizi e modalità operative\nMeta description proposta: Scopri come richiedere assistenza scritta per ordini già effettuati, quali informazioni preparare e come vengono gestite le richieste.\nH1: Assistenza scritta per i tuoi ordini\nTesto introduttivo: Hai già effettuato un ordine e desideri ricevere informazioni? Scrivici indicando il codice ordine e la tua richiesta. Verificheremo i dati disponibili e ti forniremo un aggiornamento sulla base delle informazioni verificate.\nFAQ: Posso modificare un ordine già confermato? Ogni richiesta viene verificata in base allo stato dell'ordine; nessuna modifica è garantita senza conferma.\nCTA: Invia una richiesta di assistenza\nControlli: un solo H1, nessuna promessa di risposta immediata, terminologia coerente, linguaggio semplice, testi dei pulsanti descrittivi.\nConsegna: contenuti testuali per un CMS già esistente; installazione, codice, SEO tecnico e pubblicazione non inclusi.",
        "explanation": {
          "it": "Non soltanto una riscrittura: il cliente vede titolo, metadati, H1, FAQ, CTA e controlli editoriali, con confini tecnici dichiarati.",
          "en": "A practical deliverable: title, metadata, H1, FAQ, CTA and editorial checks, with technical development clearly excluded.",
          "fr": "Un livrable concret : titre, métadonnées, H1, FAQ, appel à l'action et contrôles rédactionnels, hors développement technique.",
          "es": "Un entregable práctico con título, metadatos, H1, FAQ, CTA y controles editoriales; no incluye desarrollo técnico."
        }
      },
      {
        "title": {
          "it": "Pagina servizi completa: prima, dopo e controllo di pubblicazione",
          "en": "Complete revised website copy and release notes",
          "fr": "Page de services révisée et contrôles de publication",
          "es": "Página de servicios revisada y controles de publicación"
        },
        "language": "it",
        "content": "TESTI EDITORIALI COMPLETI — PAGINA SERVIZI DI UN'AZIENDA IMMAGINARIA\nLavoro originale di revisione e riscrittura, senza sviluppo di siti o campagne di acquisizione.\n\nH1: Assistenza scritta per i tuoi ordini\nIntroduzione: Hai già effettuato un ordine e desideri sapere a che punto è una richiesta? Puoi scriverci indicando il riferimento dell'ordine e spiegando brevemente di che cosa hai bisogno. Verificheremo le informazioni disponibili prima di preparare una risposta.\n\nH2: Per quali richieste possiamo aiutarti\n• Informazioni sullo stato di un ordine già effettuato, da verificare con il referente competente.\n• Chiarimenti sui documenti e sulle comunicazioni che hai ricevuto.\n• Segnalazioni relative ad articoli, disponibilità o modalità di consegna, da esaminare secondo le condizioni applicabili.\n• Richieste che necessitano di essere inoltrate alla persona autorizzata.\nNon confermiamo automaticamente modifiche, rimborsi o tempi di consegna senza verifiche.\n\nH2: Come inviare una richiesta\n1. Indica il numero d'ordine, se disponibile e pertinente.\n2. Descrivi il problema in modo chiaro; non inviare password o dati di pagamento.\n3. Invia il messaggio attraverso il canale di contatto ufficiale.\n4. Attendi il riscontro sullo stato della richiesta o sulle informazioni ancora necessarie.\n\nH2: Domande frequenti\nD: Posso chiedere un aggiornamento sulla consegna?\nR: Sì, se hai già effettuato un ordine. La data può essere comunicata soltanto dopo averne verificato lo stato.\nD: Posso modificare l'indirizzo di spedizione?\nR: Puoi inviare una richiesta. L'eventuale modifica dipende dallo stato dell'ordine e dall'autorizzazione del referente.\nD: Devo comunicare la password del mio account?\nR: No, non inviarla mai nel modulo.\nD: La conferma di invio del modulo significa che la richiesta è risolta?\nR: No. Indica soltanto che il messaggio è stato ricevuto dal sistema, se il servizio lo conferma.\n\nPulsante principale: Invia una richiesta di assistenza.\nTitolo SEO proposto: Assistenza per gli ordini | Informazioni e richieste\nDescrizione SEO proposta: Scopri come inviare una richiesta di assistenza relativa a ordini già effettuati e quali informazioni preparare.\n\nNOTA DI CONSEGNA\nLa versione iniziale conteneva affermazioni come «leader» e «risolviamo ogni problema subito», non supportate dal brief. La versione proposta elimina tali promesse e descrive l'attività senza inventare tempi o funzionalità del modulo. Prima della pubblicazione vanno confermati canale di contatto, condizioni del servizio e trattamento dei dati. La realizzazione tecnica, i test del modulo e la pubblicazione restano esclusi.",
        "explanation": {
          "it": "Il testo editoriale finito, con FAQ, microtesti e informazioni da confermare prima dell'inserimento nel sito.",
          "en": "Complete revised copy, FAQs and checks before publication in an existing site.",
          "fr": "Textes de la page, FAQ et vérifications avant intégration.",
          "es": "Textos completos, preguntas frecuentes y comprobaciones previas."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Nessuna promessa commerciale non autorizzata.",
        "en": "No unapproved marketing or timing claims.",
        "fr": "Aucun engagement non validé.",
        "es": "Sin promesas no autorizadas."
      },
      {
        "it": "La consegna riguarda soltanto contenuti editoriali.",
        "en": "Editorial deliverables only.",
        "fr": "Prestation éditoriale uniquement.",
        "es": "Entrega solo editorial."
      }
    ],
    "limits": {
      "it": "Nessun sviluppo web, manutenzione tecnica, campagne, acquisizione clienti o garanzia SEO.",
      "en": "No web development, maintenance, sales campaigns or SEO ranking guarantees.",
      "fr": "Sans développement, maintenance ni garantie de classement.",
      "es": "Sin desarrollo, mantenimiento ni garantías de posicionamiento."
    },
    "handoff": {
      "it": "Pagina riscritta con paragrafi, CTA, FAQ e checklist di approvazione.",
      "en": "CMS-ready service page, FAQs, CTA and sign-off checklist.",
      "fr": "Page de services, FAQ, CTA et validation.",
      "es": "Página de servicios, FAQ, CTA y revisión."
    }
  },
  {
    "id": "catalogue-price-list-proofreading",
    "category": "writing",
    "title": {
      "it": "Catalogo e listino: revisione testuale con anomalie da verificare",
      "en": "Product catalogue editing with a documented issue log",
      "fr": "Révision d'un catalogue avec suivi d'anomalies",
      "es": "Revisión de catálogo con registro de incidencias"
    },
    "service": {
      "it": "Revisione di cataloghi, schede e listini",
      "en": "Catalogue and product-copy editing",
      "fr": "Révision de catalogues et fiches",
      "es": "Revisión de catálogos y fichas"
    },
    "scenario": {
      "it": "Un produttore artigiano fittizio presenta tre schede con dimensioni incomplete, materiali ambigui e denominazioni incoerenti dei colori.",
      "en": "A fictional craft maker has three product sheets with ambiguous materials, dimensions and finishes.",
      "fr": "Un producteur fictif a des fiches produits aux caractéristiques ambiguës.",
      "es": "Un fabricante ficticio tiene tres fichas con materiales, dimensiones y variantes de color ambiguas."
    },
    "objective": {
      "it": "Rendere i contenuti coerenti e segnalare le informazioni tecniche da approvare, senza modificare autonomamente prezzi o caratteristiche.",
      "en": "Improve copy consistency and flag technical questions without setting prices or inventing specifications.",
      "fr": "Harmoniser les textes et signaler les caractéristiques à valider.",
      "es": "Unificar textos y señalar datos que deben aprobarse."
    },
    "inputs": {
      "it": "Tre schede di prova, un listino simulato in sola lettura e nessun manuale tecnico verificato.",
      "en": "Three invented listings, read-only mock prices and no verified technical manual.",
      "fr": "Trois fiches fictives et un tarif en lecture seule.",
      "es": "Tres fichas ficticias y tarifa en modo lectura."
    },
    "workflow": [
      {
        "it": "Rilevare incoerenze, dati mancanti e dubbi terminologici.",
        "en": "Flag factual gaps and terminology.",
        "fr": "Signaler lacunes et incohérences.",
        "es": "Detectar dudas e incoherencias."
      },
      {
        "it": "Uniformare struttura, lessico e unità di misura.",
        "en": "Apply consistent headings, terms and units.",
        "fr": "Uniformiser structure, lexique et unités.",
        "es": "Unificar estructura, términos y unidades."
      },
      {
        "it": "Creare registro delle verifiche da inviare al titolare.",
        "en": "Create an approval issue list.",
        "fr": "Créer une liste des points à confirmer.",
        "es": "Crear registro de dudas."
      },
      {
        "it": "Consegnare versione revisionata senza alterare prezzi.",
        "en": "Deliver revised copy without independent price changes.",
        "fr": "Livrer les textes sans modifier les prix.",
        "es": "Entregar textos sin alterar precios."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Scheda prodotto: prima e dopo",
          "en": "Product page before/after",
          "fr": "Fiche avant/après",
          "es": "Ficha antes/después"
        },
        "content": "TESTO INIZIALE FITTIZIO\nLampada Sfera. Legno e forse ceramica. Dimensione 35x18. Pulire normalmente. Disponibile in tanti colori.\n\nTESTO REVISIONATO, NON ANCORA APPROVATO\nLampada da tavolo Sfera\nDescrizione: complemento d'arredo dalle linee essenziali, pensato per ambienti domestici contemporanei.\nMateriali: DA CONFERMARE. La bozza indica «legno e forse ceramica», ma non permette di attribuire materiali alle singole parti.\nDimensioni: 35 × 18 — UNITÀ E ORIENTAMENTO DA CONFERMARE (altezza, larghezza, diametro).\nManutenzione: ISTRUZIONI DEL PRODUTTORE DA RICHIEDERE. Non pubblicare «pulire normalmente».\nVarianti: DA VERIFICARE SUL CATALOGO APPROVATO.\nSTATO: revisione stilistica completata; scheda sospesa fino alla conferma di materiali, misure e istruzioni.",
        "explanation": {
          "it": "Si migliora la leggibilità senza trasformare dati dubbi in caratteristiche certe.",
          "en": "No unsupported dimensions, materials or care advice are invented.",
          "fr": "Les caractéristiques incertaines restent signalées.",
          "es": "Los materiales y medidas dudosos siguen pendientes."
        }
      },
      {
        "title": {
          "it": "Registro anomalie e guida di stile",
          "en": "Issue log and style guide",
          "fr": "Registre et guide de style",
          "es": "Incidencias y guía de estilo"
        },
        "content": "REGISTRO DI QUALITÀ — CASO SIMULATO\nCAT-001 Sfera | materiali ambigui | priorità alta | referente: prodotto.\nCAT-001 Sfera | dimensioni senza unità | priorità alta | referente: prodotto.\nCAT-002 Nastro | colori «beige» e «sabbia» non collegati ai codici | priorità media | referente: commerciale.\nCAT-003 Linea | istruzioni di cura assenti | priorità media | referente: prodotto.\n\nGUIDA EDITORIALE DI CONSEGNA\n1. Titoli: nome prodotto e tipologia, senza superlativi non documentati.\n2. Misure: dichiarare sempre unità e ordine delle dimensioni.\n3. Materiali: utilizzare soltanto denominazioni approvate.\n4. Colori: mantenere il nome associato al codice commerciale.\n5. Cura: non inventare istruzioni del produttore.\n6. Listini: correggere impaginazione e riferimenti, non prezzi.\nNessuna scheda con criticità aperte viene contrassegnata «pronta per pubblicazione».",
        "explanation": {
          "it": "Il registro permette al cliente di autorizzare ogni dato prima della consegna definitiva.",
          "en": "Issues are assigned for owner verification before publication.",
          "fr": "Les points ouverts doivent être approuvés.",
          "es": "Las incidencias deben resolverse antes de publicar."
        }
      },
      {
        "title": {
          "it": "Estratto di controllo incrociato schede e listino",
          "en": "Cross-check extract: product sheets and price list",
          "fr": "Extrait de contrôle croisé : fiches et tarifs",
          "es": "Extracto de cotejo: fichas y lista de precios"
        },
        "content": "ESEMPIO DIMOSTRATIVO — CATALOGO E LISTINO CON DATI INVENTATI\nRiferimento: revisione editoriale v1.2, non aggiornamento contabile.\nART-041 | Portadocumenti Linea | Scheda: feltro riciclato, 32 × 24 cm | Listino approvato: €18,50 | Stato: COERENTE.\nART-042 | Custodia Note | Scheda: tessuto, 18 × 12 cm | Listino approvato: €12,00 | Bozza catalogo: €21,00 | Stato: DISALLINEAMENTO DA CORREGGERE SU APPROVAZIONE.\nART-043 | Vassoio Piano | Scheda: 25 × 15 cm | Bozza: 25 × 51 cm | Stato: DIMENSIONE DA VERIFICARE SULLA FONTE ORIGINALE.\nRegistro correzioni: [A01] prezzo ART-042, fonte listino cliente, in attesa di conferma; [A02] dimensione ART-043, fonte scheda tecnica, non modificare autonomamente.\nNota di consegna: evidenziare modifiche approvate, conservare una copia precedente e trasmettere le richieste irrisolte al referente.\nEsclusioni: nessuna definizione autonoma dei prezzi, nessuna fatturazione, nessuna pubblicazione o modifica senza autorizzazione.",
        "explanation": {
          "it": "La tabella mostra il controllo di codici, unità di misura e prezzi già approvati, distinguendo le anomalie dalle modifiche autorizzate.",
          "en": "Demonstrates matching item codes, dimensions and approved price-list information, while leaving business decisions to the client.",
          "fr": "Le contrôle rapproche références, dimensions et tarifs déjà validés ; les décisions commerciales restent au client.",
          "es": "Se cotejan códigos, medidas y precios ya aprobados, sin tomar decisiones comerciales por cuenta del cliente."
        }
      },
      {
        "title": {
          "it": "Schede catalogo e relazione di controllo — consegna dimostrativa",
          "en": "Product copy and discrepancy report — complete sample",
          "fr": "Fiches produit et relevé des écarts — exemple",
          "es": "Fichas de producto e informe de incidencias"
        },
        "language": "it",
        "content": "PACCHETTO EDITORIALE DEL MINI-CATALOGO — DATI INVENTATI\nVersione dimostrativa 1.2. Non sono state apportate modifiche a un catalogo reale o a prezzi approvati.\n\nSCHEDA ART-041 — PORTADOCUMENTI LINEA\nTitolo approvabile: Portadocumenti Linea in feltro riciclato.\nDescrizione: Portadocumenti da scrivania per raccogliere fogli e appunti. Il formato indicato nella scheda di prova è di 32 × 24 cm; il materiale dichiarato è feltro riciclato.\nInformazioni da verificare prima della pubblicazione: disponibilità, colori, modalità di pulizia, eventuali certificazioni.\nPrezzo nel listino dimostrativo: 18,50 €, da sottoporre alla consueta approvazione.\nPulsante proposto: Scopri le caratteristiche.\n\nSCHEDA ART-042 — CUSTODIA NOTE\nTitolo approvabile: Custodia Note in tessuto.\nDescrizione: Custodia per piccoli documenti e appunti, con dimensioni indicate nella bozza pari a 18 × 12 cm. Ulteriori caratteristiche, chiusura e colori non sono specificati: non vanno aggiunti.\nPrezzo: il listino di prova indica 12,00 €, mentre la bozza web riporta 21,00 €. Blocco di pubblicazione fino alla conferma del referente.\nPulsante proposto: Richiedi informazioni.\n\nSCHEDA ART-043 — VASSOIO PIANO\nTitolo provvisorio: Vassoio Piano.\nDescrizione: elemento da appoggio descritto nella scheda iniziale con dimensioni 25 × 15 cm. Nella bozza di catalogo compare invece 25 × 51 cm. Poiché le fonti non coincidono, la misura non deve essere presentata come definitiva.\nMateriale, colori e manutenzione: dati da richiedere.\nStato: testo editoriale sospeso fino alla verifica tecnica.\n\nEMAIL DI CONSEGNA — BOZZA NON INVIATA\nOggetto: Mini-catalogo ART-041, ART-042 e ART-043 — revisione e dati da confermare\nBuongiorno,\nho predisposto le bozze delle tre schede prodotto, uniformando la struttura di titoli e descrizioni. Per ART-041 ho mantenuto soltanto materiale e dimensioni indicati nella fonte. Per ART-042 ho rilevato una differenza tra listino e bozza del sito; non ho scelto autonomamente il prezzo. Per ART-043 segnalo la necessità di verificare le dimensioni prima di procedere.\nPropongo di approvare le informazioni tecniche mancanti e il listino di riferimento prima della pubblicazione. Le versioni precedenti devono rimanere disponibili per il controllo.\nCordiali saluti,\nSupporto editoriale\n\nREGISTRO ERRORI: ART-041 — caratteristiche da integrare; ART-042 — prezzo difforme; ART-043 — misura discordante. Nessun importo è stato cambiato unilateralmente.",
        "explanation": {
          "it": "Tre schede revisionate, verifica delle informazioni mancanti e comunicazione completa al referente.",
          "en": "Three edited product descriptions, missing facts and a complete handover.",
          "fr": "Trois fiches revues, données à confirmer et note au responsable.",
          "es": "Tres fichas revisadas, datos pendientes y comunicación al responsable."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Dati tecnici incerti restano evidenziati.",
        "en": "Unverified facts stay flagged.",
        "fr": "Informations incertaines signalées.",
        "es": "Datos no confirmados destacados."
      },
      {
        "it": "Prezzi e condizioni non modificati autonomamente.",
        "en": "No independent price changes.",
        "fr": "Aucune modification autonome des prix.",
        "es": "Sin cambios de precio no autorizados."
      }
    ],
    "limits": {
      "it": "Revisione editoriale, non certificazione dei prodotti, contabilità o determinazione dei prezzi.",
      "en": "Editing only, not compliance certification, accounting or pricing.",
      "fr": "Révision éditoriale, sans comptabilité ni conformité.",
      "es": "Revisión editorial, no contabilidad ni certificación."
    },
    "handoff": {
      "it": "Scheda prima/dopo, guida di stile, elenco anomalie e indicazioni per l'approvazione.",
      "en": "Before/after copy, style guide and approval log.",
      "fr": "Avant/après, guide et liste des vérifications.",
      "es": "Antes/después, guía y registro."
    }
  },
  {
    "id": "digital-tools-request-workflow",
    "category": "backoffice",
    "title": {
      "it": "Strumenti digitali: organizzazione di richieste e autorizzazioni",
      "en": "Digital workflow: tracking customer requests",
      "fr": "Outils numériques : suivi des demandes",
      "es": "Herramientas digitales: seguimiento de solicitudes"
    },
    "service": {
      "it": "Supporto digitale e organizzazione degli strumenti",
      "en": "Practical digital tools and organisation",
      "fr": "Outils numériques et organisation",
      "es": "Organización de herramientas digitales"
    },
    "scenario": {
      "it": "Una professionista immaginaria con clienti già acquisiti riceve richieste da email e moduli, ma non dispone di un registro condiviso e teme di confondere bozze e messaggi inviati.",
      "en": "A fictional solo professional receives messages through forms and email and needs a simple tracker with approval rules.",
      "fr": "Une professionnelle fictive souhaite centraliser les demandes de ses clients existants.",
      "es": "Una profesional ficticia necesita un registro para correos y formularios."
    },
    "objective": {
      "it": "Definire un processo leggero e verificabile: ogni richiesta ha un ID, un responsabile, uno stato e un passo successivo.",
      "en": "Create a simple, auditable intake process without promising custom-built software.",
      "fr": "Créer un processus simple, sans logiciel sur mesure.",
      "es": "Crear un flujo sencillo, sin software a medida."
    },
    "inputs": {
      "it": "Tre richieste inventate, un modulo di esempio e regole ipotetiche di approvazione delle comunicazioni.",
      "en": "Three fictional enquiries and a sample form, with illustrative approval rules.",
      "fr": "Trois demandes fictives et des règles de validation.",
      "es": "Tres solicitudes inventadas y reglas de aprobación."
    },
    "workflow": [
      {
        "it": "Definire i dati minimi e un identificativo per evitare duplicati.",
        "en": "Define minimum fields and unique case IDs.",
        "fr": "Définir les données minimales et identifiants.",
        "es": "Definir datos mínimos e identificadores."
      },
      {
        "it": "Stabilire stati chiari, evitando «chiuso» per una semplice bozza.",
        "en": "Use status labels that distinguish drafts from completed actions.",
        "fr": "Distinguer brouillon et action terminée.",
        "es": "Distinguir borrador y acción enviada."
      },
      {
        "it": "Prevedere approvazione umana per impegni e comunicazioni delicate.",
        "en": "Require approval for consequential communications.",
        "fr": "Prévoir validation pour décisions sensibles.",
        "es": "Pedir aprobación para comunicaciones sensibles."
      },
      {
        "it": "Consegnare un modello facile da usare su foglio condiviso.",
        "en": "Deliver a simple shared-sheet procedure.",
        "fr": "Fournir un modèle de suivi.",
        "es": "Entregar un modelo sencillo."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Registro operativo simulato",
          "en": "Illustrative request tracker",
          "fr": "Registre de démonstration",
          "es": "Registro de muestra"
        },
        "content": "REGISTRO RICHIESTE — STRUTTURA PROPOSTA\nID | Data | Cliente esistente | Tipo | Referente | Stato | Prossimo passo\nREQ-041 | 04/11 | C-010 | File aggiornato | Assistente | In verifica | Controllare versione autorizzata\nREQ-042 | 04/11 | C-014 | Cambio appuntamento | Titolare | In attesa | Verificare agenda prima della risposta\nREQ-043 | 04/11 | C-021 | Chiarimento ordine | Assistente | Bozza pronta | Richiedere approvazione del testo\nSTATI: ricevuta, in verifica, in attesa, bozza pronta, approvata, chiusa.\n«Chiusa» si applica soltanto dopo la conferma dell'azione effettivamente compiuta. Non conservare dati sensibili nel registro.",
        "explanation": {
          "it": "La tracciabilità evita di confondere bozze con risultati effettivi.",
          "en": "The tracker separates a drafted reply from a completed action.",
          "fr": "La traçabilité distingue brouillon et action effectuée.",
          "es": "El registro distingue borrador y acción completada."
        }
      },
      {
        "title": {
          "it": "Procedura SOP e controlli",
          "en": "SOP and checks",
          "fr": "Procédure et contrôle",
          "es": "Procedimiento y controles"
        },
        "content": "PROCEDURA OPERATIVA SOP-01 — CLIENTI GIÀ ACQUISITI\n1. Ricezione: assegnare ID e verificare eventuali duplicati.\n2. Classificazione: distinguere informazione, richiesta di modifica e necessità di intervento del titolare.\n3. Preparazione: recuperare soltanto i file autorizzati e predisporre una risposta.\n4. Approvazione: non confermare modifiche di ordini, tempi o condizioni senza istruzioni del referente.\n5. Chiusura: registrare l'avvenuto invio solo quando effettivamente effettuato.\nCHECKLIST DI COLLAUDO PROPOSTA: nessuna duplicazione di pratica; permessi minimi; dati non pertinenti non registrati; bozze non inviate automaticamente; permessi revocabili dal titolare.\nNOTA: è una procedura illustrativa, non un software sviluppato o collaudato su account reali.",
        "explanation": {
          "it": "Il processo è praticabile con strumenti esistenti, ma richiede test e approvazioni reali.",
          "en": "The workflow is software-agnostic and does not claim a live implementation.",
          "fr": "La méthode n’affirme aucune mise en service réelle.",
          "es": "El proceso no afirma una implementación real."
        }
      },
      {
        "title": {
          "it": "Modello di richiesta e consenso operativo",
          "en": "Operational access-request and approval template",
          "fr": "Modèle de demande d'accès et de validation",
          "es": "Plantilla de solicitud de acceso y aprobación"
        },
        "content": "ESEMPIO DIMOSTRATIVO — RICHIESTA DI ACCESSO E CAMBIO PROCEDURA\nOggetto: autorizzazione per organizzazione cartelle condivise — progetto Delta.\nBuongiorno, per sistemare la struttura dei documenti del progetto Delta propongo tre interventi: (1) creare una cartella «Da verificare», (2) uniformare i nomi dei file secondo la convenzione concordata, (3) predisporre un indice delle versioni approvate.\nNon sposterò o cancellerò alcun documento senza la tua conferma. Chiedo di indicare il referente, le cartelle autorizzate, il livello di accesso minimo necessario e le eventuali scadenze.\nModulo decisione: cartelle incluse [___]; cartelle escluse [___]; permessi autorizzati [sola lettura/modifica limitata]; responsabile [___]; data [___].\nControlli prima dell'avvio: nessuna password condivisa in chiaro; accesso individuale quando disponibile; elenco file da non spostare; piano di ripristino e registro modifiche.\nConsegna prevista: struttura approvata, indice documenti, breve procedura di mantenimento e lista delle anomalie rimaste aperte.",
        "explanation": {
          "it": "Un modello riutilizzabile che rende espliciti permessi, approvazioni e possibilità di ripristino, senza promettere sviluppo software.",
          "en": "A reusable handover template covering least-privilege access, approval, change logging and rollback without implying software development.",
          "fr": "Un modèle réutilisable de gestion des droits, validations et suivi des modifications, sans prestation de développement logiciel.",
          "es": "Una plantilla reutilizable sobre permisos mínimos, autorizaciones, registro de cambios y recuperación, sin desarrollo de software."
        }
      },
      {
        "title": {
          "it": "Registro richieste e autorizzazioni: esempio completo",
          "en": "Complete request log and approval handover",
          "fr": "Registre des demandes et validations",
          "es": "Registro completo de solicitudes y autorizaciones"
        },
        "language": "it",
        "content": "PROCESSO OPERATIVO DIMOSTRATIVO — NESSUNA AUTOMAZIONE REALE ATTIVATA\nContesto: tre richieste da clienti già esistenti, ricevute idealmente tramite email o modulo. Il compito è organizzare le informazioni senza effettuare invii, modifiche o accessi non autorizzati.\n\nREGISTRO COMPLETO DELLE TRE PRATICHE\nREQ-041 | Cliente di prova C-010 | Richiesta: aggiornamento file condiviso | Stato: IN VERIFICA | Fonte: cartella dimostrativa progetto Delta | Verifica: individuare versione autorizzata | Decisione: responsabile.\nREQ-042 | Cliente di prova C-014 | Richiesta: spostare un appuntamento | Stato: IN ATTESA | Fonte: agenda di esempio | Verifica: disponibilità del referente | Decisione: titolare.\nREQ-043 | Cliente di prova C-021 | Richiesta: chiarimento su ordine esistente | Stato: BOZZA PRONTA | Fonte: numero d'ordine fornito nella simulazione | Verifica: stato dell'ordine | Decisione: servizio competente.\n\nEMAIL REQ-041 — BOZZA\nOggetto: Aggiornamento del documento condiviso — verifica della versione\nBuongiorno,\nabbiamo preso nota della richiesta di aggiornamento del file relativo al progetto Delta. Prima di sostituire il documento disponibile nella cartella condivisa dobbiamo verificare quale versione sia stata approvata e chi sia autorizzato a modificarla.\nLe confermeremo il passaggio successivo dopo la verifica con il referente. Per il momento non abbiamo effettuato modifiche ai file.\nCordiali saluti,\nSegreteria organizzativa\n\nEMAIL REQ-042 — BOZZA\nOggetto: Riprogrammazione appuntamento — disponibilità da verificare\nBuongiorno,\nabbiamo ricevuto la richiesta di spostare l'appuntamento. Stiamo controllando con il responsabile quali fasce orarie siano disponibili. Nessun incontro è stato ancora modificato o confermato.\nSe desidera, può indicarci le sue preferenze e le confronteremo con l'agenda prima di proporre una nuova data.\nCordiali saluti,\nSegreteria organizzativa\n\nREPORT AL TITOLARE\nHo classificato tre richieste dimostrative. La prima richiede il controllo del file approvato; la seconda necessita di verifica dell'agenda; la terza comprende una bozza di comunicazione relativa a un ordine, da approvare prima dell'invio. Non ho creato automazioni, non ho cambiato permessi, non ho cancellato file e non ho segnato come chiusa alcuna pratica.\nPer proseguire chiedo la conferma dei referenti, delle autorizzazioni e delle fonti da utilizzare. Il registro potrà essere aggiornato solo dopo aver verificato le attività realmente compiute nello scenario.\nSTATO: procedimento definito, bozze pronte, esecuzione esterna non effettuata.",
        "explanation": {
          "it": "Dalla richiesta al riepilogo, con tre pratiche e bozze operative da approvare.",
          "en": "Three cases tracked from receipt to approval-ready drafts.",
          "fr": "Trois demandes suivies avec réponses et contrôles.",
          "es": "Tres casos con borradores, estados y autorizaciones."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Nessuna automazione presentata come già realizzata.",
        "en": "No claimed live automation.",
        "fr": "Aucune automatisation réelle prétendue.",
        "es": "Sin automatizaciones supuestamente instaladas."
      },
      {
        "it": "Accessi, stati e privacy sono verificabili dal titolare.",
        "en": "Owner controls access, status and privacy.",
        "fr": "Le responsable valide les accès.",
        "es": "El responsable valida permisos."
      }
    ],
    "limits": {
      "it": "Supporto digitale operativo: non software su misura, acquisizione clienti o amministrazione.",
      "en": "Practical setup, not custom development, lead generation or business administration.",
      "fr": "Organisation pratique, sans développement ni prospection.",
      "es": "Organización práctica, sin desarrollo ni captación."
    },
    "handoff": {
      "it": "Modello di registro, procedura e checklist per il test autorizzato.",
      "en": "Tracker template, SOP and approval checklist.",
      "fr": "Registre, procédure et checklist.",
      "es": "Registro, procedimiento y controles."
    }
  }
];
