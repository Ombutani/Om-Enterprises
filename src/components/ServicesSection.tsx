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
      description: "Complete import solutions including customs clearance, documentation, and logistics.",
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
    <section className="relative py-16 sm:py-24 md:py-28 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-950 dark:to-slate-900 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-indigo-400/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 via-purple-400/10 to-transparent rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/10 to-purple-500/10 text-blue-600 dark:text-blue-300 mb-4 sm:mb-8 text-base font-semibold shadow-md backdrop-blur-md"
        >
          <Package className="w-5 h-5 mr-2" />
          <span>Our Services</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-medium">
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
            gap-8
            sm:gap-10
            mb-4
          "
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group"
            >
              {/* Decorative floating ring */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/10 rounded-full blur-2xl opacity-60 pointer-events-none" />
              <Card className="bg-white/90 dark:bg-gray-900/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col rounded-3xl overflow-hidden group relative">
                <CardHeader className="flex flex-col items-center text-center pb-2 sm:pb-4">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 shadow-lg border-4 border-white/40 dark:border-gray-800/60 backdrop-blur-md mb-4 group-hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-3xl sm:text-4xl">{service.icon}</span>
                  </motion.div>
                  <CardTitle 
                    className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2 tracking-tight"
                  >
                    {service.title}
                  </CardTitle>
                  <CardDescription 
                    className="text-gray-600 dark:text-gray-400 text-sm sm:text-base font-medium"
                  >
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between px-6 pb-6 pt-2">
                  <ul className="space-y-3 mt-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-center text-sm sm:text-base text-gray-700 dark:text-gray-200 font-medium"
                      >
                        <span className="w-3 h-3 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mr-3 flex-shrink-0 shadow" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex justify-center">
                    <button
                      className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 text-sm sm:text-base group-hover:scale-105"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
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
