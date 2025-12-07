import React from 'react';
import { Command, Instagram, Facebook, Twitter, MapPin, Mail, ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="text-neutral-300 bg-neutral-900 border-neutral-800 border-t pt-20 pr-6 pb-20 pl-6" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-indigo-400">
            <Command className="w-8 h-8" strokeWidth={2} />
            <span className="text-2xl font-black tracking-tighter font-serif bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500">
              Clinton Agency
            </span>
          </div>
          <p className="leading-relaxed text-xs font-light text-neutral-500 max-w-xs">
            Building premium digital brands, websites, and content systems that attract, engage, and convert.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-medium mb-6 text-sm">Explore</h4>
          <ul className="space-y-3 text-xs font-light">
            <li><a href="#" className="hover:text-indigo-400 transition-colors">About Us</a></li>
            <li><a href="#ecosystem" className="hover:text-indigo-400 transition-colors">Services Menu</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-6 text-sm">Headquarters</h4>
          <ul className="space-y-3 text-xs font-light">
            <li className="flex gap-2 items-start">
              <MapPin size={16} className="shrink-0 mt-0.5" />
              <span>721, Broadway New York, NY | Serving Global Clients</span>
            </li>
            <li className="flex gap-2 items-center">
              <Mail size={16} className="shrink-0" />
              <span>email: infomaxfromclintonagency@gmail.com</span>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="text-white font-medium mb-6 text-sm">FAQ</h4>
          <div className="space-y-3 text-xs font-light">
            <details className="group cursor-pointer">
              <summary className="list-none flex justify-between items-center border-b border-neutral-800 pb-2 group-hover:text-white transition-colors">
                <span>Do you work with startups?</span>
                <ChevronDown size={12} className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="pt-2 text-neutral-500">Yes, we work with select high-growth startups ready to scale their brand authority.</p>
            </details>
            <details className="group cursor-pointer">
              <summary className="list-none flex justify-between items-center border-b border-neutral-800 pb-2 group-hover:text-white transition-colors">
                <span>What is your turnaround time?</span>
                <ChevronDown size={12} className="group-open:rotate-180 transition-transform" />
              </summary>
              <p className="pt-2 text-neutral-500">Typical engagements range from 2-6 weeks depending on scope.</p>
            </details>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
        <p>©2025 Clinton Agency. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;