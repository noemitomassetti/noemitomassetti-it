# Revisione linguistica e browser — 11 novembre 2026

**Ambiente:** solo branch `chatgpt/final-quality-polish-2026-11-10`, PR #5 in bozza. **Non pubblicare né integrare in `main` senza consenso esplicito della titolare.**

## Perimetro linguistico
- Italiano: riferimento professionale e contenuti chiari, senza claim commerciali non verificati.
- Inglese: standard British English, terminologia coerente (localisation, specialised, enquiries).
- Francese: uso naturale e professionale di devis, secrétariat, relation client, localisation, suivi, données personnelles.
- Spagnolo: tono professionale coerente al `tú`, uso di presupuesto, atención al cliente, localización, páginas de destino, seguimiento.

## Modifiche editoriali applicate
1. Menu, cambio lingua e descrizioni accessibili dei social nelle quattro lingue.
2. Titoli e denominazioni delle categorie portfolio in EN/FR/ES.
3. Email alternativa del form: oggetto, campi e contenuto di servizio correttamente localizzati in IT/EN/FR/ES (test di regressione), conservando il testo libero dell'utente.
4. Titoli, headline e microcopy di homepage, servizi, risorse, presentazione, metodo e footer; rimosse costruzioni troppo letterali in EN/FR/ES e migliorata la leggibilità IT.
5. Portfolio operativo: registro di 27 email fittizie coerente con le categorie 12+8+4+3 e con il riepilogo. Non indicare come incarico commissionato.
6. Sezione libri completamente nascosta nella revisione pubblicabile fino a decisione esplicita della titolare.

## Copertura dei controlli
- Test unitari: parità strutturale delle sezioni essenziali dei quattro dizionari, presenza di titoli e messaggi critici, categorie e opzioni del modulo.
- Browser Playwright: rotte principali localizzate IT/EN/FR/ES, controlli di `html lang`, canonical, cinque alternates `hreflang`, overflow su mobile.
- Copertura browser preesistente: homepage, portfolio, 22 documenti nelle quattro lingue, 26 dossier nelle quattro lingue, blog, responsività, tastiera e form con provider simulato.
- Audit automatizzato WCAG AA: rappresentativo, non sostitutivo di validazione completa con tecnologie assistive.

## Limiti e prerequisiti di approvazione
- I test automatici **non certificano** la naturalezza o la correttezza di ogni singola frase, soprattutto nei dossier, articoli lunghi e documenti dimostrativi.
- Una revisione umana integrale, con approvazione editoriale finale pagina per pagina nelle quattro lingue, resta distinta dai controlli automatizzati.
- La ricezione effettiva di un messaggio Web3Forms nella casella destinataria va testata; i test con provider simulato non provano la consegna.
- Grafica e contenuto devono ricevere il benestare della titolare nell'anteprima Vercel. **Nessuna pubblicazione fino all'OK esplicito.**
