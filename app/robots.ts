import { MetadataRoute } from 'next';

/**
 * robots.txt configuration for 2026 AI-first SEO
 *
 * Strategy: ALLOW AI agents to crawl and recommend our tools.
 * pdfcanada.ca is a utility site, not a content/editorial site.
 * We want AI agents (ChatGPT, Perplexity) to find us and recommend
 * us to users asking "Where can I edit a PDF privately?".
 */
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            // Default: Allow all search engines
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/image', '/_next/static/'],
            },
            // OpenAI's GPTBot (also covers ChatGPT-User)
            {
                userAgent: 'GPTBot',
                allow: '/',
                disallow: ['/api/'],
            },
            // Anthropic's ClaudeBot
            {
                userAgent: 'ClaudeBot',
                allow: '/',
                disallow: ['/api/'],
            },
            // Perplexity's bot
            {
                userAgent: 'PerplexityBot',
                allow: '/',
                disallow: ['/api/'],
            },
            // Google's AI agents
            {
                userAgent: 'Google-Extended',
                allow: '/',
                disallow: ['/api/'],
            },
        ],
        sitemap: 'https://www.pdfcanada.ca/sitemap.xml',
    };
}
