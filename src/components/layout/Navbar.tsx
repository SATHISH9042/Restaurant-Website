import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, Phone, CalendarDays, Utensils } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { restaurantConfig } from '../../config/restaurant';
import { Button } from '../common/Button';
import { clsx } from 'clsx';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Reservation', path: '/reservations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          isScrolled
            ? 'bg-[#163E2D]/95 backdrop-blur-md shadow-warm-lg py-3 border-b border-[#D4A359]/20 text-white'
            : 'bg-[#163E2D] md:bg-[#163E2D]/90 backdrop-blur-sm py-4 md:py-5 text-white border-b border-white/10'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link to="/" className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#D4A359] rounded-lg p-1">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4A359] to-[#8E6221] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                <Utensils className="w-5 h-5 text-[#163E2D]" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl sm:text-2xl tracking-wide text-[#FAF5EB] group-hover:text-[#D4A359] transition-colors">
                  {restaurantConfig.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#D4A359]/90 font-medium -mt-1 hidden sm:block">
                  Authentic South Indian
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    clsx(
                      'px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-200 relative',
                      isActive
                        ? 'text-[#D4A359] bg-white/10 font-semibold'
                        : 'text-[#FAF5EB]/85 hover:text-white hover:bg-white/5'
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute bottom-1 left-3.5 right-3.5 h-0.5 bg-[#D4A359] rounded-full"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Right Action: Phone & Book a Table CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${restaurantConfig.contact.phone.raw}`}
                className="flex items-center gap-2 text-xs font-medium text-[#FAF5EB]/80 hover:text-[#D4A359] transition-colors"
                title="Call Restaurant"
              >
                <Phone className="w-3.5 h-3.5 text-[#D4A359]" />
                <span>{restaurantConfig.contact.phone.display}</span>
              </a>

              <Button
                to="/reservations"
                variant="gold"
                size="sm"
                leftIcon={<CalendarDays className="w-4 h-4" />}
                className="shadow-sm"
              >
                Book a Table
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                to="/reservations"
                className="bg-[#D4A359] text-[#141615] p-2 rounded-full text-xs font-bold sm:hidden flex items-center justify-center shadow-sm"
                aria-label="Quick Reserve"
              >
                <CalendarDays className="w-4 h-4" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#FAF5EB] hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4A359]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4A359]" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Animated Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#163E2D]/98 border-b border-[#D4A359]/30 shadow-2xl backdrop-blur-xl md:hidden overflow-y-auto max-h-[calc(100vh-60px)]"
          >
            <div className="px-6 py-8 space-y-6">
              <nav className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      clsx(
                        'px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between',
                        isActive
                          ? 'bg-[#D4A359]/20 text-[#D4A359] font-bold border border-[#D4A359]/40'
                          : 'text-[#FAF5EB] hover:bg-white/5'
                      )
                    }
                  >
                    <span>{link.name}</span>
                    <span className="text-[#D4A359]/50 text-sm">→</span>
                  </NavLink>
                ))}
              </nav>

              <div className="pt-4 border-t border-white/10 space-y-4">
                <Button
                  to="/reservations"
                  variant="gold"
                  size="md"
                  className="w-full justify-center shadow-gold-glow"
                  leftIcon={<CalendarDays className="w-4 h-4" />}
                >
                  Book a Table
                </Button>

                <div className="bg-black/20 p-4 rounded-xl border border-white/5 space-y-2 text-xs text-[#FAF5EB]/80">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-[#D4A359]" />
                    <a href={`tel:${restaurantConfig.contact.phone.raw}`} className="hover:text-white underline">
                      {restaurantConfig.contact.phone.display}
                    </a>
                  </p>
                  <p className="text-[#FAF5EB]/60">
                    {restaurantConfig.contact.address.full}
                  </p>
                  <p className="text-[#D4A359] font-medium pt-1">
                    Open Today: {restaurantConfig.hours.weekdays.time}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
