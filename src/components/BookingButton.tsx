import { useState, useMemo } from "react";
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
} from "lucide-react";

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

const OFFICIAL_TIMEZONE = "Europe/Rome";
const MINIMUM_NOTICE_HOURS = 24;
const DAILY_SLOT_TIMES = ["10:00", "11:00", "14:00", "15:00"] as const;
const BOOKING_SUBMIT_URL = "https://formsubmit.co/ajax/info@noemitomassetti.it";

/**
 * Calculates the exact Europe/Rome ISO string for a given date and time string
 */
function getRomeIsoString(date: Date, timeStr: string): string {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dateStr = `${year}-${month}-${day}`;

  const testDate = new Date(Date.UTC(year, date.getMonth(), date.getDate(), hours, minutes));
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: OFFICIAL_TIMEZONE,
    timeZoneName: "shortOffset",
  });
  const parts = dtf.formatToParts(testDate);
  const tzPart = parts.find((p) => p.type === "timeZoneName");
  let offset = "+02:00";
  if (tzPart && tzPart.value) {
    const match = tzPart.value.match(/GMT([+-]\d+)/);
    if (match) {
      const hoursOffset = parseInt(match[1], 10);
      const sign = hoursOffset >= 0 ? "+" : "-";
      offset = `${sign}${String(Math.abs(hoursOffset)).padStart(2, "0")}:00`;
    }
  }

  return `${dateStr}T${timeStr}:00${offset}`;
}

/**
 * Checks if a specific slot satisfies the 24-hour minimum notice constraint
 */
function isSlotValidWithNotice(date: Date, timeStr: string): boolean {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const slotTimestamp = new Date(date).setHours(hours, minutes, 0, 0);
  const minTimeAllowed = Date.now() + MINIMUM_NOTICE_HOURS * 60 * 60 * 1000;
  return slotTimestamp >= minTimeAllowed;
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
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedSlotIso, setSelectedSlotIso] = useState<string | null>(null);
  const [booking, setBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [form, setForm] = useState<BookingFormState>(INITIAL_FORM);
  const { toast } = useToast();

  // Generate 30-day rolling window slots dictionary
  const availableSlotsMap = useMemo(() => {
    const slotsMap: Record<string, { time: string; iso: string }[]> = {};
    const now = new Date();
    const startDay = startOfDay(now);
    const maxDay = addDays(startDay, 30);

    let current = startDay;
    while (!isAfter(current, maxDay)) {
      if (!isWeekend(current)) {
        const dateKey = format(current, "yyyy-MM-dd");
        const validSlots: { time: string; iso: string }[] = [];

        for (const timeStr of DAILY_SLOT_TIMES) {
          if (isSlotValidWithNotice(current, timeStr)) {
            validSlots.push({
              time: timeStr,
              iso: getRomeIsoString(current, timeStr),
            });
          }
        }

        if (validSlots.length > 0) {
          slotsMap[dateKey] = validSlots;
        }
      }
      current = addDays(current, 1);
    }

    return slotsMap;
  }, []);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      if (bookingSuccess) {
        setBookingSuccess(false);
        setDate(undefined);
        setSelectedTime(null);
        setSelectedSlotIso(null);
        setForm(INITIAL_FORM);
      }
    }
  };

  const handleSelectSlot = (time: string) => {
    if (!date) return;

    // Strict 24-hour verification on slot click
    if (!isSlotValidWithNotice(date, time)) {
      setBookingError("Questo orario richiede almeno 24 ore di preavviso. Seleziona un'altra data o orario.");
      return;
    }

    const iso = getRomeIsoString(date, time);
    setSelectedTime(time);
    setSelectedSlotIso(iso);
    setBookingError(null);
  };

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingError(null);

    if (!date || !selectedTime || !selectedSlotIso) {
      setBookingError("Seleziona prima una data e un orario.");
      return;
    }

    // Double check 24-hour notice immediately before submit
    if (!isSlotValidWithNotice(date, selectedTime)) {
      setBookingError("Questo orario richiede almeno 24 ore di preavviso. Seleziona un altro orario.");
      setSelectedTime(null);
      setSelectedSlotIso(null);
      return;
    }

    // Honeypot check for bots
    if (form.website) {
      setOpen(false);
      return;
    }

    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim()) {
      setBookingError("Compila tutti i campi obbligatori contrassegnati con l'asterisco (*).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email.trim())) {
      setBookingError("Inserisci un indirizzo email valido.");
      return;
    }

    setBooking(true);

    try {
      const dateFormatted = format(date, "EEEE d MMMM yyyy", { locale: it });

      const payload = {
        tipo_richiesta: "Prenotazione Call Gratuita (30 min)",
        nome: form.firstName.trim(),
        cognome: form.lastName.trim(),
        email: form.email.trim(),
        telefono: form.phone.trim() || "Non specificato",
        data_appuntamento: dateFormatted,
        ora_appuntamento: selectedTime,
        fuso_orario: OFFICIAL_TIMEZONE,
        durata: "30 minuti",
        slot_iso: selectedSlotIso,
        note: form.notes.trim() || "Nessuna nota specificata",
        _subject: `Nuova Prenotazione Call: ${form.firstName.trim()} ${form.lastName.trim()} - ${dateFormatted} alle ${selectedTime}`,
        _replyto: form.email.trim(),
        _captcha: "false",
      };

      const response = await fetch(BOOKING_SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Errore durante l'invio della richiesta (HTTP ${response.status})`);
      }

      const result = await response.json();

      if (result.success === "true" || result.success === true) {
        setBookingSuccess(true);
        toast({
          title: "Prenotazione confermata!",
          description: "La tua richiesta di appuntamento è stata registrata con successo.",
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
  const slotsForDate = dateKey ? availableSlotsMap[dateKey] || [] : [];

  // Filter calendar days: disabled if past, >30 days, weekend, or no valid slots available
  const isDateDisabled = (d: Date) => {
    const today = startOfDay(new Date());
    const maxDate = addDays(today, 30);
    const dayStart = startOfDay(d);
    if (isBefore(dayStart, today)) return true;
    if (isAfter(dayStart, maxDate)) return true;
    if (isWeekend(d)) return true;
    const key = format(d, "yyyy-MM-dd");
    return !availableSlotsMap[key] || availableSlotsMap[key].length === 0;
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
            Durata: <strong>30 minuti</strong> · Videocall conoscitiva · Fuso orario: <strong>{OFFICIAL_TIMEZONE}</strong>
          </DialogDescription>
        </DialogHeader>

        {bookingSuccess ? (
          /* Confirmation View */
          <div className="py-6 text-center space-y-4">
            <div className="flex justify-center">
              <CheckCircle2 className="w-14 h-14 text-primary animate-bounce" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Prenotazione Inviata con Successo!</h3>
              <p className="text-sm text-foreground/80 max-w-md mx-auto leading-relaxed">
                Il tuo appuntamento per la call gratuita di <strong>30 minuti</strong> è stato registrato. Riceverai un'email di conferma con i dettagli della videocall all'indirizzo{" "}
                <strong className="text-foreground">{form.email}</strong>.
              </p>
              {date && selectedTime && (
                <div className="inline-flex items-center gap-2 bg-secondary/40 border border-border px-4 py-2.5 rounded-lg text-sm font-semibold text-primary mt-2">
                  <Clock className="w-4 h-4" />
                  <span>
                    {format(date, "EEEE d MMMM yyyy", { locale: it })} alle ore {selectedTime} ({OFFICIAL_TIMEZONE})
                  </span>
                </div>
              )}
            </div>
            <div className="pt-4">
              <Button
                type="button"
                className="w-full sm:w-auto px-8 font-semibold"
                onClick={() => handleOpenChange(false)}
              >
                Chiudi
              </Button>
            </div>
          </div>
        ) : !selectedTime ? (
          /* Date & Time Slot Selection View */
          <div className="space-y-4 py-2">
            <div className="bg-secondary/20 border border-border/50 rounded-lg p-3 text-xs text-foreground/70 flex items-start gap-2">
              <Info className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>
                Disponibilità dal <strong>lunedì al venerdì</strong> (orari: <strong>10:00, 11:00, 14:00, 15:00</strong>) · Preavviso minimo: <strong>24 ore</strong>. Seleziona una data per visualizzare gli orari disponibili.
              </span>
            </div>

            <div className="flex justify-center bg-card border rounded-xl p-2 shadow-sm">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => {
                  setDate(newDate);
                  setBookingError(null);
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
                      Orari disponibili per {format(date, "EEEE d MMMM", { locale: it })}:
                    </span>
                  </div>
                  <span className="text-xs font-normal text-muted-foreground">30 min · Europe/Rome</span>
                </div>

                {slotsForDate.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {slotsForDate.map(({ time }) => (
                      <Button
                        key={time}
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => handleSelectSlot(time)}
                        className="hover:bg-primary hover:text-primary-foreground font-semibold py-2.5 transition-all text-sm"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-5 px-3 bg-secondary/20 rounded-lg text-sm text-muted-foreground space-y-1">
                    <p className="font-medium text-foreground/80">Nessun orario disponibile per questo giorno</p>
                    <p className="text-xs">
                      {isWeekend(date)
                        ? "I giorni di sabato e domenica non sono disponibili per le call."
                        : "Gli orari per questo giorno non rispettano il preavviso minimo di 24 ore. Seleziona una data successiva."}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          /* Customer Details Form View */
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
                  onClick={() => {
                    setSelectedTime(null);
                    setSelectedSlotIso(null);
                  }}
                  className="text-xs text-primary hover:text-primary hover:bg-primary/10 gap-1 h-7 px-2"
                >
                  <ChevronLeft className="w-3 h-3" /> Modifica data/ora
                </Button>
              </div>
              <div className="text-sm font-medium text-foreground flex items-center gap-2">
                <CalendarIcon className="w-4 h-4 text-primary shrink-0" />
                <span>
                  {date && format(date, "EEEE d MMMM yyyy", { locale: it })} alle <strong>{selectedTime}</strong>
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
              Riceverai una notifica di conferma con i dettagli dell'appuntamento all'indirizzo indicato.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
