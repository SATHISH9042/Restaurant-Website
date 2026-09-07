import React from 'react';
import { UtensilsCrossed, Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/common/Button';
import { SEO } from '../components/common/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#FAF5EB] px-4 py-20 text-center">
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />

      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 bg-[#163E2D] text-[#D4A359] rounded-3xl flex items-center justify-center mx-auto shadow-warm-lg">
          <UtensilsCrossed className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-[#8E6221]">
          404 • Page Not Found
        </span>

        <h1 className="text-3xl sm:text-4xl font-display font-bold text-[#163E2D]">
          Looking For Delicious Food?
        </h1>

        <p className="text-sm text-[#636363] leading-relaxed">
          It looks like the page you were looking for doesn't exist or has moved. Let's get you back to our delicious menu.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button to="/" variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
            Return Home
          </Button>

          <Button to="/menu" variant="gold" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
            Explore Menu
          </Button>
        </div>
      </div>
    </div>
  );
};
