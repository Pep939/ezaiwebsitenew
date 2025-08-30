import React from 'react';
import { TrendingUp, Clock, Users, Award, Globe, Zap, Shield, ArrowRight } from 'lucide-react';

const Insights = () => {
  const capabilities = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Comprehensive Solutions",
      description: "End-to-end AI consulting from strategy development to implementation"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Deployment",
      description: "Agile methodologies ensuring quick time-to-value for AI initiatives"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security protocols and compliance frameworks"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Change Management",
      description: "Comprehensive organizational transformation and adoption strategies"
    }
  ];

  return (
    <section id="insights" className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
              OUR CAPABILITIES
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              Enterprise-Grade AI
              <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
                Consulting Excellence
              </span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              We combine deep technical expertise with strategic business acumen to deliver 
              AI consulting services focused on practical implementation and strategic guidance.
            </p>
            <a href="#contact" className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-400 to-blue-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              <span>Discuss Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          
          <div className="space-y-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center text-black flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 group-hover:text-teal-400 transition-colors duration-300">
                    {capability.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">{capability.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insights;