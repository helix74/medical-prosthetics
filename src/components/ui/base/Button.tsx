'use client';

import { ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { EFFECTS_STYLES, TYPOGRAPHY_STYLES } from '@/theme/styles';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  isFullWidth?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isFullWidth = false,
  className = '',
  disabled,
  children,
  ...props
}: ButtonProps) {
  const buttonClasses = twMerge(
    // Base styles
    'inline-flex items-center justify-center font-medium rounded-lg',
    EFFECTS_STYLES.base.transition.base,
    // Variant styles
    variant === 'primary' && 'bg-[#187baa] text-white hover:bg-[#156a93]',
    variant === 'secondary' && 'bg-secondary-600 text-white hover:bg-secondary-700',
    variant === 'outline' && 'border border-[#187baa] text-[#187baa] hover:bg-[#187baa]/10',
    variant === 'ghost' && 'text-[#187baa] hover:bg-[#187baa]/10',
    // Size styles
    size === 'sm' && 'px-3 py-2 text-sm',
    size === 'md' && 'px-4 py-2 text-base',
    size === 'lg' && 'px-6 py-3 text-lg',
    // States
    disabled && 'opacity-50 cursor-not-allowed',
    isLoading && 'cursor-wait',
    // Width
    isFullWidth && 'w-full',
    // Custom classes
    className
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center">
          <svg
            className={twMerge(
              'animate-spin h-4 w-4 mr-2 text-current',
              EFFECTS_STYLES.base.transition.base
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span className="sr-only">Chargement</span>
          <span>Chargement...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
}
