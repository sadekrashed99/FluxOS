import { Shield, Sparkles, Truck, Star, CircleDollarSign } from 'lucide-react';

export default function TrustStrip() {
  const credentials = [
    { icon: Shield, label: 'Fully Licensed', sub: 'A-Grade Electricians' },
    { icon: Sparkles, label: '$20M Insurance', sub: 'Public Liability Protected' },
    { icon: Truck, label: 'Local Vans On Standby', sub: 'Strategic Hubs' },
    { icon: Star, label: '4.9/5 Rating', sub: '1,000+ Happy Customers' },
    { icon: CircleDollarSign, label: 'Fixed Upfront Costs', sub: 'No Sudden Surprises' },
  ];

  return (
    <div id="trust-strip" className="bg-brand-yellow py-6 border-y border-brand-yellow/30 relative z-10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-6 gap-x-4 justify-items-center items-center">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 text-brand-navy text-left ${
                idx === 4 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center shrink-0">
                <cred.icon className="w-5.5 h-5.5 text-brand-navy stroke-[2.2]" />
              </div>
              <div>
                <p className="font-display font-black text-sm md:text-base leading-tight uppercase tracking-tight">
                  {cred.label}
                </p>
                <p className="font-sans text-[10px] md:text-xs text-brand-navy/85 font-medium">
                  {cred.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
