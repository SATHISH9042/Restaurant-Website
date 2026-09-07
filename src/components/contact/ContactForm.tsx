import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, User, Mail, Phone, MessageSquare, Sparkles } from 'lucide-react';
import type { ContactFormData, ContactResponse } from '../../types';
import { submitContactForm } from '../../services/contactService';
import { Button } from '../common/Button';

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<ContactResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await submitContactForm(data);
      setSubmissionResult(res);
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else {
        setErrorMessage('Unable to send message. Please try again or call us.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submissionResult) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#D4A359]/30 shadow-warm-lg text-center space-y-5 animate-fade-in">
        <div className="w-16 h-16 bg-[#163E2D] text-[#D4A359] rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle className="w-8 h-8" />
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FAF1D5] text-[#8E6221]">
          <Sparkles className="w-3.5 h-3.5" />
          Message Sent • Ref: {submissionResult.ticketId}
        </span>
        <h3 className="font-display font-bold text-2xl text-[#163E2D]">
          Thank You For Reaching Out!
        </h3>
        <p className="text-sm text-[#636363] max-w-md mx-auto leading-relaxed">
          {submissionResult.message}
        </p>
        <Button
          onClick={() => setSubmissionResult(null)}
          variant="outline-green"
          size="md"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-3xl p-6 sm:p-10 border border-[#D4A359]/20 shadow-warm-lg space-y-5"
    >
      <div>
        <h3 className="font-display font-bold text-2xl text-[#163E2D]">
          Send Us a Message
        </h3>
        <p className="text-xs sm:text-sm text-[#636363] mt-1">
          Have catering questions, feedback or banquet inquiries? Write to us below.
        </p>
      </div>

      {errorMessage && (
        <div className="p-4 bg-rose-50 border border-rose-200 rounded-2xl text-xs text-rose-700">
          {errorMessage}
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#163E2D] mb-2">
          Your Name *
        </label>
        <div className="relative">
          <User className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="e.g. Ananya Sundaram"
            {...register('name', { required: 'Please enter your name' })}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D]"
          />
        </div>
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-[#163E2D] mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="email"
              placeholder="e.g. ananya@example.com"
              {...register('email', { 
                required: 'Please enter your email',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D]"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
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
              {...register('phone', { required: 'Please enter your phone number' })}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D]"
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#163E2D] mb-2">
          Subject / Inquiry Type
        </label>
        <select
          {...register('subject')}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D] bg-white"
        >
          <option value="General Inquiry">General Dining Inquiry</option>
          <option value="Catering & Events">Outdoor Catering & Banquets</option>
          <option value="Feedback">Dining Experience Feedback</option>
          <option value="Career">Career & Kitchen Opportunities</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#163E2D] mb-2">
          Your Message *
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
          <textarea
            rows={4}
            placeholder="Write your message or inquiry here..."
            {...register('message', { required: 'Please enter your message' })}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#163E2D]"
          />
        </div>
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        rightIcon={<Send className="w-4 h-4" />}
        className="w-full justify-center"
      >
        Send Message
      </Button>
    </form>
  );
};
