'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { twMerge } from 'tailwind-merge';
import { partnersData } from '../data';
import { SectionBadge } from '../../common/SectionBadge';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

const PartnersVision = memo(function PartnersVision() {
  const { vision } = partnersData;

  return (
    <div className={twMerge(CONTAINER_STYLES.variants.default, 'py-24 relative')}>
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#187baa]/5 to-transparent" />
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#187baa]/20 to-transparent rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#187baa]/15 to-transparent rounded-full blur-3xl opacity-20 translate-x-1/3 translate-y-1/3" />
      </div>
      
      <m.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <SectionBadge 
            icon={faHandshake}
            text={vision.badge}
            isIconFontAwesome={true}
          />
          
          <m.h2
            variants={FADE_IN_UP}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent',
              'font-bold tracking-tight'
            )}
          >
            {vision.title}
          </m.h2>
        </div>

        <m.div 
          variants={FADE_IN_UP}
          className="prose prose-lg mx-auto"
        >
          <p className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('lg'),
            'text-[#187baa]/80 leading-relaxed mb-12',
            'bg-gradient-to-b from-white to-[#187baa]/5',
            'p-6 rounded-xl backdrop-blur-sm',
            'border border-[#187baa]/10',
            'shadow-lg shadow-[#187baa]/5',
            'hover:shadow-xl hover:shadow-[#187baa]/10',
            'hover:border-[#187baa]/20',
            EFFECTS_STYLES.base.transition.base
          )}>
            {vision.description}
          </p>

          {vision.content.map((paragraph, index) => (
            <p 
              key={index}
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-neutral-700/90 leading-relaxed mb-8 last:mb-0',
                'bg-gradient-to-b from-white to-[#187baa]/5',
                'p-6 rounded-xl backdrop-blur-sm',
                'border border-[#187baa]/10',
                'shadow-lg shadow-[#187baa]/5',
                'hover:shadow-xl hover:shadow-[#187baa]/10',
                'hover:border-[#187baa]/20',
                EFFECTS_STYLES.base.transition.base
              )}
            >
              {paragraph}
            </p>
          ))}
        </m.div>
      </m.div>
    </div>
  );
});

export default PartnersVision; 