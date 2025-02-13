'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, TRANSITION_PRESETS, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, CONTAINER_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { aboutUsData } from '../data';

export default memo(function History() {
  const { history } = aboutUsData;

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
            <span className="mr-2">📚</span>
            {history.badge}
          </motion.span>
          
          <motion.h2
            variants={ANIMATION_VARIANTS.fadeInUp}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6'
            )}
          >
            {history.title}
          </motion.h2>

          <motion.p 
            variants={ANIMATION_VARIANTS.fadeInUp}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('base'),
              'text-neutral-600 mt-6'
            )}
          >
            {history.description}
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={STAGGER_CHILDREN}
          className="space-y-12"
        >
          {history.timeline.map((event, index) => (
            <motion.div
              key={event.year}
              variants={ANIMATION_VARIANTS.fadeInUp}
              transition={TRANSITION_PRESETS.spring}
              className="relative flex items-start gap-6"
            >
              <div className="flex-none">
                <div className={twMerge(
                  'flex items-center justify-center w-12 h-12 rounded-full',
                  'bg-[#187baa]/10 text-[#187baa] font-bold'
                )}>
                  {event.year}
                </div>
              </div>
              <div>
                <h3 className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getHeading(4),
                  'text-[#187baa] mb-2'
                )}>
                  {event.title}
                </h3>
                <p className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getBody('base'),
                  'text-neutral-600'
                )}>
                  {event.description}
                </p>
              </div>
              {index < history.timeline.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-px bg-[#187baa]/20" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}); 