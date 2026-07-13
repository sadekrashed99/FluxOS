import { motion } from 'motion/react';
import { Clock, CircleDollarSign, Award, PackageCheck, ShieldAlert, Sparkles, Star } from 'lucide-react';

export default function WhyFluxOS() {
  const reasons = [
    {
      icon: Clock,
      title: 'True 24/7 Availability',
      desc: "We don't just put '24/7' on our website. We actually answer the phone, book jobs, and dispatch vans at 3:00 AM on rainy Sundays.",
    },
    {
      icon: CircleDollarSign,
      title: 'Fixed Upfront Pricing',
      desc: "No sudden surprises or ballooning labor charges. You'll receive and approve a firm, fixed quote on-site before we pick up any tool.",
    },
    {
      icon: Award,
      title: 'Lifetime Workmanship Warranty',
      desc: 'We guarantee every repair. In the rare event that our electrical workmanship fails or acts up, we will return and fix it completely free of charge.',
    },
    {
      icon: PackageCheck,
      title: '95% On-Board Stock Rate',
      desc: "Our vehicles are 'rolling warehouses' packed with premium safety switches, circuit breakers, and switches to complete repairs in one swift visit.",
    },
    {
      icon: ShieldAlert,
      title: 'Safety Standard Adherence',
      desc: 'We enforce absolute compliance with Victorian safety standards (AS/NZS 3000). Every single repair receives a formal Certificate of Electrical Safety.',
    },
    {
      icon: Sparkles,
      title: 'Boot Covers & Mess Cleanup',
      desc: 'We treat your property with absolute respect. We wear protective boot covers, lay drop sheets, and tidy up so you’re left with a clean, safe space.',
    },
  ];

  return (
    <section id="why-fluxos" className="bg-brand-navy py-20 relative overflow-hidden">
      {/* Decorative gradient shadows */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-orange/[0.03] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-10%] w-[40%] h-[40%] bg-brand-yellow/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full mb-4">
            <Star className="w-4 h-4 text-brand-orange fill-brand-orange" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-orange">
              Our Professional Standard
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Melbourne trusts FluxOS
          </h2>
          <p className="text-gray-400 font-sans text-base">
            We don't cut corners when your home, family, or business is on the line. Experience premium electrical service.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="bg-brand-navy-light/40 border border-white/5 rounded-2xl p-6 hover:bg-brand-navy-light/60 hover:border-white/10 transition-all duration-300 flex flex-col items-start text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow mb-5 shrink-0">
                <item.icon className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
