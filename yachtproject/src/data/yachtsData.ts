export interface YachtData {
  id: string;                   // Unique identifier for routing
  scheduleId: string;           // for SuperSaaS   
  scheduleName: string;         // for SuperSaaS   
  title: string;                // Display name
  description: string;          // Main description
  location: string;             // Marina/location
  images: string[];             // Array of image imports
  features: string[];           // Key features for tags
  cardFeatures: string[];       // features for cards
  pricePerDay: string;  
  pricePerHour: string;  
  link: string;      
  specifications: {             // Technical specs
    length: string;
    capacity: string;
    bedrooms: string;
    bathrooms: string;
    crew: string;
    speed: string;
  };
  amenities: string[];          // Detailed amenities list
  addOn: string[];       // add-on information
  // Optional fields you might want to add:
  category?: string;            // e.g., "luxury", "party", "family"
  minBookingHours?: number;     // Minimum booking duration
  maxGuests?: number;           // Maximum guest capacity
  yearBuilt?: string;           // Year of construction
  manufacturer?: string;        // Boat manufacturer
  sleeps?: number;              // Overnight capacity
  tags?: string[];              // Additional search tags
}

// Import your images
import m1 from '../assets/m/6.webp';
import m2 from '../assets/m/1.webp';
import m3 from '../assets/m/2.webp';
import m4 from '../assets/m/3.webp';
import m5 from '../assets/m/4.webp';
import m6 from '../assets/m/5.webp';
import y1 from '../assets/b/5.webp';
import y2 from '../assets/b/1.webp';
import y3 from '../assets/b/2.webp';
import y4 from '../assets/b/3.webp';
import y5 from '../assets/b/4.webp';

export const yachtsData: YachtData[] = [
  {
    // Sunny Greet
    id: 'party-boat',
    scheduleId: '792957',
    scheduleName: "Yalla_Habibi",
    title: 'Sunny Greet',
    description: 'Experience ultimate luxury on the water with our flagship vessel. This premium yacht offers unmatched comfort and elegance for discerning guests who demand the finest in maritime luxury.',
    location: 'Xport Marina',
    images: [y1, y2, y3, y4, y5],
    features: ['Full Kitchen', 'Premium Sound System', 'Sun Deck', 'Dining Area'],
    cardFeatures: ['Captain included', 'Captain included','Captain included'],
    pricePerDay: '$2,500/day',
    pricePerHour: '$400/Hr',
    link: 'SunnyGreet',
    specifications: {
      length: '42ft',
      capacity: '12 guests',
      bedrooms: '2',
      bathrooms: '1',
      crew: '1-2',
      speed: '25 knots'
    },
    amenities: [
      'Full galley kitchen with premium appliances',
      'Premium Bose sound system',
      'Spacious sun deck with loungers',
      'Formal dining area for 8',
      'Climate-controlled interior',
      'High-speed WiFi',
      'Bluetooth connectivity',
      'Complete safety equipment',
      'Navigation equipment',
      'Refrigeration and ice maker',
      'Outdoor shower',
      'Swimming platform'
    ],
    addOn: [
      'Available year-round',
      'Advance booking required',
      'Minimum 4-hour charter'
    ],
    // Optional fields
    category: 'luxury',
    minBookingHours: 4,
    maxGuests: 12,
    yearBuilt: '2018',
    manufacturer: 'Sunseeker',
    sleeps: 6,
    tags: ['luxury', 'corporate', 'romantic', 'anniversary']
  },
{
  // Meridian_441
  id: 'luxury-cruiser',
  scheduleId: '792342',
  scheduleName: "Meridian_441",
  title: 'Meridian 441 Sedan Bridge',
  description: 'Spacious, luxurious, and perfect for private celebrations or relaxing coastal cruises. This premium flybridge yacht combines high-end amenities, panoramic views, and smooth handling for an unforgettable experience on the water.',
  location: 'Xport ',
  images: [m1, m2, m3, m4, m5, m6],
  features: [
    'Flybridge with lounge seating',
    'Full wet bar with refrigerator and sink',
    'Spacious salon with panoramic windows',
    'Premium surround sound system',
    'Climate-controlled interior and bridge',
    'Two staterooms each with en-suite bathrooms'
  ],
  cardFeatures: [
    'Captain included',
    'Two luxury cabins',
    'Spacious flybridge lounge'
  ],
  pricePerDay: '$1,800/day',
  pricePerHour: '$500/Hr',
  link: 'Meridian',
  specifications: {
    length: '50ft',
    capacity: '15 guests',
    bedrooms: '2',
    bathrooms: '2',
    crew: '1-2',
    speed: 'Cruise: 20 knots, Max: ~26 knots'
  },
  amenities: [
    'Flat-screen TVs and Bose surround sound',
    'Climate-controlled cabins and bridge',
    'Fully equipped galley with stove, microwave, fridge/freezer',
    'Two private staterooms each with en-suite head',
    'Spacious cockpit with aft seating',
    'Swim platform with boarding ladder and freshwater shower',
    'Safety equipment for all guests',
    'Optional catering and decorations available'
  ],
  addOn: [
    'Catering: 50$ per guest',
    'Crabbing Package: $400',
    'Evening charters available'
  ],
  category: 'luxury-cruise',
  minBookingHours: 3,
  maxGuests: 20,
  yearBuilt: '2015',
  manufacturer: 'Meridian Yachts',
  sleeps: 4,
  tags: ['luxury', 'cruise', 'party', 'celebration', 'corporate']
}

];

// Helper functions for filtering and searching
export const getYachtById = (id: string): YachtData | undefined => {
  return yachtsData.find(yacht => yacht.id === id);
};

export const getYachtsByCategory = (category: string): YachtData[] => {
  return yachtsData.filter(yacht => yacht.category === category);
};

export const searchYachts = (searchTerm: string): YachtData[] => {
  const term = searchTerm.toLowerCase();
  return yachtsData.filter(yacht => 
    yacht.title.toLowerCase().includes(term) ||
    yacht.description.toLowerCase().includes(term) ||
    yacht.features.some(feature => feature.toLowerCase().includes(term)) ||
    yacht.tags?.some(tag => tag.toLowerCase().includes(term))
  );
};

export const getYachtsByPriceRange = (minPrice: number, maxPrice: number): YachtData[] => {
  return yachtsData.filter(yacht => {
    const price = parseInt(yacht.pricePerHour.replace(/[^0-9]/g, ''));
    return price >= minPrice && price <= maxPrice;
  });
};

export const getYachtsByCapacity = (minCapacity: number): YachtData[] => {
  return yachtsData.filter(yacht => {
    const capacity = parseInt(yacht.specifications.capacity.replace(/[^0-9]/g, ''));
    return capacity >= minCapacity;
  });
};