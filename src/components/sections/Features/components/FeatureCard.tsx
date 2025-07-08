import { motion } from 'framer-motion';
import { FADE_IN_UP } from '@/utils/animations';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { FeatureCardProps } from '../types';
import { BackgroundLayers } from '@/components/ui/layout/BackgroundLayers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Image from 'next/image';

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <motion.div variants={FADE_IN_UP}>
      <Link href={feature.link}>
        <BackgroundLayers 
          variant="minimal" 
          className={twMerge(
            'group h-full p-6 rounded-2xl',
            'transition-all duration-300 ease-in-out',
            'hover:shadow-lg'
          )}
        >
          {/* Icon */}
          <div className={twMerge(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6',
            'bg-white border border-gray-100',
            'shadow-sm',
            'transition-all duration-300',
            'group-hover:shadow-md group-hover:scale-110'
          )}>
            {typeof feature.icon === 'string' ? (
              <Image 
                src={feature.icon} 
                alt={feature.title} 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
            ) : (
              <FontAwesomeIcon icon={feature.icon} className="w-6 h-6 text-gray-700" />
            )}
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h3 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(4),
              'text-gray-900 group-hover:text-gray-800',
              'transition-colors duration-300'
            )}>
              {feature.title}
            </h3>
            
            <p className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('base'),
              'text-gray-600 group-hover:text-gray-700',
              'transition-colors duration-300'
            )}>
              {feature.description}
            </p>

            {/* Specifications */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {feature.specs.map((spec) => (
                <div 
                  key={spec.label} 
                  className={twMerge(
                    'p-3 rounded-lg',
                    'bg-white border border-gray-100',
                    'shadow-sm',
                    'transition-all duration-300',
                    'group-hover:shadow-md'
                  )}
                >
                  <div className="text-sm text-gray-600">
                    {spec.label}
                  </div>
                  <div className="font-semibold text-gray-900">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BackgroundLayers>
      </Link>
    </motion.div>
  );
}; 