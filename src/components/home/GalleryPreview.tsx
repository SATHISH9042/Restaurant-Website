import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { Button } from '../common/Button';

export const GalleryPreview: React.FC = () => {
  const previewImages = [
    {
      title: 'Golden Dosa Perfection',
      category: 'Food',
      src: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Fluffy Idlis & Drumstick Sambar',
      category: 'Food',
      src: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Aromatic Dum Biryani',
      category: 'Food',
      src: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Serene Restaurant Ambience',
      category: 'Interior',
      src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Family Dining Moments',
      category: 'Experience',
      src: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Brass Davarah Filter Coffee',
      category: 'Beverages',
      src: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Chef Preparing Fresh Masalas',
      category: 'Kitchen',
      src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Festive Banana Leaf Thali',
      category: 'Food',
      src: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF5EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Visual Journey"
          title="A Feast for the Eyes"
          subtitle="See what's cooking at Saffron Leaf — from steaming tiffins to timeless brassware."
        />

        {/* 8 Item Visual Grid with Hover Overlay */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {previewImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative h-48 sm:h-64 rounded-2xl overflow-hidden shadow-warm-sm bg-gray-100"
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
              />

              {/* Hover Dark Overlay & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1B13]/90 via-[#163E2D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4A359]">
                  {img.category}
                </span>
                <p className="text-xs sm:text-sm font-display font-semibold text-white">
                  {img.title}
                </p>
                <Link
                  to="/gallery"
                  className="mt-2 inline-flex items-center gap-1 text-[11px] text-[#FAF5EB] hover:text-[#D4A359]"
                >
                  <Eye className="w-3 h-3 text-[#D4A359]" />
                  <span>View in Gallery</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Gallery Button */}
        <div className="mt-12 text-center">
          <Button
            to="/gallery"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Full Gallery
          </Button>
        </div>

      </div>
    </section>
  );
};
