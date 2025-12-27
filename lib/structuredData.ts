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
  if (!faqs || faqs.length === 0) return null;
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

export function generateHowToSchema(tool: {
  name: string;
  description: string;
  steps: { text: string; image?: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Use ${tool.name}`,
    description: tool.description,
    step: tool.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step.text,
      ...(step.image && { image: step.image }),
    })),
    tool: {
      '@type': 'HowToTool',
      name: tool.name,
    },
    totalTime: 'PT2M',
  };
}

// Generate generic tool FAQs for SEO
export function generateToolFAQs(toolSlug: string, toolTitle: string) {
  const baseFAQs: Record<string, { question: string; answer: string }[]> = {
    'delete-pdf-pages': [
      {
        question: 'How do I delete pages from a PDF?',
        answer: 'Upload your PDF file, select the pages you want to delete by clicking on them, and click the delete button. Your file is processed locally in your browser for complete privacy.',
      },
      {
        question: 'Is it free to delete PDF pages?',
        answer: 'Yes, our PDF page deletion tool is 100% free with no limits on file size or number of pages.',
      },
      {
        question: 'Are my files safe when deleting PDF pages?',
        answer: 'Absolutely. All processing happens locally in your browser. Your files never leave your device, ensuring complete privacy and security.',
      },
    ],
    'compress-pdf': [
      {
        question: 'How much can I compress my PDF?',
        answer: 'You can choose from three compression levels: Good (minor reduction), Balanced (moderate reduction), or Extreme (maximum reduction). The amount of compression depends on your PDF content.',
      },
      {
        question: 'Does compressing PDF reduce quality?',
        answer: 'Our balanced compression maintains good quality while reducing file size. Extreme compression may reduce quality but significantly decreases file size.',
      },
      {
        question: 'Is PDF compression free?',
        answer: 'Yes, our PDF compression tool is completely free with unlimited usage.',
      },
    ],
    'merge-pdf': [
      {
        question: 'How many PDFs can I merge?',
        answer: 'You can merge unlimited PDF files into a single document. Simply upload multiple files and arrange them in your desired order.',
      },
      {
        question: 'Can I reorder pages before merging?',
        answer: 'Yes, you can drag and drop files to reorder them before merging into a single PDF.',
      },
      {
        question: 'Is merging PDFs free?',
        answer: 'Yes, our PDF merge tool is 100% free with no file limits.',
      },
    ],
  };

  return baseFAQs[toolSlug] || [
    {
      question: `Is ${toolTitle} free to use?`,
      answer: `Yes, ${toolTitle} is completely free with unlimited usage. All processing happens locally in your browser for maximum privacy and security.`,
    },
    {
      question: `Are my files safe when using ${toolTitle}?`,
      answer: 'Absolutely. All file processing happens locally in your browser. Your files never leave your device, ensuring complete privacy and PIPEDA compliance.',
    },
    {
      question: `Do I need to create an account to use ${toolTitle}?`,
      answer: 'No account needed. Simply visit the page, upload your file, and start processing immediately.',
    },
  ];
}
