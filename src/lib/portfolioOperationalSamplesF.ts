import type { OperationalDeepCase } from "./portfolioOperationalTypes";

/** Additional original and independently written operational examples; never claimed as past client commissions. */
export const OPERATIONAL_SAMPLES_F: OperationalDeepCase[] = [
  {
    "id": "digital-archive-duplicates-access-matrix",
    "category": "backoffice",
    "title": {
      "it": "Archivio condiviso: duplicati, versioni e autorizzazioni",
      "en": "Shared document archive: duplicates, versions and permissions",
      "fr": "Archives partagées : doublons, versions et accès",
      "es": "Archivo compartido: duplicados, versiones y permisos"
    },
    "service": {
      "it": "Archivi digitali, Drive e organizzazione documentale",
      "en": "Digital archives, shared drives and document organisation",
      "fr": "Archivage numérique et organisation des dossiers partagés",
      "es": "Archivos digitales y organización documental"
    },
    "scenario": {
      "it": "Una piccola organizzazione lavora su documenti in italiano e francese e conserva nella stessa cartella bozze, versioni definitive e file con nomi ambigui. Serve un sistema leggibile da più collaboratori autorizzati.",
      "en": "A small organisation stores Italian and French materials together, mixing drafts with approved documents and unclear file names.",
      "fr": "Une petite structure conserve des documents en italien et en français, sans distinguer clairement brouillons et versions validées.",
      "es": "Una pequeña empresa guarda documentos italianos y franceses sin distinguir versiones preliminares y finales."
    },
    "objective": {
      "it": "Proporre una struttura utilizzabile, una procedura di rinomina, un registro dei duplicati e una matrice di accessi da sottoporre al titolare.",
      "en": "Deliver a usable folder structure, naming procedure, duplicates register and permission matrix for owner approval.",
      "fr": "Concevoir arborescence, conventions de nommage, registre de doublons et matrice de droits.",
      "es": "Preparar estructura, reglas de nombres, registro de duplicados y matriz de permisos."
    },
    "inputs": {
      "it": "Cartella di esempio con 12 documenti, tra cui preventivi non approvati, email e schede in due lingue; nessun accesso a dati di clienti reali.",
      "en": "A twelve-document example folder including draft quotations, messages and bilingual service sheets; no actual customer records.",
      "fr": "Un dossier d'exemple de douze fichiers, dont devis, courriels et fiches bilingues.",
      "es": "Una carpeta de ejemplo con doce archivos, incluidos presupuestos, correos y fichas bilingües."
    },
    "workflow": [
      {
        "it": "Censire i file senza cancellare o rinominare gli originali.",
        "en": "Inventory files without deleting originals.",
        "fr": "Recenser les fichiers sans supprimer les originaux.",
        "es": "Inventariar archivos sin borrar originales."
      },
      {
        "it": "Definire regole di accesso e identificare i documenti approvati.",
        "en": "Define permissions and identify approved records.",
        "fr": "Définir les droits et identifier les documents validés.",
        "es": "Definir permisos y localizar documentos aprobados."
      },
      {
        "it": "Proporre una struttura, verificare i duplicati e documentare il passaggio al nuovo archivio.",
        "en": "Propose folders, check duplicates and document migration.",
        "fr": "Proposer une arborescence et documenter les déplacements.",
        "es": "Proponer carpetas y documentar los movimientos."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Struttura completa di cartelle",
          "en": "Full folder hierarchy",
          "fr": "Arborescence de dossiers",
          "es": "Estructura completa de carpetas"
        },
        "language": "it",
        "content": "ARCHIVIO CONDIVISO — STRUTTURA PROPOSTA\n00_LEGGIMI/\n  00_istruzioni-accesso.md\n  01_regole-nomi-file.md\n01_CLIENTI-ESISTENTI/\n  Pratica-A/\n    01_RICHIESTE/\n    02_DOCUMENTI-RICEVUTI/\n    03_BOZZE-DA-APPROVARE/\n    04_APPROVATI/\n    05_COMUNICAZIONI/\n02_MATERIALI-SERVIZI/\n  IT/\n  FR/\n  99_STORICO-ARCHIVIATO/\n03_PROCEDURE-INTERNE/\n  SOP/\n  MODULI-APPROVATI/\n04_DA-CLASSIFICARE/\n99_STORICO/\n\nCONVENZIONE DEI NOMI\nAAAA-MM-GG_pratica-tipo-documento_lingua_vNN_stato.estensione\nEsempio: 2026-11-13_pratica-A-scheda-servizi_FR_v03_APPROVATO.docx\nEsempio: 2026-11-13_pratica-A-risposta-cliente_IT_v02_BOZZA.docx\nLa parola APPROVATO si usa solo dopo autorizzazione registrata. La data nel nome è quella della versione, non una prova della data di consegna al cliente.\n\nREGOLA DI MIGRAZIONE\nNessun file originale è eliminato durante il riordino. Prima si crea una copia controllata, si verifica la versione con il referente e si registra lo spostamento. Le cartelle contenenti dati personali sono accessibili solo alle persone autorizzate.",
        "explanation": {
          "it": "La struttura separa bozze, approvati, materiale ricevuto e storico.",
          "en": "A practical folder hierarchy separates source materials, drafts, approved versions and archives.",
          "fr": "L'arborescence sépare les versions en cours, validées et archivées.",
          "es": "La estructura separa borradores, versiones aprobadas y archivo."
        }
      },
      {
        "title": {
          "it": "Registro duplicati e versioni",
          "en": "Duplicate/version register",
          "fr": "Registre des doublons et versions",
          "es": "Registro de duplicados y versiones"
        },
        "language": "it",
        "content": "CONTROLLO DOCUMENTI — ESEMPIO DI REGISTRO\nD-001 | scheda_prodotto_finale.docx | Stessa dimensione di copia(2)_scheda.docx | Azione: verificare contenuto e hash, NON cancellare.\nD-002 | preventivo-A-v1.docx | Precedente a preventivo-A-v2.docx | Azione: conservare nello storico, segnare la versione corrente solo dopo approvazione.\nD-003 | fiche_FR_def.docx | Traduzione del testo IT-v03 | Azione: confrontare riferimento e stato della traduzione.\nD-004 | condizioni-servizio.pdf | Copia esportata senza numero versione | Azione: chiedere la fonte approvata, non usare per invii esterni.\n\nPROTOCOLLO ANTI-DUPLICATI\n1. Registrare percorso precedente, nome, formato e data rilevata.\n2. Confrontare contenuto effettivo; nomi simili non dimostrano che i file siano identici.\n3. Se contengono dati riservati, eseguire le verifiche soltanto in un ambiente autorizzato.\n4. Spostare nello storico solo dopo consenso; registrare autore dello spostamento.\n5. In caso di dubbio, lasciare entrambi i documenti in revisione con segnalazione al responsabile.\n\nREPORT: quattro casi da verificare; nessuna eliminazione irreversibile proposta automaticamente.",
        "explanation": {
          "it": "Il registro non confonde documenti omonimi, versioni superate e duplicati identici.",
          "en": "The register distinguishes same-name files, outdated versions and genuine duplicates.",
          "fr": "Le registre différencie versions antérieures et véritables doublons.",
          "es": "El registro distingue versiones antiguas y duplicados reales."
        }
      },
      {
        "title": {
          "it": "Matrice degli accessi in inglese",
          "en": "English access-permissions matrix",
          "fr": "Matrice d'accès en anglais",
          "es": "Matriz de acceso en inglés"
        },
        "language": "en",
        "content": "ACCESS MATRIX — PROPOSED, NOT ACTIVE\nRole: Business owner\n- May review all folders, approve access changes and authorise deletion or retention decisions.\nRole: Virtual assistant, agreed assignment\n- May organise designated operational folders and prepare drafts.\n- May not access unrelated personal records or approve prices, invoices or contracts.\nRole: External reviewer\n- May view only explicitly shared documents for the review window.\n- No default access to the rest of the shared drive.\n\nPERMISSION CHECKLIST\n[ ] Each permission has a business purpose and named authorisation.\n[ ] Sharing links are restricted to approved recipients.\n[ ] The folder owner has reviewed access before sensitive files are moved.\n[ ] Approval to release a document is separate from permission to edit it.\n[ ] Access can be revoked when the assignment ends.\n[ ] The business has established its own retention policy with appropriate advice.\n\nHANDOVER EMAIL\nSubject: Proposed folder structure and permissions for review\n\nHello,\nI have prepared a folder structure, a document-naming convention and a list of possible duplicates. No files have been deleted or shared externally.\nPlease confirm the responsible person for final document approvals and the permitted access scope for each collaborator. Once those points are agreed, we can test the structure on a limited set of files before migrating the rest.\nKind regards,\nDocument Support",
        "explanation": {
          "it": "Le regole d'accesso sono scritte come proposta da autorizzare, non come configurazione già attiva.",
          "en": "A full permission proposal and handover email, not a claim that access was configured.",
          "fr": "Proposition de droits et courriel de transmission, sans prétendre qu'ils sont déjà actifs.",
          "es": "Propuesta de permisos y correo de entrega, sin afirmar que estén activos."
        }
      },
      {
        "title": {
          "it": "Nota di consegna in francese",
          "en": "French file-organisation handover",
          "fr": "Note de transmission en français",
          "es": "Nota de entrega en francés"
        },
        "language": "fr",
        "content": "Objet : Organisation de l'archive partagée — structure à valider\n\nBonjour,\n\nJ'ai préparé une proposition de réorganisation des dossiers partagés afin de mieux distinguer les documents reçus, les versions de travail, les fichiers validés et l'historique.\n\nLe dossier de travail comprend un tableau récapitulatif des fichiers dont le statut doit être vérifié, notamment ceux qui portent un nom similaire ou qui semblent exister sous plusieurs versions. Je n'ai supprimé aucun document ni modifié les droits d'accès.\n\nAvant toute mise en œuvre, je vous remercie de confirmer la structure proposée, les personnes autorisées à consulter les différents dossiers et la procédure à suivre pour identifier les versions définitives. Les documents contenant des informations confidentielles resteront dans leur emplacement actuel jusqu'à validation.\n\nLa première étape pourra consister en un essai sur un ensemble limité de fichiers, afin de vérifier que la nouvelle organisation convient réellement à votre équipe.\n\nBien cordialement,\nAssistance documentaire\n\nÉTAT : projet de message et plan de classement préparés pour le portfolio, sans intervention sur un véritable espace Drive.",
        "explanation": {
          "it": "Il francese descrive il lavoro senza far credere che un Drive reale sia già stato modificato.",
          "en": "French handover message clearly distinguishes proposal from implementation.",
          "fr": "Le courrier distingue préparation et intervention effective.",
          "es": "El correo distingue propuesta de implementación real."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Sono indicati i passaggi da approvare, senza attribuire al progetto risultati commerciali non documentati.",
        "en": "Approval points are visible; no unsupported performance claims are made.",
        "fr": "Les points à valider restent visibles, sans résultats commerciaux prétendus.",
        "es": "Se señalan las aprobaciones sin inventar resultados comerciales."
      },
      {
        "it": "I materiali sono elaborati originali preparati per illustrare il servizio.",
        "en": "Materials are original examples prepared to demonstrate the service.",
        "fr": "Les documents ont été rédigés spécifiquement pour illustrer la prestation.",
        "es": "Los documentos son originales y muestran el servicio."
      }
    ],
    "limits": {
      "it": "Organizzazione degli archivi nei limiti degli accessi autorizzati; nessuna cancellazione irreversibile o gestione contabile.",
      "en": "Organisation of approved folders only; no unapproved deletion or accounting.",
      "fr": "Organisation documentaire selon autorisation, sans suppression non validée.",
      "es": "Organización documental autorizada, sin borrado sin permiso."
    },
    "handoff": {
      "it": "Albero delle cartelle, convenzioni, registro duplicati, matrice accessi e comunicazione FR.",
      "en": "Folder hierarchy, naming rules, duplicate register, permission matrix and French handover.",
      "fr": "Arborescence, règles, registre, matrice d'accès et courriel.",
      "es": "Estructura, reglas, registro, permisos y correo."
    }
  },
  {
    "id": "customer-record-data-entry-audit",
    "category": "backoffice",
    "title": {
      "it": "Data entry: aggiornare anagrafiche senza creare duplicati",
      "en": "Data entry: updating existing customer records safely",
      "fr": "Saisie de données : mise à jour sans doublons",
      "es": "Entrada de datos: actualizar registros sin duplicados"
    },
    "service": {
      "it": "Data entry, organizzazione di registri e schede cliente",
      "en": "Data entry and maintenance of existing operational records",
      "fr": "Saisie et mise à jour de fichiers opérationnels",
      "es": "Entrada de datos y mantenimiento de registros"
    },
    "scenario": {
      "it": "Un piccolo studio possiede sei schede relative a clienti già acquisiti: alcuni indirizzi sono duplicati, un campo è incompleto e una nota è stata copiata nella pratica sbagliata.",
      "en": "A small firm has six records for existing customers, with duplicates, an incomplete field and a note filed under the wrong case.",
      "fr": "Un cabinet dispose de six fiches clients existants, avec doublons et champ manquant.",
      "es": "Un despacho tiene seis registros de clientes existentes con duplicados y campos incompletos."
    },
    "objective": {
      "it": "Dimostrare pulizia e allineamento dei dati senza dedurre informazioni personali, ricercare contatti o effettuare modifiche non autorizzate.",
      "en": "Show accurate record maintenance without guessing personal details or prospecting.",
      "fr": "Montrer une mise à jour rigoureuse, sans rechercher de prospects.",
      "es": "Mostrar mantenimiento preciso sin completar datos personales por suposición."
    },
    "inputs": {
      "it": "Sei righe con ID anonimi e campi non sensibili; nessun riferimento a persone o imprese esistenti.",
      "en": "Six anonymised sample entries and non-sensitive operational fields.",
      "fr": "Six lignes d'exemple sans données personnelles réelles.",
      "es": "Seis filas de ejemplo sin datos personales reales."
    },
    "workflow": [
      {
        "it": "Registrare provenienza e data dei dati ricevuti.",
        "en": "Record where each input originated.",
        "fr": "Consigner la provenance des informations.",
        "es": "Registrar la procedencia de cada dato."
      },
      {
        "it": "Confrontare ID e campi senza fondere schede soltanto perché i nomi sono simili.",
        "en": "Check identifiers before merging similar-looking rows.",
        "fr": "Contrôler les identifiants avant toute fusion.",
        "es": "Comprobar identificadores antes de fusionar filas."
      },
      {
        "it": "Produrre registro eccezioni e chiedere autorizzazione alle modifiche.",
        "en": "Produce an exceptions log and request approval.",
        "fr": "Signaler les anomalies et demander validation.",
        "es": "Registrar incidencias y pedir aprobación."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Tabella di confronto prima/dopo",
          "en": "Before-and-after record table",
          "fr": "Tableau avant/après",
          "es": "Tabla antes/después"
        },
        "language": "it",
        "content": "DATA ENTRY — REGISTRO DIMOSTRATIVO\nCAMPI: ID interno | pratica | lingua preferita | stato | ultima verifica\nR-01 | P-100 | IT | aperta | verificare.\nR-02 | P-101 | FR | aperta | verificare.\nR-03 | P-100 | IT | aperta | possibile duplicato di R-01; NON unire automaticamente.\nR-04 | P-102 | ES | chiusa | confermare data di chiusura.\nR-05 | P-103 | [vuoto] | aperta | dato assente; NON dedurre lingua.\nR-06 | P-104 | EN | in attesa | nota da controllare.\n\nPROPOSTA DI NORMALIZZAZIONE\n- Uniformare gli stati ammessi a: aperta, in attesa, chiusa, da verificare.\n- Salvare la lingua con codice IT/EN/FR/ES soltanto quando comunicata o verificata.\n- Conservare ID e provenienza della riga originale.\n- Separare le note dalla decisione di aggiornare lo stato.\n- Non unire R-01 e R-03 senza riscontro sull'identità della pratica.\n\nRISULTATO: tabella pronta per revisione, due richieste di verifica e nessuna modifica irreversibile.",
        "explanation": {
          "it": "La pulizia dei dati non equivale a inventare campi mancanti.",
          "en": "Cleaning data does not justify guessing missing fields.",
          "fr": "Le nettoyage ne permet pas de déduire les données manquantes.",
          "es": "La limpieza no permite inventar campos ausentes."
        }
      },
      {
        "title": {
          "it": "Registro delle eccezioni in inglese",
          "en": "English data exceptions register",
          "fr": "Registre des anomalies en anglais",
          "es": "Registro de incidencias en inglés"
        },
        "language": "en",
        "content": "DATA QUALITY EXCEPTIONS — CUSTOMER RECORDS\nEX-01 | Record R-03 | Possible duplicate of R-01 | Evidence: same internal case ID P-100 | Status: owner confirmation required.\nEX-02 | Record R-05 | Preferred language absent | Evidence: field blank in supplied file | Status: request source confirmation.\nEX-03 | Record R-06 | Note potentially attached to wrong case | Evidence: reference does not match P-104 | Status: hold, no movement until checked.\nEX-04 | Record R-04 | Closed status without recorded approval date | Evidence: status entered, date absent | Status: request missing verification.\n\nVALIDATION RULES\n1. Never overwrite original customer records during the first pass.\n2. Keep a change log: original value, proposed value, rationale, reviewer, approval date.\n3. Restrict access to the minimum authorised user group.\n4. If a field cannot be checked, mark it as pending instead of completing it with an assumption.\n5. No cold outreach, contact sourcing or creation of sales-lead lists.\n\nHANDOVER: the proposed standardised register and four exception records are ready for the responsible person's review.",
        "explanation": {
          "it": "Registro in inglese completo con criteri di validazione.",
          "en": "Complete English exceptions report with practical validation rules.",
          "fr": "Registre anglais complet des anomalies.",
          "es": "Informe inglés de incidencias y reglas de validación."
        }
      },
      {
        "title": {
          "it": "Email in francese al responsabile",
          "en": "French owner approval email",
          "fr": "Courriel français de validation",
          "es": "Correo francés de aprobación"
        },
        "language": "fr",
        "content": "Objet : Mise à jour des fiches existantes — points à confirmer\n\nBonjour,\n\nJ'ai examiné le tableau des six fiches fourni pour le travail de mise à jour et préparé une version harmonisée, sans modifier les données originales.\n\nQuatre points nécessitent votre validation : un possible doublon, une langue de communication manquante, une note associée à une référence qui ne correspond pas à la fiche et un statut de clôture sans date vérifiée.\n\nJe vous propose de confirmer les informations directement à partir des dossiers autorisés, puis de valider les corrections dans le journal des modifications. Les champs non confirmés resteront signalés comme tels, afin d'éviter toute déduction ou fusion injustifiée.\n\nAucune recherche de nouveaux contacts n'a été effectuée dans le cadre de cet exemple. Une fois les arbitrages reçus, le registre pourra être finalisé selon vos consignes.\n\nBien cordialement,\nSupport administratif opérationnel\n\nNOTE : le travail porte sur la qualité des données, et non sur la prospection ou la comptabilité.",
        "explanation": {
          "it": "Email di consegna che chiede autorizzazioni puntuali, senza assumere decisioni.",
          "en": "A complete French handover asking for specific authorisations.",
          "fr": "Courriel détaillé pour obtenir les validations.",
          "es": "Correo detallado que solicita las autorizaciones."
        }
      },
      {
        "title": {
          "it": "Procedura di importazione e controlli",
          "en": "Import and verification procedure",
          "fr": "Procédure d'importation et contrôle",
          "es": "Procedimiento de importación y control"
        },
        "language": "it",
        "content": "PROCEDURA — AGGIORNAMENTO REGISTRO ANAGRAFICHE ESISTENTI\nPreparazione:\n- Ricevere la tabella attraverso il canale autorizzato.\n- Verificare versione, data e responsabile del file.\n- Conservare una copia di sola lettura prima di proporre modifiche.\n\nVerifica:\n- Controllare campi obbligatori e formati.\n- Segnalare possibili duplicati usando almeno un identificativo verificabile, non la somiglianza del nome.\n- Evidenziare riferimenti incrociati incoerenti e note fuori pratica.\n- Non cercare in rete nuovi recapiti per riempire campi vuoti.\n\nApprovazione:\n- Inviare elenco anomalie con ID, problema e proposta.\n- Attendere approvazione per ogni fusione, eliminazione o correzione che cambia il significato dei dati.\n\nConsegna:\n- Fornire versione originale, versione proposta e registro modifiche.\n- Contare le righe finali e verificare che nessuna pratica autorizzata scompaia.\n- Conservare il file solo nei sistemi concordati.\n\nFINE PROCEDURA: il responsabile controlla il risultato prima che il registro venga usato operativamente.",
        "explanation": {
          "it": "Una procedura reale nel formato, con controlli e responsabilità definiti.",
          "en": "A complete procedure including controls, permissions and handover.",
          "fr": "Une procédure détaillée, avec responsabilités claires.",
          "es": "Un procedimiento completo con controles y responsabilidades."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Sono indicati i passaggi da approvare, senza attribuire al progetto risultati commerciali non documentati.",
        "en": "Approval points are visible; no unsupported performance claims are made.",
        "fr": "Les points à valider restent visibles, sans résultats commerciaux prétendus.",
        "es": "Se señalan las aprobaciones sin inventar resultados comerciales."
      },
      {
        "it": "I materiali sono elaborati originali preparati per illustrare il servizio.",
        "en": "Materials are original examples prepared to demonstrate the service.",
        "fr": "Les documents ont été rédigés spécifiquement pour illustrer la prestation.",
        "es": "Los documentos son originales y muestran el servicio."
      }
    ],
    "limits": {
      "it": "Data entry e correzione di registri esistenti; esclusa creazione liste di prospect e ricerca nuovi contatti.",
      "en": "Existing-record maintenance only; no lead generation or new contact sourcing.",
      "fr": "Mise à jour des fichiers existants uniquement, sans prospection.",
      "es": "Actualización de registros existentes, sin captación."
    },
    "handoff": {
      "it": "Registro prima/dopo, report eccezioni EN, email FR e procedura IT.",
      "en": "Before-and-after register, EN issues log, FR handover and IT SOP.",
      "fr": "Tableau harmonisé, rapport EN, courriel FR et procédure IT.",
      "es": "Registro actualizado, informe EN, correo FR y procedimiento IT."
    }
  },
  {
    "id": "information-research-verifiable-source-matrix",
    "category": "research",
    "title": {
      "it": "Ricerca documentale: trasformare fonti discordanti in una sintesi verificabile",
      "en": "Desk research: turning conflicting references into a verifiable brief",
      "fr": "Recherche documentaire : synthèse de sources contradictoires",
      "es": "Investigación documental: síntesis de fuentes contradictorias"
    },
    "service": {
      "it": "Ricerche online, verifica delle fonti e confronti",
      "en": "Online desk research, source checks and comparisons",
      "fr": "Recherche documentaire et comparaison de sources",
      "es": "Investigación y comparación de fuentes"
    },
    "scenario": {
      "it": "Un professionista che lavora con l'Italia deve aggiornare una guida operativa per clienti esistenti. Tre documenti interni forniscono indicazioni diverse sulla procedura di assistenza.",
      "en": "A professional serving Italy needs to revise a help guide; three internal versions disagree on support procedures.",
      "fr": "Un professionnel intervenant en Italie doit comparer trois versions contradictoires de sa procédure.",
      "es": "Un profesional que trabaja con Italia debe revisar tres versiones contradictorias de su guía."
    },
    "objective": {
      "it": "Mostrare un metodo di verifica delle fonti e una sintesi utilizzabile che non attribuisca alle bozze lo status di informazioni approvate.",
      "en": "Produce a traceable source matrix and a usable brief without treating draft instructions as fact.",
      "fr": "Présenter une matrice de sources et une synthèse sans confondre brouillon et version validée.",
      "es": "Preparar una matriz verificable y una síntesis sin confundir borradores con documentos aprobados."
    },
    "inputs": {
      "it": "Tre versioni interne S1, S2 e S3 predisposte per il portfolio; eventuali link a fonti pubbliche devono essere verificati e datati in un incarico reale.",
      "en": "Three original internal working versions S1, S2 and S3; public sources would require dated verification in a real commission.",
      "fr": "Trois versions S1, S2, S3 ; aucune source publique prétendument consultée.",
      "es": "Tres versiones S1, S2 y S3 sin fingir fuentes públicas consultadas."
    },
    "workflow": [
      {
        "it": "Formulare la domanda concreta e raccogliere le versioni disponibili.",
        "en": "Define the question and gather the source versions.",
        "fr": "Définir la question et recueillir les versions.",
        "es": "Definir la pregunta y recopilar versiones."
      },
      {
        "it": "Separare fatti documentati, affermazioni non approvate e punti discordanti.",
        "en": "Distinguish approved facts from unsupported or conflicting statements.",
        "fr": "Séparer données validées et contradictions.",
        "es": "Separar datos confirmados de contradicciones."
      },
      {
        "it": "Conservare riferimenti alle fonti, date e questioni da risolvere.",
        "en": "Record references, dates and open questions.",
        "fr": "Tracer références, dates et validations manquantes.",
        "es": "Registrar referencias, fechas y cuestiones pendientes."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Matrice delle fonti",
          "en": "Source-verification matrix",
          "fr": "Matrice de vérification",
          "es": "Matriz de verificación"
        },
        "language": "it",
        "content": "MATRICE DOCUMENTALE — SUPPORTO AI CLIENTI\nFonte S1 | Istruzione: scrivere a indirizzo generico | Versione: precedente | Approvazione: non documentata.\nFonte S2 | Istruzione: utilizzare il modulo dedicato | Versione: più recente | Approvazione: da chiedere.\nFonte S3 | Istruzione: inviare un numero di pratica | Versione: appunto interno | Approvazione: non prevista.\n\nDOMANDA DI RICERCA\nQuale procedura deve figurare nella guida informativa per clienti che hanno già un incarico attivo?\n\nEVIDENZE\n- Esiste una divergenza fra canale email e modulo.\n- Il numero di pratica compare soltanto nella nota S3.\n- La data più recente di un documento non dimostra l'approvazione.\n- Nessuna pagina pubblica o normativa viene citata come già verificata.\n\nDECISIONI APERTE\nD-01: canale ufficiale da indicare.\nD-02: dati minimi necessari per aprire una richiesta.\nD-03: persona che può approvare il testo definitivo.\n\nCONSEGNA: matrice, FAQ provvisoria, nota al responsabile e registro delle verifiche da eseguire.",
        "explanation": {
          "it": "La matrice mostra esattamente ciò che è noto, incerto e da validare.",
          "en": "The matrix clearly identifies evidence, uncertainties and approvals.",
          "fr": "Le tableau sépare sources et validations.",
          "es": "La matriz separa evidencias de aprobaciones."
        }
      },
      {
        "title": {
          "it": "Sintesi ragionata in inglese",
          "en": "English research brief",
          "fr": "Synthèse documentaire en anglais",
          "es": "Informe de investigación en inglés"
        },
        "language": "en",
        "content": "RESEARCH BRIEF — CURRENT CUSTOMER SUPPORT GUIDE\nPurpose: identify which support-routing instructions can safely appear in an English-language explanation for customers working with the Italian team.\n\nMaterial examined: three working versions prepared for this demonstration, labelled S1, S2 and S3.\n\nFindings:\nS1 directs enquiries to a general mailbox. S2 refers to a dedicated support form but carries no explicit sign-off. S3 asks customers to include a case number, although the requirement is not recorded in the other versions. These differences could cause customers to use the wrong route or share more information than necessary.\n\nWhat can be said now:\nCustomers with an existing case should use the contact channel specified in their approved correspondence. The support team should check the correct route before issuing a revised guide.\n\nWhat cannot be said yet:\nThat the form is mandatory; that a case number is always required; that the general mailbox will be retired.\n\nRecommended next step:\nAsk the service owner to approve a single routing procedure and identify the current version. Record the decision before publishing updated Italian, English, French or Spanish wording.\n\nThis is an editorial research sample, not a claim that public sources or real customer accounts were audited.",
        "explanation": {
          "it": "Sintesi inglese completa, con separazione tra risultati e decisioni aperte.",
          "en": "A full English research memo with qualified findings.",
          "fr": "Une synthèse anglaise avec constats et décisions ouvertes.",
          "es": "Informe inglés completo con conclusiones y dudas pendientes."
        }
      },
      {
        "title": {
          "it": "FAQ provvisoria in spagnolo",
          "en": "Spanish draft help FAQ",
          "fr": "FAQ provisoire en espagnol",
          "es": "Preguntas frecuentes provisionales"
        },
        "language": "es",
        "content": "GUÍA DE AYUDA — BORRADOR PARA CLIENTES CON UN EXPEDIENTE ABIERTO\n\nPregunta: ¿Dónde puedo consultar el estado de mi solicitud?\nRespuesta: Utilice el canal de contacto indicado en la comunicación aprobada que recibió sobre su expediente. Estamos revisando las instrucciones generales para evitar que diferentes versiones de la guía presenten canales contradictorios.\n\nPregunta: ¿Necesito indicar un número de referencia?\nRespuesta: Si dispone de una referencia de expediente, inclúyala cuando el canal autorizado se lo solicite. No envíe contraseñas, datos bancarios ni documentos personales que no sean necesarios.\n\nPregunta: ¿Puedo solicitar un cambio de condiciones desde este canal?\nRespuesta: Las solicitudes de modificación deben ser examinadas por la persona responsable del servicio. El equipo de asistencia puede registrar la consulta, pero no confirmar cambios no autorizados.\n\nESTADO EDITORIAL\nTexto provisional, pendiente de la validación del canal oficial y de las instrucciones definitivas. No se ha publicado ni enviado a clientes.",
        "explanation": {
          "it": "La FAQ spagnola è leggibile per intero e segnala i limiti delle informazioni.",
          "en": "Complete Spanish FAQ with explicit information boundaries.",
          "fr": "FAQ espagnole entièrement rédigée.",
          "es": "FAQ española íntegra con límites claros."
        }
      },
      {
        "title": {
          "it": "Memo al committente in italiano",
          "en": "Italian decision handover",
          "fr": "Note décisionnelle en italien",
          "es": "Nota de decisiones en italiano"
        },
        "language": "it",
        "content": "Oggetto: Aggiornamento guida assistenza — approvazioni necessarie\n\nBuongiorno,\n\nho confrontato le tre versioni del materiale che mi hai fornito per aggiornare la guida destinata ai clienti già in carico.\n\nÈ emersa una differenza fra i canali di contatto indicati: S1 suggerisce una casella generica, S2 un modulo dedicato e S3 contiene un'istruzione sul numero di pratica non ripresa altrove. Non ho considerato automaticamente valida la versione più recente, perché non dispone di una conferma esplicita.\n\nPer procedere con i testi nelle quattro lingue, avrei bisogno della tua approvazione su tre punti: canale da utilizzare, dati minimi richiesti al cliente e referente autorizzato a gestire eventuali eccezioni.\n\nAllego la matrice di confronto e una prima FAQ con le informazioni già formulabili senza rischi di equivoci. Non ho pubblicato nessun aggiornamento e non ho interpellato soggetti esterni.\n\nCordiali saluti,\nSupporto alla ricerca e ai contenuti\n\nALLEGATI DI LAVORO: matrice S1–S3, FAQ provvisoria, elenco decisioni aperte.",
        "explanation": {
          "it": "Il memo collega l'analisi all'azione successiva, senza fingere fonti esterne.",
          "en": "The handover converts the research into specific owner decisions.",
          "fr": "La note relie l'analyse aux validations nécessaires.",
          "es": "La nota traduce la investigación en decisiones concretas."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Sono indicati i passaggi da approvare, senza attribuire al progetto risultati commerciali non documentati.",
        "en": "Approval points are visible; no unsupported performance claims are made.",
        "fr": "Les points à valider restent visibles, sans résultats commerciaux prétendus.",
        "es": "Se señalan las aprobaciones sin inventar resultados comerciales."
      },
      {
        "it": "I materiali sono elaborati originali preparati per illustrare il servizio.",
        "en": "Materials are original examples prepared to demonstrate the service.",
        "fr": "Les documents ont été rédigés spécifiquement pour illustrer la prestation.",
        "es": "Los documentos son originales y muestran el servicio."
      }
    ],
    "limits": {
      "it": "Ricerche a supporto di progetti già definiti; non comprende prospecting, contatti commerciali né certificazioni professionali.",
      "en": "Desk research for defined existing projects; no prospecting, cold contacts or legal certification.",
      "fr": "Recherche pour des projets définis, sans prospection.",
      "es": "Investigación para proyectos definidos, sin captación."
    },
    "handoff": {
      "it": "Matrice fonti, report inglese, FAQ spagnola e memo italiano di approvazione.",
      "en": "Source matrix, English report, Spanish FAQ and Italian handover memo.",
      "fr": "Matrice, rapport EN, FAQ ES et note IT.",
      "es": "Matriz, informe EN, FAQ ES y nota IT."
    }
  },
  {
    "id": "italian-market-website-copy-four-languages",
    "category": "web",
    "title": {
      "it": "Presentazione di un servizio per l'Italia: quattro testi coordinati",
      "en": "Introducing a service to Italy: four coordinated texts",
      "fr": "Présenter un service en Italie : quatre textes coordonnés",
      "es": "Presentar un servicio en Italia: cuatro textos coordinados"
    },
    "service": {
      "it": "Contenuti digitali, pagine web e adattamento dei testi",
      "en": "Website copy, digital content and localised writing",
      "fr": "Contenus web, rédaction et adaptation",
      "es": "Textos web, redacción y localización"
    },
    "scenario": {
      "it": "Una piccola attività estera si prepara a comunicare con contatti professionali in Italia. Occorre una sezione web in italiano, con materiali di accompagnamento in inglese, francese e spagnolo.",
      "en": "A small overseas business is preparing Italian-facing website copy with supporting English, French and Spanish messaging.",
      "fr": "Une petite entreprise étrangère prépare sa communication pour l'Italie, avec des textes dans quatre langues.",
      "es": "Una pequeña empresa extranjera prepara contenidos orientados a Italia y textos en cuatro idiomas."
    },
    "objective": {
      "it": "Produrre una pagina informativa credibile e completa, senza promettere risultati di vendita, tradurre meccanicamente o presentare servizi fuori perimetro.",
      "en": "Write credible complete sections across four languages without unsupported sales claims or mechanically translated copy.",
      "fr": "Rédiger des sections complètes sans promesses marketing non justifiées.",
      "es": "Redactar secciones completas sin afirmaciones comerciales no verificadas."
    },
    "inputs": {
      "it": "Brief editoriale originale: servizio di organizzazione dei documenti digitali; pubblico di freelance e piccole imprese che lavorano con l'Italia; nessun marchio reale.",
      "en": "Original brief for a digital-document organisation service for professionals working with Italy; no real brand.",
      "fr": "Brief original : organisation des documents numériques pour des professionnels liés à l'Italie.",
      "es": "Brief original: organización documental para profesionales que trabajan con Italia."
    },
    "workflow": [
      {
        "it": "Definire beneficio reale, pubblico e contenuti disponibili.",
        "en": "Define audience, substantiated benefits and available information.",
        "fr": "Préciser public, bénéfices vérifiables et matériaux.",
        "es": "Definir público, beneficios verificables y materiales."
      },
      {
        "it": "Scrivere una struttura completa con sezioni, FAQ e invito all'azione.",
        "en": "Write full page sections, FAQ and a clear enquiry CTA.",
        "fr": "Rédiger sections, FAQ et appel à l'action.",
        "es": "Redactar secciones, preguntas frecuentes y llamada a la acción."
      },
      {
        "it": "Localizzare registro e formulazioni mantenendo condizioni coerenti.",
        "en": "Localise register and phrasing while preserving agreed terms.",
        "fr": "Adapter le registre sans changer les conditions.",
        "es": "Localizar el registro sin alterar condiciones."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Testo web completo in italiano",
          "en": "Complete Italian webpage copy",
          "fr": "Texte web complet en italien",
          "es": "Página web completa en italiano"
        },
        "language": "it",
        "content": "PAGINA SERVIZIO — ORGANIZZAZIONE DEI DOCUMENTI DIGITALI\n\nTITOLO\nTrova i documenti giusti, senza perdere tempo tra versioni e cartelle.\n\nSOTTOTITOLO\nUna struttura chiara per file, materiali di lavoro e documenti condivisi, pensata per chi collabora a distanza e ha bisogno di sapere sempre quale versione utilizzare.\n\nCOME FUNZIONA\nPrima di iniziare definiamo insieme quali cartelle e documenti rientrano nell'incarico. Esaminiamo la struttura esistente, individuiamo nomi ambigui e versioni duplicate e prepariamo una proposta di organizzazione. Le modifiche vengono applicate solo negli spazi autorizzati e secondo le istruzioni concordate.\n\nCOSA PUOI RICHIEDERE\n- Struttura delle cartelle per progetto o attività.\n- Regole per nominare i file e distinguere bozze da documenti approvati.\n- Registro dei materiali da verificare o aggiornare.\n- Indicazioni operative per la condivisione dei documenti con collaboratori autorizzati.\n\nDOMANDE FREQUENTI\nEliminate automaticamente i duplicati?\nNo. Prima di ogni eliminazione, il responsabile verifica i file interessati e approva l'operazione.\n\nPosso mantenere il mio sistema di archiviazione?\nSì. La proposta parte dagli strumenti e dai flussi già utilizzati, senza imporre una piattaforma nuova.\n\nGestite anche contabilità e fatture?\nNo. Il servizio riguarda l'organizzazione documentale e operativa, non le attività contabili o fiscali.\n\nRICHIEDI UN PREVENTIVO\nDescrivi come sono organizzati oggi i documenti, quali difficoltà incontri e quante persone devono accedervi. Riceverai una proposta scritta con attività, materiali e condizioni da concordare.\n\nNOTE EDITORIALI: tono sobrio, nessuna promessa di sicurezza assoluta, nessuna statistica non documentata.",
        "explanation": {
          "it": "Una pagina con headline, descrizione, servizi, FAQ e CTA realmente sviluppati.",
          "en": "A full Italian webpage with service sections, FAQs and a complete CTA.",
          "fr": "Une page italienne rédigée de bout en bout.",
          "es": "Página italiana completa con secciones y preguntas frecuentes."
        }
      },
      {
        "title": {
          "it": "Testo web in inglese britannico",
          "en": "Full British English web copy",
          "fr": "Texte web en anglais britannique",
          "es": "Texto web en inglés británico"
        },
        "language": "en",
        "content": "SERVICE PAGE — DIGITAL DOCUMENT ORGANISATION\n\nHEADING\nFind the right document without sorting through conflicting versions.\n\nINTRODUCTION\nShared folders can work well for a small team, provided everyone knows which file is current and who may edit it. This service helps organise operational documents, establish straightforward naming conventions and reduce confusion between drafts and approved materials.\n\nTHE PROCESS\nWe start by agreeing which folders and documents are within scope. I review the current structure, flag unclear file names and propose a practical layout that suits the way your team already works. Any changes to shared spaces or permissions require the appropriate authorisation.\n\nWHAT THE SERVICE MAY INCLUDE\n- A folder structure organised by project or type of activity.\n- Clear naming conventions and version labels.\n- A list of duplicate-looking files for review rather than automatic deletion.\n- Practical handover instructions for authorised colleagues.\n\nFREQUENT QUESTIONS\nWill you delete duplicate files automatically?\nNo. Potential duplicates are checked and presented for approval before any irreversible action.\n\nDo we need a new software subscription?\nNot necessarily. The proposed structure can usually be designed around the tools you already use, subject to access and functional requirements.\n\nDo you handle accounts or tax documents?\nNo bookkeeping, invoicing or tax administration is included. The focus is document organisation within an agreed operational remit.\n\nREQUEST A QUOTE\nTell me how your files are organised, what causes confusion and who needs access. I can then outline a defined assignment, the deliverables and the checks needed before any changes are made.\n\nEDITORIAL NOTE: written for an international reader considering Italian-language operational support; no claims about untested results.",
        "explanation": {
          "it": "Il testo inglese è una pagina autonoma, non una semplice scheda di traduzione.",
          "en": "A standalone full page in British English, not a teaser.",
          "fr": "Texte anglais autonome, avec FAQ et appel à l'action.",
          "es": "Página inglesa íntegra, no un fragmento."
        }
      },
      {
        "title": {
          "it": "Pagina di presentazione in francese",
          "en": "French service webpage",
          "fr": "Page service en français",
          "es": "Página de servicios en francés"
        },
        "language": "fr",
        "content": "PAGE DE SERVICE — ORGANISATION DES DOCUMENTS PARTAGÉS\n\nTITRE\nDes dossiers faciles à retrouver, des versions plus simples à identifier.\n\nPRÉSENTATION\nLorsque plusieurs personnes travaillent sur les mêmes fichiers, une organisation claire évite de confondre une ébauche avec un document validé. Je peux vous accompagner dans la préparation d'une structure de classement, l'harmonisation des noms de fichiers et le suivi des documents à vérifier, y compris lorsque votre activité implique des échanges avec l'Italie.\n\nMA MÉTHODE\nNous définissons d'abord le périmètre : dossiers concernés, personnes habilitées et décisions qui vous reviennent. J'examine ensuite les éléments disponibles et propose une organisation adaptée aux habitudes de votre équipe. Aucune suppression ni modification des autorisations n'est effectuée sans validation.\n\nEXEMPLES DE LIVRABLES\n- Arborescence de dossiers par activité ou projet.\n- Règles de nommage et de classement.\n- Tableau de contrôle des versions et des documents à confirmer.\n- Consignes destinées aux collaborateurs autorisés.\n\nQUESTIONS FRÉQUENTES\nFaut-il changer d'outil ?\nPas nécessairement. La proposition peut s'appuyer sur votre environnement actuel, selon ses possibilités.\n\nLes anciennes versions sont-elles supprimées ?\nNon, pas automatiquement. Leur statut et les règles de conservation sont examinés avec le responsable.\n\nPouvez-vous gérer la comptabilité ?\nNon. L'intervention porte sur l'organisation opérationnelle des fichiers, pas sur la facturation ni les obligations fiscales.\n\nDEMANDER UN DEVIS\nPrésentez-moi votre situation, les difficultés de classement et le type de documents concernés. Je pourrai préparer une proposition écrite indiquant les étapes, les livrables et les conditions de collaboration.\n\nNOTE ÉDITORIALE : formulation adaptée au public francophone, sans engagement de résultat non mesuré.",
        "explanation": {
          "it": "Francese fluido con sezioni complete e riferimento naturale al lavoro con l'Italia.",
          "en": "Full idiomatic French copy with natural Italy-facing positioning.",
          "fr": "Page complète, ton naturel, adaptée à un lectorat francophone.",
          "es": "Texto francés completo con tono natural."
        }
      },
      {
        "title": {
          "it": "Pagina di presentazione in spagnolo",
          "en": "Spanish service webpage",
          "fr": "Page de service en espagnol",
          "es": "Página de servicios en español"
        },
        "language": "es",
        "content": "PÁGINA DE SERVICIO — ORGANIZACIÓN DE ARCHIVOS DIGITALES\n\nTÍTULO\nDocumentos ordenados y versiones fáciles de identificar.\n\nPRESENTACIÓN\nCuando varias personas trabajan con los mismos archivos, es importante saber qué documento está aprobado, cuál sigue en revisión y quién puede modificarlo. Te ayudo a organizar carpetas compartidas, establecer criterios de nomenclatura y preparar un sistema de seguimiento que facilite el trabajo diario, también en proyectos relacionados con Italia.\n\nCÓMO TRABAJO\nEmpezamos por definir las carpetas incluidas en el encargo y los permisos disponibles. Después reviso la estructura, detecto nombres poco claros y preparo una propuesta adaptada a las herramientas que ya utilizas. Los cambios se realizan únicamente cuando se han acordado y autorizado.\n\nQUÉ PUEDES SOLICITAR\n- Una estructura de carpetas por actividad o proyecto.\n- Reglas de nombres para diferenciar borradores y documentos definitivos.\n- Un registro de versiones y elementos pendientes de revisar.\n- Instrucciones claras para compartir documentos con personas autorizadas.\n\nPREGUNTAS FRECUENTES\n¿Se eliminan automáticamente los archivos duplicados?\nNo. Los posibles duplicados se identifican y cualquier eliminación requiere aprobación.\n\n¿Tengo que contratar una nueva herramienta?\nNo necesariamente. Podemos partir del sistema que ya utilizas si cumple los requisitos del trabajo.\n\n¿Incluyes facturación o contabilidad?\nNo. El servicio se limita a la organización documental y operativa acordada.\n\nSOLICITAR UN PRESUPUESTO\nCuéntame qué tipo de archivos gestionas, cómo los compartes y qué problemas quieres resolver. Te prepararé una propuesta escrita con las tareas, los documentos de entrega y las condiciones.\n\nNOTA EDITORIAL: redacción natural para lectores hispanohablantes que trabajan o quieren trabajar con Italia.",
        "explanation": {
          "it": "Lo spagnolo presenta un contenuto autonomo, sviluppato e coerente con la versione italiana.",
          "en": "A complete standalone Spanish version for readers working with Italy.",
          "fr": "Une véritable page espagnole, rédigée dans un registre naturel.",
          "es": "Una página española desarrollada y natural."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Sono indicati i passaggi da approvare, senza attribuire al progetto risultati commerciali non documentati.",
        "en": "Approval points are visible; no unsupported performance claims are made.",
        "fr": "Les points à valider restent visibles, sans résultats commerciaux prétendus.",
        "es": "Se señalan las aprobaciones sin inventar resultados comerciales."
      },
      {
        "it": "I materiali sono elaborati originali preparati per illustrare il servizio.",
        "en": "Materials are original examples prepared to demonstrate the service.",
        "fr": "Les documents ont été rédigés spécifiquement pour illustrer la prestation.",
        "es": "Los documentos son originales y muestran el servicio."
      }
    ],
    "limits": {
      "it": "Scrittura e revisione dei contenuti nei limiti concordati; nessuna promessa di risultati commerciali, progettazione tecnica complessa o amministrazione.",
      "en": "Written content and localisation within the agreed brief, without commercial guarantees or accounting.",
      "fr": "Rédaction et adaptation sans promesse de résultats commerciaux ni comptabilité.",
      "es": "Redacción y localización sin garantías comerciales ni contabilidad."
    },
    "handoff": {
      "it": "Quattro pagine complete, una per lingua, con struttura coordinata e scelte di tono motivate.",
      "en": "Four complete language-specific service pages with consistent positioning.",
      "fr": "Quatre pages complètes, structurées selon le public.",
      "es": "Cuatro páginas completas y adaptadas."
    }
  },
  {
    "id": "multilingual-proofreading-written-notices",
    "category": "writing",
    "title": {
      "it": "Proofreading multilingue: quattro comunicazioni prima e dopo",
      "en": "Multilingual proofreading: four professional notices before and after",
      "fr": "Révision multilingue : quatre communications avant et après",
      "es": "Corrección multilingüe: cuatro comunicaciones antes y después"
    },
    "service": {
      "it": "Revisione editoriale, proofreading e testi professionali",
      "en": "Proofreading, editorial revision and business writing",
      "fr": "Relecture, révision et rédaction professionnelle",
      "es": "Corrección, revisión editorial y redacción profesional"
    },
    "scenario": {
      "it": "Un team comunica modifiche alla procedura di assistenza in quattro lingue. Le bozze contengono calchi, espressioni poco naturali e promesse che il responsabile non ha approvato.",
      "en": "A team needs four language versions of a support-process update; the drafts contain calques and unapproved commitments.",
      "fr": "Une équipe prépare quatre annonces de service client avec maladresses et engagements non validés.",
      "es": "Un equipo redacta cuatro avisos con calcos y promesas no aprobadas."
    },
    "objective": {
      "it": "Mostrare riscritture complete, evidenziando le decisioni editoriali e le informazioni da approvare prima dell'invio.",
      "en": "Show complete rewrites, with editorial reasons and outstanding approvals.",
      "fr": "Présenter des réécritures intégrales et les validations nécessaires.",
      "es": "Mostrar revisiones completas y decisiones editoriales."
    },
    "inputs": {
      "it": "Quattro bozze originali di prova, redatte volutamente con difetti di tono e coerenza.",
      "en": "Four original draft notices deliberately written with register and accuracy problems.",
      "fr": "Quatre brouillons créés pour l'exemple avec maladresses volontaires.",
      "es": "Cuatro borradores de ejemplo con problemas de estilo intencionados."
    },
    "workflow": [
      {
        "it": "Separare errori linguistici da problemi di contenuto.",
        "en": "Distinguish language errors from factual claims.",
        "fr": "Distinguer fautes de langue et affirmations à vérifier.",
        "es": "Separar errores lingüísticos de datos por verificar."
      },
      {
        "it": "Riscrivere il testo completo conservando il contenuto confermato.",
        "en": "Rewrite each complete message while preserving approved facts.",
        "fr": "Réécrire chaque texte sans inventer de faits.",
        "es": "Reescribir cada texto sin inventar información."
      },
      {
        "it": "Registrare modifiche di tono, coerenza e informazioni da validare.",
        "en": "Record tone, consistency and approval decisions.",
        "fr": "Consigner les décisions éditoriales et validations.",
        "es": "Registrar cambios y autorizaciones."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Italiano: comunicazione completa prima/dopo",
          "en": "Italian notice: complete before and after",
          "fr": "Annonce italienne : avant et après",
          "es": "Comunicado italiano: antes y después"
        },
        "language": "it",
        "content": "PRIMA — BOZZA NON APPROVATA\n«Gentile clientela, si comunica alla stessa che il nostro innovativo sistema di richieste è stato ottimizzato al 100% e, conseguentemente, ogni Sua domanda riceverà risposta immediatamente attraverso l'apposito percorso. Si invita ad attenersi obbligatoriamente al nuovo processo.»\n\nDOPO — REVISIONE PROPOSTA\nOggetto: Come inviare una richiesta di assistenza\n\nBuongiorno,\n\nabbiamo aggiornato le indicazioni per inviarci richieste relative a pratiche e servizi già attivi.\n\nPer aiutarci a identificare la sua richiesta, le chiediamo di utilizzare il canale indicato nella comunicazione ricevuta per la sua pratica e di specificare, se disponibile, il relativo riferimento. Il nostro team verificherà le informazioni e la indirizzerà al referente competente quando necessario.\n\nLe suggeriamo di non allegare password o documenti contenenti dati personali non richiesti. Se non trova più le istruzioni, può rispondere alla comunicazione già ricevuta e chiedere indicazioni sul canale corretto.\n\nGrazie per la collaborazione.\nServizio clienti\n\nNOTE DI REVISIONE\nEliminati «100%», «immediatamente» e «obbligatoriamente», privi di approvazione. Sostituito il burocratese con istruzioni chiare. Il canale va verificato prima della pubblicazione; il testo non è stato inviato.",
        "explanation": {
          "it": "Esempio reale nella forma: testo iniziale e versione finale integrale.",
          "en": "Complete before-and-after with documented rationale.",
          "fr": "Avant/après intégral, avec notes de révision.",
          "es": "Antes/después completo y justificado."
        }
      },
      {
        "title": {
          "it": "English: complete business notice before/after",
          "en": "British English proofreading example",
          "fr": "Anglais britannique : avis avant/après",
          "es": "Inglés británico: aviso antes/después"
        },
        "language": "en",
        "content": "BEFORE — UNEDITED DRAFT\n\"Dear esteemed client, we inform you that our ticket procedure has been revolutionised with guaranteed immediate resolution. We kindly ask you to obligatory submit every request using the special way, including your complete personal information.\"\n\nAFTER — EDITED BRITISH ENGLISH NOTICE\nSubject: How to contact our customer support team\n\nDear Customer,\n\nWe have updated the guidance for submitting enquiries about services you already use.\n\nPlease follow the contact instructions provided in your existing service correspondence. If you have a case reference, include it when requested so the team can identify the relevant record.\n\nWe will review your message and pass it to the appropriate colleague when further information or approval is needed. We cannot promise an immediate resolution, but we aim to give you a clear next step based on the information available.\n\nPlease do not include passwords or personal documents unless they are specifically required through an authorised channel.\n\nThank you for your cooperation.\n\nKind regards,\nCustomer Support Team\n\nEDITORIAL NOTES\nRemoved unsupported claims about guaranteed resolution. Replaced unnatural expressions such as \"the special way\" and \"to obligatory submit\". Used consistent British English and practical instructions. The approved support channel must be confirmed before release.",
        "explanation": {
          "it": "Proofreading inglese che dimostra sia correttezza sia riscrittura funzionale.",
          "en": "Full British English edit with explicit content and register decisions.",
          "fr": "Révision anglaise intégrale, avec justifications.",
          "es": "Revisión inglesa completa y razonada."
        }
      },
      {
        "title": {
          "it": "Français : annonce complète avant/après",
          "en": "French full notice before/after",
          "fr": "Français : message intégral avant/après",
          "es": "Francés: comunicado íntegro antes/después"
        },
        "language": "fr",
        "content": "AVANT — BROUILLON À RÉVISER\n«Chers chers clients, nous avons fait un nouveau process révolutionnaire qui garantit des réponses immédiates pour toutes les demandes. Vous devez obligatoirement utiliser la méthode ci-dessous et mettre toutes vos données personnelles dans votre message.»\n\nAPRÈS — VERSION ÉDITORIALE PROPOSÉE\nObjet : Informations pratiques pour contacter notre service client\n\nBonjour,\n\nNous avons mis à jour les indications permettant de transmettre une demande liée à un dossier ou à un service déjà en cours.\n\nPour faciliter son traitement, nous vous invitons à utiliser le canal précisé dans les échanges précédents concernant votre dossier. Si une référence vous a été communiquée, vous pouvez la rappeler dans votre message lorsque cela est nécessaire.\n\nNotre équipe prendra connaissance de votre demande et sollicitera le responsable compétent si une vérification ou une décision particulière s'impose. Les délais dépendront de la nature du dossier ; nous préférons ne pas vous annoncer de date de réponse sans confirmation.\n\nMerci de ne pas communiquer de mot de passe ni de document personnel qui ne serait pas demandé par un canal autorisé.\n\nNous vous remercions de votre compréhension.\n\nCordialement,\nService client\n\nCOMMENTAIRE ÉDITORIAL\nCorrection du registre, suppression des répétitions et des garanties excessives. Le canal de contact et les délais doivent être confirmés avant diffusion.",
        "explanation": {
          "it": "La versione francese è completamente riscritta in un registro professionale naturale.",
          "en": "Full French editorial reworking with clear, realistic claims.",
          "fr": "Réécriture complète en français courant et professionnel.",
          "es": "Reescritura francesa completa y natural."
        }
      },
      {
        "title": {
          "it": "Español: comunicado completo antes/después",
          "en": "Spanish full notice before/after",
          "fr": "Espagnol : communiqué complet avant/après",
          "es": "Español: aviso íntegro antes/después"
        },
        "language": "es",
        "content": "ANTES — BORRADOR SIN REVISAR\n«Muy estimados clientes, les hacemos conocer que tenemos el proceso más novedoso de gestión y que cada problema será solventado al instante. Favor entrar todas sus informaciones personales en el nuevo sistema sin excepciones.»\n\nDESPUÉS — TEXTO REVISADO\nAsunto: Cómo enviar una consulta a nuestro equipo de atención\n\nEstimado cliente:\n\nHemos actualizado las indicaciones para enviar consultas relacionadas con expedientes o servicios que ya están en curso.\n\nPara ayudarnos a localizar su solicitud, utilice el canal de contacto indicado en las comunicaciones anteriores. Si dispone de un número de referencia, inclúyalo cuando sea necesario para identificar el expediente.\n\nNuestro equipo revisará el mensaje y, si hace falta una comprobación adicional, lo trasladará a la persona responsable. No podemos confirmar un plazo de resolución sin conocer los detalles, pero le indicaremos el siguiente paso cuando tengamos la información correspondiente.\n\nPor motivos de seguridad, le pedimos que no envíe contraseñas ni documentos personales que no sean necesarios a través de canales no autorizados.\n\nGracias por su colaboración.\n\nAtentamente,\nEquipo de atención al cliente\n\nNOTAS DE REVISIÓN\nSe han eliminado promesas de respuesta inmediata, generalizaciones y construcciones poco naturales. Antes de publicar, debe confirmarse el canal autorizado para las solicitudes.",
        "explanation": {
          "it": "La versione spagnola evita calchi e superlativi ingiustificati.",
          "en": "Natural Spanish rewriting without unverified guarantees.",
          "fr": "Réécriture espagnole naturelle et rigoureuse.",
          "es": "Versión española natural y precisa."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Sono indicati i passaggi da approvare, senza attribuire al progetto risultati commerciali non documentati.",
        "en": "Approval points are visible; no unsupported performance claims are made.",
        "fr": "Les points à valider restent visibles, sans résultats commerciaux prétendus.",
        "es": "Se señalan las aprobaciones sin inventar resultados comerciales."
      },
      {
        "it": "I materiali sono elaborati originali preparati per illustrare il servizio.",
        "en": "Materials are original examples prepared to demonstrate the service.",
        "fr": "Les documents ont été rédigés spécifiquement pour illustrer la prestation.",
        "es": "Los documentos son originales y muestran el servicio."
      }
    ],
    "limits": {
      "it": "Revisione linguistica ed editoriale; nessuna attestazione di conformità normativa o promessa di tempi non verificati.",
      "en": "Language and editorial proofreading only, no legal certification or unsupported service promises.",
      "fr": "Révision rédactionnelle sans certification juridique.",
      "es": "Revisión editorial sin certificaciones jurídicas."
    },
    "handoff": {
      "it": "Quattro testi originali e revisionati integralmente, con note IT/EN/FR/ES.",
      "en": "Four complete before-and-after notices in IT/EN/FR/ES with editorial notes.",
      "fr": "Quatre communications intégralement révisées et commentées.",
      "es": "Cuatro comunicaciones completas revisadas y comentadas."
    }
  }
];
