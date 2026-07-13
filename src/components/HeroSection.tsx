import { motion } from 'motion/react';
import { Zap, ShieldCheck, Star, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuote: () => void;
}

export default function HeroSection({ onOpenQuote }: HeroSectionProps) {
  const chipBaseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(255, 255, 255, 0.07)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    borderRadius: '50px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#FFFFFF',
    letterSpacing: '0.2px',
  };

  return (
    <section 
      id="hero-section" 
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0D1B2A] pt-20 md:pt-24 lg:pt-20 xl:pt-24"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.4); opacity: 0.5; }
        }
        @keyframes shine {
          0% { left: -100%; }
          40%, 100% { left: 160%; }
        }
        .animate-pulse-custom {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-shine-custom {
          position: relative;
          overflow: hidden;
        }
        .animate-shine-custom::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: skewX(-20deg);
          animation: shine 3.5s ease-in-out infinite;
        }
      ` }} />

      {/* Layer 1 — Hero photograph (bottom) */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat bg-center lg:bg-right lg:bg-fixed"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dk7z1b7k7/image/upload/v1783942859/gy25bxp60cu61b1vjbdh.webp')`,
        }}
      />

      {/* Layer 2 — Directional dark gradient (middle) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, rgba(13, 27, 42, 0.97) 0%, rgba(13, 27, 42, 0.88) 45%, rgba(13, 27, 42, 0.45) 75%, rgba(13, 27, 42, 0.15) 100%)'
        }}
      />

      {/* Layer 3 — Noise/grain texture (top, decorative) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.025
        }}
      />

      {/* Subtle radial glow in the bottom-left corner */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 0% 100%, rgba(255,71,19,0.12) 0%, transparent 60%)'
        }}
      />

      {/* Content wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full flex-grow flex items-center py-10 sm:py-16 md:py-8 lg:py-4 xl:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-8 lg:gap-12 items-center">
          {/* Left zone: 55% width */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* LIVE STATUS INDICATOR */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 md:gap-2 mb-4 sm:mb-5 md:mb-3 select-none px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[11px] md:text-[13px] font-semibold text-white tracking-widest uppercase bg-[#059669]/15 border border-[#059669]/40 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2 md:h-2.5 md:w-2.5">
                <span className="animate-pulse-custom absolute inline-flex h-full w-full rounded-full bg-[#059669] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 md:h-2.5 md:w-2.5 bg-[#059669]"></span>
              </span>
              <span>LIVE · Emergency Response Active — Melbourne</span>
            </motion.div>

            {/* HEADLINE */}
            <motion.h1
              id="hero-headline"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-black text-white leading-[1.05] tracking-tight text-[36px] sm:text-[42px] md:text-[48px] lg:text-[48px] xl:text-[58px] mb-4 sm:mb-5 md:mb-3.5"
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              Melbourne’s Emergency <br className="hidden sm:inline" />
              Electrician. <br className="hidden sm:inline" />
              <span 
                style={{
                  background: 'linear-gradient(90deg, #FFD600 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                On-Site in 60 Minutes.
              </span>
            </motion.h1>

            {/* SUBHEADLINE */}
            <motion.p
              id="hero-subtitle"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-sans text-[15px] sm:text-[17px] lg:text-[18px] font-normal leading-relaxed tracking-tight mx-auto lg:mx-0 mb-5 sm:mb-6 md:mb-4 lg:mb-4 xl:mb-5"
              style={{
                color: 'rgba(255,255,255,0.70)',
                maxWidth: '520px',
              }}
            >
              Guaranteed response or $50 off your bill — available 24/7, every day of the year.
            </motion.p>

            {/* PRIMARY CTA BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="w-full sm:w-auto"
            >
              <button
                id="hero-primary-cta"
                onClick={onOpenQuote}
                className="animate-shine-custom group select-none font-sans cursor-pointer flex items-center justify-center gap-2.5 transition-all duration-300 w-full sm:w-auto px-6 py-3.5 sm:px-10 sm:py-4 lg:px-8 lg:py-3.5 xl:px-10 xl:py-4.5 text-sm sm:text-base lg:text-[16px] xl:text-[18px] font-bold rounded-xl mb-6 sm:mb-8 lg:mb-4 xl:mb-5"
                style={{
                  background: 'linear-gradient(135deg, #FF4713 0%, #FF6035 100%)',
                  color: '#FFFFFF',
                  letterSpacing: '-0.3px',
                  border: 'none',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3), 0 12px 40px rgba(255, 71, 19, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08) inset',
                  transition: 'all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 8px rgba(0,0,0,0.3), 0 20px 60px rgba(255,71,19,0.55), 0 0 0 1px rgba(255,255,255,0.1) inset';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3), 0 12px 40px rgba(255, 71, 19, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.08) inset';
                }}
              >
                <Zap style={{ width: '20px', height: '20px', color: '#FFD600', strokeWidth: 2.5 }} />
                <span>Get an Electrician Now</span>
              </button>
            </motion.div>

            {/* TRUST CHIPS */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="inline-flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 w-full mb-3 lg:mb-4"
            >
              {/* Chip 1 */}
              <div className="inline-flex items-center gap-1.5 md:gap-2 bg-white/7 backdrop-blur-md border border-[#FFD600]/25 rounded-full px-2.5 py-1.5 md:px-4 md:py-2.5 text-[11px] sm:text-xs md:text-sm font-semibold text-white tracking-wide">
                <Zap style={{ width: '14px', height: '14px', color: '#FFD600', strokeWidth: 2.5, fill: '#FFD600' }} />
                <span>60-Min Response Guarantee</span>
              </div>
              {/* Chip 2 */}
              <div className="inline-flex items-center gap-1.5 md:gap-2 bg-white/7 backdrop-blur-md border border-[#059669]/30 rounded-full px-2.5 py-1.5 md:px-4 md:py-2.5 text-[11px] sm:text-xs md:text-sm font-semibold text-white tracking-wide">
                <ShieldCheck style={{ width: '14px', height: '14px', color: '#059669', strokeWidth: 2.5 }} />
                <span>No Fix No Fee</span>
              </div>
              {/* Chip 3 */}
              <div className="inline-flex items-center gap-1.5 md:gap-2 bg-white/7 backdrop-blur-md border border-[#FFD600]/20 rounded-full px-2.5 py-1.5 md:px-4 md:py-2.5 text-[11px] sm:text-xs md:text-sm font-semibold text-white tracking-wide">
                <Star style={{ width: '14px', height: '14px', color: '#FFD600', strokeWidth: 0, fill: '#FFD600' }} />
                <span>4.9 · 847 Reviews</span>
              </div>
            </motion.div>



          </div>

          {/* Right zone: breathes empty on desktop */}
          <div className="lg:col-span-5 hidden lg:block" />
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div 
        className="absolute bottom-[90px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center text-[rgba(255,255,255,0.3)] animate-bounce select-none pointer-events-none hidden lg:flex"
      >
        <ChevronDown className="w-6 h-6 stroke-[1.5]" />
      </div>

      {/* HERO STATS BAR */}
      <div 
        className="w-full relative z-10 mt-auto"
        style={{
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '14px 0',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-4 md:gap-y-0 items-center justify-center">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#FFD600] tracking-tight leading-none">
                &lt; 60 min
              </span>
              <span className="text-[10px] md:text-[12px] font-medium text-white/50 uppercase tracking-wider mt-1 md:mt-1.5 leading-tight text-center">
                Average Response Time
              </span>
            </div>

            {/* Divider 1 */}
            <div className="hidden md:block h-10 w-px bg-[rgba(255,255,255,0.08)]"></div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#FFD600] tracking-tight leading-none">
                4.9 ★
              </span>
              <span className="text-[10px] md:text-[12px] font-medium text-white/50 uppercase tracking-wider mt-1 md:mt-1.5 leading-tight text-center">
                Star Rating (847 reviews)
              </span>
            </div>

            {/* Divider 2 */}
            <div className="hidden md:block h-10 w-px bg-[rgba(255,255,255,0.08)]"></div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#FFD600] tracking-tight leading-none">
                100%
              </span>
              <span className="text-[10px] md:text-[12px] font-medium text-white/50 uppercase tracking-wider mt-1 md:mt-1.5 leading-tight text-center">
                Licensed & Insured
              </span>
            </div>

            {/* Divider 3 */}
            <div className="hidden md:block h-10 w-px bg-[rgba(255,255,255,0.08)]"></div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center">
              <span className="text-xl sm:text-2xl md:text-[26px] font-extrabold text-[#FFD600] tracking-tight leading-none">
                24 / 7
              </span>
              <span className="text-[10px] md:text-[12px] font-medium text-white/50 uppercase tracking-wider mt-1 md:mt-1.5 leading-tight text-center">
                Always Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
