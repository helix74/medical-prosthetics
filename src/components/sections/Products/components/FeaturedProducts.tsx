import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FADE_IN_UP } from '@/utils/animations';
import ProductCard from '@/components/ui/products/ProductCard';
import { FeaturedProductsProps } from '../types';
import { twMerge } from 'tailwind-merge';

export const FeaturedProducts = ({ products, suppliers }: FeaturedProductsProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    const scrollTo = direction === 'left' 
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: scrollTo,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={() => handleScroll('left')}
        className={twMerge(
          'absolute left-4 top-1/2 -translate-y-1/2 z-10',
          'w-10 h-10 rounded-full',
          'bg-white shadow-lg',
          'flex items-center justify-center',
          'text-[#187baa] hover:text-[#156a93]',
          'hover:shadow-xl',
          'transition duration-200',
          'focus:outline-none focus:ring-2 focus:ring-[#187baa]/20'
        )}
        aria-label="Scroll left"
      >
        ←
      </button>
      <button
        onClick={() => handleScroll('right')}
        className={twMerge(
          'absolute right-4 top-1/2 -translate-y-1/2 z-10',
          'w-10 h-10 rounded-full',
          'bg-white shadow-lg',
          'flex items-center justify-center',
          'text-[#187baa] hover:text-[#156a93]',
          'hover:shadow-xl',
          'transition duration-200',
          'focus:outline-none focus:ring-2 focus:ring-[#187baa]/20'
        )}
        aria-label="Scroll right"
      >
        →
      </button>

      {/* Product List */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <div className="flex gap-6 p-4">
          {products.map((product) => {
            const supplier = suppliers.find(s => s.id === product.supplierId);
            if (!supplier) return null;
            
            return (
              <motion.div key={product.id} variants={FADE_IN_UP}>
                <ProductCard 
                  product={product} 
                  supplier={supplier}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}; 