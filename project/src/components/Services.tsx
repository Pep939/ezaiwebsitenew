import { Brain, Zap, Target, Users, Shield, Workflow } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Strategy & Roadmapping",
      description: "Comprehensive AI transformation strategies aligned with your business objectives and market positioning.",
      features: ["Strategic Planning", "ROI Analysis", "Risk Assessment"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Implementation & Integration",
      description: "End-to-end AI solution deployment with seamless integration into existing business processes.",
      features: ["System Integration", "Change Management", "Performance Optimization"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Process Intelligence",
      description: "AI-driven analysis and optimization of business workflows to eliminate inefficiencies.",
      features: ["Workflow Analysis", "Automation Design", "Efficiency Metrics"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Organizational Readiness",
      description: "Comprehensive training and change management to ensure successful AI adoption across teams.",
      features: ["Team Training", "Skill Development", "Cultural Transformation"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI Governance & Ethics",
      description: "Responsible AI frameworks ensuring compliance, security, and ethical implementation.",
      features: ["Compliance Strategy", "Risk Management", "Ethical Guidelines"]
    },
    {
      icon: <Workflow className="w-8 h-8" />,
      title: "Digital Transformation",
      description: "Complete business transformation leveraging AI, automation, and emerging technologies.",
      features: ["Technology Stack", "Process Redesign", "Innovation Strategy"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-black text-white relative scroll-mt-28 md:scroll-mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
            OUR EXPERTISE
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
            AI Consulting
            <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Strategic AI implementation services designed to accelerate your digital transformation 
            and create sustainable competitive advantages.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-400 rounded-full flex items-center justify-center text-black mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-teal-400 transition-colors duration-300">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-center">{service.description}</p>
              
              <div className="space-y-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-center gap-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;