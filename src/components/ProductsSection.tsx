import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Truck, Factory, Zap, Globe, Shield } from 'lucide-react';

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const sectionRef = useRef<HTMLElement>(null);

  // ... products array and categories array remain unchanged ...

  const products = [
    {
      id: 1,
      name: "Industrial CNC Machine",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=400&h=300&fit=crop",
      description: "High-precision CNC machining center for industrial manufacturing.",
      features: ["ISO Certified", "Global Warranty", "24/7 Support"],
      price: "Custom Quote",
      icon: Factory
    },
    {
      id: 2,
      name: "Semiconductor Components",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      description: "Advanced semiconductor components for electronics industry.",
      features: ["RoHS Compliant", "Fast Shipping", "Quality Assured"],
      price: "Starting $50",
      icon: Zap
    },
    {
      id: 3,
      name: "Automotive Engine Parts",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      description: "Premium engine components for automotive manufacturers.",
      features: ["OEM Quality", "Global Standards", "Quick Delivery"],
      price: "Bulk Pricing",
      icon: Truck
    },
    {
      id: 4,
      name: "MRI Scanner",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      description: "Advanced medical imaging equipment for hospitals.",
      features: ["FDA Approved", "CE Marked", "Global Support"],
      price: "Contact Us",
      icon: Shield
    },
    {
      id: 5,
      name: "Tractor Equipment",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop",
      description: "Modern farming equipment for enhanced productivity.",
      features: ["Weather Resistant", "Energy Efficient", "Low Maintenance"],
      price: "From $5,000",
      icon: Package
    },
    {
      id: 6,
      name: "Industrial Chemicals",
      category: "Chemicals",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&h=300&fit=crop",
      description: "High-grade industrial chemicals for manufacturing.",
      features: ["Safety Certified", "Pure Grade", "Bulk Available"],
      price: "Per Ton",
      icon: Globe
    },
    {
      id: 7,
      name: "3D Printing System",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
      description: "Industrial-grade 3D printing solutions for rapid prototyping.",
      features: ["High Precision", "Multi-material", "Cloud Connected"],
      price: "From $10,000",
      icon: Factory
    },
    {
      id: 8,
      name: "IoT Sensors",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      description: "Smart sensors for industrial IoT applications.",
      features: ["Wireless", "Long Battery", "Real-time Data"],
      price: "Starting $100",
      icon: Zap
    },
    {
      id: 9,
      name: "Electric Vehicle Parts",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      description: "Components for electric vehicle manufacturing.",
      features: ["Eco-friendly", "High Efficiency", "Global Supply"],
      price: "Bulk Pricing",
      icon: Truck
    },
    {
      id: 10,
      name: "Surgical Equipment",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      description: "Advanced surgical instruments and equipment.",
      features: ["Sterilized", "Precision Made", "Medical Grade"],
      price: "Contact Us",
      icon: Shield
    },
    {
      id: 11,
      name: "Irrigation Systems",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop",
      description: "Smart irrigation solutions for modern farming.",
      features: ["Water Efficient", "Automated", "Weather Adaptive"],
      price: "From $2,000",
      icon: Package
    },
    {
      id: 12,
      name: "Specialty Chemicals",
      category: "Chemicals",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&h=300&fit=crop",
      description: "Specialized chemical compounds for various industries.",
      features: ["Custom Formulation", "High Purity", "Fast Delivery"],
      price: "Per Kg",
      icon: Globe
    },
    {
      id: 13,
      name: "Robotic Assembly Line",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=400&h=300&fit=crop",
      description: "Automated assembly systems for mass production.",
      features: ["AI Powered", "24/7 Operation", "High Output"],
      price: "Custom Quote",
      icon: Factory
    },
    {
      id: 14,
      name: "Cloud Servers",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      description: "Enterprise-grade server infrastructure.",
      features: ["High Performance", "Scalable", "Secure"],
      price: "Starting $1,000",
      icon: Zap
    },
    {
      id: 15,
      name: "Hybrid Engine Parts",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      description: "Components for hybrid vehicle systems.",
      features: ["Eco-friendly", "High Efficiency", "Durable"],
      price: "Bulk Pricing",
      icon: Truck
    },
    {
      id: 16,
      name: "Diagnostic Equipment",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      description: "Advanced medical diagnostic systems.",
      features: ["AI Analysis", "Real-time Results", "Portable"],
      price: "Contact Us",
      icon: Shield
    },
    {
      id: 17,
      name: "Smart Greenhouse",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop",
      description: "Automated greenhouse systems for controlled farming.",
      features: ["Climate Control", "IoT Enabled", "Energy Efficient"],
      price: "From $15,000",
      icon: Package
    },
    {
      id: 18,
      name: "Industrial Solvents",
      category: "Chemicals",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&h=300&fit=crop",
      description: "High-quality industrial cleaning solutions.",
      features: ["Non-toxic", "Fast Acting", "Bulk Available"],
      price: "Per Liter",
      icon: Globe
    },
    {
      id: 19,
      name: "Laser Cutting System",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
      description: "Precision laser cutting and engraving systems.",
      features: ["High Precision", "Multi-material", "Automated"],
      price: "From $20,000",
      icon: Factory
    },
    {
      id: 20,
      name: "Network Equipment",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      description: "Enterprise networking infrastructure.",
      features: ["High Speed", "Secure", "Scalable"],
      price: "Starting $500",
      icon: Zap
    },
    {
      id: 21,
      name: "Brake Systems",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      description: "Advanced braking systems for vehicles.",
      features: ["ABS Enabled", "Heat Resistant", "Long Lasting"],
      price: "Bulk Pricing",
      icon: Truck
    },
    {
      id: 22,
      name: "Patient Monitor",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      description: "Advanced patient monitoring systems.",
      features: ["Real-time Data", "Portable", "Multi-parameter"],
      price: "Contact Us",
      icon: Shield
    },
    {
      id: 23,
      name: "Harvesting Equipment",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop",
      description: "Automated harvesting systems for crops.",
      features: ["Efficient", "Weather Resistant", "Low Maintenance"],
      price: "From $8,000",
      icon: Package
    },
    {
      id: 24,
      name: "Industrial Adhesives",
      category: "Chemicals",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&h=300&fit=crop",
      description: "High-strength industrial bonding solutions.",
      features: ["Quick Setting", "Temperature Resistant", "Durable"],
      price: "Per Kg",
      icon: Globe
    },
    {
      id: 25,
      name: "Quality Control System",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=400&h=300&fit=crop",
      description: "Automated quality inspection systems.",
      features: ["AI Vision", "High Speed", "Accurate"],
      price: "Custom Quote",
      icon: Factory
    },
    {
      id: 26,
      name: "Data Storage Solutions",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      description: "Enterprise data storage and backup systems.",
      features: ["High Capacity", "Secure", "Fast Access"],
      price: "Starting $2,000",
      icon: Zap
    },
    {
      id: 27,
      name: "Transmission Systems",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      description: "Advanced transmission components.",
      features: ["Smooth Operation", "Durable", "Efficient"],
      price: "Bulk Pricing",
      icon: Truck
    },
    {
      id: 28,
      name: "Medical Imaging System",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      description: "Advanced medical imaging technology.",
      features: ["High Resolution", "3D Imaging", "Fast Processing"],
      price: "Contact Us",
      icon: Shield
    },
    {
      id: 29,
      name: "Seed Processing Unit",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop",
      description: "Automated seed processing and packaging systems.",
      features: ["High Capacity", "Automated", "Precise"],
      price: "From $12,000",
      icon: Package
    },
    {
      id: 30,
      name: "Industrial Coatings",
      category: "Chemicals",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&h=300&fit=crop",
      description: "Specialized industrial protective coatings.",
      features: ["Corrosion Resistant", "Durable", "Custom Colors"],
      price: "Per Liter",
      icon: Globe
    },
    {
      id: 31,
      name: "Smart Factory System",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=400&h=300&fit=crop",
      description: "Complete Industry 4.0 factory automation solution.",
      features: ["AI Integration", "Real-time Monitoring", "Predictive Maintenance"],
      price: "Custom Quote",
      icon: Factory
    },
    {
      id: 32,
      name: "Quantum Computing Hardware",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      description: "Next-generation quantum computing components.",
      features: ["Superconducting", "Cryogenic", "High Stability"],
      price: "Starting $100,000",
      icon: Zap
    },
    {
      id: 33,
      name: "Autonomous Vehicle Systems",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      description: "Advanced autonomous driving technology packages.",
      features: ["LIDAR Integration", "AI Processing", "Safety Certified"],
      price: "Bulk Pricing",
      icon: Truck
    },
    {
      id: 34,
      name: "Robotic Surgery System",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      description: "Precision robotic surgical assistance systems.",
      features: ["High Precision", "3D Vision", "Minimal Invasive"],
      price: "Contact Us",
      icon: Shield
    },
    {
      id: 35,
      name: "Vertical Farming System",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop",
      description: "Space-efficient vertical farming solutions.",
      features: ["LED Lighting", "Hydroponic", "Automated Control"],
      price: "From $25,000",
      icon: Package
    },
    {
      id: 36,
      name: "Bio-degradable Polymers",
      category: "Chemicals",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&h=300&fit=crop",
      description: "Eco-friendly polymer solutions for industry.",
      features: ["Biodegradable", "High Strength", "Custom Formulation"],
      price: "Per Kg",
      icon: Globe
    },
    {
      id: 37,
      name: "Additive Manufacturing System",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
      description: "Advanced 3D printing for industrial applications.",
      features: ["Multi-material", "Large Scale", "High Speed"],
      price: "From $50,000",
      icon: Factory
    },
    {
      id: 38,
      name: "Edge Computing Devices",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      description: "Industrial edge computing solutions.",
      features: ["Low Latency", "Secure", "Rugged Design"],
      price: "Starting $2,500",
      icon: Zap
    },
    {
      id: 39,
      name: "Fuel Cell Systems",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      description: "Hydrogen fuel cell technology for vehicles.",
      features: ["Zero Emission", "High Efficiency", "Quick Refuel"],
      price: "Bulk Pricing",
      icon: Truck
    },
    {
      id: 40,
      name: "Telemedicine Platform",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      description: "Complete telemedicine solution for healthcare providers.",
      features: ["HD Video", "Secure", "HIPAA Compliant"],
      price: "Contact Us",
      icon: Shield
    },
    {
      id: 41,
      name: "Drone Farming System",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop",
      description: "Automated drone systems for precision agriculture.",
      features: ["GPS Guided", "Multi-spectral", "Automated"],
      price: "From $15,000",
      icon: Package
    },
    {
      id: 42,
      name: "Smart Coatings",
      category: "Chemicals",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&h=300&fit=crop",
      description: "Intelligent coating solutions with self-healing properties.",
      features: ["Self-healing", "Anti-corrosive", "Smart Response"],
      price: "Per Liter",
      icon: Globe
    },
    {
      id: 43,
      name: "Digital Twin System",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=400&h=300&fit=crop",
      description: "Real-time digital twin solutions for manufacturing.",
      features: ["Real-time Sync", "Predictive Analytics", "3D Visualization"],
      price: "Custom Quote",
      icon: Factory
    },
    {
      id: 44,
      name: "AI Processing Units",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      description: "Specialized AI processing hardware for edge computing.",
      features: ["High Performance", "Low Power", "Neural Processing"],
      price: "Starting $5,000",
      icon: Zap
    },
    {
      id: 45,
      name: "Smart Battery Systems",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      description: "Advanced battery management systems for EVs.",
      features: ["Fast Charging", "Thermal Management", "Long Life"],
      price: "Bulk Pricing",
      icon: Truck
    },
    {
      id: 46,
      name: "Portable Ultrasound",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      description: "Handheld ultrasound imaging devices.",
      features: ["Portable", "High Resolution", "Wireless"],
      price: "Contact Us",
      icon: Shield
    },
    {
      id: 47,
      name: "Smart Irrigation Controller",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop",
      description: "AI-powered irrigation control systems.",
      features: ["Weather Adaptive", "Soil Monitoring", "Mobile Control"],
      price: "From $3,000",
      icon: Package
    },
    {
      id: 48,
      name: "Nano-coatings",
      category: "Chemicals",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&h=300&fit=crop",
      description: "Advanced nano-coating solutions for industry.",
      features: ["Ultra-thin", "Super-hydrophobic", "Anti-microbial"],
      price: "Per Liter",
      icon: Globe
    },
    {
      id: 49,
      name: "Smart Conveyor System",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=400&h=300&fit=crop",
      description: "Intelligent conveyor systems with sorting capabilities.",
      features: ["AI Sorting", "Modular Design", "Energy Efficient"],
      price: "Custom Quote",
      icon: Factory
    },
    {
      id: 50,
      name: "Blockchain Hardware",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      description: "Specialized hardware for blockchain operations.",
      features: ["High Performance", "Secure", "Energy Efficient"],
      price: "Starting $3,000",
      icon: Zap
    },
    {
      id: 51,
      name: "Autonomous Navigation System",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      description: "Advanced navigation systems for autonomous vehicles.",
      features: ["HD Mapping", "Real-time Updates", "Multi-sensor"],
      price: "Bulk Pricing",
      icon: Truck
    },
    {
      id: 52,
      name: "Smart Hospital System",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&fit=crop",
      description: "Complete hospital management and monitoring system.",
      features: ["Patient Tracking", "Resource Management", "Analytics"],
      price: "Contact Us",
      icon: Shield
    },
    {
      id: 53,
      name: "Precision Seeding System",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop",
      description: "Automated precision seeding technology.",
      features: ["GPS Guided", "Variable Rate", "Data Logging"],
      price: "From $20,000",
      icon: Package
    },
    {
      id: 54,
      name: "Smart Lubricants",
      category: "Chemicals",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&h=300&fit=crop",
      description: "Intelligent lubrication solutions for industry.",
      features: ["Self-monitoring", "Long-lasting", "Temperature Adaptive"],
      price: "Per Liter",
      icon: Globe
    },
    {
      id: 55,
      name: "Smart Quality Control",
      category: "Manufacturing",
      image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=400&h=300&fit=crop",
      description: "AI-powered quality inspection systems.",
      features: ["Deep Learning", "Real-time Analysis", "Defect Detection"],
      price: "Custom Quote",
      icon: Factory
    },
    {
      id: 56,
      name: "5G Infrastructure",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      description: "Complete 5G network infrastructure solutions.",
      features: ["High Speed", "Low Latency", "Massive IoT"],
      price: "Starting $10,000",
      icon: Zap
    },
    {
      id: 57,
      name: "Smart Suspension System",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop",
      description: "Adaptive suspension technology for vehicles.",
      features: ["Real-time Adjustment", "Comfort Control", "Stability"],
      price: "Bulk Pricing",
      icon: Truck
    },
    {
      id: 58,
      name: "Smart Medical Devices",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
      description: "Connected medical monitoring devices.",
      features: ["Real-time Monitoring", "Cloud Connected", "Mobile App"],
      price: "Contact Us",
      icon: Shield
    },
    {
      id: 59,
      name: "Smart Pest Control",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=400&h=300&fit=crop",
      description: "Automated pest control and monitoring system.",
      features: ["AI Detection", "Targeted Control", "Data Analysis"],
      price: "From $5,000",
      icon: Package
    },
    {
      id: 60,
      name: "Smart Catalysts",
      category: "Chemicals",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&h=300&fit=crop",
      description: "Advanced catalytic solutions for industry.",
      features: ["High Efficiency", "Long Life", "Custom Formulation"],
      price: "Per Kg",
      icon: Globe
    }
  ];

  const categories = ["All", "Manufacturing", "Technology", "Automotive", "Healthcare", "Agriculture", "Chemicals"];

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(product => product.category === activeCategory);

  // Always show all products, regardless of pagination or showAllProducts state
  const displayedProducts = filteredProducts;

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  // No more "hasMoreProducts" logic needed since all products are always shown

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-16">
          <div
            data-aos="fade-up"
            className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-500/10 text-blue-400 mb-4 sm:mb-6 text-sm sm:text-base"
          >
            <Package className="w-5 h-5 mr-2" />
            <span className="font-medium">Our Products</span>
          </div>
          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-6"
          >
            Premium Quality Products
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed"
          >
            Discover our extensive range of high-quality products sourced globally and delivered with excellence.
          </p>
        </div>

        {/* Category Filter */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          {categories.map((category, index) => (
            <div
              key={category}
              data-aos="fade-up"
              data-aos-delay={300 + index * 50}
            >
              <Button
                variant={category === activeCategory ? "default" : "outline"}
                className={`${
                  category === activeCategory
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
                } rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium`}
                onClick={() => {
                  setActiveCategory(category);
                  setShowAllProducts(false);
                  setCurrentPage(1);
                }}
              >
                {category}
              </Button>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="
            grid
            grid-cols-1
            xs:grid-cols-2
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            sm:gap-8
          "
        >
          {displayedProducts.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={400 + index * 50}
                className="product-card h-full flex"
              >
                {/* Responsive Card Design: text left on md+ screens, centered on mobile */}
                <Card className="h-full flex flex-col bg-white dark:bg-gray-900 border border-blue-100 dark:border-gray-800 shadow-xl rounded-2xl overflow-hidden group w-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  {/* Image with overlay and icon */}
                  <div className="relative overflow-hidden h-48 sm:h-56 md:h-60 lg:h-56">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-900/10 to-transparent pointer-events-none" />
                    {/* Icon in a floating circle */}
                    <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-10">
                      <div className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border-4 border-blue-500/70 dark:border-blue-700/70">
                        <IconComponent className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm shadow-md">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  {/* Card Content */}
                  <div className="flex flex-col flex-1 pt-10 px-5 pb-5 sm:px-7 sm:pb-7">
                    {/* Title and Price */}
                    <div className="flex flex-col items-center text-center md:items-start md:text-left mb-2">
                      <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white line-clamp-2 mb-1">
                        {product.name}
                      </CardTitle>
                      <div className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400">
                        {product.price}
                      </div>
                    </div>
                    {/* Description */}
                    <CardDescription className="text-gray-600 dark:text-gray-300 text-center md:text-left line-clamp-2 mb-3 text-sm sm:text-base">
                      {product.description}
                    </CardDescription>
                    {/* Features */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                      {product.features.map((feature, featureIndex) => (
                        <Badge
                          key={featureIndex}
                          variant="secondary"
                          className="text-[11px] sm:text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-700"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    {/* Request Quote Button */}
                    <div className="mt-auto">
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition-transform duration-300 hover:scale-105 text-base py-2.5">
                        Request Quote
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Load More / View All Button */}
        {/* Removed Load More button since all products are always shown */}
      </div>
    </section>
  );
};

export default ProductsSection;
