import React, { useState } from 'react';
import { Hero } from '../components/home/Hero';
import { FeaturedDishes } from '../components/home/FeaturedDishes';
import { StorySection } from '../components/home/StorySection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { MenuPreview } from '../components/home/MenuPreview';
import { SpecialOffer } from '../components/home/SpecialOffer';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { GalleryPreview } from '../components/home/GalleryPreview';
import { ReservationCTA } from '../components/home/ReservationCTA';
import { DishModal } from '../components/menu/DishModal';
import { SEO } from '../components/common/SEO';
import type { MenuItem } from '../types';

export const HomePage: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);

  return (
    <>
      <SEO 
        title="Authentic South Indian Cuisine | Kumbakonam" 
        description="Experience authentic South Indian cuisine at Saffron Leaf Restaurant. Crispy dosas, fragrant biryanis, Chettinad specialties & degree filter coffee in a warm family dining atmosphere."
      />

      <Hero />
      <FeaturedDishes onSelectDish={(dish) => setSelectedDish(dish)} />
      <StorySection />
      <WhyChooseUs />
      <MenuPreview />
      <SpecialOffer />
      <TestimonialsSection />
      <GalleryPreview />
      <ReservationCTA />

      {/* Dish Quick Detail Modal */}
      <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
    </>
  );
};
