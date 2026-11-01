# NoemiTomassetti.it — revisione commerciale/editoriale e tecnica
Data: 29 ottobre 2026 · **Copia di sviluppo: non distribuire senza controlli.**

## Criteri di posizionamento
- Persona, esperienza, formazione e professionalità al centro: sito di servizi di Noemi, **non** vetrina di un SaaS o di generazione AI.
- Tre aree economiche leggibili: **segreteria/back office**, **customer care scritto**, **traduzione e localizzazione verso l'italiano**. Ricerca, testi web, strumenti digitali sono presentati come capacità complementari, non come sei aziende separate.
- Servizi IT/EN/FR/ES: comunicazione multilingue sì, ma traduzione madrelingua **verso l'italiano** come servizio distintivo. Sviluppo di siti web non presentato come prodotto standard o con prezzi a listino; eventuale valutazione separata resta soggetta a verifica del perimetro professionale.
- Mostrati esempi di lavoro come **dimostrativi**, non incarichi veri. Eliminato un conteggio fisso del portfolio non affidabile.
- CTA e percorso commerciale scritti: **nessuna call obbligatoria**; sostituiti riferimenti a colloqui gratuiti e tempi garantiti nei principali flussi pubblici.
- Contatti pubblici: `info@noemitomassetti.it`, come identità professionale. L'integrazione FormSubmit nel codice usa ancora il destinatario tecnico precedentemente configurato: **testarne attivazione, consegna e trasparenza privacy prima del go-live**.

## Listino di riferimento adottato
- Assistenza virtuale/back office: **25 €/ora**.
- Pacchetti di assistenza su approvazione e pagamento anticipato salvo diverso accordo: **5 h 125 €**, **10 h 240 €**, **20 h 460 €**.
- Customer care scritto: **25 €/ora**, impegno/prestazioni da concordare.
- Traduzione: **da 0,09 €/parola sorgente**; localizzazione web **da 0,11 €/parola**; specialistica **da 0,12 €/parola**; revisione **da 0,03 €/parola**. Il prezzo effettivo dipende dal testo, lingua, settore, formati e complessità.
- Nessuna rivalsa, bollo o maggiorazione automatica nel preventivo indicativo. Eventuali condizioni fiscali sono da confermare nel preventivo da parte di Noemi.
- Nessuna promessa di tempi standard, sconti permanenti o risultati commerciali garantiti. Nessun prezzo autonomo pubblicato per sviluppo tecnico di siti o ricerche isolate.

## Modifiche reali
- `src/lib/pricingData.ts`: riscritti listino, condizioni e percorsi IT/EN/FR/ES; tre offerte principali.
- `src/lib/i18n/locales/{it,en,fr,es}.ts`: aggiornati pacchetti esemplificativi e pagina servizi, soprattutto contenuti per siti web al posto della vendita di sviluppo tecnico; abbassate affermazioni assolute, SEO/hero dove presente, stato NoeTom in sviluppo.
- `src/pages/{Index,Services,Portfolio,BlogPost,ItalianLocalisation,NoeTom,Questionnaire,Risorse}.tsx`: sostituite CTAs a call, etichette di consegna garantita, alcune formulazioni commerciali troppo forti, portfolio dimostrativo.
- `src/components/{DigitalConcierge,Layout,ContactForm}.tsx`: percorso di richiesta scritta, email pubblica aziendale.
- `scripts/editorial-pricing-check.cjs`: verifica offline allineamento del listino, delle quattro lingue e del calcolatore NoeTom.
- `server/pricingCalculator.ts` nell'app NoeTom: adeguato il pacchetto esplicito da 5 h a 125 €, mantenendo 10 h/240 € e 20 h/460 € e tariffa base 25 €/h. Test aggiornato.

## Verifiche realmente eseguite
- Parsing TypeScript / TSX e guardie pubbliche (110 file): **PASS**.
- Test runtime isolati sull'invio richiesta dal sito (16 test): **PASS**.
- Verifica editoriale offline IT/EN/FR/ES, categorie/pack/listino e allineamento con l'app: **PASS**.
- Test app NoeTom di AI-off, contratto e preventivi (15): **PASS**.
- **NON ESEGUITI**: installazione dipendenze da npm, `npm run build`, lint completo, test nel browser reale, prova dei form con email, rete cookie/analytics, controllo completo di accessibilità/SEO crawler, connessione Firestore in cloud. La sintassi non dimostra qualità runtime.

## Bloccanti prima di una pubblicazione
1. Site: build + lint + suite + test mobile/tastiera + fonti esterne e consenso cookie. Test reale di una richiesta di preventivo via provider e dell'inoltro all'email ricevente. Confronto footer/informative/provider effettivo.
2. Site: revisione finale del listino da parte della titolare, condizioni e inquadramento fiscale/legale se necessario.
3. NoeTom: `PRODUCTION_STORAGE_NOT_READY` **non va tolto**: la persistenza operativa in Firestore non è stata dimostrata per tutte le API; autenticazione, tenuta dei dati e test negativi da verificare in cloud. App **non ancora pubblicabile per utenti/dati reali**.
4. Site: conservare Vercel live invariato sino a via libera. Non fare publish automatico da eventuale repository Git sincronizzato.
5. Ollama locale su Lenovo è verificato come installato e in grado di rispondere, **non** è collegato al server web remoto né va esposto pubblicamente.

## Note su Google AI Studio
Questo ZIP è codice di sviluppo aggiornato. **Non si presume che Google AI Studio importi automaticamente lo ZIP nel progetto esistente.** Per applicare le modifiche, verificare integrazione GitHub/sync sul progetto corrente o trasferire i file in modo non distruttivo. Un master prompt nel progetto originale, senza importazione dei file aggiornati, non applica magicamente questa copia.
