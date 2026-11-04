# SITO NOEMITOMASSETTI.IT — consegna candidata alla pubblicazione
**Data:** 29 ottobre 2026. **Stato:** PRE-RELEASE, NON PUBBLICATO.

## Che cosa contiene
Questa copia locale parte dall'ultima iterazione disponibile in questa sessione, elaborata a partire dall'esportazione di Google AI Studio del 29/10/2026 ore 11:07 circa. Non è possibile dimostrare che contenga **tutte** le 65 modifiche indicate alle ore 18:04 dalla schermata di Google AI Studio: quelle modifiche non risultano ancora sincronizzate con GitHub. **Non sovrascrivere Google AI Studio né eseguire Push su main.**

Modifiche aggiuntive eseguite in questa revisione: eliminati dai CTA di diversi vecchi articoli del blog gli inviti a una call conoscitiva gratuita e sostituiti con richieste scritte; corretti i link dei CTA del blog ai percorsi /it/contatti e /it/servizi; sostituito il favicon remoto con `public/favicon.svg`; aggiunto `scripts/preflight-site.cjs`; corretta la descrizione principale obsoleta nel README.

## Verifiche SUPERATE in locale
- `NODE_PATH=$(npm root -g) node scripts/preflight-site.cjs`: 109 TS/TSX, 246 import relativi verificati, 20 documenti HTML e 21 controlli strutturali.
- `NODE_PATH=$(npm root -g) node scripts/release-static-check.cjs`: 113 file TS/TSX (app+server+config), guardrail pubblico/privato e JSON; successo.
- `node scripts/assistant-faq-tests.cjs`: 13 verifiche FAQ/servizi.
- `node scripts/assistant-portfolio-regression.cjs`: 12 esempi di intenti, quattro lingue, trasparenza chatbot, 20 documenti portfolio.
- `node scripts/editorial-pricing-check.cjs`: coerenza editoriale e tariffe locali; controllo incrociato con NoeTom NON possibile da questa sola cartella.
- `node scripts/site-adapter-runtime-checks.cjs`: 18/18 prove sintetiche relative all'invio delle richieste (non sono messaggi realmente consegnati).
- `public/sitemap.xml`: 44 URL diversi, tutti con corrispondente rotta React.

## Verifiche NON superate perché NON eseguite
- `npm install`, `npx tsc --noEmit`, `npm run build`, `npm test`: non completabili nell'ambiente corrente senza accesso al registry npm (`EAI_AGAIN`).
- Browser con build effettiva, smartphone, responsività e accessibilità end-to-end.
- Consegna effettiva di una richiesta di test a `info@noemitomassetti.it` o al destinatario FormSubmit operativo: non inviare dati personali reali prima di verifica.
- Verifica configurazione account Vercel, dominio, limiti del piano, configurazione delle variabili e regole privacy/cookie.

## Rischi e condizioni obbligatorie per il rilascio
1. Esportare o sincronizzare **in modo reversibile** le 65 modifiche ancora in Google AI Studio; conservare una copia ZIP prima di qualsiasi sostituzione.
2. Effettuare build e browser smoke test sul **medesimo commit che si intende pubblicare**.
3. Verificare il vero destinatario del modulo: `src/lib/api/contactDelivery.ts` utilizza di default `noemitom@gmail.com` per continuità, salvo `VITE_FORM_RECIPIENT_EMAIL`. L'indirizzo pubblico è `info@noemitomassetti.it`; non sono necessariamente la medesima casella. Attivazione/recapito FormSubmit devono essere testati sul dominio/recipient configurato.
4. Non impostare `VITE_API_BASE_URL` finché il backend NoeTom non sia sicuro, persistente, raggiungibile e testato.
5. Non sincronizzare `firestore.rules` del sito con il progetto NoeTom: il sito pubblico imposta deny-all.
6. Prima di deploy di produzione: confermare idoneità del piano hosting per attività commerciale, backup, anteprima, approvazione esplicita.

## Comandi in ambiente con npm disponibile
```bash
npm install
npx tsc -p tsconfig.app.json --noEmit
npm run build
npm test
npm run test:release
npm run preflight:offline
npm run preview
```

**Nessun collegamento qui certifica il recapito email o una pubblicazione.** I test automatici forniscono solo segnali parziali; la prova nel browser e la consegna email vanno eseguite sulla versione candidata esatta.
