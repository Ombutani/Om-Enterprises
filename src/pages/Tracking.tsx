import React from 'react';
import Header from '@/components/Header';
import TrackingSection from '@/components/TrackingSection';
import Footer from '@/components/Footer';

const Tracking: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <TrackingSection />
      </main>
      <Footer />
    </>
  );
};

export default Tracking; 