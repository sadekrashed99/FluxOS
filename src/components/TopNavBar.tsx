import { useState, useEffect } from 'react';
import { Bolt, Menu, X, Phone } from 'lucide-react';

interface TopNavBarProps {
  onOpenQuote: () => void;
}

export default function TopNavBar({ onOpenQuote }: TopNavBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Coverage', href: '#coverage' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
          : 'bg-brand-navy/80 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          id="header-logo-link"
          href="#"
          className="flex items-center gap-2 font-display text-2xl font-black text-white tracking-tight hover:scale-102 transition-transform active:scale-98"
        >
          <div className="w-9 h-9 rounded-lg bg-brand-yellow flex items-center justify-center glow-yellow">
            <Bolt className="w-5.5 h-5.5 text-brand-navy fill-brand-navy" />
          </div>
          <span className="font-display">FluxOS</span>
        </a>

        {/* Desktop Navigation links */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-brand-yellow font-sans text-sm font-semibold tracking-wide transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Call Now Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            id="desktop-header-call-btn"
            href="tel:1300358967"
            className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90 text-white font-sans text-sm font-bold uppercase tracking-wider px-5 py-3 rounded-xl hover:scale-103 active:scale-97 transition-all glow-orange"
          >
            <Phone className="w-4 h-4 fill-white text-white" />
            Call Now
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-drawer-overlay"
          className="md:hidden fixed inset-0 top-[60px] bg-brand-navy/95 backdrop-blur-md z-30 flex flex-col justify-between p-6 border-t border-white/5"
          style={{ height: 'calc(100vh - 60px)' }}
        >
          <div className="flex flex-col gap-6 pt-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-brand-yellow font-display text-2xl font-bold tracking-wide transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3 pb-24">
            <a
              id="mobile-drawer-call-btn"
              href="tel:1300358967"
              className="flex items-center justify-center gap-2.5 bg-brand-orange hover:bg-brand-orange/95 text-white font-sans text-base font-bold uppercase tracking-wider py-4 rounded-xl transition-all shadow-lg font-bold"
            >
              <Phone className="w-4.5 h-4.5 fill-white text-white" />
              Call Now
            </a>
            <button
              id="mobile-drawer-quote-btn"
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className="flex items-center justify-center gap-2.5 bg-transparent border-2 border-brand-yellow hover:bg-brand-yellow/10 text-brand-yellow font-sans text-base font-bold uppercase tracking-wider py-4 rounded-xl transition-all font-bold"
            >
              <Bolt className="w-4.5 h-4.5 fill-brand-yellow text-brand-yellow" />
              Request Fast Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
