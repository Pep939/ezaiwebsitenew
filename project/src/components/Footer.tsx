import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center text-black font-bold">
                AI
              </div>
              <div className="text-2xl font-bold">
                EZ<span className="text-teal-400">AI</span> Solutions
              </div>
            </div>
            <p className="text-gray-300 mb-8">
              Custom AI automation & 24/7 receptionists for Monterey County businesses. Stop wasting time on manual work.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 text-teal-400">What We Build</h3>
            <div className="space-y-3 text-gray-300">
              <p>Property Management Automation</p>
              <p>Vacation Rental Compliance</p>
              <p>Accounting Firm Automation</p>
              <p>Service Business Operations</p>
              <p>AI Receptionist & Phone Automation</p>
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
                <a href="tel:+18312304955" className="hover:text-teal-400 transition-colors">
                  (831) 230-4955
                </a>
              </div>
              <div>
                <p className="font-medium">Service Area</p>
                <p>Monterey County, California</p>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;