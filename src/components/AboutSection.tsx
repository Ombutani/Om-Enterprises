import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
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

      // Stats animation with counter effect
      if (statsRef.current?.children) {
        Array.from(statsRef.current.children).forEach((stat, index) => {
          const numberElement = stat.querySelector('.text-3xl');
          if (numberElement) {
            const targetNumber = parseInt(numberElement.textContent?.replace(/[^0-9]/g, '') || '0');
            gsap.from(numberElement, {
              textContent: 0,
              duration: 1.5,
              ease: 'power1.out',
              snap: { textContent: 1 },
              stagger: 0.1,
              scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 0.5
              }
            });
          }
        });
      }

      // Cards animation with parallax
      if (cardsRef.current?.children) {
        Array.from(cardsRef.current.children).forEach((card, index) => {
          gsap.from(card, {
            x: index % 2 === 0 ? -50 : 50,
            opacity: 0,
            duration: 0.6,
            delay: 0.1 * index,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 0.5
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
              scrub: 0.5
            }
          });
        });
      }
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-slate-900"
      data-scroll
      data-scroll-speed="1"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              ref={titleRef}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              About ImportExport Pro
            </h2>
            <p 
              ref={descriptionRef}
              className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed"
            >
              With over two decades of experience in international trade, ImportExport Pro has 
              established itself as a leading facilitator of global commerce. We specialize in 
              bridging the gap between businesses and international markets through our 
              comprehensive suite of import-export services.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Our team of trade experts, customs specialists, and logistics professionals work 
              tirelessly to ensure your goods move seamlessly across borders while maintaining 
              full compliance with international regulations.
            </p>

            <div 
              ref={statsRef}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-scroll
                data-scroll-speed="0.5"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                >
                  20+
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-scroll
                data-scroll-speed="0.7"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.7 }}
                  className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                >
                  10,000+
                </motion.div>
                <div className="text-gray-600 dark:text-gray-400">Successful Shipments</div>
              </motion.div>
            </div>
          </div>

          <div 
            ref={cardsRef}
            className="space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              data-scroll
              data-scroll-speed="0.3"
            >
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-0">
                <CardContent className="p-0">
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-3"
                    whileHover={{ x: 5 }}
                  >
                    Our Mission
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    To empower businesses of all sizes to participate in global trade by providing 
                    expert guidance, cutting-edge technology, and reliable logistics solutions.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              data-scroll
              data-scroll-speed="0.4"
            >
              <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-0">
                <CardContent className="p-0">
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-3"
                    whileHover={{ x: 5 }}
                  >
                    Our Vision
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    To be the world's most trusted partner in international trade, making global 
                    commerce accessible, efficient, and transparent for businesses worldwide.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              data-scroll
              data-scroll-speed="0.5"
            >
              <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-0">
                <CardContent className="p-0">
                  <motion.h3 
                    className="text-xl font-semibold text-gray-900 dark:text-white mb-3"
                    whileHover={{ x: 5 }}
                  >
                    Our Values
                  </motion.h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Integrity, transparency, innovation, and customer success drive everything we do. 
                    We believe in building long-term partnerships based on trust and mutual growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
