'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, CONTAINER_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { aboutUsData } from '../data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';

const MissionVision = memo(function MissionVision() {
  return (
    <div className={CONTAINER_STYLES.variants.default}>
      <motion.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        animate="animate"
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <motion.span
          variants={FADE_IN_UP}
          className={twMerge(
            'inline-flex items-center px-4 py-2 rounded-full',
            'bg-[#187baa]/10 text-[#187baa]',
            'border border-[#187baa]/20',
            'mb-6 mx-auto',
            EFFECTS_STYLES.base.transition.base,
            'hover:bg-[#187baa]/20'
          )}
        >
          <FontAwesomeIcon icon={faBullseye} className="mr-2 text-[#187baa]" />
          Notre Mission
        </motion.span>

        <motion.h2
          variants={FADE_IN_UP}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(2),
            'text-[#187baa] mb-6'
          )}
        >
          Notre Mission & Vision
        </motion.h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          variants={FADE_IN_UP}
          className="text-center"
        >
          <h3 className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(3),
            'text-[#187baa] mb-4'
          )}>
            Notre Mission
          </h3>
          <p className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('base'),
            'text-neutral-700'
          )}>
            Fournir des solutions orthopédiques innovantes et de haute qualité pour améliorer la vie de nos patients.
          </p>
        </motion.div>

        <motion.div
          variants={FADE_IN_UP}
          className="text-center"
        >
          <h3 className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(3),
            'text-[#187baa] mb-4'
          )}>
            Notre Vision
          </h3>
          <p className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('base'),
            'text-neutral-700'
          )}>
            Devenir le leader reconnu dans le domaine des solutions orthopédiques en Tunisie et en Afrique.
          </p>
        </motion.div>
      </div>
    </div>
  );
});

export default MissionVision; 