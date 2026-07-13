import { motion } from 'motion/react';
import { PhoneCall, Truck, Sparkles, HelpCircle } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      step: '1',
      icon: PhoneCall,
      title: 'Call Us 24/7',
      desc: "Speak directly to an experienced Melbourne electrician, not an offshore call center. We'll diagnose your issue over the phone to establish instant safe protocols.",
      hasImage: true,
      imageSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT8utkWYXwwmuWzMWvUZNiG0Ij0F5M7JJPvZtk-5jUADd78-8EaGDMUuWP1XcFSQqdj6A6Uqwylnpr0mEB69zNBiy65_nH2925rPyZMXGqP9KTdzI-ofsF2FryLuAmnB9KrXfj1G4HqPaj0_T2QXDmLogoD6LJOWVykintf0YJ8pgAmSE8BL5FI4r-jJKPm8dprxUEgBTjAtFsW8B8SQM7Dp_ZcFNGJ9x9KE8yRVV4cqCrIaDGaSIwB8-cu-7b11UrfIdb-33pUGw',
      imageAlt: 'Fully equipped FluxOS dispatch emergency van',
    },
    {
      step: '2',
      icon: Truck,
      title: 'Immediate Dispatch',
      desc: 'Our nearest fully stocked GPS-tracked service van is immediately routed to your precise location. We carry 95% of common parts on-board to solve repairs on the first visit.',
      hasImage: false,
    },
    {
      step: '3',
      icon: Sparkles,
      title: 'Problem Solved Safely',
      desc: 'Our electrician secures the hazard, provides a firm fixed price quote, and performs certified code-compliant work. You get a safety compliance certificate for your records.',
      hasImage: false,
    },
  ];

  return (
    <section id="how-it-works" className="bg-brand-navy-light py-20 relative overflow-hidden">
      {/* Decorative timeline wire */}
      <div className="absolute top-[40%] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-orange/50 via-brand-yellow/30 to-emerald-500/50 hidden lg:block -z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-brand-yellow" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-yellow">
              How It Works
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            How we fix your problem fast
          </h2>
          <p className="text-gray-400 font-sans text-base">
            From the moment you hear the pop or lose power, here is exactly how we safeguard your Melbourne home or business.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {steps.map((st, idx) => (
            <motion.div
              key={st.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="flex flex-col items-start bg-brand-navy border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/10 transition-all duration-300 relative group"
            >
              {/* Image element on top of Step 1 as requested by screenshots */}
              {st.hasImage && st.imageSrc && (
                <div className="w-full mb-6 rounded-xl overflow-hidden border border-white/10 shadow-lg relative aspect-16/10">
                  <img
                    src={st.imageSrc}
                    alt={st.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 bg-brand-yellow text-brand-navy font-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded-md tracking-wider shadow-md">
                    First Visit Fix
                  </div>
                </div>
              )}

              {/* Step indicator header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center font-display text-lg font-black text-brand-navy glow-yellow">
                  {st.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-navy-light border border-white/10 flex items-center justify-center text-white">
                  <st.icon className="w-5 h-5 text-brand-yellow" />
                </div>
              </div>

              {/* Heading */}
              <h3 className="font-display text-xl font-bold text-white mb-3">
                {st.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed text-left">
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
