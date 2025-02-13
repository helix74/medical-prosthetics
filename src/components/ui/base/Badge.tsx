import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES } from '@/theme/styles';
import { EFFECTS_STYLES } from '@/theme/styles';

interface BadgeProps {
  icon?: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'neutral' | 'success';
  size?: 'sm' | 'base';
  className?: string;
}

export const Badge = memo(function Badge({ 
  icon, 
  text, 
  variant = 'primary',
  size = 'sm',
  className 
}: BadgeProps) {
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
      {icon && <span className={twMerge("mr-2", size === 'sm' ? 'text-base' : 'text-lg')}>{icon}</span>}
      {text}
    </div>
  );
}); 