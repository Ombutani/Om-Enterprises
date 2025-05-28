import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';

const Products: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      <Header />
      <main className="pt-16 sm:pt-20">
        <ProductsSection />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Products; 