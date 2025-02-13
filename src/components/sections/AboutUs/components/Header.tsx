'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, TRANSITION_PRESETS, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, CONTAINER_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { aboutUsData } from '../data';

const AboutHeader = memo(function AboutHeader() {
  const { header } = aboutUsData;
  
  return (
    <div className={CONTAINER_STYLES.variants.default}>
      <motion.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        animate="animate"
      >
        <motion.span 
          variants={ANIMATION_VARIANTS.fadeInUp}
          transition={TRANSITION_PRESETS.fast}
          className={twMerge(
            'inline-flex items-center px-4 py-2 rounded-full',
            'bg-[#187baa]/10 text-[#187baa]',
            'border border-[#187baa]/20',
            'mb-6 mx-auto',
            EFFECTS_STYLES.base.transition.base,
            'hover:bg-[#187baa]/20'
          )}
        >
          <span className="mr-2">🏢</span>
          {header.badge}
        </motion.span>
        
        <motion.h1
          variants={ANIMATION_VARIANTS.fadeInUp}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(1),
            'text-neutral-800 text-center mb-6'
          )}
        >
          <motion.span 
            variants={ANIMATION_VARIANTS.fadeInUp}
            className="block text-[#187baa]"
          >
            {header.title}
          </motion.span>
        </motion.h1>

        <motion.p 
          variants={ANIMATION_VARIANTS.fadeInUp}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('lg'),
            'text-neutral-600 text-center max-w-3xl mx-auto mb-12'
          )}
        >
          {header.description}
        </motion.p>
      </motion.div>
    </div>
  );
});

export default AboutHeader; 