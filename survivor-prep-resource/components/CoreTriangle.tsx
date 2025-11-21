import React from 'react';
import { SectionWrapper } from './SectionWrapper';

interface CoreTriangleProps {
  onTopicSelect: (id: string) => void;
}

export const CoreTriangle: React.FC<CoreTriangleProps> = ({ onTopicSelect }) => {
  return (
    <SectionWrapper className="bg-zinc-950">
      <div className="relative w-full max-w-5xl h-full flex flex-col justify-center">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
           {/* Background Triangle Graphic */}
           <svg viewBox="0 0 100 100" className="w-full h-full max-w-[80vh] max-h-[80vh] fill-none stroke-white stroke-1">
              <polygon points="50,100 0,0 100,0" />
           </svg>
        </div>

        {/* Top Row: Outwit (Left) - Outplay (Right) */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full flex-1 md:items-start pt-12 md:px-12">
          <button 
            onClick={() => onTopicSelect('outwit')}
            className="group cursor-pointer mb-12 md:mb-0 text-center md:text-left focus:outline-none"
          >
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 group-hover:from-neon-pink group-hover:to-pink-600 transition-all duration-300 uppercase tracking-tighter">
              Outwit
            </h2>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-neon-pink tracking-widest uppercase text-xs mt-2">
              The Social Game
            </p>
          </button>

          <button 
            onClick={() => onTopicSelect('outplay')}
            className="group cursor-pointer text-center md:text-right focus:outline-none"
          >
            <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 group-hover:from-neon-pink group-hover:to-pink-600 transition-all duration-300 uppercase tracking-tighter">
              Outplay
            </h2>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-neon-pink tracking-widest uppercase text-xs mt-2">
              The Physical Game
            </p>
          </button>
        </div>

        {/* Bottom Row: Outlast (Center) */}
        <div className="flex justify-center items-end flex-1 pb-12">
          <button 
            onClick={() => onTopicSelect('outlast')}
            className="group cursor-pointer text-center focus:outline-none"
          >
            <h2 className="text-7xl md:text-9xl font-black text-white group-hover:text-neon-pink transition-colors duration-300 uppercase tracking-tighter transform group-hover:scale-110 transition-transform">
              Outlast
            </h2>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity text-neon-pink tracking-widest uppercase text-sm mt-4">
              The Endurance Game
            </p>
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
};