import React from 'react';
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

import Contact from "@/pages/Contact";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Remove useSmoothScroll import
// import { useSmoothScroll } from "./hooks/useSmoothScroll";
import Loader from "./components/Loader";
import "./App.css";
import { OrderProvider } from './contexts/OrderContext';
import OrderPage from './pages/OrderPage';
import Layout from './components/Layout';

gsap.registerPlugin(ScrollTrigger);
const queryClient = new QueryClient();

const App: React.FC = () => {
  // Remove useSmoothScroll hook
  // const scrollRef = useSmoothScroll();

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <AuthProvider>
            <OrderProvider>
              <Loader />
              <Toaster />
              <Sonner />
              <BrowserRouter>
                {/* Remove smooth-scroll and data-scroll-content wrappers */}
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/order" element={<OrderPage />} />
                  <Route path="/contact" element={<Contact />} />
                  
                  {/* Catch all route */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </OrderProvider>
          </AuthProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </Layout>
  );
};

export default App;