import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieBanner } from "@/components/CookieBanner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
const Portfolio = lazy(() => import("./pages/Portfolio"));
const PortfolioDocument = lazy(() => import("./pages/PortfolioDocument"));
const PortfolioDeepCase = lazy(() => import("./pages/PortfolioDeepCase"));
import Publications from "./pages/Publications";
import { PUBLICATIONS_VISIBLE } from "./lib/publicationsCatalog";
import ItalianLocalisation from "./pages/ItalianLocalisation";
import Questionnaire from "./pages/Questionnaire";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";


// NoeTom remains an unpublished internal project; public routes are disabled.
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div role="status" className="min-h-[30vh] flex items-center justify-center text-foreground/70 text-sm">Caricamento pagina · Loading page…</div>}>
          <Routes>
            {/* ── ENGLISH / INTERNATIONAL (DEFAULT) ── */}
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/italian-localisation" element={<ItalianLocalisation />} />
          <Route path="/italian-localization" element={<ItalianLocalisation />} />
          <Route path="/work-examples" element={<Portfolio />} />
          <Route path="/work-examples/sample/:num" element={<PortfolioDocument />} />
          <Route path="/work-examples/dossier/:slug" element={<PortfolioDeepCase />} />
          <Route path="/professional-research" element={<Questionnaire />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          {/* ── ITALIAN (IT) ── */}
          <Route path="/it" element={<Index />} />
          <Route path="/it/" element={<Index />} />
          <Route path="/it/servizi" element={<Services />} />
          <Route path="/it/localizzazione-italiano" element={<ItalianLocalisation />} />
          <Route path="/it/esempi-di-lavoro" element={<Portfolio />} />
          <Route path="/it/esempi-di-lavoro/esempio/:num" element={<PortfolioDocument />} />
          <Route path="/it/esempi-di-lavoro/dossier/:slug" element={<PortfolioDeepCase />} />
          <Route path="/it/ricerca-professionisti" element={<Questionnaire />} />
          <Route path="/it/chi-sono" element={<About />} />
          <Route path="/it/risorse" element={<Resources />} />
          <Route path="/it/contatti" element={<Contact />} />
          <Route path="/it/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/it/cookie-policy" element={<CookiePolicy />} />

          {/* ── FRENCH (FR) ── */}
          <Route path="/fr" element={<Index />} />
          <Route path="/fr/" element={<Index />} />
          <Route path="/fr/services" element={<Services />} />
          <Route path="/fr/localisation-italien" element={<ItalianLocalisation />} />
          <Route path="/fr/exemples-de-projets" element={<Portfolio />} />
          <Route path="/fr/exemples-de-projets/exemple/:num" element={<PortfolioDocument />} />
          <Route path="/fr/exemples-de-projets/dossier/:slug" element={<PortfolioDeepCase />} />
          <Route path="/fr/recherche-professionnels" element={<Questionnaire />} />
          <Route path="/fr/a-propos" element={<About />} />
          <Route path="/fr/ressources" element={<Resources />} />
          <Route path="/fr/contact" element={<Contact />} />
          <Route path="/fr/politique-de-confidentialite" element={<PrivacyPolicy />} />
          <Route path="/fr/politique-de-cookies" element={<CookiePolicy />} />

          {/* ── SPANISH (ES) ── */}
          <Route path="/es" element={<Index />} />
          <Route path="/es/" element={<Index />} />
          <Route path="/es/servicios" element={<Services />} />
          <Route path="/es/localizacion-italiano" element={<ItalianLocalisation />} />
          <Route path="/es/ejemplos-de-trabajo" element={<Portfolio />} />
          <Route path="/es/ejemplos-de-trabajo/ejemplo/:num" element={<PortfolioDocument />} />
          <Route path="/es/ejemplos-de-trabajo/dossier/:slug" element={<PortfolioDeepCase />} />
          <Route path="/es/investigacion-profesionales" element={<Questionnaire />} />
          <Route path="/es/sobre-mi" element={<About />} />
          <Route path="/es/recursos" element={<Resources />} />
          <Route path="/es/contacto" element={<Contact />} />
          <Route path="/es/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/es/politica-de-cookies" element={<CookiePolicy />} />

          {/* Editorial catalogue is prepared, but hidden until real publications are ready. */}
          <Route path="/publications" element={PUBLICATIONS_VISIBLE ? <Publications /> : <NotFound />} />
          <Route path="/it/libri" element={PUBLICATIONS_VISIBLE ? <Publications /> : <NotFound />} />
          <Route path="/fr/livres" element={PUBLICATIONS_VISIBLE ? <Publications /> : <NotFound />} />
          <Route path="/es/libros" element={PUBLICATIONS_VISIBLE ? <Publications /> : <NotFound />} />

          {/* ── BLOG & GUIDES ── */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/it/blog" element={<Navigate to="/blog" replace />} />
          <Route path="/it/blog/:slug" element={<BlogPost />} />
          <Route path="/en/blog" element={<Blog />} />
          <Route path="/en/blog/:slug" element={<BlogPost />} />
          <Route path="/fr/blog" element={<Blog />} />
          <Route path="/fr/blog/:slug" element={<BlogPost />} />
          <Route path="/es/blog" element={<Blog />} />
          <Route path="/es/blog/:slug" element={<BlogPost />} />
          <Route path="/risorse" element={<Resources />} />

          {/* ── LEGACY & SHORTCUT REDIRECTS ── */}
          <Route path="/ricerca-professionisti" element={<Questionnaire />} />
          <Route path="/esempi-di-lavoro" element={<Navigate to="/it/esempi-di-lavoro" replace />} />
          <Route path="/portfolio" element={<Navigate to="/it/esempi-di-lavoro" replace />} />
          <Route path="/chi-sono" element={<Navigate to="/it/chi-sono" replace />} />
          <Route path="/servizi" element={<Navigate to="/it/servizi" replace />} />
          <Route path="/supporto" element={<Navigate to="/it/servizi" replace />} />
          <Route path="/collaborazione" element={<Navigate to="/it/servizi" replace />} />
          <Route path="/come-collaborare" element={<Navigate to="/it/servizi" replace />} />
          <Route path="/contatti" element={<Navigate to="/it/contatti" replace />} />

          {/* ── 404 CATCH-ALL ── */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
