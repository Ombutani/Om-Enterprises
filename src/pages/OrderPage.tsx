import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Search } from 'lucide-react';
import OrderForm from '../components/OrderForm';
import OrderTracking from '../components/OrderTracking';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OrderPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'order' | 'track'>('order');
  const [recentOrderId, setRecentOrderId] = useState<string | null>(null);

  const handleOrderComplete = (orderId: string) => {
    setRecentOrderId(orderId);
    setActiveTab('track');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors"
    >
      <Header />
      <main className="container mx-auto px-4 py-8 sm:py-12 mt-14 lg:py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400 mb-4 sm:mb-6"
          >
            <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="font-medium text-sm sm:text-base">Order Management System</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
          >
            Streamline Your Orders
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Place new orders or track existing ones with our intuitive and efficient system
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-9xl mx-auto"
        >
          <div className="bg-gray-800 dark:bg-gradient-to-br dark:from-gray-800/50 dark:to-gray-900/50 dark:backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700/50 transition-colors">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 dark:border-gray-700/50 transition-colors">
              <button
                className={`flex-1 py-4 sm:py-6 lg:py-8 text-center font-medium text-base sm:text-lg transition-all relative group ${
                  activeTab === 'order'
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('order')}
              >
                <div className="flex items-center justify-center gap-2">
                  <Package className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                    activeTab === 'order'
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 group-hover:text-blue-700 dark:text-gray-400 dark:group-hover:text-gray-300'
                  }`} />
                  <span>Place Order</span>
                </div>
                {activeTab === 'order' && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
                  />
                )}
              </button>
              <button
                className={`flex-1 py-4 sm:py-6 lg:py-8 text-center font-medium text-base sm:text-lg transition-all relative group ${
                  activeTab === 'track'
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
                onClick={() => setActiveTab('track')}
              >
                <div className="flex items-center justify-center gap-2">
                  <Search className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors ${
                    activeTab === 'track'
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 group-hover:text-blue-700 dark:text-gray-400 dark:group-hover:text-gray-300'
                  }`} />
                  <span>Track Order</span>
                </div>
                {activeTab === 'track' && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400"
                  />
                )}
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-4 sm:p-6 md:p-8 lg:p-10 bg-white dark:bg-transparent transition-colors">
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
              className="mt-6 sm:mt-8 text-center"
            >
              <div className="inline-flex items-center px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400 shadow-lg border border-green-200 dark:border-green-500/20 transition-colors">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <div className="text-left">
                  <p className="font-medium text-base sm:text-lg">Order Placed Successfully!</p>
                  <p className="text-xs sm:text-sm text-green-700/80 dark:text-green-400/80">Order ID: {recentOrderId}</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default OrderPage; 