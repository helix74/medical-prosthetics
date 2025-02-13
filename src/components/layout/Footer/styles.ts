import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';

export const FOOTER_STYLES = {
  wrapper: 'bg-[#187baa] py-12',
  section: {
    main: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10',
    bottom: 'pt-6'
  },
  heading: {
    base: twMerge(
      TYPOGRAPHY_STYLES.utils.getHeading(6),
      'text-white font-semibold mb-4'
    )
  },
  text: {
    base: twMerge(
      TYPOGRAPHY_STYLES.utils.getBody('sm'),
      'text-gray-300/80'
    ),
    link: twMerge(
      TYPOGRAPHY_STYLES.utils.getBody('sm'),
      'text-gray-300/80 hover:text-white transition-colors'
    )
  },
  social: {
    link: twMerge(
      'w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white',
      'hover:bg-white/20 transition-colors'
    )
  },
  legal: {
    text: twMerge(
      TYPOGRAPHY_STYLES.utils.getBody('sm'),
      'text-gray-300/60'
    ),
    link: twMerge(
      TYPOGRAPHY_STYLES.utils.getBody('sm'),
      'text-gray-300/60 hover:text-white transition-colors'
    )
  }
} as const; 