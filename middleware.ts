import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from './lib/i18n-config';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if the pathname is missing a locale
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        // Get the preferred locale from the Accept-Language header
        const locale = getLocale(request) || i18n.defaultLocale;

        // Redirect to the locale-prefixed path
        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
        );
    }
}

function getLocale(request: NextRequest): string | undefined {
    // Try to get locale from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language');

    if (!acceptLanguage) {
        return i18n.defaultLocale;
    }

    // Parse the Accept-Language header
    const languages = acceptLanguage
        .split(',')
        .map((lang) => {
            const [locale, q = 'q=1'] = lang.trim().split(';');
            const quality = parseFloat(q.replace('q=', ''));
            return { locale: locale.toLowerCase().split('-')[0], quality };
        })
        .sort((a, b) => b.quality - a.quality);

    // Find the first matching locale
    for (const { locale } of languages) {
        if (i18n.locales.includes(locale as any)) {
            return locale;
        }
    }

    return i18n.defaultLocale;
}

export const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
