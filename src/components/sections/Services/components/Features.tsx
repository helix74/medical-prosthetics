'use client';

import React, { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { ANIMATION_VARIANTS, TRANSITION_PRESETS, STAGGER_CHILDREN } from '@/utils/animations';
import { EFFECTS_STYLES, TYPOGRAPHY_STYLES, GRID_STYLES } from '@/theme/styles';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { useIsTouchDevice } from '@/hooks/useIsTouchDevice';
import { useOrientation } from '@/hooks/useOrientation';
import { useResponsiveLayout } from '@/hooks/useResponsiveLayout';
import { IMAGE_SIZES } from '@/theme/responsive';

interface Feature {
  icon: string;
  title: string;
  description: string;
  image: string;
}

const KEY_FEATURES: Feature[] = [
  {
    icon: "🎯",
    title: "Expertise Technique",
    description: "Notre équipe d'experts vous guide dans le choix des meilleures solutions orthopédiques.",
    image: "https://picsum.photos/id/5/800/600"
  },
  {
    icon: "🛠️",
    title: "Support Complet",
    description: "Un accompagnement à chaque étape, de l'installation à la maintenance.",
    image: "https://picsum.photos/id/6/800/600"
  },
  {
    icon: "📚",
    title: "Formation Continue",
    description: "Des programmes de formation pour maintenir vos compétences à jour.",
    image: "https://picsum.photos/id/7/800/600"
  }
];

export default memo(function ServicesFeatures() {
  const { shouldUseCompactLayout } = useResponsiveLayout();
  const orientation = useOrientation();
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
        className={GRID_STYLES.responsive.threeColumn}
      >
        {KEY_FEATURES.map((feature: Feature, index: number) => {
          const isActive = activeFeatureIndex === index;
          const showEffects = !shouldUseCompactLayout || isActive;

          return (
            <motion.div
              key={feature.title}
              variants={ANIMATION_VARIANTS.fadeInUp}
              transition={TRANSITION_PRESETS.spring}
              className={twMerge(
                'relative flex items-start gap-4',
                'bg-white rounded-2xl p-6',
                EFFECTS_STYLES.base.shadow.sm,
                EFFECTS_STYLES.base.transition.base,
                showEffects && twMerge(
                  EFFECTS_STYLES.hover.transform.lift,
                  EFFECTS_STYLES.base.shadow.lg
                ),
                'cursor-pointer overflow-hidden',
                shouldUseCompactLayout && 'flex-col items-center text-center'
              )}
              onClick={() => handleFeatureInteraction(index)}
            >
              {/* Background Image */}
              <div className={twMerge(
                'absolute inset-0',
                'opacity-0',
                EFFECTS_STYLES.base.transition.base,
                showEffects && 'opacity-5'
              )}>
                <OptimizedImage
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                  sizes={orientation === 'landscape' ? IMAGE_SIZES.threeColumn : '100vw'}
                  lazyLoadOptions={{
                    threshold: 0.1,
                    rootMargin: '100px'
                  }}
                />
              </div>

              <div className={twMerge(
                'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0',
                'bg-[#187baa]/10 text-[#187baa]',
                EFFECTS_STYLES.base.transition.base,
                showEffects && 'bg-[#187baa]/20',
                'relative z-10',
                'landscape:mb-4'
              )}>
                <span className="text-2xl">{feature.icon}</span>
              </div>

              <div className="relative z-10">
                <h3 className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getHeading(3),
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
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}); 