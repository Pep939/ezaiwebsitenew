import heroImage from '../assets/hero-image.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black text-white relative overflow-hidden scroll-mt-20 md:scroll-mt-24 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400 rounded-full opacity-40"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-teal-300 rounded-full opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          <div className="space-y-6 sm:space-y-8">
            {/* Eyebrow */}
            <div className="space-y-3 sm:space-y-4 text-center lg:text-left">
              <p className="text-teal-400 text-sm sm:text-base font-semibold tracking-wide">
                Monterey County, California
              </p>

              {/* Main Headline - Mobile Optimized */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Save 15-20 Hours Per Week
                <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text mt-2">
                  With AI Automation
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-300 font-medium leading-relaxed text-center lg:text-left">
              Built for Property Managers & Insurance Agencies in Monterey County
            </p>

            {/* Body Text - Larger minimum size for readability */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-center lg:text-left">
              We automate the repetitive work eating up your day—maintenance coordination, tenant screening, rent collection, renewal campaigns. So you can grow without hiring more people.
            </p>

            {/* Dual CTA Buttons - Mobile-First with 44px+ tap targets */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#property-managers"
                className="bg-teal-500 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-lg font-semibold text-base sm:text-lg transition-all hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30 text-center min-h-[56px] flex items-center justify-center"
              >
                Property Managers: See How
              </a>
              <a
                href="#insurance-agencies"
                className="bg-blue-500 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-lg font-semibold text-base sm:text-lg transition-all hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/30 text-center min-h-[56px] flex items-center justify-center"
              >
                Insurance Agencies: See How
              </a>
            </div>
          </div>

          {/* Hero Image - Responsive sizing */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px] xl:h-[600px] flex items-center justify-center">
              <img
                src={heroImage}
                alt="AI automation for property managers and insurance agencies"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;