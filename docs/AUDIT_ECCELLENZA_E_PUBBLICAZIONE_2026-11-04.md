# Audit editoriale, tecnico e competitivo — 4 novembre 2026

> **Aggiornamento di stato del 4/11/2026 (successivo a questo audit):** la PR #1 è stata unita a `main` nel commit `5469bf8`, e il deployment Vercel ha avuto esito positivo. Le diciture seguenti «PR in bozza», «produzione invariata», «nessun merge» e «blocco attuale Vercel» descrivono un momento precedente e **non rappresentano più lo stato attuale**. La nuova revisione di qualità è nella [PR #2](https://github.com/noemitomassetti/noemitomassetti-it/pull/2), non ancora pubblicata. Rimangono da verificare il recapito email sul dominio, la conformità del piano di hosting all'uso commerciale e l'audit manuale completo.


## Decisione di rilascio

Codice e contenuti sul ramo `chatgpt/site-release-audit-2026-10-29`. Il sito pubblico non è stato ancora sostituito. **Il deploy pubblico richiede una piattaforma autorizzata all'uso commerciale, verifica del form e un controllo finale del dominio.**

## Benchmark esterno (non copiare risultati di altri)

- **Punto F**, https://www.punto-f.com/it/portfolio/ : portfolio traduttivo basato su incarichi reali, con titoli e contesti di intervento.
- **Katie Uniacke**, https://www.katieuniacke.com/portfolio/ : esempi di traduzione/localizzazione accompagnati da immagini e testimonianze effettive.
- **VA Digital Hub**, https://vadigitalhub.com/portfolio/ : struttura per progetti e deliverable, con contesti di supporto operativo.
- **Onefold Translation**, https://onefoldtranslation.com/portfolio : filtro per disciplina, coppie linguistiche e dati di realizzazione.
- **Haley Bennett VA**, https://haleybennettva.com/portfolio : descrizione delle responsabilità e risultati verificabili di clienti reali.

**Posizione del nostro portfolio:** maggiore profondità dimostrativa rispetto a semplici descrizioni di servizio: 12 confronti traduttivi e 15 dossier operativi integrali, con procedure e limiti espliciti. **Differenza non colmabile artificialmente:** i campioni sono originali e fittizi; non si possono presentare come testimonianze di clienti reali, incarichi pagati, metriche di aumento vendite o certificazioni esterne. Quando disponibili, aggiungere casi realmente autorizzati e risultati documentabili in una sezione distinta, senza sostituire i dossier dimostrativi.

## Checklist di coerenza

Sei categorie di servizi offerte nelle quattro lingue: segreteria/back office operativo, traduzioni professionali EN/FR/ES → IT e localizzazione per il mercato italiano, contenuti e revisione, ricerca informativa, documenti/strumenti digitali e testi editoriali per siti. Per l'estero prevalgono localizzazione verso italiano e comunicazioni con clienti italiani esistenti.

**Non offerti:** amministrazione, contabilità, emissione fatture, consulenza fiscale, acquisizione contatti, lead generation, telemarketing, cold outreach, reclutamento intervistati, hosting o sviluppo tecnico di siti, traduzioni giurate.

Il catalogo pubblico comprende 21 dossier: 6 esempi di traduzione professionale EN/FR/ES → IT e 15 esempi operativi. I 6 dossier con traduzioni IT → EN/FR/ES sono esclusi dalla presentazione pubblica perché non corrispondono ai servizi offerti; restano disponibili 18 casi sintetici e 22 documenti originali, tutti dichiarati come esempi dimostrativi non commissionati. Servizi e categorie coincidono nei testi italiani, inglesi, francesi e spagnoli.

## SEO e tecnologia

**Google Search Central** (https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) raccomanda pre-rendering/SSR per una scansione più affidabile con JavaScript; https://developers.google.com/search/docs/specialty/international/localized-versions/ descrive canonical e hreflang reciproci.

Implementazione: 204 URL nella sitemap, senza duplicati; **203 file HTML statici per le pagine indicizzabili oltre alla homepage**, con canonical, OG e hreflang leggibili dai crawler. Controllo automatico `scripts/release-html-coverage.cjs` parte del gate `npm run test:release`. I metadati del blog riflettono i 52 articoli nelle quattro lingue e sono marcati `og:type=article`. Per i browser con JavaScript, le stesse route restano interattive in React.

**Accessibilità:** test automatici di tastiera, navigazione mobile e assenza di overflow; ciò **non equivale** a certificazione WCAG 2.2 AA. Requisiti WCAG: https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/ . Prima della messa online controllare contrasto, ingrandimento 200%, screen-reader e stato del focus.

## Hosting conforme e costo

**Vercel:** termini ufficiali https://vercel.com/legal/terms , uso Hobby solo personale/non commerciale; il sito professionale è commerciale. Stato attuale del controllo Vercel = `build-rate-limit`. Non acquistare Pro senza consenso.

**Alternativa gratuita preparata ma NON attivata:** `netlify.toml` (Netlify Free, con uso commerciale ammesso secondo l'assistenza del provider: https://answers.netlify.com/t/can-we-use-netlify-free-plan-for-commercial-purposes/41545 ). Compilazione `npm run build`; file statici prioritari rispetto al fallback SPA, contenuti noindex sui deploy di prova; produzione con `SITE_PUBLIC_RELEASE=true`. Consultare limiti attuali https://www.netlify.com/pricing/ e termini prima della decisione. La proprietaria preferisce Vercel e deve approvare qualsiasi migrazione.

## Contatto, analytics e marketing

- Verificare ricezione reale Web3Forms tramite invio dal dominio e arrivo nella casella professionale; i mock success/403 non certificano la consegna.
- In caso di errore, l'interfaccia mantiene la richiesta e offre il collegamento mailto all'indirizzo professionale.
- Testare la gestione del consenso analytics e le pagine privacy/cookie sulla versione pubblica, senza attestare conformità legale automatica.
- Collegare i post su LinkedIn, Instagram, Facebook soltanto quando le rispettive pagine dossier sono realmente pubbliche. Utilizzare il kit editoriale già preparato, verificando il marchio. Non inventare clienti, valutazioni o fatturati.
- Verificare direttamente LinkedIn: vecchie diciture indicizzate come «assistenza amministrativa» e «ricerca contatti» non fanno parte dell'offerta aggiornata.

## Via libera

1. Ultimi workflow **build/test e browser smoke** conclusi positivamente sul medesimo commit.
2. Hosting idoneo all'uso commerciale collegato al dominio, **senza** sovrascrivere produzione prima della verifica.
3. Prova reale email ricevuta oppure decisione esplicita di mantenere soltanto il contatto `mailto:` fino alla verifica.
4. Verifica live di canonical, metadati social, percorsi IT/EN/FR/ES, HTTPS, prestazioni e layout mobile.
5. Revisione linguistica umana e approvazione delle grafiche e dei testi social prima dell'uscita.

**Fino ad allora: PR #1 in bozza, nessun merge in main, nessun cambio DNS, nessun post pubblicato.**
