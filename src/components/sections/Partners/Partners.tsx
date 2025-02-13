'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, CONTAINER_STYLES, EFFECTS_STYLES, GRID_STYLES } from '@/theme/styles';
import { Section } from '@/components/ui/layout';
import { partners, partnersData } from './data';
import Image from 'next/image';
import Link from 'next/link';

interface Partner {
  id: string;
  name: string;
  logo: string;
  description?: string;
  website?: string;
}

const Partners = memo(function Partners() {
  return (
    <Section variant="light">
      <motion.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        animate="animate"
        className={twMerge(
          'text-center max-w-4xl mx-auto mb-16',
          'px-4 sm:px-6 lg:px-0'
        )}
      >
        <motion.span
          variants={FADE_IN_UP}
          className={twMerge(
            'inline-flex items-center px-4 py-2 rounded-full',
            'bg-[#187baa]/10 text-[#187baa]',
            'border border-[#187baa]/20',
            'mb-6 mx-auto',
            EFFECTS_STYLES.base.transition.base,
            'hover:bg-[#187baa]/20'
          )}
        >
          <span className="mr-2">🤝</span>
          {partnersData.header.badge}
        </motion.span>

        <motion.h2 
          variants={FADE_IN_UP}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(2),
            'text-neutral-800 mb-6'
          )}
        >
          {partnersData.header.title}
        </motion.h2>
        <motion.p 
          variants={FADE_IN_UP}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('lg'),
            'text-neutral-600'
          )}
        >
          {partnersData.header.description}
        </motion.p>
      </motion.div>

      <motion.div 
        variants={STAGGER_CHILDREN}
        className={GRID_STYLES.responsive.threeColumn}
      >
        {partners.map((partner: Partner, index: number) => (
          <motion.div
            key={partner.id}
            variants={FADE_IN_UP}
            className={twMerge(
              'bg-white rounded-2xl p-8',
              EFFECTS_STYLES.base.shadow.sm,
              EFFECTS_STYLES.base.transition.base,
              'group hover:shadow-xl hover:-translate-y-1'
            )}
            custom={index}
          >
            <div className="relative h-20 mb-6">
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>

            <h3 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(3),
              'text-[#187baa] mb-4'
            )}>
              {partner.name}
            </h3>

            {partner.description && (
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('base'),
                'text-neutral-600 mb-6'
              )}>
                {partner.description}
              </p>
            )}

            {partner.website && (
              <Link
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className={twMerge(
                  'inline-flex items-center justify-center w-full',
                  'px-6 py-2 rounded-lg',
                  'border border-[#187baa] text-[#187baa]',
                  EFFECTS_STYLES.base.transition.base,
                  'hover:bg-[#187baa]/10'
                )}
              >
                Visiter le site
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
});

export default Partners; 