import React from 'react';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import Footer from '@/components/Footer';

const Services: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ServicesSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </>
  );
};

export default Services; 