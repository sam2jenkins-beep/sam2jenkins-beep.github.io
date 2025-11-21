import React, { useRef, useEffect } from 'react';
import { SectionWrapper } from './SectionWrapper';
import { TIMELINE_EVENTS } from '../constants';

export const Timeline: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Optional: Horizontal wheel scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 2, // Speed up scroll slightly
          behavior: 'smooth'
        });
      };
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, []);

  return (
    <SectionWrapper className="bg-zinc-950 border-t border-zinc-900">
      <div className="flex flex-col w-full h-full justify-center">
        <h2 className="text-4xl font-bold text-white mb-12 uppercase tracking-wider px-4 md:px-0 border-l-4 border-neon-pink pl-4 ml-4 md:ml-0">
          The <span className="text-neon-pink">Journey</span>
        </h2>
        
        <div 
          ref={scrollRef}
          className="w-full flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 items-center"
        >
          <div className="flex space-x-12 px-[10vw] md:px-[25vw]">
            {TIMELINE_EVENTS.map((event, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-[80vw] md:w-[400px] snap-center flex flex-col items-start relative group"
              >
                 {/* Line Connector */}
                <div className="absolute top-6 -left-12 w-12 h-[2px] bg-zinc-800 hidden md:block"></div>
                
                <span className="text-8xl font-black text-zinc-800 absolute -top-10 -left-4 -z-10 group-hover:text-zinc-700 transition-colors duration-300">
                  {index + 1}
                </span>
                
                <div className="border-l-2 border-neon-pink pl-6 py-4 transition-all duration-300 group-hover:bg-zinc-900/50 group-hover:pl-8 rounded-r-lg">
                  <p className="text-neon-pink font-bold tracking-widest text-sm md:text-base mb-2 uppercase">
                    {event.day}
                  </p>
                  <h3 className="text-3xl md:text-5xl font-bold text-white uppercase leading-none">
                    {event.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-8 opacity-50 text-sm">
           <span className="md:hidden">Swipe Left</span>
           <span className="hidden md:inline">Scroll Horizontally</span>
        </div>
      </div>
    </SectionWrapper>
  );
};