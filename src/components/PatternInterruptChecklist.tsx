import { useState } from 'react';
import { motion } from 'motion/react';
import { Zap } from 'lucide-react';

export default function PatternInterruptChecklist() {
  const items = [
    'Lights flickering or cutting out without warning',
    'Burning smell near power points or the switchboard',
    'Sparking or blackened power outlet',
    'Circuit breaker keeps tripping or won\'t reset',
    'Power points or switches feel hot to touch',
    'Complete power loss to part of your home',
    'Buzzing or humming from walls, ceiling or switchboard',
    'Water has come into contact with electrical fittings',
  ];

  const [checkedState, setCheckedState] = useState<boolean[]>(new Array(8).fill(false));

  const handleToggle = (index: number) => {
    const newState = [...checkedState];
    newState[index] = !newState[index];
    setCheckedState(newState);
  };

  return (
    <section
      id="danger-checklist-section"
      className="py-16 md:py-20 relative overflow-hidden"
      style={{
        backgroundColor: '#0D1B2A',
        borderTop: '4px solid #FF4713',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 relative z-10">
        {/* Section label */}
        <p
          className="uppercase tracking-widest text-center"
          style={{
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '3px',
            color: '#FF4713',
            marginBottom: '16px',
          }}
        >
          DANGER CHECKLIST
        </p>

        {/* Headline */}
        <h2
          style={{
            color: '#FFFFFF',
            marginBottom: '8px',
          }}
          className="text-[30px] md:text-[42px] font-display font-black text-center text-white"
        >
          Is This Happening In Your Home Right Now?
        </h2>

        {/* Subheadline */}
        <p
          className="text-center font-sans"
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '48px',
          }}
        >
          Tick every box that applies:
        </p>

        {/* Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 md:gap-x-16 gap-y-5">
          {items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleToggle(idx)}
              className="flex items-start gap-3.5 cursor-pointer select-none group"
            >
              {/* Custom Checkbox */}
              <div
                className="flex items-center justify-center shrink-0 transition-all duration-150"
                style={{
                  width: '24px',
                  height: '24px',
                  border: '2px solid #FF4713',
                  borderRadius: '4px',
                  backgroundColor: checkedState[idx] ? '#FF4713' : 'transparent',
                }}
              >
                {checkedState[idx] && (
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                )}
              </div>

              {/* Label */}
              <span
                style={{
                  fontSize: '17px',
                  color: '#FFFFFF',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
                className="group-hover:text-[#FF4713]/90 transition-colors"
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Urgency statement */}
        <div
          style={{
            backgroundColor: 'rgba(255, 71, 19, 0.12)',
            borderLeft: '4px solid #FF4713',
            borderRadius: '8px',
            padding: '20px 24px',
            marginTop: '40px',
          }}
          className="text-left"
        >
          <p
            style={{
              fontSize: '18px',
              color: '#FFFFFF',
              fontWeight: 600,
              lineHeight: 1.6,
            }}
          >
            If you ticked even ONE of these — you have an electrical emergency. Every minute you wait increases the risk of fire, electrocution, or total power failure.
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="tel:1300358967"
          className="flex items-center justify-center w-fit text-center select-none font-sans transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
          style={{
            backgroundColor: '#FF4713',
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: 800,
            padding: '18px 48px',
            borderRadius: '8px',
            border: 'none',
            marginTop: '32px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <Zap className="w-5 h-5 text-white stroke-[2] mr-2 inline-block align-middle" />
          Call Now — 1300 358 967
        </a>
      </div>
    </section>
  );
}
