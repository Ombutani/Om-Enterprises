import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Globe, Award, Users, Package, ArrowRight } from 'lucide-react';
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

const statCardVariants = {
  hidden: { opacity: 0, y: 40, rotateY: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      bounce: 0.18,
      delay: i * 0.12
    }
  })
};

const headerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
};

const titleVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }
};

const descVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
};

const missionVisionVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      type: "spring",
      bounce: 0.18,
      delay: 0.1 + i * 0.1
    }
  })
};

const AboutSection: React.FC = () => {
  const stats = [
    {
      icon: Building2,
      value: "8+",
      label: "Years of Experience",
      description: "Decades of expertise in global trade and logistics",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      value: "300+",
      label: "Global Partners",
      description: "Trusted partnerships across continents",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Award,
      value: "500+",
      label: "Successful Projects",
      description: "Delivered excellence in every shipment",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: Users,
      value: "46+",
      label: "Countries Served",
      description: "Global reach with local expertise",
      color: "from-purple-500 to-purple-600"
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
        {/* Header */}
        <div className="text-center mb-14 sm:mb-20 md:mb-24">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/10 to-purple-500/10 text-blue-600 dark:text-blue-300 mb-4 text-base font-semibold shadow-md backdrop-blur-md"
          >
            <Package className="w-5 h-5 mr-2" />
            <span>About us</span>
          </motion.div>
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-4"
          >
            About Om Enterprises
          </motion.h2>
          <motion.p
            variants={descVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Your trusted partner in global trade and logistics, delivering excellence across borders with precision and care.
          </motion.p>
        </div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-14 sm:mb-20 md:mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statCardVariants}
              custom={index}
              className="relative group"
            >
              {/* Floating gradient ring */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-indigo-400/10 rounded-full blur-2xl opacity-60 pointer-events-none" />
              <Card className="bg-white/90 dark:bg-gray-900/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col items-center rounded-3xl overflow-hidden group">
                <CardContent className="p-6 sm:p-8 text-center flex flex-col items-center">
                  {/* Icon in glassy circle */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${stat.color} shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-white/40 dark:border-gray-800/60 backdrop-blur-md mb-5`}>
                    <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="text-3xl xs:text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2 drop-shadow-sm">
                    {stat.value}
                  </div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 tracking-tight">
                    {stat.label}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2"
        >
          {[{
            icon: Building2,
            title: "Our Mission",
            desc: "To provide innovative and reliable global trade solutions that empower businesses to expand their international reach while ensuring efficiency, security, and compliance.",
            gradient: "from-blue-500 via-indigo-500 to-purple-500",
            cta: "Learn more about our mission"
          }, {
            icon: Globe,
            title: "Our Vision",
            desc: "To be the leading global trade solutions provider, recognized for our expertise, integrity, and commitment to customer success in international commerce.",
            gradient: "from-indigo-500 via-purple-500 to-pink-500",
            cta: "Discover our vision"
          }].map((item, i) => (
            <motion.div
              key={item.title}
              variants={missionVisionVariants}
              custom={i}
              className="group"
            >
              <Card className="bg-white/90 dark:bg-gray-900/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full rounded-3xl overflow-hidden group relative">
                {/* Decorative floating ring */}
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/10 rounded-full blur-2xl opacity-50 pointer-events-none" />
                <CardContent className="p-8 sm:p-12">
                  <div className="flex items-center mb-7">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg border-4 border-white/40 dark:border-gray-800/60 backdrop-blur-md mr-5 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">{item.title}</h3>
                  </div>
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-7 font-medium">
                    {item.desc}
                  </p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300 cursor-pointer text-base sm:text-lg">
                    <span>{item.cta}</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
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

export default AboutSection;
