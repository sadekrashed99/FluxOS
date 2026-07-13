import { motion } from 'motion/react';
import { MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CoverageSection() {
  const regionsLeft = ['CBD & Inner Suburbs', 'Northern Suburbs', 'Eastern Suburbs'];
  const regionsRight = ['South Eastern Suburbs', 'Western Suburbs', 'Mornington Peninsula'];

  return (
    <section id="coverage" className="bg-brand-navy-light py-20 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/2 right-0 w-[40%] h-[50%] bg-brand-yellow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Description Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/20 rounded-full mb-4">
              <MapPin className="w-4 h-4 text-brand-yellow" />
              <span className="font-sans text-xs font-bold uppercase tracking-wider text-brand-yellow">
                Service Boundaries
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-tight">
              We cover all of Greater Melbourne
            </h2>

            <p className="text-gray-300 font-sans text-base leading-relaxed mb-8">
              To guarantee our industry-leading response speed, our fleet of fully-equipped response vans is strategically stationed across key arterial hubs. No matter where you live or run your business in Melbourne, there is always a FluxOS vehicle within driving distance.
            </p>

            {/* Region List Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <ul className="space-y-3.5">
                {regionsLeft.map((reg) => (
                  <li key={reg} className="flex items-center gap-3 text-white text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0" />
                    <span>{reg}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3.5">
                {regionsRight.map((reg) => (
                  <li key={reg} className="flex items-center gap-3 text-white text-sm font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0" />
                    <span>{reg}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick trust prompt */}
            <div className="flex gap-3 bg-brand-navy border border-white/5 rounded-xl p-4 w-full">
              <ShieldCheck className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-wider">Strategic Deployment</p>
                <p className="text-gray-400 text-xs mt-0.5">
                  Vans are equipped with live GPS tracking systems. When you call, we dispatch the exact vehicle closest to your location.
                </p>
              </div>
            </div>
          </div>

          {/* Right Map Image Column */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-brand-navy max-w-md mx-auto lg:max-w-none"
            >
              {/* Melbourne Metro Map Image */}
              <img
                id="coverage-map-img"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFV9jwKq7AWHpeNt6e18ON5ly38SemxTGSVZBjgiXN3PgrFK3QV_N8_TSFLcgGvXIXEVBK-q7_kvy0DuMZ2Mrrx0hQo1b9rdDEsry1m1mVLKKLtDhRV-HKg9EQsK-Ia6D_Zr5L5wU5FT0L4Rj5uSdXojshd6FS8wLvFzo4MoWwanC-X-ecpkNMQsUVHtszdDOhGIDssjmtf5RgqsxYr4DSdsAC0yrveZk-WK9E17eiBvvcsU5nQMFlj4UyawBb2rSxun4z5HK1n4c"
                alt="FluxOS Melbourne Coverage Map"
                referrerPolicy="no-referrer"
                className="w-full h-auto aspect-4/3 object-cover opacity-80"
              />

              {/* Glowing overlay card over map */}
              <div className="absolute inset-x-4 bottom-4 bg-brand-navy/95 border border-white/15 rounded-xl p-4 shadow-xl backdrop-blur-md flex items-center gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0 animate-pulse">
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <div>
                  <p className="text-white text-sm font-bold tracking-tight">Melbourne Metro Area</p>
                  <p className="text-gray-400 text-xs mt-0.5">60-Minute Response Target Guaranteed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
