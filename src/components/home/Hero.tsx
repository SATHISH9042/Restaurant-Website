import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Utensils, CalendarDays, Clock, ShoppingBag, ShieldCheck } from 'lucide-react';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0A1B13]">
      {/* Background Image with layered radial and linear gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=2000&q=85"
          alt="Authentic South Indian culinary feast"
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          loading="eager"
        />
        {/* Multi-tier dark green and gold gradient overlay for text legibility & warmth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1B13]/95 via-[#113023]/85 to-[#0A1B13]/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B13] via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(#D4A359_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-[#FAF5EB]">
        
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A359]/20 text-[#D4A359] border border-[#D4A359]/40 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-warm-sm backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-[#D4A359]" />
          <span>Authentic South Indian Flavours • Served Fresh</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-white leading-[1.15] mb-6 drop-shadow-md"
        >
          Taste the Tradition. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAF1D5] via-[#D4A359] to-[#E5BE53]">
            Experience the Difference.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#FAF5EB]/85 font-normal leading-relaxed mb-10"
        >
          From crispy dosas and fragrant biryanis to comforting South Indian classics, Saffron Leaf brings authentic flavours to your table with every carefully prepared dish.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-14"
        >
          <Button
            to="/menu"
            variant="gold"
            size="lg"
            leftIcon={<Utensils className="w-5 h-5" />}
            className="w-full sm:w-auto text-base font-semibold shadow-gold-glow"
          >
            View Menu
          </Button>

          <Button
            to="/reservations"
            variant="white"
            size="lg"
            leftIcon={<CalendarDays className="w-5 h-5 text-[#163E2D]" />}
            className="w-full sm:w-auto text-base font-semibold"
          >
            Reserve a Table
          </Button>
        </motion.div>

        {/* Info Highlights Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto pt-6 border-t border-white/15"
        >
          <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-[#FAF5EB]/90">
            <Clock className="w-4 h-4 text-[#D4A359]" />
            <span className="font-medium">Open Daily • 11 AM - 10:30 PM</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-[#FAF5EB]/90">
            <ShoppingBag className="w-4 h-4 text-[#D4A359]" />
            <span className="font-medium">Dine-In & Takeaway</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 text-xs sm:text-sm text-[#FAF5EB]/90">
            <ShieldCheck className="w-4 h-4 text-[#D4A359]" />
            <span className="font-medium">Freshly Prepared Daily</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
