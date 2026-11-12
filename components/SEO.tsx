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
  featureList?: string[];
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
  video,
  featureList
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${URLS.DOMAIN}/#website`,
    "name": ORGANIZATION.name,
    "url": URLS.DOMAIN,
    "description": t.seo.homeDesc,
    "publisher": { "@id": `${URLS.DOMAIN}/#organization` },
    "inLanguage": ["en-CA", "fr-CA"]
  };

  // 1. Add Core Schemas
  if (!noOrganization) {
    // Enhanced Organization Schema for Entity Knowledge
    const enhancedOrgSchema = {
      ...organizationSchema,
      "knowsAbout": ["PDF processing", "Document Security", "Optical Character Recognition", "Data Privacy"],
      "areaServed": {
        "@type": "Country",
        "name": "Canada"
      }
    };
    allSchemas.push(enhancedOrgSchema);
    allSchemas.push(websiteSchema);
  }

  // 3. Page Specific Schemas - WebApplication for tool pages
  // 2026 Update: Enhanced schema for AI agent discoverability
  const pagePath = canonicalPath.replace(/^\/(en|fr|pt)(?=\/|$)/, '') || '/';
  if (pagePath !== '/' && !/^\/(about|guides|privacy|terms|contact|security|accessibility)(\/|$)/.test(pagePath)) {
    const webAppSchema: Record<string, any> = {
      "@context": "https://schema.org",
      "@type": ["WebApplication", "SoftwareApplication"],
      "@id": `${getFullUrl(canonicalPath)}#application`,
      "name": schemaName,
      "url": getFullUrl(canonicalPath),
      "operatingSystem": "Web, Windows, macOS, Linux, Android, iOS",
      "applicationCategory": "UtilitiesApplication",
      "applicationSubCategory": "PDF Tools",
      "browserRequirements": "Requires JavaScript. Works in Chrome, Firefox, Safari, Edge.",
      "permissions": "Local file access only - no server uploads",
      // 2026: Expanded featureList for AI agents to understand capabilities
      "featureList": featureList || [
        "Local PDF processing",
        "No server uploads",
        "Privacy-first",
        "No account required",
        "No fixed file size limit (bounded by device memory)",
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
        "url": getFullUrl(canonicalPath)
      },
      "author": author ? { "@type": author.type || "Person", "name": author.name, ...(author.url ? { "url": author.url } : {}) } : { "@id": `${URLS.DOMAIN}/#organization` },
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
  // Google no longer shows HowTo rich results, but Bing and the AI assistants still read the steps, so
  // a HowTo is emitted when a page supplies real steps (the tool articles do).
  if (steps && steps.length > 0) {
    allSchemas.push({
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": schemaName,
      "description": description,
      "totalTime": "PT1M",
      "estimatedCost": { "@type": "MonetaryAmount", "currency": "CAD", "value": "0" },
      "tool": [{ "@type": "HowToTool", "name": "A web browser" }],
      "step": steps.map((st, i) => ({
        "@type": "HowToStep",
        "position": i + 1,
        "name": st.name,
        "text": st.text,
        "url": `${getFullUrl(canonicalPath)}#step-${i + 1}`,
        ...(st.image ? { "image": st.image.startsWith('http') ? st.image : getAssetUrl(st.image) } : {})
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

  // One JSON-LD graph per page (playbook): Organization, WebSite, WebApplication, WebPage, FAQPage, HowTo,
  // BreadcrumbList and any page-specific nodes, cross-referenced by @id.
  const graph = allSchemas.map((node) => { const copy = { ...node }; delete copy["@context"]; return copy; });
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}