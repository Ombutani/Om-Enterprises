import React from 'react';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';

const About: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <AboutSection />
        <WhyChooseUsSection />
        <StatsSection />
      </main>
      <Footer />
    </>
  );
};

export default About; 