import React from 'react';
import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

const Services: React.FC = () => {
  const services = [
    {
      title: "Digital Real Estate",
      subtitle: "Premium Web Design & Funnels",
      price: "$2,500+",
      img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Visual Authority",
      subtitle: "Brand Identity & Messaging",
      price: "$1,500+",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Audience Acquisition",
      subtitle: "Ads & Social Growth Systems",
      price: "$1,000/mo+",
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section id="strategy" className="py-24 px-6 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl mb-2 tracking-tight">Our Expertise</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light">Curated digital dominance for the modern entrepreneur.</p>
            </div>
            <a href="#ecosystem" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-indigo-400 transition-colors mt-4 md:mt-0">
              View Full Capabilities <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={index} delay={index * 100}>
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 bg-neutral-100 dark:bg-neutral-800 relative">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                </div>
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-xl mb-1 font-serif font-medium">{service.title}</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs">{service.subtitle}</p>
                  </div>
                  <span className="text-sm font-medium font-mono text-indigo-500">{service.price}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;