/**
 * Performance Utilities for 2026 Core Web Vitals
 *
 * Optimizations to reduce forced reflows and improve INP/FCP/LCP
 */

/**
 * Request Animation Frame wrapper for batching DOM measurements
 * Prevents forced reflows by deferring reads until browser is ready to paint
 */
export const batchDOMRead = (callback: () => void): number => {
  return requestAnimationFrame(() => {
    callback();
  });
};

/**
 * Request Animation Frame wrapper for batching DOM writes
 * Separates reads and writes to prevent layout thrashing
 */
export const batchDOMWrite = (callback: () => void): number => {
  return requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      callback();
    });
  });
};

/**
 * Debounce function for expensive operations
 * Reduces unnecessary calculations during scroll/resize
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

/**
 * Throttle function for high-frequency events
 * Limits execution rate to improve performance
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;

  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Idle callback wrapper for non-critical work
 * Defers work until browser is idle to improve responsiveness
 */
export const runWhenIdle = (callback: () => void, timeout = 2000): number => {
  if ('requestIdleCallback' in window) {
    return requestIdleCallback(callback, { timeout });
  }
  // Fallback for browsers without requestIdleCallback
  return setTimeout(callback, 1) as unknown as number;
};
