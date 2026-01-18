import React from 'react';
import { TrendingUp, Euro, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FeatureItem: React.FC<{ 
  icon: React.ElementType; 
  title: string; 
  description: React.ReactNode;
  delay?: string 
}> = ({ icon: Icon, title, description, delay = "0ms" }) => {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <div 
      ref={ref}
      style={{ transitionDelay: delay }}
      className={`space-y-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-emerald-900 mb-4 border border-stone-200">
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-2xl text-emerald-950">{title}</h3>
      <p className="text-stone-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

export const Features: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-white border-y border-stone-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureItem 
            icon={TrendingUp}
            title="Domination SEO"
            description={
              <>
                "CBD Paris" et "Achat Weed Paris" génèrent des milliers de recherches mensuelles. Posséder le nom de domaine exact permet un taux de clic (CTR) <strong className="text-emerald-800">jusqu'à 35% supérieur</strong> à un nom de marque classique.
              </>
            }
          />
          <FeatureItem 
            icon={Euro}
            title="Zéro Coût Média"
            description={
              <>
                Le prix par clic (CPC) sur Google Ads pour le secteur CBD est prohibitif (1,50€ à 3,00€). <strong className="text-emerald-800">Weed.paris</strong> capte ce trafic naturellement, vous offrant une visibilité premium gratuite à vie.
              </>
            }
            delay="200ms"
          />
          <FeatureItem 
            icon={MapPin}
            title="Autorité Locale"
            description={
              <>
                L'extension géographique est un sceau de confiance. Selon l'AFNIC, un domaine <strong className="text-emerald-800">.paris</strong> augmente la confiance consommateur de <strong className="text-emerald-800">72%</strong> pour un commerce de proximité.
              </>
            }
            delay="400ms"
          />
        </div>
      </div>
    </section>
  );
};