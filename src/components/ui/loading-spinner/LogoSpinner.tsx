import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LogoSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: {
    wrapper: 'w-16 h-16',
    logo: 'w-8 h-8'
  },
  md: {
    wrapper: 'w-24 h-24',
    logo: 'w-12 h-12'
  },
  lg: {
    wrapper: 'w-32 h-32',
    logo: 'w-16 h-16'
  }
};

export const LogoSpinner = memo(function LogoSpinner({ 
  className = "",
  size = 'md'
}: LogoSpinnerProps) {
  return (
    <div className={twMerge(
      'flex items-center justify-center',
      className
    )}>
      <div className={twMerge(
        'relative',
        sizeClasses[size].wrapper
      )}>
        {/* Spinning Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          className={twMerge(
            'absolute inset-0',
            'rounded-full',
            'border-2 border-[#187baa]/20',
            'border-t-[#187baa]'
          )}
        />
        
        {/* Centered Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/logo/logo.svg"
            alt="Delta Med Plus"
            width={40}
            height={40}
            className={twMerge(
              'object-contain',
              sizeClasses[size].logo
            )}
            priority
          />
        </div>
      </div>
    </div>
  );
}); 