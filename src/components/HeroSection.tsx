import { motion } from 'motion/react';
import { Bolt, Phone, ShieldCheck, MapPin, Clock } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  return (
    <section id="hero-section" className="relative bg-brand-navy pt-28 pb-16 md:py-32 overflow-hidden">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-yellow/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.03),rgba(255,255,255,0))]" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Live Badge */}
            <motion.div
              id="hero-badge"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/20 rounded-full px-3.5 py-1.5 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange"></span>
              </span>
              <span className="font-sans text-[11px] md:text-xs font-bold uppercase tracking-widest text-brand-orange">
                24/7 RAPID EMERGENCY RESPONSE
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 text-left"
            >
              Power Out? Switchboard Sparking? <br />
              <span className="text-brand-yellow drop-shadow-[0_2px_10px_rgba(255,214,0,0.15)]">
                We’re Already On Our Way.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              id="hero-subtitle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 font-sans text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl text-left"
            >
              Melbourne's premier emergency electricians. We dispatch fully stocked service vans instantly to secure, diagnose, and solve your electrical threats, any time of day or night.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              id="hero-ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-10"
            >
              <button
                id="hero-quote-btn"
                onClick={onOpenQuote}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orange/95 text-white font-sans text-base font-bold uppercase tracking-wider px-8 py-4.5 rounded-xl transition-all shadow-[0_5px_15px_rgba(255,71,19,0.4)] hover:scale-102 active:scale-98 glow-orange"
              >
                <Bolt className="w-5 h-5 fill-white text-white" />
                Send Electrician Now
              </button>
              <a
                id="hero-call-btn"
                href="tel:1300358967"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-transparent border-2 border-brand-yellow hover:bg-brand-yellow/10 text-brand-yellow font-sans text-base font-bold uppercase tracking-wider px-8 py-4 rounded-xl transition-all font-bold hover:scale-102 active:scale-98"
              >
                <Phone className="w-5 h-5 fill-brand-yellow text-brand-yellow animate-bounce" />
                Call Now
              </a>
            </motion.div>

            {/* Bullet Trust indicators */}
            <motion.div
              id="hero-bullets"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full border-t border-white/10 pt-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-white text-xs font-bold uppercase tracking-wider leading-none">Fully Licensed</p>
                  <p className="text-gray-400 text-[10px] mt-0.5">REC #34821 / $20M Insured</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-white text-xs font-bold uppercase tracking-wider leading-none">Melbourne Owned</p>
                  <p className="text-gray-400 text-[10px] mt-0.5">Fleet strategically placed</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-white text-xs font-bold uppercase tracking-wider leading-none">60-Min Target</p>
                  <p className="text-gray-400 text-[10px] mt-0.5">Rapid dispatch guarantee</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              id="hero-img-container"
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl glow-yellow max-w-md mx-auto lg:max-w-none"
            >
              {/* Electrician at night image */}
              <img
                id="hero-main-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIrlieKSvQPbEuLpa10rXz9WUSlYLTQVEqDXAxcp6DMiqT8RB_DsRx3MIBHyIpullZhB6rmbex3G_XYvPMfatLm5Awj9jZL7faz-jt7MswDoTrRpAjyA07GC4YvicR_x67Osc9hUCb8hfv2LN5dKBoAqglYoioUmPgmuouhdSSRS3ThOzR-vskXC5_mU9AouI7rAcMUV0YRms62_PXp5e7sdev7e7rTm3Pr0U_rD3L_xHD0URmUAzkN_C3m8fiMyCoRKAg5NV48JU"
                alt="FluxOS Emergency Electrician arriving at night"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-4/3 object-cover hover:scale-105 transition-transform duration-700"
              />

              {/* Status Indicator pill on image */}
              <div className="absolute bottom-4 left-4 bg-brand-navy/90 backdrop-blur-md border border-white/10 rounded-xl px-4 py-2.5 flex items-center gap-2.5">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </div>
                <p className="text-[11px] font-mono font-bold tracking-wider text-white uppercase">
                  14 local vans active in VIC
                </p>
              </div>
            </motion.div>

            {/* Glowing accents behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-yellow/10 rounded-full blur-[80px] -z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
