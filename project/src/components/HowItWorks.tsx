import { Phone, Settings, GraduationCap, Rocket, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section id="approach" className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Our Process Works For Both Industries
          </h2>
        </div>

        {/* 5-Step Process */}
        <div className="space-y-6">

          {/* Step 1 */}
          <div className="bg-gradient-to-r from-teal-500/10 to-transparent border border-teal-500/30 rounded-xl p-6 sm:p-8 hover:border-teal-500/60 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  STEP 1: Discovery Call
                </h3>
              </div>
              <div className="text-teal-400 font-bold text-lg sm:text-xl">
                15 minutes
              </div>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed ml-0 sm:ml-16">
              We learn about your current workflows and biggest pain points. No sales pitch—just understanding.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/30 rounded-xl p-6 sm:p-8 hover:border-blue-500/60 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  STEP 2: Custom Setup
                </h3>
              </div>
              <div className="text-blue-400 font-bold text-lg sm:text-xl">
                2-3 weeks
              </div>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed ml-0 sm:ml-16">
              We build automation workflows specifically for your business. Not generic templates—custom to your process.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/30 rounded-xl p-6 sm:p-8 hover:border-purple-500/60 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  STEP 3: Training
                </h3>
              </div>
              <div className="text-purple-400 font-bold text-lg sm:text-xl">
                2 hours
              </div>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed ml-0 sm:ml-16">
              We train your team on the new system. It's simple—most tasks happen automatically.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/30 rounded-xl p-6 sm:p-8 hover:border-green-500/60 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  STEP 4: Go Live
                </h3>
              </div>
              <div className="text-green-400 font-bold text-lg sm:text-xl">
                Day 1
              </div>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed ml-0 sm:ml-16">
              Your automation starts saving time immediately. We monitor closely for the first 30 days.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/30 rounded-xl p-6 sm:p-8 hover:border-orange-500/60 transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  STEP 5: Ongoing Optimization
                </h3>
              </div>
              <div className="text-orange-400 font-bold text-lg sm:text-xl">
                Monthly
              </div>
            </div>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed ml-0 sm:ml-16">
              We refine workflows, add new automations, and report on time/money saved. Continuous improvement.
            </p>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-2xl sm:text-3xl font-bold text-white mb-2">
            From first call to live automation in 2-3 weeks.
          </p>
          <p className="text-lg sm:text-xl text-gray-400">
            No 18-month implementations. No $500K budgets. Just results.
          </p>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="https://cal.com/ezaisolutions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-500 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105"
            >
              Book Discovery Call
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
