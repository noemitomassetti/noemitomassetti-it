# RELEASE CANDIDATE — noemitomassetti.it — 29 ottobre 2026

**Stato: CANDIDATA AL COLLAUDO (NON PUBBLICARE ANCORA).** Il codice è stato modificato offline. Nessun aggiornamento è stato distribuito su Vercel, Google AI Studio, GitHub o Firebase. Nessun costo API è stato attivato.

## Modifiche prioritarie e verifiche
- Pubblico separato dal gestionale privato: in `src/App.tsx` non viene più montato `DataProvider` né l'area `Workspace`. Il backend operativo deve vivere esclusivamente nell'app NoeTom e mai essere pubblicato insieme al sito statico.
- Scheda pubblica NoeTom: non espone più il form di early access SaaS (non autorizzato dai codici ATECO dichiarati) né etichette di funzioni già disponibili senza prove; indirizza alle richieste scritte dei servizi professionali.
- Modulo preventivi: adapter HTTPS con identificatore opaco, nessun fallback su errori incerti, conferme backend rigorose; email FormSubmit come canale statico da confermare. Errori con link email diretto. Newsletter non configurata rimossa dal form pubblico.
- Regole locali Firestore del SITO impostate a deny-all, perché la versione pubblica non necessita più di scritture dirette. **Non distribuirle al database NoeTom**: policy e database/permessi delle due app devono essere distinti.
- Protezioni `vercel.json` introdotte: `nosniff`, referrer-policy, X-Frame-Options, permissions-policy. Nessuna CSP impostata arbitrariamente senza audit effettivo delle risorse.
- Informativa cookie e privacy: rimossi alcuni assoluti non dimostrati (anonimato Analytics, cifratura end-to-end, 2FA e appuntamento obbligatorio). **Bozza editoriale da confermare** quanto a fornitori, basi giuridiche, retention e contratti.
- Non presenti nello ZIP di rilascio `data/users/owner_noemi.json` e `data/public_requests.json`, già esclusi anche dalla versione di sviluppo precedente.

## Test effettivamente eseguiti
- `node scripts/release-static-check.cjs`: 110 sorgenti TS/TSX analizzati sintatticamente, controllo struttura pubblica, regole e JSON — PASSATO (con runtime TypeScript globale del laboratorio).
- `node scripts/site-adapter-runtime-checks.cjs`: 16 controlli isolati sul modulo richieste (successi, HTML anziché JSON, 409, 429, errori 500, HTTPS, idempotenza e no doppio invio) — PASSATO.
- `npm run build`, `npm run lint`, suite Vitest completa, test browser responsive/accessibilità, privacy in rete e verifiche reali della casella NON ESEGUITI: ambiente senza accesso al registry npm. Il fatto che i sorgenti vengano analizzati non prova che l'intera applicazione compili.

## Gate di rilascio che non possono essere saltati
1. Su Google AI Studio o in ambiente di sviluppo con dipendenze installate: `npm install`, `npm run build`, `npm run lint`, `npm test`, `npm run test:release`. Segnalare ogni errore, non promuovere il rilascio se restano errori bloccanti.
2. Verificare in browser: home, pagine IT/EN/FR/ES, link/menu mobile, servizio/localizzazione, portfolio, privacy/cookie, 404, accessibilità da tastiera e SEO. Verificare nel pannello Network che GA4 non parta prima di un consenso esplicito.
3. Con consenso della proprietaria, inviare UNA richiesta di test chiaramente marcata `TEST` tramite FormSubmit, verificare sia l'attivazione dell'indirizzo ricevente sia la consegna effettiva. Senza conferma, tenere un contatto `mailto` utilizzabile e non promuovere il form come completamente operativo. Verificare trasferimenti e condizioni dei fornitori terzi.
4. Accertare dati legali, prezzi, eventuali regole ATECO, testi portfolio (solo demo esplicitamente dichiarate), informazioni societarie e promesse di servizio. Revisione professionale privacy/fisco quando necessaria.
5. Prima di pubblicare verificare se il repository del sito online è sincronizzato automaticamente con GitHub/Vercel. Conservare backup della versione live, usare una preview deployment separata e approvare esplicitamente ogni publish.
6. Non configurare `VITE_API_BASE_URL` prima che l'app NoeTom disponga di un backend HTTPS sicuro e realmente persistente con API `/api/v1/public/requests` verificata. Mai tentare di collegare direttamente la porta locale Ollama 11434 da Internet.

## App NoeTom
Non è stato caricato qui il suo export ZIP aggiornato. Non sono stati modificati né collaudati i suoi file; l'app non può essere dichiarata pronta. Nell'altra conversazione sono state individuate lacune su Firebase Firestore, autenticazione server-side, storage di produzione e interfaccia API. Il passo minimo per procedere sul codice reale è esportare da Google AI Studio `NoeTom – Sviluppo e Test` come ZIP e caricarlo nella chat.

## Rientro in Google AI Studio con meno crediti
L'archivio ZIP di questo pacchetto è una copia esterna. Google AI Studio non dichiara un comando per sostituire in blocco il progetto esistente caricando un ZIP: il percorso ufficiale è sincronizzazione bidirezionale GitHub oppure correzione dei singoli file in Code. Evitare l'importazione come nuovo progetto quando si vuole mantenere storia e configurazioni attuali. Non usare un master prompt per ricostruire tutto da zero.
