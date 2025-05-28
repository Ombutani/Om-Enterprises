import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Package } from 'lucide-react';

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div
            data-aos="zoom-in"
            className="inline-flex items-center px-3 sm:px-5 py-2 sm:py-3 rounded-full bg-blue-500/10 text-blue-400 mb-3 sm:mb-5 text-sm sm:text-base"
          >
            <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="font-medium">Impressive Numbers</span>
          </div>
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
        
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Impressive Numbers
          </h2>
          <p className="text-base xs:text-lg sm:text-xl text-slate-300 max-w-2xl sm:max-w-3xl mx-auto">
            Our track record speaks for itself. Here are the numbers that showcase our commitment to excellence.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="
            grid
            grid-cols-1
            xs:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
            sm:gap-8
          "
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="
                  flex flex-col items-center
                  text-center
                  p-5 xs:p-6
                  rounded-2xl
                  bg-white dark:bg-gray-800
                  shadow-lg
                  transition-shadow duration-300
                  hover:shadow-xl
                  h-full
                "
              >
                <div 
                  className={`
                    w-16 h-16
                    sm:w-20 sm:h-20
                    bg-gradient-to-r ${stat.color}
                    rounded-2xl
                    flex items-center justify-center
                    mx-auto mb-4 sm:mb-6
                    shadow-xl
                  `}
                >
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
