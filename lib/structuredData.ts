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
      {
        '@type': 'Country',
        name: 'Canada',
      },
      {
        '@type': 'State',
        name: 'Ontario',
      },
      {
        '@type': 'State',
        name: 'Quebec',
      },
      {
        '@type': 'State',
        name: 'British Columbia',
      },
      {
        '@type': 'State',
        name: 'Alberta',
      },
      {
        '@type': 'State',
        name: 'Manitoba',
      },
      {
        '@type': 'State',
        name: 'Saskatchewan',
      },
    ],
  };
}

export function generateSoftwareApplicationSchema(toolConfig: ToolConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: toolConfig.title,
    description: toolConfig.description,
    url: `https://www.pdfcanada.ca/${toolConfig.slug}`,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web Browser',
    browserRequirements: 'Requires JavaScript. Supports Chrome, Firefox, Safari, Edge.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CAD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'pdfcanada.ca',
    },
    datePublished: '2024-01-01',
    inLanguage: ['en-CA', 'fr-CA'],
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
