import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Globe, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white py-12 sm:py-16 md:py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e5/0.1_1px,transparent_1px),linear-gradient(to_bottom,#4f46e5/0.1_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] md:bg-[size:3rem_3rem] lg:bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          <div 
            data-aos="fade-down"
            className="flex justify-center mb-4 sm:mb-6 md:mb-8"
          >
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-xs sm:text-sm font-medium">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
              <span className="whitespace-nowrap">Trusted by 500+ Companies Worldwide</span>
            </div>
          </div>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight"
          >
            Global Trade
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent mt-1 sm:mt-2">
              Simplified
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 dark:text-gray-300 mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-[280px] xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-4"
          >
            Transform your international business with our comprehensive import-export solutions.
            From customs clearance to global logistics, we handle it all with precision and expertise.
          </p>

          <div 
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs xs:max-w-none mx-auto"
          >
            <Link to="/contact" className="w-full xs:w-auto">
              <Button
                size="lg"
                className="w-full xs:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get Started
                <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services" className="w-full xs:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full xs:w-auto border-2 border-white/20 hover:border-white/40 text-white px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg rounded-full backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
              >
                Explore Services
              </Button>
            </Link>
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="p-4 sm:p-5 md:p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-400" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Connect with partners worldwide through our extensive network.</p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="p-4 sm:p-5 md:p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-indigo-400" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Secure Transactions</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Your business is protected with our advanced security measures.</p>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="p-4 sm:p-5 md:p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 xs:col-span-2 lg:col-span-1"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-cyan-400" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Fast Processing</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">Quick and efficient handling of all your import-export needs.</p>
            </div>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="700"
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-white/50 hover:text-white transition-colors" />
      </div>
    </section>
  );
};

export default HeroSection;
