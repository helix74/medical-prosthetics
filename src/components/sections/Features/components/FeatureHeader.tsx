import { motion } from 'framer-motion';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { FeatureHeaderProps } from '../types';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { BackgroundLayers } from '@/components/ui/layout/BackgroundLayers';

export const FeatureHeader = ({ title, description }: FeatureHeaderProps) => {
  return (
    <BackgroundLayers variant="minimal" className="mb-16">
      <motion.div
        className="text-center max-w-3xl mx-auto relative py-12"
        variants={STAGGER_CHILDREN}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Subtle decorative line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

        <motion.span
          variants={FADE_IN_UP}
          className={twMerge(
            'inline-flex items-center px-4 py-2 rounded-full mb-8',
            'bg-white shadow-sm border border-gray-100',
            'text-gray-600',
            EFFECTS_STYLES.base.transition.base
          )}
        >
          <span className="mr-2">✨</span>
          Nos Avantages
        </motion.span>

        <motion.h2 
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(2),
            'text-gray-900 mb-6'
          )}
          variants={FADE_IN_UP}
        >
          {title}
        </motion.h2>
        
        <motion.p 
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('lg'),
            'text-gray-600'
          )}
          variants={FADE_IN_UP}
        >
          {description}
        </motion.p>

        {/* Subtle decorative line */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-gray-200 via-gray-200 to-transparent" />
      </motion.div>
    </BackgroundLayers>
  );
}; 