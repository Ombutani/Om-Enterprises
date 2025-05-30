import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import Footer from '@/components/Footer';

const Services: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <Header />
      <main >
        <ServicesSection />
        <WhyChooseUsSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Services; 