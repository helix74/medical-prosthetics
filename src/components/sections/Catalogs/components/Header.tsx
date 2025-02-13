'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { FADE_IN_UP } from '@/utils/animations';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { catalogsData } from '../data';
import { twMerge } from 'tailwind-merge';

const CatalogsHeader = memo(function CatalogsHeader() {
  const { header } = catalogsData;

  return (
    <div className={CONTAINER_STYLES.variants.default}>
      <m.div
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto text-center"
      >
        <m.span
          variants={FADE_IN_UP}
          className={twMerge(
            'inline-flex items-center px-4 py-2 rounded-full',
            'bg-[#187baa]/10 text-[#187baa]',
            'border border-[#187baa]/20',
            'mb-4 mx-auto',
            EFFECTS_STYLES.base.transition.base,
            'hover:bg-[#187baa]/20'
          )}
        >
          <span className="mr-2">📚</span>
          {header.badge}
        </m.span>

        <m.h1
          variants={FADE_IN_UP}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(1),
            'text-[#187baa] mb-6'
          )}
        >
          {header.title}
        </m.h1>

        <m.p
          variants={FADE_IN_UP}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('lg'),
            'text-neutral-600'
          )}
        >
          {header.description}
        </m.p>
      </m.div>
    </div>
  );
});

export default CatalogsHeader; 