import type { ReservationFormData, ReservationResponse } from '../types';
import { simulateDelay, generateReferenceId } from './api';

const STORAGE_KEY = 'saffron_leaf_reservations';

export async function submitReservationRequest(data: ReservationFormData): Promise<ReservationResponse> {
  await simulateDelay(900);

  // Validate critical fields defensively
  if (!data.fullName || !data.phoneNumber || !data.date || !data.time || !data.guests) {
    throw new Error('Please fill in all required fields.');
  }

  const bookingReference = generateReferenceId('SLR-RES');
  
  const response: ReservationResponse = {
    success: true,
    bookingReference,
    message: 'Thank you! Your reservation request has been received. Our team will contact you shortly to confirm your table.',
    reservationDetails: data,
    timestamp: new Date().toISOString(),
  };

  // Cache locally so demo persists across page refresh
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push(response);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // Graceful fallback for non-storage environments
  }

  return response;
}
