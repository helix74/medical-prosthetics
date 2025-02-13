'use client';

import { memo } from 'react';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { Product, Supplier } from '@/types/products';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
  supplier: Supplier;
  className?: string;
}

export const ProductCard = ({ product, supplier, className }: ProductCardProps) => {
  return (
    <div
      className={twMerge(
        'w-full',
        'bg-white rounded-2xl overflow-hidden',
        'border border-[#187baa]/10',
        'shadow-lg shadow-[#187baa]/5',
        'hover:shadow-xl hover:shadow-[#187baa]/10',
        'hover:border-[#187baa]/20',
        'transform hover:-translate-y-1',
        EFFECTS_STYLES.base.transition.base,
        className
      )}
    >
      <div className="relative h-[200px] w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="p-6 border-t border-[#187baa]/10">
        <h3 className={twMerge(
          TYPOGRAPHY_STYLES.utils.getHeading(3),
          'text-[#187baa] mb-3',
          'line-clamp-2'
        )}>
          {product.name}
        </h3>
        <p className={twMerge(
          TYPOGRAPHY_STYLES.utils.getBody('base'),
          'text-neutral-600',
          'line-clamp-2'
        )}>
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard; 