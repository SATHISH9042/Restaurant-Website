import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Camera } from 'lucide-react';
import { LightboxModal } from '../components/gallery/LightboxModal';
import { SEO } from '../components/common/SEO';
import { galleryItems } from '../config/galleryData';
import type { GalleryCategory, GalleryItem } from '../types';
import { clsx } from 'clsx';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'all', label: 'All Photos' },
    { id: 'food', label: 'Signature Dishes' },
    { id: 'interior', label: 'Restaurant Ambience' },
    { id: 'kitchen', label: 'Kitchen & Spices' },
    { id: 'events', label: 'Celebrations & Events' },
  ];

  const filteredItems = galleryItems.filter(
    (item: GalleryItem) => activeCategory === 'all' || item.category === activeCategory
  );

  return (
    <div className="bg-[#FAF5EB] py-12 md:py-20 min-h-screen">
      <SEO
        title="Photo Gallery & Ambience"
        description="Experience the visual feast of Saffron Leaf Restaurant. Browse photos of our South Indian signature dishes, peaceful restaurant interiors, master chefs, and family celebrations."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163E2D]/10 text-[#163E2D] border border-[#163E2D]/15 text-xs font-semibold tracking-wider uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-[#D4A359]" />
            <span>Visual Glimpses of Saffron Leaf</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#163E2D] leading-tight mb-4">
            A Feast For The Eyes
          </h1>
          <p className="text-base sm:text-lg text-[#636363] leading-relaxed">
            Step into our culinary world — from golden dosas on cast iron to the warm glow of traditional brassware and intimate family spaces.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={clsx(
                  'px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer',
                  isActive
                    ? 'bg-[#163E2D] text-[#FAF1D5] shadow-md border border-[#D4A359]/40 scale-105'
                    : 'bg-white text-[#323232] hover:bg-gray-50 border border-gray-200/70'
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item: GalleryItem, index: number) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setLightboxIndex(index)}
                className="group relative rounded-3xl overflow-hidden shadow-warm-sm hover:shadow-warm-lg transition-all duration-500 bg-white border border-[#D4A359]/20 cursor-pointer h-72 sm:h-80"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Always-visible category pill on top left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-[#163E2D] shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B13]/95 via-[#163E2D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="font-display font-bold text-lg sm:text-xl text-[#FAF5EB] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#FAF5EB]/80 line-clamp-2 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D4A359]">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Click to Expand Lightbox</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={filteredItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIndex) => setLightboxIndex(newIndex)}
      />
    </div>
  );
};
