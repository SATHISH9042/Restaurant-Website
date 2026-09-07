import React from 'react';
import type { MenuItem } from '../../types';
import { DietaryBadge } from '../common/DietaryBadge';
import { Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../config/restaurant';

interface MenuCardProps {
  item: MenuItem;
  onViewDetails: (item: MenuItem) => void;
}

export const MenuCard: React.FC<MenuCardProps> = ({ item, onViewDetails }) => {
  const whatsappDishUrl = getWhatsAppUrl(
    `Hello Saffron Leaf, I would like to inquire about ordering '${item.name}' (₹${item.price}).`
  );

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 border border-[#D4A359]/20 flex flex-col group hover:-translate-y-1.5">
      {/* Dish Image Container */}
      <div 
        className="relative h-52 sm:h-56 w-full overflow-hidden bg-gray-100 cursor-pointer"
        onClick={() => onViewDetails(item)}
      >
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm flex items-center">
            <DietaryBadge isVegetarian={item.isVegetarian} spiceLevel={item.spiceLevel} />
          </div>
          {item.isBestseller && (
            <span className="bg-[#D4A359] text-[#141615] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              Popular
            </span>
          )}
        </div>

        {/* Price Tag */}
        <div className="absolute bottom-3 right-3 bg-[#163E2D] text-[#FAF5EB] px-3.5 py-1 rounded-full font-display font-bold text-base shadow-md border border-[#D4A359]/30">
          ₹{item.price}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 
              onClick={() => onViewDetails(item)}
              className="font-display font-bold text-lg sm:text-xl text-[#163E2D] group-hover:text-[#8E6221] transition-colors cursor-pointer"
            >
              {item.name}
            </h3>
          </div>

          <p className="text-[#636363] text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
            {item.description}
          </p>
        </div>

        <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
          <button
            onClick={() => onViewDetails(item)}
            className="text-xs font-semibold text-[#163E2D] hover:text-[#D4A359] transition-colors cursor-pointer"
          >
            View Details
          </button>

          <a
            href={whatsappDishUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FAF5EB] hover:bg-[#163E2D] text-[#163E2D] hover:text-white border border-[#D4A359]/30 text-xs font-semibold transition-all duration-200"
            title="Inquire or Order this dish via WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Enquire</span>
          </a>
        </div>
      </div>
    </div>
  );
};
