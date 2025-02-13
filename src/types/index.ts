// Re-export all types
export * from './common';
export * from './components/base';
export * from './components/products';

// Re-export theme types
export type { Theme, ThemeValue } from '@/theme/types';

export interface ThemeConfig {
  colors: {
    primary: Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
    secondary: Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
    neutral: Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
    success: Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
    warning: Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
    error: Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;
  };
  spacing: {
    container: string;
    section: Record<'sm' | 'md' | 'lg', string>;
    gap: Record<'sm' | 'md' | 'lg' | 'xl', string>;
    padding: Record<'sm' | 'md' | 'lg', string>;
    margin: Record<'sm' | 'md' | 'lg', string>;
  };
  effects: {
    shadow: Record<'sm' | 'md' | 'lg' | 'xl', string>;
    transition: Record<'fast' | 'normal' | 'slow', string>;
    blur: Record<'sm' | 'md' | 'lg', string>;
    hover: Record<'scale' | 'lift' | 'glow', string>;
  };
  text: {
    title: Record<'h1' | 'h2' | 'h3' | 'h4', string>;
    body: Record<'base' | 'large' | 'small', string>;
    states: Record<'muted' | 'error' | 'success' | 'warning', string>;
    alignment: Record<'left' | 'center' | 'right', string>;
  };
  components: {
    button: {
      base: string;
      primary: string;
      secondary: string;
      outline: string;
      ghost: string;
      link: string;
      sizes: Record<'sm' | 'md' | 'lg', string>;
      states: Record<'disabled' | 'loading' | 'hover' | 'focus' | 'active', string>;
      icons: Record<'left' | 'right' | 'only', string>;
    };
    card: {
      base: string;
      hover: string;
      padding: Record<'sm' | 'md' | 'lg', string>;
      variants: Record<'elevated' | 'outlined' | 'filled' | 'interactive', string>;
      header: string;
      body: string;
      footer: string;
    };
    input: {
      base: string;
      default: string;
      label: string;
      error: string;
      success: string;
      sizes: Record<'sm' | 'md' | 'lg', string>;
      variants: Record<'outline' | 'filled' | 'flushed', string>;
      states: Record<'focus' | 'error' | 'success' | 'disabled', string>;
      addons: Record<'left' | 'right', string>;
    };
    badge: {
      base: string;
      variants: Record<'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error', string>;
      sizes: Record<'sm' | 'md', string>;
      states: Record<'solid' | 'soft', string>;
    };
    layout: {
      section: {
        base: string;
        variants: Record<'light' | 'blue' | 'dark' | 'gradient', string>;
        padding: Record<'sm' | 'md' | 'lg', string>;
      };
      container: {
        base: string;
        padding: Record<'sm' | 'md' | 'lg', string>;
        maxWidth: Record<'sm' | 'md' | 'lg' | 'xl' | 'full', string>;
      };
      grid: {
        base: string;
        cols: Record<1 | 2 | 3 | 4 | 6 | 12, string>;
        gap: Record<'sm' | 'md' | 'lg' | 'xl', string>;
      };
    };
    form: {
      group: {
        base: string;
        vertical: string;
        horizontal: string;
      };
      label: {
        base: string;
        required: string;
        optional: string;
        disabled: string;
      };
      helper: {
        base: string;
        error: string;
        success: string;
      };
    };
    modal: {
      overlay: {
        base: string;
        blur: string;
        dark: string;
      };
      container: {
        base: string;
        sizes: Record<'sm' | 'md' | 'lg' | 'full', string>;
      };
      header: string;
      body: string;
      footer: string;
    };
    table: {
      container: string;
      header: {
        base: string;
        cell: string;
      };
      body: {
        base: string;
        row: string;
        cell: string;
      };
      footer: string;
      pagination: {
        base: string;
        button: string;
        active: string;
      };
    };
  };
} 