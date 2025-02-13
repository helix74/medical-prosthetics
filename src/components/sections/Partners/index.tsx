import React from 'react';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, CONTAINER_STYLES } from '@/theme/styles';

export default function Partners() {
  return (
    <div className={CONTAINER_STYLES.variants.default}>
      <div className="text-center">
        <h2 className={twMerge(
          TYPOGRAPHY_STYLES.utils.getHeading(2),
          'text-[#187baa] mb-6 text-center'
        )}>
          Nos Partenaires
        </h2>
        <p className={twMerge(
          TYPOGRAPHY_STYLES.utils.getBody('lg'),
          'text-neutral-600',
          'max-w-2xl mx-auto text-center mb-12'
        )}>
          Collaborations avec les meilleurs fabricants internationaux.
        </p>
      </div>
    </div>
  );
} 