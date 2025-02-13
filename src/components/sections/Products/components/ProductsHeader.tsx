'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, TRANSITION_PRESETS, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import Link from 'next/link';

export default memo(function ProductsHeader() {
  return (
    <div className={twMerge(
      CONTAINER_STYLES.variants.default,
      'min-h-[60vh] flex items-center',
      'py-32 md:py-40'
    )}>
      <motion.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        animate="animate"
        className="max-w-4xl w-full"
      >
        <motion.div
          variants={ANIMATION_VARIANTS.fadeInUp}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('base'),
            'inline-flex items-center px-4 py-2 rounded-full mb-6',
            'bg-[#187baa]/10 text-[#187baa]',
            'border border-[#187baa]/20',
            EFFECTS_STYLES.base.transition.base,
            'hover:bg-[#187baa]/20'
          )}
        >
          <span className="mr-2">🏥</span>
          Nos Solutions
        </motion.div>

        <motion.h1
          variants={ANIMATION_VARIANTS.fadeInUp}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(1),
            'text-[#187baa] mb-4'
          )}
        >
          Nos Produits
        </motion.h1>

        <motion.p
          variants={ANIMATION_VARIANTS.fadeInUp}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('base'),
            'text-neutral-700 mb-8'
          )}
        >
          Découvrez notre gamme complète de solutions orthopédiques innovantes, conçues pour répondre à vos besoins spécifiques.
        </motion.p>

        <motion.div
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={TRANSITION_PRESETS.spring}
          className="mt-8"
        >
          <Link 
            href="/produits" 
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('base'),
              'inline-flex items-center px-6 py-3',
              'bg-[#187baa] text-white font-semibold rounded-lg',
              EFFECTS_STYLES.base.transition.base,
              'hover:bg-[#187baa]/20',
              'group'
            )}
          >
            Voir tous nos produits
            <svg
              className={twMerge(
                'w-5 h-5 ml-2',
                'transform transition-transform',
                'group-hover:translate-x-1'
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}); 