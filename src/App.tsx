import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CookieBanner } from "@/components/CookieBanner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import Risorse from "./pages/Risorse";
import BlogPost from "./pages/BlogPost";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Legacy section routes redirect to home */}
          <Route path="/chi-sono" element={<Navigate to="/#chi-sono" replace />} />
          <Route path="/servizi" element={<Navigate to="/#servizi" replace />} />
          <Route path="/supporto" element={<Navigate to="/#supporto" replace />} />
          <Route path="/collaborazione" element={<Navigate to="/#collaborazione" replace />} />
          <Route path="/come-collaborare" element={<Navigate to="/#come-collaborare" replace />} />
          <Route path="/contatti" element={<Navigate to="/#contatti" replace />} />
          {/* Standalone pages */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/risorse" element={<Risorse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
