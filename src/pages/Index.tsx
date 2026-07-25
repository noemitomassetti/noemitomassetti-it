import { Layout } from "@/components/Layout";
import { getBlogPosts } from "./BlogPost";
import { Button } from "@/components/ui/button";
import { BookingButton } from "@/components/BookingButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import {
  Calendar, Mail, User, ClipboardList, Folder, Database, Briefcase,
  Apple, Dumbbell, Target, GraduationCap,
  Leaf, CalendarDays, Star, Send, MapPin, Phone,
  Clock, Euro, Award, Heart, Globe, MessageSquare, RefreshCw, LayoutList, CheckCircle2, Bell, RotateCcw, AlertCircle, CheckCheck, FileText
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

/* ─── DATA ─────────────────────────────────────────── */

const getTranslations = () => {
  return {
    services: [
      { title: "Gestione Agenda e Appuntamenti", description: "Organizzo il tuo calendario, gestisco prenotazioni, modifiche e promemoria. Avrai tutto sotto controllo, evitando sovrapposizioni e liberando la mente.", icon: Calendar },
      { title: "Supporto per la Presenza Online", description: "Ti aiuto a strutturare e mantenere aggiornata la tua presenza digitale, organizzando i contenuti del sito o della landing page in modo professionale.", icon: LayoutList },
      { title: "Traduzione Contenuti e Comunicazioni", description: "Traduco e adatto i tuoi contenuti (siti web, landing page, corsi) e le comunicazioni nelle mie lingue di lavoro: italiano, inglese, francese e spagnolo.", icon: Globe },
      { title: "Gestione Email e Customer Care", description: "Svuoto e organizzo la tua casella di posta, rispondo tempestivamente alle richieste dei clienti e gestisco il flusso di comunicazioni quotidiane.", icon: Mail },
      { title: "Supporto per Corsi", description: "Ti affianco nell'organizzazione operativa di corsi online o in presenza: iscrizioni, invio materiali, assistenza partecipanti e follow-up.", icon: GraduationCap },
      { title: "Gestione Clienti e Preventivi", description: "Mi occupo dell'invio di preventivi e della gestione amministrativa di base, assicurando un'esperienza cliente impeccabile.", icon: User },
      { title: "Organizzazione Digitale", description: "Riordino i tuoi archivi, imposto strumenti di lavoro condivisi (CRM, Drive) e ottimizzo i flussi per un lavoro più rapido ed efficiente.", icon: Database },
      { title: "Supporto Operativo e Back Office", description: "Prendo in carico le attività ripetitive che rallentano le tue giornate, permettendoti di concentrarti esclusivamente sul tuo core business.", icon: Briefcase },
    ],
    targets: [
      { title: "Professionisti su appuntamento", icon: CalendarDays, description1: "La gestione dell'agenda, le disdette e le conferme ti sottraggono ore preziose.", description2: "Riordino il tuo calendario e gestisco i contatti, garantendo un'esperienza impeccabile ai tuoi clienti." },
      { title: "Formatori e creatori di corsi", icon: GraduationCap, description1: "Lanciare e gestire corsi (online o in presenza) richiede un enorme sforzo logistico e di customer care.", description2: "Mi occupo di iscrizioni, invio materiali, assistenza ai partecipanti e follow-up, così puoi dedicarti solo alla formazione." },
      { title: "Piccole aziende e studi", icon: Briefcase, description1: "Il back-office disorganizzato, le email accumulate e la burocrazia rallentano la crescita della tua attività.", description2: "Ottimizzo la gestione di preventivi e documenti, creando processi fluidi ed efficienti per farti risparmiare tempo." },
      { title: "Chi lavora con l'estero", icon: Globe, description1: "Hai bisogno di comunicare con clienti internazionali o di tradurre i tuoi materiali in modo professionale.", description2: "Gestisco comunicazioni, traduzioni e contenuti in inglese, francese e spagnolo, supportandoti nell'espansione." },
    ],
    packages: [
      { title: "Supporto Base", description: "Ideale per iniziare a delegare le attività più urgenti e alleggerire da subito il carico operativo quotidiano." },
      { title: "Supporto Continuativo", description: "Una collaborazione costante per la gestione di agenda, email e clienti. Un vero e proprio braccio destro per la tua attività." },
      { title: "Progetti su Misura", description: "Un pacchetto personalizzato per esigenze specifiche: supporto per un corso, riordino digitale o un progetto di traduzione." },
    ],
    steps: [
      { title: "Call Conoscitiva", subtitle: "(30 minuti – gratuita)", description: "Ci incontriamo in videochiamata per parlare della tua attività e capire quali compiti ti portano via più tempo." },
      { title: "Analisi e Priorità", description: "Studio il tuo flusso di lavoro e definiamo insieme le priorità di delega per ottenere risultati immediati." },
      { title: "Impostazione del Lavoro", description: "Condividiamo gli strumenti di lavoro e stabiliamo procedure chiare per collaborare in modo semplice e veloce." },
      { title: "Proposta Personalizzata", description: "Ti invio un preventivo dettagliato basato esclusivamente sulle ore effettive o sui progetti richiesti." },
      { title: "Inizio Collaborazione", description: "Iniziamo la collaborazione. Recuperi subito tempo prezioso da dedicare alla crescita del tuo business." },
    ],
    faqs: [
      {
        q: "Perché scegliere un'Assistente Virtuale e non un dipendente?",
        a: "Assumere un dipendente comporta costi fissi e oneri di gestione del personale. Con un'Assistente Virtuale paghi solo per il tempo effettivo dedicato al tuo progetto. È una soluzione flessibile che ti permette di aumentare o ridurre le ore in base alle reali esigenze della tua attività, ottimizzando il budget."
      },
      {
        q: "Come comunichiamo e ci aggiorniamo sul lavoro?",
        a: "Utilizziamo gli strumenti che preferisci: email, WhatsApp, Asana o altro. Definiamo insieme un ritmo di aggiornamento (ad esempio un report settimanale o una breve call periodica) per garantirti sempre il pieno controllo sulle attività delegate."
      },
      {
        q: "Come garantisci la riservatezza dei miei dati?",
        a: "La privacy è fondamentale. Prima di iniziare qualsiasi collaborazione, firmiamo un Accordo di Riservatezza (NDA). I tuoi dati, i tuoi accessi e le informazioni dei tuoi clienti sono trattati con la massima sicurezza e nel pieno rispetto del GDPR."
      },
      {
        q: "Posso delegare solo per un breve periodo o per poche ore?",
        a: "Certamente. Non richiedo contratti vincolanti a lungo termine. Puoi delegare anche solo poche ore al mese o richiedere supporto per un singolo progetto specifico (come il lancio di un corso o la traduzione di un sito web)."
      },
      {
        q: "In quali lingue offri i tuoi servizi?",
        a: "Sono madrelingua italiana e, grazie alla mia Laurea in Mediazione Linguistica e al Master in Traduzione, offro supporto operativo e gestione delle comunicazioni anche in inglese, francese e spagnolo."
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!gdprChecked) {
      toast({ title: "Consenso richiesto", description: "Accetta il trattamento dei dati personali per inviare il messaggio.", variant: "destructive" });
      return;
    }
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const firstName = data.get("first_name") as string;
    const lastName = data.get("last_name") as string;
    const email = data.get("email") as string;
    const phone = data.get("phone") as string;
    const oggetto = data.get("subject") as string;
    const messaggio = data.get("message") as string;

    setIsSubmitting(true);
    fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
      method: "POST",
      headers: { "Content-Type": "application/json", version: "2021-07-28" },
      body: JSON.stringify({
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "Contact Form",
        formData: { first_name: firstName, last_name: lastName, email, phone, "contact.oggetto": oggetto, "contact.messaggio": messaggio, "contact.newsletter_consent": newsletterChecked ? "Sì" : "No" },
        formLabels: { first_name: "Nome", last_name: "Cognome", email: "Email", phone: "Telefono", "contact.oggetto": "Oggetto", "contact.messaggio": "Messaggio", "contact.newsletter_consent": "Iscrizione Newsletter" },
        url: window.location.href,
        title: document.title,
        path: window.location.pathname,
        userAgent: navigator.userAgent,
        trackingId: "tk_f3270489cce84950925e251fb98ce682",
        locationId: "QIS5mDvq2kDJjK2pDMuf",
        sessionId: crypto.randomUUID(),
        properties: { deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop" },
      }),
    }).catch(() => {});

    setTimeout(() => {
      setIsSubmitting(false);
      toast({ title: "Messaggio inviato!", description: "Ti risponderò il prima possibile." });
      form.reset();
      setGdprChecked(false);
      setNewsletterChecked(false);
    }, 1000);
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg">
      <h3 className="text-xl font-semibold text-primary mb-6">Scrivimi un messaggio</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={gdprChecked} onChange={(e) => setGdprChecked(e.target.checked)} className="mt-0.5 w-4 h-4 accent-primary cursor-pointer flex-shrink-0" />
              <span className="text-sm md:text-xs text-foreground/70 leading-relaxed">
                Ho letto e accetto l'<Link to="/privacy-policy" className="text-primary hover:underline font-medium">Informativa Privacy</Link> e acconsento al trattamento dei miei dati personali ai fini della richiesta di contatto, ai sensi del <strong className="text-foreground/80">Regolamento UE 2016/679 (GDPR)</strong>. *
              </span>
            </label>
          </div>
          <div className="bg-secondary/20 border border-border/50 rounded-lg p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={newsletterChecked} onChange={(e) => setNewsletterChecked(e.target.checked)} className="mt-0.5 w-4 h-4 accent-primary cursor-pointer flex-shrink-0" />
              <span className="text-sm md:text-xs text-foreground/70 leading-relaxed">
                Desidero ricevere aggiornamenti, consigli pratici e risorse utili via email. Acconsento al trattamento dei dati per finalità informative e di marketing ai sensi del <strong className="text-foreground/80">Regolamento UE 2016/679 (GDPR)</strong>. <em className="italic opacity-80">Nessuno spam. Solo contenuti utili e aggiornamenti occasionali.</em>
              </span>
            </label>
          </div>
        </div>
        <Button type="submit" className="w-full hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(229,192,161,0.3)] transition-all duration-300" disabled={isSubmitting || !gdprChecked}>
          {isSubmitting ? "Invio in corso..." : <><Send className="w-4 h-4 mr-2" /> Invia Messaggio</>}
        </Button>
        <p className="text-xs text-foreground/50 text-center">* campi obbligatori</p>
      </form>
    </div>
  );
};

/* ─── MAIN PAGE ─────────────────────────────────────── */

const Index = () => {
  const { services, targets, packages, steps, faqs } = getTranslations();

  return (
    <Layout>
      {/* ── HERO ── */}
      <section id="home" className="relative flex flex-col md:flex-row md:items-center overflow-hidden min-h-[100svh] md:min-h-[600px] lg:min-h-[750px] bg-transparent">
        {/* Background Image Container */}
        <div className="relative md:absolute md:inset-0 w-full md:h-full z-0 flex justify-center md:justify-end animate-in fade-in duration-1000">
          <img
            src="https://vibe.filesafe.space/1776423224485175331/attachments/bbb7dfc5-9986-426b-b55f-1df8c6232a6b.jpg"
            alt="Noemi Tomassetti Assistente Virtuale"
            className="w-full md:w-[60%] lg:w-[50%] xl:w-[45%] h-auto md:h-full object-cover object-top md:object-[85%_top] [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] md:[mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)] md:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_100%)]"
          />
          {/* Desktop Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent z-10 md:w-[60%] hidden md:block pointer-events-none"></div>
        </div>

        <div className="container relative z-10 px-4 md:px-6 pb-12 pt-4 md:pt-0 flex flex-col justify-center -mt-16 md:mt-0">
          <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="sr-only">Noemi Tomassetti - Assistente Virtuale per liberi professionisti e piccole attività</h1>
            <div className="mb-6 md:mb-8 w-full max-w-[280px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[600px]">
              <svg viewBox="0 0 400 68" width="100%" xmlns="http://www.w3.org/2000/svg" aria-label="Noemi Tomassetti Virtual Assistant">
                <text x="0" y="42" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="500" fontSize="40" fill="#e5c0a1" textLength="400" lengthAdjust="spacing" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Noemi Tomassetti</text>
                <text x="0" y="62" fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif" fontWeight="300" fontSize="14" fill="rgba(229, 192, 161, 0.9)" letterSpacing="5" textLength="400" lengthAdjust="spacing" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>VIRTUAL ASSISTANT</text>
              </svg>
            </div>
            
            <div className="text-base md:text-lg leading-relaxed text-white mb-8 md:mb-10 max-w-xl space-y-4 md:space-y-6">
              <h2 className="font-normal text-[#e5c0a1] text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight drop-shadow-md">
                Assistente Virtuale per professionisti e piccole aziende: riprendi il controllo del tuo tempo.
              </h2>
              <div className="space-y-2">
                <p className="font-light text-white/95 text-sm sm:text-base md:text-base lg:text-lg drop-shadow-sm">
                  Aiuto professionisti che lavorano su appuntamento, formatori e piccole realtà a gestire l'operatività quotidiana. Delega la gestione di email e appuntamenti, l'organizzazione pratica dei tuoi corsi e le attività amministrative per liberare tempo prezioso da dedicare ai tuoi clienti.
                </p>
                <p className="font-light text-white/95 text-sm sm:text-base md:text-base lg:text-lg drop-shadow-sm">
                  Nessun costo fisso da dipendente. Solo un supporto flessibile, preciso e multilingue (italiano - inglese - francese - spagnolo) per far crescere la tua attività senza stress.
                </p>
              </div>
            </div>
            <BookingButton size="lg" className="text-sm md:text-base px-6 py-6 sm:px-8 rounded-md font-semibold shadow-[0_0_15px_rgba(229,192,161,0.2)] w-full sm:w-auto bg-[#e5c0a1] text-[#0a2d26] hover:bg-[#e5c0a1] hover:scale-105 hover:shadow-[0_0_25px_rgba(229,192,161,0.4)] uppercase tracking-wide transition-all duration-300">
              PRENOTA UNA CALL CONOSCITIVA GRATUITA
            </BookingButton>
          </div>
        </div>
      </section>

      {/* ── TI RICONOSCI? ── */}
      <section className="bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
        <div className="container px-4 md:px-6 py-12 md:py-20 max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">La gestione operativa sta frenando la tua crescita?</h2>
          <div className="text-base md:text-lg text-foreground/80 mb-6 leading-relaxed space-y-3">
            <p>Se lavori su appuntamento, offri percorsi formativi o gestisci una piccola azienda, il tuo tempo dovrebbe essere dedicato all'erogazione del servizio.</p>
            <p>Eppure, ogni giorno ti ritrovi sommerso da email, disdette dell'ultimo minuto, richieste di informazioni e attività di back-office che prosciugano le tue energie.</p>
          </div>
          
          <ul className="space-y-3 mb-8 text-foreground/90 font-medium text-base md:text-lg">
             <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" /><strong>L'agenda è un caos</strong> tra incastri impossibili, conferme, disdette e riprogrammazioni degli appuntamenti</li>
             <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" /><strong>I lanci sono stressanti</strong> gestire le iscrizioni ai corsi, inviare i materiali e fare customer care ti toglie il sonno</li>
             <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" /><strong>Lavori fino a tardi</strong> per smaltire le email, preparare i preventivi e sistemare l'amministrazione di base</li>
          </ul>

          <p className="text-lg md:text-xl font-semibold text-foreground">
            Il risultato? Lavori di più, guadagni di meno e sacrifichi il tuo tempo libero e la tua serenità.
          </p>

          <div className="mt-10 pt-8 border-t border-border/40">
            <p className="text-xl md:text-2xl font-bold text-primary mb-4">La Soluzione? Delegare in Modo Strategico</p>
            <div className="text-base md:text-lg text-foreground/80 mb-5 leading-relaxed space-y-3">
              <p>Non devi assumere un dipendente a tempo pieno per riprendere il controllo della tua vita lavorativa.</p>
              <p>Delegando le attività operative a un'Assistente Virtuale, trasformi un costo in un investimento altamente redditizio: paghi solo le ore effettive, risparmi tempo ed eviti i costi fissi di un dipendente.</p>
            </div>
            <ul className="space-y-3 text-foreground/90 font-medium text-base md:text-lg">
               <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><strong>Tu ti concentri</strong> sull'acquisizione clienti e sull'erogazione del tuo servizio</li>
               <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><strong>Io mi occupo</strong> di far funzionare la tua attività in modo fluido e impeccabile</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CHI SONO ── */}
      <section id="chi-sono" className="container px-4 md:px-6 py-12 md:py-20 max-w-4xl mx-auto scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '300ms' }}>
        <div className="space-y-5 text-base md:text-lg text-foreground/85 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">Assistente Virtuale: chi sono e il valore che porto alla tua attività</h2>
          
          <p>Ho iniziato a lavorare alla fine degli anni &apos;90, quando l&apos;agenda era ancora cartacea e il fax rappresentava uno degli strumenti principali di comunicazione. Da allora ho maturato oltre venticinque anni di esperienza professionale in contesti diversi, dalla segreteria organizzativa al customer care, dal back office commerciale alla traduzione.</p>
          <p>Nonostante i profondi cambiamenti tecnologici e organizzativi, una cosa è rimasta costante nel mio percorso: la mia capacità di organizzare, semplificare e gestire attività e comunicazioni con precisione e attenzione alle persone.</p>
          <p>Nel corso degli anni ho conseguito una Laurea in Mediazione Linguistica con 110 e lode e un Master in Traduzione Specialistica in lingua inglese, approfondendo parallelamente lo studio del francese e dello spagnolo. Ho collaborato a progetti di traduzione di materiali educativi, documentazione specialistica e pubblicazioni editoriali, oltre ad aver svolto attività di tutoraggio per studenti con bisogni educativi speciali.</p>
          <p>Tutte queste esperienze mi hanno insegnato ad ascoltare attivamente, a comprendere esigenze molto diverse tra loro e a trovare sempre soluzioni pratiche ed efficaci.</p>
          <p>Oggi metto queste solide competenze al servizio di liberi professionisti che lavorano su appuntamento, creatori di corsi (online e in presenza) e piccole aziende che desiderano alleggerire il carico operativo quotidiano. Il mio obiettivo è aiutarti a ritrovare il tempo da dedicare all'erogazione dei tuoi servizi, alla crescita strategica del business e alla tua vita personale.</p>
          
          <div className="my-8 p-6 bg-primary/10 border-l-4 border-primary rounded-r-xl">
            <p className="text-xl md:text-2xl font-medium text-foreground italic">&quot;Ogni attività che mi affidi è tempo prezioso che recuperi per concentrarti sul tuo vero lavoro, sviluppare nuovi progetti o semplicemente respirare con meno stress.&quot;</p>
          </div>
          
          <p>Il mio approccio come Assistente Virtuale è estremamente pratico, organizzato e orientato ai risultati. Ti affianco concretamente nella gestione di email, appuntamenti, clienti, documenti e attività amministrative, creando processi di lavoro più ordinati, fluidi ed efficienti.</p>
          
          <div className="flex items-start gap-4 mt-6 mb-6 p-4 bg-secondary/20 rounded-xl border border-border/50">
            <div className="bg-primary/20 p-2.5 rounded-full flex-shrink-0">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            <p className="text-foreground/90 font-medium leading-relaxed mt-0.5 text-base">
              Inoltre, grazie alla mia solida esperienza linguistica, posso gestire con facilità comunicazioni, traduzioni e contenuti in italiano, inglese, francese e spagnolo, offrendo un supporto indispensabile a chi lavora (o desidera lavorare) con clienti internazionali.
            </p>
          </div>
          
          <p>Se senti di dedicare troppo tempo alle attività operative e troppo poco a ciò che fa crescere davvero la tua attività, sarò felice di aiutarti a trovare la soluzione organizzativa perfetta per te.</p>
        </div>
      </section>

      {/* ── PERCHÉ LAVORARE CON ME ── */}
      <section className="bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '400ms' }}>
        <div className="container px-4 md:px-6 py-12 md:py-20 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">Il mio supporto per te</h2>
          <div className="text-base md:text-lg text-foreground/80 mb-8 leading-relaxed space-y-4">
            <p>Ti supporto nella gestione operativa della tua attività con un approccio organizzato, pratico e orientato alla massima efficienza.</p>
            <p>L’obiettivo non è solo alleggerire temporaneamente il tuo carico di lavoro, ma aiutarti a creare un sistema stabile, fluido e sostenibile a lungo termine.</p>
          </div>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-foreground/90 font-medium text-base md:text-lg">
             <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />Analisi approfondita delle tue esigenze e priorità</li>
             <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />Soluzioni organizzative personalizzate e flessibili</li>
             <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />Gestione operativa precisa, rapida e organizzata</li>
             <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />Comunicazione sempre chiara e costante</li>
             <li className="flex items-start gap-3 md:col-span-2"><CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />Riservatezza assoluta e massima attenzione ai dettagli</li>
          </ul>

          <p className="text-lg md:text-xl font-semibold text-foreground">
            Delegare le attività operative non significa perdere il controllo, ma lavorare finalmente con più ordine, continuità e serenità.
          </p>
        </div>
      </section>

      {/* ── SERVIZI ── */}
      <section id="servizi" className="container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
        <div className="max-w-4xl mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">I miei servizi: Supporto Operativo per Professionisti</h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">Tutto quello che serve per far funzionare in modo fluido il tuo studio, la tua azienda o i tuoi corsi: gestione agenda, assistenza clienti, back-office ed email. Supporto disponibile anche in inglese, francese e spagnolo.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i} className="flex flex-col group p-6 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-default">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-primary/90 transition-colors">{service.title}</h3>
              <p className="text-foreground/80 leading-relaxed text-base whitespace-pre-line">{service.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border/40 pt-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6">Un investimento che si ripaga da solo</h3>
          <div className="text-base md:text-lg text-foreground/90 leading-relaxed space-y-3">
            <p>Non stai semplicemente delegando dei compiti noiosi. Stai acquistando tempo prezioso per la tua vita e la tua attività.</p>
            <p>Delegando anche solo alcune attività operative a settimana, recuperi in media dalle 4 alle 6 ore di lavoro. Ore che puoi reinvestire per acquisire nuovi clienti o lavorare con meno stress.</p>
            <p>Con il mio supporto costante, la tua attività diventa immediatamente più snella, professionale e facilmente scalabile.</p>
            <p>Inoltre, a differenza di un dipendente tradizionale, non hai costi fissi o oneri di gestione del personale. Paghi solo per il tempo o il progetto di cui hai realmente bisogno, mantenendo la massima flessibilità.</p>
          </div>
        </div>
      </section>

      {/* ── SUPPORTO ── */}
      <section id="supporto" className="container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '300ms' }}>
        <div className="max-w-4xl mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">Come posso supportare concretamente la tua attività</h2>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">Se lavori con clienti, gestisci appuntamenti, organizzi corsi o vuoi migliorare la tua presenza online, posso aiutarti. Ad esempio:</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {targets.map((t, i) => (
            <div key={i} className="flex flex-col group p-6 rounded-2xl border border-transparent hover:border-primary/20 hover:bg-card/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 cursor-default">
              <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <t.icon className="w-7 h-7 text-primary stroke-[1.5]" />
              </div>
              <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary/90 transition-colors">{t.title}</h3>
              <div className="space-y-2 text-foreground/80 leading-relaxed text-base">
                <p>{t.description1}</p>
                <p>{t.description2}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-border/40 pt-6">
          <p className="text-lg md:text-xl font-semibold text-primary">Anche se la tua attività è diversa, possiamo valutare insieme la soluzione più adatta alle tue esigenze.</p>
        </div>
      </section>

      {/* ── COLLABORAZIONE (prezzi) ── */}
      <section id="collaborazione" className="bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
        <div className="container px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-4xl mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6">Modalità di collaborazione</h2>
            <div className="text-base md:text-lg text-foreground/90 leading-relaxed space-y-3">
              <p>Ogni attività è diversa, per questo il supporto viene definito in base alle tue esigenze operative e al tuo modo di lavorare.</p>
              <p>Possiamo iniziare in modo graduale oppure costruire una collaborazione continuativa nel tempo.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {packages.map((pkg, i) => (
              <div key={i} className="flex flex-col bg-background border border-border rounded-2xl p-6 group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 cursor-default">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-bold text-primary">{pkg.title}</h3>
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">{pkg.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-border/40 pt-8">
            <div className="bg-secondary/20 border border-border/50 rounded-xl p-6 mb-6">
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                <strong className="text-primary">Il costo viene definito in base alle attività e al tempo necessario.</strong> Non ci sono costi fissi o vincoli contrattuali: paghi solo ciò di cui hai realmente bisogno.
              </p>
            </div>
            <p className="text-base md:text-lg font-medium text-foreground">Durante la <BookingButton asChild><button className="text-primary font-bold hover:underline hover:text-primary/80 transition-colors">call conoscitiva</button></BookingButton> analizziamo la tua situazione e costruiamo insieme la soluzione più adatta alla tua attività.</p>
          </div>
        </div>
      </section>

      {/* ── COME COLLABORARE (steps) ── */}
      <section id="come-collaborare" className="container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '300ms' }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-12 text-left">Come iniziamo a lavorare insieme</h2>

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
                      <h3 className="text-lg xl:text-xl font-semibold text-primary text-center mb-2">{step.title}</h3>
                      {step.subtitle && <p className="text-sm text-primary/80 text-center italic mb-3">{step.subtitle}</p>}
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
                      <h3 className="text-lg xl:text-xl font-semibold text-primary text-center mb-2">{step.title}</h3>
                      {step.subtitle && <p className="text-sm text-primary/80 text-center italic mb-3">{step.subtitle}</p>}
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
                <span className="text-primary font-bold">{i + 1}</span>
              </div>
              <div className="pt-1 pb-2">
                <h3 className="text-lg font-semibold text-primary mb-1">{step.title}</h3>
                {step.subtitle && <p className="text-sm text-primary/80 italic mb-2">{step.subtitle}</p>}
                <p className="text-foreground/80 text-base leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-foreground/75 text-base max-w-3xl mt-12">Un processo semplice, chiaro e senza complicazioni.</p>
      </section>

      {/* ── TESTIMONIANZE ── */}
      <section className="hidden bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
        <div className="container px-4 md:px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Cosa dicono i miei clienti</h2>
            <p className="text-base md:text-lg text-foreground/80">L'esperienza di chi ha già scelto di delegare per ritrovare tempo e serenità.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="flex flex-col bg-background border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} className="w-4 h-4 fill-primary" />)}
                </div>
                <p className="text-foreground/80 leading-relaxed italic mb-6 flex-grow">"{t.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{t.name}</p>
                  <p className="text-sm text-primary">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ── */}
      <section id="blog" className="bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
        <div className="container px-4 md:px-6 py-10 md:py-16">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Blog Assistente Virtuale</h2>
            <p className="text-base md:text-lg text-foreground/80">Consigli pratici, strumenti e strategie di un'Assistente Virtuale per organizzare meglio la tua attività, gestire i clienti in modo efficace e liberare tempo ogni giorno.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getBlogPosts()
              .filter(post => post.published !== false)
              .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
              .slice(0, 3)
              .map((post) => (
              <Card key={post.id} className="flex flex-col h-full bg-background border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 overflow-hidden group">
                <div className="h-40 w-full bg-muted overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-contain bg-background opacity-90 transition-transform duration-500 hover:scale-105" />
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
      <section id="faq" className="bg-muted/50 border-y border-border/30 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '300ms' }}>
        <div className="container px-4 md:px-6 py-12 md:py-20 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Domande frequenti</h2>
            <p className="text-base md:text-lg text-foreground/80">Tutto quello che devi sapere prima di iniziare a collaborare.</p>
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
      <section id="contatti" className="container px-4 md:px-6 py-12 md:py-20 scroll-mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: '200ms' }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">Riprendi il controllo del tuo tempo.</h2>
        <p className="text-foreground/80 text-base md:text-lg mb-10 max-w-2xl">
          Scrivimi o <BookingButton asChild><button className="text-primary font-bold hover:underline">prenota una call conoscitiva gratuita</button></BookingButton>: valuteremo insieme come delegare la gestione operativa di appuntamenti, corsi e back-office per farti risparmiare tempo prezioso. Ti rispondo entro 24 ore lavorative.
        </p>
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
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-foreground/90 text-base">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@noemitomassetti.it" className="text-primary hover:underline">info@noemitomassetti.it</a>
              </div>
              <div className="flex items-center gap-3 text-foreground/90 text-base">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+393884718600" className="hover:text-primary">+39 388 471 8600</a>
              </div>
              <div className="flex items-start gap-3 text-foreground/90 text-base">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>Castelfidardo (AN) - ITALIA</span>
                  <span>Supporto da remoto in tutta Italia</span>
                </div>
              </div>
            </div>
            <div className="bg-secondary/30 border border-border rounded-xl p-5">
              <p className="text-foreground/80 text-base leading-relaxed">
                <BookingButton asChild><button className="text-primary font-bold hover:underline uppercase">PRENOTA UNA CALL CONOSCITIVA GRATUITA</button></BookingButton> (30 minuti). Capiremo insieme come posso supportarti nella gestione operativa della tua attività, in modo concreto, semplice e sostenibile.
              </p>
            </div>
          </div>
          <ContattiForm />
        </div>
      </section>
    </Layout>
  );
};

export default Index;
