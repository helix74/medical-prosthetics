'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { catalogsData } from '../data';
import { twMerge } from 'tailwind-merge';

const CatalogsCategories = memo(function CatalogsCategories() {
  const { categories } = catalogsData;

  return (
    <div className={twMerge(CONTAINER_STYLES.variants.default, 'py-20')}>
      <m.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <m.div variants={FADE_IN_UP} className="text-center mb-12">
          <h2 className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(2),
            'text-[#187baa] mb-4'
          )}>
            {categories.title}
          </h2>
          <p className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('lg'),
            'text-neutral-600'
          )}>
            {categories.description}
          </p>
        </m.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.items.map((category) => (
            <m.button
              key={category}
              variants={FADE_IN_UP}
              className={twMerge(
                'p-4 text-center',
                'bg-white rounded-xl shadow-sm',
                EFFECTS_STYLES.base.transition.base,
                'hover:shadow-md hover:bg-[#187baa]/10'
              )}
            >
              <span className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'font-medium text-[#187baa]'
              )}>
                {category}
              </span>
            </m.button>
          ))}
        </div>
      </m.div>
    </div>
  );
});

export default CatalogsCategories; 