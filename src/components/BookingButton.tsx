import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { format, addDays, startOfDay, isBefore, isAfter, isWeekend } from "date-fns";
import { it } from "date-fns/locale";
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronLeft,
  Info,
  RefreshCw,
} from "lucide-react";

const LOCATION_ID = "QIS5mDvq2kDJjK2pDMuf";
const CALENDAR_ID = "DnZk8niUvdwRiUXJEMaf";
const SLOTS_API_URL = `https://backend.leadconnectorhq.com/calendars/${CALENDAR_ID}/free-slots`;
const BOOKING_API_URL = "https://backend.leadconnectorhq.com/vibe-ai/booking/submit";
const OFFICIAL_TIMEZONE = "Europe/Rome";
const MINIMUM_NOTICE_HOURS = 24;

export interface BookingButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  [key: string]: unknown;
}

interface BookingFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes: string;
  website: string; // Honeypot
}

const INITIAL_FORM: BookingFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  notes: "",
  website: "",
};

/**
 * Verifies if a given slot ISO string satisfies the minimum notice requirement (>= 24 hours)
 */
function isSlotValidWithNotice(slotIsoString: string): boolean {
  try {
    const slotTime = new Date(slotIsoString).getTime();
    if (isNaN(slotTime)) return false;
    const minTimeAllowed = Date.now() + MINIMUM_NOTICE_HOURS * 60 * 60 * 1000;
    return slotTime >= minTimeAllowed;
  } catch {
    return false;
  }
}

export function BookingButton({
  children,
  className,
  variant,
  size,
  asChild,
  onClick,
  ...props
}: BookingButtonProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [availableSlots, setAvailableSlots] = useState<Record<string, string[]>>({});
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const [booking, setBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [form, setForm] = useState<BookingFormState>(INITIAL_FORM);
  const { toast } = useToast();

  const abortControllerRef = useRef<AbortController | null>(null);
  const isTimeoutRef = useRef<boolean>(false);

  // Stable function to fetch free slots for the next 30 days rolling window
  const fetchSlots = useCallback(async () => {
    // Abort previous pending request if any
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;
    isTimeoutRef.current = false;

    setLoadingSlots(true);
    setSlotsError(null);

    // Timeout of 15 seconds
    const timeoutId = setTimeout(() => {
      isTimeoutRef.current = true;
      controller.abort();
    }, 15000);

    try {
      const now = new Date();
      const start = startOfDay(now).getTime();
      const end = addDays(startOfDay(now), 30).getTime();

      const url = `${SLOTS_API_URL}?startDate=${start}&endDate=${end}&timezone=${encodeURIComponent(OFFICIAL_TIMEZONE)}`;
      const res = await fetch(url, {
        signal: controller.signal,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Errore di comunicazione con il servizio calendario (${res.status})`);
      }

      const rawData = await res.json();
      clearTimeout(timeoutId);

      // Parse and filter the response:
      // Format: { "2026-09-02": { "slots": [ "2026-09-02T10:00:00+02:00", ... ] }, "traceId": "..." }
      const parsedSlotsMap: Record<string, string[]> = {};

      if (rawData && typeof rawData === "object") {
        for (const [key, value] of Object.entries(rawData)) {
          // Check if key is a valid YYYY-MM-DD date string
          if (/^\d{4}-\d{2}-\d{2}$/.test(key) && value && typeof value === "object") {
            const rawSlots = (value as { slots?: unknown[] }).slots;
            if (Array.isArray(rawSlots)) {
              // Filter slots according to business rules:
              // 1. Must be a valid ISO date
              // 2. Must not fall on a weekend (Saturday / Sunday)
              // 3. Must satisfy the 24-hour minimum notice
              const validSlots = rawSlots.filter((slot): slot is string => {
                if (typeof slot !== "string") return false;
                const slotDate = new Date(slot);
                if (isNaN(slotDate.getTime())) return false;

                // Weekend filter (0 = Sunday, 6 = Saturday)
                const dayOfWeek = slotDate.getDay();
                if (dayOfWeek === 0 || dayOfWeek === 6) return false;

                // 24h minimum notice filter
                return isSlotValidWithNotice(slot);
              });

              if (validSlots.length > 0) {
                // Sort ascending
                validSlots.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
                parsedSlotsMap[key] = validSlots;
              }
            }
          }
        }
      }

      setAvailableSlots(parsedSlotsMap);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === "AbortError") {
        if (isTimeoutRef.current) {
          console.warn("Richiesta slot scaduta per timeout.");
          setSlotsError("Tempo di caricamento scaduto. Clicca su 'Ricarica' per riprovare.");
        }
        // If aborted by unmount or superseded request without timeout, do not set error
        return;
      }

      console.error("Errore nel recupero degli slot:", err);
      setSlotsError("Impossibile caricare le disponibilità in questo momento. Riprova più tardi.");
    } finally {
      clearTimeout(timeoutId);
      setLoadingSlots(false);
    }
  }, []);

  // Fetch slots on modal open
  useEffect(() => {
    if (open) {
      fetchSlots();
    } else {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      if (!bookingSuccess) {
        setSelectedSlot(null);
        setBookingError(null);
      }
    }
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [open, fetchSlots, bookingSuccess]);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      if (bookingSuccess) {
        setBookingSuccess(false);
        setDate(undefined);
        setSelectedSlot(null);
        setForm(INITIAL_FORM);
      }
    }
  };

  const handleSelectSlot = (slot: string) => {
    // 24-hour verification on slot click
    if (!isSlotValidWithNotice(slot)) {
      setSlotsError("Questo orario non è più prenotabile (preavviso minimo di 24 ore richiesto). Seleziona un altro orario.");
      return;
    }
    setSelectedSlot(slot);
    setBookingError(null);
  };

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingError(null);

    if (!selectedSlot) {
      setBookingError("Seleziona prima una data e un orario.");
      return;
    }

    // Double check 24-hour notice rule immediately before booking
    if (!isSlotValidWithNotice(selectedSlot)) {
      setBookingError("Questo orario non è più prenotabile (preavviso minimo di 24 ore richiesto). Seleziona un altro orario.");
      setSelectedSlot(null);
      return;
    }

    // Honeypot check for bots
    if (form.website) {
      setOpen(false);
      return;
    }

    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim()) {
      setBookingError("Inserisci nome, cognome e un'email valida.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setBookingError("Inserisci un indirizzo email valido.");
      return;
    }

    setBooking(true);
    try {
      const sessionId =
        typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
          ? crypto.randomUUID()
          : `session-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;

      const payload = {
        locationId: LOCATION_ID,
        calendarId: CALENDAR_ID,
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || "Non specificato",
        notes: form.notes.trim() || "Prenotazione call conoscitiva (30 min) dal sito",
        selectedSlot: selectedSlot,
        selectedTimezone: OFFICIAL_TIMEZONE,
        sessionId,
      };

      const res = await fetch(BOOKING_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Errore durante la conferma della prenotazione (HTTP ${res.status})`);
      }

      const resData = await res.json();

      if (resData.appointmentId || resData.id || resData.success || resData.contactId || resData.ok) {
        setBookingSuccess(true);
        toast({
          title: "Prenotazione confermata!",
          description: "Riceverai a breve un'email di riepilogo con i dettagli dell'appuntamento.",
        });
      } else {
        throw new Error("Risposta inattesa dal servizio di prenotazione.");
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Impossibile completare la prenotazione. Riprova più tardi.";
      setBookingError(msg);
      toast({
        title: "Errore prenotazione",
        description: msg,
        variant: "destructive",
      });
    } finally {
      setBooking(false);
    }
  };

  // Get slots for currently selected date
  const dateKey = date ? format(date, "yyyy-MM-dd") : null;
  const slotsForDate = dateKey ? availableSlots[dateKey] || [] : [];

  // Filter calendar days: disabled if past, >30 days, or weekend (Sat/Sun)
  const isDateDisabled = (d: Date) => {
    const today = startOfDay(new Date());
    const maxDate = addDays(today, 30);
    const dayStart = startOfDay(d);
    if (isBefore(dayStart, today)) return true;
    if (isAfter(dayStart, maxDate)) return true;
    if (isWeekend(d)) return true;
    return false;
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {asChild ? (
          children
        ) : (
          <Button variant={variant} size={size} className={className} onClick={onClick} {...props}>
            {children || "PRENOTA UNA CALL GRATUITA"}
          </Button>
        )}
      </DialogTrigger>

      <DialogContent className="sm:max-w-[560px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="uppercase text-primary text-xl font-bold tracking-wide flex items-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            PRENOTA UNA CALL GRATUITA
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-1">
            Durata: <strong>30 minuti</strong> · Videocall individuale · Fuso orario: <strong>{OFFICIAL_TIMEZONE}</strong>
          </DialogDescription>
        </DialogHeader>

        {bookingSuccess ? (
          /* Confirmation View */
          <div className="py-6 text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle2 className="w-14 h-14 text-primary animate-bounce" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Prenotazione Confermata!</h3>
              <p className="text-sm text-foreground/80 max-w-md mx-auto leading-relaxed">
                Il tuo appuntamento per la call gratuita di <strong>30 minuti</strong> è stato registrato con successo. Ti ho inviato un'email di conferma con il link per la videocall all'indirizzo{" "}
                <strong className="text-foreground">{form.email}</strong>.
              </p>
              {selectedSlot && (
                <div className="inline-flex items-center gap-2 bg-secondary/40 border border-border px-4 py-2.5 rounded-lg text-sm font-semibold text-primary mt-2">
                  <Clock className="w-4 h-4" />
                  <span>
                    {format(new Date(selectedSlot), "EEEE d MMMM yyyy 'alle' HH:mm", { locale: it })} ({OFFICIAL_TIMEZONE})
                  </span>
                </div>
              )}
            </div>
            <div className="pt-4">
              <Button
                type="button"
                className="w-full sm:w-auto px-8"
                onClick={() => handleOpenChange(false)}
              >
                Chiudi
              </Button>
            </div>
          </div>
        ) : !selectedSlot ? (
          /* Date & Time Slot Selection View */
          <div className="space-y-4 py-2">
            {slotsError && (
              <div className="bg-destructive/10 border border-destructive/30 text-destructive text-sm p-3 rounded-lg flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{slotsError}</span>
                </div>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={fetchSlots}
                  className="text-xs h-7 px-2 gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  Ricarica
                </Button>
              </div>
            )}

            <div className="bg-secondary/20 border border-border/50 rounded-lg p-3 text-xs text-foreground/70 flex items-start gap-2">
              <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                Disponibilità dal <strong>lunedì al venerdì</strong> (preavviso minimo: 24 ore). Seleziona una data sul calendario per visualizzare gli orari disponibili.
              </span>
            </div>

            <div className="flex justify-center bg-card border rounded-xl p-2 shadow-sm">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => {
                  setDate(newDate);
                  setSlotsError(null);
                }}
                locale={it}
                disabled={isDateDisabled}
                className="rounded-md"
              />
            </div>

            {date && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>
                      Orari per {format(date, "EEEE d MMMM", { locale: it })}:
                    </span>
                  </div>
                  <span className="text-xs font-normal text-muted-foreground">30 min · Europe/Rome</span>
                </div>

                {loadingSlots ? (
                  <div className="flex items-center justify-center gap-2 py-6 text-sm text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span>Caricamento orari disponibili...</span>
                  </div>
                ) : slotsForDate.length > 0 ? (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {slotsForDate.map((slot) => {
                      const timeString = format(new Date(slot), "HH:mm");
                      return (
                        <Button
                          key={slot}
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleSelectSlot(slot)}
                          className="hover:bg-primary hover:text-primary-foreground font-semibold py-2.5 transition-all"
                        >
                          {timeString}
                        </Button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-5 px-3 bg-secondary/20 rounded-lg text-sm text-muted-foreground space-y-1">
                    <p className="font-medium text-foreground/80">Nessun orario disponibile per questo giorno</p>
                    <p className="text-xs">
                      {isWeekend(date)
                        ? "I giorni di sabato e domenica non sono disponibili per le call."
                        : "Gli orari potrebbero essere esauriti o non rispettare il preavviso di 24 ore. Seleziona un'altra data."}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          /* Customer Details View */
          <form onSubmit={handleBook} className="space-y-4 py-2" noValidate>
            {bookingError && (
              <div className="bg-destructive/10 border border-destructive/30 text-destructive text-sm p-3 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{bookingError}</span>
              </div>
            )}

            {/* Selected Slot Summary Card */}
            <div className="bg-primary/10 border border-primary/20 p-3.5 rounded-xl space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">Riepilogo Call</span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedSlot(null)}
                  className="text-xs text-primary hover:text-primary hover:bg-primary/10 gap-1 h-7 px-2"
                >
                  <ChevronLeft className="w-3 h-3" /> Modifica data/ora
                </Button>
              </div>
              <div className="text-sm font-medium text-foreground flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-primary shrink-0" />
                <span>
                  {format(new Date(selectedSlot), "EEEE d MMMM yyyy 'alle' HH:mm", { locale: it })}
                </span>
              </div>
              <div className="text-xs text-foreground/70 flex items-center gap-4">
                <span>⏱ Durata: <strong>30 minuti</strong></span>
                <span>📍 Fuso orario: <strong>{OFFICIAL_TIMEZONE}</strong></span>
              </div>
            </div>

            {/* Honeypot field */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={(e) => setForm({ ...form, website: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="bk-firstName" className="text-sm font-medium text-foreground/80">
                  Nome *
                </label>
                <Input
                  id="bk-firstName"
                  required
                  placeholder="Il tuo nome"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  disabled={booking}
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="bk-lastName" className="text-sm font-medium text-foreground/80">
                  Cognome *
                </label>
                <Input
                  id="bk-lastName"
                  required
                  placeholder="Il tuo cognome"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  disabled={booking}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="bk-email" className="text-sm font-medium text-foreground/80">
                  Email *
                </label>
                <Input
                  id="bk-email"
                  type="email"
                  required
                  placeholder="La tua email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled={booking}
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="bk-phone" className="text-sm font-medium text-foreground/80">
                  Telefono
                </label>
                <Input
                  id="bk-phone"
                  type="tel"
                  placeholder="Numero (opzionale)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  disabled={booking}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="bk-notes" className="text-sm font-medium text-foreground/80">
                Note o argomenti principali (opzionale)
              </label>
              <Textarea
                id="bk-notes"
                placeholder="Di cosa vorresti parlare durante la call?"
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                disabled={booking}
                className="min-h-[70px] resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full uppercase font-semibold tracking-wide py-6 text-base hover:scale-[1.01] transition-all"
              disabled={booking}
            >
              {booking ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  PRENOTAZIONE IN CORSO...
                </>
              ) : (
                "CONFERMA PRENOTAZIONE"
              )}
            </Button>

            <p className="text-xs text-foreground/50 text-center">
              Riceverai un'email di conferma con il link della videocall all'indirizzo indicato.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
