import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

interface SectionBackgroundProps {
  variant?: 'light' | 'dark';
}

export const SectionBackground = memo(function SectionBackground({ variant = 'light' }: SectionBackgroundProps) {
  return (
    <div 
      className={twMerge(
        'absolute inset-0',
        variant === 'light' ? 'bg-white' : 'bg-neutral-50'
      )}
      aria-hidden="true"
    />
  );
}); 