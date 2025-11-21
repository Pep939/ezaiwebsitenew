import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black text-white relative overflow-hidden scroll-mt-28 md:scroll-mt-32 pt-24 md:pt-28">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-teal-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase">
                AI AUTOMATION FOR MONTEREY BUSINESSES
              </p>
              <h1 className="text-6xl xl:text-7xl font-bold leading-tight">
                Stop Spending 30 Hours
                <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
                  On Manual Work
                </span>
              </h1>
            </div>
            
            <p className="text-2xl text-gray-200 leading-relaxed">
              Custom AI automation & 24/7 receptionists for property managers, accounting firms, and service businesses in Monterey County. 
              One-time setup: $5,000-$10,000.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="https://cal.com/ezaisolutions/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-full font-semibold transition-all hover:bg-gray-100 text-center">
                See Pricing & Examples →
              </a>
              <a href="#services" className="border border-gray-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:border-teal-400 hover:bg-teal-400/10 text-center">
                See What We Build
              </a>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-400">Property managers, accountants, and service businesses in Monterey County</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              <img 
                src={heroImage} 
                alt="AI Automation - Precision workflows" 
                className="w-[600px] h-[600px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;