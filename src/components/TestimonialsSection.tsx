import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);

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

        // Testimonials animation with stagger
        if (testimonialsRef.current?.children) {
          Array.from(testimonialsRef.current.children).forEach((testimonial, index) => {
            gsap.from(testimonial, {
              y: 50,
              opacity: 0,
              duration: 1.2,
              delay: 0.3 * index,
              scrollTrigger: {
                trigger: testimonial,
                start: 'top 80%',
                end: 'top 20%',
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, Global Manufacturing Corp",
      company: "Fortune 500 Company",
      rating: 5,
      text: "ImportExport Pro has transformed our international operations. Their expertise and dedication have saved us millions in logistics costs while improving delivery times.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "Director of Operations",
      company: "TechnoGlobal Industries",
      rating: 5,
      text: "Outstanding service and professional team. They handle our complex shipments with precision and always keep us informed throughout the process.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      position: "Supply Chain Manager",
      company: "MedDevice Solutions",
      rating: 5,
      text: "Their attention to detail in handling medical equipment imports is exceptional. We trust them completely with our most critical shipments.",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "David Kumar",
      position: "Founder & CEO",
      company: "AgriTech Innovations",
      rating: 5,
      text: "From documentation to delivery, every step is handled professionally. Their global network has opened new markets for our agricultural products.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Lisa Thompson",
      position: "International Trade Director",
      company: "AutoParts Global",
      rating: 5,
      text: "Reliable, efficient, and cost-effective. ImportExport Pro has been our trusted partner for over 5 years, and they never disappoint.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Robert Wilson",
      position: "VP of Procurement",
      company: "Industrial Solutions Inc",
      rating: 5,
      text: "Their expertise in customs regulations and compliance has prevented costly delays. Highly recommend for any international trade needs.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900/20 relative overflow-hidden"
      data-scroll
      data-scroll-speed="1"
      data-scroll-section
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white text-sm font-medium mb-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Star className="w-5 h-5 mr-2" />
            Client Success Stories
          </motion.div>
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6"
          >
            Trusted by Industry Leaders
          </h2>
          <p 
            ref={descriptionRef}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Discover why leading companies choose us for their global trade solutions
          </p>
        </div>

        <div 
          ref={testimonialsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-scroll
              data-scroll-speed={0.5 + (index * 0.1)}
              className="h-full"
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg h-full flex flex-col">
                <CardContent className="p-8 relative flex flex-col flex-grow">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-500/20 dark:text-blue-400/20" />
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-4 ring-blue-500/20 dark:ring-blue-400/20 flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="min-w-0">
                      <motion.h3 
                        className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent group-hover:from-blue-500 group-hover:to-indigo-500 transition-all truncate"
                        whileHover={{ x: 5 }}
                      >
                        {testimonial.name}
                      </motion.h3>
                      <p className="text-gray-600 dark:text-gray-300 font-medium truncate">
                        {testimonial.position}
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 truncate">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed italic flex-grow">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
