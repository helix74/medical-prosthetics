import { theme } from './styles';
import { responsive } from './responsive';
import { BREAKPOINTS, MEDIA_QUERIES, DEVICE_BREAKPOINTS, getMediaQuery, breakpoint } from './breakpoints';

// Export theme configuration
export * from './styles';
export * from './breakpoints';
export * from './responsive';
export type { Theme, ThemeValue } from './types';

// Re-export individual theme parts for convenience
export const {
  colors,
  typography,
  spacing,
  borderRadius,
  shadows,
  effects,
  grid,
  container,
  components,
  gradients
} = theme;

// Export responsive utilities
export const {
  IMAGE_SIZES,
  LAYOUT_MODES,
  LAYOUT_PATTERNS,
  getResponsiveValue,
  getResponsiveStyle
} = responsive;

// Export breakpoint utilities
export {
  BREAKPOINTS,
  MEDIA_QUERIES,
  DEVICE_BREAKPOINTS,
  getMediaQuery,
  breakpoint
};

// Common background patterns
export const patterns = {
  heroBackground: `
    relative bg-gradient-to-b from-[#187baa]/5 to-white min-h-[40vh] flex items-center
    before:absolute before:inset-0 before:bg-[${gradients.pattern.light}] before:bg-[length:20px_20px] before:opacity-40
  `,
  sectionBackground: `
    relative bg-[#187baa]
    before:absolute before:inset-0 before:bg-[${gradients.pattern.dark}] before:bg-[length:20px_20px] before:opacity-10
  `
} as const;