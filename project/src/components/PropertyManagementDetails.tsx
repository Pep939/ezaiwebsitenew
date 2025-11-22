import { Wrench, Users, FileText, Star, ChevronRight, Check } from 'lucide-react';

const PropertyManagementDetails = () => {
  return (
    <section id="property-management-details" className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Property Management Automation
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-teal-400 font-semibold">
            Stop Spending 68 Hours Per Week on Manual Work
          </p>
        </div>

        {/* THE PROBLEM - 3 Columns */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">The Problem</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1: Maintenance Chaos */}
            <div className="bg-gray-900/50 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="w-8 h-8 text-red-400" />
                <h4 className="text-xl font-bold text-white">MAINTENANCE CHAOS</h4>
              </div>
              <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>10+ hours/week coordinating vendors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Endless back-and-forth texts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Tenants calling "Did you get my request?"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Missed follow-ups = angry tenants</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-800">
                <p className="text-red-400 font-bold text-lg">Cost: $13,000/year wasted</p>
              </div>
            </div>

            {/* Column 2: Tenant Management */}
            <div className="bg-gray-900/50 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-red-400" />
                <h4 className="text-xl font-bold text-white">TENANT MANAGEMENT</h4>
              </div>
              <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>8 hours/week screening applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Document collection takes days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Manual rent reminders</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Move-in/move-out coordination</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-800">
                <p className="text-red-400 font-bold text-lg">Cost: $10,400/year wasted</p>
              </div>
            </div>

            {/* Column 3: Owner Communication */}
            <div className="bg-gray-900/50 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-red-400" />
                <h4 className="text-xl font-bold text-white">OWNER COMMUNICATION</h4>
              </div>
              <ul className="space-y-3 mb-6 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>6 hours/week generating reports</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Manually tracking expenses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Late-night emails from worried owners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  <span>Data scattered across spreadsheets</span>
                </li>
              </ul>
              <div className="pt-4 border-t border-gray-800">
                <p className="text-red-400 font-bold text-lg">Cost: $7,800/year wasted</p>
              </div>
            </div>
          </div>

          {/* Total Waste */}
          <div className="mt-8 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-red-400">
              TOTAL WASTE: $31,200/year for 50-unit property
            </p>
          </div>
        </div>

        {/* THE SOLUTION */}
        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-4">
            The Solution
          </h3>
          <p className="text-xl sm:text-2xl text-teal-400 text-center mb-12">
            What If All of This Happened Automatically?
          </p>

          {/* Workflow Example */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/30 rounded-2xl p-8 sm:p-10">
            <h4 className="text-2xl font-bold text-teal-400 mb-6">MAINTENANCE REQUEST WORKFLOW:</h4>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div>
                  <p className="text-white font-semibold mb-1">Tenant submits request (text or form)</p>
                  <p className="text-gray-400">→ System receives: "Toilet leaking in Unit 204"</p>
                </div>
              </div>

              <ChevronRight className="w-6 h-6 text-teal-400 ml-3" />

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div>
                  <p className="text-white font-semibold mb-1">AI categorizes urgency & type</p>
                  <p className="text-gray-400">→ Classified as: Plumbing, Urgent</p>
                </div>
              </div>

              <ChevronRight className="w-6 h-6 text-teal-400 ml-3" />

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div>
                  <p className="text-white font-semibold mb-1">Auto-dispatches to vendor</p>
                  <p className="text-gray-400">→ Text to plumber: "Job at 123 Main St, Unit 204: Leaking toilet"</p>
                </div>
              </div>

              <ChevronRight className="w-6 h-6 text-teal-400 ml-3" />

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
                <div>
                  <p className="text-white font-semibold mb-1">Sends notifications</p>
                  <p className="text-gray-400">→ Tenant: "We got your request! Plumber scheduled tomorrow 2pm"</p>
                  <p className="text-gray-400">→ PM: "Request logged, vendor dispatched"</p>
                </div>
              </div>

              <ChevronRight className="w-6 h-6 text-teal-400 ml-3" />

              {/* Step 5 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">5</div>
                <div>
                  <p className="text-white font-semibold mb-1">Follows up automatically</p>
                  <p className="text-gray-400">→ Day 1: "Plumber confirmed?"</p>
                  <p className="text-gray-400">→ Day 2: "Work completed?"</p>
                  <p className="text-gray-400">→ Day 3: Tenant satisfaction survey</p>
                </div>
              </div>

              <ChevronRight className="w-6 h-6 text-teal-400 ml-3" />

              {/* Step 6 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">6</div>
                <div>
                  <p className="text-white font-semibold mb-1">Logs everything</p>
                  <p className="text-gray-400">→ Complete record in your system</p>
                </div>
              </div>
            </div>

            {/* Time Reduction */}
            <div className="mt-8 pt-6 border-t border-teal-500/30">
              <p className="text-center text-xl sm:text-2xl font-bold text-white">
                Time per request: <span className="text-red-400 line-through">30 min</span> → <span className="text-green-400">2 min</span>
                <span className="block text-teal-400 mt-2">(93% reduction)</span>
              </p>
            </div>
          </div>
        </div>

        {/* 9 WORKFLOWS WE AUTOMATE */}
        <div className="mb-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
            9 Workflows We Automate
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Workflow 1 */}
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-500/5 border border-teal-500/50 rounded-xl p-6 relative">
              <div className="absolute top-4 right-4">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Maintenance Coordination</h4>
              <p className="text-sm text-gray-400 mb-2">(Most Popular)</p>
              <p className="text-teal-400 font-bold">Save: 15 hrs/week</p>
            </div>

            {/* Workflow 2 */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Tenant Screening</h4>
              <p className="text-teal-400 font-bold">Save: 8 hrs/week</p>
            </div>

            {/* Workflow 3 */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Rent Collection</h4>
              <p className="text-teal-400 font-bold">Save: 5 hrs/week</p>
            </div>

            {/* Workflow 4 */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Lease Management</h4>
              <p className="text-teal-400 font-bold">Save: 4 hrs/week</p>
            </div>

            {/* Workflow 5 */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Owner Reporting</h4>
              <p className="text-teal-400 font-bold">Save: 6 hrs/week</p>
            </div>

            {/* Workflow 6 */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Move-In/Move-Out</h4>
              <p className="text-teal-400 font-bold">Save: 3 hrs/week</p>
            </div>

            {/* Workflow 7 */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Vendor Management</h4>
              <p className="text-teal-400 font-bold">Save: 3 hrs/week</p>
            </div>

            {/* Workflow 8 */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Property Showings</h4>
              <p className="text-teal-400 font-bold">Save: 4 hrs/week</p>
            </div>

            {/* Workflow 9 */}
            <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-2">Emergency Response</h4>
              <p className="text-teal-400 font-bold">Save: Variable</p>
            </div>
          </div>

          {/* Total Potential */}
          <div className="mt-8 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-teal-400">
              Total Potential: 48+ hours/week
            </p>
          </div>
        </div>

        {/* ROI CALCULATION */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-2xl p-8 sm:p-10">
          <h3 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
            ROI Calculation
          </h3>

          {/* Investment */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-white mb-4">Investment:</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex justify-between">
                <span>Setup (one-time):</span>
                <span className="font-bold text-white">$7,500</span>
              </p>
              <p className="flex justify-between">
                <span>Monthly (ongoing optimization):</span>
                <span className="font-bold text-white">$1,000</span>
              </p>
              <div className="pt-2 border-t border-gray-700">
                <p className="flex justify-between text-lg">
                  <span className="font-bold">Year 1 Total:</span>
                  <span className="font-bold text-white">$19,500</span>
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-8">
            <h4 className="text-xl font-bold text-white mb-4">Benefits:</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-gray-300">Time Saved: <span className="text-white font-bold">20 hrs/week</span></p>
                  <p className="text-green-400 font-bold">= $26,000/year</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <p className="text-gray-300">Additional Capacity: <span className="text-white font-bold">+15 units</span></p>
                  <p className="text-green-400 font-bold">= $45,000/year potential</p>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-700">
                <p className="flex justify-between text-lg">
                  <span className="font-bold text-white">Total Benefit:</span>
                  <span className="font-bold text-green-400">$71,000/year</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="bg-green-500/20 border border-green-500/50 rounded-xl p-6">
            <div className="space-y-3 text-center">
              <p className="text-2xl font-bold text-white">
                Net Profit Year 1: <span className="text-green-400">$51,500</span>
              </p>
              <p className="text-xl font-bold text-teal-400">
                Payback Period: 4.2 months
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8 text-center">
            <a
              href="https://cal.com/ezaisolutions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-teal-500 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105"
            >
              Book Demo - See Your Custom ROI
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PropertyManagementDetails;
