import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { PORTFOLIO_ITEMS } from '../constants';

export const Portfolios: React.FC = () => {
  return (
    <SectionWrapper id="portfolios" className="bg-zinc-950">
      <div className="w-full max-w-7xl flex flex-col h-full py-12">
        <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-6">
          <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white">
            Player <span className="text-neon-pink">Portfolios</span>
          </h2>
          <span className="text-zinc-500 text-sm uppercase tracking-widest hidden md:block">Classified Data</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-y-auto pb-12">
          {PORTFOLIO_ITEMS.map((item) => (
            <div 
              key={item.id} 
              className="group relative aspect-[3/4] bg-zinc-900 border border-zinc-800 hover:border-neon-pink transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-neon-pink text-xs font-bold uppercase tracking-widest mb-1">{item.season}</p>
                <h3 className="text-2xl font-bold text-white uppercase leading-none">{item.name}</h3>
                <div className="w-0 group-hover:w-full h-[2px] bg-neon-pink mt-3 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
        
        <footer className="mt-auto text-center text-zinc-600 text-xs uppercase tracking-widest py-4">
            &copy; Survivor Prep Resource 2024
        </footer>
      </div>
    </SectionWrapper>
  );
};