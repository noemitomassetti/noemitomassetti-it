# Attivazione futura libri digitali / Amazon KDP

La pagina Libri e pubblicazioni è stata predisposta in italiano, inglese, francese e spagnolo. È volutamente non visibile in produzione: `PUBLICATIONS_VISIBLE = false` in `src/lib/publicationsCatalog.ts`.

Quando il primo ebook sarà realmente disponibile:
1. Verificare il titolo, la lingua, il formato, la descrizione e la URL pubblica della scheda Amazon (non un link di bozza KDP).
2. Inserire in `PUBLICATIONS` i metadati confermati, le descrizioni localizzate in IT/EN/FR/ES, la copertina definitiva autorizzata e un eventuale estratto pubblicabile.
3. Impostare `PUBLICATIONS_VISIBLE = true`: questo attiva automaticamente le pagine `/publications`, `/it/libri`, `/fr/livres`, `/es/libros` e i collegamenti di navigazione.
4. Aggiungere le quattro pagine alla sitemap, con `hreflang` reciproci, solo dopo l'attivazione.
5. Controllare anteprime social (Open Graph), link Amazon sul mercato corretto, navigazione mobile, impostazioni SEO e il collaudo Vercel.
6. Comunicare la pubblicazione sui social condividendo la pagina del sito o la scheda Amazon ufficiale, senza recensioni o prezzi inventati.

La pagina non gestisce direttamente vendita, pagamento o consegna: tutto avviene su Amazon. Per eventuali link di affiliazione servirebbero valutazioni e informative specifiche. La collana `Professional Languages in Practice` è in preparazione: non indicare titoli come pubblicati finché non lo sono.
