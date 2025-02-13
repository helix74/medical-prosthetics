import { useEffect, useState } from 'react';
import { DEVICE_BREAKPOINTS } from '@/theme';

export function useResponsiveLayout() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine device type based on window width
  const isMobile = windowWidth <= DEVICE_BREAKPOINTS.mobile.max;
  const isTablet = windowWidth >= DEVICE_BREAKPOINTS.tablet.min && windowWidth <= DEVICE_BREAKPOINTS.tablet.max;
  const isDesktop = windowWidth >= DEVICE_BREAKPOINTS.desktop.min;

  // Determine if we should use compact layout
  const shouldUseCompactLayout = windowWidth < DEVICE_BREAKPOINTS.tablet.min;

  // Determine device type string and other properties
  const deviceType = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
  const layoutMode = shouldUseCompactLayout ? 'compact' : 'full';
  const isLandscape = typeof window !== 'undefined' ? window.innerWidth > window.innerHeight : false;

  return {
    windowWidth,
    isMobile,
    isTablet,
    isDesktop,
    shouldUseCompactLayout,
    deviceType,
    layoutMode,
    isLandscape
  };
} 