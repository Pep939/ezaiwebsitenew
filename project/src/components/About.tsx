import { Check, X } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-16 sm:py-20 lg:py-24 scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADLINE */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            We're Not AI Consultants.
            <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text mt-2">
              We're Automation Builders.
            </span>
          </h2>
        </div>

        {/* SECTION 1: THE MATH IS SIMPLE */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
            The Math Is Simple
          </h3>

          {/* Two-Column Comparison */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* LEFT: Property Managers */}
            <div className="bg-gradient-to-br from-teal-900/40 to-black border-2 border-teal-500/50 rounded-2xl p-8 lg:p-10">
              <div className="text-center mb-8">
                <h4 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-2">
                  PROPERTY MANAGERS
                </h4>
                <p className="text-gray-400 text-lg">(50 units)</p>
              </div>

              {/* Current State */}
              <div className="mb-8 pb-8 border-b border-gray-700">
                <h5 className="text-xl font-bold text-white mb-4">Current State:</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Manual work:</span>
                    <span className="text-2xl font-bold text-red-400">68 hrs/week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Annual wasted labor:</span>
                    <span className="text-2xl font-bold text-red-400">$31,200</span>
                  </div>
                </div>
              </div>

              {/* With Automation */}
              <div>
                <h5 className="text-xl font-bold text-white mb-4">With Our Automation:</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Year 1 Investment:</span>
                    <span className="text-xl font-bold text-white">$19,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Time saved:</span>
                    <span className="text-2xl font-bold text-green-400">20+ hrs/week</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Net profit Year 1:</span>
                    <span className="text-3xl font-bold text-green-400">$51,500</span>
                  </div>
                  <div className="bg-teal-500/20 border border-teal-500/40 rounded-lg p-4 mt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Payback period:</span>
                      <span className="text-2xl font-bold text-teal-400">4.2 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Insurance Agencies */}
            <div className="bg-gradient-to-br from-blue-900/40 to-black border-2 border-blue-500/50 rounded-2xl p-8 lg:p-10">
              <div className="text-center mb-8">
                <h4 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">
                  INSURANCE AGENCIES
                </h4>
                <p className="text-gray-400 text-lg">(800 policies)</p>
              </div>

              {/* Current State */}
              <div className="mb-8 pb-8 border-b border-gray-700">
                <h5 className="text-xl font-bold text-white mb-4">Current State:</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Client loss rate:</span>
                    <span className="text-2xl font-bold text-red-400">15%/year</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Lost revenue:</span>
                    <span className="text-2xl font-bold text-red-400">$180,000</span>
                  </div>
                </div>
              </div>

              {/* With Automation */}
              <div>
                <h5 className="text-xl font-bold text-white mb-4">With Our Automation:</h5>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Year 1 Investment:</span>
                    <span className="text-xl font-bold text-white">$15,500</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Retention boost:</span>
                    <span className="text-2xl font-bold text-green-400">85% → 91%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Net profit Year 1:</span>
                    <span className="text-3xl font-bold text-green-400">$135,100</span>
                  </div>
                  <div className="bg-blue-500/20 border border-blue-500/40 rounded-lg p-4 mt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-semibold">Payback period:</span>
                      <span className="text-2xl font-bold text-blue-400">1.2 months</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Separator */}
          <div className="my-12 border-t-2 border-gray-800"></div>
        </div>

        {/* SECTION 2: HOW WE DO IT */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
            How We Do It
          </h3>

          <p className="text-xl sm:text-2xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            We don't write strategy documents. We build working automation.
          </p>

          <div className="max-w-4xl mx-auto">
            <h4 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-8 text-center">
              THE PROCESS:
            </h4>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-black text-xl font-bold">
                    1
                  </div>
                  <div>
                    <h5 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Discovery call: 15 minutes
                    </h5>
                    <p className="text-gray-400 text-lg">
                      We learn your workflows and pain points
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-black text-xl font-bold">
                    2
                  </div>
                  <div>
                    <h5 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Build your automation: 2-3 weeks
                    </h5>
                    <p className="text-gray-400 text-lg">
                      Custom workflows, not generic templates
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-black text-xl font-bold">
                    3
                  </div>
                  <div>
                    <h5 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Train your team: 2 hours
                    </h5>
                    <p className="text-gray-400 text-lg">
                      Simple training - most tasks happen automatically
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-black text-xl font-bold">
                    4
                  </div>
                  <div>
                    <h5 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Go live: Day 1
                    </h5>
                    <p className="text-gray-400 text-lg">
                      Start saving time immediately
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-black text-xl font-bold">
                    5
                  </div>
                  <div>
                    <h5 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      Optimize monthly: Ongoing
                    </h5>
                    <p className="text-gray-400 text-lg">
                      Refine workflows, add new automations, report results
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <p className="text-xl sm:text-2xl font-bold text-white">
                No 18-month implementations. No $500K budgets. Just results.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: WHAT MAKES US DIFFERENT */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center">
            What Makes Us Different
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* Left Column - What We're NOT */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <X className="w-8 h-8 sm:w-10 sm:h-10 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg sm:text-xl text-gray-300">
                    We're <span className="font-bold text-red-400">NOT</span> enterprise consultants charging $500K
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <X className="w-8 h-8 sm:w-10 sm:h-10 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg sm:text-xl text-gray-300">
                    We <span className="font-bold text-red-400">DON'T</span> take 18 months to implement
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <X className="w-8 h-8 sm:w-10 sm:h-10 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg sm:text-xl text-gray-300">
                    We <span className="font-bold text-red-400">DON'T</span> work with Fortune 500 companies
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <X className="w-8 h-8 sm:w-10 sm:h-10 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg sm:text-xl text-gray-300">
                    We <span className="font-bold text-red-400">DON'T</span> build "strategic roadmaps"
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <X className="w-8 h-8 sm:w-10 sm:h-10 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg sm:text-xl text-gray-300">
                    We <span className="font-bold text-red-400">DON'T</span> serve every industry
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - What We ARE */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Check className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg sm:text-xl text-white font-semibold">
                    We're automation builders charging $6.5K-7.5K
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Check className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg sm:text-xl text-white font-semibold">
                    We deliver in 2-3 weeks
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Check className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg sm:text-xl text-white font-semibold">
                    We ONLY work with small businesses (30-100 units, 300-1,000 policies)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Check className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg sm:text-xl text-white font-semibold">
                    We build working automation that saves time Day 1
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Check className="w-8 h-8 sm:w-10 sm:h-10 text-teal-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg sm:text-xl text-white font-semibold">
                    We serve TWO industries we understand deeply: Property Management & Insurance
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* SECTION 4: WHO WE SERVE */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
            Who We Serve
          </h3>

          <div className="space-y-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <p className="text-2xl sm:text-3xl font-bold text-white text-center">
              We serve exactly TWO industries:
            </p>

            <div className="bg-gray-900/50 border border-teal-500/30 rounded-xl p-8 space-y-4">
              <p className="text-xl sm:text-2xl font-bold text-teal-400">
                1. Property Managers (30-100 units)
              </p>
              <p className="text-xl sm:text-2xl font-bold text-blue-400">
                2. Insurance Agencies (300-1,000 policies)
              </p>
            </div>

            <p className="font-semibold text-white text-xl sm:text-2xl text-center pt-6">
              Why these two?
            </p>

            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-3">
                <span className="text-teal-400 text-xl">•</span>
                <span>Clear, repetitive workflows perfect for automation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-400 text-xl">•</span>
                <span>Budget capacity ($6.5K-$19K is justified by ROI)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-400 text-xl">•</span>
                <span>Fast payback (1-4 months)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-teal-400 text-xl">•</span>
                <span>Real pain (wasting 15-20 hours/week on manual work)</span>
              </li>
            </ul>

            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 sm:p-8 mt-8">
              <p className="text-lg sm:text-xl text-center">
                If you're a Fortune 500 company looking for "strategic AI transformation," we're not your company.
              </p>
            </div>

            <p className="text-xl sm:text-2xl font-bold text-white text-center mt-6">
              But if you're tired of spending 15 hours every week on work that could be automated, let's talk.
            </p>
          </div>
        </div>

        {/* SECTION 5: WHY MONTEREY? */}
        <div className="mb-16 lg:mb-20">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
            Why Monterey?
          </h3>

          <div className="space-y-6 text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            <p className="text-center">
              We're born and raised in Monterey. We know the market. We understand local businesses.
            </p>

            <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/30 rounded-xl p-8">
              <p className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
                When you work with us:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <span>Local team, not outsourced overseas</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <span>We can meet in person if needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <span>We understand Monterey's business landscape</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <span>Long-term relationships, not one-off projects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 6: OUR GUARANTEE */}
        <div className="mb-12">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">
            Our Guarantee
          </h3>

          <div className="bg-gradient-to-br from-teal-900/40 to-blue-900/40 border-2 border-teal-500 rounded-2xl p-8 sm:p-10 lg:p-12 text-center max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6 leading-relaxed">
              If we don't save you at least 5 hours per week in the first 60 days, we'll refund your setup fee.
            </p>
            <p className="text-lg sm:text-xl text-teal-400 font-semibold">
              We're that confident it works.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://cal.com/ezaisolutions/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white px-10 py-5 rounded-xl font-bold text-xl sm:text-2xl transition-all hover:from-teal-400 hover:to-teal-500 hover:shadow-2xl hover:shadow-teal-500/40 hover:scale-105"
          >
            Book a Demo
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
