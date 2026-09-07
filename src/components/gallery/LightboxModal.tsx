import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import type { GalleryItem } from '../../types';

interface LightboxModalProps {
  items: GalleryItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  items,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const currentItem = currentIndex !== null ? items[currentIndex] : null;

  const handlePrev = useCallback(() => {
    if (currentIndex === null) return;
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(prevIndex);
  }, [currentIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (currentIndex === null) return;
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(nextIndex);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handlePrev, handleNext]);

  if (currentIndex === null || !currentItem) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 select-none">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Content Box */}
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
          
          {/* Top Bar: Counter & Close button */}
          <div className="w-full flex items-center justify-between text-white/80 pb-4 px-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>{currentItem.category} • {currentIndex + 1} of {items.length}</span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close Lightbox"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#D4A359]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Visual Carousel Area */}
          <div className="relative w-full flex items-center justify-center min-h-[300px] max-h-[75vh]">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-2 sm:-left-6 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#D4A359]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-2 sm:-right-6 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white border border-white/20 backdrop-blur-sm transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#D4A359]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Current Image */}
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 max-h-[70vh] bg-black flex items-center justify-center"
            >
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </motion.div>
          </div>

          {/* Bottom Caption & Description */}
          <div className="w-full max-w-2xl bg-black/60 backdrop-blur-md p-4 mt-4 rounded-2xl border border-white/10 text-center text-white">
            <h3 className="font-display font-bold text-lg sm:text-xl text-[#FAF1D5] mb-1">
              {currentItem.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              {currentItem.description}
            </p>
          </div>

        </div>
      </div>
    </AnimatePresence>
  );
};
