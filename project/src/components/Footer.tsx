import React from 'react';
import { Brain, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center text-black">
                <Brain className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold">
                EZ<span className="text-teal-400">AI</span> Solutions
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md mb-8">
              Empowering enterprises through strategic AI consulting, implementation guidance, 
              and transformative digital solutions that drive measurable business outcomes.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-400 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="text-sm font-bold">Li</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-teal-400 rounded-lg flex items-center justify-center transition-colors duration-300">
                <span className="text-sm font-bold">Tw</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-teal-400">Services</h3>
            <div className="space-y-4">
              <a href="#services" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                <span>AI Strategy Development</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#services" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                <span>Implementation & Integration</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#services" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                <span>Process Intelligence</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#services" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group">
                <span>Digital Transformation</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-teal-400">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-medium">Email</p>
                <a href="mailto:admin@ezaisolutions.com" className="hover:text-teal-400 transition-colors">
                  admin@ezaisolutions.com
                </a>
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <a href="tel:+18883924385" className="hover:text-teal-400 transition-colors">
                  +1 888-392-4385
                </a>
              </div>
              <div>
                <p className="font-medium">Support</p>
                <p>24/7 Available</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; 2025 EZ AI Solutions. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;