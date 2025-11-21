import React from 'react';
import { SectionWrapper } from './SectionWrapper';

interface ContentHubsProps {
  onTopicSelect: (id: string) => void;
}

export const ContentHubs: React.FC<ContentHubsProps> = ({ onTopicSelect }) => {
  return (
    <SectionWrapper className="bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl h-full md:h-[70vh]">
        {/* Card 1 */}
        <button 
          onClick={() => onTopicSelect('pregame')} 
          className="relative group block w-full h-full border border-zinc-800 hover:border-neon-pink transition-colors duration-500 overflow-hidden bg-zinc-950 text-left"
        >
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
           
           <div className="relative h-full flex flex-col justify-end p-8 md:p-12 group-hover:translate-y-[-10px] transition-transform duration-500">
             <h3 className="text-4xl md:text-6xl font-black uppercase leading-tight text-white group-hover:text-neon-pink transition-colors">
               Pregame <br/> Guidelines
             </h3>
             <div className="h-1 w-12 bg-neon-pink mt-6 group-hover:w-full transition-all duration-700"></div>
             <p className="mt-4 text-zinc-400 text-sm tracking-widest uppercase group-hover:text-white">
               Historical Analysis & Strategy
             </p>
           </div>
        </button>

        {/* Card 2 */}
        <button 
          onClick={() => onTopicSelect('meta')} 
          className="relative group block w-full h-full border border-zinc-800 hover:border-neon-pink transition-colors duration-500 overflow-hidden bg-zinc-950 text-left"
        >
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
           
           <div className="relative h-full flex flex-col justify-end p-8 md:p-12 group-hover:translate-y-[-10px] transition-transform duration-500">
             <h3 className="text-4xl md:text-6xl font-black uppercase leading-tight text-white group-hover:text-neon-pink transition-colors">
               META <br/> GAME
             </h3>
             <div className="h-1 w-12 bg-neon-pink mt-6 group-hover:w-full transition-all duration-700"></div>
             <p className="mt-4 text-zinc-400 text-sm tracking-widest uppercase group-hover:text-white">
               Social Dynamics & Psychology
             </p>
           </div>
        </button>
      </div>
    </SectionWrapper>
  );
};