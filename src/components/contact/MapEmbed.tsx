import React from 'react';
import { restaurantConfig } from '../../config/restaurant';

export const MapEmbed: React.FC = () => {
  return (
    <div className="w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-warm-lg border border-[#D4A359]/20 relative bg-gray-100">
      <iframe
        title="Saffron Leaf Restaurant Location Map"
        src={restaurantConfig.contact.maps.embedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full grayscale-[20%] contrast-[105%]"
      />
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-[#D4A359]/30 text-xs font-semibold text-[#163E2D]">
        📍 123 Temple Road, Kumbakonam
      </div>
    </div>
  );
};
