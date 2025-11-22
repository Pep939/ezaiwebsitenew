import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-900 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-12">

          {/* Property Management Card */}
          <div className="bg-black/40 border-2 border-teal-500/50 rounded-2xl p-8 hover:border-teal-500 transition-all hover:shadow-xl hover:shadow-teal-500/20">

            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                PROPERTY MANAGEMENT
              </h3>
            </div>

            {/* Setup Price */}
            <div className="mb-8">
              <div className="text-center mb-6">
                <p className="text-lg text-gray-400 mb-2">Setup</p>
                <p className="text-4xl sm:text-5xl font-bold text-white">$7,500</p>
              </div>
              <div className="border-t border-gray-700 pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">9 automation workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Custom to your properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Vendor coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">2-3 week implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Team training included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">30-day support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Monthly Price */}
            <div className="mb-8">
              <div className="text-center mb-6">
                <p className="text-lg text-gray-400 mb-2">Monthly</p>
                <p className="text-4xl sm:text-5xl font-bold text-white">$1,000</p>
              </div>
              <div className="border-t border-gray-700 pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Ongoing optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Monthly efficiency reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">New workflow additions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">No long-term contracts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ROI Summary */}
            <div className="bg-teal-500/10 border border-teal-500/30 rounded-xl p-6 mb-6">
              <div className="space-y-2 text-center">
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Year 1 Investment:</span> $19,500
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Typical ROI:</span> <span className="text-teal-400 font-bold">527%</span>
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Payback:</span> <span className="text-teal-400 font-bold">4.2 months</span>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://cal.com/ezaisolutions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-teal-500 text-white px-6 py-4 rounded-lg font-bold text-center transition-all hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30"
            >
              Book Demo
            </a>
          </div>

          {/* Insurance Agencies Card */}
          <div className="bg-black/40 border-2 border-blue-500/50 rounded-2xl p-8 hover:border-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20">

            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                INSURANCE AGENCIES
              </h3>
            </div>

            {/* Setup Price */}
            <div className="mb-8">
              <div className="text-center mb-6">
                <p className="text-lg text-gray-400 mb-2">Setup</p>
                <p className="text-4xl sm:text-5xl font-bold text-white">$6,500</p>
              </div>
              <div className="border-t border-gray-700 pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Renewal campaign system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">
                      AMS integration<br />
                      <span className="text-sm text-gray-500">(AMS360, Applied Epic)</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Coverage gap analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">2-3 week implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Team training included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">30-day support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Monthly Price */}
            <div className="mb-8">
              <div className="text-center mb-6">
                <p className="text-lg text-gray-400 mb-2">Monthly</p>
                <p className="text-4xl sm:text-5xl font-bold text-white">$750</p>
              </div>
              <div className="border-t border-gray-700 pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Campaign optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Monthly retention reports</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">New workflow additions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">No long-term contracts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ROI Summary */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-6">
              <div className="space-y-2 text-center">
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Year 1 Investment:</span> $15,500
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Typical ROI:</span> <span className="text-blue-400 font-bold">871%</span>
                </p>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">Payback:</span> <span className="text-blue-400 font-bold">1.2 months</span>
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="https://cal.com/ezaisolutions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-500 text-white px-6 py-4 rounded-lg font-bold text-center transition-all hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Book Demo
            </a>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl sm:text-2xl font-bold text-white mb-4">
            No Hidden Fees. No Long-Term Contracts. Cancel Anytime With 30 Days Notice.
          </p>
          <p className="text-lg sm:text-xl text-gray-400 italic">
            But you won't want to—you'll be saving 15-20 hours per week.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
