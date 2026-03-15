import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TjansterPage from "./pages/TjansterPage";
import TransportPage from "./pages/TransportPage";
import LogistikPage from "./pages/LogistikPage";
import IndustriPage from "./pages/IndustriPage";
import LokalvardPage from "./pages/LokalvardPage";
import SaFungerarDetPage from "./pages/SaFungerarDetPage";
import VarforSercoPage from "./pages/VarforSercoPage";
import JobbaHosOssPage from "./pages/JobbaHosOssPage";
import OmOssPage from "./pages/OmOssPage";
import PartnersPage from "./pages/PartnersPage";
import NyheterPage from "./pages/NyheterPage";
import KontaktPage from "./pages/KontaktPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/tjanster" element={<TjansterPage />} />
            <Route path="/tjanster/transport" element={<TransportPage />} />
            <Route path="/tjanster/logistik" element={<LogistikPage />} />
            <Route path="/tjanster/industri" element={<IndustriPage />} />
            <Route path="/tjanster/lokalvard" element={<LokalvardPage />} />
            <Route path="/hur-det-gar-till" element={<SaFungerarDetPage />} />
            <Route path="/varfor-serco" element={<VarforSercoPage />} />
            <Route path="/jobba-hos-oss" element={<JobbaHosOssPage />} />
            <Route path="/om-oss" element={<OmOssPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/nyheter" element={<NyheterPage />} />
            <Route path="/kontakt" element={<KontaktPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
