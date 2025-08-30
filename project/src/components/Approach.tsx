import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Approach = () => {
  const phases = [
    {
      number: "01",
      title: "Discovery & Assessment",
      description: "Deep dive into your current processes, technology stack, and business objectives to identify AI opportunities.",
      deliverables: ["Current State Analysis", "AI Readiness Assessment", "Opportunity Mapping"]
    },
    {
      number: "02", 
      title: "Strategy Development",
      description: "Create a comprehensive AI roadmap with clear milestones, resource requirements, and success metrics.",
      deliverables: ["AI Strategy Document", "Implementation Roadmap", "ROI Projections"]
    },
    {
      number: "03",
      title: "Pilot Implementation",
      description: "Execute targeted pilot projects to validate approaches and demonstrate value before full-scale deployment.",
      deliverables: ["Pilot Project Execution", "Performance Metrics", "Lessons Learned"]
    },
    {
      number: "04",
      title: "Scale & Optimize",
      description: "Roll out successful solutions across the organization while continuously optimizing for maximum impact.",
      deliverables: ["Full Deployment", "Training Programs", "Ongoing Optimization"]
    }
  ];

  return (
    <section id="approach" className="py-32 bg-gray-950 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #0891b2 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, #3b82f6 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
            OUR METHODOLOGY
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            Proven AI
            <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
              Implementation
            </span>
            Framework
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our systematic approach ensures successful AI adoption with minimal risk and maximum business impact.
          </p>
        </div>

        <div className="space-y-16">
          {phases.map((phase, index) => (
            <div key={index} className="group">
              <div className="grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="text-6xl lg:text-8xl font-bold text-transparent bg-gradient-to-br from-teal-400 to-blue-400 bg-clip-text group-hover:scale-110 transition-transform duration-500">
                    {phase.number}
                  </div>
                </div>
                
                <div className="lg:col-span-6 space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-bold group-hover:text-teal-400 transition-colors duration-300">
                    {phase.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                
                <div className="lg:col-span-4">
                  <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 group-hover:border-teal-400/30 transition-all duration-300">
                    <h4 className="text-sm font-semibold text-teal-400 mb-4 tracking-wide uppercase">
                      Key Deliverables
                    </h4>
                    <div className="space-y-3">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {index < phases.length - 1 && (
                <div className="flex justify-center mt-12">
                  <ArrowRight className="w-6 h-6 text-gray-600 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;