import { Shield, TrendingDown, Calendar, AlertTriangle, Star, Check } from 'lucide-react';

const InsuranceDetails = () => {
  return (
    <section id="insurance-details" className="bg-gray-900 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Insurance Agency Automation
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-red-400 font-semibold">
            Stop Losing $180,000 in Clients Every Year
          </p>
        </div>

        {/* THE RETENTION CRISIS */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">The Retention Crisis</h3>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto bg-black/40 border border-gray-800 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-6 py-4 text-left text-white font-bold"></th>
                  <th className="px-6 py-4 text-center text-white font-bold">Your Agency</th>
                  <th className="px-6 py-4 text-center text-white font-bold">Top Performers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr>
                  <td className="px-6 py-4 text-gray-300 font-medium">Retention Rate</td>
                  <td className="px-6 py-4 text-center text-red-400 font-bold text-lg">85%</td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold text-lg">93%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300 font-medium">Lost Clients (800 pol)</td>
                  <td className="px-6 py-4 text-center text-red-400 font-bold text-lg">120 policies</td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold text-lg">56 policies</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-300 font-medium">Lost Revenue</td>
                  <td className="px-6 py-4 text-center text-red-400 font-bold text-lg">$180,000</td>
                  <td className="px-6 py-4 text-center text-green-400 font-bold text-lg">$84,000</td>
                </tr>
                <tr className="bg-blue-500/10">
                  <td className="px-6 py-4 text-white font-bold">Annual Difference</td>
                  <td colSpan={2} className="px-6 py-4 text-center text-blue-400 font-bold text-xl">$96,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Callout */}
          <div className="mt-8 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-white">
              That 8-point retention gap = <span className="text-red-400">$96,000 lost revenue annually</span>
            </p>
          </div>
        </div>

        {/* WHY CLIENTS LEAVE */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
              Why Clients Leave
            </h3>
            <p className="text-xl sm:text-2xl text-red-400 text-center mb-12">
              "The Silent Killer: Poor Communication During Renewal"
            </p>

            {/* The Typical Process */}
            <div className="bg-gradient-to-br from-red-500/10 to-gray-900/50 border border-red-500/30 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-white mb-6">The typical agency process:</h4>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">1</div>
                  <p className="text-gray-300 pt-1">Send renewal notice (email)</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">2</div>
                  <p className="text-gray-300 pt-1">Client doesn't respond immediately</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">3</div>
                  <p className="text-gray-300 pt-1">Agency gets busy with other work</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">4</div>
                  <p className="text-gray-300 pt-1">Client shops around</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">5</div>
                  <p className="text-gray-300 pt-1">Competitor offers $50 less</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center text-red-400 font-bold">6</div>
                  <p className="text-gray-300 pt-1">Client switches</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-red-500/30 text-center">
                <p className="text-xl font-bold text-red-400 italic">
                  You never saw it coming.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* THE SOLUTION */}
        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            The Solution
          </h3>
          <p className="text-xl sm:text-2xl text-blue-400 text-center mb-12">
            "Intelligent Renewal Campaigns That Keep Clients Engaged"
          </p>

          {/* Automated Workflow */}
          <div className="max-w-4xl mx-auto space-y-6">

            {/* 60 Days Before */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-blue-400" />
                <h4 className="text-xl font-bold text-blue-400">60 Days Before Renewal:</h4>
              </div>
              <ul className="space-y-2 text-gray-300 ml-9">
                <li>→ Email: "Your policy renews soon - let's review coverage"</li>
                <li>→ Include: Current coverage summary, schedule review link</li>
                <li className="text-blue-400 font-semibold">→ Goal: Start conversation early</li>
              </ul>
            </div>

            {/* 30 Days Before */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-blue-400" />
                <h4 className="text-xl font-bold text-blue-400">30 Days Before:</h4>
              </div>
              <ul className="space-y-2 text-gray-300 ml-9">
                <li>→ Email: "Coverage gaps identified" (if any)</li>
                <li>→ SMS: "Quick reminder - renewal coming up"</li>
                <li className="text-blue-400 font-semibold">→ Goal: Surface concerns before shopping begins</li>
              </ul>
            </div>

            {/* 7 Days Before */}
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-blue-400" />
                <h4 className="text-xl font-bold text-blue-400">7 Days Before:</h4>
              </div>
              <ul className="space-y-2 text-gray-300 ml-9">
                <li>→ Email: "Action needed - renewal in 7 days"</li>
                <li>→ SMS: "Renewal deadline approaching"</li>
                <li>→ Phone trigger: If no response by Day 5</li>
                <li className="text-blue-400 font-semibold">→ Goal: Urgency without being pushy</li>
              </ul>
            </div>

            {/* Day of Renewal */}
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Check className="w-6 h-6 text-green-400" />
                <h4 className="text-xl font-bold text-green-400">Day of Renewal:</h4>
              </div>
              <ul className="space-y-2 text-gray-300 ml-9">
                <li>→ Automatic processing (if no changes needed)</li>
                <li>→ Email confirmation</li>
                <li>→ Thank you note</li>
              </ul>
            </div>

            {/* Post-Renewal */}
            <div className="bg-gradient-to-br from-teal-500/10 to-teal-500/5 border border-teal-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-6 h-6 text-teal-400" />
                <h4 className="text-xl font-bold text-teal-400">Post-Renewal (Throughout Year):</h4>
              </div>
              <ul className="space-y-2 text-gray-300 ml-9">
                <li>→ Quarterly check-ins</li>
                <li>→ Life event triggers (bought house, had baby)</li>
                <li>→ Policy review reminders</li>
                <li>→ Cross-sell based on coverage gaps</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4 CORE AUTOMATIONS */}
        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            4 Core Automations
          </h3>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Automation 1 */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 border border-blue-500/50 rounded-xl p-6 relative">
              <div className="absolute top-4 right-4">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Intelligent Renewal Campaigns</h4>
              <p className="text-sm text-gray-400 mb-3">(Biggest Impact)</p>
              <p className="text-blue-400 font-bold">Improve retention by 6-8%</p>
            </div>

            {/* Automation 2 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Coverage Gap Analysis</h4>
              <p className="text-gray-400 text-sm">Identify missing policies, auto-recommend</p>
            </div>

            {/* Automation 3 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Retention Risk Alerts</h4>
              <p className="text-gray-400 text-sm">Predict churn, trigger proactive outreach</p>
            </div>

            {/* Automation 4 */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Year-Round Engagement</h4>
              <p className="text-gray-400 text-sm">Stay top-of-mind between renewals</p>
            </div>
          </div>
        </div>

        {/* PREMIUM FEATURE - PERSONALIZED VIDEO CAMPAIGNS */}
        <div className="mb-20">
          <div className="relative bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-2 border-purple-500/50 rounded-2xl p-8 sm:p-10 lg:p-12 overflow-hidden">

            {/* Badge */}
            <div className="absolute top-4 right-4 bg-purple-500 text-white px-4 py-1.5 rounded-full font-bold text-sm">
              PREMIUM
            </div>

            {/* Section Header */}
            <div className="text-center mb-10">
              <div className="inline-block bg-purple-500/20 border border-purple-500/40 rounded-lg px-4 py-2 mb-4">
                <span className="text-purple-300 text-sm font-semibold">🎬 NEW FEATURE</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Personalized Video Renewal Campaigns
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Take retention to the next level with AI-generated personalized videos for every client.
              </p>
            </div>

            {/* Two-Column Layout */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-10">

              {/* LEFT: Video Demo */}
              <div className="bg-black/40 border border-gray-700 rounded-xl p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-full aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4">
                    {/* Placeholder for video embed */}
                    <div className="text-center">
                      <div className="w-20 h-20 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-10 h-10 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                      <p className="text-gray-400 text-sm">Video Demo Coming Soon</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-xs">
                    Embed YouTube or Vimeo video here
                  </p>
                </div>
              </div>

              {/* RIGHT: Feature Description */}
              <div className="space-y-6">

                {/* Intro */}
                <div>
                  <p className="text-lg text-gray-300 mb-4">
                    Instead of generic email renewals, your clients receive:
                  </p>
                  <div className="bg-blue-500/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <p className="text-gray-200 italic">
                      "Hi Sarah, this is Mike from ABC Insurance. I wanted to personally reach out about your auto and home policy that's renewing next month..."
                    </p>
                  </div>
                </div>

                {/* How It Works */}
                <div>
                  <h4 className="text-xl font-bold text-white mb-4">HOW IT WORKS:</h4>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</span>
                      <span className="text-gray-300">We create a digital avatar of you (one-time)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</span>
                      <span className="text-gray-300">System generates personalized videos automatically</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</span>
                      <span className="text-gray-300">Videos sent 60/30/7 days before renewal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</span>
                      <span className="text-gray-300">Includes name, policy details, recommendations</span>
                    </li>
                  </ol>
                </div>

                {/* The Impact */}
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4">THE IMPACT:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">3-5x higher engagement than email</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">Personal touch at scale (100+ videos/month)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-200">2-4% additional retention improvement</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Investment Section */}
            <div className="bg-black/40 border border-purple-500/30 rounded-xl p-6 sm:p-8 mb-8">
              <h4 className="text-xl font-bold text-white mb-4 text-center">INVESTMENT:</h4>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Setup (One-Time)</p>
                  <p className="text-2xl sm:text-3xl font-bold text-white">$1,500</p>
                  <p className="text-gray-500 text-xs mt-1">Avatar creation</p>
                </div>
                <div className="text-center border-l border-r border-gray-700 px-4">
                  <p className="text-gray-400 text-sm mb-2">Premium Tier</p>
                  <p className="text-2xl sm:text-3xl font-bold text-purple-400">$1,000<span className="text-lg text-gray-400">/mo</span></p>
                  <p className="text-gray-500 text-xs mt-1">Includes video feature</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 text-sm mb-2">Add to Standard</p>
                  <p className="text-2xl sm:text-3xl font-bold text-white">+$250<span className="text-lg text-gray-400">/mo</span></p>
                  <p className="text-gray-500 text-xs mt-1">Add-on pricing</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://cal.com/ezaisolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:bg-purple-400 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105"
              >
                Watch Demo Video
              </a>
              <a
                href="https://cal.com/ezaisolutions/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-purple-500 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all hover:bg-purple-500/20"
              >
                Ask About Early Access
              </a>
            </div>

            {/* Beta Notice */}
            <div className="mt-8 text-center">
              <p className="text-gray-400 text-sm">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
                Currently in beta with select clients
              </p>
            </div>

          </div>
        </div>

        {/* ROI CALCULATION */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-2xl p-8 sm:p-10">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
            ROI Calculation
          </h3>

          {/* Investment */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-white mb-4">Investment:</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex justify-between">
                <span>Setup (one-time):</span>
                <span className="font-bold text-white">$6,500</span>
              </p>
              <p className="flex justify-between">
                <span>Monthly (ongoing optimization):</span>
                <span className="font-bold text-white">$750</span>
              </p>
              <div className="pt-2 border-t border-gray-700">
                <p className="flex justify-between text-lg">
                  <span className="font-bold">Year 1 Total:</span>
                  <span className="font-bold text-white">$15,500</span>
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-white mb-4">Benefits:</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-gray-300">
                    <span className="font-bold text-white">Retention Improvement:</span> 85% → 91% (6 points)
                  </p>
                  <p className="text-gray-400 text-sm mt-1">→ Save 48 policies × $1,500</p>
                  <p className="text-green-400 font-bold">= $72,000</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-gray-300">
                    <span className="font-bold text-white">Time Savings:</span> 292 hours/year
                  </p>
                  <p className="text-green-400 font-bold">= $14,600</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-gray-300">
                    <span className="font-bold text-white">Cross-Sell Increase:</span> 10% add coverage
                  </p>
                  <p className="text-gray-400 text-sm mt-1">→ 80 new policies × $800</p>
                  <p className="text-green-400 font-bold">= $64,000</p>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <p className="flex justify-between text-lg">
                  <span className="font-bold text-white">Total Benefit:</span>
                  <span className="font-bold text-green-400">$150,600</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6">
            <div className="space-y-3">
              <p className="text-2xl font-bold text-white text-center">
                Net Profit Year 1: <span className="text-green-400">$135,100</span>
              </p>
              <p className="text-xl font-bold text-blue-400 text-center">
                ROI: 871%
              </p>
              <p className="text-xl font-bold text-teal-400 text-center">
                Payback: 1.2 months
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <a
              href="https://cal.com/ezaisolutions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all hover:bg-blue-400 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
            >
              Book Demo - See Your Custom ROI
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InsuranceDetails;
