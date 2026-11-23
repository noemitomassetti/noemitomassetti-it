import { Language } from '../i18n/types';
import { ServiceKey } from './types';
import { detectExcludedService, SCOPE_EXCLUDED_REPLY } from '../serviceScope';

export interface RecognizedIntent {
  serviceKey?: ServiceKey;
  isScopeExcluded: boolean;
  explanation: Record<Language, string>;
}

/**
 * Deterministically analyzes free-text queries across Italian, English, French, and Spanish.
 * Never assigns an arbitrary service if confidence is low; defaults to a neutral response.
 */
export function recognizeIntent(rawQuery: string): RecognizedIntent {
  // Normalize quotes and accents for resilient multilingual comparison
  const normalized = rawQuery
    .toLowerCase()
    .replace(/['’]/g, ' ')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();

  const excludedService = detectExcludedService(rawQuery);
  if (excludedService) {
    return { serviceKey: undefined, isScopeExcluded: true, explanation: SCOPE_EXCLUDED_REPLY[excludedService] };
  }

  // Acquisition and participant recruitment are outside the offered service scope.
  const acquisitionKeywords = [
    'lead generation', 'lead gen', 'cold outreach', 'cold calling',
    'acquisizione clienti', 'ricerca di contatti commerciali', 'ricerca contatti per',
    'prospecting', 'customer acquisition', 'sales prospect', 'contact research for',
    'prospection', 'generation de leads', 'acquisition de clients',
    'generacion de leads', 'captacion de clientes', 'prospeccion',
    'reclutamento di partecipanti', 'recruit interview participants',
    'interview participant recruitment', 'recrutement de participants',
    'reclutamiento de participantes', 'pay-per-appointment', 'pay-per-interview',
    'compenso per appuntamento', 'compenso per intervista',
  ];
  if (acquisitionKeywords.some((keyword) => normalized.includes(keyword))) {
    return {
      isScopeExcluded: true,
      explanation: SCOPE_EXCLUDED_REPLY.acquisition,
    };
  }

  // Authoritative serviceScope check above handles accounting and administration.
  // Broad substring checks such as 'tax', 'gestor' and 'invoic' produced
  // false exclusions for legitimate correspondence or operational enquiries.

  // Curated 24/7 multilingual FAQ. Answers are deterministic; never claim a person is online.
  const faqs: Array<{ keys: string[]; answer: Record<Language, string> }> = [
    { keys: ['24/7','h24','sempre disponibile','fuori orario','aperto oggi','open 24','available 24','24 heures','24 horas','hors horaires','fuera de horario'], answer: {
      it: 'Questo assistente automatico è consultabile anche fuori orario, quando il sito è raggiungibile. Noemi esamina personalmente le richieste ricevute durante il proprio orario di lavoro; non è prevista una risposta umana immediata.',
      en: 'This automated assistant is available whenever the website is online, including outside office hours. Noemi personally reviews enquiries during her working hours; immediate human replies are not guaranteed.',
      fr: 'Cet assistant automatique est accessible même hors des horaires de bureau, lorsque le site est disponible. Noemi examine personnellement les demandes pendant ses heures de travail ; une réponse humaine immédiate n’est pas garantie.',
      es: 'Este asistente automático está disponible fuera del horario laboral siempre que el sitio funcione. Noemi revisa personalmente las solicitudes durante su horario de trabajo; no se garantiza una respuesta humana inmediata.'
    }},
    { keys: ['come funziona','come lavori','how does it work','how do you work','comment ca marche','comment travaillez','como funciona','como trabajas','procedura','processo di lavoro'], answer: {
      it: 'Il percorso è semplice: descrivi ciò di cui hai bisogno, ricevi una prima indicazione dei costi, Noemi verifica il materiale e invia un preventivo scritto. Solo dopo l’accettazione si concordano tempi e attività. Non è obbligatoria una call.',
      en: 'Describe your needs, review an indicative estimate, and Noemi will assess the material and send a written quote. Timelines and work begin only after acceptance. No discovery call is required.',
      fr: 'Décrivez votre besoin, consultez une estimation indicative, puis Noemi étudie les éléments et prépare un devis écrit. Les délais et le travail sont convenus après acceptation. Aucun appel préalable obligatoire.',
      es: 'Describe tu necesidad, consulta una estimación orientativa y Noemi evaluará el material para enviar un presupuesto escrito. El trabajo y los plazos se acuerdan tras su aceptación. No es obligatoria una llamada.'
    }},
    { keys: ['quali lingue','che lingue','which languages','languages do you','quelles langues','idiomas','que idiomas','langues propose'], answer: {
      it: 'Noemi è madrelingua italiana, con inglese e francese avanzati e spagnolo B2. Offre traduzioni professionali dall’italiano verso l’inglese, il francese e lo spagnolo e da queste lingue verso l’italiano. Lingue, settore, materiali e tempi sono definiti nel preventivo.',
      en: 'Noemi is a native Italian speaker, with advanced English and French and B2 Spanish. She provides professional translation from Italian into English, French and Spanish and from these languages into Italian. Language pairs, subject matter, materials and deadlines are defined in the written quote.',
      fr: 'De langue maternelle italienne, Noemi possède un niveau avancé en anglais et en français, ainsi qu’un niveau B2 en espagnol. Elle traduit de l’italien vers l’anglais, le français et l’espagnol, ainsi que de ces langues vers l’italien. Les textes, les domaines et les délais sont précisés dans le devis.',
      es: 'El italiano es la lengua materna de Noemi; tiene un nivel avanzado de inglés y francés y un nivel B2 de español. Traduce profesionalmente del italiano al inglés, francés y español y de estos idiomas al italiano. Los textos, las especialidades y los plazos se concretan en el presupuesto.'
    }},
    { keys: ['portfolio','esempi di lavoro','esempi pratici','sample work','work samples','case studies','exemples de travaux','exemples de realisations','ejemplos de trabajo','muestras de trabajo'], answer: {
      it: 'Nel portfolio trovi esempi dimostrativi di segreteria, assistenza clienti, ordini, listini, preventivi operativi, comunicazioni, traduzioni e localizzazioni. I dati sono fittizi: non sono incarichi commissionati da clienti, né servizi amministrativi o contabili.',
      en: 'The portfolio includes practical demonstrations of email management, written customer care, back office, catalogues, translation and localisation. They use fictional data and are clearly marked as independent samples, not commissioned client projects.',
      fr: 'Le portfolio présente des démonstrations concrètes : gestion des e-mails, relation client écrite, back-office, catalogues, traduction et localisation. Ces exemples utilisent des données fictives et ne correspondent pas à des missions réelles.',
      es: 'El portafolio incluye ejemplos prácticos de gestión de correos, atención escrita al cliente, back office, catálogos, traducción y localización. Son muestras independientes con datos ficticios, no encargos reales.'
    }},
    { keys: ['quanto tempo','tempi di consegna','quando consegni','turnaround','how long does it take','delivery time','delai de livraison','combien de temps','plazo de entrega','cuanto tiempo'], answer: {
      it: 'I tempi dipendono da quantità, complessità e disponibilità. Per evitare promesse non realistiche, Noemi indica una scadenza nel preventivo scritto dopo aver esaminato la richiesta.',
      en: 'Delivery timing depends on volume, complexity and availability. Noemi confirms a realistic timeline in the written quote after reviewing the request.',
      fr: 'Les délais dépendent du volume, de la complexité et des disponibilités. Noemi confirme un calendrier réaliste dans le devis écrit après examen de la demande.',
      es: 'Los plazos dependen del volumen, la complejidad y la disponibilidad. Noemi confirma un calendario realista en el presupuesto escrito tras estudiar la solicitud.'
    }},
    { keys: ['pagamento','come si paga','payment terms','how to pay','paiement','modalites de paiement','formas de pago','como se paga'], answer: {
      it: 'Le modalità di pagamento sono indicate nel preventivo scritto. Per i pacchetti di ore è normalmente previsto il pagamento anticipato dopo l’accettazione; non viene effettuato alcun addebito da questa chat.',
      en: 'Payment terms are set out in the written quote. Hour packages are normally prepaid after acceptance. This chat does not charge you anything.',
      fr: 'Les modalités de paiement sont précisées dans le devis écrit. Les forfaits horaires sont normalement payés à l’avance après acceptation. Aucun paiement n’est effectué dans ce chat.',
      es: 'Las condiciones de pago figuran en el presupuesto escrito. Los paquetes de horas normalmente se abonan por adelantado tras la aceptación. Este chat no realiza cobros.'
    }},
    { keys: ['riservatezza','confidenzial','nda','privacy dei documenti','confidentiality','confidential','confidentialite','confidencialidad'], answer: {
      it: 'Le informazioni ricevute per un preventivo sono trattate per valutarne la richiesta. Per incarichi con materiale riservato, Noemi può concordare istruzioni di riservatezza e un accordo appropriato prima dell’accesso ai documenti. Non inviare dati sensibili in questa chat.',
      en: 'Enquiry information is used to assess the request. For confidential projects, Noemi can agree on confidentiality arrangements before accessing the documents. Please do not share sensitive information in this chat.',
      fr: 'Les informations fournies servent à examiner votre demande. Pour les dossiers confidentiels, des modalités de confidentialité adaptées peuvent être convenues avant l’accès aux documents. Ne partagez pas de données sensibles dans ce chat.',
      es: 'Los datos de la consulta sirven para evaluar la solicitud. Se pueden acordar condiciones de confidencialidad antes de acceder a documentos reservados. No compartas información sensible en este chat.'
    }},
    { keys: ['abbonamento','contratto continuativo','collaborazione continuativa','monthly support','ongoing support','retainer','forfait mensuel','collaboration reguliere','soporte mensual','colaboracion continua'], answer: {
      it: 'È possibile concordare assistenza continuativa o pacchetti di ore, con attività, disponibilità e compenso definiti in un accordo scritto. Non è necessario acquistare un abbonamento software per incaricare Noemi.',
      en: 'Ongoing support or prepaid hour packages can be agreed in writing, defining scope, availability and fees. You do not need to subscribe to any software to work with Noemi.',
      fr: 'Un accompagnement régulier ou des forfaits horaires peuvent être convenus par écrit, avec périmètre, disponibilité et rémunération définis. Aucun abonnement logiciel n’est requis.',
      es: 'Se puede acordar apoyo recurrente o paquetes de horas mediante acuerdo escrito sobre tareas, disponibilidad y honorarios. No necesitas suscribirte a ninguna aplicación.'
    }},
    { keys: ['ordini clienti','gestione ordini','order entry','sales orders','suivi des commandes','gestion des commandes','gestion de pedidos','pedidos clientes'], answer: {
      it: 'Noemi può supportare l’inserimento e l’organizzazione di ordini, i controlli documentali e l’aggiornamento di registri operativi secondo le procedure concordate. Non sostituisce attività contabili o autorizzazioni commerciali del cliente.',
      en: 'Noemi can help enter and organise orders, check documentation and maintain operational records within agreed procedures. Accounting and commercial approvals remain with the client.',
      fr: 'Noemi peut aider à saisir et organiser les commandes, contrôler les documents et mettre à jour les registres opérationnels selon des procédures convenues. La comptabilité et les validations commerciales restent à la charge du client.',
      es: 'Noemi puede ayudar a registrar y organizar pedidos, revisar documentos y actualizar registros operativos según los procesos acordados. La contabilidad y la aprobación comercial siguen a cargo del cliente.'
    }},
    { keys: ['preventivo','quotation','quote','devis','presupuesto','quanto costa','how much','combien coute','cuanto cuesta'], answer: {
      it: 'Posso fornirti subito una stima indicativa per ore o numero di parole usando il calcolatore qui nella chat. Per una proposta definitiva Noemi dovrà verificare contenuti, complessità, scadenze e condizioni dell’incarico.',
      en: 'I can calculate an indicative estimate for hours or source-word count using the calculator in this chat. Noemi personally verifies the material, scope, timeline and terms before issuing a final quote.',
      fr: 'Je peux calculer une estimation indicative à partir du nombre d’heures ou de mots avec le calculateur de ce chat. Noemi examine ensuite les documents, les délais et les conditions avant d’émettre un devis définitif.',
      es: 'Puedo calcular una estimación orientativa por horas o número de palabras con el calculador de este chat. Noemi revisa el material, los plazos y las condiciones antes de emitir un presupuesto definitivo.'
    }},
  ];
  // Short keywords such as NDA must match a whole term: 'agenda' otherwise
  // accidentally triggers confidentiality instead of calendar support.
  // A request for a quote *for translation* should open the relevant service,
  // rather than being intercepted by the generic pricing FAQ.
  const mentionsTranslation = /traduz|tradott|tradurr|translat|localizz|localiz|traduct|traduir|traducc|traducir/.test(normalized);
  const genericQuoteKeys = new Set(['preventivo', 'quotation', 'quote', 'devis', 'presupuesto', 'quanto costa', 'how much', 'combien coute', 'cuanto cuesta']);
  for (const faq of faqs) {
    if (faq.keys.some((key) => {
      if (key === 'nda') return /(?:^|\W)nda(?:$|\W)/.test(normalized);
      if (mentionsTranslation && genericQuoteKeys.has(key)) return false;
      return normalized.includes(key);
    })) {
      return { serviceKey: undefined, isScopeExcluded: false, explanation: faq.answer };
    }
  }

  // 2. Definitive keyword maps for each of the 5 services
  const serviceKeywordMap: Record<ServiceKey, string[]> = {
    web: [
      'website',
      'site web',
      'sitio web',
      'sito web',
      'landing',
      'showcase',
      'vetrina',
      'pagina web',
      'web copy',
    ],
    writing: [
      'copywrit',
      'articol',
      'article',
      'blog',
      'newsletter',
      'bozz',
      'brouillon',
      'borrador',
      'draft',
      'scrittur',
      'humaniz',
      'umanizz',
      'redaction',
      'redacc',
      'proofread',
      'editing',
      'relecture',
      'correzion',
    ],
    translation: [
      'traduz',
      'tradott',
      'tradurr',
      'translat',
      'localizz',
      'localiz',
      'traduct',
      'traduir',
      'traducc',
      'traducir',
    ],
    backoffice: [
      'assistente virtuale',
      'virtual assist',
      'assistance virtuelle',
      'assistant virtuel',
      'asistente virtual',
      'asistencia virtual',
      'back office',
      'backoffice',
      'segret',
      'agenda',
      'appuntament',
      'calendario',
      'calendar',
      'calendrier',
      'customer care',
      'assistenza clienti',
      'support client',
      'atencion al cliente',
      'organizzar',
      'inbox',
      'email',
      'e-mail',
      'posta elettronica',
      'correo',
      'courriel',
    ],
    research: [
      'benchmark',
      'desk research',
      'concorrent',
      'competitor',
      'fornitor',
      'ricerc',
      'research',
      'indagin',
      'mercato',
      'veille',
      'investig',
    ],
  };

  // Calculate matching scores deterministically
  let bestService: ServiceKey | undefined = undefined;
  let maxScore = 0;

  (Object.keys(serviceKeywordMap) as ServiceKey[]).forEach((key) => {
    let score = 0;
    for (const kw of serviceKeywordMap[key]) {
      if (normalized.includes(kw)) {
        // Longer keyword matches receive higher specificity weight
        score += kw.length >= 8 ? 3 : 1;
      }
    }
    // Translating a website or an email is a translation enquiry, not a
    // request for website development or inbox management.
    if (key === 'translation' && /traduz|tradott|tradurr|translat|traduct|traduir|traducc|traducir/.test(normalized)) score += 5;
    if (score > maxScore) {
      maxScore = score;
      bestService = key;
    }
  });

  if (bestService && maxScore > 0) {
    const explanations: Record<ServiceKey, Record<Language, string>> = {
      translation: {
        it: 'Traduco tra italiano e inglese, francese o spagnolo in entrambe le direzioni. Per EN/FR/ES → IT le tariffe indicative partono da 0,09 €/parola sorgente; per IT → EN/FR/ES il preventivo viene definito dopo la valutazione del testo. Puoi selezionare la coppia linguistica nella richiesta guidata.',
        en: 'Translation is available between Italian and English, French or Spanish in both directions. Indicative EN/FR/ES → IT rates start at €0.09 per source word; IT → EN/FR/ES work is individually quoted after reviewing the text. Choose your language pair in the guided enquiry.',
        fr: 'Traductions possibles entre l’italien et l’anglais, le français ou l’espagnol, dans les deux sens. Les tarifs indicatifs EN/FR/ES → IT commencent à 0,09 € par mot source ; IT → EN/FR/ES fait l’objet d’un devis après examen du texte. Choisissez votre combinaison linguistique dans le formulaire guidé.',
        es: 'Traducción entre el italiano y el inglés, francés o español en ambas direcciones. La tarifa orientativa EN/FR/ES → IT parte de 0,09 € por palabra de origen; IT → EN/FR/ES se presupuesta tras revisar el texto. Selecciona tu combinación de idiomas en la solicitud guiada.',
      },
      backoffice: {
        it: 'Assistenza Virtuale & Back Office: supporto operativo a €25/h, pacchetto 10 ore a €240, pacchetto 20 ore a €460 (oltre le 20 ore su preventivo personalizzato). Ideale per delegare agenda, email e organizzazione.',
        en: 'Virtual Assistance & Back Office: operational support at €25/hour, 10-hour package at €240, 20-hour package at €460 (custom quote above 20 hours). Ideal for email, calendar, and daily task delegation.',
        fr: 'Assistance Virtuelle & Back-Office : soutien opérationnel à 25 €/h, forfait 10h à 240 €, forfait 20h à 460 € (au-delà sur devis sur mesure). Idéal pour trier les emails, gérer l’agenda et s’organiser.',
        es: 'Asistencia Virtual & Back Office: soporte operativo a 25 €/h, paquete 10h a 240 €, paquete 20h a 460 € (más de 20h con presupuesto a medida). Perfecto para delegar agenda, correo y tareas recurrentes.',
      },
      writing: {
        it: 'Scrittura & Revisione Testi: elaborazione di testi chiari per siti web, newsletter, presentazioni e ottimizzazione di bozze create con AI per renderle naturali e coerenti con la tua voce.',
        en: 'Writing & Text Revision: clear copywriting for websites, marketing newsletters, and polishing/humanizing AI-generated drafts to reflect your authentic brand voice.',
        fr: 'Rédaction & Révision de Textes : création de textes clairs pour sites web, newsletters, et perfectionnement/humanisation de brouillons générés par IA.',
        es: 'Redacción y Revisión de Textos: redacción de textos claros para webs, newsletters y perfeccionamiento/humanización de borradores elaborados con IA.',
      },
      research: {
        it: 'Ricerche Online & Desk Research: analisi comparative dei concorrenti, verifica tariffe, ricerca fornitori o strumenti digitali, con sintesi esecutive PDF o tabelle operative (come supporto a incarichi concordati).',
        en: 'Online & Desk Research: competitor benchmarking, pricing scans, tool/vendor sourcing, delivered in structured spreadsheets or executive PDF reports (as part of an agreed professional assignment).',
        fr: 'Recherches en Ligne & Veille : analyse concurrentielle, veille tarifaire, recherche d’outils ou prestataires avec restitution sous forme de tableaux ou rapport PDF (dans le cadre d’une mission convenue).',
        es: 'Investigación Online & Desk Research: análisis comparativo de competidores, tarifas, búsqueda de proveedores o software, entregado en hoja de cálculo o informe ejecutivo (como parte de un encargo acordado).',
      },
      web: {
        it: 'Posso aiutarti con i testi di siti e landing page, la revisione dei contenuti e la localizzazione per il pubblico italiano. Lo sviluppo tecnico di siti completi non è un servizio a listino standard; se richiesto, Noemi valuterà il perimetro per iscritto.',
        en: 'Noemi can assist with website and landing-page copy, content revision and Italian localisation. Full technical website development is not a standard listed service; any request is assessed individually in writing.',
        fr: 'Noemi propose la rédaction et la révision de contenus web ainsi que leur localisation en italien. Le développement technique de sites complets ne figure pas parmi les services standard ; toute demande fait l’objet d’une évaluation écrite.',
        es: 'Noemi puede ayudar con los textos de webs y páginas de aterrizaje, su revisión y la localización al italiano. El desarrollo técnico de sitios completos no es un servicio estándar; cada solicitud se evalúa por escrito.',
      },
    };

    return {
      serviceKey: bestService,
      isScopeExcluded: false,
      explanation: explanations[bestService],
    };
  }

  // General or unrecognized inquiry (neutral, no arbitrary assignment)
  return {
    serviceKey: undefined,
    isScopeExcluded: false,
    explanation: {
      it: 'Grazie per il messaggio. Posso aiutarti a conoscere l’assistenza virtuale, il customer care scritto e i servizi di traduzione/localizzazione italiana, oppure preparare una richiesta di preventivo scritto. Se la domanda richiede una valutazione specifica, la sottoporremo a Noemi.',
      en: 'Thanks for your message. I can explain virtual assistance, written customer care and Italian translation/localisation, or help prepare a written quote request. Questions requiring an individual assessment will be passed to Noemi.',
      fr: 'Merci pour votre message. Je peux présenter l’assistance virtuelle, le support client écrit et la traduction/localisation en italien, ou préparer une demande de devis. Les demandes particulières seront soumises à Noemi.',
      es: 'Gracias por tu mensaje. Puedo explicar la asistencia virtual, la atención al cliente escrita y la traducción/localización al italiano, o ayudarte a preparar una solicitud de presupuesto. Noemi revisará las necesidades particulares.',
    },
  };
}
