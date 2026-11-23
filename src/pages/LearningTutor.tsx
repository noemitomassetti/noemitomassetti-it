import { useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import { getLanguageFromPath, getHreflangAlternates, getLocalizedPath } from "@/lib/i18n";
import type { Language } from "@/lib/i18n";
import { BookOpen, Languages, Brain, GraduationCap, Mail, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

const content: Record<Language,{
 title:string; intro:string; lead:string; cta:string; note:string; local:string; online:string;
 heading:string; offer:{title:string;description:string}[]; aboutHeading:string; about:string;
 processHeading:string; steps:string[]; limits:string; privacy:string; contactHeading:string; contact:string;
}> = {
 it: {
  title:"Tutor dell’apprendimento e delle lingue straniere",
  intro:"Percorsi educativi personalizzati per studenti e famiglie",
  lead:"Ripetizioni di inglese, francese e spagnolo, aiuto compiti e supporto al metodo di studio. Percorsi individuali che possono essere adattati anche alle esigenze di studenti con DSA, ADHD e altri bisogni educativi speciali.",
  cta:"Richiedi informazioni", note:"Disponibilità e condizioni da concordare prima dell’avvio dei percorsi.",local:"Castelfidardo e dintorni, su accordo",online:"Supporto online",
  heading:"Come posso aiutarti",offer:[
   {title:"Lingue straniere",description:"Ripasso, esercizi, comprensione, grammatica, conversazione e preparazione delle verifiche di inglese, francese e spagnolo."},
   {title:"Ripetizioni e aiuto compiti",description:"Spiegazioni chiare, recupero degli argomenti e organizzazione del lavoro scolastico nelle materie e nei livelli concordati."},
   {title:"Metodo di studio",description:"Pianificazione, comprensione dei testi, mappe e strategie per sviluppare progressivamente autonomia e sicurezza."},
   {title:"Supporto educativo DSA, ADHD e BES",description:"Strategie didattiche personalizzate, strumenti compensativi e organizzazione dello studio, in collaborazione con la famiglia quando opportuno."}
  ],
  aboutHeading:"Formazione ed esperienza",about:"Laureata con lode in Mediazione Linguistica e con formazione post-laurea in Traduzione Specialistica, ho maturato esperienza nel tutoraggio scolastico e nel sostegno didattico. Metto a disposizione competenze linguistiche, attenzione alle caratteristiche del singolo studente e un approccio operativo.",
  processHeading:"Come si svolge il percorso",steps:["Primo contatto con lo studente maggiorenne o con il genitore per comprendere obiettivi e necessità.","Definizione di materie, modalità, frequenza e attività adatte al percorso.","Incontri individuali, esercizi mirati e verifica periodica dei progressi."],
  limits:"Il servizio è educativo e didattico: non comprende diagnosi, terapia, riabilitazione o altri interventi sanitari.",privacy:"Nel primo messaggio evita di inviare diagnosi, documenti clinici o altri dati sanitari dello studente.",
  contactHeading:"Parliamo del percorso di studio",contact:"Scrivimi indicando età o classe scolastica, lingua o materia, obiettivo generale e modalità preferita. Per i minori il contatto deve essere avviato dal genitore."
 },
 en: {
  title:"Language and learning tutor",intro:"Personalised educational support for learners and families",
  lead:"English, French and Spanish tutoring, homework guidance and study skills. One-to-one approaches can also be adapted to learners with dyslexia or other specific learning difficulties, ADHD and additional educational needs.",
  cta:"Enquire about tutoring",note:"Availability and terms are agreed before any tutoring begins.",local:"Castelfidardo and surrounding areas, by arrangement",online:"Online support",
  heading:"How I can help",offer:[
   {title:"Foreign languages",description:"Grammar, comprehension, practice, speaking and preparation for school assessments in English, French and Spanish."},
   {title:"School tutoring and homework",description:"Clear explanations, revision and help planning schoolwork in agreed subjects and at suitable levels."},
   {title:"Study skills",description:"Planning, reading comprehension, mind maps and strategies to develop confidence and independent learning."},
   {title:"Educational support for learning differences",description:"Adapted teaching strategies, appropriate learning tools and study organisation for learners with dyslexia, ADHD or additional educational needs."}
  ],
  aboutHeading:"Education and experience",about:"I hold a degree with honours in Language Mediation and postgraduate training in Specialised Translation. My background also includes school tutoring and classroom learning support. I combine language expertise with a practical, individual approach.",
  processHeading:"How tutoring works",steps:["An initial conversation with the adult learner or a parent to understand goals and needs.","Agreement on subjects, format, frequency and suitable activities.","Individual sessions, targeted practice and periodic reviews of progress."],
  limits:"These are educational services, not clinical assessments, diagnoses, treatment or rehabilitation.",privacy:"Please do not send diagnoses, medical reports or sensitive health details in your first enquiry.",
  contactHeading:"Discuss your learning goals",contact:"Tell me the learner’s school year or age, subject, overall goal and preferred format. For children, a parent should contact me."
 },
 fr: {
  title:"Tutorat linguistique et soutien à l’apprentissage",intro:"Un accompagnement pédagogique personnalisé pour les élèves et leurs familles",
  lead:"Cours de soutien en anglais, français et espagnol, aide aux devoirs et méthodes de travail. L’accompagnement individuel peut aussi être adapté aux élèves présentant des troubles spécifiques des apprentissages, un TDAH ou des besoins éducatifs particuliers.",
  cta:"Demander des renseignements",note:"Les disponibilités et les modalités sont convenues avant tout accompagnement.",local:"Castelfidardo et ses environs, sur accord",online:"Accompagnement en ligne",
  heading:"Comment puis-je vous aider ?",offer:[
   {title:"Langues étrangères",description:"Grammaire, compréhension, expression orale, exercices et préparation des évaluations en anglais, français et espagnol."},
   {title:"Soutien scolaire et devoirs",description:"Explications accessibles, révisions et organisation du travail dans les matières et aux niveaux convenus."},
   {title:"Méthodes de travail",description:"Planification, compréhension écrite, cartes mentales et stratégies favorisant la confiance et l’autonomie."},
   {title:"Soutien pédagogique : DYS, TDAH et besoins particuliers",description:"Stratégies pédagogiques adaptées, outils d’apprentissage et organisation du travail selon les besoins de chaque élève."}
  ],
  aboutHeading:"Formation et expérience",about:"Titulaire d’un diplôme universitaire obtenu avec mention d’excellence en médiation linguistique et d’une formation supérieure en traduction spécialisée, j’ai également une expérience de tutorat scolaire et d’accompagnement pédagogique. Je privilégie une approche concrète et individualisée.",
  processHeading:"Comment se déroule l’accompagnement ?",steps:["Premier échange avec l’apprenant majeur ou un parent afin de comprendre les besoins et les objectifs.","Définition des matières, des modalités, de la fréquence et des activités adaptées.","Séances individuelles, exercices ciblés et bilans réguliers des progrès."],
  limits:"Cet accompagnement est exclusivement pédagogique : il ne comprend ni diagnostic, ni thérapie, ni rééducation, ni soins.",privacy:"Merci de ne pas communiquer de diagnostics, de dossiers médicaux ni de données de santé sensibles lors du premier contact.",
  contactHeading:"Parlons des besoins d’apprentissage",contact:"Précisez la classe ou l’âge de l’élève, la matière, l’objectif général et les modalités souhaitées. Pour un mineur, le contact doit être établi par un parent."
 },
 es: {
  title:"Tutoría de idiomas y apoyo al aprendizaje",intro:"Acompañamiento educativo personalizado para estudiantes y familias",
  lead:"Clases de apoyo de inglés, francés y español, ayuda con los deberes y técnicas de estudio. La atención individual también puede adaptarse a estudiantes con dificultades específicas de aprendizaje, TDAH u otras necesidades educativas.",
  cta:"Solicitar información",note:"La disponibilidad y las condiciones se acuerdan antes de comenzar.",local:"Castelfidardo y alrededores, previo acuerdo",online:"Apoyo en línea",
  heading:"¿Cómo puedo ayudarte?",offer:[
   {title:"Idiomas extranjeros",description:"Gramática, comprensión, expresión oral, ejercicios y preparación de exámenes escolares de inglés, francés y español."},
   {title:"Refuerzo escolar y deberes",description:"Explicaciones claras, repaso y organización del trabajo en las materias y los niveles acordados."},
   {title:"Técnicas de estudio",description:"Planificación, comprensión lectora, mapas conceptuales y estrategias para desarrollar autonomía y confianza."},
   {title:"Apoyo educativo: dificultades de aprendizaje, TDAH y NEE",description:"Estrategias didácticas adaptadas, herramientas de apoyo y organización del estudio según las necesidades individuales."}
  ],
  aboutHeading:"Formación y experiencia",about:"Tengo una licenciatura con matrícula de honor en Mediación Lingüística y formación de posgrado en Traducción Especializada. También cuento con experiencia en tutoría escolar y apoyo educativo. Combino conocimientos lingüísticos con un enfoque práctico y personalizado.",
  processHeading:"Cómo funciona el acompañamiento",steps:["Primera conversación con el estudiante mayor de edad o con su madre o padre para conocer objetivos y necesidades.","Acuerdo sobre materias, modalidad, frecuencia y actividades apropiadas.","Sesiones individuales, ejercicios específicos y seguimiento periódico del progreso."],
  limits:"El servicio es exclusivamente educativo: no incluye diagnósticos, tratamientos, rehabilitación ni atención sanitaria.",privacy:"Por favor, no envíes diagnósticos, informes médicos ni datos de salud sensibles en el primer mensaje.",
  contactHeading:"Hablemos de los objetivos de estudio",contact:"Indica la edad o el curso del estudiante, la materia, el objetivo general y la modalidad preferida. En el caso de menores, el contacto debe iniciarlo su madre, padre o tutor legal."
 }
};
const icons = [Languages, BookOpen, Brain, GraduationCap];
export default function LearningTutorPage() {
 const location=useLocation();
 const lang=getLanguageFromPath(location.pathname);
 const t=content[lang];
 const path=getLocalizedPath("learningTutor",lang);
 useSEO({title:`${t.title} | Noemi Tomassetti`,description:t.lead,canonical:`https://www.noemitomassetti.it${path}`,alternates:getHreflangAlternates("learningTutor")});
 const emailHref="mailto:info@noemitomassetti.it?subject="+encodeURIComponent(({it:"Informazioni sul tutoraggio",en:"Learning tutor enquiry",fr:"Renseignements sur le soutien scolaire",es:"Información sobre tutorías"} as const)[lang]);
 return <Layout lang={lang}>
  <section className="relative border-b border-border/50 py-16 md:py-24"><div className="container max-w-5xl px-4 md:px-6 text-center">
   <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-5">{t.intro}</p>
   <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">{t.title}</h1>
   <p className="text-base sm:text-lg leading-relaxed text-foreground/80 max-w-3xl mx-auto mt-6">{t.lead}</p>
   <a href={emailHref} className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold text-primary-foreground hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"><Mail className="w-4 h-4"/>{t.cta}<ArrowRight className="w-4 h-4"/></a>
   <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm text-muted-foreground"><span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4"/>{t.local}</span><span className="inline-flex items-center gap-2"><CheckCircle2 className="w-4 h-4"/>{t.online}</span></div>
   <p className="text-xs text-muted-foreground mt-5">{t.note}</p>
  </div></section>
  <section className="container max-w-6xl px-4 md:px-6 py-14 md:py-20"><h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">{t.heading}</h2>
   <div className="grid grid-cols-1 md:grid-cols-2 gap-5">{t.offer.map((item,i)=>{const Icon=icons[i];return <article key={item.title} className="rounded-2xl border border-border/60 bg-card p-7"><Icon className="w-7 h-7 text-primary mb-4" aria-hidden="true"/><h3 className="font-semibold text-xl mb-3">{item.title}</h3><p className="text-foreground/75 text-sm leading-relaxed">{item.description}</p></article>})}</div>
  </section>
  <section className="bg-secondary/20 border-y border-border/50"><div className="container max-w-5xl px-4 md:px-6 py-12 md:py-16"><h2 className="text-2xl font-bold mb-4">{t.aboutHeading}</h2><p className="text-foreground/80 leading-relaxed max-w-4xl">{t.about}</p></div></section>
  <section className="container max-w-5xl px-4 md:px-6 py-14 md:py-20"><h2 className="text-2xl font-bold mb-7">{t.processHeading}</h2><ol className="grid gap-5 md:grid-cols-3">{t.steps.map((step,i)=><li key={i} className="rounded-2xl border border-border/60 p-5"><span className="block text-xl font-bold text-primary mb-2">{String(i+1).padStart(2,"0")}</span><p className="text-sm leading-relaxed text-foreground/80">{step}</p></li>)}</ol><p className="mt-7 text-sm text-muted-foreground">{t.limits}</p></section>
  <section className="border-t border-border/50 bg-card"><div className="container max-w-5xl px-4 md:px-6 py-14 md:py-16"><h2 className="text-2xl font-bold mb-4">{t.contactHeading}</h2><p className="text-foreground/80 max-w-3xl leading-relaxed">{t.contact}</p><p className="mt-4 text-sm text-muted-foreground max-w-3xl">{t.privacy}</p><a href={emailHref} className="inline-flex items-center gap-2 mt-7 bg-primary text-primary-foreground rounded-full py-3 px-7 font-semibold text-sm hover:opacity-90"><Mail className="w-4 h-4"/>{t.cta}</a></div></section>
 </Layout>;
}
