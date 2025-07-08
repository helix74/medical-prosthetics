'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { servicesData } from '../data';
import { twMerge } from 'tailwind-merge';
import { BackgroundLayers } from '@/components/ui/layout/BackgroundLayers';
import { WhyUsItem } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const WhyUsCard = memo(function WhyUsCard({ item }: { item: WhyUsItem }) {
  return (
    <motion.div
      variants={FADE_IN_UP}
      className={twMerge(
        'group p-6 rounded-2xl',
        'bg-white border border-gray-100',
        'shadow-sm hover:shadow-md',
        'transition-all duration-300'
      )}
    >
      {/* Icon */}
      <div className={twMerge(
        'inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6',
        'bg-white border border-gray-100',
        'shadow-sm',
        'transition-transform duration-300',
        'group-hover:scale-110'
      )}>
        <span className="text-gray-600 text-2xl">
          <FontAwesomeIcon icon={item.icon} className="text-[#187baa]" />
        </span>
      </div>

      {/* Content */}
      <h3 className={twMerge(
        TYPOGRAPHY_STYLES.utils.getHeading(4),
        'text-gray-900 mb-3',
        'group-hover:text-gray-800',
        'transition-colors duration-300'
      )}>
        {item.title}
      </h3>

      <p className={twMerge(
        TYPOGRAPHY_STYLES.utils.getBody('base'),
        'text-gray-600',
        'group-hover:text-gray-700',
        'transition-colors duration-300'
      )}>
        {item.description}
      </p>
    </motion.div>
  );
});

export default memo(function ServicesWhyUs() {
  const { whyUs } = servicesData;

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
              <FontAwesomeIcon icon={faLightbulb} className="mr-2 text-[#187baa]" />
              Pourquoi Nous Choisir
            </motion.span>

            <motion.h2
              variants={FADE_IN_UP}
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getHeading(2),
                'text-gray-900 mb-6'
              )}
            >
              {whyUs.title}
            </motion.h2>

            <motion.p
              variants={FADE_IN_UP}
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-gray-600'
              )}
            >
              {whyUs.description}
            </motion.p>
          </div>

          {/* Grid */}
          <motion.div
            variants={STAGGER_CHILDREN}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyUs.items.map((item) => (
              <WhyUsCard key={item.title} item={item} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </BackgroundLayers>
  );
}); 