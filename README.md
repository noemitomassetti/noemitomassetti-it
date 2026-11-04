# Noemi Tomassetti — sito professionale NoeTom

Repository: `noemitomassetti/noemitomassetti-it`  
Sito pubblico: https://www.noemitomassetti.it  
Ramo di preparazione del rilascio: `chatgpt/site-release-audit-2026-10-29`  
Stato: **release candidate; NON ancora approvata per la produzione**.

## Posizionamento professionale

Sito professionale multilingue (IT/EN/FR/ES) di Noemi Tomassetti: assistenza virtuale, back office operativo, segreteria, customer care, gestione delle comunicazioni, contenuti digitali e traduzione/localizzazione. Il portfolio include esempi originali dimostrativi, esplicitamente indicati come tali; non attribuire casi fittizi a clienti reali.

**Non proporre** contabilità, fatturazione, supporto amministrativo/fiscale, telemarketing, chiamate a freddo, lead generation, prospecting, ricerca di contatti commerciali o reclutamento di intervistati. Il sito raccoglie richieste spontanee di preventivo: non eroga un servizio di acquisizione contatti per conto di terzi. NoeTom come applicazione operativa interna non viene presentata come software pubblico.

## Stack e comandi

React, TypeScript, Vite, Tailwind e Vitest. Dopo l'installazione delle dipendenze:

```bash
npm ci
npm run test
npm run build
npm run test:release
npx tsc --noEmit
npm run lint
```

Consultare gli esiti effettivi dei singoli comandi: un controllo automatico non sostituisce la revisione manuale.

## Rilascio: criteri obbligatori

1. **Non effettuare merge su `main` e non modificare il dominio pubblico** prima dell'approvazione del collaudo.
2. Verificare nel pannello Vercel il motivo ESATTO del blocco `build-rate-limit`, lo stato degli altri deployment, il piano applicabile all'uso commerciale e gli eventuali limiti. Non dedurre dai soli log GitHub che il blocco si sia risolto.
3. Controllare Build Command `npm run build`, Output Directory `dist` e regole `vercel.json` in un deployment di anteprima. Verificare che le pagine statiche e i link diretti del portfolio siano serviti correttamente.
4. **Web3Forms**: verificare la configurazione del provider in ambiente di anteprima, inviare una richiesta di test effettiva, controllarne l'arrivo in `info@noemitomassetti.it` e provare gli stati di errore. I test con provider simulato non comprovano la consegna reale. Non pubblicare chiavi private.
5. Collaudare su desktop e smartphone tutte le quattro lingue, il selettore lingua, i servizi, il portfolio e i dossier, la navigazione, i collegamenti, la privacy/cookie policy, l'accessibilità da tastiera e i casi di errore.
6. Controllare sitemap, robots.txt, canonical, hreflang e anteprime social **sul deployment reale**; controllare manualmente il copy nelle quattro lingue, in particolare servizi esclusi, esempi dimostrativi e tariffe.
7. Ottenuta l'approvazione, distribuire la versione verificata e ripetere le prove critiche sul dominio pubblico. Soltanto dopo procedere con gli annunci LinkedIn, Instagram e Facebook.

Per gli audit già eseguiti e per i limiti noti consultare la descrizione della **pull request #1**. I risultati dichiarati in quella PR sono evidenze del commit indicato, non certificazioni automatiche di commit futuri o del sito online.

## Note operative

- Conservare in produzione il sito esistente fino al via libera.
- Non cambiare piattaforma di hosting né attivare piani a pagamento senza autorizzazione.
- Non confondere sviluppo completato, deployment riuscito e pubblicazione approvata.
