import { COLORS } from '@/theme/styles';
import type { 
  ProductSkeletonStyles, 
  ProductFilterStyles,
  ProductCardStyles,
  ProductDetailsStyles
} from './styles.types';

// Styles communs réutilisables
const COMMON_STYLES = {
  transitions: {
    default: 'transition-all duration-300',
    transform: 'transition-transform duration-300'
  },
  containers: {
    card: 'bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden',
    section: 'p-6'
  },
  text: {
    title: 'font-semibold text-neutral-800',
    description: 'text-neutral-600',
    small: 'text-sm'
  },
  buttons: {
    base: 'inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200'
  }
} as const;

export const PRODUCT_CARD_STYLES: ProductCardStyles = {
  container: {
    base: `${COMMON_STYLES.containers.card} ${COMMON_STYLES.transitions.default}`,
    hover: 'hover:shadow-xl hover:border-neutral-200'
  },
  image: {
    wrapper: 'relative aspect-[4/3] overflow-hidden',
    img: `object-cover ${COMMON_STYLES.transitions.transform} group-hover:scale-105`
  },
  content: {
    wrapper: COMMON_STYLES.containers.section,
    title: `text-xl ${COMMON_STYLES.text.title} mb-2 line-clamp-2`,
    description: `${COMMON_STYLES.text.small} ${COMMON_STYLES.text.description} mb-4 line-clamp-3`,
    supplier: `${COMMON_STYLES.text.small} text-neutral-500 mb-4`
  },
  footer: {
    wrapper: 'flex items-center justify-between',
    button: {
      base: COMMON_STYLES.buttons.base,
      primary: `bg-[${COLORS.primary[500]}] text-white hover:bg-[${COLORS.primary[600]}]`,
      outline: 'border border-neutral-200 text-neutral-700 hover:bg-neutral-50'
    }
  },
  badge: {
    wrapper: 'absolute top-4 right-4',
    base: 'px-3 py-1 rounded-full text-xs font-medium',
    new: 'bg-green-100 text-green-800',
    popular: 'bg-blue-100 text-blue-800'
  }
};

export const PRODUCT_LIST_STYLES = {
  container: 'w-full space-y-8',
  grid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6',
  loadMore: {
    wrapper: 'flex justify-center mt-8',
    button: 'px-6 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 bg-white border border-neutral-300 rounded-md shadow-sm hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
  },
  empty: {
    wrapper: 'flex flex-col items-center justify-center py-12 px-4',
    icon: 'text-4xl mb-4',
    title: 'text-xl font-semibold text-neutral-900 mb-2',
    description: 'text-neutral-600'
  }
} as const;

export const PRODUCT_FILTER_STYLES: ProductFilterStyles = {
  container: 'mb-8',
  searchBar: {
    wrapper: 'flex gap-4 mb-4',
    input: 'flex-1 w-full px-4 py-3 rounded-xl border border-neutral-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200',
    button: 'inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#187baa] text-white font-medium hover:bg-[#187baa]/90 transition-all'
  },
  panel: {
    wrapper: 'bg-white p-6 rounded-xl shadow-lg mb-6',
    header: {
      wrapper: 'flex justify-between items-center mb-6',
      title: 'text-lg font-semibold text-neutral-800',
      resetButton: 'text-sm text-neutral-500 hover:text-neutral-700 flex items-center gap-1'
    }
  },
  section: {
    wrapper: 'mb-6 last:mb-0',
    title: 'font-medium mb-3 text-neutral-800',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-2'
  },
  category: {
    base: 'p-3 rounded-lg text-sm flex items-center gap-2 transition-colors duration-200',
    active: 'bg-[#187baa] text-white',
    inactive: 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
  },
  activeTags: {
    wrapper: 'flex flex-wrap gap-2 mb-4',
    tag: 'inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#187baa]/10 text-[#187baa] text-sm',
    closeButton: 'ml-1 hover:text-[#187baa]/80',
    closeIcon: 'w-3 h-3'
  }
};

export const PRODUCT_SKELETON_STYLES: ProductSkeletonStyles = {
  container: 'bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden',
  imagePlaceholder: 'relative aspect-[4/3] bg-neutral-100 animate-pulse',
  content: {
    wrapper: 'p-6 space-y-4',
    title: 'h-6 bg-neutral-100 rounded animate-pulse w-3/4',
    description: {
      container: 'space-y-2',
      line1: 'h-4 bg-neutral-100 rounded animate-pulse w-full',
      line2: 'h-4 bg-neutral-100 rounded animate-pulse w-2/3'
    },
    specifications: {
      container: 'space-y-2 mt-4',
      line: 'h-4 bg-neutral-100 rounded animate-pulse w-full'
    },
    footer: {
      container: 'flex items-center justify-between mt-4',
      supplier: {
        container: 'flex items-center gap-2',
        logo: 'w-6 h-6 bg-neutral-100 rounded-full animate-pulse',
        name: 'h-4 bg-neutral-100 rounded animate-pulse w-24'
      },
      download: 'h-8 bg-neutral-100 rounded-lg animate-pulse w-32'
    }
  },
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'
};

export const PRODUCT_DETAILS_STYLES: ProductDetailsStyles = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12',
  grid: 'grid grid-cols-1 lg:grid-cols-2 gap-12',
  imageContainer: 'relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-xl',
  image: 'object-contain',
  content: {
    title: 'text-3xl font-bold text-neutral-900 mb-4',
    description: 'text-lg text-neutral-600 mb-8'
  },
  specifications: {
    container: 'mt-8',
    title: 'text-xl font-semibold text-neutral-800 mb-4',
    grid: 'grid grid-cols-1 sm:grid-cols-2 gap-4',
    label: 'text-sm text-neutral-500 capitalize',
    value: 'text-base text-neutral-800 font-medium'
  },
  features: {
    title: 'text-xl font-semibold text-neutral-800 mt-8 mb-4',
    list: 'space-y-2',
    item: 'flex items-start gap-2 text-neutral-600'
  }
}; 