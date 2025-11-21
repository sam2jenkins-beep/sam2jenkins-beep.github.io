import React from 'react';
import { SectionWrapper } from './SectionWrapper';

interface EndGameProps {
  onTopicSelect: (id: string) => void;
}

export const EndGame: React.FC<EndGameProps> = ({ onTopicSelect }) => {
  return (
    <SectionWrapper className="bg-black border-y border-neon-pink/20">
      <div className="relative z-10 mix-blend-difference">
        <button 
          onClick={() => onTopicSelect('endgame')}
          className="text-[15vw] leading-none font-black text-white uppercase tracking-tighter text-center hover:text-neon-pink transition-colors duration-700 cursor-pointer select-none focus:outline-none"
        >
          End<br/>Game
        </button>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[50vw] h-[50vw] border rounded-full border-zinc-800 animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute w-[40vw] h-[40vw] border rounded-full border-zinc-700 animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute w-[30vw] h-[30vw] border rounded-full border-zinc-600 animate-[spin_10s_linear_infinite]"></div>
      </div>
    </SectionWrapper>
  );
};