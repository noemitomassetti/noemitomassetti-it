/**
 * Final editorial overrides for legacy Italian articles. This wrapper is kept
 * separate from the historic long-form archive to preserve original drafts
 * while ensuring visitors see the current professional service perimeter.
 */
type Article = {id:number;title:string;excerpt:string;content:string};
export function alignLegacyBlogCopy<T extends Article>(article:T):T {
  let {title,excerpt,content}=article;
  if(article.id===13) {
    content=content.replace(
      "Contattami per una consulenza conoscitiva gratuita di 30 minuti",
      "Descrivimi le tue esigenze e richiedi un preventivo per supporto operativo"
    );
  }
  if(article.id===14) {
    title=title.replace("Senza Rischi","Con Maggiore Controllo");
    content=content.replace(
      "garantendo la massima sicurezza e riservatezza?",
      "riducendo i rischi per la sicurezza e la riservatezza?"
    ).replace(
      "sono pratiche rischiose che mettono in pericolo la sicurezza informatica e violano le normative sulla privacy (GDPR). Fortunatamente, oggi esistono protocolli consolidati e strumenti semplici per collaborare a distanza con assoluta tranquillità.",
      "sono pratiche rischiose che possono compromettere la riservatezza e creare problemi di protezione dei dati. Esistono strumenti e procedure utili per ridurre i rischi e mantenere il controllo degli accessi."
    ).replace(
      "3. Accordo di riservatezza (NDA) e conformità GDPR",
      "3. Riservatezza e protezione dei dati: accordi da valutare"
    ).replace(
      "Prima di avviare una collaborazione operativa continuativa, è fondamentale formalizzare:",
      "Prima di una collaborazione che coinvolge dati riservati o personali, il titolare valuta le misure e gli accordi necessari, anche con il proprio consulente:"
    ).replace(
      "Nomina a Responsabile del Trattamento (Art. 28 GDPR):</strong> definisce formalmente i limiti e le modalità con cui l'assistente virtuale tratta i dati personali per tuo conto.",
      "Accordi sulla protezione dei dati:</strong> quando applicabile, il titolare verifica con il proprio consulente i ruoli delle parti e l'eventuale accordo previsto dall'art. 28 GDPR."
    ).replace(
      "La mia garanzia di serietà professionale",
      "Un metodo di lavoro basato su responsabilità e autorizzazioni"
    ).replace(
      "Nel mio lavoro quotidiano con liberi professionisti e aziende, la riservatezza e la sicurezza dei dati non sono un dettaglio accessorio, ma la base stessa della fiducia. Utilizzo esclusivamente connessioni protette, ambienti cloud criptati e rigorosi standard di conservazione dei file.",
      "Nel supporto operativo da remoto considero essenziali la riservatezza, l'accesso limitato alle informazioni necessarie e le istruzioni concordate con il cliente. Strumenti, permessi e conservazione vanno definiti per ogni incarico, senza promettere sicurezza assoluta."
    ).replace(
      "analizzeremo le tue esigenze di sicurezza e imposteremo insieme un metodo di lavoro a prova di rischio.",
      "possiamo definire un perimetro operativo chiaro, con autorizzazioni e procedure coerenti con le tue esigenze. Gli eventuali aspetti legali e di conformità restano ai professionisti competenti."
    );
  }
  return {...article,title,excerpt,content};
}
