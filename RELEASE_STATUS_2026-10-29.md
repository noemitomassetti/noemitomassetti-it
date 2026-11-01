# Sito Noemi Tomassetti — stato di pubblicazione (29 ottobre 2026)

## Versione verificata
- Sorgenti caricati dal precedente archivio Google AI Studio e consolidati con le successive correzioni.
- Ramo di lavoro: `chatgpt/site-release-audit-2026-10-29`.
- `main` e sito pubblico **non modificati**.
- Full build Vite, TypeScript, preflight, test unitari e QA di rilascio superati: https://github.com/noemitomassetti/noemitomassetti-it/actions/runs/40962186306
- Build automatica più recente: https://github.com/noemitomassetti/noemitomassetti-it/actions/runs/40963976038
- Browser Chromium: home IT/EN/FR/ES, contatti, portfolio, 404, documenti portfolio, menu mobile e larghezze 390/768/1365/1536 px superati: https://github.com/noemitomassetti/noemitomassetti-it/actions/runs/40963744065

## Bloccanti per rilascio di produzione
1. **Consegna richiesta email non verificata.** FormSubmit ha restituito Cloudflare HTTP 403 al test sintetico proveniente dal runner GitHub; può essere una restrizione anti-bot e non prova che il form invii o non invii da un browser ordinario. Non affermare di aver ricevuto email. Serve prova reale sulla pagina di anteprima verificando il messaggio in Gmail e l'eventuale conferma destinatario FormSubmit.
2. **Hosting per attività commerciale.** Verificare piano Vercel prima di pubblicare. Il piano gratuito Hobby è limitato a uso non commerciale; il sito promuove servizi professionali. Non effettuare upgrade a pagamento senza consenso; in alternativa scegliere un hosting gratuito compatibile con uso commerciale.
3. **Approvazione esplicita prima di merge/push su `main`, dominio o DNS.**

Fallback presente in UI se il provider email non risponde: `mailto:info@noemitomassetti.it`.

Non distribuire un sito con modulo contatti presentato come funzionante fino al collaudo reale di consegna.
