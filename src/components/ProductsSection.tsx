import React, { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Package, Truck, Factory, Zap, Globe, Shield } from 'lucide-react';

// Full Product Page component
const ProductPage = ({ product, onBack }: { product: any; onBack: () => void }) => {
  const IconComponent = product.icon;
  return (
    <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 sm:p-10 my-10 animate-fadeIn">
      <Button
        onClick={onBack}
        className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition-transform duration-300 hover:scale-105 text-base py-2.5"
      >
        ← Back to Products
      </Button>
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">{product.name}</h1>
          <div className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
            {product.price}
          </div>
          <div className="text-gray-700 dark:text-gray-200 text-base sm:text-lg mb-4">
            {product.description}
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
          {/* You can add more detailed product info here */}
          <div className="mt-6">
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-700 transition-transform duration-300 hover:scale-105 text-base py-2.5"
              onClick={onBack}
            >
              Back to Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const productsPerPage = 6;
  const sectionRef = useRef<HTMLElement>(null);

  // ... products array and categories array remain unchanged ...

  const products = [
    // ... (same as before, omitted for brevity)
    // (keep the full products array here)
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
    // ... (rest of the products)
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

  // Calculate products to display based on current page
  const displayedProducts = filteredProducts.slice(0, currentPage * productsPerPage);

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  // Check if there are more products to load
  const hasMoreProducts = displayedProducts.length < filteredProducts.length;

  // When a product is selected, show the full product page
  const handleRequestQuote = (product: any) => {
    setSelectedProduct(product);
    // No dialog, just show full page
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!selectedProduct ? (
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
          </>
        ) : (
          <ProductPage product={selectedProduct} onBack={handleBackToProducts} />
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
