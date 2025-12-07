import React from 'react';
import Reveal from './Reveal';

const Trend: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-neutral-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visuals */}
          <Reveal>
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
              {/* Split screen effect */}
              <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full relative overflow-hidden border-r border-white/10">
                   <img 
                     src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop" 
                     className="w-full h-full object-cover filter blur-sm scale-110 opacity-50"
                     alt="Chaotic Feed"
                   />
                   <div className="absolute inset-0 bg-red-900/20 flex items-center justify-center">
                     <span className="text-xs font-mono text-red-200 tracking-widest uppercase bg-black/50 px-2 py-1 rounded">Noise</span>
                   </div>
                </div>
                <div className="w-1/2 h-full relative overflow-hidden bg-black">
                   <img 
                     src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&auto=format&fit=crop" 
                     className="w-full h-full object-cover opacity-90"
                     alt="Focused Asset"
                   />
                   <div className="absolute top-6 right-6 glass-panel px-4 py-2 rounded-lg flex flex-col items-center">
                      <span className="text-xl font-bold text-white">+10k</span>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider">Followers</span>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                   <div className="absolute bottom-6 left-6 right-6">
                      <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-indigo-500"></div>
                      </div>
                      <span className="text-[10px] text-indigo-400 mt-2 block font-mono">Engagement Rate: High</span>
                   </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text Content */}
          <Reveal delay={200}>
            <div className="flex flex-col justify-center">
              <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4">Trending Now</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                The "Viral Authority" System
              </h2>
              <p className="text-neutral-400 text-lg font-light leading-relaxed mb-8">
                Stop chasing trends. Start setting them. In a world of infinite noise, authority is the only currency that matters. We turn your expertise into a conversion engine that works while you sleep.
              </p>
              <div className="flex items-center gap-4 text-sm text-neutral-300">
                 <div className="px-4 py-2 rounded-full border border-neutral-700 bg-neutral-800/50">
                    +125% Growth
                 </div>
                 <div className="px-4 py-2 rounded-full border border-neutral-700 bg-neutral-800/50">
                    Limited Q4 Slots
                 </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Trend;