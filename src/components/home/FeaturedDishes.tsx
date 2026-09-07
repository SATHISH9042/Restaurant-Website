import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { DietaryBadge } from '../common/DietaryBadge';
import { Button } from '../common/Button';
import type { MenuItem } from '../../types';

interface FeaturedDishesProps {
  onSelectDish?: (dish: MenuItem) => void;
}

export const FeaturedDishes: React.FC<FeaturedDishesProps> = ({ onSelectDish }) => {
  const signatureDishes: MenuItem[] = [
    {
      id: 'ghee-roast-dosa',
      name: 'Ghee Roast Dosa',
      description: 'Crispy golden dosa finished with aromatic ghee and served with sambar and house chutneys.',
      price: 180,
      category: 'breakfast',
      isVegetarian: true,
      isBestseller: true,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80',
      servingInfo: 'Served with 3 coconut & tomato chutneys & sambar',
    },
    {
      id: 'mini-idli-sambar',
      name: 'Mini Idli Sambar',
      description: 'Soft bite-sized idlis soaked in flavourful sambar and topped with fresh coriander.',
      price: 140,
      category: 'south-indian',
      isVegetarian: true,
      isBestseller: true,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
      servingInfo: '14 bite-sized idlis in piping hot spiced sambar',
    },
    {
      id: 'chettinad-chicken',
      name: 'Chettinad Chicken',
      description: 'Tender chicken cooked with roasted spices, curry leaves, coconut and traditional Chettinad flavours.',
      price: 320,
      category: 'non-vegetarian',
      isVegetarian: false,
      isBestseller: true,
      spiceLevel: 3,
      image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=80',
      servingInfo: 'Heirloom 18-spice roasted masala gravy',
    },
    {
      id: 'vegetable-biryani',
      name: 'Vegetable Biryani',
      description: 'Fragrant basmati rice layered with seasonal vegetables and freshly ground spices.',
      price: 240,
      category: 'biryani',
      isVegetarian: true,
      isBestseller: true,
      spiceLevel: 1,
      image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93?auto=format&fit=crop&w=800&q=80',
      servingInfo: 'Served in earthenware pot with fresh curd raita',
    },
    {
      id: 'paneer-pepper-fry',
      name: 'Paneer Pepper Fry',
      description: 'Cubes of soft paneer tossed with cracked pepper, onions, curry leaves and South Indian spices.',
      price: 260,
      category: 'vegetarian',
      isVegetarian: true,
      isBestseller: true,
      spiceLevel: 2,
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=800&q=80',
      servingInfo: 'Sizzling wok tossed appetizer',
    },
    {
      id: 'filter-coffee',
      name: 'Filter Coffee',
      description: 'Traditional South Indian filter coffee brewed fresh and served hot.',
      price: 90,
      category: 'beverages',
      isVegetarian: true,
      isBestseller: true,
      spiceLevel: 0,
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
      servingInfo: 'Served in authentic brass davarah and tumbler',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF5EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Chef's Selections"
          title="Our Signature Dishes"
          subtitle="A few favourites that keep our guests coming back time and again."
        />

        {/* Dish Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-warm-sm hover:shadow-warm-lg transition-all duration-300 border border-[#D4A359]/20 flex flex-col hover:-translate-y-1.5"
            >
              {/* Image Container with zoom */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                <img
                  src={dish.image}
                  alt={dish.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                
                {/* Dietary badge & Popular Pill */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm flex items-center">
                    <DietaryBadge isVegetarian={dish.isVegetarian} />
                  </div>
                  {dish.isBestseller && (
                    <span className="bg-[#D4A359] text-[#141615] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      Popular
                    </span>
                  )}
                </div>

                {/* Price Tag pill */}
                <div className="absolute bottom-4 right-4 bg-[#163E2D] text-[#FAF5EB] px-3.5 py-1.5 rounded-full font-display font-bold text-lg shadow-md border border-[#D4A359]/30">
                  ₹{dish.price}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#163E2D] group-hover:text-[#8E6221] transition-colors mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-[#636363] text-sm leading-relaxed mb-4">
                    {dish.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-[#888888] font-medium">
                    {dish.servingInfo || 'Freshly made to order'}
                  </span>
                  
                  {onSelectDish ? (
                    <button
                      onClick={() => onSelectDish(dish)}
                      className="text-xs font-bold text-[#163E2D] hover:text-[#D4A359] flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <Link
                      to="/menu"
                      className="text-xs font-bold text-[#163E2D] hover:text-[#D4A359] flex items-center gap-1 transition-colors"
                    >
                      <span>Order on Menu</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="mt-14 text-center">
          <Button
            to="/menu"
            variant="primary"
            size="lg"
            rightIcon={<ArrowRight className="w-5 h-5" />}
          >
            Explore Complete Menu
          </Button>
        </div>

      </div>
    </section>
  );
};
