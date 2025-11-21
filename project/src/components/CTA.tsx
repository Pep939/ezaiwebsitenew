import React from 'react';

const CTA = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-6xl font-bold mb-8 leading-tight">
          Stop Wasting 20+ Hours
          <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
            Every Month
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Setup: $5,000-$10,000 one-time. Ongoing support & improvements: $500-$1,000/month (hosting, AI costs, maintenance).
          Built specifically for your business in Monterey County.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-3xl font-bold mb-2">$5K-$10K</p>
            <p className="text-gray-400 text-sm">One-time setup</p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-3xl font-bold mb-2">30 Days</p>
            <p className="text-gray-400 text-sm">From call to live</p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-3xl font-bold mb-2">4-6 Months</p>
            <p className="text-gray-400 text-sm">Typical ROI timeline</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a href="https://cal.com/ezaisolutions/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-gray-100 hover:scale-105">
            Schedule a Call
          </a>
          <a href="tel:+18312304955" className="border-2 border-gray-600 text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:border-teal-400">
            (831) 230-4955
          </a>
        </div>
        
        <div className="pt-12 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            Serving property managers, accounting firms, vacation rentals, and service businesses in Monterey County
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;