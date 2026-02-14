import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import Navigation from './Navigation';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="glass-nav sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="hidden md:flex items-center space-x-6">
            <span className="flex items-center">📞 Contact: 94483-09227 / 91413-09227 / 9945056219</span>
            <span className="flex items-center">📧 Email: contact@pcmctrust.org, gopal@pcmctrust.org</span>
          </div>
          <Link 
            to="/ways-to-help/donate" 
            className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-full transition-all duration-300 font-semibold text-sm"
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Donate Now</span>
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          {/* Logo & Title */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src={logo} 
              alt="PCMC Trust Logo" 
              className="w-14 h-14 rounded-lg object-cover shadow-sm"
            />
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">
                Parvathamma Channajamma
              </h1>
              <p className="text-xs md:text-sm text-gray-600">Memorial Charitable Trust</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <Navigation mobile onItemClick={() => setMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
