import type { OperationalDeepCase } from "./portfolioOperationalTypes";

/** All four cases and every deliverable are original fictional portfolio demonstrations. */
export const OPERATIONAL_SAMPLES_D: OperationalDeepCase[] = [
  {
    "id": "course-information-source-audit",
    "category": "research",
    "title": {
      "it": "Ricerca documentale: una FAQ senza informazioni contraddittorie",
      "en": "Source audit: a course FAQ without conflicting details",
      "fr": "Vérification documentaire : une FAQ de formation cohérente",
      "es": "Verificación documental: preguntas frecuentes sin contradicciones"
    },
    "service": {
      "it": "Ricerca informativa e verifica documentale",
      "en": "Informational desk research and source checks",
      "fr": "Recherche d'informations et contrôle des sources",
      "es": "Investigación informativa y comprobación de fuentes"
    },
    "scenario": {
      "it": "Un'organizzatrice immaginaria deve inviare una guida a 42 partecipanti già iscritti a una formazione online. Tre file interni riportano orari e istruzioni differenti: occorre verificare quale versione sia stata approvata prima di pubblicare la FAQ.",
      "en": "A fictional course organiser is preparing information for 42 already-registered attendees. Three internal documents disagree about timing and access instructions, so their status must be checked before publication.",
      "fr": "Une organisatrice fictive prépare les informations destinées à 42 participants déjà inscrits. Trois documents internes indiquent des horaires différents et doivent être confrontés aux validations.",
      "es": "Una organizadora ficticia prepara la información para 42 personas ya inscritas. Tres documentos internos presentan horarios distintos y deben revisarse antes de publicar la información."
    },
    "objective": {
      "it": "Ricostruire la provenienza delle informazioni, distinguere dati confermati da dati in attesa e proporre una FAQ utilizzabile senza inventare orari, link o autorizzazioni.",
      "en": "Document the provenance of each statement, label outstanding decisions and prepare a draft FAQ without fabricating times or access links.",
      "fr": "Retracer l'origine des données et élaborer une FAQ provisoire sans inventer des horaires ou des liens.",
      "es": "Rastrear la procedencia de los datos y preparar una guía sin inventar horarios ni accesos."
    },
    "inputs": {
      "it": "Programma P-v02, programma P-v03, bozza email E-v01 e nota dell'organizzatrice N-04: tutti documenti inventati. P-v02 indica 17:30; P-v03 indica 18:00; la nota N-04 non dichiara ancora l'approvazione definitiva.",
      "en": "Invented schedule versions P-v02 and P-v03, email E-v01 and owner note N-04; 17:30 and 18:00 remain unresolved.",
      "fr": "Programmes fictifs P-v02 et P-v03, courriel E-v01 et note N-04 ; l'horaire n'est pas encore validé.",
      "es": "Programas ficticios P-v02 y P-v03, correo E-v01 y nota N-04; el horario sigue pendiente."
    },
    "workflow": [
      {
        "it": "Inventariare i documenti, il loro autore e lo stato di approvazione.",
        "en": "Register each document and approval status.",
        "fr": "Répertorier les versions et validations.",
        "es": "Registrar las versiones y aprobaciones."
      },
      {
        "it": "Confrontare le informazioni punto per punto, segnalando i conflitti.",
        "en": "Compare conflicting details side by side.",
        "fr": "Comparer les contradictions.",
        "es": "Comparar las diferencias."
      },
      {
        "it": "Registrare fonti e versioni anziché dedurre che la più recente sia automaticamente approvata.",
        "en": "Do not mistake a newer file for an approved one.",
        "fr": "Ne pas confondre nouveauté et validation.",
        "es": "No confundir versión nueva con aprobación."
      },
      {
        "it": "Proporre FAQ con risposte autorizzate e segnaposto per dati non confermati.",
        "en": "Draft a FAQ that keeps unknown details visibly pending.",
        "fr": "Rédiger une FAQ indiquant les données en attente.",
        "es": "Redactar preguntas frecuentes con datos pendientes."
      },
      {
        "it": "Sottoporre la versione finale all'organizzatrice per un'approvazione esplicita.",
        "en": "Obtain explicit sign-off before distributing materials.",
        "fr": "Obtenir une validation avant l'envoi.",
        "es": "Solicitar aprobación antes del envío."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Registro delle fonti e delle versioni",
          "en": "Source/version register",
          "fr": "Registre des sources",
          "es": "Registro de fuentes"
        },
        "content": "REGISTRO DOCUMENTALE — SCENARIO COMPLETAMENTE INVENTATO\nF-01 | P-v02 | Programma | Orario indicato: 17:30 | Stato: versione precedente; NON confermare.\nF-02 | P-v03 | Programma | Orario indicato: 18:00 | Stato: bozza più recente; approvazione NON documentata.\nF-03 | E-v01 | Email partecipanti | Dice «link nella prossima comunicazione» | Stato: bozza, NON inviata.\nF-04 | N-04 | Nota organizzatrice | Chiede verifica dell'orario | Stato: istruzione attiva, non una conferma.\nDECISIONE APERTA D-01: l'orario definitivo deve essere confermato dall'organizzatrice. DECISIONE APERTA D-02: indicare soltanto il canale ufficiale per ottenere il link quando verrà effettivamente distribuito.\nRegola: registrare sempre data, origine, versione, decisione e persona che approva.",
        "explanation": {
          "it": "Un file più recente non equivale automaticamente a una fonte approvata.",
          "en": "A recent file is not necessarily an authorised source.",
          "fr": "Un document récent n'est pas nécessairement validé.",
          "es": "Un archivo reciente no implica aprobación."
        }
      },
      {
        "title": {
          "it": "FAQ informativa con punti da confermare",
          "en": "Draft attendee FAQ",
          "fr": "FAQ provisoire",
          "es": "Preguntas frecuentes provisionales"
        },
        "content": "FAQ PER PARTECIPANTI GIÀ ISCRITTI — BOZZA DIMOSTRATIVA\nD. Quando si svolge l'incontro?\nR. L'orario è in corso di verifica. L'organizzatrice comunicherà la conferma attraverso il canale già utilizzato per le iscrizioni. Non considerare definitive le indicazioni delle vecchie versioni del programma.\nD. Come riceverò le istruzioni di accesso?\nR. Le istruzioni verranno inviate dall'organizzatrice dopo la verifica dei dati tecnici. Non pubblichiamo qui un link fittizio.\nD. È possibile utilizzare il materiale dopo l'incontro?\nR. La disponibilità di eventuali materiali deve essere confermata dall'organizzatrice; la presente bozza non promette registrazioni né attestati.\nSTATO: testo da approvare, non comunicazione inviata. Nessun nuovo partecipante viene cercato o contattato.",
        "explanation": {
          "it": "Le risposte sono utili anche quando manca una conferma, perché non trasformano una bozza in promessa.",
          "en": "An informative FAQ can be clear without presenting unknowns as promises.",
          "fr": "La FAQ reste utile même si certains points sont à confirmer.",
          "es": "Una FAQ puede ser clara sin convertir dudas en promesas."
        }
      },
      {
        "title": {
          "it": "Memo di consegna e controlli",
          "en": "Decision handover memo",
          "fr": "Note de transmission",
          "es": "Nota de entrega"
        },
        "content": "MEMO ALL'ORGANIZZATRICE — ESEMPIO\nOggetto: allineamento delle informazioni ai 42 iscritti\nHo confrontato le versioni del programma e la bozza della comunicazione. Due informazioni non risultano approvate: (1) orario d'inizio, indicato come 17:30 nel documento P-v02 e 18:00 nella bozza P-v03; (2) modalità e data di trasmissione del collegamento di accesso.\nTi propongo di confermare in modo esplicito i due punti e validare la FAQ allegata. In assenza di conferma, la bozza mantiene le informazioni come «da verificare»; non viene inviata ai partecipanti. Ho conservato riferimenti delle fonti e numeri di versione per rendere ricostruibile ogni successiva modifica. Non ho effettuato reclutamento, comunicazioni a freddo o attività commerciali.",
        "explanation": {
          "it": "Una consegna operativa separa ciò che è già verificato da ciò che richiede una decisione.",
          "en": "The handover clearly distinguishes checks completed from decisions pending.",
          "fr": "La note sépare les vérifications des décisions.",
          "es": "La entrega separa verificaciones y decisiones pendientes."
        }
      },
      {
        "title": {
          "it": "Relazione integrale sulle fonti e comunicazioni ai partecipanti",
          "en": "Complete source-verification report and participant communications",
          "fr": "Rapport complet de vérification des sources et des messages",
          "es": "Informe completo de verificación de fuentes y comunicaciones"
        },
        "language": "it",
        "content": "DOSSIER DI CONTROLLO DELLE INFORMAZIONI — SCENARIO COMPLETAMENTE INVENTATO\nEvento online destinato a 42 persone già iscritte. Fonti: P-v02, P-v03, E-v01 e N-04, tutte create per la simulazione. Non è stato inviato alcun messaggio né effettuato alcun reclutamento.\n\nREGISTRO DELLE FONTI\nF-01 | Programma P-v02 | Orario: 17:30 | Data di prova: 03/11 | Stato: versione precedente, non utilizzare come conferma.\nF-02 | Programma P-v03 | Orario: 18:00 | Data di prova: 05/11 | Stato: versione più recente, ma approvazione non documentata.\nF-03 | Bozza email E-v01 | Orario: 17:30 | Data di prova: 04/11 | Stato: discordante da P-v03, da bloccare.\nF-04 | Nota N-04 | Orario: non confermato | Data di prova: 06/11 | Stato: non identifica una versione definitiva.\nESITO: non esiste nello scenario una fonte autorizzata che permetta di confermare pubblicamente l'orario.\n\nBOZZA DI RISPOSTA A UN PARTECIPANTE GIÀ ISCRITTO\nOggetto: Conferma dell'orario dell'incontro — verifica in corso\nBuongiorno,\ngrazie per averci scritto. Stiamo verificando l'orario definitivo del prossimo incontro con l'organizzatrice, perché i documenti di lavoro attualmente disponibili riportano informazioni diverse.\nPer evitare di comunicarle un'indicazione non confermata, le invieremo l'orario e le istruzioni di accesso soltanto dopo aver ricevuto la versione approvata del programma.\nNon è necessario che completi una nuova iscrizione o ci invii altri dati personali.\nCordiali saluti,\nSegreteria organizzativa\nStato: bozza non inviata.\n\nEMAIL ALL'ORGANIZZATRICE — RICHIESTA DI APPROVAZIONE\nOggetto: Informazioni discordanti sul corso — conferma necessaria\nBuongiorno,\nho confrontato i quattro materiali di prova. Il programma P-v02 riporta le 17:30, mentre P-v03 indica le 18:00; la bozza E-v01 riprende il primo orario e la nota N-04 non conferma quale versione sia approvata.\nPrima di preparare il promemoria definitivo per le 42 persone già iscritte chiedo di indicare per iscritto: programma approvato, fuso orario, canale autorizzato di invio e link effettivamente utilizzabile. Non ho modificato i documenti originali né comunicato un orario ai partecipanti.\nCordiali saluti,\nSegreteria organizzativa\n\nFAQ PROVVISORIA, NON PUBBLICABILE SENZA CONFERMA\nD. A che ora inizia l'incontro?\nR. L'orario è in fase di verifica con l'organizzazione. Le persone già iscritte riceveranno una conferma attraverso il canale previsto.\nD. Dove trovo il collegamento?\nR. Il link sarà comunicato dall'organizzazione dopo le verifiche necessarie.\nD. Devo iscrivermi di nuovo?\nR. La richiesta riguarda un evento per partecipanti già iscritti. Non risulta necessaria una nuova iscrizione in questo scenario.\n\nCONSEGNA: registro delle quattro fonti, due email complete, FAQ provvisoria e lista delle decisioni aperte. Nessun orario definitivo è stato inventato.",
        "explanation": {
          "it": "Confronto delle versioni discordanti, comunicazione cautelativa e nota al responsabile: nessun orario inventato.",
          "en": "Comparison of conflicting source versions, careful holding reply and organiser handover.",
          "fr": "Comparaison des versions contradictoires, réponse provisoire et note à l'organisatrice.",
          "es": "Comparación de versiones contradictorias y entrega al responsable."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Nessun orario presentato come confermato in assenza di approvazione.",
        "en": "Unapproved times are never labelled confirmed.",
        "fr": "Aucun horaire non validé n'est présenté comme définitif.",
        "es": "No se confirma ningún horario no aprobado."
      },
      {
        "it": "Tutti i riferimenti a persone e documenti sono inventati; nessuna fonte reale viene citata falsamente.",
        "en": "All references are fictional; no real sources are falsely cited.",
        "fr": "Les références sont fictives et clairement présentées comme telles.",
        "es": "Todas las referencias son ficticias."
      },
      {
        "it": "La guida riguarda partecipanti già iscritti e non il reclutamento di nuovi nominativi.",
        "en": "Only existing attendees are in scope, not participant recruitment.",
        "fr": "Uniquement les participants déjà inscrits.",
        "es": "Solo participantes ya inscritos."
      }
    ],
    "limits": {
      "it": "Ricerca e organizzazione delle informazioni fornite o accessibili; nessuna certificazione, verifica normativa, reclutamento partecipanti, prospecting o creazione di fatti non documentati.",
      "en": "Documentary work only; no certification, legal checks, participant recruitment or prospecting.",
      "fr": "Recherche informative sans certification, recrutement ni prospection.",
      "es": "Investigación documental sin certificación, captación ni reclutamiento."
    },
    "handoff": {
      "it": "Registro fonti, FAQ in bozza, memo con decisioni aperte e richiesta di autorizzazione.",
      "en": "Source register, draft FAQ and approval memo.",
      "fr": "Registre, FAQ et note de validation.",
      "es": "Registro, FAQ y nota de aprobación."
    }
  },
  {
    "id": "existing-client-notice-editing",
    "category": "writing",
    "title": {
      "it": "Revisione editoriale: una comunicazione ai clienti senza promesse improprie",
      "en": "Editorial rewrite: a customer update without unsupported promises",
      "fr": "Révision rédactionnelle : informer sans promesses injustifiées",
      "es": "Revisión editorial: informar sin promesas infundadas"
    },
    "service": {
      "it": "Scrittura e revisione di comunicazioni professionali",
      "en": "Professional writing and editorial revision",
      "fr": "Rédaction et révision de communications",
      "es": "Redacción y revisión de comunicaciones"
    },
    "scenario": {
      "it": "Un'azienda fittizia deve informare clienti già acquisiti dell'aggiornamento della procedura di assistenza. La bozza originale usa frasi poco chiare e promette tempi di risposta e rimborsi che non risultano approvati.",
      "en": "A fictional business needs to update existing customers about its support process. The draft contains unclear terms and unsupported response-time and refund guarantees.",
      "fr": "Une entreprise fictive informe ses clients existants d'une nouvelle procédure. Le brouillon promet des délais sans approbation.",
      "es": "Una empresa ficticia informa a clientes actuales sobre su proceso de ayuda, pero el borrador incluye promesas no autorizadas."
    },
    "objective": {
      "it": "Rendere il messaggio leggibile, preciso e cortese, distinguendo la presa in carico dalla risoluzione e segnalando gli elementi da approvare.",
      "en": "Replace vague claims with a usable, approval-ready customer notice.",
      "fr": "Remplacer les formules ambiguës par un texte prêt pour validation.",
      "es": "Sustituir afirmaciones vagas por un texto claro sujeto a aprobación."
    },
    "inputs": {
      "it": "Bozza editoriale interna e indicazioni generiche: comunicazione per clienti esistenti, canale email ordinario, nessun tempo di risposta approvato e nessuna politica rimborsi verificata.",
      "en": "Draft notice, existing-customer audience, support mailbox and no verified service-level commitment.",
      "fr": "Brouillon, clientèle existante, aucune garantie de délai confirmée.",
      "es": "Borrador, clientes actuales y sin plazos garantizados confirmados."
    },
    "workflow": [
      {
        "it": "Evidenziare affermazioni assolute, ambigue o non comprovate.",
        "en": "Flag unsupported and absolute claims.",
        "fr": "Repérer les affirmations non étayées.",
        "es": "Detectar promesas sin respaldo."
      },
      {
        "it": "Definire destinatario, canale e azione richiesta.",
        "en": "Identify audience, channel and next step.",
        "fr": "Définir le public et l'action attendue.",
        "es": "Definir destinatarios y siguiente paso."
      },
      {
        "it": "Riscrivere oggetto, apertura, istruzioni, aspettative e chiusura.",
        "en": "Rewrite subject, opening, instructions, expectations and close.",
        "fr": "Réécrire l'objet et le message.",
        "es": "Reescribir asunto y mensaje."
      },
      {
        "it": "Preparare domande per il responsabile sui punti non documentati.",
        "en": "Ask the owner to validate unresolved policy details.",
        "fr": "Soumettre les conditions à validation.",
        "es": "Solicitar validación del responsable."
      },
      {
        "it": "Rileggere tono, leggibilità e coerenza con il servizio.",
        "en": "Check tone, readability and accuracy.",
        "fr": "Contrôler ton et précision.",
        "es": "Revisar tono y precisión."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Testo originale da correggere",
          "en": "Original copy before editing",
          "fr": "Texte source avant révision",
          "es": "Texto antes de la revisión"
        },
        "content": "BOZZA ORIGINALE — MATERIALE INVENTATO\nOggetto: comunicazione importante a tutti i nostri utenti!!!\nCiao a tutti, abbiamo cambiato il sistema di gestione delle richieste e da ora vi garantiamo la risposta a qualunque problema entro 24 ore. Per tutto quello che non funziona provvediamo al rimborso immediato e automatico. Vi chiediamo di scrivere al nostro indirizzo email allegando tutti i documenti che avete, anche se non sono pertinenti, così riusciamo a sapere tutto subito.\nSe non ricevete risposta, riscrivete ogni giorno e usate anche gli altri canali. Per favore non telefonate perché è tutto online. Grazie per la comprensione.\nDIAGNOSI EDITORIALE: promessa di 24 ore priva di prova; rimborsi e automatismi non verificati; raccolta eccessiva di dati; tono brusco e indicazioni contraddittorie sui canali.",
        "explanation": {
          "it": "La bozza dimostra cosa correggere: linguaggio enfatico, promesse non verificate e richiesta indiscriminata di documenti.",
          "en": "The draft exposes unsupported guarantees and excessive data requests.",
          "fr": "La version initiale cumule des promesses et une demande excessive de données.",
          "es": "El borrador tiene garantías no verificadas y pide demasiados datos."
        }
      },
      {
        "title": {
          "it": "Comunicazione riscritta pronta per approvazione",
          "en": "Revised customer announcement",
          "fr": "Communication révisée",
          "es": "Aviso revisado"
        },
        "content": "VERSIONE RIVISTA — BOZZA DA APPROVARE\nOggetto: Come inviare una richiesta al servizio clienti\nGentile cliente,\nabbiamo aggiornato le modalità con cui organizziamo le richieste di assistenza, per gestirle in modo più chiaro e tracciabile. Se hai bisogno di informazioni su un ordine o su un servizio già acquistato, puoi rispondere a questa email indicando il riferimento della pratica e una breve descrizione della richiesta.\nTi chiediamo di inviare soltanto i documenti necessari alla verifica del caso. Se serviranno ulteriori dettagli, ti contatteremo attraverso il canale concordato.\nLa ricezione del messaggio non equivale alla risoluzione immediata della richiesta: tempi e possibili soluzioni verranno comunicati dopo le verifiche previste.\nGrazie per la collaborazione.\nAssistenza clienti — azienda dimostrativa\nNOTA DI LAVORO: il testo non viene inviato finché il responsabile non approva la procedura.",
        "explanation": {
          "it": "Il testo revisionato definisce il passo successivo senza inventare tempi, rimborsi o condizioni commerciali.",
          "en": "The rewrite explains the next step without inventing response times or refund policies.",
          "fr": "La nouvelle version clarifie l'étape suivante sans promesse injustifiée.",
          "es": "La versión revisada explica el procedimiento sin inventar garantías."
        }
      },
      {
        "title": {
          "it": "Scheda decisioni editoriali e approvazioni",
          "en": "Editorial change log",
          "fr": "Journal des corrections",
          "es": "Registro de cambios"
        },
        "content": "REGISTRO MODIFICHE — ESEMPIO DIMOSTRATIVO\n1. «Comunicazione importante!!!» → oggetto informativo, specifico e non allarmistico.\n2. «Risposta a qualunque problema entro 24 ore» → eliminata perché manca un livello di servizio approvato; evitare di confondere presa in carico e soluzione.\n3. «Rimborso immediato e automatico» → eliminato: non esiste un'indicazione verificata del responsabile.\n4. «Tutti i documenti» → «soltanto i documenti necessari», per evitare raccolte indiscriminate.\n5. «Riscrivete ogni giorno» → tolto: non è una procedura di assistenza verificata.\nDA APPROVARE: indirizzo di risposta effettivamente presidiato, canale ufficiale, eventuali tempi comunicabili, procedure di gestione dei casi particolari.\nSTATO: versione editoriale proposta, non comunicazione realmente spedita.",
        "explanation": {
          "it": "Ogni cambiamento importante è giustificato e tracciabile prima dell'approvazione.",
          "en": "Each key edit is documented with a reason.",
          "fr": "Chaque modification importante est justifiée.",
          "es": "Cada cambio importante queda documentado."
        }
      },
      {
        "title": {
          "it": "Comunicazione definitiva da approvare, FAQ e relazione delle modifiche",
          "en": "Complete customer notice, FAQ and editorial change report",
          "fr": "Communication complète, FAQ et suivi des modifications",
          "es": "Comunicación completa, preguntas frecuentes e informe editorial"
        },
        "language": "it",
        "content": "PACCHETTO DI REVISIONE EDITORIALE — AZIENDA E CLIENTI INVENTATI\nScopo: comunicare a persone con rapporti già avviati un cambiamento nel trattamento delle richieste di assistenza. Nessun invio reale.\n\nVERSIONE REVISIONATA — EMAIL COMPLETA\nOggetto: Come inviare e seguire una richiesta al servizio clienti\nGentile cliente,\nabbiamo aggiornato le modalità con cui organizziamo i messaggi di assistenza relativi agli ordini e ai servizi già acquistati.\nPer inviarci una richiesta può utilizzare il canale di contatto indicato nelle nostre comunicazioni ufficiali. La invitiamo a descrivere brevemente il problema e, quando pertinente, a riportare il numero dell'ordine o della pratica. Non è necessario comunicare password, dati di pagamento o altre informazioni riservate non richieste.\nUna volta ricevuta la richiesta, verificheremo gli elementi disponibili e, se necessario, le chiederemo informazioni aggiuntive. Alcune questioni potrebbero richiedere il coinvolgimento del referente competente prima di una risposta definitiva.\nLe eventuali condizioni per modifiche d'ordine, resi o rimborsi saranno valutate sulla base delle procedure effettivamente applicabili. Questa comunicazione non modifica tali condizioni.\nLa ringraziamo per la collaborazione.\nCordiali saluti,\nServizio clienti\nStato: bozza dimostrativa da approvare.\n\nVERSIONE BREVE PER UNA PAGINA INFORMATIVA\nTitolo: Richieste di assistenza\nTesto: Hai un ordine già effettuato o una pratica in corso? Descrivi il problema e indica il riferimento, se disponibile. Verificheremo la richiesta e ti comunicheremo gli eventuali passaggi successivi. Non inviare password o dati di pagamento.\nPulsante: Invia una richiesta.\n\nFAQ COMPLEMENTARI\nD. Riceverò una risposta entro 24 ore?\nR. I tempi dipendono dalle modalità di assistenza effettivamente comunicate. Questa pagina non prevede una garanzia di risposta entro un termine non approvato.\nD. Il modulo autorizza automaticamente un reso?\nR. No. La ricezione di una richiesta non equivale alla sua accettazione.\nD. Devo inviare informazioni bancarie?\nR. No. Il primo messaggio non deve contenere credenziali o dati di pagamento.\n\nREGISTRO DELLE SCELTE EDITORIALI\nR-01: eliminata la promessa «risposta entro 24 ore» perché non supportata da accordi.\nR-02: rimossa ogni promessa automatica di rimborso o di risoluzione.\nR-03: sostituito il tono allarmistico con un'informazione utile.\nR-04: distinta la conferma di ricezione dalla chiusura effettiva della pratica.\nR-05: introdotta una richiesta di dati pertinente e limitata.\n\nNOTA AL RESPONSABILE\nIl testo è pronto per la valutazione editoriale. Prima dell'invio confermare canale ufficiale, procedura realmente adottata e condizioni dei servizi. Nessun cliente è stato contattato.",
        "explanation": {
          "it": "Una comunicazione riscritta per i clienti esistenti, con messaggi coerenti e senza promesse non autorizzate.",
          "en": "A complete edited customer notice without invented service levels or refund promises.",
          "fr": "Message destiné aux clients existants, sans engagements non validés.",
          "es": "Aviso a clientes actuales sin promesas de servicio no aprobadas."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Nessuna promessa di risposta o rimborso non autorizzata.",
        "en": "No unsupported timing or refund guarantee.",
        "fr": "Aucune garantie non approuvée.",
        "es": "Ninguna garantía sin aprobación."
      },
      {
        "it": "Dati richiesti limitati agli elementi necessari.",
        "en": "Only necessary customer data are requested.",
        "fr": "Données limitées au nécessaire.",
        "es": "Solo datos necesarios."
      },
      {
        "it": "Distinzione tra bozza e comunicazione effettivamente inviata.",
        "en": "Draft status is clearly separated from sending.",
        "fr": "Le brouillon n'est pas présenté comme envoyé.",
        "es": "El borrador no se presenta como enviado."
      }
    ],
    "limits": {
      "it": "Revisione di contenuti e comunicazioni verso clienti già acquisiti: non definizione di rimborsi, amministrazione, fatturazione o campagne di acquisizione.",
      "en": "Writing and editing only; no refund decisions, invoicing or customer acquisition.",
      "fr": "Rédaction uniquement, sans facturation ni prospection.",
      "es": "Redacción sin facturación ni captación."
    },
    "handoff": {
      "it": "Versione originale annotata, testo riscritto e scheda di approvazione.",
      "en": "Annotated original, edited version and approval notes.",
      "fr": "Original commenté, révision et suivi.",
      "es": "Original anotado, revisión y controles."
    }
  },
  {
    "id": "website-help-page-microcopy",
    "category": "web",
    "title": {
      "it": "Contenuti web: pagina Assistenza con FAQ, moduli e messaggi chiari",
      "en": "Website content: a clear customer-support page and microcopy",
      "fr": "Contenu web : page d'assistance et microtextes clairs",
      "es": "Contenido web: página de ayuda y microtextos claros"
    },
    "service": {
      "it": "Contenuti editoriali per siti e landing page",
      "en": "Editorial website and landing-page copy",
      "fr": "Rédaction de contenus web",
      "es": "Redacción de contenidos web"
    },
    "scenario": {
      "it": "Un negozio online immaginario ha una pagina Assistenza per i clienti esistenti con formule vaghe, campi poco comprensibili e richieste di dati non necessarie. L'incarico riguarda esclusivamente i testi, non lo sviluppo del sito.",
      "en": "A fictional online shop has a confusing existing-customer support page. The scope is editorial copy, not coding, layout implementation or hosting.",
      "fr": "Une boutique fictive possède une page d'aide difficile à comprendre. Le travail porte uniquement sur les textes.",
      "es": "Una tienda ficticia tiene una página de ayuda confusa. El encargo solo incluye redacción, no programación."
    },
    "objective": {
      "it": "Preparare testi da inserire nel CMS: titoli, istruzioni, etichette dei campi, messaggi di conferma e FAQ, senza promettere funzionalità non verificate.",
      "en": "Provide clear CMS-ready headings, labels, confirmation messages and FAQs, with no unsupported website functionality.",
      "fr": "Rédiger des titres, champs et FAQ clairs pour intégration par le client.",
      "es": "Preparar títulos, etiquetas y FAQ para que el cliente los incorpore al sitio."
    },
    "inputs": {
      "it": "Pagina iniziale fittizia e brief: destinatari solo clienti esistenti, canale di contatto da verificare, richiesta numero ordine facoltativa se pertinente, nessuna registrazione obbligatoria dichiarata.",
      "en": "Fictional existing page, help-page brief and an unverified contact process.",
      "fr": "Page fictive et procédure de contact à confirmer.",
      "es": "Página ficticia y proceso de contacto por verificar."
    },
    "workflow": [
      {
        "it": "Mappare le domande principali del cliente già acquisito.",
        "en": "Map real informational questions within the fictional brief.",
        "fr": "Lister les questions essentielles.",
        "es": "Identificar preguntas frecuentes."
      },
      {
        "it": "Separare informazioni editoriali da funzionalità tecniche non verificate.",
        "en": "Distinguish written content from unverified technical features.",
        "fr": "Séparer texte et fonctionnalités non confirmées.",
        "es": "Separar textos y funciones no verificadas."
      },
      {
        "it": "Creare gerarchia H1/H2, testi dei campi, indicazioni ed esempi.",
        "en": "Write headings, labels and helpful field descriptions.",
        "fr": "Rédiger titres et libellés.",
        "es": "Redactar títulos y etiquetas."
      },
      {
        "it": "Evitare raccolte superflue e promesse di tempi non autorizzati.",
        "en": "Avoid needless data requests and unverifiable service claims.",
        "fr": "Éviter collecte excessive et promesses.",
        "es": "Evitar datos excesivos y promesas."
      },
      {
        "it": "Confermare con il titolare procedure, link e invio reale prima della messa online.",
        "en": "Obtain owner confirmation on real forms, links and workflow.",
        "fr": "Faire valider les procédures.",
        "es": "Validar enlaces y proceso."
      }
    ],
    "artifacts": [
      {
        "title": {
          "it": "Pagina iniziale: problemi di chiarezza",
          "en": "Original problematic page",
          "fr": "Page initiale",
          "es": "Página original"
        },
        "content": "ESTRATTO ORIGINALE — SITO E AZIENDA COMPLETAMENTE FITTIZI\nH1: AIUTO E ALTRO\nTesto iniziale: Per qualsiasi cosa scrivici e risolveremo tutto subito. Le risposte arrivano subito in automatico, quindi niente problemi!\nCampo: Nome / Cognome / Indirizzo completo / Telefono / Data di nascita / Codice fiscale / Numero ordine / Messaggio.\nPulsante: VAI\nMessaggio di invio: Perfetto, il problema è risolto!\nFAQ: Come si fa? — Scrivici. Quanto ci mettete? — Pochissimo. Devo inviare documenti? — Tutti.\nPROBLEMI: promessa non verificata di risposta e soluzione; etichette vaghe; dati superflui per molte richieste; messaggio di conferma che confonde l'invio con la chiusura del caso; FAQ priva di risposte utili.",
        "explanation": {
          "it": "Il testo confonde l'invio di una richiesta con la sua soluzione e richiede troppe informazioni.",
          "en": "The original confuses submission with resolution and overcollects personal data.",
          "fr": "Le texte confond envoi et résolution.",
          "es": "El texto confunde envío y resolución."
        }
      },
      {
        "title": {
          "it": "Testi CMS-ready: pagina Assistenza e microcopy",
          "en": "CMS-ready support-page copy",
          "fr": "Textes prêts pour CMS",
          "es": "Textos listos para CMS"
        },
        "content": "PROPOSTA EDITORIALE — TESTI, NON CODICE\nH1: Assistenza per gli ordini e i servizi acquistati\nIntroduzione: Hai bisogno di un chiarimento su un ordine già effettuato? Descrivi la richiesta e indica il riferimento dell'ordine, se disponibile. Ti risponderemo attraverso il canale confermato dall'azienda.\nH2: Prima di scriverci\n• Verifica se hai ricevuto una comunicazione aggiornata relativa alla tua pratica.\n• Tieni a portata di mano il numero d'ordine, se pertinente.\nH2: Invia una richiesta\nCampo «Indirizzo email» — Inserisci l'email su cui desideri ricevere un riscontro.\nCampo «Riferimento ordine (se disponibile)» — Indica il codice riportato nella conferma.\nCampo «Descrivi la richiesta» — Spiega brevemente di quali informazioni hai bisogno.\nPulsante: Invia richiesta\nMESSAGGIO DA MOSTRARE SOLO DOPO CONFERMA REALE DELL'INVIO: «Richiesta ricevuta. La presa in carico non equivale alla risoluzione; riceverai ulteriori informazioni attraverso il canale indicato.»\nNOTA: verificare effettiva raccolta e gestione dei dati con chi cura il sito; non si sviluppano moduli o servizi tecnici in questo incarico.",
        "explanation": {
          "it": "La proposta offre testi pronti all'inserimento, subordinati alla verifica delle funzioni del sito.",
          "en": "Copy is ready for client-side implementation but does not claim technical development.",
          "fr": "Textes à intégrer après vérification des fonctions.",
          "es": "Textos para incorporar tras verificar funciones."
        }
      },
      {
        "title": {
          "it": "FAQ, casi limite e note d'integrazione",
          "en": "FAQ and integration notes",
          "fr": "FAQ et notes",
          "es": "FAQ y notas de integración"
        },
        "content": "FAQ EDITORIALE PROPOSTA — AZIENDA FITTIZIA\nD. Dove trovo il numero d'ordine?\nR. Se hai ricevuto una conferma d'acquisto, verifica il riferimento riportato nel messaggio. Se non lo trovi, descrivi comunque la richiesta.\nD. Posso modificare l'ordine con questo modulo?\nR. Il modulo consente di inviare una richiesta di verifica: non modifica automaticamente ordini già effettuati. Eventuali modifiche dipendono dalle procedure approvate dall'azienda.\nD. La conferma di invio significa che il problema è risolto?\nR. No. Significa che il sistema ha accettato la richiesta, se l'invio è effettivamente andato a buon fine. La soluzione dipende dalle verifiche successive.\nNOTE PER IL RESPONSABILE WEB: confermare che il modulo invii davvero, che il messaggio di successo sia mostrato soltanto dopo esito positivo, che la gestione privacy sia corretta, che eventuali link funzionino e che non si presentino funzionalità inesistenti. L'incarico editoriale non sostituisce sviluppo, test tecnici o consulenza privacy.",
        "explanation": {
          "it": "Le FAQ gestiscono aspettative realistiche e distinguono il lavoro editoriale dall'implementazione tecnica.",
          "en": "FAQs set truthful expectations; implementation remains outside the editing service.",
          "fr": "Les FAQ séparent le contenu de l'intégration.",
          "es": "Las FAQ separan redacción e implementación."
        }
      },
      {
        "title": {
          "it": "Pagina Assistenza completa e messaggi del modulo",
          "en": "Complete Help page and form messages",
          "fr": "Page d’aide complète et messages de formulaire",
          "es": "Página de ayuda completa y mensajes de formulario"
        },
        "language": "it",
        "content": "TESTI PER UNA PAGINA «ASSISTENZA» — NEGOZIO ONLINE IMMAGINARIO\nConsegna editoriale per un sito già esistente: non comprende realizzazione di codice, moduli funzionanti o certificazioni di accessibilità.\n\nH1: Assistenza per ordini già effettuati\nIntroduzione: Hai bisogno di informazioni su un acquisto già concluso o su una richiesta in corso? Scrivici indicando il numero dell'ordine, se lo hai a disposizione, e descrivendo brevemente il problema. Il nostro team verificherà le informazioni prima di comunicarti gli eventuali passaggi successivi.\n\nH2: Per quali richieste puoi contattarci\n• Aggiornamenti sullo stato di un ordine esistente, subordinati a una verifica.\n• Chiarimenti sulle comunicazioni o sui documenti ricevuti.\n• Segnalazioni relative a un articolo o a una consegna.\n• Richieste da sottoporre a un referente competente.\nNon vengono promesse modifiche, sostituzioni o rimborsi prima della relativa approvazione.\n\nH2: Come inviare la richiesta\n1. Se disponibile e pertinente, indica il codice dell'ordine.\n2. Descrivi il problema in modo concreto e senza dati riservati non necessari.\n3. Utilizza il canale di contatto indicato dal negozio.\n4. Conserva l'eventuale numero di riferimento mostrato dopo la conferma tecnica dell'invio.\n\nFAQ COMPLETE\nD. Non trovo il numero d'ordine: posso scrivere lo stesso?\nR. Sì, descrivi la richiesta e indica le informazioni non riservate che permettano al personale autorizzato di identificare la pratica.\nD. Posso cambiare l'indirizzo di consegna dopo l'acquisto?\nR. Puoi chiedere una verifica; la possibilità di modifica dipende dallo stato dell'ordine e dalle condizioni previste.\nD. Riceverò subito un nuovo prodotto se segnalo un danno?\nR. La segnalazione verrà esaminata secondo le condizioni applicabili. Non è possibile confermare una sostituzione prima della verifica.\nD. Che cosa significa «richiesta ricevuta»?\nR. Significa che il sistema ha registrato il messaggio, non che il problema sia stato risolto.\n\nTESTI DEL MODULO\nTitolo del campo: Numero d'ordine (se pertinente).\nAiuto: Inserisci il riferimento riportato nella conferma dell'acquisto, se disponibile.\nCampo descrizione: Descrivi la tua richiesta.\nAvviso: Non inserire password o dati di pagamento.\nErrore email: Inserisci un indirizzo email valido.\nInvio in corso: Invio della richiesta in corso…\nErrore di invio: Non è stato possibile inviare il messaggio. Riprova oppure utilizza il canale email indicato.\nSuccesso, da mostrare solo dopo risposta tecnica positiva: Abbiamo ricevuto la tua richiesta.\n\nSCHEDA DI CONSEGNA PER LO SVILUPPATORE O IL PROPRIETARIO\nVerificare che tutti i testi corrispondano alle funzioni realmente disponibili, che la conferma di ricezione dipenda dall'esito dell'invio, che i collegamenti informativi siano corretti e che le informazioni sui dati personali riflettano le condizioni applicabili. Le verifiche tecniche, di sicurezza e di conformità non sono comprese nell'incarico editoriale.\n\nRISULTATO: pagina completa, quattro FAQ, etichette e messaggi di stato, con note sui limiti della pubblicazione.",
        "explanation": {
          "it": "Testi pronti per un sito esistente: introduzione, istruzioni, FAQ, microtesti e verifiche tecniche da affidare allo sviluppatore.",
          "en": "Full content for an existing website, with FAQs, forms and handover limits.",
          "fr": "Textes complets, FAQ, formulaires et limites de la prestation éditoriale.",
          "es": "Textos completos, preguntas frecuentes, formularios y comprobaciones."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Nessuna funzionalità tecnica presentata come esistente senza verifica.",
        "en": "No unverified feature is claimed as implemented.",
        "fr": "Aucune fonction non vérifiée n'est promise.",
        "es": "No se promete ninguna función no comprobada."
      },
      {
        "it": "Microcopy coerente: «ricevuta» non significa «risolta».",
        "en": "Receipt is not misrepresented as resolution.",
        "fr": "Réception ne signifie pas résolution.",
        "es": "Recibida no significa resuelta."
      },
      {
        "it": "Campi e richieste ridotti al necessario per il contesto.",
        "en": "Only context-relevant fields are proposed.",
        "fr": "Seules les données nécessaires sont proposées.",
        "es": "Solo datos necesarios."
      }
    ],
    "limits": {
      "it": "Solo testi, microcopy, strutturazione FAQ e revisione editoriale: non sviluppo, hosting, SEO tecnico, configurazione del modulo o consulenza giuridica.",
      "en": "Copy only: not coding, hosting, form setup or legal compliance advice.",
      "fr": "Rédaction uniquement, pas de développement ni d'hébergement.",
      "es": "Solo redacción, sin desarrollo ni alojamiento."
    },
    "handoff": {
      "it": "File di testi per CMS, FAQ, etichette e note di verifica da passare a chi gestisce il sito.",
      "en": "CMS-ready copy, FAQs, form labels and implementation notes.",
      "fr": "Textes et remarques pour le responsable technique.",
      "es": "Textos y notas para quien gestiona la web."
    }
  },
  {
    "id": "existing-customer-multilingual-email-pack",
    "category": "backoffice",
    "title": {
      "it": "Comunicazioni EN, FR, ES: tre email operative per clienti già acquisiti",
      "en": "Customer communication in English, French and Spanish",
      "fr": "Communications clients en anglais, français et espagnol",
      "es": "Comunicaciones a clientes en inglés, francés y español"
    },
    "service": {
      "it": "Comunicazioni professionali multilingue per clienti esistenti",
      "en": "Multilingual written customer communications",
      "fr": "Communications écrites avec des clients existants",
      "es": "Comunicación escrita con clientes actuales"
    },
    "scenario": {
      "it": "Un'attività immaginaria che segue clienti internazionali già acquisiti deve scrivere tre email: in inglese per chiarire un codice ordine, in francese per richiedere l'approvazione di un documento, in spagnolo per proporre una modifica di appuntamento.",
      "en": "A fictional business needs three messages for existing international customers: order clarification in English, document approval in French and a tentative appointment change in Spanish.",
      "fr": "Une entreprise fictive rédige trois courriels pour des clients existants en anglais, français et espagnol, sans prospection.",
      "es": "Una empresa ficticia necesita tres correos para clientes actuales en inglés, francés y español, sin captación."
    },
    "objective": {
      "it": "Mostrare comunicazioni complete, naturali e prudenti nelle tre lingue, distinguendo chiarimenti, approvazioni e appuntamenti non confermati.",
      "en": "Demonstrate usable, natural professional emails with clear approval boundaries.",
      "fr": "Démontrer des courriels précis avec validations explicites.",
      "es": "Mostrar correos profesionales claros y prudentes."
    },
    "inputs": {
      "it": "Tre pratiche e tre destinatari di fantasia: ORD-041 con codice ambiguo, DOC-018 in attesa di approvazione, agenda CAL-09 senza conferma.",
      "en": "Three wholly fictional existing-customer scenarios and no verified live order, file or calendar data.",
      "fr": "Trois situations fictives, sans données réelles.",
      "es": "Tres situaciones inventadas y ningún dato real."
    },
    "workflow": [
      {
        "it": "Individuare scopo, relazione esistente e registro appropriato.",
        "en": "Identify purpose, existing relationship and appropriate register.",
        "fr": "Définir le registre et le contexte.",
        "es": "Determinar el registro y el contexto."
      },
      {
        "it": "Preparare messaggi senza introdurre fatti o autorizzazioni non verificati.",
        "en": "Draft without introducing unapproved facts.",
        "fr": "Rédiger sans inventer d'autorisations.",
        "es": "Redactar sin inventar autorizaciones."
      },
      {
        "it": "Evidenziare esattamente l'informazione richiesta al cliente.",
        "en": "Make the requested response explicit.",
        "fr": "Préciser la réponse attendue.",
        "es": "Precisar la respuesta solicitada."
      },
      {
        "it": "Verificare chiarezza, formule di cortesia e coerenza terminologica.",
        "en": "Check professional register and language accuracy.",
        "fr": "Contrôler le style et la terminologie.",
        "es": "Comprobar el tono y la terminología."
      },
      {
        "it": "Sottoporre i testi all'approvazione prima di ogni eventuale invio.",
        "en": "Seek sign-off before external communication.",
        "fr": "Valider avant envoi.",
        "es": "Pedir aprobación antes del envío."
      }
    ],
    "artifacts": [
      {
        "language": "en",
        "title": {
          "it": "Email inglese: verifica riferimento d'ordine",
          "en": "English: order reference check",
          "fr": "Anglais : vérification d'une référence",
          "es": "Inglés: aclaración de pedido"
        },
        "content": "Subject: Clarification required — order reference ORD-041\nDear Customer,\nThank you for your message regarding order ORD-041. We have reviewed the information provided and noticed that the item reference in the attachment does not match the code shown in the original order summary.\nBefore we update the internal record, could you please confirm which item reference you intended to use? There is no need to resend the full order or any unrelated personal information; the correct product code is sufficient for this check.\nWe have not changed the order or its delivery arrangements at this stage. Once we receive your clarification, we will review the next steps in accordance with the agreed procedure.\nKind regards,\nCustomer Support — fictional company\nINTERNAL STATUS: draft only; no customer contact or database update has occurred.",
        "explanation": {
          "it": "La richiesta evita modifiche non autorizzate e non pretende documenti superflui.",
          "en": "The email asks for one precise detail without changing the order.",
          "fr": "Le courriel demande une précision sans modifier la commande.",
          "es": "Solicita un único dato y no cambia el pedido."
        }
      },
      {
        "language": "fr",
        "title": {
          "it": "Email francese: approvazione documento",
          "en": "French: document approval request",
          "fr": "Français : demande de validation",
          "es": "Francés: aprobación documental"
        },
        "content": "Objet : Document DOC-018 — demande de validation de la version révisée\nBonjour,\nNous vous transmettons, pour examen, la version révisée du document DOC-018. Les modifications proposées concernent uniquement la présentation des informations et les références que vous nous aviez signalées. Aucun changement supplémentaire ne sera considéré comme accepté sans votre confirmation.\nPourriez-vous vérifier cette version et nous indiquer, en réponse à ce courriel, si elle peut être validée ou si vous souhaitez apporter d'autres corrections ? Si certains éléments nécessitent une décision de votre part, nous les laisserons en attente jusqu'à réception de vos instructions.\nLa version jointe reste un projet de travail et ne doit pas être considérée comme un document approuvé.\nBien cordialement,\nÉquipe de coordination — entreprise fictive\nSTATUT INTERNE : projet non envoyé, validation à obtenir.",
        "explanation": {
          "it": "Il francese distingue proposta, revisione e approvazione definitiva.",
          "en": "The French text distinguishes an edited draft from an approved document.",
          "fr": "La distinction entre brouillon et validation est explicite.",
          "es": "El francés diferencia borrador y aprobación."
        }
      },
      {
        "language": "es",
        "title": {
          "it": "Email spagnola: proposta di orario",
          "en": "Spanish: tentative appointment change",
          "fr": "Espagnol : proposition de rendez-vous",
          "es": "Español: propuesta de horario"
        },
        "content": "Asunto: Propuesta de cambio de horario — referencia CAL-09\nEstimado/a cliente:\nHemos recibido su solicitud relativa a la reunión prevista en la referencia CAL-09. Antes de realizar cualquier cambio en la agenda, necesitamos comprobar las disponibilidades y confirmar con usted la alternativa que resulte adecuada.\nPor el momento, la cita acordada anteriormente sigue vigente. En cuanto dispongamos de una opción verificada, se la comunicaremos para que pueda aceptarla o proponer otra posibilidad. No consideraremos modificada la reunión hasta que ambas partes hayan confirmado el nuevo horario.\nGracias por su comprensión. Quedamos a su disposición para cualquier aclaración relacionada con esta cita.\nAtentamente,\nSecretaría de coordinación — empresa ficticia\nESTADO INTERNO: borrador pendiente de aprobación; no se ha modificado ninguna reserva.",
        "explanation": {
          "it": "Il testo spagnolo non scambia la proposta di modifica per un appuntamento confermato.",
          "en": "The Spanish email preserves the original meeting until both parties agree.",
          "fr": "Le rendez-vous initial reste maintenu.",
          "es": "La cita original se mantiene hasta la confirmación."
        }
      },
      {
        "title": {
          "it": "Registro multilingue dei tre messaggi e nota di revisione",
          "en": "Multilingual email register and quality-review handover",
          "fr": "Registre des trois courriels et note de révision",
          "es": "Registro de los tres correos y revisión lingüística"
        },
        "language": "it",
        "content": "REGISTRO DI CORRISPONDENZA MULTILINGUE — TUTTI I DATI SONO INVENTATI\nScenario: tre clienti già acquisiti, tre pratiche indipendenti e tre messaggi interamente predisposti in inglese, francese e spagnolo. Nessun messaggio è stato inviato.\n\nEN — ORD-041\nLingua e destinatario: inglese britannico, cliente esistente.\nOggetto: Clarification required — order reference ORD-041.\nFunzione: richiedere la verifica di un codice articolo senza assumere che il cliente abbia commesso un errore.\nControlli: mantenere invariato ORD-041; distinguere la presa in carico dalla conferma dell'ordine; non dichiarare modifiche o spedizioni già effettuate.\nStato: testo inglese completo redatto, in attesa di approvazione.\n\nFR — DOC-018\nLingua e destinatario: francese professionale, referente che deve esaminare un documento.\nOggetto: Document DOC-018 — demande de validation de la version révisée.\nFunzione: trasmettere una versione da sottoporre a verifica, non presentarla come già approvata.\nControlli: coerenza fra «version révisée» e «validation»; corretta distinzione tra approvazione richiesta e ottenuta; registro di cortesia uniforme.\nStato: email francese completa redatta, in attesa di approvazione.\n\nES — CAL-09\nLingua e destinatario: spagnolo professionale, cliente esistente.\nOggetto: Propuesta de cambio de horario — referencia CAL-09.\nFunzione: proporre una verifica di disponibilità senza modificare l'agenda.\nControlli: conservare CAL-09; distinguere data proposta da data confermata; non dichiarare prenotazioni modificate.\nStato: email spagnola completa redatta, in attesa di approvazione.\n\nNOTA DI CONSEGNA INTERNA — TESTO INTEGRALE\nOggetto: Tre comunicazioni a clienti esistenti — verifica linguistica e operativa\nBuongiorno,\nho predisposto tre bozze in lingue diverse, relative a pratiche già avviate. Nell'email inglese ho mantenuto una richiesta di chiarimento precisa, evitando di attribuire responsabilità al cliente. In francese ho distinto esplicitamente la revisione del documento dalla sua approvazione. In spagnolo ho presentato la riprogrammazione come proposta da verificare e non come appuntamento già modificato.\nHo verificato la coerenza dei codici ORD-041, DOC-018 e CAL-09, il registro di cortesia e le indicazioni che richiedono autorizzazione. I tre messaggi non includono promesse di risposta immediata, impegni economici o operazioni già eseguite.\nPer procedere servono le conferme dei referenti competenti: codice ordine corretto, versione del documento da validare e disponibilità effettiva in agenda. Nessuna email è stata inviata durante la simulazione.\nCordiali saluti,\nSupporto alle comunicazioni multilingue\n\nESITO: tre email effettive consultabili, registro quadrilingue di accompagnamento e nota di revisione. Il lavoro mostra scrittura e gestione di comunicazioni, non telemarketing, reclutamento o acquisizione clienti.",
        "explanation": {
          "it": "Controllo integrato su inglese, francese e spagnolo: richieste, stato, tono e autorizzazioni prima dell'invio.",
          "en": "Joined-up review of three complete customer messages, terminology and approvals.",
          "fr": "Vérification des trois messages, du registre et des validations.",
          "es": "Revisión de tres mensajes, registro y autorizaciones."
        }
      }
    ],
    "qualityChecks": [
      {
        "it": "Ogni elaborato è marcato nella propria lingua EN, FR o ES.",
        "en": "Each actual artifact has the correct language tag.",
        "fr": "La langue de chaque document est indiquée correctement.",
        "es": "Cada documento tiene la etiqueta de idioma correcta."
      },
      {
        "it": "Nessun messaggio lascia intendere che un ordine o appuntamento sia già modificato.",
        "en": "No email claims an unapproved change happened.",
        "fr": "Aucune modification non approuvée n'est annoncée.",
        "es": "No se anuncia ningún cambio sin aprobar."
      },
      {
        "it": "I testi sono bozze dimostrative, non corrispondenza inviata.",
        "en": "All content remains fictional and unsent.",
        "fr": "Tous les messages sont fictifs et non envoyés.",
        "es": "Todos son borradores ficticios."
      }
    ],
    "limits": {
      "it": "Supporto alle comunicazioni scritte con interlocutori già acquisiti, sempre nel perimetro linguistico concordato; niente prospecting, telemarketing, gestione fatture o invio autonomo di comunicazioni delicate.",
      "en": "Written support for existing customers only, within agreed language and approval boundaries; no cold outreach or invoicing.",
      "fr": "Communication écrite avec des clients existants, sans prospection ni facturation.",
      "es": "Comunicación escrita con clientes actuales, sin prospección ni facturación."
    },
    "handoff": {
      "it": "Tre email complete EN, FR, ES, ciascuna con scopo, tono, limiti e richiesta di approvazione.",
      "en": "Three complete EN, FR and ES emails with review checkpoints.",
      "fr": "Trois courriels complets et contrôles de validation.",
      "es": "Tres correos completos con revisión y autorización."
    }
  }
];
