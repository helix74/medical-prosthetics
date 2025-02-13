'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';
import { GRID_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { ANIMATION_VARIANTS } from '@/utils/animations';
import { Product, Supplier } from '@/types/products';
import { EmptyState } from '../base/EmptyState';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { FADE_IN_UP } from '@/utils/animations';

interface ProductListProps {
  products: Product[];
  suppliers: Record<string, Supplier>;
  isLoading?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
  className?: string;
}

const ProductList = memo(function ProductList({ 
  products,
  suppliers,
  isLoading = false,
  onLoadMore,
  hasMore = false,
  className = ''
}: ProductListProps) {
  if (isLoading) {
    return <ProductSkeleton />;
  }

  if (!products.length) {
    return (
      <EmptyState
        title="No products found"
        message="Try adjusting your search or filters to find what you're looking for."
      />
    );
  }

  return (
    <motion.div
      variants={FADE_IN_UP}
      initial="hidden"
      animate="visible"
      className={twMerge('space-y-12', className)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} supplier={suppliers[product.supplierId]} />
        ))}
      </div>

      {hasMore && onLoadMore && (
        <div className="flex justify-center">
          <button
            onClick={onLoadMore}
            className={twMerge(
              'px-6 py-2 text-sm font-medium rounded-lg',
              'bg-white text-neutral-700',
              'border border-neutral-200',
              'hover:bg-neutral-50',
              EFFECTS_STYLES.utils.getTransition('base')
            )}
          >
            Load more products
          </button>
        </div>
      )}
    </motion.div>
  );
});

export default ProductList; 