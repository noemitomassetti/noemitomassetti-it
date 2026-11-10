import type { TranslationDeepCase } from "./portfolioDeepTypes";
/** Fictional, original language demonstrations; no certified legal or audio-production services implied. */
export const TRANSLATION_SAMPLES_SPECIALIST: TranslationDeepCase[] = [
  {
    "id": "it-en-audio-handover-instructions",
    "direction": "IT-EN",
    "domain": {
      "it": "Documentazione tecnica audio",
      "en": "Audio production documentation",
      "fr": "Documentation technique audio",
      "es": "Documentación técnica de audio"
    },
    "title": {
      "it": "Istruzioni tecniche audio: italiano → inglese",
      "en": "Audio handover instructions: Italian to English",
      "fr": "Consignes audio : italien vers anglais",
      "es": "Instrucciones de audio: italiano a inglés"
    },
    "context": {
      "it": "Caso dimostrativo fittizio: traduzione di istruzioni di consegna di tracce vocali. Il servizio mostrato è la traduzione di documentazione, non la produzione audio.",
      "en": "A fictional translation brief for vocal-track delivery instructions. The service demonstrated is document translation, not audio production.",
      "fr": "Exemple fictif de traduction de consignes pour la livraison de pistes vocales, sans prestation de production audio.",
      "es": "Ejemplo ficticio de traducción de instrucciones para entregar pistas vocales, sin prestar servicios de producción de audio."
    },
    "source": [
      "Per la sessione di registrazione vocale, i partecipanti devono consegnare tracce in formato WAV senza elaborazioni applicate. Ciascun file deve mantenere il nome concordato nel piano di lavoro e riportare il proprio numero di versione nel registro condiviso.",
      "Prima della consegna definitiva, verificare l'assenza di clipping e controllare che non siano stati applicati effetti di riverbero o compressione ai file. Segnalare i passaggi da chiarire con un riferimento temporale, senza modificare l'originale.",
      "Le correzioni eventualmente richieste saranno gestite come nuove versioni, mantenendo accessibili le precedenti. Il responsabile del progetto approverà la consegna per iscritto; registrazione, mixaggio e mastering non rientrano in questa traduzione documentale."
    ],
    "target": [
      "For the vocal recording session, participants must deliver unprocessed WAV tracks. Each file must retain the name agreed in the work plan, and its version number must be recorded in the shared log.",
      "Before final delivery, check for clipping and ensure that no reverb or compression effects have been applied to the files. Flag any passages requiring clarification with a time reference, without altering the original.",
      "Any requested corrections will be managed as new versions, with previous versions kept accessible. The project lead will approve delivery in writing; recording, mixing and mastering are outside the scope of this document translation."
    ],
    "terminology": [
      {
        "source": "tracce senza elaborazioni applicate",
        "target": "unprocessed tracks",
        "explanation": {
          "it": "«Unprocessed» indica l'assenza di trattamenti del segnale; evita l'ambiguità di «raw» in questo contesto.",
          "en": "Unprocessed describes the absence of signal processing more precisely than the potentially ambiguous raw.",
          "fr": "« Unprocessed » désigne l'absence de traitement du signal, sans ambiguïté sur le format.",
          "es": "« Unprocessed » especifica que no se ha procesado la señal de audio."
        }
      },
      {
        "source": "clipping",
        "target": "clipping",
        "explanation": {
          "it": "Il termine tecnico rimane in inglese, come spesso accade nella documentazione di produzione audio.",
          "en": "The established technical term clipping is retained rather than replaced by an imprecise paraphrase.",
          "fr": "Le terme technique « clipping » est conservé pour préserver la précision.",
          "es": "Se mantiene el término técnico « clipping » por su precisión."
        }
      },
      {
        "source": "riferimento temporale",
        "target": "time reference",
        "explanation": {
          "it": "Non viene aggiunto un obbligo di timecode che non era previsto nel testo di partenza.",
          "en": "No mandatory timecode is introduced because the source document does not require one.",
          "fr": "Aucune obligation de timecode n'est ajoutée au texte source.",
          "es": "No se impone un código de tiempo que no figure en el original."
        }
      }
    ],
    "method": {
      "it": "Lessico audio specifico, inglese britannico professionale e formulazioni operative fedeli al testo di partenza.",
      "en": "Audio-specific terminology, professional British English and concise instructions faithful to the source.",
      "fr": "Terminologie audio précise et anglais britannique professionnel, sans ajout d'exigences.",
      "es": "Terminología de audio precisa e inglés británico profesional sin añadir requisitos."
    },
    "review": {
      "it": "Verificati formato WAV, nomi e versioni, conservazione degli originali e limite dell'incarico alla sola traduzione.",
      "en": "Checked WAV format, filenames, version control, preservation of originals and the translation-only scope.",
      "fr": "Vérification du format WAV, du nommage, des versions et des limites de la mission.",
      "es": "Comprobados el formato WAV, los nombres, las versiones y el alcance exclusivamente lingüístico."
    },
    "output": {
      "it": "Istruzioni IT → EN complete, testi a fronte e commento terminologico.",
      "en": "Complete IT-to-EN instructions, parallel texts and terminology notes.",
      "fr": "Consignes IT → EN complètes, textes en regard et notes terminologiques.",
      "es": "Instrucciones IT → EN completas, textos paralelos y notas terminológicas."
    }
  },
  {
    "id": "fr-it-contractual-information",
    "direction": "FR-IT",
    "domain": {
      "it": "Comunicazione contrattuale informativa",
      "en": "Contractual information (non-certified)",
      "fr": "Information contractuelle non assermentée",
      "es": "Información contractual no jurada"
    },
    "title": {
      "it": "Nota informativa contrattuale: francese → italiano",
      "en": "Contract information note: French to Italian",
      "fr": "Note contractuelle : français vers italien",
      "es": "Nota informativa contractual: francés a italiano"
    },
    "context": {
      "it": "Esempio fittizio di traduzione di una comunicazione informativa sui documenti necessari a valutare una proposta. Non è consulenza legale né traduzione giurata o asseverata.",
      "en": "Fictional translation of a document-submission notice. It is neither legal advice nor a sworn or certified translation.",
      "fr": "Traduction fictive d'une note sur la transmission de documents, sans conseil juridique ni traduction assermentée.",
      "es": "Traducción ficticia de un aviso de envío de documentos, sin asesoramiento jurídico ni traducción jurada."
    },
    "source": [
      "La présente note précise les modalités pratiques de transmission des documents nécessaires à l'examen d'une proposition de collaboration. Elle ne constitue ni un contrat ni une acceptation des conditions commerciales envisagées.",
      "Les pièces doivent être transmises par le canal sécurisé indiqué par le destinataire. Chaque partie reste responsable de l'exactitude des informations qu'elle communique et signale sans délai toute erreur matérielle relevée dans les documents.",
      "La validation du texte définitif appartient aux parties concernées et, lorsque la nature du document l'exige, à leurs conseils qualifiés. Une traduction réalisée à titre informatif ne remplace pas une vérification juridique indépendante."
    ],
    "target": [
      "La presente nota illustra le modalità pratiche di trasmissione dei documenti necessari per esaminare una proposta di collaborazione. Non costituisce un contratto né un'accettazione delle condizioni commerciali ipotizzate.",
      "I documenti devono essere trasmessi tramite il canale sicuro indicato dal destinatario. Ciascuna parte resta responsabile dell'esattezza delle informazioni comunicate e segnala senza indugio eventuali errori materiali riscontrati nei documenti.",
      "L'approvazione del testo definitivo spetta alle parti interessate e, quando la natura del documento lo richiede, ai rispettivi consulenti qualificati. Una traduzione realizzata a fini informativi non sostituisce una verifica legale indipendente."
    ],
    "terminology": [
      {
        "source": "ne constitue ni un contrat ni une acceptation",
        "target": "non costituisce un contratto né un'accettazione",
        "explanation": {
          "it": "La doppia esclusione viene preservata senza aggiungere interpretazioni giuridiche assenti nel testo.",
          "en": "Both exclusions are preserved without adding legal interpretations not present in the original.",
          "fr": "La double exclusion est conservée sans interprétation juridique ajoutée.",
          "es": "Se mantienen ambas exclusiones sin añadir interpretaciones jurídicas."
        }
      },
      {
        "source": "erreur matérielle",
        "target": "errore materiale",
        "explanation": {
          "it": "Il riferimento riguarda l'inesattezza di un documento, non un inadempimento contrattuale.",
          "en": "The wording refers to a document error, not an allegation of contractual breach.",
          "fr": "L'expression renvoie à une erreur documentaire, non à un manquement contractuel.",
          "es": "La expresión se refiere a un error documental, no a incumplimiento."
        }
      },
      {
        "source": "à titre informatif",
        "target": "a fini informativi",
        "explanation": {
          "it": "La traduzione mantiene la limitazione d'uso e non suggerisce un valore di asseverazione.",
          "en": "The limited informational purpose is retained without suggesting certification.",
          "fr": "La finalité informative est conservée sans suggérer une certification.",
          "es": "Se conserva la finalidad informativa sin sugerir certificación."
        }
      }
    ],
    "method": {
      "it": "Registro formale, frasi chiare e fedeltà alle limitazioni espresse; nessuna interpretazione giuridica aggiunta.",
      "en": "Formal register, clear syntax and fidelity to stated limitations; no legal interpretation added.",
      "fr": "Registre formel, syntaxe claire et respect des limites exprimées.",
      "es": "Registro formal, sintaxis clara y respeto de los límites expresados."
    },
    "review": {
      "it": "Controllate negazioni, responsabilità delle parti e distinzione tra informazione, accordo e verifica professionale.",
      "en": "Checked exclusions, each party's responsibility and the distinction between information, agreement and legal review.",
      "fr": "Contrôle des exclusions, des responsabilités et de la distinction entre note et accord.",
      "es": "Revisadas las exclusiones, responsabilidades y distinción entre información y acuerdo."
    },
    "output": {
      "it": "Nota FR → IT completa con termini commentati e avvertenza sul carattere non asseverato.",
      "en": "Full FR-to-IT information note with annotated terms and non-certified status clearly stated.",
      "fr": "Note FR → IT intégrale avec termes commentés et mention du caractère non assermenté.",
      "es": "Nota FR → IT completa con terminología comentada y aviso de que no es jurada."
    }
  }
];
