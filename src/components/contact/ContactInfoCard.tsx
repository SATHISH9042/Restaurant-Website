import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Navigation } from 'lucide-react';
import { restaurantConfig, getWhatsAppUrl } from '../../config/restaurant';
import { Button } from '../common/Button';

export const ContactInfoCard: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="bg-[#163E2D] text-[#FAF5EB] rounded-3xl p-8 sm:p-10 border border-[#D4A359]/30 shadow-warm-lg space-y-8">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#D4A359] block mb-2">
          Find & Connect
        </span>
        <h3 className="font-display font-bold text-3xl text-white">
          Saffron Leaf Restaurant
        </h3>
        <p className="text-sm text-[#FAF5EB]/80 mt-1">
          Authentic South Indian Flavours, Served Fresh
        </p>
      </div>

      <div className="space-y-6 text-sm text-[#FAF5EB]/85">
        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#D4A359] border border-white/10">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-1">
              Address
            </p>
            <p className="leading-relaxed">
              {restaurantConfig.contact.address.street},<br />
              {restaurantConfig.contact.address.locality},<br />
              {restaurantConfig.contact.address.city}, {restaurantConfig.contact.address.state}, India – {restaurantConfig.contact.address.postalCode}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#D4A359] border border-white/10">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-1">
              Phone & Reservations
            </p>
            <a
              href={`tel:${restaurantConfig.contact.phone.raw}`}
              className="text-base font-semibold hover:text-[#D4A359] transition-colors"
            >
              {restaurantConfig.contact.phone.display}
            </a>
            <p className="text-xs text-[#FAF5EB]/60">Available during operating hours</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#D4A359] border border-white/10">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-white text-xs uppercase tracking-wider mb-1">
              Email Us
            </p>
            <a
              href={`mailto:${restaurantConfig.contact.email}`}
              className="hover:text-[#D4A359] transition-colors"
            >
              {restaurantConfig.contact.email}
            </a>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="flex items-start gap-4 pt-2 border-t border-white/10">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#D4A359] border border-white/10">
            <Clock className="w-5 h-5" />
          </div>
          <div className="text-xs space-y-1.5 flex-grow">
            <p className="font-bold text-white text-xs uppercase tracking-wider">
              Opening Hours
            </p>
            <div className="flex justify-between py-0.5 border-b border-white/5">
              <span>{restaurantConfig.hours.weekdays.label}:</span>
              <span className="font-semibold text-white">{restaurantConfig.hours.weekdays.time}</span>
            </div>
            <div className="flex justify-between py-0.5">
              <span>{restaurantConfig.hours.weekends.label}:</span>
              <span className="font-semibold text-white">{restaurantConfig.hours.weekends.time}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
        <Button
          href={`tel:${restaurantConfig.contact.phone.raw}`}
          variant="gold"
          size="md"
          leftIcon={<Phone className="w-4 h-4" />}
          className="w-full justify-center shadow-gold-glow"
        >
          Call Restaurant
        </Button>

        <Button
          href={whatsappUrl}
          variant="outline-gold"
          size="md"
          leftIcon={<MessageCircle className="w-4 h-4 text-[#25D366]" />}
          className="w-full justify-center"
        >
          WhatsApp Us
        </Button>
      </div>

      <div className="text-center pt-2">
        <a
          href={restaurantConfig.contact.maps.directUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-[#D4A359] hover:underline"
        >
          <Navigation className="w-3.5 h-3.5" />
          <span>Get Driving Directions on Google Maps</span>
        </a>
      </div>
    </div>
  );
};
