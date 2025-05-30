import React, { useState, useRef } from 'react';
import { Card, CardDescription, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Truck, Factory, Zap, Globe, Shield, X, Star } from 'lucide-react';

// Example reviews for demonstration
const exampleReviews = [
  {
    name: "Alice Johnson",
    rating: 5,
    comment: "Outstanding quality and fast delivery. Highly recommended!",
  },
  {
    name: "Michael Smith",
    rating: 4,
    comment: "Product works as described. Customer support was helpful.",
  },
  {
    name: "Priya Patel",
    rating: 5,
    comment: "Exceeded my expectations. Will order again.",
  },
];

// Dialog component (simple, accessible, no external dependency)
const Dialog: React.FC<{
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}> = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      aria-modal="true"
      role="dialog"
      tabIndex={-1}
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full mx-4 p-6 sm:p-10 animate-fadeIn"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 dark:hover:text-white transition"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

// Product Quote Dialog Content
const ProductQuoteDialog: React.FC<{
  product: any;
  onClose: () => void;
}> = ({ product, onClose }) => {
  const IconComponent = product.icon;

  // For demonstration, assign reviews randomly to each product
  // In a real app, reviews would be fetched per product
  const reviews = exampleReviews.slice(0, Math.floor(Math.random() * 3) + 1);

  // Additional product description (could be dynamic)
  const extraDescription =
    "Our products are manufactured with the highest standards, ensuring reliability and performance. Each item undergoes rigorous quality checks and is backed by our dedicated support team. Experience innovation and excellence with every purchase.";

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-shrink-0 w-full md:w-1/2">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-3 left-3">
              <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm shadow-md">
                {product.category}
              </Badge>
            </div>
            {IconComponent && (
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-10">
                <div className="w-14 h-14 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center border-4 border-blue-500/70 dark:border-blue-700/70">
                  <IconComponent className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h1>
          <div className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
            {product.price}
          </div>
          <div className="text-gray-700 dark:text-gray-200 text-base sm:text-lg mb-2">
            {product.description}
          </div>
          {/* Extra product description */}
          <div className="text-gray-600 dark:text-gray-400 text-sm sm:text-base mb-4">
            {extraDescription}
          </div>
          <div className="mb-4">
            <div className="font-semibold text-gray-800 dark:text-gray-100 mb-1">Key Features:</div>
            <div className="flex flex-wrap gap-2">
              {product.features.map((feature: string, idx: number) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-700"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
          {/* Product Reviews */}
          <div className="mb-6">
            <div className="font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              Customer Reviews
            </div>
            {reviews.length === 0 ? (
              <div className="text-gray-500 dark:text-gray-400 text-sm">No reviews yet.</div>
            ) : (
              <div className="space-y-3">
                {reviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-100 dark:border-blue-800"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{review.name}</span>
                      <span className="flex items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
                            fill={i < review.rating ? '#facc15' : 'none'}
                          />
                        ))}
                      </span>
                    </div>
                    <div className="text-gray-700 dark:text-gray-300 text-sm">{review.comment}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Example quote form (can be replaced with real form) */}
          <form className="space-y-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Your Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                Message
              </label>
              <textarea
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell us about your requirements"
                rows={3}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition-transform duration-300 hover:scale-105 text-base py-2.5"
                onClick={e => {
                  e.preventDefault();
                  onClose();
                }}
              >
                Submit Quote Request
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const categories = [
  "All",
  "Manufacturing",
  "Technology",
  "Automotive",
  "Healthcare",
  "Agriculture",
  "Chemicals"
];

// Generate 30 products with different categories, icons, and images
const productTemplates = [
  {
    name: "Industrial CNC Machine",
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?w=400&h=300&fit=crop",
    description: "High-precision CNC machining center for industrial manufacturing.",
    features: ["ISO Certified", "Global Warranty", "24/7 Support"],
    price: "Custom Quote",
    icon: Factory
  },
  {
    name: "Smart Logistics Tracker",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    description: "Real-time tracking device for logistics and supply chain.",
    features: ["GPS Enabled", "Cloud Sync", "Mobile App"],
    price: "$199",
    icon: Truck
  },
  {
    name: "Electric Delivery Van",
    category: "Automotive",
    image: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop",
    description: "Eco-friendly electric van for urban deliveries.",
    features: ["Zero Emissions", "Fast Charging", "Long Range"],
    price: "$29,999",
    icon: Zap
  },
  {
    name: "Medical Diagnostic Kit",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1519494080410-f9aa8f52f274?w=400&h=300&fit=crop",
    description: "Comprehensive kit for rapid medical diagnostics.",
    features: ["Accurate", "Portable", "Easy to Use"],
    price: "$499",
    icon: Shield
  },
  {
    name: "Precision Seeder",
    category: "Agriculture",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop",
    description: "Automated seeder for efficient crop planting.",
    features: ["High Precision", "Low Maintenance", "Energy Efficient"],
    price: "$2,500",
    icon: Factory
  },
  {
    name: "Smart Catalysts",
    category: "Chemicals",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?w=400&h=300&fit=crop",
    description: "Advanced catalytic solutions for industry.",
    features: ["High Efficiency", "Long Life", "Custom Formulation"],
    price: "Per Kg",
    icon: Globe
  }
];

// Create 30 products by cycling through the templates and varying names/images
const products = Array.from({ length: 30 }, (_, i) => {
  const template = productTemplates[i % productTemplates.length];
  return {
    id: i + 1,
    name: `${template.name} ${i + 1}`,
    category: template.category,
    image: template.image,
    description: template.description,
    features: template.features,
    price: template.price,
    icon: template.icon
  };
});

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [quoteProduct, setQuoteProduct] = useState<any | null>(null);
  const productsPerPage = 6;
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(product => product.category === activeCategory);

  // Calculate products to display based on current page
  const displayedProducts = filteredProducts.slice(0, currentPage * productsPerPage);

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  // Check if there are more products to load
  const hasMoreProducts = displayedProducts.length < filteredProducts.length;

  // When a product is selected, show the quote dialog
  const handleRequestQuote = (product: any) => {
    setQuoteProduct(product);
  };

  const handleCloseDialog = () => {
    setQuoteProduct(null);
  };

  // Extra product description for the grid cards
  const gridExtraDescription =
    "Engineered for reliability and performance. Trusted by professionals worldwide.";

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <>
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
                <button
                  type="button"
                  className={`${
                    category === activeCategory
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
                  } rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium`}
                  onClick={() => {
                    setActiveCategory(category);
                    setCurrentPage(1);
                  }}
                >
                  {category}
                </button>
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
                      <CardDescription className="text-gray-600 dark:text-gray-300 text-center md:text-left line-clamp-2 mb-1 text-sm sm:text-base">
                        {product.description}
                      </CardDescription>
                      {/* Extra description */}
                      <div className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm text-center md:text-left mb-2">
                        {gridExtraDescription}
                      </div>
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
                        <Button
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition-transform duration-300 hover:scale-105 text-base py-2.5"
                          onClick={() => handleRequestQuote(product)}
                        >
                          Request Quote
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Load More Button */}
          {hasMoreProducts && (
            <div className="mt-10 text-center" data-aos="fade-up">
              <Button
                onClick={handleLoadMore}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105"
              >
                View More Products
              </Button>
            </div>
          )}

          {/* Quote Dialog */}
          <Dialog open={!!quoteProduct} onClose={handleCloseDialog}>
            {quoteProduct && (
              <ProductQuoteDialog product={quoteProduct} onClose={handleCloseDialog} />
            )}
          </Dialog>
        </>
      </div>
    </section>
  );
};

export default ProductsSection;
