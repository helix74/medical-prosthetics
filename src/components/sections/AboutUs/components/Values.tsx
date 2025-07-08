'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, TRANSITION_PRESETS, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, CONTAINER_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { aboutUsData } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default memo(function Values() {
  const { values } = aboutUsData;

  return (
    <div className={CONTAINER_STYLES.variants.default}>
      <motion.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <motion.div className="text-center mb-12">
          <motion.span
            variants={ANIMATION_VARIANTS.fadeInUp}
            className={twMerge(
              'inline-flex items-center px-4 py-2 rounded-full',
              'bg-[#187baa]/10 text-[#187baa]',
              'border border-[#187baa]/20',
              'mb-6 mx-auto',
              EFFECTS_STYLES.base.transition.base,
              'hover:bg-[#187baa]/20'
            )}
          >
            <FontAwesomeIcon icon={faStar} className="mr-2 text-[#187baa]" />
            {values.badge}
          </motion.span>
          
          <motion.h2
            variants={ANIMATION_VARIANTS.fadeInUp}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6'
            )}
          >
            {values.title}
          </motion.h2>

          <motion.p 
            variants={ANIMATION_VARIANTS.fadeInUp}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('base'),
              'text-neutral-700 mt-6'
            )}
          >
            {values.description}
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          variants={STAGGER_CHILDREN}
          className="space-y-8"
        >
          {values.items.map((value, index) => (
            <motion.div
              key={value.title}
              variants={ANIMATION_VARIANTS.fadeInUp}
              transition={TRANSITION_PRESETS.spring}
              className={twMerge(
                'border-l-4 border-[#187baa]/20 pl-6',
                EFFECTS_STYLES.base.transition.base,
                'hover:border-[#187baa]/40'
              )}
              custom={index}
            >
              <h3 className={twMerge(
                TYPOGRAPHY_STYLES.utils.getHeading(4),
                'text-[#187baa] mb-2'
              )}>
                {value.title}
              </h3>
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('base'),
                'text-neutral-600'
              )}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}); 