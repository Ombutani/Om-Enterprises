import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Package, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, Global Manufacturing Corp",
      company: "Fortune 500 Company",
      rating: 5,
      text: "ImportExport Pro has transformed our international operations. Their expertise and dedication have saved us millions in logistics costs while improving delivery times.",
   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
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

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-500/10 text-blue-400 mb-4 sm:mb-6 text-sm sm:text-base"
        >
          <Package className="w-5 h-5 mr-2" />
          <span className="font-medium">Our clients</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
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
            >
              <Card className="h-full flex flex-col shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-2xl transition-colors">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200 dark:border-gray-700">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
               
                  <p className="text-gray-700 dark:text-gray-200 mb-2 mt-5">{testimonial.text}</p>
                  <div className="mt-auto pt-5">
                    <span className="text-xs text-gray-400 dark:text-gray-500">{testimonial.company}</span>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
