export type MenuCategoryId = 
  | 'all'
  | 'breakfast'
  | 'south-indian'
  | 'north-indian'
  | 'biryani'
  | 'vegetarian'
  | 'non-vegetarian'
  | 'desserts'
  | 'beverages';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategoryId;
  isVegetarian: boolean;
  isBestseller?: boolean;
  isChefSpecial?: boolean;
  spiceLevel?: 0 | 1 | 2 | 3; // 0 = mild, 3 = very spicy
  image: string;
  servingInfo?: string;
  allergens?: string[];
}

export interface MenuCategory {
  id: MenuCategoryId;
  name: string;
  tagline?: string;
  iconName?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location?: string;
  rating: number;
  comment: string;
  date: string;
  dishRecommended?: string;
  avatarUrl?: string;
}

export type GalleryCategory = 'all' | 'food' | 'interior' | 'events' | 'kitchen';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'all'>;
  imageUrl: string;
  description: string;
  aspectRatio?: 'square' | 'wide' | 'tall';
}

export type OccasionType = 
  | 'none'
  | 'birthday'
  | 'anniversary'
  | 'family-gathering'
  | 'business-dinner'
  | 'other';

export interface ReservationFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  occasion: OccasionType;
  specialRequest?: string;
  seatingPreference?: 'indoor' | 'courtyard' | 'private-dining' | 'no-preference';
}

export interface ReservationResponse {
  success: boolean;
  bookingReference: string;
  message: string;
  reservationDetails: ReservationFormData;
  timestamp: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  ticketId: string;
}

export interface RestaurantConfig {
  name: string;
  tagline: string;
  shortBio: string;
  foundedYear: number;
  cuisine: string;
  contact: {
    address: {
      street: string;
      locality: string;
      city: string;
      state: string;
      country: string;
      postalCode: string;
      full: string;
    };
    phone: {
      display: string;
      raw: string;
    };
    email: string;
    whatsapp: {
      number: string;
      displayNumber: string;
      defaultMessage: string;
    };
    maps: {
      embedUrl: string;
      directUrl: string;
      coordinates: {
        lat: number;
        lng: number;
      };
    };
  };
  hours: {
    weekdays: {
      label: string;
      days: string;
      time: string;
    };
    weekends: {
      label: string;
      days: string;
      time: string;
    };
    breakfastSlot: string;
    lunchSlot: string;
    dinnerSlot: string;
  };
  socialLinks: {
    instagram: string;
    facebook: string;
    youtube: string;
    tripadvisor?: string;
  };
  highlights: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  specialOffer: {
    title: string;
    subtitle: string;
    tag: string;
    price: number;
    originalPrice?: number;
    inclusions: string[];
    validity: string;
    ctaText: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage: string;
    canonicalUrl: string;
  };
}
