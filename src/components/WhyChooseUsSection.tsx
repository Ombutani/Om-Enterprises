import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Globe, Users, Award, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhyChooseUsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        // Title animation
        gsap.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 2
          }
        });

        // Description animation
        gsap.from(descriptionRef.current, {
          y: 30,
          opacity: 0,
          duration: 1.5,
          delay: 0.3,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 2
          }
        });

        // Cards animation with stagger
        if (cardsRef.current?.children) {
          Array.from(cardsRef.current.children).forEach((card, index) => {
            gsap.from(card, {
              y: 50,
              opacity: 0,
              duration: 1.2,
              delay: 0.3 * index,
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 2
              }
            });

            // Add parallax effect to cards
            gsap.to(card, {
              y: -20,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 2
              }
            });
          });
        }
      }
    });

    return () => {
      ctx.revert();
    };
  }, []);

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
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-slate-900"
      data-scroll
      data-scroll-speed="1"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Award className="w-4 h-4 mr-2" />
            Why Choose Us
          </motion.div>
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Your Success is Our Priority
          </h2>
          <p 
            ref={descriptionRef}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            We combine expertise, technology, and dedication to deliver exceptional import-export solutions.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                data-scroll
                data-scroll-speed={0.5 + (index * 0.1)}
              >
                <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800 border-0 shadow-lg">
                  <CardContent className="p-8 text-center">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
