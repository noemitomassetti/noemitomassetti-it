import { useState, useEffect, useCallback } from "react";
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
import { format, addDays, startOfDay, isBefore, isAfter } from "date-fns";
import { it } from "date-fns/locale";
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ChevronLeft,
} from "lucide-react";

const LOCATION_ID = "QIS5mDvq2kDJjK2pDMuf";
const CALENDAR_ID = "DnZk8niUvdwRiUXJEMaf";
const SLOTS_API_URL = `https://backend.leadconnectorhq.com/calendars/${CALENDAR_ID}/free-slots`;
const BOOKING_API_URL = "https://backend.leadconnectorhq.com/vibe-ai/booking/submit";

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
  const [availableSlots, setAvailableSlots] = useState<Record<string, { slots: string[] }>>({});
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState<string | null>(null);
  const [booking, setBooking] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [form, setForm] = useState<BookingFormState>(INITIAL_FORM);
  const { toast } = useToast();

  const today = startOfDay(new Date());
  const maxDate = addDays(today, 30);

  // Fetch free slots for the next 30 days
  const fetchSlots = useCallback(async () => {
    setLoadingSlots(true);
    setSlotsError(null);
    try {
      const start = today.getTime();
      const end = maxDate.getTime();
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Rome";

      const res = await fetch(`${SLOTS_API_URL}?startDate=${start}&endDate=${end}&timezone=${encodeURIComponent(tz)}`);
      if (!res.ok) {
        throw new Error(`Errore di comunicazione (${res.status})`);
      }
      const data = await res.json();
      setAvailableSlots(data);
    } catch (err) {
      console.error("Errore nel recupero degli slot:", err);
      setSlotsError("Impossibile caricare le disponibilità in questo momento. Riprova più tardi.");
    } finally {
      setLoadingSlots(false);
    }
  }, [today, maxDate]);

  useEffect(() => {
    if (open) {
      fetchSlots();
    } else {
      // Reset temporary states on close if not completed
      if (!bookingSuccess) {
        setSelectedSlot(null);
        setBookingError(null);
      }
    }
  }, [open, fetchSlots, bookingSuccess]);

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      // If closing after success, reset everything
      if (bookingSuccess) {
        setBookingSuccess(false);
        setDate(undefined);
        setSelectedSlot(null);
        setForm(INITIAL_FORM);
      }
    }
  };

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    setBookingError(null);

    if (!selectedSlot) {
      setBookingError("Seleziona prima una data e un orario.");
      return;
    }

    // Honeypot check
    if (form.website) {
      setOpen(false);
      return;
    }

    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim()) {
      setBookingError("Inserisci nome, cognome e un'email valida.");
      return;
    }

    setBooking(true);
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "Europe/Rome";
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
        phone: form.phone.trim() || "Non fornito",
        notes: form.notes.trim() || "Prenotazione call conoscitiva dal sito",
        selectedSlot,
        selectedTimezone: tz,
        sessionId,
      };

      const res = await fetch(BOOKING_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error(`Errore durante la conferma della prenotazione (${res.status})`);
      }

      const resData = await res.json();

      if (resData.appointmentId || resData.id || resData.success || res.ok) {
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
  const slotsForDate = dateKey ? availableSlots[dateKey]?.slots || [] : [];

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

      <DialogContent className="sm:max-w-[540px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="uppercase text-primary text-xl font-bold tracking-wide">
            PRENOTA UNA VIDEOCALL GRATUITA (30 MIN)
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground mt-1">
            Una chiacchierata senza impegno per analizzare la tua attività e capire quali compiti puoi delegare da subito per recuperare tempo.
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
                Il tuo appuntamento è stato registrato con successo. Ti ho inviato un'email di conferma con il link della videocall all'indirizzo{" "}
                <strong className="text-foreground">{form.email}</strong>.
              </p>
              {selectedSlot && (
                <div className="inline-flex items-center gap-2 bg-secondary/30 border border-border px-4 py-2 rounded-lg text-sm font-semibold text-primary mt-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{format(new Date(selectedSlot), "dd MMMM yyyy 'alle' HH:mm", { locale: it })}</span>
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
              <div className="bg-destructive/10 border border-destructive/30 text-destructive text-sm p-3 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{slotsError}</span>
              </div>
            )}

            <div className="flex justify-center bg-card border rounded-xl p-2 shadow-sm">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => setDate(newDate)}
                locale={it}
                disabled={(d) => isBefore(startOfDay(d), today) || isAfter(startOfDay(d), maxDate)}
                className="rounded-md"
              />
            </div>

            {date && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>
                    Orari disponibili per {format(date, "EEEE d MMMM", { locale: it })}:
                  </span>
                </div>

                {loadingSlots ? (
                  <div className="flex items-center justify-center gap-2 py-6 text-sm text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                    <span>Caricamento disponibilità...</span>
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
                          onClick={() => setSelectedSlot(slot)}
                          className="hover:bg-primary hover:text-primary-foreground font-semibold transition-colors"
                        >
                          {timeString}
                        </Button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-4 px-3 bg-secondary/20 rounded-lg text-sm text-muted-foreground">
                    Nessun orario disponibile per questo giorno. Seleziona un'altra data.
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

            {/* Selected Slot Recap */}
            <div className="flex items-center justify-between bg-primary/10 border border-primary/20 p-3 rounded-xl">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CalendarIcon className="w-4 h-4 text-primary" />
                <span>
                  {format(new Date(selectedSlot), "EEEE d MMMM yyyy 'alle' HH:mm", { locale: it })}
                </span>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setSelectedSlot(null)}
                className="text-xs text-primary hover:text-primary hover:bg-primary/10 gap-1 h-8"
              >
                <ChevronLeft className="w-3 h-3" /> Modifica
              </Button>
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
                className="min-h-[80px] resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full uppercase font-semibold tracking-wide py-6 text-base"
              disabled={booking}
            >
              {booking ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  CONFERMA IN CORSO...
                </>
              ) : (
                "CONFERMA PRENOTAZIONE"
              )}
            </Button>

            <p className="text-xs text-foreground/50 text-center">
              Riceverai un'email di conferma con il link Google Meet / videocall.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
