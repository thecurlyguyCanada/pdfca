import React from 'react';

import { Language, translations } from '../utils/i18n';
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
  faqs?: { q: string; a: any; image?: string; video?: string; howTo?: { name: string; text: string }[] }[];
  datePublished?: string;
  dateModified?: string;
  price?: string;
  rating?: number;
  reviewCount?: number;
  steps?: { name: string; text: string; image?: string }[];
  quickAnswer?: QuickAnswer;
  author?: Author;
  mentions?: { name: string; url?: string; sameAs?: string }[];
  // Video support for enhanced SERP features
  video?: {
    name: string;
    description: string;
    contentUrl: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration?: string; // ISO 8601 format e.g. "PT1M30S"
  };
}

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
  mentions,
  video
}: SEOProps) {
  const allSchemas: Record<string, any>[] = [];
  const t = translations[lang];

  const safeTitle = typeof title === 'string' ? title : '';
  const schemaName = safeTitle.includes('|') ? safeTitle.split('|')[0].trim() : safeTitle;

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
    "description": t.seo.homeDesc
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
    "description": t.seo.homeDesc,
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
    "description": t.seo.homeDesc,
    "publisher": { "@id": `${URLS.DOMAIN}/#organization` },
    "inLanguage": ["en-CA", "fr-CA", "pt-BR"]
  };

  // 1. Add Core Schemas
  if (!noOrganization) {
    // Enhanced Organization Schema for Entity Knowledge
    const enhancedOrgSchema = {
      ...organizationSchema,
      "knowsAbout": ["PDF processing", "Document Security", "Optical Character Recognition", "Data Privacy", "PIPEDA"],
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      }
    };
    allSchemas.push(enhancedOrgSchema);
    allSchemas.push(websiteSchema);
    allSchemas.push(localBusinessSchema);
  }

  // 2. Navigation Schema
  const navUrls = [
    "/delete-pdf-pages", "/rotate-pdf", "/merge-pdf", "/split-pdf", "/compress-pdf"
  ];
  const langPrefix = lang === 'en' ? '' : `/${lang}`;
  allSchemas.push({
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "url": navUrls.map(url => getFullUrl(`${langPrefix}${url}`))
  });

  // 3. Page Specific Schemas - WebApplication for tool pages
  // 2026 Update: Enhanced schema for AI agent discoverability
  if (canonicalPath !== '/' && !canonicalPath.startsWith('/about') && !canonicalPath.startsWith('/guides')) {
    const webAppSchema: Record<string, any> = {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "@id": `${getFullUrl(canonicalPath)}#application`,
      "name": schemaName,
      "url": getFullUrl(canonicalPath),
      "operatingSystem": "Web, Windows, macOS, Linux, Android, iOS",
      "applicationCategory": "UtilitiesApplication",
      "applicationSubCategory": "PDF Tools",
      "browserRequirements": "Requires JavaScript. Works in Chrome, Firefox, Safari, Edge.",
      "permissions": "Local file access only - no server uploads",
      // 2026: Expanded featureList for AI agents to understand capabilities
      "featureList": [
        "Local PDF processing",
        "No server uploads",
        "PIPEDA compliant",
        "Privacy-first",
        "No account required",
        "No file size limits",
        "Works offline after load"
      ],
      "offers": {
        "@type": "Offer",
        "price": price || "0",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2027-12-31"
      },
      // 2026: Add softwareHelp for AI agents to find documentation
      "softwareHelp": {
        "@type": "CreativeWork",
        "url": `${URLS.DOMAIN}/guides/ultimate-pdf-guide`
      },
      "author": { "@id": `${URLS.DOMAIN}/#organization` },
      "provider": { "@id": `${URLS.DOMAIN}/#organization` },
      "datePublished": datePublished || "2024-01-01",
      "dateModified": dateModified || "2026-01-05",
      "isAccessibleForFree": true,
      "countryOfOrigin": { "@type": "Country", "name": "Canada" },
      // 2026: Add screenshot for AI agents to preview
      "screenshot": getAssetUrl(URLS.OG_IMAGE),
      // 2026: Add potentialAction for AI agents to understand usage
      "potentialAction": {
        "@type": "UseAction",
        "name": `Use ${schemaName}`,
        "target": getFullUrl(canonicalPath),
        "object": {
          "@type": "DigitalDocument",
          "name": "PDF File"
        }
      }
    };

    if (rating) {
      webAppSchema["aggregateRating"] = {
        "@type": "AggregateRating",
        "ratingValue": rating,
        "reviewCount": reviewCount || 100,
        "bestRating": "5",
        "worstRating": "1"
      };
    }

    allSchemas.push(webAppSchema);
  }


  // 4. WebPage Schema (Speakable & Accessibility & Entity SEO)
  const webPageSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${getFullUrl(canonicalPath)}#webpage`,
    "url": getFullUrl(canonicalPath),
    "name": title,
    "description": description,
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": image
    },
    "isPartOf": { "@id": `${URLS.DOMAIN}/#website` },
    "inLanguage": lang === 'fr' ? 'fr-CA' : (lang === 'pt' ? 'pt-BR' : 'en-CA'),
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

  // 5. FAQ Schema - 2026 Update
  // Note: As of 2026, FAQ rich results only show for government/health sites.
  // However, FAQ schema still helps AI systems (Google AI Overviews, ChatGPT, etc.)
  // understand and cite content, so we keep it for AI visibility (+73% selection rate).
  if (faqs && faqs.length > 0) {
    allSchemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => {
        const answer: Record<string, any> = {
          "@type": "Answer",
          "text": typeof faq.a === 'string' ? faq.a : title
        };

        // Add image to answer if provided (helps with multimodal AI search)
        if (faq.image) {
          answer["image"] = {
            "@type": "ImageObject",
            "url": faq.image.startsWith('http') ? faq.image : getAssetUrl(faq.image),
            "contentUrl": faq.image.startsWith('http') ? faq.image : getAssetUrl(faq.image)
          };
        }

        // Add video to answer if provided (helps with multimodal AI search)
        if (faq.video) {
          answer["video"] = {
            "@type": "VideoObject",
            "contentUrl": faq.video,
            "thumbnailUrl": faq.image || getAssetUrl(URLS.OG_IMAGE),
            "uploadDate": new Date().toISOString().split('T')[0],
            "description": faq.q
          };
        }

        const question: Record<string, any> = {
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": answer
        };

        return question;
      })
    });
  }

  // 6. HowTo Schema - 2026 DEPRECATED
  // As of September 2023 and fully deprecated in 2024-2025, Google no longer shows
  // HowTo rich results on desktop or mobile. The schema is now ignored.
  // Keeping steps data in FAQ answers for AI understanding but removing standalone HowTo.
  // Reference: https://developers.google.com/search/blog/2023/08/howto-faq-changes

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

  // 8. VideoObject Schema for enhanced SERP features
  if (video) {
    const videoSchema: Record<string, any> = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": video.name,
      "description": video.description,
      "contentUrl": video.contentUrl,
      "thumbnailUrl": video.thumbnailUrl,
      "uploadDate": video.uploadDate,
      "publisher": {
        "@type": "Organization",
        "name": "pdfcanada.ca",
        "logo": {
          "@type": "ImageObject",
          "url": getAssetUrl(URLS.ANDROID_ICON)
        }
      }
    };
    if (video.duration) {
      videoSchema["duration"] = video.duration;
    }
    allSchemas.push(videoSchema);
  }

  // 9. Custom Schemas
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