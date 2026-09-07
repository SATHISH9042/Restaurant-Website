import React from 'react';
import { Flame, Award, ChefHat } from 'lucide-react';
import { clsx } from 'clsx';

interface DietaryBadgeProps {
  isVegetarian: boolean;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  spiceLevel?: 0 | 1 | 2 | 3;
  showText?: boolean;
}

export const DietaryBadge: React.FC<DietaryBadgeProps> = ({
  isVegetarian,
  isBestseller,
  isChefSpecial,
  spiceLevel = 0,
  showText = false,
}) => {
  return (
    <div className="inline-flex items-center gap-2 flex-wrap">
      {/* Standard Indian Veg / Non-Veg Icon */}
      <div
        className={clsx(
          "w-4 h-4 border flex items-center justify-center p-0.5 rounded-[3px] bg-white",
          isVegetarian ? "border-emerald-600" : "border-rose-700"
        )}
        title={isVegetarian ? "Vegetarian" : "Non-Vegetarian"}
      >
        <span
          className={clsx(
            "w-2 h-2 rounded-full",
            isVegetarian ? "bg-emerald-600" : "bg-rose-700"
          )}
        />
      </div>

      {showText && (
        <span
          className={clsx(
            "text-xs font-semibold uppercase tracking-wider",
            isVegetarian ? "text-emerald-700" : "text-rose-800"
          )}
        >
          {isVegetarian ? "Veg" : "Non-Veg"}
        </span>
      )}

      {/* Bestseller Badge */}
      {isBestseller && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FAF1D5] text-[#8E6221] border border-[#D4A359]/40 tracking-wider uppercase">
          <Award className="w-3 h-3 text-[#B88636]" />
          <span>Popular</span>
        </span>
      )}

      {/* Chef's Special Badge */}
      {isChefSpecial && (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#163E2D]/10 text-[#163E2D] border border-[#163E2D]/20 tracking-wider uppercase">
          <ChefHat className="w-3 h-3 text-[#163E2D]" />
          <span>Chef's Choice</span>
        </span>
      )}

      {/* Spice Level Indicator */}
      {spiceLevel > 0 && (
        <span
          className="inline-flex items-center gap-0.5 text-xs"
          title={`Spice Level: ${spiceLevel} / 3`}
        >
          {Array.from({ length: spiceLevel }).map((_, i) => (
            <Flame key={i} className="w-3 h-3 text-red-500 fill-red-500" />
          ))}
        </span>
      )}
    </div>
  );
};
