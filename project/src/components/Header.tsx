import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/95 backdrop-blur-xl py-4' : 'bg-transparent py-6'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="EZ AI Solutions" className="h-10 w-auto" />
        </div>
        
        <ul className="hidden lg:flex items-center gap-12 text-sm font-medium">
          <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide">HOME</a></li>
          <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide">CONSULTING</a></li>
          <li><a href="#approach" className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide">APPROACH</a></li>
          <li><a href="#insights" className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide">SERVICES</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide">CONTACT</a></li>
        </ul>
        
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+18883924385" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium transition-colors duration-300">
            <Phone className="w-4 h-4" />
            <span className="text-sm">+1 888-392-4385</span>
          </a>
          <a href="#contact" className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-gray-100 hover:scale-105">
            Book a Demo
          </a>
        </div>

        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800">
          <div className="px-6 py-8 space-y-6">
            <a href="#home" className="block text-gray-300 hover:text-white transition-colors">HOME</a>
            <a href="#services" className="block text-gray-300 hover:text-white transition-colors">CONSULTING</a>
            <a href="#approach" className="block text-gray-300 hover:text-white transition-colors">APPROACH</a>
            <a href="#insights" className="block text-gray-300 hover:text-white transition-colors">SERVICES</a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">CONTACT</a>
            <div className="pt-4 border-t border-gray-800">
              <a href="tel:+18883924385" className="flex items-center gap-2 text-teal-400 mb-4">
                <Phone className="w-4 h-4" />
                <span>+1 888-392-4385</span>
              </a>
              <a href="#contact" className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm">
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;