import { Language } from "./i18n/types";

export type PortfolioCategory =
  | "all"
  | "translation"
  | "research"
  | "backoffice"
  | "writing"
  | "web";

export interface PortfolioCase {
  id: string;
  order: number;
  category: "translation" | "research" | "backoffice" | "writing" | "web";
  masterField?: "letterario" | "giuridico" | "economico" | "tecnologico" | "scientifico";
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  brief: Record<Language, string>;
  startingMaterial: Record<Language, string>;
  objective: Record<Language, string>;
  approach: Record<Language, string>;
  keyDecisions: Record<Language, string[]>;
  deliverable: Record<Language, string>;
  comparison?: {
    sourceLang: string;
    targetLang: string;
    sourceText: string;
    literalText: string;
    localizedText: string;
    notes: Record<Language, string>;
  };
  tableData?: {
    headers: Record<Language, string[]>;
    rows: Record<Language, string[][]>;
  };
  sampleText?: {
    enSource: string;
    itTarget: string;
    editorialNotes: Record<Language, string>;
  };
  disclaimer: Record<Language, string>;
  sourceAttribution?: Record<Language, string>;
}

export const DEMO_DISCLAIMER: Record<Language, string> = {
  it: "Elaborato originale creato per questo portfolio. Scenario, nomi e dati sono inventati: non si tratta di un incarico commissionato da un cliente.",
  en: "Original work sample created for this portfolio. The scenario, names and details are invented; it is not a commissioned client project.",
  fr: "Travail original créé pour ce portfolio. Le scénario, les noms et les données sont inventés : il ne s’agit pas d’une commande de client.",
  es: "Muestra original creada para este porfolio. El supuesto, los nombres y los datos son inventados; no es un encargo realizado para un cliente.",
};

export const PORTFOLIO_CASES: PortfolioCase[] = [
  // 01. RESIDENTIAL INTERIOR DESIGN LOCALIZATION
  {
    "id": "01-interior-design-localization",
    "order": 1,
    "category": "translation",
    "title": {
      "it": "Localizzazione EN → IT: sito di interior design",
      "en": "English-to-Italian website localisation: interior design",
      "fr": "Localisation EN → IT : site de décoration d’intérieur",
      "es": "Localización EN → IT: web de interiorismo"
    },
    "subtitle": {
      "it": "Titoli, descrizioni e inviti all’azione: esempi di adattamento per lettori italiani",
      "en": "Original English-to-Italian website copy samples with translation notes",
      "fr": "Exemples concrets de textes web anglais et de leur adaptation italienne",
      "es": "Ejemplos concretos de textos web en inglés adaptados al italiano"
    },
    "brief": {
      "it": "Scenario di lavoro: uno studio internazionale di interior design desidera presentare servizi di consulenza d’arredo a persone residenti in Italia.",
      "en": "Project brief: an international interior-design studio needs clear Italian-language copy for customers based in Italy.",
      "fr": "Contexte du projet : un studio international d’aménagement intérieur s’adresse à des clients résidant en Italie.",
      "es": "Situación de trabajo: un estudio internacional de interiorismo necesita textos para clientes residentes en Italia."
    },
    "startingMaterial": {
      "it": "Titolo, descrizione del servizio e invito all’azione preparati in inglese per la simulazione.",
      "en": "An English headline, service introduction and call to action requiring Italian adaptation.",
      "fr": "Une accroche, une présentation de service et un appel à l’action rédigés en anglais.",
      "es": "Un titular, una presentación del servicio y una llamada a la acción escritos en inglés."
    },
    "objective": {
      "it": "Rendere la proposta naturale in italiano, evitare calchi e mantenere solo le promesse contenute nel testo originale.",
      "en": "Produce idiomatic Italian messaging, avoid calques and preserve the original business claims.",
      "fr": "Produire un texte italien naturel sans calques ni promesses commerciales ajoutées.",
      "es": "Crear un mensaje natural en italiano, fiel al contenido y sin promesas inventadas."
    },
    "approach": {
      "it": "Analisi del testo originale, scelta della terminologia dell’arredamento e revisione di sintassi, tono e inviti all’azione.",
      "en": "Review source meaning, interior-design vocabulary, tone and calls to action; final language quality control.",
      "fr": "Analyse du sens, des termes de l’aménagement, du ton et de l’appel à l’action ; relecture finale.",
      "es": "Análisis del significado, la terminología, el tono y la llamada a la acción; revisión final."
    },
    "keyDecisions": {
      "it": [
        "«Home» diventa «casa», non «alloggio», per mantenere il tono personale.",
        "«Designed around» si rende con «pensata per», eliminando la struttura inglese.",
        "L’invito all’azione resta una richiesta di informazioni, senza aggiungere promesse assenti nel testo originale."
      ],
      "en": [
        "Use «casa» to preserve a warm, personal register.",
        "Translate meaning, not the syntax of «designed around».",
        "Keep the CTA truthful: request information, without inventing commitments."
      ],
      "fr": [
        "Privilégier «casa», naturel pour un texte de décoration intérieure.",
        "Adapter la structure anglaise, plutôt que reproduire un calque.",
        "Conserver les conditions de l’offre réelle dans l’appel à l’action."
      ],
      "es": [
        "Usar «casa» para mantener un tono cercano.",
        "Adaptar la estructura inglesa y no calcarla.",
        "Evitar promesas que no constan en la oferta original."
      ]
    },
    "deliverable": {
      "it": "Esempio EN → IT con titolo, descrizione, invito all’azione e note linguistiche; documento 01.",
      "en": "English-to-Italian copy deck with headline, introduction, CTA and review notes, illustrated in document 01.",
      "fr": "Mini-dossier EN → IT : accroche, description, appel à l’action et notes ; document 01.",
      "es": "Muestra EN → IT: titular, descripción, llamada a la acción y notas; documento 01."
    },
    "comparison": {
      "sourceLang": "EN",
      "targetLang": "IT",
      "sourceText": "A home designed around the way you live. Thoughtful interior design, from furniture choices to the details that make a room feel yours.",
      "literalText": "Una casa disegnata intorno al modo in cui vivi. Design interno pensieroso, dalle scelte di mobili ai dettagli che fanno sentire una stanza tua.",
      "localizedText": "Una casa pensata per il tuo modo di vivere. Progetti d’interni curati, dalla scelta degli arredi ai dettagli che rendono ogni ambiente davvero tuo.",
      "notes": {
        "it": "«Pensata per» è idiomatico, «arredi» è preciso e «ambiente» è più adatto al contesto di «stanza».",
        "en": "Idiomatic sentence structure, accurate design terminology and a customer-centred tone.",
        "fr": "Syntaxe naturelle, vocabulaire précis et registre adapté au public italien.",
        "es": "Sintaxis natural, terminología precisa y un tono adecuado al público italiano."
      }
    }
  ,
    disclaimer: DEMO_DISCLAIMER
  },

    // 02. ECONOMIC / COMMERCIAL SPECIALIST TRANSLATION
  {
    id: "02-economic-commercial-translation",
    order: 2,
    category: "translation",
    masterField: "economico",
    title: {
      it: "Traduzione specialistica economica e commerciale (EN → IT)",
      en: "Specialist Economic & Commercial Translation (EN → IT)",
      fr: "Traduction spécialisée économique et commerciale (EN → IT)",
      es: "Traducción especializada económica y comercial (EN → IT)",
    },
    subtitle: {
      it: "Terminologia economico-commerciale, indicatori di risultato e modelli di prezzo",
      en: "Digital marketing strategies, performance metrics, and pricing models",
      fr: "Stratégies de marketing digital, métriques de performance et modèles de tarification",
      es: "Estrategias de marketing digital, métricas de rendimiento y modelos de precios",
    },
    brief: {
      it: "Traduzione in italiano di un estratto dimostrativo che descrive indicatori commerciali e modelli di ricavo. L’esempio riguarda la terminologia, non un servizio di acquisizione clienti.",
      en: "Italian translation and terminology harmonization of a strategic manual on digital customer acquisition and revenue models.",
      fr: "Traduction en italien d'un guide opérationnel sur l'acquisition client et les modèles de revenus numériques.",
      es: "Traducción al italiano de un manual estratégico sobre adquisición de clientes y modelos de negocio digital.",
    },
    startingMaterial: {
      it: "Testo inglese creato per la simulazione, con riferimenti a percorsi di vendita, valore del cliente nel tempo (LTV), rendimento della spesa pubblicitaria (ROAS) e fidelizzazione.",
      en: "English source text focusing on conversion funnels, Customer Lifetime Value, ROAS, and cohort retention.",
      fr: "Texte source en anglais portant sur les tunnels de conversion, la valeur vie client (LTV) et la rétention.",
      es: "Texto de origen en inglés centrado en embudos de conversión, Customer Lifetime Value y retención de cohortes.",
    },
    objective: {
      it: "Mantenere precisione e coerenza terminologica nella resa italiana di un testo economico-commerciale fittizio.",
      en: "Ensure economic precision and terminological consistency between industry standard terms and transparent Italian phrasing.",
      fr: "Préserver la précision et la cohérence de la terminologie d’un texte économique fictif adapté en italien.",
      es: "Asegurar la precisión conceptual entre la terminología financiera anglosajona y su redacción en italiano.",
    },
    approach: {
      it: "Glossario dei termini economico-commerciali e controllo delle sigle del settore, spiegate quando necessario.",
      en: "Development of a preliminary economic termbase. Standard abbreviations preserved with context-appropriate glosses on first mention.",
      fr: "Établissement préalable d'un glossaire économique avec harmonisation des sigles financiers.",
      es: "Elaboración de un glosario económico previo y desambiguación de métricas comerciales clave.",
    },
    keyDecisions: {
      it: [
        "«Customer Acquisition Cost» diventa «costo di acquisizione del cliente (CAC)»: il termine viene spiegato nel contesto, senza offrire servizi di acquisizione.",
        "«Churn rate» è spiegato come «tasso di abbandono»; la terminologia resta coerente nell’intero estratto.",
        "Distinzione fra 'revenue' (ricavi, oppure fatturato secondo il contesto) e 'profit' (utile); margine lordo, risultato operativo e utile netto richiedono rese distinte.",
      ],
      en: [
        "Clear distinction maintained between revenue streams, gross margin, and operating profit.",
        "Preserved established performance marketing acronyms (CAC, LTV, ROAS) alongside contextual explanations.",
        "Eliminated ambiguous loanwords where standard Italian commercial accounting terms provide superior clarity.",
      ],
      fr: [
        "Maintien de la distinction précise entre chiffre d'affaires, marge brute et bénéfice net.",
        "Définition contextuelle des acronymes de performance (CAC, LTV, ROAS).",
        "Remplacement des calques anglo-saxons superflus par des termes de gestion rigoureux.",
      ],
      es: [
        "Distinción inequívoca entre ingresos brutos, margen operativo y beneficio neto.",
        "Uso estandarizado de siglas comerciales acompañadas de su explicación en la primera mención.",
        "Evitación de anglicismos innecesarios cuando existe terminología financiera consolidada.",
      ],
    },
    deliverable: {
      it: "Estratto economico-commerciale EN→IT e glossario di termini selezionati, con note sulle scelte linguistiche.",
      en: "English-to-Italian economic and commercial excerpt, short terminology glossary and editorial notes.",
      fr: "Extrait économique EN→IT avec un petit glossaire terminologique et des notes de traduction.",
      es: "Extracto económico EN→IT, glosario breve y comentarios sobre decisiones terminológicas.",
    },
    comparison: {
      sourceLang: "EN",
      targetLang: "IT",
      sourceText: "High customer acquisition costs directly compress operating margins unless repeat purchases extend customer lifetime value.",
      literalText: "Alti costi di acquisizione clienti comprimono direttamente margini operativi a meno che acquisti ripetuti estendano valore della vita del cliente.",
      localizedText: "Un costo di acquisizione clienti elevato riduce direttamente i margini operativi, a meno che gli acquisti ricorrenti non aumentino il valore nel tempo di ciascun cliente (LTV).",
      notes: {
        it: "La resa professionale adotta una sintassi fluida con congiuntivo ('non aumentino'), esplicita 'nel tempo' per 'lifetime' e inserisce l'acronimo LTV.",
        en: "The professional Italian rendering uses natural subjunctive syntax and translates 'lifetime value' into intuitive commercial Italian.",
        fr: "La version italienne privilégie une structure grammaticale rigoureuse et une terminologie comptable claire.",
        es: "La traducción al italiano estructura la frase con naturalidad sintáctica y precisión en los conceptos de rentabilidad.",
      },
    },
    disclaimer: DEMO_DISCLAIMER,
  },

  // 03. SCIENTIFIC / HEALTHCARE DEMONSTRATION
  {
    id: "03-scientific-healthcare-translation",
    order: 3,
    category: "translation",
    masterField: "scientifico",
    title: {
      it: "Traduzione scientifica EN → IT: comunicazione tra professionisti sanitari e pazienti",
      en: "Scientific Translation: Clinical Communication & Patient Priorities (EN → IT)",
      fr: "Traduction scientifique : Communication clinique et priorités du patient (EN → IT)",
      es: "Traducción científica: Comunicación clínica y prioridades del paciente (EN → IT)",
    },
    subtitle: {
      it: "Estratto dimostrativo di comunicazione sanitaria, con attenzione a terminologia e chiarezza",
      en: "Healthcare communication guidelines for multidisciplinary clinical teams and caregivers",
      fr: "Guides de communication médicale pour équipes soignantes et proches aidants",
      es: "Pautas de comunicación sanitaria para equipos médicos, pacientes y cuidadores",
    },
    brief: {
      it: "Traduzione di un testo dimostrativo in inglese sul dialogo tra professionisti sanitari e pazienti; non è un protocollo medico applicabile nella pratica.",
      en: "Clinical-educational translation of communication protocols for managing multiple chronic conditions.",
      fr: "Traduction de protocoles de dialogue médecin-patient dans le suivi des affections chroniques multiples.",
      es: "Traducción de protocolos de diálogo clínico en el abordaje de enfermedades crónicas múltiples.",
    },
    startingMaterial: {
      it: "Brano inglese preparato per la simulazione, con domande aperte e riferimenti agli obiettivi di cura.",
      en: "English clinical source text outlining structured questioning, therapeutic risk weighting, and care goal alignment.",
      fr: "Texte clinique en anglais sur l'écoute active, l'évaluation des risques et la décision partagée.",
      es: "Pautas en inglés sobre escucha activa, balance de riesgos terapéuticos y objetivos de bienestar.",
    },
    objective: {
      it: "Ricercare una terminologia clinica pertinente e un registro chiaro, senza presentare il campione come testo validato per l’uso medico.",
      en: "Demonstrate care in clinical-language choices while making clear that this fictional excerpt is not validated for clinical use.",
      fr: "Rigueur absolue sur le vocabulaire médical alliée à un registre bienveillant et accessible.",
      es: "Exactitud en la terminología médica y farmacológica junto con un lenguaje empático y transparente.",
    },
    approach: {
      it: "Analisi della terminologia e controllo del significato di istruzioni, negazioni e riferimenti ai percorsi di cura. L’estratto non è stato validato per uso clinico.",
      en: "Cross-referencing against official pharmacovigilance databases and Italian healthcare glossaries. Strict check of dosage units and negations.",
      fr: "Validation terminologique sur les bases de données institutionnelles de santé publique et contrôle scrupuleux des dosages.",
      es: "Cotejo terminológico con fuentes médicas oficiales y comprobación exhaustiva de unidades de medida y condicionales.",
    },
    keyDecisions: {
      it: [
        "Traduzione di 'Care goal alignment' come 'Condivisione e allineamento degli obiettivi di cura'.",
        "Controllo stringente delle negazioni ('non interrompere senza consulto medico') per escludere qualsiasi ambiguità prescrittiva.",
        "È chiarito che il testo è un esempio linguistico, privo di valore prescrittivo e non destinato all’uso medico.",
      ],
      en: [
        "Rendered 'care goal alignment' as a clear, shared clinical milestone rather than a bureaucratic formula.",
        "Zero-tolerance review on negations and risk statements to avoid any misunderstanding.",
        "Transparent disclaimer included affirming the non-medical, demonstrative nature of the linguistic work.",
      ],
      fr: [
        "Traduction rigoureuse de la prise de décision partagée en milieu hospitalier.",
        "Contrôle systématique des avertissements thérapeutiques et des négations.",
        "Mention claire précisant qu'il s'agit d'une démonstration linguistique sans portée prescriptive.",
      ],
      es: [
        "Adaptación rigurosa de los objetivos terapéuticos compartidos entre médico y paciente.",
        "Revisión estricta de advertencias y contraindicaciones para evitar ambigüedades.",
        "Inclusión de advertencia explícita sobre el carácter demostrativo y no asistencial del texto.",
      ],
    },
    deliverable: {
      it: "Estratto medico-scientifico EN→IT a fronte con una selezione di note terminologiche; dati clinici interamente fittizi.",
      en: "Illustrative medical English-to-Italian passage with selected terminology notes and entirely fictional clinical data.",
      fr: "Extrait médical bilingue EN→IT et sélection de commentaires terminologiques sur données fictives.",
      es: "Extracto médico EN→IT con notas de terminología y datos clínicos ficticios.",
    },
    comparison: {
      sourceLang: "EN",
      targetLang: "IT",
      sourceText: "Clinicians should identify what matters most to the individual before initiating complex multi-drug therapeutic regimens.",
      literalText: "I clinici dovrebbero identificare cosa conta di più per l'individuo prima di iniziare complessi regimi terapeutici di multi-farmaci.",
      localizedText: "I medici curanti devono individuare le priorità essenziali della persona prima di avviare schemi terapeutici complessi a base di più farmaci.",
      notes: {
        it: "Sostituito 'clinici' (calco freddo) con 'medici curanti', 'individuo' con 'persona' e 'regimi terapeutici di multi-farmaci' con la formula italiana corretta 'schemi terapeutici complessi a base di più farmaci'.",
        en: "Replaced literal 'clinicians' with the natural Italian 'medici curanti', humanized 'individuo' to 'persona', and smoothed the multi-drug description.",
        fr: "Substitution des calques anglo-saxons par les formules médicales françaises et italiennes consacrées.",
        es: "Sustitución de términos literales por expresiones clínicas naturales y humanizadas en italiano.",
      },
    },
    disclaimer: DEMO_DISCLAIMER,
  },

  // 04. TECHNOLOGICAL / IT TRANSLATION & UI MICROCOPY
  {
    id: "04-technological-software-localization",
    order: 4,
    category: "translation",
    masterField: "tecnologico",
    title: {
      it: "Traduzione tecnica e testi per interfacce digitali (EN → IT)",
      en: "Technological Translation and Software/UI Localisation (EN → IT)",
      fr: "Traduction technologique et localisation de logiciels / UI (EN → IT)",
      es: "Traducción tecnológica y localización de software / UI (EN → IT)",
    },
    subtitle: {
      it: "Documentazione tecnica e brevi messaggi di un’interfaccia web",
      en: "Cloud API documentation and user interface microcopy for a web platform",
      fr: "Documentation d'API cloud et micro-textes d'interface utilisateur pour application web",
      es: "Documentación de API en la nube y microcopy de interfaz para plataforma web",
    },
    brief: {
      it: "Confronto tra traduzione della documentazione tecnica e adattamento di pulsanti e messaggi di un’interfaccia.",
      en: "Showcasing the critical distinction between technical documentation translation and space-constrained software UI localisation.",
      fr: "Démonstration de la distinction entre documentation technique et micro-textes d'interface soumis à des contraintes de pixels.",
      es: "Demostración de la diferencia entre traducción técnica de manuales y localización de botones y avisos de interfaz.",
    },
    startingMaterial: {
      it: "Estratti inglesi di documentazione tecnica e testi brevi per pulsanti, caricamento e messaggi di errore.",
      en: "Excerpts from developer guides (OAuth and webhooks) coupled with UI strings (buttons, tooltips, validation errors).",
      fr: "Extraits de documentation technique (OAuth, webhooks) et chaînes d'interface (boutons, infobulles, erreurs).",
      es: "Fragmentos de documentación técnica de API y cadenas de texto de interfaz (botones, estados de error y avisos).",
    },
    objective: {
      it: "Rendere chiari i passaggi tecnici e preparare testi brevi e coerenti per chi utilizza l’applicazione.",
      en: "Deliver unambiguous technical instructions for engineers and concise, intuitive microcopy that fits within tight UI containers.",
      fr: "Fournir des explications techniques sans équivoque pour les développeurs et des micro-textes clairs et concis.",
      es: "Ofrecer instrucciones técnicas exactas para desarrolladores y textos de interfaz breves y directos.",
    },
    approach: {
      it: "Conservazione dei nomi tecnici che non vanno tradotti; revisione delle etichette per mantenerle chiare e sufficientemente brevi.",
      en: "Code parameters, endpoints, and variables preserved verbatim. Radical brevity applied to UI buttons to prevent truncation on mobile viewports.",
      fr: "Préservation stricte des variables techniques et concision maximale pour les composants d'interface mobile.",
      es: "Conservación íntegra de parámetros y variables técnicas. Síntesis extrema en botones para evitar desbordamientos.",
    },
    keyDecisions: {
      it: [
        "Differenziazione tra 'Deploy' (mantenuto nel gergo IT per sviluppatori) e 'Pubblica / Rilascia' (per utenti non tecnici).",
        "Resa di 'Discard unsaved changes?': 'Annullare le modifiche non salvate?' (stringa chiara in 37 caratteri).",
        "Uniformazione delle etichette dei pulsanti all’imperativo («Salva», «Invia», «Elimina»).",
      ],
      en: [
        "Contextual separation between developer-facing terms (deploy, webhook) and client-facing actions.",
        "Optimized character count on confirmation dialogs to ensure mobile button legibility.",
        "Standardized UI action verbs using the Italian infinitive ('Salva', 'Annulla', 'Conferma').",
      ],
      fr: [
        "Distinction entre terminologie réservée aux développeurs et interface grand public.",
        "Calibrage minutieux du nombre de caractères des boutons d'action.",
        "Harmonisation des verbes d'action à l'infinitif conformément aux standards de localisation.",
      ],
      es: [
        "Separación clara entre documentación para desarrolladores e interfaz de usuario final.",
        "Ajuste riguroso de la longitud de cadenas para pantallas móviles.",
        "Estandarización de los verbos de acción en infinitivo según las guías de estilo de software.",
      ],
    },
    deliverable: {
      it: "Estratto di documentazione software e selezione di stringhe UI EN→IT, con note di adattamento.",
      en: "English-to-Italian software documentation extract and sample UI-string matrix with localisation notes.",
      fr: "Extrait de guide logiciel EN→IT et tableau d’exemples de microtextes avec commentaires.",
      es: "Extracto de guía de software EN→IT y matriz de textos UI de ejemplo con comentarios.",
    },
    comparison: {
      sourceLang: "EN",
      targetLang: "IT",
      sourceText: "Failed to authenticate session credentials. Please re-enter your secret token or contact project administrator.",
      literalText: "Fallito ad autenticare le credenziali della sessione. Per favore ri-inserisci il tuo segreto token o contatta amministratore di progetto.",
      localizedText: "Autenticazione della sessione non riuscita. Reinserisci il token di sicurezza o contatta l'amministratore del progetto.",
      notes: {
        it: "Eliminato il calco anglosassone 'Fallito a...', corretto 'token di sicurezza' e inseriti gli articoli determinativi mancanti.",
        en: "Replaced broken English calques with standard Italian security notifications, adding appropriate articles and natural passive voice.",
        fr: "Suppression du calque syntaxique anglais au profit d'une notification système fluide et professionnelle.",
        es: "Corrección de calcos sintácticos en favor de un mensaje de error claro y formal en italiano.",
      },
    },
    disclaimer: DEMO_DISCLAIMER,
  },

  // 05. LEGAL / CONTRACTUAL TRANSLATION
  {
    id: "05-legal-contractual-translation",
    order: 5,
    category: "translation",
    masterField: "giuridico",
    title: {
      it: "Traduzione contrattuale EN → IT: clausole di un accordo di servizi",
      en: "Contractual Translation: Master Services Agreement Clauses (EN → IT)",
      fr: "Traduction contractuelle : Clauses de contrat cadre de prestations (EN → IT)",
      es: "Traducción contractual: Cláusulas de acuerdo marco de servicios (EN → IT)",
    },
    subtitle: {
      it: "Analisi di clausole di riservatezza, SLA, limitazione di responsabilità e risoluzione",
      en: "Analysis of confidentiality, service level agreements, liability, and termination clauses",
      fr: "Clauses de confidentialité, accords de niveau de service (SLA), responsabilité et résiliation",
      es: "Análisis de confidencialidad, acuerdos de nivel de servicio (SLA) y resolución contractual",
    },
    brief: {
      it: "Traduzione accurata di clausole contrattuali standard di fornitura servizi B2B, con analisi dei termini definiti e delle equivalenze concettuali.",
      en: "High-precision translation of standard B2B commercial service contract clauses, focusing on defined terms and civil law equivalences.",
      fr: "Traduction rigoureuse de clauses contractuelles B2B avec respect des définitions juridiques.",
      es: "Traducción precisa de cláusulas contractuales B2B con análisis de equivalencias entre sistemas jurídicos.",
    },
    startingMaterial: {
      it: "Contratto di fornitura in lingua inglese di matrice common law comprendente clausole 'Indemnification', 'Limitation of Liability' e 'Governing Law'.",
      en: "Common law master services agreement featuring indemnification, liability caps, warranties, and governing law provisions.",
      fr: "Contrat de prestations rédigé en droit anglo-saxon comprenant clauses d'indemnisation et de force majeure.",
      es: "Contrato marco anglosajón con cláusulas de limitación de responsabilidad y ley aplicable.",
    },
    objective: {
      it: "Preservare il significato delle clausole e segnalare le espressioni che non hanno equivalenti diretti nel diritto italiano; il testo non sostituisce una verifica legale.",
      en: "Preserve the binding scope of obligations without fabricating false equivalences between common law and Italian civil law doctrines.",
      fr: "Transposer fidèlement les engagements juridiques sans déformer la portée des obligations.",
      es: "Reflejar fielmente la fuerza vinculante de las obligaciones sin generar falsas equivalencias doctrinales.",
    },
    approach: {
      it: "Analisi dell’uso di «shall» e «may», dei termini definiti e delle possibili ambiguità. Il documento è soltanto dimostrativo e non è una traduzione asseverata.",
      en: "Rigorous distinction between modal imperatives ('shall', 'may', 'must'). Clear notation explaining jurisdictional translation scope.",
      fr: "Rigueur terminologique absolue sur les obligations impératives et les facultés contractuelles.",
      es: "Tratamiento riguroso de las modalidades obligacionales ('deberá', 'podrá', 'está obligado a').",
    },
    keyDecisions: {
      it: [
        "Traduzione di 'Indemnify and hold harmless' come 'manlevare e tenere indenne', formula consolidata nella prassi contrattuale italiana.",
        "«Force majeure» viene esaminato in relazione alla clausola specifica, senza generalizzare gli effetti giuridici della formulazione.",
        "Inserimento del disclaimer professionale: Noemi non è traduttore giurato/asseverato; la traduzione contrattuale è a scopo di revisione e comprensione operativa.",
      ],
      en: [
        "Careful rendering of 'indemnify and hold harmless' into standard Italian commercial contract wording.",
        "Maintained defined terms with initial capital letters strictly mirroring source contractual definitions.",
        "Transparent professional boundary: translation provided for operational alignment, clearly distinguishing from sworn/certified legal acts.",
      ],
      fr: [
        "Utilisation des formules juridiques consacrées ('relever et garantir indemne').",
        "Respect strict de la majuscule pour tous les termes définis dans le contrat.",
        "Mention déontologique claire excluant tout acte de traduction jurée ou assermentée.",
      ],
      es: [
        "Traducción exacta de 'mantener indemne' según la práctica contractual comparada.",
        "Mantenimiento de mayúsculas en los términos definidos en el preámbulo.",
        "Delimitación profesional explícita: traducción operativa sin valor de traducción jurada oficial.",
      ],
    },
    deliverable: {
      it: "Estratto contrattuale EN→IT a fronte con note su alcune clausole e termini ricorrenti; non è consulenza legale.",
      en: "Sample contractual clauses EN→IT with terminology notes; not legal advice or a certified translation.",
      fr: "Extrait de clauses contractuelles EN→IT annotées, sans conseil juridique ni traduction assermentée.",
      es: "Muestra de cláusulas contractuales EN→IT con notas terminológicas; no es asesoría jurídica ni traducción jurada.",
    },
    comparison: {
      sourceLang: "EN",
      targetLang: "IT",
      sourceText: "Neither party shall be liable for any indirect, incidental, or consequential damages arising out of this Agreement.",
      literalText: "Nessuna delle parti sarà responsabile per qualsiasi danno indiretto, incidentale o consequenziale sorgente fuori da questo Accordo.",
      localizedText: "Nessuna delle parti potrà essere ritenuta responsabile per danni indiretti, incidentali o consequenziali derivanti dal presente Contratto.",
      notes: {
        it: "La formulazione giuridica corretta adotta 'potrà essere ritenuta responsabile', sostituisce 'sorgente fuori' con 'derivanti dal' e usa la maiuscola per 'Contratto' in quanto termine definito.",
        en: "Replaces clumsy calques with the established Italian formula for liability limitation and capitalizes 'Contratto' as a defined instrument.",
        fr: "Adoption de la formule contractuelle consacrée pour la limitation de responsabilité.",
        es: "Redacción según la fórmula habitual de limitación de daños en contratos comerciales en italiano.",
      },
    },
    disclaimer: DEMO_DISCLAIMER,
  },

  // 06. UX & WEB CONTENT LOCALIZATION
  {
    id: "06-ux-web-content-localization",
    order: 6,
    category: "translation",
    title: {
      it: "Localizzazione EN → IT: testi di un percorso di registrazione",
      en: "UX and Website Copy Localisation (EN → IT)",
      fr: "Localisation UX et contenus web (EN → IT)",
      es: "Localización UX y contenidos web (EN → IT)",
    },
    subtitle: {
      it: "Schermate di registrazione, moduli a più passaggi e messaggi di stato",
      en: "User onboarding flow, multi-step forms, and transactional status messages",
      fr: "Parcours d'accueil utilisateur, formulaires pas-à-pas et notifications d'état",
      es: "Flujo de registro y bienvenida, formularios por pasos y mensajes de estado",
    },
    brief: {
      it: "Rendere comprensibili in italiano le informazioni richieste durante la registrazione e il primo utilizzo di un servizio digitale.",
      en: "Refining a digital onboarding flow to make it intuitive, reassuring, and completely natural for Italian users.",
      fr: "Adapter un parcours d'onboarding digital pour le rendre fluide, clair et chaleureux pour le public italien.",
      es: "Adaptar los mensajes de bienvenida de una plataforma digital para mejorar su claridad para un público italiano.",
    },
    startingMaterial: {
      it: "Quattro schermate dimostrative in inglese con preferenze, informazioni sul consenso e riepilogo dell’account.",
      en: "Four-step English onboarding flow including permissions, preferences configuration, and welcome prompt.",
      fr: "Parcours en quatre étapes en anglais avec sélection des préférences et confirmation.",
      es: "Flujo de cuatro pantallas en inglés que incluye permisos, preferencias y mensaje de bienvenida.",
    },
    objective: {
      it: "Semplificare le istruzioni e mantenere coerenti etichette, messaggi e azioni, senza promettere risultati di conversione.",
      en: "Minimize cognitive friction and drop-off rates through concise, engaging, and context-aware microcopy.",
      fr: "Réduire les abandons d'inscription grâce à des micro-textes fluides, concis et rassurants.",
      es: "Disminuir la fricción del usuario mediante textos breves, amables y precisos.",
    },
    approach: {
      it: "Riscrittura delle istruzioni per renderle dirette, con verbi e terminologia uniformi tra le schermate.",
      en: "Benefit-led rewriting prioritising clear user value over dry technical instructions.",
      fr: "Rédaction axée sur les bénéfices concrets plutôt que sur des consignes techniques rigides.",
      es: "Redacción orientada a los beneficios del usuario en lugar de meras instrucciones funcionales.",
    },
    keyDecisions: {
      it: [
        "Sostituzione di 'Get started' con 'Inizia ora' e di 'Skip for now' con 'Potrai farlo più tardi' per un tono più accogliente.",
        "Le informazioni sulla privacy devono corrispondere al trattamento dei dati realmente previsto; l’esempio non introduce garanzie non verificate.",
        "Attenzione alla chiarezza delle etichette e dei messaggi; l’esempio non costituisce una certificazione di accessibilità.",
      ],
      en: [
        "Localized 'Get started' into encouraging Italian actions ('Inizia ora', 'Configura il tuo spazio').",
        "Reinforced privacy reassurance microcopy to build immediate trust during initial signup.",
        "Selected understandable form labels and helpful error messages; no accessibility audit or compliance certification is claimed.",
      ],
      fr: [
        "Adaptation des boutons d'action vers des formules encourageantes et bienveillantes.",
        "Renforcement des messages de réassurance quant au respect des données personnelles.",
        "Respect scrupuleux des critères d'accessibilité sur les libellés de formulaire.",
      ],
      es: [
        "Traducción de llamadas a la acción con fórmulas cercanas y directas.",
        "Refuerzo de la tranquilidad del usuario en materia de privacidad de datos.",
        "Adecuación a criterios de accesibilidad para etiquetas de formulario.",
      ],
    },
    deliverable: {
      it: "Matrice illustrativa di microcopy e messaggi UI, con esempi EN→IT e motivazioni editoriali.",
      en: "Illustrative UI microcopy matrix, with selected English-to-Italian examples and editorial rationale.",
      fr: "Matrice de microtextes d’interface EN→IT avec exemples et commentaires éditoriaux.",
      es: "Matriz ilustrativa de microtextos EN→IT con ejemplos y notas editoriales.",
    },
    comparison: {
      sourceLang: "EN",
      targetLang: "IT",
      sourceText: "Almost there! Tell us how you plan to use the app so we can tailor your workspace.",
      literalText: "Quasi là! Dicci come pianifichi di usare l'app così che possiamo cucire il tuo spazio di lavoro.",
      localizedText: "Ci siamo quasi! Seleziona come utilizzerai l'applicazione: prepareremo il tuo spazio di lavoro su misura.",
      notes: {
        it: "Sostituito 'Quasi là' (calco inaccettabile) con 'Ci siamo quasi!', e 'cucire' con 'su misura'.",
        en: "Replaces the unnatural literal translation with friendly, professional Italian conversational phrasing.",
        fr: "Élimination des calques littéraux au profit d'une formule encourageante et naturelle.",
        es: "Sustitución de expresiones literales por giros naturales y dinámicos en italiano.",
      },
    },
    disclaimer: DEMO_DISCLAIMER,
  },

  // 07. SUPPLIER RESEARCH & BENCHMARK
  {
    id: "07-supplier-research-benchmark",
    order: 7,
    category: "research",
    title: {
      it: "Ricerca informativa: confronto tra fornitori di imballaggi e servizi di spedizione",
      en: "Supplier Research: Comparative Benchmark for Eco-Packaging & Logistics",
      fr: "Recherche de fournisseurs : Analyse comparative d'emballages écologiques",
      es: "Investigación de proveedores: Análisis comparativo de embalaje ecológico",
    },
    subtitle: {
      it: "Criteri di confronto, organizzazione dei dati e sintesi per una piccola attività",
      en: "Market scouting, public data gathering, and decision matrix for a boutique producer",
      fr: "Recherche de fournisseurs, collecte de données publiques et synthèse pour une marque artisanale",
      es: "Búsqueda, recopilación de datos y matriz comparativa para pequeña empresa",
    },
    brief: {
      it: "Una piccola attività immaginaria vuole confrontare alcune soluzioni di imballaggio e spedizione utilizzando criteri prestabiliti.",
      en: "An artisan Italian business needs to identify a certified FSC packaging supplier and reliable small-batch logistics partner.",
      fr: "Une petite entreprise artisanale doit identifier un fournisseur d'emballages en carton recyclé FSC et logistique.",
      es: "Un negocio artesanal necesita seleccionar un proveedor de envases de cartón reciclado FSC y envíos.",
    },
    startingMaterial: {
      it: "Parametri del cliente: budget massimo per pezzo, quantitativi minimi d'ordine (MOQ), tempi di consegna e certificazioni ecologiche richieste.",
      en: "Client specifications: unit price targets, minimum order quantities (MOQ), turnaround times, and ecological certifications.",
      fr: "Cahier des charges client : prix unitaire, quantités minimales (MOQ), délais et certifications.",
      es: "Parámetros del cliente: precio objetivo por unidad, pedidos mínimos (MOQ), plazos y certificados.",
    },
    objective: {
      it: "Mostrare come organizzare un confronto tra cinque fornitori immaginari, separando i dati da verificare dalle preferenze del committente.",
      en: "Identify, verify and summarise public offerings from 5 suppliers into an actionable, decision-ready comparison matrix.",
      fr: "Recueillir et synthétiser les offres de 5 fournisseurs européens dans une matrice décisionnelle claire.",
      es: "Recopilar y sintetizar información pública de 5 proveedores en una matriz estructurada y transparente.",
    },
    approach: {
      it: "L’esempio illustra quali fonti consultare e come annotare prezzo, quantitativi, certificazioni e condizioni. I fornitori e i dati riportati sono inventati.",
      en: "Exhaustive desk research analysing official websites, public price tiers, technical data sheets, and verified fulfilment times.",
      fr: "Recherche documentaire approfondie sur les catalogues officiels, fiches techniques et conditions de livraison.",
      es: "Investigación documental sobre sitios web oficiales, catálogos, fichas técnicas y condiciones de envío.",
    },
    keyDecisions: {
      it: [
        "Definiti criteri di confronto: caratteristiche ambientali dichiarate, costi per quantità e tempi indicati dai fornitori.",
        "Nel modello vengono evidenziati i costi aggiuntivi da verificare, come attrezzaggio, trasporto e quantitativi minimi.",
        "Preparata una sintesi dimostrativa che confronta le opzioni sulla base dei criteri assegnati; la scelta finale resta al committente.",
      ],
      en: [
        "Structured weighted criteria: ecological credentials, tiered pricing brackets (100, 500, 1000 units), lead times.",
        "Uncovered hidden costs such as initial die-cut setup fees and minimum order charges not highlighted on landing pages.",
        "Produced a concise 1-page executive summary highlighting the top two actionable candidates.",
      ],
      fr: [
        "Définition de critères objectifs : certifications écologiques, dégressivité des prix, délais de fabrication.",
        "Mise en lumière des frais annexes (frais de calage/matrice, frais de port masqués).",
        "Synthèse exécutive d'une page mettant en valeur les deux meilleures options.",
      ],
      es: [
        "Establecimiento de criterios ponderados: sostenibilidad, precios por escala y tiempos de entrega.",
        "Identificación de costes ocultos como costes de cliché inicial y mínimos de facturación.",
        "Resumen ejecutivo de una página con la recomendación fundamentada de las dos mejores alternativas.",
      ],
    },
    deliverable: {
      it: "Tabella comparativa dimostrativa di fornitori fittizi, con criteri e sintesi delle informazioni.",
      en: "Illustrative supplier comparison table using fictional data, criteria and a concise summary.",
      fr: "Tableau comparatif de fournisseurs fictifs, critères et synthèse informative.",
      es: "Tabla comparativa de proveedores ficticios, criterios y resumen informativo.",
    },
    tableData: {
      headers: {
        it: ["Fornitore", "Certificazione", "MOQ Minimo", "Costo Unitario (500 pz)", "Tempi Consegna", "Valutazione"],
        en: ["Supplier", "Certification", "Minimum MOQ", "Unit Cost (500 pcs)", "Lead Time", "Verdict"],
        fr: ["Fournisseur", "Certification", "MOQ Minimum", "Coût Unitaire (500 pcs)", "Délai", "Évaluation"],
        es: ["Proveedor", "Certificación", "MOQ Mínimo", "Coste Unitario (500 uds)", "Plazo Entrega", "Valoración"],
      },
      rows: {
        it: [
          ["EcoPack Italia (MI)", "FSC Recycled 100%", "250 pz", "€ 1,15 / pz", "5-7 gg lavorativi", "Scelta Consigliata"],
          ["GreenBox Europe", "FSC Mix / Cradle2Cradle", "500 pz", "€ 1,28 / pz", "10-12 gg", "Ottima qualità, tempi più lunghi"],
          ["Cartotecnica Centro", "PEFC Certified", "1.000 pz", "€ 0,98 / pz", "15 gg", "MOQ troppo elevato per avvio"],
        ],
        en: [
          ["EcoPack Italia (MI)", "FSC Recycled 100%", "250 pcs", "€ 1.15 / pc", "5-7 business days", "Recommended Pick"],
          ["GreenBox Europe", "FSC Mix / Cradle2Cradle", "500 pcs", "€ 1.28 / pc", "10-12 days", "High quality, longer turnaround"],
          ["Cartotecnica Centro", "PEFC Certified", "1,000 pcs", "€ 0.98 / pc", "15 days", "MOQ exceeds current volume"],
        ],
        fr: [
          ["EcoPack Italia (MI)", "FSC Recycled 100%", "250 pcs", "1,15 € / pc", "5-7 jours ouvrés", "Option Recommandée"],
          ["GreenBox Europe", "FSC Mix / Cradle2Cradle", "500 pcs", "1,28 € / pc", "10-12 jours", "Très bonne qualité, délais plus longs"],
          ["Cartotecnica Centro", "PEFC Certified", "1.000 pcs", "0,98 € / pc", "15 jours", "Seuil de commande trop élevé"],
        ],
        es: [
          ["EcoPack Italia (MI)", "FSC Recycled 100%", "250 uds", "1,15 € / ud", "5-7 días laborables", "Opción Recomendada"],
          ["GreenBox Europe", "FSC Mix / Cradle2Cradle", "500 uds", "1,28 € / ud", "10-12 días", "Excelente calidad, mayor plazo"],
          ["Cartotecnica Centro", "PEFC Certified", "1.000 uds", "0,98 € / ud", "15 días", "Volumen mínimo excesivo para inicio"],
        ],
      },
    },
    disclaimer: DEMO_DISCLAIMER,
  },

  // 08. INTERNATIONAL COMPETITOR RESEARCH
  {
    id: "08-competitor-benchmarking",
    order: 8,
    category: "research",
    title: {
      it: "Ricerca informativa: confronto tra offerte e servizi di concorrenti",
      en: "Competitor Research: Positioning Analysis in European Markets",
      fr: "Veille concurrentielle : Analyse de positionnement sur le marché européen",
      es: "Investigación de competencia: Análisis de posicionamiento en el mercado europeo",
    },
    subtitle: {
      it: "Servizi, prezzi pubblicati e modalità di presentazione: confronto dimostrativo",
      en: "Comparative study across public pricing, service models, and value propositions of 4 firms",
      fr: "Étude comparative sur les offres, tarifs publics et propositions de valeur de 4 acteurs",
      es: "Estudio comparativo sobre servicios, precios públicos y propuesta de valor de 4 negocios",
    },
    brief: {
      it: "Un consulente immaginario desidera organizzare informazioni pubbliche sull’offerta di quattro realtà simili alla propria.",
      en: "An independent Italian consultant expanding into French and English-speaking markets requires a clear competitive landscape mapping.",
      fr: "Un consultant indépendant italien souhaite cartographier l'offre concurrente sur les marchés francophones et anglophones.",
      es: "Un consultor independiente italiano necesita analizar el panorama competitivo antes de expandir sus servicios a otros países europeos.",
    },
    startingMaterial: {
      it: "Schede fittizie ispirate ai tipi di informazioni normalmente disponibili nei siti aziendali: servizi, prezzi dichiarati, lingue e canali di comunicazione.",
      en: "Public data gathered from websites, LinkedIn company profiles, service decks, and open newsletters of 4 competitors.",
      fr: "Données publiques issues de sites web, profils LinkedIn et présentations publiques de 4 concurrents en France et en Europe.",
      es: "Información pública recopilada de páginas web, perfiles profesionales y boletines de 4 empresas competidoras.",
    },
    objective: {
      it: "Mettere a confronto caratteristiche verificabili e organizzare osservazioni utili, senza presentare dati simulati come risultati di una ricerca reale.",
      en: "Identify underserved market niches, baseline pricing benchmarks, and dominant messaging angles based strictly on verified public facts.",
      fr: "Identifier les segments sous-exploités et les fourchettes tarifaires moyennes sans spéculation.",
      es: "Localizar oportunidades de diferenciación y rangos de tarifas basándose exclusivamente en hechos públicos comprobables.",
    },
    approach: {
      it: "Separazione tra dati di partenza dello scenario, criteri di confronto e osservazioni interpretative.",
      en: "Methodological separation between verifiable empirical facts (published pricing, stated turnaround) and strategic interpretation.",
      fr: "Séparation rigoureuse entre faits vérifiables (tarifs affichés, services mentionnés) et analyse stratégique.",
      es: "Diferenciación metodológica estricta entre datos contrastables (precios visibles, idiomas) e interpretación analítica.",
    },
    keyDecisions: {
      it: [
        "Esclusi loghi protetti da copyright; utilizzati descrittori neutri per la tutela della riservatezza dei marchi terzi.",
        "Confrontati, nell’esempio, pacchetti a ore e formule con compenso periodico.",
        "Evidenziate le differenze tra le offerte simulate, senza trarre conclusioni sull’intero mercato reale.",
      ],
      en: [
        "Excluded proprietary third-party logos, utilizing neutral descriptive identifiers to uphold fair research practices.",
        "Compared pricing models: hourly ad-hoc billing versus monthly recurring retainer retainers.",
        "Highlighted the lack of authentic multilingual execution as a major market whitespace for the client.",
      ],
      fr: [
        "Exclusion des logos protégés et recours à des descriptions neutres et factuelles.",
        "Comparaison des modèles économiques : tarification horaire contre forfaits mensuels récurrents.",
        "Identification du déficit d'accompagnement réellement multilingue chez les concurrents.",
      ],
      es: [
        "Exclusión de logotipos protegidos y adopción de nombres descriptivos neutros.",
        "Comparativa de modelos de facturación: bolsa de horas frente a cuotas mensuales recurrentes.",
        "Detección de una clara ventaja competitiva en la oferta de soporte multilingüe real.",
      ],
    },
    deliverable: {
      it: "Scheda dimostrativa di confronto tra concorrenti fittizi, criteri di posizionamento e osservazioni.",
      en: "Short fictional competitor-comparison example with positioning criteria and editorial observations.",
      fr: "Exemple synthétique de comparaison d’entreprises fictives et de critères de positionnement.",
      es: "Ejemplo breve de comparación de competidores ficticios y criterios de posicionamiento.",
    },
    disclaimer: DEMO_DISCLAIMER,
  },

  // 09. BACK OFFICE FOR GENERIC FREELANCE PROFESSIONAL
  {
    id: "09-freelance-back-office-system",
    order: 9,
    category: "backoffice",
    title: {
      it: "Back office: gestione di email, agenda e richieste di un professionista",
      en: "Back Office & Operational Management: Systems for Solo Professionals",
      fr: "Back-office et organisation opérationnelle : Système pour professionnel libéral",
      es: "Back office y organización operativa: Sistema para profesional independiente",
    },
    subtitle: {
      it: "Organizzazione della posta, appuntamenti e richieste dei clienti",
      en: "Inbox triage, appointment buffer scheduling, and systematic client follow-up tracker",
      fr: "Gestion de boîte de réception, planification d'agenda et suivi des relances clients",
      es: "Gestión de correo, tiempos de descanso en agenda y seguimiento de clientes",
    },
    brief: {
      it: "Un consulente immaginario fatica a seguire email, appuntamenti e richieste già ricevute dai propri clienti.",
      en: "An overloaded independent consultant is losing potential engagements due to disorganized inbox triage and irregular follow-ups.",
      fr: "Un professionnel débordé par la gestion quotidienne perd des opportunités par manque de suivi et d'organisation.",
      es: "Un profesional autónomo saturado por tareas administrativas pierde oportunidades y control sobre los plazos de entrega.",
    },
    startingMaterial: {
      it: "Scenario inventato con messaggi in arrivo, appuntamenti da coordinare e tre richieste di preventivo da gestire secondo istruzioni fornite.",
      en: "Practice scenario with 50 sample client messages, irregular calendar requests, and pending quotes for Demo Clients A, B, and C.",
      fr: "Scénario synthétique de 50 messages entrants non traités, rendez-vous non confirmés et devis en attente.",
      es: "Escenario demostrativo con 50 correos sin clasificar, citas desorganizadas y presupuestos pendientes.",
    },
    objective: {
      it: "Preparare una procedura per classificare le email, gestire le richieste esistenti e controllare le risposte in attesa.",
      en: "Build standard operating procedures (SOPs), achieve zero-inbox clarity, and establish an unshakeable follow-up cadence.",
      fr: "Mettre en place une procédure claire (SOP), désengorger la boîte mail et structurer les relances.",
      es: "Crear un protocolo de trabajo operativo (SOP), despejar el correo y asegurar el seguimiento riguroso de cada cliente.",
    },
    approach: {
      it: "Suddivisione dei messaggi per priorità, bozze di risposta da approvare e intervalli realistici tra gli appuntamenti.",
      en: "Implementation of the Open Loops framework: classification by priority, templated personalised replies, and 15-minute calendar buffers.",
      fr: "Mise en œuvre d'une méthode de tri rigoureuse, modèles de réponse types personnalisés et temps de pause entre rendez-vous.",
      es: "Aplicación de clasificación por prioridades, respuestas tipo personalizadas y descansos de 15 minutos entre videollamadas.",
    },
    keyDecisions: {
      it: [
        "Le richieste in attesa di risposta sono annotate in un elenco con una data di verifica concordata, senza invii automatici non autorizzati.",
        "Previsti periodi di lavoro senza appuntamenti, secondo le disponibilità indicate dal professionista.",
        "Predisposto un riepilogo settimanale di attività e richieste in attesa, da condividere con il professionista secondo gli accordi.",
      ],
      en: [
        "Created a dedicated 'Waiting For' folder: pending client actions are flagged for automated check-in after 48 business hours.",
        "Protected deep-work calendar blocks reserved strictly for deliverable creation without incoming interruptions.",
        "Weekly status summary delivered every Friday afternoon tracking commitments, pending decisions, and next best actions.",
      ],
      fr: [
        "Création d'un dossier 'En attente' avec rappel systématique sous 48 heures ouvrées.",
        "Blocage de créneaux dédiés au travail de fond sans interruption téléphonique.",
        "Synthèse hebdomadaire transmise chaque vendredi récapitulant les actions finalisées et les priorités de la semaine suivante.",
      ],
      es: [
        "Creación de una carpeta 'En espera': cada asunto pendiente cuenta con aviso de seguimiento a las 48 horas.",
        "Bloqueo de franjas de concentración en la agenda sin citas externas.",
        "Informe semanal de control entregado cada viernes con el estado de tareas y prioridades pendientes.",
      ],
    },
    deliverable: {
      it: "Procedura dimostrativa di gestione email e organizzazione delle attività, con istruzioni e controlli di approvazione.",
      en: "Illustrative email-triage and operational workflow procedure, with approval checkpoints.",
      fr: "Procédure de tri des e-mails et d’organisation des tâches, avec validations prévues.",
      es: "Procedimiento de correos y organización operativa, con controles de aprobación.",
    },
    disclaimer: DEMO_DISCLAIMER,
  },

  // 10. WRITING & REVISION — BEFORE/AFTER
  {
    id: "10-writing-editorial-revision",
    order: 10,
    category: "writing",
    title: {
      it: "Revisione editoriale: prima e dopo di una presentazione aziendale",
      en: "Copywriting & Text Revision: Before/After Corporate Presentation",
      fr: "Rédaction et révision de textes : Comparatif avant/après pour présentation d'entreprise",
      es: "Redacción y corrección de estilo: Comparativa antes y después para presentación profesional",
    },
    subtitle: {
      it: "Riscrittura di un testo poco chiaro, con spiegazione delle scelte editoriali",
      en: "Stylistic overhaul, elimination of corporate fluff, and focus on human clarity",
      fr: "Refonte stylistique, suppression du jargon administratif et valorisation de la clarté",
      es: "Reestructuración estilística, eliminación de giros burocráticos y claridad en el mensaje",
    },
    brief: {
      it: "Revisione di un testo di presentazione aziendale originariamente pesante, infarcito di formule impersonali e gergo generico.",
      en: "Comprehensive revision of a company introduction draft originally bogged down by passive verbs, clichés, and bureaucratic phrasing.",
      fr: "Révision d'une présentation d'entreprise alourdie par des tournures passives et un vocabulaire ampoulé.",
      es: "Revisión integral de una presentación corporativa cargada de fórmulas impersonales y clichés comerciales.",
    },
    startingMaterial: {
      it: "Bozza originale: 'La nostra compagine professionale si prefigge lo scopo di implementare soluzioni sinergiche a 360 gradi...'",
      en: "Original draft: 'Our multifaceted professional entity endeavors to execute 360-degree synergized turnkey methodologies...'",
      fr: "Projet initial : 'Notre structure s'évertue à mettre en œuvre des synergies holistiques à 360 degrés...'",
      es: "Borrador inicial: 'Nuestra entidad se complace en implementar soluciones sinérgicas a 360 grados...'",
    },
    objective: {
      it: "Rendere il testo più chiaro e specifico, mantenendo soltanto le informazioni presenti nella bozza.",
      en: "Transform the copy into direct, credible, and engaging communication clearly stating what the company actually accomplishes.",
      fr: "Transformer le texte en une communication percutante, élégante et lisible, axée sur les compétences réelles.",
      es: "Convertir el texto en un mensaje convincente, cercano y profesional que explique con exactitud los servicios ofrecidos.",
    },
    approach: {
      it: "Eliminazione di formule generiche, uso di verbi concreti e revisione delle frasi troppo lunghe.",
      en: "Elimination of hollow marketing adjectives, active voice restoration, and breaking tortuous clauses into punchy, memorable sentences.",
      fr: "Suppression des adjectifs superflus, retour à la voix active et découpage en phrases courtes et équilibrées.",
      es: "Supresión de adjetivos vacíos, adopción de voz activa y descomposición de oraciones complejas en ideas claras.",
    },
    keyDecisions: {
      it: [
        "Banditi 'sinergia a 360 gradi', 'leader di settore' e 'prefiggersi lo scopo'.",
        "La nuova struttura distingue servizi, destinatari e caratteristiche verificabili dell’attività.",
        "Accorciato il testo ed eliminati passaggi ridondanti, senza attribuire risultati commerciali non misurati.",
      ],
      en: [
        "Banned clichés such as 'synergy', '360-degree turnkey', and 'industry leading'.",
        "Organised the message into three clear sections: What we do, Who we serve, Why clients stay.",
        "Trimmed word count by 40% while doubling message retention and professional credibility.",
      ],
      fr: [
        "Suppression des poncifs de communication d'entreprise ('synergies', 'solutions à 360 degrés').",
        "Organisation en 3 volets limpides : Mission, Public cible, Valeur ajoutée éprouvée.",
        "Réduction de 40 % du volume de texte avec un gain substantiel de lisibilité.",
      ],
      es: [
        "Eliminación de tópicos de marketing ('sinergias', 'soluciones 360', 'líderes de mercado').",
        "Estructuración del contenido en 3 apartados: Qué hacemos, Para quién trabajamos, Por qué nos eligen.",
        "Reducción del 40 % de la longitud del texto aumentando su impacto comercial y profesional.",
      ],
    },
    deliverable: {
      it: "Confronto editoriale prima/dopo di un testo italiano fittizio con note di revisione.",
      en: "Before-and-after Italian copy-editing example with editorial commentary.",
      fr: "Exemple avant/après de révision d’un texte italien, avec commentaires.",
      es: "Ejemplo antes/después de revisión en italiano, con comentarios editoriales.",
    },
    comparison: {
      sourceLang: "IT (Bozza Originale)",
      targetLang: "IT (Testo Revisionato)",
      sourceText: "La nostra compagine professionale si prefigge lo scopo precipuo di implementare soluzioni sinergiche a 360 gradi atte a favorire l'ottimizzazione dei processi operativi dei nostri stimati clienti.",
      literalText: "La nostra realtà è finalizzata all'implementazione di soluzioni sinergiche a trecentosessanta gradi per ottimizzare i processi dei nostri clienti.",
      localizedText: "Aiutiamo professionisti e piccole attività a organizzare meglio il lavoro quotidiano con procedure chiare, documenti ordinati e comunicazioni più semplici.",
      notes: {
        it: "Eliminato il burocratese vuoto. Il testo revisionato parla direttamente al lettore in prima persona plurale, definisce l'interlocutore e si concentra sul beneficio reale.",
        en: "Replaces empty bureaucratic waffle with direct, human-centred professional prose emphasizing concrete operational benefits.",
        fr: "Substitution d'un style ampoulé par une communication directe, bienveillante et axée sur le résultat.",
        es: "Sustitución de una redacción farragosa por un texto claro, directo y centrado en las necesidades del cliente.",
      },
    },
    disclaimer: DEMO_DISCLAIMER,
  },

  // 11. ITALIAN LANDING PAGE EDITORIAL LOCALISATION
  {
    "id": "11-multilingual-landing-page",
    "order": 11,
    "category": "web",
    "title": {
      "it": "Localizzazione EN → IT: contenuti di una pagina di presentazione",
      "en": "Italian landing page: content review and localisation",
      "fr": "Page de destination italienne : révision et localisation éditoriale",
      "es": "Landing page en italiano: revisión y localización de contenidos"
    },
    "subtitle": {
      "it": "Titoli, descrizioni, domande frequenti e inviti all’azione: solo intervento editoriale",
      "en": "Clear Italian headlines, FAQs and calls to action; editorial work, not website development",
      "fr": "Accroches, FAQ et appels à l’action en italien ; prestation éditoriale, sans développement web",
      "es": "Titulares, preguntas frecuentes y llamadas a la acción en italiano, sin desarrollo técnico"
    },
    "brief": {
      "it": "Un consulente immaginario desidera adattare per i lettori italiani i testi di una pagina già disponibile in inglese.",
      "en": "Project scenario: an international consultant has an English landing page and wants to communicate clearly with Italian visitors.",
      "fr": "Contexte du projet : un consultant international souhaite adapter une page anglophone au public italien.",
      "es": "Situación de trabajo: un consultor internacional quiere adaptar una página en inglés a lectores italianos."
    },
    "startingMaterial": {
      "it": "Una bozza in inglese contenente titolo, testo introduttivo, servizi, FAQ e invito a chiedere informazioni.",
      "en": "English copy draft containing a headline, introduction, service list, FAQ and enquiry CTA.",
      "fr": "Brouillon anglais comprenant titre, présentation, services, FAQ et formulaire de contact.",
      "es": "Borrador en inglés con título, presentación, servicios, FAQ y llamada a contactar."
    },
    "objective": {
      "it": "Rendere il contenuto italiano chiaro e coerente, con un percorso di lettura ordinato e terminologia uniforme.",
      "en": "Make the Italian copy clear, consistent and easy to scan without changing the actual offer.",
      "fr": "Créer des contenus italiens clairs et cohérents, sans modifier la prestation réelle.",
      "es": "Crear textos en italiano claros, coherentes y fieles a la oferta real."
    },
    "approach": {
      "it": "Analisi della struttura, localizzazione dei testi e revisione delle domande frequenti; consegna dei contenuti pronti per essere inseriti nel sito.",
      "en": "Audit source messages; organise copy hierarchy; localise EN → IT; review FAQs and CTAs; provide CMS-ready text.",
      "fr": "Recenser les messages, structurer les textes, localiser vers l’italien, réviser FAQ et appels à l’action.",
      "es": "Revisar los mensajes, estructurar los textos, localizar al italiano y entregar la versión preparada para CMS."
    },
    "keyDecisions": {
      "it": [
        "Headline specifica per il bisogno del lettore italiano, non slogan generici.",
        "FAQ costruite dalle domande presenti nel brief, senza inventare condizioni.",
        "Consegna di testi modificabili, lasciando sviluppo, hosting e form tecnici al cliente."
      ],
      "en": [
        "Prioritise one clear reader question in the Italian headline.",
        "Write FAQs only from approved source information.",
        "Deliver editable content; hosting, code and technical form integration are outside scope."
      ],
      "fr": [
        "Une accroche italienne utile, sans slogan vide.",
        "Aucune condition commerciale ajoutée dans les FAQ.",
        "Livraison de contenus éditables ; l’intégration technique n’est pas incluse."
      ],
      "es": [
        "Un titular italiano centrado en la necesidad del lector.",
        "Preguntas frecuentes basadas en datos aprobados.",
        "Entrega de textos editables; sin programación ni alojamiento web."
      ]
    },
    "deliverable": {
      "it": "Testi in italiano per titolo, sottotitolo, descrizioni, FAQ e inviti all’azione, accompagnati da note editoriali.",
      "en": "Italian copy kit: headline, subheading, three benefits, FAQ and CTA, ready for client-side CMS integration.",
      "fr": "Kit éditorial italien : titre, sous-titre, bénéfices, FAQ, CTA et indications pour le CMS.",
      "es": "Kit editorial italiano: titular, subtítulo, beneficios, preguntas frecuentes, CTA y notas para CMS."
    },
    "comparison": {
      "sourceLang": "EN",
      "targetLang": "IT",
      "sourceText": "Get tailored guidance for your next project. Tell us what you need and we will explain the available options.",
      "literalText": "Ottieni guida su misura per il tuo prossimo progetto. Dici cosa ti serve e spiegheremo le opzioni disponibili.",
      "localizedText": "Un supporto su misura per il tuo prossimo progetto. Raccontaci di cosa hai bisogno: ti illustreremo le soluzioni disponibili.",
      "notes": {
        "it": "«Raccontaci» invita al contatto senza suonare imperativo; sono mantenute le promesse del testo originale.",
        "en": "Preserves scope and avoids an awkward literal imperative.",
        "fr": "Invite au contact dans un registre naturel, sans promesse ajoutée.",
        "es": "Invita a contactar de forma natural y conserva el sentido original."
      }
    }
  ,
    disclaimer: DEMO_DISCLAIMER
  },

    // 12. DEDICATED LITERARY TRANSLATION SAMPLE (MASTER FIELD: LETTERARIO)
  {
    id: "12-literary-translation-sample",
    order: 12,
    category: "translation",
    masterField: "letterario",
    title: {
      it: "Traduzione letteraria EN → IT: «The Last Voice Note»",
      en: "Literary & Narrative Translation Sample: 'The Last Voice Note' (EN → IT)",
      fr: "Échantillon de traduction littéraire et narrative : 'The Last Voice Note' (EN → IT)",
      es: "Muestra de traducción literaria y narrativa: 'The Last Voice Note' (EN → IT)",
    },
    subtitle: {
      it: "Brano narrativo originale, traduzione italiana a fronte e note sulle scelte di stile",
      en: "Original contemporary narrative: study of rhythm, subtext, spoken dialogue, and prosodic cadence",
      fr: "Texte narratif contemporain original : étude du rythme, du non-dit, des dialogues et de la cadence",
      es: "Texto narrativo contemporáneo original: estudio de ritmo, subtexto, diálogo coloquial y musicalidad",
    },
    brief: {
      it: "Traduzione di un estratto di prosa narrativa contemporanea originale incentrato sulla memoria digitale, l'assenza e i dettagli quotidiani.",
      en: "Translation of an original contemporary literary passage exploring digital memory, everyday absence, and unspoken emotional weight.",
      fr: "Traduction d'un extrait de fiction contemporaine originale sur la mémoire numérique et l'intimité du quotidien.",
      es: "Traducción de un fragmento literario contemporáneo original sobre la memoria digital y la emoción contenida.",
    },
    startingMaterial: {
      it: "Brano originale in inglese preparato appositamente per questo esempio, senza riprendere opere di terzi.",
      en: "Original English narrative source written specifically for this demonstration portfolio. Free from external copyright restrictions.",
      fr: "Texte source original en anglais rédigé spécifiquement pour ce projet de démonstration.",
      es: "Texto fuente original en inglés creado exclusivamente para este proyecto demostrativo.",
    },
    objective: {
      it: "Restituire in italiano il tono e il ritmo del brano, senza calchi né costruzioni artificiose.",
      en: "Render the narrator's interior voice into Italian with natural cadence and restraint, avoiding both flat literalism and overwrought poeticism.",
      fr: "Transposer la voix intérieure du narrateur avec délicatesse, sans lourdeur ni préciosité artificielle.",
      es: "Recrear la voz narrativa en italiano con musicalidad y sobriedad, eludiendo la literalidad estéril y la afectación.",
    },
    approach: {
      it: "Confronto tra le due versioni, con attenzione a pause, tempi verbali, punteggiatura e scelte lessicali.",
      en: "Close reading analysis: mapping narrative pauses, punctuation weight, and emotional subtext. Translation shaped around natural breath rhythms.",
      fr: "Lecture attentive de la ponctuation, des silences et des non-dits pour restituer le souffle de la prose originale.",
      es: "Análisis pormenorizado del ritmo, las pausas y el subtexto emocional antes de abordar la traducción de cada párrafo.",
    },
    keyDecisions: {
      it: [
        "Resa di 'voice note': conservato 'nota vocale' nel registro intimo per riflettere l'uso quotidiano autentico in italiano.",
        "Scelta di tempi verbali: alternanza studiata tra imperfetto narrativo e passato remoto per creare la giusta profondità temporale del ricordo.",
        "Revisione dell’incipit per preservare il ritmo del testo originale senza forzare la sintassi italiana.",
      ],
      en: [
        "Balanced contemporary spoken terms ('voice note' / 'nota vocale') against reflective narrative introspection.",
        "Calibrated Italian narrative past tenses (imperfetto vs passato remoto) to honor the protagonist's layered temporal recollection.",
        "Preserved the understated, intimate opening cadence without unnatural Italian inversions.",
      ],
      fr: [
        "Choix rigoureux des temps verbaux pour refléter les différentes strates de la mémoire.",
        "Préservation de l'économie de moyens et de la sobriété du monologue intérieur.",
        "Attention portée à la musicalité des fins de phrase pour soutenir l'émotion.",
      ],
      es: [
        "Ajuste preciso de los tiempos verbales narrativos para recrear las capas temporales del recuerdo.",
        "Mantenimiento de la contención expresiva sin caer en dramatismos artificiales.",
        "Cuidado del ritmo de las frases para acompañar la respiración del relato.",
      ],
    },
    deliverable: {
      it: "Testo integrale bilingue a fronte annotato con commento critico sulle scelte stilistiche e traduttologiche.",
      en: "Dual-language literary presentation with side-by-side text and translator's critical editorial commentary.",
      fr: "Présentation bilingue annotée avec commentaire critique des choix de traduction.",
      es: "Texto bilingüe enfrentado con notas del traductor sobre las decisiones estilísticas adoptadas.",
    },
    sampleText: {
      enSource: `The kitchen was still cold when the phone buzzed against the marble counter. It was forty-six seconds of nothing in particular: the sound of a kettle rattling on a stove somewhere three hundred miles away, a car passing in the rain, and then her voice, clearing its throat as if she had dialed the wrong number and decided to apologize to the silence.

"I found the book," she said. "The one with the ticket stub inside. You were right about the year."

She didn't sign off. A breath, the faint metallic click of the stove being turned down, and the line cut. That was nine months ago, before the boxes in the hallway, before the letters that kept arriving with someone else's name neatly crossed out in blue ink. I still haven't cleared the inbox. Sometimes, when the house settles into that hollow afternoon quiet, I play it just to hear the kettle.`,
      itTarget: `In cucina faceva ancora freddo quando il telefono vibrò sul ripiano di marmo. Erano quarantasei secondi di niente in particolare: il rumore di un bollitore che tremava su un fornello a trecento miglia di distanza, un'auto che passava sotto la pioggia e poi la sua voce, che si schiariva la gola come se avesse sbagliato numero e avesse deciso di scusarsi con il silenzio.

«Ho trovato il libro», disse. «Quello con il talloncino del biglietto tra le pagine. Avevi ragione tu sull'anno».

Non si congedò. Un respiro, il leggero scatto metallico del gas che veniva abbassato e la registrazione si interruppe. Era successo nove mesi fa, prima degli scatoloni nel corridoio, prima delle lettere che continuavano ad arrivare con un nome altrui cancellato con cura a penna blu. Non ho ancora svuotato la casella. A volte, quando la casa sprofonda in quel silenzio vuoto del pomeriggio, la faccio partire solo per sentire il bollitore.`,
      editorialNotes: {
        it: "Note del traduttore: 'forty-six seconds of nothing in particular' è reso con 'quarantasei secondi di niente in particolare', mantenendo il tono disarmante; 'ticket stub' è reso con 'talloncino del biglietto', non con 'scontrino', perché non si tratta di una ricevuta d’acquisto; 'the house settles into that hollow afternoon quiet' è tradotto con 'la casa sprofonda in quel silenzio vuoto del pomeriggio' per restituire la sensazione di peso e solitudine senza enfasi melodrammatica.",
        en: "Translator's notes: Maintained the quiet cadence of the original; selected evocative Italian verbs ('sprofonda', 'tremava') that mirror the acoustic reality of the memory without calling attention to the translator's hand.",
        fr: "Notes de traduction : Restitution de la pudeur et de l'intimité du passage sans fard littéraire excessif.",
        es: "Notas de traducción: Búsqueda deliberada de la contención emocional a través de una prosodia limpia y verosímil en italiano.",
      },
    },
    disclaimer: {
      it: "Testo sorgente originale in lingua inglese creato appositamente per questo progetto dimostrativo.",
      en: "Original English source text created specifically for this demonstration portfolio.",
      fr: "Texte source original en anglais créé spécifiquement pour ce projet de démonstration.",
      es: "Texto original en inglés creado expresamente para este proyecto demostrativo.",
    },
  },
  {
    "id": "13-french-italian-product-localisation",
    "order": 13,
    "category": "translation",
    "title": {
      "it": "Localizzazione FR → IT: scheda prodotto per la casa",
      "en": "French-to-Italian product page localisation",
      "fr": "Localisation FR → IT : fiche produit pour la maison",
      "es": "Localización FR → IT: ficha de producto para el hogar"
    },
    "subtitle": {
      "it": "Descrizione, caratteristiche e brevi testi di interfaccia, con controllo terminologico",
      "en": "Description, specifications and Italian customer-facing microcopy",
      "fr": "Description, caractéristiques et microtextes pour le marché italien",
      "es": "Descripción, especificaciones y microtextos para el público italiano"
    },
    "brief": {
      "it": "Marchio francese immaginario di articoli per la casa che vuole presentare un prodotto sul proprio sito italiano.",
      "en": "A fictional French homeware brand needs a consistent Italian product listing.",
      "fr": "Une marque fictive française d’articles pour la maison prépare une fiche en italien.",
      "es": "Una marca francesa ficticia prepara una ficha de producto para Italia."
    },
    "startingMaterial": {
      "it": "Titolo, descrizione e specifiche in francese, con informazioni di prodotto non negoziabili.",
      "en": "French product title, description and technical specifications.",
      "fr": "Titre français, texte descriptif et caractéristiques techniques.",
      "es": "Título, descripción y características técnicas originales en francés."
    },
    "objective": {
      "it": "Adattare il linguaggio commerciale senza alterare misure, caratteristiche o dotazione.",
      "en": "Create natural Italian product copy without changing specifications or product promises.",
      "fr": "Rédiger une fiche italienne naturelle sans modifier les spécifications.",
      "es": "Redactar una ficha italiana natural sin alterar los datos técnicos."
    },
    "approach": {
      "it": "Terminologia coerente per arredi; controllo delle unità; riformulazione di descrizioni e pulsanti; confronto con il testo sorgente.",
      "en": "Create a terminology list; verify units; adapt descriptions and CTAs; compare against source.",
      "fr": "Glossaire, contrôle des unités, adaptation éditoriale et vérification de fidélité.",
      "es": "Glosario, revisión de unidades, adaptación de descripciones y verificación."
    },
    "keyDecisions": {
      "it": [
        "«Bras articulé» diventa «braccio snodabile», non «braccio articolato».",
        "«Ampoule non fournie» è reso esplicitamente come «lampadina non inclusa».",
        "Le specifiche restano separate dal testo persuasivo."
      ],
      "en": [
        "Translate «bras articulé» as natural Italian «braccio snodabile».",
        "State clearly when a bulb is not supplied.",
        "Keep technical specifications distinct from marketing copy."
      ],
      "fr": [
        "«Bras articulé» devient «braccio snodabile» dans l’usage italien.",
        "L’absence d’ampoule est indiquée sans ambiguïté.",
        "Les données techniques restent séparées du texte promotionnel."
      ],
      "es": [
        "«Bras articulé» se adapta a «braccio snodabile».",
        "Se especifica que la bombilla no está incluida.",
        "Se diferencian prestaciones reales y lenguaje comercial."
      ]
    },
    "deliverable": {
      "it": "Scheda FR → IT completa con tabella di confronto, glossario e note; documento 17.",
      "en": "French/Italian comparison sheet with glossary and editorial notes; document 17.",
      "fr": "Fiche comparative français/italien avec glossaire et notes ; document 17.",
      "es": "Ficha comparativa francés/italiano con glosario y notas; documento 17."
    },
    "comparison": {
      "sourceLang": "FR",
      "targetLang": "IT",
      "sourceText": "Une lumière douce pour accompagner vos moments de lecture. Son bras articulé permet d’orienter l’éclairage selon vos besoins. Ampoule non fournie.",
      "literalText": "Una luce morbida per accompagnare i vostri momenti di lettura. Il suo braccio articolato permette di orientare l'illuminazione secondo i vostri bisogni. Bulbo non fornito.",
      "localizedText": "Una luce delicata per i tuoi momenti di lettura. Il braccio snodabile permette di orientare il fascio luminoso secondo le tue esigenze. Lampadina non inclusa.",
      "notes": {
        "it": "Registro diretto coerente, collocazioni naturali e specifica tecnica non ambigua.",
        "en": "Natural Italian collocations and clear equipment information.",
        "fr": "Collocations naturelles et précision des informations produit.",
        "es": "Expresiones naturales y precisión técnica."
      }
    }
  ,
    disclaimer: DEMO_DISCLAIMER
  },
  {
    "id": "14-spanish-italian-existing-customer-email",
    "order": 14,
    "category": "translation",
    "title": {
      "it": "Adattamento ES → IT: email a un cliente esistente",
      "en": "Spanish-to-Italian email for an existing customer",
      "fr": "Adaptation ES → IT : e-mail à un client existant",
      "es": "Adaptación ES → IT: correo a un cliente existente"
    },
    "subtitle": {
      "it": "Una comunicazione di assistenza nel quadro di un rapporto già avviato",
      "en": "Professional customer correspondence, not prospecting",
      "fr": "Correspondance professionnelle, sans prospection commerciale",
      "es": "Correspondencia profesional sin captación de clientes"
    },
    "brief": {
      "it": "Un fornitore spagnolo immaginario risponde a un cliente italiano già attivo chiedendo un riscontro su una proposta precedentemente inviata.",
      "en": "A fictional Spanish supplier follows up with an existing Italian customer about a previously requested proposal.",
      "fr": "Un fournisseur espagnol fictif écrit à un client italien déjà acquis au sujet d’une proposition demandée.",
      "es": "Un proveedor español ficticio escribe a un cliente italiano ya existente sobre una propuesta solicitada."
    },
    "startingMaterial": {
      "it": "Messaggio di follow-up in spagnolo, con richiesta di conferma e disponibilità a chiarire le informazioni.",
      "en": "Spanish-language service follow-up message requiring an Italian version.",
      "fr": "Message espagnol de suivi, à traduire en italien.",
      "es": "Correo de seguimiento en español destinado a un cliente italiano."
    },
    "objective": {
      "it": "Mantenere cortesia e chiarezza, evitando toni pressanti o richieste non previste nel messaggio originale.",
      "en": "Preserve a polite, neutral tone without turning support follow-up into cold outreach.",
      "fr": "Préserver un ton courtois, sans prospection ni insistance excessive.",
      "es": "Mantener un tono profesional y cercano sin presión comercial."
    },
    "approach": {
      "it": "Analisi del rapporto già esistente, forma di cortesia italiana, scelta dell’oggetto e verifica dell’azione richiesta.",
      "en": "Review customer relationship, Italian form of address, subject line and next action.",
      "fr": "Analyse du lien client, des formules italiennes et de l’action attendue.",
      "es": "Análisis del contexto, fórmulas italianas y acción solicitada."
    },
    "keyDecisions": {
      "it": [
        "«Nos ponemos en contacto» è reso con «Le scriviamo», senza preamboli superflui.",
        "Si mantiene il riferimento alla proposta già inviata.",
        "Il messaggio rimane rivolto a un cliente già esistente: non è una comunicazione a freddo."
      ],
      "en": [
        "Prefer natural Italian «Le scriviamo» over a literal business calque.",
        "Preserve the reference to a previously submitted proposal.",
        "Keep the message within existing-customer service, not prospecting."
      ],
      "fr": [
        "Choisir une formule italienne sobre et professionnelle.",
        "Respecter la référence à la proposition déjà transmise.",
        "Ne pas transformer le suivi en prospection."
      ],
      "es": [
        "Evitar un calco de «nos ponemos en contacto».",
        "Mantener la referencia a una propuesta ya enviada.",
        "No convertir el seguimiento en una acción de captación."
      ]
    },
    "deliverable": {
      "it": "Email ES → IT con oggetto, corpo, saluti e nota redazionale; documento 18.",
      "en": "Spanish-to-Italian email draft with subject, message and editorial notes; document 18.",
      "fr": "Courriel ES → IT avec objet et notes linguistiques ; document 18.",
      "es": "Correo ES → IT con asunto y notas lingüísticas; documento 18."
    },
    "comparison": {
      "sourceLang": "ES",
      "targetLang": "IT",
      "sourceText": "Buenos días, nos ponemos en contacto para saber si ha tenido ocasión de revisar la propuesta enviada la semana pasada. Estaremos encantados de aclarar cualquier detalle.",
      "literalText": "Buongiorno, ci mettiamo in contatto per sapere se ha avuto occasione di rivedere la proposta inviata la settimana passata. Saremo incantati di chiarire qualsiasi dettaglio.",
      "localizedText": "Buongiorno, le scriviamo per sapere se ha avuto modo di esaminare la proposta inviata la scorsa settimana. Restiamo a disposizione per qualsiasi chiarimento.",
      "notes": {
        "it": "Sintassi più naturale, tono professionale misurato e riferimento al rapporto già esistente.",
        "en": "Natural Italian business tone and a restrained customer-service register.",
        "fr": "Registre professionnel italien fluide et discret.",
        "es": "Registro italiano profesional, natural y sin presión comercial."
      }
    }
  ,
    disclaimer: DEMO_DISCLAIMER
  },
  {
    "id": "15-italian-written-customer-care",
    "order": 15,
    "category": "backoffice",
    "title": {
      "it": "Assistenza clienti scritta: tre richieste in italiano",
      "en": "Italian customer email drafts: three fictional cases",
      "fr": "Relation client écrite en italien : trois situations",
      "es": "Atención escrita en italiano: tres situaciones"
    },
    "subtitle": {
      "it": "Tre email simulate, tre risposte complete e un registro delle attività",
      "en": "Three complete Italian draft replies and a case log",
      "fr": "Tri des demandes, réponses et règles de validation",
      "es": "Clasificación, respuestas y criterios de escalado"
    },
    "brief": {
      "it": "Scenario di lavoro: un piccolo negozio online deve gestire richieste su disponibilità, ordini e tempi di consegna da clienti esistenti.",
      "en": "Fictional small online shop needs organised Italian replies to current customers about stock, orders and delivery.",
      "fr": "Boutique en ligne fictive : demandes de clients italiens sur stock, commandes et livraison.",
      "es": "Tienda online ficticia: consultas de clientes italianos sobre stock, pedidos y entregas."
    },
    "startingMaterial": {
      "it": "Tre richieste simulate e riferimenti di articolo e ordine; disponibilità e data di consegna non sono confermate.",
      "en": "Three synthetic customer messages, approved product details and escalation instructions.",
      "fr": "Trois e-mails fictifs, informations approuvées et consignes d’escalade.",
      "es": "Tres correos ficticios, información aprobada y reglas de consulta."
    },
    "objective": {
      "it": "Preparare risposte attendibili, indicare il prossimo passo e non promettere disponibilità o consegne non verificate.",
      "en": "Provide accurate Italian responses, next steps and no unsupported commitments.",
      "fr": "Préparer des réponses italiennes exactes, sans engagement non vérifié.",
      "es": "Preparar respuestas italianas claras y sin promesas no confirmadas."
    },
    "approach": {
      "it": "Classificazione per urgenza, controllo delle fonti, bozza di risposta, approvazione e aggiornamento del registro ticket.",
      "en": "Triage, verify approved data, draft a reply, obtain authorisation and update the ticket log.",
      "fr": "Trier, vérifier, rédiger, demander validation et actualiser le suivi.",
      "es": "Clasificar, comprobar, redactar, validar y actualizar el registro."
    },
    "keyDecisions": {
      "it": [
        "Non comunicare una data di consegna senza conferma del referente autorizzato.",
        "Una domanda su fatture o contabilità viene inoltrata: non viene gestita dall’assistente.",
        "Il registro conserva solo i dati operativi necessari."
      ],
      "en": [
        "Never invent a delivery date.",
        "Refer billing/accounting issues to the responsible team; do not handle them.",
        "Record only necessary operational data."
      ],
      "fr": [
        "Ne jamais inventer une date de livraison.",
        "Rediriger les questions de facturation au service compétent.",
        "Ne conserver que les données nécessaires."
      ],
      "es": [
        "No inventar fechas de entrega.",
        "Derivar cuestiones contables o de facturación al responsable.",
        "Registrar únicamente datos necesarios."
      ]
    },
    "deliverable": {
      "it": "Tre email complete da approvare, un registro con tre pratiche e le verifiche richieste; documento 11.",
      "en": "Three full unsent Italian customer emails, case log and approval checklist; document 11.",
      "fr": "Trois courriels italiens complets non envoyés, registre et vérifications ; document 11.",
      "es": "Tres correos completos en italiano sin enviar, registro y controles; documento 11."
    },
    "tableData": {
      "headers": {
            "it": [
                  "Pratica",
                  "Richiesta simulata",
                  "Passaggio della risposta preparata"
            ],
            "en": [
                  "Case",
                  "Fictional customer enquiry",
                  "Summary of the Italian draft reply"
            ],
            "fr": [
                  "Dossier",
                  "Demande fictive",
                  "Résumé du courriel rédigé en italien"
            ],
            "es": [
                  "Caso",
                  "Consulta ficticia",
                  "Resumen de la respuesta italiana"
            ]
      },
      "rows": {
            "it": [
                  [
                        "CC-101",
                        "Disponibilità del quaderno QA-120",
                        "«Stiamo verificando sia la disponibilità sia la possibilità di ritirarlo in negozio.»"
                  ],
                  [
                        "CC-102",
                        "Consegna dell'ordine OR-204",
                        "«Al momento non abbiamo una data di consegna confermata.»"
                  ],
                  [
                        "CC-103",
                        "Chiarimento su una fattura",
                        "«La sua richiesta richiede una verifica da parte dell'ufficio competente.»"
                  ]
            ],
            "en": [
                  [
                        "CC-101",
                        "Stock and collection",
                        "The reply explains that stock and collection options still need confirmation."
                  ],
                  [
                        "CC-102",
                        "Delivery date",
                        "The reply does not invent a delivery date; an update requires verification."
                  ],
                  [
                        "CC-103",
                        "Invoice query",
                        "The reply refers the question to authorised administrative staff."
                  ]
            ],
            "fr": [
                  [
                        "CC-101",
                        "Disponibilité et retrait",
                        "La réponse indique que la disponibilité et le retrait doivent être confirmés."
                  ],
                  [
                        "CC-102",
                        "Date de livraison",
                        "La réponse n'invente aucun délai et prévoit une vérification."
                  ],
                  [
                        "CC-103",
                        "Question sur une facture",
                        "La réponse transmet la demande au service administratif compétent."
                  ]
            ],
            "es": [
                  [
                        "CC-101",
                        "Disponibilidad y recogida",
                        "La respuesta indica que deben comprobarse la disponibilidad y la recogida."
                  ],
                  [
                        "CC-102",
                        "Fecha de entrega",
                        "La respuesta no inventa fechas y exige una comprobación."
                  ],
                  [
                        "CC-103",
                        "Consulta sobre una factura",
                        "La respuesta deriva la solicitud al departamento autorizado."
                  ]
            ]
      }
}
  ,
    disclaimer: DEMO_DISCLAIMER
  },
  {
    "id": "16-order-data-and-price-list",
    "order": 16,
    "category": "backoffice",
    "title": {
      "it": "Back office: inserimento ordini e controllo listini",
      "en": "Operational back office: order entry and price-sheet checks",
      "fr": "Back-office opérationnel : saisie de commandes et contrôle des tarifs",
      "es": "Back office operativo: registro de pedidos y control de tarifas"
    },
    "subtitle": {
      "it": "Dati simulati, controlli e segnalazione delle anomalie",
      "en": "Synthetic order data, before/after checks and an exception log",
      "fr": "Données fictives, contrôles de cohérence et journal d’anomalies",
      "es": "Datos ficticios, controles de coherencia y registro de incidencias"
    },
    "brief": {
      "it": "Un'attività immaginaria deve trascrivere ordini già acquisiti e mantenere coerenti i prezzi pubblicati con un listino approvato.",
      "en": "A fictional business needs to log existing orders and check published prices against an approved list.",
      "fr": "Entreprise fictive : enregistrer des commandes reçues et contrôler les tarifs affichés.",
      "es": "Empresa ficticia: registrar pedidos recibidos y comprobar precios publicados."
    },
    "startingMaterial": {
      "it": "Ordini ricevuti, foglio di inserimento, catalogo e listino validato dal titolare.",
      "en": "Received orders, entry sheet, catalogue and business-owner-approved price list.",
      "fr": "Bons de commande, tableau de suivi, catalogue et tarif validé.",
      "es": "Pedidos recibidos, hoja de registro, catálogo y lista aprobada."
    },
    "objective": {
      "it": "Diminuire errori di trascrizione e segnalare discrepanze senza modificare autonomamente le condizioni commerciali.",
      "en": "Flag discrepancies without independently changing approved commercial terms.",
      "fr": "Repérer les écarts sans modifier les conditions commerciales validées.",
      "es": "Detectar diferencias sin cambiar condiciones comerciales autorizadas."
    },
    "approach": {
      "it": "Campi obbligatori, controllo SKU e prezzo, evidenza di scostamenti, riepilogo e richiesta di conferma.",
      "en": "Validate required fields, match SKUs and prices, flag inconsistencies and request approval.",
      "fr": "Contrôler les références, les tarifs et les champs requis ; signaler les écarts.",
      "es": "Comprobar códigos y precios, marcar diferencias y pedir validación."
    },
    "keyDecisions": {
      "it": [
        "Il prezzo di listino non viene modificato senza autorizzazione.",
        "Le anomalie vengono segnalate prima dell'invio di un preventivo.",
        "Nessuna emissione di fatture o registrazione contabile."
      ],
      "en": [
        "Never change approved prices without permission.",
        "Flag discrepancies before a quotation is sent.",
        "No invoices or accounting entries are produced."
      ],
      "fr": [
        "Aucun changement de prix sans validation.",
        "Signaler les écarts avant l’envoi d’un devis.",
        "Aucune facturation ni comptabilité."
      ],
      "es": [
        "No cambiar precios sin autorización.",
        "Comunicar las diferencias antes de enviar presupuestos.",
        "Sin emisión de facturas ni contabilidad."
      ]
    },
    "deliverable": {
      "it": "Registro ordini e verifica prezzi, con esempio prima/dopo; vedi documenti 13 e 19.",
      "en": "Order log and price verification sheet; see documents 13 and 19.",
      "fr": "Suivi des commandes et vérification des tarifs ; documents 13 et 19.",
      "es": "Registro de pedidos y control de precios; documentos 13 y 19."
    },
    "tableData": {
      "headers": {
        "it": [
          "SKU",
          "Listino approvato",
          "Testo in bozza",
          "Esito"
        ],
        "en": [
          "SKU",
          "Approved list",
          "Draft listing",
          "Check"
        ],
        "fr": [
          "Réf.",
          "Tarif validé",
          "Brouillon",
          "Contrôle"
        ],
        "es": [
          "SKU",
          "Precio aprobado",
          "Borrador",
          "Resultado"
        ]
      },
      "rows": {
        "it": [
          [
            "OG-10",
            "€ 14,90",
            "€ 14,90",
            "Coerente"
          ],
          [
            "OG-11",
            "€ 19,90",
            "€ 19,00",
            "Verificare"
          ],
          [
            "OG-12",
            "€ 24,00",
            "€ 24,00",
            "Coerente"
          ]
        ],
        "en": [
          [
            "OG-10",
            "€14.90",
            "€14.90",
            "Match"
          ],
          [
            "OG-11",
            "€19.90",
            "€19.00",
            "Check"
          ],
          [
            "OG-12",
            "€24.00",
            "€24.00",
            "Match"
          ]
        ],
        "fr": [
          [
            "OG-10",
            "14,90 €",
            "14,90 €",
            "Conforme"
          ],
          [
            "OG-11",
            "19,90 €",
            "19,00 €",
            "À vérifier"
          ],
          [
            "OG-12",
            "24,00 €",
            "24,00 €",
            "Conforme"
          ]
        ],
        "es": [
          [
            "OG-10",
            "14,90 €",
            "14,90 €",
            "Correcto"
          ],
          [
            "OG-11",
            "19,90 €",
            "19,00 €",
            "Revisar"
          ],
          [
            "OG-12",
            "24,00 €",
            "24,00 €",
            "Correcto"
          ]
        ]
      }
    }
  ,
    disclaimer: DEMO_DISCLAIMER
  },
  {
    "id": "17-online-course-operations",
    "order": 17,
    "category": "backoffice",
    "title": {
      "it": "Supporto organizzativo per un corso online",
      "en": "Online course: learner support and file organisation",
      "fr": "Cours en ligne : organisation et communication",
      "es": "Curso online: organización y comunicación"
    },
    "subtitle": {
      "it": "Email di benvenuto, struttura cartelle, FAQ e messaggi operativi",
      "en": "Welcome email, folder structure, FAQs and participant updates",
      "fr": "E-mail d’accueil, dossiers, FAQ et messages aux participants",
      "es": "Correo de bienvenida, carpetas, preguntas frecuentes y avisos"
    },
    "brief": {
      "it": "Un formatore immaginario organizza un corso per partecipanti italiani e deve coordinare messaggi e materiali approvati.",
      "en": "A fictional educator offers a course to Italian learners and needs organised communications and files.",
      "fr": "Formateur fictif proposant un cours à des apprenants italiens.",
      "es": "Formador ficticio que ofrece un curso a participantes italianos."
    },
    "startingMaterial": {
      "it": "Programma, calendario del corso, accessi forniti dal responsabile e file di lezione non organizzati.",
      "en": "Course schedule, approved access steps and disorganised lesson files.",
      "fr": "Planning, instructions d’accès approuvées et documents de formation dispersés.",
      "es": "Calendario, instrucciones de acceso aprobadas y materiales dispersos."
    },
    "objective": {
      "it": "Rendere le istruzioni chiare ai partecipanti, ridurre file duplicati e distinguere assistenza organizzativa e insegnamento.",
      "en": "Clarify access and communication without taking responsibility for teaching or course design.",
      "fr": "Clarifier l’accès et la communication, sans dispenser de cours.",
      "es": "Aclarar el acceso y la comunicación, sin impartir clases."
    },
    "approach": {
      "it": "Organizzazione dei moduli, regole per i nomi dei file, bozza di benvenuto e FAQ basate sulle indicazioni del formatore.",
      "en": "Structure files, draft Italian welcome copy, prepare approved FAQ and escalation rules.",
      "fr": "Classer les fichiers, rédiger l’accueil italien et préparer une FAQ validée.",
      "es": "Organizar archivos, redactar bienvenida en italiano y FAQ aprobadas."
    },
    "keyDecisions": {
      "it": [
        "Non inventare link o scadenze: inserire solo dati verificati.",
        "Le domande didattiche sono inoltrate al docente.",
        "I dati dei partecipanti sono trattati solo secondo istruzioni concordate."
      ],
      "en": [
        "Do not invent links or deadlines.",
        "Refer academic questions to the instructor.",
        "Handle participant data only as instructed."
      ],
      "fr": [
        "Ne jamais inventer de liens ou d’échéances.",
        "Transmettre les questions pédagogiques au formateur.",
        "Limiter le traitement des données."
      ],
      "es": [
        "No inventar enlaces ni plazos.",
        "Derivar preguntas académicas al docente.",
        "Respetar los permisos sobre datos."
      ]
    },
    "deliverable": {
      "it": "Email di benvenuto, lista di controllo degli accessi e procedura di supporto organizzativo; documento 15.",
      "en": "Welcome-email template, access checklist and support procedure; document 15.",
      "fr": "Modèle d’e-mail d’accueil et checklist ; document 15.",
      "es": "Correo de bienvenida y lista de control; documento 15."
    },
    "comparison": {
      "sourceLang": "IT",
      "targetLang": "IT (revised)",
      "sourceText": "Corso pronto. Guarda i file nella cartella, trovi tutto lì. Se hai problemi scrivici.",
      "literalText": "Corso pronto. Guarda i file nella cartella, trovi tutto lì. Se hai problemi scrivici.",
      "localizedText": "Benvenuta e benvenuto al corso! Prima della lezione, consulta la cartella dei materiali condivisa dal docente. Se non riesci ad accedere, rispondi a questa email indicando il problema: verificheremo le istruzioni e ti aggiorneremo.",
      "notes": {
        "it": "Da un avviso vago a istruzioni verificabili, senza inventare link o promettere assistenza tecnica illimitata.",
        "en": "Clear Italian instructions; no invented links or unsupported commitments.",
        "fr": "Consignes italiennes claires, sans lien fictif ni promesse disproportionnée.",
        "es": "Instrucciones claras en italiano, sin enlaces inventados ni promesas excesivas."
      }
    }
  ,
    disclaimer: DEMO_DISCLAIMER
  },
  {
    "id": "18-product-catalogue-copy-review",
    "order": 18,
    "category": "writing",
    "title": {
      "it": "Cataloghi e schede prodotto: revisione editoriale",
      "en": "Italian catalogue and product-copy editing",
      "fr": "Catalogues et fiches produits : révision en italien",
      "es": "Catálogos y fichas: revisión editorial en italiano"
    },
    "subtitle": {
      "it": "Confronto prima/dopo, terminologia uniforme e verifica delle informazioni approvate",
      "en": "Before/after product copy, terminology and approved information",
      "fr": "Avant/après, terminologie et informations vérifiées",
      "es": "Antes/después, terminología e información aprobada"
    },
    "brief": {
      "it": "Un piccolo marchio immaginario deve rendere coerenti i testi di schede prodotto, listino e FAQ.",
      "en": "A fictional small brand needs consistent Italian product descriptions, price-list labels and FAQs.",
      "fr": "Marque fictive : harmoniser les fiches produits, les tarifs et la FAQ en italien.",
      "es": "Marca ficticia: unificar fichas, lista de precios y preguntas frecuentes en italiano."
    },
    "startingMaterial": {
      "it": "Descrizioni italiane vaghe, titoli non uniformi e schede con informazioni ripetute.",
      "en": "Vague Italian descriptions, inconsistent titles and repeated information.",
      "fr": "Descriptions italiennes imprécises et titres incohérents.",
      "es": "Descripciones italianas vagas y títulos inconsistentes."
    },
    "objective": {
      "it": "Aumentare chiarezza e uniformità, senza inventare caratteristiche né modificare prezzi.",
      "en": "Improve clarity and consistency without inventing specifications or changing prices.",
      "fr": "Clarifier les textes sans inventer de caractéristiques ni changer les prix.",
      "es": "Mejorar claridad y coherencia sin inventar prestaciones ni cambiar precios."
    },
    "approach": {
      "it": "Inventario dei campi, schema stilistico, riscrittura del testo, verifica con scheda tecnica e controllo versioni.",
      "en": "Audit fields, establish a style sheet, rewrite Italian copy and verify against approved product facts.",
      "fr": "Relever les champs, fixer le style, réécrire et vérifier les données produit.",
      "es": "Revisar campos, crear guía de estilo, reescribir y contrastar datos."
    },
    "keyDecisions": {
      "it": [
        "«Molto bello» è sostituito da una descrizione verificabile.",
        "Dimensioni e materiali non vengono dedotti dal contesto.",
        "I listini restano quelli approvati dal responsabile."
      ],
      "en": [
        "Replace empty praise with specific, verifiable information.",
        "Never infer measurements or materials.",
        "Use only business-owner-approved prices."
      ],
      "fr": [
        "Remplacer les adjectifs vagues par des informations vérifiables.",
        "Ne jamais deviner les dimensions ou matériaux.",
        "Conserver les tarifs validés."
      ],
      "es": [
        "Sustituir elogios vacíos por información verificable.",
        "No inventar medidas ni materiales.",
        "Respetar los precios aprobados."
      ]
    },
    "deliverable": {
      "it": "Scheda prodotto revisionata, indicazioni stilistiche e riepilogo delle incongruenze; documento 19.",
      "en": "Revised Italian listing, terminology sheet and discrepancy report; document 19.",
      "fr": "Fiche italienne révisée, glossaire et relevé des incohérences ; document 19.",
      "es": "Ficha italiana revisada, glosario y control de diferencias; documento 19."
    },
    "comparison": {
      "sourceLang": "IT (draft)",
      "targetLang": "IT (revised)",
      "sourceText": "Portaoggetti con molti utilizzi. Molto bello, resistente, perfetto per tutti.",
      "literalText": "Portaoggetti con molti utilizzi. Molto bello, resistente, perfetto per tutti.",
      "localizedText": "Organizer da scrivania a tre scomparti, pensato per raccogliere piccoli accessori e tenere ordinato lo spazio di lavoro.",
      "notes": {
        "it": "Una descrizione specifica sostituisce giudizi vaghi; i tre scomparti derivano dalla scheda prodotto sintetica approvata.",
        "en": "A specific, factual description replaces unsupported superlatives.",
        "fr": "Des informations concrètes remplacent les superlatifs sans fondement.",
        "es": "Información concreta en lugar de elogios no comprobables."
      }
    }
  ,
    disclaimer: DEMO_DISCLAIMER
  }
];

export interface PortfolioDocument {
  num: string;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  category: "translation" | "research" | "backoffice" | "writing" | "web";
  url: string;
}

export const PORTFOLIO_DOCUMENTS: PortfolioDocument[] = [
  {
    num: "01",
    title: { it: "Sito di arredamento: localizzazione EN → IT", en: "Interior design website: EN → IT localisation", fr: "Site d’aménagement intérieur : localisation EN → IT", es: "Sitio de interiorismo: localización EN → IT" },
    subtitle: { it: "Titoli, descrizioni e inviti all’azione: testo inglese e adattamento italiano", en: "Website headlines, descriptions and calls to action, shown side by side", fr: "Titres, descriptions et appels à l’action : anglais et italien en regard", es: "Títulos, descripciones y llamadas a la acción en inglés y en italiano" },
    category: "translation",
    url: "/portfolio-documenti/doc-01-localizzazione-interior-design.html",
  },
  {
    num: "02",
    title: { it: "Estratto economico-commerciale: traduzione EN → IT", en: "Commercial report excerpt: EN → IT translation", fr: "Extrait de rapport économique : traduction EN → IT", es: "Extracto económico-comercial: traducción EN → IT" },
    subtitle: { it: "Testo originale, traduzione e glossario; valori interamente inventati", en: "Original text, translated excerpt and glossary; all figures fictional", fr: "Texte original, traduction et glossaire ; chiffres entièrement fictifs", es: "Texto original, traducción y glosario; cifras totalmente ficticias" },
    category: "translation",
    url: "/portfolio-documenti/doc-02-report-finanziario-commerciale.html",
  },
  {
    num: "03",
    title: { it: "Estratto clinico simulato: traduzione EN → IT", en: "Fictional clinical excerpt: EN → IT translation", fr: "Extrait clinique fictif : traduction EN → IT", es: "Fragmento clínico ficticio: traducción EN → IT" },
    subtitle: { it: "Esempio bilingue e terminologico, non destinato all'uso clinico", en: "Bilingual linguistic sample, not for clinical use", fr: "Exemple bilingue et terminologique, sans usage clinique", es: "Ejemplo bilingüe y terminológico, no apto para uso clínico" },
    category: "translation",
    url: "/portfolio-documenti/doc-03-abstract-clinico-farmacologico.html",
  },
  {
    num: "04",
    title: { it: "Testi per software: localizzazione EN → IT", en: "Software interface and help copy: EN → IT", fr: "Textes de logiciel et d'aide : EN → IT", es: "Textos de software y ayuda: EN → IT" },
    subtitle: { it: "Stringhe, messaggi di errore e un estratto di guida; nessuno sviluppo tecnico", en: "Interface messages and a guide excerpt; no software development", fr: "Messages d'interface et extrait de guide, sans développement", es: "Mensajes de interfaz y fragmento de guía; sin desarrollo técnico" },
    category: "translation",
    url: "/portfolio-documenti/doc-04-guida-software-saas-cloud.html",
  },
  {
    num: "05",
    title: { it: "Due clausole di riservatezza: traduzione EN → IT", en: "Two confidentiality clauses: EN → IT", fr: "Deux clauses de confidentialité : traduction EN → IT", es: "Dos cláusulas de confidencialidad: traducción EN → IT" },
    subtitle: { it: "Testo originale e proposta italiana con note; non è una traduzione giurata", en: "Source clauses and Italian translation notes; not a sworn translation", fr: "Clauses originales, version italienne et notes ; non assermenté", es: "Cláusulas originales, versión italiana y notas; no es traducción jurada" },
    category: "translation",
    url: "/portfolio-documenti/doc-05-accordo-riservatezza-nda.html",
  },
  {
    num: "06",
    title: { it: "Microtesti per interfacce: quattro lingue a confronto", en: "Interface microcopy in four languages", fr: "Microtextes d'interface en quatre langues", es: "Textos breves de interfaz en cuatro idiomas" },
    subtitle: { it: "Pulsanti, messaggi, errori e note editoriali; nessuna certificazione WCAG", en: "Buttons, messages and editorial notes; no accessibility certification", fr: "Boutons, messages et notes éditoriales ; sans certification d'accessibilité", es: "Botones, mensajes y notas editoriales; sin certificación de accesibilidad" },
    category: "writing",
    url: "/portfolio-documenti/doc-06-microcopy-design-system.html",
  },
  {
    num: "07",
    title: { it: "Confronto fornitori: tabella e sintesi dimostrativa", en: "Supplier comparison: illustrative table and summary", fr: "Comparaison de fournisseurs : tableau et synthèse fictifs", es: "Comparación de proveedores: tabla y síntesis ficticias" },
    subtitle: { it: "Quattro opzioni inventate, calcoli, criteri e dati da verificare prima della scelta", en: "Four fictional options, calculations, criteria and checks", fr: "Quatre options fictives, calculs, critères et vérifications", es: "Cuatro opciones ficticias, cálculos, criterios y comprobaciones" },
    category: "research",
    url: "/portfolio-documenti/doc-07-benchmark-fornitori-logistica.html",
  },
  {
    num: "08",
    title: { it: "Confronto tra offerte professionali: ricerca informativa", en: "Comparing service offers: informational research", fr: "Comparaison d'offres de services : recherche documentaire", es: "Comparación de servicios: investigación informativa" },
    subtitle: { it: "Quattro profili immaginari e una tabella compilata, senza dati di mercato reali", en: "Four fictional profiles and a completed table, not real market data", fr: "Quatre profils fictifs et un tableau rempli, sans données réelles", es: "Cuatro perfiles ficticios y una tabla cumplimentada, sin datos reales" },
    category: "research",
    url: "/portfolio-documenti/doc-08-analisi-competitiva-benchmark.html",
  },
  {
    num: "09",
    title: { it: "Posta elettronica: registro e procedura operativa", en: "Email handling: tracking log and operating procedure", fr: "Gestion des courriels : registre et procédure", es: "Gestión del correo: registro y procedimiento" },
    subtitle: { it: "Sei email simulate, due risposte complete e un riepilogo per il responsabile", en: "Six sample emails, two complete draft replies and a management summary", fr: "Six courriels fictifs, deux réponses rédigées et un bilan", es: "Seis correos ficticios, dos respuestas completas y un resumen" },
    category: "backoffice",
    url: "/portfolio-documenti/doc-09-procedura-operativa-backoffice.html",
  },
  {
    num: "10",
    title: { it: "Revisione editoriale: comunicato prima e dopo", en: "Editorial revision: business notice before and after", fr: "Révision d'un communiqué : avant et après", es: "Revisión editorial de un comunicado: antes y después" },
    subtitle: { it: "Bozza, testo riscritto e tabella delle correzioni, senza promesse inventate", en: "Original, edited text and change log, without invented promises", fr: "Version initiale, révision et tableau des changements", es: "Borrador, texto revisado y tabla de cambios, sin promesas inventadas" },
    category: "writing",
    url: "/portfolio-documenti/doc-10-scheda-revisione-editoriale.html",
  },

  {
    num: "11",
    title: { it: "Assistenza clienti: tre email e tre risposte complete", en: "Written customer support: three enquiries and full draft replies", fr: "Relation client écrite : trois demandes et réponses complètes", es: "Atención escrita al cliente: tres consultas y respuestas completas" },
    subtitle: { it: "Richieste simulate, risposte professionali scritte per esteso e registro di lavorazione", en: "Fictional enquiries, three complete Italian draft replies and a case log", fr: "Demandes fictives, trois réponses rédigées en italien et tableau de suivi", es: "Consultas ficticias, tres respuestas completas en italiano y registro de seguimiento" },
    category: "backoffice",
    url: "/portfolio-documenti/doc-11-customer-care-email.html",
  },
  {
    num: "12",
    title: { it: "Gestione email e agenda: esempio settimanale", en: "Managing email and appointments: a weekly sample", fr: "Gestion des courriels et de l’agenda : exemple hebdomadaire", es: "Gestión del correo y la agenda: ejemplo semanal" },
    subtitle: { it: "Piano settimanale, priorità e bozza di conferma su dati inventati", en: "Illustrative weekly schedule, priority list and appointment confirmation draft", fr: "Planning hebdomadaire, priorités et brouillon de confirmation fictifs", es: "Agenda semanal, prioridades y borrador de confirmación ficticios" },
    category: "backoffice",
    url: "/portfolio-documenti/doc-12-gestione-email-agenda.html",
  },
  {
    num: "13",
    title: { it: "Back office: registro ordini e verifica listini", en: "Back office: order records and price-list checks", fr: "Back-office : suivi des commandes et contrôle des tarifs", es: "Back office: registro de pedidos y revisión de precios" },
    subtitle: { it: "Schede cliente, dati d’ordine e anomalie da segnalare prima dell’approvazione", en: "Customer records, order details and pricing discrepancies requiring approval", fr: "Fiches clients, données de commande et écarts à faire valider", es: "Fichas de clientes, datos de pedidos y diferencias por validar" },
    category: "backoffice",
    url: "/portfolio-documenti/doc-13-crm-ordini-listini.html",
  },
  {
    num: "14",
    title: { it: "Organizzazione di documenti e archivi digitali", en: "Digital document and archive organisation", fr: "Organisation de documents et d’archives numériques", es: "Organización de documentos y archivos digitales" },
    subtitle: { it: "Esempio di cartelle, regole per i nomi dei file e controllo degli accessi", en: "Sample folders, file-naming rules and access permissions", fr: "Arborescence, règles de nommage et droits d’accès", es: "Estructura de carpetas, reglas para nombres de archivos y permisos" },
    category: "backoffice",
    url: "/portfolio-documenti/doc-14-archivi-drive.html",
  },
  {
    num: "15",
    title: { it: "Segreteria organizzativa per un corso online", en: "Administrative support for an online course", fr: "Secrétariat organisationnel pour une formation en ligne", es: "Apoyo organizativo para un curso en línea" },
    subtitle: { it: "Email per partecipanti già iscritti, materiali, FAQ e lista di controllo", en: "Messages to registered participants, materials, FAQs and checklist", fr: "Messages aux personnes inscrites, supports, FAQ et liste de contrôle", es: "Mensajes a participantes inscritos, materiales, preguntas frecuentes y lista de control" },
    category: "backoffice",
    url: "/portfolio-documenti/doc-15-corso-online-supporto.html",
  },
  {
    num: "16",
    title: { it: "Contenuti web EN → IT: tre sezioni complete", en: "Website copy EN → IT: three complete sections", fr: "Contenus web EN → IT : trois sections complètes", es: "Textos web EN → IT: tres secciones completas" },
    subtitle: { it: "Presentazione, descrizione del servizio e invito al preventivo a fronte", en: "Original and adapted introduction, service copy and enquiry section", fr: "Présentation, description du service et appel à l'action en regard", es: "Presentación, descripción del servicio y llamada a la acción comparadas" },
    category: "translation",
    url: "/portfolio-documenti/doc-16-en-it-localizzazione.html",
  },
  {
    num: "17",
    title: { it: "Scheda prodotto FR → IT: originale e traduzione", en: "Product description FR → IT: source and translation", fr: "Fiche produit FR → IT : original et traduction", es: "Ficha de producto FR → IT: original y traducción" },
    subtitle: { it: "Descrizione completa, specifiche, avvertenza e glossario per un prodotto inventato", en: "Full description, specifications, warning and glossary for a fictional product", fr: "Description, caractéristiques, avertissement et glossaire fictifs", es: "Descripción, especificaciones, advertencia y glosario ficticios" },
    category: "translation",
    url: "/portfolio-documenti/doc-17-fr-it-scheda-prodotto.html",
  },
  {
    num: "18",
    title: { it: "Email a un cliente esistente: traduzione ES → IT", en: "Existing-customer email: ES → IT translation", fr: "Courriel à une cliente existante : traduction ES → IT", es: "Correo a una clienta actual: traducción ES → IT" },
    subtitle: { it: "Email completa in spagnolo e italiano, registro e note di adattamento", en: "Full Spanish and Italian emails, case log and translation notes", fr: "Courriels espagnol et italien complets, registre et choix linguistiques", es: "Correos completos en español e italiano, registro y notas" },
    category: "translation",
    url: "/portfolio-documenti/doc-18-es-it-email-commerciale.html",
  },
  {
    num: "19",
    title: { it: "Revisione di catalogo: scheda e controllo listino", en: "Catalogue editing: product copy and price-list checks", fr: "Révision de catalogue : fiche et contrôle des prix", es: "Revisión de catálogo: ficha y control de precios" },
    subtitle: { it: "Scheda prima/dopo, prezzi simulati, incongruenze e registro delle modifiche", en: "Before-and-after product copy, fictional prices and changes log", fr: "Fiche avant/après, prix fictifs et relevé des corrections", es: "Ficha antes/después, precios ficticios y registro de correcciones" },
    category: "writing",
    url: "/portfolio-documenti/doc-19-contenuti-cataloghi-listini.html",
  },
  {
    num: "20",
    title: { it: "Dal contatto al preventivo: un esempio del mio metodo", en: "From enquiry to quote: an example of my process", fr: "De la demande au devis : un exemple de ma méthode", es: "De la consulta al presupuesto: ejemplo de mi proceso" },
    subtitle: { it: "Richiesta simulata, proposta scritta, approvazioni e registro ore dei miei servizi", en: "Fictional enquiry, written proposal, approvals and time log for my own services", fr: "Demande fictive, proposition écrite, validations et relevé d’heures de mes services", es: "Consulta ficticia, propuesta escrita, autorizaciones y registro de horas de mis servicios" },
    category: "backoffice",
    url: "/portfolio-documenti/doc-20-richiesta-preventivo-workflow.html",
  },
  {
    num: "21",
    title: { it: "Pagina di presentazione: localizzazione dei testi EN → IT", en: "Landing page: EN → IT copy localisation", fr: "Page de présentation : localisation de textes EN → IT", es: "Página de presentación: localización de textos EN → IT" },
    subtitle: { it: "Titoli, descrizioni, FAQ e inviti all’azione: originale e riscrittura italiana", en: "Headings, service copy, FAQs and calls to action, with Italian revisions", fr: "Titres, descriptions, FAQ et appels à l’action : version italienne commentée", es: "Títulos, descripciones, preguntas frecuentes y llamadas a la acción: versión italiana comentada" },
    category: "web",
    url: "/portfolio-documenti/doc-21-landing-page-contenuti-en-it.html",
  },  { num: "22", title: { it: "Traduzione letteraria EN → IT: un racconto originale", en: "Literary translation EN → IT: an original short story", fr: "Traduction littéraire EN → IT : une nouvelle originale", es: "Traducción literaria EN → IT: relato original" },
    subtitle: { it: "Racconto in inglese e traduzione italiana integrale a fronte, con commenti stilistici", en: "Original English story and full Italian translation, with stylistic notes", fr: "Nouvelle anglaise originale et traduction italienne intégrale commentée", es: "Relato original en inglés y traducción italiana completa con notas de estilo" },
    category:"translation",url:"/portfolio-documenti/doc-22-traduzione-letteraria-en-it.html" },

];
