import { useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { getLanguageFromPath } from "@/lib/i18n";
import { BookOpen, Languages, Brain, GraduationCap, ShieldCheck, Mail } from "lucide-react";

const BASE="https://www.noemitomassetti.it";
const paths={en:"/learning-tutoring",it:"/it/tutor-apprendimento",fr:"/fr/accompagnement-scolaire",es:"/es/apoyo-escolar"} as const;
const copy={
  it:{
    eyebrow:"Per studenti e famiglie",title:"Tutor dell’apprendimento e delle lingue straniere",
    subtitle:"Ripetizioni, metodo di studio e supporto educativo personalizzato, anche per studenti con DSA, ADHD e altri bisogni educativi speciali.",
    audience:"Scuola primaria e secondaria · Online e, previo accordo, in presenza nell’area di Castelfidardo.",
    section:"Come posso aiutarti",cards:[
      {title:"Lingue straniere",body:"Ripasso, esercizi, comprensione e produzione in inglese, francese e spagnolo, in base al livello e agli obiettivi dello studente."},
      {title:"Compiti e metodo di studio",body:"Organizzazione, recupero di argomenti scolastici, preparazione di verifiche e interrogazioni, mappe e strategie per il ripasso."},
      {title:"Supporto DSA, ADHD e BES",body:"Strategie didattiche individualizzate, strumenti compensativi e percorsi per favorire l’autonomia, nei limiti del supporto educativo non clinico."}
    ],
    howTitle:"Come lavoriamo insieme",steps:["Un primo confronto con i genitori per chiarire esigenze, materie e obiettivi.","Un percorso personalizzato con attività, strumenti e tempi concordati.","Verifica periodica dei progressi per costruire un metodo di studio più autonomo."],
    aboutTitle:"Formazione ed esperienza",about:"Laurea in Discipline della Mediazione Linguistica (110 e lode), formazione post-laurea in Traduzione Specialistica, corsi dedicati a DSA, ADHD e inclusione e precedenti esperienze di tutoraggio e supporto scolastico.",
    scopeTitle:"Un supporto educativo, non clinico",scope:"Il tutoraggio non comprende diagnosi, valutazioni cliniche o interventi terapeutici e non sostituisce i professionisti sanitari o il personale scolastico. L’eventuale confronto con i docenti richiede l’accordo della famiglia.",
    contactTitle:"Hai bisogno di un supporto personalizzato?",contact:"Scrivimi specificando classe, materie e obiettivi. Per gli studenti minorenni il primo contatto deve essere effettuato da un genitore o tutore.",
    privacy:"Nel primo messaggio non inviare diagnosi o documenti sanitari.",
    cta:"Richiedi informazioni",subject:"Informazioni sul tutoraggio dell'apprendimento",
    seoTitle:"Tutor dell’apprendimento, lingue e metodo di studio | Noemi Tomassetti",
    seoDesc:"Ripetizioni, lingue straniere e metodo di studio, anche per studenti con DSA, ADHD e BES. Tutoraggio educativo online e nell’area di Castelfidardo."
  },
  en:{
    eyebrow:"For students and families",title:"Learning and foreign-language tutoring",
    subtitle:"Personalised help with school subjects, study skills and language learning, including for students with dyslexia, ADHD or other additional learning needs.",
    audience:"Primary and secondary education · Online and, by arrangement, in person around Castelfidardo, Italy.",
    section:"How I can help",cards:[
      {title:"Foreign languages",body:"Guided revision, reading, speaking and writing practice in English, French and Spanish, adapted to each student's level and goals."},
      {title:"Homework and study skills",body:"Planning, catching up on school topics, preparing for tests, mind maps and practical revision strategies."},
      {title:"Inclusive learning support",body:"Individualised educational strategies and assistive tools for students with dyslexia, ADHD or additional learning needs, within a non-clinical tutoring service."}
    ],
    howTitle:"How tutoring works",steps:["An initial conversation with parents or guardians about subjects and learning goals.","A tailored learning plan with agreed activities, tools and timings.","Regular reviews to build confidence and more independent study habits."],
    aboutTitle:"Qualifications and experience",about:"Degree in Language Mediation (with Italian honours), postgraduate training in Specialised Translation, courses on dyslexia, ADHD and inclusive education, plus previous tutoring and school support experience.",
    scopeTitle:"Educational, not clinical support",scope:"Tutoring does not provide diagnoses, clinical assessment or therapy, and does not replace healthcare professionals or school staff. Contact with teachers is arranged only with the family's agreement.",
    contactTitle:"Looking for personalised learning support?",contact:"Please tell me the school year, subject and goals. For under-18s, a parent or guardian should make the initial enquiry.",
    privacy:"Please do not include diagnoses or medical documents in your first message.",
    cta:"Enquire about tutoring",subject:"Learning tutoring enquiry",
    seoTitle:"Learning and language tutoring | Noemi Tomassetti",
    seoDesc:"Language tutoring, homework and study skills, including inclusive support for learners with dyslexia, ADHD or additional learning needs."
  },
  fr:{
    eyebrow:"Pour les élèves et les familles",title:"Accompagnement des apprentissages et des langues étrangères",
    subtitle:"Soutien scolaire, méthodologie et apprentissage des langues, avec un accompagnement adapté, notamment aux élèves présentant des troubles des apprentissages ou un TDAH.",
    audience:"Primaire et secondaire · À distance et, sur accord préalable, en présentiel près de Castelfidardo, en Italie.",
    section:"Comment je peux vous aider",cards:[
      {title:"Langues étrangères",body:"Révisions, compréhension et expression en anglais, français et espagnol, selon le niveau et les objectifs de chaque élève."},
      {title:"Devoirs et méthode de travail",body:"Organisation, remise à niveau, préparation des évaluations, cartes mentales et stratégies de révision."},
      {title:"Soutien éducatif adapté",body:"Stratégies pédagogiques individualisées et outils de compensation, notamment en cas de dyslexie, de TDAH ou d'autres besoins éducatifs, dans un cadre non clinique."}
    ],
    howTitle:"Comment se déroule l'accompagnement",steps:["Un premier échange avec les parents pour cerner les besoins et les objectifs.","Un parcours individualisé avec des supports, des activités et des horaires convenus.","Un suivi régulier pour favoriser la confiance et l'autonomie."],
    aboutTitle:"Formation et expérience",about:"Diplôme universitaire en Médiation linguistique (mention d'excellence italienne), formation postuniversitaire en Traduction spécialisée, cours sur les troubles des apprentissages, le TDAH et l'inclusion, ainsi qu'une expérience antérieure de tutorat et de soutien scolaire.",
    scopeTitle:"Un accompagnement pédagogique, non clinique",scope:"Le tutorat ne comprend ni diagnostic, ni évaluation clinique, ni thérapie et ne remplace pas les professionnels de santé ou les enseignants. Tout échange avec l'équipe éducative nécessite l'accord de la famille.",
    contactTitle:"Vous cherchez un accompagnement individualisé ?",contact:"Précisez la classe, les matières et les objectifs. Pour un mineur, la première prise de contact doit être effectuée par un parent ou représentant légal.",
    privacy:"Merci de ne pas joindre de diagnostic ni de document médical à votre premier message.",
    cta:"Demander des renseignements",subject:"Renseignements sur l'accompagnement scolaire",
    seoTitle:"Accompagnement scolaire et linguistique | Noemi Tomassetti",
    seoDesc:"Soutien scolaire, langues étrangères et méthode de travail, avec des stratégies adaptées aux élèves ayant des troubles des apprentissages ou un TDAH."
  },
  es:{
    eyebrow:"Para estudiantes y familias",title:"Tutoría del aprendizaje y de idiomas",
    subtitle:"Refuerzo escolar, técnicas de estudio y aprendizaje de idiomas con apoyo personalizado, también para estudiantes con dislexia, TDAH u otras necesidades educativas.",
    audience:"Educación primaria y secundaria · En línea y, previo acuerdo, presencialmente cerca de Castelfidardo, Italia.",
    section:"Cómo puedo ayudarte",cards:[
      {title:"Idiomas extranjeros",body:"Repaso, comprensión y expresión en inglés, francés y español, según el nivel y los objetivos de cada estudiante."},
      {title:"Deberes y técnicas de estudio",body:"Organización, recuperación de contenidos escolares, preparación de exámenes, mapas conceptuales y técnicas de repaso."},
      {title:"Apoyo educativo adaptado",body:"Estrategias didácticas individuales y herramientas de apoyo, también para estudiantes con dislexia, TDAH u otras necesidades educativas, dentro de una tutoría no clínica."}
    ],
    howTitle:"Cómo trabajamos",steps:["Una primera conversación con los progenitores o tutores para definir las necesidades y los objetivos.","Un plan individual con materiales, actividades y horarios acordados.","Seguimiento de los avances para fomentar la confianza y la autonomía."],
    aboutTitle:"Formación y experiencia",about:"Grado universitario en Mediación Lingüística (máxima calificación y honores en Italia), formación de posgrado en Traducción Especializada, cursos sobre dislexia, TDAH e inclusión, y experiencia previa en tutoría y apoyo escolar.",
    scopeTitle:"Apoyo educativo, no clínico",scope:"La tutoría no incluye diagnósticos, evaluaciones clínicas ni terapias, y no sustituye a los profesionales sanitarios ni al personal docente. El contacto con el profesorado requiere el acuerdo de la familia.",
    contactTitle:"¿Necesitas apoyo personalizado?",contact:"Indica el curso escolar, las asignaturas y los objetivos. Si el estudiante es menor, la primera consulta debe hacerla un progenitor o tutor legal.",
    privacy:"No envíes diagnósticos ni documentos médicos en el primer mensaje.",
    cta:"Solicitar información",subject:"Información sobre tutoría del aprendizaje",
    seoTitle:"Tutoría del aprendizaje y de idiomas | Noemi Tomassetti",
    seoDesc:"Apoyo educativo en idiomas, deberes y técnicas de estudio, también para estudiantes con dislexia, TDAH u otras necesidades educativas."
  }
} as const;

export default function TutoringPage() {
  const {pathname}=useLocation();
  const lang=getLanguageFromPath(pathname);
  const c=copy[lang];
  const alternates=([
    ...(["en","it","fr","es"] as const).map(l=>({hrefLang:l,href:BASE+paths[l]})),
    {hrefLang:"x-default",href:BASE+paths.en}
  ]);
  useSEO({title:c.seoTitle,description:c.seoDesc,canonical:BASE+paths[lang],alternates});
  const href="mailto:info@noemitomassetti.it?subject="+encodeURIComponent(c.subject);
  const icons=[Languages,BookOpen,Brain];
  return <Layout lang={lang}>
    <section className="border-b border-border/50 bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
      <div className="container max-w-5xl px-4 sm:px-6 text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">{c.eyebrow}</p>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">{c.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/85">{c.subtitle}</p>
        <p className="mt-5 text-sm text-muted-foreground">{c.audience}</p>
        <a href={href} className="inline-flex mt-8 items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
          <Mail aria-hidden="true" className="h-4 w-4"/>{c.cta}
        </a>
      </div>
    </section>
    <section className="container max-w-6xl px-4 sm:px-6 py-16 md:py-20">
      <h2 className="mb-9 text-2xl md:text-3xl font-bold">{c.section}</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {c.cards.map((card,i)=>{const Icon=icons[i];return <article key={card.title} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
          <Icon aria-hidden="true" className="mb-4 h-8 w-8 text-primary"/>
          <h3 className="mb-3 text-xl font-semibold">{card.title}</h3>
          <p className="leading-relaxed text-foreground/80">{card.body}</p>
        </article>})}
      </div>
    </section>
    <section className="border-y border-border/50 bg-secondary/20 py-16 md:py-20">
      <div className="container max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-2xl md:text-3xl font-bold">{c.howTitle}</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {c.steps.map((step,i)=><div key={step} className="rounded-xl border border-border bg-card p-6">
            <span className="mb-3 block text-sm font-bold text-primary">{String(i+1).padStart(2,"0")}</span>
            <p className="leading-relaxed">{step}</p>
          </div>)}
        </div>
      </div>
    </section>
    <section className="container max-w-5xl px-4 sm:px-6 py-16 md:py-20">
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-card p-7">
          <GraduationCap aria-hidden="true" className="mb-4 h-8 w-8 text-primary"/>
          <h2 className="mb-3 text-xl font-bold">{c.aboutTitle}</h2>
          <p className="leading-relaxed text-foreground/80">{c.about}</p>
        </article>
        <article className="rounded-2xl border border-border bg-card p-7">
          <ShieldCheck aria-hidden="true" className="mb-4 h-8 w-8 text-primary"/>
          <h2 className="mb-3 text-xl font-bold">{c.scopeTitle}</h2>
          <p className="leading-relaxed text-foreground/80">{c.scope}</p>
        </article>
      </div>
    </section>
    <section className="border-t border-border/50 bg-secondary/20 py-16">
      <div className="container max-w-3xl px-4 sm:px-6 text-center">
        <h2 className="mb-4 text-2xl md:text-3xl font-bold">{c.contactTitle}</h2>
        <p className="mb-6 leading-relaxed text-foreground/80">{c.contact}</p>
        <a href={href} className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary"><Mail aria-hidden="true" className="h-4 w-4"/>{c.cta}</a>
        <p className="mt-5 text-xs text-muted-foreground">{c.privacy}</p>
      </div>
    </section>
  </Layout>;
}
