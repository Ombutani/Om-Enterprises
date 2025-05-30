import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Globe, Package } from 'lucide-react';

const stats = [
  {
    icon: Package,
    number: "500+",
    label: "Successful Shipments",
    description: "Delivered worldwide with 99.9% success rate",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Users,
    number: "300+",
    label: "Global Partners",
    description: "Trusted business relationships worldwide",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Globe,
    number: "46+",
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
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      type: "spring",
      bounce: 0.18
    }
  }
};

const StatsSection: React.FC = () => {
  return (
    <section className="relative py-20 sm:py-28 md:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[30rem] h-[30rem] bg-gradient-to-br from-blue-400/20 via-indigo-400/10 to-transparent rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[22rem] h-[22rem] bg-gradient-to-tr from-indigo-400/20 via-purple-400/10 to-transparent rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 mb-4 text-base font-semibold shadow-md backdrop-blur-md"
          >
            <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 17.75L18.2 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.44 4.73L5.8 21z"/>
            </svg>
            <span>Our Achievements</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4"
          >
            Impactful Numbers at a Glance
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-medium"
          >
            We deliver results that matter. Here are some key stats that highlight our global reach and reliability.
          </motion.p>
        </div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-4"
        >
          {stats.map((stat, idx) => {
            // Smaller icon size for all cards
            let IconSVG;
            const iconClass = "w-7 h-7 sm:w-8 sm:h-8 text-white";
            if (idx === 0) {
              // Trophy
              IconSVG = (
                <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M8 21h8M12 17v4M17 5V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2M5 5v2a7 7 0 0 0 14 0V5" />
                  <path d="M5 5H3v2a5 5 0 0 0 5 5M19 5h2v2a5 5 0 0 1-5 5" />
                </svg>
              );
            } else if (idx === 1) {
              // Users/Network
              IconSVG = (
                <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 0 0-3-3.87M7 21v-2a4 4 0 0 1 3-3.87M12 7a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75M8 3.13a4 4 0 0 0 0 7.75" />
                </svg>
              );
            } else if (idx === 2) {
              // Globe
              IconSVG = (
                <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
                </svg>
              );
            } else {
              // TrendingUp
              IconSVG = (
                <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <polyline points="3 17 9 11 13 15 21 7" />
                  <polyline points="14 7 21 7 21 14" />
                </svg>
              );
            }
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="group relative bg-white/90 dark:bg-gray-900/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center rounded-3xl overflow-hidden min-h-[270px] max-h-[270px] justify-center"
              >
                {/* Floating gradient ring */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/10 rounded-full blur-2xl opacity-60 pointer-events-none" />
                <div className="flex flex-col items-center p-6 sm:p-7 w-full h-full justify-center">
                  {/* Icon in glassy circle */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white/40 dark:border-gray-800/60 backdrop-blur-md mb-4`}>
                    {IconSVG}
                  </div>
                  <span className="text-2xl xs:text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </span>
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1 tracking-tight">
                    {stat.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium text-center">
                    {stat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
