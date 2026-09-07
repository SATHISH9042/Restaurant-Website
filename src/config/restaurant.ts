import type { RestaurantConfig } from '../types';

export const restaurantConfig: RestaurantConfig = {
  name: "Saffron Leaf Restaurant",
  tagline: "Authentic South Indian Flavours, Served Fresh",
  shortBio: "Saffron Leaf was created with one simple idea — great food should bring people together. Our kitchen celebrates the flavours of South India using fresh ingredients, traditional spice blends and time-tested recipes.",
  foundedYear: 2018,
  cuisine: "Authentic South Indian & Coastal Chettinad",
  contact: {
    address: {
      street: "123 Temple Road",
      locality: "Mahamaham Tank West",
      city: "Kumbakonam",
      state: "Tamil Nadu",
      country: "India",
      postalCode: "612001",
      full: "123 Temple Road, Kumbakonam, Tamil Nadu, India – 612001",
    },
    phone: {
      display: "+91 98765 43210",
      raw: "919876543210",
    },
    email: "hello@saffronleafrestaurant.in",
    whatsapp: {
      number: "919876543210",
      displayNumber: "+91 98765 43210",
      defaultMessage: "Hello Saffron Leaf Restaurant, I would like to know more about your menu and table reservations.",
    },
    maps: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.839841804257!2d79.3755!3d10.9602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a553381a1795091%3A0xb004fa9d2b2715dc!2sKumbakonam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      directUrl: "https://maps.google.com/?q=123+Temple+Road+Kumbakonam+Tamil+Nadu+India",
      coordinates: {
        lat: 10.9602,
        lng: 79.3845,
      },
    },
  },
  hours: {
    weekdays: {
      label: "Monday – Friday",
      days: "Mon – Fri",
      time: "11:00 AM – 10:30 PM",
    },
    weekends: {
      label: "Saturday – Sunday",
      days: "Sat – Sun",
      time: "8:00 AM – 11:00 PM",
    },
    breakfastSlot: "8:00 AM – 11:30 AM (Weekends & Special Holidays)",
    lunchSlot: "11:30 AM – 3:45 PM",
    dinnerSlot: "6:30 PM – 10:45 PM",
  },
  socialLinks: {
    instagram: "https://instagram.com/saffronleafrestaurant",
    facebook: "https://facebook.com/saffronleafrestaurant",
    youtube: "https://youtube.com/@saffronleafrestaurant",
    tripadvisor: "https://tripadvisor.com/Restaurant_Review-saffronleaf",
  },
  highlights: [
    {
      title: "Authentic Recipes",
      description: "Traditional recipes inspired by the rich culinary heritage of South India.",
      icon: "UtensilsCrossed",
    },
    {
      title: "Fresh Ingredients",
      description: "Fresh vegetables, quality spices and carefully selected ingredients in every dish.",
      icon: "Leaf",
    },
    {
      title: "Family Friendly",
      description: "A comfortable dining experience for families, friends and celebrations.",
      icon: "Users",
    },
    {
      title: "Warm Hospitality",
      description: "Friendly service and a welcoming atmosphere from the moment you walk in.",
      icon: "HeartHandshake",
    },
  ],
  specialOffer: {
    title: "Weekend Family Feast",
    subtitle: "Enjoy a delicious spread of South Indian favourites with the people who matter most.",
    tag: "Weekend Special",
    price: 799,
    originalPrice: 1050,
    inclusions: [
      "2 Main Courses (Chettinad Curries or Paneer Gravies)",
      "2 Golden Crispy Dosas of your choice",
      "2 Traditional Starters (Vada or Pepper Fry)",
      "4 Fresh Beverages (Filter Coffee or Coolers)",
      "2 House Desserts (Elaneer Payasam or Gulab Jamun)",
    ],
    validity: "Available every Saturday & Sunday (Lunch & Dinner)",
    ctaText: "Reserve Your Table",
  },
  seo: {
    title: "Saffron Leaf Restaurant | Authentic South Indian Cuisine",
    description: "Experience authentic South Indian cuisine at Saffron Leaf Restaurant. Explore our menu, reserve a table and enjoy freshly prepared favourites in a warm dining atmosphere.",
    keywords: [
      "South Indian Restaurant",
      "Kumbakonam filter coffee",
      "Ghee Roast Dosa",
      "Chettinad Chicken",
      "Veg Biryani",
      "Authentic South Indian Food",
      "Family Dining",
      "Table Reservation Kumbakonam"
    ],
    ogImage: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1200&q=80",
    canonicalUrl: "https://www.saffronleafrestaurant.in",
  },
};

export function getWhatsAppUrl(customMessage?: string): string {
  const phone = restaurantConfig.contact.whatsapp.number;
  const text = encodeURIComponent(customMessage || restaurantConfig.contact.whatsapp.defaultMessage);
  return `https://wa.me/${phone}?text=${text}`;
}
