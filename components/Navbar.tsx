import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Navbar: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <nav 
      ref={ref}
      className={`w-full py-8 px-6 flex justify-center items-center border-b border-stone-200/50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="text-xs tracking-[0.3em] font-semibold text-emerald-900 uppercase">
        Collection .Paris — Édition Limitée
      </div>
    </nav>
  );
};