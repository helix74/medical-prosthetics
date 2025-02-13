'use client';

import React from 'react';
import { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { EFFECTS_STYLES } from '@/theme/styles';

export type CardVariant = 'elevated' | 'outlined';
export type CardSize = 'sm' | 'md' | 'lg';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  size?: CardSize;
  hover?: boolean;
}

export default function Card({
  variant = 'elevated',
  size = 'md',
  hover = true,
  className,
  children,
  ...props
}: CardProps) {
  const classes = twMerge(
    // Base styles
    'bg-white rounded-lg overflow-hidden',
    // Variant styles
    variant === 'elevated' && twMerge(
      EFFECTS_STYLES.base.shadow.lg,
      hover && EFFECTS_STYLES.hover.shadow.lg
    ),
    variant === 'outlined' && twMerge(
      'border border-neutral-200',
      hover && 'hover:border-neutral-300'
    ),
    // Size styles
    size === 'sm' && 'p-4',
    size === 'md' && 'p-6',
    size === 'lg' && 'p-8',
    // Hover effect
    hover && EFFECTS_STYLES.base.transition.base,
    // Custom classes
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
