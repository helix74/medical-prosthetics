// Breakpoint values in pixels
export const BREAKPOINTS = {
  xs: 320,
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

// Convert pixel values to media query strings
export const MEDIA_QUERIES = {
  xs: `(min-width: ${BREAKPOINTS.xs}px)`,
  sm: `(min-width: ${BREAKPOINTS.sm}px)`,
  md: `(min-width: ${BREAKPOINTS.md}px)`,
  lg: `(min-width: ${BREAKPOINTS.lg}px)`,
  xl: `(min-width: ${BREAKPOINTS.xl}px)`,
  '2xl': `(min-width: ${BREAKPOINTS['2xl']}px)`,
} as const;

// Device type breakpoints
export const DEVICE_BREAKPOINTS = {
  mobile: { max: BREAKPOINTS.sm - 1 },
  tablet: { min: BREAKPOINTS.sm, max: BREAKPOINTS.lg - 1 },
  desktop: { min: BREAKPOINTS.lg },
} as const;

// Helper functions
export function getMediaQuery(breakpoint: Breakpoint, type: 'min' | 'max' = 'min'): string {
  const value = BREAKPOINTS[breakpoint];
  return type === 'min' 
    ? `(min-width: ${value}px)`
    : `(max-width: ${value - 1}px)`;
}

// SCSS mixins equivalent in JS (for styled-components or similar)
export const breakpoint = {
  up: (breakpoint: Breakpoint) => `@media ${getMediaQuery(breakpoint)}`,
  down: (breakpoint: Breakpoint) => `@media ${getMediaQuery(breakpoint, 'max')}`,
  between: (min: Breakpoint, max: Breakpoint) => 
    `@media ${getMediaQuery(min)} and ${getMediaQuery(max, 'max')}`,
}; 