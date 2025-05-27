import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Truck, Factory, Zap, Globe, Shield } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useScrollAnimation();
  
  const products = [
    {
      id: 1,
      name: "Industrial Machinery",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      description: "High-quality industrial equipment for manufacturing and production facilities worldwide.",
      features: ["ISO Certified", "Global Warranty", "24/7 Support"],
      price: "Custom Quote",
      icon: Factory
    },
    {
      id: 2,
      name: "Electronic Components",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      description: "Advanced electronic components and semiconductors for various industries.",
      features: ["RoHS Compliant", "Fast Shipping", "Quality Assured"],
      price: "Starting $50",
      icon: Zap
    },
    {
      id: 3,
      name: "Automotive Parts",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=400&h=300&fit=crop",
      description: "Premium automotive components and spare parts for global vehicle manufacturers.",
      features: ["OEM Quality", "Global Standards", "Quick Delivery"],
      price: "Bulk Pricing",
      icon: Truck
    },
    {
      id: 4,
      name: "Medical Equipment",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      description: "State-of-the-art medical devices and equipment for healthcare institutions.",
      features: ["FDA Approved", "CE Marked", "Global Support"],
      price: "Contact Us",
      icon: Shield
    },
    {
      id: 5,
      name: "Agricultural Products",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      description: "Quality agricultural machinery and farming equipment for enhanced productivity.",
      features: ["Weather Resistant", "Energy Efficient", "Low Maintenance"],
      price: "From $5,000",
      icon: Package
    },
    {
      id: 6,
      name: "Chemical Products",
      category: "Chemicals",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=300&fit=crop",
      description: "Industrial chemicals and raw materials for various manufacturing processes.",
      features: ["Safety Certified", "Pure Grade", "Bulk Available"],
      price: "Per Ton",
      icon: Globe
    }
  ];

  const categories = ["All", "Manufacturing", "Technology", "Automotive", "Healthcare", "Agriculture", "Chemicals"];

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <Package className="w-4 h-4 mr-2" />
            Our Products
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Premium Quality Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our extensive range of high-quality products sourced globally and delivered with excellence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={category === activeCategory ? "default" : "outline"}
              className={`${
                  category === activeCategory 
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" 
                  : "border-gray-300 text-gray-700 dark:text-gray-300 hover:border-blue-500"
              }`}
                onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProducts.map((product) => {
            const IconComponent = product.icon;
            return (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white dark:bg-gray-800 border-0 shadow-lg overflow-hidden">
                    <motion.div 
                      className="relative overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                      <motion.div 
                        className="absolute top-4 left-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      {product.category}
                    </Badge>
                      </motion.div>
                      <motion.div 
                        className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                    <IconComponent className="w-5 h-5 text-blue-600" />
                      </motion.div>
                    </motion.div>
                <CardHeader>
                      <motion.div 
                        className="flex justify-between items-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </CardTitle>
                    <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {product.price}
                    </div>
                      </motion.div>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                    {product.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * index }}
                          >
                            <Badge variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                          </motion.div>
                    ))}
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white">
                    Request Quote
                  </Button>
                      </motion.div>
                </CardContent>
              </Card>
                </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8">
            View All Products
          </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
