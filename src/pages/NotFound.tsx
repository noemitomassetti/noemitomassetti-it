import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSEO } from "@/hooks/useSEO";
import { getLanguageFromPath, getLocalizedPath } from "@/lib/i18n";

const LABELS = {
  it: { title: "Pagina non trovata", description: "La pagina richiesta non esiste oppure è stata spostata.", home: "Torna alla homepage" },
  en: { title: "Page not found", description: "The page you requested does not exist or has moved.", home: "Back to homepage" },
  fr: { title: "Page introuvable", description: "La page demandée n’existe pas ou a été déplacée.", home: "Retour à l’accueil" },
  es: { title: "Página no encontrada", description: "La página solicitada no existe o se ha trasladado.", home: "Volver al inicio" },
};

const NotFound = () => {
  const location = useLocation();
  const lang = getLanguageFromPath(location.pathname);
  const labels = LABELS[lang];

  useSEO({
    title: `${labels.title} | Noemi Tomassetti`,
    description: labels.description,
    ogLocale: { it: "it_IT", en: "en_GB", fr: "fr_FR", es: "es_ES" }[lang],
    noindex: true,
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-5">
      <div className="text-center max-w-lg">
        <h1 className="mb-3 text-5xl font-bold">404</h1>
        <h2 className="mb-3 text-2xl font-semibold">{labels.title}</h2>
        <p className="mb-6 text-lg text-muted-foreground">{labels.description}</p>
        <Link to={getLocalizedPath("home", lang)} className="text-primary underline underline-offset-4 hover:text-primary/90">
          {labels.home}
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
