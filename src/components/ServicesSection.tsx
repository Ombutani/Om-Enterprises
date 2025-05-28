import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      bounce: 0.18
    }
  }
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Import Services",
      description: "Complete import solutions including customs clearance, documentation, and logistics coordination.",
      features: ["Customs Brokerage", "Import Documentation", "Freight Forwarding", "Compliance Management"],
      icon: "🚢"
    },
    {
      title: "Export Services", 
      description: "End-to-end export support to help your products reach global markets efficiently.",
      features: ["Export Documentation", "Market Analysis", "Shipping Coordination", "Trade Finance"],
      icon: "✈️"
    },
    {
      title: "Logistics Management",
      description: "Comprehensive logistics solutions for seamless supply chain operations.",
      features: ["Warehousing", "Distribution", "Inventory Management", "Supply Chain Optimization"],
      icon: "🚛"
    },
    {
      title: "Trade Compliance",
      description: "Expert guidance on international trade regulations and compliance requirements.",
      features: ["Regulatory Compliance", "Trade Documentation", "Risk Assessment", "Legal Support"],
      icon: "📋"
    },
    {
      title: "Digital Platform",
      description: "Advanced technology platform for tracking and managing your trade operations.",
      features: ["Real-time Tracking", "Digital Documentation", "Analytics Dashboard", "API Integration"],
      icon: "💻"
    },
    {
      title: "Consulting Services",
      description: "Strategic consulting to optimize your international trade operations.",
      features: ["Market Entry Strategy", "Trade Route Optimization", "Cost Analysis", "Risk Management"],
      icon: "🎯"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-blue-500/10 text-blue-400 mb-4 sm:mb-8"
        >
          <Package className="w-5 h-5 mr-2" />
          <span className="font-medium text-sm sm:text-base">Our Services</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-5">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for your global trade needs
          </p>
        </motion.div>

        {/* Responsive Service Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="
            grid
            grid-cols-1
            xs:grid-cols-2
            md:grid-cols-3
            gap-6
            sm:gap-8
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
                <CardHeader className="text-center pb-2 sm:pb-4">
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="text-4xl sm:text-5xl mb-3 sm:mb-4 transition-transform duration-300"
                  >
                    {service.icon}
                  </motion.div>
                  <div>
                    <CardTitle 
                      className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2"
                    >
                      {service.title}
                    </CardTitle>
                    <CardDescription 
                      className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm"
                    >
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mt-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-xs sm:text-sm text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
