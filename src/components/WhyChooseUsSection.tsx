import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Globe, Users, Award, Headphones } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
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
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div 
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience excellence in global trade with our comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Card className="group hover:shadow-xl bg-white dark:bg-gray-800 border-0 shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div 
                      data-aos="zoom-in"
                      data-aos-delay={index * 100 + 200}
                      className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 
                      data-aos="fade-up"
                      data-aos-delay={index * 100 + 300}
                      className="text-xl font-bold text-gray-900 dark:text-white mb-4"
                    >
                      {feature.title}
                    </h3>
                    <p 
                      data-aos="fade-up"
                      data-aos-delay={index * 100 + 400}
                      className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
