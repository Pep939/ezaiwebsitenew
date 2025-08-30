import { ArrowRight, Play } from 'lucide-react';
import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-teal-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[60vh] sm:min-h-[80vh]">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <p className="text-teal-400 text-xs sm:text-sm font-semibold tracking-widest uppercase">
                ARTIFICIAL INTELLIGENCE CONSULTING
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Transform Your
                <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
                  Business Strategy
                </span>
                with AI
              </h1>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We help enterprises navigate the AI revolution with strategic consulting, 
              implementation roadmaps, and transformative solutions that deliver measurable ROI.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center lg:justify-start">
              <a href="https://cal.com/ezaisolutions/30min" target="_blank" rel="noopener noreferrer" className="group bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-gray-100 flex items-center justify-center gap-2 sm:gap-3">
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#approach" className="group border border-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:border-teal-400 hover:bg-teal-400/10 flex items-center justify-center gap-2 sm:gap-3">
                <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>See Our Approach</span>
              </a>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-400">Ready to explore AI opportunities for your business?</p>
            </div>
          </div>
          
          <div className="relative">
            {/* Complex geometric visualization */}
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Invisible orbit ring sized to image with two balls in opposite directions */}
              <div className="absolute z-20 w-[620px] h-[620px] rounded-full pointer-events-none">
                {/* Clockwise orbit */}
                <div className="absolute inset-0 orbit">
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-teal-400 rounded-full -translate-x-1/2 -translate-y-1"></div>
                </div>
                {/* Counter-clockwise orbit */}
                <div className="absolute inset-0 orbit-reverse">
                  <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full -translate-x-1/2 -translate-y-1"></div>
                </div>
              </div>
              
              {/* Inner elements with custom image */}
              <div className="relative z-10 w-[600px] h-[600px] bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full backdrop-blur-sm border border-gray-700 flex items-center justify-center overflow-hidden">
                <img 
                  src={heroImage} 
                  alt="AI Technology" 
                  className="w-[550px] h-[550px] object-cover rounded-full"
                />
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;