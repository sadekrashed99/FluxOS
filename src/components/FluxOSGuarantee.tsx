import { ShieldCheck, Zap, BadgeCheck } from 'lucide-react';

interface FluxOSGuaranteeProps {
  onOpenQuote: () => void;
}

export default function FluxOSGuarantee({ onOpenQuote }: FluxOSGuaranteeProps) {
  return (
    <section
      id="fluxos-guarantee-section"
      className="py-[70px] md:py-[100px] relative overflow-hidden"
      style={{
        backgroundColor: '#0D1B2A',
        borderTop: '4px solid #FF4713',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section Label */}
        <p
          className="uppercase text-center font-sans tracking-widest"
          style={{
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '3px',
            color: '#FF4713',
            marginBottom: '16px',
          }}
        >
          OUR PROMISE TO YOU
        </p>

        {/* Headline */}
        <h2
          className="font-display font-black text-center text-[36px] md:text-[52px]"
          style={{
            color: '#FFFFFF',
            marginBottom: '16px',
            lineHeight: 1.1,
          }}
        >
          The FluxOS Guarantee
        </h2>

        {/* Subheadline */}
        <p
          className="text-center font-sans max-w-3xl mx-auto"
          style={{
            fontSize: '20px',
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '64px',
          }}
        >
          Three promises we make to every Melbourne household. No exceptions.
        </p>

        {/* 3 Guarantee Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div
            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-102"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.10)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              borderRadius: '16px',
              padding: '48px 36px',
            }}
          >
            <ShieldCheck className="w-14 h-14 text-[#FF4713] stroke-[1.2]" />
            <h3
              className="font-display"
              style={{
                fontSize: '26px',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: '20px 0 14px',
                lineHeight: 1.2,
              }}
            >
              No Fix No Fee
            </h3>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.70)',
                lineHeight: 1.7,
              }}
            >
              If our electrician arrives and can't resolve your electrical emergency, you pay absolutely nothing. Zero. We take the risk — not you.
            </p>
          </div>

          {/* Card 2 (HERO) */}
          <div
            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-102 relative"
            style={{
              backgroundColor: 'rgba(255, 71, 19, 0.10)',
              border: '1px solid rgba(255, 71, 19, 0.50)',
              borderRadius: '16px',
              padding: '48px 36px',
              boxShadow: '0 0 40px rgba(255, 71, 19, 0.12)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <Zap className="w-14 h-14 text-[#FFD600] stroke-[1.2]" />
            <h3
              className="font-display"
              style={{
                fontSize: '26px',
                fontWeight: 800,
                color: '#FFD600',
                margin: '20px 0 14px',
                lineHeight: 1.2,
              }}
            >
              60-Minute Response
            </h3>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.70)',
                lineHeight: 1.7,
              }}
            >
              Our electrician will be at your door within 60 minutes of your call — guaranteed. If we're late, $50 comes straight off your bill. No questions asked.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="flex flex-col items-center text-center transition-transform duration-300 hover:scale-102"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.10)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              borderRadius: '16px',
              padding: '48px 36px',
            }}
          >
            <BadgeCheck className="w-14 h-14 text-[#059669] stroke-[1.2]" />
            <h3
              className="font-display"
              style={{
                fontSize: '26px',
                fontWeight: 800,
                color: '#FFFFFF',
                margin: '20px 0 14px',
                lineHeight: 1.2,
              }}
            >
              Lifetime Workmanship
            </h3>
            <p
              style={{
                fontSize: '16px',
                color: 'rgba(255, 255, 255, 0.70)',
                lineHeight: 1.7,
              }}
            >
              Every repair and installation we complete is guaranteed for the lifetime of the work. If anything we fix ever fails, we return and fix it free of charge.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onOpenQuote}
          className="flex items-center justify-center w-full sm:w-auto text-center font-sans transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          style={{
            backgroundColor: '#FF4713',
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: 700,
            padding: '20px 56px',
            borderRadius: '8px',
            border: 'none',
            marginTop: '64px',
            marginLeft: 'auto',
            marginRight: 'auto',
            boxShadow: '0 8px 32px rgba(255, 71, 19, 0.35)',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#e03d0f';
            e.currentTarget.style.boxShadow = '0 12px 40px rgba(255, 71, 19, 0.45)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#FF4713';
            e.currentTarget.style.boxShadow = '0 8px 32px rgba(255, 71, 19, 0.35)';
          }}
        >
          <Zap className="w-5 h-5 text-[#FFD600] stroke-[2] mr-2 inline-block align-middle" />
          Get Your Emergency Fixed Now
        </button>
      </div>
    </section>
  );
}
