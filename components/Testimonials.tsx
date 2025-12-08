import React from 'react';
import { Star, Quote } from 'lucide-react';
import Reveal from './Reveal';

const Testimonials: React.FC = () => {
  const reviews = [
    // Existing Premium Reviews
    {
      text: "Clinton Agency didn't just build a website; they built a sales machine. My book hit the best-seller list because of their BookTok strategy.",
      name: "Sarah J.",
      role: "Best-Selling Author",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      text: "The aesthetic excellence is unmatched. My brand finally looks as premium as the price I charge.",
      name: "David R.",
      role: "CEO & Founder",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      text: "Efficiency, automation, and style. They saved me 20 hours a week and doubled my engagement.",
      name: "Priya P.",
      role: "Content Creator",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
      rating: 5
    },
    
    // New Wow Premium Reviews
    {
      text: "We scaled from $10k to $50k/mo in 90 days. The ROI on the ad campaigns was instant.",
      name: "Mark T.",
      role: "E-com Founder",
      img: "https://randomuser.me/api/portraits/men/86.jpg",
      rating: 5
    },
    {
      text: "Professional, strategic, and fast. The best agency experience I've had in 10 years of business.",
      name: "James L.",
      role: "Real Estate Developer",
      img: "https://randomuser.me/api/portraits/men/64.jpg",
      rating: 5
    },
    {
      text: "They captured our brand voice perfectly. The rebrand helped us secure our Series A funding.",
      name: "Elena K.",
      role: "Tech Startup Founder",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5
    },

    // Fiverr Reviews
    {
      text: "Clinton Agency is a pleasure to work with. They're professional, creative, diligent and deliver what they propose with quality work. If you need assistance promoting your book, I highly recommend working with them.",
      name: "Dave Gioia",
      role: "Repeat Client (US)",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
      rating: 5
    },
    {
      text: "I hired this book marketer to do an email blast. There was some back and forth to fix little details. But overall, the final product was good.",
      name: "CabbageGnome",
      role: "Verified Client (US)",
      img: "https://randomuser.me/api/portraits/lego/1.jpg", // Fun placeholder for pseudonym
      rating: 5
    },
    {
      text: "Clinton A was a pleasure to work with. She's professional, diligent, and delivers what she proposes with quality work.",
      name: "Dave Gioia",
      role: "Repeat Client (US)",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
      rating: 5
    },
    {
      text: "The freelancer was very polite and responsive.",
      name: "J. Stephens",
      role: "Verified Client (US)",
      img: "https://randomuser.me/api/portraits/women/33.jpg",
      rating: 4.8
    }
  ];

  // We duplicate the array to create the seamless infinite loop
  const loopReviews = [...reviews, ...reviews];

  return (
    <section className="dark:bg-dark-900 overflow-hidden bg-white pt-24 pb-24" id="reviews">
      <div className="w-full">
        <Reveal>
          <div className="text-center mb-16 px-6">
            <h2 className="text-3xl font-serif">Client Stories</h2>
            <p className="text-neutral-500 mt-2 font-light">Trusted by market leaders and verified clients worldwide.</p>
          </div>
        </Reveal>

        <div className="relative w-full overflow-hidden mask-gradient-x">
          {/* 
             The track for the slider. 
             animate-scroll moves this track to the left indefinitely.
             hover:pause stops it when the user hovers.
          */}
          <div className="flex w-max animate-scroll hover:[animation-play-state:paused] gap-6 px-6">
            {loopReviews.map((review, idx) => (
              <div 
                key={idx} 
                className="w-[350px] md:w-[450px] flex-shrink-0 dark:bg-dark-800 bg-neutral-50 rounded-2xl p-8 relative border border-transparent hover:border-indigo-500/20 transition-colors"
              >
                <Quote className="absolute top-8 right-8 text-neutral-200 dark:text-neutral-700 opacity-20" size={40} />
                <div className="flex gap-1 text-indigo-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < Math.floor(review.rating) ? "currentColor" : "transparent"} 
                      className={i >= Math.floor(review.rating) && review.rating % 1 !== 0 ? "fill-current opacity-50" : ""}
                    />
                  ))}
                  <span className="ml-2 text-xs text-neutral-400 pt-0.5">{review.rating}</span>
                </div>
                
                <p className="text-lg font-light italic mb-8 text-neutral-700 dark:text-neutral-300 leading-relaxed min-h-[100px]">
                  "{review.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full overflow-hidden border border-white/10">
                    <img src={review.img} alt={review.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{review.name}</p>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;