'use client';

import { forwardRef, InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'default' | 'error' | 'success';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helper?: string;
  size?: InputSize;
  variant?: InputVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isFullWidth?: boolean;
  isDisabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({
    label,
    error,
    helper,
    size = 'md',
    variant = 'default',
    leftIcon,
    rightIcon,
    isFullWidth = true,
    isDisabled = false,
    className = '',
    id,
    ...props
  }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

    const inputClasses = twMerge(
      // Base styles
      'w-full rounded-lg border border-neutral-200 bg-white',
      EFFECTS_STYLES.base.transition.base,
      // Size styles
      size === 'sm' && 'px-3 py-2 text-sm',
      size === 'md' && 'px-4 py-2 text-base',
      size === 'lg' && 'px-4 py-3 text-lg',
      // Variant styles
      variant === 'default' && 'focus:border-[#187baa] focus:ring-2 focus:ring-[#187baa]/20',
      variant === 'error' && 'border-error-500 focus:border-error-500 focus:ring-2 focus:ring-error-500/20',
      variant === 'success' && 'border-success-500 focus:border-success-500 focus:ring-2 focus:ring-success-500/20',
      // Icon padding
      leftIcon && 'pl-10',
      rightIcon && 'pr-10',
      // States
      isDisabled && 'opacity-50 cursor-not-allowed bg-neutral-50',
      // Custom classes
      className
    );

    return (
      <div className={`${isFullWidth ? 'w-full' : 'w-auto'}`}>
        {label && (
          <label 
            htmlFor={inputId}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('sm'),
              'font-medium mb-1 block',
              error ? 'text-error-500' : 'text-neutral-700'
            )}
          >
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-neutral-500">{leftIcon}</span>
            </div>
          )}
          
          <input
            id={inputId}
            ref={ref}
            className={inputClasses}
            disabled={isDisabled}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={helper || error ? `${inputId}-description` : undefined}
            {...props}
          />
          
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-neutral-500">{rightIcon}</span>
            </div>
          )}
        </div>

        {(helper || error) && (
          <p 
            id={`${inputId}-description`}
            className={twMerge(
              TYPOGRAPHY_STYLES.utils.getBody('sm'),
              'mt-1',
              error ? 'text-error-500' : 'text-neutral-500'
            )}
          >
            {error || helper}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input; 