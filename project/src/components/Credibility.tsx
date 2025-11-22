import { TrendingUp, AlertCircle, DollarSign, Clock } from 'lucide-react';

const Credibility = () => {
  return (
    <section className="bg-gray-900 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Built on Real Industry Data, Not Guesses
          </h2>
        </div>

        {/* Property Management Stats */}
        <div className="mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-teal-400 text-center mb-8">
            Property Management Industry
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <div className="bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/30 rounded-xl p-6 text-center hover:border-teal-500/60 transition-all">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-10 h-10 text-teal-400" />
              </div>
              <p className="text-5xl sm:text-6xl font-bold text-white mb-3">72%</p>
              <p className="text-gray-300 leading-relaxed mb-2">
                of property managers cite maintenance as #1 pain point
              </p>
              <p className="text-sm text-gray-500 italic">(2025 Industry Report)</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/30 rounded-xl p-6 text-center hover:border-teal-500/60 transition-all">
              <div className="flex justify-center mb-4">
                <AlertCircle className="w-10 h-10 text-teal-400" />
              </div>
              <p className="text-5xl sm:text-6xl font-bold text-white mb-3">300+</p>
              <p className="text-gray-300 leading-relaxed mb-2">
                service requests monthly for 100-unit portfolios
              </p>
              <p className="text-sm text-gray-500 italic">(DoorLoop 2025)</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/30 rounded-xl p-6 text-center hover:border-teal-500/60 transition-all">
              <div className="flex justify-center mb-4">
                <DollarSign className="w-10 h-10 text-teal-400" />
              </div>
              <p className="text-5xl sm:text-6xl font-bold text-white mb-3">$123K</p>
              <p className="text-gray-300 leading-relaxed mb-2">
                annual cost of manual processes for 50 units
              </p>
              <p className="text-sm text-gray-500 italic">(Facilio 2025)</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/30 rounded-xl p-6 text-center hover:border-teal-500/60 transition-all">
              <div className="flex justify-center mb-4">
                <Clock className="w-10 h-10 text-teal-400" />
              </div>
              <p className="text-5xl sm:text-6xl font-bold text-white mb-3">40%</p>
              <p className="text-gray-300 leading-relaxed mb-2">
                of virtual staff assigned to maintenance coord
              </p>
              <p className="text-sm text-gray-500 italic">(Property Mgmt Stats)</p>
            </div>
          </div>
        </div>

        {/* Insurance Agency Stats */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-400 text-center mb-8">
            Insurance Agency Industry
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-6 text-center hover:border-blue-500/60 transition-all">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-10 h-10 text-blue-400" />
              </div>
              <p className="text-5xl sm:text-6xl font-bold text-white mb-3">85%</p>
              <p className="text-gray-300 leading-relaxed mb-2">
                average agency retention vs 93% top performers
              </p>
              <p className="text-sm text-gray-500 italic">(AICPA 2025)</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-6 text-center hover:border-blue-500/60 transition-all">
              <div className="flex justify-center mb-4">
                <DollarSign className="w-10 h-10 text-blue-400" />
              </div>
              <p className="text-5xl sm:text-6xl font-bold text-white mb-3">$180K</p>
              <p className="text-gray-300 leading-relaxed mb-2">
                lost revenue from 15% churn (800-policy agency)
              </p>
              <p className="text-sm text-gray-500 italic">(Industry Analysis)</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-6 text-center hover:border-blue-500/60 transition-all">
              <div className="flex justify-center mb-4">
                <Clock className="w-10 h-10 text-blue-400" />
              </div>
              <p className="text-5xl sm:text-6xl font-bold text-white mb-3">50 min</p>
              <p className="text-gray-300 leading-relaxed mb-2">
                manual time per policy renewal on average
              </p>
              <p className="text-sm text-gray-500 italic">(Agency Research)</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-6 text-center hover:border-blue-500/60 transition-all">
              <div className="flex justify-center mb-4">
                <AlertCircle className="w-10 h-10 text-blue-400" />
              </div>
              <p className="text-5xl sm:text-6xl font-bold text-white mb-3">417 hrs</p>
              <p className="text-gray-300 leading-relaxed mb-2">
                wasted annually on manual renewal process (500-policy agency)
              </p>
              <p className="text-sm text-gray-500 italic">(Industry Stats)</p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl sm:text-2xl font-bold text-white mb-2">
            We didn't guess at these problems. We researched them.
          </p>
          <p className="text-lg sm:text-xl text-gray-400">
            That's why our automation actually works.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Credibility;
