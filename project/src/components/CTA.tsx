import { Check, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section id="cta" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-teal-900/20 via-gray-900 to-blue-900/20 relative overflow-hidden">
      {/* Background accent elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Ready to Save 15-20 Hours Per Week?
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Book a 10-minute demo. We'll show you exactly how our automation works with <span className="text-teal-400 font-semibold">YOUR</span> business.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16 max-w-6xl mx-auto">

          {/* LEFT SIDE - What Happens in the Demo */}
          <div className="bg-black/40 border border-gray-700 rounded-2xl p-6 sm:p-8 lg:p-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8">
              What happens in the demo:
            </h3>

            <ul className="space-y-4 sm:space-y-5 mb-8">
              <li className="flex items-start gap-3 sm:gap-4">
                <Check className="w-6 h-6 sm:w-7 sm:h-7 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg lg:text-xl text-gray-200">
                  We walk through your current workflow (maintenance/renewals)
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <Check className="w-6 h-6 sm:w-7 sm:h-7 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg lg:text-xl text-gray-200">
                  Show you the automation in action with your actual data
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <Check className="w-6 h-6 sm:w-7 sm:h-7 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg lg:text-xl text-gray-200">
                  Calculate your specific time and money savings
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <Check className="w-6 h-6 sm:w-7 sm:h-7 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg lg:text-xl text-gray-200">
                  Answer all your questions
                </span>
              </li>
              <li className="flex items-start gap-3 sm:gap-4">
                <Check className="w-6 h-6 sm:w-7 sm:h-7 text-teal-400 flex-shrink-0 mt-0.5" />
                <span className="text-base sm:text-lg lg:text-xl text-gray-200">
                  No pressure, no sales pitch
                </span>
              </li>
            </ul>

            <div className="border-t border-gray-700 pt-6">
              <p className="text-xl sm:text-2xl font-bold text-white text-center">
                Total time: <span className="text-teal-400">10 minutes</span>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Booking Widget */}
          <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border-2 border-teal-500/50 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col items-center justify-center">

            {/* Primary CTA Button */}
            <a
              href="https://cal.com/ezaisolutions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white px-8 py-6 rounded-xl font-bold text-xl sm:text-2xl text-center transition-all hover:from-teal-400 hover:to-teal-500 hover:shadow-2xl hover:shadow-teal-500/40 hover:scale-105 mb-8"
            >
              Book Demo Now
            </a>

            {/* Divider */}
            <div className="w-full flex items-center gap-4 mb-8">
              <div className="flex-1 h-px bg-gray-600"></div>
              <span className="text-gray-400 font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-600"></div>
            </div>

            {/* Phone CTA */}
            <a
              href="tel:+18312304955"
              className="w-full bg-black/40 border-2 border-blue-500 text-white px-8 py-6 rounded-xl font-bold text-xl sm:text-2xl text-center transition-all hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call Now: (831) 230-4955
            </a>

            {/* Trust Indicators */}
            <div className="mt-8 space-y-2 text-center">
              <p className="text-sm text-gray-400">✓ No credit card required</p>
              <p className="text-sm text-gray-400">✓ No commitment</p>
              <p className="text-sm text-gray-400">✓ 10-minute call</p>
            </div>
          </div>

        </div>

        {/* Bottom ROI Statement */}
        <div className="text-center max-w-4xl mx-auto bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-teal-500/10 border border-teal-500/30 rounded-2xl p-6 sm:p-8">
          <div className="space-y-3">
            <p className="text-lg sm:text-xl lg:text-2xl text-white">
              <span className="font-bold">Most property managers see ROI within 4 months.</span>
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-white">
              <span className="font-bold">Most insurance agencies see ROI within 1 month.</span>
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text font-bold mt-4">
              Our average client saves 20+ hours per week.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;
