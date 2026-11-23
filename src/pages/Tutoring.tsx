import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { BookOpen, Languages, Brain, GraduationCap, ShieldCheck, Mail, MapPin, Monitor } from "lucide-react";

const PAGE_URL = "https://www.noemitomassetti.it/it/tutor-apprendimento";

const services = [
  {
    title: "Lingue straniere",
    body: "Ripetizioni e recupero scolastico di inglese, francese e spagnolo, con esercizi di comprensione, produzione scritta e orale adeguati al livello dello studente.",
    icon: Languages,
  },
  {
    title: "Compiti e metodo di studio",
    body: "Organizzazione del lavoro, ripasso, preparazione di verifiche e interrogazioni, mappe, sintesi e strategie per sviluppare autonomia nello studio.",
    icon: BookOpen,
  },
  {
    title: "Supporto educativo DSA, ADHD e BES",
    body: "Strategie didattiche personalizzate, utilizzo degli strumenti compensativi e sostegno all'organizzazione dello studio, senza interventi clinici o terapeutici.",
    icon: Brain,
  },
];

const steps = [
  "Un primo confronto con la famiglia per conoscere le esigenze e individuare gli obiettivi.",
  "Un percorso personalizzato, con materiali, attività e orari concordati.",
  "Un confronto periodico sui progressi, per sviluppare sicurezza e autonomia.",
];

export default function TutoringPage() {
  useSEO({
    title: "Tutor dell’apprendimento in presenza e online | Noemi Tomassetti",
    description: "Ripetizioni e tutoraggio dell'apprendimento in presenza esclusivamente a Castelfidardo oppure online in tutta Italia. Lingue, metodo di studio e supporto educativo anche per DSA, ADHD e BES.",
    canonical: PAGE_URL,
    alternates: [
      { hrefLang: "it", href: PAGE_URL },
      { hrefLang: "x-default", href: PAGE_URL },
    ],
    ogType: "website",
  });

  const href = "mailto:info@noemitomassetti.it?subject=" + encodeURIComponent("Informazioni sul tutoraggio dell'apprendimento");

  return (
    <Layout lang="it">
      <section className="border-b border-border/50 bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container max-w-5xl px-4 sm:px-6 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Per studenti e famiglie in Italia</p>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">Tutor dell’apprendimento in presenza e online</h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground/85">
            Ripetizioni scolastiche, lingue straniere e metodo di studio, anche per studenti con DSA, ADHD e altri bisogni educativi speciali.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"><MapPin aria-hidden="true" className="h-4 w-4 text-primary"/> In presenza esclusivamente a Castelfidardo, su appuntamento</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"><Monitor aria-hidden="true" className="h-4 w-4 text-primary"/> Online in tutta Italia</span>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">Supporto per studenti della scuola primaria e secondaria</p>
          <a href={href} className="inline-flex mt-8 items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            <Mail aria-hidden="true" className="h-4 w-4"/> Richiedi informazioni
          </a>
        </div>
      </section>

      <section className="container max-w-6xl px-4 sm:px-6 py-16 md:py-20">
        <h2 className="mb-9 text-2xl md:text-3xl font-bold">Come posso aiutarti</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({title,body,icon:Icon})=>(
            <article key={title} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <Icon aria-hidden="true" className="mb-4 h-8 w-8 text-primary"/>
              <h3 className="mb-3 text-xl font-semibold">{title}</h3>
              <p className="leading-relaxed text-foreground/80">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border/50 bg-secondary/20 py-16 md:py-20">
        <div className="container max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-2xl md:text-3xl font-bold">Come lavoriamo insieme</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step,i)=>(
              <div key={step} className="rounded-xl border border-border bg-card p-6">
                <span className="mb-3 block text-sm font-bold text-primary">{String(i+1).padStart(2,"0")}</span>
                <p className="leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-5xl px-4 sm:px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border bg-card p-7">
            <GraduationCap aria-hidden="true" className="mb-4 h-8 w-8 text-primary"/>
            <h2 className="mb-3 text-xl font-bold">Formazione ed esperienza</h2>
            <p className="leading-relaxed text-foreground/80">
              Laurea in Discipline della Mediazione Linguistica (110 e lode), formazione post-laurea in Traduzione Specialistica,
              corsi dedicati a DSA, ADHD e inclusione e precedenti esperienze di tutoraggio e supporto scolastico.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-7">
            <ShieldCheck aria-hidden="true" className="mb-4 h-8 w-8 text-primary"/>
            <h2 className="mb-3 text-xl font-bold">Un supporto educativo, non clinico</h2>
            <p className="leading-relaxed text-foreground/80">
              Il tutoraggio non comprende diagnosi, valutazioni cliniche o interventi terapeutici e non sostituisce
              i professionisti sanitari o il personale scolastico. L'eventuale confronto con i docenti richiede l'accordo della famiglia.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-border/50 bg-secondary/20 py-16">
        <div className="container max-w-3xl px-4 sm:px-6 text-center">
          <h2 className="mb-4 text-2xl md:text-3xl font-bold">Cerchi un tutor in presenza o online?</h2>
          <p className="mb-6 leading-relaxed text-foreground/80">
            Scrivimi indicando la classe, le materie e gli obiettivi del percorso. Per gli studenti minorenni
            il primo contatto deve essere effettuato da un genitore o tutore.
          </p>
          <a href={href} className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary">
            <Mail aria-hidden="true" className="h-4 w-4"/> Richiedi informazioni
          </a>
          <p className="mt-5 text-xs text-muted-foreground">Nel primo messaggio non inviare diagnosi o documenti sanitari.</p>
        </div>
      </section>
    </Layout>
  );
}
