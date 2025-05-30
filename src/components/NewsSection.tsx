import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Newspaper, X } from 'lucide-react';

// Simple Dialog implementation
const Dialog = ({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-4xl w-full mx-4 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

const NewsSection: React.FC = () => {
  // Show all news items by default, since "View More News" is removed
  const news = [
    {
      id: 1,
      title: "Digital Documentation Reduces Processing Time by 60%",
      excerpt: "Our new digital platform streamlines customs documentation, significantly reducing processing times for international shipments.",
      date: "2024-01-10",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "AI-Powered Tracking Enhances Shipment Visibility",
      excerpt: "Advanced AI algorithms now provide real-time tracking and predictive delivery estimates for all shipments.",
      date: "2024-01-09",
      category: "Innovation",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=250&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Sustainable Shipping Initiatives Show Promising Results",
      excerpt: "Our green logistics program has reduced carbon emissions by 30% while maintaining delivery efficiency.",
      date: "2024-01-05",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=250&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Q4 2023: Record Breaking Quarter for Global Trade",
      excerpt: "Despite global challenges, international trade volumes reached new heights with improved efficiency and customer satisfaction.",
      date: "2024-01-01",
      category: "Business",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "New Shipping Routes Announced for 2024",
      excerpt: "Expansion of our global network with new routes connecting emerging markets.",
      date: "2023-12-28",
      category: "Logistics",
      image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=400&h=250&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Customer Service Excellence Award 2023",
      excerpt: "Recognized for outstanding customer support and satisfaction in the logistics industry.",
      date: "2023-12-25",
      category: "Awards",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=400&h=250&fit=crop",
      readTime: "3 min read"
    },
    {
      id: 7,
      title: "New Warehouse Facilities in Europe",
      excerpt: "Strategic expansion of storage capabilities to better serve European markets.",
      date: "2023-12-20",
      category: "Expansion",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 8,
      title: "Blockchain Integration Secures Supply Chain",
      excerpt: "Implementation of blockchain technology ensures transparency and security in all supply chain operations.",
      date: "2023-12-15",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 9,
      title: "Employee Training Program Launched",
      excerpt: "A new training initiative aims to upskill employees in digital logistics and customer service.",
      date: "2023-12-10",
      category: "HR",
      image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=400&h=250&fit=crop",
      readTime: "2 min read"
    },
    {
      id: 10,
      title: "Partnership with EcoFleet for Greener Deliveries",
      excerpt: "Collaboration with EcoFleet introduces electric vehicles to our delivery fleet, reducing our carbon footprint.",
      date: "2023-12-05",
      category: "Partnership",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=250&fit=crop",
      readTime: "3 min read"
    }
  ];

  const [selectedArticle, setSelectedArticle] = useState<typeof news[0] | null>(null);

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="relative py-24  text-left bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-900 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-gradient-to-br from-blue-400/20 via-indigo-400/10 to-transparent rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[18rem] h-[18rem] bg-gradient-to-tr from-indigo-400/20 via-purple-400/10 to-transparent rounded-full blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 via-indigo-500/10 to-purple-500/10 text-blue-700 dark:text-blue-300 mb-4 text-base font-semibold shadow-md backdrop-blur-md">
            <Newspaper className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-300" />
            <span>Latest News</span>
          </div>
          <h2 className="text-4xl xs:text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-5">
            Industry Updates & News
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-medium">
            Stay informed about the latest developments in international trade and logistics.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {news.map((article, index) => (
            <motion.div
              key={article.id}
              className="h-full"
              variants={itemVariants}
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <Card className={`group relative overflow-hidden flex flex-col min-h-[320px] bg-white/90 dark:bg-gray-900/80 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
                {/* Image Section */}
                <div className="relative overflow-hidden h-52">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent z-10" />
                  {/* Category badge */}
                  <div className="absolute top-5 left-5 z-20">
                    <Badge className="px-3 py-1 text-sm bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                {/* Content Section */}
                <div className="flex flex-col flex-grow p-7">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    {formatDate(article.date)}
                    <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                    <span className="text-blue-500">{article.readTime}</span>
                  </div>
                  <h3 className="font-extrabold text-gray-900 dark:text-white group-hover:text-blue-700 transition-colors line-clamp-2 mb-3 text-xl">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-5 flex-grow">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center mt-auto">
                    <Button
                      variant="ghost"
                      className="group/btn p-0 h-auto text-blue-600 hover:text-blue-700 w-fit font-semibold tracking-wide"
                      onClick={() => setSelectedArticle(article)}
                    >
                      Read More
                      <ArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform w-4 h-4" />
                    </Button>
                  </div>
                </div>
                {/* Decorative floating ring */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-indigo-400/10 rounded-full blur-2xl opacity-60 pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Removed View More News button */}
      </div>

      {/* Dialog for Article Details */}
      <Dialog open={!!selectedArticle} onClose={() => setSelectedArticle(null)}>
        {selectedArticle && (
          <div className="p-0 sm:p-0">
            <div className="flex flex-col md:flex-row gap-0 md:gap-10">
              {/* Image with overlay */}
              <div className="relative w-full md:w-[420px] h-[220px] md:h-[420px] rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden shadow-xl">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                <div className="absolute top-5 left-5 z-20">
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg px-4 py-1.5 text-base">
                    {selectedArticle.category}
                  </Badge>
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 flex flex-col p-6 sm:p-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
                  {selectedArticle.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-5">
                  <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                  {formatDate(selectedArticle.date)}
                  <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                  <span className="text-blue-500">{selectedArticle.readTime}</span>
                </div>
                <div className="space-y-5">
                  <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed">
                    {selectedArticle.excerpt}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
};

export default NewsSection;
