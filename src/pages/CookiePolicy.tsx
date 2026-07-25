import { Layout } from "@/components/Layout";

const CookiePolicy = () => {
  return (
    <Layout>
      <div className="container py-16 md:py-24 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Cookie Policy</h1>
        <p className="text-foreground/60 text-sm mb-12">
          Ai sensi dell'art. 122 del D.Lgs. 196/2003 e delle Linee Guida del Garante — Ultimo aggiornamento:{" "}
          {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long" })}
        </p>

        <div className="space-y-12 text-foreground/85 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cosa sono i Cookie?</h2>
            <p>
              I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell'utente
              (computer, smartphone, tablet) durante la navigazione. Permettono al sito di ricordare
              le azioni e le preferenze dell'utente (come la lingua, la dimensione dei caratteri e altre
              impostazioni di visualizzazione) in modo che non debbano essere reinserite ogni volta che
              si torna sul sito o si naviga da una pagina all'altra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Tipologie di Cookie Utilizzati</h2>

            <div className="space-y-6">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    Tecnici
                  </span>
                  <h3 className="font-semibold text-foreground">Cookie Tecnici (Necessari)</h3>
                </div>
                <p className="text-sm text-foreground/75 mb-3">
                  Questi cookie sono strettamente necessari al funzionamento del sito. Senza di essi,
                  alcune funzionalità di base non sarebbero disponibili. Non richiedono il consenso
                  dell'utente ai sensi dell'art. 122, comma 1, D.Lgs. 196/2003.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse">
                    <thead>
                      <tr className="bg-secondary/40">
                        <th className="text-left p-2 border border-border/40 text-foreground/80">Nome</th>
                        <th className="text-left p-2 border border-border/40 text-foreground/80">Finalità</th>
                        <th className="text-left p-2 border border-border/40 text-foreground/80">Durata</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-2 border border-border/30 font-mono">session</td>
                        <td className="p-2 border border-border/30">Gestione sessione utente</td>
                        <td className="p-2 border border-border/30">Sessione</td>
                      </tr>
                      <tr className="bg-secondary/10">
                        <td className="p-2 border border-border/30 font-mono">preferences</td>
                        <td className="p-2 border border-border/30">Salvataggio preferenze di navigazione</td>
                        <td className="p-2 border border-border/30">1 anno</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-secondary text-secondary-foreground text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    Analitici
                  </span>
                  <h3 className="font-semibold text-foreground">Cookie Analitici (con consenso)</h3>
                </div>
                <p className="text-sm text-foreground/75">
                  Questi cookie raccolgono informazioni aggregate e anonimizzate su come gli utenti
                  utilizzano il sito (pagine visitate, tempo di permanenza, ecc.). I dati vengono
                  utilizzati esclusivamente per migliorare le prestazioni del sito. Richiedono il
                  consenso dell'utente. Attualmente questo sito{" "}
                  <strong className="text-foreground/90">non utilizza cookie analitici di terze parti</strong>.
                  In caso di futura integrazione (es. Google Analytics in modalità anonimizzata), la
                  presente policy verrà aggiornata.
                </p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-muted text-muted-foreground text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    Terze parti
                  </span>
                  <h3 className="font-semibold text-foreground">Cookie di Terze Parti</h3>
                </div>
                <p className="text-sm text-foreground/75">
                  Il sito potrebbe contenere link a piattaforme social esterne (Instagram, Facebook,
                  LinkedIn). Questi servizi possono impostare cookie propri quando vengono visitati.
                  Il Titolare non ha controllo su tali cookie. Si consiglia di consultare le privacy
                  policy delle rispettive piattaforme:
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  {[
                    { name: "Instagram / Meta", url: "https://privacycenter.instagram.com/policy" },
                    { name: "Facebook / Meta", url: "https://www.facebook.com/policy/cookies/" },
                    { name: "LinkedIn", url: "https://www.linkedin.com/legal/cookie-policy" },
                  ].map((p) => (
                    <li key={p.name} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <a href={p.url} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                        {p.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Come Gestire i Cookie</h2>
            <p className="mb-4">
              L'utente può scegliere di abilitare o disabilitare i cookie direttamente dal proprio browser.
              La disabilitazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.
              Di seguito le istruzioni per i principali browser:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { browser: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                { browser: "Mozilla Firefox", url: "https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata" },
                { browser: "Safari", url: "https://support.apple.com/it-it/guide/safari/sfri11471/mac" },
                { browser: "Microsoft Edge", url: "https://support.microsoft.com/it-it/windows/eliminare-e-gestire-i-cookie" },
              ].map((b) => (
                <a
                  key={b.browser}
                  href={b.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-secondary/20 border border-border/50 rounded-lg p-3 hover:border-primary/40 transition-colors group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm font-medium group-hover:text-primary transition-colors">{b.browser}</span>
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm text-foreground/70">
              Per maggiori informazioni sulla gestione dei cookie è possibile visitare il sito del Garante
              per la Protezione dei Dati Personali:{" "}
              <a href="https://www.garanteprivacy.it" target="_blank" rel="noreferrer" className="text-primary hover:underline">
                www.garanteprivacy.it
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Base Giuridica</h2>
            <p>
              Il trattamento dei dati personali attraverso cookie tecnici è fondato sull'interesse
              legittimo del Titolare (art. 6, par. 1, lett. f GDPR) e sull'art. 122 D.Lgs. 196/2003.
              Per i cookie analitici e di profilazione è richiesto il consenso esplicito dell'interessato
              (art. 6, par. 1, lett. a GDPR).
            </p>
          </section>

          <section className="bg-secondary/20 border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-2">Titolare del Trattamento</h2>
            <p className="text-sm text-foreground/75">
              Noemi Tomassetti — Virtual Assistant / Translator<br />
              Email:{" "}
              <a href="mailto:info@noemitomassetti.it" className="text-primary hover:underline">
                info@noemitomassetti.it
              </a>
              <br />
              Per esercitare i tuoi diritti, consulta la nostra{" "}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Informativa sulla Privacy
              </a>.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CookiePolicy;
