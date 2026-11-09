/**
 * The person behind the site. Shown in the byline and "About the author" block on tool pages and
 * emitted as the Person in the page's structured data. Keep it factual: name, role, where, how to
 * verify. No invented credentials.
 */
export const AUTHOR = {
    name: 'Shaheer Ali Khan',
    initials: 'SK',
    url: 'https://www.pdfcanada.ca/en/about',
    linkedin: 'https://www.linkedin.com/in/shaheer-ali-khan-data/',
    role: {
        en: 'Founder, pdfcanada.ca',
        fr: 'Fondateur, pdfcanada.ca',
        pt: 'Fundador, pdfcanada.ca',
    },
    bio: {
        en: 'Builds and maintains the tools on this site from Toronto. Every guide is written against the live tool and re-checked when the tool changes.',
        fr: 'Conçoit et maintient les outils de ce site depuis Toronto. Chaque guide est rédigé à partir de l\'outil en ligne et revérifié quand l\'outil change.',
        pt: 'Cria e mantém as ferramentas deste site em Toronto. Cada guia é escrito com base na ferramenta real e revisto quando ela muda.',
    },
} as const;

export const authorLd = () => ({
    '@type': 'Person',
    '@id': 'https://www.pdfcanada.ca/#author',
    name: AUTHOR.name,
    url: AUTHOR.url,
    jobTitle: AUTHOR.role.en,
    sameAs: [AUTHOR.linkedin],
    worksFor: { '@type': 'Organization', name: 'pdfcanada.ca', url: 'https://www.pdfcanada.ca' },
});
