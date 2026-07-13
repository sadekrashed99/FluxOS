import React from 'react';

interface ElectricBrandmarkProps {
  size?: 'sm' | 'md' | 'lg';
}

export default function ElectricBrandmark({ size = 'md' }: ElectricBrandmarkProps) {
  const containerClasses = {
    sm: 'w-8 h-8 rounded-lg',
    md: 'w-10 h-10 rounded-xl',
    lg: 'w-12 h-12 rounded-2xl',
  };

  const svgSize = {
    sm: 'w-4 h-4',
    md: 'w-5.5 h-5.5',
    lg: 'w-7 h-7',
  };

  return (
    <div className="flex items-center justify-center shrink-0">
      {/* Flat solid yellow container with zero animations, glow, or gradients */}
      <div 
        className={`${containerClasses[size]} bg-[#FFD600] flex items-center justify-center`}
      >
        {/* Simple flat solid navy lightning bolt */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`${svgSize[size]} text-[#0D1B2A]`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
        </svg>
      </div>
    </div>
  );
}

