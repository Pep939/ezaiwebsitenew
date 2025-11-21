import React from 'react';

const Services = () => {
  const services = [
    {
      emoji: '🏠',
      title: 'Property Management Automation',
      price: '$5,000 - $7,500',
      timeSaved: '30 hrs/month → 5 hrs/month',
      description: 'Automated tenant screening, maintenance requests, and rent collection for property managers handling 10+ units.',
      features: [
        'Automated tenant screening (15 min vs 4 hours)',
        'Maintenance request portal with auto-routing',
        'Rent payment reminders and tracking',
        'Lease renewal automation'
      ]
    },
    {
      emoji: '📊',
      title: 'Accounting Firm Automation',
      price: '$6,000 - $8,500',
      timeSaved: '25 hrs/month → 8 hrs/month',
      description: 'Client onboarding, document collection, and tax deadline tracking for accounting practices.',
      features: [
        'Automated client intake forms',
        'Document collection and organization',
        'Tax deadline reminders for clients',
        'Invoice generation and tracking'
      ]
    },
    {
      emoji: '🏖️',
      title: 'Vacation Rental Compliance',
      price: '$6,500 - $8,500',
      timeSaved: '20 hrs/month → 3 hrs/month',
      description: 'Monterey County permit tracking, TOT filing reminders, and regulatory compliance management.',
      features: [
        'County permit application tracking',
        'TOT filing deadline reminders',
        'Document repository (permits, licenses)',
        'Coastal Commission requirement tracker'
      ]
    },
    {
      emoji: '🔧',
      title: 'Service Business Operations',
      price: '$4,000 - $6,000',
      timeSaved: '15 hrs/month → 4 hrs/month',
      description: 'Lead qualification, appointment scheduling, and follow-up automation for contractors and service providers.',
      features: [
        'Lead intake and qualification',
        'Automated appointment scheduling',
        'Customer follow-up sequences',
        'Job status updates to clients'
      ]
    },
    {
      emoji: '📞',
      title: 'AI Receptionist & Phone Automation',
      price: '$2,500 - $4,000',
      monthly: '$150-400/month',
      timeSaved: 'Zero missed calls',
      description: '24/7 phone answering, appointment scheduling, and call routing. Never miss a call again - perfect for after-hours maintenance requests and guest inquiries.',
      features: [
        'Answers calls 24/7 in natural conversation',
        'Books appointments directly to calendar',
        'Routes urgent calls to on-call staff',
        'Takes messages and sends summaries'
      ]
    }
  ];

  return (
    <section id="services" className="py-32 bg-black text-white scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
            WHAT WE BUILD
          </p>
          <h2 className="text-6xl font-bold mb-8 leading-tight">
            Custom Automation
            <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
              Workflows
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            One-time setup fee. Built specifically for your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-teal-400/50 transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center text-black text-2xl font-bold flex-shrink-0">
                  {service.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-teal-400">
                      <span className="font-semibold">{service.price}</span>
                    </div>
                    {service.monthly && (
                      <div className="flex items-center gap-2 text-blue-400">
                        <span className="font-semibold">{service.monthly}</span>
                      </div>
                    )}
                    <div className="text-gray-400">
                      <span>{service.timeSaved}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-teal-400 uppercase">What's Included:</h4>
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2"></div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Don't See Your Industry?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            We build custom automation for any business with repetitive manual work. 
            Book a 15-minute call to discuss your specific needs.
          </p>
          <a href="https://cal.com/ezaisolutions/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-400 to-blue-400 text-black px-8 py-4 rounded-full font-semibold transition-all hover:scale-105">
            <span>Schedule a Call</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;