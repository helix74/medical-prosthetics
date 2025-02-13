import { ThemeConfig } from '@/types';

export const theme: ThemeConfig = {
  colors: {
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
      900: '#0b344e'
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    neutral: {
      50: '#fafafa',
      100: '#f4f4f5',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b',
    },
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
  },
  spacing: {
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    section: {
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-16',
    },
    gap: {
      sm: 'gap-2',
      md: 'gap-4',
      lg: 'gap-6',
      xl: 'gap-8',
    },
    padding: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
    margin: {
      sm: 'm-4',
      md: 'm-6',
      lg: 'm-8',
    },
  },
  effects: {
    shadow: {
      sm: 'shadow-sm',
      md: 'shadow',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
    },
    transition: {
      fast: 'transition-all duration-150',
      normal: 'transition-all duration-300',
      slow: 'transition-all duration-500',
    },
    blur: {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur',
      lg: 'backdrop-blur-lg',
    },
    hover: {
      scale: 'hover:scale-105',
      lift: 'hover:-translate-y-1',
      glow: 'hover:shadow-lg hover:shadow-[#187baa]/20',
    },
  },
  text: {
    title: {
      h1: 'text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl',
      h2: 'text-3xl font-bold tracking-tight sm:text-4xl',
      h3: 'text-2xl font-bold',
      h4: 'text-xl font-semibold'
    },
    body: {
      base: 'text-neutral-600',
      large: 'text-lg leading-8',
      small: 'text-sm'
    },
    states: {
      muted: 'text-neutral-500',
      error: 'text-red-600',
      success: 'text-green-600',
      warning: 'text-yellow-600'
    },
    alignment: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right'
    }
  },
  components: {
    button: {
      base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2',
      primary: 'bg-[#187baa] text-white hover:bg-[#156a93] focus:ring-[#187baa]',
      secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
      outline: 'border border-[#187baa] text-[#187baa] hover:bg-[#187baa]/10 focus:ring-[#187baa]',
      ghost: 'text-[#187baa] hover:bg-[#187baa]/10 focus:ring-[#187baa]',
      link: 'text-[#187baa] hover:underline focus:ring-0',
      sizes: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
      states: {
        disabled: 'opacity-50 cursor-not-allowed',
        loading: 'cursor-wait',
        hover: 'transform hover:scale-105',
        focus: 'ring-2 ring-offset-2',
        active: 'transform scale-95',
      },
      icons: {
        left: 'mr-2',
        right: 'ml-2',
        only: 'p-2',
      },
    },
    card: {
      base: 'bg-white rounded-lg shadow-sm overflow-hidden',
      hover: 'transition-transform hover:scale-105 hover:shadow-md',
      padding: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      variants: {
        elevated: 'shadow-lg',
        outlined: 'border border-neutral-200',
        filled: 'bg-neutral-50',
        interactive: 'cursor-pointer hover:shadow-lg transition-shadow',
      },
      header: 'px-6 py-4 border-b border-neutral-200',
      body: 'p-6',
      footer: 'px-6 py-4 border-t border-neutral-200',
    },
    input: {
      base: 'block w-full rounded-md shadow-sm',
      default: 'border-neutral-300 focus:border-[#187baa] focus:ring-[#187baa]/20',
      label: 'block text-sm font-medium text-neutral-700 dark:text-neutral-200 mb-1',
      error: 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500',
      success: 'border-green-300 text-green-900 placeholder-green-300 focus:border-green-500 focus:ring-green-500',
      sizes: {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-4 py-3 text-lg',
      },
      variants: {
        outline: 'border-2',
        filled: 'bg-neutral-50 border-transparent',
        flushed: 'border-0 border-b-2 rounded-none px-0',
      },
      states: {
        focus: 'ring-2 ring-[#187baa]/20',
        error: 'border-red-500 ring-red-500',
        success: 'border-green-500 ring-green-500',
        disabled: 'bg-neutral-100 cursor-not-allowed',
      },
      addons: {
        left: 'pl-10',
        right: 'pr-10',
      },
    },
    badge: {
      base: 'inline-flex items-center rounded-full font-medium',
      variants: {
        primary: 'bg-[#187baa]/10 text-[#187baa]',
        secondary: 'bg-secondary-100 text-secondary-800',
        outline: 'border border-current',
        success: 'bg-green-100 text-green-800',
        warning: 'bg-yellow-100 text-yellow-800',
        error: 'bg-red-100 text-red-800'
      },
      sizes: {
        sm: 'px-2.5 py-0.5 text-xs',
        md: 'px-3 py-1 text-sm',
      },
      states: {
        solid: 'font-semibold',
        soft: 'font-medium opacity-75',
      },
    },
    layout: {
      section: {
        base: 'w-full',
        variants: {
          light: 'bg-white',
          blue: 'bg-[#187baa]/10',
          dark: 'bg-neutral-900 text-white',
          gradient: 'bg-gradient-to-br from-[#187baa] to-[#156a93] text-white',
        },
        padding: {
          sm: 'py-8',
          md: 'py-12',
          lg: 'py-16',
        },
      },
      container: {
        base: 'mx-auto w-full',
        padding: {
          sm: 'px-4',
          md: 'px-6',
          lg: 'px-8',
        },
        maxWidth: {
          sm: 'max-w-screen-sm',
          md: 'max-w-screen-md',
          lg: 'max-w-screen-lg',
          xl: 'max-w-screen-xl',
          full: 'max-w-full',
        },
      },
      grid: {
        base: 'grid',
        cols: {
          1: 'grid-cols-1',
          2: 'grid-cols-2',
          3: 'grid-cols-3',
          4: 'grid-cols-4',
          6: 'grid-cols-6',
          12: 'grid-cols-12',
        },
        gap: {
          sm: 'gap-4',
          md: 'gap-6',
          lg: 'gap-8',
          xl: 'gap-12',
        },
      },
    },
    form: {
      group: {
        base: 'space-y-2',
        vertical: 'flex flex-col',
        horizontal: 'flex items-center gap-4',
      },
      label: {
        base: 'block text-sm font-medium text-neutral-700',
        required: 'after:content-["*"] after:ml-0.5 after:text-red-500',
        optional: 'after:content-["(optional)"] after:ml-1 after:text-neutral-500',
        disabled: 'opacity-50',
      },
      helper: {
        base: 'mt-1 text-sm text-neutral-500',
        error: 'text-red-600',
        success: 'text-green-600',
      },
    },
    modal: {
      overlay: {
        base: 'fixed inset-0 z-50 flex items-center justify-center p-4',
        blur: 'backdrop-blur-sm',
        dark: 'bg-black/50',
      },
      container: {
        base: 'bg-white rounded-lg shadow-xl relative',
        sizes: {
          sm: 'max-w-md w-full',
          md: 'max-w-lg w-full',
          lg: 'max-w-2xl w-full',
          full: 'w-screen h-screen',
        },
      },
      header: 'px-6 py-4 border-b border-neutral-200',
      body: 'p-6',
      footer: 'px-6 py-4 border-t border-neutral-200',
    },
    table: {
      container: 'min-w-full divide-y divide-neutral-200',
      header: {
        base: 'bg-neutral-50',
        cell: 'px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider',
      },
      body: {
        base: 'bg-white divide-y divide-neutral-200',
        row: 'hover:bg-neutral-50',
        cell: 'px-6 py-4 whitespace-nowrap text-sm text-neutral-900',
      },
      footer: 'px-6 py-4 bg-neutral-50 border-t border-neutral-200',
      pagination: {
        base: 'flex items-center justify-between',
        button: 'px-3 py-1 border border-neutral-300 text-sm font-medium rounded-md hover:bg-neutral-50',
        active: 'bg-primary-50 text-primary-600 border-primary-500',
      },
    },
  },
}; 