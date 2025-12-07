import React from 'react';
import Reveal from './Reveal';

const Methodology: React.FC = () => {
  const steps = [
    { num: "01", title: "Deep Understanding", desc: "We study your enemies and your assets." },
    { num: "02", title: "Strategic Planning", desc: "We build the battle plan (Voice, Visuals, Conversion)." },
    { num: "03", title: "High-Quality Creation", desc: "We execute with aesthetic excellence." },
    { num: "04", title: "Optimization", desc: "We automate the boring stuff so you save time." },
    { num: "05", title: "Scaling", desc: "We double down on what makes you money." },
  ];

  return (
    <section className="py-24 px-6 bg-dark-900 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
             <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-4 block">Our Blueprint</span>
             <h2 className="text-4xl md:text-5xl font-serif text-white">How We Win</h2>
             <p className="text-neutral-400 mt-4 max-w-xl mx-auto">Our 5-Step Blueprint to Market Leadership.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {steps.map((step, idx) => (
             <Reveal key={idx} delay={idx * 100}>
                <div className="p-6 rounded-2xl bg-neutral-800/50 border border-neutral-800 hover:border-indigo-500/50 transition-colors h-full flex flex-col relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-6xl group-hover:scale-110 transition-transform">{step.num}</div>
                   <div className="w-10 h-10 rounded-full bg-neutral-700/50 flex items-center justify-center text-indigo-400 font-bold mb-6 text-sm relative z-10 border border-white/5">{step.num}</div>
                   <h3 className="text-lg font-medium text-white mb-3 relative z-10">{step.title}</h3>
                   <p className="text-xs text-neutral-400 leading-relaxed relative z-10">{step.desc}</p>
                </div>
             </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;