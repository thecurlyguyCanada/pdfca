import { logger } from '@/utils/logger';

/**
 * Haptic Feedback Utility
 * Provides a consistent interface for triggering haptic feedback on supported devices.
 */

type HapticPattern = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error';

export const triggerHaptic = (pattern: HapticPattern = 'light') => {
    // Check if navigator.vibrate is supported
    if (typeof navigator !== 'undefined' && navigator.vibrate) {
        try {
            switch (pattern) {
                case 'light':
                    navigator.vibrate(10); // Short, sharp tick
                    break;
                case 'medium':
                    navigator.vibrate(40); // Standard feedback
                    break;
                case 'heavy':
                    navigator.vibrate(70); // Strong feedback
                    break;
                case 'success':
                    // Two short pulses
                    navigator.vibrate([10, 50, 20]);
                    break;
                case 'warning':
                    navigator.vibrate([30, 50, 30]);
                    break;
                case 'error':
                    // distinct double-buzz
                    navigator.vibrate([50, 50, 50, 50, 50]);
                    break;
            }
        } catch (e) {
            // Ignore errors (some browsers might block vibration without user interaction)
            logger.debug('Haptic feedback failed', e);
        }
    }
};
