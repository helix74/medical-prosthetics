'use client';

import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, TRANSITION_PRESETS, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, CONTAINER_STYLES, EFFECTS_STYLES, GRID_STYLES } from '@/theme/styles';
import Link from 'next/link';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { ProductCategory } from '../types';
import { useResponsiveLayout } from '@/hooks/useResponsiveLayout';
import { IMAGE_SIZES } from '@/theme/responsive';

interface CategoryGridProps {
  categories: ProductCategory[];
}

export default memo(function CategoryGrid({ categories }: CategoryGridProps) {
  const { shouldUseCompactLayout } = useResponsiveLayout();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleCategoryInteraction = (categoryId: string) => {
    if (shouldUseCompactLayout) {
      setActiveCategory(activeCategory === categoryId ? null : categoryId);
    }
  };

  return (
    <div className={CONTAINER_STYLES.variants.default}>
      <motion.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        animate="animate"
        className={GRID_STYLES.responsive.threeColumn}
      >
        {categories.map((category, index) => {
          const isActive = activeCategory === category.id;
          const showEffects = !shouldUseCompactLayout || isActive;

          return (
            <motion.div
              key={category.id}
              variants={ANIMATION_VARIANTS.fadeInUp}
              transition={TRANSITION_PRESETS.spring}
              custom={index}
            >
              <Link href={`/produits/${category.slug}`}>
                <div 
                  className={twMerge(
                    'relative bg-white rounded-2xl overflow-hidden',
                    EFFECTS_STYLES.base.shadow.sm,
                    EFFECTS_STYLES.base.transition.base,
                    showEffects && twMerge(
                      EFFECTS_STYLES.hover.transform.lift,
                      EFFECTS_STYLES.base.shadow.lg
                    ),
                    'cursor-pointer'
                  )}
                  onClick={() => handleCategoryInteraction(category.id)}
                >
                  {/* Image */}
                  <div className="aspect-[4/3] relative">
                    <OptimizedImage
                      src={category.image || '/images/placeholder.jpg'}
                      alt={category.name}
                      fill
                      width={400}
                      height={300}
                      className="object-cover"
                      sizes={IMAGE_SIZES.threeColumn}
                      lazyLoadOptions={{
                        threshold: 0.1,
                        rootMargin: '100px'
                      }}
                    />
                    <span className={twMerge(
                      TYPOGRAPHY_STYLES.utils.getBody('base'),
                      'absolute top-4 right-4',
                      'inline-flex items-center px-3 py-1 rounded-full',
                      'bg-[#187baa]/10 text-[#187baa] font-medium'
                    )}>
                      {category.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className={twMerge(
                      TYPOGRAPHY_STYLES.utils.getHeading(4),
                      'text-[#187baa] mb-2 group-hover:text-[#156a93]'
                    )}>
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </h3>
                    <p className={twMerge(
                      TYPOGRAPHY_STYLES.utils.getBody('base'),
                      'text-neutral-700'
                    )}>
                      {category.description}
                    </p>
                  </div>

                  {/* Hover/Touch Overlay */}
                  <div className={twMerge(
                    'absolute inset-0 bg-gradient-to-t from-black/50 to-transparent p-6 flex flex-col justify-end',
                    EFFECTS_STYLES.base.transition.base,
                    showEffects ? 'opacity-100' : 'opacity-0'
                  )}>
                    <span className={twMerge(
                      TYPOGRAPHY_STYLES.utils.getBody('base'),
                      'text-white font-medium'
                    )}>
                      Découvrir la gamme →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}); 