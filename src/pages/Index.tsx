import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ProductsSection from '@/components/ProductsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsSection from '@/components/NewsSection';
import TrackingSection from '@/components/TrackingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Loader from '@/components/Loader';

const Index: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <HeroSection setActiveSection={setActiveSection} />
            <StatsSection />
            <AboutSection />
            <WhyChooseUsSection />
            <ServicesSection />
            <ProductsSection />
            <TestimonialsSection />
            <NewsSection />
          </>
        );
      case 'about':
        return (
          <div className="pt-20">
            <AboutSection />
            <WhyChooseUsSection />
            <StatsSection />
          </div>
        );
      case 'services':
        return (
          <div className="pt-20">
            <ServicesSection />
            <WhyChooseUsSection />
          </div>
        );
      case 'products':
        return (
          <div className="pt-20">
            <ProductsSection />
          </div>
        );
      case 'tracking':
        return (
          <div className="pt-20">
            <TrackingSection />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-20">
            <ContactSection />
          </div>
        );
      default:
        return (
          <>
            <HeroSection setActiveSection={setActiveSection} />
            <StatsSection />
            <AboutSection />
            <WhyChooseUsSection />
            <ServicesSection />
            <ProductsSection />
            <TestimonialsSection />
            <NewsSection />
          </>
        );
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          {renderSection()}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
