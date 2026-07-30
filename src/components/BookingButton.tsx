import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { format, addDays, startOfDay, isBefore, isAfter, startOfMonth, endOfMonth } from "date-fns";
import { it } from "date-fns/locale";

const VIBE_API_URL = "https://backend.leadconnectorhq.com/vibe-ai";
const LOCATION_ID = "QIS5mDvq2kDJjK2pDMuf";
const CALENDAR_ID = "DnZk8niUvdwRiUXJEMaf";

export function BookingButton({ children, className, variant, size, asChild, onClick, ...props }: any) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [availableSlots, setAvailableSlots] = useState<Record<string, { slots: string[] }>>({});
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [booking, setBooking] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(startOfMonth(new Date()));
  const { toast } = useToast();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
    website: ""
  });

  const fetchSlots = async (month: Date) => {
    setLoadingSlots(true);
    try {
      const start = Math.max(startOfMonth(month).getTime(), startOfDay(new Date()).getTime());
      const end = Math.min(endOfMonth(month).getTime(), addDays(new Date(), 30).getTime());
      
      if (start > end) {
        setLoadingSlots(false);
        return;
      }

      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const res = await fetch(`https://backend.leadconnectorhq.com/calendars/${CALENDAR_ID}/free-slots?startDate=${start}&endDate=${end}&timezone=${tz}`);
      const data = await res.json();
      setAvailableSlots(prev => ({ ...prev, ...data }));
    } catch (e) {
      console.error("Failed to fetch slots", e);
    }
    setLoadingSlots(false);
  };

  useEffect(() => {
    if (open) {
      fetchSlots(currentMonth);
    }
  }, [open, currentMonth]);

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;
    
    // Spam protection check
    if (form.website) {
      setOpen(false);
      return;
    }

    setBooking(true);
    try {
      const res = await fetch(`${VIBE_API_URL}/booking/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locationId: LOCATION_ID,
          calendarId: CALENDAR_ID,
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          notes: form.notes,
          selectedSlot,
          selectedTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          sessionId: crypto.randomUUID(),
        }),
      });
      if (!res.ok) throw new Error("Booking failed");
      toast({ title: "Prenotazione confermata!", description: "Riceverai un'email con i dettagli." });
      setOpen(false);
      setForm({ firstName: "", lastName: "", email: "", phone: "", notes: "", website: "" });
      setDate(undefined);
      setSelectedSlot(null);
    } catch (e) {
      toast({ title: "Errore", description: "Impossibile completare la prenotazione.", variant: "destructive" });
    }
    setBooking(false);
  };

  const slotsForDate = date ? availableSlots[format(date, "yyyy-MM-dd")]?.slots || [] : [];
  const today = startOfDay(new Date());
  const maxDate = addDays(today, 30);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {asChild ? children : (
          <Button variant={variant} size={size} className={className} onClick={onClick} {...props}>
            {children}
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="uppercase">PRENOTA UNA VIDEOCALL GRATUITA</DialogTitle>
        </DialogHeader>
        {!selectedSlot ? (
          <div className="flex flex-col gap-4 py-4">
            <div className="flex justify-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                locale={it}
                disabled={(d) => isBefore(startOfDay(d), today) || isAfter(startOfDay(d), maxDate)}
                onMonthChange={setCurrentMonth}
                className="rounded-md border"
              />
            </div>
            {date && (
              <div className="grid grid-cols-3 gap-2 mt-4">
                {loadingSlots ? (
                  <div className="col-span-3 text-center text-sm text-muted-foreground">Caricamento orari...</div>
                ) : slotsForDate.length > 0 ? (
                  slotsForDate.map(slot => (
                    <Button
                      key={slot}
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedSlot(slot)}
                    >
                      {format(new Date(slot), "HH:mm")}
                    </Button>
                  ))
                ) : (
                  <div className="col-span-3 text-center text-sm text-muted-foreground">Nessun orario disponibile</div>
                )}
              </div>
            )}
          </div>
        ) : (
          <form onSubmit={handleBook} className="space-y-4 py-4">
            <div className="flex items-center justify-between bg-secondary/20 p-3 rounded-lg">
              <span className="text-sm font-medium">
                {format(new Date(selectedSlot), "dd MMMM yyyy 'alle' HH:mm", { locale: it })}
              </span>
              <Button type="button" variant="ghost" size="sm" onClick={() => setSelectedSlot(null)}>Modifica</Button>
            </div>
            <div className="hidden" aria-hidden="true">
              <label htmlFor="booking-website">Website</label>
              <input type="text" id="booking-website" value={form.website || ""} onChange={e => setForm({...form, website: e.target.value})} tabIndex={-1} autoComplete="off" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="booking-firstName" className="text-sm font-medium">Nome *</label>
                <Input id="booking-firstName" required value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="booking-lastName" className="text-sm font-medium">Cognome *</label>
                <Input id="booking-lastName" required value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="booking-email" className="text-sm font-medium">Email *</label>
              <Input id="booking-email" type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="booking-phone" className="text-sm font-medium">Telefono</label>
              <Input id="booking-phone" type="tel" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="booking-notes" className="text-sm font-medium">Note</label>
              <Textarea id="booking-notes" value={form.notes} onChange={e => setForm({...form, notes: e.target.value})} />
            </div>
            <Button type="submit" className="w-full" disabled={booking}>
              {booking ? "Conferma in corso..." : "Conferma Prenotazione"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
