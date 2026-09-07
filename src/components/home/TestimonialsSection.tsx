import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { testimonials } from '../../config/testimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F3EEE3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Guest Testimonials"
          title="What Our Guests Say"
          subtitle="Genuine experiences shared by food lovers, families, and travelers visiting Saffron Leaf."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-7 rounded-3xl border border-[#D4A359]/20 shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Top Row: Stars and Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#D4A359] fill-[#D4A359]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#D4A359]/30 group-hover:text-[#D4A359]/60 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#323232] leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-gray-100 flex items-center gap-3">
                {item.avatarUrl && (
                  <img
                    src={item.avatarUrl}
                    alt={item.name}
                    loading="lazy"
                    className="w-10 h-10 rounded-full object-cover border border-[#D4A359]/40"
                  />
                )}
                <div>
                  <h4 className="font-display font-bold text-sm text-[#163E2D]">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-gray-500">
                    {item.location} • {item.date}
                  </p>
                  {item.dishRecommended && (
                    <p className="text-[10px] text-[#8E6221] font-semibold mt-0.5">
                      ★ Loved: {item.dishRecommended}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
