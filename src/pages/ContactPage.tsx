import React from 'react';
import { Sparkles } from 'lucide-react';
import { ContactInfoCard } from '../components/contact/ContactInfoCard';
import { ContactForm } from '../components/contact/ContactForm';
import { MapEmbed } from '../components/contact/MapEmbed';
import { SEO } from '../components/common/SEO';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#FAF5EB] py-12 md:py-20 min-h-screen">
      <SEO
        title="Contact Us & Location"
        description="Get in touch with Saffron Leaf Restaurant in Kumbakonam, Tamil Nadu. View our address, phone number, opening hours, Google Maps directions and contact form."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163E2D]/10 text-[#163E2D] border border-[#163E2D]/15 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
            <span>We Love Hearing From You</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#163E2D] leading-tight mb-4">
            Contact & Directions
          </h1>
          <p className="text-base sm:text-lg text-[#636363] leading-relaxed">
            Have questions about table bookings, private dining, or catering? Reach out through our direct channels or visit us in Kumbakonam.
          </p>
        </div>

        {/* 2 Column: Info Card & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          <div className="lg:col-span-5">
            <ContactInfoCard />
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

        {/* Location & Map Section */}
        <div className="pt-6 space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#163E2D]">
              Locate Us in Kumbakonam
            </h2>
            <p className="text-xs sm:text-sm text-[#636363] mt-1">
              Conveniently situated along Temple Road, with ample parking and accessibility.
            </p>
          </div>

          <MapEmbed />
        </div>

      </div>
    </div>
  );
};
