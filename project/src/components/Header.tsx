import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
      isScrolled ? 'bg-black/95 backdrop-blur-xl' : 'bg-transparent'
    } pt-0 pb-4`}>
      <nav className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center">
        <a href="#home" className="flex items-center self-center mr-20 md:mr-32 -mt-8">
          <img src={logo} alt="EZAI Solutions" className="h-64 md:h-80 w-auto object-contain" />
        </a>
        
        <ul className="hidden lg:flex items-center gap-12 text-sm font-medium">
          <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide">HOME</a></li>
          <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide">WHAT WE BUILD</a></li>
          <li><a href="#approach" className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide">HOW IT WORKS</a></li>
          <li><a href="#insights" className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide">RESULTS</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 tracking-wide">CONTACT</a></li>
        </ul>
        
        <div className="hidden lg:flex items-center gap-8 ml-8">
          <a href="tel:+18312304955" className="text-gray-300 hover:text-white transition-colors duration-300 text-sm font-medium tracking-wide whitespace-nowrap">
            (831) 230-4955
          </a>
          <a href="https://cal.com/ezaisolutions/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-gray-100 hover:scale-105">
            Schedule a Call
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
            <a href="#services" className="block text-gray-300 hover:text-white transition-colors">WHAT WE BUILD</a>
            <a href="#approach" className="block text-gray-300 hover:text-white transition-colors">HOW IT WORKS</a>
            <a href="#insights" className="block text-gray-300 hover:text-white transition-colors">RESULTS</a>
            <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">CONTACT</a>
            <div className="pt-4 border-t border-gray-800">
              <a href="tel:+18312304955" className="block text-gray-300 hover:text-white transition-colors mb-4">
                (831) 230-4955
              </a>
              <a href="https://cal.com/ezaisolutions/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;