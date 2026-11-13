import type { OperationalDeepCase } from "./portfolioOperationalTypes";

/** Original complete business samples, with work products in Italian, English, French and Spanish. */
export const OPERATIONAL_SAMPLES_K: OperationalDeepCase[] = [
  {
    "id": "client-records-data-quality-complete",
    "category": "backoffice",
    "title": {
      "it": "Data entry: controllo di un archivio clienti e correzioni autorizzate",
      "en": "Data entry: full record validation and audit trail",
      "fr": "Saisie de données : contrôle d'un fichier clients",
      "es": "Entrada de datos: revisión completa de registros"
    },
    "service": {
      "it": "Data entry e gestione registri",
      "en": "Data entry and register quality control",
      "fr": "Saisie de données et contrôle des registres",
      "es": "Entrada de datos y control de registros"
    },
    "scenario": {
      "it": "Un'attività deve aggiornare il registro dei clienti già presenti nei propri sistemi. Alcuni codici risultano duplicati, alcune date sono in formati diversi e un record contiene dati insufficienti per l'aggiornamento.",
      "en": "An established-customer register contains duplicates, inconsistent dates and insufficient information. The task is to check and report, not invent missing values.",
      "fr": "Un registre de clients existants contient des doublons et des dates incohérentes ; il faut contrôler sans compléter les champs par supposition.",
      "es": "Un registro de clientes existentes tiene duplicados y fechas no uniformes, por lo que requiere revisión documentada."
    },
    "objective": {
      "it": "Documentare otto controlli, un piano di normalizzazione reversibile, un rapporto al responsabile e una procedura di verifica prima dell'importazione.",
      "en": "Produce eight documented checks, reversible data-cleaning rules, an owner report and a pre-import checklist.",
      "fr": "Produire huit contrôles, règles de normalisation, rapport et checklist.",
      "es": "Preparar ocho controles, reglas de normalización e informe."
    },
    "inputs": {
      "it": "Un estratto di otto righe identificato tramite codici, tracciato CSV approvato e istruzioni sulle modifiche consentite.",
      "en": "Eight coded rows, an approved CSV layout and authorised change rules.",
      "fr": "Huit lignes codées, modèle CSV et règles d'intervention.",
      "es": "Ocho filas codificadas, estructura CSV y reglas aprobadas."
    },
    "workflow": [
      {
        "it": "Confrontare campi e formati con il tracciato approvato.",
        "en": "Compare fields and formats with the approved schema.",
        "fr": "Comparer champs et formats au modèle.",
        "es": "Comparar campos y formatos con el modelo."
      },
      {
        "it": "Segnalare i duplicati senza unire automaticamente i record.",
        "en": "Flag duplicates without merging records.",
        "fr": "Signaler sans fusionner.",
        "es": "Marcar duplicados sin fusionar."
      },
      {
        "it": "Presentare correzioni proposte e richiedere autorizzazione.",
        "en": "Propose changes for approval.",
        "fr": "Soumettre les modifications au responsable.",
        "es": "Proponer cambios para aprobación."
      },
      {
        "it": "Verificare il file pronto per l'importazione e mantenere un registro.",
        "en": "Validate the import-ready file and preserve a trail.",
        "fr": "Contrôler le fichier final et conserver la trace.",
        "es": "Validar el archivo final y conservar registro."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Registro di qualità dei dati",
          "en": "Data quality log",
          "fr": "Journal de qualité",
          "es": "Registro de calidad"
        },
        "language": "it",
        "content": "CONTROLLO REGISTRO | CAMPIONE DI OTTO RIGHE\nCampi autorizzati: codice pratica; stato; data aggiornamento; referente; nota operativa. Nessun dato anagrafico reale utilizzato.\nC-001 | ATTIVA | 13/11/2026 | ref. A | Formato data da convertire in ISO; contenuto confermato nel modello.\nC-002 | IN ATTESA | 2026-11-12 | ref. B | Regolare.\nC-003 | ATTIVA | 2026.11.10 | ref. C | Separatore incoerente; conversione proposta dopo verifica.\nC-004 | CHIUSA | campo vuoto | ref. D | Data mancante: non completare con la data odierna.\nC-005 | ATTIVA | 2026-11-08 | ref. A | Possibile doppione di C-006; controllo manuale.\nC-006 | ATTIVA | 2026-11-08 | ref. A | Possibile doppione di C-005; non unire i record.\nC-007 | IN VERIFICA | 2026-11-09 | ref. E | Valore stato non presente nell'elenco approvato: chiedere conferma.\nC-008 | ATTIVA | 2026-11-07 | ref. F | Regolare.\nRIEPILOGO: 8 righe esaminate; 2 senza rilievi; 2 formati data da uniformare; 1 campo mancante; 2 record da confrontare; 1 stato da autorizzare. Un rilievo non equivale a un errore confermato.\nSTATO: proposta di intervento, non importazione eseguita.",
        "explanation": {
          "it": "Otto righe dettagliate con anomalie classificabili.",
          "en": "Eight detailed records and actionable classifications.",
          "fr": "Huit lignes contrôlées et anomalies répertoriées.",
          "es": "Ocho filas revisadas y diferencias identificadas."
        }
      },
      {
        "title": {
          "it": "Regole di normalizzazione e importazione",
          "en": "CSV cleaning and import procedure",
          "fr": "Procédure de normalisation et d'import",
          "es": "Procedimiento de limpieza e importación"
        },
        "language": "en",
        "content": "DATA QUALITY PROCEDURE — EXISTING CUSTOMER REGISTER\nGoal: make a small operational register consistent without changing information that has not been verified.\nSchema: case_id (text, unique); status (approved controlled vocabulary); updated_on (ISO date, YYYY-MM-DD); owner (approved role reference); note (short operational note).\n1. Keep an untouched, access-restricted copy of the incoming file and record its version.\n2. Check for missing identifiers, duplicate case IDs, unexpected status values and dates that cannot be parsed unambiguously.\n3. Create a separate proposed-changes sheet. Include row number, original value, suggested value, reason, source and required approver.\n4. Dates may only be standardised when the day, month and year are unambiguous. Never use today's date to fill an unknown value.\n5. Treat apparent duplicates as cases for review, not as automatic deletions. Similar dates or owners do not prove that two records refer to the same case.\n6. Check each proposed change against the authorised source. If a field remains unresolved, preserve the original and flag it.\n7. Before import, verify column order, delimiter, character encoding and the number of records. Export a preview and compare it with the approved change log.\n8. Import only with the owner's authorisation and an available recovery plan. Document who approved the changes and which version was used.\n9. After import, inspect a sample of records and reconcile the total counts. If a mismatch occurs, stop and escalate.\nExcluded: accounting data, invoices and independent decisions about customer retention or commercial status.\nDeliverables: eight-row audit, proposed-change log, draft import policy and owner confirmation record.",
        "explanation": {
          "it": "Procedura completa, senza aggiunte automatiche di dati mancanti.",
          "en": "Complete procedure with reversible steps and approval gates.",
          "fr": "Procédure complète avec contrôles et validations.",
          "es": "Procedimiento completo con controles y autorizaciones."
        }
      },
      {
        "title": {
          "it": "Rapporto alla responsabile",
          "en": "Manager data-quality report",
          "fr": "Rapport à la responsable",
          "es": "Informe a la responsable"
        },
        "language": "fr",
        "content": "Objet : Contrôle du registre — anomalies et validations à prévoir\nBonjour,\nJ'ai préparé l'analyse de huit lignes du registre opérationnel et relevé plusieurs points à traiter avant toute importation.\nDeux fiches ne nécessitent pas de modification d'après les informations disponibles. Deux dates doivent être harmonisées, sous réserve de confirmation de leur interprétation. Une fiche ne comporte pas de date de mise à jour : je recommande de conserver le champ vide tant que la valeur correcte n'a pas été retrouvée.\nLes fiches C-005 et C-006 présentent des caractéristiques communes, mais rien ne permet de conclure à un doublon certain. Elles ne doivent donc ni être fusionnées ni supprimées sans vérification. Enfin, une valeur d'état ne correspond pas à la liste de statuts approuvée.\nJe vous propose de valider les conversions de dates sans ambiguïté, de demander l'examen des deux fiches proches et de confirmer le statut autorisé pour C-007. L'importation ne sera préparée qu'après votre accord explicite, avec conservation du fichier d'origine.\nL'inventaire des points ouverts et la procédure de contrôle sont disponibles dans le dossier de travail.\nBien cordialement,\nAssistance back-office\nStatut : rapport de démonstration ; aucune donnée client réelle modifiée.",
        "explanation": {
          "it": "La nota distingue gli errori comprovati dai sospetti.",
          "en": "Manager report distinguishes confirmed problems from possible ones.",
          "fr": "Rapport clair séparant constats et points à vérifier.",
          "es": "Informe preciso que distingue errores y dudas."
        }
      },
      {
        "title": {
          "it": "Plan de control y cierre",
          "en": "Spanish final QA checklist",
          "fr": "Checklist final en espagnol",
          "es": "Lista española de control y cierre"
        },
        "language": "es",
        "content": "LISTA FINAL DE CONTROL — REGISTRO DE CLIENTES EXISTENTES\nObjetivo: verificar que los datos aprobados se han conservado y que ningún registro se ha alterado por suposiciones.\n[ ] Se ha guardado una copia sin modificar del fichero inicial.\n[ ] El número de filas del archivo revisado coincide con el resultado esperado.\n[ ] Las columnas siguen el orden del formato acordado y mantienen la codificación correcta.\n[ ] Las fechas convertidas tienen una fuente comprobable; las fechas desconocidas siguen señaladas.\n[ ] Los registros parecidos se han marcado para revisión, no se han fusionado sin autorización.\n[ ] Los valores de estado pertenecen a la lista aprobada o se han derivado al responsable.\n[ ] El fichero de cambios documenta valor anterior, valor propuesto, motivo y aprobación.\n[ ] Se ha comprobado la accesibilidad del archivo para los responsables autorizados.\n[ ] Existe un procedimiento acordado para recuperar la versión anterior.\n[ ] El informe de entrega identifica incidencias abiertas y la persona que debe resolverlas.\nEstado de este ejemplo: documentación preparada para la revisión; no se ha realizado ninguna importación en un sistema real.",
        "explanation": {
          "it": "Checklist completa con dieci punti verificabili.",
          "en": "Ten-point complete and actionable QA checklist.",
          "fr": "Liste détaillée de dix contrôles.",
          "es": "Lista completa de diez verificaciones."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Non vengono unite righe né completati campi senza fonte.",
        "en": "No records are merged and no value is guessed.",
        "fr": "Aucune fusion ni valeur complétée sans source.",
        "es": "No se fusionan registros ni se completan valores sin fuente."
      },
      {
        "it": "Le verifiche riguardano soltanto un modello operativo, non dati personali effettivi.",
        "en": "The sample has no real personal records.",
        "fr": "Le dossier n'expose aucune donnée personnelle réelle.",
        "es": "No se muestran datos personales reales."
      }
    ],
    "limits": {
      "it": "Supporto operativo e redazionale; non contabilità, fatturazione, consulenza normativa, lead generation, chiamate a freddo o decisioni per conto del titolare.",
      "en": "Operational and editorial support only; no accounting, invoicing, legal advice, lead generation, cold calling or unilateral owner decisions.",
      "fr": "Soutien opérationnel et rédactionnel uniquement ; sans comptabilité, facturation, conseil juridique, prospection ni décision autonome.",
      "es": "Apoyo operativo y editorial; no contabilidad, facturación, asesoría jurídica, captación, llamadas en frío ni decisiones no autorizadas."
    },
    "handoff": {
      "it": "Registro con otto righe, procedura EN, rapporto FR e checklist ES.",
      "en": "Eight-row audit, English procedure, French report and Spanish checklist.",
      "fr": "Registre, procédure anglaise, rapport français et checklist espagnole.",
      "es": "Registro, procedimiento inglés, informe francés y lista española."
    }
  },
  {
    "id": "practical-research-options-decision-pack",
    "category": "research",
    "title": {
      "it": "Ricerca informativa: scelta motivata di un metodo di assistenza",
      "en": "Desk research: evidence-led support workflow comparison",
      "fr": "Recherche documentaire : comparer des méthodes de support",
      "es": "Investigación informativa: comparación de métodos de atención"
    },
    "service": {
      "it": "Ricerca documentale e confronto soluzioni",
      "en": "Desk research and operational comparisons",
      "fr": "Recherche documentaire et comparaison",
      "es": "Investigación documental y comparación"
    },
    "scenario": {
      "it": "Una piccola attività deve scegliere come organizzare richieste già in arrivo da clienti italiani. Confronta tre modalità operative, senza attribuire caratteristiche verificate a fornitori esterni.",
      "en": "A small business needs a support workflow for existing Italian enquiries. The sample compares three operational approaches without presenting unsupported vendor claims.",
      "fr": "Une petite entreprise compare trois façons de gérer les demandes de ses clients italiens existants.",
      "es": "Una pequeña empresa compara tres formas de organizar consultas de clientes italianos actuales."
    },
    "objective": {
      "it": "Produrre criteri ponderati, matrice compilata, limiti delle evidenze e una raccomandazione condizionata.",
      "en": "Produce weighted criteria, a completed comparison, clear evidence limits and a conditional recommendation.",
      "fr": "Produire critères, tableau détaillé et recommandations conditionnelles.",
      "es": "Elaborar criterios, matriz comparativa y recomendaciones condicionadas."
    },
    "inputs": {
      "it": "Requisiti approvati: tracciabilità, accessi limitati, semplicità, passaggi di consegne e costi da verificare quando si valuta un prodotto specifico.",
      "en": "Approved needs: traceability, access limits, usability, handover and separately verified actual costs.",
      "fr": "Besoins validés : traçabilité, accès et simplicité.",
      "es": "Necesidades: trazabilidad, accesos, facilidad y controles."
    },
    "workflow": [
      {
        "it": "Trasformare il problema in criteri misurabili.",
        "en": "Translate the brief into measurable criteria.",
        "fr": "Définir des critères mesurables.",
        "es": "Definir criterios medibles."
      },
      {
        "it": "Confrontare opzioni operative, non pubblicità di fornitori.",
        "en": "Compare workflow options rather than marketing claims.",
        "fr": "Comparer des modes opératoires plutôt que des publicités.",
        "es": "Comparar métodos y no mensajes promocionales."
      },
      {
        "it": "Segnalare assunzioni e condizioni ancora da verificare.",
        "en": "Flag assumptions and missing evidence.",
        "fr": "Signaler les hypothèses non vérifiées.",
        "es": "Marcar supuestos pendientes."
      },
      {
        "it": "Consegnare una sintesi senza attribuire risultati non misurati.",
        "en": "Deliver a cautious decision memo.",
        "fr": "Remettre une synthèse prudente.",
        "es": "Entregar informe sin atribuir resultados no medidos."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Brief e criteri di confronto",
          "en": "Decision brief and criteria",
          "fr": "Brief et critères",
          "es": "Brief y criterios"
        },
        "language": "it",
        "content": "BRIEF DI RICERCA — FLUSSO RICHIESTE CLIENTI ITALIANI\nDomanda: quale sistema operativo permette di ricevere, classificare e seguire richieste da clienti già in gestione senza perdere visibilità sulle autorizzazioni?\nOpzione A: casella email condivisa con etichette e registro manuale.\nOpzione B: foglio di tracciamento strutturato collegato ai messaggi.\nOpzione C: piattaforma dedicata di ticketing, da valutare in base alle funzionalità effettivamente disponibili.\nPesi stabiliti nel brief:\nTracciabilità e responsabili — 30 punti\nAutorizzazioni e controllo degli accessi — 25 punti\nSemplicità per un piccolo gruppo — 20 punti\nEsportazione e portabilità dei dati — 15 punti\nCosti e condizioni verificabili — 10 punti\nTotale possibile: 100 punti.\nMetodologia: per ogni criterio riportare fonte verificata, evidenza, limite e punteggio solo quando il livello di prova lo consente. In assenza di documentazione del prodotto non attribuire un punteggio numerico a una funzione.\nEsclusioni: ricerca di potenziali clienti, raccolta contatti commerciali e compensi legati a nuovi appuntamenti.",
        "explanation": {
          "it": "Il brief rende la ricerca replicabile.",
          "en": "A traceable, replicable comparison brief.",
          "fr": "Brief détaillé, reproductible.",
          "es": "Brief detallado y reproducible."
        }
      },
      {
        "title": {
          "it": "Confronto ragionato delle tre modalità",
          "en": "Detailed workflow comparison",
          "fr": "Comparaison détaillée des trois modalités",
          "es": "Comparación detallada de tres modalidades"
        },
        "language": "en",
        "content": "WORKFLOW COMPARISON — INTERNAL OPERATING METHODS\nScope: existing-customer requests; three approaches assessed as processes, not named commercial products.\nA — Shared inbox with labels and a manual register.\nPotential strengths: familiar interface, minimal change to an existing routine, and a clear place to draft replies. Constraints: case ownership and overdue follow-ups may depend on manual discipline. Access features must be checked in the chosen mailbox service.\nB — Structured tracking sheet connected to email.\nPotential strengths: explicit case ID, owner, status and follow-up date; easy to design a handover view. Constraints: duplicated work if the sheet is not maintained; permissions and source-of-truth questions require a procedure.\nC — Dedicated ticketing workflow.\nPotential strengths: one record per case and structured status tracking where the selected product actually supports these capabilities. Constraints: configuration, training, ongoing costs and data export require current provider evidence. These features are not asserted for any particular vendor here.\nComparison conclusion: method B is a plausible first process to pilot if the owner can maintain a shared register and needs few users. This is conditional, not a measured ranking or a purchase recommendation. If the volume grows, investigate C against documented requirements.\nFacts still to verify: chosen provider's permissions, storage policy, export completeness, Italian-language interface, pricing, accessibility and contract terms.\nEvidence status: operating approaches assessed conceptually; no live subscription, vendor test or external customer outcome is claimed.",
        "explanation": {
          "it": "La matrice confronta metodi senza fingere verifica di prodotti reali.",
          "en": "A detailed comparison that does not claim unperformed provider verification.",
          "fr": "Comparaison approfondie sans caractéristiques commerciales non vérifiées.",
          "es": "Comparación detallada sin supuestas pruebas de proveedores."
        }
      },
      {
        "title": {
          "it": "Nota al responsabile in francese",
          "en": "French executive recommendation",
          "fr": "Recommandation en français",
          "es": "Recomendación en francés"
        },
        "language": "fr",
        "content": "NOTE D'AIDE À LA DÉCISION — ORGANISATION DES DEMANDES\nObjet : choix d'une méthode de suivi pour les clients italiens existants.\nTrois solutions de fonctionnement ont été étudiées : classement dans la messagerie, tableau de suivi structuré et procédure reposant sur un outil de tickets.\nPour une activité disposant d'une petite équipe et d'un volume de demandes encore gérable, un tableau partagé peut être un point de départ pertinent, à condition que les responsabilités soient définies. Chaque ligne doit porter une référence, le statut de la demande, une personne chargée du suivi et une date de contrôle.\nIl est important de ne pas confondre cette recommandation de méthode avec une évaluation technique des logiciels. Les fonctionnalités, les coûts, les accès et la portabilité des données doivent être vérifiés dans la documentation officielle du fournisseur retenu.\nJe propose donc de commencer par décrire le flux et de tester la procédure sur un petit nombre de dossiers autorisés, avant de décider si un outil supplémentaire est nécessaire. Le responsable reste chargé d'approuver tout abonnement, toute modification d'accès et toute règle de conservation.\nÉtat : synthèse préparée pour illustrer une décision opérationnelle ; aucune solution commerciale n'a été achetée ou déployée.",
        "explanation": {
          "it": "Sintesi completa con raccomandazione condizionata.",
          "en": "A complete French recommendation with evidence caveats.",
          "fr": "Recommandation claire et mesurée.",
          "es": "Recomendación completa y prudente."
        }
      },
      {
        "title": {
          "it": "Lista de fuentes y comprobaciones",
          "en": "Spanish evidence register",
          "fr": "Registre de vérification en espagnol",
          "es": "Registro de fuentes y comprobaciones"
        },
        "language": "es",
        "content": "REGISTRO DE FUENTES — VERIFICACIÓN ANTES DE ELEGIR UNA HERRAMIENTA\nCriterio 1: permisos y funciones de usuario. Fuente requerida: documentación oficial del proveedor y versión del plan contratado. Estado: pendiente de comprobar.\nCriterio 2: exportación de datos. Fuente requerida: manual de exportación; comprobar campos, formato y límites. Estado: pendiente.\nCriterio 3: notificaciones y asignación de responsables. Fuente requerida: guía funcional actualizada y prueba autorizada. Estado: pendiente.\nCriterio 4: idioma italiano de la interfaz y de los mensajes. Fuente requerida: lista oficial de idiomas y prueba de configuración. Estado: pendiente.\nCriterio 5: costes y condiciones. Fuente requerida: precios públicos fechados, condiciones de facturación y límites del plan. Estado: pendiente.\nCriterio 6: privacidad y conservación. Fuente requerida: información contractual y documentos aplicables, que deberá revisar la persona competente. Estado: pendiente.\nRegla de evaluación: separar observaciones verificadas, opiniones profesionales y preguntas abiertas. No asignar una puntuación positiva a una función si no existe una prueba accesible.\nEntrega prevista: tabla con enlace y fecha de cada fuente consultada, síntesis comparativa y decisiones pendientes. Esta ficha describe las comprobaciones que corresponden a un encargo real; no afirma haber consultado proveedores específicos.",
        "explanation": {
          "it": "Elenco concreto delle prove da ottenere prima della scelta.",
          "en": "Complete evidence-gathering checklist in Spanish.",
          "fr": "Liste espagnole des contrôles à prévoir.",
          "es": "Registro completo de fuentes pendientes."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Le ipotesi sono distinte da caratteristiche commerciali verificate.",
        "en": "Assumptions remain separate from verified vendor features.",
        "fr": "Les hypothèses restent séparées des faits vérifiés.",
        "es": "Los supuestos no se presentan como hechos verificados."
      },
      {
        "it": "Nessun prezzo o risultato di produttività è attribuito a terzi senza prova.",
        "en": "No unsupported commercial price or productivity result is asserted.",
        "fr": "Aucun prix ni résultat non vérifié.",
        "es": "No se atribuyen precios ni resultados sin pruebas."
      }
    ],
    "limits": {
      "it": "Supporto operativo e redazionale; non contabilità, fatturazione, consulenza normativa, lead generation, chiamate a freddo o decisioni per conto del titolare.",
      "en": "Operational and editorial support only; no accounting, invoicing, legal advice, lead generation, cold calling or unilateral owner decisions.",
      "fr": "Soutien opérationnel et rédactionnel uniquement ; sans comptabilité, facturation, conseil juridique, prospection ni décision autonome.",
      "es": "Apoyo operativo y editorial; no contabilidad, facturación, asesoría jurídica, captación, llamadas en frío ni decisiones no autorizadas."
    },
    "handoff": {
      "it": "Brief IT, confronto EN, raccomandazione FR e registro ES delle fonti.",
      "en": "Italian brief, English comparison, French recommendation and Spanish source checklist.",
      "fr": "Brief italien, comparaison anglaise, recommandation française et registre espagnol.",
      "es": "Brief italiano, comparación inglesa, informe francés y fuentes españolas."
    }
  },
  {
    "id": "italy-website-service-copy-full-localisations",
    "category": "web",
    "title": {
      "it": "Pagina servizi: comunicazione web integrale nelle quattro lingue",
      "en": "Complete four-language website service copy for Italy-facing work",
      "fr": "Page de services complète en quatre langues",
      "es": "Página de servicios completa en cuatro idiomas"
    },
    "service": {
      "it": "Redazione e localizzazione contenuti web",
      "en": "Website content and Italy-focused localisation",
      "fr": "Rédaction et localisation de contenus web",
      "es": "Redacción y localización de contenidos web"
    },
    "scenario": {
      "it": "Un servizio europeo di supporto documentale già definito vuole pubblicare una pagina coerente per un pubblico italiano e informazioni introduttive naturali per lettori anglofoni, francesi e spagnoli.",
      "en": "An established European document-organisation service needs clear Italian copy and natural English, French and Spanish introductions for visitors preparing to work with Italy.",
      "fr": "Un service de gestion documentaire cherche une page italienne et des versions cohérentes pour trois autres publics.",
      "es": "Un servicio de apoyo documental necesita textos coherentes para visitantes italianos y extranjeros."
    },
    "objective": {
      "it": "Produrre quattro testi web completi, comprensivi di proposta di valore, contenuti del servizio, percorso, limiti, FAQ e invito a richiedere informazioni.",
      "en": "Deliver four complete website texts with scope, process, limits, FAQ and call to action.",
      "fr": "Fournir quatre pages complètes, avec méthode, limites, FAQ et contact.",
      "es": "Entregar cuatro páginas completas con alcance, proceso, FAQ y contacto."
    },
    "inputs": {
      "it": "Brief approvato: assistenza da remoto a organizzare cartelle, versioni e documenti; nessuna promessa su recupero dati, sicurezza certificata o risultati garantiti.",
      "en": "Approved facts: remote folder and document organisation, version labels and shared working instructions; no security certification or guaranteed outcome.",
      "fr": "Description validée : organisation à distance, versions, classement.",
      "es": "Información aprobada: organización remota, carpetas, versiones y guía de uso."
    },
    "workflow": [
      {
        "it": "Identificare i fatti approvati e i limiti dell'offerta.",
        "en": "Identify approved claims and exclusions.",
        "fr": "Identifier les informations et limites.",
        "es": "Identificar afirmaciones y límites."
      },
      {
        "it": "Scrivere in italiano naturale per i clienti italiani.",
        "en": "Write Italian copy for Italian readers.",
        "fr": "Rédiger un italien naturel.",
        "es": "Redactar un italiano natural."
      },
      {
        "it": "Adattare l'argomentazione alle altre lingue, evitando calchi.",
        "en": "Localise for each reader rather than translate literally.",
        "fr": "Adapter les textes aux lecteurs.",
        "es": "Adaptar cada texto sin calcos."
      },
      {
        "it": "Verificare in tutte le versioni la coerenza di servizi e CTA.",
        "en": "Check scope and calls to action in all locales.",
        "fr": "Vérifier périmètre et appels à l'action.",
        "es": "Comprobar coherencia y llamadas a la acción."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Pagina web italiana integrale",
          "en": "Complete Italian website page",
          "fr": "Page italienne intégrale",
          "es": "Página italiana integral"
        },
        "language": "it",
        "content": "ORGANIZZA I DOCUMENTI DI LAVORO, SENZA COMPLICARE GLI STRUMENTI CHE USI\nQuando il materiale si accumula in cartelle diverse, è facile ritrovarsi con due versioni dello stesso documento, allegati difficili da identificare e istruzioni che cambiano da una persona all'altra. Un'organizzazione più chiara rende il lavoro quotidiano più semplice da seguire.\nCHE COSA POSSIAMO PREPARARE\nUna proposta di cartelle e sottocartelle coerente con la tua attività; regole per nominare documenti e versioni; una lista di controllo per distinguere bozze e materiali approvati; indicazioni per la condivisione con i collaboratori autorizzati; una guida essenziale per mantenere l'archivio aggiornato.\nCOME SI SVOLGE IL LAVORO\nPer prima cosa definiamo quali cartelle rientrano nell'incarico e quali documenti devono restare riservati. Analizziamo la struttura esistente, proponiamo un sistema di nomi e autorizzazioni e ti sottoponiamo le modifiche prima di applicarle. Nessun documento viene cancellato automaticamente. Al termine ricevi un riepilogo delle regole concordate.\nCHI PUÒ TROVARLO UTILE\nProfessionisti e piccole attività che condividono schede servizio, presentazioni, preventivi approvati, materiali informativi e documenti operativi con più persone.\nCOSA NON È COMPRESO\nIl servizio non sostituisce assistenza informatica specialistica, consulenza sulla protezione dei dati, recupero di file cancellati o gestione contabile.\nDOMANDE FREQUENTI\nDevo cambiare piattaforma? No, possiamo partire dagli strumenti già utilizzati e valutarne l'organizzazione.\nPosso escludere documenti riservati? Sì, definiamo il perimetro prima di richiedere eventuali accessi.\nCome viene definito il prezzo? Attraverso un preventivo scritto in base al materiale e alle attività concordate.\nRICHIEDI UN PREVENTIVO\nDescrivi gli strumenti che utilizzi e quali documenti vuoi organizzare: ti risponderemo con le informazioni necessarie per definire il lavoro.",
        "explanation": {
          "it": "Testo italiano pronto per una valutazione editoriale integrale.",
          "en": "Full Italian page with scope, workflow, FAQ and CTA.",
          "fr": "Page italienne complète, structurée et précise.",
          "es": "Página italiana completa, estructurada y precisa."
        }
      },
      {
        "title": {
          "it": "Full English service page",
          "en": "Pagina inglese completa",
          "fr": "Page anglaise complète",
          "es": "Página inglesa completa"
        },
        "language": "en",
        "content": "CLEARER DOCUMENT ORGANISATION FOR YOUR WORK WITH ITALY\nWorking with Italian-speaking colleagues or customers can be easier when your files have consistent names, approved versions are easy to recognise, and everyone knows where the latest documents belong. Our remote document-organisation service helps small businesses build practical routines around the tools they already use.\nWHAT THE SERVICE COVERS\nWe can review an agreed collection of shared folders, propose a clearer structure, create file-naming rules, distinguish drafts from approved documents, prepare a version-control checklist and write straightforward handover guidance for authorised colleagues.\nHOW THE PROCESS WORKS\nWe start with a short brief to identify the files in scope, the people responsible for them and any folders that should remain private. We then prepare a proposed structure for your review. Changes are made only within the agreed permissions and after the relevant approval. We do not delete files automatically or assume that two similarly named documents are duplicates.\nWHO IT IS FOR\nFreelancers and small organisations collaborating with Italian customers or teams, especially when several people contribute to website copy, service documents, internal guidelines or existing-customer correspondence.\nWHAT IS OUTSIDE THE SERVICE\nWe do not provide technical recovery of deleted data, cybersecurity certification, accounting, invoicing or legal compliance advice. These matters belong with the appropriate specialists.\nFREQUENTLY ASKED QUESTIONS\nDo I need to move to a new platform? Not necessarily. We can begin with your existing tools and agreed folder permissions.\nCan confidential documents stay outside the project? Yes. The assignment should be limited to the specific materials approved for access.\nHow do you calculate the cost? The scope and price are agreed in writing after reviewing the types and quantity of documents involved.\nREQUEST A QUOTATION\nTell us how your current files are organised and what you would like to improve. We will outline the next steps for a written quotation.",
        "explanation": {
          "it": "Inglese britannico coerente con il mercato italiano e i limiti del servizio.",
          "en": "Full natural British English copy tailored to Italy-facing work.",
          "fr": "Version anglaise intégrale adaptée au contexte italien.",
          "es": "Texto completo en inglés británico para trabajar con Italia."
        }
      },
      {
        "title": {
          "it": "Page de services complète en français",
          "en": "Pagina servizi francese completa",
          "fr": "Version française intégrale",
          "es": "Página francesa completa"
        },
        "language": "fr",
        "content": "DES DOCUMENTS MIEUX ORGANISÉS POUR VOTRE ACTIVITÉ AVEC L'ITALIE\nLorsque plusieurs personnes interviennent sur les mêmes dossiers, il devient difficile de savoir quelle version utiliser et où retrouver un fichier approuvé. Nous proposons un accompagnement opérationnel à distance pour clarifier les dossiers partagés et faciliter les échanges avec vos interlocuteurs italiens.\nCE QUE COMPREND LA PRESTATION\nNous pouvons étudier l'organisation actuelle d'un ensemble de dossiers défini à l'avance, proposer une nouvelle arborescence, établir des règles de nommage, distinguer les documents en cours de validation, préparer une liste de contrôles et rédiger un guide de transmission pour les personnes autorisées.\nUNE MÉTHODE SIMPLE ET CONTRÔLABLE\nNous commençons par délimiter les documents concernés et identifier les responsables. Une proposition de classement est ensuite soumise à votre validation. Aucune suppression automatique n'est effectuée ; les accès et déplacements éventuels restent soumis aux autorisations convenues.\nÀ QUI S'ADRESSE CE SERVICE ?\nAux indépendants et petites structures qui échangent régulièrement des présentations, contenus, informations de service et documents de suivi avec des clients ou partenaires italiens.\nCE QUE LA PRESTATION NE COUVRE PAS\nNi récupération technique de fichiers effacés, ni audit de cybersécurité, ni conseil juridique, ni comptabilité ou facturation.\nQUESTIONS FRÉQUENTES\nFaut-il changer d'outil ? Pas nécessairement : nous pouvons partir des solutions déjà utilisées.\nLes dossiers confidentiels peuvent-ils rester exclus ? Oui, le périmètre d'accès est défini avant toute intervention.\nComment le tarif est-il fixé ? Sur la base d'un devis écrit, après examen des documents et tâches concernés.\nDEMANDEZ UN DEVIS\nExpliquez-nous comment vos documents sont actuellement organisés et quels problèmes vous souhaitez résoudre. Nous vous indiquerons les éléments utiles pour établir une proposition.",
        "explanation": {
          "it": "Francese naturale, completo e centrato sulle relazioni con l'Italia.",
          "en": "Complete idiomatic French website service copy.",
          "fr": "Texte français complet, naturel et adapté au contexte.",
          "es": "Página francesa completa y natural."
        }
      },
      {
        "title": {
          "it": "Página de servicios completa en español",
          "en": "Pagina spagnola completa",
          "fr": "Page espagnole complète",
          "es": "Versión española íntegra"
        },
        "language": "es",
        "content": "DOCUMENTOS BIEN ORGANIZADOS PARA TRABAJAR CON ITALIA\nCuando los archivos se guardan en distintas carpetas y circulan varias versiones, resulta difícil saber qué documento está aprobado y quién debe actualizarlo. Nuestro apoyo operativo a distancia ayuda a pequeños negocios a establecer reglas claras para organizar y compartir su documentación, también cuando trabajan con clientes o colaboradores italianos.\nQUÉ INCLUYE EL SERVICIO\nPodemos revisar las carpetas que se hayan acordado, proponer una estructura más clara, preparar criterios para nombrar archivos, distinguir borradores y versiones aprobadas, crear una lista de comprobación y redactar una guía de uso para las personas autorizadas.\nCÓMO TRABAJAMOS\nPrimero definimos los materiales y las responsabilidades. Después presentamos una propuesta de organización para que puedas revisarla. Cualquier cambio se realiza dentro de los permisos establecidos y con la autorización correspondiente. No borramos archivos automáticamente ni tratamos como duplicados dos documentos solo porque tengan nombres parecidos.\nA QUIÉN SE DIRIGE\nA profesionales independientes y pequeños negocios que comparten información de servicios, presentaciones, materiales de formación y comunicaciones con clientes o equipos en Italia.\nQUÉ NO INCLUYE\nNo realizamos recuperación técnica de datos, auditorías de ciberseguridad, asesoramiento jurídico, contabilidad ni facturación.\nPREGUNTAS FRECUENTES\n¿Tengo que cambiar de plataforma? No necesariamente; podemos empezar con las herramientas que ya utilizas.\n¿Puedo excluir documentos confidenciales? Sí, los permisos y el alcance se acuerdan antes de comenzar.\n¿Cómo se calcula el precio? Mediante un presupuesto escrito, según los documentos y las tareas previstas.\nSOLICITA UN PRESUPUESTO\nCuéntanos qué herramientas utilizas y qué necesitas organizar. Te indicaremos los pasos para preparar una propuesta por escrito.",
        "explanation": {
          "it": "Pagina spagnola completa e idiomatica.",
          "en": "Full idiomatic Spanish website content.",
          "fr": "Version espagnole complète et adaptée.",
          "es": "Texto español completo y fácil de entender."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Le quattro versioni hanno gli stessi servizi, limiti e invito a richiedere un preventivo.",
        "en": "All four locales share equivalent service scope and exclusions.",
        "fr": "Même périmètre et mêmes exclusions dans les quatre langues.",
        "es": "Mismos servicios y límites en los cuatro idiomas."
      },
      {
        "it": "Nessuna versione promette risultati non verificabili.",
        "en": "No locale makes unsubstantiated performance claims.",
        "fr": "Aucune promesse de résultat non vérifiable.",
        "es": "Ninguna versión promete resultados sin pruebas."
      }
    ],
    "limits": {
      "it": "Supporto operativo e redazionale; non contabilità, fatturazione, consulenza normativa, lead generation, chiamate a freddo o decisioni per conto del titolare.",
      "en": "Operational and editorial support only; no accounting, invoicing, legal advice, lead generation, cold calling or unilateral owner decisions.",
      "fr": "Soutien opérationnel et rédactionnel uniquement ; sans comptabilité, facturation, conseil juridique, prospection ni décision autonome.",
      "es": "Apoyo operativo y editorial; no contabilidad, facturación, asesoría jurídica, captación, llamadas en frío ni decisiones no autorizadas."
    },
    "handoff": {
      "it": "Quattro pagine web complete, una per lingua, con FAQ e CTA.",
      "en": "Four full website pages, one in each language.",
      "fr": "Quatre pages intégrales, avec FAQ et appel à l'action.",
      "es": "Cuatro páginas completas con FAQ y llamada a la acción."
    }
  }
];
