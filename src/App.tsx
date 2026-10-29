import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieBanner } from "@/components/CookieBanner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Index from "./pages/Index";
import Services from "./pages/Services";
import NoeTom from "./pages/NoeTom";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Portfolio from "./pages/Portfolio";
import ItalianLocalisation from "./pages/ItalianLocalisation";
import Questionnaire from "./pages/Questionnaire";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";


// Public website does not mount the private NoeTom application.
// Private operations belong only in the dedicated NoeTom repository.
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <Routes>
            {/* ── ENGLISH / INTERNATIONAL (DEFAULT) ── */}
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/italian-localisation" element={<ItalianLocalisation />} />
          <Route path="/italian-localization" element={<ItalianLocalisation />} />
          <Route path="/work-examples" element={<Portfolio />} />
          <Route path="/professional-research" element={<Questionnaire />} />
          <Route path="/noetom" element={<NoeTom />} />
          <Route path="/noetom/workspace" element={<Navigate to="/noetom" replace />} />
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
          <Route path="/it/ricerca-professionisti" element={<Questionnaire />} />
          <Route path="/it/noetom" element={<NoeTom />} />
          <Route path="/it/noetom/workspace" element={<Navigate to="/noetom" replace />} />
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
          <Route path="/fr/recherche-professionnels" element={<Questionnaire />} />
          <Route path="/fr/noetom" element={<NoeTom />} />
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
          <Route path="/es/investigacion-profesionales" element={<Questionnaire />} />
          <Route path="/es/noetom" element={<NoeTom />} />
          <Route path="/es/sobre-mi" element={<About />} />
          <Route path="/es/recursos" element={<Resources />} />
          <Route path="/es/contacto" element={<Contact />} />
          <Route path="/es/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/es/politica-de-cookies" element={<CookiePolicy />} />

          {/* ── BLOG & GUIDES ── */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
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
          <Route path="/admin" element={<Navigate to="/noetom" replace />} />

          {/* ── 404 CATCH-ALL ── */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
