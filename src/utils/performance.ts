import { useEffect } from 'react';

export const measurePagePerformance = () => {
  if (typeof window !== 'undefined') {
    const navigation = window.performance?.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = window.performance?.getEntriesByType('paint');
    
    const metrics = {
      // Temps de chargement total
      loadTime: navigation?.loadEventEnd - navigation?.startTime,
      // Premier rendu
      firstPaint: paint?.find(entry => entry.name === 'first-paint')?.startTime,
      // Premier rendu avec contenu
      firstContentfulPaint: paint?.find(entry => entry.name === 'first-contentful-paint')?.startTime,
      // Temps DNS
      dnsTime: navigation?.domainLookupEnd - navigation?.domainLookupStart,
      // Temps de connexion TCP
      tcpTime: navigation?.connectEnd - navigation?.connectStart,
      // Temps jusqu'au premier octet
      ttfb: navigation?.responseStart - navigation?.requestStart,
      // Temps de traitement DOM
      domProcessingTime: navigation?.domComplete - navigation?.domInteractive,
      // Temps jusqu'à l'interactivité
      timeToInteractive: navigation?.domInteractive - navigation?.startTime,
      // Temps de chargement des ressources
      resourceLoadTime: navigation?.loadEventEnd - navigation?.responseEnd,
    };

    // Afficher les métriques dans la console
    console.table(metrics);

    // Enregistrer les métriques Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFID, onLCP }) => {
        onCLS(console.log);
        onFID(console.log);
        onLCP(console.log);
      });
    }

    return metrics;
  }
  return null;
};

export const usePerformanceMonitoring = () => {
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    // Attendre que la page soit complètement chargée
    const handleLoad = () => {
      setTimeout(() => {
        measurePagePerformance();
      }, 0);
    };

    window.addEventListener('load', handleLoad);
    
    // Observer les changements de performance
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log(`[Performance] ${entry.name}: ${entry.startTime}ms`);
        }
      });

      observer.observe({ entryTypes: ['resource', 'paint', 'largest-contentful-paint'] });
      cleanup = () => observer.disconnect();
    }

    return () => {
      window.removeEventListener('load', handleLoad);
      cleanup?.();
    };
  }, []);
};

// Fonction pour mesurer le temps d'exécution d'une fonction
export const measureExecutionTime = <T extends (...args: any[]) => any>(
  fn: T,
  name: string
): T => {
  return ((...args: Parameters<T>) => {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    console.log(`${name} took ${end - start}ms to execute`);
    return result;
  }) as T;
}; 