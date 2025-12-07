import React from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import Reveal from './Reveal';

const Testimonials: React.FC = () => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const reviews = [
    {
      text: "Clinton Agency didn't just build a website; they built a sales machine. My book hit the best-seller list because of their BookTok strategy.",
      name: "Sarah J.",
      role: "Author",
      img: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "The aesthetic excellence is unmatched. My brand finally looks as premium as the price I charge.",
      name: "David R.",
      role: "CEO & Founder",
      img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "Efficiency, automation, and style. They saved me 20 hours a week and doubled my engagement.",
      name: "Priya P.",
      role: "Content Creator",
      img: "https://randomuser.me/api/portraits/women/22.jpg"
    }
  ];

  return (
    <section className="dark:bg-dark-900 overflow-hidden bg-white pt-24 pb-24" id="reviews">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-3xl font-serif">Client Stories</h2>
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                onClick={() => scroll('right')}
                className="p-2 rounded-full border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800 transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8"
          >
            {reviews.map((review, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[400px] dark:bg-dark-800 snap-center bg-neutral-50 rounded-2xl p-8 relative">
                <Quote className="absolute top-8 right-8 text-neutral-200 dark:text-neutral-700 opacity-20" size={40} />
                <div className="flex gap-1 text-indigo-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-lg font-light italic mb-8 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-200 rounded-full overflow-hidden border border-white/10">
                    <img src={review.img} alt={review.name} className="w-full h-full object-cover grayscale" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{review.name}</p>
                    <p className="text-xs text-neutral-400 uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Testimonials;