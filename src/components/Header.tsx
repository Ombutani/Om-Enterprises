import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, Globe, ArrowRight } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import AuthModal from './auth/AuthModal';
import UserProfile from './UserProfile';
import { Link, useLocation } from 'react-router-dom';
import Loader from './Loader';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const { user, loading } = useAuth();
  const location = useLocation();

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About us', path: '/about' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'products', label: 'Products', path: '/products' },
    { id: 'order', label: 'Book Order', path: '/order' },
    { id: 'contact', label: 'Contact us', path: '/contact' }
  ];

  const openAuthModal = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-lg">
        <div className="container mx-auto px-4 py-2 sm:py-3 md:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link to="/" className="flex-shrink-0">
                <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <div className="relative z-10">
                    <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
              </Link>
              <div className="flex-shrink-0">
                <Link to="/" className="block">
                  <h1 className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent whitespace-nowrap">
                    Om Enterprises
                  </h1>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 flex items-center whitespace-nowrap">
                    Global Trade Solutions
                    <ArrowRight className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 ml-1" />
                  </p>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`font-medium transition-all duration-200 relative text-sm lg:text-base ${
                    location.pathname === item.path
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
              <ThemeToggle />
              
              {loading ? (
                <Loader />
              ) : user ? (
                <UserProfile />
              ) : (
                <>
                  <Button 
                    variant="ghost"
                    onClick={() => openAuthModal('login')}
                    className="hidden md:flex text-sm lg:text-base px-3 sm:px-4 py-1.5 sm:py-2"
                  >
                    Sign In
                  </Button>
                  <Button 
                    onClick={() => openAuthModal('register')}
                    className="hidden md:flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-sm lg:text-base px-3 sm:px-4 py-1.5 sm:py-2"
                  >
                    Get Started
                  </Button>
                </>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-2 sm:mt-3">
              <div className="flex flex-col space-y-2 sm:space-y-3 py-2 sm:py-3">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-all duration-200 text-sm sm:text-base ${
                      location.pathname === item.path
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                {!user && (
                  <>
                    <Button 
                      variant="ghost"
                      onClick={() => {
                        openAuthModal('login');
                        setIsMenuOpen(false);
                      }}
                      className="w-full justify-center text-sm sm:text-base py-1.5 sm:py-2"
                    >
                      Sign In
                    </Button>
                    <Button 
                      onClick={() => {
                        openAuthModal('register');
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm sm:text-base py-1.5 sm:py-2"
                    >
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </nav>
          )}
        </div>
      </header>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
      />
    </>
  );
};

export default Header;
