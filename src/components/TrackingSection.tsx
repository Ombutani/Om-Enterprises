import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TrackingSection: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [showDemo, setShowDemo] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const trackingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (sectionRef.current) {
        // Title animation
        gsap.from(titleRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
          }
        });

        // Description animation
        gsap.from(descriptionRef.current, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
          }
        });

        // Form animation
        if (formRef.current) {
          gsap.from(formRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 1
            }
          });
        }

        // Tracking details animation
        if (trackingRef.current) {
          gsap.from(trackingRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
              trigger: trackingRef.current,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 1
            }
          });
        }
      }
    });

    // Cleanup function
    return () => {
      ctx.revert(); // This will kill all GSAP animations and ScrollTriggers
    };
  }, []); // Empty dependency array since we only want to run this once

  const handleTrackingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setShowDemo(true);
    }
  };

  const trackingSteps = [
    {
      status: 'Completed',
      title: 'Order Confirmed',
      description: 'Your shipment has been confirmed and documentation is being prepared.',
      timestamp: '2024-01-15 09:00 AM',
      location: 'Origin Port - Mumbai'
    },
    {
      status: 'Completed',
      title: 'Customs Clearance',
      description: 'Customs documentation cleared at origin port.',
      timestamp: '2024-01-16 02:30 PM',
      location: 'Mumbai Customs'
    },
    {
      status: 'Completed',
      title: 'In Transit',
      description: 'Shipment loaded and departed from origin port.',
      timestamp: '2024-01-18 06:15 AM',
      location: 'Arabian Sea'
    },
    {
      status: 'Active',
      title: 'Port Arrival',
      description: 'Shipment arrived at destination port.',
      timestamp: '2024-01-22 11:45 AM',
      location: 'Los Angeles Port'
    },
    {
      status: 'Pending',
      title: 'Final Delivery',
      description: 'Preparing for final delivery to destination.',
      timestamp: 'Estimated: 2024-01-25',
      location: 'Final Destination'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20"
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
            Track Your Shipment
          </h2>
          <p 
            ref={descriptionRef}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Stay informed about your shipment's journey with our real-time tracking system. 
            Enter your tracking number below to get detailed status updates.
          </p>
        </div>

        <motion.div 
          className="max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 bg-white dark:bg-gray-800 shadow-xl">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                Enter Tracking Number
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form 
                ref={formRef}
                onSubmit={handleTrackingSubmit} 
                className="flex gap-4"
              >
                <motion.div 
                  className="flex-1"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <Input
                    type="text"
                    placeholder="Enter your tracking number (e.g., IE123456789)"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="w-full text-lg py-3"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    type="submit" 
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Track
                  </Button>
                </motion.div>
              </form>
              
              {!showDemo && (
                <motion.div 
                  className="mt-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Try demo tracking number: <span className="font-mono bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">IE123456789</span>
                  </p>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <AnimatePresence>
          {showDemo && (
            <motion.div 
              ref={trackingRef}
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white dark:bg-gray-800 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                    Tracking Details for: {trackingNumber}
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>Container: MSKU123456789</span>
                    <span>Vessel: MSC AURORA</span>
                    <span>Service: Ocean Freight</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {trackingSteps.map((step, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <motion.div 
                          className={`flex-shrink-0 w-4 h-4 rounded-full mt-2 ${
                            step.status === 'Completed' ? 'bg-green-500' :
                            step.status === 'Active' ? 'bg-blue-500 animate-pulse' :
                            'bg-gray-300 dark:bg-gray-600'
                          }`}
                          whileHover={{ scale: 1.5 }}
                          transition={{ duration: 0.2 }}
                        />
                        <motion.div 
                          className="flex-1"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h3 className={`font-semibold ${
                              step.status === 'Completed' ? 'text-green-700 dark:text-green-400' :
                              step.status === 'Active' ? 'text-blue-700 dark:text-blue-400' :
                              'text-gray-500 dark:text-gray-400'
                            }`}>
                              {step.title}
                            </h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {step.timestamp}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 mt-1">
                            {step.description}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                            📍 {step.location}
                          </p>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TrackingSection;
