'use client';

import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { EFFECTS_STYLES, GRID_STYLES } from '@/theme/styles';

const SkeletonItem = memo(function SkeletonItem() {
  return (
    <div
      className={twMerge(
        'bg-white rounded-2xl overflow-hidden',
        EFFECTS_STYLES.base.shadow.sm
      )}
    >
      {/* Image Skeleton */}
      <div className="relative aspect-[4/3]">
        <div className="absolute inset-0 bg-neutral-100 animate-pulse" />
        {/* Badge Skeleton */}
        <div className={twMerge(
          'absolute top-4 right-4',
          'w-20 h-6 rounded-full',
          'bg-neutral-100 animate-pulse'
        )} />
      </div>

      {/* Content Skeleton */}
      <div className="p-6 space-y-4">
        {/* Title and Description */}
        <div className="space-y-3">
          <div className="h-6 bg-neutral-100 rounded-lg animate-pulse w-3/4" />
          <div className="space-y-2">
            <div className="h-4 bg-neutral-100 rounded-lg animate-pulse" />
            <div className="h-4 bg-neutral-100 rounded-lg animate-pulse w-2/3" />
          </div>
        </div>

        {/* Supplier Info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-neutral-100 rounded-lg animate-pulse flex-shrink-0" />
          <div className="space-y-2 flex-1">
            <div className="h-3 bg-neutral-100 rounded-lg animate-pulse w-1/3" />
            <div className="h-4 bg-neutral-100 rounded-lg animate-pulse w-1/2" />
          </div>
        </div>

        {/* Specifications */}
        <div className="pt-4 border-t border-neutral-100">
          <div className={twMerge(
            GRID_STYLES.base.wrapper,
            'grid-cols-2 gap-4'
          )}>
            {[...Array(4)].map((_, specIndex) => (
              <div key={specIndex} className="space-y-1">
                <div className="h-3 bg-neutral-100 rounded-lg animate-pulse w-2/3" />
                <div className="h-4 bg-neutral-100 rounded-lg animate-pulse w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const ProductSkeleton = memo(function ProductSkeleton() {
  return (
    <div className={GRID_STYLES.responsive.fourColumn}>
      {[...Array(8)].map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </div>
  );
});

export default ProductSkeleton; 