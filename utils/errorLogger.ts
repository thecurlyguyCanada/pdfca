import { logger } from '@/utils/logger';

/**
 * Error Logger Utility
 * Handles error reporting and tracking across the application.
 */

interface ErrorMetadata {
    [key: string]: any;
}

export const logError = (error: Error | string, metadata?: ErrorMetadata) => {
    const errorMessage = typeof error === 'string' ? error : error.message;
    const timestamp = new Date().toISOString();

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
        logger.error(`[Error Logger] ${timestamp}:`, error, metadata);
    }

    // Persistent logging for debugging (local storage for anonymous tracking)
    try {
        const errorLog = {
            message: errorMessage,
            timestamp,
            metadata,
            url: typeof window !== 'undefined' ? window.location.href : 'server-side',
            userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server-side',
            stack: error instanceof Error ? error.stack : undefined,
        };

        // Store the last 10 errors locally for session-based debugging
        if (typeof window !== 'undefined') {
            const existingLogs = JSON.parse(localStorage.getItem('pdfca_error_logs') || '[]');
            existingLogs.unshift(errorLog);
            localStorage.setItem('pdfca_error_logs', JSON.stringify(existingLogs.slice(0, 10)));
        }

        // Future: Integrate with a service like Sentry or Vercel Logging
        // Example: Sentry.captureException(error, { extra: metadata });

    } catch (e) {
        // Fail silently to avoid infinite error loops
        logger.error('Failed to log error:', e);
    }
};

/**
 * Hook-like function to report errors from catch blocks
 */
export const reportError = (error: unknown, context: string) => {
    if (error instanceof Error) {
        logError(error, { context });
    } else {
        logError(String(error), { context });
    }
};
