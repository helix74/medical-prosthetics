'use client';

import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

interface ImagePlaceholderProps {
  className?: string;
}

const ImagePlaceholder = memo(({ className = '' }: ImagePlaceholderProps) => {
  return (
    <div 
      className={twMerge(
        'w-full h-full bg-neutral-100 animate-pulse rounded-lg flex items-center justify-center',
        className
      )}
    >
      <svg 
        className="w-12 h-12 text-neutral-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={1.5} 
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
        />
      </svg>
    </div>
  );
});

ImagePlaceholder.displayName = 'ImagePlaceholder';

export default ImagePlaceholder; 