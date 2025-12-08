import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen min-h-[750px] overflow-hidden bg-dark-900">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 w-full h-full animate-zoom-slow pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2500&auto=format&fit=crop"
          alt="Modern Agency Office"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-dark-900"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col h-full max-w-7xl mx-auto px-6 relative justify-center z-10">
        <div className="max-w-3xl mt-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></div>
            <span className="text-[10px] uppercase tracking-widest text-neutral-300 font-medium">New Era 2025</span>
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl leading-[0.9] text-white tracking-tight font-serif mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Strategy. Design. <br /><span className="italic font-light text-white/80">Dominance.</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg text-neutral-300 font-light max-w-md mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            The Future of Your Brand is Now. Premium digital systems for market leaders, authors, and creators who refuse to be ignored.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <a href="#booking" className="btn-53 w-full sm:w-auto text-center no-underline">
                <div className="original">Start Project</div>
                <div className="letters flex justify-center items-center">
                    <span>S</span>
                    <span>T</span>
                    <span>A</span>
                    <span>R</span>
                    <span>T</span>
                    <span>&nbsp;</span>
                    <span>P</span>
                    <span>R</span>
                    <span>O</span>
                    <span>J</span>
                    <span>E</span>
                    <span>C</span>
                    <span>T</span>
                </div>
            </a>
            <a
              href="#ecosystem"
              className="w-full sm:w-auto px-8 py-4 glass-panel text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group"
            >
              Explore Ecosystem
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Floating Card (Desktop Only) */}
        <div className="hidden lg:block absolute right-6 bottom-32 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="glass-panel p-6 rounded-2xl max-w-xs backdrop-blur-xl border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Trending Now</span>
              <div className="flex items-center gap-1 text-green-400">
                <TrendingUp size={14} />
                <span className="text-xs font-bold">+125%</span>
              </div>
            </div>
            <h3 className="text-lg text-white font-serif mb-1">Viral Authority System</h3>
            <p className="text-xs text-neutral-400 mb-4">We turn your expertise into a conversion engine.</p>
            <div className="flex items-center gap-2 text-xs text-indigo-300">
              <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
              Limited Availability Q4
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-pulse">
          <span className="text-[10px] uppercase tracking-widest text-white">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </div>
    </header>
  );
};

export default Hero;