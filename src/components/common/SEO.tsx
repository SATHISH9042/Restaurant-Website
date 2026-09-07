import React, { useEffect } from 'react';
import { restaurantConfig } from '../../config/restaurant';

interface SEOProps {
  title?: string;
  description?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  useEffect(() => {
    const defaultTitle = restaurantConfig.seo.title;
    const pageTitle = title ? `${title} | ${restaurantConfig.name}` : defaultTitle;
    document.title = pageTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || restaurantConfig.seo.description);
    }
  }, [title, description]);

  return null;
};
