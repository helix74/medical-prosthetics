'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { servicesData } from '../data';
import { BackgroundLayers } from '@/components/ui/layout/BackgroundLayers';

const ProcessStep = memo(function ProcessStep({ 
  step, 
  index,
  isLast
}: { 
  step: { title: string; description: string }; 
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div 
      variants={FADE_IN_UP}
      className="relative"
    >
      {/* Step number */}
      <div className={twMerge(
        'absolute -left-4 top-0 w-8 h-8',
        'bg-white rounded-full',
        'border border-gray-100',
        'shadow-sm',
        'flex items-center justify-center',
        'text-sm font-medium text-gray-600'
      )}>
        {index + 1}
      </div>

      {/* Content */}
      <div className="pl-8">
        <h3 className={twMerge(
          TYPOGRAPHY_STYLES.utils.getHeading(4),
          'text-gray-900 mb-2'
        )}>
          {step.title}
        </h3>
        <p className={twMerge(
          TYPOGRAPHY_STYLES.utils.getBody('base'),
          'text-gray-600'
        )}>
          {step.description}
        </p>
      </div>

      {/* Connector line */}
      {!isLast && (
        <div className="absolute left-0 top-8 bottom-0 w-px bg-gradient-to-b from-gray-200 to-transparent" />
      )}
    </motion.div>
  );
});

export default memo(function ServicesProcess() {
  const { process } = servicesData;

  return (
    <BackgroundLayers variant="minimal" className="py-24">
      <div className={CONTAINER_STYLES.variants.default}>
        <motion.div
          variants={STAGGER_CHILDREN}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.span
              variants={FADE_IN_UP}
              className={twMerge(
                'inline-flex items-center px-4 py-2 rounded-full mb-6',
                'bg-white shadow-sm border border-gray-100',
                'text-gray-600',
                EFFECTS_STYLES.base.transition.base
              )}
            >
              <span className="mr-2">🔄</span>
              Notre Processus
            </motion.span>

            <motion.h2
              variants={FADE_IN_UP}
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getHeading(2),
                'text-gray-900 mb-6'
              )}
            >
              {process.title}
            </motion.h2>

            <motion.p
              variants={FADE_IN_UP}
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-gray-600'
              )}
            >
              {process.description}
            </motion.p>
          </div>

          {/* Process Steps */}
          <motion.div
            variants={STAGGER_CHILDREN}
            className={twMerge(
              'relative p-8 rounded-2xl',
              'bg-white border border-gray-100',
              'shadow-sm'
            )}
          >
            <div className="space-y-12">
              {process.steps.map((step, index) => (
                <ProcessStep
                  key={step.title}
                  step={step}
                  index={index}
                  isLast={index === process.steps.length - 1}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </BackgroundLayers>
  );
}); 