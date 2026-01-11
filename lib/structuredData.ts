import type { ToolConfig } from './toolConfig';
import { ORGANIZATION } from '@/config/organization';
import { URLS, getFullUrl, getAssetUrl } from '@/config/urls';
import type { Language } from '@/utils/i18n';

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${URLS.DOMAIN}/#website`,
    name: 'pdfcanada.ca',
    url: URLS.DOMAIN,
    description:
      'Free, secure, and privacy-focused PDF tools built in Canada. All processing happens locally in your browser.',
    inLanguage: ['en-CA', 'fr-CA', 'pt-BR'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${URLS.DOMAIN}/{search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${URLS.DOMAIN}/#organization`,
    name: ORGANIZATION.name,
    url: URLS.DOMAIN,
    logo: {
      '@type': 'ImageObject',
      url: getAssetUrl(URLS.ANDROID_ICON),
      width: 512,
      height: 512,
    },
    sameAs: URLS.SAME_AS,
    address: {
      '@type': 'PostalAddress',
      addressLocality: ORGANIZATION.location.city,
      addressRegion: ORGANIZATION.location.province,
      addressCountry: 'CA',
    },
    foundingDate: ORGANIZATION.foundingDate,
    description:
      'Free, secure, and privacy-focused PDF tools built in Canada. All processing happens locally in your browser.',
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${URLS.DOMAIN}/#localbusiness`,
    name: `${ORGANIZATION.name} - Free PDF Tools`,
    alternateName: 'PDF Canada',
    url: URLS.DOMAIN,
    logo: {
      '@type': 'ImageObject',
      url: getAssetUrl(URLS.ANDROID_ICON),
      width: 512,
      height: 512,
    },
    image: getAssetUrl(URLS.OG_IMAGE),
    description:
      "Canada's premier free PDF tools service. Privacy-first, browser-based PDF processing for all Canadians. Merge, split, compress, convert, and sign PDFs - all locally in your browser.",
    address: {
      '@type': 'PostalAddress',
      addressLocality: ORGANIZATION.location.city,
      addressRegion: ORGANIZATION.location.province,
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: parseFloat(ORGANIZATION.coordinates.toronto.latitude),
      longitude: parseFloat(ORGANIZATION.coordinates.toronto.longitude),
    },
    priceRange: ORGANIZATION.priceRange,
    currenciesAccepted: 'CAD',
    paymentAccepted: 'Not Applicable - Free Service',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ORGANIZATION.hours.dayOfWeek,
      opens: ORGANIZATION.hours.opensAt,
      closes: ORGANIZATION.hours.closesAt,
    },
    areaServed: [
      // Country
      { '@type': 'Country', name: 'Canada' },
      // All Provinces & Territories
      ...ORGANIZATION.serviceArea.provinces.map(p => ({ '@type': 'State', name: p })),
      ...ORGANIZATION.serviceArea.territories.map(t => ({ '@type': 'State', name: t })),
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

export function generateSoftwareApplicationSchema(toolConfig: ToolConfig, lang: Language = 'en') {
  // 2026 Update: Use WebApplication for browser-based tools per Google's guidelines
  // WebApplication is more accurate than generic SoftwareApplication for web apps
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: toolConfig.title[lang] || toolConfig.title.en,
    description: toolConfig.description[lang] || toolConfig.description.en,
    url: `${URLS.DOMAIN}/${lang}/${toolConfig.slug}`,
    applicationCategory: 'UtilitiesApplication',
    applicationSubCategory: 'PDF Tools',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript. Supports Chrome, Firefox, Safari, Edge.',
    permissions: 'Local file access only - no server uploads',
    featureList: ['Local PDF processing', 'No server uploads', 'PIPEDA compliant', 'Privacy-first'],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CAD',
      availability: 'https://schema.org/InStock',
    },
    author: {
      '@type': 'Organization',
      '@id': `${URLS.DOMAIN}/#organization`,
      name: 'pdfcanada.ca',
    },
    provider: {
      '@type': 'Organization',
      '@id': `${URLS.DOMAIN}/#organization`,
      name: 'pdfcanada.ca',
    },
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: lang === 'fr' ? 'fr-CA' : (lang === 'pt' ? 'pt-BR' : 'en-CA'),
    // 2026: Entity connections for Knowledge Graph density
    isAccessibleForFree: true,
    countryOfOrigin: {
      '@type': 'Country',
      name: 'Canada',
    },
  };
}

export function generateArticleSchema(options: {
  title: string;
  description: string;
  slug: string;
  lang: Language;
  datePublished?: string;
  dateModified?: string;
}) {
  const { title, description, slug, lang, datePublished = '2024-01-01', dateModified } = options;
  // 2026 Update: Content freshness is a major AI ranking factor
  // Use current date for dateModified to signal fresh, maintained content
  const currentDate = new Date().toISOString().split('T')[0];
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: `${URLS.DOMAIN}/${lang}/guides/${slug}`,
    image: getAssetUrl(URLS.OG_IMAGE),
    datePublished: datePublished,
    dateModified: dateModified || currentDate,
    author: {
      '@type': 'Organization',
      '@id': `${URLS.DOMAIN}/#organization`,
      name: 'pdfcanada.ca',
      url: URLS.DOMAIN,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${URLS.DOMAIN}/#organization`,
      name: 'pdfcanada.ca',
      logo: {
        '@type': 'ImageObject',
        url: getAssetUrl(URLS.ANDROID_ICON),
      },
    },
    inLanguage: lang === 'fr' ? 'fr-CA' : (lang === 'pt' ? 'pt-BR' : 'en-CA'),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${URLS.DOMAIN}/${lang}/guides/${slug}`,
    },
    // 2026: Additional AI-friendly properties
    isAccessibleForFree: true,
    copyrightHolder: {
      '@type': 'Organization',
      '@id': `${URLS.DOMAIN}/#organization`,
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
      item: item.url.startsWith('http') ? item.url : getFullUrl(item.url),
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
