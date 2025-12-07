import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

const ComparisonSlider: React.FC = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [position, setPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleResize = useCallback((clientX: number) => {
    if (sliderRef.current) {
      const { left, width } = sliderRef.current.getBoundingClientRect();
      const newPosition = ((clientX - left) / width) * 100;
      setPosition(Math.min(Math.max(newPosition, 0), 100));
    }
  }, []);

  const handleMouseDown = () => setIsResizing(true);
  const handleTouchStart = () => setIsResizing(true);

  useEffect(() => {
    const handleMouseUp = () => setIsResizing(false);
    const handleMouseMove = (e: MouseEvent) => {
      if (isResizing) handleResize(e.clientX);
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isResizing) handleResize(e.touches[0].clientX);
    };

    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchend', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isResizing, handleResize]);

  return (
    <div className="max-w-5xl mx-auto mb-24">
      <div 
        ref={sliderRef}
        className="relative w-full aspect-[16/10] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl select-none ring-1 ring-white/10"
      >
        {/* After Image (Base) - Clean Website */}
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          alt="After - High Conversion"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <span className="absolute top-4 right-4 bg-indigo-600/90 text-white px-3 py-1 text-xs font-bold tracking-wider rounded backdrop-blur-sm z-10 shadow-lg">AFTER: CLARITY</span>

        {/* Before Image (Overlay) - Messy/Old */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden border-r-2 border-indigo-400 bg-neutral-900"
          style={{ width: `${position}%` }}
        >
           <img
            src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=2000&auto=format&fit=crop"
            className="absolute top-0 left-0 h-full max-w-none object-cover opacity-60 grayscale"
            style={{ width: sliderRef.current ? sliderRef.current.offsetWidth : '100%' }}
            alt="Before - Confusion"
            draggable={false}
          />
          <div className="absolute inset-0 bg-red-900/10"></div>
          <span className="absolute top-4 left-4 bg-neutral-800/90 text-neutral-400 px-3 py-1 text-xs font-bold tracking-wider rounded backdrop-blur-sm z-10 border border-white/10">BEFORE: CONFUSION</span>
        </div>

        {/* Handle */}
        <div
          className="absolute top-0 bottom-0 w-10 -ml-5 cursor-col-resize z-20 flex items-center justify-center group"
          style={{ left: `${position}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          <div className="w-10 h-10 bg-white text-indigo-900 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)] group-hover:scale-110 transition-transform">
             <ChevronsLeftRight className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center px-4 mt-6">
          <span className="text-xs text-neutral-500 font-mono">CONFUSION</span>
          <p className="text-center text-xs text-neutral-400 uppercase tracking-widest">Drag to see the shift</p>
          <span className="text-xs text-indigo-400 font-mono">CONVERSION</span>
      </div>
    </div>
  );
};

export default ComparisonSlider;