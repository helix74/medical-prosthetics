import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES } from '@/theme/styles';
import { EFFECTS_STYLES } from '@/theme/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faStar, faAward, faCircleCheck, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface BadgeProps {
  text: string;
  icon?: IconProp;
  variant?: 'primary' | 'secondary' | 'neutral' | 'success';
  size?: 'sm' | 'base';
  className?: string;
}

export const Badge = memo(function Badge({ 
  text, 
  icon,
  variant = 'primary',
  size = 'sm',
  className 
}: BadgeProps) {
  // Get appropriate icon based on variant if none provided
  const getDefaultIcon = (): IconProp => {
    switch (variant) {
      case 'primary': return faStar;
      case 'secondary': return faInfoCircle;
      case 'success': return faCircleCheck;
      case 'neutral': return faAward;
      default: return faStar;
    }
  };

  const iconToUse = icon || getDefaultIcon();

  const baseStyles = twMerge(
    size === 'sm' ? TYPOGRAPHY_STYLES.utils.getBody('sm') : TYPOGRAPHY_STYLES.utils.getBody('base'),
    'inline-flex items-center rounded-full font-medium',
    size === 'sm' ? 'px-3 py-1' : 'px-6 py-1.5',
    variant === 'primary' && twMerge(
      'bg-gradient-to-r from-[#187baa]/10 to-[#187baa]/5',
      'text-[#187baa]',
      'border border-[#187baa]/20',
      'shadow-lg shadow-[#187baa]/5',
      'backdrop-blur-sm',
      'hover:from-[#187baa]/15 hover:to-[#187baa]/10',
      'hover:border-[#187baa]/30',
      'hover:shadow-xl hover:shadow-[#187baa]/10',
      EFFECTS_STYLES.base.transition.base
    ),
    variant === 'secondary' && 'bg-secondary-50 text-secondary-600 border border-secondary-100',
    variant === 'neutral' && 'bg-neutral-50 text-neutral-600 border border-neutral-100',
    variant === 'success' && 'bg-success-50 text-success-600 border border-success-100',
    className
  );

  return (
    <div className={baseStyles}>
      <FontAwesomeIcon 
        icon={iconToUse} 
        className={twMerge(
          'mr-2',
          variant === 'primary' ? 'text-[#187baa]' : '',
          variant === 'secondary' ? 'text-secondary-600' : '',
          variant === 'neutral' ? 'text-neutral-600' : '',
          variant === 'success' ? 'text-success-600' : '',
          size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'
        )}
      />
      <span className={twMerge(
        TYPOGRAPHY_STYLES.utils.getBody(size),
        variant === 'primary' ? 'text-primary' : 'text-neutral'
      )}>{text}</span>
    </div>
  );
}); 