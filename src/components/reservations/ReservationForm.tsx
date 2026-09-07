import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { 
  Calendar, 
  Clock, 
  Users, 
  User, 
  Phone, 
  Mail, 
  Sparkles, 
  CheckCircle, 
  MessageCircle, 
  RefreshCw,
  Info
} from 'lucide-react';
import type { ReservationFormData, ReservationResponse } from '../../types';
import { submitReservationRequest } from '../../services/reservationService';
import { Button } from '../common/Button';
import { getWhatsAppUrl } from '../../config/restaurant';

export const ReservationForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<ReservationResponse | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationFormData>({
    defaultValues: {
      guests: 2,
      occasion: 'none',
      seatingPreference: 'indoor',
    },
  });

  const onSubmit = async (data: ReservationFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const result = await submitReservationRequest(data);
      setSubmissionResult(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError('Failed to send reservation request. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBookAnother = () => {
    setSubmissionResult(null);
    reset();
  };

  const getConfirmationWhatsAppUrl = () => {
    if (!submissionResult) return getWhatsAppUrl();
    const d = submissionResult.reservationDetails;
    const msg = `Hello Saffron Leaf Restaurant, I submitted a table reservation request (Ref: ${submissionResult.bookingReference}) for ${d.guests} guests on ${d.date} at ${d.time} under ${d.fullName}. Please confirm availability.`;
    return getWhatsAppUrl(msg);
  };

  const today = new Date().toISOString().split('T')[0];

  if (submissionResult) {
    const details = submissionResult.reservationDetails;
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#D4A359]/40 shadow-warm-lg text-center space-y-6 animate-fade-in">
        <div className="w-16 h-16 bg-[#163E2D] text-[#D4A359] rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF1D5] text-[#8E6221] border border-[#D4A359]/40">
            <Sparkles className="w-3.5 h-3.5" />
            Request Received • Ref: {submissionResult.bookingReference}
          </span>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#163E2D]">
            Reservation Request Submitted
          </h3>
          <p className="text-sm text-[#323232] max-w-lg mx-auto leading-relaxed">
            {submissionResult.message}
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-[#FAF5EB] p-6 rounded-2xl border border-[#D4A359]/20 text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm">
          <p className="font-bold text-[#163E2D] border-b border-[#D4A359]/20 pb-2 text-sm uppercase tracking-wide">
            Reservation Summary:
          </p>
          <div className="grid grid-cols-2 gap-2 text-gray-700 pt-1">
            <p><strong className="text-[#141615]">Name:</strong> {details.fullName}</p>
            <p><strong className="text-[#141615]">Guests:</strong> {details.guests} Person(s)</p>
            <p><strong className="text-[#141615]">Date:</strong> {details.date}</p>
            <p><strong className="text-[#141615]">Time:</strong> {details.time}</p>
            <p><strong className="text-[#141615]">Phone:</strong> {details.phoneNumber}</p>
            <p><strong className="text-[#141615]">Seating:</strong> {details.seatingPreference}</p>
          </div>
          {details.specialRequest && (
            <p className="text-gray-600 pt-2 border-t border-gray-200">
              <strong className="text-[#141615]">Special Note:</strong> {details.specialRequest}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            href={getConfirmationWhatsAppUrl()}
            variant="gold"
            size="md"
            leftIcon={<MessageCircle className="w-4 h-4 text-[#25D366]" />}
          >
            Confirm Fast on WhatsApp
          </Button>

          <Button
            onClick={handleBookAnother}
            variant="outline-green"
            size="md"
            leftIcon={<RefreshCw className="w-4 h-4" />}
          >
            Make Another Request
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D4A359]/20 shadow-warm-lg space-y-6"
    >
      <div className="border-b border-gray-100 pb-4">
        <h3 className="font-display font-bold text-2xl text-[#163E2D]">
          Table Reservation Request
        </h3>
        <p className="text-xs sm:text-sm text-[#636363] mt-1 flex items-center gap-1.5">
          <Info className="w-4 h-4 text-[#D4A359] shrink-0" />
          <span>Please submit your details. Our manager will call or message to confirm your table.</span>
        </p>
      </div>

      {submitError && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-700">
          {submitError}
        </div>
      )}

      {/* Row 1: Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#163E2D] mb-2">
            Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="e.g. Ramesh Kumar"
              {...register('fullName', { required: 'Please enter your full name' })}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D] focus:border-transparent transition-all"
            />
          </div>
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#163E2D] mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="tel"
              placeholder="e.g. +91 98765 43210"
              {...register('phoneNumber', { 
                required: 'Please enter your phone number',
                pattern: {
                  value: /^[0-9+ -]{8,16}$/,
                  message: 'Please enter a valid phone number'
                }
              })}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D] focus:border-transparent transition-all"
            />
          </div>
          {errors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.phoneNumber.message}</p>
          )}
        </div>
      </div>

      {/* Row 2: Email & Guests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#163E2D] mb-2">
            Email Address (Optional)
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="email"
              placeholder="e.g. name@example.com"
              {...register('email')}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D] focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#163E2D] mb-2">
            Number of Guests *
          </label>
          <div className="relative">
            <Users className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
            <select
              {...register('guests', { required: 'Please specify guest count', valueAsNumber: true })}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D] focus:border-transparent transition-all bg-white"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>
          {errors.guests && (
            <p className="text-red-500 text-xs mt-1">{errors.guests.message}</p>
          )}
        </div>
      </div>

      {/* Row 3: Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#163E2D] mb-2">
            Reservation Date *
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="date"
              min={today}
              {...register('date', { required: 'Please pick a date' })}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D] focus:border-transparent transition-all bg-white"
            />
          </div>
          {errors.date && (
            <p className="text-red-500 text-xs mt-1">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#163E2D] mb-2">
            Preferred Time Slot *
          </label>
          <div className="relative">
            <Clock className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
            <select
              {...register('time', { required: 'Please select a time slot' })}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D] focus:border-transparent transition-all bg-white"
            >
              <option value="">Select Time Slot</option>
              <optgroup label="Breakfast (Sat & Sun)">
                <option value="08:30 AM">08:30 AM</option>
                <option value="09:30 AM">09:30 AM</option>
                <option value="10:30 AM">10:30 AM</option>
              </optgroup>
              <optgroup label="Lunch">
                <option value="12:00 PM">12:00 PM</option>
                <option value="12:45 PM">12:45 PM</option>
                <option value="01:30 PM">01:30 PM</option>
                <option value="02:15 PM">02:15 PM</option>
                <option value="03:00 PM">03:00 PM</option>
              </optgroup>
              <optgroup label="Dinner">
                <option value="07:00 PM">07:00 PM</option>
                <option value="07:45 PM">07:45 PM</option>
                <option value="08:30 PM">08:30 PM</option>
                <option value="09:15 PM">09:15 PM</option>
                <option value="10:00 PM">10:00 PM</option>
              </optgroup>
            </select>
          </div>
          {errors.time && (
            <p className="text-red-500 text-xs mt-1">{errors.time.message}</p>
          )}
        </div>
      </div>

      {/* Row 4: Occasion & Seating */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#163E2D] mb-2">
            Special Occasion
          </label>
          <select
            {...register('occasion')}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D] focus:border-transparent transition-all bg-white"
          >
            <option value="none">None / Casual Dining</option>
            <option value="birthday">Birthday Celebration</option>
            <option value="anniversary">Anniversary</option>
            <option value="family-gathering">Family Gathering</option>
            <option value="business-dinner">Business Dinner</option>
            <option value="other">Other Special Event</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#163E2D] mb-2">
            Seating Preference
          </label>
          <select
            {...register('seatingPreference')}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D] focus:border-transparent transition-all bg-white"
          >
            <option value="indoor">Indoor Air-Conditioned Hall</option>
            <option value="courtyard">Traditional Courtyard / Garden</option>
            <option value="private-dining">Private Family Dining Room</option>
            <option value="no-preference">No Preference (First Available)</option>
          </select>
        </div>
      </div>

      {/* Row 5: Special Request */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#163E2D] mb-2">
          Special Requests & Dietary Requirements
        </label>
        <textarea
          rows={3}
          placeholder="e.g. High chair needed for toddler, Jain food preferences, quiet corner table..."
          {...register('specialRequest')}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D] focus:border-transparent transition-all"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="gold"
          size="lg"
          isLoading={isSubmitting}
          className="w-full justify-center shadow-gold-glow font-bold text-base"
        >
          Request Reservation
        </Button>
      </div>
    </form>
  );
};
