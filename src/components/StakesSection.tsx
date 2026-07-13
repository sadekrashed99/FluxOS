import { motion } from 'motion/react';
import { ShieldAlert, XCircle, Siren, FileX } from 'lucide-react';

interface StakesSectionProps {
  onOpenQuote: () => void;
}

export default function StakesSection({ onOpenQuote }: StakesSectionProps) {
  const warnings = [
    {
      icon: Siren,
      title: 'Structural Fire Hazards',
      desc: 'Arcing connections heat up behind plaster walls undetected, eventually igniting surrounding timber studs.',
    },
    {
      icon: FileX,
      title: 'Insurance Voidance',
      desc: 'Doing your own electrical work or employing unlicensed contractors is strictly illegal in Victoria and voids property insurance coverage.',
    },
    {
      icon: XCircle,
      title: 'Total System Failures',
      desc: 'Overloaded circuits destroy appliances, damage high-value hardware, and require expensive whole-house rewiring.',
    },
  ];

  return (
    <section id="stakes-section" className="bg-brand-navy py-20 relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-brand-orange/[0.02] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Visual Image */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                id="stakes-panel-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzlIJYpKJZbxbreBlLIB4kE5BimzbjcWs0z7mCrBCZPaVY0uNdEe7hcl2kNXo2Pih8oOZ4zvmJOmGYEshjtO9FDZLkiLfJ0vqt53oplkRStEyIlPU7ynTV9Bq_FTupVmP9xJryAqM-nzlZqqTGTsHIarkeqPoPhWVL7apb4_Jhf1MB4IwtcN0o-LM_tEuT6YMux2Q3p2DqAkiGdFKFw4raogIfh205SQOLRdTTm_Zt-Spn9ZIymrnHeoeVZvpbgNUifZHuP2LSU_o"
                alt="Emergency Switchboard Diagnosis"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-4/3 object-cover hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Float Badge */}
            <div className="absolute top-4 right-4 bg-brand-orange/95 backdrop-blur-md border border-white/25 rounded-xl px-4 py-2.5 flex items-center gap-2 shadow-lg">
              <ShieldAlert className="w-5 h-5 text-white animate-pulse" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-white">
                DANGER ZONE
              </span>
            </div>
          </div>

          {/* Right Side: Informative Text */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Warning Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-3.5 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500"></span>
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-red-400">
                DON'T RISK DIY OR DELAYS
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4 text-left">
              Electrical faults don’t fix themselves. <br />
              <span className="text-brand-orange">They escalate.</span>
            </h2>

            {/* Description */}
            <p className="text-gray-300 font-sans text-base leading-relaxed mb-8 text-left">
              Trying to hold off on repairs or taking matters into your own hands is highly dangerous and explicitly illegal under Victorian Safety Regulations. A simple spark can ignite insulation behind walls within minutes. Keep your loved ones protected.
            </p>

            {/* List of Warning Details */}
            <div className="space-y-6 mb-10 w-full">
              {warnings.map((warn, idx) => (
                <div key={idx} className="flex gap-4 items-start text-left">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
                    <warn.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-white">
                      {warn.title}
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">
                      {warn.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Get Professional Help CTA */}
            <button
              id="stakes-cta-btn"
              onClick={onOpenQuote}
              className="w-full sm:w-auto flex items-center justify-center bg-brand-orange hover:bg-brand-orange/90 text-white font-sans text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(255,71,19,0.3)] hover:scale-102 active:scale-98 glow-orange"
            >
              Get Professional Help Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
