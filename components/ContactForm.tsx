import React, { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const ContactForm: React.FC = () => {
  const { ref, isVisible } = useScrollReveal();

  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    
    // Check if script is already present to avoid duplicates
    if (!document.querySelector(`script[src="${script.src}"]`)) {
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup not strictly necessary for single page, but good practice
    };
  }, []);

  return (
    <section id="register" className="py-24 px-6 bg-white">
      <div 
        ref={ref}
        className={`max-w-xl mx-auto text-center space-y-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div>
          <h2 className="font-serif text-3xl text-emerald-950 mb-3">Rejoindre la liste</h2>
          <p className="text-stone-500 text-sm">Entrez votre email professionnel pour participer à la vente.</p>
        </div>

        <div className="w-full">
          <iframe 
            data-tally-src="https://tally.so/embed/aQ4PVv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            loading="lazy" 
            width="100%" 
            height="200" 
            frameBorder="0" 
            title="Rejoindre l'enchère"
            className="w-full overflow-hidden"
          ></iframe>
        </div>
        
        <p className="text-xs text-stone-400 mt-8">
          Vos données sont confidentielles. L'invitation est personnelle et non cessible.
        </p>
      </div>
    </section>
  );
};