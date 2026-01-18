import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  const scrollToRegister = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative pt-20 pb-32 px-6 overflow-hidden text-center min-h-[80vh] flex flex-col justify-center">
      {/* The Aura - Luxury Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-emerald-100/40 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-blob mix-blend-multiply pointer-events-none opacity-60"></div>

      <div 
        ref={ref}
        className={`max-w-4xl mx-auto space-y-8 relative z-10 transition-all duration-1000 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="inline-block py-1 px-3 border border-emerald-900/30 rounded-full text-xs font-medium text-emerald-900 tracking-wider uppercase mb-4 backdrop-blur-sm">
          Vente aux enchères privée
        </span>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-emerald-950 leading-tight">
          L'Autorité Digitale <br/>
          <span className="italic font-light">Absolue.</span>
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
          Deux domaines. Une ville. Un seul propriétaire.<br />
          Soyez l'unique enseigne à posséder les adresses les plus prestigieuses du marché CBD européen.
        </p>

        <div className="pt-8 flex flex-col md:flex-row justify-center gap-8 md:gap-16 items-center">
          <div className="text-center group cursor-default">
            <p className="font-serif text-3xl md:text-4xl text-emerald-900 group-hover:scale-105 transition-transform duration-500">weed.paris</p>
            <div className="h-px w-0 group-hover:w-full bg-emerald-900 transition-all duration-500 mx-auto mt-2"></div>
          </div>
          <span className="text-stone-400 font-serif italic text-xl">&</span>
          <div className="text-center group cursor-default">
            <p className="font-serif text-3xl md:text-4xl text-emerald-900 group-hover:scale-105 transition-transform duration-500">smoke.paris</p>
            <div className="h-px w-0 group-hover:w-full bg-emerald-900 transition-all duration-500 mx-auto mt-2"></div>
          </div>
        </div>
        
        <div className="pt-12">
          <a 
            href="#register" 
            onClick={scrollToRegister}
            className="inline-flex items-center gap-3 bg-emerald-950 text-white px-8 py-4 rounded-sm hover:bg-emerald-900 transition-colors duration-300 shadow-xl shadow-emerald-900/20 group"
          >
            <span className="tracking-widest text-sm font-semibold uppercase">Rejoindre l'enchère</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Existing background decorative elements (toned down) */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0">
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      </div>
    </header>
  );
};