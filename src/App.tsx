import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import SiteMap from "@/pages/SiteMap";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<Index about={true} />} />
            <Route path="/works" element={<Index works={true} />} />
            <Route path="/gallery" element={<Index gallery={true} />} />
            <Route path="/newsletter" element={<Index newsletter={true} />} />
            <Route path="/sitemap" element={<SiteMap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
      <Sonner />
    </BrowserRouter>
  );
}

export default App;
