# Assistente di Noemi — modalità AI generativa (revisione privata)

**Stato:** implementato in anteprima. **NON attivare sul sito pubblico e NON eseguire il merge prima del consenso esplicito della titolare.**

## Architettura
- Interfaccia `DigitalConcierge` in IT, British EN, FR ed ES.
- Il percorso guidato e il calcolo tariffario esistente restano deterministici.
- Gateway server Vercel `/api/concierge/chat`, con API key solo in variabile server, mai in `VITE_*` né nel browser.
- Provider predisposto: Google Gemini, API REST. Nessuna credenziale AI risultava configurata nel progetto durante questa revisione.
- Il gateway risponde con `enabled: false` se manca la chiave o il flag; il browser conserva l'assistente guidato.

## Sicurezza e qualità applicate
- Consenso esplicito nella chat prima di inoltrare un nuovo messaggio al provider; la cronologia precedente non viene inoltrata.
- Informativa privacy aggiornata nelle quattro lingue, collegata all'interruttore nella chat.
- Limiti di lunghezza su input e cronologia, timeout provider e fallback non generativo.
- Controllo server del perimetro servizi; richieste escluse non vanno al modello.
- Le risposte AI non possono accettare incarichi o inviare email, né modificare prezzi, ordini o altri dati.
- Filtro prudenziale delle risposte: importi numerici, siti esterni e garanzie generati dall'AI provocano fallback.
- Oscuramento preliminare di indirizzi email e numeri di telefono riconoscibili prima della richiesta al provider.
- Rate limiting *best-effort in memoria dell'istanza*; non è globale. Prima dell'attivazione pubblica serve un controllo di quota/rate-limit condiviso o un equivalente verificato.

## Configurazione richiesta esclusivamente in Vercel **Preview**
1. Creare una chiave Google Gemini API secondo le condizioni del fornitore; non incollarla in chat, repository o file pubblici.
2. Vercel → Project Settings → Environment Variables (Preview): aggiungere `GEMINI_API_KEY` come secret/sensitive, `AI_CONCIERGE_ENABLED=true` e, se serve, `GEMINI_MODEL=gemini-2.5-flash`.
3. Verificare limiti di utilizzo e di spesa (nessun importo / tier viene garantito da questo codice).
4. Verificare trattamento dati, obblighi GDPR, trasferimenti/retention del fornitore e informative *prima* di abilitare l'uso con persone reali.
5. Eseguire deployment solo dell'anteprima e prove end-to-end: GET `/api/concierge/chat`, richiesta con consenso e risposta reale di Google; simulare 429, timeout, indisponibilità; verifica su IT/EN/FR/ES; confermare che nessun messaggio/chat viene inviato a Noemi senza modulo separato.
6. Rivedere e approvare il sito personalmente. Solo dopo una distinta autorizzazione può avvenire la pubblicazione.

## Limiti non nascosti
- Nessun modello generativo può garantire infallibilità. È possibile dare risposte improprie; le risposte informative non sono vincolanti.
- Le prove con provider simulato non dimostrano la disponibilità reale di Gemini.
- La validazione del flusso sito→app per creare automaticamente un incarico è un test separato, non coperto dalla generazione delle risposte pubbliche.
