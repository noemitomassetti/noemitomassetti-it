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
  it: "Questo progetto è stato realizzato per mostrare concretamente il mio metodo di lavoro e non rappresenta un incarico commissionato da un cliente reale. Eventuali dati dimostrativi relativi a persone o clienti sono interamente sintetici. Quando vengono utilizzati materiali o informazioni di terzi, sono indicate la fonte e, ove applicabile, la relativa licenza o condizione di utilizzo.",
  en: "This case study was created to demonstrate my professional methodology and does not represent an engagement commissioned by an actual client. Any demonstrative data relating to persons or clients is entirely synthetic. Where third-party materials are used, the source and applicable license conditions are clearly specified.",
  fr: "Ce projet a été conçu pour illustrer concrètement ma méthode de travail et ne constitue pas une mission commandée par un client réel. Les éventuelles données relatives aux personnes ou aux clients sont entièrement synthétiques. Lorsque des ressources de tiers sont utilisées, la source et la licence correspondante sont mentionnées.",
  es: "Este proyecto se ha elaborado para mostrar de manera práctica mi metodología de trabajo y no representa un encargo de un cliente real. Los datos demostrativos sobre personas o clientes son completamente sintéticos. Cuando se utilizan materiales de terceros, se indica la fuente y la licencia aplicable.",
};

export const PORTFOLIO_CASES: PortfolioCase[] = [
  // 01. RESIDENTIAL INTERIOR DESIGN LOCALIZATION
  {
    id: "01-interior-design-localization",
    order: 1,
    category: "translation",
    title: {
      it: "Localizzazione multilingue: Sito di interior design residenziale",
      en: "Multilingual Website Localization: Residential Interior Design",
      fr: "Localisation multilingue : Site d'architecture d'intérieur résidentielle",
      es: "Localización multilingüe: Sitio web de interiorismo residencial",
    },
    subtitle: {
      it: "Adattamento IT → EN / FR / ES per clientela privata e acquirenti internazionali in Italia",
      en: "IT → EN / FR / ES adaptation for private homeowners and international buyers in Italy",
      fr: "Adaptation IT → EN / FR / ES pour clients privés et acquéreurs internationaux en Italie",
      es: "Adaptación IT → EN / FR / ES para clientes privados y propietarios internacionales en Italia",
    },
    brief: {
      it: "Studio di interior design residenziale indipendente in Italia rivolto a proprietari di seconde case e acquirenti internazionali.",
      en: "Independent residential interior design studio in Italy addressing second-home owners and international buyers.",
      fr: "Studio d'architecture d'intérieur résidentielle en Italie s'adressant aux propriétaires de résidences secondaires et expatriés.",
      es: "Estudio independiente de interiorismo residencial en Italia dirigido a compradores internacionales y segundas residencias.",
    },
    startingMaterial: {
      it: "Testi originali italiani del sito vetrina (Home, Servizi, Chi Sono, Processo, Contatti) incentrati su armonia, ascolto e qualità dell'abitare.",
      en: "Original Italian showcase website copy (Home, Services, About, Process, Contact) centered on harmony, listening, and everyday living.",
      fr: "Textes originaux italiens du site (Accueil, Services, À propos, Méthode, Contact) axés sur l'harmonie, l'écoute et le bien-être.",
      es: "Textos originales en italiano (Inicio, Servicios, Sobre mí, Proceso, Contacto) centrados en la armonía y la habitabilidad.",
    },
    objective: {
      it: "Mantenere il tono intimo, elegante e rassicurante senza scivolare nell'anglicismo freddo o nel gergo architettonico impersonale.",
      en: "Preserve the intimate, elegant, and reassuring voice without falling into cold corporate idioms or impersonal jargon.",
      fr: "Conserver un ton chaleureux, élégant et rassurant sans basculer dans le jargon d'agence froid et impersonnel.",
      es: "Mantener el tono cercano, elegante y profesional evitando calcos sintácticos o tecnicismos impersonales.",
    },
    approach: {
      it: "Traduzione e riscrittura idiomatica dei claim principali, differenziando la resa per il mercato anglofono (en-GB/internazionale), francofono ed ispanofono.",
      en: "Idiomatic rewriting of main headlines, tailoring tone for British/international English, French, and European Spanish audiences.",
      fr: "Réécriture idiomatique des accroches en adaptant les nuances d'habitat pour le public francophone européen.",
      es: "Reescritura idiomática de los lemas y servicios, adaptando el registro para propietarios hispanohablantes.",
    },
    keyDecisions: {
      it: [
        "Resa di 'Una casa pensata intorno al tuo modo di vivere': in EN 'A home designed around the way you live', in FR 'Un intérieur pensé autour de votre art de vivre', in ES 'Un hogar diseñado a la medida de tu vida'.",
        "Evitato il termine generico 'furnishing' in EN, preferendo 'spatial layout, bespoke furniture, materials and lighting design'.",
        "Mantenuta la distinzione netta tra interior design e architettura strutturale, evitando promesse su permessi edilizi o direzione lavori.",
      ],
      en: [
        "Rendered 'Una casa pensata intorno al tuo modo di vivere' naturally as 'A home designed around the way you live'.",
        "Selected 'spatial layout, furniture, finishes and lighting' rather than literal translations of Italian building idioms.",
        "Strictly preserved the scope of interior design, avoiding unlicensed architectural or building permit terminology.",
      ],
      fr: [
        "Traduction de l'accroche par 'Un intérieur pensé autour de votre art de vivre' pour une résonance naturelle et haut de gamme.",
        "Choix de termes précis comme 'agencement d'espaces, finitions, mobilier et mise en lumière'.",
        "Respect strict du périmètre de l'architecture d'intérieur sans empiéter sur la maîtrise d'œuvre.",
      ],
      es: [
        "Traducción del lema por 'Un hogar diseñado a la medida de tu vida', aunando calidez y precisión profesional.",
        "Elección de 'distribución de espacios, materiales, mobiliario e iluminación'.",
        "Delimitación clara del interiorismo residencial sin confusión con reformas integrales o trámites de obra.",
      ],
    },
    deliverable: {
      it: "Pacchetto completo multilingue per Home, Servizi (Progettazione, Materiali, Arredi, Consulenza), Fasi di Lavoro e Form di Contatto.",
      en: "Complete localized copy deck for Home, Services (Space Planning, Finishes, Furnishings, Consultation), Process, and Contact.",
      fr: "Dossier éditorial multilingue complet pour l'Accueil, les Services, les Étapes de travail et la page Contact.",
      es: "Guía completa localizada para Inicio, Servicios, Fases de trabajo y Formulario de contacto.",
    },
    comparison: {
      sourceLang: "IT",
      targetLang: "EN",
      sourceText: "Una casa pensata intorno al tuo modo di vivere. Progetto interni residenziali partendo dalle persone che li abitano.",
      literalText: "A house thought around your way of living. I project residential interiors starting from people who inhabit them.",
      localizedText: "A home designed around the way you live. I create residential interiors shaped by the people who live in them.",
      notes: {
        it: "La versione localizzata sostituisce 'house' con 'home', 'project' con 'design/create' ed elimina la pesantezza della costruzione passiva italiana.",
        en: "The localized version uses 'home' rather than 'house', selects natural verbs ('create', 'shape'), and avoids Italian prepositional calques.",
        fr: "La version localisée privilégie la chaleur du mot 'home/intérieur' et la fluidité des verbes d'action.",
        es: "La adaptación descarta la traducción literal de 'progetto' como 'proyecto' y opta por una redacción fluida y cercana.",
      },
    },
    disclaimer: DEMO_DISCLAIMER,
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
      it: "Strategie di marketing digitale, metriche di performance e pricing models",
      en: "Digital marketing strategies, performance metrics, and pricing models",
      fr: "Stratégies de marketing digital, métriques de performance et modèles de tarification",
      es: "Estrategias de marketing digital, métricas de rendimiento y modelos de precios",
    },
    brief: {
      it: "Traduzione e adattamento in italiano di un manuale operativo sulle strategie di acquisizione clienti e modelli di revenue digitale.",
      en: "Italian translation and terminology harmonization of a strategic manual on digital customer acquisition and revenue models.",
      fr: "Traduction en italien d'un guide opérationnel sur l'acquisition client et les modèles de revenus numériques.",
      es: "Traducción al italiano de un manual estratégico sobre adquisición de clientes y modelos de negocio digital.",
    },
    startingMaterial: {
      it: "Testo di partenza in lingua inglese focalizzato su funnel di vendita, Customer Lifetime Value (LTV), Return on Ad Spend (ROAS) e retention.",
      en: "English source text focusing on conversion funnels, Customer Lifetime Value, ROAS, and cohort retention.",
      fr: "Texte source en anglais portant sur les tunnels de conversion, la valeur vie client (LTV) et la rétention.",
      es: "Texto de origen en inglés centrado en embudos de conversión, Customer Lifetime Value y retención de cohortes.",
    },
    objective: {
      it: "Garantire rigore economico e coerenza terminologica tra gergo anglosassone consolidato e chiara resa esplicativa in italiano.",
      en: "Ensure economic precision and terminological consistency between industry standard terms and transparent Italian phrasing.",
      fr: "Garantir la rigueur terminologique entre termes économiques anglo-saxons et explications limpides en italien.",
      es: "Asegurar la precisión conceptual entre la terminología financiera anglosajona y su redacción en italiano.",
    },
    approach: {
      it: "Costruzione di un glossario preventivo dei termini economici. Mantenimento delle sigle contabili ampiamente riconosciute con definizione al primo utilizzo.",
      en: "Development of a preliminary economic termbase. Standard abbreviations preserved with context-appropriate glosses on first mention.",
      fr: "Établissement préalable d'un glossaire économique avec harmonisation des sigles financiers.",
      es: "Elaboración de un glosario económico previo y desambiguación de métricas comerciales clave.",
    },
    keyDecisions: {
      it: [
        "Traduzione di 'Customer Acquisition Cost' come 'Costo di acquisizione clienti (CAC)' con esplicitazione della formula.",
        "Scelta di 'Tasso di abbandono' per 'Churn rate' nel corpo descrittivo, lasciando la sigla tra parentesi per immediatezza professionale.",
        "Armonizzazione della distinzione tra 'Revenue' (Fatturato/Ricavi) e 'Profit' (Margine operativo/Utile).",
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
      it: "Testo italiano annotato con glossario bilingue EN-IT di 40 voci economiche e schede di verifica terminologica.",
      en: "Annotated Italian deliverable with a 40-entry bilingual EN-IT economic glossary and verification notes.",
      fr: "Texte italien annoté accompagné d'un glossaire économique bilingue EN-IT de 40 entrées.",
      es: "Documento en italiano con glosario bilingüe de 40 términos económicos y notas terminológicas.",
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
      it: "Traduzione scientifica: Comunicazione clinica e priorità del paziente (EN → IT)",
      en: "Scientific Translation: Clinical Communication & Patient Priorities (EN → IT)",
      fr: "Traduction scientifique : Communication clinique et priorités du patient (EN → IT)",
      es: "Traducción científica: Comunicación clínica y prioridades del paciente (EN → IT)",
    },
    subtitle: {
      it: "Linee guida per la comunicazione sanitaria tra équipe medica, pazienti e caregiver",
      en: "Healthcare communication guidelines for multidisciplinary clinical teams and caregivers",
      fr: "Guides de communication médicale pour équipes soignantes et proches aidants",
      es: "Pautas de comunicación sanitaria para equipos médicos, pacientes y cuidadores",
    },
    brief: {
      it: "Adattamento divulgativo-clinico di protocolli di dialogo medico-paziente nell'ambito della gestione di patologie croniche multiple.",
      en: "Clinical-educational translation of communication protocols for managing multiple chronic conditions.",
      fr: "Traduction de protocoles de dialogue médecin-patient dans le suivi des affections chroniques multiples.",
      es: "Traducción de protocolos de diálogo clínico en el abordaje de enfermedades crónicas múltiples.",
    },
    startingMaterial: {
      it: "Linee guida in lingua inglese strutturate su domande aperte, ponderazione del rischio terapeutico e allineamento degli obiettivi di cura.",
      en: "English clinical source text outlining structured questioning, therapeutic risk weighting, and care goal alignment.",
      fr: "Texte clinique en anglais sur l'écoute active, l'évaluation des risques et la décision partagée.",
      es: "Pautas en inglés sobre escucha activa, balance de riesgos terapéuticos y objetivos de bienestar.",
    },
    objective: {
      it: "Assoluta precisione terminologica anatomica e farmacologica unita a un registro empatico, chiaro e privo di ambiguità per il paziente.",
      en: "Absolute precision in pharmacological and clinical terminology paired with an empathetic, lucid tone for patients and caregivers.",
      fr: "Rigueur absolue sur le vocabulaire médical alliée à un registre bienveillant et accessible.",
      es: "Exactitud en la terminología médica y farmacológica junto con un lenguaje empático y transparente.",
    },
    approach: {
      it: "Verifica terminologica incrociata su banche dati della farmacovigilanza e dell'Istituto Superiore di Sanità. Rigoroso controllo di unità di misura e negazioni.",
      en: "Cross-referencing against official pharmacovigilance databases and Italian healthcare glossaries. Strict check of dosage units and negations.",
      fr: "Validation terminologique sur les bases de données institutionnelles de santé publique et contrôle scrupuleux des dosages.",
      es: "Cotejo terminológico con fuentes médicas oficiales y comprobación exhaustiva de unidades de medida y condicionales.",
    },
    keyDecisions: {
      it: [
        "Traduzione di 'Care goal alignment' come 'Condivisione e allineamento degli obiettivi di cura'.",
        "Controllo stringente delle negazioni ('non interrompere senza consulto medico') per escludere qualsiasi ambiguità prescrittiva.",
        "Inserito disclaimer esplicito sulla natura dimostrativa e non prescrittiva della traduzione.",
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
      it: "Documento tradotto con tabella a fronte e note di comparazione terminologica su 15 concetti clinico-comunicativi.",
      en: "Dual-column translated document accompanied by terminology analysis across 15 clinical communication concepts.",
      fr: "Document bilingue avec tableau comparatif et fiches explicatives sur 15 notions médicales clés.",
      es: "Traducción en columnas enfrentadas con análisis terminológico de 15 conceptos asistenciales.",
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
      it: "Traduzione tecnologica e localizzazione software / UI (EN → IT)",
      en: "Technological Translation & Software / UI Localization (EN → IT)",
      fr: "Traduction technologique et localisation de logiciels / UI (EN → IT)",
      es: "Traducción tecnológica y localización de software / UI (EN → IT)",
    },
    subtitle: {
      it: "Documentazione API cloud e microcopy per interfaccia utente di un'applicazione web",
      en: "Cloud API documentation and user interface microcopy for a web platform",
      fr: "Documentation d'API cloud et micro-textes d'interface utilisateur pour application web",
      es: "Documentación de API en la nube y microcopy de interfaz para plataforma web",
    },
    brief: {
      it: "Dimostrazione della differenza cruciale tra traduzione tecnica descrittiva e localizzazione software orientata all'usabilità e ai vincoli di spazio.",
      en: "Showcasing the critical distinction between technical documentation translation and space-constrained software UI localization.",
      fr: "Démonstration de la distinction entre documentation technique et micro-textes d'interface soumis à des contraintes de pixels.",
      es: "Demostración de la diferencia entre traducción técnica de manuales y localización de botones y avisos de interfaz.",
    },
    startingMaterial: {
      it: "Estratti di documentazione per sviluppatori (autenticazione OAuth e webhook) + stringhe UI di pulsanti, stati di caricamento e messaggi di errore.",
      en: "Excerpts from developer guides (OAuth and webhooks) coupled with UI strings (buttons, tooltips, validation errors).",
      fr: "Extraits de documentation technique (OAuth, webhooks) et chaînes d'interface (boutons, infobulles, erreurs).",
      es: "Fragmentos de documentación técnica de API y cadenas de texto de interfaz (botones, estados de error y avisos).",
    },
    objective: {
      it: "Fornire istruzioni tecniche univoche per gli sviluppatori e testi brevi, immediati e grammaticalmente coerenti per l'utente finale.",
      en: "Deliver unambiguous technical instructions for engineers and concise, intuitive microcopy that fits within tight UI containers.",
      fr: "Fournir des explications techniques sans équivoque pour les développeurs et des micro-textes clairs et concis.",
      es: "Ofrecer instrucciones técnicas exactas para desarrolladores y textos de interfaz breves y directos.",
    },
    approach: {
      it: "Mantenimento dei parametri di codice (camelCase, variabili d'ambiente) invariati. Sintesi estrema per i pulsanti per evitare overflow su schermi mobile.",
      en: "Code parameters, endpoints, and variables preserved verbatim. Radical brevity applied to UI buttons to prevent truncation on mobile viewports.",
      fr: "Préservation stricte des variables techniques et concision maximale pour les composants d'interface mobile.",
      es: "Conservación íntegra de parámetros y variables técnicas. Síntesis extrema en botones para evitar desbordamientos.",
    },
    keyDecisions: {
      it: [
        "Differenziazione tra 'Deploy' (mantenuto nel gergo IT per sviluppatori) e 'Pubblica / Rilascia' (per utenti non tecnici).",
        "Resa di 'Discard unsaved changes?': 'Annullare le modifiche non salvate?' (stringa chiara in 37 caratteri).",
        "Uniformazione dei verbi d'azione nei pulsanti all'infinito presente ('Salva', 'Invia', 'Elimina').",
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
      it: "Documento tecnico tradotto + tabella di localizzazione chiavi/valori con conteggio caratteri per 25 stringhe UI.",
      en: "Translated developer guide plus a key-value UI localization matrix with character counts for 25 interface strings.",
      fr: "Guide technique traduit et table de localisation clé/valeur pour 25 éléments d'interface.",
      es: "Guía técnica traducida y matriz clave-valor con límite de caracteres para 25 textos de interfaz.",
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
      it: "Traduzione contrattuale: Accordo quadro di fornitura servizi (EN → IT)",
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
      it: "Mantenere inalterato il valore vincolante del testo senza creare false equivalenze tra istituti di common law e codice civile italiano.",
      en: "Preserve the binding scope of obligations without fabricating false equivalences between common law and Italian civil law doctrines.",
      fr: "Transposer fidèlement les engagements juridiques sans déformer la portée des obligations.",
      es: "Reflejar fielmente la fuerza vinculante de las obligaciones sin generar falsas equivalencias doctrinales.",
    },
    approach: {
      it: "Distinzione rigorosa tra doveri imperativi ('shall' = 'ha l'obbligo di / dovrà'), facoltà ('may' = 'ha la facoltà di / può') e condizioni essenziali. Nota informativa esplicita sui limiti del testo.",
      en: "Rigorous distinction between modal imperatives ('shall', 'may', 'must'). Clear notation explaining jurisdictional translation scope.",
      fr: "Rigueur terminologique absolue sur les obligations impératives et les facultés contractuelles.",
      es: "Tratamiento riguroso de las modalidades obligacionales ('deberá', 'podrá', 'está obligado a').",
    },
    keyDecisions: {
      it: [
        "Traduzione di 'Indemnify and hold harmless' come 'manlevare e tenere indenne', formula consolidata nella prassi contrattuale italiana.",
        "Mantenimento di 'Force Majeure' con esplicitazione delle cause tipizzate (eventi imprevedibili e straordinari al di fuori del controllo).",
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
      it: "Testo a fronte con note di disambiguazione concettuale per 10 clausole critiche e glossario giuridico-contrattuale.",
      en: "Dual-column contractual text with conceptual disambiguation notes on 10 critical clauses and legal terminology index.",
      fr: "Texte contractuel bilingue accompagné de notes explicatives sur 10 clauses essentielles.",
      es: "Documento contractual bilingüe con anotaciones jurídicas sobre 10 cláusulas determinantes.",
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
      it: "Localizzazione UX e contenuti web (EN → IT)",
      en: "UX & Web Copywriting Localization (EN → IT)",
      fr: "Localisation UX et contenus web (EN → IT)",
      es: "Localización UX y contenidos web (EN → IT)",
    },
    subtitle: {
      it: "Flusso di onboarding utente, form multi-step e messaggi di stato transazionali",
      en: "User onboarding flow, multi-step forms, and transactional status messages",
      fr: "Parcours d'accueil utilisateur, formulaires pas-à-pas et notifications d'état",
      es: "Flujo de registro y bienvenida, formularios por pasos y mensajes de estado",
    },
    brief: {
      it: "Rendere un percorso di registrazione e primo utilizzo di un servizio digitale chiaro, rassicurante e piacevole per il pubblico italiano.",
      en: "Refining a digital onboarding flow to make it intuitive, reassuring, and completely natural for Italian users.",
      fr: "Adapter un parcours d'onboarding digital pour le rendre fluide, clair et chaleureux pour le public italien.",
      es: "Adaptar el flujo de bienvenida de una plataforma digital para garantizar claridad y cercanía al usuario.",
    },
    startingMaterial: {
      it: "Flow di 4 schermate di onboarding in lingua inglese comprendente consensi opzionali, selezione preferenze e riepilogo account.",
      en: "Four-step English onboarding flow including permissions, preferences configuration, and welcome prompt.",
      fr: "Parcours en quatre étapes en anglais avec sélection des préférences et confirmation.",
      es: "Flujo de cuatro pantallas en inglés que incluye permisos, preferencias y mensaje de bienvenida.",
    },
    objective: {
      it: "Ridurre l'attrito cognitivo e i tassi di abbandono attraverso una microcopy sintetica, positiva e perfettamente contestualizzata.",
      en: "Minimize cognitive friction and drop-off rates through concise, engaging, and context-aware microcopy.",
      fr: "Réduire les abandons d'inscription grâce à des micro-textes fluides, concis et rassurants.",
      es: "Disminuir la fricción del usuario mediante textos breves, amables y precisos.",
    },
    approach: {
      it: "Riscrittura orientata all'utente: preferite spiegazioni sul beneficio ('Cosa puoi fare ora') rispetto a istruzioni tecniche.",
      en: "Benefit-driven rewriting prioritizing clear user value over dry technical instructions.",
      fr: "Rédaction axée sur les bénéfices concrets plutôt que sur des consignes techniques rigides.",
      es: "Redacción orientada a los beneficios del usuario en lugar de meras instrucciones funcionales.",
    },
    keyDecisions: {
      it: [
        "Sostituzione di 'Get started' con 'Inizia ora' e di 'Skip for now' con 'Potrai farlo più tardi' per un tono più accogliente.",
        "Esplicitazione dei vantaggi della privacy: 'I tuoi dati restano privati e non saranno mai condivisi con terze parti'.",
        "Conformità con le linee guida WCAG su leggibilità ed etichette dei campi modulo.",
      ],
      en: [
        "Localized 'Get started' into encouraging Italian actions ('Inizia ora', 'Configura il tuo spazio').",
        "Reinforced privacy reassurance microcopy to build immediate trust during initial signup.",
        "Maintained full compliance with accessibility standards regarding descriptive form field labels.",
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
      it: "Mappa visuale delle 4 schermate con testi prima/dopo e motivazioni delle scelte di localizzazione.",
      en: "Visual storyboard across the 4 onboarding steps displaying before/after copy and UX rationale.",
      fr: "Tableau comparatif des 4 étapes avec justification détaillée de chaque micro-texte.",
      es: "Esquema visual de las 4 pantallas con comparativa de textos y argumentos de experiencia de usuario.",
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
      it: "Ricerca fornitori: Analisi comparativa per packaging ecologico e logistica",
      en: "Supplier Research: Comparative Benchmark for Eco-Packaging & Logistics",
      fr: "Recherche de fournisseurs : Analyse comparative d'emballages écologiques",
      es: "Investigación de proveedores: Análisis comparativo de embalaje ecológico",
    },
    subtitle: {
      it: "Scouting, raccolta dati pubblici e sintesi decisionale per una piccola attività manifatturiera",
      en: "Market scouting, public data gathering, and decision matrix for a boutique producer",
      fr: "Prospection, collecte de données publiques et synthèse pour une marque artisanale",
      es: "Búsqueda, recopilación de datos y matriz comparativa para pequeña empresa",
    },
    brief: {
      it: "Una piccola realtà artigianale italiana deve selezionare un nuovo fornitore di scatole in cartone riciclato certificato FSC e gestione spedizioni.",
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
      it: "Raccogliere, verificare e sintetizzare le informazioni pubbliche di 5 fornitori italiani ed europei in una matrice trasparente e subito utilizzabile.",
      en: "Identify, verify, and summarize public offerings from 5 suppliers into an actionable, decision-ready comparison matrix.",
      fr: "Recueillir et synthétiser les offres de 5 fournisseurs européens dans une matrice décisionnelle claire.",
      es: "Recopilar y sintetizar información pública de 5 proveedores en una matriz estructurada y transparente.",
    },
    approach: {
      it: "Analisi desk-research su siti ufficiali, listini pubblici, schede tecniche di prodotto, condizioni di reso e recensioni verificate.",
      en: "Exhaustive desk research analyzing official websites, public price tiers, technical data sheets, and verified fulfillment times.",
      fr: "Recherche documentaire approfondie sur les catalogues officiels, fiches techniques et conditions de livraison.",
      es: "Investigación documental sobre sitios web oficiales, catálogos, fichas técnicas y condiciones de envío.",
    },
    keyDecisions: {
      it: [
        "Creazione di criteri ponderati: Sostenibilità (FSC/riciclabilità), Costo unitario a scaglioni (100, 500, 1.000 pz), Tempi di produzione.",
        "Evidenziati costi nascosti come spese di fustella una tantum e minimi di fatturazione non immediati sui siti.",
        "Fornito riassunto esecutivo di 1 pagina con raccomandazione finale motivata per le 2 migliori opzioni.",
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
      it: "Foglio di calcolo comparativo strutturato + report di sintesi in PDF pronto per la decisione strategica del cliente.",
      en: "Structured comparative spreadsheet plus executive decision brief ready for strategic evaluation.",
      fr: "Tableur comparatif structuré et synthèse décisionnelle prête pour arbitrage.",
      es: "Hoja de cálculo comparativa y síntesis ejecutiva para la toma de decisiones del cliente.",
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
      it: "Ricerca competitor: Analisi di posizionamento sul mercato europeo",
      en: "Competitor Research: Positioning Analysis in European Markets",
      fr: "Veille concurrentielle : Analyse de positionnement sur le marché européen",
      es: "Investigación de competencia: Análisis de posicionamiento en el mercado europeo",
    },
    subtitle: {
      it: "Studio comparativo su offerta, listini pubblici, canali e value proposition di 4 realtà",
      en: "Comparative study across public pricing, service models, and value propositions of 4 firms",
      fr: "Étude comparative sur les offres, tarifs publics et propositions de valeur de 4 acteurs",
      es: "Estudio comparativo sobre servicios, precios públicos y propuesta de valor de 4 negocios",
    },
    brief: {
      it: "Consulente freelance italiano intenzionato a offrire servizi a clienti francofoni e anglofoni necessita di una mappatura dell'offerta concorrente.",
      en: "An independent Italian consultant expanding into French and English-speaking markets requires a clear competitive landscape mapping.",
      fr: "Un consultant indépendant italien souhaite cartographier l'offre concurrente sur les marchés francophones et anglophones.",
      es: "Un consultor independiente italiano necesita analizar el panorama competitivo antes de expandir sus servicios a otros países europeos.",
    },
    startingMaterial: {
      it: "Informazioni pubbliche ricavate da siti web, pagine LinkedIn, cataloghi servizi e newsletter aperte di 4 competitor diretti in UK, Francia e Germania.",
      en: "Public data gathered from websites, LinkedIn company profiles, service decks, and open newsletters of 4 competitors.",
      fr: "Données publiques issues de sites web, profils LinkedIn et présentations publiques de 4 concurrents en France et en Europe.",
      es: "Información pública recopilada de páginas web, perfiles profesionales y boletines de 4 empresas competidoras.",
    },
    objective: {
      it: "Individuare spazi di posizionamento non presidiati, fasce di prezzo medie e stili di comunicazione prevalenti senza fare speculazioni.",
      en: "Identify underserved market niches, baseline pricing benchmarks, and dominant messaging angles based strictly on verified public facts.",
      fr: "Identifier les segments sous-exploités et les fourchettes tarifaires moyennes sans spéculation.",
      es: "Localizar oportunidades de diferenciación y rangos de tarifas basándose exclusivamente en hechos públicos comprobables.",
    },
    approach: {
      it: "Netta separazione metodologica tra DATO DI FATTO verificabile (prezzo pubblicato, lingue supportate) e INTERPRETAZIONE strategica.",
      en: "Methodological separation between verifiable empirical facts (published pricing, stated turnaround) and strategic interpretation.",
      fr: "Séparation rigoureuse entre faits vérifiables (tarifs affichés, services mentionnés) et analyse stratégique.",
      es: "Diferenciación metodológica estricta entre datos contrastables (precios visibles, idiomas) e interpretación analítica.",
    },
    keyDecisions: {
      it: [
        "Esclusi loghi protetti da copyright; utilizzati descrittori neutri per la tutela della riservatezza dei marchi terzi.",
        "Analizzati i modelli di tariffazione: pacchetti orari fissi vs formule a retainers mensili.",
        "Evidenziata l'assenza di vero supporto multilingue integrato nella maggior parte dei competitor come vantaggio competitivo.",
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
      it: "Report strategico di 8 pagine corredato da diagramma di posizionamento e raccomandazioni operative per il lancio.",
      en: "8-page strategic competitive brief featuring a positioning matrix and actionable go-to-market recommendations.",
      fr: "Rapport d'analyse stratégique avec matrice de positionnement et recommandations de lancement.",
      es: "Informe estratégico con matriz de posicionamiento y recomendaciones prácticas para el lanzamiento.",
    },
    disclaimer: DEMO_DISCLAIMER,
  },

  // 09. BACK OFFICE FOR GENERIC FREELANCE PROFESSIONAL
  {
    id: "09-freelance-back-office-system",
    order: 9,
    category: "backoffice",
    title: {
      it: "Back office e organizzazione operativa: Sistema per libero professionista",
      en: "Back Office & Operational Management: Systems for Solo Professionals",
      fr: "Back-office et organisation opérationnelle : Système pour professionnel libéral",
      es: "Back office y organización operativa: Sistema para profesional independiente",
    },
    subtitle: {
      it: "Triage casella email, gestione buffer in agenda e tracker follow-up clienti",
      en: "Inbox triage, appointment buffer scheduling, and systematic client follow-up tracker",
      fr: "Gestion de boîte de réception, planification d'agenda et suivi des relances clients",
      es: "Gestión de correo, tiempos de descanso en agenda y seguimiento de clientes",
    },
    brief: {
      it: "Un consulente professionista sovraccarico dalla gestione quotidiana perde opportunità commerciali e fatica a tenere traccia delle scadenze.",
      en: "An overloaded independent consultant is losing potential engagements due to disorganized inbox triage and irregular follow-ups.",
      fr: "Un professionnel débordé par la gestion quotidienne perd des opportunités par manque de suivi et d'organisation.",
      es: "Un profesional autónomo saturado por tareas administrativas pierde oportunidades y control sobre los plazos de entrega.",
    },
    startingMaterial: {
      it: "Scenario sintetico con 50 comunicazioni in entrata, richieste appuntamenti disordinate e 3 clienti in attesa di preventivo (Clienti Demo A, B, C).",
      en: "Synthetic simulation with 50 unfiled client messages, irregular calendar requests, and pending quotes for Demo Clients A, B, and C.",
      fr: "Scénario synthétique de 50 messages entrants non traités, rendez-vous non confirmés et devis en attente.",
      es: "Escenario demostrativo con 50 correos sin clasificar, citas desorganizadas y presupuestos pendientes.",
    },
    objective: {
      it: "Costruire un flusso operativo standard (SOP), liberare la casella di posta e strutturare un sistema di follow-up che non lasci cadere alcun contatto.",
      en: "Build standard operating procedures (SOPs), achieve zero-inbox clarity, and establish an unshakeable follow-up cadence.",
      fr: "Mettre en place une procédure claire (SOP), désengorger la boîte mail et structurer les relances.",
      es: "Crear un protocolo de trabajo operativo (SOP), despejar el correo y asegurar el seguimiento riguroso de cada cliente.",
    },
    approach: {
      it: "Applicazione della metodologia 'Open Loops': classificazione per urgenza/importanza, risposte standard personalizzate e introduzione di buffer di 15 min tra call.",
      en: "Implementation of the Open Loops framework: classification by priority, templated personalized replies, and 15-minute calendar buffers.",
      fr: "Mise en œuvre d'une méthode de tri rigoureuse, modèles de réponse types personnalisés et temps de pause entre rendez-vous.",
      es: "Aplicación de clasificación por prioridades, respuestas tipo personalizadas y descansos de 15 minutos entre videollamadas.",
    },
    keyDecisions: {
      it: [
        "Creata cartella 'In attesa di terzi': ogni richiesta sospesa ha una data limite di sollecito automatico dopo 48 ore.",
        "Bloccati slot settimanali per lavoro profondo senza interruzioni di chiamate esterne.",
        "Predisposto un tracker sintetico settimanale con riepilogo inviato ogni venerdì pomeriggio a Noemi / al professionista.",
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
      it: "Manuale procedurale SOP di 4 pagine + modello di foglio elettronico per il tracciamento clienti e scadenze.",
      en: "4-page Standard Operating Procedure (SOP) handbook plus automated client tracking spreadsheet template.",
      fr: "Guide de procédures opérationnelles (SOP) de 4 pages et matrice de suivi des relances.",
      es: "Manual de procedimientos operativos (SOP) de 4 páginas y plantilla de seguimiento de clientes.",
    },
    disclaimer: DEMO_DISCLAIMER,
  },

  // 10. WRITING & REVISION — BEFORE/AFTER
  {
    id: "10-writing-editorial-revision",
    order: 10,
    category: "writing",
    title: {
      it: "Scrittura e revisione testi: Confronto prima/dopo per presentazione aziendale",
      en: "Copywriting & Text Revision: Before/After Corporate Presentation",
      fr: "Rédaction et révision de textes : Comparatif avant/après pour présentation d'entreprise",
      es: "Redacción y corrección de estilo: Comparativa antes y después para presentación profesional",
    },
    subtitle: {
      it: "Ristrutturazione stilistica, eliminazione del burocratese e valorizzazione della chiarezza",
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
      it: "Trasformare il testo in una comunicazione autorevole, diretta e piacevole da leggere, mettendo in primo piano ciò che l'azienda fa concretamente.",
      en: "Transform the copy into direct, credible, and engaging communication clearly stating what the company actually accomplishes.",
      fr: "Transformer le texte en une communication percutante, élégante et lisible, axée sur les compétences réelles.",
      es: "Convertir el texto en un mensaje convincente, cercano y profesional que explique con exactitud los servicios ofrecidos.",
    },
    approach: {
      it: "Potatura degli aggettivi vuoti, ripristino della forma attiva con soggetti chiari, spezzatura delle subordinate complesse in frasi incisive.",
      en: "Elimination of hollow marketing adjectives, active voice restoration, and breaking tortuous clauses into punchy, memorable sentences.",
      fr: "Suppression des adjectifs superflus, retour à la voix active et découpage en phrases courtes et équilibrées.",
      es: "Supresión de adjetivos vacíos, adopción de voz activa y descomposición de oraciones complejas en ideas claras.",
    },
    keyDecisions: {
      it: [
        "Banditi 'sinergia a 360 gradi', 'leader di settore' e 'prefiggersi lo scopo'.",
        "Strutturata la comunicazione in 3 blocchi: Cosa facciamo, Per chi lavoriamo, Perché i clienti restano con noi.",
        "Ridotto il conteggio parole del 40% aumentando l'efficacia persuasiva e la memorabilità.",
      ],
      en: [
        "Banned clichés such as 'synergy', '360-degree turnkey', and 'industry leading'.",
        "Organized message into three intuitive sections: What we do, Who we serve, Why clients stay.",
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
      it: "Documento prima/dopo con evidenziazione cromatica delle modifiche e note editoriali di accompagnamento.",
      en: "Annotated before/after copy audit displaying track-changes highlighting and editorial commentary.",
      fr: "Comparatif avant/après avec surlignage des modifications et commentaires d'édition.",
      es: "Documento comparativo antes/después con control de cambios y justificación editorial.",
    },
    comparison: {
      sourceLang: "IT (Bozza Originale)",
      targetLang: "IT (Testo Revisionato)",
      sourceText: "La nostra compagine professionale si prefigge lo scopo precipuo di implementare soluzioni sinergiche a 360 gradi atte a favorire l'ottimizzazione dei processi operativi dei nostri stimati clienti.",
      literalText: "Our professional body aims at the main purpose of implementing synergic solutions at 360 degrees capable of favoring the optimization of operational processes of our esteemed clients.",
      localizedText: "Aiutiamo professionisti e piccole aziende a semplificare il lavoro quotidiano: organizziamo i processi interni, riduciamo il tempo perso e ti restituiamo serenità operativa.",
      notes: {
        it: "Eliminato il burocratese vuoto. Il testo revisionato parla direttamente al lettore in prima persona plurale, definisce l'interlocutore e si concentra sul beneficio reale.",
        en: "Replaces empty bureaucratic waffle with direct, human-centered professional prose emphasizing concrete operational benefits.",
        fr: "Substitution d'un style ampoulé par une communication directe, bienveillante et axée sur le résultat.",
        es: "Sustitución de una redacción farragosa por un texto claro, directo y centrado en las necesidades del cliente.",
      },
    },
    disclaimer: DEMO_DISCLAIMER,
  },

  // 11. MULTILINGUAL LANDING PAGE DEVELOPMENT
  {
    id: "11-multilingual-landing-page",
    order: 11,
    category: "web",
    title: {
      it: "Realizzazione landing page multilingue per servizio professionale",
      en: "Multilingual Landing Page Development for Professional Services",
      fr: "Création de landing page multilingue pour prestation de services",
      es: "Diseño y desarrollo de landing page multilingüe para servicios profesionales",
    },
    subtitle: {
      it: "Architettura semantica, responsive design, integrazione form e localizzazione IT / EN / FR / ES",
      en: "Semantic architecture, responsive design, form routing, and IT / EN / FR / ES localization",
      fr: "Architecture sémantique, design responsive, formulaires et localisation IT / EN / FR / ES",
      es: "Estructura semántica, diseño adaptable, formularios y localización en 4 idiomas",
    },
    brief: {
      it: "Progettazione e pubblicazione di una landing page essenziale per lanciare un percorso di consulenza professionale rivolto a un pubblico europeo.",
      en: "Design and build of a high-clarity landing page to launch a bespoke consulting package across European audiences.",
      fr: "Conception d'une page d'atterrissage épurée pour lancer une offre de conseil auprès d'un public européen.",
      es: "Diseño y publicación de una landing page optimizada para presentar un programa de consultoría en Europa.",
    },
    startingMaterial: {
      it: "Obiettivo commerciale, descrizione del programma, profilo del consulente e modalità di prenotazione call conoscitiva.",
      en: "Consulting offer overview, practitioner biography, target client criteria, and 30-minute discovery call booking mechanism.",
      fr: "Descriptif de la prestation, bio de l'intervenant et lien de réservation d'un premier entretien.",
      es: "Descripción del servicio, perfil profesional y mecanismo de reserva de una llamada informativa previa.",
    },
    objective: {
      it: "Realizzare una pagina leggera, accessibile (WCAG AA), veloce nel caricamento e perfettamente consultabile da smartphone in 4 lingue.",
      en: "Produce an ultra-fast, accessible (WCAG AA), responsive single-page experience supporting 4 localized language versions.",
      fr: "Créer une page rapide, accessible (WCAG AA), adaptée aux smartphones et déclinée en 4 langues.",
      es: "Desarrollar una página ligera, accesible (WCAG AA), de carga rápida y adaptable a móviles en 4 idiomas.",
    },
    approach: {
      it: "Gerarchia visiva chiara senza pop-up invasivi: Hero con headline limpida, 3 punti di forza, dettaglio programma, FAQ e modulo di contatto integrato.",
      en: "Clean visual hierarchy free from disruptive popups: focused Hero, 3 tangible pillars, scope breakdown, FAQs, and validated contact form.",
      fr: "Hiérarchie visuelle sans artifice : accroche claire, 3 piliers d'expertise, programme détaillé, FAQ et formulaire sécurisé.",
      es: "Estructura visual sin ventanas emergentes: propuesta de valor clara, 3 pilares, desglose del servicio, FAQ y formulario integrado.",
    },
    keyDecisions: {
      it: [
        "Palette colori sobria su toni naturali caldi, contrasto testo/sfondo certificato superiore a 7:1.",
        "Implementazione di tag hreflang corretti e URL localizzati per ciascuna lingua.",
        "Validazione dei campi form con avvisi di errore localizzati nella lingua attiva del visitatore.",
      ],
      en: [
        "Warm neutral color palette ensuring contrast ratios exceeding 7:1 for effortless legibility.",
        "Implemented valid bidirectional hreflang tags and localized routing across all 4 locales.",
        "Real-time form validation providing native, polite error messages matching the visitor's language.",
      ],
      fr: [
        "Palette sobre et chaleureuse avec un contraste texte/fond conforme aux normes d'accessibilité.",
        "Balisage hreflang complet et routes d'URL dédiées par langue.",
        "Validation de formulaire en temps réel avec messages d'erreur entièrement traduits.",
      ],
      es: [
        "Paleta cromática neutra con contraste visual superior a 7:1 en todos los textos.",
        "Configuración completa de etiquetas hreflang y rutas adaptadas por idioma.",
        "Validación de formularios con avisos de error contextualizados en la lengua seleccionada.",
      ],
    },
    deliverable: {
      it: "Codice sorgente completo React/Tailwind, test di accessibilità superati e documentazione di manutenzione.",
      en: "Complete production-ready React/Tailwind codebase, accessibility validation audit, and handover guide.",
      fr: "Code source complet React/Tailwind, validation d'accessibilité et guide de mise à jour.",
      es: "Código fuente completo en React y Tailwind, validación de accesibilidad y guía de gestión.",
    },
    disclaimer: DEMO_DISCLAIMER,
  },

  // 12. DEDICATED LITERARY TRANSLATION SAMPLE (MASTER FIELD: LETTERARIO)
  {
    id: "12-literary-translation-sample",
    order: 12,
    category: "translation",
    masterField: "letterario",
    title: {
      it: "Saggio di traduzione letteraria e narrativa: 'The Last Voice Note' (EN → IT)",
      en: "Literary & Narrative Translation Sample: 'The Last Voice Note' (EN → IT)",
      fr: "Échantillon de traduction littéraire et narrative : 'The Last Voice Note' (EN → IT)",
      es: "Muestra de traducción literaria y narrativa: 'The Last Voice Note' (EN → IT)",
    },
    subtitle: {
      it: "Testo originale contemporaneo: studio di ritmo narrativo, sottotesto, resa del parlato e cadenza prosodica",
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
      it: "Testo sorgente originale in lingua inglese creato appositamente per questo progetto dimostrativo. Nessun autore vivente o protetto da copyright imitato.",
      en: "Original English narrative source written specifically for this demonstration portfolio. Free from external copyright restrictions.",
      fr: "Texte source original en anglais rédigé spécifiquement pour ce projet de démonstration.",
      es: "Texto fuente original en inglés creado exclusivamente para este proyecto demostrativo.",
    },
    objective: {
      it: "Rendere la voce narrante in italiano con naturalezza e rispetto della cadenza interiore, evitando sia l'appiattimento sia il manierismo forzato.",
      en: "Render the narrator's interior voice into Italian with natural cadence and restraint, avoiding both flat literalism and overwrought poeticism.",
      fr: "Transposer la voix intérieure du narrateur avec délicatesse, sans lourdeur ni préciosité artificielle.",
      es: "Recrear la voz narrativa en italiano con musicalidad y sobriedad, eludiendo la literalidad estéril y la afectación.",
    },
    approach: {
      it: "Analisi stilistica preliminare: studio delle pause, della punteggiatura e della tensione non detta. Traduzione basata sulla resa prosodica del respiro narrativo.",
      en: "Close reading analysis: mapping narrative pauses, punctuation weight, and emotional subtext. Translation shaped around natural breath rhythms.",
      fr: "Lecture attentive de la ponctuation, des silences et des non-dits pour restituer le souffle de la prose originale.",
      es: "Análisis pormenorizado del ritmo, las pausas y el subtexto emocional antes de abordar la traducción de cada párrafo.",
    },
    keyDecisions: {
      it: [
        "Resa di 'voice note': conservato 'nota vocale' nel registro intimo per riflettere l'uso quotidiano autentico in italiano.",
        "Scelta di tempi verbali: alternanza studiata tra imperfetto narrativo e passato remoto per creare la giusta profondità temporale del ricordo.",
        "Lavoro meticoloso sull'incipit per preservare la cadenza sussurrata del testo di partenza senza inversioni sintattiche forzate.",
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

«Ho trovato il libro», disse. «Quello con lo scontrino dentro. Avevi ragione tu sull'anno».

Non si congedò. Un respiro, il leggero scatto metallico del gas che veniva abbassato e la registrazione si interruppe. Era successo nove mesi fa, prima degli scatoloni nel corridoio, prima delle lettere che continuavano ad arrivare con un nome altrui cancellato con cura a penna blu. Non ho ancora svuotato la casella. A volte, quando la casa sprofonda in quel silenzio vuoto del pomeriggio, la faccio partire solo per sentire il bollitore.`,
      editorialNotes: {
        it: "Note del traduttore: 'forty-six seconds of nothing in particular' è reso con 'quarantasei secondi di niente in particolare', mantenendo il tono disarmante; 'ticket stub' è adattato nel contesto con 'scontrino' o 'talloncino del biglietto' a seconda dell'oggetto; 'the house settles into that hollow afternoon quiet' è tradotto con 'la casa sprofonda in quel silenzio vuoto del pomeriggio' per restituire la sensazione di peso e solitudine senza enfasi melodrammatica.",
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
    title: {
      it: "Localizzazione Sito Interior Design",
      en: "Interior Design Website Localization",
      fr: "Localisation Site Architecture d'Intérieur",
      es: "Localización Sitio Web Interiorismo",
    },
    subtitle: {
      it: "Specimen multilingue IT → EN/FR/ES & glossario arredo",
      en: "Multilingual specimen IT → EN/FR/ES & design glossary",
      fr: "Spécimen multilingue IT → EN/FR/ES & glossaire design",
      es: "Muestra multilingüe IT → EN/FR/ES y glosario diseño",
    },
    category: "translation",
    url: "/portfolio-documenti/doc-01-localizzazione-interior-design.html",
  },
  {
    num: "02",
    title: {
      it: "Relazione Finanziaria e Commerciale",
      en: "Financial & Commercial Report",
      fr: "Rapport Financier & Commercial",
      es: "Informe Financiero y Comercial",
    },
    subtitle: {
      it: "Traduzione specialistica EN → IT & conciliazione IFRS",
      en: "Specialist translation EN → IT & IFRS compliance",
      fr: "Traduction spécialisée EN → IT & conformité IFRS",
      es: "Traducción especializada EN → IT y normas IFRS",
    },
    category: "translation",
    url: "/portfolio-documenti/doc-02-report-finanziario-commerciale.html",
  },
  {
    num: "03",
    title: {
      it: "Abstract Clinico e Farmacologico",
      en: "Clinical & Pharmacological Abstract",
      fr: "Abstract Clinique & Pharmacologique",
      es: "Resumen Clínico y Farmacológico",
    },
    subtitle: {
      it: "Trial clinico fase II & descrittori MeSH/EMA",
      en: "Phase II clinical trial & MeSH/EMA terminology",
      fr: "Essai clinique phase II & terminologie MeSH/EMA",
      es: "Ensayo clínico fase II y descriptores MeSH/EMA",
    },
    category: "translation",
    url: "/portfolio-documenti/doc-03-abstract-clinico-farmacologico.html",
  },
  {
    num: "04",
    title: {
      it: "Guida Software SaaS Cloud & UI",
      en: "Cloud SaaS Software Guide & UI",
      fr: "Guide Logiciel SaaS Cloud & UI",
      es: "Guía Software SaaS Cloud e Interfaz",
    },
    subtitle: {
      it: "Stringhe JSON, vincoli di spazio e manuale SSO",
      en: "JSON strings, character constraints & SSO guide",
      fr: "Chaînes JSON, limites de caractères & guide SSO",
      es: "Cadenas JSON, límites de espacio y guía SSO",
    },
    category: "translation",
    url: "/portfolio-documenti/doc-04-guida-software-saas-cloud.html",
  },
  {
    num: "05",
    title: {
      it: "Accordo di Riservatezza (NDA) Bilingue",
      en: "Bilingual Non-Disclosure Agreement (NDA)",
      fr: "Accord de Confidentialité (NDA) Bilingue",
      es: "Acuerdo de Confidencialidad (NDA) Bilingüe",
    },
    subtitle: {
      it: "Testo contrattuale IT/EN & diritto comparato",
      en: "IT/EN contractual clauses & comparative law notes",
      fr: "Clauses contractuelles IT/EN & droit comparé",
      es: "Cláusulas contractuales IT/EN y derecho comparado",
    },
    category: "translation",
    url: "/portfolio-documenti/doc-05-accordo-riservatezza-nda.html",
  },
  {
    num: "06",
    title: {
      it: "Matrice Microcopy UX & Design System",
      en: "UX Microcopy Matrix & Design System",
      fr: "Matrice Micro-textes UX & Design System",
      es: "Matriz Microcopy UX y Sistema de Diseño",
    },
    subtitle: {
      it: "Stati di interfaccia, errori e CTA in 4 lingue",
      en: "Interface states, errors & CTAs across 4 languages",
      fr: "États d'interface, erreurs & CTA en 4 langues",
      es: "Estados de interfaz, errores y llamadas a la acción",
    },
    category: "writing",
    url: "/portfolio-documenti/doc-06-microcopy-design-system.html",
  },
  {
    num: "07",
    title: {
      it: "Matrice Benchmark Fornitori Packaging",
      en: "Packaging Supplier Benchmark Matrix",
      fr: "Matrice de Veille Fournisseurs Emballages",
      es: "Matriz Comparativa Proveedores Embalaje",
    },
    subtitle: {
      it: "Desk research, MOQ, certificazioni FSC e logistica",
      en: "Desk research, MOQ, FSC certification & delivery",
      fr: "Desk research, MOQ, certifications FSC & logistique",
      es: "Desk research, MOQ, sellos FSC y logística verde",
    },
    category: "research",
    url: "/portfolio-documenti/doc-07-benchmark-fornitori-logistica.html",
  },
  {
    num: "08",
    title: {
      it: "Analisi Competitiva e Mappatura Offerta",
      en: "Competitive Analysis & Market Mapping",
      fr: "Analyse Concurrentielle & Positionnement",
      es: "Análisis Competitivo y Mapeo de Mercado",
    },
    subtitle: {
      it: "Benchmark su 5 studi professionali e canali di contatto",
      en: "Benchmark across 5 professional firms & channels",
      fr: "Benchmark sur 5 cabinets professionnels & canaux",
      es: "Benchmark de 5 firmas profesionales y canales",
    },
    category: "research",
    url: "/portfolio-documenti/doc-08-analisi-competitiva-benchmark.html",
  },
  {
    num: "09",
    title: {
      it: "SOP Back Office: Triage Email e Onboarding",
      en: "Back Office SOP: Email Triage & Onboarding",
      fr: "SOP Back-Office : Triage Email & Onboarding",
      es: "SOP Back Office: Triage Correo y Onboarding",
    },
    subtitle: {
      it: "Procedura standard per raggiungere Inbox Zero",
      en: "Standard operating procedure to reach Inbox Zero",
      fr: "Procédure standard pour atteindre Inbox Zero",
      es: "Protocolo operativo para alcanzar Inbox Zero",
    },
    category: "backoffice",
    url: "/portfolio-documenti/doc-09-procedura-operativa-backoffice.html",
  },
  {
    num: "10",
    title: {
      it: "Scheda Revisione Editoriale Prima/Dopo",
      en: "Editorial Revision Specimen Before/After",
      fr: "Fiche Révision Éditoriale Avant/Après",
      es: "Muestra de Corrección Editorial Antes/Después",
    },
    subtitle: {
      it: "Asciugatura testo, eliminazione gerghi e stile incisivo",
      en: "Text streamlining, eliminating corporate jargon",
      fr: "Élagage du texte, clarté et rythme éditorial",
      es: "Poda textual, eliminación de jerga y claridad",
    },
    category: "writing",
    url: "/portfolio-documenti/doc-10-scheda-revisione-editoriale.html",
  },

  {
    num: "11",
    title: { it: "Customer care: gestione di tre richieste", en: "Written customer care: three response scenarios", fr: "Relation client écrite : trois demandes", es: "Atención al cliente: tres solicitudes" },
    subtitle: { it: "Ticket, classificazione, risposta scritta, controllo prima dell’invio e registro aggiornamenti.", en: "Classification, response draft, approval and case log", fr: "Classification, réponse préparée, validation et suivi", es: "Clasificación, borrador, aprobación y registro" },
    category: "backoffice",
    url: "/portfolio-documenti/doc-11-customer-care-email.html",
  },
  {
    num: "12",
    title: { it: "Email e agenda: settimana organizzata", en: "Inbox and calendar: organised week", fr: "E-mails et agenda : semaine organisée", es: "Correo y agenda: semana organizada" },
    subtitle: { it: "Esempio di inbox triage, priorità, agenda condivisa e riepilogo operativo senza invii reali.", en: "Inbox triage, priority map and weekly schedule", fr: "Tri des e-mails, priorités et planning", es: "Clasificación de correos, prioridades y agenda" },
    category: "backoffice",
    url: "/portfolio-documenti/doc-12-gestione-email-agenda.html",
  },
  {
    num: "13",
    title: { it: "CRM, ordini e listini: esempio operativo", en: "CRM, orders and price lists: workflow example", fr: "CRM, commandes et tarifs : exemple opérationnel", es: "CRM, pedidos y tarifas: flujo de trabajo" },
    subtitle: { it: "Scheda lead, controllo dati ordine, normalizzazione SKU e listino per organizzazione amministrativo-commerciale.", en: "Lead records, order checks and price-list updates", fr: "Fiche client, commandes et mise à jour des prix", es: "Registro de clientes, pedidos y lista de precios" },
    category: "backoffice",
    url: "/portfolio-documenti/doc-13-crm-ordini-listini.html",
  },
  {
    num: "14",
    title: { it: "Organizzazione documenti e archivi digitali", en: "Digital file and archive organisation", fr: "Organisation des documents et archives", es: "Organización de documentos y archivos" },
    subtitle: { it: "Struttura cartelle, convenzione dei nomi, controllo versioni e accessi per piccoli studi professionali.", en: "Folder structure, naming rules and version control", fr: "Arborescence, nommage et gestion des versions", es: "Estructura de carpetas, nomenclatura y versiones" },
    category: "backoffice",
    url: "/portfolio-documenti/doc-14-archivi-drive.html",
  },
  {
    num: "15",
    title: { it: "Supporto organizzativo a un corso online", en: "Operational support for an online course", fr: "Support organisationnel d’une formation en ligne", es: "Apoyo organizativo para un curso online" },
    subtitle: { it: "Pianificazione iscrizioni, inviti, materiali, FAQ e riepilogo a un formatore; non attività didattica.", en: "Enrolment, instructions, course materials and FAQs", fr: "Inscriptions, invitations, supports et FAQ", es: "Inscripciones, convocatorias, materiales y preguntas frecuentes" },
    category: "backoffice",
    url: "/portfolio-documenti/doc-15-corso-online-supporto.html",
  },
  {
    num: "16",
    title: { it: "Localizzazione EN → IT per un sito professionale", en: "EN → IT website copy localisation", fr: "Localisation de contenus web EN → IT", es: "Localización de textos web EN → IT" },
    subtitle: { it: "Tre blocchi di una pagina servizi: originale, versione italiana, scelte lessicali e controlli.", en: "Source copy, Italian adaptation and terminology notes", fr: "Texte source, adaptation italienne et choix terminologiques", es: "Original, adaptación italiana y notas terminológicas" },
    category: "translation",
    url: "/portfolio-documenti/doc-16-en-it-localizzazione.html",
  },
  {
    num: "17",
    title: { it: "Localizzazione FR → IT di una scheda prodotto", en: "FR → IT product description localisation", fr: "Localisation FR → IT d’une fiche produit", es: "Localización FR → IT de una ficha de producto" },
    subtitle: { it: "Esempio per un marchio immaginario di articoli per la casa, con descrizione, specifiche e glossario.", en: "Product copy, specifications and bilingual glossary", fr: "Fiche produit, caractéristiques et glossaire bilingue", es: "Ficha de producto, características y glosario bilingüe" },
    category: "translation",
    url: "/portfolio-documenti/doc-17-fr-it-scheda-prodotto.html",
  },
  {
    num: "18",
    title: { it: "Adattamento ES → IT di email commerciale", en: "ES → IT commercial email adaptation", fr: "Adaptation ES → IT d’un e-mail commercial", es: "Adaptación ES → IT de un correo comercial" },
    subtitle: { it: "Traduzione di una comunicazione B2B spagnola verso un italiano naturale e professionale.", en: "B2B source email, Italian adaptation and review", fr: "E-mail B2B, adaptation en italien et relecture", es: "Correo B2B, adaptación al italiano y revisión" },
    category: "translation",
    url: "/portfolio-documenti/doc-18-es-it-email-commerciale.html",
  },
  {
    num: "19",
    title: { it: "Catalogo, listino e contenuti online", en: "Product catalogue, pricing sheet and online copy", fr: "Catalogue, grille tarifaire et contenus web", es: "Catálogo, lista de precios y contenidos web" },
    subtitle: { it: "Aggiornamento coordinato di schede, listino e FAQ con controllo versioni, senza gestione fiscale.", en: "Catalogue descriptions, price-sheet updates and FAQs", fr: "Fiches catalogue, tarif et FAQ coordonnés", es: "Descripciones de catálogo, tarifas y preguntas frecuentes" },
    category: "writing",
    url: "/portfolio-documenti/doc-19-contenuti-cataloghi-listini.html",
  },
  {
    num: "20",
    title: { it: "Richiesta cliente e preventivo: flusso completo", en: "Client enquiry and quote: complete workflow", fr: "Demande client et devis : procédure complète", es: "Solicitud y presupuesto: proceso completo" },
    subtitle: { it: "Brief sintetico, stima, verifica delle condizioni, approvazione e registro ore: esempio senza cliente reale.", en: "Fictional brief, estimate, approval checkpoints and time log: a practical example.", fr: "Brief fictif, estimation, validation et suivi des heures : exemple concret.", es: "Brief ficticio, estimación, aprobación y registro de horas: ejemplo práctico." },
    category: "backoffice",
    url: "/portfolio-documenti/doc-20-richiesta-preventivo-workflow.html",
  },
];
