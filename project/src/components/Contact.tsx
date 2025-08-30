import { Mail, Phone, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
              GET IN TOUCH
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Ready to Discuss
              <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
                Your AI Strategy?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Let's explore how strategic AI implementation can transform your operations 
              and unlock unprecedented business potential.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center text-black">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Direct Line</h4>
                  <a href="tel:+18883924385" className="text-gray-300 hover:text-teal-400 transition-colors">
                    +1 888-392-4385
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center text-black">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:joe@EZAISolutions.com" className="text-gray-300 hover:text-teal-400 transition-colors">
                    joe@EZAISolutions.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center text-black">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Availability</h4>
                  <p className="text-gray-300">24/7 Support Available</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Schedule Your Consultation</h3>
              <p className="text-gray-300">Book a free 30-minute strategy session to discuss your AI transformation</p>
            </div>
            
            {/* Calendly Embed */}
            <div className="calendly-inline-widget" 
                 data-url="https://calendly.com/joe-ezaisolutions/30min" 
                 style={{minWidth: '320px', height: '630px'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;