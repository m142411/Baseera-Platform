import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigationItems } from '../constants/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-green-900/90 backdrop-blur-sm text-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">
              بصيرة
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 space-x-reverse">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                className="text-white hover:text-yellow-400 transition-colors px-3 py-2 text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Link
              to="/login"
              className="text-white hover:text-yellow-400 transition-colors px-3 py-2 text-sm font-medium"
            >
              تسجيل الدخول
            </Link>
            <Link
              to="/signup"
              className="bg-yellow-500 hover:bg-yellow-600 text-green-900 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              إنشاء حساب
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-yellow-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-green-900/95 rounded-lg mt-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="border-t border-green-700 pt-4">
                <Link
                  to="/login"
                  className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  تسجيل الدخول
                </Link>
                <Link
                  to="/signup"
                  className="bg-yellow-500 hover:bg-yellow-600 text-green-900 mx-3 mt-2 px-4 py-2 rounded-md text-base font-medium inline-block transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  إنشاء حساب
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;