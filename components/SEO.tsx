import React, { useEffect, useCallback } from 'react';
import { Language } from '../utils/i18n';

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
  "@id": "https://www.pdfcanada.ca/#organization",
  "name": "pdfcanada.ca",
  "url": "https://www.pdfcanada.ca",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.pdfcanada.ca/android-chrome-512x512.png",
    "width": 512,
    "height": 512
  },
  "sameAs": [
    "https://twitter.com/pdfcanada"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Toronto",
    "addressRegion": "Ontario",
    "addressCountry": "CA"
  },
  "foundingDate": "2024",
  "description": "Free, secure, and privacy-focused PDF tools built in Canada. All processing happens locally in your browser."
};

// LocalBusiness schema - Enhanced for local SEO across Canada
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://www.pdfcanada.ca/#localbusiness",
  "name": "PDF Canada - Free PDF Tools",
  "alternateName": "pdfcanada.ca",
  "url": "https://www.pdfcanada.ca",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.pdfcanada.ca/android-chrome-512x512.png",
    "width": 512,
    "height": 512
  },
  "image": "https://www.pdfcanada.ca/og-image.png",
  "description": "Canada's premier free PDF tools service. Privacy-first, browser-based PDF processing for all Canadians. Merge, split, compress, convert, and sign PDFs - all locally in your browser.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "Toronto",
    "addressRegion": "ON",
    "postalCode": "",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "43.6532",
    "longitude": "-79.3832"
  },
  "telephone": "",
  "email": "",
  "priceRange": "FREE",
  "currenciesAccepted": "CAD",
  "paymentAccepted": "Not Applicable - Free Service",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://twitter.com/pdfcanada"
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
      "latitude": "56.1304",
      "longitude": "-106.3468"
    },
    "geoRadius": "5000000"
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
  "foundingDate": "2024",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Toronto",
      "addressRegion": "Ontario",
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
  "@id": "https://www.pdfcanada.ca/#website",
  "name": "pdfcanada.ca",
  "url": "https://www.pdfcanada.ca",
  "description": "Free, secure PDF tools built in Canada. All processing happens locally in your browser.",
  "publisher": {
    "@id": "https://www.pdfcanada.ca/#organization"
  },
  "inLanguage": ["en-CA", "fr-CA"]
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '/',
  image = 'https://www.pdfcanada.ca/og-image.png',
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
    setMeta('property', 'og:url', `https://www.pdfcanada.ca${canonicalPath}`);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:type', 'image/png');
    setMeta('property', 'og:image:alt', title);
    setMeta('property', 'og:locale', lang === 'fr' ? 'fr_CA' : 'en_CA');
    setMeta('property', 'og:site_name', 'pdfcanada.ca');

    // 5. Update Twitter
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:url', `https://www.pdfcanada.ca${canonicalPath}`);
    setMeta('name', 'twitter:image', image);
    setMeta('name', 'twitter:image:alt', `${title} - pdfcanada.ca`);
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
      link.setAttribute('href', `https://www.pdfcanada.ca${finalCanonicalPath}`);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', `https://www.pdfcanada.ca${finalCanonicalPath}`);
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

    updateHreflang('en-CA', `https://www.pdfcanada.ca${enPath}`);
    updateHreflang('fr-CA', `https://www.pdfcanada.ca${frPath}`);
    updateHreflang('x-default', `https://www.pdfcanada.ca${enPath}`);

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
      "url": navUrls.map(url => `https://www.pdfcanada.ca${langPrefix}${url}`)
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
        "screenshot": "https://www.pdfcanada.ca/og-image.png",
        "author": author ? {
          "@type": author.type || "Person",
          "name": author.name,
          "url": author.url ? (author.url.startsWith('http') ? author.url : `https://www.pdfcanada.ca${author.url}`) : undefined
        } : {
          "@id": "https://www.pdfcanada.ca/#organization"
        }
      });
    }

    // WebPage schema with Speakable for voice search (2025/2026 SEO)
    // Enhanced for AI Search (Google SGE, Perplexity, ChatGPT, Claude)
    allSchemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `https://www.pdfcanada.ca${canonicalPath}#webpage`,
      "url": `https://www.pdfcanada.ca${canonicalPath}`,
      "name": title,
      "description": description,
      "isPartOf": { "@id": "https://www.pdfcanada.ca/#website" },
      "inLanguage": lang === 'fr' ? 'fr-CA' : 'en-CA',
      ...(datePublished && { "datePublished": datePublished }),
      ...(dateModified && { "dateModified": dateModified }),
      "author": author ? {
        "@type": author.type || "Person",
        "name": author.name,
        "url": author.url ? (author.url.startsWith('http') ? author.url : `https://www.pdfcanada.ca${author.url}`) : undefined
      } : { "@id": "https://www.pdfcanada.ca/#organization" },
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
          "url": `https://www.pdfcanada.ca${langPrefix}${itemListUrls[i]}`
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
          "url": `https://www.pdfcanada.ca${canonicalPath}#step${index + 1}`,
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
          "item": crumb.path.startsWith('http') ? crumb.path : `https://www.pdfcanada.ca${crumb.path}`
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
            "url": `https://www.pdfcanada.ca${canonicalPath}`,
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
        "url": `https://www.pdfcanada.ca${canonicalPath}`,
        "inLanguage": lang === 'fr' ? 'fr-CA' : 'en-CA',
        "learningResourceType": "how-to guide",
        "educationalLevel": "beginner",
        "isAccessibleForFree": true,
        "timeRequired": "PT5M",
        "teaches": title.split('|')[0].trim(),
        "author": { "@id": "https://www.pdfcanada.ca/#organization" },
        "publisher": { "@id": "https://www.pdfcanada.ca/#organization" },
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
        "url": `https://www.pdfcanada.ca${canonicalPath}`,
        "datePublished": datePublished || "2024-01-01",
        "dateModified": dateModified || new Date().toISOString().split('T')[0],
        "author": { "@id": "https://www.pdfcanada.ca/#organization" },
        "publisher": { "@id": "https://www.pdfcanada.ca/#organization" },
        "inLanguage": lang === 'fr' ? 'fr-CA' : 'en-CA',
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://www.pdfcanada.ca${canonicalPath}`
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
        "url": `https://www.pdfcanada.ca${canonicalPath}`,
        "image": image,
        "brand": { "@id": "https://www.pdfcanada.ca/#organization" },
        "manufacturer": { "@id": "https://www.pdfcanada.ca/#organization" },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "CAD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2026-12-31",
          "url": `https://www.pdfcanada.ca${canonicalPath}`,
          "seller": { "@id": "https://www.pdfcanada.ca/#organization" },
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