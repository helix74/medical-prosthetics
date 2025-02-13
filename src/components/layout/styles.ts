import { twMerge } from 'tailwind-merge';
import { EFFECTS_STYLES, TYPOGRAPHY_STYLES, CONTAINER_STYLES } from '@/theme/styles';

export const HEADER_STYLES = {
  wrapper: {
    base: twMerge(
      'fixed top-0 left-0 right-0 z-50 bg-white',
      EFFECTS_STYLES.base.transition.base
    ),
    scrolled: EFFECTS_STYLES.base.shadow.lg
  },
  topBar: {
    wrapper: twMerge(
      'bg-[#187baa] text-white py-2',
      CONTAINER_STYLES.variants.default
    ),
    link: {
      base: twMerge(
        'flex items-center gap-2 text-sm text-[#187baa]/40 hover:text-white',
        EFFECTS_STYLES.base.transition.base
      ),
      icon: 'text-[#187baa]/60'
    }
  },
  mainNav: {
    wrapper: twMerge(
      'bg-white py-4',
      CONTAINER_STYLES.variants.default
    ),
    list: 'flex items-center gap-6',
    link: {
      base: twMerge(
        'text-neutral-600 hover:text-[#187baa]',
        EFFECTS_STYLES.base.transition.base
      ),
      active: 'text-[#187baa]'
    }
  },
  mobileMenu: {
    button: twMerge(
      'lg:hidden p-2 rounded-lg',
      'text-neutral-600 hover:text-[#187baa]',
      EFFECTS_STYLES.base.transition.base
    ),
    overlay: 'fixed inset-0 bg-black/50 z-40',
    panel: twMerge(
      'fixed top-0 right-0 bottom-0 w-64 bg-white z-50',
      'p-6 overflow-y-auto shadow-xl'
    ),
    close: twMerge(
      'absolute top-4 right-4 p-2 rounded-lg',
      'text-neutral-600 hover:text-[#187baa]',
      EFFECTS_STYLES.base.transition.base
    )
  }
};

export const FOOTER_STYLES = {
  wrapper: 'bg-[#187baa] pt-12 pb-6',
  container: CONTAINER_STYLES.variants.default,
  section: {
    main: 'grid grid-cols-1 lg:grid-cols-6 gap-8 pb-8 border-b border-white/20',
    bottom: 'pt-6 flex flex-col md:flex-row justify-between items-center gap-4'
  },
  logo: {
    wrapper: 'flex items-center gap-3 mb-4',
    title: TYPOGRAPHY_STYLES.utils.getHeading(5, 'primary'),
    subtitle: TYPOGRAPHY_STYLES.utils.getBody('sm', 'neutral')
  },
  description: TYPOGRAPHY_STYLES.utils.getBody('sm', 'neutral'),
  navigation: {
    title: twMerge(
      TYPOGRAPHY_STYLES.utils.getBody('sm'),
      'text-white font-semibold mb-4'
    ),
    link: twMerge(
      TYPOGRAPHY_STYLES.utils.getBody('sm'),
      'text-white/70 hover:text-white',
      EFFECTS_STYLES.base.transition.base
    )
  },
  contact: {
    item: 'flex items-start gap-2',
    icon: 'mt-0.5 text-white/90',
    text: twMerge(
      TYPOGRAPHY_STYLES.utils.getBody('sm'),
      'text-white/80 hover:text-white',
      EFFECTS_STYLES.base.transition.base
    )
  },
  social: {
    link: twMerge(
      'w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white',
      'hover:bg-white/20',
      EFFECTS_STYLES.base.transition.base
    )
  },
  legal: {
    wrapper: 'flex flex-wrap justify-center md:justify-end gap-4 text-xs',
    text: TYPOGRAPHY_STYLES.utils.getBody('sm', 'neutral'),
    link: twMerge(
      TYPOGRAPHY_STYLES.utils.getBody('sm'),
      'text-white/80 hover:text-white',
      EFFECTS_STYLES.base.transition.base
    )
  }
} as const; 