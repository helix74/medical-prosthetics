import { twMerge } from 'tailwind-merge';
import { theme } from '@/theme';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type CardSize = 'sm' | 'md' | 'lg';
type CardVariant = 'elevated' | 'outlined';
type InputSize = 'sm' | 'md' | 'lg';
type InputVariant = 'default' | 'error' | 'success';
type BadgeSize = 'sm' | 'md';
type BadgeVariant = 'primary' | 'secondary' | 'neutral' | 'success';

interface BaseStyleOptions {
  className?: string;
  disabled?: boolean;
  isLoading?: boolean;
}

interface ButtonStyleOptions extends BaseStyleOptions {
  size?: ButtonSize;
  variant?: ButtonVariant;
}

interface CardStyleOptions extends BaseStyleOptions {
  size?: CardSize;
  variant?: CardVariant;
}

interface InputStyleOptions extends BaseStyleOptions {
  size?: InputSize;
  variant?: InputVariant;
}

interface BadgeStyleOptions extends BaseStyleOptions {
  size?: BadgeSize;
  variant?: BadgeVariant;
}

export function getButtonStyles({
  size = 'md',
  variant = 'primary',
  className,
  disabled,
  isLoading,
}: ButtonStyleOptions = {}) {
  return twMerge(
    // Base styles
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200',
    // Variant styles
    variant === 'primary' && 'bg-[#187baa] text-white hover:bg-[#156a93]',
    variant === 'secondary' && 'bg-secondary-600 text-white hover:bg-secondary-700',
    variant === 'outline' && 'border border-[#187baa] text-[#187baa] hover:bg-[#187baa]/5',
    variant === 'ghost' && 'text-[#187baa] hover:bg-[#187baa]/5',
    // Size styles
    size === 'sm' && 'px-3 py-2 text-sm',
    size === 'md' && 'px-4 py-2 text-base',
    size === 'lg' && 'px-6 py-3 text-lg',
    // States
    disabled && 'opacity-50 cursor-not-allowed',
    isLoading && 'cursor-wait',
    className
  );
}

export function getCardStyles({
  size = 'md',
  variant = 'elevated',
  className,
}: CardStyleOptions = {}) {
  return twMerge(
    // Base styles
    'bg-white rounded-lg overflow-hidden',
    // Variant styles
    variant === 'elevated' && 'shadow-lg hover:shadow-xl transition-shadow duration-200',
    variant === 'outlined' && 'border border-neutral-200 hover:border-neutral-300 transition-colors duration-200',
    // Size styles
    size === 'sm' && 'p-4',
    size === 'md' && 'p-6',
    size === 'lg' && 'p-8',
    className
  );
}

export function getInputStyles({
  size = 'md',
  variant = 'default',
  className,
  disabled,
}: InputStyleOptions = {}) {
  return twMerge(
    // Base styles
    'w-full rounded-lg border border-neutral-200 bg-white transition-colors duration-200',
    // Variant styles
    variant === 'default' && 'focus:border-[#187baa] focus:ring-2 focus:ring-[#187baa]/20',
    variant === 'error' && 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20',
    variant === 'success' && 'border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-500/20',
    // Size styles
    size === 'sm' && 'px-3 py-2 text-sm',
    size === 'md' && 'px-4 py-2 text-base',
    size === 'lg' && 'px-4 py-3 text-lg',
    // States
    disabled && 'opacity-50 cursor-not-allowed bg-neutral-50',
    className
  );
}

export function getBadgeStyles({
  size = 'md',
  variant = 'primary',
  className,
}: BadgeStyleOptions = {}) {
  return twMerge(
    // Base styles
    'inline-flex items-center justify-center font-medium rounded-full',
    // Variant styles
    variant === 'primary' && 'bg-[#187baa]/10 text-[#187baa] border border-[#187baa]/20',
    variant === 'secondary' && 'bg-secondary-50 text-secondary-600 border border-secondary-100',
    variant === 'neutral' && 'bg-neutral-50 text-neutral-600 border border-neutral-100',
    variant === 'success' && 'bg-success-50 text-success-600 border border-success-100',
    // Size styles
    size === 'sm' && 'px-2 py-1 text-xs',
    size === 'md' && 'px-3 py-1 text-sm',
    className
  );
}

export const COMMON_STYLES = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-12 sm:py-16',
  title: {
    h1: 'text-4xl font-bold text-neutral-900 sm:text-5xl',
    h2: 'text-3xl font-bold text-neutral-900 sm:text-4xl',
    h3: 'text-2xl font-bold text-neutral-900 sm:text-3xl'
  }
} as const;

// Common style patterns
export const CONTAINER_STYLES = {
  base: 'mx-auto px-4 sm:px-6 lg:px-8',
  variants: {
    default: twMerge('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'),
    narrow: twMerge('max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'),
    wide: twMerge('max-w-8xl mx-auto px-4 sm:px-6 lg:px-8')
  }
};

export const TYPOGRAPHY_STYLES = {
  base: {
    heading: {
      1: 'text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight',
      2: 'text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight',
      3: 'text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight',
      4: 'text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight',
      5: 'text-lg sm:text-xl lg:text-2xl font-bold tracking-tight',
      6: 'text-base sm:text-lg lg:text-xl font-bold tracking-tight'
    },
    body: {
      sm: 'text-sm leading-6',
      base: 'text-base leading-7',
      lg: 'text-lg leading-8'
    },
    display: {
      sm: 'text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter',
      base: 'text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter',
      lg: 'text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tighter'
    }
  },
  utils: {
    getHeading: (level: 1 | 2 | 3 | 4 | 5 | 6) => TYPOGRAPHY_STYLES.base.heading[level],
    getBody: (size: 'sm' | 'base' | 'lg') => TYPOGRAPHY_STYLES.base.body[size],
    getDisplay: (size: 'sm' | 'base' | 'lg') => TYPOGRAPHY_STYLES.base.display[size]
  }
};

export const EFFECTS_STYLES = {
  base: {
    transition: {
      base: 'transition-all duration-300 ease-in-out',
      fast: 'transition-all duration-150 ease-in-out',
      slow: 'transition-all duration-500 ease-in-out',
      slower: 'transition-all duration-700 ease-in-out'
    },
    shadow: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl'
    },
    blur: {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
      xl: 'backdrop-blur-xl'
    },
    hover: {
      scale: 'hover:scale-105',
      lift: 'hover:-translate-y-1',
      push: 'hover:translate-y-0.5',
      grow: 'hover:scale-110'
    },
    focus: {
      ring: {
        sm: 'focus:ring-2 focus:ring-offset-2',
        md: 'focus:ring-4 focus:ring-offset-2',
        lg: 'focus:ring-6 focus:ring-offset-2',
        offset: 'focus:ring-2 focus:ring-offset-4'
      }
    }
  },
  utils: {
    getTransition: (speed?: 'fast' | 'base' | 'slow' | 'slower') =>
      EFFECTS_STYLES.base.transition[speed || 'base'],
    getShadow: (size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl') =>
      EFFECTS_STYLES.base.shadow[size || 'md'],
    getBlur: (intensity?: 'sm' | 'md' | 'lg' | 'xl') =>
      EFFECTS_STYLES.base.blur[intensity || 'md'],
    getHoverEffect: (type: 'scale' | 'lift' | 'push' | 'grow') =>
      EFFECTS_STYLES.base.hover[type],
    getFocusRing: (size?: 'sm' | 'md' | 'lg' | 'offset') =>
      EFFECTS_STYLES.base.focus.ring[size || 'md']
  }
}; 