import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './lib/i18n-config';
import { GUIDE_REDIRECTS, GUIDE_TO_TOOL, HUB_GUIDES, RETIRED_GUIDES, RETIRED_LOCALES, RETIRED_PATHS, RETIRED_TOOLS, TOOL_REDIRECTS } from './lib/retired';

const gone = () => new NextResponse('410 Gone: this page has been retired.\n', { status: 410, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-Robots-Tag': 'noindex' } });

// Optimized middleware for i18n routing
export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // Fast path: Skip all static files early
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.') ||
        pathname === '/favicon.ico'
    ) {
        return;
    }

    // Retired language trees (Portuguese) are gone for good.
    if (RETIRED_LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) return gone();

    // Retired whole pages, in every live language.
    const page = pathname.match(/^\/(\w\w)\/(.+?)\/?$/);
    if (page && RETIRED_PATHS.has(page[2])) return gone();

    // Retired and consolidated guides, in every live language.
    const guide = pathname.match(/^\/(\w\w)\/guides\/([a-z0-9-]+)\/?$/);
    if (guide) {
        const [, lang, slug] = guide;
        if (RETIRED_GUIDES.has(slug)) return gone();
        const folded = GUIDE_TO_TOOL[GUIDE_REDIRECTS[slug] || slug];
        const target = folded ? `/${lang}${folded}` : GUIDE_REDIRECTS[slug] ? `/${lang}/guides/${GUIDE_REDIRECTS[slug]}` : HUB_GUIDES.has(slug) ? `/${lang}/guides` : null;
        if (target) {
            const url = request.nextUrl.clone();
            url.pathname = target;
            return NextResponse.redirect(url, { status: 308 });
        }
    }

    // Retired and consolidated tools, in every live language.
    const tool = pathname.match(/^\/(\w\w)\/([a-z0-9-]+)\/?$/);
    if (tool) {
        const [, lang, slug] = tool;
        if (RETIRED_TOOLS.has(slug)) return gone();
        if (TOOL_REDIRECTS[slug]) {
            const url = request.nextUrl.clone();
            url.pathname = `/${lang}/${TOOL_REDIRECTS[slug]}`;
            return NextResponse.redirect(url, { status: 308 });
        }
    }

    // Check if locale is present
    const pathnameHasLocale = i18n.locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) {
        return;
    }

    // Redirect to default locale
    const url = request.nextUrl.clone();
    url.pathname = `/${i18n.defaultLocale}${pathname}`;

    return NextResponse.redirect(url, { status: 308 }); // Permanent redirect for SEO
}

export const config = {
    matcher: [
        // Match all paths except static files
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2)).*)',
    ],
};
