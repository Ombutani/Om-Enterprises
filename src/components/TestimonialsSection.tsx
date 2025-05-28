import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

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

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div 
            data-aos="fade-up"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full text-white text-sm font-medium mb-6 shadow-lg"
          >
            <Star className="w-5 h-5 mr-2" />
            Client Success Stories
          </div>
          <h2 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Trusted by Industry Leaders
          </h2>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Discover why leading companies choose us for their global trade solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div 
                    data-aos="zoom-in"
                    data-aos-delay={300 + index * 100 + 100}
                    className="flex items-center mb-4"
                  >
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                  <p 
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 100 + 200}
                    className="text-gray-600 dark:text-gray-300"
                  >
                    {testimonial.text}
                  </p>
                  <div 
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 100 + 300}
                    className="flex mt-4"
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
