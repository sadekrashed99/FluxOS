import { motion } from 'motion/react';
import { PhoneCall, HelpCircle } from 'lucide-react';

const MovingVanIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Speed lines on the left */}
    <path d="M2 8h3" />
    <path d="M1 12h4" />
    <path d="M2 16h3" />
    {/* Truck main body */}
    <path d="M7 7h8l4 4v6H7V7z" />
    {/* Cabin divider */}
    <path d="M15 7v4h4" />
    {/* Wheels */}
    <circle cx="9.5" cy="17" r="1.5" />
    <circle cx="16.5" cy="17" r="1.5" />
  </svg>
);

const CertificateIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {/* Certificate frame */}
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    {/* Text line representations */}
    <path d="M7 8h10" />
    <path d="M7 12h5" />
    {/* Seal/Badge at the bottom right */}
    <circle cx="15.5" cy="14.5" r="2" />
    <path d="M14.5 16.5l-0.5 2 1.5-0.5 1.5 0.5-0.5-2" />
  </svg>
);

export default function ProcessSection() {
  const steps = [
    {
      step: '1',
      icon: PhoneCall,
      title: 'Call Us 24/7',
      desc: "Speak directly to an experienced Melbourne electrician, not an offshore call center. We'll diagnose your issue over the phone to establish instant safe protocols.",
      hasImage: true,
      imageSrc: 'https://res.cloudinary.com/dk7z1b7k7/image/upload/v1783946835/tyntu63gb7dqkjtfx85w.webp',
      imageAlt: 'Fully equipped FluxOS dispatch emergency van',
      badgeText: 'First Visit Fix',
    },
    {
      step: '2',
      icon: MovingVanIcon,
      title: 'Immediate Dispatch',
      desc: 'Our nearest fully stocked GPS-tracked service van is immediately routed to your precise location. We carry 95% of common parts on-board to solve repairs on the first visit.',
      hasImage: true,
      imageSrc: 'https://res.cloudinary.com/dk7z1b7k7/image/upload/v1783946819/bnnryz013gxiyhyfq8nx.webp',
      imageAlt: 'FluxOS emergency electrical dispatch vehicle arriving on site',
      badgeText: '60 Min ETA',
    },
    {
      step: '3',
      icon: CertificateIcon,
      title: 'Problem Solved Safely',
      desc: 'Our electrician secures the hazard, provides a firm fixed price quote, and performs certified code-compliant work. You get a safety compliance certificate for your records.',
      hasImage: true,
      imageSrc: 'https://res.cloudinary.com/dk7z1b7k7/image/upload/v1783946833/fj1jstl6wt8lu3wjwfax.webp',
      imageAlt: 'Professional A-Grade electrician completing compliant switchboard work',
      badgeText: 'Certified COES',
    },
  ];

  return (
    <section id="how-it-works" className="bg-white py-20 relative overflow-hidden">
      {/* Decorative timeline wire */}
      <div className="absolute top-[35%] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-brand-orange/30 via-brand-yellow/30 to-emerald-500/30 hidden lg:block -z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-brand-orange" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-orange">
              How It Works
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            How we fix your problem fast
          </h2>
          <p className="text-gray-600 font-sans text-base">
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
              className="flex flex-col items-start bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 hover:border-slate-200 hover:shadow-md transition-all duration-300 relative group"
            >
              {/* Image element on top of steps */}
              {st.hasImage && st.imageSrc && (
                <div className="w-full mb-6 rounded-xl overflow-hidden border border-slate-200/60 shadow-sm relative aspect-16/10">
                  <img
                    src={st.imageSrc}
                    alt={st.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 bg-brand-yellow text-brand-navy font-mono text-[10px] font-bold uppercase px-2.5 py-1 rounded-md tracking-wider shadow-md">
                    {st.badgeText}
                  </div>
                </div>
              )}

              {/* Step indicator header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center font-display text-lg font-black text-brand-navy shadow-sm">
                  {st.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
                  <st.icon className="w-5 h-5 text-brand-orange" />
                </div>
              </div>

              {/* Heading */}
              <h3 className="font-display text-xl font-bold text-brand-navy mb-3">
                {st.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed text-left">
                {st.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
