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

**Ramo di revisione:** `chatgpt/portfolio-excellence-2026-11-04`  
**Commit verificato:** `4fb0fb862501573cc0537641de48b7c6b6a4699e`  
**Produzione:** `main` invariato (`5469bf8`); nessun merge, modifica DNS o rilascio sul dominio pubblico.

### Interventi completati nel ramo

- Corretto il riconoscimento della lingua per gli URL storici `/blog` e la rimozione di canonical/og:url obsoleti durante la navigazione client-side.
- Eliminati i landmark `main` annidati nelle pagine Blog, Pubblicazioni e Dossier.
- Corretta l'associazione tariffaria del customer care e resa più precisa la terminologia economico-finanziaria.
- Uniformate in IT/EN/FR/ES le qualifiche universitarie, la denominazione degli istituti e la presentazione dei CFU; eliminati gli anni dalla timeline formativa.
- Rafforzata la navigazione laptop/mobile, compresi nome accessibile, stato espanso e contrasto dell'icona del menu.
- Aggiunte anteprime fedeli degli elaborati dimostrativi nelle schede del portfolio.
- Riformulati nel blog alcuni claim non documentati, i riferimenti a fatturazione e contabilità e le promesse assolute di sicurezza/backup.
- Aggiornato l'articolo sugli strumenti digitali: distinzione fra funzioni gratuite e piani a pagamento, con informativa datata e link ai fornitori localizzati.
- Aggiunti test di regressione per SEO, locale, pricing, contrasto, anteprime portfolio, qualifiche e claim editoriali.

### Evidenze automatiche

- [Build, TypeScript, test unitari e controlli editoriali/rilascio — esito positivo](https://github.com/noemitomassetti/noemitomassetti-it/actions/runs/42489860993).
- [Browser smoke, responsive, navigazione, portfolio, blog multilingue, fallback form simulato e axe su percorsi rappresentativi — esito positivo](https://github.com/noemitomassetti/noemitomassetti-it/actions/runs/42489860994).
- Check di deployment Vercel sul ramo: `success`.
- Preview Cloudflare Pages del ramo: [chatgpt-portfolio-excellence.noemitomassetti-it.pages.dev](https://chatgpt-portfolio-excellence.noemitomassetti-it.pages.dev).

I controlli axe riguardano percorsi rappresentativi e **non costituiscono una certificazione WCAG 2.2 AA**. I test del modulo utilizzano un provider simulato e non dimostrano la ricezione di email reali.

### Condizioni ancora necessarie prima del rilascio

1. Verificare sul dominio il recapito effettivo delle richieste del modulo.
2. Eseguire una revisione linguistica indipendente e completa di EN/FR/ES.
3. Verificare provenienza/licenze delle immagini e completare l'ottimizzazione degli asset.
4. Completare controlli manuali con screen reader e dispositivi reali.
5. Scegliere un hosting compatibile con l'uso commerciale. Le condizioni Vercel aggiornate il 19 ottobre 2026 limitano il piano Hobby all'uso personale o non commerciale: [Vercel Terms of Service — Hobby Plan](https://vercel.com/legal/terms#hobby-plan). Non attivare piani a pagamento né modificare DNS senza autorizzazione.

**Esito:** revisione del codice e collaudi automatici superati sul ramo; sito non ancora autorizzato al rilascio in produzione.

