import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Parallax effect for background
      gsap.to(sectionRef.current, {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Title animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5
        }
      });

      // Description animation
      gsap.from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5
        }
      });

      // Cards animation with stagger
      gsap.from(cardsRef.current?.children, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5
        }
      });

      // Add parallax effect to cards
      if (cardsRef.current?.children) {
        Array.from(cardsRef.current.children).forEach((card, index) => {
          gsap.to(card, {
            y: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.5
            }
          });
        });
      }
    }
  }, []);

  const services = [
    {
      title: "Import Services",
      description: "Complete import solutions including customs clearance, documentation, and logistics coordination.",
      features: ["Customs Brokerage", "Import Documentation", "Freight Forwarding", "Compliance Management"],
      icon: "🚢"
    },
    {
      title: "Export Services", 
      description: "End-to-end export support to help your products reach global markets efficiently.",
      features: ["Export Documentation", "Market Analysis", "Shipping Coordination", "Trade Finance"],
      icon: "✈️"
    },
    {
      title: "Logistics Management",
      description: "Comprehensive logistics solutions for seamless supply chain operations.",
      features: ["Warehousing", "Distribution", "Inventory Management", "Supply Chain Optimization"],
      icon: "🚛"
    },
    {
      title: "Trade Compliance",
      description: "Expert guidance on international trade regulations and compliance requirements.",
      features: ["Regulatory Compliance", "Trade Documentation", "Risk Assessment", "Legal Support"],
      icon: "📋"
    },
    {
      title: "Digital Platform",
      description: "Advanced technology platform for tracking and managing your trade operations.",
      features: ["Real-time Tracking", "Digital Documentation", "Analytics Dashboard", "API Integration"],
      icon: "💻"
    },
    {
      title: "Consulting Services",
      description: "Strategic consulting to optimize your international trade operations.",
      features: ["Market Entry Strategy", "Trade Route Optimization", "Cost Analysis", "Risk Management"],
      icon: "🎯"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-900"
      data-scroll
      data-scroll-speed="1"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Our Services
          </h2>
          <p 
            ref={descriptionRef}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Comprehensive import-export solutions tailored to your business needs. 
            From documentation to delivery, we handle every aspect of international trade.
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-scroll
              data-scroll-speed={0.5 + (index * 0.1)}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white dark:bg-gray-800 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    className="text-5xl mb-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </CardDescription>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <motion.ul 
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 * index }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex + 0.3 * index }}
                        className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                      >
                        <motion.div 
                          className="w-2 h-2 bg-blue-500 rounded-full mr-3"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
