import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';
import { useScrollReveal } from '../hooks/useScrollReveal';

const trendData = [
  { month: 'Jan', value: 54 },
  { month: 'Fév', value: 61 },
  { month: 'Mar', value: 54 },
  { month: 'Avr', value: 70 },
  { month: 'Mai', value: 65 },
  { month: 'Juin', value: 54 },
  { month: 'Juil', value: 51 },
];

const geoData = [
  { name: 'Île-de-France', weed: 88, smoke: 91 },
  { name: 'Rhône-Alpes', weed: 69, smoke: 71 },
  { name: 'Nord', weed: 81, smoke: 55 },
];

export const ChartsSection: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: chart1Ref, isVisible: chart1Visible } = useScrollReveal();
  const { ref: chart2Ref, isVisible: chart2Visible } = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-5xl mx-auto space-y-16">
        <div 
          ref={headerRef}
          className={`text-center space-y-4 transition-all duration-1000 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-5xl text-emerald-950">La Preuve par la Data</h2>
          <p className="text-stone-500">Analyse de marché 2025-2026 (Données réelles)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Trend Chart */}
          <div 
            ref={chart1Ref}
            className={`bg-white p-6 rounded-sm shadow-sm border border-stone-200 flex flex-col transition-all duration-1000 delay-200 ${
              chart1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h4 className="font-serif text-lg mb-2 text-emerald-900">Demande Explosive "Weed"</h4>
            <p className="text-xs text-stone-400 mb-6">Volume de recherche hebdomadaire (France)</p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trendData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#064e3b" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#064e3b" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#78716c', fontSize: 12 }} 
                    dy={10}
                  />
                  <YAxis 
                    hide={false} 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#78716c', fontSize: 12 }}
                    domain={[0, 100]}
                  />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderColor: '#e7e5e4', borderRadius: '2px' }}
                    itemStyle={{ color: '#064e3b' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#064e3b" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Geo Chart */}
          <div 
            ref={chart2Ref}
            className={`bg-white p-6 rounded-sm shadow-sm border border-stone-200 flex flex-col transition-all duration-1000 delay-300 ${
              chart2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h4 className="font-serif text-lg mb-2 text-emerald-900">Paris : Zone de Demande Maximale</h4>
            <p className="text-xs text-stone-400 mb-6">Indice d'intérêt régional (Max = 100)</p>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={geoData} barSize={20}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e7e5e4" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#78716c', fontSize: 10 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#78716c', fontSize: 12 }}
                  />
                  <Tooltip 
                     cursor={{fill: 'transparent'}}
                     contentStyle={{ backgroundColor: '#fff', borderColor: '#e7e5e4', borderRadius: '2px' }}
                  />
                  <Legend 
                    wrapperStyle={{ paddingTop: '20px' }}
                    iconType="circle"
                    iconSize={8}
                  />
                  <Bar name='Indice "Weed"' dataKey="weed" fill="#065f46" radius={[2, 2, 0, 0]} />
                  <Bar name='Indice "Smoke"' dataKey="smoke" fill="#a7f3d0" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
        
        <p className="text-center text-xs text-stone-400 italic mt-8">
          Données extraites des tendances de recherche (Jan 2025 - Jan 2026).
        </p>
      </div>
    </section>
  );
};