'use client';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import OptimizedImage from '@/components/ui/OptimizedImage';
import Button from '@/components/ui/base/Button';
import { TYPOGRAPHY_STYLES } from '@/theme/styles';
import { Product, Supplier } from '@/types/products';

interface ProductDetailsProps {
  product: Product;
  supplier: Supplier;
  onContactClickAction: () => void;
  className?: string;
}

export default function ProductDetails({
  product,
  supplier,
  onContactClickAction,
  className = ''
}: ProductDetailsProps) {
  return (
    <motion.div 
      className={twMerge(
        'bg-white rounded-2xl shadow-lg overflow-hidden',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <OptimizedImage
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="object-contain w-full h-full p-4"
        />
      </div>

      {/* Content */}
      <div className="flex-1 px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(2),
            'mb-6'
          )}>
            {product.name}
          </h1>

          <p className={twMerge(
            TYPOGRAPHY_STYLES.utils.getBody('lg'),
            'text-neutral-600'
          )}>
            {product.description}
          </p>
        </div>

        {/* Contact */}
        <div className="mt-12 border-t border-neutral-200 pt-12">
          <Button
            variant="primary"
            size="lg"
            className="w-full"
            onClick={onContactClickAction}
          >
            Nous contacter
          </Button>
        </div>
      </div>
    </motion.div>
  );
} 