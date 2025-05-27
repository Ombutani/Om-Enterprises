import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Users, Globe, Package } from 'lucide-react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const StatsSection: React.FC = () => {


 

  const stats = [
    {
      icon: Package,
      number: "10,000+",
      label: "Successful Shipments",
      description: "Delivered worldwide with 99.9% success rate",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      number: "500+",
      label: "Global Partners",
      description: "Trusted business relationships worldwide",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Countries Served",
      description: "Expanding global reach every quarter",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      number: "$2.5B+",
      label: "Trade Value",
      description: "Total value of goods facilitated",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section 
    
      className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-slate-900 relative overflow-hidden"
      data-scroll
      data-scroll-speed="1"
      data-scroll-section
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Impressive Numbers
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Our track record speaks for itself. Here are the numbers that showcase our commitment to excellence.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                data-scroll
                data-scroll-speed={0.5 + (index * 0.1)}
              >
                <motion.div 
                  className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <IconComponent className="w-10 h-10 text-white" />
                </motion.div>
                <motion.div 
                  className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 stat-number"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <motion.h3 
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                  whileHover={{ x: 5 }}
                >
                  {stat.label}
                </motion.h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
