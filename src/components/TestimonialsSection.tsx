import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Package, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div
            data-aos="zoom-in"
            className="inline-flex items-center px-3 sm:px-5 py-2 sm:py-3 rounded-full bg-blue-500/10 text-blue-400 mb-3 sm:mb-5 text-sm sm:text-base"
          >
            <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            <span className="font-medium">Our clients</span>
          </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by businesses worldwide for our quality service and expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={itemVariants}
              className="p-6 rounded-xl bg-gray-800/50 border border-gray-700/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300">{testimonial.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
