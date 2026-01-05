import type { ToolConfig } from './toolConfig';

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.pdfcanada.ca/#website',
    name: 'pdfcanada.ca',
    url: 'https://www.pdfcanada.ca',
    description:
      'Free, secure, and privacy-focused PDF tools built in Canada. All processing happens locally in your browser.',
    inLanguage: ['en-CA', 'fr-CA'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.pdfcanada.ca/{search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.pdfcanada.ca/#organization',
    name: 'pdfcanada.ca',
    url: 'https://www.pdfcanada.ca',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.pdfcanada.ca/android-chrome-512x512.png',
      width: 512,
      height: 512,
    },
    sameAs: ['https://twitter.com/pdfcanada'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Canada',
      addressCountry: 'CA',
    },
    foundingDate: '2024-01-01',
    description:
      'Free, secure, and privacy-focused PDF tools built in Canada. All processing happens locally in your browser.',
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': 'https://www.pdfcanada.ca/#localbusiness',
    name: 'pdfcanada.ca - Free PDF Tools',
    alternateName: 'PDF Canada',
    url: 'https://www.pdfcanada.ca',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.pdfcanada.ca/android-chrome-512x512.png',
      width: 512,
      height: 512,
    },
    image: 'https://www.pdfcanada.ca/og-image.png',
    description:
      "Canada's premier free PDF tools service. Privacy-first, browser-based PDF processing for all Canadians. Merge, split, compress, convert, and sign PDFs - all locally in your browser.",
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 56.1304,
      longitude: -106.3468,
    },
    priceRange: 'FREE',
    currenciesAccepted: 'CAD',
    paymentAccepted: 'Not Applicable - Free Service',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    areaServed: [
      // Country
      { '@type': 'Country', name: 'Canada' },
      // All Provinces & Territories
      { '@type': 'State', name: 'Ontario' },
      { '@type': 'State', name: 'Quebec' },
      { '@type': 'State', name: 'British Columbia' },
      { '@type': 'State', name: 'Alberta' },
      { '@type': 'State', name: 'Manitoba' },
      { '@type': 'State', name: 'Saskatchewan' },
      { '@type': 'State', name: 'Nova Scotia' },
      { '@type': 'State', name: 'New Brunswick' },
      { '@type': 'State', name: 'Newfoundland and Labrador' },
      { '@type': 'State', name: 'Prince Edward Island' },
      { '@type': 'State', name: 'Northwest Territories' },
      { '@type': 'State', name: 'Yukon' },
      { '@type': 'State', name: 'Nunavut' },
      // Major Cities
      { '@type': 'City', name: 'Toronto' },
      { '@type': 'City', name: 'Montreal' },
      { '@type': 'City', name: 'Vancouver' },
      { '@type': 'City', name: 'Calgary' },
      { '@type': 'City', name: 'Edmonton' },
      { '@type': 'City', name: 'Ottawa' },
      { '@type': 'City', name: 'Winnipeg' },
      { '@type': 'City', name: 'Quebec City' },
      { '@type': 'City', name: 'Hamilton' },
      { '@type': 'City', name: 'Halifax' },
    ],
  };
}

export function generateSoftwareApplicationSchema(toolConfig: ToolConfig, lang: 'en' | 'fr' = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: lang === 'fr' ? toolConfig.titleFr : toolConfig.title,
    description: lang === 'fr' ? toolConfig.descriptionFr : toolConfig.description,
    url: `https://www.pdfcanada.ca/${lang}/${toolConfig.slug}`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web Browser',
    browserRequirements: 'Requires JavaScript. Supports Chrome, Firefox, Safari, Edge.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CAD',
    },
    author: {
      '@type': 'Organization',
      name: 'pdfcanada.ca',
    },
    datePublished: '2024-01-01',
    inLanguage: lang === 'fr' ? 'fr-CA' : 'en-CA',
  };
}

export function generateArticleSchema(options: {
  title: string;
  description: string;
  slug: string;
  lang: 'en' | 'fr';
  datePublished?: string;
  dateModified?: string;
}) {
  const { title, description, slug, lang, datePublished = '2024-01-01', dateModified } = options;
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: `https://www.pdfcanada.ca/${lang}/guides/${slug}`,
    image: 'https://www.pdfcanada.ca/og-image.png',
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: 'pdfcanada.ca',
      url: 'https://www.pdfcanada.ca',
    },
    publisher: {
      '@type': 'Organization',
      name: 'pdfcanada.ca',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.pdfcanada.ca/android-chrome-512x512.png',
      },
    },
    inLanguage: lang === 'fr' ? 'fr-CA' : 'en-CA',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.pdfcanada.ca/${lang}/guides/${slug}`,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
