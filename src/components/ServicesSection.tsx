import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package } from 'lucide-react';

const ServicesSection: React.FC = () => {
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

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div 
          data-aos="fade-up"
          className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500/10 text-blue-400 mb-6"
        >
          <Package className="w-5 h-5 mr-2" />
          <span className="font-medium">Our Services</span>
        </div>

        <div 
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions for your global trade needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="group hover:shadow-xl bg-white dark:bg-gray-800 border-0 shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div 
                    data-aos="zoom-in"
                    data-aos-delay={index * 100 + 200}
                    className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300"
                  >
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle 
                      data-aos="fade-up"
                      data-aos-delay={index * 100 + 300}
                      className="text-xl font-bold text-gray-900 dark:text-white mb-2"
                    >
                      {service.title}
                    </CardTitle>
                    <CardDescription 
                      data-aos="fade-up"
                      data-aos-delay={index * 100 + 400}
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        data-aos="fade-up"
                        data-aos-delay={index * 100 + 500 + featureIndex * 100}
                        className="flex items-center text-sm text-gray-700 dark:text-gray-300"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
