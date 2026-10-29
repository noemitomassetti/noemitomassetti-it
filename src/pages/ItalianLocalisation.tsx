import { useLocation, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
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
      metaTitle: "Localizzazione in Italiano per Aziende Estere | Noemi Tomassetti",
      metaDesc: "Servizio specialistico di localizzazione EN→IT e FR→IT, post-editing e adattamento culturale per aziende e professionisti esteri.",
      tag: "FLAGSHIP PER IL MERCATO ESTERO",
      title: "Italian Translation & Cultural Localisation",
      subtitle:
        "Fai parlare il tuo marchio in italiano autentico. Non semplici traduzioni letterali, ma adattamento linguistico, culturale e commerciale curato da una professionista madrelingua con master in traduzione specialistica.",
      primaryCta: "Richiedi un preventivo scritto",
      bookCallCta: "Richiedi un preventivo scritto",
      pillarsTitle: "I 3 Livelli di Intervento Linguistico",
      pillarsSubtitle: "Dalla precisione terminologica all'ottimizzazione culturale del tuo messaggio.",
      pillars: [
        {
          icon: Globe,
          title: "1. Traduzione Specialistica",
          desc: "Trasferimento accurato del significato da inglese o francese a italiano per testi economici, tecnici, contrattuali e materiali aziendali.",
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
      comparisonSubtitle: "Esempi reali tratti da contesti commerciali dimostrativi.",
      enExample: {
        title: "Esempio EN ➔ IT (Copywriting B2B & Software)",
        sourceLabel: "Testo sorgente inglese:",
        sourceText: "Almost there! Tell us how you plan to use the app so we can tailor your workspace.",
        literalLabel: "Traduzione automatica non revisionata (calco):",
        literalText: "Quasi là! Dicci come pianifichi di usare l'app così che possiamo cucire il tuo spazio di lavoro.",
        localizedLabel: "Localizzazione professionale curata da Noemi:",
        localizedText: "Ci siamo quasi! Seleziona come utilizzerai l'applicazione: prepareremo il tuo spazio di lavoro su misura.",
        notes: "Eliminato il calco 'Quasi là', corretto l'uso metaforico di 'cucire' in favore di 'su misura' e resa una sintassi amichevole e professionale.",
      },
      frExample: {
        title: "Esempio FR ➔ IT (Scheda Prodotto & Brand Heritage)",
        sourceLabel: "Testo sorgente francese:",
        sourceText: "Un intérieur pensé autour de votre art de vivre, conçu avec des matériaux nobles et une exigence sans compromis.",
        literalLabel: "Traduzione automatica grezza:",
        literalText: "Un interno pensato intorno alla vostra arte di vivere, concepito con materiali nobili e una esigenza senza compromessi.",
        localizedLabel: "Localizzazione fluida e naturale:",
        localizedText: "Uno spazio concepito intorno al tuo modo di abitare: materiali autentici, cura del dettaglio e nessuna concessione al compromesso.",
        notes: "Adattata l'espressione 'art de vivre' nel contesto dell'arredo residenziale, eliminata la cacofonia 'una esigenza' e armonizzato il registro.",
      },
      scopeTitle: "Cosa Posso Localizzare per Te",
      scopeItems: [
        "Pagine web e landing page (adattamento puramente testuale, non sviluppo tecnico)",
        "Schede prodotto per e-commerce e cataloghi commerciali",
        "Campagne email, newsletter e sequenze di onboarding clienti",
        "Documentazione di supporto, FAQ e microcopy per applicazioni digitali",
        "Glossari bilingue EN-IT / FR-IT e linee guida di stile per il mercato italiano",
        "Post-editing di traduzioni AI e revisione critica di bozze esistenti",
      ],
      scopeNote:
        "Tutte le traduzioni verso l'italiano sono svolte e verificate direttamente da Noemi Tomassetti in quanto madrelingua. Per combinazioni inverse (IT→EN/FR/ES), il servizio è offerto come supporto operativo con perimetro concordato; la revisione di un revisore madrelingua esterno viene inclusa solo se espressamente concordata e contrattualizzata.",
      pricingTitle: "Tariffario di Riferimento",
      pricingDesc:
        "Traduzione generale da 0,09 €/parola; specialistica EN ↔ IT da 0,12 €/parola; localizzazione web da 0,11 €/parola; revisione e post-editing da 0,03 €/parola. I prezzi sono indicativi e soggetti a valutazione del testo e delle tempistiche.",
    },
    en: {
      metaTitle: "Italian Translation & Localisation Services | Noemi Tomassetti",
      metaDesc: "Specialist EN→IT and FR→IT localization, AI translation post-editing, and cultural adaptation for international businesses expanding into Italy.",
      tag: "FLAGSHIP INTERNATIONAL SERVICE",
      title: "Italian Translation & Cultural Localisation",
      subtitle:
        "Speak to Italian clients with authentic cultural resonance. Not generic machine translation, but meticulous linguistic, cultural, and commercial adaptation crafted by a native Italian language specialist with a Master's degree in Specialist Translation.",
      primaryCta: "Request a written quote",
      bookCallCta: "Request a written quote",
      pillarsTitle: "3 Levels of Linguistic Execution",
      pillarsSubtitle: "From terminological precision to cultural nuance and tone-of-voice alignment.",
      pillars: [
        {
          icon: Globe,
          title: "1. Specialist Translation",
          desc: "Faithful and accurate semantic transfer from English or French into Italian for business, commercial, contractual, and technical copy.",
          deliverable: "Uncompromising precision, correct industry register, and bespoke bilingual termbases.",
        },
        {
          icon: Sparkles,
          title: "2. Cultural Localisation",
          desc: "Adapting marketing hooks, idioms, and value propositions so your brand sounds natural, persuasive, and credible to Italian audiences.",
          deliverable: "Websites, landing page copy, email sequences, product catalogs, and customer support guides.",
        },
        {
          icon: FileCheck2,
          title: "3. AI Post-Editing (MTPE)",
          desc: "Expert human review of drafts generated by translation engines or LLMs to eradicate syntactic calques, false friends, and mechanical phrasing.",
          deliverable: "Polished, natural Italian prose with human accountability and editorial oversight.",
        },
      ],
      comparisonTitle: "Side-by-Side: Why Raw Translation Fails in the Italian Market",
      comparisonSubtitle: "Real-world demonstrative cases illustrating how nuance shapes credibility.",
      enExample: {
        title: "EN ➔ IT Example (B2B SaaS Onboarding Copy)",
        sourceLabel: "English source text:",
        sourceText: "Almost there! Tell us how you plan to use the app so we can tailor your workspace.",
        literalLabel: "Unedited machine translation (clunky calque):",
        literalText: "Quasi là! Dicci come pianifichi di usare l'app così che possiamo cucire il tuo spazio di lavoro.",
        localizedLabel: "Professional localization by Noemi:",
        localizedText: "Ci siamo quasi! Seleziona come utilizzerai l'applicazione: prepareremo il tuo spazio di lavoro su misura.",
        notes: "Eliminated the unnatural calque 'Quasi là', replaced the bizarre literal verb 'cucire' with the standard Italian commercial idiom 'su misura', and smoothed sentence flow.",
      },
      frExample: {
        title: "FR ➔ IT Example (Artisan Heritage / Interior Design)",
        sourceLabel: "French source text:",
        sourceText: "Un intérieur pensé autour de votre art de vivre, conçu avec des matériaux nobles et une exigence sans compromis.",
        literalLabel: "Raw literal translation:",
        literalText: "Un interno pensato intorno alla vostra arte di vivere, concepito con materiali nobili e una esigenza senza compromessi.",
        localizedLabel: "Fluid, culturally grounded Italian rendering:",
        localizedText: "Uno spazio concepito intorno al tuo modo di abitare: materiali autentici, cura del dettaglio e nessuna concessione al compromesso.",
        notes: "Rendered 'art de vivre' appropriately for Italian residential culture, removed phonetic awkwardness, and restored luxury cadence.",
      },
      scopeTitle: "What I Can Localize for Your Business",
      scopeItems: [
        "Website & landing page copy (purely textual localization, not web engineering)",
        "E-commerce product sheets, category descriptions, and brand stories",
        "Marketing email sequences, newsletters, and client onboarding guides",
        "Customer support templates, help centers, and transactional user interface microcopy",
        "Bilingual EN-IT / FR-IT glossaries and market-specific style guides",
        "AI translation post-editing and quality assurance of existing Italian assets",
      ],
      scopeNote:
        "All Italian translations are translated and revised directly by Noemi Tomassetti as a native Italian professional. For inverse combinations (IT→EN/FR/ES), support is provided within defined operational scopes; external native review is included only when explicitly agreed upon and contracted.",
      pricingTitle: "Baseline Indicative Pricing",
      pricingDesc:
        "General translation from €0.09/word; specialist EN ↔ IT from €0.12/word; website localization from €0.11/word; proofreading & post-editing from €0.03/word. Final quotes depend on scope, complexity, and requested turnaround.",
    },
    fr: {
      metaTitle: "Localisation en Italien pour Entreprises | Noemi Tomassetti",
      metaDesc: "Services spécialisés de traduction et localisation FR→IT et EN→IT, post-édition IA et adaptation culturelle pour entreprises internationales.",
      tag: "OFFRE PHARES POUR CLIENTS INTERNATIONAUX",
      title: "Localisation en Italien & Traduction Spécialisée",
      subtitle:
        "Adressez-vous à vos clients italiens avec authenticité et précision culturelle. Une adaptation linguistique rigoureuse et humaine, réalisée par une professionnelle italienne diplômée avec mention en médiation linguistique et titulaire d'un master en traduction spécialisée.",
      primaryCta: "Demander un devis écrit",
      bookCallCta: "Demander un devis écrit",
      pillarsTitle: "3 Niveaux d'Excellence Linguistique",
      pillarsSubtitle: "De la rigueur terminologique à la résonance commerciale en Italie.",
      pillars: [
        {
          icon: Globe,
          title: "1. Traduction Spécialisée",
          desc: "Restitution fidèle et rigoureuse depuis le français ou l'anglais vers l'italien pour vos documents commerciaux, techniques et contractuels.",
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
      comparisonSubtitle: "Exemples concrets démontrant l'impact de la sensibilité culturelle.",
      enExample: {
        title: "Exemple EN ➔ IT (Interface & Onboarding SaaS)",
        sourceLabel: "Texte source anglais :",
        sourceText: "Almost there! Tell us how you plan to use the app so we can tailor your workspace.",
        literalLabel: "Traduction automatique non révisée :",
        literalText: "Quasi là! Dicci come pianifichi di usare l'app così che possiamo cucire il tuo spazio di lavoro.",
        localizedLabel: "Localisation soignée par Noemi :",
        localizedText: "Ci siamo quasi! Seleziona come utilizzerai l'applicazione: prepareremo il tuo spazio di lavoro su misura.",
        notes: "Suppression du calque littéral 'Quasi là' et substitution de l'étrange verbe 'cucire' par la formule commerciale naturelle 'su misura'.",
      },
      frExample: {
        title: "Exemple FR ➔ IT (Haut de Gamme & Décoration)",
        sourceLabel: "Texte source français :",
        sourceText: "Un intérieur pensé autour de votre art de vivre, conçu avec des matériaux nobles et une exigence sans compromis.",
        literalLabel: "Traduction mot à mot :",
        literalText: "Un interno pensato intorno alla vostra arte di vivere, concepito con materiali nobili e una esigenza senza compromessi.",
        localizedLabel: "Localisation italienne élégante et fluide :",
        localizedText: "Uno spazio concepito intorno al tuo modo di abitare: materiali autentici, cura del dettaglio e nessuna concessione al compromesso.",
        notes: "Adaptation de la notion d'art de vivre au contexte de l'habitat italien et suppression de la cacophonie de la traduction brute.",
      },
      scopeTitle: "Périmètre d'Intervention",
      scopeItems: [
        "Textes de sites web et pages d'atterrissage (adaptation rédactionnelle pure, sans développement web)",
        "Fiches descriptives pour boutiques en ligne et catalogues",
        "Séquences d'e-mails commerciaux et lettres d'information",
        "Guides utilisateurs, foires aux questions (FAQ) et micro-textes d'application",
        "Glossaires bilingues FR-IT / EN-IT et guides de style pour le marché italien",
        "Post-édition de contenus générés par IA et relecture professionnelle",
      ],
      scopeNote:
        "Toutes les traductions vers l'italien sont assurées directement par Noemi Tomassetti, locutrice native. Pour les combinaisons inverses (IT→FR/EN/ES), le service constitue un soutien opérationnel ; la relecture par un tiers natif n'est intégrée que si expressément convenue au contrat.",
      pricingTitle: "Grille Tarifaire Indicative",
      pricingDesc:
        "Traduction générale dès 0,09 €/mot ; spécialisée EN ↔ IT dès 0,12 €/mot ; localisation web dès 0,11 €/mot ; révision et post-édition dès 0,03 €/mot. Tarifs indicatifs selon complexité et délais.",
    },
    es: {
      metaTitle: "Traducción y Localización al Italiano | Noemi Tomassetti",
      metaDesc: "Servicios especializados de traducción y localización al italiano, posedición de IA y adaptación cultural para empresas internacionales.",
      tag: "SERVICIO DESTACADO INTERNACIONAL",
      title: "Traducción y Localización Cultural al Italiano",
      subtitle:
        "Comunica con tus clientes en Italia con naturalidad y rigor cultural. No una traducción automática impersonal, sino una cuidada adaptación lingüística y comercial realizada por una especialista nativa italiana con máster en traducción especializada.",
      primaryCta: "Solicitar un presupuesto por escrito",
      bookCallCta: "Solicitar presupuesto por escrito",
      pillarsTitle: "3 Niveles de Adaptación Lingüística",
      pillarsSubtitle: "De la precisión conceptual a la adecuación cultural para el mercado italiano.",
      pillars: [
        {
          icon: Globe,
          title: "1. Traducción Especializada",
          desc: "Traslado riguroso desde el inglés o francés hacia el italiano de documentos comerciales, contractuales y corporativos.",
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
        literalLabel: "Traducción automática sin revisar:",
        literalText: "Quasi là! Dicci come pianifichi di usare l'app così che possiamo cucire il tuo spazio di lavoro.",
        localizedLabel: "Localización profesional de Noemi:",
        localizedText: "Ci siamo quasi! Seleziona come utilizzerai l'applicazione: prepareremo il tuo spazio di lavoro su misura.",
        notes: "Sustitución de expresiones literales por fórmulas naturales en italiano comercial y corrección del giro 'su misura'.",
      },
      frExample: {
        title: "Ejemplo FR ➔ IT (Diseño y Calidad)",
        sourceLabel: "Texto original en francés:",
        sourceText: "Un intérieur pensé autour de votre art de vivre, conçu avec des matériaux nobles et une exigence sans compromis.",
        literalLabel: "Traducción automática literal:",
        literalText: "Un interno pensato intorno alla vostra arte di vivere, concepito con materiali nobili e una esigenza senza compromessi.",
        localizedLabel: "Localización idiomática en italiano:",
        localizedText: "Uno spazio concepito intorno al tuo modo di abitare: materiali autentici, cura del dettaglio e nessuna concessione al compromesso.",
        notes: "Adaptación cultural de 'art de vivre' al diseño de interiores italiano y armonización del ritmo de la frase.",
      },
      scopeTitle: "Qué Puedo Localizar para Tu Negocio",
      scopeItems: [
        "Textos web y páginas de aterrizaje (adaptación puramente textual, sin desarrollo web)",
        "Fichas de producto para tiendas online y catálogos de servicios",
        "Campañas de correo, boletines informativos y mensajes de bienvenida",
        "Documentos de ayuda, preguntas frecuentes y textos breves de interfaz",
        "Glosarios bilingües y guías de estilo para el mercado italiano",
        "Posedición de traducciones generadas por IA y control de calidad",
      ],
      scopeNote:
        "Todas las traducciones hacia el italiano son realizadas y revisadas directamente por Noemi Tomassetti como profesional nativa. En combinaciones inversas (IT→ES/EN/FR), se ofrece soporte operativo acotado; la revisión externa nativa solo se incluye si se pacta expresamente en el contrato.",
      pricingTitle: "Tarifas de Referencia",
      pricingDesc:
        "Traducción general desde 0,09 €/palabra; especializada EN ↔ IT desde 0,12 €/palabra; localización web desde 0,11 €/palabra; revisión y posedición desde 0,03 €/palabra. Tarifas orientativas según complejidad y plazo.",
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
              Native Italian Specialist
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              BA in Linguistic Mediation (110 cum laude)
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Master in Specialist Translation
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
                      Deliverables:
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
              <span>Casi Dimostrativi Commentati</span>
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
                  <span className="font-bold text-foreground">Nota professionale:</span>{" "}
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
                <span>Perimetro Professionale</span>
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
                <span>Trasparenza & Deontologia</span>
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
            selectedService="Traduzione, Localizzazione & Comunicazione Multilingue"
          />
        </div>
      </section>
    </Layout>
  );
}
