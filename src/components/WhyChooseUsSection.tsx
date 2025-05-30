import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Globe, Users, Award, Headphones, Package } from 'lucide-react';
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

const iconVariants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.12,
      type: "spring",
      stiffness: 300,
      damping: 18
    }
  })
};

const titleVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.12,
      type: "spring",
      stiffness: 200,
      damping: 18
    }
  })
};

const descVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4 + i * 0.12,
      type: "spring",
      stiffness: 200,
      damping: 18
    }
  })
};

const WhyChooseUsSection: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "100% secure transactions with comprehensive insurance coverage for all shipments.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick customs clearance and efficient logistics for faster delivery times.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Extensive worldwide network with partners in over 50 countries.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with deep knowledge in international trade.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "ISO certified processes ensuring highest quality standards.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your trade requirements.",
      color: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 md:py-28 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-slate-900 dark:to-blue-950 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-indigo-400/10 to-purple-400/20 rounded-full blur-2xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/10 text-blue-600 dark:text-blue-300 mb-4 sm:mb-7 text-sm sm:text-base font-semibold shadow-sm"
        >
          <Package className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
          <span>Why Choose Us</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-14 sm:mb-18 md:mb-20"
        >
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight drop-shadow-sm">
            Elevate Your Trade Experience
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Partner with a team that delivers security, speed, and global reach—backed by expertise and unwavering support.
          </p>
        </motion.div>

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
          "
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group"
              >
                <Card className="bg-white/90 dark:bg-gray-800/90 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-2 rounded-2xl overflow-visible">
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-20">
                    <motion.div
                      custom={index}
                      variants={iconVariants}
                      className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-900 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white drop-shadow-lg" />
                    </motion.div>
                  </div>
                  <CardContent className="pt-14 pb-8 px-6 sm:px-8 text-center flex flex-col items-center">
                    <motion.h3
                      custom={index}
                      variants={titleVariants}
                      className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 mt-2"
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      custom={index}
                      variants={descVariants}
                      className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium"
                    >
                      {feature.description}
                    </motion.p>
                  </CardContent>
                  {/* Subtle hover ring */}
                  <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:ring-4 group-hover:ring-blue-200/40 group-hover:dark:ring-blue-700/30 transition-all duration-300" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
