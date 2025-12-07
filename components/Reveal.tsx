import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const style = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={`transition-all duration-700 ease-out transform ${
        isVisible
          ? 'opacity-100 translate-y-0 filter-none'
          : 'opacity-0 translate-y-10 blur-sm'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Reveal;