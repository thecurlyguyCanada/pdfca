/**
 * Organization & Geographic Configuration
 * Business information and geographic data for SEO and schema markup
 */

export const ORGANIZATION = {
  name: 'PDF Canada',
  legalName: 'PDF Canada',
  foundingDate: '2024',

  location: {
    city: 'Toronto',
    province: 'Ontario',
    country: 'Canada',
    postalCode: '', // To be filled
  },

  coordinates: {
    toronto: {
      latitude: '43.6532',
      longitude: '-79.3832',
    },
    canadaCenter: {
      latitude: '56.1304',
      longitude: '-106.3468',
    },
  },

  serviceArea: {
    radius: '5000000', // meters (covers all of Canada)
    provinces: [
      'Ontario',
      'Quebec',
      'British Columbia',
      'Alberta',
      'Manitoba',
      'Saskatchewan',
      'Nova Scotia',
      'New Brunswick',
      'Newfoundland and Labrador',
      'Prince Edward Island',
    ],
    territories: [
      'Northwest Territories',
      'Yukon',
      'Nunavut',
    ],
  },

  hours: {
    opensAt: '00:00',
    closesAt: '23:59',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
  },

  priceRange: '$$',
} as const;

/**
 * Get all Canadian regions (provinces + territories)
 */
export const getAllCanadianRegions = (): string[] => {
  return [
    ...ORGANIZATION.serviceArea.provinces,
    ...ORGANIZATION.serviceArea.territories,
  ];
};

/**
 * Get formatted address
 */
export const getFormattedAddress = (): string => {
  const { city, province, country } = ORGANIZATION.location;
  return `${city}, ${province}, ${country}`;
};
