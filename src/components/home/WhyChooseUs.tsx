import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed, Leaf, Users, HeartHandshake } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: UtensilsCrossed,
      title: 'Authentic Recipes',
      description: 'Traditional recipes inspired by the rich culinary heritage of South India and timeless Chettinad spice lore.',
    },
    {
      icon: Leaf,
      title: 'Fresh Ingredients',
      description: 'Fresh vegetables, quality spices and carefully selected ingredients in every dish, prepared from scratch daily.',
    },
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'A comfortable dining experience for families, friends and celebrations with spacious seating and warm vibes.',
    },
    {
      icon: HeartHandshake,
      title: 'Warm Hospitality',
      description: 'Friendly service and a welcoming atmosphere from the moment you walk in, treating every guest as family.',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF5EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="The Saffron Leaf Standard"
          title="Why Guests Choose Saffron Leaf"
          subtitle="We craft each dish with uncompromising dedication to authentic taste, hygiene, and genuine warmth."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-3xl border border-[#D4A359]/20 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4A359]/10 rounded-bl-full rounded-tr-3xl transition-transform duration-300 group-hover:scale-125" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#163E2D]/10 group-hover:bg-[#163E2D] flex items-center justify-center transition-colors duration-300 mb-6 text-[#163E2D] group-hover:text-[#D4A359] shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#163E2D] mb-3 group-hover:text-[#8E6221] transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-[#636363] text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center text-xs font-semibold text-[#8E6221]">
                  <span>Crafted with devotion</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
