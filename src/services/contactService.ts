import type { ContactFormData, ContactResponse } from '../types';
import { simulateDelay, generateReferenceId } from './api';

const STORAGE_KEY = 'saffron_leaf_contact_inquiries';

export async function submitContactForm(data: ContactFormData): Promise<ContactResponse> {
  await simulateDelay(800);

  if (!data.name || !data.email || !data.phone || !data.message) {
    throw new Error('Please fill in all required fields.');
  }

  const ticketId = generateReferenceId('SLR-MSG');

  const response: ContactResponse = {
    success: true,
    message: 'Thank you for getting in touch! We have received your message and will respond within 24 hours.',
    ticketId,
  };

  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    existing.push({ ticketId, data, timestamp: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
  } catch {
    // Ignore storage errors
  }

  return response;
}

export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  await simulateDelay(600);
  if (!email || !email.includes('@')) {
    throw new Error('Please provide a valid email address.');
  }
  return {
    success: true,
    message: 'Welcome to the Saffron Leaf Food Club! Check your inbox for exclusive updates and culinary secrets.',
  };
}
