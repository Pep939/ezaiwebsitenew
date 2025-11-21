const Approach = () => {
  const steps = [
    {
      number: '01',
      emoji: '📞',
      title: '15-Minute Discovery Call',
      description: 'We learn about your manual processes, pain points, and what\'s eating up your team\'s time.',
      timeline: 'Week 1',
      deliverable: 'Clear scope and fixed price quote'
    },
    {
      number: '02',
      emoji: '🔧',
      title: 'Build Your Automation',
      description: 'We build the workflows, connect your systems, and test everything with your team.',
      timeline: 'Week 2-3',
      deliverable: 'Custom automation ready to deploy'
    },
    {
      number: '03',
      emoji: '🚀',
      title: 'Go Live & Train',
      description: 'We deploy, train your team, and provide 30 days of support to ensure everything runs smoothly.',
      timeline: 'Week 4',
      deliverable: 'Your team using the new system'
    }
  ];

  return (
    <section id="approach" className="py-32 bg-gray-950 text-white scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
            HOW IT WORKS
          </p>
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            From Call to
            <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
              Working System
            </span>
            in 30 Days
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            No lengthy consulting engagements. No strategy documents. Just working automation that saves you time.
          </p>
        </div>

        <div className="space-y-16 mb-16">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2 text-center lg:text-left">
                  <div className="text-6xl font-bold text-transparent bg-gradient-to-br from-teal-400 to-blue-400 bg-clip-text">
                    {step.number}
                  </div>
                </div>
                
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center text-black text-2xl">
                      {step.emoji}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
                
                <div className="lg:col-span-4">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400 uppercase">Timeline</span>
                        <span className="text-teal-400 font-semibold">{step.timeline}</span>
                      </div>
                      <div className="border-t border-gray-800 pt-3">
                        <span className="text-xs text-gray-400 uppercase block mb-2">You Get</span>
                        <span className="text-white text-sm font-medium">{step.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center mt-12">
                  <div className="w-6 h-6 text-gray-600">↓</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-teal-400/10 to-blue-400/10 border border-teal-400/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Total Timeline: ~30 Days</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Most projects go from first call to fully deployed in about a month. 
            Simple workflows can be done in 2 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://cal.com/ezaisolutions/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold transition-all hover:bg-gray-100">
              <span>Schedule Discovery Call</span>
            </a>
            <a href="tel:+18312304955" className="inline-flex items-center gap-2 border border-gray-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:border-teal-400">
              <span>Or Call: (831) 230-4955</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;