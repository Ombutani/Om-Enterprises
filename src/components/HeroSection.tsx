import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Globe, Shield, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveSection }) => {

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);




  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-slate-900 dark:to-black overflow-hidden"
      data-scroll
      data-scroll-speed="1"
      data-scroll-section
    >
      <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
      
      {/* Enhanced Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div 
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"
      ></div>
      <div 
        className="absolute top-1/2 right-20 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"
      ></div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div 
            className="flex justify-center mb-8"
           
          >
            <div 
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium"
            >
              <Globe className="w-4 h-4 mr-2" />
              Trusted by 500+ Companies Worldwide
            </div>
          </div>

          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl font-extrabold text-white mb-8 leading-tight"
           
          >
            Global Trade
            <span 
              className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent"
            >
              Simplified
            </span>
          </h1>
          
          <p 
            ref={descriptionRef}
            className="text-xl md:text-2xl text-slate-200 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
           
          >
            Transform your international business with our comprehensive import-export solutions. 
            From customs clearance to global logistics, we handle it all with precision and expertise.
          </p>

          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
           
          >
            <div>
              <Button 
                onClick={() => setActiveSection('services')}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-10 py-4 text-lg shadow-xl hover:shadow-2xl transform transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
            <div>
              <Button 
                onClick={() => setActiveSection('products')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-10 py-4 text-lg backdrop-blur-md bg-white/10 hover:shadow-xl transform transition-all duration-300"
              >
                View Products
              </Button>
            </div>
          </div>

          {/* Feature Icons */}
          <div 
           
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
            
          >
            {[
              { icon: Shield, text: "100%", subtext: "Secure Transactions", gradient: "from-blue-500 to-cyan-500" },
              { icon: Globe, text: "50+", subtext: "Countries Served", gradient: "from-indigo-500 to-purple-500" },
              { icon: Zap, text: "24/7", subtext: "Expert Support", gradient: "from-cyan-500 to-blue-500" }
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center"
            
              >
                <div 
                  className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center mb-4 shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div 
                  className="text-2xl font-bold text-white mb-2"
                >
                  {feature.text}
                </div>
                <div className="text-slate-300">{feature.subtext}</div>
              </div>
            ))}
          </div>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        
       
        >
          <ArrowDown className="text-white w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
