import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { HERO_IMAGE_URL } from '../constants';

export const Hero: React.FC = () => {
  return (
    <SectionWrapper className="bg-black">
      <div className="z-10 flex flex-col items-center text-center space-y-8 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter text-white uppercase leading-[0.9]">
          Preparation <span className="text-neon-pink block md:inline">Handbook</span>
        </h1>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-neon-pink to-transparent opacity-50 my-4" />
        
        <div className="relative group mt-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white bg-black overflow-hidden">
            <img 
              src={HERO_IMAGE_URL} 
              alt="Main Player" 
              className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
            />
          </div>
        </div>
        
        <div className="absolute bottom-10 animate-bounce">
           <span className="text-neon-pink text-sm tracking-widest uppercase">Scroll to Begin</span>
        </div>
      </div>
    </SectionWrapper>
  );
};