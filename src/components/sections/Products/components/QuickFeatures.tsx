'use client';

import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { ANIMATION_VARIANTS, TRANSITION_PRESETS, STAGGER_CHILDREN } from '@/utils/animations';
import { EFFECTS_STYLES, TYPOGRAPHY_STYLES } from '@/theme/styles';
import { QuickFeaturesProps } from '../types';
import { useResponsiveLayout } from '@/hooks/useResponsiveLayout';

export default memo(function QuickFeatures({ features }: QuickFeaturesProps) {
  const { shouldUseCompactLayout } = useResponsiveLayout();
  const [activeFeatureIndex, setActiveFeatureIndex] = useState<number>(-1);

  const handleFeatureInteraction = (index: number) => {
    if (shouldUseCompactLayout) {
      setActiveFeatureIndex(activeFeatureIndex === index ? -1 : index);
    }
  };

  return (
    <div className="relative">
      <motion.div
        variants={STAGGER_CHILDREN}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((feature, index) => {
          const isActive = activeFeatureIndex === index;
          const showEffects = !shouldUseCompactLayout || isActive;

          return (
            <motion.div
              key={feature.title}
              variants={ANIMATION_VARIANTS.fadeInUp}
              transition={TRANSITION_PRESETS.spring}
              className={twMerge(
                'bg-white rounded-2xl p-6',
                EFFECTS_STYLES.base.shadow.sm,
                EFFECTS_STYLES.base.transition.base,
                showEffects && twMerge(
                  EFFECTS_STYLES.hover.transform.lift,
                  EFFECTS_STYLES.base.shadow.lg
                ),
                'cursor-pointer'
              )}
              onClick={() => handleFeatureInteraction(index)}
            >
              <div className="flex items-start gap-4">
                <div className={twMerge(
                  'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
                  'bg-[#187baa]/10 text-[#187baa]',
                  EFFECTS_STYLES.base.transition.base,
                  showEffects && 'bg-[#187baa]/20'
                )}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getHeading(4),
                    'text-[#187baa] mb-2'
                  )}>
                    {feature.title}
                  </h3>
                  <p className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getBody('base'),
                    'text-neutral-700'
                  )}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}); 