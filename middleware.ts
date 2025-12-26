import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './lib/i18n-config';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Skip static files and internal requests
    if (
        [
            '/favicon.svg',
            '/apple-touch-icon.png',
            '/og-image.png',
            '/site.webmanifest',
            '/robots.txt',
            '/sitemap.xml',
            '/favicon.ico',
            '/android-chrome-192x192.png',
            '/android-chrome-512x512.png',
        ].includes(pathname) ||
        pathname.includes('.')
    ) {
        return;
    }

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = i18n.defaultLocale;

        // e.g. incoming is /products
        // The new URL is now /en/products
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
                request.url
            )
        );
    }
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
