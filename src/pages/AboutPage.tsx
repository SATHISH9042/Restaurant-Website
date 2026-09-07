import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  Flame, 
  Leaf, 
  ShieldCheck, 
  ChefHat, 
  UtensilsCrossed, 
  Coffee, 
  Award,
  ArrowRight
} from 'lucide-react';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { SEO } from '../components/common/SEO';

export const AboutPage: React.FC = () => {
  const kitchenStandards = [
    {
      icon: Flame,
      title: 'Fresh Daily Preparation',
      description: 'Our batters, sambars, and fresh coconut chutneys are prepared from scratch twice daily to ensure zero loss of aroma and crunch.',
    },
    {
      icon: Sparkles,
      title: 'Traditional Spice Blends',
      description: 'Whole coriander, Tellicherry black pepper, star anise, and stone-ground turmeric are freshly roasted and ground in-house.',
    },
    {
      icon: ShieldCheck,
      title: 'Spotless Hygienic Kitchen',
      description: 'We follow stringent commercial food safety protocols, filtered water processing, and regular quality audits across all prep stations.',
    },
    {
      icon: Leaf,
      title: 'Direct-From-Source Ingredients',
      description: 'Locally sourced Guntur chillies, aromatic Seeraga Samba rice, cold-pressed gingelly oils, and pure country ghee.',
    },
    {
      icon: ChefHat,
      title: 'Master Chefs & Craftsmen',
      description: 'Our culinary team brings over two decades of traditional tiffin making and Chettinad royal recipe experience.',
    },
    {
      icon: Coffee,
      title: 'Authentic Filter Coffee Decocting',
      description: 'Brewed with traditional brass drip percolators using fresh plantation peaberry beans and chicory blend.',
    },
  ];

  return (
    <div className="bg-[#FAF5EB] py-12 md:py-20">
      <SEO
        title="About Our Story & Kitchen"
        description="Discover the story behind Saffron Leaf Restaurant. Learn about our Kumbakonam heritage, traditional stone-ground recipes, and culinary philosophy."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 md:space-y-28">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163E2D]/10 text-[#163E2D] border border-[#163E2D]/15 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
            <span>Rooted in South Indian Tradition</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#163E2D] leading-tight mb-4">
            The Saffron Leaf Story
          </h1>
          <p className="text-base sm:text-lg text-[#636363] leading-relaxed">
            Honouring culinary heritage through fresh ingredients, time-tested recipes, and heartfelt hospitality.
          </p>
        </div>

        {/* Section 1: Our Story (2-Col Visual) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8E6221]">
              <Heart className="w-4 h-4 text-[#D4A359]" />
              <span>Where It All Began</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#163E2D] leading-tight">
              A Passion For Authentic South Indian Cooking
            </h2>

            <p className="text-base text-[#323232] leading-relaxed">
              Founded on the sacred temple roads of Kumbakonam, Saffron Leaf was born out of a desire to preserve the authentic flavours that define traditional South Indian households.
            </p>

            <p className="text-sm sm:text-base text-[#636363] leading-relaxed">
              Growing up, our founders were inspired by the early morning rhythm of grinding stone wet-grinders, the fragrant sizzle of mustard seeds in fresh sesame oil, and the unmistakable aroma of freshly brewed filter coffee echoing across courtyards.
            </p>

            <p className="text-sm sm:text-base text-[#636363] leading-relaxed">
              We set out to create a dining destination where families and travelers can savor authentic food prepared without shortcuts, preservatives, or artificial enhancers — served in an environment that feels like coming home.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <div>
                <p className="font-display font-bold text-3xl text-[#163E2D]">100%</p>
                <p className="text-xs text-[#636363]">Preservative Free</p>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <div>
                <p className="font-display font-bold text-3xl text-[#163E2D]">25+</p>
                <p className="text-xs text-[#636363]">Heirloom Recipes</p>
              </div>
              <div className="h-10 w-px bg-gray-200" />
              <div>
                <p className="font-display font-bold text-3xl text-[#163E2D]">4.9★</p>
                <p className="text-xs text-[#636363]">Guest Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-warm-lg bg-white border border-[#D4A359]/30">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
                alt="Saffron Leaf dining hall ambience"
                className="w-full h-[420px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#163E2D]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-[#D4A359]/30">
                <p className="font-display font-bold text-base text-[#163E2D]">
                  "Atithi Devo Bhava — The guest is an embodiment of God."
                </p>
                <p className="text-xs text-[#636363] mt-1">
                  Our timeless guiding philosophy since inception.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Our Philosophy Banner */}
        <section className="bg-gradient-to-br from-[#163E2D] via-[#113023] to-[#0A1B13] rounded-3xl p-8 sm:p-14 text-white text-center relative overflow-hidden border border-[#D4A359]/30 shadow-2xl">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#D4A359]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D4A359]">
              Our Guiding Philosophy
            </span>

            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white leading-relaxed">
              "Serve honest food made with quality ingredients, traditional techniques and genuine care."
            </h2>

            <p className="text-sm sm:text-base text-[#FAF5EB]/80 leading-relaxed max-w-2xl mx-auto">
              We never cut corners. We believe that true taste comes from patience: the natural fermentation of batter, the gentle roasting of spices over low embers, and the unhurried warmth of welcoming every guest.
            </p>
          </div>
        </section>

        {/* Section 3: Our Kitchen & Standards */}
        <section>
          <SectionHeading
            eyebrow="Inside The Kitchen"
            title="Our Culinary Standards"
            subtitle="Explore the principles and culinary practices that keep our food consistently delicious and nourishing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kitchenStandards.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-[#D4A359]/20 shadow-warm-sm hover:shadow-warm-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#163E2D]/10 flex items-center justify-center text-[#163E2D] mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#163E2D] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#636363] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section 4: Our Promise & Photography Showcase */}
        <section className="bg-[#F3EEE3] rounded-3xl p-8 sm:p-12 border border-[#D4A359]/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#163E2D]/10 text-[#163E2D] text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-[#D4A359]" />
                <span>Our Uncompromising Promise</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#163E2D]">
                "Every guest should leave satisfied, welcomed and already planning their next visit."
              </h2>

              <p className="text-sm sm:text-base text-[#636363] leading-relaxed">
                Whether you join us for a quick morning idli-vada combo on your way to work, or a relaxed multi-course family dinner on a Sunday evening, our commitment to hospitality and authenticity remains steadfast.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <Button
                  to="/menu"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore The Menu
                </Button>
                
                <Button
                  to="/reservations"
                  variant="gold"
                  size="md"
                  leftIcon={<UtensilsCrossed className="w-4 h-4" />}
                >
                  Reserve Your Table
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
                alt="Chef preparing spice mix"
                className="w-full h-44 object-cover rounded-2xl shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
                alt="Brass filter coffee"
                className="w-full h-44 object-cover rounded-2xl shadow-sm mt-6"
              />
            </div>

          </div>
        </section>

      </div>
    </div>
  );
};
