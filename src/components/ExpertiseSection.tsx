import { motion } from 'motion/react';
import {
  PowerOff,
  Cpu,
  BellRing,
  Activity,
  Zap,
  CloudRain,
  Lightbulb,
  Flame,
  Wrench,
  HelpCircle,
} from 'lucide-react';

interface ExpertiseSectionProps {
  onOpenQuote: (issue?: string) => void;
}

export default function ExpertiseSection({ onOpenQuote }: ExpertiseSectionProps) {
  const services = [
    {
      icon: PowerOff,
      title: 'Complete Power Outages',
      desc: 'Restoring power when your safety switch trips, main fuse blows, or service line drops.',
      issueName: 'Complete Power Outage',
    },
    {
      icon: Cpu,
      title: 'Switchboard Upgrades',
      desc: 'Replacing outdated ceramic fuses with modern circuit breakers and RCD safety switches.',
      issueName: 'Sparking Switchboard / Fuse Box',
    },
    {
      icon: BellRing,
      title: 'Screeching Smoke Alarms',
      desc: 'Replacing, repairing, and silencing faulty, out-of-date, or constantly chirping alarms.',
      issueName: 'Burning Smell / Smoke',
    },
    {
      icon: Activity,
      title: 'Exposed Wiring Hazards',
      desc: 'Immediately securing and insulating loose or exposed live wires to prevent shocks.',
      issueName: 'Exposed Live Wiring',
    },
    {
      icon: Zap,
      title: 'Tripping Safety Switches',
      desc: 'Finding and isolating the appliance or fault triggering your safety switch or RCD.',
      issueName: 'Tripping Safety Switch',
    },
    {
      icon: CloudRain,
      title: 'Storm & Water Intrusion',
      desc: 'Isolating flooded, dripping, or rain-damaged circuits so the rest of your home remains powered.',
      issueName: 'Storm / Water Damage to Power',
    },
    {
      icon: Lightbulb,
      title: 'Flickering Lights & Buzzing',
      desc: 'Investigating bad connections behind fixtures or sockets causing flickering or humming.',
      issueName: 'Flickering Lights / Outlets',
    },
    {
      icon: Flame,
      title: 'Hot or Sparking Outlets',
      desc: 'Replacing melted, scorched, or hot sockets before they spark into active structural fires.',
      issueName: 'Burning Smell / Smoke',
    },
    {
      icon: Wrench,
      title: 'Appliance Electrical Faults',
      desc: 'Securing oven, stove, hot water service, or heating connections that fail or trip mains.',
      issueName: 'Other Urgency',
    },
  ];

  return (
    <section id="services" className="bg-slate-50 py-20 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-1/2 left-0 w-[30%] h-[60%] bg-brand-orange/[0.01] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-orange font-mono text-sm font-bold uppercase tracking-widest block mb-2">
            Our Core Expertise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight mb-4">
            Emergency Services We Handle
          </h2>
          <p className="text-gray-600 font-sans text-base">
            No job is too simple or complex. Our qualified electricians arrive armed with professional diagnostics tools to solve any risk.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((srv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.04, duration: 0.5 }}
              onClick={() => onOpenQuote(srv.issueName)}
              className="group bg-white border border-slate-200/80 rounded-2xl p-6 hover:border-brand-orange/30 hover:shadow-md hover:scale-101 transition-all duration-300 cursor-pointer text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-brand-orange/5 border border-brand-orange/15 flex items-center justify-center text-brand-orange mb-5 shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                  <srv.icon className="w-5.5 h-5.5" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-orange transition-colors">
                  {srv.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {srv.desc}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-brand-orange uppercase tracking-wider mt-2 opacity-90 group-hover:opacity-100 transition-opacity">
                <span>Request Urgent Service</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom prompt */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-white border border-slate-200/85 rounded-2xl p-6 max-w-3xl mx-auto shadow-sm">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
              <HelpCircle className="w-5 h-5" />
            </div>
            <p className="text-brand-navy text-sm font-bold tracking-tight">Need something else?</p>
          </div>
          <p className="text-gray-600 text-sm text-center sm:text-left">
            Our vans are equipped to handle any unexpected light-commercial or residential emergency. Ask us now.
          </p>
          <button
            id="expertise-ask-btn"
            onClick={() => onOpenQuote('Other Urgency')}
            className="bg-transparent border border-brand-orange hover:bg-brand-orange/5 text-brand-orange text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-lg transition-all font-bold cursor-pointer hover:scale-102 active:scale-98"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
