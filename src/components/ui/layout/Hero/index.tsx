import { memo } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { FADE_IN_UP } from '@/utils/animations';
import { Badge } from '@/components/ui/base/Badge';
import { BackgroundLayers } from '@/components/ui/layout/BackgroundLayers';
import Image from 'next/image';

interface HeroProps {
  badge?: {
    icon?: string;
    text: string;
  };
  title: string;
  description?: string;
  className?: string;
  variant?: 'centered' | 'default';
  size?: 'sm' | 'md' | 'lg';
  showLogo?: boolean;
  isHomePage?: boolean;
}

const getSizeStyles = (size: HeroProps['size'] = 'md') => {
  switch (size) {
    case 'sm':
      return 'py-32 md:py-40';
    case 'lg':
      return 'py-40 md:py-48';
    default:
      return 'py-36 md:py-44';
  }
};

export const Hero = memo(function Hero({
  badge,
  title,
  description,
  className = '',
  variant = 'default',
  size = 'md',
  showLogo = false,
  isHomePage = false
}: HeroProps) {
  const containerStyles = twMerge(
    CONTAINER_STYLES.variants.default,
    'relative z-10',
    (!isHomePage || variant === 'centered') && 'text-center flex flex-col items-center'
  );

  return (
    <section className={twMerge('relative overflow-hidden', getSizeStyles(size), className)}>
      <BackgroundLayers>
        <div className="absolute inset-0 bg-gradient-to-b from-[#187baa]/5 via-transparent to-transparent" />
      </BackgroundLayers>
      <div className={containerStyles}>
        <div className={twMerge(
          'max-w-3xl w-full',
          (!isHomePage || variant === 'centered') && 'flex flex-col items-center'
        )}>
          {showLogo && (
            <motion.div
              variants={FADE_IN_UP}
              className="mb-8 flex justify-center"
            >
              <Image
                src="/images/logo/logo.svg"
                alt="Delta Med Plus"
                width={100}
                height={100}
                className="w-auto h-20"
                priority
              />
            </motion.div>
          )}
          
          {badge && (
            <motion.div
              variants={FADE_IN_UP}
              className={twMerge(
                'inline-flex items-center px-6 py-3 rounded-full mb-8',
                'bg-[#187baa]/10 text-[#187baa]',
                'border border-[#187baa]/20',
                'backdrop-blur-sm',
                'hover:bg-[#187baa]/20',
                EFFECTS_STYLES.base.transition.base
              )}
            >
              {badge.icon && <span className="mr-2">{badge.icon}</span>}
              <span className="font-medium">{badge.text}</span>
            </motion.div>
          )}

          <motion.h1 
            variants={FADE_IN_UP}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(1),
              'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent',
              'font-bold mb-6',
              (!isHomePage || variant === 'centered') && 'text-center'
            )}
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p 
              variants={FADE_IN_UP}
              className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-neutral-700/90 mt-8',
                'leading-relaxed',
                'bg-white/50 backdrop-blur-sm rounded-2xl p-6',
                'border border-[#187baa]/5',
                'shadow-lg shadow-[#187baa]/5',
                'max-w-2xl w-full',
                (!isHomePage || variant === 'centered') && 'text-center'
              )}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}); 