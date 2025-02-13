'use client';

import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';

export type SectionVariant = 'light' | 'blue' | 'dark' | 'gradient' | 'transparent';
export type SectionSpacing = 'default' | 'compact' | 'spacious';

export interface SectionProps {
  children: React.ReactNode;
  variant?: SectionVariant;
  spacing?: SectionSpacing;
  className?: string;
  withContainer?: boolean;
}

const getVariantStyles = (variant: SectionVariant) => {
  switch (variant) {
    case 'light':
      return 'bg-white';
    case 'blue':
      return 'bg-gradient-to-br from-[#187baa]/10 via-[#187baa]/5 to-transparent';
    case 'dark':
      return 'bg-gradient-to-br from-[#187baa] to-[#156a93] text-white';
    case 'gradient':
      return 'bg-gradient-to-b from-[#187baa]/10 via-white to-[#187baa]/5';
    case 'transparent':
      return 'bg-transparent';
    default:
      return 'bg-white';
  }
};

const getSpacingStyles = (spacing: SectionSpacing) => {
  switch (spacing) {
    case 'compact':
      return 'py-8 sm:py-12';
    case 'spacious':
      return 'py-16 sm:py-20 lg:py-24';
    default:
      return 'py-12 sm:py-16';
  }
};

const Section = memo(function Section({
  children,
  variant = 'light',
  spacing = 'default',
  className = '',
  withContainer = true
}: SectionProps) {
  const content = withContainer ? (
    <div className={CONTAINER_STYLES.variants.default}>
      {children}
    </div>
  ) : children;

  const getBackgroundPattern = (variant: SectionVariant) => {
    switch (variant) {
      case 'light':
        return 'bg-[linear-gradient(#187baa_1px,transparent_1px)] [background-size:40px_40px] opacity-[0.02]';
      case 'blue':
        return 'bg-[radial-gradient(#187baa_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]';
      case 'dark':
        return 'bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:30px_30px] opacity-[0.05]';
      case 'gradient':
        return 'bg-[linear-gradient(45deg,#187baa_1px,transparent_1px)] [background-size:30px_30px] opacity-[0.03]';
      default:
        return '';
    }
  };

  return (
    <section
      className={twMerge(
        'relative',
        getVariantStyles(variant),
        getSpacingStyles(spacing),
        EFFECTS_STYLES.base.transition.base,
        className
      )}
    >
      {/* Background Pattern */}
      {variant !== 'transparent' && (
        <div className={twMerge(
          "absolute inset-0",
          getBackgroundPattern(variant)
        )} />
      )}

      {/* Decorative Elements */}
      {variant !== 'transparent' && (
        <>
          {/* Primary Gradient Blob */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#187baa]/10 to-transparent rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
          
          {/* Secondary Gradient Blob */}
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-tl from-[#187baa]/15 to-transparent rounded-full blur-3xl opacity-15 translate-x-1/3 translate-y-1/3" />
          
          {variant === 'dark' && (
            <>
              {/* Additional Light Effects for Dark Variant */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_0%,transparent_100%)] opacity-10" />
            </>
          )}
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {content}
      </div>
    </section>
  );
});

export default Section; 