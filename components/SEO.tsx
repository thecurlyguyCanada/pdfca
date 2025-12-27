import React from 'react';

import { Language } from '../utils/i18n';
import { URLS, getFullUrl, getAssetUrl } from '../config/urls';
import { ORGANIZATION } from '../config/organization';

interface QuickAnswer {
  question: string;
  answer: string;
  tool?: string;
  steps?: string[];
}

interface Author {
  name: string;
  url?: string;
  type?: 'Person' | 'Organization';
}

interface SEOProps {
  title: string;
  description: string;
  lang: Language;
  canonicalPath?: string;
  image?: string;
  schema?: Record<string, any> | Record<string, any>[];
  breadcrumbs?: { name: string; path: string }[];
  ogType?: 'website' | 'article' | 'product';
  noOrganization?: boolean;
  faqs?: { q: string; a: any }[];
  datePublished?: string;
  dateModified?: string;
  price?: string;
  rating?: number;
  reviewCount?: number;
  steps?: { name: string; text: string; image?: string }[];
  quickAnswer?: QuickAnswer;
  author?: Author;
  mentions?: { name: string; url?: string; sameAs?: string }[];
}

// Fixed schemas
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${URLS.DOMAIN}/#organization`,
  "name": ORGANIZATION.name,
  "url": URLS.DOMAIN,
  "logo": {
    "@type": "ImageObject",
    "url": getAssetUrl(URLS.ANDROID_ICON),
    "width": 512,
    "height": 512
  },
  "sameAs": URLS.SAME_AS,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": ORGANIZATION.location.city,
    "addressRegion": ORGANIZATION.location.province,
    "addressCountry": "CA"
  },
  "foundingDate": ORGANIZATION.foundingDate,
  "description": "Free, secure, and privacy-focused PDF tools built in Canada. All processing happens locally in your browser."
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${URLS.DOMAIN}/#localbusiness`,
  "name": `${ORGANIZATION.name} - Free PDF Tools`,
  "alternateName": ORGANIZATION.name,
  "url": URLS.DOMAIN,
  "logo": {
    "@type": "ImageObject",
    "url": getAssetUrl(URLS.ANDROID_ICON),
    "width": 512,
    "height": 512
  },
  "image": getAssetUrl(URLS.OG_IMAGE),
  "description": "Canada's premier free PDF tools service. Privacy-first, browser-based PDF processing for all Canadians.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": ORGANIZATION.location.postalCode,
    "addressLocality": ORGANIZATION.location.city,
    "addressRegion": "ON",
    "postalCode": ORGANIZATION.location.postalCode,
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": ORGANIZATION.coordinates.toronto.latitude,
    "longitude": ORGANIZATION.coordinates.toronto.longitude
  },
  "priceRange": ORGANIZATION.priceRange,
  "currenciesAccepted": "CAD",
  "paymentAccepted": "Not Applicable - Free Service"
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${URLS.DOMAIN}/#website`,
  "name": ORGANIZATION.name,
  "url": URLS.DOMAIN,
  "description": "Free, secure PDF tools built in Canada. All processing happens locally in your browser.",
  "publisher": { "@id": `${URLS.DOMAIN}/#organization` },
  "inLanguage": ["en-CA", "fr-CA"]
};

/**
 * SEO Component (Server Component)
 * Focuses strictly on Structured Data (JSON-LD) generation for Next.js 15+
 * Meta tags should be handled via generateMetadata in page.tsx
 */
export function SEO({
  title,
  description,
  canonicalPath = '/',
  image = getAssetUrl(URLS.OG_IMAGE),
  lang = 'en',
  schema,
  breadcrumbs,
  ogType = 'website',
  noOrganization = false,
  faqs,
  datePublished,
  dateModified,
  price,
  rating,
  reviewCount,
  steps,
  quickAnswer,
  author,
  mentions
}: SEOProps) {
  const allSchemas: Record<string, any>[] = [];

  const safeTitle = typeof title === 'string' ? title : '';
  const schemaName = safeTitle.includes('|') ? safeTitle.split('|')[0].trim() : safeTitle;

  // 1. Add Core Schemas
  if (!noOrganization) {
    allSchemas.push(organizationSchema);
    allSchemas.push(websiteSchema);
    allSchemas.push(localBusinessSchema);
  }

  // 2. Navigation Schema
  const navUrls = [
    "/delete-pdf-pages", "/rotate-pdf", "/merge-pdf", "/split-pdf", "/compress-pdf"
  ];
  const langPrefix = lang === 'fr' ? '/fr' : '';
  allSchemas.push({
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "url": navUrls.map(url => getFullUrl(`${langPrefix}${url}`))
  });

  // 3. Page Specific Schemas
  if (canonicalPath !== '/' && !canonicalPath.startsWith('/guides')) {
    const swSchema: Record<string, any> = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": schemaName,
      "operatingSystem": "Any",
      "applicationCategory": "BusinessApplication",
      "browserRequirements": "Requires JavaScript. Works in Chrome, Firefox, Safari, Edge.",
      "permissions": "Local file access only",
      "featureList": "Local PDF processing, No server uploads",
      "offers": {
        "@type": "Offer",
        "price": price || "0",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock"
      }
    };

    if (rating) {
      swSchema["aggregateRating"] = {
        "@type": "AggregateRating",
        "ratingValue": rating,
        "reviewCount": reviewCount || 100,
        "bestRating": "5",
        "worstRating": "1"
      };
    }

    allSchemas.push(swSchema);
  }

  // 4. WebPage Schema (Speakable & Accessibility & Entity SEO)
  const webPageSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${getFullUrl(canonicalPath)}#webpage`,
    "url": getFullUrl(canonicalPath),
    "name": title,
    "description": description,
    "isPartOf": { "@id": `${URLS.DOMAIN}/#website` },
    "inLanguage": lang === 'fr' ? 'fr-CA' : 'en-CA',
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".hero-title", ".hero-desc", ".ai-snapshot-answer", "h1", "h2", "[data-ai-summary]"]
    }
  };

  if (mentions && mentions.length > 0) {
    webPageSchema["mentions"] = mentions.map(m => ({
      "@type": "Thing",
      "name": m.name,
      "url": m.url,
      "sameAs": m.sameAs
    }));
  }

  allSchemas.push(webPageSchema);

  // 5. FAQ Schema
  if (faqs && faqs.length > 0) {
    allSchemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": typeof faq.a === 'string' ? faq.a : title }
      }))
    });
  }

  // 6. HowTo Schema (Expert Enhancement)
  const howToSteps = steps || quickAnswer?.steps?.map(step => ({ name: step, text: step }));

  if (howToSteps && howToSteps.length > 0) {
    allSchemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": schemaName,
      "description": description,
      "step": howToSteps.map((step, index) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.name,
        "text": step.text,
        "url": `${getFullUrl(canonicalPath)}#step-${index + 1}`
      }))
    });
  }

  // 7. Breadcrumbs Schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    allSchemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.path.startsWith('http') ? crumb.path : getFullUrl(crumb.path)
      }))
    });
  }

  // 8. Custom Schemas
  if (schema) {
    const pageSchemas = Array.isArray(schema) ? schema : [schema];
    allSchemas.push(...pageSchemas);
  }

  return (
    <>
      {allSchemas.map((schemaItem, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaItem) }}
        />
      ))}
    </>
  );
}