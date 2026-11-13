# Assistente di Noemi — integrazione OpenAI in anteprima privata

**Stato al 11 novembre 2026:** codice OpenAI predisposto e verificabile in anteprima; provider reale NON attivo in assenza di API key. Il sito pubblico non deve essere aggiornato senza l'OK esplicito dell'autrice.

## Struttura

- Interfaccia React multilingue IT, British EN, FR, ES; selezione volontaria dell'AI. Il percorso guidato e il calcolatore preventivi sono sempre disponibili.
- Funzione server Vercel `/api/concierge/chat`, che chiama **OpenAI Responses API**. La chiave è esclusivamente una variabile d'ambiente privata server, mai nel browser né nel repository.
- Modello predefinito `gpt-6-luna`, selezionato per messaggi informativi brevi e costi contenuti; configurabile tramite `OPENAI_MODEL` nel solo server.
- Base informativa `src/lib/concierge/publicKnowledge.ts`, ricavata dai dati professionali pubblici approvati, dai servizi e dal listino pubblicato in `src/lib/pricingData.ts`. Nessuna connessione alla memoria personale ChatGPT o alle conversazioni private.
- `store:false` per evitare la conservazione dello stato delle risposte nel servizio API, nei limiti della documentazione OpenAI; restano possibili log di monitoraggio degli abusi secondo le condizioni della piattaforma (normalmente fino a 30 giorni).

## Garanzie tecniche verificabili

1. Consenso del visitatore prima di inviare qualsiasi messaggio all'API esterna; nessuna cronologia antecedente al consenso.
2. Riconoscimento di esclusioni professionali server-side; invii e preventivi finali non dipendono dal modello.
3. Lista di servizi e tariffe controllata e coerente con i contenuti del sito. Eventuali numeri di prezzo, promesse di risultato o link generati dal modello vengono bloccati e sostituiti da un percorso guidato.
4. Oscuramento preliminare di email e numeri telefonici riconoscibili. **Non è anonimizzazione completa** e non si devono raccogliere dati sensibili nella chat.
5. Limiti di lunghezza, timeout, massimo di token di output, controllo dell'origine e limitatore di richieste per istanza; ritorno all'assistente guidato se provider assente, scaduto o indisponibile.
6. Test simulati di consenso, risposte, autorizzazione, privacy, quattro lingue, errori, rifiuti per servizi esclusi e protezioni commerciali.

## Condizioni necessarie prima di attivare l'AI con i visitatori

1. Aprire un progetto API OpenAI distinto dall'abbonamento ChatGPT e verificare la disponibilità del modello.
2. Definire **un budget di spesa** accettabile ed eventuali notifiche e limitazioni nel pannello OpenAI, prima di abilitare la funzione pubblica. Verificare quota, costi, termini e tutela dei dati.
3. Creare una chiave di progetto OpenAI in modo sicuro: non condividerla in chat, screenshot o repository.
4. Nelle impostazioni **Vercel → progetto → Environment Variables → Preview**, inserire `OPENAI_API_KEY` come variabile sensibile e `AI_CONCIERGE_ENABLED=true`. Opzionale: `OPENAI_MODEL=gpt-6-luna`.
5. Nuova anteprima di sviluppo. Verificare `GET /api/concierge/chat` (`enabled:true`) e una **conversazione reale** con consenso in IT/EN/FR/ES; testare 429, indisponibilità e provocazioni sulle istruzioni.
6. Integrare rate limit condiviso e controllo di consumo a livello di servizio prima dell'attivazione su un sito pubblico. Il limitatore in memoria nel codice attuale non è globale e NON garantisce un tetto di spesa.
7. Verificare prima della pubblicazione adempimenti privacy/GDPR, informativa e trattamento dati con il provider. **Il piano Vercel Hobby, secondo la documentazione ufficiale, è per uso personale non commerciale e non è appropriato per un sito di attività professionale.** Valutare hosting conforme prima di trasferire la nuova versione in produzione, senza cambiare piano o DNS senza approvazione.
8. Collaudare separatamente l'invio reale Web3Forms e il passaggio dei dati dall'email all'app NoeTom.

## Precisazioni

- Il codice **non** collega l'account ChatGPT Plus dell'autrice o la memoria di questa conversazione. È un assistente OpenAI personalizzato con sole informazioni professionali pubbliche.
- La chat non invia messaggi ai clienti o alla titolare, non crea appuntamenti e non accetta incarichi automaticamente.
- La qualità generativa non è certificabile come infallibile; il modello può commettere errori. Le verifiche simulate non sostituiscono un test reale con OpenAI.
- `src/lib/concierge/publicKnowledge.ts` è un archivio di contenuti professionali di partenza, da aggiornare quando cambiano i servizi e i prezzi.
- La sezione libri è nascosta finché non sarà pubblicata.
- **Non eseguire merge su `main` o deployment produzione senza autorizzazione esplicita.**

Fonti di riferimento: https://developers.openai.com/api/docs/models/gpt-6-luna ;
https://platform.openai.com/pricing ;
https://developers.openai.com/api/docs/guides/your-data .

Fonte Vercel Hobby (uso non commerciale): https://vercel.com/docs/plans/hobby ; https://vercel.com/docs/limits/fair-use-guidelines .
