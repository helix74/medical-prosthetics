export const SECTION_CONFIG = {
  spacing: {
    vertical: 'py-24',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
  },
  colors: {
    primary: {
      main: '#187baa',
      light: '#187baa/10',
      border: '#187baa/20',
      hover: '#187baa/30'
    }
  },
  animations: {
    viewport: { once: true, margin: "-100px" }
  },
  borderRadius: {
    badge: 'rounded-full',
    card: 'rounded-xl'
  },
  transitions: {
    default: 'transition-all duration-300'
  }
} as const;

export const SECTION_VARIANTS = {
  primary: {
    background: 'bg-gradient-to-b from-white to-neutral-50',
    text: 'text-[#187baa]'
  },
  secondary: {
    background: 'bg-gradient-to-b from-neutral-50 to-white',
    text: 'text-neutral-800'
  }
} as const; 