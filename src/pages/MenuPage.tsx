import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, X, SlidersHorizontal, Sparkles, MessageCircle, Utensils } from 'lucide-react';
import { MenuCard } from '../components/menu/MenuCard';
import { DishModal } from '../components/menu/DishModal';
import { SEO } from '../components/common/SEO';
import { menuItems, menuCategories } from '../config/menuData';
import type { MenuItem, MenuCategoryId } from '../types';
import { getWhatsAppUrl } from '../config/restaurant';
import { clsx } from 'clsx';

export const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [vegOnly, setVegOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  // Filter & Sort Logic
  const filteredDishes = useMemo(() => {
    return menuItems
      .filter((item: MenuItem) => {
        // Category match
        const matchesCategory =
          activeCategory === 'all'
            ? true
            : activeCategory === 'vegetarian'
            ? item.isVegetarian
            : activeCategory === 'non-vegetarian'
            ? !item.isVegetarian
            : item.category === activeCategory;

        // Search match
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !query ||
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          (item.servingInfo && item.servingInfo.toLowerCase().includes(query));

        // Veg only toggle
        const matchesVeg = vegOnly ? item.isVegetarian : true;

        return matchesCategory && matchesSearch && matchesVeg;
      })
      .sort((a: MenuItem, b: MenuItem) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        // Default: featured/bestseller first
        if (a.isBestseller && !b.isBestseller) return -1;
        if (!a.isBestseller && b.isBestseller) return 1;
        return 0;
      });
  }, [activeCategory, searchQuery, vegOnly, sortBy]);

  const activeCategoryInfo = menuCategories.find((c) => c.id === activeCategory);

  return (
    <div className="bg-[#FAF5EB] py-12 md:py-20 min-h-screen">
      <SEO
        title="Menu & Authentic South Indian Dishes"
        description="Browse the complete menu of Saffron Leaf Restaurant. Crispy dosas, idli sambar, authentic Chettinad curries, fragrant biryanis, desserts and Kumbakonam filter coffee."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163E2D]/10 text-[#163E2D] border border-[#163E2D]/15 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
            <span>Handcrafted Flavours • Made Fresh to Order</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#163E2D] leading-tight mb-4">
            Our Complete Menu
          </h1>
          <p className="text-base sm:text-lg text-[#636363] leading-relaxed">
            From sunrise breakfast tiffins to rich dinner feasts, explore traditional South Indian cuisine prepared with pure ingredients.
          </p>
        </div>

        {/* Search, Filter & Controls Bar */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D4A359]/20 shadow-warm-sm space-y-6">
          
          {/* Top Row: Search Input & Quick Controls */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input (6 cols) */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. Dosa, Biryani, Chettinad, Coffee)..."
                className="w-full pl-12 pr-10 py-3 rounded-full border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Veg Only Toggle (3 cols) */}
            <div className="md:col-span-3 flex items-center justify-start md:justify-center">
              <label className="flex items-center gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={vegOnly}
                  onChange={(e) => setVegOnly(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-600 relative"></div>
                <span className="text-xs sm:text-sm font-bold text-[#163E2D] flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 inline-block"></span>
                  Veg Dishes Only
                </span>
              </label>
            </div>

            {/* Sort Dropdown (3 cols) */}
            <div className="md:col-span-3 flex items-center gap-2 justify-end">
              <SlidersHorizontal className="w-4 h-4 text-gray-500 shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full text-xs sm:text-sm px-3 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#163E2D] bg-white font-medium"
              >
                <option value="featured">Featured / Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-gray-100">
            {menuCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={clsx(
                    'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 shrink-0 cursor-pointer',
                    isActive
                      ? 'bg-[#163E2D] text-[#FAF1D5] shadow-md border border-[#D4A359]/40'
                      : 'bg-[#FAF5EB] text-[#323232] hover:bg-[#F3EEE3] hover:text-[#163E2D] border border-gray-200/60'
                  )}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

        </div>

        {/* Category Description Banner */}
        {activeCategoryInfo && activeCategoryInfo.tagline && (
          <div className="flex items-center justify-between px-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-display font-bold text-[#163E2D]">
                {activeCategoryInfo.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#636363]">
                {activeCategoryInfo.tagline}
              </p>
            </div>
            <span className="text-xs font-semibold text-[#8E6221] bg-[#FAF1D5] px-3 py-1 rounded-full border border-[#D4A359]/30">
              {filteredDishes.length} Items
            </span>
          </div>
        )}

        {/* Menu Grid */}
        {filteredDishes.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredDishes.map((dish) => (
              <MenuCard
                key={dish.id}
                item={dish}
                onViewDetails={(item) => setSelectedDish(item)}
              />
            ))}
          </motion.div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#D4A359]/20 space-y-4 max-w-lg mx-auto">
            <Utensils className="w-12 h-12 text-gray-300 mx-auto" />
            <h3 className="font-display font-bold text-xl text-[#163E2D]">
              No dishes found
            </h3>
            <p className="text-sm text-[#636363]">
              We couldn't find anything matching your search or filters. Try clearing your search query or selecting another category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setVegOnly(false);
                setActiveCategory('all');
              }}
              className="px-5 py-2.5 rounded-full bg-[#163E2D] text-white text-xs font-semibold hover:bg-[#113023] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Catering & Group Order Banner */}
        <div className="bg-gradient-to-r from-[#163E2D] to-[#113023] rounded-3xl p-8 sm:p-10 text-[#FAF5EB] flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#D4A359]/30 shadow-warm-lg">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-display font-bold text-2xl text-white">
              Planning a Catering or Bulk Tiffin Order?
            </h3>
            <p className="text-xs sm:text-sm text-[#FAF5EB]/80 max-w-xl">
              We provide traditional South Indian banquet spreads, banana leaf service, and office lunch boxes for family events, corporate gatherings, and festivals.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Hello Saffron Leaf Restaurant, I would like to inquire about bulk catering services and menu options.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#D4A359] hover:bg-[#C59B27] text-[#141615] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-gold-glow shrink-0 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#163E2D]" />
            <span>Inquire Catering</span>
          </a>
        </div>

      </div>

      {/* Dish Detailed Inspection Modal */}
      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </div>
  );
};
