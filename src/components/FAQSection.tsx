import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      q: 'How fast can you get here?',
      a: 'We target a 60-minute or less arrival window for all emergency calls within the Greater Melbourne Metro area. When you make a booking, our live dispatch desk will review traffic data and send you a precise ETA alongside a tracking link so you can follow your electrician on a live map.',
    },
    {
      q: 'Do you charge a dispatch or call-out fee?',
      a: 'Yes, we charge a competitive emergency call-out fee to dispatch a fully equipped response vehicle with an A-Grade electrician to your door immediately, 24/7. Once on-site, the electrician will carry out a thorough diagnosis and provide a clear, fixed-price quote to solve the problem before any repair work starts.',
    },
    {
      q: 'Are your emergency electricians licensed and insured?',
      a: 'Absolutely. Every single technician in the FluxOS team is a qualified A-Grade electrician holding active credentials with Energy Safe Victoria (ESV). We carry comprehensive $20 Million public liability insurance and certify all repairs with a formal Certificate of Electrical Safety (COES).',
    },
    {
      q: 'What constitutes an electrical emergency?',
      a: 'An emergency is any scenario posing an immediate fire, shock, or safety hazard. This includes: loud switchboard pops, active sparking, acrid plastic burning smells, hot-to-the-touch sockets, partial or total power outages, constantly tripping RCD safety switches, or water ingress near power outlets. If you feel unsafe, shut down your main power and call us immediately.',
    },
  ];

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq-section" className="bg-slate-50 py-20 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 left-0 w-[40%] h-[50%] bg-brand-orange/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-brand-orange" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-orange">
              Support Center
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 font-sans text-base max-w-xl mx-auto">
            Got questions? We have answers. If your concern is not answered below, speak to a dispatcher directly.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden hover:border-slate-300 transition-all shadow-sm"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus:outline-none group select-none"
                >
                  <span className="font-display font-bold text-base md:text-lg text-brand-navy group-hover:text-brand-orange transition-colors pr-4">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/60 flex items-center justify-center text-gray-400 group-hover:text-brand-navy shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Animated content box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-gray-600 font-sans text-sm md:text-base leading-relaxed border-t border-slate-100 text-left">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
