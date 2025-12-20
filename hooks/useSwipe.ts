import { useEffect, useRef, useState } from 'react';

interface SwipeHandlers {
    onSwipeLeft?: () => void;
    onSwipeRight?: () => void;
    onSwipeUp?: () => void;
    onSwipeDown?: () => void;
}

export const useSwipe = (handlers: SwipeHandlers, threshold = 50) => {
    const touchStart = useRef<{ x: number; y: number } | null>(null);
    const touchEnd = useRef<{ x: number; y: number } | null>(null);

    // Minimum distance to be considered a swipe
    const minSwipeDistance = threshold;

    const onTouchStart = (e: React.TouchEvent) => {
        touchEnd.current = null; // Reset touch end
        touchStart.current = {
            x: e.targetTouches[0].clientX,
            y: e.targetTouches[0].clientY,
        };
    };

    const onTouchMove = (e: React.TouchEvent) => {
        touchEnd.current = {
            x: e.targetTouches[0].clientX,
            y: e.targetTouches[0].clientY,
        };
    };

    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;

        const distanceX = touchStart.current.x - touchEnd.current.x;
        const distanceY = touchStart.current.y - touchEnd.current.y;
        const isHorizontal = Math.abs(distanceX) > Math.abs(distanceY);

        if (isHorizontal) {
            if (Math.abs(distanceX) < minSwipeDistance) return;
            if (distanceX > 0) {
                handlers.onSwipeLeft?.();
            } else {
                handlers.onSwipeRight?.();
            }
        } else {
            if (Math.abs(distanceY) < minSwipeDistance) return;
            if (distanceY > 0) {
                handlers.onSwipeUp?.();
            } else {
                handlers.onSwipeDown?.();
            }
        }
    };

    return {
        onTouchStart,
        onTouchMove,
        onTouchEnd,
    };
};
