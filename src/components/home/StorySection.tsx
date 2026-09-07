import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, HeartHandshake, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const StorySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F3EEE3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composite with Gold Accents (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* Decorative background border frame */}
            <div className="absolute -inset-4 border-2 border-[#D4A359]/30 rounded-3xl -rotate-1 hidden sm:block pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg bg-white">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
                alt="Chef preparing fresh spices in the kitchen"
                className="w-full h-[400px] sm:h-[480px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163E2D]/80 via-transparent to-transparent" />

              {/* Floating Testimonial/Badge Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-[#D4A359]/30 text-[#141615]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#163E2D] flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5 text-[#D4A359]" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-sm text-[#163E2D]">
                      Authentic Kumbakonam Tradition
                    </p>
                    <p className="text-xs text-[#636363]">
                      Generations of spice grinding and stone-ground batter
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Small floating badge on top-right */}
            <div className="absolute -top-4 -right-4 bg-[#D4A359] text-[#141615] px-4 py-2 rounded-2xl shadow-md border-2 border-white text-xs font-bold uppercase tracking-wider hidden sm:flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Est. 2018</span>
            </div>
          </motion.div>

          {/* Right Column: Story Copy & CTA (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#163E2D]/10 text-[#163E2D] border border-[#163E2D]/15 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
              <span>Our Heritage & Vision</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#163E2D] leading-tight">
              A Taste of Home, <br />
              <span className="text-[#8E6221]">Served With Heart.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#323232] font-medium leading-relaxed">
              Saffron Leaf was created with one simple idea — great food should bring people together.
            </p>

            <p className="text-sm sm:text-base text-[#636363] leading-relaxed">
              Our kitchen celebrates the flavours of South India using fresh ingredients, traditional spice blends and time-tested recipes. From breakfast with family to dinner with friends, every meal is prepared with care and served with genuine hospitality.
            </p>

            {/* Key Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#163E2D]">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359] shrink-0" />
                <span>Zero artificial preservatives</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#163E2D]">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359] shrink-0" />
                <span>Daily stone-ground batters</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#163E2D]">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359] shrink-0" />
                <span>Pure cow ghee & coconut oil</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#163E2D]">
                <CheckCircle2 className="w-4 h-4 text-[#D4A359] shrink-0" />
                <span>Warm family-first dining</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                to="/about"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Discover Our Story
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
