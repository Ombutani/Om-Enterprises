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
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/">
                <div className="relative w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                  <div className="relative z-10">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                </div>
              </Link>
              <div>
                <Link to="/">
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                    Om Enterprises
                  </h1>
                  <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center">
                    Global Trade Solutions
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </p>
                </Link>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`font-medium transition-all duration-200 relative ${
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

            <div className="flex items-center space-x-4">
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
                    className="hidden md:flex"
                  >
                    Sign In
                  </Button>
                  <Button 
                    onClick={() => openAuthModal('register')}
                    className="hidden md:flex bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Get Started
                  </Button>
                </>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav
              className="md:hidden mt-4"
            >
              <div className="flex flex-col space-y-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`font-medium transition-all duration-200 ${
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
                      className="w-full justify-center"
                    >
                      Sign In
                    </Button>
                    <Button 
                      onClick={() => {
                        openAuthModal('register');
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
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
