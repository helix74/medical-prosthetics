import type { Theme } from './types';
import { twMerge } from 'tailwind-merge';

// Spacing System
export const SPACING = {
  container: {
    base: 'max-w-7xl mx-auto',
    padding: {
      default: 'px-4 sm:px-6 lg:px-8',
      safe: 'px-safe-4 sm:px-safe-6 lg:px-safe-8',
    },
    maxWidth: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
    },
  },
  section: {
    sm: 'py-8',
    base: 'py-12',
    lg: 'py-16 sm:py-20',
  },
  gap: {
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
  },
} as const;

// Typography System
export const TYPOGRAPHY_STYLES = {
  utils: {
    getHeading: (level: 1 | 2 | 3 | 4 | 5 | 6, variant: 'primary' | 'secondary' | 'neutral' = 'neutral') =>
      twMerge(TYPOGRAPHY_STYLES.base.heading[`h${level}`], TYPOGRAPHY_STYLES.variants[variant].heading),
    getBody: (size: 'sm' | 'base' | 'lg', variant: 'primary' | 'secondary' | 'neutral' = 'neutral') =>
      twMerge(TYPOGRAPHY_STYLES.base.body[size], TYPOGRAPHY_STYLES.variants[variant].body, 'text-justify'),
    getDisplay: (size: 'sm' | 'base' | 'lg', variant: 'primary' | 'secondary' | 'neutral' = 'neutral') =>
      twMerge(TYPOGRAPHY_STYLES.base.display[size], TYPOGRAPHY_STYLES.variants[variant].heading),
    getProse: (size: 'sm' | 'base' | 'lg' = 'base') =>
      twMerge(TYPOGRAPHY_STYLES.base.prose[size], 'prose-primary'),
    getLabel: (size: 'sm' | 'base' | 'lg' = 'base', variant: 'primary' | 'secondary' | 'neutral' = 'neutral') =>
      twMerge(TYPOGRAPHY_STYLES.base.label[size], TYPOGRAPHY_STYLES.variants[variant].body)
  },
  base: {
    heading: {
      h1: 'text-4xl font-bold sm:text-5xl lg:text-6xl tracking-tight leading-[1.1]',
      h2: 'text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight leading-[1.1]',
      h3: 'text-2xl font-bold sm:text-3xl lg:text-4xl leading-tight',
      h4: 'text-xl font-bold sm:text-2xl lg:text-3xl leading-tight',
      h5: 'text-lg font-bold sm:text-xl lg:text-2xl leading-snug',
      h6: 'text-base font-bold sm:text-lg lg:text-xl leading-snug'
    },
    body: {
      sm: 'text-sm leading-relaxed text-justify',
      base: 'text-base leading-relaxed text-justify',
      lg: 'text-lg leading-relaxed text-justify'
    },
    display: {
      sm: 'text-5xl font-bold sm:text-6xl lg:text-7xl tracking-tight leading-[1.1]',
      base: 'text-6xl font-bold sm:text-7xl lg:text-8xl tracking-tight leading-[1.1]',
      lg: 'text-7xl font-bold sm:text-8xl lg:text-9xl tracking-tight leading-[1.1]'
    },
    prose: {
      sm: 'prose prose-sm max-w-none',
      base: 'prose prose-base max-w-none',
      lg: 'prose prose-lg max-w-none'
    },
    label: {
      sm: 'text-xs font-medium leading-none',
      base: 'text-sm font-medium leading-none',
      lg: 'text-base font-medium leading-none'
    }
  },
  variants: {
    primary: {
      heading: 'text-[#187baa]',
      body: 'text-[#187baa]/80'
    },
    secondary: {
      heading: 'text-secondary-900',
      body: 'text-secondary-700'
    },
    neutral: {
      heading: 'text-neutral-900',
      body: 'text-neutral-600'
    }
  },
  states: {
    muted: 'text-neutral-500',
    error: 'text-error-600',
    success: 'text-success-600',
    warning: 'text-warning-600',
    disabled: 'text-neutral-400'
  },
  alignment: {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify'
  },
  weights: {
    thin: 'font-thin',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold'
  },
  transforms: {
    uppercase: 'uppercase',
    lowercase: 'lowercase',
    capitalize: 'capitalize',
    normalCase: 'normal-case'
  },
  decoration: {
    underline: 'underline',
    lineThrough: 'line-through',
    noUnderline: 'no-underline'
  },
  prose: {
    sm: {
      p: 'text-sm leading-6 text-justify',
      list: 'text-sm leading-6 space-y-4',
      blockquote: 'text-sm italic border-l-4 pl-4'
    },
    base: {
      p: 'text-base leading-7 text-justify',
      list: 'text-base leading-7 space-y-6',
      blockquote: 'text-base italic border-l-4 pl-6'
    },
    lg: {
      p: 'text-lg leading-8 text-justify',
      list: 'text-lg leading-8 space-y-8',
      blockquote: 'text-lg italic border-l-4 pl-8'
    }
  }
} as const;

// Colors System
export const COLORS = {
  primary: {
    50: '#f0f9ff',
    100: '#e0f4fc',
    200: '#b9e5f7',
    300: '#7ccdf0',
    400: '#39b1e6',
    500: '#187baa',
    600: '#156a93',
    700: '#12587c',
    800: '#0e4665',
    900: '#0b344e',
  },
  secondary: {
    50: '#f5f8ef',
    100: '#e7efd8',
    200: '#cfdeb1',
    300: '#b7cd8a',
    400: '#9db952',
    500: '#7e9442',
    600: '#5f7031',
    700: '#3f4b21',
    800: '#202610',
    900: '#101308',
  },
  neutral: {
    50: '#f8fafc',
    100: '#eef4f8',
    200: '#e2eaf1',
    300: '#c2d0dc',
    400: '#94a7b8',
    500: '#657d93',
    600: '#4a5f71',
    700: '#364553',
    800: '#1e2831',
    900: '#0f1419',
  },
  // Semantic Colors
  success: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B'
  },
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F'
  },
  error: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D'
  },
  info: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A'
  },
  // Text Colors
  text: {
    primary: '#187baa',    // Main text color for titles
    secondary: '#475569',  // Secondary text color
    body: '#64748B',      // Body text color
    muted: '#94A3B8',     // Muted text color
    inverted: '#FFFFFF'   // Text color on dark backgrounds
  },
  // State Colors
  state: {
    hover: {
      primary: '#156a93',
      secondary: '#52606D',
      success: '#059669',
      warning: '#D97706',
      error: '#DC2626',
      info: '#2563EB'
    },
    active: {
      primary: '#12587c',
      secondary: '#3E4C59',
      success: '#047857',
      warning: '#B45309',
      error: '#B91C1C',
      info: '#1D4ED8'
    },
    disabled: {
      background: '#E2E8F0',
      text: '#94A3B8'
    },
    focus: {
      ring: '#187baa',
      outline: '#187baa'
    }
  }
} as const;

// Gradients System
export const GRADIENTS = {
  primary: {
    base: 'bg-gradient-to-r from-[#187baa] to-[#156a93]',
    hover: 'hover:from-[#156a93] hover:to-[#187baa]',
  },
  secondary: {
    base: 'bg-gradient-to-r from-secondary-600 to-secondary-500',
    hover: 'hover:from-secondary-700 hover:to-secondary-600',
  },
  pattern: {
    light: 'linear-gradient(30deg,#f3f4f6 1px,transparent 1px)',
    dark: 'linear-gradient(30deg,#1f2937 1px,transparent 1px)',
  },
  state: {
    hover: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))',
    active: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))'
  },
  gradient: 'bg-gradient-to-b from-[#187baa]/5 to-white',
} as const;

// Component Base Styles
export const COMPONENTS = {
  button: {
    base: 'inline-flex items-center justify-center font-medium transition-colors duration-200',
    variants: {
      primary: 'bg-[#187baa] text-white hover:bg-[#156a93]',
      secondary: 'bg-secondary-600 text-white hover:bg-secondary-700',
      outline: 'border border-[#187baa] text-[#187baa] hover:bg-[#187baa]/10',
      ghost: 'text-[#187baa] hover:bg-[#187baa]/10',
    },
    sizes: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    },
  },
  badge: {
    base: 'inline-flex items-center justify-center font-medium rounded-full',
    variants: {
      primary: 'bg-[#187baa]/10 text-[#187baa] border border-[#187baa]/20',
      secondary: 'bg-secondary-50 text-secondary-600 border border-secondary-100',
      neutral: 'bg-neutral-50 text-neutral-600 border border-neutral-100',
      success: 'bg-green-50 text-green-600 border border-green-100',
    },
    sizes: {
      sm: 'px-2 py-1 text-xs',
      md: 'px-3 py-1 text-sm',
    },
  },
  card: {
    base: 'bg-white rounded-lg overflow-hidden',
    padding: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
    variants: {
      elevated: 'shadow-lg hover:shadow-xl transition-shadow duration-200',
      outlined: 'border border-neutral-200 hover:border-neutral-300',
    },
  },
  input: {
    base: 'w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#187baa]/20',
    sizes: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-4 py-3 text-lg',
    },
    states: {
      default: 'focus:border-[#187baa] focus:ring-2 focus:ring-[#187baa]/20',
      error: 'border-error-500 focus:border-error-500 focus:ring-2 focus:ring-error-500/20',
      success: 'border-success-500 focus:border-success-500 focus:ring-2 focus:ring-success-500/20',
    },
    icon: 'absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400'
  },
  select: {
    select: 'flex-1 px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#187baa]/20',
    clear: 'px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors'
  }
} as const;

// Effects System
export const EFFECTS_STYLES = {
  utils: {
    getShadow: (size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none' = 'md') =>
      EFFECTS_STYLES.base.shadow[size],
    getBlur: (size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none' = 'md') =>
      EFFECTS_STYLES.base.blur[size],
    getTransition: (speed: 'fast' | 'base' | 'slow' | 'slower' = 'base') =>
      EFFECTS_STYLES.base.transition[speed],
    getAnimation: (type: 'spin' | 'ping' | 'pulse' | 'bounce' = 'pulse') =>
      EFFECTS_STYLES.base.animation[type]
  },
  base: {
    shadow: {
      sm: 'shadow-sm',
      md: 'shadow',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl',
      inner: 'shadow-inner',
      none: 'shadow-none'
    },
    blur: {
      sm: 'blur-sm',
      md: 'blur',
      lg: 'blur-lg',
      xl: 'blur-xl',
      '2xl': 'blur-2xl',
      '3xl': 'blur-3xl',
      none: 'blur-none'
    },
    transition: {
      fast: 'transition-all duration-150',
      base: 'transition-all duration-200',
      slow: 'transition-all duration-300',
      slower: 'transition-all duration-500'
    },
    animation: {
      spin: 'animate-spin',
      ping: 'animate-ping',
      pulse: 'animate-pulse',
      bounce: 'animate-bounce'
    }
  },
  hover: {
    transform: {
      scale: 'hover:scale-105',
      lift: 'hover:-translate-y-1',
      push: 'hover:translate-y-0.5',
      grow: 'hover:scale-110'
    },
    shadow: {
      sm: 'hover:shadow-md',
      md: 'hover:shadow-lg',
      lg: 'hover:shadow-xl',
      glow: 'hover:shadow-lg hover:shadow-[#187baa]/20'
    },
    opacity: {
      fade: 'hover:opacity-75',
      show: 'opacity-0 hover:opacity-100',
      highlight: 'hover:opacity-90'
    }
  },
  focus: {
    ring: {
      sm: 'focus:ring-1',
      md: 'focus:ring-2',
      lg: 'focus:ring-4',
      offset: 'focus:ring-2 focus:ring-offset-2'
    },
    outline: {
      none: 'focus:outline-none',
      default: 'focus:outline focus:outline-2 focus:outline-offset-2',
      colored: 'focus:outline-none focus:ring-2 focus:ring-[#187baa]/20'
    }
  },
  motion: {
    fade: {
      in: 'animate-fadeIn',
      out: 'animate-fadeOut',
      up: 'animate-fadeInUp',
      down: 'animate-fadeInDown'
    },
    slide: {
      in: 'animate-slideIn',
      out: 'animate-slideOut',
      up: 'animate-slideInUp',
      down: 'animate-slideInDown'
    },
    scale: {
      in: 'animate-scaleIn',
      out: 'animate-scaleOut'
    }
  }
} as const;

// Grid System
export const GRID_STYLES = {
  base: {
    wrapper: 'grid',
    gap: {
      sm: 'gap-4',
      md: 'gap-6',
      lg: 'gap-8',
      xl: 'gap-12'
    },
    cols: {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      6: 'grid-cols-6',
      12: 'grid-cols-12'
    }
  },
  fixed: {
    twoColumn: 'grid-cols-2',
    threeColumn: 'grid-cols-3',
    fourColumn: 'grid-cols-4'
  },
  auto: {
    fit: 'grid-auto-flow-col auto-cols-auto',
    fill: 'grid-auto-flow-col auto-cols-fr'
  },
  responsive: {
    twoColumn: 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8',
    threeColumn: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
    fourColumn: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'
  },
  utils: {
    getResponsive: (columns: 2 | 3 | 4) => GRID_STYLES.responsive[`${columns}Column` as keyof typeof GRID_STYLES.responsive],
    getFixed: (type: 'twoColumn' | 'threeColumn' | 'fourColumn') => GRID_STYLES.fixed[type],
    getAuto: (type: 'fit' | 'fill') => GRID_STYLES.auto[type]
  }
} as const;

// Container System
export const CONTAINER_STYLES = {
  utils: {
    getContainer: (maxWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' = 'xl') =>
      twMerge(CONTAINER_STYLES.base.wrapper, CONTAINER_STYLES.base.padding.lg, CONTAINER_STYLES.base.maxWidth[maxWidth])
  },
  base: {
    wrapper: 'mx-auto w-full',
    padding: {
      sm: 'px-4',
      md: 'px-4 sm:px-6',
      lg: 'px-4 sm:px-6 lg:px-8'
    },
    maxWidth: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full'
    }
  },
  variants: {
    default: twMerge(
      'mx-auto w-full',
      'max-w-7xl',
      'px-4 sm:px-6 lg:px-8'
    ),
    narrow: twMerge(
      'mx-auto w-full',
      'max-w-5xl',
      'px-4 sm:px-6 lg:px-8'
    ),
    wide: twMerge(
      'mx-auto w-full',
      'max-w-8xl',
      'px-4 sm:px-6 lg:px-8'
    )
  }
} as const;

// Border Radius System
export const BORDER_RADIUS = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  base: 'rounded',
  md: 'rounded',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',
} as const;

type SectionSpacing = 'default' | 'compact' | 'spacious';
type SectionVariant = 'light' | 'blue' | 'dark' | 'gradient' | 'transparent';

// Section System
export const SECTION_STYLES = {
  base: {
    container: 'relative w-full',
    inner: 'relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  },
  spacing: {
    default: 'py-12 sm:py-16 lg:py-20',
    compact: 'py-8 sm:py-12',
    spacious: 'py-16 sm:py-20 lg:py-24',
  },
  variants: {
    light: 'bg-white',
    blue: twMerge(
      'bg-primary-600',
      'relative overflow-hidden',
      'before:absolute before:inset-0 before:bg-[linear-gradient(30deg,#ffffff10_1px,transparent_1px)] before:bg-[length:20px_20px] before:opacity-10'
    ),
    dark: twMerge(
      'bg-neutral-900',
      'relative overflow-hidden',
      'before:absolute before:inset-0 before:bg-[linear-gradient(30deg,#ffffff10_1px,transparent_1px)] before:bg-[length:20px_20px] before:opacity-10'
    ),
    gradient: 'bg-gradient-to-b from-neutral-50 to-white',
    transparent: 'bg-transparent',
  },
  utils: {
    container: (spacing: SectionSpacing = 'default') => twMerge(
      SECTION_STYLES.base.container,
      SECTION_STYLES.base.inner,
      SECTION_STYLES.spacing[spacing]
    ),
    variant: (variant: SectionVariant = 'light') => SECTION_STYLES.variants[variant]
  }
} as const;

// Component Styles
const componentStyles = {
  product: {
    card: {
      base: twMerge(
        'bg-white rounded-2xl shadow-lg',
        'border border-neutral-100'
      ),
      image: {
        wrapper: 'relative aspect-[4/3] overflow-hidden rounded-t-2xl bg-neutral-100',
        base: 'object-cover rounded-t-2xl'
      },
      content: 'p-6',
      title: 'text-xl font-bold text-neutral-900 mb-2 line-clamp-2',
      description: 'text-neutral-600 text-sm mb-4 line-clamp-3',
      supplier: {
        logo: 'relative w-6 h-6 bg-neutral-100 rounded-sm overflow-hidden',
        name: 'text-sm text-neutral-600'
      },
      specs: {
        wrapper: 'space-y-2 mt-4 text-sm border-t border-neutral-200 pt-4',
        label: 'text-neutral-500',
        value: 'text-neutral-700 font-medium'
      }
    },
    list: {
      wrapper: 'w-full space-y-8',
      grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
      empty: {
        wrapper: 'flex flex-col items-center justify-center py-12',
        icon: 'bg-neutral-50 rounded-full p-4 mb-4',
        title: 'text-xl font-semibold text-neutral-900 mb-2',
        message: 'text-neutral-600 text-center max-w-md'
      },
      loadMore: twMerge(
        'px-6 py-2 text-sm font-medium rounded-lg',
        'bg-white text-neutral-700',
        'border border-neutral-200',
        'hover:bg-neutral-50',
        'focus:outline-none focus:ring-2 focus:ring-primary-500/20'
      )
    },
    filters: {
      wrapper: 'w-full space-y-4',
      group: {
        wrapper: 'space-y-2',
        title: 'text-sm font-medium text-neutral-700',
        content: 'space-y-1'
      },
      search: {
        wrapper: 'relative',
        input: 'w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#187baa]/20',
        icon: 'absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400'
      },
      actions: {
        wrapper: 'flex flex-wrap gap-4',
        select: 'flex-1 px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#187baa]/20',
        clear: 'px-4 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors'
      }
    }
  }
};

// Container Query System
export const CONTAINER_QUERIES = {
  base: {
    wrapper: '@container',
    sizes: {
      sm: '@container (min-width: 480px)',
      md: '@container (min-width: 768px)',
      lg: '@container (min-width: 1024px)',
      xl: '@container (min-width: 1280px)'
    }
  },
  utils: {
    getContainerQuery: (size: 'sm' | 'md' | 'lg' | 'xl') => CONTAINER_QUERIES.base.sizes[size]
  }
} as const;

// Export everything as a single theme object
export const theme: Theme = {
  colors: COLORS,
  typography: TYPOGRAPHY_STYLES,
  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  shadows: EFFECTS_STYLES.base.shadow,
  effects: EFFECTS_STYLES,
  grid: GRID_STYLES,
  container: CONTAINER_STYLES,
  containerQueries: CONTAINER_QUERIES,
  components: {
    button: COMPONENTS.button,
    card: COMPONENTS.card,
    badge: COMPONENTS.badge,
    input: COMPONENTS.input,
    product: componentStyles.product
  },
  gradients: GRADIENTS
} as const;

export type { Theme } from './types'; 