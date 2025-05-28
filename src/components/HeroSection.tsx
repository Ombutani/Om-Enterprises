import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Globe, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <Globe className="w-6 h-6 text-blue-400" />,
    title: "Global Reach",
    desc: "Connect with partners worldwide through our extensive network.",
    bg: "bg-blue-500/20",
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-400" />,
    title: "Secure Transactions",
    desc: "Your business is protected with our advanced security measures.",
    bg: "bg-indigo-500/20",
  },
  {
    icon: <Zap className="w-6 h-6 text-cyan-400" />,
    title: "Fast Processing",
    desc: "Quick and efficient handling of all your import-export needs.",
    bg: "bg-cyan-500/20",
  },
];

// Animation variants
const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay }
  })
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay }
  })
};

const fadeUpStagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.4 + custom * 0.1 }
  })
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center  justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white py-12 sm:py-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5/0.08_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5/0.08_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2.5rem_2.5rem] md:bg-[size:3.5rem_3.5rem] lg:bg-[size:5rem_5rem]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto   px-4 sm:px-8 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          variants={fadeDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0}
          className="flex justify-center mb-6 mt-10 sm:mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs sm:text-sm font-medium shadow-md">
            <Globe className="w-4 h-4 mr-2" />
            <span className="whitespace-nowrap">Trusted by 500+ Companies Worldwide</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.1}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight text-center"
        >
          Global Trade
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mt-2">
            Simplified
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.2}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 dark:text-gray-300 mb-8 sm:mb-10 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light px-2"
        >
          Transform your international business with our comprehensive import-export solutions. From customs clearance to global logistics, we handle it all with precision and expertise.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          custom={0.3}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <Link to="/contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Get Started
              <ArrowDown className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Link to="/services" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-white/20 hover:border-white/40 text-white px-6 sm:px-8 py-3 sm:py-4 text-base md:text-lg rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
            >
              Explore Services
            </Button>
          </Link>
        </motion.div>

        {/* Features */}
        <div className="mt-12 sm:mt-16 w-full">
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-5
              max-w-xs
              sm:max-w-2xl
              md:max-w-4xl
              lg:max-w-6xl
              mx-auto
            "
          >
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                variants={fadeUpStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                custom={idx}
                className="flex flex-col items-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 shadow-md"
              >
                <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-300 text-center">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
