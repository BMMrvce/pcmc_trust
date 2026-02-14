import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About PCMC Trust</h3>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              Dedicated to serving humanity through healthcare, education, and social welfare programs. 
              Following the ideals of compassion and service to society.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-4 h-4 text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                <Youtube className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/activities" className="text-gray-400 hover:text-orange-500 transition-colors">Activities</Link></li>
              <li><Link to="/photo-gallery" className="text-gray-400 hover:text-orange-500 transition-colors">Photo Gallery</Link></li>
              <li><Link to="/ways-to-help" className="text-gray-400 hover:text-orange-500 transition-colors">Ways to Help</Link></li>
              <li><Link to="/press-events" className="text-gray-400 hover:text-orange-500 transition-colors">Press & Events</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/activities/medical-programmes" className="text-gray-400 hover:text-orange-500 transition-colors">Medical Programmes</Link></li>
              <li><Link to="/activities/eye-camps" className="text-gray-400 hover:text-orange-500 transition-colors">Eye Camps</Link></li>
              <li><Link to="/activities/blood-camps" className="text-gray-400 hover:text-orange-500 transition-colors">Blood Camps</Link></li>
              <li><Link to="/activities/educational-programmes" className="text-gray-400 hover:text-orange-500 transition-colors">Educational Programmes</Link></li>
              <li><Link to="/activities/social-programmes" className="text-gray-400 hover:text-orange-500 transition-colors">Social Programmes</Link></li>
              <li><Link to="/activities/awareness-programmes" className="text-gray-400 hover:text-orange-500 transition-colors">Awareness Programmes</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">Bangalore, Karnataka, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">94483-09227 / 91413-09227 / 9945056219</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-400">contact@pcmctrust.org, gopal@pcmctrust.org</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <Link 
                to="/ways-to-help/donate" 
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full transition-all duration-300 font-semibold text-sm shadow-md"
              >
                <Heart className="w-4 h-4" />
                <span>Support Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Parvathamma Channajamma Memorial Charitable Trust. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
