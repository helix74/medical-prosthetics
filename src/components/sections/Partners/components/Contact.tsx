'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { partnersData } from '../data';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const PartnersContact = memo(function PartnersContact() {
  const { contact } = partnersData;

  return (
    <div className="bg-[#187baa]/10 py-20">
      <div className={CONTAINER_STYLES.variants.default}>
        <m.div
          variants={STAGGER_CHILDREN}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <m.h2 
            variants={FADE_IN_UP}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-4'
            )}
          >
            {contact.title}
          </m.h2>

          <m.p 
            variants={FADE_IN_UP}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('lg'),
              'text-[#187baa]/80 mb-12'
            )}
          >
            {contact.description}
          </m.p>

          <m.div 
            variants={FADE_IN_UP}
            className={twMerge(
              'bg-white p-12 rounded-2xl',
              'shadow-sm mb-16',
              EFFECTS_STYLES.base.transition.base,
              'hover:shadow-lg'
            )}
          >
            <h3 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(3),
              'text-[#187baa] mb-8'
            )}>
              Avantages du partenariat
            </h3>
            <ul className="space-y-6 text-left">
              {contact.benefits.map((benefit) => (
                <li 
                  key={benefit}
                  className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getBody('base'),
                    'flex items-center text-[#187baa]/80'
                  )}
                >
                  <span className="mr-4 text-[#187baa]">✓</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </m.div>

          <m.div variants={FADE_IN_UP}>
            <Link
              href={contact.cta.link}
              className={twMerge(
                'inline-flex items-center px-8 py-4 rounded-lg',
                'bg-[#187baa] text-white font-medium',
                EFFECTS_STYLES.base.transition.base,
                'hover:bg-[#156a93]'
              )}
            >
              {contact.cta.text}
            </Link>
          </m.div>
        </m.div>
      </div>
    </div>
  );
});

export default PartnersContact; 