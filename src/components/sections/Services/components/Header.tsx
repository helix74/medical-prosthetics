'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { ANIMATION_VARIANTS, TRANSITION_PRESETS, STAGGER_CHILDREN } from '@/utils/animations';
import { EFFECTS_STYLES, TYPOGRAPHY_STYLES, CONTAINER_STYLES } from '../../../../theme/styles';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { servicesData } from '../data';
import { BackgroundLayers } from '@/components/ui/layout/BackgroundLayers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default memo(function ServicesHeader() {
  return (
    <div className={twMerge(
      CONTAINER_STYLES.variants.default,
      'text-center relative min-h-[60vh]',
      'py-32 md:py-40 flex items-center'
    )}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <OptimizedImage
          src="https://picsum.photos/id/180/1920/1080"
          alt="Background"
          fill
          width={1920}
          height={1080}
          className="object-cover opacity-5"
          sizes="100vw"
          priority
        />
      </div>

      {/* Content */}
      <motion.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto w-full"
      >
        <motion.div
          variants={ANIMATION_VARIANTS.fadeInUp}
          className={twMerge(
            'inline-flex items-center px-4 py-2 rounded-full mb-6',
            'bg-[#187baa]/10 text-[#187baa]',
            'border border-[#187baa]/20',
            EFFECTS_STYLES.base.transition.base,
            'hover:bg-[#187baa]/20'
          )}
        >
          <FontAwesomeIcon icon={faStar} className="mr-2 text-[#187baa]" />
          {servicesData.header.badge}
        </motion.div>

        <motion.h1
          variants={ANIMATION_VARIANTS.fadeInUp}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(1),
            'text-[#187baa] mb-4'
          )}
        >
          {servicesData.header.title}
        </motion.h1>

        <motion.p
          variants={ANIMATION_VARIANTS.fadeInUp}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('lg'),
            'text-neutral-700 mb-8'
          )}
        >
          {servicesData.header.description}
        </motion.p>
      </motion.div>
    </div>
  );
}); 