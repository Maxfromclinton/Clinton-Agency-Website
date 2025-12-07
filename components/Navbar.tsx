import React, { useState, useEffect } from 'react';
import { Menu, X, Command } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClasses = `fixed top-0 w-full z-50 transition-all duration-300`;
  const bgClasses = `absolute inset-0 transition-all duration-300 ${
    scrolled
      ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800'
      : 'bg-transparent'
  }`;
  
  const textClasses = scrolled
    ? 'text-neutral-900 dark:text-white'
    : 'text-white';

  const linkClasses = scrolled
    ? 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white'
    : 'text-white/80 hover:text-white';

  return (
    <nav className={navClasses} id="navbar">
      <div className={bgClasses}></div>
      <div className="relative flex h-24 max-w-7xl mx-auto px-6 items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group relative z-50">
          <div className={`w-8 h-8 ${scrolled ? 'text-neutral-900 dark:text-white' : 'text-white'}`}>
             <Command className="w-full h-full" strokeWidth={2} />
          </div>
          <span 
            className={`text-2xl font-black tracking-tighter font-serif bg-clip-text text-transparent bg-gradient-to-r transition-all duration-300 ${
              scrolled 
                ? 'from-neutral-900 via-neutral-700 to-neutral-500 dark:from-white dark:via-neutral-200 dark:to-neutral-400' 
                : 'from-white via-neutral-100 to-neutral-400'
            }`}
          >
            Clinton Agency
          </span>
        </a>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${linkClasses} relative z-50`}>
          <a href="#portfolio" className="transition-colors">Portfolio</a>
          <a href="#strategy" className="transition-colors">Strategy</a>
          <a href="#contact" className="transition-colors">Contact</a>
        </div>

        {/* CTA */}
        <div className="hidden md:block relative z-50">
          <a
            href="#booking"
            className="bg-white text-neutral-900 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide hover:bg-neutral-100 transition-colors shadow-lg shadow-white/10"
          >
            Start Your Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 ${textClasses} relative z-50`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white dark:bg-dark-900 p-6 flex flex-col justify-center items-center gap-8 md:hidden animate-fade-in z-40">
          <a href="#portfolio" className="text-3xl font-serif font-bold text-neutral-900 dark:text-white" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
          <a href="#strategy" className="text-3xl font-serif font-bold text-neutral-900 dark:text-white" onClick={() => setMobileMenuOpen(false)}>Strategy</a>
          <a href="#contact" className="text-3xl font-serif font-bold text-neutral-900 dark:text-white" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="#booking" className="text-xl font-serif text-indigo-400 border-2 border-indigo-400 px-8 py-3 rounded-full" onClick={() => setMobileMenuOpen(false)}>Start Project</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;