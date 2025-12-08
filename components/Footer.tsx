import React from 'react';
import { Command, Instagram, MapPin, Mail, ChevronDown } from 'lucide-react';

const Footer: React.FC = () => {
  const faqs = [
    {
      q: "Do you work with startups?",
      a: "Yes, we work with select high-growth startups ready to scale their brand authority and dominate their niche."
    },
    {
      q: "What is your turnaround time?",
      a: "Typical engagements range from 2-6 weeks depending on scope. We prioritize quality and strategic depth over rushing."
    },
    {
      q: "What is the payment structure?",
      a: "We require a 50% deposit to secure your slot on our calendar, with the remaining 50% due upon project completion and hand-off."
    },
    {
      q: "Do you use templates?",
      a: "Never. Every pixel is custom-designed for your specific market authority. We build bespoke systems, not cookie-cutter sites."
    },
    {
      q: "Do you handle the copywriting?",
      a: "Yes. Our 'Identity & Voice' package includes expert messaging. Design without strategy is just decoration; we provide both."
    },
    {
      q: "How do revisions work?",
      a: "We include 2 rounds of strategic refinements at every stage (Wireframe, Design, Dev) to ensure the final output is perfect."
    },
    {
      q: "Who owns the final assets?",
      a: "You do. Upon final payment, 100% of the Intellectual Property (IP), code, and assets are transferred to you."
    },
    {
      q: "Can you maintain the site after launch?",
      a: "Yes, we offer monthly 'Dominance' retainers for security updates, content changes, and continuous growth optimization."
    },
    {
      q: "What platforms do you build on?",
      a: "We specialize in high-performance stacks including React (for custom apps), Webflow (for marketing sites), and Shopify (for e-commerce)."
    },
    {
      q: "I have a tight deadline. Can you rush?",
      a: "Priority execution is available for an expedited fee. Mention your deadline in the booking form for an assessment."
    }
  ];

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
            <a 
              href="https://www.instagram.com/sandra.author.growth" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors p-2 bg-neutral-800 rounded-full"
              title="Instagram"
            >
              <Instagram size={18} />
            </a>
            
            <a 
              href="mailto:infomaxfromclintonagency@gmail.com"
              className="hover:text-white transition-colors p-2 bg-neutral-800 rounded-full"
              title="Send Email"
            >
              <Mail size={18} />
            </a>

            <a 
              href="https://www.fiverr.com/inbox/clinton_agencyy?public_mode=true" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors p-2 bg-neutral-800 rounded-full group"
              title="Message on Fiverr"
            >
              {/* Custom Fiverr Icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M21.25 0H2.75C1.23 0 0 1.23 0 2.75v18.5C0 22.77 1.23 24 2.75 24h18.5c1.52 0 2.75-1.23 2.75-2.75V2.75C24 1.23 22.77 0 21.25 0zM17.3 16.5h-2.8v-7h-2.1v7H9.6v-7H7.5v-3h2.1V5h3v1.5h2.6v3h2.1v7zm0 0"/>
              </svg>
            </a>
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
              <MapPin size={16} className="shrink-0 mt-0.5 text-indigo-400" />
              <span>721, Broadway New York, NY | Serving Global Clients</span>
            </li>
            <li className="flex gap-2 items-start">
              <Mail size={16} className="shrink-0 text-indigo-400 mt-0.5" />
              <a href="mailto:infomaxfromclintonagency@gmail.com" className="hover:text-white transition-colors">
                infomaxfromclintonagency@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* FAQ */}
        <div>
          <h4 className="text-white font-medium mb-6 text-sm">FAQ</h4>
          <div className="space-y-2 text-xs font-light">
            {faqs.map((faq, index) => (
              <details key={index} className="group cursor-pointer bg-neutral-800/30 rounded-lg overflow-hidden border border-neutral-800">
                <summary className="list-none flex justify-between items-start p-3 group-hover:bg-neutral-800 transition-colors select-none">
                  <span className="font-medium text-neutral-300 group-hover:text-white pr-4">{faq.q}</span>
                  <ChevronDown size={14} className="group-open:rotate-180 transition-transform mt-0.5 shrink-0" />
                </summary>
                <div className="px-3 pb-3 pt-0">
                  <p className="text-neutral-500 leading-relaxed border-t border-neutral-700/50 pt-2 mt-1">
                    {faq.a}
                  </p>
                </div>
              </details>
            ))}
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