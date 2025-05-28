import React from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <main className=" ">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Contact; 