# Noemi Tomassetti — revisione tecnica del sito
**Data:** 29 ottobre 2026  |  **Origine:** `noemitomassetti-it(3).zip`
**Stato:** COPIA DI SVILUPPO — NON PUBBLICATA, NON CERTIFICATA PRONTA PER PRODUZIONE.

## Lavoro effettivamente apportato al codice
1. API requests: il sito statico Vercel non presume più di avere un backend NoeTom; usa il provider FormSubmit solo se non è stata configurata esplicitamente una API NoeTom HTTPS. Se l'API esiste, invia lo schema canonico `clientName, clientEmail, description, serviceType`, con `X-Idempotency-Key` e nessun fallback dopo un esito ambiguo.
2. Conferme reali: solo JSON valido con `success=true`, `requestId`, `status=received` certifica la persistenza NoeTom. HTTP 200 con HTML/false o 409 privo di ID non è successo. Provider email conferma soltanto accettazione da parte del servizio, non la consegna nella casella.
3. Autenticazione: il server del sito conteneva accettazione di token non verificati e un percorso `mock-owner-token`. Le API private ora rispondono 503 in assenza di una vera verifica server-side; la dashboard interna non è esposta come pagina utilizzabile nel sito pubblico.
4. Persistenza: l'intake pubblico nel server di sviluppo usa file JSON non affidabili per produzione. In NODE_ENV=production risponde 503 invece di accettare richieste che potrebbero andare perse. `getStorageStatus()` non considera più la sola presenza di variabili credenziali una prova di connessione Firestore.
5. Flusso commerciale: gli ex pulsanti `BookingButton` ora portano alla richiesta scritta nelle quattro lingue. Calendario Firestore per call non più invocato da quel componente. Revisione di parte dei testi IT/EN/FR/ES per il percorso asincrono. Verificare editorialmente ogni pagina prima della pubblicazione.
6. SEO: corretti i collegamenti hreflang iniziali, le URL della sitemap (44 percorsi presenti nell'architettura), le immagini OG assolute e la protezione meta `noindex` in host di anteprima dopo l'esecuzione JavaScript. L'indicizzazione della SPA richiede ancora test crawler; JavaScript noindex non è una barriera certa per tutti i crawler.
7. CORS: eliminati controlli permissivi tramite `includes('localhost')` e suffissi cloud generici.
8. Lista informativa NoeTom: non mostra più successo se il provider non conferma l'accettazione.
9. I due file `data/users/owner_noemi.json` e `data/public_requests.json` presenti nello ZIP originale NON sono stati inclusi nel pacchetto corretto per evitare diffusione accidentale di informazioni personali/dimostrative.

## Verifiche realmente eseguite
- 16/16 controlli runtime isolati dell'adapter richieste passati (Node.js e codice TS compilato per prova).
- 108 file TS/TSX analizzati sintatticamente: nessun errore di parsing.
- Sitemap rigenerata da percorsi definiti nel progetto: 44 URL.
- Verifiche statiche: nessuna decodifica di JWT non verificati rimasta in `server.ts`; API private bloccate; promessa ottimistica del modulo early-access rimossa.

**Non eseguiti:** `npm run build`, `npm run lint`, test Vitest completi, test reali browser/mobile, E2E invio email, verifica DNS/Vercel/Firebase, test Firestore Emulator, revisione legale. Dipendenze npm non installabili nell'ambiente di analisi per accesso registry non disponibile; non si dichiara compilazione generale riuscita.

## Blocchi da risolvere PRIMA di sostituire il sito pubblico
- Verificare la consegna reale dei moduli alla casella e la configurazione del provider FormSubmit con prova autorizzata; il provider è esterno, considerare privacy e informativa.
- Verificare modulo newsletter/early access e se mantenerlo (app ad uso privato; nessun SaaS commercializzato).
- App NoeTom separata: occorre ricevere l'ultimo ZIP del suo codice, completare Firebase Auth con verifica token lato server, storage persistente, permessi owner, contratto API, test HTTPS e la sua pubblicazione protetta. NON impostare VITE_API_BASE_URL finché il backend non è collaudato.
- Confermare i servizi realmente vendibili con gli attuali ATECO, le tariffe, testi, condizioni e dati fiscali con professionisti competenti: non si rilascia certificazione legale.
- Revisionare ogni pagina, comprese le pagine portfolio, per testi inattuali, riferimenti alle call, conformità privacy/consenso, accessibilità, layout e menu mobile. Alcuni riferimenti storici alle chiamate e ai tempi potrebbero ancora rimanere in contenuti descrittivi.
- Nel progetto Firebase le regole `firestore.rules` originali contengono permessi di creazione anonima per vecchie prenotazioni; **non sono state applicate né modificate sulla console Firebase** e richiedono audit specifico prima di qualsiasi riattivazione calendario.
- Controllare che il progetto Vercel esistente NON si sincronizzi automaticamente con GitHub prima di caricare file nuovi. Nessun deploy è stato effettuato.

## Come si porta avanti con pochi crediti Google AI Studio
- Manteniamo due repository distinti: sito e app NoeTom. Nessuna rigenerazione totale.
- Questo ZIP è una copia sviluppata esternamente. Google AI Studio documenta importazione/sincronizzazione tramite GitHub, non un semplice «carica ZIP e sostituisci progetto». Prima di una sincronizzazione controllare file cambiati, backup e stato del repository; non usare prompt generici.
- Ricevere `NoeTom – Sviluppo e Test` ZIP: quindi procedere con il contratto comune, diff, test e un solo handoff operativo mirato.
- Per il sito Vercel usare la modalità email SOLO quando confermata reale e sostenibile; backend NoeTom separato solo dopo collaudo.

**Decisione di rilascio:** NON PRONTO PER LA PUBBLICAZIONE AUTORIZZATA; pronto come base di sviluppo e test, soggetto ai blocchi sopra.
