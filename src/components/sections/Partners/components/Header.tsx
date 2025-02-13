'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { twMerge } from 'tailwind-merge';
import { partnersData } from '../data';

const PartnersHeader = memo(function PartnersHeader() {
  const { header } = partnersData;

  return (
    <div className={twMerge(CONTAINER_STYLES.variants.default, 'relative z-10 py-24')}>
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-[#187baa]/10 to-transparent rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-[#187baa]/15 to-transparent rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />
      </div>

      <m.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        animate="animate"
        className="relative z-10"
      >
        <m.div 
          className={twMerge(
            'inline-flex items-center px-8 py-4 mb-12 rounded-full',
            'bg-gradient-to-r from-[#187baa]/10 to-[#187baa]/5',
            'text-[#187baa] font-medium text-base',
            'border border-[#187baa]/20',
            'mx-auto backdrop-blur-sm',
            'hover:from-[#187baa]/15 hover:to-[#187baa]/10',
            EFFECTS_STYLES.base.transition.base
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="mr-3">🤝</span>
          {header.badge}
        </m.div>
        
        <m.h1
          variants={FADE_IN_UP}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(1),
            'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent',
            'mb-6 font-bold'
          )}
        >
          {header.title}
        </m.h1>

        <m.p 
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('lg'),
            'leading-8 text-neutral-600/90 text-center max-w-3xl mx-auto mb-16',
            'backdrop-blur-sm'
          )}
          variants={FADE_IN_UP}
        >
          {header.description}
        </m.p>
      </m.div>
    </div>
  );
});

export default PartnersHeader; 