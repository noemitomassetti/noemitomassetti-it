# NoeTom — standard di eccellenza: sito e portfolio
Data: 2026-11-04 · Ambito: produzione su `main` e successiva revisione su ramo separato.

## Principio di valutazione
Una build verde non equivale a esperienza eccellente; una valutazione di eccellenza richiede prove verificabili. Non attribuire voti 10/10 o "WCAG conforme" senza un audit completo. Contare il numero di pagine o dossier non è prova di qualità.

| Area | Condizione per un giudizio «ottimo» | Evidenza / gap |
| --- | --- | --- |
| Posizionamento | Servizi chiarissimi, target specifico, esclusioni uniformi IT/EN/FR/ES | Catalogo e dichiarazioni presenti; revisione completa in ogni pagina da ripetere |
| Portfolio | 3–8 esempi prioritari da leggere subito; archivio ricercabile/filtrabile; brief, scelte, consegna reale dimostrativa e limiti | 27 dossier, 18 casi metodologici e 22 documenti; filtri e selezione migliorati nel nuovo ramo |
| Onestà | Escludere clienti, risultati, referenze o prestazioni non verificabili | I materiali usano dati fittizi e ne dichiarano la natura; vietate promesse di risultati |
| Localizzazione | IT nativo, EN/FR/ES naturali; traduzioni specialistiche orientate in primo luogo verso IT | Test automatizzati presenti; manca seconda revisione umana integrale |
| Grafica | Identità coordinata, elementi coerenti, gerarchia leggibile, niente decorazioni fini a se stesse | Da verificare su schermi reali 320, 390, 768, 1365, 1920 px |
| UX | Obiettivo primario riconoscibile in 5 s; ogni servizio → prova → contatto, filtri e ricerca senza confusione | Prime correzioni ai filtri e test di regressione nella PR #2 |
| Accessibilità | Navigazione tastiera, focus, etichette, colori, zoom, screen reader e WCAG 2.2 AA valutati con metodi automatici e manuali | Audit axe su pagine campione precedente, non certificazione; da ricontrollare live |
| Prestazioni | LCP/INP/CLS misurati su mobile reale, risorse differite, nessun errore JS critico | Budget JavaScript e build controllati in CI; metriche Core Web Vitals live ancora non verificate |
| SEO internazionale | HTML leggibile senza JS, title/description specifici, canonical, hreflang reciproci, sitemap e robots coerenti | Controlli di build e 292 URL previsti; test live su dominio ancora necessario |
| Conversione | CTA appropriate, form senza errori, recapito effettivo e fallback email disponibile | Web3Forms testato in anteprima secondo il checklist; invio/ricezione live da ripetere |
| Privacy e conformità | Minimo trattamento dati, informativa accurata, consenso coerente e condizioni hosting idonee | Revisione normativa esterna quando necessaria; Hobby Vercel non destinato all'uso commerciale |
| Affidabilità | Suite unit, build, browser smoke, no regression, rollback | CI GitHub attivata dalla PR #2; risultati da controllare prima del merge |

## Priorità operative
**P0 (bloccante):** verificare consegna reale delle richieste, leggibilità del portfolio live, conformità contrattuale dell'hosting commerciale, nessuna affermazione fuorviante.

**P1 (prima di dichiarare eccellenza):** collaudo umano mobile/desktop, navigazione da tastiera e screen reader, revisioni linguistiche indipendenti EN/FR/ES, verifica di tutte le CTA/URL e misurazioni Web Vitals reali.

**P2 (ottimizzazione continuativa):** ampliare esempi effettivamente reali e autorizzati, senza inventare referenze o metriche; migliorare continuamente la pertinenza degli esempi in primo piano, la leggibilità e l'utilità del blog.

## Verifica del rilascio
Non unire la PR #2 a `main` finché test TypeScript, build, test Vitest, release checks e browser smoke non siano superati. Una preview Ready su Vercel prova il deployment, non la correttezza del contenuto. Verificare manualmente su preview prima del merge. Non acquistare piani né cambiare DNS o hosting automaticamente.

## Ambito commerciale
Servizi offerti: segreteria, back office operativo, comunicazioni con clienti già acquisiti, traduzione/localizzazione prioritariamente EN/FR/ES→IT, contenuti e ricerche informative a supporto degli incarichi. Non offrire contabilità, fatturazione, amministrazione, prospecting, lead generation, telemarketing, chiamate a freddo o reclutamento intervistati.
