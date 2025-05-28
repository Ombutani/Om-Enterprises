import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, Globe, Users, Award, Headphones, Package } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: 'ease-in-out',
    });
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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="zoom-in"
          className="inline-flex items-center px-3 sm:px-5 py-2 sm:py-3 rounded-full bg-blue-500/10 text-blue-400 mb-3 sm:mb-5 text-sm sm:text-base"
        >
          <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          <span className="font-medium">Choose us</span>
        </div>
        <div
          data-aos="fade-down"
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-5">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Experience excellence in global trade with our comprehensive solutions
          </p>
        </div>

        <div className="
          grid
          grid-cols-1
          xs:grid-cols-2
          md:grid-cols-3
          gap-6
          sm:gap-8
        ">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 120}
                className="relative group"
              >
                <Card className="bg-white dark:bg-gray-800 border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
                  <CardContent className="p-6 sm:p-8 text-center flex flex-col items-center">
                    <div
                      data-aos="zoom-in"
                      data-aos-delay={index * 120 + 200}
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3
                      data-aos="fade-right"
                      data-aos-delay={index * 120 + 300}
                      className="text-base sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-4"
                    >
                      {feature.title}
                    </h3>
                    <p
                      data-aos="fade-up"
                      data-aos-delay={index * 120 + 400}
                      className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
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
