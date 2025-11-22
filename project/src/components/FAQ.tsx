import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do I need to change my current software?",
      answer: "No. We integrate with whatever you're already using—Buildium, AppFolio, AMS360, Applied Epic, spreadsheets, whatever. We layer automation on top of your existing tools."
    },
    {
      question: "What if I only manage 30 units / 300 policies?",
      answer: "Perfect. Our sweet spot is 30-100 units for property managers and 300-1,000 policies for insurance agencies. Smaller operations don't need this much automation, larger ones already have enterprise systems."
    },
    {
      question: "How long does setup actually take?",
      answer: "2-3 weeks from kickoff to go-live. Week 1-2: We build your custom workflows. Week 3: We test and train your team. Then you're running. No 6-month implementations."
    },
    {
      question: "What if my vendors/clients don't want to use new systems?",
      answer: "They don't have to. We send SMS and email just like you do now. They respond via text or phone—nothing changes on their end. The automation is invisible to them."
    },
    {
      question: "Can I start with just one automation?",
      answer: "Yes. Most clients start with their biggest pain point (maintenance coordination for PM, renewal campaigns for insurance), then add more workflows once they see results."
    },
    {
      question: "What's included in the monthly fee?",
      answer: "Ongoing optimization (we refine workflows based on results), monthly reports showing time and money saved, priority support (4-hour response time), and new workflow additions as needed."
    },
    {
      question: "What if I want to cancel?",
      answer: "30 days notice, no long-term contract, no penalties. But our clients don't cancel—they typically add more workflows because they're saving 15-20 hours per week."
    },
    {
      question: "How do I know this will work for my business?",
      answer: "Book a 10-minute demo. We'll show you the exact workflow with YOUR properties/policies and YOUR vendors/clients. You'll see exactly how it works before you commit."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden hover:border-teal-500/30 transition-all"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-gray-800/50"
              >
                <span className="text-lg sm:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-teal-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below FAQ */}
        <div className="mt-12 text-center">
          <a
            href="https://cal.com/ezaisolutions/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-500 text-white px-10 py-5 rounded-lg font-bold text-lg transition-all hover:bg-teal-400 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105"
          >
            Book 10-Minute Demo
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
