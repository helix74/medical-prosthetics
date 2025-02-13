import { useState, useEffect } from 'react';

type Orientation = 'portrait' | 'landscape';

export function useOrientation() {
  const [orientation, setOrientation] = useState<Orientation>('portrait');

  useEffect(() => {
    const updateOrientation = () => {
      if (window.matchMedia("(orientation: landscape)").matches) {
        setOrientation('landscape');
      } else {
        setOrientation('portrait');
      }
    };

    // Initial check
    updateOrientation();

    // Listen for orientation changes
    const mediaQuery = window.matchMedia("(orientation: landscape)");
    mediaQuery.addListener(updateOrientation);

    return () => {
      mediaQuery.removeListener(updateOrientation);
    };
  }, []);

  return orientation;
} 