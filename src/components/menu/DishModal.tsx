import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, Utensils, ShieldAlert, Sparkles, ChefHat } from 'lucide-react';
import type { MenuItem } from '../../types';
import { DietaryBadge } from '../common/DietaryBadge';
import { Button } from '../common/Button';
import { getWhatsAppUrl } from '../../config/restaurant';

interface DishModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const DishModal: React.FC<DishModalProps> = ({ dish, onClose }) => {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!dish) return null;

  const whatsappDishUrl = getWhatsAppUrl(
    `Hello Saffron Leaf Restaurant, I would like to order or enquire about '${dish.name}' (₹${dish.price}).`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 border border-[#D4A359]/30 max-h-[90vh] flex flex-col"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Top Image */}
          <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-gray-900 shrink-0">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <DietaryBadge isVegetarian={dish.isVegetarian} showText />
                  {dish.isBestseller && (
                    <span className="bg-[#D4A359] text-[#141615] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
                      Bestseller
                    </span>
                  )}
                  {dish.isChefSpecial && (
                    <span className="bg-emerald-800 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                      <ChefHat className="w-3 h-3" />
                      Chef's Special
                    </span>
                  )}
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {dish.name}
                </h3>
              </div>

              <div className="bg-[#163E2D] text-[#D4A359] px-4 py-1.5 rounded-2xl font-display font-extrabold text-2xl border border-[#D4A359]/40 shadow-lg">
                ₹{dish.price}
              </div>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#8E6221] mb-1">
                Description
              </h4>
              <p className="text-sm sm:text-base text-[#323232] leading-relaxed">
                {dish.description}
              </p>
            </div>

            {dish.servingInfo && (
              <div className="bg-[#FAF5EB] p-4 rounded-2xl border border-[#D4A359]/20 flex items-start gap-3">
                <Utensils className="w-5 h-5 text-[#163E2D] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-xs text-[#163E2D] uppercase tracking-wide">
                    Serving Details
                  </p>
                  <p className="text-xs sm:text-sm text-[#636363]">
                    {dish.servingInfo}
                  </p>
                </div>
              </div>
            )}

            {dish.allergens && dish.allergens.length > 0 && (
              <div className="flex items-center gap-2 text-xs text-amber-800 bg-amber-50 p-3 rounded-xl border border-amber-200">
                <ShieldAlert className="w-4 h-4 shrink-0 text-amber-700" />
                <span>Contains: <strong>{dish.allergens.join(', ')}</strong></span>
              </div>
            )}

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Button
                href={whatsappDishUrl}
                variant="gold"
                size="md"
                leftIcon={<MessageCircle className="w-5 h-5 text-[#25D366]" />}
                className="w-full sm:w-auto flex-grow justify-center font-bold"
              >
                Inquire / Order on WhatsApp
              </Button>

              <Button
                to="/reservations"
                variant="primary"
                size="md"
                leftIcon={<Sparkles className="w-4 h-4" />}
                className="w-full sm:w-auto justify-center"
              >
                Reserve Table for this Dish
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
