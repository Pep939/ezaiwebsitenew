import { Building2, Shield, Check } from 'lucide-react';

const WhoWeServe = () => {
  return (
    <section id="who-we-serve" className="bg-gray-900 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Who We Serve
          </h2>
          <p className="text-lg sm:text-xl text-gray-400">
            Two industries. Proven workflows. Real results.
          </p>
        </div>

        {/* Two Column Comparison */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

          {/* LEFT COLUMN - PROPERTY MANAGERS */}
          <div className="bg-black/40 border border-gray-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl hover:border-teal-500/50 transition-all">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-teal-500/10 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400" />
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                PROPERTY MANAGERS
              </h3>
              <p className="text-gray-400 text-base sm:text-lg">
                30-100 Units in Monterey County
              </p>
            </div>

            {/* Your Problem */}
            <div className="mb-6">
              <h4 className="text-teal-400 font-semibold text-lg mb-3">YOUR PROBLEM:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>15 hrs/week on maintenance coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Tenant screening takes forever</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Chasing clients for documents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Owner reports eat up evenings</span>
                </li>
              </ul>
            </div>

            {/* We Automate */}
            <div className="mb-6">
              <h4 className="text-teal-400 font-semibold text-lg mb-3">WE AUTOMATE:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Maintenance dispatch & follow-ups</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Tenant screening workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Rent collection reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Owner reporting (auto-generated)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>5 additional workflows</span>
                </li>
              </ul>
            </div>

            {/* Result */}
            <div className="mb-8 bg-teal-500/5 border border-teal-500/20 rounded-lg p-4">
              <h4 className="text-teal-400 font-semibold text-lg mb-3">RESULT:</h4>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Save 20+ hours/week</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Manage +15 units without new hires</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>$123,000 annual value</span>
                </li>
              </ul>
            </div>

            {/* Pricing */}
            <div className="mb-6 text-center border-t border-gray-800 pt-6">
              <p className="text-gray-300 text-lg mb-1">
                <span className="text-white font-bold">Setup: $7,500</span> | <span className="text-white font-bold">Monthly: $1,000</span>
              </p>
              <p className="text-gray-500 text-sm">2-3 week implementation</p>
            </div>

            {/* CTA Button */}
            <a
              href="#property-management-details"
              className="block w-full bg-teal-500 text-white px-6 py-4 rounded-lg font-semibold text-center transition-all hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30"
            >
              Learn More
            </a>
          </div>

          {/* RIGHT COLUMN - INSURANCE AGENCIES */}
          <div className="bg-black/40 border border-gray-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl hover:border-blue-500/50 transition-all">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400" />
              </div>
            </div>

            {/* Header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                INSURANCE AGENCIES
              </h3>
              <p className="text-gray-400 text-base sm:text-lg">
                300-1,000 Policies in Monterey County
              </p>
            </div>

            {/* Your Problem */}
            <div className="mb-6">
              <h4 className="text-blue-400 font-semibold text-lg mb-3">YOUR PROBLEM:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Losing 15% of clients every year</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Manual renewal process (50 min/policy)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Clients shop around before renewal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>No time for proactive outreach</span>
                </li>
              </ul>
            </div>

            {/* We Automate */}
            <div className="mb-6">
              <h4 className="text-blue-400 font-semibold text-lg mb-3">WE AUTOMATE:</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>60/30/7-day renewal campaigns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Coverage gap analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Retention risk alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span>Year-round client engagement</span>
                </li>
              </ul>
            </div>

            {/* Result */}
            <div className="mb-8 bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
              <h4 className="text-blue-400 font-semibold text-lg mb-3">RESULT:</h4>
              <ul className="space-y-2 text-gray-200">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Improve retention 6-8%</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Save $60K-150K annually</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span>417 hours/year saved</span>
                </li>
              </ul>
            </div>

            {/* Pricing */}
            <div className="mb-6 text-center border-t border-gray-800 pt-6">
              <p className="text-gray-300 text-lg mb-1">
                <span className="text-white font-bold">Setup: $6,500</span> | <span className="text-white font-bold">Monthly: $750</span>
              </p>
              <p className="text-gray-500 text-sm">2-3 week implementation</p>
            </div>

            {/* CTA Button */}
            <a
              href="#insurance-details"
              className="block w-full bg-blue-500 text-white px-6 py-4 rounded-lg font-semibold text-center transition-all hover:bg-blue-400 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Learn More
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
