'use client';

import { memo, useState } from 'react';
import { motion as m } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { FADE_IN_UP, STAGGER_CHILDREN } from '@/utils/animations';
import { EFFECTS_STYLES, TYPOGRAPHY_STYLES, CONTAINER_STYLES, GRID_STYLES } from '@/theme/styles';
import { IMAGE_SIZES } from '@/theme/responsive';
import { useResponsiveLayout } from '@/hooks/useResponsiveLayout';
import { Partner, partners } from '../data';
import { FaExternalLinkAlt } from 'react-icons/fa';

const PartnerCard = memo(function PartnerCard({ partner }: { partner: Partner }) {
  const { shouldUseCompactLayout } = useResponsiveLayout();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <m.div 
      variants={FADE_IN_UP}
      className={twMerge(
        'group relative bg-white rounded-2xl overflow-hidden',
        'border border-[#187baa]/10',
        'shadow-lg shadow-[#187baa]/5',
        'hover:shadow-xl hover:shadow-[#187baa]/10',
        'hover:border-[#187baa]/20',
        'transform hover:-translate-y-1',
        EFFECTS_STYLES.base.transition.base
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-[#187baa]/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Logo Container */}
      <div className="relative h-[200px] w-full p-8 flex items-center justify-center">
        <Image
          src={partner.logo}
          alt={partner.name}
          fill
          className={twMerge(
            'object-contain p-4',
            'transform group-hover:scale-105',
            EFFECTS_STYLES.base.transition.base
          )}
          sizes={IMAGE_SIZES.threeColumn}
          priority
        />
      </div>

      {/* Content */}
      <div className="p-6 border-t border-[#187baa]/10">
        <h3 className={twMerge(
          TYPOGRAPHY_STYLES.utils.getHeading(3),
          'text-[#187baa] mb-3',
          'line-clamp-2'
        )}>
          {partner.name}
        </h3>

        {partner.description && (
          <p className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('base'),
            'text-neutral-600 mb-6',
            'line-clamp-2'
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
              'hover:bg-[#187baa]/10',
              EFFECTS_STYLES.base.transition.base
            )}
          >
            <span className="mr-2">Visiter le site</span>
            <FaExternalLinkAlt className="w-3 h-3" />
          </Link>
        )}
      </div>
    </m.div>
  );
});

const PartnersList = memo(function PartnersList() {
  return (
    <div className={twMerge(CONTAINER_STYLES.variants.default, 'py-20')}>
      <m.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={GRID_STYLES.responsive.threeColumn}
      >
        {partners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </m.div>
    </div>
  );
});

export default PartnersList; 