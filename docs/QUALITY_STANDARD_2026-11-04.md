# NoeTom — standard di eccellenza: sito e portfolio
Data: 2026-11-04 · Aggiornamento: 2026-11-05 · Ambito: produzione su `main` e successiva revisione su ramo separato.

## Principio di valutazione
Una build verde non equivale a esperienza eccellente; una valutazione di eccellenza richiede prove verificabili. Non attribuire voti 10/10 o "WCAG conforme" senza un audit completo. Contare il numero di pagine o dossier non è prova di qualità.

| Area | Condizione per un giudizio «ottimo» | Evidenza / gap |
| --- | --- | --- |
| Posizionamento | Servizi chiarissimi, target specifico, esclusioni uniformi IT/EN/FR/ES | Catalogo e dichiarazioni presenti; revisione completa in ogni pagina da ripetere |
| Portfolio | 3–8 esempi prioritari da leggere subito; archivio ricercabile/filtrabile; brief, scelte, consegna reale dimostrativa e limiti | 21 dossier pubblici (6 traduzioni EN/FR/ES → IT e 15 casi operativi), 18 casi sintetici e 22 documenti; filtri e selezione migliorati nel nuovo ramo |
| Onestà | Escludere clienti, risultati, referenze o prestazioni non verificabili | I materiali usano dati fittizi e ne dichiarano la natura; vietate promesse di risultati |
| Localizzazione | IT nativo, EN/FR/ES naturali; traduzioni specialistiche orientate in primo luogo verso IT | Test automatizzati presenti; manca seconda revisione umana integrale |
| Grafica | Identità coordinata, elementi coerenti, gerarchia leggibile, niente decorazioni fini a se stesse | Da verificare su schermi reali 320, 390, 768, 1365, 1920 px |
| UX | Obiettivo primario riconoscibile in 5 s; ogni servizio → prova → contatto, filtri e ricerca senza confusione | Prime correzioni ai filtri e test di regressione nella PR #2 |
| Accessibilità | Navigazione tastiera, focus, etichette, colori, zoom, screen reader e WCAG 2.2 AA valutati con metodi automatici e manuali | Audit axe su pagine campione precedente, non certificazione; da ricontrollare live |
| Prestazioni | LCP/INP/CLS misurati su mobile reale, risorse differite, nessun errore JS critico | Budget JavaScript e build controllati in CI; metriche Core Web Vitals live ancora non verificate |
| SEO internazionale | HTML leggibile senza JS, title/description specifici, canonical, hreflang reciproci, sitemap e robots coerenti | Controlli di build e 292 URL previsti; test live su dominio ancora necessario |
| Conversione | CTA appropriate, form senza errori, recapito effettivo e fallback email disponibile | Web3Forms testato in anteprima secondo il checklist; invio/ricezione live da ripetere |
| Privacy e conformità | Minimo trattamento dati, informativa accurata, consenso coerente e condizioni hosting idonee | Revisione normativa esterna quando necessaria; Hobby Vercel non destinato all'uso commerciale |
| Affidabilità | Suite unit, build, browser smoke, no regression, rollback | CI GitHub verificata sul commit 5d19b930: build, TypeScript, test, check release/editoriali, smoke browser e audit axe automatizzati completati con esito success; anteprima Vercel e QA manuale ancora da verificare |

## Priorità operative
**P0 (bloccante):** verificare consegna reale delle richieste, leggibilità del portfolio live, conformità contrattuale dell'hosting commerciale, nessuna affermazione fuorviante.

**P1 (prima di dichiarare eccellenza):** collaudo umano mobile/desktop, navigazione da tastiera e screen reader, revisioni linguistiche indipendenti EN/FR/ES, verifica di tutte le CTA/URL e misurazioni Web Vitals reali.

**P2 (ottimizzazione continuativa):** ampliare esempi effettivamente reali e autorizzati, senza inventare referenze o metriche; migliorare continuamente la pertinenza degli esempi in primo piano, la leggibilità e l'utilità del blog.

## Verifica del rilascio
Non unire la PR #2 a `main` finché test TypeScript, build, test Vitest, release checks e browser smoke non siano superati. Una preview Ready su Vercel prova il deployment, non la correttezza del contenuto. Verificare manualmente su preview prima del merge. Non acquistare piani né cambiare DNS o hosting automaticamente.

## Ambito commerciale
Servizi offerti: segreteria, back office operativo, comunicazioni con clienti già acquisiti, traduzione/localizzazione prioritariamente EN/FR/ES→IT, contenuti e ricerche informative a supporto degli incarichi. Non offrire contabilità, fatturazione, amministrazione, prospecting, lead generation, telemarketing, chiamate a freddo o reclutamento intervistati.

## Aggiornamento 8 novembre 2026 — revisione tecnica ed editoriale

**Ramo:** `chatgpt/portfolio-excellence-2026-11-04`  
**Ultimo commit di codice verificato:** `0de82bd7e9b9ff912a2472f51c3933ff63774a21`  
**PR:** [#2 — revisione di qualità](https://github.com/noemitomassetti/noemitomassetti-it/pull/2), ancora in bozza.  
**Produzione:** `main` resta al commit `5469bf891ec7ca39c4b18c535d8feb20678d8f51`; nessun merge, modifica DNS o rilascio sul dominio pubblico.

### Interventi completati nel ramo

- SEO e routing: locale italiana per le rotte storiche del blog; canonical e `og:url` obsoleti rimossi durante la navigazione; metadati e hreflang verificati.
- Accessibilità e struttura: landmark `main` annidati rimossi; nomi accessibili e stato espanso del menu; contrasto del menu mobile verificato; filtri portfolio visibili e non tagliati a 390 px.
- Cookie banner: copy abbreviato in IT/EN/FR/ES, card più compatta, titolo e descrizione associati al dialogo; scelta di rifiuto e accettazione sempre disponibili.
- Portfolio: conteggio pubblico corretto a 21 dossier; filtri responsive a due righe su smartphone; anteprime fedeli degli elaborati; dati fittizi dichiarati.
- Perimetro linguistico: traduzioni professionali solo EN/FR/ES → IT; localizzazione per il mercato italiano; supporto scritto multilingue per clienti già acquisiti. Rimossi dai dataset pubblici i sei vecchi esempi IT → EN/FR/ES e ristretto il tipo TypeScript alle direzioni effettivamente offerte.
- Qualità traduttiva: registro formale preservato nei due esempi FR → IT; controlli su corrispondenza dei segmenti, valori numerici e completezza dei sei esempi pubblici.
- Copy multilingue: qualifiche e istituti uniformati; testi di servizio, metadata e footer corretti; claim del blog e limiti dei piani gratuiti qualificati.
- Pricing: associazione customer care corretta; test di regressione dedicati.
- Sitemap: 268 URL unici verificati; rotte dei 21 dossier e dei 22 documenti controllate nelle quattro lingue.

### Evidenze automatiche

- [Build, TypeScript, test unitari e controlli editoriali/rilascio — SUCCESS](https://github.com/noemitomassetti/noemitomassetti-it/actions/runs/42493466860).
- [Browser smoke, viewport responsive, filtri portfolio, dossier, blog multilingue, modulo con provider simulato e axe su percorsi rappresentativi — SUCCESS](https://github.com/noemitomassetti/noemitomassetti-it/actions/runs/42493466829).
- Check Vercel sul ramo: `success`.
- [Anteprima Cloudflare Pages del ramo](https://chatgpt-portfolio-excellence.noemitomassetti-it.pages.dev): deploy riuscito.
- Schermate browser a 390 px esaminate dopo le modifiche.

I controlli axe sono rappresentativi e non equivalgono a certificazione WCAG 2.2 AA. Il provider del modulo è simulato: la ricezione di email reali non è stata dimostrata.

### Gate ancora aperti prima del rilascio

1. Verificare il recapito reale del modulo Web3Forms sulla casella professionale.
2. Completare la rilettura indipendente madrelingua dell'intero copy EN/FR/ES.
3. Eseguire test manuali con screen reader, tastiera e dispositivi reali.
4. Verificare licenze, provenienza e ottimizzazione di tutte le immagini.
5. Scegliere hosting conforme all'uso commerciale: Vercel Hobby è limitato all'uso personale/non commerciale; la preview Cloudflare su `pages.dev` non è il dominio di produzione.
6. Verificare manualmente la dicitura attuale del profilo LinkedIn.

**Esito:** codice e controlli automatici superati sul ramo di revisione; il sito non è ancora autorizzato al rilascio in produzione.
