import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { Mail, Phone, Contact, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const contactCardsRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      // Title animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1
        }
      });

      // Description animation
      gsap.from(descriptionRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descriptionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1
        }
      });

      // Contact cards animation
      if (contactCardsRef.current?.children) {
        Array.from(contactCardsRef.current.children).forEach((card, index) => {
          gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: 0.2 * index,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 1
            }
          });
        });
      }

      // Form animation
      gsap.from(formRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1
        }
      });
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      details: "ombutani22@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      details: "+91 9316736345",
      description: "24/7 customer support"
    },
    {
      icon: <Contact className="w-6 h-6" />,
      title: "Visit Us",
      details: "Mota varachha, Surat",
      description: "Surat, Gujarat"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="py-8 xs:py-10 sm:py-14 md:py-20 lg:py-24 bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-slate-900"
      data-scroll
      data-scroll-speed="1"
      data-scroll-section
    >
      <div className="container mx-auto px-2 xs:px-3 sm:px-6 lg:px-8">
        <div 
          data-aos="fade-up"
          className="inline-flex items-center mt-14 px-3 xs:px-4 sm:px-6 py-1.5 xs:py-2 sm:py-3 rounded-full bg-blue-500/10 text-blue-400 mb-3 xs:mb-4 sm:mb-6 text-xs xs:text-sm sm:text-base"
        >
          <Package className="w-4 h-4 xs:w-4.5 xs:h-4.5 sm:w-5 sm:h-5 mr-2" />
          <span className="font-medium">Contact us</span>
        </div>

        <div className="text-center mb-6 xs:mb-8 sm:mb-12 md:mb-16">
          <h2 
            ref={titleRef}
            className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 xs:mb-4 sm:mb-6"
          >
            Get In Touch
          </h2>
          <p 
            ref={descriptionRef}
            className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2 xs:px-4 sm:px-6"
          >
            Ready to expand your business globally? Contact our experts for personalized 
            import-export solutions tailored to your needs.
          </p>
        </div>

        <div 
          ref={contactCardsRef}
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 md:gap-8 mb-6 xs:mb-8 sm:mb-12 md:mb-16"
        >
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              data-scroll
              data-scroll-speed={0.5 + (index * 0.1)}
            >
              <Card className="text-center p-3 xs:p-4 sm:p-6 hover:shadow-lg transition-all duration-500 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-0">
                <CardContent className="p-0">
                  <motion.div 
                    className="text-blue-600 dark:text-blue-400 mb-2 xs:mb-3 sm:mb-4 flex justify-center"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                  >
                    {info.icon}
                  </motion.div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-1.5 xs:mb-2">
                    {info.title}
                  </h3>
                  <p className="text-sm xs:text-base sm:text-lg font-medium text-blue-600 dark:text-blue-400 mb-0.5 xs:mb-1">
                    {info.details}
                  </p>
                  <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto px-2 xs:px-3 sm:px-6">
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            data-scroll
            data-scroll-speed="0.3"
          >
            <Card className="p-3 xs:p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 border-0 shadow-xl">
              <CardHeader className="text-center pb-3 xs:pb-4 sm:pb-6 md:pb-8">
                <CardTitle className="text-xl xs:text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Send Us a Message
                </CardTitle>
                <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1.5 xs:mt-2">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
              </CardHeader>
              <CardContent>
                <form 
                  ref={formRef}
                  onSubmit={handleSubmit} 
                  className="space-y-3 xs:space-y-4 sm:space-y-6"
                >
                  <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <label htmlFor="name" className="block text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 xs:mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-xs xs:text-sm sm:text-base"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 xs:mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-xs xs:text-sm sm:text-base"
                      />
                    </motion.div>
                  </div>

                  <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4 sm:gap-6">
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <label htmlFor="phone" className="block text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 xs:mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-xs xs:text-sm sm:text-base"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <label htmlFor="company" className="block text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 xs:mb-2">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                        className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-xs xs:text-sm sm:text-base"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <label htmlFor="service" className="block text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 xs:mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-1.5 xs:p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-all duration-300 text-xs xs:text-sm sm:text-base"
                    >
                      <option value="">Select a service</option>
                      <option value="import">Import Services</option>
                      <option value="export">Export Services</option>
                      <option value="logistics">Logistics Management</option>
                      <option value="compliance">Trade Compliance</option>
                      <option value="consulting">Consulting Services</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <label htmlFor="message" className="block text-xs xs:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 xs:mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your import/export requirements..."
                      rows={4}
                      className="w-full transition-all duration-300 focus:ring-2 focus:ring-blue-500 text-xs xs:text-sm sm:text-base"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold py-2.5 xs:py-3 sm:py-4 text-sm xs:text-base sm:text-lg transition-all duration-500"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
