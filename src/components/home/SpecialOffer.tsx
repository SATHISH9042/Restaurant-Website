import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, CalendarDays, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';
import { restaurantConfig } from '../../config/restaurant';

export const SpecialOffer: React.FC = () => {
  const offer = restaurantConfig.specialOffer;

  return (
    <section className="py-20 bg-[#FAF5EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Luxury Promotion Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#163E2D] via-[#113023] to-[#0A1B13] border-2 border-[#D4A359]/30 shadow-2xl p-8 sm:p-12 lg:p-16 text-[#FAF5EB]"
        >
          {/* Subtle gold decorative background patterns */}
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-[#D4A359]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-[#2A6B4F]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#D4A359_1px,transparent_1px)] [background-size:20px_20px] opacity-10 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A359]/20 text-[#D4A359] border border-[#D4A359]/40 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{offer.tag}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                {offer.title}
              </h2>

              <p className="text-base sm:text-lg text-[#FAF5EB]/85 leading-relaxed">
                "{offer.subtitle}"
              </p>

              {/* Offer Inclusions List */}
              <div className="bg-black/30 rounded-2xl p-5 sm:p-6 border border-white/10 space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-[#D4A359]">
                  What's Included in the Feast:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  {offer.inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#D4A359] shrink-0 mt-0.5" />
                      <span className="text-[#FAF5EB]/90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-[#D4A359]/90 italic">
                * {offer.validity}
              </p>
            </div>

            {/* Right Content: Pricing Box & Action (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-[#D4A359]/30 text-center space-y-6 shadow-warm-lg">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D4A359] font-bold block mb-1">
                    Special Combo Price
                  </span>
                  <div className="flex items-baseline justify-center gap-3">
                    <span className="text-5xl sm:text-6xl font-display font-extrabold text-white">
                      ₹{offer.price}
                    </span>
                    {offer.originalPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ₹{offer.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-[#FAF5EB]/60 mt-1 block">
                    Feeds 3-4 Persons comfortably
                  </span>
                </div>

                <div className="space-y-3">
                  <Button
                    to="/reservations"
                    variant="gold"
                    size="lg"
                    leftIcon={<CalendarDays className="w-5 h-5" />}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="w-full justify-center shadow-gold-glow font-bold text-sm"
                  >
                    {offer.ctaText}
                  </Button>

                  <a
                    href="tel:919876543210"
                    className="inline-block text-xs text-[#FAF5EB]/80 hover:text-white underline transition-colors"
                  >
                    Or call +91 98765 43210 for instant group booking
                  </a>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
