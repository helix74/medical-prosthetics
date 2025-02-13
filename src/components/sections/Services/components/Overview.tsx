'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { ANIMATION_VARIANTS, STAGGER_CHILDREN } from '@/utils/animations';
import { EFFECTS_STYLES, TYPOGRAPHY_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { servicesData } from '../data';
import { BackgroundLayers } from '@/components/ui/layout/BackgroundLayers';

export default memo(function ServicesOverview() {
  return (
    <BackgroundLayers variant="minimal" className="py-24">
      <div className={CONTAINER_STYLES.variants.default}>
        <motion.div
          variants={STAGGER_CHILDREN}
          initial="initial"
          animate="animate"
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {/* Badge */}
          <motion.div
            variants={ANIMATION_VARIANTS.fadeInUp}
            className={twMerge(
              'inline-flex items-center px-4 py-2 rounded-full mb-6',
              'bg-white shadow-sm border border-gray-100',
              'text-gray-600',
              EFFECTS_STYLES.base.transition.base
            )}
          >
            <span className="mr-2">🏥</span>
            Services Médicaux Spécialisés
          </motion.div>

          <motion.h2
            variants={ANIMATION_VARIANTS.fadeInUp}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-gray-900 mb-6'
            )}
          >
            {servicesData.overview.title}
          </motion.h2>

          <motion.p
            variants={ANIMATION_VARIANTS.fadeInUp}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('lg'),
              'text-gray-600'
            )}
          >
            {servicesData.overview.description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={STAGGER_CHILDREN}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {servicesData.overview.content.map((item, index) => (
            <motion.div
              key={index}
              variants={ANIMATION_VARIANTS.fadeInUp}
              className={twMerge(
                'group p-6 rounded-2xl',
                'bg-white border border-gray-100',
                'shadow-sm hover:shadow-md',
                'transition-all duration-300'
              )}
            >
              <div className="flex items-start gap-4">
                <div className={twMerge(
                  'flex-shrink-0 w-10 h-10 rounded-lg',
                  'bg-gray-50 border border-gray-100',
                  'flex items-center justify-center',
                  'group-hover:scale-110',
                  'transition-transform duration-300'
                )}>
                  <span className="text-gray-600">✓</span>
                </div>

                <p className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getBody('base'),
                  'text-gray-600 group-hover:text-gray-900',
                  'transition-colors duration-300'
                )}>
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </BackgroundLayers>
  );
}); 