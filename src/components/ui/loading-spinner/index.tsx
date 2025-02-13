import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8'
};

export const LoadingSpinner = memo(function LoadingSpinner({ 
  className = "",
  size = 'md'
}: LoadingSpinnerProps) {
  return (
    <div className={twMerge(
      'flex items-center justify-center',
      className
    )}>
      <div className={twMerge(
        'animate-spin rounded-full border-2',
        'border-[#187baa]/20 border-t-[#187baa]',
        sizeClasses[size]
      )} />
    </div>
  );
}); 