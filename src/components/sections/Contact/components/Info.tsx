'use client';

import { memo } from 'react';
import { m } from 'framer-motion';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { contactData } from '../data';
import { twMerge } from 'tailwind-merge';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'location':
      return <MapPinIcon className="w-6 h-6" />;
    case 'phone':
      return <PhoneIcon className="w-6 h-6" />;
    case 'email':
      return <EnvelopeIcon className="w-6 h-6" />;
    case 'clock':
      return <ClockIcon className="w-6 h-6" />;
    default:
      return null;
  }
};

const ContactInfo = memo(function ContactInfo() {
  const { info } = contactData;

  return (
    <div className={twMerge(CONTAINER_STYLES.variants.default, 'py-20')}>
      <m.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <m.div variants={FADE_IN_UP} className="text-center mb-12">
          <h2 className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(2),
            'text-[#187baa] mb-4'
          )}>
            {info.title}
          </h2>
          <p className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('lg'),
            'text-neutral-700'
          )}>
            {info.description}
          </p>
        </m.div>

        <m.div
          variants={FADE_IN_UP}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {info.items.map((item) => (
            <m.div
              key={item.title}
              variants={FADE_IN_UP}
              className={twMerge(
                'flex items-start gap-4 p-6',
                'bg-white rounded-xl',
                EFFECTS_STYLES.base.shadow.sm
              )}
            >
              <div className={twMerge(
                'w-12 h-12 rounded-xl flex items-center justify-center',
                'bg-[#187baa]/10 text-[#187baa]'
              )}>
                {getIcon(item.icon)}
              </div>
              <div>
                <h3 className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getHeading(4),
                  'text-[#187baa] mb-2'
                )}>
                  {item.title}
                </h3>
                <p className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getBody('base'),
                  'text-neutral-700'
                )}>
                  {item.value}
                </p>
              </div>
            </m.div>
          ))}
        </m.div>
      </m.div>
    </div>
  );
});

export default ContactInfo; 