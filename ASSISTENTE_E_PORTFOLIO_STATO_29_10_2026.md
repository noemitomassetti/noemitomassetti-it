# Assistente di Noemi + portfolio — stato di sviluppo al 29/10/2026

## Modifiche effettuate in questa revisione
- Interfaccia rinominata **Assistente di Noemi**; dichiarata chiaramente risposta automatica, senza indicatore ingannevole di operatore umano in diretta.
- Prima stima automatica gratuita sul browser per ore di supporto e parole di traduzione/localizzazione/revisione. Stima indicativa, non preventivo vincolante, nessun pagamento effettuato dalla chat.
- FAQ deterministiche multilingue per: disponibilità fuori orario, metodo di lavoro, lingue, portfolio, tempi, pagamenti e prezzi. Riconoscimento di servizi in quattro lingue, con risposta prudente ai casi non riconosciuti.
- Eliminazione di preventivi predefiniti per sviluppo web e prezzi per ricerca autonoma non approvati.
- 19 documenti dimostrativi originali consultabili sotto `public/portfolio-documenti`: 10 preesistenti, 9 nuovi (customer care, email/agenda, CRM/ordini/listini, archivi, corsi, EN→IT, FR→IT, ES→IT, cataloghi). I 9 nuovi hanno contenuto principale in italiano e brevi presentazioni in EN/FR/ES; non sono tutti tradotti integralmente.
- Aggiunti test offline per 13 richieste ricorrenti, con verifica del perimetro dei servizi.

## Verifiche eseguite
- `assistant-faq-tests.cjs`: 13/13 pass
- `editorial-pricing-check.cjs`: 4 lingue e coerenza listino pass (controlli statici)
- `release-static-check.cjs`: 111 file TS/TSX senza errori di parsing, controlli statici pass
- `site-adapter-runtime-checks.cjs`: 16/16 pass, test mirati con servizi simulati
- `check_concierge_portfolio.py`: 19 link portfolio validi, documenti esistenti e segnalati come dimostrativi

## Limiti e blocchi reali
- NO test end-to-end su un'installazione pubblica, NO build generale npm verificata, NO prova reale di recapito del form e NO traffico del sito verificato.
- Il motore di risposta conversazionale resta **guidato/deterministico**, NON un LLM generativo; risponde H24 solo quando il sito è raggiungibile. Le richieste libere non riconosciute sono indirizzate alla richiesta scritta.
- **NoeTom non è ancora connessa end-to-end a un backend persistente pronto per clienti reali.** La chat su sito può rispondere e calcolare stime senza l'app; per inoltrare e registrare le richieste serve backend e configurazione autentici.
- Ollama locale su Lenovo NON costituisce un servizio pubblico H24: dipende dal PC e non va esposto direttamente su Internet.
- Verificare che il piano hosting usato sia consentito per attività commerciali: il piano Vercel Hobby è destinato all'uso non commerciale secondo le condizioni correnti. Verificare alternative o piano conforme prima del go-live.
- Nessuna pubblicazione, attivazione billing, email reale o modifica al Vercel online effettuata.
