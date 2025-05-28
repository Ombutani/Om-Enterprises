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
      value: "15+",
      label: "Years of Experience",
      description: "Decades of expertise in global trade and logistics",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      value: "500+",
      label: "Global Partners",
      description: "Trusted partnerships across continents",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Award,
      value: "1000+",
      label: "Successful Projects",
      description: "Delivered excellence in every shipment",
      color: "from-violet-500 to-violet-600"
    },
    {
      icon: Users,
      value: "50+",
      label: "Countries Served",
      description: "Global reach with local expertise",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <motion.div
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center px-3 sm:px-5 py-2 sm:py-3 rounded-full bg-blue-500/10 text-blue-400 mb-3 sm:mb-5 text-sm sm:text-base"
          >
            <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="font-medium">About us</span>
          </motion.div>
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-5"
          >
            About Om Enterprises
          </motion.h2>
          <motion.p
            variants={descVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed"
          >
            Your trusted partner in global trade and logistics, delivering excellence across borders with precision and care
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-14 md:mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={statCardVariants}
              custom={index}
              className="relative group"
            >
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
                <CardContent className="p-4 sm:p-6 text-center flex flex-col items-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${stat.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-2xl xs:text-3xl sm:text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-blue-600 to-indigo-600 mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {stat.label}
                  </h3>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2"
        >
          {[{
            icon: Building2,
            title: "Our Mission",
            desc: "To provide innovative and reliable global trade solutions that empower businesses to expand their international reach while ensuring efficiency, security, and compliance.",
            gradient: "from-blue-500 to-indigo-500",
            cta: "Learn more about our mission"
          }, {
            icon: Globe,
            title: "Our Vision",
            desc: "To be the leading global trade solutions provider, recognized for our expertise, integrity, and commitment to customer success in international commerce.",
            gradient: "from-indigo-500 to-purple-500",
            cta: "Discover our vision"
          }].map((item, i) => (
            <motion.div
              key={item.title}
              variants={missionVisionVariants}
              custom={i}
              className="group"
            >
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
                <CardContent className="p-5 sm:p-8">
                  <div className="flex items-center mb-5 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center mr-3 sm:mr-4 transition-transform duration-300 group-hover:scale-110`}>
                      <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-5 sm:mb-6">
                    {item.desc}
                  </p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-2 transition-transform duration-300 cursor-pointer">
                    <span>{item.cta}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
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
