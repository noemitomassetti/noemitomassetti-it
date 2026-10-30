import { useLocation } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useSEO } from "@/hooks/useSEO";
import {
  Language,
  getLanguageFromPath,
  getLocalizedPath,
  getHreflangAlternates,
} from "@/lib/i18n";

const LEGAL_CONTENT = {
  it: {
    title: "Informativa sulla Privacy",
    seoTitle: "Privacy Policy | Noemi Tomassetti Assistente Virtuale",
    seoDesc: "Informativa sulla privacy ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR). Scopri come vengono trattati i tuoi dati personali.",
    subtitle: "Ai sensi dell'art. 13 del Regolamento UE 2016/679 (GDPR) — Ultimo aggiornamento: Settembre 2026",
    sections: {
      ownerTitle: "1. Titolare del Trattamento",
      ownerRole: "Virtual Assistant / Translator — Libera professionista",
      vatLabel: "P. IVA 03050740426",
      headquarters: "Castelfidardo (AN), Marche, Italia",
      dataTypesTitle: "2. Tipologie di Dati Raccolti",
      dataTypesIntro: "Attraverso il modulo di contatto possono essere raccolti i seguenti dati personali:",
      dataTypes: [
        "Nome e cognome",
        "Indirizzo email professionale o personale",
        "Attività o denominazione dello studio/azienda",
        "Dettagli operativi e testo del messaggio inviato spontaneamente",
        "Eventuale scadenza desiderata indicata nella richiesta",
        "Dati tecnici di navigazione (indirizzo IP, browser, orario), che possono costituire dati personali",
      ],
      purposesTitle: "3. Finalità e Base Giuridica del Trattamento",
      purposes: [
        {
          title: "Risposta alle richieste di contatto",
          desc: "Gestire e riscontrare le comunicazioni inviate tramite i moduli. Base giuridica: misure precontrattuali o legittimo interesse (art. 6, par. 1, lett. b/f GDPR).",
        },
        {
          title: "Preparazione di preventivi scritti",
          desc: "Preparare stime e preventivi su richiesta. Base giuridica: misure precontrattuali richieste dall’interessato.",
        },
        {
          title: "Adempimenti amministrativi e contabili",
          desc: "Emissione di preventivi, fatture e tenuta registri contabili. Base giuridica: obbligo legale (art. 6, par. 1, lett. c GDPR).",
        },
      ],
      retentionTitle: "4. Conservazione dei Dati",
      retentionText: "I dati ricevuti tramite richieste di informazioni sono conservati per il tempo strettamente necessario a fornire riscontro (massimo 24 mesi). In caso di instaurazione di un rapporto contrattuale continuativo o a pacchetto, i dati contabili e le comunicazioni operative correlate sono conservati per 10 anni in conformità agli obblighi fiscali e civilistici italiani.",
      disclosureTitle: "5. Riservatezza e Comunicazione dei Dati",
      disclosureText: "I dati personali non vengono ceduti, venduti o diffusi a terzi per scopi di marketing. Per gestire le richieste possono intervenire fornitori di hosting, il servizio di inoltro moduli FormSubmit o Web3Forms (solo se attivato e verificato), fornitori email e, ove necessario, il commercialista, secondo ruoli e accordi applicabili. Se Web3Forms viene attivato, il fornitore, Web3Creative, opera anche dall’India e può trattare dati fuori dallo SEE; dichiara l’impiego di Clausole Contrattuali Standard secondo il suo Data Processing Agreement. L’invio automatico resta disattivato fino alla verifica del destinatario.",
      rightsTitle: "6. Diritti dell'Interessato",
      rightsIntro: "In ogni momento, l'interessato può esercitare i diritti garantiti dagli artt. 15-22 del GDPR:",
      rightsList: [
        { right: "Accesso", desc: "Verificare se sia in corso un trattamento di propri dati e riceverne copia." },
        { right: "Rettifica", desc: "Aggiornare o correggere dati inesatti o incompleti." },
        { right: "Cancellazione", desc: "Richiedere la cancellazione dei dati ('diritto all'oblio') quando applicabile." },
        { right: "Limitazione", desc: "Limitare temporaneamente il trattamento in presenza di contestazioni." },
        { right: "Portabilità", desc: "Ricevere i dati forniti in formato strutturato e interoperabile." },
        { right: "Reclamo", desc: "Proporre reclamo all'Autorità Garante per la Protezione dei Dati Personali (www.garanteprivacy.it)." },
      ],
      contactEmailPrefix: "Per qualsiasi richiesta o per esercitare i tuoi diritti, puoi scrivere direttamente a:",
      securityTitle: "7. Sicurezza dei Dati e Segretezza Professionale",
      securityText: "Sono adottate misure di sicurezza proporzionate ai servizi effettivamente utilizzati. Le modalità di cifratura, accesso e conservazione dipendono dai singoli fornitori e vanno documentate e verificate.",
      cookieLinkText: "Per informazioni sull'utilizzo dei cookie tecnici e analitici, consulta la",
    },
  },
  en: {
    title: "Privacy Policy",
    seoTitle: "Privacy Policy | Noemi Tomassetti Virtual Assistant",
    seoDesc: "Privacy policy pursuant to Art. 13 of EU Regulation 2016/679 (GDPR). Discover how your personal data is collected and protected.",
    subtitle: "Pursuant to Art. 13 of EU Regulation 2016/679 (GDPR) — Last updated: September 2026",
    sections: {
      ownerTitle: "1. Data Controller",
      ownerRole: "Virtual Assistant & Specialist Translator — Sole Proprietor",
      vatLabel: "Italian VAT No. 03050740426",
      headquarters: "Castelfidardo (AN), Marche, Italy",
      dataTypesTitle: "2. Categories of Data Collected",
      dataTypesIntro: "Through the contact form on this website, the following personal data may be collected:",
      dataTypes: [
        "First and last name",
        "Professional or personal email address",
        "Business / organisation name",
        "Project description and details voluntarily shared in the message",
        "Optional desired project deadline",
        "Standard technical navigation metadata (IP address, browser type, timestamp)",
      ],
      purposesTitle: "3. Purposes and Legal Bases for Processing",
      purposes: [
        {
          title: "Handling inquiries and messages",
          desc: "Responding to requests submitted via contact forms. Legal basis: pre-contractual measures or legitimate interest (Art. 6(1)(b)/(f) GDPR).",
        },
        {
          title: "Preparing written quotes",
          desc: "Preparing project estimates or quotes at your request. Legal basis: pre-contractual steps requested by you.",
        },
        {
          title: "Statutory, accounting, and tax compliance",
          desc: "Invoicing and tax documentation. Legal basis: statutory legal obligation (Art. 6(1)(c) GDPR).",
        },
      ],
      retentionTitle: "4. Data Retention",
      retentionText: "Contact inquiry data is retained strictly for the duration necessary to answer and follow up (maximum 24 months). Where a contractual service agreement is established, accounting records and operational correspondence are retained for 10 years in compliance with statutory Italian tax and civil law obligations.",
      disclosureTitle: "5. Confidentiality & Data Sharing",
      disclosureText: "Personal data is never sold, leased, or distributed to third parties for advertising or commercial purposes. Data may be processed by website hosting, the FormSubmit or Web3Forms enquiry forwarding service (only if activated and verified), email providers and our accountant where applicable, subject to the relevant roles and agreements. If Web3Forms is activated, its operator, Web3Creative, also operates from India and may process data outside the EEA; it states that Standard Contractual Clauses apply under its Data Processing Agreement. Automatic submission remains disabled until the recipient is verified.",
      rightsTitle: "6. Rights of the Data Subject",
      rightsIntro: "Under Articles 15–22 of the GDPR, you have the right to:",
      rightsList: [
        { right: "Access", desc: "Obtain confirmation and a copy of your personal data being processed." },
        { right: "Rectification", desc: "Request correction of inaccurate or incomplete information." },
        { right: "Erasure", desc: "Request deletion of your data ('right to be forgotten') where legally applicable." },
        { right: "Restriction", desc: "Request temporary limitation of processing in certain circumstances." },
        { right: "Portability", desc: "Receive your personal data in a structured, machine-readable format." },
        { right: "Lodge a Complaint", desc: "File a complaint with the competent supervisory authority (Garante Privacy in Italy or your local EU authority)." },
      ],
      contactEmailPrefix: "To exercise your rights or ask questions, please contact:",
      securityTitle: "7. Data Security & Professional Discretion",
      securityText: "Technical and organisational safeguards depend on the systems and providers in use. Encryption, authentication and storage arrangements must be documented and verified for each relevant service.",
      cookieLinkText: "For details regarding cookies and tracking preferences, please view the",
    },
  },
  fr: {
    title: "Politique de Confidentialité",
    seoTitle: "Politique de Confidentialité | Noemi Tomassetti Assistante Virtuelle",
    seoDesc: "Politique de confidentialité conformément à l'art. 13 du Règlement UE 2016/679 (RGPD). Découvrez la protection de vos données.",
    subtitle: "Conformément à l'art. 13 du Règlement UE 2016/679 (RGPD) — Dernière mise à jour : Septembre 2026",
    sections: {
      ownerTitle: "1. Responsable du Traitement",
      ownerRole: "Assistante Virtuelle & Traductrice Spécialisée — Professionnelle Indépendante",
      vatLabel: "N° de TVA italienne 03050740426",
      headquarters: "Castelfidardo (AN), Marches, Italie",
      dataTypesTitle: "2. Données Personnelles Collectées",
      dataTypesIntro: "Par le biais des formulaires de contact et de réservation présents sur ce site, les données suivantes peuvent être traitées :",
      dataTypes: [
        "Nom et prénom",
        "Adresse électronique professionnelle ou personnelle",
        "Activité ou dénomination de votre entreprise / cabinet",
        "Détails opérationnels et message transmis spontanément",
        "Date et heure convenues pour l'entretien découverte",
        "Données techniques de connexion anonymisées (adresse IP, navigateur, horodatage)",
      ],
      purposesTitle: "3. Finalités et Bases Légales du Traitement",
      purposes: [
        {
          title: "Gestion des demandes et messages",
          desc: "Répondre aux questions formulées via les formulaires. Base légale : mesures précontractuelles (art. 6, par. 1, point b RGPD).",
        },
        {
          title: "Préparation de devis écrits",
          desc: "Préparer les devis demandés. Base légale : mesures précontractuelles à votre demande.",
        },
        {
          title: "Obligations comptables et fiscales",
          desc: "Établissement des factures et déclarations légales. Base légale : obligation légale (art. 6, par. 1, point c RGPD).",
        },
      ],
      retentionTitle: "4. Durée de Conservation des Données",
      retentionText: "Les données de contact sont conservées pendant la durée strictement nécessaire au suivi (maximum 24 mois). En cas de collaboration contractuelle, les pièces comptables et justificatives sont conservées pendant 10 ans conformément au droit fiscal et commercial italien.",
      disclosureTitle: "5. Confidentialité et Transmission des Données",
      disclosureText: "Vos données ne sont ni vendues, ni louées, ni cédées à des tiers à des fins commerciales. Elles peuvent être traitées par l’hébergeur, le service de transfert FormSubmit ou Web3Forms (uniquement si activé et vérifié), les prestataires de messagerie et le comptable, selon leurs rôles et accords. Si Web3Forms est activé, son opérateur, Web3Creative, exerce également ses activités depuis l’Inde et peut traiter des données en dehors de l’EEE ; il indique appliquer les clauses contractuelles types dans son accord de traitement des données. L’envoi automatique reste désactivé jusqu’à vérification de l’adresse destinataire.",
      rightsTitle: "6. Vos Droits (RGPD)",
      rightsIntro: "Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :",
      rightsList: [
        { right: "Accès", desc: "Obtenir confirmation et copie de vos données personnelles détenues." },
        { right: "Rectification", desc: "Corriger ou compléter des données inexactes." },
        { right: "Effacement", desc: "Demander la suppression de vos données ('droit à l'oubli')." },
        { right: "Limitation", desc: "Geler temporairement le traitement de vos données." },
        { right: "Portabilité", desc: "Recevoir vos données dans un format structuré et lisible par machine." },
        { right: "Réclamation", desc: "Introduire une réclamation auprès de la CNIL ou de l'autorité italienne (Garante Privacy)." },
      ],
      contactEmailPrefix: "Pour exercer vos droits ou pour toute question, écrivez à :",
      securityTitle: "7. Sécurité et Discrétion Professionnelle",
      securityText: "Des mesures adaptées sont mises en œuvre selon les outils et prestataires utilisés. Le chiffrement, les accès et la conservation doivent être vérifiés et documentés.",
      cookieLinkText: "Pour connaître notre gestion des traceurs, veuillez consulter notre",
    },
  },
  es: {
    title: "Política de Privacidad",
    seoTitle: "Política de Privacidad | Noemi Tomassetti Asistente Virtual",
    seoDesc: "Información sobre protección de datos conforme al art. 13 del Reglamento UE 2016/679 (RGPD). Conoce cómo cuidamos tus datos.",
    subtitle: "Conforme al art. 13 del Reglamento UE 2016/679 (RGPD) — Última actualización: Septiembre de 2026",
    sections: {
      ownerTitle: "1. Responsable del Tratamiento",
      ownerRole: "Asistente Virtual & Traductora Especializada — Profesional Autónoma",
      vatLabel: "NIF-IVA italiano 03050740426",
      headquarters: "Castelfidardo (AN), Marcas, Italia",
      dataTypesTitle: "2. Datos Personales Recogidos",
      dataTypesIntro: "A través del formulario de contacto y del sistema de reservas de este sitio web, se pueden recopilar los siguientes datos:",
      dataTypes: [
        "Nombre y apellidos",
        "Correo electrónico profesional o personal",
        "Actividad, estudio o empresa",
        "Descripción del proyecto o necesidades expresadas en el mensaje",
        "Fecha y hora seleccionadas para la llamada de descubrimiento",
        "Datos técnicos de navegación anónimos (dirección IP, navegador, registro de acceso)",
      ],
      purposesTitle: "3. Finalidades y Base Jurídica del Tratamiento",
      purposes: [
        {
          title: "Atención de consultas y mensajes",
          desc: "Responder a las peticiones recibidas por los formularios. Base jurídica: medidas precontractuales o interés legítimo (art. 6, ap. 1, letras b/f RGPD).",
        },
        {
          title: "Preparación de presupuestos por escrito",
          desc: "Preparar presupuestos a petición del interesado. Base jurídica: medidas precontractuales solicitadas.",
        },
        {
          title: "Obligaciones contables y fiscales",
          desc: "Emisión de presupuestos, facturas y libros de cuentas. Base jurídica: obligación legal (art. 6, ap. 1, letra c RGPD).",
        },
      ],
      retentionTitle: "4. Conservación de los Datos",
      retentionText: "Los datos de contacto se conservan durante el tiempo estrictamente necesario para su tramitación (máximo 24 meses). En caso de contratación de servicios, la documentación contable y fiscal se conserva durante 10 años en cumplimiento de la normativa italiana aplicable.",
      disclosureTitle: "5. Confidencialidad y Comunicación de Datos",
      disclosureText: "Los datos personales no se ceden, venden ni comparten con terceros para fines comerciales. Podrán intervenir el proveedor de alojamiento web, el servicio FormSubmit o Web3Forms (solo si se activa y verifica), los proveedores de correo y la asesoría fiscal, según sus funciones y contratos. Si se activa Web3Forms, su operador, Web3Creative, también opera desde la India y puede tratar datos fuera del EEE; declara aplicar cláusulas contractuales tipo según su acuerdo de tratamiento de datos. El envío automático permanece desactivado hasta verificar el destinatario.",
      rightsTitle: "6. Derechos del Interesado",
      rightsIntro: "Conforme a los artículos 15 a 22 del RGPD, puedes ejercer en todo momento los siguientes derechos:",
      rightsList: [
        { right: "Acceso", desc: "Obtener confirmación y copia de tus datos personales tratados." },
        { right: "Rectificación", desc: "Solicitar la corrección de datos inexactos o incompletos." },
        { right: "Supresión", desc: "Pedir la eliminación de tus datos ('derecho al olvido') cuando proceda." },
        { right: "Limitación", desc: "Solicitar la suspensión cautelar del tratamiento en determinados supuestos." },
        { right: "Portabilidad", desc: "Recibir tus datos en un formato estructurado y legible por ordenador." },
        { right: "Reclamación", desc: "Presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) o la autoridad italiana (Garante Privacy)." },
      ],
      contactEmailPrefix: "Para cualquier consulta o para ejercer tus derechos, puedes dirigirte a:",
      securityTitle: "7. Seguridad de los Datos y Sigilo Profesional",
      securityText: "Se aplican medidas adecuadas a las herramientas y proveedores utilizados. El cifrado, el control de acceso y la conservación deben verificarse y documentarse.",
      cookieLinkText: "Para más información sobre el uso de cookies y preferencias, consulta nuestra",
    },
  },
};

export default function PrivacyPolicy() {
  const location = useLocation();
  const lang: Language = getLanguageFromPath(location.pathname);
  const t = LEGAL_CONTENT[lang] || LEGAL_CONTENT.en;
  const canonicalUrl = `https://www.noemitomassetti.it${getLocalizedPath("privacy", lang)}`;
  const cookiePath = getLocalizedPath("cookie", lang);

  useSEO({
    title: t.seoTitle,
    description: t.seoDesc,
    canonical: canonicalUrl,
    alternates: getHreflangAlternates("privacy"),
    ogType: "website",
  });

  return (
    <Layout lang={lang}>
      <div className="container py-16 md:py-24 max-w-4xl px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary mb-4 tracking-tight">
          {t.title}
        </h1>
        <p className="text-foreground/60 text-sm mb-12">
          {t.subtitle}
        </p>

        <div className="space-y-12 text-foreground/85 leading-relaxed">
          {/* Section 1: Controller */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.sections.ownerTitle}
            </h2>
            <div className="bg-card border border-border rounded-xl p-6 space-y-1.5 text-sm shadow-sm">
              <p>
                <strong className="text-primary">Titolare / Controller:</strong> Noemi Tomassetti
              </p>
              <p>
                <strong className="text-primary">Attività / Role:</strong> {t.sections.ownerRole}
              </p>
              <p>
                <strong className="text-primary">Identità Fiscale:</strong> {t.sections.vatLabel}
              </p>
              <p>
                <strong className="text-primary">Email:</strong>{" "}
                <a href="mailto:info@noemitomassetti.it" className="text-primary hover:underline font-medium">
                  info@noemitomassetti.it
                </a>
              </p>
              <p>
                <strong className="text-primary">Sede / Location:</strong> {t.sections.headquarters}
              </p>
            </div>
          </section>

          {/* Section 2: Data Types */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.sections.dataTypesTitle}
            </h2>
            <p className="mb-4 text-sm text-foreground/80">
              {t.sections.dataTypesIntro}
            </p>
            <ul className="space-y-2 pl-2">
              {t.sections.dataTypes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 3: Purposes */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.sections.purposesTitle}
            </h2>
            <div className="space-y-4">
              {t.sections.purposes.map((p, idx) => (
                <div key={idx} className="bg-secondary/20 border border-border/50 rounded-xl p-5">
                  <h3 className="font-bold text-foreground mb-1 text-base">{p.title}</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Retention */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.sections.retentionTitle}
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {t.sections.retentionText}
            </p>
          </section>

          {/* Section 5: Disclosure */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.sections.disclosureTitle}
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {t.sections.disclosureText}
            </p>
          </section>

          {/* Section 6: Rights */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.sections.rightsTitle}
            </h2>
            <p className="mb-4 text-sm text-foreground/80">
              {t.sections.rightsIntro}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {t.sections.rightsList.map((item, idx) => (
                <div key={idx} className="bg-card border border-border rounded-xl p-4 shadow-sm">
                  <p className="font-bold text-primary text-sm">{item.right}</p>
                  <p className="text-xs text-foreground/75 mt-1 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-5 text-sm">
              {t.sections.contactEmailPrefix}{" "}
              <a href="mailto:info@noemitomassetti.it" className="text-primary hover:underline font-bold">
                info@noemitomassetti.it
              </a>
            </p>
          </section>

          {/* Section 7: Security */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t.sections.securityTitle}
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              {t.sections.securityText}
            </p>
          </section>

          {/* Cookie Notice */}
          <section className="bg-muted/30 border border-border rounded-xl p-6">
            <p className="text-sm text-foreground/80">
              {t.sections.cookieLinkText}{" "}
              <a href={cookiePath} className="text-primary font-bold hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
}
