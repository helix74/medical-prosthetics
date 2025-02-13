'use client';

import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

interface ProductImagePlaceholderProps {
  className?: string;
}

const ProductImagePlaceholder = memo(({ className = '' }: ProductImagePlaceholderProps) => {
  return (
    <div 
      className={twMerge(
        'w-full h-full bg-neutral-100 animate-pulse rounded-lg flex items-center justify-center',
        className
      )}
    >
      <div className="text-center">
        <svg 
          className="w-16 h-16 text-neutral-300 mx-auto mb-4" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" 
          />
        </svg>
        <span className="text-sm text-neutral-400">
          Image du produit non disponible
        </span>
      </div>
    </div>
  );
});

ProductImagePlaceholder.displayName = 'ProductImagePlaceholder';

export default ProductImagePlaceholder; 