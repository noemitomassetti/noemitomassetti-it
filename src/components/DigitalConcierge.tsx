import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Language } from "@/lib/i18n/types";
import { getLocalizedPath } from "@/lib/i18n/routes";
import { getServicePricingSummary } from "@/lib/pricingData";
import { estimateService, type EstimateKind } from "@/lib/concierge/estimatePreview";
import { BookingButton } from "./BookingButton";
import {
  ServiceKey,
  QuoteDraft,
  CONCIERGE_TO_OFFICIAL_SERVICE_ID,
} from "@/lib/concierge/types";
import {
  INTAKE_SCHEMAS,
  formatQuoteDraftSummary,
  sanitizeIntakeAnswers,
} from "@/lib/concierge/intakeSchemas";
import { saveQuoteDraft, getQuoteDraft, clearQuoteDraft } from "@/lib/concierge/quoteDraftStore";
import { recognizeIntent } from "@/lib/concierge/intentRecognizer";
import {
  MessageSquare,
  X,
  Send,
  Mic,
  MicOff,
  Sparkles,
  Bot,
  ArrowRight,
  Calendar,
  ShieldCheck,
  FileText,
  CheckCircle2,
  Edit3,
  RotateCcw,
} from "lucide-react";

interface MessageOption {
  label: string;
  action: () => void;
  isPrimary?: boolean;
}

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: MessageOption[];
  estimate?: string;
  draftSummary?: QuoteDraft;
}

interface BrowserSpeechResult {
  [index: number]: { transcript: string };
}
interface BrowserSpeechEvent {
  results: {
    [index: number]: BrowserSpeechResult;
  };
}
interface BrowserSpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  onresult: ((event: BrowserSpeechEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

interface ActiveIntake {
  serviceKey: ServiceKey;
  currentQuestionIndex: number;
  answers: Record<string, string>;
  isCompleted: boolean;
  editingQuestionId?: string;
}

export function DigitalConcierge({ lang }: { lang: Language }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [recognitionSupported, setRecognitionSupported] = useState(false);
  const [showEstimate, setShowEstimate] = useState(false);
  const [estimateKind, setEstimateKind] = useState<EstimateKind>("hourly");
  const [estimateQuantity, setEstimateQuantity] = useState("5");
  const [activeIntake, setActiveIntake] = useState<ActiveIntake | null>(null);

  const recognitionRef = useRef<BrowserSpeechRecognition | null>(null);
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Multilingual labels
  const labels = {
    badge: {
      it: "Assistente di Noemi · Risposta automatica",
      en: "Noemi’s Assistant · Automated replies",
      fr: "Assistant de Noemi · Réponses automatiques",
      es: "Asistente de Noemi · Respuestas automáticas",
    },
    subBadge: {
      it: "Informazioni e prime stime, anche fuori orario",
      en: "Information and estimates, even outside office hours",
      fr: "Informations et estimations, même hors horaires",
      es: "Información y estimaciones, incluso fuera de horario",
    },
    welcome: {
      it: "Benvenuto! Sono l'assistente digitale di Noemi. Sono disponibile anche quando lei non è online: posso illustrarti i servizi, calcolare una stima indicativa e preparare la tua richiesta scritta. Noemi valuterà personalmente il preventivo definitivo.",
      en: "Welcome! I'm Noemi's digital assistant. I can help even when she is offline: explore services, calculate an indicative estimate and prepare a written enquiry. Noemi personally reviews and approves final quotes.",
      fr: "Bienvenue ! Je suis l'assistant numérique de Noemi. Même lorsqu'elle n'est pas disponible, je peux présenter les services, calculer une estimation indicative et préparer votre demande écrite. Noemi valide personnellement les devis définitifs.",
      es: "¡Bienvenido! Soy el asistente digital de Noemi. También puedo ayudarte fuera de su horario: explicar los servicios, calcular una estimación orientativa y preparar tu solicitud escrita. Noemi revisa personalmente los presupuestos definitivos.",
    },
    placeholder: {
      it: "Scrivi un messaggio o rispondi qui...",
      en: "Type a message or answer here...",
      fr: "Écrivez un message ou répondez ici...",
      es: "Escribe un mensaje o responde aquí...",
    },
    transparency: {
      it: "Risposte automatiche, non una chat con Noemi in diretta · La richiesta viene inviata solo dopo la tua conferma",
      en: "Automated replies, not a live chat with Noemi · Your enquiry is sent only when you submit the form",
      fr: "Réponses automatiques, pas de chat en direct avec Noemi · Envoi uniquement après validation du formulaire",
      es: "Respuestas automáticas, no chat en directo con Noemi · Envío solo al confirmar el formulario",
    },
    voicePrompt: {
      it: "Parla al microfono, potrai modificare il testo prima di inviarlo",
      en: "Speak into your mic, you can edit the text before sending",
      fr: "Parlez au micro, vous pourrez modifier le texte avant l'envoi",
      es: "Habla al micrófono, podrás revisar el texto antes de enviarlo",
    },
    quoteButton: {
      it: "Richiedi un preventivo scritto",
      en: "Request a written quote",
      fr: "Demander un devis écrit",
      es: "Solicitar un presupuesto por escrito",
    },
    startIntakeBtn: {
      it: "Configura richiesta guidata (consigliato)",
      en: "Configure guided brief (recommended)",
      fr: "Configurer la demande guidée (recommandé)",
      es: "Configurar solicitud guiada (recomendado)",
    },
    step: {
      it: "Passaggio",
      en: "Step",
      fr: "Étape",
      es: "Paso",
    },
    of: {
      it: "di",
      en: "of",
      fr: "sur",
      es: "de",
    },
    summaryTitle: {
      it: "Riepilogo della tua richiesta",
      en: "Summary of your request",
      fr: "Récapitulatif de votre demande",
      es: "Resumen de tu solicitud",
    },
    summarySubtitle: {
      it: "Verifica le informazioni prima di trasferirle al modulo del sito.",
      en: "Review the details before transferring to the contact form.",
      fr: "Vérifiez les éléments avant transfert vers le formulaire.",
      es: "Revisa los datos antes de transferirlos al formulario.",
    },
    confirmTransferBtn: {
      it: "Conferma e trasferisci al modulo",
      en: "Confirm and transfer to form",
      fr: "Confirmer et transférer au formulaire",
      es: "Confirmar y transferir al formulario",
    },
    editAnswersBtn: {
      it: "Modifica risposte",
      en: "Edit answers",
      fr: "Modifier les réponses",
      es: "Modificar respuestas",
    },
    editPrefix: {
      it: "Modifica risposta",
      en: "Edit answer",
      fr: "Modifier la réponse",
      es: "Modificar respuesta",
    },
    selectQuestionToEdit: {
      it: "Quale risposta desideri modificare?",
      en: "Which answer would you like to edit?",
      fr: "Quelle réponse souhaitez-vous modifier ?",
      es: "¿Qué respuesta deseas modificar?",
    },
    backToSummaryBtn: {
      it: "Torna al riepilogo",
      en: "Back to summary",
      fr: "Retour au récapitulatif",
      es: "Volver al resumen",
    },
    restartIntakeBtn: {
      it: "Ricomincia da capo",
      en: "Restart intake",
      fr: "Recommencer à zéro",
      es: "Reiniciar solicitud",
    },
    restartConfirmTitle: {
      it: "Vuoi davvero azzerare la richiesta corrente e ricominciare da capo?",
      en: "Are you sure you want to clear your current brief and start over?",
      fr: "Voulez-vous vraiment effacer votre demande et recommencer ?",
      es: "¿Seguro que deseas borrar tu solicitud actual y empezar de nuevo?",
    },
    restartConfirmYes: {
      it: "Sì, ricomincia",
      en: "Yes, start over",
      fr: "Oui, recommencer",
      es: "Sí, reiniciar",
    },
    restartConfirmNo: {
      it: "Annulla e mantieni bozza",
      en: "Cancel and keep draft",
      fr: "Annuler et conserver",
      es: "Cancelar y conservar",
    },
    welcomeBack: {
      it: "Bentornato! Hai una richiesta di preventivo in corso per",
      en: "Welcome back! You have an active quote brief for",
      fr: "Bon retour ! Vous avez une demande de devis en cours pour",
      es: "¡Bienvenido de nuevo! Tienes una solicitud en curso para",
    },
    newRequestBtn: {
      it: "Inizia una nuova richiesta",
      en: "Start a new request",
      fr: "Nouvelle demande",
      es: "Nueva solicitud",
    },
    directBookingBtn: {
      it: "Richiedi un preventivo scritto a Noemi",
      en: "Request a written quote from Noemi",
      fr: "Demander un devis écrit à Noemi",
      es: "Solicitar presupuesto por escrito a Noemi",
    },
  };

  // Check speech recognition support safely
  useEffect(() => {
    if (typeof window !== "undefined") {
      const windowObj = window as unknown as {
        SpeechRecognition?: new () => BrowserSpeechRecognition;
        webkitSpeechRecognition?: new () => BrowserSpeechRecognition;
      };
      const SpeechRecognitionClass =
        windowObj.SpeechRecognition || windowObj.webkitSpeechRecognition;
      if (SpeechRecognitionClass) {
        setRecognitionSupported(true);
        const recognition = new SpeechRecognitionClass();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang =
          lang === "it"
            ? "it-IT"
            : lang === "fr"
            ? "fr-FR"
            : lang === "es"
            ? "es-ES"
            : "en-US";

        recognition.onresult = (event: BrowserSpeechEvent) => {
          const transcript = event.results[0][0].transcript;
          setInputText((prev) => (prev ? `${prev} ${transcript}` : transcript));
          setIsListening(false);
        };

        recognition.onerror = () => setIsListening(false);
        recognition.onend = () => setIsListening(false);

        recognitionRef.current = recognition;
      }
    }
  }, [lang]);

  // Initial welcome message with service categories
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome_1",
          sender: "bot",
          text: labels.welcome[lang],
          options: [
            {
              label:
                lang === "it"
                  ? "Assistenza Virtuale & Back Office"
                  : lang === "fr"
                  ? "Assistance Virtuelle & Back-Office"
                  : lang === "es"
                  ? "Asistencia Virtual & Back Office"
                  : "Virtual Assistance & Back Office",
              action: () => handleSelectService("backoffice"),
            },
            {
              label:
                lang === "it"
                  ? "Traduzione & Comunicazione Multilingue"
                  : lang === "fr"
                  ? "Traduction & Communication Multilingue"
                  : lang === "es"
                  ? "Traducción & Comunicación Multilingüe"
                  : "Translation & Multilingual Communication",
              action: () => handleSelectService("translation"),
            },
            {
              label:
                lang === "it"
                  ? "Scrittura & Revisione Testi"
                  : lang === "fr"
                  ? "Rédaction & Révision de Textes"
                  : lang === "es"
                  ? "Redacción y Revisión de Textos"
                  : "Writing & Text Revision",
              action: () => handleSelectService("writing"),
            },
            {
              label:
                lang === "it"
                  ? "Ricerche Online & Benchmark"
                  : lang === "fr"
                  ? "Recherches en Ligne & Veille"
                  : lang === "es"
                  ? "Investigación Online & Desk Research"
                  : "Online Research & Desk Research",
              action: () => handleSelectService("research"),
            },
            {
              label:
                lang === "it"
                  ? "Testi e localizzazione per siti web"
                  : lang === "fr"
                  ? "Contenus et localisation de sites web"
                  : lang === "es"
                  ? "Contenidos y localización web"
                  : "Website Content & Italian Localisation",
              action: () => handleSelectService("web"),
            },
          ],
        },
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, lang]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleVoice = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.warn("Speech recognition error:", err);
      }
    }
  };

  /**
   * Directly navigates to the Services contact form with validated service query param.
   * Personal text is never placed into URL parameters.
   */
  const handleDirectTransfer = (serviceKey?: ServiceKey) => {
    setIsOpen(false);
    const serviceId = serviceKey ? CONCIERGE_TO_OFFICIAL_SERVICE_ID[serviceKey] : "";
    const servicesPath = getLocalizedPath("services", lang);
    const targetUrl = serviceId
      ? `${servicesPath}?service=${encodeURIComponent(serviceId)}#contact-section`
      : `${servicesPath}#contact-section`;

    navigate(targetUrl);

    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  /**
   * Confirms the compiled quote draft, stores it in transient store, and transfers to the contact form.
   */
  const handleConfirmAndTransfer = (draft: QuoteDraft) => {
    setIsOpen(false);
    // Transient storage in client memory / sessionStorage (no URL leakage)
    saveQuoteDraft(draft);

    const servicesPath = getLocalizedPath("services", lang);
    const targetUrl = `${servicesPath}?service=${encodeURIComponent(draft.serviceId)}#contact-section`;

    navigate(targetUrl, {
      state: {
        serviceId: draft.serviceId,
        quoteDraft: draft.formattedSummary[lang] || draft.formattedSummary.it,
      },
    });

    setTimeout(() => {
      const contactSection = document.getElementById("contact-section");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  /**
   * Starts the step-by-step guided intake wizard for a selected service.
   */
  const startIntake = (serviceKey: ServiceKey) => {
    const schema = INTAKE_SCHEMAS[serviceKey];
    if (!schema || schema.questions.length === 0) {
      handleDirectTransfer(serviceKey);
      return;
    }

    const firstQ = schema.questions[0];
    setActiveIntake({
      serviceKey,
      currentQuestionIndex: 0,
      answers: {},
      isCompleted: false,
    });

    const questionMsg: Message = {
      id: `intake_q_${Date.now()}`,
      sender: "bot",
      text: `${labels.step[lang]} 1 ${labels.of[lang]} ${schema.questions.length}: ${firstQ.prompt[lang]}`,
      options: firstQ.choices?.map((choice) => ({
        label: choice.label[lang],
        action: () => handleAnswerQuestion(serviceKey, 0, choice.id, {}),
      })),
    };

    setMessages((prev) => [...prev, questionMsg]);
  };

  /**
   * Records an answer for the current intake question and advances or produces the summary.
   */
  const handleAnswerQuestion = (
    serviceKey: ServiceKey,
    qIndex: number,
    answerValue: string,
    existingAnswers: Record<string, string>
  ) => {
    const schema = INTAKE_SCHEMAS[serviceKey];
    if (!schema) return;

    const currentQ = schema.questions[qIndex];
    const newAnswers = sanitizeIntakeAnswers({
      ...existingAnswers,
      [currentQ.id]: answerValue,
    });

    // Find display label for the answer
    const matchedChoice = currentQ.choices?.find((c) => c.id === answerValue);
    const displayAnswer = matchedChoice ? matchedChoice.label[lang] : answerValue;

    const userMsg: Message = {
      id: `ans_${Date.now()}`,
      sender: "user",
      text: displayAnswer,
    };

    const nextIndex = qIndex + 1;

    if (nextIndex < schema.questions.length) {
      // Advance to next question
      const nextQ = schema.questions[nextIndex];
      setActiveIntake({
        serviceKey,
        currentQuestionIndex: nextIndex,
        answers: newAnswers,
        isCompleted: false,
      });

      const nextQMsg: Message = {
        id: `intake_q_${Date.now() + 1}`,
        sender: "bot",
        text: `${labels.step[lang]} ${nextIndex + 1} ${labels.of[lang]} ${schema.questions.length}: ${nextQ.prompt[lang]}`,
        options: nextQ.choices?.map((choice) => ({
          label: choice.label[lang],
          action: () => handleAnswerQuestion(serviceKey, nextIndex, choice.id, newAnswers),
        })),
      };

      setMessages((prev) => [...prev, userMsg, nextQMsg]);
    } else {
      // Completed all questions: build summary
      setActiveIntake({
        serviceKey,
        currentQuestionIndex: nextIndex,
        answers: newAnswers,
        isCompleted: true,
      });

      const formattedSummary: Record<Language, string> = {
        it: formatQuoteDraftSummary(serviceKey, newAnswers, "it"),
        en: formatQuoteDraftSummary(serviceKey, newAnswers, "en"),
        fr: formatQuoteDraftSummary(serviceKey, newAnswers, "fr"),
        es: formatQuoteDraftSummary(serviceKey, newAnswers, "es"),
      };

      const draft: QuoteDraft = {
        serviceKey,
        serviceId: schema.serviceId,
        serviceTitle: schema.title,
        answers: newAnswers,
        formattedSummary,
        createdAt: Date.now(),
      };

      const summaryMsg: Message = {
        id: `summary_${Date.now() + 1}`,
        sender: "bot",
        text: `${labels.summaryTitle[lang]}\n${labels.summarySubtitle[lang]}`,
        draftSummary: draft,
        options: [
          {
            label: labels.confirmTransferBtn[lang],
            action: () => handleConfirmAndTransfer(draft),
            isPrimary: true,
          },
          {
            label: labels.restartIntakeBtn[lang],
            action: () => startIntake(serviceKey),
            isPrimary: false,
          },
        ],
      };

      setMessages((prev) => [...prev, userMsg, summaryMsg]);
    }
  };

  /**
   * When visitor clicks on a service category card or button.
   */
  const handleSelectService = (serviceKey: ServiceKey) => {
    const schema = INTAKE_SCHEMAS[serviceKey];
    if (!schema) return;

    const priceSummary = getServicePricingSummary(serviceKey, lang);

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: schema.title[lang],
    };

    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      sender: "bot",
      text:
        lang === "it"
          ? `Ottimo. Per l'area «${schema.title[lang]}», ecco i parametri di riferimento:`
          : lang === "fr"
          ? `Parfait. Pour l'activité «${schema.title[lang]}», voici les paramètres de référence :`
          : lang === "es"
          ? `Muy bien. En cuanto al área «${schema.title[lang]}», estos son los parámetros de referencia:`
          : `Understood. For «${schema.title[lang]}», here are the reference baseline terms:`,
      estimate: priceSummary,
      options: [
        {
          label: labels.startIntakeBtn[lang],
          action: () => startIntake(serviceKey),
          isPrimary: true,
        },
        {
          label: labels.quoteButton[lang],
          action: () => handleDirectTransfer(serviceKey),
          isPrimary: false,
        },
      ],
    };

    setMessages((prev) => [...prev, userMessage, botResponse]);
  };

  /**
   * Handles free-text submission from the input field.
   */
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText.trim();
    setInputText("");

    // If an intake question is currently awaiting an answer, treat this text as the answer
    if (activeIntake && !activeIntake.isCompleted) {
      handleAnswerQuestion(
        activeIntake.serviceKey,
        activeIntake.currentQuestionIndex,
        userText,
        activeIntake.answers
      );
      return;
    }

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
    };

    // Deterministic intent classification across 4 languages
    const intent = recognizeIntent(userText);

    const botMsg: Message = {
      id: (Date.now() + 1).toString(),
      sender: "bot",
      text: intent.explanation[lang],
      options: intent.serviceKey
        ? [
            {
              label: labels.startIntakeBtn[lang],
              action: () => startIntake(intent.serviceKey!),
              isPrimary: true,
            },
            {
              label: labels.quoteButton[lang],
              action: () => handleDirectTransfer(intent.serviceKey),
              isPrimary: false,
            },
          ]
        : [
            {
              label: labels.quoteButton[lang],
              action: () => handleDirectTransfer(),
              isPrimary: true,
            },
          ],
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  return (
    <>
      {/* ── FLOATING TRIGGER BUTTON ── */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center">
        {!isOpen && (
          <Button
            type="button"
            onClick={() => setIsOpen(true)}
            className="rounded-full h-13 px-5 bg-primary text-primary-foreground shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2.5 font-bold tracking-wide border border-primary-foreground/20 hover:shadow-primary/30 cursor-pointer"
            aria-label={labels.badge[lang]}
          >
            <div className="relative">
              <MessageSquare className="w-5 h-5" />
              
            </div>
            <span className="text-xs uppercase tracking-wider font-semibold">
              {({ it: "Assistente di Noemi", en: "Noemi’s Assistant", fr: "Assistant de Noemi", es: "Asistente de Noemi" } as const)[lang]}
            </span>
          </Button>
        )}
      </div>

      {/* ── CONCIERGE DRAWER / MODAL ── */}
      {isOpen && (
        <div className="fixed inset-0 sm:inset-auto sm:bottom-6 sm:right-6 sm:w-[440px] sm:h-[620px] z-50 bg-background border border-border/70 sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between border-b border-primary-foreground/15 shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-primary-foreground/15 text-primary-foreground">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-xs tracking-wide uppercase">
                  {labels.badge[lang]}
                </h3>
                <p className="text-[10px] text-primary-foreground/80 flex items-center gap-1">
                  
                  {labels.subBadge[lang]}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors cursor-pointer"
              aria-label={({it:"Chiudi la chat",en:"Close chat",fr:"Fermer la fenêtre",es:"Cerrar el chat"} as const)[lang]}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Privacy & Transparency bar */}
          <div className="bg-secondary/40 border-b border-border/40 px-3.5 py-1.5 text-[10px] text-muted-foreground flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span className="leading-relaxed">{labels.transparency[lang]}</span>
          </div>

          {/* Client-side estimate: deterministic, never a binding quote or a submitted request. */}
          <div className="border-b border-border/50 px-4 py-2 text-xs">
            <button type="button" onClick={() => setShowEstimate((v) => !v)} aria-expanded={showEstimate}
              className="flex w-full items-center justify-between font-semibold text-primary py-1 cursor-pointer">
              <span>{({ it: "Calcola subito una stima", en: "Calculate an estimate", fr: "Calculer une estimation", es: "Calcular una estimación" } as const)[lang]}</span>
              <span aria-hidden="true">{showEstimate ? "−" : "+"}</span>
            </button>
            {showEstimate && (
              <div className="space-y-2 py-2">
                <label className="block font-medium" htmlFor="noemi-estimate-kind">
                  {({it:"Tipo di attività",en:"Type of work",fr:"Type de prestation",es:"Tipo de servicio"} as const)[lang]}
                </label>
                <select id="noemi-estimate-kind" className="w-full rounded-md border border-input bg-background p-2 text-foreground"
                  value={estimateKind} onChange={(e) => {
                    const k = e.target.value as EstimateKind;
                    setEstimateKind(k);
                    setEstimateQuantity(k === "hourly" ? "5" : "500");
                  }}>
                  <option value="hourly">{({it:"Supporto a ore",en:"Hourly support",fr:"Assistance horaire",es:"Asistencia por horas"} as const)[lang]}</option>
                  <option value="translation">{({it:"Traduzione",en:"Translation",fr:"Traduction",es:"Traducción"} as const)[lang]}</option>
                  <option value="localization">{({it:"Localizzazione testi",en:"Content localisation",fr:"Localisation de contenus",es:"Localización de contenidos"} as const)[lang]}</option>
                  <option value="specialist">{({it:"Traduzione specialistica",en:"Specialist translation",fr:"Traduction spécialisée",es:"Traducción especializada"} as const)[lang]}</option>
                  <option value="revision">{({it:"Revisione testi",en:"Text revision",fr:"Révision de textes",es:"Revisión de textos"} as const)[lang]}</option>
                </select>
                <label className="block font-medium" htmlFor="noemi-estimate-quantity">
                  {estimateKind === "hourly"
                    ? ({it:"Ore previste",en:"Estimated hours",fr:"Heures prévues",es:"Horas previstas"} as const)[lang]
                    : ({it:"Parole del testo originale",en:"Source-text word count",fr:"Nombre de mots du texte source",es:"Palabras del texto original"} as const)[lang]}
                </label>
                <input id="noemi-estimate-quantity" type="number" min="1" max="100000" step="1"
                  value={estimateQuantity} onChange={(e) => setEstimateQuantity(e.target.value)}
                  className="w-full rounded-md border border-input bg-background p-2 text-foreground" />
                {(() => {
                  const result = estimateService(estimateKind, Number(estimateQuantity));
                  if (!result) return <p className="text-muted-foreground">{({it:"Inserisci un numero intero positivo.",en:"Enter a positive whole number.",fr:"Saisissez un nombre entier positif.",es:"Introduce un número entero positivo."} as const)[lang]}</p>;
                  return <div role="status" className="rounded-lg bg-primary/5 border border-primary/25 p-3 space-y-1">
                    <strong className="block text-base">{new Intl.NumberFormat(lang === "it" ? "it-IT" : lang === "fr" ? "fr-FR" : lang === "es" ? "es-ES" : "en-GB", {style:"currency",currency:"EUR"}).format(result.amount)}</strong>
                    <p className="text-muted-foreground">{({it:"Stima indicativa, non vincolante: soggetta alla verifica di materiali, complessità, scadenze e condizioni fiscali applicabili.",en:"Non-binding estimate, subject to source review, complexity, timing and applicable tax terms.",fr:"Estimation non contractuelle, sous réserve de l'étude du contenu, de la complexité, des délais et des conditions fiscales.",es:"Estimación no vinculante, sujeta a revisión del material, complejidad, plazos y condiciones fiscales."} as const)[lang]}</p>
                  </div>;
                })()}
                <button type="button" onClick={() => handleDirectTransfer(estimateKind === "hourly" ? "backoffice" : "translation")}
                  className="rounded-md bg-primary text-primary-foreground px-3 py-2 w-full font-medium cursor-pointer">
                  {labels.quoteButton[lang]}
                </button>
              </div>
            )}
          </div>

          {/* Message stream */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${
                  m.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.sender === "bot" && (
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5 border border-primary/20">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[88%] rounded-2xl p-3.5 space-y-2.5 ${
                    m.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-tr-xs"
                      : "bg-secondary/70 text-foreground border border-border/50 rounded-tl-xs"
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-line">{m.text}</p>

                  {/* Estimate baseline box */}
                  {m.estimate && (
                    <div className="p-2.5 rounded-lg bg-background/90 border border-border/60 text-[11px] text-foreground space-y-1">
                      <span className="font-bold text-primary block uppercase tracking-wider text-[10px]">
                        {lang === "it"
                          ? "Tariffario di Riferimento"
                          : lang === "fr"
                          ? "Grille Tarifaire Indicative"
                          : lang === "es"
                          ? "Tarifas de Referencia"
                          : "Reference Pricing"}
                      </span>
                      <p className="text-foreground/90">{m.estimate}</p>
                    </div>
                  )}

                  {/* Editable summary card */}
                  {m.draftSummary && (
                    <div className="p-3 rounded-xl bg-background border border-primary/30 space-y-2 text-[11px] shadow-xs">
                      <div className="flex items-center gap-1.5 text-primary font-bold uppercase tracking-wider text-[10px] border-b border-border/40 pb-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{m.draftSummary.serviceTitle[lang]}</span>
                      </div>
                      <div className="space-y-1 text-foreground/85">
                        {Object.entries(m.draftSummary.answers).map(([qid, ans]) => {
                          const schema = INTAKE_SCHEMAS[m.draftSummary!.serviceKey];
                          const question = schema?.questions.find((q) => q.id === qid);
                          const choice = question?.choices?.find((c) => c.id === ans);
                          const display = choice ? choice.label[lang] : ans;
                          return (
                            <div key={qid} className="flex flex-col text-[10.5px]">
                              <span className="text-muted-foreground font-medium">
                                {question?.prompt[lang] || qid}
                              </span>
                              <span className="font-semibold text-foreground pl-1">
                                {display}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Action buttons */}
                  {m.options && (
                    <div className="space-y-1.5 pt-1">
                      {m.options.map((opt, idx) => {
                        if (opt.isPrimary) {
                          return (
                            <button
                              key={idx}
                              type="button"
                              onClick={opt.action}
                              className="w-full text-left px-3.5 py-2.5 rounded-lg text-[11px] bg-primary text-primary-foreground font-semibold shadow-sm hover:opacity-95 hover:scale-[1.01] transition-all flex items-center justify-between gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                            >
                              <div className="flex items-center gap-2 truncate">
                                <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                                <span className="truncate">{opt.label}</span>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                            </button>
                          );
                        }
                        if (
                          opt.label.toLowerCase().includes("call") ||
                          opt.label.toLowerCase().includes("prenota") ||
                          opt.label.toLowerCase().includes("book")
                        ) {
                          return (
                            <BookingButton
                              key={idx}
                              lang={lang}
                              variant="outline"
                              className="w-full text-left justify-start text-[11px] h-auto py-2 px-3 border-primary/30 text-primary hover:bg-primary/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                            >
                              <Calendar className="w-3.5 h-3.5 mr-1.5 flex-shrink-0" />
                              <span className="truncate">{opt.label}</span>
                            </BookingButton>
                          );
                        }
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={opt.action}
                            className="w-full text-left px-3 py-2 rounded-lg text-[11px] bg-background border border-border/60 hover:border-primary/50 hover:text-primary transition-all flex items-center justify-between gap-1 group font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
                          >
                            <span className="truncate">{opt.label}</span>
                            <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:text-primary flex-shrink-0" />
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input box */}
          <form
            onSubmit={handleSendMessage}
            className="p-3 border-t border-border/50 bg-background flex items-center gap-2"
          >
            {recognitionSupported && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={toggleVoice}
                className={`h-9 w-9 flex-shrink-0 rounded-full transition-colors cursor-pointer ${
                  isListening
                    ? "bg-destructive/15 text-destructive animate-pulse"
                    : "text-muted-foreground hover:text-primary"
                }`}
                aria-label={labels.voicePrompt[lang]}
                title={labels.voicePrompt[lang]}
              >
                {isListening ? (
                  <MicOff className="w-4 h-4" />
                ) : (
                  <Mic className="w-4 h-4" />
                )}
              </Button>
            )}

            <Input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={
                isListening
                  ? lang === "it"
                    ? "In ascolto... Parla ora"
                    : lang === "fr"
                    ? "Écoute en cours... Parlez maintenant"
                    : lang === "es"
                    ? "Escuchando... Habla ahora"
                    : "Listening... Speak now"
                  : labels.placeholder[lang]
              }
              className="text-xs h-9 bg-secondary/30 border-border/60 focus-visible:ring-primary"
            />

            <Button
              type="submit"
              size="icon"
              disabled={!inputText.trim()}
              className="h-9 w-9 flex-shrink-0 bg-primary text-primary-foreground rounded-full cursor-pointer"
              aria-label={({it:"Invia messaggio",en:"Send message",fr:"Envoyer le message",es:"Enviar mensaje"} as const)[lang]}
            >
              <Send className="w-3.5 h-3.5" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
