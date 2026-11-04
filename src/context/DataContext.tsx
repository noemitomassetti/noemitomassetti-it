import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { auth } from '@/lib/firebase';
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  User as FirebaseUser,
} from 'firebase/auth';

export interface StorageDiagnosticInfo {
  mode: 'development_local' | 'firestore_persistent';
  isProductionGuaranteed: boolean;
  schemaVersion: string;
  storagePath: string;
  note: string;
}

export interface NoeTomClient {
  id: string;
  name: string;
  email: string;
  locale: string;
  country: string;
  retentionMonths: number;
  createdAt: string;
}

export interface NoeTomRequest {
  id: string;
  leadId?: string;
  clientName: string;
  clientEmail: string;
  serviceId: string;
  locale: string;
  engagementType: string;
  description: string;
  status: 'received' | 'needs_info' | 'quoted' | 'accepted' | 'in_progress' | 'delivered';
  createdAt: string;
}

export interface NoeTomAgreement {
  id: string;
  clientId: string;
  clientName: string;
  type: 'hourly_package_10' | 'hourly_package_20' | 'hourly_ad_hoc' | 'fixed_one_off' | 'monthly_retainer';
  scope: string;
  totalHoursCap: number;
  usedHours: number;
  rateOrFee: number;
  currency: 'EUR';
  status: 'draft' | 'active' | 'paused' | 'completed';
  approvedByOwner: boolean;
  createdAt: string;
}

export interface NoeTomTimeEntry {
  id: string;
  agreementId?: string;
  clientId: string;
  taskDescription: string;
  hours: number;
  date: string;
  isBillable: boolean;
  reviewedByOwner: boolean;
  createdAt: string;
}

export interface NoeTomDelivery {
  id: string;
  agreementId?: string;
  title: string;
  recipient: string;
  version: number;
  notes?: string;
  approvedByOwner: boolean;
  approvedAt?: string;
  status: 'draft' | 'pending_approval' | 'approved' | 'delivered';
  deliveredAt?: string;
  createdAt: string;
}

export interface NoeTomOperationalState {
  uid: string;
  email: string;
  role: string;
  displayName?: string;
  clients: NoeTomClient[];
  requests: NoeTomRequest[];
  agreements: NoeTomAgreement[];
  timeEntries: NoeTomTimeEntry[];
  deliveries: NoeTomDelivery[];
  _storageInfo?: StorageDiagnosticInfo;
}

export interface DataContextValue {
  user: FirebaseUser | { uid: string; email: string; displayName?: string } | null;
  authLoading: boolean;
  isDevModeAuth: boolean;
  error: string | null;
  data: NoeTomOperationalState | null;
  loginWithGoogle: () => Promise<void>;
  loginDevPreview: () => void;
  logout: () => Promise<void>;
  refreshData: () => Promise<void>;
  logHoursOnPackage: (agreementId: string, taskDescription: string, hours: number) => Promise<{ remainingHours: number }>;
  approveDelivery: (deliveryId: string) => Promise<void>;
  deliverWork: (deliveryId: string) => Promise<void>;
  runAiQaReview: (sourceText: string, targetText: string, glossary?: Record<string, string>) => Promise<{
    isApproved: boolean;
    issues: string[];
    glossaryMatches: Array<{ term: string; expected: string; found: boolean }>;
  }>;
  exportBackup: () => Promise<string>;
}

const DataContext = createContext<DataContextValue | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<DataContextValue['user']>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [isDevModeAuth, setIsDevModeAuth] = useState(false);
  const [error, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState<NoeTomOperationalState | null>(null);

  // Helper to obtain bearer token
  const getAuthToken = useCallback(async (): Promise<string> => {
    if (isDevModeAuth) throw new Error('Accesso demo senza credenziali reali: API privata disabilitata.');
    if (user && 'getIdToken' in user && typeof user.getIdToken === 'function') {
      return user.getIdToken();
    }
    throw new Error('Accesso Google necessario per le operazioni private.');
  }, [user, isDevModeAuth]);

  // Fetch operational data from API
  const refreshData = useCallback(async () => {
    setErrorMessage(null);
    try {
      const token = await getAuthToken();
      const res = await fetch('/api/data/all', {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      });

      const contentType = res.headers.get('content-type') || '';
      if (!contentType.includes('application/json')) {
        const previewText = (await res.text()).slice(0, 100);
        throw new Error(
          `Risposta del server non valida (HTTP ${res.status}, Content-Type: ${contentType}). Testo ricevuto: "${previewText}..."`
        );
      }

      if (res.status === 401) {
        throw new Error('Accesso non autorizzato o sessione scaduta.');
      }

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || `Errore server HTTP ${res.status}`);
      }

      const payload = await res.json();
      setData(payload);
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      console.error('[DataContext] Errore caricamento dati operativi:', msg);
      setErrorMessage(msg);
    }
  }, [getAuthToken]);

  // Firebase auth state listener
  useEffect(() => {
    let mounted = true;
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!mounted) return;
      if (firebaseUser) {
        setUser(firebaseUser);
        setIsDevModeAuth(false);
        setAuthLoading(false);
      } else {
        if (!isDevModeAuth) {
          setUser(null);
          setData(null);
        }
        setAuthLoading(false);
      }
    });

    return () => {
      mounted = false;
      unsubscribe();
    };
  }, [isDevModeAuth]);

  // Load data once user is set
  useEffect(() => {
    if (user) {
      refreshData();
    }
  }, [user, refreshData]);

  const loginWithGoogle = async () => {
    setErrorMessage(null);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setIsDevModeAuth(false);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Autenticazione Google non riuscita.';
      console.warn('Google Sign-in failed (common inside sandboxed iframe):', msg);
      setErrorMessage(
        'Autenticazione Google non disponibile in questa anteprima. Non è consentito bypassare l’accesso con token dimostrativi.'
      );
    }
  };

  const loginDevPreview = () => {
    if (!import.meta.env.DEV) {
      setErrorMessage('Accesso dimostrativo disabilitato in produzione.');
      return;
    }
    setErrorMessage(null);
    setIsDevModeAuth(true);
    setUser({
      uid: 'owner_noemi',
      email: 'noemitom@gmail.com',
      displayName: 'Noemi Tomassetti (Test & Sviluppo)',
    });
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch {
      // Ignore
    }
    setUser(null);
    setData(null);
    setIsDevModeAuth(false);
  };

  const logHoursOnPackage = async (agreementId: string, taskDescription: string, hours: number) => {
    const token = await getAuthToken();
    const res = await fetch(`/api/agreements/${agreementId}/log-time`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ taskDescription, hours }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Errore HTTP ${res.status}`);
    }

    const result = await res.json();
    await refreshData();
    return { remainingHours: result.remainingHours };
  };

  const approveDelivery = async (deliveryId: string) => {
    const token = await getAuthToken();
    const res = await fetch(`/api/deliveries/${deliveryId}/approve`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Errore HTTP ${res.status}`);
    }

    await refreshData();
  };

  const deliverWork = async (deliveryId: string) => {
    const token = await getAuthToken();
    const res = await fetch(`/api/deliveries/${deliveryId}/deliver`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Errore HTTP ${res.status}`);
    }

    await refreshData();
  };

  const runAiQaReview = async (sourceText: string, targetText: string, glossary: Record<string, string> = {}) => {
    const token = await getAuthToken();
    const res = await fetch('/api/ai/qa-review', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ sourceText, targetText, glossary }),
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Errore HTTP ${res.status}`);
    }

    return await res.json();
  };

  const exportBackup = async () => {
    const token = await getAuthToken();
    const res = await fetch('/api/backup/export', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Errore HTTP ${res.status}`);
    }

    const payload = await res.json();
    return payload.backupFile as string;
  };

  return (
    <DataContext.Provider
      value={{
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useData(): DataContextValue {
  const ctx = useContext(DataContext);
  if (!ctx) {
    throw new Error('useData must be used within a DataProvider');
  }
  return ctx;
}
