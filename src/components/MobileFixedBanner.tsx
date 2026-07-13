import { Phone, Calendar } from 'lucide-react';

interface MobileFixedBannerProps {
  onOpenQuote: () => void;
}

export default function MobileFixedBanner({ onOpenQuote }: MobileFixedBannerProps) {
  return (
    <div
      id="mobile-fixed-cta-banner"
      className="md:hidden fixed bottom-0 left-0 w-full bg-brand-navy/95 border-t border-white/10 px-4 py-3 z-30 backdrop-blur-md shadow-[0_-5px_20px_rgba(0,0,0,0.5)]"
    >
      <div className="grid grid-cols-2 gap-3.5">
        {/* Direct Call Button */}
        <a
          id="mobile-banner-call-link"
          href="tel:1300358967"
          className="flex items-center justify-center gap-2 bg-brand-orange text-white font-sans text-sm font-extrabold uppercase py-3.5 rounded-xl transition-all shadow-[0_2px_10px_rgba(255,71,19,0.3)] active:scale-97 text-center"
        >
          <Phone className="w-4 h-4 fill-white text-white animate-bounce" />
          Call Now
        </a>

        {/* Callback request button */}
        <button
          id="mobile-banner-quote-btn"
          onClick={onOpenQuote}
          className="flex items-center justify-center gap-2 bg-brand-navy-light border border-white/10 text-brand-yellow font-sans text-sm font-extrabold uppercase py-3.5 rounded-xl transition-all active:scale-97 cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          Book Callback
        </button>
      </div>
    </div>
  );
}
