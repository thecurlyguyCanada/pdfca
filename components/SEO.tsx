'use client';

import React, { useEffect, useCallback } from 'react';
import { Language } from '../utils/i18n';
import { URLS, getFullUrl, getAssetUrl } from '../config/urls';
import { ORGANIZATION, getFormattedAddress } from '../config/organization';

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
}

// Organization schema - reused across pages
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
  "sameAs": [
    URLS.TWITTER
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": ORGANIZATION.location.city,
    "addressRegion": ORGANIZATION.location.province,
    "addressCountry": "CA"
  },
  "foundingDate": ORGANIZATION.foundingDate,
  "description": "Free, secure, and privacy-focused PDF tools built in Canada. All processing happens locally in your browser."
};

// LocalBusiness schema - Enhanced for local SEO across Canada
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
  "description": "Canada's premier free PDF tools service. Privacy-first, browser-based PDF processing for all Canadians. Merge, split, compress, convert, and sign PDFs - all locally in your browser.",
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
  "telephone": "",
  "email": "",
  "priceRange": ORGANIZATION.priceRange,
  "currenciesAccepted": "CAD",
  "paymentAccepted": "Not Applicable - Free Service",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ORGANIZATION.hours.dayOfWeek,
    "opens": ORGANIZATION.hours.opensAt,
    "closes": ORGANIZATION.hours.closesAt
  },
  "sameAs": [
    URLS.TWITTER
  ],
  "areaServed": [
    {
      "@type": "Country",
      "name": "Canada",
      "geo": {
        "@type": "GeoShape",
        "addressCountry": "CA"
      }
    },
    // All 10 Canadian Provinces
    {
      "@type": "State",
      "name": "Ontario",
      "alternateName": "ON"
    },
    {
      "@type": "State",
      "name": "Quebec",
      "alternateName": "QC"
    },
    {
      "@type": "State",
      "name": "British Columbia",
      "alternateName": "BC"
    },
    {
      "@type": "State",
      "name": "Alberta",
      "alternateName": "AB"
    },
    {
      "@type": "State",
      "name": "Manitoba",
      "alternateName": "MB"
    },
    {
      "@type": "State",
      "name": "Saskatchewan",
      "alternateName": "SK"
    },
    {
      "@type": "State",
      "name": "Nova Scotia",
      "alternateName": "NS"
    },
    {
      "@type": "State",
      "name": "New Brunswick",
      "alternateName": "NB"
    },
    {
      "@type": "State",
      "name": "Newfoundland and Labrador",
      "alternateName": "NL"
    },
    {
      "@type": "State",
      "name": "Prince Edward Island",
      "alternateName": "PE"
    },
    // All 3 Canadian Territories
    {
      "@type": "State",
      "name": "Northwest Territories",
      "alternateName": "NT"
    },
    {
      "@type": "State",
      "name": "Yukon",
      "alternateName": "YT"
    },
    {
      "@type": "State",
      "name": "Nunavut",
      "alternateName": "NU"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": ORGANIZATION.coordinates.canadaCenter.latitude,
      "longitude": ORGANIZATION.coordinates.canadaCenter.longitude
    },
    "geoRadius": ORGANIZATION.serviceArea.radius
  },
  "knowsAbout": [
    "PDF Tools",
    "Document Processing",
    "Privacy-First Software",
    "Browser-Based Applications",
    "Canadian Web Services"
  ],
  "knowsLanguage": ["en-CA", "fr-CA"],
  "slogan": "The Polite Canadian PDF Tools",
  "foundingDate": ORGANIZATION.foundingDate,
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": ORGANIZATION.location.city,
      "addressRegion": ORGANIZATION.location.province,
      "addressCountry": "CA"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "PDF Tools Services",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Document Manipulation",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Merge PDF",
              "description": "Combine multiple PDF files into one"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Split PDF",
              "description": "Split PDF into multiple files"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Compress PDF",
              "description": "Reduce PDF file size"
            }
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "name": "Document Conversion",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "PDF to Word",
              "description": "Convert PDF to Word document"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Word to PDF",
              "description": "Convert Word to PDF"
            }
          }
        ]
      }
    ]
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Canadians",
    "geographicArea": {
      "@type": "Country",
      "name": "Canada"
    }
  }
};

// WebSite schema (SearchAction removed - site doesn't have search functionality)
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${URLS.DOMAIN}/#website`,
  "name": ORGANIZATION.name,
  "url": URLS.DOMAIN,
  "description": "Free, secure PDF tools built in Canada. All processing happens locally in your browser.",
  "publisher": {
    "@id": `${URLS.DOMAIN}/#organization`
  },
  "inLanguage": ["en-CA", "fr-CA"]
};

export const SEO: React.FC<SEOProps> = ({
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
  author
}) => {
  // Memoize the setMeta helper function
  const setMeta = useCallback((attrName: string, attrValue: string, content: string) => {
    let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attrName, attrValue);
      document.head.appendChild(element);
    }
    element.setAttribute('content', content);
  }, []);

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Update HTML Lang Attribute
    document.documentElement.lang = lang;

    // 3. Update Meta Description
    setMeta('name', 'description', description);

    // 4. Update Open Graph
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', getFullUrl(canonicalPath));
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:type', 'image/png');
    setMeta('property', 'og:image:alt', title);
    setMeta('property', 'og:locale', lang === 'fr' ? 'fr_CA' : 'en_CA');
    setMeta('property', 'og:site_name', ORGANIZATION.name);

    // 5. Update Twitter
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:url', getFullUrl(canonicalPath));
    setMeta('name', 'twitter:image', image);
    setMeta('name', 'twitter:image:alt', `${title} - ${ORGANIZATION.name}`);
    setMeta('name', 'twitter:site', '@pdfcanada');
    setMeta('name', 'twitter:creator', '@pdfcanada');

    // 6. Update Canonical Link
    // Ensure canonical path reflects the current language
    let finalCanonicalPath = canonicalPath;
    if (lang === 'fr' && !canonicalPath.startsWith('/fr') && canonicalPath !== '/') {
      finalCanonicalPath = `/fr${canonicalPath.startsWith('/') ? '' : '/'}${canonicalPath}`;
    } else if (lang === 'fr' && canonicalPath === '/') {
      finalCanonicalPath = '/fr/';
    }

    // Determine English and French paths for hreflang
    // We assume the input canonicalPath is the "base" (English) path usually
    const basePath = canonicalPath.replace(/^\/fr/, '') || '/';
    const enPath = basePath === '/' ? '/' : basePath.startsWith('/') ? basePath : `/${basePath}`;
    const frPath = enPath === '/' ? '/fr/' : `/fr${enPath}`;

    let link = document.querySelector('link[rel="canonical"]');
    if (link) {
      link.setAttribute('href', getFullUrl(finalCanonicalPath));
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', getFullUrl(finalCanonicalPath));
      document.head.appendChild(link);
    }

    // 6b. Update hreflang links dynamically
    const updateHreflang = (hreflang: string, href: string) => {
      let hreflangLink = document.querySelector(`link[hreflang="${hreflang}"]`);
      if (hreflangLink) {
        hreflangLink.setAttribute('href', href);
      } else {
        hreflangLink = document.createElement('link');
        hreflangLink.setAttribute('rel', 'alternate');
        hreflangLink.setAttribute('hreflang', hreflang);
        hreflangLink.setAttribute('href', href);
        document.head.appendChild(hreflangLink);
      }
    };

    updateHreflang('en-CA', getFullUrl(enPath));
    updateHreflang('fr-CA', getFullUrl(frPath));
    updateHreflang('x-default', getFullUrl(enPath));

    // 7. Dynamic Favicons
    const setLink = (rel: string, href: string, sizes?: string, type?: string) => {
      let link = document.querySelector(`link[rel="${rel}"]${sizes ? `[sizes="${sizes}"]` : ''}`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        if (sizes) link.setAttribute('sizes', sizes);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
      if (type) link.setAttribute('type', type);
    };

    setLink('apple-touch-icon', '/apple-touch-icon.png', '180x180');
    setLink('icon', '/favicon.svg', undefined, 'image/svg+xml');
    setLink('icon', '/favicon-32x32.png', '32x32', 'image/png');
    setLink('icon', '/favicon-16x16.png', '16x16', 'image/png');
    setLink('manifest', '/site.webmanifest');

    // 8. Dynamic JSON-LD Structured Data
    // Remove existing dynamic schemas
    document.querySelectorAll('script[data-dynamic-schema]').forEach(el => el.remove());

    // Build combined schemas array
    const allSchemas: Record<string, any>[] = [];

    // Add Organization and WebSite schemas (unless explicitly disabled)
    if (!noOrganization) {
      allSchemas.push(organizationSchema);
      allSchemas.push(websiteSchema);
      allSchemas.push(localBusinessSchema);
    }

    // SiteNavigationElement Schema - Complete tool list with translations
    const navNames = lang === 'fr' ? [
      "Supprimer des pages PDF", "Pivoter PDF", "Rendre PDF modifiable", "HEIC en PDF",
      "PDF en Word", "Word en PDF", "Aplatir PDF", "Rogner PDF", "Compresser PDF",
      "Fusionner PDF", "Diviser PDF", "Signer PDF", "OCR PDF", "PDF en XML", "XML en PDF",
      "EPUB en PDF", "PDF en EPUB", "Organiser PDF", "CBR en PDF", "Excel en PDF",
      "Supprimer pages PDF", "Guide ultime", "Guide Diviser PDF", "Guide Signer PDF", "Guide Excel en PDF"
    ] : [
      "Delete PDF Pages", "Rotate PDF", "Make PDF Fillable", "HEIC to PDF",
      "PDF to Word", "Word to PDF", "Flatten PDF", "Crop PDF", "Compress PDF",
      "Merge PDF", "Split PDF", "Sign PDF", "OCR PDF", "PDF to XML", "XML to PDF",
      "EPUB to PDF", "PDF to EPUB", "Organize PDF", "CBR to PDF", "Excel to PDF",
      "PDF Page Remover", "Ultimate Guide", "Split PDF Guide", "Sign PDF Guide", "Excel to PDF Guide"
    ];
    const navUrls = [
      "/delete-pdf-pages", "/rotate-pdf", "/make-pdf-fillable", "/heic-to-pdf",
      "/pdf-to-word", "/word-to-pdf", "/make-pdf-non-editable", "/crop-pdf", "/compress-pdf",
      "/merge-pdf", "/split-pdf", "/sign-pdf", "/ocr-pdf", "/pdf-to-xml", "/xml-to-pdf",
      "/epub-to-pdf", "/pdf-to-epub", "/organize-pdf", "/cbr-to-pdf", "/excel-to-pdf",
      "/pdf-page-remover", "/guides/ultimate-pdf-guide", "/guides/split-pdf", "/guides/sign-pdf", "/guides/excel-to-pdf"
    ];
    const langPrefix = lang === 'fr' ? '/fr' : '';
    const siteNavSchema = {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": navNames,
      "url": navUrls.map(url => getFullUrl(`${langPrefix}${url}`))
    };
    allSchemas.push(siteNavSchema);

    // SoftwareApplication schema (for tool pages)
    // We only invoke this if it looks like a tool page (canonical path isn't root or guide)
    // Adjust logic as needed
    if (canonicalPath !== '/' && !canonicalPath.startsWith('/guides')) {
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": title.split('|')[0].trim(),
        "operatingSystem": "Web Browser",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Document Editor",
        "offers": {
          "@type": "Offer",
          "price": price || "0",
          "priceCurrency": "CAD",
          "availability": "https://schema.org/InStock"
        },
        ...(rating && reviewCount && {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": rating.toString(),
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": reviewCount.toString(),
            "reviewCount": reviewCount.toString()
          }
        }),
        "featureList": "Local Processing, Privacy First, No Upload Required, Fast, Free",
        "softwareRequirements": "Modern Web Browser",
        "screenshot": getAssetUrl(URLS.OG_IMAGE),
        "author": author ? {
          "@type": author.type || "Person",
          "name": author.name,
          "url": author.url ? (author.url.startsWith('http') ? author.url : getFullUrl(author.url)) : undefined
        } : {
          "@id": `${URLS.DOMAIN}/#organization`
        }
      });
    }

    // WebPage schema with Speakable for voice search (2025/2026 SEO)
    // Enhanced for AI Search (Google SGE, Perplexity, ChatGPT, Claude)
    allSchemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${getFullUrl(canonicalPath)}#webpage`,
      "url": getFullUrl(canonicalPath),
      "name": title,
      "description": description,
      "isPartOf": { "@id": `${URLS.DOMAIN}/#website` },
      "inLanguage": lang === 'fr' ? 'fr-CA' : 'en-CA',
      ...(datePublished && { "datePublished": datePublished }),
      ...(dateModified && { "dateModified": dateModified }),
      "author": author ? {
        "@type": author.type || "Person",
        "name": author.name,
        "url": author.url ? (author.url.startsWith('http') ? author.url : getFullUrl(author.url)) : undefined
      } : { "@id": `${URLS.DOMAIN}/#organization` },
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": [".hero-title", ".hero-desc", ".ai-snapshot-answer", "h1", "h2", "[data-ai-summary]"],
        "xpath": [
          "/html/head/title",
          "/html/head/meta[@name='description']/@content"
        ]
      },
      // 2026 Enhancement: Add accessibility and semantic signals
      "accessMode": ["textual", "visual"],
      "accessModeSufficient": ["textual"],
      "accessibilityFeature": ["alternativeText", "structuralNavigation", "readingOrder"],
      "accessibilityHazard": ["none"],
      "accessibilityControl": ["fullKeyboardControl", "fullMouseControl", "fullTouchControl"],
      // Primary keywords for AI understanding
      "keywords": lang === 'fr'
        ? "PDF gratuit, outils PDF, Canada, sécurisé, sans téléchargement"
        : "free PDF tools, PDF editor, Canada, secure, no upload, privacy-first",
      // Help AI understand page purpose
      "about": {
        "@type": "Thing",
        "name": lang === 'fr' ? "Outils PDF" : "PDF Tools",
        "description": lang === 'fr'
          ? "Services de traitement PDF gratuits et sécurisés"
          : "Free and secure PDF processing services"
      }
    });

    // ItemList schema for home page tools (enables carousel rich results)
    if (canonicalPath === '/') {
      const itemListNames = lang === 'fr' ? [
        "Supprimer des pages PDF", "Pivoter PDF", "Fusionner PDF", "Diviser PDF", "Compresser PDF",
        "PDF en Word", "Word en PDF", "HEIC en PDF", "Signer PDF", "OCR PDF", "PDF en XML", "Rogner PDF",
        "Rendre PDF modifiable", "EPUB en PDF", "PDF en EPUB", "Organiser PDF", "CBR en PDF", "Excel en PDF",
        "Aplatir PDF", "XML en PDF"
      ] : [
        "Delete PDF Pages", "Rotate PDF", "Merge PDF", "Split PDF", "Compress PDF",
        "PDF to Word", "Word to PDF", "HEIC to PDF", "Sign PDF", "OCR PDF", "PDF to XML", "Crop PDF",
        "Make PDF Fillable", "EPUB to PDF", "PDF to EPUB", "Organize PDF", "CBR to PDF", "Excel to PDF",
        "Flatten PDF", "XML to PDF"
      ];
      const itemListUrls = [
        "/delete-pdf-pages", "/rotate-pdf", "/merge-pdf", "/split-pdf", "/compress-pdf",
        "/pdf-to-word", "/word-to-pdf", "/heic-to-pdf", "/sign-pdf", "/ocr-pdf", "/pdf-to-xml", "/crop-pdf",
        "/make-pdf-fillable", "/epub-to-pdf", "/pdf-to-epub", "/organize-pdf", "/cbr-to-pdf", "/excel-to-pdf",
        "/make-pdf-non-editable", "/xml-to-pdf"
      ];
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": lang === 'fr' ? "Outils PDF gratuits" : "Free PDF Tools",
        "description": lang === 'fr'
          ? "Une collection d'outils PDF gratuits et sécurisés qui traitent les fichiers localement dans votre navigateur."
          : "A collection of free, secure PDF tools that process files locally in your browser.",
        "itemListElement": itemListNames.map((name, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": name,
          "url": getFullUrl(`${langPrefix}${itemListUrls[i]}`)
        }))
      });
    }

    // FAQPage schema for pages with FAQs
    if (faqs && faqs.length > 0) {
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": typeof faq.a === 'string' ? faq.a : title // Fallback to title if answer is JSX
          }
        }))
      });
    }

    // HowTo Schema - Added for 2026 Standards
    if (steps && steps.length > 0) {
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": title,
        "description": description,
        "totalTime": "PT2M",
        "estimatedCost": {
          "@type": "MonetaryAmount",
          "value": "0",
          "currency": "CAD"
        },
        "tool": {
          "@type": "HowToTool",
          "name": lang === 'fr' ? "Navigateur Web" : "Web Browser"
        },
        "step": steps.map((step, index) => ({
          "@type": "HowToStep",
          "url": `${getFullUrl(canonicalPath)}#step${index + 1}`,
          "name": step.name,
          "itemListElement": {
            "@type": "HowToDirection",
            "text": step.text
          },
          ...(step.image && { "image": { "@type": "ImageObject", "url": step.image } }),
          "position": index + 1
        }))
      });
    }

    // Add Breadcrumbs schema
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

    // AI Quick Answer Schema (QAPage) - Optimized for ChatGPT, Claude, Perplexity
    if (quickAnswer) {
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "QAPage",
        "mainEntity": {
          "@type": "Question",
          "name": quickAnswer.question,
          "text": quickAnswer.question,
          "answerCount": 1,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": quickAnswer.answer,
            "url": getFullUrl(canonicalPath),
            ...(quickAnswer.steps && quickAnswer.steps.length > 0 && {
              "step": quickAnswer.steps.map((step, i) => ({
                "@type": "HowToStep",
                "position": i + 1,
                "text": step
              }))
            })
          }
        },
        ...(quickAnswer.tool && {
          "about": {
            "@type": "SoftwareApplication",
            "name": quickAnswer.tool,
            "operatingSystem": "Web Browser",
            "applicationCategory": "BusinessApplication",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "CAD" }
          }
        })
      });
    }

    // 2026 Enhancement: Add LearningResource/Course schema for guide pages
    if (canonicalPath.startsWith('/guides')) {
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "LearningResource",
        "name": title,
        "description": description,
        "url": getFullUrl(canonicalPath),
        "inLanguage": lang === 'fr' ? 'fr-CA' : 'en-CA',
        "learningResourceType": "how-to guide",
        "educationalLevel": "beginner",
        "isAccessibleForFree": true,
        "timeRequired": "PT5M",
        "teaches": title.split('|')[0].trim(),
        "author": { "@id": `${URLS.DOMAIN}/#organization` },
        "publisher": { "@id": `${URLS.DOMAIN}/#organization` },
        "datePublished": datePublished || "2024-01-01",
        "dateModified": dateModified || new Date().toISOString().split('T')[0],
        "keywords": lang === 'fr'
          ? `guide PDF, tutoriel PDF, ${title.split('|')[0].trim()}`
          : `PDF guide, PDF tutorial, ${title.split('|')[0].trim()}`,
        "educationalUse": "self-directed learning",
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student"
        }
      });

      // Also add an Article schema for better discoverability
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "url": getFullUrl(canonicalPath),
        "datePublished": datePublished || "2024-01-01",
        "dateModified": dateModified || new Date().toISOString().split('T')[0],
        "author": { "@id": `${URLS.DOMAIN}/#organization` },
        "publisher": { "@id": `${URLS.DOMAIN}/#organization` },
        "inLanguage": lang === 'fr' ? 'fr-CA' : 'en-CA',
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": getFullUrl(canonicalPath)
        },
        "image": {
          "@type": "ImageObject",
          "url": image,
          "width": 1200,
          "height": 630
        },
        "articleSection": lang === 'fr' ? "Guides" : "Guides",
        "wordCount": 500,
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", "h2", ".guide-content", "[data-ai-summary]"]
        }
      });
    }

    // 2026 Enhancement: Enhanced Product schema for service pages (non-guide tool pages)
    if (!canonicalPath.startsWith('/guides') && canonicalPath !== '/' && !canonicalPath.includes('/privacy') && !canonicalPath.includes('/terms') && !canonicalPath.includes('/about')) {
      allSchemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": title.split('|')[0].trim(),
        "description": description,
        "url": getFullUrl(canonicalPath),
        "image": image,
        "brand": { "@id": `${URLS.DOMAIN}/#organization` },
        "manufacturer": { "@id": `${URLS.DOMAIN}/#organization` },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "CAD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2026-12-31",
          "url": getFullUrl(canonicalPath),
          "seller": { "@id": `${URLS.DOMAIN}/#organization` },
          "itemCondition": "https://schema.org/NewCondition",
          "shippingDetails": {
            "@type": "OfferShippingDetails",
            "shippingDestination": {
              "@type": "DefinedRegion",
              "addressCountry": "CA"
            },
            "deliveryTime": {
              "@type": "ShippingDeliveryTime",
              "handlingTime": {
                "@type": "QuantitativeValue",
                "minValue": 0,
                "maxValue": 0,
                "unitCode": "DAY"
              }
            }
          }
        },
        ...(rating && reviewCount && {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": rating.toString(),
            "bestRating": "5",
            "worstRating": "1",
            "ratingCount": reviewCount.toString(),
            "reviewCount": reviewCount.toString()
          }
        }),
        "category": "Software Application",
        "additionalType": "https://schema.org/WebApplication",
        "isRelatedTo": {
          "@type": "Product",
          "name": lang === 'fr' ? "Outils PDF gratuits" : "Free PDF Tools"
        }
      });
    }

    // Add page-specific schemas (custom ones passed in)
    if (schema) {
      const pageSchemas = Array.isArray(schema) ? schema : [schema];
      allSchemas.push(...pageSchemas);
    }

    // Inject all schemas
    allSchemas.forEach((schemaItem, index) => {
      const script = document.createElement('script');
      script.setAttribute('data-dynamic-schema', 'true');
      script.id = `dynamic-schema-${index}`;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schemaItem);
      document.head.appendChild(script);
    });

  }, [title, description, canonicalPath, image, lang, schema, ogType, setMeta, noOrganization, faqs, datePublished, dateModified, price, rating, reviewCount, steps, breadcrumbs, quickAnswer, author]);

  return null;
};