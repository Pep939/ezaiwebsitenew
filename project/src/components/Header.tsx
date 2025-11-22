import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

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
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-1">
        {/* Logo */}
        <a href="#home" className="flex items-center -my-3">
          <img src={logo} alt="EZAI Solutions" className="h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 w-auto object-contain" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <li>
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">
              Home
            </a>
          </li>

          {/* Who We Serve Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-1">
              Who We Serve
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl border border-gray-800 rounded-lg shadow-xl py-2">
                <a
                  href="#property-managers"
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-teal-500/10 transition-colors"
                >
                  Property Managers
                </a>
                <a
                  href="#insurance-agencies"
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-blue-500/10 transition-colors"
                >
                  Insurance Agencies
                </a>
              </div>
            )}
          </li>

          <li>
            <a href="#approach" className="text-gray-300 hover:text-white transition-colors duration-300">
              How It Works
            </a>
          </li>

          <li>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors duration-300">
              Pricing
            </a>
          </li>

          <li>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Book Demo CTA - Desktop */}
        <div className="hidden lg:block">
          <a
            href="https://cal.com/ezaisolutions/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30"
          >
            Book Demo
          </a>
        </div>

        {/* Mobile Menu Toggle & CTA */}
        <div className="lg:hidden flex items-center gap-2">
          <a
            href="https://cal.com/ezaisolutions/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-500 text-white px-4 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:bg-teal-400 min-h-[44px] flex items-center"
          >
            Book Demo
          </a>
          <button
            className="text-white p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800">
          <div className="px-6 py-6 space-y-2">
            <a
              href="#home"
              className="block text-gray-300 hover:text-white transition-colors py-3 text-base min-h-[44px] flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>

            {/* Mobile Dropdown */}
            <div>
              <button
                className="w-full text-left text-gray-300 hover:text-white transition-colors py-3 text-base min-h-[44px] flex items-center justify-between"
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              >
                Who We Serve
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileDropdownOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <a
                    href="#property-managers"
                    className="block text-gray-400 hover:text-teal-400 transition-colors py-3 text-base min-h-[44px] flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Property Managers
                  </a>
                  <a
                    href="#insurance-agencies"
                    className="block text-gray-400 hover:text-blue-400 transition-colors py-3 text-base min-h-[44px] flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Insurance Agencies
                  </a>
                </div>
              )}
            </div>

            <a
              href="#approach"
              className="block text-gray-300 hover:text-white transition-colors py-3 text-base min-h-[44px] flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>

            <a
              href="#pricing"
              className="block text-gray-300 hover:text-white transition-colors py-3 text-base min-h-[44px] flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>

            <a
              href="#about"
              className="block text-gray-300 hover:text-white transition-colors py-3 text-base min-h-[44px] flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#contact"
              className="block text-gray-300 hover:text-white transition-colors py-3 text-base min-h-[44px] flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;