import React from 'react';

export const Badge: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-4 md:left-auto md:bottom-8 md:right-8 z-50 pointer-events-none mix-blend-multiply opacity-90">
        <div className="relative w-24 h-24 md:w-32 md:h-32 animate-spin-slow">
            {/* SVG with textPath */}
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="transparent" />
                <text className="text-[9.5px] font-bold uppercase tracking-[0.25em]" fill="#022c22">
                    <textPath href="#circlePath" startOffset="0%" textAnchor="middle">
                         • Official Auction • Paris • 2026 
                    </textPath>
                </text>
            </svg>
            {/* Center Graphic */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-emerald-950 rounded-full"></div>
            </div>
        </div>
    </div>
  );
};