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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center px-3 sm:px-5 py-2 sm:py-3 rounded-full bg-blue-500/10 text-blue-400 mb-3 sm:mb-5 text-sm sm:text-base"
        >
          <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          <span className="font-medium">Choose us</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-5">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Experience excellence in global trade with our comprehensive solutions
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
            gap-6
            sm:gap-8
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
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
                  <CardContent className="p-6 sm:p-8 text-center flex flex-col items-center">
                    <motion.div
                      custom={index}
                      variants={iconVariants}
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    <motion.h3
                      custom={index}
                      variants={titleVariants}
                      className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4"
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      custom={index}
                      variants={descVariants}
                      className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      {feature.description}
                    </motion.p>
                  </CardContent>
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
