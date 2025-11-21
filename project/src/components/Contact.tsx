import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black text-white scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
              GET STARTED
            </p>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Ready to Save
              <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
                20+ Hours a Month?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Book a 15-minute call. We'll learn about your manual processes and give you 
              a fixed-price quote within 24 hours.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center text-black text-xl">
                  📞
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Directly</h4>
                  <a href="tel:+18312304955" className="text-gray-300 hover:text-teal-400 transition-colors">
                    (831) 230-4955
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center text-black text-xl">
                  ✉️
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:admin@ezaisolutions.com" className="text-gray-300 hover:text-teal-400 transition-colors">
                    admin@ezaisolutions.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center text-black text-xl">
                  📍
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Serving</h4>
                  <p className="text-gray-300">Monterey County, California</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Schedule Your Call</h3>
              <p className="text-gray-300">15 minutes. No obligation. Fixed-price quote within 24 hours.</p>
            </div>
            
            {/* Cal.com Embed */}
            <iframe 
              src="https://cal.com/ezaisolutions/30min"
              width="100%" 
              height="630"
              frameBorder="0"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;