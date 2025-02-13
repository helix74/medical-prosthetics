import { type } from "os";

// Color types
type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type Colors = {
  primary: ColorScale;
  secondary: ColorScale;
  neutral: ColorScale;
};

// Typography types
interface TypographyBase {
  heading: {
    h1: string;
    h2: string;
    h3: string;
    h4: string;
    h5: string;
    h6: string;
  };
  body: {
    sm: string;
    base: string;
    lg: string;
  };
  display: {
    sm: string;
    base: string;
    lg: string;
  };
  prose: {
    sm: string;
    base: string;
    lg: string;
  };
  label: {
    sm: string;
    base: string;
    lg: string;
  };
}

interface TypographyVariant {
  heading: string;
  body: string;
}

interface TypographyUtils {
  getHeading: (level: 1 | 2 | 3 | 4 | 5 | 6, variant?: 'primary' | 'secondary' | 'neutral') => string;
  getBody: (size: 'sm' | 'base' | 'lg', variant?: 'primary' | 'secondary' | 'neutral') => string;
  getDisplay: (size: 'sm' | 'base' | 'lg', variant?: 'primary' | 'secondary' | 'neutral') => string;
  getProse: (size: 'sm' | 'base' | 'lg') => string;
  getLabel: (size: 'sm' | 'base' | 'lg', variant?: 'primary' | 'secondary' | 'neutral') => string;
}

interface TypographyStates {
  muted: string;
  error: string;
  success: string;
  warning: string;
  disabled: string;
}

interface TypographyAlignment {
  left: string;
  center: string;
  right: string;
  justify: string;
}

interface TypographyWeights {
  thin: string;
  light: string;
  normal: string;
  medium: string;
  semibold: string;
  bold: string;
  extrabold: string;
}

interface TypographyTransforms {
  uppercase: string;
  lowercase: string;
  capitalize: string;
  normalCase: string;
}

interface TypographyDecoration {
  underline: string;
  lineThrough: string;
  noUnderline: string;
}

interface TypographyProseStyles {
  p: string;
  list: string;
  blockquote: string;
}

export interface TypographyStyles {
  utils: TypographyUtils;
  base: TypographyBase;
  variants: {
    primary: TypographyVariant;
    secondary: TypographyVariant;
    neutral: TypographyVariant;
  };
  states: TypographyStates;
  alignment: TypographyAlignment;
  weights: TypographyWeights;
  transforms: TypographyTransforms;
  decoration: TypographyDecoration;
  prose: {
    sm: TypographyProseStyles;
    base: TypographyProseStyles;
    lg: TypographyProseStyles;
  };
}

// Spacing types
type SpacingScale = {
  container: {
    base: string;
    padding: {
      default: string;
      safe: string;
    };
    maxWidth: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  section: {
    base: string;
    sm: string;
    lg: string;
  };
  gap: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};

// Border radius types
type BorderRadiusScale = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
};

// Shadow types
type ShadowScale = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
  none: string;
};

// Effects types
interface EffectsBase {
  shadow: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    inner: string;
    none: string;
  };
  blur: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    none: string;
  };
  transition: {
    fast: string;
    base: string;
    slow: string;
    slower: string;
  };
  animation: {
    spin: string;
    ping: string;
    pulse: string;
    bounce: string;
  };
}

interface EffectsUtils {
  getShadow: (size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'inner' | 'none') => string;
  getBlur: (size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'none') => string;
  getTransition: (speed?: 'fast' | 'base' | 'slow' | 'slower') => string;
  getAnimation: (type?: 'spin' | 'ping' | 'pulse' | 'bounce') => string;
}

export interface EffectsStyles {
  utils: EffectsUtils;
  base: EffectsBase;
}

// Grid types
export interface GridStyles {
  responsive: {
    twoColumn: string;
    threeColumn: string;
    fourColumn: string;
  };
  fixed: {
    twoColumn: string;
    threeColumn: string;
    fourColumn: string;
  };
  auto: {
    fit: string;
    fill: string;
  };
}

// Container types
interface ContainerBase {
  wrapper: string;
  padding: {
    sm: string;
    md: string;
    lg: string;
  };
  maxWidth: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    full: string;
  };
}

interface ContainerUtils {
  getContainer: (maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full') => string;
}

export interface ContainerStyles {
  utils: ContainerUtils;
  base: ContainerBase;
}

// Component types
interface InputStyles {
  base: string;
  sizes: {
    sm: string;
    md: string;
    lg: string;
  };
  states: {
    default: string;
    error: string;
    success: string;
  };
}

interface ButtonStyles {
  base: string;
  variants: {
    primary: string;
    secondary: string;
    outline: string;
    ghost: string;
  };
  sizes: {
    sm: string;
    md: string;
    lg: string;
  };
}

interface CardStyles {
  base: string;
  variants: {
    elevated: string;
    outlined: string;
  };
  padding: {
    sm: string;
    md: string;
    lg: string;
  };
}

interface BadgeStyles {
  base: string;
  variants: {
    primary: string;
    secondary: string;
    neutral: string;
    success: string;
  };
  sizes: {
    sm: string;
    md: string;
  };
}

export interface ProductStyles {
  card: {
    base: string;
    image: {
      wrapper: string;
      base: string;
    };
    content: string;
    title: string;
    description: string;
    supplier: {
      logo: string;
      name: string;
    };
    specs: {
      wrapper: string;
      label: string;
      value: string;
    };
  };
  list: {
    grid: string;
    empty: {
      wrapper: string;
      icon: string;
      title: string;
      message: string;
    };
    loadMore: string;
  };
  filters: {
    wrapper: string;
    group: {
      wrapper: string;
      title: string;
      content: string;
    };
    search: {
      wrapper: string;
      input: string;
      icon: string;
    };
  };
}

interface ComponentScale {
  button: ButtonStyles;
  card: CardStyles;
  badge: BadgeStyles;
  input: InputStyles;
  product: ProductStyles;
}

// Gradient types
type GradientScale = {
  primary: {
    base: string;
    hover: string;
  };
  secondary: {
    base: string;
    hover: string;
  };
  pattern: {
    light: string;
    dark: string;
  };
};

// Container Query types
interface ContainerQueryBase {
  wrapper: string;
  sizes: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
}

interface ContainerQueryUtils {
  getContainerQuery: (size: 'sm' | 'md' | 'lg' | 'xl') => string;
}

export interface ContainerQueryStyles {
  base: ContainerQueryBase;
  utils: ContainerQueryUtils;
}

// Main theme type
export interface Theme {
  colors: Colors;
  typography: TypographyStyles;
  spacing: SpacingScale;
  borderRadius: BorderRadiusScale;
  shadows: ShadowScale;
  effects: EffectsStyles;
  grid: GridStyles;
  container: ContainerStyles;
  containerQueries: ContainerQueryStyles;
  components: ComponentScale;
  gradients: GradientScale;
}

// Helper type for theme values
export type ThemeValue<T extends keyof Theme> = Theme[T]; 