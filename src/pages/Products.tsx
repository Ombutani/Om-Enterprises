import React from 'react';
import Header from '@/components/Header';
import ProductsSection from '@/components/ProductsSection';
import Footer from '@/components/Footer';

const Products: React.FC = () => {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ProductsSection />
      </main>
      <Footer />
    </>
  );
};

export default Products; 