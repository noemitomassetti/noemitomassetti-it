# Noemi Tomassetti — esito tecnico e gate di pubblicazione
Data verifica: 1 novembre 2026

## Versioni e integrità
- Sviluppo definitivo del sito: `chatgpt/site-release-audit-2026-10-29`
- PR di revisione: https://github.com/noemitomassetti/noemitomassetti-it/pull/1
- `main` è deliberatamente invariato. NON usare Auto-merge.
- Sito pubblico noemitomassetti.it non sostituito; l'anteprima Cloudflare si aggiorna sul ramo di sviluppo.
- Anteprima Cloudflare: https://chatgpt-site-release-audit-2.noemitomassetti-it.pages.dev
- Ultimi test TypeScript, build React/Vite, Vitest, preflight e test browser: eseguiti con esito positivo prima del rilascio e ripetuti da GitHub Actions.

## Form Web3Forms: configurazione già nel codice
- Chiave PUBBLICA inserita in `src/lib/api/web3formsPublicConfig.ts` (il suo valore NON è una password).
- Endpoint chiamato dal BROWSER via JSON `https://api.web3forms.com/submit`; niente backend con funzione che invia al provider.
- FormSubmit è disattivato salvo esplicito opt-in di rollback.
- Se il provider rifiuta o non conferma, il modulo conserva i dati e propone l'apertura di una email precompilata a `info@noemitomassetti.it`.
- GDPR, test provider simulati e gestione antiduplificazione verificati tecnicamente.
- Indirizzo `info@noemitomassetti.it` marcato «verified» in Linked Emails nel pannello Web3Forms (screenshot fornito dall'utente).
- **Non dimostrato:** che il form "Noemi Tomassetti - Richieste di preventivo" abbia impostato `info@noemitomassetti.it` come unico **Recipient Email** nelle sue Settings.
- **Non dimostrato:** ricezione reale di richiesta Web3Forms sulla casella professionale.

### Esito della prova sintetica GitHub Actions del 1 novembre 2026
- Risposta HTTP 403 del server Web3Forms: `This method is not allowed. Use our API in client side or contact support with server IP address (Pro plan is required)`.
- Test volutamente eseguito una sola volta. Workflow e trigger monouso rimossi dal ramo dopo il risultato.
- **Interpretazione:** il servizio FREE blocca POST server-side. Questa prova NON dimostra il fallimento del form client-side e non giustifica upgrade a pagamento.
- Documentazione ufficiale: https://docs.web3forms.com/getting-started/troubleshooting
- Per il piano gratuito il test deve essere eseguito da un browser ordinario. Alcuni domini preview `pages.dev` possono essere bloccati da Web3Forms; preferire dominio proprietario verificato/approvato e contattare supporto prima di attribuire fallimenti al codice.

## Verifica live su hosting: superata
- 1 novembre 2026: GitHub Actions ha verificato tramite HTTPS l'anteprima **realmente ospitata** su Cloudflare Pages per `/`, `/it`, `/fr`, `/es`, `/it/contatti`, `/it/esempi-di-lavoro` e il documento 20 del portfolio.
- Tutte le rotte hanno risposto **HTTP 200**, con contenuto HTML.
- Esecuzione verificabile: https://github.com/noemitomassetti/noemitomassetti-it/actions/runs/41321907199
- Il test non ha inviato moduli né certifica la consegna email.
- Il workflow temporaneo è stato rimosso dal ramo dopo il suo unico utilizzo.

## Ultimi passi verificabili
1. Nel dashboard Web3Forms aprire il modulo **Noemi Tomassetti - Richieste di preventivo > Settings**.
2. Impostare **Recipient Email = info@noemitomassetti.it** (indirizzo già verificato), salvare. Nessun indirizzo Gmail come destinatario del modulo.
3. Provare **UNA** richiesta sintetica dal browser normale, con oggetto `TEST MODULO SITO — nessun incarico`; controllare la notifica Web3Forms, la casella professionale e lo spam. Se `pages.dev` non è accettato dal piano Free, predisporre un sottodominio professionale di staging o testare sul dominio dopo cutover con rollback pronto.
4. Hosting gratuito idoneo: il progetto Cloudflare Pages è già collegato al ramo e distribuisce anteprime; configurare il dominio personalizzato solo con l'approvazione dell'utente. Il Vercel Hobby non è utilizzabile per la promozione commerciale di servizi.
5. Solo dopo test positivo e approvazione esplicita della proprietaria: completare migrazione DNS se necessaria, merge PR #1 su `main`, eseguire verifica finale su `https://www.noemitomassetti.it` (IT/EN/FR/ES, HTTPS, form, portfolio, mobile, canonical, redirect).

## Vincoli di rilascio
- Non presentare mai i provider acceptance test come prova della consegna email.
- Non impostare il piano a pagamento, non pubblicare su `main` e non cambiare il dominio o i record DNS senza approvazione.
- NoeTom non deve ritardare la pubblicazione del sito.
