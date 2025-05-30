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
  const [visibleItems, setVisibleItems] = useState(5);
  const [selectedArticle, setSelectedArticle] = useState<typeof news[0] | null>(null);

  const news = [
    {
      id: 1,
      title: "New Trade Agreement Opens Markets in Southeast Asia",
      excerpt: "Recent bilateral agreements have opened new opportunities for exporters looking to expand into emerging markets.",
      date: "2024-01-15",
      category: "Trade Policy",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Digital Documentation Reduces Processing Time by 60%",
      excerpt: "Our new digital platform streamlines customs documentation, significantly reducing processing times for international shipments.",
      date: "2024-01-10",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      readTime: "3 min read"
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4"
          >
            <Newspaper className="w-4 h-4 mr-2" />
            Latest News
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Industry Updates & News
          </h2>
          <p
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Stay informed about the latest developments in international trade and logistics.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {news.slice(0, visibleItems).map((article, index) => (
            <motion.div
              key={article.id}
              className="h-full"
              variants={itemVariants}
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <Card className={`group hover:shadow-2xl text-left transition-all duration-300 transform hover:-translate-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden h-full flex flex-col ${index === 0 ? 'md:col-span-2 md:flex-row' : ''}`}>
                <div
                  className={`${index === 0 ? 'md:w-1/2' : ''} relative overflow-hidden ${index === 0 ? 'md:h-auto' : 'h-48'}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className={`${index === 0 ? 'px-4 py-1.5 text-sm' : ''} bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg`}>
                      {article.category}
                    </Badge>
                  </div>
                  {index === 0 && (
                    <div className="absolute bottom-4 left-4 z-20">
                      <Badge className="bg-white/90 dark:bg-gray-800/90 text-blue-600 dark:text-blue-400 shadow-lg">
                        Featured Article
                      </Badge>
                    </div>
                  )}
                </div>
                <div
                  className={`${index === 0 ? 'md:w-1/2' : ''} flex flex-col flex-grow p-6 ${index === 0 ? 'md:p-8' : ''}`}
                >
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                    {formatDate(article.date)}
                    <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                    <span className="text-blue-500">{article.readTime}</span>
                  </div>
                  <h3 className={`font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-2 mb-3 ${index === 0 ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {article.title}
                  </h3>
                  <p className={`text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 flex-grow ${index === 0 ? 'text-lg' : ''}`}>
                    {article.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className={`group/btn p-0 h-auto text-blue-600 hover:text-blue-700 w-fit ${index === 0 ? 'text-lg' : ''}`}
                    onClick={() => setSelectedArticle(article)}
                  >
                    Read More
                    <ArrowRight className={`ml-2 group-hover/btn:translate-x-1 transition-transform ${index === 0 ? 'w-5 h-5' : 'w-4 h-4'}`} />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          {visibleItems < news.length && (
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 transition-transform duration-300 hover:scale-105"
              onClick={() => setVisibleItems(prev => prev + 5)}
            >
              View More News
            </Button>
          )}
        </motion.div>
      </div>

      <Dialog open={!!selectedArticle} onClose={() => setSelectedArticle(null)}>
        {selectedArticle && (
          <div className="p-6 sm:p-10">
            <div className="flex flex-col gap-6">
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
                    {selectedArticle.category}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedArticle.title}
                </h3>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                  {formatDate(selectedArticle.date)}
                  <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                  <span className="text-blue-500">{selectedArticle.readTime}</span>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {selectedArticle.excerpt}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
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
