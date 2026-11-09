import { useLocation, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { ITALIAN_LOCALISATION_META } from "@/lib/i18n/italianLocalisationMeta";
import { BookingButton } from "@/components/BookingButton";
import { ContactForm } from "@/components/ContactForm";
import {
  Language,
  getLanguageFromPath,
  getHreflangAlternates,
  getLocalizedPath,
} from "@/lib/i18n";
import {
  Globe,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Calendar,
  Layers,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ItalianLocalisationPage() {
  const location = useLocation();
  const lang = getLanguageFromPath(location.pathname);
  const canonicalUrl = `https://www.noemitomassetti.it${getLocalizedPath("italianLocalisation", lang)}`;

  const content = {
    it: {
      metaTitle: ITALIAN_LOCALISATION_META.it.title,
      metaDesc: ITALIAN_LOCALISATION_META.it.description,
      tag: "TRADUZIONE E LOCALIZZAZIONE PER L’ITALIA",
      title: "Traduzione e localizzazione per il mercato italiano",
      subtitle:
        "Fai parlare il tuo marchio in italiano autentico. Non semplici traduzioni letterali, ma adattamento linguistico, culturale e commerciale curato da una professionista madrelingua con master in traduzione specialistica.",
      primaryCta: "Richiedi un preventivo",
      bookCallCta: "Richiedi un preventivo",
      pillarsTitle: "I 3 Livelli di Intervento Linguistico",
      pillarsSubtitle: "Dalla precisione terminologica all'ottimizzazione culturale del tuo messaggio.",
      pillars: [
        {
          icon: Globe,
          title: "1. Traduzione Specialistica",
          desc: "Traduco professionalmente in entrambe le direzioni tra italiano, inglese, francese e spagnolo. Questa pagina approfondisce in particolare la localizzazione dei contenuti per il mercato italiano.",
          deliverable: "Testi fedeli al testo originale, terminologia rigorosa, glossari dedicati.",
        },
        {
          icon: Sparkles,
          title: "2. Localizzazione Culturale",
          desc: "Rielaborazione del tono di voce, delle espressioni idiomatiche e dei messaggi commerciali per risuonare con naturalezza sul pubblico italiano.",
          deliverable: "Siti web, landing page, newsletter, e-commerce, descrizioni prodotto e FAQ.",
        },
        {
          icon: FileCheck2,
          title: "3. Post-Editing AI (MTPE)",
          desc: "Revisione approfondita di bozze generate da motori di traduzione automatica o LLM per eliminare calchi, falsi amici e incongruenze sintattiche.",
          deliverable: "Testo fluido e naturale, controllo della coerenza e revisione finale professionale del testo.",
        },
      ],
      comparisonTitle: "Confronto Pratico: Perché la Traduzione Letterale Non Basta",
      comparisonSubtitle: "Esempi dimostrativi ispirati a situazioni di comunicazione professionale.",
      enExample: {
        title: "Esempio EN ➔ IT (Copywriting B2B & Software)",
        sourceLabel: "Testo sorgente inglese:",
        sourceText: "Almost there! Tell us how you plan to use the app so we can tailor your workspace.",
        literalLabel: "Resa volutamente letterale (esempio creato per questa dimostrazione):",
        literalText: "Quasi là! Dicci come pianifichi di usare l'app così che possiamo cucire il tuo spazio di lavoro.",
        localizedLabel: "Localizzazione professionale curata da Noemi:",
        localizedText: "Ci siamo quasi! Raccontaci come pensi di utilizzare l’applicazione: potremo adattare il tuo spazio di lavoro alle tue esigenze.",
        notes: "Eliminato il calco 'Quasi là', evitato il calco 'cucire' e mantenuta la richiesta di informazioni presente nel testo inglese, con un tono naturale.",
      },
      frExample: {
        title: "Esempio FR ➔ IT (Scheda Prodotto & Brand Heritage)",
        sourceLabel: "Testo sorgente francese:",
        sourceText: "Un intérieur pensé autour de votre art de vivre, conçu avec des matériaux nobles et une exigence sans compromis.",
        literalLabel: "Resa volutamente letterale creata per l’esempio:",
        literalText: "Un interno pensato intorno alla vostra arte di vivere, concepito con materiali nobili e una esigenza senza compromessi.",
        localizedLabel: "Localizzazione fluida e naturale:",
        localizedText: "Uno spazio pensato per il tuo stile di vita, progettato con materiali di pregio e senza compromessi sulla qualità.",
        notes: "Adattata l'espressione 'art de vivre' nel contesto dell'arredo residenziale, eliminata la cacofonia 'una esigenza' e armonizzato il registro.",
      },
      scopeTitle: "Cosa Posso Localizzare per Te",
      scopeItems: [
        "Pagine web e landing page (adattamento puramente testuale, non sviluppo tecnico)",
        "Schede prodotto per e-commerce e cataloghi commerciali",
        "Email informative, newsletter e comunicazioni di onboarding per clienti",
        "Documentazione di supporto, FAQ e microcopy per applicazioni digitali",
        "Glossari bilingue EN-IT / FR-IT / ES-IT e linee guida di stile per il mercato italiano",
        "Post-editing di traduzioni AI e revisione critica di bozze esistenti",
      ],
      scopeNote:
        "Questa pagina approfondisce la localizzazione per il mercato italiano. Offro traduzioni professionali in entrambe le direzioni tra italiano, inglese, francese e spagnolo, valutando tipologia, complessità e destinatari dei testi. Offro inoltre supporto operativo per comunicazioni multilingue con clienti. Non offro acquisizione clienti, contabilità o fatturazione.",
      pricingTitle: "Tariffario di Riferimento",
      pricingDesc:
        "Traduzione generale EN/FR/ES → IT da 0,09 €/parola; specialistica verso l’italiano da 0,12 €/parola; localizzazione web da 0,11 €/parola; revisione e post-editing da 0,03 €/parola. I prezzi sono indicativi e soggetti a valutazione del testo e delle tempistiche.",
    },
    en: {
      metaTitle: ITALIAN_LOCALISATION_META.en.title,
      metaDesc: ITALIAN_LOCALISATION_META.en.description,
      tag: "ITALIAN-LANGUAGE SERVICES",
      title: "Italian Translation & Cultural Localisation",
      subtitle:
        "Communicate clearly with Italian audiences through translation, editorial review and cultural localisation by a native Italian professional with specialised translation training.",
      primaryCta: "Request a quote",
      bookCallCta: "Request a quote",
      pillarsTitle: "Three ways I can support your Italian-language content",
      pillarsSubtitle: "From terminological precision to cultural nuance and tone-of-voice alignment.",
      pillars: [
        {
          icon: Globe,
          title: "1. Specialist Translation",
          desc: "Professional translation in both directions between Italian and English, French and Spanish, assessed by subject, complexity and intended audience. This page focuses in particular on localisation for the Italian market.",
          deliverable: "Accurate terminology, a consistent professional register and a glossary where useful.",
        },
        {
          icon: Sparkles,
          title: "2. Cultural Localisation",
          desc: "Adapting marketing hooks, idioms, and value propositions so your brand sounds natural, persuasive, and credible to Italian audiences.",
          deliverable: "Website copy, landing pages, email sequences, product catalogues and customer support guides.",
        },
        {
          icon: FileCheck2,
          title: "3. AI Post-Editing (MTPE)",
          desc: "Human review of machine-translated or AI-assisted drafts to identify calques, false friends, inconsistencies and unclear wording.",
          deliverable: "Polished, natural Italian prose with human accountability and editorial oversight.",
        },
      ],
      comparisonTitle: "Side-by-Side: Why Raw Translation Fails in the Italian Market",
      comparisonSubtitle: "Illustrative examples showing how linguistic choices affect clarity and credibility.",
      enExample: {
        title: "EN ➔ IT Example (B2B SaaS Onboarding Copy)",
        sourceLabel: "English source text:",
        sourceText: "Almost there! Tell us how you plan to use the app so we can tailor your workspace.",
        literalLabel: "Deliberately literal demonstration, not machine-generated output:",
        literalText: "Quasi là! Dicci come pianifichi di usare l'app così che possiamo cucire il tuo spazio di lavoro.",
        localizedLabel: "Italian localisation — reviewed demonstration:",
        localizedText: "Ci siamo quasi! Raccontaci come pensi di utilizzare l’applicazione: potremo adattare il tuo spazio di lavoro alle tue esigenze.",
        notes: "Avoided unnatural English calques, preserved the request to describe how the app will be used and adopted a clear Italian register.",
      },
      frExample: {
        title: "FR ➔ IT Example (Artisan Heritage / Interior Design)",
        sourceLabel: "French source text:",
        sourceText: "Un intérieur pensé autour de votre art de vivre, conçu avec des matériaux nobles et une exigence sans compromis.",
        literalLabel: "Raw literal translation:",
        literalText: "Un interno pensato intorno alla vostra arte di vivere, concepito con materiali nobili e una esigenza senza compromessi.",
        localizedLabel: "Fluid, culturally grounded Italian rendering:",
        localizedText: "Uno spazio pensato per il tuo stile di vita, progettato con materiali di pregio e senza compromessi sulla qualità.",
        notes: "Adapted 'art de vivre' to natural Italian while preserving the references to quality materials and high standards.",
      },
      scopeTitle: "What I Can Localise for Your Business",
      scopeItems: [
        "Website and landing-page copy (language and content localisation only, not website development)",
        "E-commerce product descriptions, category copy and brand stories",
        "Customer emails, newsletters and onboarding messages for customers",
        "Customer support templates, help centres and user-interface microcopy",
        "Bilingual EN-IT / FR-IT / ES-IT glossaries and market-specific style guides",
        "AI translation post-editing and quality assurance of existing Italian assets",
      ],
      scopeNote:
        "This page focuses on localisation for the Italian market. I offer professional translation in both directions between Italian and English, French and Spanish, with each assignment assessed by subject, complexity and intended audience. I also provide agreed operational support for multilingual correspondence with customers. I do not provide telemarketing, customer acquisition, bookkeeping or invoicing.",
      pricingTitle: "Baseline Indicative Pricing",
      pricingDesc:
        "General EN/FR/ES → IT translation from €0.09/source word; specialist translation into Italian from €0.12/word; website localisation from €0.11/word; proofreading & post-editing from €0.03/word. Final quotes depend on scope, complexity, and requested turnaround.",
    },
    fr: {
      metaTitle: ITALIAN_LOCALISATION_META.fr.title,
      metaDesc: ITALIAN_LOCALISATION_META.fr.description,
      tag: "SERVICES LINGUISTIQUES POUR L’ITALIE",
      title: "Traduction et localisation vers l’italien",
      subtitle:
        "Adressez-vous à vos clients italiens avec authenticité et précision culturelle. Une adaptation linguistique rigoureuse et humaine, réalisée par une professionnelle italienne diplômée avec mention en médiation linguistique et titulaire d'un master en traduction spécialisée.",
      primaryCta: "Demander un devis",
      bookCallCta: "Demander un devis",
      pillarsTitle: "Trois formes d’accompagnement linguistique",
      pillarsSubtitle: "De la rigueur terminologique à la résonance commerciale en Italie.",
      pillars: [
        {
          icon: Globe,
          title: "1. Traduction Spécialisée",
          desc: "Traduction professionnelle dans les deux sens entre l’italien et l’anglais, le français et l’espagnol, après évaluation du domaine, de la complexité et du public destinataire. Cette page met l’accent sur la localisation pour le marché italien.",
          deliverable: "Vocabulaire précis, respect du registre professionnel et lexique bilingue dédié.",
        },
        {
          icon: Sparkles,
          title: "2. Localisation Culturelle",
          desc: "Adaptation des messages marketing, des expressions et du ton de marque pour séduire le public italien sans calques artificiels.",
          deliverable: "Sites vitrines, pages produit e-commerce, infolettres et supports de vente.",
        },
        {
          icon: FileCheck2,
          title: "3. Post-Édition IA (MTPE)",
          desc: "Révision humaine experte de traductions automatiques pour éliminer les faux amis, les lourdeurs de syntaxe et les contresens.",
          deliverable: "Fluidité naturelle, cohérence globale et responsabilité éditoriale humaine.",
        },
      ],
      comparisonTitle: "Comparatif : Pourquoi la Traduction Brute Ne Suffit Pas",
      comparisonSubtitle: "Exemples illustratifs montrant l’importance des choix linguistiques et culturels.",
      enExample: {
        title: "Exemple EN ➔ IT (Interface & Onboarding SaaS)",
        sourceLabel: "Texte source anglais :",
        sourceText: "Almost there! Tell us how you plan to use the app so we can tailor your workspace.",
        literalLabel: "Version volontairement littérale, créée pour l’exemple :",
        literalText: "Quasi là! Dicci come pianifichi di usare l'app così che possiamo cucire il tuo spazio di lavoro.",
        localizedLabel: "Localisation soignée par Noemi :",
        localizedText: "Ci siamo quasi! Raccontaci come pensi di utilizzare l’applicazione: potremo adattare il tuo spazio di lavoro alle tue esigenze.",
        notes: "Suppression des calques anglais et maintien du sens : demander au lecteur de décrire son utilisation de l’application.",
      },
      frExample: {
        title: "Exemple FR ➔ IT (Haut de Gamme & Décoration)",
        sourceLabel: "Texte source français :",
        sourceText: "Un intérieur pensé autour de votre art de vivre, conçu avec des matériaux nobles et une exigence sans compromis.",
        literalLabel: "Traduction mot à mot :",
        literalText: "Un interno pensato intorno alla vostra arte di vivere, concepito con materiali nobili e una esigenza senza compromessi.",
        localizedLabel: "Localisation italienne élégante et fluide :",
        localizedText: "Uno spazio pensato per il tuo stile di vita, progettato con materiali di pregio e senza compromessi sulla qualità.",
        notes: "Adaptation naturelle d’« art de vivre » en italien, en conservant les références aux matériaux de qualité et à l’exigence du texte source.",
      },
      scopeTitle: "Périmètre d'Intervention",
      scopeItems: [
        "Contenus de sites web et de pages de destination (adaptation linguistique et éditoriale, sans développement technique)",
        "Fiches descriptives pour boutiques en ligne et catalogues",
        "Courriels d’information, newsletters et messages d’accueil destinés aux clients",
        "Guides utilisateurs, foires aux questions (FAQ) et micro-textes d'application",
        "Glossaires bilingues FR-IT / EN-IT / ES-IT et guides de style pour le marché italien",
        "Post-édition de contenus générés par IA et relecture professionnelle",
      ],
      scopeNote:
        "Cette page présente surtout la localisation pour le marché italien. Je propose des traductions professionnelles dans les deux sens entre l’italien et l’anglais, le français et l’espagnol. J’assure également un soutien opérationnel convenu pour les échanges multilingues avec des clients. Je ne propose ni prospection commerciale, ni comptabilité, ni facturation.",
      pricingTitle: "Grille Tarifaire Indicative",
      pricingDesc:
        "Traduction EN/FR/ES → IT à partir de 0,09 €/mot source ; traduction spécialisée vers l’italien à partir de 0,12 €/mot source ; localisation web à partir de 0,11 €/mot source ; révision et post-édition à partir de 0,03 €/mot. Tarifs indicatifs selon le texte, la complexité et les délais.",
    },
    es: {
      metaTitle: ITALIAN_LOCALISATION_META.es.title,
      metaDesc: ITALIAN_LOCALISATION_META.es.description,
      tag: "SERVICIOS LINGÜÍSTICOS PARA ITALIA",
      title: "Traducción y Localización Cultural al Italiano",
      subtitle:
        "Comunica con tus clientes en Italia con naturalidad y rigor cultural. No una traducción automática impersonal, sino una cuidada adaptación lingüística y comercial realizada por una especialista nativa italiana con máster en traducción especializada.",
      primaryCta: "Solicitar un presupuesto",
      bookCallCta: "Solicitar un presupuesto",
      pillarsTitle: "Tres formas de trabajar los contenidos en italiano",
      pillarsSubtitle: "De la precisión conceptual a la adecuación cultural para el mercado italiano.",
      pillars: [
        {
          icon: Globe,
          title: "1. Traducción Especializada",
          desc: "Traducción profesional en ambas direcciones entre el italiano y el inglés, francés y español, previa valoración del ámbito, la complejidad y el público destinatario. Esta página se centra especialmente en la localización para el mercado italiano.",
          deliverable: "Exactitud terminológica, tono profesional y glosarios bilingües específicos.",
        },
        {
          icon: Sparkles,
          title: "2. Localización Cultural",
          desc: "Reescritura de lemas, giros y propuestas de valor para conectar de forma creíble con el consumidor y cliente italiano.",
          deliverable: "Páginas web, tiendas online, catálogos, boletines y páginas de aterrizaje.",
        },
        {
          icon: FileCheck2,
          title: "3. Posedición de IA (MTPE)",
          desc: "Revisión humana experta de borradores creados por motores de traducción automática o modelos de lenguaje.",
          deliverable: "Fluidez natural, eliminación de calcos sintácticos y control de calidad profesional.",
        },
      ],
      comparisonTitle: "Comparativa Práctica: Por Qué la Traducción Literal No Es Suficiente",
      comparisonSubtitle: "Casos ilustrativos que muestran la diferencia en la experiencia del cliente.",
      enExample: {
        title: "Ejemplo EN ➔ IT (Software y Onboarding)",
        sourceLabel: "Texto original en inglés:",
        sourceText: "Almost there! Tell us how you plan to use the app so we can tailor your workspace.",
        literalLabel: "Versión deliberadamente literal creada para este ejemplo:",
        literalText: "Quasi là! Dicci come pianifichi di usare l'app così che possiamo cucire il tuo spazio di lavoro.",
        localizedLabel: "Localización profesional de Noemi:",
        localizedText: "Ci siamo quasi! Raccontaci come pensi di utilizzare l’applicazione: potremo adattare il tuo spazio di lavoro alle tue esigenze.",
        notes: "Se han evitado calcos del inglés y se ha mantenido la petición original sobre el uso de la aplicación con un tono natural en italiano.",
      },
      frExample: {
        title: "Ejemplo FR ➔ IT (Diseño y Calidad)",
        sourceLabel: "Texto original en francés:",
        sourceText: "Un intérieur pensé autour de votre art de vivre, conçu avec des matériaux nobles et une exigence sans compromis.",
        literalLabel: "Versión deliberadamente literal creada para esta muestra:",
        literalText: "Un interno pensato intorno alla vostra arte di vivere, concepito con materiali nobili e una esigenza senza compromessi.",
        localizedLabel: "Localización idiomática en italiano:",
        localizedText: "Uno spazio pensato per il tuo stile di vita, progettato con materiali di pregio e senza compromessi sulla qualità.",
        notes: "Adaptación de « art de vivre » a una expresión italiana natural, preservando la referencia a materiales de calidad.",
      },
      scopeTitle: "Qué Puedo Localizar para Tu Negocio",
      scopeItems: [
        "Textos web y páginas de aterrizaje (adaptación puramente textual, sin desarrollo web)",
        "Fichas de producto para tiendas online y catálogos de servicios",
        "Correos informativos, boletines y mensajes de bienvenida para clientes",
        "Documentos de ayuda, preguntas frecuentes y textos breves de interfaz",
        "Glosarios bilingües y guías de estilo para el mercado italiano",
        "Posedición de traducciones generadas por IA y control de calidad",
      ],
      scopeNote:
        "Esta página se centra en la localización para el mercado italiano. Ofrezco traducción profesional en ambas direcciones entre el italiano y el inglés, francés y español, tras valorar el tema, la complejidad y el público destinatario. También presto apoyo operativo acordado para la comunicación multilingüe con clientes. No ofrezco captación de clientes, contabilidad ni facturación.",
      pricingTitle: "Tarifas de Referencia",
      pricingDesc:
        "Traducción EN/FR/ES → IT desde 0,09 €/palabra de origen; traducción especializada al italiano desde 0,12 €/palabra de origen; localización web desde 0,11 €/palabra de origen; revisión y posedición desde 0,03 €/palabra. Tarifas orientativas según el texto, la complejidad y el plazo.",
    },
  }[lang];

  useSEO({
    title: content.metaTitle,
    description: content.metaDesc,
    canonical: canonicalUrl,
    alternates: getHreflangAlternates("italianLocalisation"),
    ogType: "website",
  });

  const handleScrollToQuote = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Layout lang={lang}>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-border/40 bg-gradient-to-b from-background via-secondary/15 to-background">
        <div className="container max-w-5xl px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-wider mb-5">
            <Globe className="w-3.5 h-3.5" />
            <span>{content.tag}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-tight">
            {content.title}
          </h1>

          <p className="text-base sm:text-xl text-foreground/85 leading-relaxed max-w-3xl mx-auto mb-10">
            {content.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={handleScrollToQuote}
              className="w-full sm:w-auto px-8 py-6 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition-all shadow-md bg-primary text-primary-foreground cursor-pointer"
            >
              <span>{content.primaryCta}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <BookingButton
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-6 py-6 rounded-full font-semibold text-sm border-primary/30 text-primary hover:bg-primary/10 transition-colors"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>{content.bookCallCta}</span>
            </BookingButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              {lang === 'it' ? 'Madrelingua italiana' : lang === 'fr' ? 'Professionnelle italienne de langue maternelle' : lang === 'es' ? 'Profesional nativa de italiano' : 'Native Italian speaker'}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              {lang === 'it' ? 'Laurea in Mediazione Linguistica (110 e lode)' : lang === 'fr' ? 'Diplôme en médiation linguistique avec mention' : lang === 'es' ? 'Título universitario italiano en Mediación Lingüística (110/110 e lode)' : 'Degree in Language Mediation (with honours)'}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              {lang === 'it' ? 'Master in Traduzione Specialistica' : lang === 'fr' ? 'Master en traduction spécialisée' : lang === 'es' ? 'Máster en Traducción Especializada' : 'Master’s in Specialist Translation'}
            </span>
          </div>
        </div>
      </section>

      {/* ── 3 PILLARS OF LINGUISTIC EXECUTION ── */}
      <section className="py-16 md:py-20 bg-background border-b border-border/40">
        <div className="container max-w-6xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              {content.pillarsTitle}
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              {content.pillarsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-primary/50 transition-colors"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">{pillar.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/40 text-xs font-medium text-primary">
                    <span className="font-semibold block text-muted-foreground mb-1">
                      {lang === 'it' ? 'Cosa ricevi:' : lang === 'fr' ? 'Livrables :' : lang === 'es' ? 'Entregables:' : 'Deliverables:'}
                    </span>
                    {pillar.deliverable}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SIDE-BY-SIDE BEFORE / AFTER SAMPLES ── */}
      <section className="py-16 md:py-24 bg-secondary/15 border-b border-border/40">
        <div className="container max-w-5xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-2">
              <Layers className="w-4 h-4" />
              <span>{lang === 'it' ? 'Esempi dimostrativi commentati' : lang === 'fr' ? 'Exemples commentés' : lang === 'es' ? 'Ejemplos comentados' : 'Annotated examples'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
              {content.comparisonTitle}
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              {content.comparisonSubtitle}
            </p>
          </div>

          <div className="space-y-10">
            {/* EN -> IT Example */}
            <div className="bg-card border border-border/70 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-primary/15 text-primary text-xs font-bold uppercase">
                  EN ➔ IT
                </span>
                <span>{content.enExample.title}</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-secondary/30 border border-border/50">
                  <span className="font-semibold text-muted-foreground block text-xs mb-1">
                    {content.enExample.sourceLabel}
                  </span>
                  <p className="font-mono text-foreground">{content.enExample.sourceText}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-destructive/10 border border-destructive/25">
                  <span className="font-semibold text-destructive block text-xs mb-1 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {content.enExample.literalLabel}
                  </span>
                  <p className="text-foreground/90 italic">{content.enExample.literalText}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400 block text-xs mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {content.enExample.localizedLabel}
                  </span>
                  <p className="text-foreground font-medium">{content.enExample.localizedText}</p>
                </div>

                <div className="p-3 bg-background rounded-lg border border-border/50 text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">{lang === "it" ? "Nota professionale:" : lang === "fr" ? "Note professionnelle :" : lang === "es" ? "Nota profesional:" : "Professional note:"}</span>{" "}
                  {content.enExample.notes}
                </div>
              </div>
            </div>

            {/* FR -> IT Example */}
            <div className="bg-card border border-border/70 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded bg-primary/15 text-primary text-xs font-bold uppercase">
                  FR ➔ IT
                </span>
                <span>{content.frExample.title}</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl bg-secondary/30 border border-border/50">
                  <span className="font-semibold text-muted-foreground block text-xs mb-1">
                    {content.frExample.sourceLabel}
                  </span>
                  <p className="font-mono text-foreground">{content.frExample.sourceText}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-destructive/10 border border-destructive/25">
                  <span className="font-semibold text-destructive block text-xs mb-1 flex items-center gap-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    {content.frExample.literalLabel}
                  </span>
                  <p className="text-foreground/90 italic">{content.frExample.literalText}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400 block text-xs mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {content.frExample.localizedLabel}
                  </span>
                  <p className="text-foreground font-medium">{content.frExample.localizedText}</p>
                </div>

                <div className="p-3 bg-background rounded-lg border border-border/50 text-xs text-muted-foreground">
                  <span className="font-bold text-foreground">Nota professionale:</span>{" "}
                  {content.frExample.notes}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SCOPE & BOUNDARIES ── */}
      <section className="py-16 md:py-20 bg-background border-b border-border/40">
        <div className="container max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === 'it' ? 'Ambito dei servizi' : lang === 'fr' ? 'Périmètre des prestations' : lang === 'es' ? 'Alcance de los servicios' : 'Service scope'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                {content.scopeTitle}
              </h2>
              <ul className="space-y-3 pt-2">
                {content.scopeItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/20 border border-border/60 rounded-2xl p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span>{lang === 'it' ? 'Chiarezza delle prestazioni' : lang === 'fr' ? 'Transparence des prestations' : lang === 'es' ? 'Transparencia sobre los servicios' : 'Clear service boundaries'}</span>
              </h3>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                {content.scopeNote}
              </p>
              <div className="p-3.5 rounded-xl bg-background border border-border/50 text-xs space-y-1">
                <span className="font-bold text-primary block uppercase tracking-wider text-[10.5px]">
                  {content.pricingTitle}
                </span>
                <p className="text-muted-foreground leading-relaxed">
                  {content.pricingDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM EMBED ── */}
      <section id="contact-section" className="py-16 md:py-24 scroll-mt-12 bg-secondary/10">
        <div className="container max-w-4xl px-4 sm:px-6">
          <ContactForm
            lang={lang}
            selectedService={lang === "it" ? "Traduzioni professionali IT ↔ EN/FR/ES e localizzazione" : lang === "fr" ? "Traduction professionnelle IT ↔ EN/FR/ES et localisation" : lang === "es" ? "Traducción profesional IT ↔ EN/FR/ES y localización" : "Professional IT ↔ EN/FR/ES translation & localisation"}
          />
        </div>
      </section>
    </Layout>
  );
}
