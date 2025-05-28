import React, { useState } from 'react';
import OrderForm from '../components/OrderForm';
import OrderTracking from '../components/OrderTracking';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Search } from 'lucide-react';

const OrderPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'order' | 'track'>('order');
  const [recentOrderId, setRecentOrderId] = useState<string | null>(null);

  const handleOrderComplete = (orderId: string) => {
    setRecentOrderId(orderId);
    setActiveTab('track');
  };

  return (
    <>
      <Header />
    <div className="min-h-screen w-full pt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 text-blue-400 mb-6"
          >
            <Package className="w-5 h-5 mr-2" />
            <span className="font-medium">Order Management System</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400"
          >
            Streamline Your Orders
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Place new orders or track existing ones with our intuitive and efficient system
          </motion.p>
        </div>

        {/* Main Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-9xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-700/50">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-700/50">
              <button
                className={`flex-1 py-8 text-center font-medium text-lg transition-all relative group ${
                  activeTab === 'order'
                    ? 'text-blue-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('order')}
              >
                <div className="flex items-center justify-center gap-2">
                  <Package className={`w-5 h-5 transition-colors ${
                    activeTab === 'order' ? 'text-blue-400' : 'text-gray-400 group-hover:text-gray-300'
                  }`} />
                  <span>Place Order</span>
                </div>
                {activeTab === 'order' && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400"
                  />
                )}
              </button>
              <button
                className={`flex-1 py-8 text-center font-medium text-lg transition-all relative group ${
                  activeTab === 'track'
                    ? 'text-blue-400'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('track')}
              >
                <div className="flex items-center justify-center gap-2">
                  <Search className={`w-5 h-5 transition-colors ${
                    activeTab === 'track' ? 'text-blue-400' : 'text-gray-400 group-hover:text-gray-300'
                  }`} />
                  <span>Track Order</span>
                </div>
                {activeTab === 'track' && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400"
                  />
                )}
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeTab === 'order' ? (
                    <OrderForm onOrderComplete={handleOrderComplete} />
                  ) : (
                    <OrderTracking />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Success Message */}
          {recentOrderId && activeTab === 'track' && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 text-center"
            >
              <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-green-500/10 text-green-400 shadow-lg border border-green-500/20">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div className="text-left">
                  <p className="font-medium text-lg">Order Placed Successfully!</p>
                  <p className="text-sm text-green-400/80">Order ID: {recentOrderId}</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>

    </div>
      <Footer />
    </>
  );
};

export default OrderPage; 