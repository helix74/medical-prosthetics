'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { servicesData } from '../data';
import { BackgroundLayers } from '@/components/ui/layout/BackgroundLayers';
import Image from 'next/image';
import Link from 'next/link';
import { Service, ServiceCardProps } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = memo(function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div variants={FADE_IN_UP}>
      <Link href={service.link}>
        <BackgroundLayers 
          variant="minimal" 
          className={twMerge(
            'group h-full rounded-2xl overflow-hidden',
            'transition-all duration-300',
            'hover:shadow-lg'
          )}
        >
          {/* Image */}
          <div className="relative h-48 mb-6">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className={twMerge(
                'object-cover',
                'transition-transform duration-500',
                'group-hover:scale-105'
              )}
            />
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Icon */}
            <div className={twMerge(
              'inline-flex items-center justify-center w-10 h-10 rounded-lg mb-4',
              'bg-white border border-gray-100',
              'shadow-sm',
              'transition-transform duration-300',
              'group-hover:scale-110'
            )}>
              <span className="text-gray-600 text-xl">
                {service.icon}
              </span>
            </div>

            <h3 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(4),
              'text-gray-900 mb-2',
              'group-hover:text-gray-800',
              'transition-colors duration-300'
            )}>
              {service.title}
            </h3>

            <p className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('base'),
              'text-gray-600 mb-4',
              'group-hover:text-gray-700',
              'transition-colors duration-300'
            )}>
              {service.description}
            </p>

            {/* Features List */}
            <ul className="space-y-2">
              {service.features.map((feature: string) => (
                <li 
                  key={feature}
                  className={twMerge(
                    'flex items-center gap-2',
                    'text-sm text-gray-600',
                    'group-hover:text-gray-700',
                    'transition-colors duration-300'
                  )}
                >
                  <span className="w-4 h-4 rounded-full bg-gray-50 flex items-center justify-center text-xs">
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </BackgroundLayers>
      </Link>
    </motion.div>
  );
});

export default memo(function ServicesList() {
  const { services } = servicesData;

  return (
    <BackgroundLayers variant="minimal" className="py-24">
      <div className={CONTAINER_STYLES.variants.default}>
        {/* Header */}
        <motion.div
          variants={STAGGER_CHILDREN}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={FADE_IN_UP}
            className={twMerge(
              'inline-flex items-center px-4 py-2 rounded-full mb-6',
              'bg-white shadow-sm border border-gray-100',
              'text-gray-600',
              EFFECTS_STYLES.base.transition.base
            )}
          >
            <FontAwesomeIcon icon={faTools} className="mr-2 text-[#187baa]" />
            Nos Services Spécialisés
          </motion.span>

          <motion.h2
            variants={FADE_IN_UP}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-gray-900 mb-6'
            )}
          >
            {services.title}
          </motion.h2>

          <motion.p
            variants={FADE_IN_UP}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('lg'),
              'text-gray-600'
            )}
          >
            {services.description}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={STAGGER_CHILDREN}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.items.map((service: Service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </BackgroundLayers>
  );
}); 