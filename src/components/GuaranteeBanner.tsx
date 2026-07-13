import { ShieldAlert, Receipt, Award } from 'lucide-react';

export default function GuaranteeBanner() {
  const items = [
    {
      icon: ShieldAlert,
      title: 'Fixed Fast',
      desc: "We don't leave until your home is fully safe and power is restored.",
    },
    {
      icon: Receipt,
      title: 'No Hidden Costs',
      desc: 'The price we quote on-site is the exact price you pay. No surprises.',
    },
    {
      icon: Award,
      title: 'Lifetime Warranty',
      desc: 'All of our physical electrical workmanship is guaranteed for life.',
    },
  ];

  return (
    <div id="guarantee-banner" className="bg-brand-orange py-10 relative z-10 overflow-hidden shadow-xl">
      {/* Subtle overlay grid */}
      <div className="absolute inset-0 bg-white/[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 justify-items-center">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 text-left max-w-sm md:max-w-none"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-white shadow-inner">
                <item.icon className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg text-white uppercase tracking-tight leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-white/90 font-medium mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
