import { Target, MessageSquare, Settings, Zap, Shield, BarChart3, ArrowRight } from 'lucide-react';

const Insights = () => {
  const capabilities = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "AI Strategy & Implementation",
      subtitle: "Turn AI concepts into profitable reality",
      description: "90-day strategic roadmaps with measurable ROI targets and phased implementation approach that minimizes risk while maximizing impact."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Voice AI Integration",
      subtitle: "Your customers' new favorite support agent",
      description: "Intelligent voice assistants that handle customer inquiries, book appointments, and manage support tickets - reducing response times by 90% while maintaining human-quality interactions."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Workflow Automation & Integration",
      subtitle: "Connect everything, automate anything",
      description: "Seamless integration between your existing systems - CRM, calendars, databases, and third-party tools - creating intelligent workflows that eliminate manual tasks and human error."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Value Delivery",
      subtitle: "Results in weeks, not months",
      description: "Pilot programs and proof-of-concepts that demonstrate clear value within 30 days, followed by scalable enterprise rollouts with predictable outcomes."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security & Compliance",
      subtitle: "Secure AI implementations you can trust",
      description: "Industry-standard security protocols and compliance frameworks ensuring your AI solutions protect sensitive data and meet regulatory requirements."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics & Optimization",
      subtitle: "Continuous improvement through data",
      description: "Real-time dashboards and AI performance metrics that track cost savings, efficiency gains, and customer satisfaction improvements across all automated processes."
    }
  ];

  return (
    <section id="insights" className="py-32 bg-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-4">
            OUR EXPERTISE
          </p>
          <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
            Transforming Business Operations
            <span className="block text-transparent bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text">
              Through Intelligent AI
            </span>
          </h3>
          <a href="https://cal.com/ezaisolutions/30min" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-teal-400 to-blue-400 text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="group bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-teal-400/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center text-black mb-4 group-hover:scale-110 transition-transform duration-300">
                {capability.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2 group-hover:text-teal-400 transition-colors duration-300">
                {capability.title}
              </h4>
              <p className="text-teal-300 text-sm font-medium mb-3">{capability.subtitle}</p>
              <p className="text-gray-400 leading-relaxed text-sm">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;