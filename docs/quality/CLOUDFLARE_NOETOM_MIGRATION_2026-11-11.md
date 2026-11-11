# Migrazione NoeTom a Cloudflare Workers Free — preparazione privata 11/11/2026

**Non è stata effettuata alcuna migrazione, attivazione o acquisto.** Il dominio `noemitomassetti.it` e `www.noemitomassetti.it` rimane su Vercel finché la titolare non approva il passaggio.

## Perché preparare Cloudflare

- Vercel Hobby è destinato a uso non commerciale; per il sito professionale occorre una soluzione compatibile.
- Cloudflare Workers Free prevede una quota gratuita per l'esecuzione API e il servizio di asset statici, nei limiti pubblicati. Questo NON include un modello OpenAI gratuito e non garantisce la gratuità di eventuali servizi aggiuntivi.
- Non si crea nessun nuovo sito pubblicato durante la predisposizione e i test di GitHub.

## File già preparati

- `wrangler.jsonc`: `workers_dev:false`, nessun collegamento al dominio, asset `dist`, percorsi API limitati a `/api/*`, percorso SEO senza slash finale, SPA fallback.
- `cloudflare/worker.ts`: carica la **stessa funzione OpenAI** dell'anteprima Vercel tramite `createConciergeGateway(env)`; le altre API inesistenti danno 404, senza invocare ChatGPT.
- `scripts/build-cloudflare-assets.cjs`: genera `dist/_redirects` dai 301 presenti in `vercel.json`, più `dist/_headers` di sicurezza.
- `scripts/check-cloudflare-config.cjs`: verifica config, reindirizzamenti, segreti non inclusi e file del sito.
- `src/test/cloudflareWorkerAdapter.test.ts`: test API spenta e assenza di richieste fatturabili, 404, contenuto statico.
- `.github/workflows/cloudflare-portability-dry-run.yml`: `wrangler deploy --dry-run` **senza pubblicazione**; non utilizza credenziali di Cloudflare.

## Prove prima di pubblicare

1. Superare i test compilazione, Vitest, preflight, browser IT/EN/FR/ES, accessibilità, SEO, e il dry-run Wrangler.
2. Avere un account Cloudflare autorizzato dalla titolare. Non aprire un account o cambiare zona DNS in sua assenza.
3. Creare **prima una preview separata**, non indicizzabile, e testare la gestione di tutte le rotte pre-renderizzate (portfolio, blog, dossier), redirect 301, cookie, moduli, favicon, robots e sitemap, non solo la homepage.
4. Verificare disponibilità dei servizi email esistenti: la migrazione del sito NON deve cambiare automaticamente MX, SPF, DKIM o DMARC.
5. Non inserire in GitHub né in chat `OPENAI_API_KEY`. In Cloudflare aggiungerla, **solo dopo autorizzazione a consumi API**, come segreto. Finché la chiave manca, l'assistente guidato resta operativo.
6. Prima di abilitare AI con visitatori: controllo di quota complessivo, privacy/GDPR, eventuale credito API/prelievo autorizzato e test di conversazione reale.
7. Collaudare Web3Forms fino alla ricezione effettiva di una mail nella casella autorizzata.
8. Verificare che l'app privata NoeTom abbia accesso IMAP sicuro e che registri una richiesta una sola volta, creando pratica, attività e bozza da approvare. **Senza questo, il flusso sito→app non è operativo.**
9. Ottenere l'OK esplicito della titolare prima del trasferimento del dominio e della messa online.

## Costi e limiti

**ChatGPT Plus non copre i costi API sul sito**: l'API OpenAI usa una fatturazione separata. Qui non sono state create chiavi, crediti o abbonamenti.

Cloudflare Workers Free: quota attuale 100.000 invocazioni giornaliere, CPU fino a 10 ms per richiesta; gli asset statici sono gratuiti e illimitati nel piano. Le funzioni oltre quota possono restituire HTTP 429. Le tariffe e i limiti possono cambiare; confermare prima dell'attivazione.

## Fonti

- Cloudflare: https://developers.cloudflare.com/workers/platform/pricing/
- Cloudflare static assets: https://developers.cloudflare.com/workers/static-assets/
- Cloudflare HTML routes: https://developers.cloudflare.com/workers/static-assets/routing/advanced/html-handling/
- Cloudflare Wrangler dry-run: https://developers.cloudflare.com/workers/wrangler/commands/workers/
- OpenAI API e Plus: https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus
