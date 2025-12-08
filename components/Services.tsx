import React from 'react';
import { ArrowRight, Play, Mail, Layout } from 'lucide-react';
import Reveal from './Reveal';

const Services: React.FC = () => {
  return (
    <section id="strategy" className="py-24 px-6 bg-white dark:bg-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl mb-2 tracking-tight">Our Expertise</h2>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm font-light">
                High-converting assets for authors, creators, and brands.
              </p>
            </div>
            <a href="#ecosystem" className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-indigo-400 transition-colors mt-4 md:mt-0">
              View Full Capabilities <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Cinematic Book Trailers (iPhone Mockup) */}
          <Reveal delay={0}>
            <div className="group cursor-pointer h-full">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-800 relative flex items-center justify-center p-6 border border-neutral-200 dark:border-neutral-700/50">
                {/* 3D iPhone 16 Pro Max Mockup */}
                <div className="relative w-[280px] h-[580px] bg-black rounded-[55px] shadow-2xl border-[6px] border-[#3a3a3a] ring-1 ring-white/20 transform group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 flex items-center justify-center gap-2">
                    <div className="w-1.5 h-1.5 bg-[#1a1a1a] rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-[#0f0f0f] rounded-full"></div>
                  </div>
                  
                  {/* Screen Content */}
                  <div className="w-full h-full bg-neutral-900 relative overflow-hidden rounded-[48px]">
                    <video 
                      className="w-full h-full object-cover" 
                      autoPlay 
                      muted 
                      loop 
                      playsInline
                      poster="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=1000&auto=format&fit=crop"
                    >
                      {/* PLACEHOLDER: Swap this URL with your actual book trailer file */}
                      <source src="https://videos.pexels.com/video-files/5473806/5473806-hd_1080_1920_25fps.mp4" type="video/mp4" />
                    </video>
                    
                    {/* UI Overlay */}
                    <div className="absolute bottom-8 left-6 right-6 z-10">
                      <div className="flex items-center gap-2 mb-2">
                         <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
                            <Play size={12} className="text-white fill-current" />
                         </div>
                         <span className="text-white text-xs font-bold shadow-black drop-shadow-md">K-OZ Trailer</span>
                      </div>
                      <p className="text-white/80 text-[10px] line-clamp-2 leading-relaxed drop-shadow-md">
                        "They created the first artificial person in history..."
                      </p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none"></div>
                  </div>
                </div>

                {/* Ambient Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 bg-indigo-500/20 blur-[100px] pointer-events-none"></div>
              </div>

              <div className="mt-6 px-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl mb-1 font-serif font-medium">Cinematic Book Trailers</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs">Viral TikTok/Reels edits for Authors.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/20 flex items-center justify-center text-indigo-500">
                    <Play size={16} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Email Design (Long Scroll Mockup) */}
          <Reveal delay={100}>
            <div className="group cursor-pointer h-full">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-800 relative flex items-center justify-center p-8 border border-neutral-200 dark:border-neutral-700/50">
                 
                 {/* Email Browser Window */}
                 <div className="relative w-full h-full bg-white dark:bg-black rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                    {/* Header Bar */}
                    <div className="h-8 bg-neutral-100 dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex items-center px-3 gap-1.5 z-20 relative">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                       <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                       <div className="ml-auto w-24 h-4 bg-neutral-200 dark:bg-neutral-800 rounded-full opacity-50"></div>
                    </div>

                    {/* Scrolling Content Container */}
                    <div className="h-full overflow-hidden relative group-hover:overflow-y-auto no-scrollbar scroll-smooth">
                       {/* Long Image Container */}
                       <div className="w-full">
                          {/* PLACEHOLDER: This div simulates the long email. Replace content or use a long <img> tag */}
                          <div className="flex flex-col">
                             {/* Hero Section of Email */}
                             <div className="h-48 bg-emerald-800 relative flex items-center justify-center p-6 text-center">
                                <h4 className="text-white font-serif text-2xl z-10">Meet Sal the Sloth...</h4>
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
                             </div>
                             
                             {/* Body Text */}
                             <div className="p-6 bg-white dark:bg-neutral-900 space-y-4">
                                <div className="h-4 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                                <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                                <div className="h-4 w-5/6 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                                
                                <div className="py-4">
                                  <div className="aspect-video w-full bg-neutral-100 dark:bg-neutral-800 rounded-lg overflow-hidden relative">
                                    <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=800&auto=format&fit=crop" className="object-cover w-full h-full" alt="Nature" />
                                  </div>
                                </div>

                                <div className="h-4 w-full bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                                <div className="h-4 w-4/5 bg-neutral-200 dark:bg-neutral-800 rounded"></div>
                                
                                {/* Button */}
                                <div className="flex justify-center pt-4 pb-8">
                                   <div className="px-6 py-3 bg-emerald-600 text-white text-xs font-bold rounded-full">GET THE BOOK</div>
                                </div>
                             </div>
                          </div>
                       </div>
                       
                       {/* Auto-scroll Hint overlay */}
                       <div className="absolute inset-0 bg-gradient-to-t from-neutral-100 dark:from-neutral-900 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                          <span className="text-[10px] text-neutral-400 bg-white/80 dark:bg-black/80 px-2 py-1 rounded backdrop-blur">Scrolls on Hover</span>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="mt-6 px-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl mb-1 font-serif font-medium">Email Campaigns</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs">High-retention designs that sell.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-500">
                    <Mail size={16} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Digital Real Estate */}
          <Reveal delay={200}>
            <div className="group cursor-pointer h-full">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-100 dark:bg-neutral-800 relative">
                <img
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1000&auto=format&fit=crop"
                  alt="Web Design"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Floating Badge */}
                 <div className="absolute top-6 right-6 glass-panel px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-[10px] font-bold text-white tracking-wide">LIVE</span>
                 </div>
              </div>
              <div className="mt-6 px-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl mb-1 font-serif font-medium">Digital Real Estate</h3>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs">Premium Web Design & Funnels.</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-500">
                    <Layout size={16} />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Services;
