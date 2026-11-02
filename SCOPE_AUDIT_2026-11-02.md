# Audit perimetro professionale e anteprima — 2 novembre 2026

## Decisione della titolare (vincolante)
Assistente Virtuale Multilingue per segreteria organizzativa, back office operativo, assistenza ai **clienti già acquisiti**, corrispondenza professionale nelle lingue IT/EN/FR/ES, traduzione/localizzazione, contenuti digitali, archiviazione e ricerche **informative a supporto di incarichi**.

Non sono servizi offerti: amministrazione aziendale, supporto amministrativo, contabilità, registrazioni contabili, fatturazione, fiscalità, telemarketing, cold calls, lead generation, prospecting, ricerca contatti per acquisizione clienti, appointment setting commerciale, reclutamento di intervistati e compensi per appuntamenti/interviste.

I preventivi operativi sono ammessi, secondo le istruzioni dei clienti, **senza fatturazione o contabilità**.

## Modifiche concretamente implementate sul ramo di sviluppo
- Dizionari IT/EN/FR/ES: hero, servizi, assistenza ai clienti esistenti, ricerca informativa, esempi di pacchetti, traduzione da e verso italiano, disclaimer nel footer. Rimossi i blocchi pubblici di NoeTom «Money Radar» con funzioni di fatturazione/incassi.
- `src/lib/serviceScope.ts`: rilevamento delle richieste inequivocabilmente escluse con risposte in quattro lingue.
- `src/lib/concierge/intentRecognizer.ts`: assistente digitale allineato a perimetro tramite filtro condiviso, prima di proporre un servizio.
- `src/lib/concierge/intakeSchemas.ts`: richieste guidate per clienti esistenti e back office; web = **testi e revisione del contenuto**, non creazione di siti tecnici con listini non autorizzati.
- `src/components/ContactForm.tsx`: informativa chiara sul perimetro, validazione prima dell'invio; se il provider accetta ma non prova la consegna, preserva i dati e offre l'invio manuale della **stessa richiesta con stesso riferimento**.
- `server.ts`: lo stesso filtro viene applicato anche al canale di intake dell'app NoeTom se e quando attivato; backend privato non dichiarato operativo.
- `src/pages/Resources.tsx` e `src/pages/Risorse.tsx`: rimossi riferimenti agli strumenti per lead/prospecting.
- `src/lib/blogData.ts`: corrette le proposte editoriali di supporto amministrativo e gli esempi commerciali di fatturazione.
- `src/lib/portfolioData.ts`: chiarito esplicitamente in tutte le lingue che gli esempi dimostrativi non espandono il catalogo dei servizi realmente offerti.
- `src/test/serviceScope.test.ts`: nuovi test per servizi ammessi e vietati in IT/EN/FR/ES; aggiornati i test preesistenti e gli script offline per import del modulo comune.
- `src/lib/api/clientAdapter.ts`: HTTP 403 da Web3Forms viene segnalato come blocco del provider; niente retry automatico a provider alternativi.

## Risultati
- `npm test`, TypeScript, build Vite, controlli editoriali e di rilascio su GitHub Actions: PASS sulla versione `f16c37e7`.
- Cloudflare Pages: deploy di anteprima riuscito sulla stessa versione.
- Browser smoke multilingue: verificare il risultato dell'ultimo workflow prima del GO.
- Prezzi e condizioni economiche lasciati invariati. Nessun nuovo servizio a pagamento.
- `main`, DNS e sito pubblico: INVARIATI.

## Bloccanti reali prima del rilascio
1. La titolare ha eseguito un test del form Web3Forms dall'anteprima `pages.dev`, ma **l'email non è arrivata neanche nello spam**. Una risposta HTTP 403 da GitHub runner era dovuta a limitazione dell'API server-side del piano Free, non è un test della versione browser. È da verificare la risposta esatta nella UI e la presenza della richiesta in Web3Forms **Submissions**; possibili blocchi del dominio temporaneo.
2. Eseguire prova end-to-end su origine autorizzata e verificare che `info@noemitomassetti.it` riceva il messaggio. Se non funzionasse, mantenere in vista il contatto diretto email e non rappresentare il form come affidabile.
3. Solo dopo collaudo e approvazione scritta della titolare: fare merge PR #1 su `main` e completare il collegamento Cloudflare Pages al dominio personalizzato, evitando Vercel Hobby per un sito commerciale.

## Anteprima a disposizione per valutazione grafica e testi
https://chatgpt-site-release-audit-2.noemitomassetti-it.pages.dev/it

**La pubblicazione della versione nuova rimane espressamente NON AUTORIZZATA fino all'ok finale.**
