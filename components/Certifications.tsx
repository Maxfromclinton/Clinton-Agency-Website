import React from 'react';
import Reveal from './Reveal';

const Certifications: React.FC = () => {
  const certs = [
    { name: "Google Partner", color: "text-blue-500", label: "Certified" },
    { name: "Meta Business", color: "text-blue-400", label: "Pro Partner" },
    { name: "HubSpot", color: "text-orange-500", label: "Agency Partner" },
    { name: "CompTIA", color: "text-red-500", label: "Security+" },
    { name: "Cisco", color: "text-cyan-500", label: "Certified" }
  ];

  return (
    <section className="py-12 bg-white dark:bg-dark-900 border-b border-neutral-100 dark:border-neutral-800">
       <div className="max-w-7xl mx-auto px-6">
          <Reveal>
             <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {certs.map((cert, i) => (
                   <div key={i} className="flex items-center gap-3 group cursor-default">
                      <div className={`w-2 h-2 rounded-full bg-current ${cert.color} animate-pulse`}></div>
                      <div className="flex flex-col">
                         <span className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-indigo-500 transition-colors">{cert.name}</span>
                         <span className="text-[10px] uppercase tracking-wider text-neutral-400">{cert.label}</span>
                      </div>
                   </div>
                ))}
             </div>
          </Reveal>
       </div>
    </section>
  );
};

export default Certifications;
