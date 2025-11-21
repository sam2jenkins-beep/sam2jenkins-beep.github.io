import React, { useEffect } from 'react';
import { Topic } from '../types';

interface TopicPageProps {
  topic: Topic;
  onBack: () => void;
}

export const TopicPage: React.FC<TopicPageProps> = ({ topic, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white p-6 md:p-12 overflow-y-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-12 md:mb-24 sticky top-0 bg-black/90 backdrop-blur-sm py-4 z-50 border-b border-zinc-900">
        <button 
          onClick={onBack}
          className="group flex items-center space-x-2 text-sm uppercase tracking-widest text-zinc-400 hover:text-neon-pink transition-colors"
        >
          <span className="block w-8 h-px bg-zinc-600 group-hover:bg-neon-pink transition-colors"></span>
          <span>Back to Handbook</span>
        </button>
        <div className="text-neon-pink font-black text-xl tracking-tighter">SPR // {topic.id.toUpperCase()}</div>
      </header>

      {/* Title Section */}
      <section className="mb-24 border-b border-zinc-800 pb-12 animate-[fadeIn_0.5s_ease-out]">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">
          {topic.title}
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl font-light leading-relaxed">
          {topic.subtitle}
        </p>
      </section>

      {/* Sub-topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {topic.subTopics.map((sub, index) => (
          <div key={index} className="group flex flex-col space-y-4 animate-[slideUp_0.5s_ease-out]" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="overflow-hidden aspect-video bg-zinc-900 border border-zinc-800 group-hover:border-neon-pink transition-colors duration-300 relative cursor-pointer">
               <img 
                  src={sub.image || `https://placehold.co/600x400/111/FFF?text=${encodeURIComponent(sub.title)}`} 
                  alt={sub.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
               />
               <div className="absolute top-0 right-0 bg-neon-pink text-black font-bold px-3 py-1 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                 Read More
               </div>
               <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 text-xs font-mono text-neon-pink border border-neon-pink/30">
                 0{index + 1}
               </div>
            </div>
            <div className="cursor-pointer">
              <h3 className="text-2xl font-bold uppercase text-white group-hover:text-neon-pink transition-colors">
                {sub.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed border-l-2 border-zinc-800 pl-4 mt-2 group-hover:border-neon-pink transition-colors">
                {sub.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer for the page */}
      <div className="mt-auto pt-12 border-t border-zinc-900 text-center">
         <button onClick={onBack} className="text-zinc-600 hover:text-white uppercase tracking-widest text-xs transition-colors py-4 px-8 border border-zinc-900 hover:border-zinc-700">
            Return to Main View
         </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};