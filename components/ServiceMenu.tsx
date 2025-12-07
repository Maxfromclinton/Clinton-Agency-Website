import React from 'react';
import { ArrowRight, Box, Mic, Video, BarChart3 } from 'lucide-react';
import Reveal from './Reveal';

const ServiceMenu: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-dark-900 border-t border-neutral-100 dark:border-neutral-800" id="ecosystem">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 flex flex-col gap-6">
              <Reveal>
                <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                    alt="Ecosystem Visual"
                    className="absolute inset-0 w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-1000 grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                      <h3 className="text-2xl font-serif text-white italic mb-2">The Ecosystem</h3>
                      <p className="text-white/80 text-xs font-light leading-relaxed mb-4">
                        Explore our full range of execution strategies. Each service is built to convert, scale, and dominate.
                      </p>
                      <a href="#booking" className="inline-flex items-center gap-2 text-white text-xs font-medium tracking-wide uppercase hover:text-indigo-300 transition-colors">
                        Book Strategy Session <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Menu List */}
          <div className="lg:col-span-7">
            <div className="flex flex-col gap-16">
              
              <Reveal>
                <div className="flex flex-col gap-2 border-b border-neutral-100 dark:border-neutral-800 pb-8">
                  <span className="text-indigo-500 font-bold text-[10px] tracking-[0.2em] uppercase">Service Menu</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 dark:text-white">Curated for Growth</h2>
                </div>
              </Reveal>

              {/* Category: Structure */}
              <Reveal delay={100}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500">
                      <Box size={16} />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight">Structure & Design (The Foundation)</h3>
                  </div>
                  
                  <div className="grid gap-3">
                    <ServiceItem title="Premium Web Design" subtitle="High-impact landing pages, portfolio sites, and e-commerce stores." />
                    <ServiceItem title="Funnel Architecture" subtitle="Sales-ready pages designed to move traffic to checkout." />
                    <ServiceItem title="High-End UI/UX" subtitle="Mobile-responsive builds with cinematic animations." />
                  </div>
                </div>
              </Reveal>

              {/* Category: Identity */}
              <Reveal delay={200}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center text-rose-500">
                      <Mic size={16} />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight">Identity & Voice (The Soul)</h3>
                  </div>

                  <div className="grid gap-3">
                    <ServiceItem title="Brand Identity Suite" subtitle="Logo, color psychology, typography, and visual styling." />
                    <ServiceItem title="Brand Messaging" subtitle="Voice development that cuts through the noise." />
                    <ServiceItem title="Social Branding" subtitle="Media kits and cohesive feed aesthetics." />
                  </div>
                </div>
              </Reveal>

              {/* Category: Content */}
              <Reveal delay={300}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-500">
                      <Video size={16} />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight">Content & Motion (The Attention)</h3>
                  </div>

                  <div className="grid gap-3">
                    <ServiceItem title="Short-Form Video Edits" subtitle="TikTok/Reels with cinematic transitions and viral hooks." />
                    <ServiceItem title="Social Management" subtitle="Daily posting, caption copywriting, and trend adaptation." />
                    <ServiceItem title="Creator Growth" subtitle="Influencer profile optimization and engagement strategy." />
                  </div>
                </div>
              </Reveal>

               {/* Category: Scale */}
               <Reveal delay={400}>
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-green-500">
                      <BarChart3 size={16} />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight">Scale & Reach (The Growth)</h3>
                  </div>

                  <div className="grid gap-3">
                    <ServiceItem title="Advertising Strategy" subtitle="Meta (FB/IG) & TikTok Ads targeting segmented audiences." />
                    <ServiceItem title="Author/Book Campaigns" subtitle="Specialized BookTok campaigns for best-seller status." />
                    <ServiceItem title="Marketing Automations" subtitle="Email setups and auto-responders that sell while you sleep." />
                  </div>
                </div>
              </Reveal>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceItem: React.FC<{title: string, subtitle: string}> = ({ title, subtitle }) => (
  <div className="group relative p-5 rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-transparent hover:bg-white hover:border-neutral-200 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 transition-all duration-300 glass-card-hover cursor-default">
    <div className="flex justify-between items-start mb-2">
      <span className="text-base font-medium text-neutral-900 dark:text-white">{title}</span>
    </div>
    <div className="flex justify-between items-end">
      <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-[90%]">{subtitle}</p>
    </div>
  </div>
);

export default ServiceMenu;