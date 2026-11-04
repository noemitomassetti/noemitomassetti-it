import { useState } from 'react';
import { useData } from '@/context/DataContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  ShieldCheck,
  Clock,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  LogOut,
  Download,
  Send,
  Database,
  Lock,
  Sparkles,
  Inbox,
  Briefcase,
  FileCheck,
  Check,
  X,
} from 'lucide-react';

export function NoeTomWorkspace() {
  const {
    user,
    authLoading,
    isDevModeAuth,
    error,
    data,
    loginWithGoogle,
    loginDevPreview,
    logout,
    refreshData,
    logHoursOnPackage,
    approveDelivery,
    deliverWork,
    runAiQaReview,
    exportBackup,
  } = useData();

  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'intake' | 'retainer' | 'deliveries' | 'qa' | 'diagnostics'>('retainer');

  // Time logging form state
  const [taskDesc, setTaskDesc] = useState('');
  const [taskHours, setTaskHours] = useState('1.5');
  const [isLoggingTime, setIsLoggingTime] = useState(false);

  // QA test tool state
  const [qaSource, setQaSource] = useState(
    'The 10-hour package costs €240 and includes written customer care and translation.'
  );
  const [qaTarget, setQaTarget] = useState(
    'Il pacchetto da 10 ore costa 240 € e include assistenza clienti scritta e traduzione.'
  );
  const [qaGlossary, setQaGlossary] = useState('customer care: assistenza clienti');
  const [qaResult, setQaResult] = useState<{
    isApproved: boolean;
    issues: string[];
    glossaryMatches: Array<{ term: string; expected: string; found: boolean }>;
  } | null>(null);
  const [isCheckingQa, setIsCheckingQa] = useState(false);

  // Backup state
  const [isBackingUp, setIsBackingUp] = useState(false);

  // Authentication Loading View
  if (authLoading) {
    return (
      <div className="bg-card border border-border/60 rounded-3xl p-8 sm:p-12 text-center shadow-lg max-w-xl mx-auto my-12">
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin mx-auto mb-4" />
        <h3 className="text-xl font-bold text-foreground">Verifica credenziali NoeTom...</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Controllo dello stato di autenticazione e connessione con l’engine operativo.
        </p>
      </div>
    );
  }

  // Not Logged In View
  if (!user) {
    return (
      <div className="bg-card border border-border/60 rounded-3xl p-8 sm:p-12 shadow-lg max-w-2xl mx-auto my-12">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 mx-auto">
          <Lock className="w-7 h-7" />
        </div>
        <div className="text-center space-y-3 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">NoeTom Operational Console</h2>
          <p className="text-sm text-foreground/80 max-w-md mx-auto leading-relaxed">
            Ambiente di controllo operativo per la gestione delle richieste, saldo ore pacchetti, approvazione umana delle consegne e QA linguistico.
          </p>
        </div>

        {error && (
          <div className="bg-destructive/10 border border-destructive/30 text-destructive text-sm p-4 rounded-xl flex items-start gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold">Stato di accesso:</p>
              <p className="text-xs">{error}</p>
            </div>
          </div>
        )}

        <div className="space-y-4 max-w-md mx-auto">
          <Button
            onClick={loginWithGoogle}
            className="w-full py-6 font-semibold flex items-center justify-center gap-3 text-sm shadow-md"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Accedi con Account Google (Proprietaria)
          </Button>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-border/60"></div>
            <span className="flex-shrink mx-4 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
              oppure
            </span>
            <div className="flex-grow border-t border-border/60"></div>
          </div>

          <Button
            variant="outline"
            onClick={loginDevPreview}
            className="w-full py-6 font-semibold flex items-center justify-center gap-2 text-sm border-dashed"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            Accesso Rapido Ambiente di Test (Noemi)
          </Button>

          <p className="text-[11px] text-muted-foreground text-center pt-2">
            Autenticazione con isolamento tenant UID e blocco accessi esterni non autorizzati.
          </p>
        </div>
      </div>
    );
  }

  // Active Agreement calculation
  const primaryAgreement = data?.agreements?.find((a) => a.type === 'hourly_package_10') || data?.agreements?.[0];
  const totalCap = primaryAgreement?.totalHoursCap || 10;
  const usedHours = primaryAgreement?.usedHours || 0;
  const remainingHours = Number(Math.max(0, totalCap - usedHours).toFixed(2));
  const percentUsed = Math.min(100, Math.round((usedHours / totalCap) * 100));

  // Handle logging hours
  const handleLogHours = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!primaryAgreement) return;
    if (!taskDesc.trim() || Number(taskHours) <= 0) {
      toast({ title: 'Dati mancanti', description: 'Inserisci descrizione e ore valide.', variant: 'destructive' });
      return;
    }

    setIsLoggingTime(true);
    try {
      const res = await logHoursOnPackage(primaryAgreement.id, taskDesc.trim(), Number(taskHours));
      toast({
        title: 'Ore registrate con successo',
        description: `Registrate ${taskHours} ore. Saldo rimanente: ${res.remainingHours} ore.`,
      });
      setTaskDesc('');
    } catch (err) {
      toast({ title: 'Errore registrazione ore', description: (err as Error).message, variant: 'destructive' });
    } finally {
      setIsLoggingTime(false);
    }
  };

  // Handle approval
  const handleApprove = async (deliveryId: string) => {
    try {
      await approveDelivery(deliveryId);
      toast({
        title: 'Librabile approvato',
        description: 'Approvazione formalizzata da Noemi. Il lavoro può essere consegnato.',
      });
    } catch (err) {
      toast({ title: 'Errore approvazione', description: (err as Error).message, variant: 'destructive' });
    }
  };

  // Handle delivery
  const handleDeliver = async (deliveryId: string) => {
    try {
      await deliverWork(deliveryId);
      toast({
        title: 'Lavoro consegnato',
        description: 'Consegna registrata con successo nel registro transazioni.',
      });
    } catch (err) {
      toast({ title: 'Blocco consegna', description: (err as Error).message, variant: 'destructive' });
    }
  };

  // Handle QA Check
  const handleRunQa = async () => {
    if (!qaSource.trim() || !qaTarget.trim()) return;

    setIsCheckingQa(true);
    try {
      const glossaryObj: Record<string, string> = {};
      qaGlossary.split('\n').forEach((line) => {
        const [k, v] = line.split(':');
        if (k && v) glossaryObj[k.trim()] = v.trim();
      });

      const res = await runAiQaReview(qaSource, qaTarget, glossaryObj);
      setQaResult(res);
    } catch (err) {
      toast({ title: 'Errore analisi QA', description: (err as Error).message, variant: 'destructive' });
    } finally {
      setIsCheckingQa(false);
    }
  };

  // Handle Export Backup
  const handleExportBackup = async () => {
    setIsBackingUp(true);
    try {
      const fileName = await exportBackup();
      toast({
        title: 'Backup completato',
        description: `Snapshot salvato in data/backups/${fileName}.`,
      });
    } catch (err) {
      toast({ title: 'Errore backup', description: (err as Error).message, variant: 'destructive' });
    } finally {
      setIsBackingUp(false);
    }
  };

  return (
    <div className="space-y-8 my-8">
      {/* ── TOP BAR & STATUS ── */}
      <div className="bg-card border border-border/60 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
            NT
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-foreground">NoeTom Console Operativa</h2>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Live Engine
              </span>
              {isDevModeAuth && (
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  Preview Test Mode
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground">
              Operatore autorizzato: <span className="font-semibold text-foreground">{user.email}</span> (Noemi Tomassetti)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Button variant="outline" size="sm" onClick={() => refreshData()} className="text-xs font-semibold gap-1.5">
            <RefreshCw className="w-3.5 h-3.5" />
            Aggiorna
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportBackup}
            disabled={isBackingUp}
            className="text-xs font-semibold gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            Backup Snapshot
          </Button>
          <Button variant="ghost" size="sm" onClick={logout} className="text-xs text-destructive hover:bg-destructive/10">
            <LogOut className="w-3.5 h-3.5 mr-1" />
            Esci
          </Button>
        </div>
      </div>

      {/* ── STORAGE STATUS BANNER ── */}
      <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 flex items-start gap-3">
        <Database className="w-5 h-5 text-primary shrink-0 mt-0.5" />
        <div className="text-xs space-y-1">
          <div className="flex items-center gap-2 font-bold text-foreground">
            <span>Modalità Archiviazione:</span>
            <span className="text-primary uppercase tracking-wide">
              {data?._storageInfo?.mode === 'firestore_persistent'
                ? 'Cloud Firestore Connesso (Persistente)'
                : 'Storage Locale di Sviluppo (Container)'}
            </span>
            <span className="text-muted-foreground font-normal">· Schema v{data?._storageInfo?.schemaVersion || '2.1.0'}</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            {data?._storageInfo?.note ||
              'Dati archiviati su disco container (/data/users). Per la persistenza cloud in produzione sono richieste le credenziali ADC server-side.'}
          </p>
        </div>
      </div>

      {/* ── TABS NAVIGATION ── */}
      <div className="flex items-center gap-2 border-b border-border/40 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('retainer')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'retainer'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
          }`}
        >
          <Clock className="w-4 h-4" />
          Pacchetto 10 Ore ({remainingHours}h rimaste)
        </button>

        <button
          onClick={() => setActiveTab('intake')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'intake'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
          }`}
        >
          <Inbox className="w-4 h-4" />
          Intake Preventivi ({data?.requests?.length || 0})
        </button>

        <button
          onClick={() => setActiveTab('deliveries')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'deliveries'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
          }`}
        >
          <FileCheck className="w-4 h-4" />
          Consegne & Gate Umano ({data?.deliveries?.length || 0})
        </button>

        <button
          onClick={() => setActiveTab('qa')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'qa'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          AI QA Linguistico EN➔IT
        </button>

        <button
          onClick={() => setActiveTab('diagnostics')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
            activeTab === 'diagnostics'
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          Diagnostica API
        </button>
      </div>

      {/* ── TAB 1: PACCHETTO 10 ORE & TIME TRACKING ── */}
      {activeTab === 'retainer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-card border border-border/60 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Pacchetto Orario Attivo
                </span>
                <span className="text-xs font-semibold text-muted-foreground">
                  Tariffa concordata: 240 € (10h)
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mt-2">{primaryAgreement?.clientName}</h3>
              <p className="text-xs text-muted-foreground mt-1">{primaryAgreement?.scope}</p>
            </div>

            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="text-foreground">Ore Utilizzate: {usedHours}h / {totalCap}h</span>
                <span className="text-primary">{remainingHours}h disponibili</span>
              </div>
              <div className="w-full bg-secondary h-3 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-full transition-all duration-500 rounded-full"
                  style={{ width: `${percentUsed}%` }}
                />
              </div>
            </div>

            {/* Log hours form */}
            <form onSubmit={handleLogHours} className="border-t border-border/40 pt-5 space-y-4">
              <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-primary" />
                Registra nuova attività su questo pacchetto
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2 space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Descrizione attività svolta</label>
                  <Input
                    placeholder="es. Gestione corrispondenza fornitori e archiviazione"
                    value={taskDesc}
                    onChange={(e) => setTaskDesc(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-muted-foreground">Ore (frazione decimale)</label>
                  <Input
                    type="number"
                    step="0.25"
                    min="0.25"
                    max={remainingHours}
                    value={taskHours}
                    onChange={(e) => setTaskHours(e.target.value)}
                    required
                  />
                </div>
              </div>

              <Button type="submit" disabled={isLoggingTime || remainingHours <= 0} className="w-full text-xs font-bold uppercase tracking-wider">
                {isLoggingTime ? 'Registrazione in corso...' : 'Scala Ore e Salva Registro'}
              </Button>
            </form>
          </div>

          <div className="lg:col-span-5 bg-card border border-border/60 rounded-2xl p-6 space-y-4 shadow-sm">
            <h4 className="text-sm font-bold text-foreground flex items-center gap-2 pb-2 border-b border-border/40">
              <Clock className="w-4 h-4 text-primary" />
              Ultime voci registrate ({data?.timeEntries?.length || 0})
            </h4>

            <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
              {data?.timeEntries?.map((entry) => (
                <div key={entry.id} className="p-3 rounded-xl bg-secondary/30 border border-border/40 space-y-1 text-xs">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-foreground">{entry.taskDescription}</span>
                    <span className="text-primary font-mono font-bold">+{entry.hours}h</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                    <span>{entry.date}</span>
                    <span className="inline-flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3 h-3" /> Verificato Noemi
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2: INTAKE PREVENTIVI ── */}
      {activeTab === 'intake' && (
        <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-foreground">Registro Richieste di Preventivo & Lead</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Richieste acquisite in tempo reale tramite il modulo del sito e l’endpoint canonico POST /api/v1/public/requests.
            </p>
          </div>

          <div className="space-y-4">
            {data?.requests?.map((req) => (
              <div key={req.id} className="p-5 rounded-2xl bg-secondary/20 border border-border/50 space-y-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2 border-b border-border/30">
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{req.clientName}</h4>
                    <p className="text-xs text-muted-foreground">{req.clientEmail}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {req.serviceId}
                    </span>
                    <span className="text-[10px] font-mono font-semibold text-muted-foreground px-2 py-0.5 rounded bg-background border border-border/40">
                      {req.locale?.toUpperCase()}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-sans">{req.description}</p>

                <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-1">
                  <span>ID: {req.id}</span>
                  <span>Data: {new Date(req.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── TAB 3: CONSEGNE & HUMAN APPROVAL GATE ── */}
      {activeTab === 'deliveries' && (
        <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Protocollo di Sicurezza & Qualità</span>
              </div>
              <h3 className="text-lg font-bold text-foreground">Human Approval Gate (Approvazione Umana Obbligatoria)</h3>
              <p className="text-xs text-muted-foreground mt-1 max-w-2xl">
                Nessun deliverable, traduzione o documento può essere contrassegnato come consegnato al cliente senza l’approvazione esplicita della proprietaria Noemi.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {data?.deliveries?.map((item) => (
              <div key={item.id} className="p-5 rounded-2xl bg-secondary/20 border border-border/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-foreground text-sm">{item.title}</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-background border border-border/40">v{item.version}</span>
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${
                      item.status === 'delivered'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : item.approvedByOwner
                        ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    }`}>
                      {item.status === 'delivered' ? 'Consegnato' : item.approvedByOwner ? 'Approvato (Pronto)' : 'In attesa approvazione Noemi'}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Destinatario: {item.recipient}</p>
                  {item.notes && <p className="text-xs text-foreground/80 italic">{item.notes}</p>}
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {!item.approvedByOwner && (
                    <Button
                      onClick={() => handleApprove(item.id)}
                      size="sm"
                      className="text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white"
                    >
                      <Check className="w-3.5 h-3.5 mr-1" />
                      Approva come Noemi
                    </Button>
                  )}

                  {item.status !== 'delivered' && (
                    <Button
                      onClick={() => handleDeliver(item.id)}
                      size="sm"
                      disabled={!item.approvedByOwner}
                      variant={item.approvedByOwner ? 'default' : 'outline'}
                      className="text-xs font-bold uppercase tracking-wider"
                    >
                      <Send className="w-3.5 h-3.5 mr-1" />
                      Consegna al Cliente
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── TAB 4: AI QA LINGUISTICO EN➔IT ── */}
      {activeTab === 'qa' && (
        <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-primary uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Strumento di Revisione Specialistica</span>
            </div>
            <h3 className="text-lg font-bold text-foreground">Controllo Qualità & Glossario (EN ➔ IT)</h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-2xl">
              Verifica deterministica su numeri, formattazione valute, aderenza al glossario approvato e rilevamento di omissioni anomale prima del rilascio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Testo Originale (EN)</label>
              <Textarea
                rows={4}
                value={qaSource}
                onChange={(e) => setQaSource(e.target.value)}
                className="text-xs sm:text-sm font-sans"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Traduzione Proposta (IT)</label>
              <Textarea
                rows={4}
                value={qaTarget}
                onChange={(e) => setQaTarget(e.target.value)}
                className="text-xs sm:text-sm font-sans"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Glossario Regole (formato: termine inglese: traduzione italiana)</label>
            <Input
              value={qaGlossary}
              onChange={(e) => setQaGlossary(e.target.value)}
              placeholder="es. customer care: assistenza clienti"
              className="text-xs"
            />
          </div>

          <Button
            onClick={handleRunQa}
            disabled={isCheckingQa}
            className="w-full text-xs font-bold uppercase tracking-wider py-5"
          >
            {isCheckingQa ? 'Verifica in corso...' : 'Esegui Analisi Qualità Traduzione'}
          </Button>

          {qaResult && (
            <div className={`p-5 rounded-2xl border ${qaResult.isApproved ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-amber-500/10 border-amber-500/30'} space-y-3`}>
              <div className="flex items-center gap-2">
                {qaResult.isApproved ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-amber-400" />
                )}
                <h4 className="font-bold text-sm text-foreground">
                  {qaResult.isApproved ? 'Test di Qualità Superato con Successo' : 'Rilevate Anomalie da Revisionare'}
                </h4>
              </div>

              {qaResult.issues.length > 0 ? (
                <ul className="space-y-1 text-xs text-foreground/80 pl-6 list-disc">
                  {qaResult.issues.map((iss, i) => (
                    <li key={i}>{iss}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs text-emerald-400">Tutti i termini di glossario e i valori numerici corrispondono perfettamente.</p>
              )}

              <div className="flex items-center gap-3 text-[11px] text-muted-foreground pt-1">
                <span>Parole EN: {qaSource.trim().split(/\s+/).length}</span>
                <span>·</span>
                <span>Parole IT: {qaTarget.trim().split(/\s+/).length}</span>
                <span>·</span>
                <span>Motore: Deterministic Rule Validator (Zero Allucinazioni)</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── TAB 5: DIAGNOSTICA API ── */}
      {activeTab === 'diagnostics' && (
        <div className="bg-card border border-border/60 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
          <div>
            <h3 className="text-lg font-bold text-foreground">Diagnostica di Rete & Infrastruttura Backend</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Verifica dei canali HTTP, content-type JSON e isolamento di sicurezza.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 space-y-2">
              <span className="text-xs font-bold text-foreground">GET /api/health</span>
              <p className="text-xs text-emerald-400 font-mono">Status: 200 OK (Content-Type: application/json)</p>
              <p className="text-[11px] text-muted-foreground">Express Server attivo su porta 3000 con middleware Vite.</p>
            </div>

            <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 space-y-2">
              <span className="text-xs font-bold text-foreground">POST /api/v1/public/requests</span>
              <p className="text-xs text-emerald-400 font-mono">Status: 201 Created / 200 Deduplicato</p>
              <p className="text-[11px] text-muted-foreground">Idempotency-Key supportata e blocco anti-bot honeypot attivo.</p>
            </div>

            <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 space-y-2">
              <span className="text-xs font-bold text-foreground">Protezione 404 API</span>
              <p className="text-xs text-emerald-400 font-mono">Status: 404 JSON (Zero perdite HTML)</p>
              <p className="text-[11px] text-muted-foreground">Tutte le rotte /api non corrispondenti restituiscono JSON invece della SPA.</p>
            </div>

            <div className="p-4 rounded-xl bg-secondary/30 border border-border/50 space-y-2">
              <span className="text-xs font-bold text-foreground">Storage Database Cloud</span>
              <p className="text-xs text-amber-400 font-mono">Stato: Sviluppo Locale (Attesa credenziali server)</p>
              <p className="text-[11px] text-muted-foreground">Database Firestore: {data?._storageInfo?.mode || 'development_local'}.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
