import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-teal-400/10 border border-teal-400/20 rounded-full px-6 py-3 mb-8">
          <Sparkles className="w-5 h-5 text-teal-400" />
          <span className="text-teal-400 font-semibold text-sm tracking-wide">READY TO TRANSFORM?</span>
        </div>
        
        <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
          Lead the AI Revolution
          <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
            in Your Industry
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto">
          Join visionary leaders who are already leveraging AI to create unprecedented 
          competitive advantages and drive exponential growth.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="https://cal.com/ezaisolutions/30min" target="_blank" rel="noopener noreferrer" className="group bg-white text-black px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 flex items-center justify-center gap-3">
            <span>Start Your AI Journey</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="tel:+18883924385" className="group border-2 border-gray-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:border-teal-400 hover:bg-teal-400/10 flex items-center justify-center gap-3">
            <span>Call Now: +1 888-392-4385</span>
          </a>
        </div>
        
        <div className="mt-16 pt-16 border-t border-gray-800">
          <p className="text-sm text-gray-400 text-center">
            Let's discuss how AI can transform your specific business challenges
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;