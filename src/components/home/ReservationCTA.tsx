import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Phone, Sparkles } from 'lucide-react';
import { Button } from '../common/Button';
import { restaurantConfig } from '../../config/restaurant';

export const ReservationCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#163E2D] relative overflow-hidden text-[#FAF5EB]">
      {/* Subtle gold radial background glow */}
      <div className="absolute -top-24 right-1/3 w-96 h-96 bg-[#D4A359]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-80 h-80 bg-[#0A1B13]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4A359]/15 text-[#D4A359] border border-[#D4A359]/30 text-xs font-semibold tracking-wider uppercase mb-6"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Warm Hospitality Awaits</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight"
        >
          Your Table Is Waiting
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-[#FAF5EB]/85 leading-relaxed mb-10"
        >
          Planning a family dinner, a casual lunch or a special celebration? Reserve your table and let us take care of the rest.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Button
            to="/reservations"
            variant="gold"
            size="lg"
            leftIcon={<CalendarDays className="w-5 h-5" />}
            className="w-full sm:w-auto shadow-gold-glow"
          >
            Book a Table
          </Button>

          <Button
            href={`tel:${restaurantConfig.contact.phone.raw}`}
            variant="outline-gold"
            size="lg"
            leftIcon={<Phone className="w-5 h-5" />}
            className="w-full sm:w-auto"
          >
            Call Us Directly
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-xs text-[#FAF5EB]/60"
        >
          Open Mon–Sun • Walk-ins & Reservations welcome • Kumbakonam, Tamil Nadu
        </motion.div>

      </div>
    </section>
  );
};
