# SITO + NOETOM — punto operativo in ChatGPT Work

## Obiettivo e vincoli

Prima completare il sito noemitomassetti.it, poi sviluppare l'app privata NoeTom come centro operativo integrato. Il sito raccoglie richieste; Noemi approva preventivi e consegne. Nessun abbonamento SaaS NoeTom offerto al pubblico. Perimetro commerciale vincolato ai codici ATECO dichiarati 70.20.09 e 74.30.00; questo audit tecnico non certifica l'inquadramento fiscale dei singoli servizi.

Repository: `noemitomassetti/noemitomassetti-it`. Ramo: `chatgpt/site-release-audit-2026-10-29`. PR #1 in bozza. Vietati merge/modifiche a main, dominio, DNS e produzione senza approvazione esplicita. Nessun servizio a pagamento autorizzato.

## Web3Forms: bloccante di pubblicazione

- La chiave pubblica del modulo è già nel codice. Non è una credenziale di amministrazione.
- Destinatario richiesto: **solo info@noemitomassetti.it**. L'utente dichiara la casella già verificata.
- Accesso Google confermato dall'utente tramite secondo fattore. Il ritorno a Web3Forms ha restituito `Server error`, `error=Configuration`. Verifica indipendente sulla pagina iniziale: sessione non autenticata.
- Nessuna configurazione destinatario salvata in questa sessione; nessun invio reale e nessuna ricezione certificata. Il contenuto della dashboard non è stato letto.
- Non ripetere la verifica email o chiedere all'utente documenti già presenti. Riprendere dalla dashboard quando l'accesso sarà disponibile, selezionare l'indirizzo professionale come unico destinatario, salvare e verificare la persistenza.
- Solo dopo: invio sintetico riconoscibile dall'anteprima esatta e riscontro in posta del medesimo riferimento. Risposta `success` del provider NON prova il recapito finale.

## Correzioni di questo audit

- Modulo e metadati IT/EN/FR/ES: NoeTom presentato come progetto interno, contenuti web distinti dallo sviluppo tecnico.
- Informative: allineati i dati raccolti nelle quattro lingue, aggiunto telefono facoltativo, eliminati richiami FR/ES alla call e alla presunta anonimizzazione dei dati tecnici. Aggiornata la data e rimossa l'affermazione obsoleta che l'invio fosse disattivato.
- Web3Forms conserva anche lingue di traduzione, scadenza, stime e disponibilità del glossario se presenti nel payload; test di regressione per prevenire perdita di questi dati.
- Destinatario predefinito del vecchio FormSubmit allineato all'indirizzo professionale; provider ancora disattivato per default. Questa modifica NON configura il destinatario Web3Forms.
- Aggiunti header di sicurezza per Cloudflare Pages, equivalenti a quelli già dichiarati per Vercel.
- Riparati due controlli di rilascio obsoleti: import della configurazione Web3Forms nel test sintetico e percorso TypeScript assoluto nel controllo FAQ. Collegati i controlli di rilascio/editoriali al workflow di build.

## Evidenze e limiti

- Base ispezionata: `33e2e9d04ca4fdb3b5961a68a8da244864a01fc9`, con workflow GitHub build e browser entrambi conclusi con successo. I test browser dei provider sono simulati.
- Test locali delle correzioni: 44 test unitari, TypeScript, build produzione, 18 verifiche runtime, preflight con 20 documenti HTML e 21 controlli, 13 verifiche FAQ, regressioni intenti/portfolio e coerenza tariffe nelle quattro lingue.
- Anteprima Cloudflare del commit base aperta in Work; navigazione EN→IT, rifiuto cookie e risposta dell'assistente sulle lingue verificati. Assistente attualmente guidato/deterministico, senza backend di AI generativa.
- L'anteprima locale gestita non parte per errore infrastrutturale SWC. Nessuna modifica al codice applicativo per aggirarlo. QA browser delle correzioni da verificare sull'anteprima di ramo e nel workflow GitHub.
- Blog mostrato anche nelle pagine internazionali con articoli in italiano. Non dichiarare che ogni contenuto editoriale è integralmente tradotto.
- Verifica completa dei fornitori, condizioni hosting commerciale e quadro privacy/contrattuale ancora da chiudere. Ricerca web non disponibile in questa sessione; non attestare conformità sulla sola base del codice.
- Bundle principale circa 984 kB (306 kB gzip): opportunità di ottimizzazione, non errore di build.
- Confronto tariffe sito/app saltato: checkout dell'app separata non presente. La vecchia implementazione server inclusa in questo repository non va attivata come backend privato di produzione.

## Rilascio e ripristino

Verdetto: **NO-GO produzione** finché destinatario e recapito reale, hosting e collaudo finale non sono chiusi. Dopo tali verifiche presentare commit e anteprima esatti per approvazione. Solo dopo approvazione eseguire le operazioni su main/produzione concordate.

Conservare il deployment pubblico attuale e la configurazione del dominio prima del rilascio. Per annullare le sole modifiche di questo audit sul ramo, usare un nuovo commit di revert, senza riscrivere la cronologia; un eventuale ripristino di produzione richiede il deployment precedente identificato e autorizzato.
