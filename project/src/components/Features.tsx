import React from 'react';
import { UserCheck, Target, BarChart3, Clock, Handshake, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Expert Guidance",
      description: "Proven AI strategy expertise"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Tailored Solutions",
      description: "Custom AI strategies for your industry"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Measurable ROI",
      description: "Track and optimize AI investments"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Faster Implementation",
      description: "Accelerated AI adoption timelines"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Ongoing Support",
      description: "Continuous optimization and guidance"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Recognition",
      description: "Certified AI implementation expertise"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-400">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Strategic AI Consulting?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Expert guidance that delivers measurable business transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 group">
              <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;