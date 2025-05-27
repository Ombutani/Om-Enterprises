import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import Tracking from "@/pages/Tracking";
import Contact from "@/pages/Contact";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Loader from "./components/Loader";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);
const queryClient = new QueryClient();

const App = () => {
  const scrollRef = useSmoothScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Loader />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div ref={scrollRef} className="smooth-scroll">
              <div data-scroll-content>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/tracking" element={<Tracking />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
