import { useEffect, useRef, useState, useCallback } from 'react';

interface UseLazyLoadOptions {
  threshold?: number;
  rootMargin?: string;
  enabled?: boolean;
}

export function useLazyLoad({
  threshold = 0.1,
  rootMargin = '50px',
  enabled = true
}: UseLazyLoadOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    const isIntersecting = entry.isIntersecting;

    setIsVisible(isIntersecting);
    if (isIntersecting && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [hasBeenVisible]);

  useEffect(() => {
    if (!enabled) {
      setIsVisible(true);
      setHasBeenVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element || !window.IntersectionObserver) {
      setIsVisible(true);
      setHasBeenVisible(true);
      return;
    }

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [enabled, threshold, rootMargin, handleIntersection]);

  return {
    ref: elementRef,
    isVisible,
    hasBeenVisible
  };
} 