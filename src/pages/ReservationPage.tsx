import React from 'react';
import { Sparkles, Clock, Phone, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { ReservationForm } from '../components/reservations/ReservationForm';
import { SEO } from '../components/common/SEO';
import { restaurantConfig } from '../config/restaurant';

export const ReservationPage: React.FC = () => {
  return (
    <div className="bg-[#FAF5EB] py-12 md:py-20 min-h-screen">
      <SEO
        title="Table Reservation & Dining Request"
        description="Reserve a table at Saffron Leaf Restaurant in Kumbakonam. Enjoy South Indian culinary specials with family, friends, or celebration gatherings."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#163E2D]/10 text-[#163E2D] border border-[#163E2D]/15 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D4A359]" />
            <span>Table Booking & Hospitality</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#163E2D] leading-tight mb-4">
            Reserve Your Dining Experience
          </h1>
          <p className="text-base sm:text-lg text-[#636363] leading-relaxed">
            Planning a celebration, a business lunch or a cozy weekend breakfast? Submit your table request and our team will prepare your seating with care.
          </p>
        </div>

        {/* 2-Column Grid: Form & Dining Information */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <ReservationForm />
          </div>

          {/* Dining Policy & Hours Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Dining Guidelines Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#D4A359]/20 shadow-warm-sm space-y-5">
              <h3 className="font-display font-bold text-xl text-[#163E2D] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D4A359]" />
                Reservation Guidelines
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#636363]">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#163E2D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#141615]">Table Holding Policy:</strong> Tables are held for 15 minutes past the reserved time before being released to waiting walk-in guests.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-[#163E2D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#141615]">Large Groups (10+ Guests):</strong> For parties exceeding 10 guests or custom banquet menus, we recommend booking at least 24 hours in advance.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HeartHandshake className="w-4 h-4 text-[#163E2D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#141615]">Special Dietary Needs:</strong> Jain preparation, vegan options, or mild spice adjustments can be accommodated upon request.
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Phone Assistance */}
            <div className="bg-[#163E2D] text-[#FAF5EB] rounded-3xl p-6 sm:p-8 border border-[#D4A359]/30 shadow-warm-md space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D4A359]">
                Need Instant Assistance?
              </span>

              <h4 className="font-display font-bold text-xl text-white">
                Call the Restaurant Desk
              </h4>

              <p className="text-xs sm:text-sm text-[#FAF5EB]/80 leading-relaxed">
                If your booking is for within the next 2 hours, please call our manager directly for instant table allocation.
              </p>

              <a
                href={`tel:${restaurantConfig.contact.phone.raw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#D4A359] hover:bg-[#C59B27] text-[#141615] font-bold text-xs uppercase tracking-wider transition-colors shadow-gold-glow"
              >
                <Phone className="w-4 h-4 text-[#163E2D]" />
                <span>Call {restaurantConfig.contact.phone.display}</span>
              </a>
            </div>

            {/* Operating Hours Breakdown */}
            <div className="bg-[#FAF5EB] rounded-3xl p-6 border border-[#D4A359]/20 text-xs space-y-3">
              <p className="font-bold text-[#163E2D] uppercase tracking-wider text-xs">
                Seating Timings:
              </p>
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span className="text-gray-600">Lunch Hours:</span>
                <span className="font-semibold text-[#163E2D]">11:30 AM – 03:45 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-gray-200">
                <span className="text-gray-600">Dinner Hours:</span>
                <span className="font-semibold text-[#163E2D]">06:30 PM – 10:45 PM</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-gray-600">Weekend Breakfast:</span>
                <span className="font-semibold text-[#163E2D]">08:00 AM – 11:30 AM</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
