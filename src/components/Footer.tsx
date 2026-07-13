import { Bolt, Mail, Phone, MapPin } from 'lucide-react';
import ElectricBrandmark from './ElectricBrandmark';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-brand-footer pt-16 pb-24 md:pb-16 border-t border-white/5 relative z-10 text-left">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Brand & Desc */}
          <div className="flex flex-col items-start">
            <a
              id="footer-logo"
              href="#"
              className="group flex items-center gap-3 font-display text-2xl font-black text-white tracking-tight mb-4"
            >
              <ElectricBrandmark size="sm" />
              <span>FluxOS</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Melbourne's most trusted 24/7 emergency electrical response team. Certified A-Grade electricians dispatched instantly to secure and restore your home safety.
            </p>
            <p className="text-xs text-gray-500 font-mono">
              REC #34821 | Licensed VIC Energy Safe
            </p>
          </div>

          {/* Col 2: Rapid Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Emergency Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#services" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Power Outage Repair
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Switchboard Troubleshooting
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Tripping RCD Switches
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-brand-yellow transition-colors">
                  Storm Damage Isolation
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="flex flex-col items-start">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4.5 h-4.5 text-brand-yellow shrink-0" />
                <a href="tel:1300358967" className="hover:text-brand-yellow transition-colors font-bold text-white">
                  Call Now
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4.5 h-4.5 text-brand-yellow shrink-0" />
                <a href="mailto:emergency@fluxos.com.au" className="hover:text-brand-yellow transition-colors">
                  emergency@fluxos.com.au
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4.5 h-4.5 text-brand-yellow shrink-0 mt-0.5" />
                <span>Greater Melbourne Metro, Victoria</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Operations & Trust */}
          <div className="flex flex-col items-start">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">
              Response Hours
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              We operate <strong>24 hours a day, 7 days a week, 365 days a year</strong>. Our dispatch team is active through weekends and all major public holidays.
            </p>
            <div className="flex gap-2.5 items-center">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                Vans fully active now
              </span>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal line */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} FluxOS Electricians. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Victorian Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
