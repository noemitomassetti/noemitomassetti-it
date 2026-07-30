import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";

const PrivacyPolicy = () => {
  useSEO({
    title: "Privacy Policy | Noemi Tomassetti Assistente Virtuale",
    description: "Informativa sulla privacy di Noemi Tomassetti, Assistente Virtuale. Scopri come vengono raccolti e trattati i tuoi dati personali in conformità al GDPR.",
    canonical: "https://www.noemitomassetti.it/privacy-policy",
    noindex: true,
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.noemitomassetti.it/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Privacy Policy",
          "item": "https://www.noemitomassetti.it/privacy-policy"
        }
      ]
    }
  });

  return (
    <Layout>
      <div className="container py-16 md:py-24 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Informativa sulla Privacy</h1>
        <p className="text-foreground/60 text-sm mb-12">
          Ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR) — Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", { year: "numeric", month: "long" })}
        </p>

        <div className="space-y-12 text-foreground/85 leading-relaxed">

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Titolare del Trattamento</h2>
            <div className="bg-card border border-border rounded-xl p-6 space-y-1 text-sm">
              <p><strong className="text-primary">Titolare:</strong> Noemi Tomassetti</p>
              <p><strong className="text-primary">Attività:</strong> Virtual Assistant / Translator — Professionista autonoma</p>
              <p><strong className="text-primary">Email:</strong>{" "}
                <a href="mailto:info@noemitomassetti.it" className="text-primary hover:underline">
                  info@noemitomassetti.it
                </a>
              </p>
              <p><strong className="text-primary">Sede operativa:</strong> Italia (lavoro da remoto)</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Tipologie di Dati Raccolti</h2>
            <p className="mb-4">Attraverso il modulo di contatto presente su questo sito, vengono raccolti i seguenti dati personali:</p>
            <ul className="space-y-2 pl-4">
              {[
                "Nome e cognome",
                "Indirizzo email",
                "Numero di telefono (facoltativo)",
                "Contenuto del messaggio inviato",
                "Dati di navigazione tecnici (indirizzo IP, browser, sistema operativo) raccolti automaticamente dal server di hosting",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Finalità e Base Giuridica del Trattamento</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Risposta alle richieste di contatto",
                  desc: "Gestire le richieste inviate tramite il modulo di contatto. Base giuridica: consenso esplicito dell'interessato (art. 6, par. 1, lett. a GDPR).",
                },
                {
                  title: "Valutazione di collaborazione professionale",
                  desc: "Organizzare e gestire le call conoscitive e le eventuali collaborazioni. Base giuridica: esecuzione di misure precontrattuali (art. 6, par. 1, lett. b GDPR).",
                },
                {
                  title: "Adempimenti di legge",
                  desc: "Conservazione di dati necessari per obblighi fiscali e amministrativi. Base giuridica: obbligo legale (art. 6, par. 1, lett. c GDPR).",
                },
              ].map((item) => (
                <div key={item.title} className="bg-secondary/20 border border-border/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-foreground/75">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Conservazione dei Dati</h2>
            <p>
              I dati raccolti tramite il modulo di contatto saranno conservati per un periodo non superiore a{" "}
              <strong className="text-primary">24 mesi</strong> dalla data di ricezione, salvo diversi obblighi di
              legge o necessità legate a rapporti contrattuali in corso. I dati relativi a collaborazioni attive
              saranno conservati per il tempo necessario all'esecuzione del contratto e per i successivi{" "}
              <strong className="text-primary">10 anni</strong> per obblighi fiscali e contabili.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Comunicazione e Diffusione dei Dati</h2>
            <p className="mb-4">
              I dati personali non saranno ceduti a terzi a fini commerciali. Potranno essere comunicati
              esclusivamente a:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                "Fornitori di servizi tecnici (es. hosting, strumenti di comunicazione) nominati responsabili del trattamento ai sensi dell'art. 28 GDPR",
                "Professionisti (commercialisti, consulenti legali) per adempimenti di legge",
                "Autorità pubbliche, su richiesta e nei casi previsti dalla legge",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Trasferimento di Dati Extra-UE</h2>
            <p>
              Qualora vengano utilizzati strumenti di terze parti (es. servizi email, cloud) che comportino
              un trasferimento di dati al di fuori dello Spazio Economico Europeo, tale trasferimento avviene
              nel rispetto delle garanzie previste dagli artt. 44-49 del GDPR (es. Decisioni di adeguatezza,
              Clausole Contrattuali Standard).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Diritti dell'Interessato</h2>
            <p className="mb-4">
              Ai sensi degli artt. 15-22 del GDPR, l'interessato ha il diritto di:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { right: "Accesso", desc: "Ottenere conferma dell'esistenza dei propri dati e riceverne copia" },
                { right: "Rettifica", desc: "Richiedere la correzione di dati inesatti o incompleti" },
                { right: "Cancellazione", desc: "Chiedere la cancellazione dei propri dati (diritto all'oblio)" },
                { right: "Limitazione", desc: "Richiedere la limitazione del trattamento in determinate circostanze" },
                { right: "Portabilità", desc: "Ricevere i propri dati in formato strutturato e leggibile da macchina" },
                { right: "Opposizione", desc: "Opporsi al trattamento in qualsiasi momento, anche per marketing" },
                { right: "Revoca del consenso", desc: "Revocare il consenso senza che ciò pregiudichi la liceità del trattamento pregresso" },
                { right: "Reclamo", desc: "Presentare reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it)" },
              ].map((item) => (
                <div key={item.right} className="bg-card border border-border rounded-lg p-3">
                  <p className="font-semibold text-primary text-sm">{item.right}</p>
                  <p className="text-xs text-foreground/70 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm">
              Per esercitare i tuoi diritti, scrivi a:{" "}
              <a href="mailto:info@noemitomassetti.it" className="text-primary hover:underline font-medium">
                info@noemitomassetti.it
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Sicurezza dei Dati</h2>
            <p>
              Il Titolare adotta misure tecniche e organizzative adeguate per proteggere i dati personali da
              accessi non autorizzati, perdita, distruzione o divulgazione, in conformità all'art. 32 del GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">9. Cookie</h2>
            <p>
              Per informazioni sull'utilizzo dei cookie su questo sito, consulta la nostra{" "}
              <a href="/cookie-policy" className="text-primary hover:underline font-medium">
                Cookie Policy
              </a>.
            </p>
          </section>

          <section className="bg-secondary/20 border border-border rounded-xl p-6">
            <h2 className="text-xl font-semibold text-foreground mb-2">Modifiche alla presente informativa</h2>
            <p className="text-sm text-foreground/75">
              Il Titolare si riserva il diritto di aggiornare la presente Informativa in qualsiasi momento.
              Le modifiche saranno pubblicate su questa pagina con indicazione della data di aggiornamento.
              Si invita a consultare periodicamente questa pagina.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
