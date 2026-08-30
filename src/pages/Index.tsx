import { Layout } from "@/components/Layout";
import { getBlogPosts } from "@/lib/blogData";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/BookingButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import {
  Calendar, Mail, User, Database, Briefcase,
  GraduationCap, CalendarDays, Star, Send, MapPin, Phone,
  Globe, LayoutList, CheckCircle2, CheckCheck
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ─── DATA ─────────────────────────────────────────── */

const getTranslations = () => {
  return {
    services: [
      {
        title: "SEGRETERIA & ORGANIZZAZIONE",
        subtitle: "Un supporto concreto per le attività che richiedono tempo, attenzione e continuità.",
        description: "Posso occuparmi di:\n\n• gestione e organizzazione delle email\n• agenda e appuntamenti\n• conferme, modifiche e comunicazioni\n• gestione delle richieste dei clienti\n• organizzazione di documenti e informazioni\n• attività di back office\n• supporto organizzativo quotidiano",
        icon: Mail,
        cta: "SCOPRI IL SERVIZIO"
      },
      {
        title: "TRADUZIONE & COMUNICAZIONE MULTILINGUE",
        subtitle: "Italiano · Inglese · Francese · Spagnolo",
        description: "Posso supportarti nella traduzione e nell'adattamento di contenuti e comunicazioni, con attenzione al contesto e al destinatario.\n\nAd esempio:\n• siti web\n• landing page\n• email\n• documenti\n• materiali formativi\n• comunicazioni con clienti e interlocutori internazionali",
        icon: Globe,
        cta: "SCOPRI IL SERVIZIO"
      },
      {
        title: "SITI WEB & LANDING PAGE",
        subtitle: "Una presenza online chiara e professionale è spesso il primo punto di contatto con un potenziale cliente.",
        description: "Creo siti web e landing page per professionisti, consulenti e piccole attività, con attenzione alla struttura dei contenuti, alla chiarezza e alla fruibilità anche da smartphone.\n\nPosso realizzare:\n• landing page\n• siti vetrina\n• pagine professionali\n• restyling di siti esistenti\n• organizzazione dei contenuti\n• pagine responsive",
        icon: LayoutList,
        cta: "VEDI IL PORTFOLIO"
      }
    ],
    delegationBenefits: [
      {
        title: "Lavorare con più ordine",
        description: "Avere una gestione più organizzata delle attività quotidiane.",
        icon: CheckCircle2
      },
      {
        title: "Recuperare tempo",
        description: "Ridurre il tempo dedicato alle attività operative e organizzative.",
        icon: CheckCircle2
      },
      {
        title: "Essere più presente per i tuoi clienti",
        description: "Senza dover interrompere continuamente il tuo lavoro.",
        icon: CheckCircle2
      },
      {
        title: "Avere un punto di riferimento",
        description: "Una persona con cui coordinarti e a cui affidare attività definite.",
        icon: CheckCircle2
      }
    ],
    experienceItems: [
      {
        title: "Oltre 20 anni di esperienza",
        description: "Un percorso professionale maturato attraverso attività organizzative, linguistiche e di supporto.",
        icon: Briefcase
      },
      {
        title: "Una formazione specialistica",
        description: "Laurea in Mediazione Linguistica – 110 e lode\nMaster in Traduzione Specialistica",
        icon: GraduationCap
      },
      {
        title: "Quattro lingue di lavoro",
        description: "Italiano, inglese, francese e spagnolo.",
        icon: Globe
      },
      {
        title: "Un approccio concreto",
        description: "Organizzazione, precisione, attenzione alle comunicazioni e alle esigenze delle persone con cui lavoro.",
        icon: CheckCheck
      }
    ],
    targets: [
      {
        title: "Professionisti e consulenti",
        icon: CalendarDays,
        description: "Se lavori su appuntamento o gestisci direttamente i tuoi clienti, posso supportarti nella gestione di agenda, email, richieste e comunicazioni."
      },
      {
        title: "Formatori e creatori di corsi",
        icon: GraduationCap,
        description: "Posso aiutarti nell'organizzazione di corsi ed eventi, nelle iscrizioni, nelle comunicazioni e nel rapporto con i partecipanti."
      },
      {
        title: "Piccole aziende e studi professionali",
        icon: Briefcase,
        description: "Un supporto operativo per le attività di segreteria, organizzazione e back office che richiedono tempo e continuità."
      },
      {
        title: "Professionisti che lavorano con l'estero",
        icon: Globe,
        description: "Le mie competenze linguistiche possono essere utili per comunicazioni, traduzioni e contenuti destinati a interlocutori internazionali."
      }
    ],
    pricingCards: [
      {
        title: "Supporto operativo",
        price: "A partire da €XX/ora",
        description: "Email, agenda, appuntamenti, organizzazione e attività di back office."
      },
      {
        title: "Traduzione e comunicazione",
        price: "A partire da €XX",
        description: "Italiano, inglese, francese e spagnolo."
      },
      {
        title: "Landing Page",
        price: "A partire da €XXX",
        description: "Una pagina professionale per presentare un servizio, un prodotto, un corso o un'attività."
      },
      {
        title: "Sito Web",
        price: "A partire da €XXX",
        description: "Un sito professionale e responsive, strutturato in base alle esigenze della tua attività."
      }
    ],
    portfolioCategories: [
      {
        title: "Siti Web",
        description: "Esempi di siti pensati per professionisti, consulenti e piccole attività.",
        cta: "VEDI I PROGETTI"
      },
      {
        title: "Landing Page",
        description: "Esempi di pagine progettate per presentare un servizio, un prodotto, un corso o un'attività.",
        cta: "VEDI GLI ESEMPI"
      },
      {
        title: "Comunicazione multilingue",
        description: "Esempi di contenuti e comunicazioni in italiano, inglese, francese e spagnolo.",
        cta: "VEDI GLI ESEMPI"
      },
      {
        title: "Organizzazione & Segreteria",
        description: "Esempi delle attività che posso gestire e organizzare per professionisti e piccole attività.",
        cta: "SCOPRI DI PIÙ"
      }
    ],
    steps: [
      {
        number: "01",
        title: "Ci conosciamo",
        description: "Una call gratuita di 30 minuti per parlare della tua attività e capire cosa ti occupa più tempo."
      },
      {
        number: "02",
        title: "Individuiamo cosa delegare",
        description: "Partiamo dalle attività per cui potrei offrirti un supporto concreto."
      },
      {
        number: "03",
        title: "Definiamo la collaborazione",
        description: "Stabiliamo attività, modalità e tempi di lavoro in base alle tue esigenze."
      },
      {
        number: "04",
        title: "Iniziamo",
        description: "Tu continui a concentrarti sulle tue priorità. Io mi occupo delle attività che abbiamo deciso di delegare."
      }
    ],
    faqs: [
      {
        q: "Posso affidarti solo alcune attività?",
        a: "Sì. Possiamo iniziare anche da una singola esigenza e valutare successivamente se ampliare la collaborazione."
      },
      {
        q: "Devo impegnarmi per un numero fisso di ore?",
        a: "La modalità di collaborazione viene definita in base alle attività e alle tue esigenze."
      },
      {
        q: "Lavori anche con clienti internazionali?",
        a: "Sì. Lavoro in italiano, inglese, francese e spagnolo."
      },
      {
        q: "Puoi aiutarmi con il mio sito?",
        a: "Sì. Creo siti web e landing page e posso occuparmi anche di aggiornamenti o interventi su un sito esistente."
      },
      {
        q: "Ti occupi di contabilità e fatturazione?",
        a: "No. Il mio supporto non comprende contabilità, fatturazione o adempimenti fiscali."
      },
      {
        q: "Posso iniziare con una sola attività?",
        a: "Certamente. Possiamo partire da ciò che oggi ti occupa più tempo o ti crea maggiore difficoltà."
      },
      {
        q: "Come funziona la prima call?",
        a: "È una conversazione gratuita di circa 30 minuti. Mi racconti la tua attività e le tue esigenze e valutiamo insieme se posso offrirti un supporto concreto."
      }
    ]
  };
};

const testimonials = [
  {
    name: "Silvia T.",
    role: "Consulente e Formatrice",
    text: "Essendo abituata a fare tutto da sola, all'inizio ero titubante all'idea di delegare. Ho iniziato affidando a Noemi la riorganizzazione delle mie email e il supporto per un corso in partenza. È stata precisa, autonoma da subito e mi ha tolto un bel peso. Un ottimo supporto per chi lavora in proprio.",
  },
  {
    name: "Chiara M.",
    role: "Psicologa",
    text: "Tra le sedute e la gestione dei pazienti, la mia agenda era diventata caotica e perdevo ore a incastrare gli appuntamenti. Noemi mi ha aiutata a rimettere ordine e a impostare un sistema molto più fluido. Ora lavoro con molta più serenità.",
  },
  {
    name: "Luca B.",
    role: "Biologo Nutrizionista",
    text: "Avevo bisogno di una mano per gestire le richieste di prime visite e riordinare il database contatti, attività che continuavo a rimandare. L'intervento di Noemi è stato rapido ed efficace. Molto professionale e attenta alle mie esigenze organizzative.",
  }
];

/* ─── CONTACT FORM ─────────────────────────────────── */

const ContattiForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gdprChecked, setGdprChecked] = useState(false);
  const [newsletterChecked, setNewsletterChecked] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!gdprChecked) {
      toast({ title: "Consenso richiesto", description: "Accetta il trattamento dei dati personali per inviare il messaggio.", variant: "destructive" });
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);
    
    // Spam protection check (honeypot)
    const website = (data.get("website") as string) || "";
    if (website.trim().length > 0) {
      setIsSubmitting(false);
      return;
    }

    const firstName = ((data.get("first_name") as string) || "").trim();
    const lastName = ((data.get("last_name") as string) || "").trim();
    const email = ((data.get("email") as string) || "").trim();
    const phone = ((data.get("phone") as string) || "").trim();
    const subject = ((data.get("subject") as string) || "").trim();
    const message = ((data.get("message") as string) || "").trim();

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@noemitomassetti.it", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          "Nome": firstName,
          "Cognome": lastName,
          "Email": email,
          "_replyto": email,
          "Telefono": phone || "Non specificato",
          "Oggetto": subject || "Richiesta dal sito",
          "Messaggio": message,
          "Consenso GDPR": gdprChecked ? "Accettato" : "No",
          "Iscrizione Newsletter": newsletterChecked ? "Sì" : "No",
          "_subject": "Nuovo messaggio dal sito Noemi Tomassetti",
          "_template": "table",
          "_captcha": "false",
        }),
      });

      const result = await response.json().catch(() => null);
      const isSuccess = response.ok && (result?.success === "true" || result?.success === true);

      if (isSuccess) {
        toast({
          title: "Messaggio inviato!",
          description: "Ti risponderò il prima possibile.",
        });
        form.reset();
        setGdprChecked(false);
        setNewsletterChecked(false);
      } else {
        let errorDesc = "Non è stato possibile inviare il messaggio. Riprova tra qualche minuto.";
        if (result?.message) {
          if (result.message.toLowerCase().includes("activation") || result.message.toLowerCase().includes("activate")) {
            errorDesc = "È richiesta l'attivazione iniziale del form. Controlla la posta in arrivo e la cartella Spam di info@noemitomassetti.it per cliccare sul link di conferma.";
          } else {
            errorDesc = result.message;
          }
        }
        toast({
          title: "Invio non completato",
          description: errorDesc,
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Errore di rete invio form:", err);
      toast({
        title: "Errore di invio",
        description: "Non è stato possibile inviare il messaggio. Riprova tra qualche minuto.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
      <h3 className="text-xl font-semibold text-primary mb-6">Scrivimi un messaggio</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot field for spam protection */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="firstName" className="text-sm font-medium text-foreground/80">Nome *</label>
            <Input id="firstName" name="first_name" required placeholder="Il tuo nome" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="lastName" className="text-sm font-medium text-foreground/80">Cognome *</label>
            <Input id="lastName" name="last_name" required placeholder="Il tuo cognome" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email *</label>
            <Input id="email" name="email" type="email" required placeholder="La tua email" />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-sm font-medium text-foreground/80">Telefono</label>
            <Input id="phone" name="phone" type="tel" placeholder="Numero (opzionale)" />
          </div>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Oggetto</label>
          <Input id="subject" name="subject" placeholder="Come posso aiutarti?" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="message" className="text-sm font-medium text-foreground/80">Messaggio *</label>
          <Textarea id="message" name="message" required placeholder="Raccontami brevemente la tua attività e quali aspetti vorresti delegare o organizzare meglio." className="min-h-[120px] resize-none" />
        </div>
        <div className="space-y-3">
          <div className="bg-secondary/20 border border-border/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <input type="checkbox" id="gdprConsent" checked={gdprChecked} onChange={(e) => setGdprChecked(e.target.checked)} className="mt-0.5 w-4 h-4 accent-primary cursor-pointer flex-shrink-0" />
              <label htmlFor="gdprConsent" className="text-sm md:text-xs text-foreground/70 leading-relaxed cursor-pointer">
                Ho letto e accetto l'<Link to="/privacy-policy" className="text-primary hover:underline font-medium">Informativa Privacy</Link> e acconsento al trattamento dei miei dati personali ai fini della richiesta di contatto, ai sensi del <strong className="text-foreground/80">Regolamento UE 2016/679 (GDPR)</strong>. *
              </label>
            </div>
          </div>
          <div className="bg-secondary/20 border border-border/50 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <input type="checkbox" id="newsletterConsent" checked={newsletterChecked} onChange={(e) => setNewsletterChecked(e.target.checked)} className="mt-0.5 w-4 h-4 accent-primary cursor-pointer flex-shrink-0" />
              <label htmlFor="newsletterConsent" className="text-sm md:text-xs text-foreground/70 leading-relaxed cursor-pointer">
                Desidero ricevere aggiornamenti, consigli pratici e risorse utili via email. Acconsento al trattamento dei dati per finalità informative e di marketing ai sensi del <strong className="text-foreground/80">Regolamento UE 2016/679 (GDPR)</strong>. <em className="italic opacity-80">Nessuno spam. Solo contenuti utili e aggiornamenti occasionali.</em>
              </label>
            </div>
          </div>
        </div>
<Button type="submit" className="w-full hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(229,192,161,0.3)] transition-all duration-300 py-6 text-base font-semibold uppercase tracking-wide" disabled={isSubmitting || !gdprChecked}>
          {isSubmitting ? "INVIO IN CORSO..." : <><Send className="w-5 h-5 mr-2" /> INVIA MESSAGGIO</>}
        </Button>
        <p className="text-xs text-foreground/50 text-center">* campi obbligatori</p>
      </form>
    </div>
  );
};

/* ─── MAIN PAGE ─────────────────────────────────────── */

const Index = () => {
  const {
    services,
    delegationBenefits,
    experienceItems,
    targets,
    // pricingCards, (Preserved for when pricing is defined)
    // portfolioCategories,
    steps,
    faqs
  } = getTranslations();

  useSEO({
    title: "Noemi Tomassetti | Assistente Virtuale per Professionisti",
    description: "Assistente Virtuale per liberi professionisti e piccole aziende. Delega la gestione operativa, email e appuntamenti per riprendere il controllo del tuo tempo.",
    canonical: "https://www.noemitomassetti.it/",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Noemi Tomassetti Virtual Assistant",
        "url": "https://www.noemitomassetti.it",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.noemitomassetti.it/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "name": "Noemi Tomassetti Virtual Assistant",
        "description": "Servizi di Assistenza Virtuale e Segreteria Virtuale per liberi professionisti, consulenti e piccole aziende. Organizzazione aziendale e gestione appuntamenti.",
        "url": "https://www.noemitomassetti.it",
        "logo": "https://vibe.filesafe.space/meta/1776423224485175331/favicon.png",
        "image": "/noemi-tomassetti.png",
        "founder": {
          "@type": "Person",
          "name": "Noemi Tomassetti"
        },
        "sameAs": [
          "https://www.linkedin.com/in/noemitomassetti",
          "https://www.facebook.com/profile.php?id=61588891083364",
          "https://www.instagram.com/noemitomassetti_va"
        ],
        "telephone": "+39-388-471-8600",
        "email": "info@noemitomassetti.it",
        "areaServed": "IT",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Castelfidardo",
          "addressRegion": "AN",
          "addressCountry": "IT"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+39-388-471-8600",
          "contactType": "customer support",
          "email": "info@noemitomassetti.it",
          "availableLanguage": ["Italian", "English", "French", "Spanish"]
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Noemi Tomassetti",
        "jobTitle": "Assistente Virtuale per Professionisti",
        "description": "Assistente Virtuale e Segreteria Virtuale con oltre 25 anni di esperienza. Laureata in Mediazione Linguistica con 110 e lode e Master in Traduzione Specialistica.",
        "knowsLanguage": ["it", "en", "fr", "es"],
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Università (Laurea in Mediazione Linguistica)"
          }
        ],
        "url": "https://www.noemitomassetti.it",
        "sameAs": [
          "https://www.linkedin.com/in/noemitomassetti",
          "https://www.facebook.com/profile.php?id=61588891083364",
          "https://www.instagram.com/noemitomassetti_va"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Noemi Tomassetti Virtual Assistant"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      ...services.map(service => ({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "Noemi Tomassetti Virtual Assistant"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Italy"
        },
        "serviceType": "Virtual Assistant Services"
      }))
    ]
  });

  return (
    <Layout>
      {/* ── HERO ── */}
      <section id="home" className="relative flex flex-col md:flex-row md:items-center overflow-hidden min-h-[100svh] md:min-h-[600px] lg:min-h-[750px] bg-transparent">
        {/* Background Image Container */}
        <div className="relative md:absolute md:inset-0 w-full md:h-full z-0 flex justify-center md:justify-end animate-in fade-in duration-1000">
          <img
            src="/noemi-tomassetti.png"
            alt="Noemi Tomassetti Assistente Virtuale"
            width="800"
            height="1200"
            loading="eager"
            className="w-full md:w-[60%] lg:w-[50%] xl:w-[45%] h-auto md:h-full object-cover object-[center_12%] md:object-[center_18%] scale-105 md:scale-110 origin-top [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] md:[mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_100%)]"
          />
          {/* Desktop Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10 md:w-[60%] hidden md:block pointer-events-none"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 pb-12 pt-4 md:pt-0 flex flex-col justify-center -mt-16 md:mt-0">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="sr-only">Noemi Tomassetti - Assistente Virtuale per professionisti, consulenti e piccole attività. Segreteria, organizzazione, comunicazione multilingue, traduzione e siti web.</h1>
            <div className="mb-6 md:mb-8 w-full max-w-[280px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[600px]">
              <svg viewBox="0 0 400 68" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Noemi Tomassetti Virtual Assistant" role="img">
                <title>Noemi Tomassetti - Virtual Assistant</title>
                <text x="0" y="42" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="500" fontSize="40" fill="#e5c0a1" textLength="400" lengthAdjust="spacing" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Noemi Tomassetti</text>
                <text x="0" y="62" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="300" fontSize="14" fill="rgba(229, 192, 161, 0.9)" letterSpacing="5" textLength="400" lengthAdjust="spacing" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>VIRTUAL ASSISTANT</text>
              </svg>
            </div>
            
            <div className="text-base md:text-lg leading-relaxed text-white mb-8 md:mb-10 max-w-xl space-y-4 md:space-y-6">
              <h2 className="font-normal text-[#e5c0a1] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight drop-shadow-md">
                Il supporto che ti aiuta a lavorare meglio, con più ordine.
              </h2>
              <p className="font-medium text-white text-base sm:text-lg drop-shadow-sm">
                Supporto organizzativo, amministrativo e linguistico da remoto per professionisti, consulenti e piccole attività.
              </p>
              <div className="space-y-3">
                <p className="font-light text-white/95 text-sm sm:text-base md:text-base lg:text-lg drop-shadow-sm">
                  Metto a disposizione oltre vent'anni di esperienza organizzativa e linguistica per aiutarti a gestire meglio il lavoro quotidiano.
                </p>
                <p className="font-light text-white/95 text-sm sm:text-base md:text-base lg:text-lg drop-shadow-sm">
                  Dalla gestione di email e appuntamenti alla comunicazione con i clienti, dalla traduzione alla creazione di siti web e landing page: un supporto professionale e flessibile, costruito sulle tue esigenze.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <BookingButton size="lg" aria-label="Prenota una call gratuita" className="text-sm md:text-base px-6 py-6 sm:px-8 rounded-md font-semibold shadow-[0_0_15px_rgba(229,192,161,0.2)] w-full sm:w-auto bg-[#e5c0a1] text-[#0a2d26] hover:bg-[#e5c0a1] hover:scale-105 hover:shadow-[0_0_25px_rgba(229,192,161,0.4)] uppercase tracking-wide transition-all duration-300">
                PRENOTA UNA CALL GRATUITA
              </BookingButton>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90 bg-black/30 backdrop-blur px-4 py-3 rounded-md border border-white/10">
                <span className="text-[#e5c0a1]">✓</span>
                <span>30 minuti &bull; Nessun impegno &bull; Parliamo delle tue esigenze</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUANDO LE ATTIVITÀ DA GESTIRE DIVENTANO TROPPE ── */}
      <section className="bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
        <div className="container px-4 md:px-6 py-12 md:py-20 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">Non tutto quello che devi fare deve necessariamente essere fatto da te.</h2>
          <div className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed space-y-4">
            <p>Gestire un'attività significa occuparsi del proprio lavoro, ma anche di tutto ciò che gli gira intorno.</p>
            <p>Email, appuntamenti, richieste dei clienti, documenti, comunicazioni, organizzazione e tante piccole attività che, una dopo l'altra, finiscono per occupare tempo e attenzione.</p>
            <p className="font-semibold text-foreground">Sono importanti, ma non sempre richiedono la tua presenza.</p>
          </div>

          <div className="mt-10 pt-8 border-t border-border/40">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">È qui che posso offrirti il mio supporto.</h3>
            <div className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed space-y-3">
              <p>Posso occuparmi di alcune delle attività di segreteria, organizzazione, comunicazione e supporto operativo che fanno parte della gestione quotidiana della tua attività.</p>
              <p>L'obiettivo è semplice: aiutarti a lavorare con più ordine e avere più tempo e attenzione per le tue priorità.</p>
            </div>
            <div className="bg-card border border-primary/20 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
              <div>
                <p className="font-bold text-foreground text-base sm:text-lg">Vuoi scoprire cosa possiamo delegare e come posso aiutarti?</p>
                <p className="text-sm text-muted-foreground">Scopri tutte le aree di supporto e i servizi dedicati.</p>
              </div>
              <Button asChild className="shrink-0 uppercase font-bold text-xs tracking-wider px-6 py-5">
                <a href="#servizi">SCOPRI I SERVIZI</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHI SONO ── */}
      <section id="chi-sono" className="container px-4 md:px-6 py-12 md:py-20 max-w-4xl mx-auto scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '300ms' }}>
        <div className="space-y-5 text-base md:text-lg text-foreground/85 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">Piacere, sono Noemi.</h2>
          
          <p>Sono un'Assistente Virtuale e metto a disposizione <strong>oltre 20 anni di esperienza professionale</strong> in ambito organizzativo, linguistico e di supporto.</p>
          <p>Nel corso del mio percorso ho lavorato in contesti diversi, occupandomi di segreteria, organizzazione, customer care, back office e traduzione.</p>
          <p>Ho conseguito una <strong>Laurea in Mediazione Linguistica con 110 e lode</strong> e un <strong>Master in Traduzione Specialistica</strong>.</p>
          <p>Lavoro in <strong>italiano, inglese, francese e spagnolo</strong>.</p>
          <p>Oggi metto queste competenze a disposizione di <strong>professionisti, consulenti, formatori e piccole attività</strong> che hanno bisogno di un supporto affidabile per gestire meglio il lavoro quotidiano e, quando necessario, comunicare anche con interlocutori internazionali.</p>
          
          <div className="my-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r-xl space-y-3">
            <h3 className="text-xl md:text-2xl font-bold text-primary">Il mio modo di lavorare</h3>
            <p className="text-foreground/90 leading-relaxed">Ogni collaborazione parte dall'ascolto.</p>
            <p className="text-foreground/90 leading-relaxed">Mi racconti la tua attività, le tue esigenze e le attività che ti occupano più tempo. Insieme individuiamo ciò che ha senso delegare e definiamo una modalità di lavoro semplice e sostenibile.</p>
            <p className="text-foreground font-semibold">Nessuna formula standard. Partiamo da ciò che ti serve davvero.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <BookingButton size="lg" className="text-sm md:text-base px-8 py-6 rounded-md font-semibold bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 uppercase tracking-wide">
              CONOSCIAMOCI MEGLIO
            </BookingButton>
            <span className="text-sm text-muted-foreground italic">Call gratuita di 30 minuti &bull; Nessun impegno</span>
          </div>
        </div>
      </section>

      {/* ── IL VALORE DELLA DELEGA & ESPERIENZA ── */}
      <section className="bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '400ms' }}>
        <div className="container px-4 md:px-6 py-12 md:py-20 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Delegare non significa perdere il controllo.</h2>
          <p className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed">
            Significa scegliere con attenzione quali attività continuare a gestire personalmente e quali affidare a qualcuno che possa occuparsene con precisione e continuità.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {delegationBenefits.map((b, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-background border border-border/60 rounded-xl">
                <b.icon className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{b.title}</h3>
                  <p className="text-foreground/80 text-base">{b.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-lg md:text-xl font-semibold text-foreground mb-12">
            Il mio obiettivo non è sostituirti. È aiutarti a gestire meglio il lavoro.
          </p>

          {/* Competenze costruite nel tempo */}
          <div className="border-t border-border/40 pt-10">
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-6">Competenze costruite nel tempo</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {experienceItems.map((item, i) => (
                <div key={i} className="p-5 bg-card border border-border rounded-xl">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <h4 className="font-semibold text-primary text-base md:text-lg">{item.title}</h4>
                  </div>
                  <p className="text-foreground/80 text-base whitespace-pre-line leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIZI ── */}
      <section id="servizi" className="container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
        <div className="max-w-4xl mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Come posso aiutarti</h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Il mio supporto si concentra su alcune aree precise. Puoi affidarmi una singola attività oppure costruire nel tempo una collaborazione più ampia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col bg-card p-6 md:p-8 rounded-2xl border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-primary stroke-[1.5]" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
              {service.subtitle && <p className="text-sm font-medium text-foreground/90 italic mb-4">{service.subtitle}</p>}
              <p className="text-foreground/80 leading-relaxed text-base whitespace-pre-line">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SUPPORTO / A CHI POSSO ESSERE UTILE ── */}
      <section id="supporto" className="bg-muted/50 border-y border-border/30 container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '300ms' }}>
        <div className="max-w-4xl mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Un supporto pensato per attività diverse</h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Ogni professione ha le sue specificità, ma molte esigenze organizzative e di gestione sono comuni:
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {targets.map((t, i) => (
            <div key={i} className="flex flex-col bg-background p-6 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                <t.icon className="w-6 h-6 text-primary stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{t.title}</h3>
              <p className="text-foreground/80 leading-relaxed text-base">{t.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-border/40 pt-6 space-y-2">
          <h3 className="text-lg md:text-xl font-bold text-primary">La tua attività è diversa?</h3>
          <p className="text-base md:text-lg text-foreground/85">Raccontami di cosa ti occupi. Possiamo valutare insieme se e come posso esserti utile.</p>
        </div>
      </section>

      {/* ── COLLABORAZIONE / TARIFFE (Temporaneamente nascosta in attesa della definizione dei prezzi) ── */}
      {/* 
      <section id="collaborazione" className="container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
        <div className="max-w-4xl mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Quanto costa il mio supporto?</h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
            Cerco di mantenere una struttura semplice e trasparente.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {pricingCards.map((card, i) => (
            <div key={i} className="flex flex-col justify-between bg-card border border-border rounded-2xl p-6 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">{card.title}</h3>
                <p className="text-xl font-extrabold text-foreground mb-3">{card.price}</p>
                <p className="text-base text-foreground/80 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground italic mb-8">
          * Il prezzo finale viene definito in base alle attività, alla complessità e al tempo necessario.
        </p>

        <div className="bg-secondary/20 border border-border/60 rounded-2xl p-6 md:p-8 mb-8">
          <h3 className="text-xl font-bold text-primary mb-4">Preferisco essere chiara fin dall'inizio.</h3>
          <div className="text-base md:text-lg text-foreground/85 space-y-3 leading-relaxed">
            <p>Il mio lavoro riguarda <strong>segreteria, organizzazione, comunicazione, traduzione, back office e presenza online</strong>.</p>
            <p className="font-semibold text-foreground">Non mi occupo di contabilità, fatturazione o adempimenti fiscali.</p>
            <p>Preferisco offrire servizi nelle aree in cui posso mettere a disposizione esperienza e competenze concrete.</p>
          </div>
        </div>

        <div className="bg-card border border-primary/20 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <p className="text-base md:text-lg font-bold text-foreground">Non sai quale soluzione fa per te?</p>
            <p className="text-base text-foreground/80">Nessun problema. Ne parliamo durante la call gratuita.</p>
          </div>
          <BookingButton size="lg" className="whitespace-nowrap px-8 py-6 rounded-md font-semibold bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 uppercase tracking-wide">
            PRENOTA UNA CALL
          </BookingButton>
        </div>
      </section>
      */}

      {/* ── COME COLLABORARE (steps) ── */}
      <section id="come-collaborare" className="bg-muted/50 border-y border-border/30 container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '300ms' }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-12 text-left">Iniziare è semplice.</h2>

        {/* Desktop Zigzag flow diagram */}
        <div className="hidden lg:flex w-full max-w-6xl mx-auto relative pt-4 pb-4">
          {steps.map((step, i) => {
            const isTop = i % 2 === 0;
            const isLast = i === steps.length - 1;
            const isFirst = i === 0;

            return (
              <div key={i} className={`flex flex-col flex-1 ${i !== 0 ? '-ml-[2px]' : ''}`}>
                {/* Top Half */}
                <div className={`relative flex-1 p-4 xl:p-6 flex flex-col items-center justify-center
                  ${isTop ? 'border-t-2 border-l-2 border-r-2 border-primary rounded-t-[2rem]' : ''}
                `} style={{ minHeight: '220px' }}>
                  {isTop && (
                    <>
                      <span className="text-xs font-bold text-primary mb-1">{step.number}</span>
                      <h3 className="text-lg xl:text-xl font-semibold text-primary text-center mb-2">{step.title}</h3>
                      <p className="text-foreground/80 text-sm xl:text-base text-center leading-relaxed">{step.description}</p>
                    </>
                  )}
                  {/* Start Dot */}
                  {isFirst && isTop && (
                    <div className="absolute -left-[6px] -bottom-[6px] w-3.5 h-3.5 rounded-full bg-primary" />
                  )}
                  {/* End Dot */}
                  {isLast && isTop && (
                    <div className="absolute -right-[6px] -bottom-[6px] w-3.5 h-3.5 rounded-full bg-primary" />
                  )}
                  {/* Down Arrow */}
                  {isTop && !isLast && (
                    <div className="absolute -right-[11px] -bottom-[11px] z-10 text-primary bg-background w-6 h-6 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                    </div>
                  )}
                </div>

                {/* Bottom Half */}
                <div className={`relative flex-1 p-4 xl:p-6 flex flex-col items-center justify-center
                  ${!isTop ? 'border-b-2 border-l-2 border-r-2 border-primary rounded-b-[2rem]' : ''}
                `} style={{ minHeight: '220px' }}>
                  {!isTop && (
                    <>
                      <span className="text-xs font-bold text-primary mb-1">{step.number}</span>
                      <h3 className="text-lg xl:text-xl font-semibold text-primary text-center mb-2">{step.title}</h3>
                      <p className="text-foreground/80 text-sm xl:text-base text-center leading-relaxed">{step.description}</p>
                    </>
                  )}
                  {/* Up Arrow */}
                  {!isTop && !isLast && (
                    <div className="absolute -right-[11px] -top-[11px] z-10 text-primary bg-background w-6 h-6 flex items-center justify-center">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile vertical flow */}
        <div className="lg:hidden space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-primary/50 mt-8">
          {steps.map((step, i) => (
            <div key={i} className="relative flex items-start gap-6">
              <div className="w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center flex-shrink-0 z-10">
                <span className="text-primary font-bold">{step.number}</span>
              </div>
              <div className="pt-1 pb-2">
                <h3 className="text-lg font-semibold text-primary mb-1">{step.title}</h3>
                <p className="text-foreground/80 text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-start">
          <BookingButton size="lg" className="px-8 py-6 rounded-md font-semibold bg-primary text-primary-foreground hover:scale-105 transition-all duration-300 uppercase tracking-wide">
            PRENOTA UNA CALL GRATUITA
          </BookingButton>
        </div>
      </section>

      {/* ── TESTIMONIANZE ── */}
      <section className="container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Le esperienze di chi ha scelto di delegare</h2>
          <p className="text-base md:text-lg text-foreground/80">L'esperienza di chi ha già scelto di delegare per ritrovare tempo e serenità.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col bg-background border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex text-primary mb-4">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-primary" />)}
              </div>
              <p className="text-foreground/80 leading-relaxed italic mb-6 flex-grow">"{t.text}"</p>
              <div className="border-t border-border/30 pt-4">
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-primary">{t.role}</p>
                <p className="text-xs text-muted-foreground mt-1">Cliente verificato &bull; Collaborazione continuativa</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" className="bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
        <div className="container px-4 md:px-6 py-10 md:py-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Blog &amp; Risorse</h2>
            <p className="text-base md:text-lg text-foreground/80">Approfondimenti, consigli pratici e strumenti per organizzare il tuo lavoro, comunicare meglio e gestire la tua attività.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getBlogPosts()
              .filter(post => post.published !== false)
              .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
              .slice(0, 3)
              .map((post, index) => (
              <Card key={post.id} className="flex flex-col h-full bg-background border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
                <div className="h-40 w-full bg-muted overflow-hidden">
                  <img src={post.image} alt={post.alt || `Copertina articolo: ${post.title}`} loading={index === 0 ? "eager" : "lazy"} decoding="async" width="400" height="200" className="w-full h-full object-contain bg-background opacity-90 transition-transform duration-500 hover:scale-105" />
                </div>
                <CardHeader className="pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="text-base text-card-foreground leading-tight">{post.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <CardDescription className="text-sm text-card-foreground/80 mb-5">{post.excerpt}</CardDescription>
                  <Button variant="outline" className="w-full mt-auto text-sm" asChild>
                    <Link to={`/blog/${post.slug || post.id}`}>Leggi di più</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
              <Link to="/blog">Vedi tutti gli articoli</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '300ms' }}>
        <div className="container px-4 md:px-6 py-12 md:py-20 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Domande frequenti</h2>
            <p className="text-base md:text-lg text-foreground/80">Tutto quello che è utile sapere prima di iniziare a collaborare.</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/50 transition-colors">
                <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:text-primary py-4">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-foreground/80 text-base leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CONTATTI ── */}
      <section id="contatti" className="bg-muted/50 border-t border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
        <div className="container px-4 md:px-6 py-12 md:py-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">C'è qualcosa che vorresti smettere di gestire da solo?</h2>
          <div className="text-foreground/85 text-base md:text-lg mb-10 max-w-2xl space-y-3 leading-relaxed">
            <p className="font-semibold text-primary">Parliamone.</p>
            <p>Raccontami di cosa ti occupi, quali attività ti portano via più tempo e cosa vorresti riuscire a delegare.</p>
            <p>Partiamo da lì.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-primary mb-5">Il mio supporto per te</h3>
              <ul className="space-y-4 text-foreground/90 text-base mb-8">
                {[
                  "Analisi delle tue esigenze e priorità",
                  "Soluzioni personalizzate e flessibili",
                  "Gestione operativa precisa e organizzata",
                  "Comunicazione chiara e costante",
                  "Riservatezza e attenzione ai dettagli"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCheck className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <address className="space-y-3 mb-6 not-italic" itemScope itemType="https://schema.org/LocalBusiness">
                <meta itemProp="name" content="Noemi Tomassetti Virtual Assistant" />
                <div className="flex items-center gap-3 text-foreground/90 text-base">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="mailto:info@noemitomassetti.it" itemProp="email" className="text-primary hover:underline">info@noemitomassetti.it</a>
                </div>
                <div className="flex items-center gap-3 text-foreground/90 text-base">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <a href="tel:+393884718600" itemProp="telephone" className="hover:text-primary">+39 388 471 8600</a>
                </div>
                <div className="flex items-start gap-3 text-foreground/90 text-base" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span><span itemProp="addressLocality">Castelfidardo</span> (<span itemProp="addressRegion">AN</span>) - <span itemProp="addressCountry">ITALIA</span></span>
                    <span>Supporto da remoto in tutta Italia</span>
                  </div>
                </div>
              </address>
              <div className="bg-secondary/30 border border-border rounded-xl p-5">
                <p className="text-foreground/80 text-base leading-relaxed">
                  <BookingButton variant="link" className="text-primary font-bold hover:underline uppercase p-0 h-auto inline">PRENOTA LA TUA CALL GRATUITA</BookingButton> (30 minuti · Nessun impegno). Capiremo insieme come posso supportarti nella gestione operativa della tua attività, in modo concreto, semplice e sostenibile.
                </p>
              </div>
            </div>
            <ContattiForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
