// Button variants
export const BUTTON_VARIANTS = {
  primary: 'bg-[#187baa] text-white hover:bg-[#156a93] active:bg-[#12587c]',
  secondary: 'bg-secondary-400 text-white hover:bg-secondary-500 active:bg-secondary-600',
  outline: 'border-2 border-[#187baa] text-[#187baa] hover:bg-[#187baa]/10 active:bg-[#187baa]/20',
} as const;

// Button sizes
export const BUTTON_SIZES = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg',
} as const;

// Card styles
export const CARD_STYLES = {
  base: 'rounded-2xl bg-white shadow-lg',
  hover: 'transition-all duration-200 hover:shadow-xl',
} as const;

// Product filter styles
export const PRODUCT_FILTER_STYLES = {
  input: 'w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500',
  filterButton: 'px-4 py-2 bg-[#187baa] text-white rounded-lg hover:bg-[#156a93] transition-colors flex items-center gap-2',
  panel: 'bg-white p-6 rounded-lg shadow-lg mb-6',
  categoryButton: {
    base: 'p-3 rounded-lg text-sm flex items-center gap-2 transition-colors',
    active: 'bg-[#187baa] text-white',
    inactive: 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700',
  },
  supplierButton: {
    base: 'p-3 rounded-lg text-sm transition-colors',
    active: 'bg-[#187baa] text-white',
    inactive: 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700',
  },
  activeFilter: 'px-3 py-1 bg-[#187baa]/10 text-[#187baa]/80 rounded-full text-sm flex items-center gap-1',
} as const;

// Product card styles
export const PRODUCT_CARD_STYLES = {
  container: 'bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-white/10 transition-all duration-300',
  imageContainer: 'relative aspect-[4/3] overflow-hidden bg-neutral-50',
  image: 'object-cover transform group-hover:scale-105 transition-transform duration-300',
  content: 'p-6',
  title: 'text-xl font-bold text-[#187baa] line-clamp-2 mb-3 min-h-[3.5rem]',
  description: 'text-neutral-600 mb-4 line-clamp-2 min-h-[3rem]',
  specificationContainer: 'space-y-2 mb-4',
  specification: {
    container: 'flex items-center text-sm bg-neutral-50 p-2 rounded-lg animate-fade-in',
    label: 'font-medium text-[#187baa] capitalize min-w-[100px]',
    value: 'ml-2 text-neutral-600',
  },
  footer: {
    container: 'pt-4 border-t border-neutral-100',
    supplierContainer: 'flex items-center space-x-2',
    supplierLogo: 'relative w-8 h-8',
    supplierName: 'text-sm text-neutral-500',
    downloadButton: 'text-[#187baa] hover:text-[#156a93] transition-colors',
  },
} as const;

// Product skeleton styles
export const PRODUCT_SKELETON_STYLES = {
  container: 'bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100 animate-pulse',
  imagePlaceholder: 'relative aspect-[4/3] bg-neutral-200',
  content: 'p-6 space-y-4',
  title: 'h-6 bg-neutral-200 rounded-lg w-3/4',
  description: {
    container: 'space-y-2',
    line1: 'h-4 bg-neutral-200 rounded-lg w-full',
    line2: 'h-4 bg-neutral-200 rounded-lg w-2/3',
  },
  specifications: {
    container: 'space-y-2 pt-4',
    line: 'h-8 bg-neutral-200 rounded-lg',
  },
  footer: {
    container: 'pt-4 border-t border-neutral-100 flex justify-between items-center',
    supplier: {
      container: 'flex items-center space-x-2',
      logo: 'w-8 h-8 bg-neutral-200 rounded-full',
      name: 'h-4 bg-neutral-200 rounded-lg w-24',
    },
    download: 'w-6 h-6 bg-neutral-200 rounded-lg',
  },
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8',
} as const;

// Product list styles
export const PRODUCT_LIST_STYLES = {
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
} as const;

// Product details styles
export const PRODUCT_DETAILS_STYLES = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8',
  grid: 'grid grid-cols-1 md:grid-cols-2 gap-8',
  imageContainer: 'relative h-96',
  image: 'object-cover rounded-lg',
  content: {
    title: 'text-3xl font-bold mb-4',
    description: 'text-gray-600 mb-6',
  },
  specifications: {
    container: 'mb-6',
    title: 'text-xl font-semibold mb-3',
    grid: 'grid grid-cols-1 gap-2',
    label: 'font-medium',
    value: 'text-gray-600',
  },
  features: {
    title: 'text-xl font-semibold mb-3',
    list: 'list-disc list-inside space-y-2',
    item: 'text-gray-600',
  },
} as const;

// Input styles
export const INPUT_STYLES = {
  container: 'relative',
  label: 'block text-sm font-medium text-neutral-700 mb-1',
  base: 'w-full px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors',
  error: 'border-red-500 focus:ring-red-500',
  helper: 'mt-1 text-sm text-neutral-600',
  error_message: 'mt-1 text-sm text-red-500',
  sizes: {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-5 py-2.5 text-lg',
  },
  variants: {
    outlined: 'bg-white border border-neutral-200',
    filled: 'bg-neutral-50 border border-transparent',
    flushed: 'border-0 border-b border-neutral-200 rounded-none px-0',
  },
  icon: {
    container: 'absolute inset-y-0 right-0 flex items-center pr-3',
    base: 'h-5 w-5 text-neutral-400',
  },
} as const;

// Section styles
export const SECTION_STYLES = {
  container: 'relative w-full',
  inner: 'relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  variants: {
    default: 'py-12 sm:py-16 lg:py-20',
    compact: 'py-8 sm:py-12',
    spacious: 'py-16 sm:py-20 lg:py-24',
  },
  background: {
    white: 'bg-white',
    light: 'bg-neutral-50',
    gradient: 'bg-gradient-to-b from-neutral-50 to-white',
    transparent: 'bg-transparent',
  },
} as const; 