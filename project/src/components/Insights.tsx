import React from 'react';

const Insights = () => {
  const examples = [
    {
      industry: 'Property Management',
      business: '15-unit portfolio in Monterey',
      problem: 'Spending 30+ hours/month on tenant screening, maintenance requests, and rent collection',
      solution: 'Automated tenant portal, maintenance routing, and payment reminders',
      results: {
        timeSaved: '25 hrs/month',
        setupCost: '$6,500',
        monthlySavings: '$1,250',
        roi: '5 months'
      }
    },
    {
      industry: 'Vacation Rental Management',
      business: '25 properties in Carmel & Monterey',
      problem: 'New county regulations require tracking permits, TOT filings, and coastal certifications',
      solution: 'Compliance dashboard with deadline reminders and document repository',
      results: {
        timeSaved: '20 hrs/month',
        setupCost: '$7,500',
        avoidedFines: '$15,000+',
        roi: 'Immediate'
      }
    },
    {
      industry: 'Accounting Firm',
      business: 'Small firm in Salinas',
      problem: 'Chasing clients for documents, missing tax deadlines, manual invoice tracking',
      solution: 'Client portal, automated document requests, deadline tracking system',
      results: {
        timeSaved: '18 hrs/month',
        setupCost: '$6,000',
        clientCapacity: '+30%',
        roi: '4 months'
      }
    }
  ];

  return (
    <section id="insights" className="py-32 bg-black text-white scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
            REAL RESULTS
          </p>
          <h3 className="text-4xl font-bold mb-6 leading-tight">
            What Monterey Businesses
            <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
              Actually Save
            </span>
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            These are real projects for Monterey County businesses. Numbers are actual time and cost savings.
          </p>
        </div>
        
        <div className="space-y-8 mb-16">
          {examples.map((example, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2 space-y-4">
                  <div className="inline-block bg-teal-400/10 border border-teal-400/20 rounded-lg px-4 py-2">
                    <span className="text-teal-400 font-semibold text-sm">{example.industry}</span>
                  </div>
                  <h4 className="text-xl font-bold">{example.business}</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">The Problem</p>
                      <p className="text-gray-300">{example.problem}</p>
                    </div>
                    
                    <div>
                      <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">The Solution</p>
                      <p className="text-gray-300">{example.solution}</p>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-4">Results</p>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(example.results).map(([key, value], idx) => (
                      <div key={idx} className="bg-gray-950/50 rounded-xl p-4 border border-gray-800">
                        <div className="flex items-center gap-2 text-teal-400 mb-2">
                          <span className="text-xs uppercase">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        </div>
                        <p className="text-2xl font-bold">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-400/10 to-blue-400/10 border border-teal-400/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Want to See Your Numbers?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Tell us what manual work is eating up your time. We'll calculate how much you could save 
            and give you a fixed-price quote.
          </p>
          <a href="https://cal.com/ezaisolutions/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-400 to-blue-400 text-black px-8 py-4 rounded-full font-semibold transition-all hover:scale-105">
            <span>Calculate Your Savings →</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Insights;