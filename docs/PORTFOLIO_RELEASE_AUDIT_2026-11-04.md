# Portfolio — audit di rilascio, 4 novembre 2026

**Ambiente:** ramo `chatgpt/site-release-audit-2026-10-29` e PR #1 in bozza. **Produzione:** invariata. **Hosting previsto:** Vercel, senza upgrade.

## Catalogo e allineamento professionale

**Posizionamento uniforme con LinkedIn:** Assistente virtuale multilingue; segreteria e back office operativo; customer care scritto per clienti già acquisiti; email e agenda; traduzione IT↔EN/FR/ES; revisione editoriale e contenuti digitali. Le sei famiglie pubblicate sono:
1. Segreteria organizzativa, back office, email, agenda, ordini, preventivi su listino approvato e assistenza ai clienti esistenti;
2. Traduzione/localizzazione nelle sei direzioni linguistiche, priorità internazionale verso l'italiano;
3. Scrittura e revisione di contenuti, FAQ, newsletter informative e cataloghi;
4. Ricerca informativa e confronti a supporto di incarichi esistenti;
5. Organizzazione documentale, cloud e procedure digitali di base;
6. Testi editoriali per siti e landing page, **non** sviluppo o hosting tecnico.

**Esclusioni senza eccezioni:** amministrazione, contabilità, fatturazione, telemarketing, chiamate a freddo, lead generation, prospecting, ricerca di contatti commerciali, reclutamento intervistati o iscritti. Clienti esteri: aiuto in italiano a chi lavora con l'Italia, oltre a traduzioni dall'italiano verso EN, FR, ES previa valutazione dell'incarico e dell'eventuale revisione madrelingua.

**Materiali controllati:** 12 traduzioni a fronte (due per ciascuna delle sei direzioni), 15 dossier di assistenza con deliverable completi, 18 casi metodologici precedenti, 22 documenti dimostrativi. Tutti i casi sono originali fittizi, non incarichi o testimonianze reali.

## Verifiche implementate

- Servizi e modulo contatti confrontati su tutte e quattro le lingue tramite `src/test/publicProfileAlignment.test.ts`.
- Fedeltà del catalogo e unicità degli URL verificate in `src/test/portfolioDeepCoverage.test.ts`.
- Rimossi **44 URL duplicati** dal sitemap, ora 204 URL unici.
- Build con **135 pagine statiche multilingue** per SEO e anteprime social dei dossier e delle pagine principali, senza cambiare la navigazione React.
- Uniformato il voto della laurea come **110/110 e lode**, evitando equivalenze estere inaccurate.
- Eliminato il riferimento promozionale all'app NoeTom nei meta iniziali.
- Vecchi articoli aggiornati a livello di presentazione: niente invito obsoleto a una call gratuita, promesse di sicurezza assoluta o conformità GDPR automatica.
- `src/test/blogLegacyEditorialGuard.test.ts` protegge le correzioni editoriali ai vecchi articoli.
- CI corrente: verificare l'ultimo commit sul ramo, non fidarsi di esiti precedenti.

## Condizioni ancora esterne al repository

1. **Web3Forms:** serve conferma reale che la richiesta di prova arrivi alla casella professionale. Test simulati non dimostrano la consegna finale; precedenti test non avevano confermato il recapito.
2. **Vercel:** un controllo di deploy ha restituito `build-rate-limit` del piano, non un errore della compilazione. Non fare upgrade o migrare hosting automaticamente; verificare la preview quando accessibile e la lettura delle anteprime OG per gli URL dei dossier.
3. **LinkedIn:** il profilo pubblicamente indicizzato può avere una versione obsoleta della voce «Assistenza amministrativa» e vecchi contenuti sulla ricerca contatti; accesso non autenticato non può certificare né correggere l'account attuale. Allineare eventualmente queste voci manualmente.
4. **Collaudo finale:** rilettura umana di tutte le direzioni traduttive, controlli visuali e accessibilità su schermi reali, prova di contatto e approvazione esplicita prima del rilascio.

**Regola:** mantenere PR #1 in bozza. Non unire a `main`, non modificare il sito pubblico, non pubblicare sui social e non acquistare piani a pagamento senza consenso esplicito.

**Materiali social:** piano con 12 contenuti `docs/piano-editoriale-portfolio-social-2026-2027.md`; primo kit PDF e caroselli in questa conversazione.
