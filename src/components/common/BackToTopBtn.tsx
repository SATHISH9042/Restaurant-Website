import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { clsx } from 'clsx';

export const BackToTopBtn: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={clsx(
        "fixed bottom-6 left-6 z-40 p-3 rounded-full bg-[#163E2D]/90 text-[#D4A359] border border-[#D4A359]/30 shadow-warm-lg backdrop-blur-sm transition-all duration-300 hover:bg-[#163E2D] hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#D4A359]",
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-6 pointer-events-none"
      )}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
