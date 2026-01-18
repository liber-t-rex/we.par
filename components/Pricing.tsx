import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Pricing: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 px-6 bg-emerald-950 text-stone-100 text-center relative overflow-hidden">
      <div 
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto space-y-8 transition-all duration-1000 ${
           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="font-serif text-3xl md:text-5xl text-white">Le Pack Monopole</h2>
        <p className="text-emerald-200/80 text-lg font-light">
          Weed.paris + Smoke.paris
        </p>
        
        <div className="py-8">
             <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">Mise à prix d'ouverture</p>
             <p className="font-serif text-6xl md:text-8xl text-white">9 000 €</p>
        </div>
      </div>
      
      {/* Texture overlay using CSS pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H22v-2h-2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
      </div>
    </section>
  );
};