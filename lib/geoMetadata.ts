/**
 * Enhanced GEO Metadata for Canadian Province-Level Targeting
 * Improves local SEO for all Canadian provinces and territories
 */

export const CANADIAN_PROVINCES = [
  { name: 'Ontario', code: 'ON', major_cities: ['Toronto', 'Ottawa', 'Mississauga', 'Hamilton', 'London'] },
  { name: 'Quebec', code: 'QC', major_cities: ['Montreal', 'Quebec City', 'Laval', 'Gatineau', 'Longueuil'] },
  { name: 'British Columbia', code: 'BC', major_cities: ['Vancouver', 'Surrey', 'Burnaby', 'Richmond', 'Victoria'] },
  { name: 'Alberta', code: 'AB', major_cities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge', 'St. Albert'] },
  { name: 'Manitoba', code: 'MB', major_cities: ['Winnipeg', 'Brandon', 'Steinbach', 'Thompson', 'Portage la Prairie'] },
  { name: 'Saskatchewan', code: 'SK', major_cities: ['Saskatoon', 'Regina', 'Prince Albert', 'Moose Jaw', 'Swift Current'] },
  { name: 'Nova Scotia', code: 'NS', major_cities: ['Halifax', 'Dartmouth', 'Sydney', 'Truro', 'New Glasgow'] },
  { name: 'New Brunswick', code: 'NB', major_cities: ['Moncton', 'Saint John', 'Fredericton', 'Dieppe', 'Miramichi'] },
  { name: 'Newfoundland and Labrador', code: 'NL', major_cities: ['St. Johns', 'Mount Pearl', 'Corner Brook', 'Conception Bay South', 'Paradise'] },
  { name: 'Prince Edward Island', code: 'PE', major_cities: ['Charlottetown', 'Summerside', 'Stratford', 'Cornwall', 'Montague'] },
  { name: 'Northwest Territories', code: 'NT', major_cities: ['Yellowknife', 'Hay River', 'Inuvik', 'Fort Smith', 'Behchokǫ̀'] },
  { name: 'Yukon', code: 'YT', major_cities: ['Whitehorse', 'Dawson City', 'Watson Lake', 'Haines Junction', 'Carmacks'] },
  { name: 'Nunavut', code: 'NU', major_cities: ['Iqaluit', 'Rankin Inlet', 'Arviat', 'Baker Lake', 'Cambridge Bay'] },
];

/**
 * Generate province-specific keywords for better local SEO
 */
export function generateProvinceKeywords(baseKeywords: string[]): string[] {
  const provinceKeywords: string[] = [];

  // Add province names
  CANADIAN_PROVINCES.forEach(province => {
    baseKeywords.forEach(keyword => {
      provinceKeywords.push(`${keyword} ${province.name}`);
      provinceKeywords.push(`${keyword} ${province.code}`);
    });
  });

  // Add major city names for top provinces
  const topProvinces = CANADIAN_PROVINCES.slice(0, 6); // ON, QC, BC, AB, MB, SK
  topProvinces.forEach(province => {
    province.major_cities.slice(0, 3).forEach(city => {
      baseKeywords.slice(0, 3).forEach(keyword => {
        provinceKeywords.push(`${keyword} ${city}`);
      });
    });
  });

  return provinceKeywords;
}

/**
 * Get GEO-specific metadata enhancements
 */
export function getGeoMetadata() {
  return {
    geo: {
      region: 'CA',
      placename: 'Canada',
      position: '56.1304;-106.3468', // Geographic center of Canada
    },
    'geo.region': 'CA',
    'geo.placename': 'Canada',
    'geo.position': '56.1304;-106.3468',
    'ICBM': '56.1304, -106.3468',
  };
}

/**
 * Generate area served schema for all Canadian provinces
 */
export function generateAreaServedSchema() {
  return [
    {
      '@type': 'Country',
      name: 'Canada',
    },
    ...CANADIAN_PROVINCES.map(province => ({
      '@type': 'State',
      name: province.name,
    })),
  ];
}
