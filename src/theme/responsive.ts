import { BREAKPOINTS, type Breakpoint } from './breakpoints';

// Image sizes for responsive images
export const IMAGE_SIZES = {
  small: `(max-width: ${BREAKPOINTS.md}px) 100vw, 33vw`,
  medium: `(max-width: ${BREAKPOINTS.md}px) 100vw, 50vw`,
  large: `(max-width: ${BREAKPOINTS.md}px) 100vw, 75vw`,
  full: '100vw',
  threeColumn: `(max-width: ${BREAKPOINTS.md}px) 100vw, (max-width: ${BREAKPOINTS.lg}px) 50vw, 33vw`,
  twoColumn: `(max-width: ${BREAKPOINTS.md}px) 100vw, 50vw`,
  fourColumn: `(max-width: ${BREAKPOINTS.md}px) 100vw, (max-width: ${BREAKPOINTS.lg}px) 50vw, 25vw`,
};

// Layout modes for responsive components
export const LAYOUT_MODES = {
  container: {
    base: `px-4 sm:px-6 md:px-8`,
    withSafeArea: `px-4 sm:px-6 md:px-8 pb-safe pt-safe landscape:py-4`,
  },
  content: {
    base: `mx-auto`,
    compact: `max-w-3xl landscape:max-w-4xl`,
    regular: `max-w-4xl landscape:max-w-5xl`,
    expanded: `max-w-5xl landscape:max-w-7xl`,
  },
  grid: {
    base: `grid gap-6`,
    compact: `grid-cols-1 landscape:grid-cols-2 landscape:md:grid-cols-2`,
    regular: `grid-cols-1 md:grid-cols-2 landscape:lg:grid-cols-3`,
    expanded: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 landscape:lg:grid-cols-4`,
  },
  spacing: {
    base: `space-y-4`,
    compact: `space-y-3 landscape:space-y-2`,
    regular: `space-y-4 landscape:space-y-3`,
    expanded: `space-y-6 landscape:space-y-4`,
  },
};

// Common layout patterns
export const LAYOUT_PATTERNS = {
  grid: {
    twoColumn: `grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8`,
    threeColumn: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8`,
    fourColumn: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8`,
  },
  container: {
    default: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
    narrow: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`,
    wide: `max-w-8xl mx-auto px-4 sm:px-6 lg:px-8`,
  },
  section: {
    sm: `py-8 sm:py-12`,
    md: `py-12 sm:py-16`,
    lg: `py-16 sm:py-20 lg:py-24`,
  },
};

// Helper functions
export function getResponsiveValue<T>(
  values: Record<Breakpoint, T>,
  breakpoint: Breakpoint
): T {
  return values[breakpoint];
}

export function getResponsiveStyle(
  styles: Record<Breakpoint, string>,
  breakpoint: Breakpoint
): string {
  return styles[breakpoint];
}

// Export everything for convenience
export const responsive = {
  IMAGE_SIZES,
  LAYOUT_MODES,
  LAYOUT_PATTERNS,
  getResponsiveValue,
  getResponsiveStyle,
}; 