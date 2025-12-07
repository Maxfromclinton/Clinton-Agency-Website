import React from 'react';
import Reveal from './Reveal';
import ComparisonSlider from './ComparisonSlider';

const Portfolio: React.FC = () => {
  const projects = [
    { src: "https://images.unsplash.com/photo-1481487484168-9b930d5b7d9d?q=80&w=800&auto=format&fit=crop", label: "E-Commerce" },
    { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop", label: "Branding" },
    { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop", label: "Analytics" },
    { src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop", label: "Web Design" },
    { src: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop", label: "Campaigns" },
    { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop", label: "Strategy" },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-neutral-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="text-indigo-400 text-xs font-bold tracking-widest uppercase mb-2 block">Transformation</span>
            <h2 className="text-3xl md:text-4xl tracking-tight mb-4">The Clinton Effect</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">See the shift from "Noise" to "Signal". We transform chaotic online presences into streamlined conversion machines.</p>
          </div>
        </Reveal>

        <Reveal>
          <ComparisonSlider />
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pt-12">
          {projects.map((proj, idx) => (
            <Reveal key={idx} delay={(idx % 3) * 100}>
              <div className="break-inside-avoid rounded-xl overflow-hidden relative group cursor-pointer">
                <img src={proj.src} alt={`Project ${idx}`} className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center border-4 border-white/10 m-2 rounded-lg">
                  <span className="text-white font-serif text-2xl italic">{proj.label}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;