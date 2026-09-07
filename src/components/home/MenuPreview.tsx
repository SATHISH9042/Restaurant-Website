import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { DietaryBadge } from '../common/DietaryBadge';
import { Button } from '../common/Button';
import { menuItems } from '../../config/menuData';
import type { MenuCategoryId } from '../../types';
import { clsx } from 'clsx';

export const MenuPreview: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>('breakfast');

  const previewCategories: { id: MenuCategoryId; label: string }[] = [
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'south-indian', label: 'South Indian' },
    { id: 'biryani', label: 'Biryani' },
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'non-vegetarian', label: 'Non-Vegetarian' },
    { id: 'desserts', label: 'Desserts' },
    { id: 'beverages', label: 'Beverages' },
  ];

  const filteredItems = menuItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 md:py-28 bg-[#F3EEE3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Gastronomic Delights"
          title="Explore Our Curated Menu"
          subtitle="A harmonious symphony of freshly ground spices, seasoned cast-iron cooking, and authentic heritage recipes."
        />

        {/* Category Pill Tabs */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none px-2">
          {previewCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={clsx(
                  'px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 focus:outline-none shrink-0 cursor-pointer',
                  isActive
                    ? 'bg-[#163E2D] text-[#FAF1D5] shadow-md border border-[#D4A359]/40 scale-105'
                    : 'bg-white/80 text-[#323232] hover:bg-white hover:text-[#163E2D] border border-gray-200/60'
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Showcase List */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredItems.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-white p-5 sm:p-6 rounded-2xl shadow-warm-sm border border-[#D4A359]/20 hover:border-[#D4A359]/60 transition-all duration-300 flex items-start gap-4 hover:shadow-warm-md group"
                >
                  {/* Dish Thumbnail */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 bg-gray-100 relative">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-grow">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <DietaryBadge isVegetarian={dish.isVegetarian} />
                        <h4 className="font-display font-bold text-base sm:text-lg text-[#163E2D] group-hover:text-[#8E6221] transition-colors">
                          {dish.name}
                        </h4>
                      </div>
                      <span className="font-display font-bold text-base sm:text-lg text-[#8E6221] shrink-0">
                        ₹{dish.price}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#636363] line-clamp-2 leading-relaxed mb-2">
                      {dish.description}
                    </p>

                    {dish.isBestseller && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#D4A359] uppercase tracking-wider">
                        <Sparkles className="w-3 h-3" />
                        Signature Favourite
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-14 text-center">
          <Button
            to="/menu"
            variant="gold"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
            className="shadow-gold-glow"
          >
            View Full Menu & Prices
          </Button>
        </div>

      </div>
    </section>
  );
};
