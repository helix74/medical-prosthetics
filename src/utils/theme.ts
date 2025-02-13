import { twMerge } from 'tailwind-merge';

// Theme type definition
type ThemeType = {
  readonly breakpoints: typeof BREAKPOINTS;
  readonly transitions: typeof TRANSITIONS;
  readonly shadows: typeof SHADOWS;
  readonly borderRadius: typeof BORDER_RADIUS;
  readonly utils: typeof themeUtils;
};

// Breakpoint definitions
export const BREAKPOINTS = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;

// Common transition presets
export const TRANSITIONS = {
  fast: 'all 0.2s ease',
  base: 'all 0.3s ease',
  slow: 'all 0.4s ease',
  slower: 'all 0.6s ease'
} as const;

// Shadow presets
export const SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)'
} as const;

// Border radius presets
export const BORDER_RADIUS = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '1.5rem',
  '2xl': '2rem',
  full: '9999px'
} as const;

// Common theme utilities
export const themeUtils = {
  // Button utilities
  button: {
    base: 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200',
    primary: 'bg-[#187baa] text-white hover:bg-[#156a93]',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700',
    outline: 'border border-[#187baa] text-[#187baa] hover:bg-[#187baa]/5',
    ghost: 'text-[#187baa] hover:bg-[#187baa]/5'
  },

  // Layout utilities
  layout: {
    container: {
      default: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      narrow: 'max-w-5xl mx-auto px-4 sm:px-6 lg:px-8',
      wide: 'max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'
    },
    section: {
      sm: 'py-8 sm:py-12',
      base: 'py-12 sm:py-16',
      lg: 'py-16 sm:py-24'
    }
  },

  // Grid utilities
  grid: {
    base: 'grid gap-6 md:gap-8',
    cols: {
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
    }
  },

  // Flex utilities
  flex: {
    center: 'flex items-center justify-center',
    between: 'flex items-center justify-between',
    start: 'flex items-start',
    end: 'flex items-end'
  },

  // Effect utilities
  effects: {
    transition: {
      base: 'transition-all duration-300 ease-in-out',
      fast: 'transition-all duration-150 ease-in-out',
      slow: 'transition-all duration-500 ease-in-out'
    },
    shadow: {
      sm: 'shadow-sm',
      base: 'shadow',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl'
    },
    hover: {
      lift: 'hover:-translate-y-1',
      scale: 'hover:scale-105',
      glow: 'hover:shadow-lg hover:shadow-[#187baa]/20'
    }
  },

  // Input utilities
  input: {
    base: 'w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#187baa]',
    error: 'border-error-500 focus:ring-error-500',
    success: 'border-success-500 focus:ring-success-500'
  },

  // Badge utilities
  badge: {
    base: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
    primary: 'bg-[#187baa]/10 text-[#187baa]',
    secondary: 'bg-secondary-50 text-secondary-700',
    neutral: 'bg-neutral-50 text-neutral-700',
    success: 'bg-success-50 text-success-700'
  }
} as const;

// Export everything
export const theme = {
  breakpoints: BREAKPOINTS,
  transitions: TRANSITIONS,
  shadows: SHADOWS,
  borderRadius: BORDER_RADIUS,
  utils: themeUtils
} as const;

// Helper function to get nested theme values
export function getThemeValue(path: keyof ThemeType, ...subPaths: string[]): string {
  let value: any = theme[path];
  for (const subPath of subPaths) {
    if (!value?.[subPath]) {
      console.warn(`Theme value not found: ${path}.${subPaths.join('.')}`);
      return '';
    }
    value = value[subPath];
  }
  return value as string;
} 