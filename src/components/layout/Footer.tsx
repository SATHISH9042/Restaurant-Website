import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Utensils, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Sparkles 
} from 'lucide-react';
import { restaurantConfig } from '../../config/restaurant';
import { subscribeNewsletter } from '../../services/contactService';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribedMessage, setSubscribedMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await subscribeNewsletter(email);
      setSubscribedMessage(res.message);
      setEmail('');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Unable to subscribe. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Photo Gallery', path: '/gallery' },
    { name: 'Table Reservation', path: '/reservations' },
    { name: 'Contact & Location', path: '/contact' },
  ];

  return (
    <footer className="bg-[#0D241A] text-[#FAF5EB] pt-16 pb-8 border-t border-[#D4A359]/20 relative overflow-hidden">
      {/* Subtle background ambient radial blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4A359]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#163E2D]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D4A359] flex items-center justify-center shadow-md">
                <Utensils className="w-5 h-5 text-[#163E2D]" />
              </div>
              <span className="font-display font-bold text-2xl tracking-wide text-[#FAF5EB]">
                {restaurantConfig.name}
              </span>
            </Link>

            <p className="text-[#D4A359] text-sm font-medium italic">
              "{restaurantConfig.tagline}"
            </p>

            <p className="text-[#FAF5EB]/70 text-sm leading-relaxed max-w-sm">
              Authentic South Indian flavours, warm hospitality and unforgettable dining experiences rooted in traditional recipes and heirloom spice blends.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={restaurantConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4A359] hover:text-[#141615] flex items-center justify-center transition-all duration-300 border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={restaurantConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4A359] hover:text-[#141615] flex items-center justify-center transition-all duration-300 border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.828C10.667 0 9 1.585 9 4.889V8z"/>
                </svg>
              </a>
              <a
                href={restaurantConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#D4A359] hover:text-[#141615] flex items-center justify-center transition-all duration-300 border border-white/10"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display font-semibold text-lg text-[#FAF5EB] tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A359]" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-[#FAF5EB]/75">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-[#D4A359] hover:translate-x-1 inline-block transition-transform duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Hours (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-semibold text-lg text-[#FAF5EB] tracking-wide flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4A359]" />
              Visit Us
            </h3>
            <ul className="space-y-3 text-sm text-[#FAF5EB]/75">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A359] shrink-0 mt-0.5" />
                <span>{restaurantConfig.contact.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4A359] shrink-0" />
                <a href={`tel:${restaurantConfig.contact.phone.raw}`} className="hover:text-white underline">
                  {restaurantConfig.contact.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D4A359] shrink-0" />
                <a href={`mailto:${restaurantConfig.contact.email}`} className="hover:text-white underline">
                  {restaurantConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 pt-1 border-t border-white/10">
                <Clock className="w-4 h-4 text-[#D4A359] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p><span className="font-semibold text-white">Mon–Fri:</span> 11:00 AM – 10:30 PM</p>
                  <p><span className="font-semibold text-white">Sat–Sun:</span> 8:00 AM – 11:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display font-semibold text-lg text-[#FAF5EB] tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4A359]" />
              Food Club
            </h3>
            <p className="text-xs text-[#FAF5EB]/70 leading-relaxed">
              Join our food club for special weekend offers, festival banquet previews, and chef secrets.
            </p>

            {subscribedMessage ? (
              <div className="p-3 bg-[#163E2D] border border-[#D4A359]/40 rounded-xl text-xs text-[#FAF1D5] flex items-start gap-2 animate-fade-in">
                <CheckCircle className="w-4 h-4 text-[#D4A359] shrink-0 mt-0.5" />
                <span>{subscribedMessage}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 text-xs rounded-full bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#D4A359] focus:bg-white/15 pr-10"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-full bg-[#D4A359] hover:bg-[#C59B27] text-[#141615] flex items-center justify-center transition-all disabled:opacity-50"
                    aria-label="Subscribe to newsletter"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {errorMessage && (
                  <p className="text-red-300 text-[11px]">{errorMessage}</p>
                )}
                <p className="text-[11px] text-[#FAF5EB]/40">
                  We respect your privacy. No spam ever.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF5EB]/50">
          <p>© 2026 {restaurantConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#D4A359] cursor-pointer">Privacy Policy</span>
            <span className="text-white/20">•</span>
            <span className="hover:text-[#D4A359] cursor-pointer">Terms & Conditions</span>
            <span className="text-white/20">•</span>
            <span className="hover:text-[#D4A359] cursor-pointer">FSSAI Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
