import { Language } from '../i18n/types';
import { ServiceKey, ServiceIntakeSchema, CONCIERGE_TO_OFFICIAL_SERVICE_ID } from './types';

export const INTAKE_SCHEMAS: Record<ServiceKey, ServiceIntakeSchema> = {
  backoffice: {
    serviceKey: 'backoffice',
    serviceId: CONCIERGE_TO_OFFICIAL_SERVICE_ID.backoffice,
    title: {
      it: 'Assistenza Virtuale & Back Office',
      en: 'Virtual Assistance & Back Office',
      fr: 'Assistance Virtuelle & Back-Office',
      es: 'Asistencia Virtual & Back Office',
    },
    shortDescription: {
      it: 'Supporto operativo, gestione email/agenda e segreteria flessibile',
      en: 'Operational support, calendar/inbox triage, and flexible back-office',
      fr: 'Soutien opérationnel, gestion agenda/emails et secrétariat flexible',
      es: 'Soporte operativo, gestión de agenda/correo y secretaría flexible',
    },
    questions: [
      {
        id: 'tasks',
        prompt: {
          it: 'Quali attività desideri delegare principalmente?',
          en: 'What primary activities would you like to delegate?',
          fr: 'Quelles tâches principales souhaitez-vous déléguer ?',
          es: '¿Qué tareas principales deseas delegar?',
        },
        choices: [
          {
            id: 'inbox_calendar',
            label: {
              it: 'Gestione email, agenda e appuntamenti',
              en: 'Email triage, calendar & appointments',
              fr: 'Tri des emails, agenda et rendez-vous',
              es: 'Gestión de email, agenda y citas',
            },
          },
          {
            id: 'customer_care',
            label: {
              it: 'Assistenza clienti e comunicazioni',
              en: 'Customer support & communications',
              fr: 'Support client et communication',
              es: 'Atención al cliente y comunicaciones',
            },
          },
          {
            id: 'data_docs',
            label: {
              it: 'Organizzazione file, documenti e archivi',
              en: 'Document, file & cloud organization',
              fr: 'Organisation documents, fichiers et cloud',
              es: 'Organización de archivos y documentos',
            },
          },
          {
            id: 'mixed_support',
            label: {
              it: 'Supporto operativo misto / su misura',
              en: 'Mixed / tailored operational support',
              fr: 'Soutien opérationnel mixte sur mesure',
              es: 'Soporte operativo mixto / a medida',
            },
          },
        ],
        allowCustomText: true,
      },
      {
        id: 'frequency',
        prompt: {
          it: 'Con quale frequenza prevedi la collaborazione?',
          en: 'How frequently do you envision the collaboration?',
          fr: 'À quel rythme envisagez-vous cette collaboration ?',
          es: '¿Con qué frecuencia prevés la colaboración?',
        },
        choices: [
          {
            id: 'monthly_retainer',
            label: {
              it: 'Continuativa (mensile a ore)',
              en: 'Ongoing (monthly retainer)',
              fr: 'Régulière (forfait mensuel)',
              es: 'Continuada (abono mensual)',
            },
          },
          {
            id: 'spot_package',
            label: {
              it: 'Pacchetto a ore (10h o 20h per bisogno specifico)',
              en: 'Hourly package (10h or 20h for a specific need)',
              fr: 'Forfait ponctuel (10h ou 20h selon le besoin)',
              es: 'Paquete de horas (10h o 20h puntuales)',
            },
          },
          {
            id: 'urgent_support',
            label: {
              it: 'Intervento temporaneo / picco di lavoro',
              en: 'Temporary support / workload peak',
              fr: 'Soutien temporaire / pic d’activité',
              es: 'Apoyo puntual por pico de trabajo',
            },
          },
        ],
        allowCustomText: true,
      },
      {
        id: 'languages',
        prompt: {
          it: 'In quali lingue è richiesto il supporto?',
          en: 'In which languages is support required?',
          fr: 'Dans quelles langues le soutien est-il requis ?',
          es: '¿En qué idiomas requieres el soporte?',
        },
        choices: [
          {
            id: 'it_only',
            label: {
              it: 'Solo Italiano',
              en: 'Italian only',
              fr: 'Italien uniquement',
              es: 'Solo italiano',
            },
          },
          {
            id: 'it_en',
            label: {
              it: 'Italiano + Inglese',
              en: 'Italian + English',
              fr: 'Italien + Anglais',
              es: 'Italiano + Inglés',
            },
          },
          {
            id: 'multilingual_eu',
            label: {
              it: 'Multilingue (IT, EN, FR o ES)',
              en: 'Multilingual (IT, EN, FR or ES)',
              fr: 'Multilingue (IT, EN, FR ou ES)',
              es: 'Multilingüe (IT, EN, FR o ES)',
            },
          },
        ],
        allowCustomText: true,
      },
      {
        id: 'timeline',
        prompt: {
          it: 'Quando desideri iniziare?',
          en: 'When would you like to start?',
          fr: 'Quand souhaitez-vous commencer ?',
          es: '¿Cuándo desearías comenzar?',
        },
        choices: [
          {
            id: 'asap',
            label: {
              it: 'Appena possibile (entro 1-2 settimane)',
              en: 'As soon as possible (within 1-2 weeks)',
              fr: 'Dès que possible (sous 1 à 2 semaines)',
              es: 'Cuanto antes (en 1-2 semanas)',
            },
          },
          {
            id: 'next_month',
            label: {
              it: 'Dal prossimo mese',
              en: 'From next month',
              fr: 'Dès le mois prochain',
              es: 'A partir del próximo mes',
            },
          },
          {
            id: 'planning',
            label: {
              it: 'Sto pianificando in anticipo',
              en: 'Planning ahead / exploring',
              fr: 'Planification anticipée',
              es: 'Planificando con antelación',
            },
          },
        ],
        allowCustomText: true,
      },
    ],
  },
  translation: {
    serviceKey: 'translation',
    serviceId: CONCIERGE_TO_OFFICIAL_SERVICE_ID.translation,
    title: {
      it: 'Traduzione & Comunicazione Multilingue',
      en: 'Translation & Multilingual Communication',
      fr: 'Traduction & Communication Multilingue',
      es: 'Traducción & Comunicación Multilingüe',
    },
    shortDescription: {
      it: 'Traduzione accurata, localizzazione web e revisione in IT, EN, FR, ES',
      en: 'Accurate translation, web localization and revision across IT, EN, FR, ES',
      fr: 'Traduction rigoureuse, localisation web et révision en IT, EN, FR, ES',
      es: 'Traducción precisa, localización web y revisión en IT, EN, FR, ES',
    },
    questions: [
      {
        id: 'language_pair',
        prompt: {
          it: 'Quali sono la lingua di partenza e di arrivo?',
          en: 'What are your source and target languages?',
          fr: 'Quelles sont les langues source et cible ?',
          es: '¿Cuáles son el idioma de origen y de destino?',
        },
        placeholder: {
          it: 'Es. Tedesco ➔ Italiano o seleziona sotto',
          en: 'E.g. German ➔ Italian or select below',
          fr: 'Ex. Allemand ➔ Italien ou choisir ci-dessous',
          es: 'Ej. Alemán ➔ Italiano o selecciona abajo',
        },
        choices: [
          {
            id: 'en_to_it',
            label: {
              it: 'Inglese ➔ Italiano',
              en: 'English ➔ Italian',
              fr: 'Anglais ➔ Italien',
              es: 'Inglés ➔ Italiano',
            },
          },
          {
            id: 'it_to_en',
            label: {
              it: 'Italiano ➔ Inglese',
              en: 'Italian ➔ English',
              fr: 'Italien ➔ Anglais',
              es: 'Italiano ➔ Inglés',
            },
          },
          {
            id: 'fr_es_to_it',
            label: {
              it: 'Francese o Spagnolo ➔ Italiano',
              en: 'French or Spanish ➔ Italian',
              fr: 'Français ou Espagnol ➔ Italien',
              es: 'Francés o Español ➔ Italiano',
            },
          },
          {
            id: 'multi_target',
            label: {
              it: 'Più lingue di arrivo (es. IT verso EN/FR/ES)',
              en: 'Multiple target languages (e.g. into EN/FR/ES)',
              fr: 'Plusieurs langues cibles (vers EN/FR/ES)',
              es: 'Varios idiomas de destino (hacia EN/FR/ES)',
            },
          },
          {
            id: 'custom_pair',
            label: {
              it: 'Altra combinazione linguistica (indica sotto)',
              en: 'Other language combination (specify below)',
              fr: 'Autre combinaison linguistique (préciser ci-dessous)',
              es: 'Otra combinación lingüística (indicar abajo)',
            },
          },
        ],
        allowCustomText: true,
      },
      {
        id: 'content_type',
        prompt: {
          it: 'Quale tipologia di prestazione ti occorre?',
          en: 'Which type of service do you require?',
          fr: 'Quel type de prestation vous intéresse ?',
          es: '¿Qué tipo de servicio necesitas?',
        },
        choices: [
          {
            id: 'translation_general',
            label: {
              it: 'Traduzione generale & adattamento (da 0,09 €/parola)',
              en: 'General translation & adaptation (from €0.09/word)',
              fr: 'Traduction générale & adaptation (dès 0,09 €/mot)',
              es: 'Traducción general y adaptación (desde 0,09 €/palabra)',
            },
          },
          {
            id: 'translation_specialized',
            label: {
              it: 'Traduzione specialistica / tecnica EN ↔ IT (da 0,12 €/parola)',
              en: 'Specialized / technical translation EN ↔ IT (from €0.12/word)',
              fr: 'Traduction spécialisée / technique EN ↔ IT (dès 0,12 €/mot)',
              es: 'Traducción especializada / técnica EN ↔ IT (desde 0,12 €/palabra)',
            },
          },
          {
            id: 'web_localization',
            label: {
              it: 'Localizzazione sito web & landing page (da 0,11 €/parola)',
              en: 'Website & landing page localization (from €0.11/word)',
              fr: 'Localisation de site web & pages (dès 0,11 €/mot)',
              es: 'Localización de sitio web y landing pages (desde 0,11 €/palabra)',
            },
          },
          {
            id: 'revision_proofreading',
            label: {
              it: 'Revisione & correzione bozze testo già tradotto (da 0,03 €/parola)',
              en: 'Proofreading & polish of existing translation (from €0.03/word)',
              fr: 'Relecture & révision de texte déjà traduit (dès 0,03 €/mot)',
              es: 'Revisión y corrección de texto ya traducido (desde 0,03 €/palabra)',
            },
          },
        ],
        allowCustomText: true,
      },
      {
        id: 'volume',
        prompt: {
          it: 'Qual è il volume indicativo del testo da elaborare?',
          en: 'What is the approximate volume of the text?',
          fr: 'Quel est le volume approximatif du texte ?',
          es: '¿Cuál es el volumen orientativo del texto?',
        },
        placeholder: {
          it: 'Es. circa 2.500 parole oppure seleziona una fascia',
          en: 'E.g. approx. 2,500 words or select a range',
          fr: 'Ex. environ 2 500 mots ou choisir une tranche',
          es: 'Ej. aprox. 2.500 palabras o selecciona un rango',
        },
        choices: [
          {
            id: 'under_1000',
            label: {
              it: 'Meno di 1.000 parole (testo breve)',
              en: 'Less than 1,000 words (short text)',
              fr: 'Moins de 1 000 mots (texte court)',
              es: 'Menos de 1.000 palabras (texto breve)',
            },
          },
          {
            id: '1000_to_4999',
            label: {
              it: '1.000 – 4.999 parole (testo medio)',
              en: '1,000 – 4,999 words (medium text)',
              fr: '1 000 – 4 999 mots (volume moyen)',
              es: '1.000 – 4.999 palabras (volumen medio)',
            },
          },
          {
            id: '5000_to_14999',
            label: {
              it: '5.000 – 14.999 parole (progetto ampio)',
              en: '5,000 – 14,999 words (large project)',
              fr: '5 000 – 14 999 mots (projet étendu)',
              es: '5.000 – 14.999 palabras (proyecto amplio)',
            },
          },
          {
            id: '15000_plus',
            label: {
              it: '15.000 parole o più / collaborazione continuativa',
              en: '15,000 words or more / ongoing collaboration',
              fr: '15 000 mots ou plus / collaboration continue',
              es: '15.000 palabras o más / colaboración continuada',
            },
          },
          {
            id: 'to_be_counted',
            label: {
              it: 'Numero da verificare / bozza in preparazione',
              en: 'Count to be confirmed / draft in progress',
              fr: 'Nombre à vérifier / brouillon en cours',
              es: 'Número por confirmar / borrador en curso',
            },
          },
        ],
        allowCustomText: true,
      },
      {
        id: 'deadline',
        prompt: {
          it: 'Hai una scadenza desiderata o una tempistica preferenziale?',
          en: 'Do you have a target delivery timeline?',
          fr: 'Avez-vous une date limite ou un calendrier souhaité ?',
          es: '¿Tienes una fecha límite o plazo preferente?',
        },
        placeholder: {
          it: 'Es. entro fine mese o seleziona una modalità',
          en: 'E.g. by end of month or select an option',
          fr: 'Ex. avant la fin du mois ou choisir une option',
          es: 'Ej. para fin de mes o selecciona una opción',
        },
        choices: [
          {
            id: 'flexible',
            label: {
              it: 'Flessibile / Senza urgenza particolare',
              en: 'Flexible / No urgent deadline',
              fr: 'Flexible / Pas d’urgence particulière',
              es: 'Flexible / Sin urgencia particular',
            },
          },
          {
            id: 'standard',
            label: {
              it: 'Tempistiche ordinarie (concordate alla visione del testo)',
              en: 'Standard turnaround (agreed upon text review)',
              fr: 'Délais réguliers (convenus après examen du texte)',
              es: 'Plazos ordinarios (a convenir tras revisar el texto)',
            },
          },
          {
            id: 'desired_date',
            label: {
              it: 'Data o periodo specifico (indica sotto, soggetta a conferma)',
              en: 'Specific date or period (specify below, subject to agreement)',
              fr: 'Date ou période souhaitée (préciser ci-dessous, sous réserve)',
              es: 'Fecha o período específico (indicar abajo, sujeto a confirmación)',
            },
          },
        ],
        allowCustomText: true,
      },
    ],
  },
  writing: {
    serviceKey: 'writing',
    serviceId: CONCIERGE_TO_OFFICIAL_SERVICE_ID.writing,
    title: {
      it: 'Scrittura & Revisione Testi',
      en: 'Writing & Text Revision',
      fr: 'Rédaction & Révision de Textes',
      es: 'Redacción y Revisión de Textos',
    },
    shortDescription: {
      it: 'Copywriting chiaro, correzione bozze e ottimizzazione testi',
      en: 'Clear copywriting, proofreading, and humanizing drafts',
      fr: 'Rédaction claire, relecture soignée et optimisation',
      es: 'Redacción clara, corrección de estilo y optimización',
    },
    questions: [
      {
        id: 'content_type',
        prompt: {
          it: 'Che genere di contenuti devi preparare o revisionare?',
          en: 'What kind of content do you need to write or revise?',
          fr: 'Quel type de contenu devez-vous préparer ou réviser ?',
          es: '¿Qué tipo de contenidos necesitas redactar o revisar?',
        },
        choices: [
          {
            id: 'web_copy',
            label: {
              it: 'Testi per sito web o landing page',
              en: 'Website or landing page copy',
              fr: 'Textes de site web ou page de vente',
              es: 'Textos para web o landing page',
            },
          },
          {
            id: 'newsletter_articles',
            label: {
              it: 'Newsletter, email marketing o articoli blog',
              en: 'Newsletters, marketing emails or blog posts',
              fr: 'Newsletters, emails marketing ou articles de blog',
              es: 'Newsletters, emails comerciales o artículos blog',
            },
          },
          {
            id: 'ai_refinement',
            label: {
              it: 'Revisione e umanizzazione di bozze create con AI',
              en: 'Polishing & humanizing AI-generated drafts',
              fr: 'Révision et humanisation de brouillons générés par IA',
              es: 'Revisión y humanización de borradores con IA',
            },
          },
          {
            id: 'guides_presentations',
            label: {
              it: 'Guide informative, schede o presentazioni',
              en: 'Informative guides, handouts or slide copy',
              fr: 'Guides pratiques, fiches ou présentations',
              es: 'Guías informativas, fichas o presentaciones',
            },
          },
        ],
        allowCustomText: true,
      },
      {
        id: 'target_audience',
        prompt: {
          it: 'A quale pubblico si rivolge la comunicazione?',
          en: 'Who is the target audience?',
          fr: 'À quel public s’adresse votre communication ?',
          es: '¿A qué público va dirigida la comunicación?',
        },
        choices: [
          {
            id: 'b2b_professionals',
            label: {
              it: 'Clienti B2B, professionisti e aziende',
              en: 'B2B clients, professionals & companies',
              fr: 'Clients B2B, professionnels et entreprises',
              es: 'Clientes B2B, profesionales y empresas',
            },
          },
          {
            id: 'b2c_consumers',
            label: {
              it: 'Consumatori finali / Pubblico generale (B2C)',
              en: 'Final consumers / General public (B2C)',
              fr: 'Grand public / Consommateurs finals (B2C)',
              es: 'Consumidores finales / Público general (B2C)',
            },
          },
          {
            id: 'internal_partners',
            label: {
              it: 'Collaboratori interni e partner di progetto',
              en: 'Internal collaborators & project partners',
              fr: 'Équipes internes et partenaires de projet',
              es: 'Colaboradores internos y socios de proyecto',
            },
          },
        ],
        allowCustomText: true,
      },
      {
        id: 'deadline',
        prompt: {
          it: 'Qual è la tempistica desiderata?',
          en: 'What is your target timeline?',
          fr: 'Quel est votre calendrier souhaité ?',
          es: '¿Qué plazo de entrega tienes previsto?',
        },
        choices: [
          {
            id: 'within_week',
            label: {
              it: 'Entro 1 settimana',
              en: 'Within 1 week',
              fr: 'Sous 1 semaine',
              es: 'En 1 semana',
            },
          },
          {
            id: 'within_two_weeks',
            label: {
              it: 'Entro 2-3 settimane',
              en: 'Within 2-3 weeks',
              fr: 'Sous 2 à 3 semaines',
              es: 'En 2-3 semanas',
            },
          },
          {
            id: 'flexible',
            label: {
              it: 'Flessibile / In fase di impostazione',
              en: 'Flexible / In planning phase',
              fr: 'Flexible / En cours de cadrage',
              es: 'Flexible / En fase de planteamiento',
            },
          },
        ],
        allowCustomText: true,
      },
    ],
  },
  research: {
    serviceKey: 'research',
    serviceId: CONCIERGE_TO_OFFICIAL_SERVICE_ID.research,
    title: {
      it: 'Ricerche Online & Desk Research',
      en: 'Online Research & Desk Research',
      fr: 'Recherches en Ligne & Veille',
      es: 'Investigación Online & Desk Research',
    },
    shortDescription: {
      it: 'Benchmark concorrenti, ricerca fornitori e sintesi strutturate',
      en: 'Competitor benchmarks, supplier research, and structured reports',
      fr: 'Benchmark concurrentiel, recherche de prestataires et synthèses',
      es: 'Análisis de competencia, búsqueda de proveedores e informes',
    },
    questions: [
      {
        id: 'research_goal',
        prompt: {
          it: 'Qual è l’obiettivo principale della ricerca?',
          en: 'What is the main objective of the research?',
          fr: 'Quel est l’objectif principal de cette recherche ?',
          es: '¿Cuál es el objetivo principal de la investigación?',
        },
        choices: [
          {
            id: 'competitor_benchmark',
            label: {
              it: 'Analisi concorrenti e confronto tariffe/posizionamento',
              en: 'Competitor benchmark & rate/positioning analysis',
              fr: 'Analyse des concurrents et comparaison tarifs/positionnement',
              es: 'Análisis de competencia y comparativa de tarifas',
            },
          },
          {
            id: 'supplier_tools',
            label: {
              it: 'Ricerca fornitori, software o soluzioni digitali',
              en: 'Supplier, software, or digital tool sourcing',
              fr: 'Recherche de fournisseurs, logiciels ou outils',
              es: 'Búsqueda de proveedores o herramientas digitales',
            },
          },
          {
            id: 'market_expansion',
            label: {
              it: 'Esplorazione per espansione mercati esteri (EN/FR/ES)',
              en: 'Exploratory research for foreign markets (EN/FR/ES)',
              fr: 'Veille pour développement à l’international (EN/FR/ES)',
              es: 'Exploración para mercados exteriores (EN/FR/ES)',
            },
          },
        ],
        allowCustomText: true,
      },
      {
        id: 'deliverable_format',
        prompt: {
          it: 'In quale formato desideri ricevere i risultati?',
          en: 'In which format would you like to receive the deliverables?',
          fr: 'Sous quel format souhaitez-vous recevoir les livrables ?',
          es: '¿En qué formato deseas recibir los resultados?',
        },
        choices: [
          {
            id: 'executive_pdf',
            label: {
              it: 'Report esecutivo sintetico in PDF',
              en: 'Executive summary report in PDF',
              fr: 'Rapport synthétique au format PDF',
              es: 'Informe ejecutivo en PDF',
            },
          },
          {
            id: 'spreadsheet',
            label: {
              it: 'Foglio di calcolo comparativo (Excel / Google Sheets)',
              en: 'Comparative spreadsheet (Excel / Google Sheets)',
              fr: 'Tableau comparatif (Excel / Google Sheets)',
              es: 'Hoja de cálculo comparativa (Excel / Google Sheets)',
            },
          },
          {
            id: 'both',
            label: {
              it: 'Foglio comparativo + Sintesi esecutiva',
              en: 'Both spreadsheet and executive summary',
              fr: 'Tableau complet + Note de synthèse',
              es: 'Hoja comparativa + Resumen ejecutivo',
            },
          },
        ],
        allowCustomText: true,
      },
      {
        id: 'deadline',
        prompt: {
          it: 'Entro quando ti occorrono i risultati?',
          en: 'When do you need the findings?',
          fr: 'Pour quand avez-vous besoin des résultats ?',
          es: '¿Para cuándo necesitas las conclusiones?',
        },
        choices: [
          {
            id: 'fast',
            label: {
              it: 'Entro 4-5 giorni lavorativi',
              en: 'Within 4-5 business days',
              fr: 'Sous 4 à 5 jours ouvrés',
              es: 'En 4-5 días laborables',
            },
          },
          {
            id: 'normal',
            label: {
              it: 'Entro 1-2 settimane',
              en: 'Within 1-2 weeks',
              fr: 'Sous 1 à 2 semaines',
              es: 'En 1-2 semanas',
            },
          },
          {
            id: 'flexible',
            label: {
              it: 'Nessuna urgenza / Da pianificare',
              en: 'Flexible timeline',
              fr: 'Aucune urgence particulière',
              es: 'Sin urgencia / Plazo flexible',
            },
          },
        ],
        allowCustomText: true,
      },
    ],
  },
  web: {
    serviceKey: 'web',
    serviceId: CONCIERGE_TO_OFFICIAL_SERVICE_ID.web,
    title: {
      it: 'Siti Web & Landing Page',
      en: 'Websites & Landing Pages',
      fr: 'Sites Web & Landing Pages',
      es: 'Sitios Web & Landing Pages',
    },
    shortDescription: {
      it: 'Pagine essenziali, siti vetrina chiari e architettura multilingue',
      en: 'Clear showcase websites, landing pages, and multilingual architecture',
      fr: 'Landing pages claires, sites vitrines et architecture multilingue',
      es: 'Páginas web claras, landing pages y arquitectura multilingüe',
    },
    questions: [
      {
        id: 'project_type',
        prompt: {
          it: 'Qual è la tipologia del tuo progetto web?',
          en: 'What type of web project do you need?',
          fr: 'Quel est le type de votre projet web ?',
          es: '¿Qué tipo de proyecto web necesitas?',
        },
        choices: [
          {
            id: 'landing_page',
            label: {
              it: 'Landing page a pagina singola per servizio o offerta (da €290)',
              en: 'Single landing page for service or launch (from €290)',
              fr: 'Landing page monopage pour offre ou lancement (dès 290 €)',
              es: 'Landing page monospágina para oferta o servicio (desde 290 €)',
            },
          },
          {
            id: 'showcase_site',
            label: {
              it: 'Sito vetrina essenziale completo fino a 4-6 pagine (da €590)',
              en: 'Showcase website up to 4-6 pages (from €590)',
              fr: 'Site vitrine complet jusqu’à 4-6 pages (dès 590 €)',
              es: 'Sitio web profesional completo de 4-6 páginas (desde 590 €)',
            },
          },
          {
            id: 'redesign_review',
            label: {
              it: 'Restyling o riorganizzazione di un sito esistente',
              en: 'Restyling or restructuring an existing website',
              fr: 'Refonte ou restructuration d’un site existant',
              es: 'Rediseño o reorganización de sitio existente',
            },
          },
        ],
        allowCustomText: true,
      },
      {
        id: 'languages_needed',
        prompt: {
          it: 'Il sito dovrà essere monolingua o multilingue?',
          en: 'Will the website be single-language or multilingual?',
          fr: 'Le site sera-t-il unilingue ou multilingue ?',
          es: '¿El sitio será monolingüe o multilingüe?',
        },
        choices: [
          {
            id: 'single_it',
            label: {
              it: 'Monolingua (solo Italiano)',
              en: 'Single language (Italian only)',
              fr: 'Unilingue (Italien uniquement)',
              es: 'Monolingüe (solo Italiano)',
            },
          },
          {
            id: 'bilingual',
            label: {
              it: 'Bilingue (es. Italiano + Inglese)',
              en: 'Bilingual (e.g. Italian + English)',
              fr: 'Bilingue (ex. Italien + Anglais)',
              es: 'Bilingüe (ej. Italiano + Inglés)',
            },
          },
          {
            id: 'multilingual_4',
            label: {
              it: 'Multilingue europeo completo (IT, EN, FR, ES)',
              en: 'Full European multilingual (IT, EN, FR, ES)',
              fr: 'Multilingue européen complet (IT, EN, FR, ES)',
              es: 'Multilingüe europeo completo (IT, EN, FR, ES)',
            },
          },
        ],
        allowCustomText: true,
      },
      {
        id: 'readiness',
        prompt: {
          it: 'I testi e i contenuti del sito sono già pronti?',
          en: 'Are the copy and contents ready?',
          fr: 'Les textes et contenus sont-ils déjà prêts ?',
          es: '¿Los textos y contenidos están listos?',
        },
        choices: [
          {
            id: 'ready',
            label: {
              it: 'Sì, ho già i testi pronti da pubblicare',
              en: 'Yes, copy is ready to publish',
              fr: 'Oui, les textes sont prêts',
              es: 'Sí, los textos están listos',
            },
          },
          {
            id: 'need_copywriting',
            label: {
              it: 'No, desidero anche supporto per la stesura o revisione testi',
              en: 'No, I also need copywriting / editorial polish',
              fr: 'Non, j’ai aussi besoin d’aide pour la rédaction des textes',
              es: 'No, necesito también redacción o revisión de textos',
            },
          },
          {
            id: 'partial',
            label: {
              it: 'Ho alcune bozze da perfezionare',
              en: 'I have rough drafts to refine',
              fr: 'J’ai quelques ébauches à finaliser',
              es: 'Tengo borradores por perfeccionar',
            },
          },
        ],
        allowCustomText: true,
      },
    ],
  },
};

/**
 * Validates and sanitizes structured answers, trimming strings and applying max length safety.
 */
export function sanitizeIntakeAnswers(answers: Record<string, string>): Record<string, string> {
  const sanitized: Record<string, string> = {};
  for (const [key, val] of Object.entries(answers)) {
    if (typeof val === 'string') {
      // Limit field length to 300 characters for safety
      sanitized[key] = val.trim().slice(0, 300);
    }
  }
  return sanitized;
}

/**
 * Formats structured answers into a clear, scannable brief suitable for insertion into the ContactForm.
 */
export function formatQuoteDraftSummary(
  serviceKey: ServiceKey,
  answers: Record<string, string>,
  lang: Language
): string {
  const schema = INTAKE_SCHEMAS[serviceKey];
  if (!schema) return '';

  const headers: Record<Language, string> = {
    it: `[RICHIESTA PREVENTIVO ORIENTATIVO — ${schema.title[lang].toUpperCase()}]`,
    en: `[INDICATIVE QUOTE BRIEF — ${schema.title[lang].toUpperCase()}]`,
    fr: `[BRIEF POUR DEVIS ESTIMATIF — ${schema.title[lang].toUpperCase()}]`,
    es: `[SOLICITUD DE PRESUPUESTO ORIENTATIVO — ${schema.title[lang].toUpperCase()}]`,
  };

  const lines: string[] = [headers[lang], ''];

  for (const q of schema.questions) {
    const rawVal = answers[q.id];
    if (!rawVal) continue;

    // Check if the answer matches a predefined choice id
    const matchedChoice = q.choices?.find((c) => c.id === rawVal);
    const displayVal = matchedChoice ? matchedChoice.label[lang] : rawVal;

    lines.push(`• ${q.prompt[lang]}:`);
    lines.push(`  ${displayVal}`);
  }

  const footers: Record<Language, string> = {
    it: '\nNota: Riepilogo preliminare orientativo predisposto tramite assistente digitale di Noemi. Tariffe e tempistiche soggette a valutazione del progetto. Disponibile per fornire file o dettagli aggiuntivi.',
    en: '\nNote: Preliminary indicative brief compiled with Noemi’s digital assistant. Rates and turnaround subject to project evaluation. Available to provide additional context or files.',
    fr: '\nNote : Synthèse indicative préparée avec l’assistant numérique de Noemi. Tarifs et délais soumis à l’évaluation du projet. Disponible pour transmettre des précisions ou fichiers.',
    es: '\nNota: Resumen preliminar orientativo preparado con el asistente digital de Noemi. Tarifas y plazos sujetos a valoración del proyecto. Disponible para aportar más detalles o archivos.',
  };

  lines.push(footers[lang]);

  return lines.join('\n');
}
