import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const NewsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const newsRef = useRef<HTMLDivElement>(null);

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

        // News cards animation with stagger
        if (newsRef.current?.children) {
          Array.from(newsRef.current.children).forEach((card, index) => {
            gsap.from(card, {
              y: 50,
              opacity: 0,
              duration: 1.2,
              delay: 0.3 * index,
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 2
              }
            });

            // Add parallax effect to cards
            gsap.to(card, {
              y: -20,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
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
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-slate-900"
      data-scroll
      data-scroll-speed="1"
      data-scroll-section
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Newspaper className="w-4 h-4 mr-2" />
            Latest News
          </motion.div>
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Industry Updates & News
          </h2>
          <p 
            ref={descriptionRef}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Stay informed about the latest developments in international trade and logistics.
          </p>
        </div>

        <div 
          ref={newsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {news.map((article, index) => (
            <motion.div
              key={article.id}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              data-scroll
              data-scroll-speed={0.5 + (index * 0.1)}
              className="h-full"
            >
              <Card className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden h-full flex flex-col ${index === 0 ? 'md:col-span-2 md:flex-row' : ''}`}>
                <div className={`${index === 0 ? 'md:w-1/2' : ''} relative overflow-hidden ${index === 0 ? 'md:h-auto' : 'h-48'}`}>
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
                <div className={`${index === 0 ? 'md:w-1/2' : ''} flex flex-col flex-grow p-6 ${index === 0 ? 'md:p-8' : ''}`}>
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
                  >
                    Read More
                    <ArrowRight className={`ml-2 group-hover/btn:translate-x-1 transition-transform ${index === 0 ? 'w-5 h-5' : 'w-4 h-4'}`} />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8">
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
