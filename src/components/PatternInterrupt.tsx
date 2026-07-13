import { motion } from 'motion/react';
import { PowerOff, Zap, Droplets, AlertOctagon } from 'lucide-react';

interface PatternInterruptProps {
  onOpenQuote: (issue: string) => void;
}

export default function PatternInterrupt({ onOpenQuote }: PatternInterruptProps) {
  const situations = [
    {
      id: 'power_loss',
      icon: PowerOff,
      title: 'Total Power Loss',
      desc: 'The whole house is pitch black, but your neighbors still have their lights on. Food is warming up in the fridge, and devices are dying.',
      issueName: 'Complete Power Outage',
      borderColor: 'group-hover:border-brand-yellow/30',
      glowColor: 'hover:shadow-[0_0_20px_rgba(255,214,0,0.15)]',
    },
    {
      id: 'switchboard',
      icon: Zap,
      title: 'Sparking Switchboard',
      desc: "You've heard a loud pop, noticed glowing embers, seen sparks, or smelled acrid burning plastic coming from your main fuse box or electrical board.",
      issueName: 'Sparking Switchboard / Fuse Box',
      borderColor: 'group-hover:border-brand-orange/30',
      glowColor: 'hover:shadow-[0_0_20px_rgba(255,71,19,0.2)]',
    },
    {
      id: 'water_damage',
      icon: Droplets,
      title: 'Water & Storm Intrusion',
      desc: 'A burst pipe, ceiling leak, or severe rain storm has flooded walls, dripping into power sockets or pooling near active structural wiring.',
      issueName: 'Storm / Water Damage to Power',
      borderColor: 'group-hover:border-teal-500/30',
      glowColor: 'hover:shadow-[0_0_20px_rgba(20,184,166,0.15)]',
    },
  ];

  return (
    <section id="pattern-interrupt" className="bg-brand-navy-light py-20 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full mb-4">
            <AlertOctagon className="w-4 h-4 text-brand-orange" />
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-orange">
              Identify Your Situation
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
            Dealing with an electrical nightmare right now?
          </h2>
          <p className="text-gray-400 font-sans text-base sm:text-lg">
            Electrical threats aren't just frustrating—they carry massive safety risks. If you are experiencing any of the following, you need professional intervention immediately.
          </p>
        </div>

        {/* Situation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {situations.map((sit, idx) => (
            <motion.div
              key={sit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              onClick={() => onOpenQuote(sit.issueName)}
              className={`group relative bg-brand-navy border border-white/5 rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 ${sit.glowColor} hover:border-white/10`}
            >
              {/* Card border accent wrapper */}
              <div className={`absolute inset-0 border border-transparent rounded-2xl transition-colors duration-300 ${sit.borderColor}`} />

              <div className="w-12 h-12 rounded-xl bg-brand-navy-light border border-white/10 flex items-center justify-center text-brand-yellow mb-6 group-hover:bg-brand-navy-light group-hover:border-brand-yellow/30 transition-all duration-300">
                <sit.icon className="w-6 h-6 transition-transform duration-500 group-hover:scale-110" />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">
                {sit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {sit.desc}
              </p>

              <div className="flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-wider mt-auto group-hover:translate-x-1 transition-transform">
                <span>Dispatch Electrician</span>
                <span className="text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
