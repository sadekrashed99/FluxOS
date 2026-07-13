import { Phone, Mail, Clock } from 'lucide-react';

interface FinalCTAProps {
  onOpenQuote: () => void;
}

export default function FinalCTA({ onOpenQuote }: FinalCTAProps) {
  return (
    <section
      id="final-cta"
      className="relative bg-brand-navy py-24 md:py-32 overflow-hidden text-center"
    >
      {/* Background Circuit Texture Pattern with low opacity overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH6aynKRhNXcAaIFCrY9N346xSvqKm__yVzgffvhoGSzXKRXRfgkZcMQ1_4bNFuzmQhifEkzdoSmEDMAtEGiaZovmaAF-yEjIXAsaffhEflbCxhX5CoEflpHakz-oSI5LwuLqNjFei2JRuhZH5uMXQBp0eIPGfMuq0J7RReGZft55RHm2KikVaKPR5ZNzS-87Bd-w2SvK6_m_unf6cU8C21fFovEN3UTq3phLAfnLuZ96ywrpx8jukBLmpsnNPrbw6Fnjq61C3eMM"
          alt="Circuit pattern background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-15 filter brightness-50"
        />
        {/* Navy Overlay to blend and protect contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/90 via-brand-navy/85 to-brand-navy" />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 flex flex-col items-center">
        {/* Pulse Indicator */}
        <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full px-4 py-2 mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
          </span>
          <span className="font-sans text-xs font-bold uppercase tracking-widest text-brand-orange">
            9 Dispatchers Online Now
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
          Don’t wait until morning.
        </h2>

        {/* Subhead */}
        <p className="text-gray-300 font-sans text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-10">
          Electrical threats escalate without warning. Our emergency response team is awake, fully active, and standing by to restore safety to your property right now.
        </p>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
          <a
            id="final-call-btn"
            href="tel:1300358967"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-brand-yellow hover:bg-brand-yellow/95 text-brand-navy font-sans text-base font-black uppercase tracking-wider px-8 py-5 rounded-xl transition-all shadow-[0_4px_20px_rgba(255,214,0,0.35)] hover:scale-102 active:scale-98 glow-yellow"
          >
            <Phone className="w-5 h-5 fill-brand-navy text-brand-navy animate-pulse" />
            Call Now
          </a>

          <button
            id="final-callback-btn"
            onClick={onOpenQuote}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border-2 border-white hover:bg-white/10 text-white font-sans text-base font-bold uppercase tracking-wider px-8 py-4.5 rounded-xl transition-all hover:scale-102 active:scale-98"
          >
            <Mail className="w-5 h-5" />
            Request Fast Callback
          </button>
        </div>

        {/* Subtext info */}
        <div className="flex items-center gap-2 mt-8 text-gray-400 text-xs">
          <Clock className="w-4 h-4 text-brand-yellow" />
          <span>Average telephone response delay is under 45 seconds</span>
        </div>
      </div>
    </section>
  );
}
