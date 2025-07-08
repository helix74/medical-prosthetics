'use client';

import { memo, ReactNode } from 'react';
import { m } from 'framer-motion';
import { FADE_IN_UP } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface SectionBadgeProps {
  icon: string | IconProp | ReactNode;
  text: string;
  certification?: string;
  className?: string;
  isIconFontAwesome?: boolean;
}

export const SectionBadge = memo(function SectionBadge({ 
  icon, 
  text,
  certification,
  className,
  isIconFontAwesome = false
}: SectionBadgeProps) {
  return (
    <m.div 
      className={twMerge(
        'inline-flex items-center px-6 py-3 rounded-full mb-8',
        'bg-gradient-to-r from-[#187baa]/10 to-[#187baa]/5',
        'border border-[#187baa]/20',
        'text-[#187baa] font-medium',
        'shadow-lg shadow-[#187baa]/5',
        'backdrop-blur-sm',
        'hover:from-[#187baa]/15 hover:to-[#187baa]/10',
        'hover:border-[#187baa]/30',
        'hover:shadow-xl hover:shadow-[#187baa]/10',
        EFFECTS_STYLES.base.transition.base,
        className
      )}
      variants={FADE_IN_UP}
    >
      {isIconFontAwesome ? (
        <FontAwesomeIcon icon={icon as IconProp} className="mr-2 text-[#187baa]" />
      ) : (
        <span className="mr-2">{icon as ReactNode}</span>
      )}
      {text}
      {certification && (
        <span className="ml-2 px-2 py-0.5 bg-[#187baa]/20 rounded-full text-xs">
          {certification}
        </span>
      )}
    </m.div>
  );
}); 