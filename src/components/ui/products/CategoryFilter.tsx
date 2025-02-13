'use client';

import { ProductCategory, PRODUCT_CATEGORIES } from '@/types/products';
import { motion } from 'framer-motion';
import { useState, memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { useResponsiveLayout } from '@/hooks/useResponsiveLayout';

type CategoryValue = string;

interface Category {
  value: CategoryValue;
  label: string;
  icon: string;
}

const CATEGORY_ICONS: Record<string, string> = {
  protheses: '🦾',
  ortheses: '🦿',
  composants: '⚡',
};

const CATEGORIES: Category[] = [
  { value: 'all', label: 'Tous les produits', icon: '🔍' },
  ...PRODUCT_CATEGORIES.map(category => ({
    value: category.id,
    label: category.name,
    icon: CATEGORY_ICONS[category.id] || '📦'
  }))
];

export interface CategoryFilterProps {
  categories: CategoryValue[];
  selectedCategory: CategoryValue | null;
  onCategoryChange: (category: CategoryValue | null) => void;
  className?: string;
}

const CategoryFilter = memo(({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  className = '' 
}: CategoryFilterProps) => {
  const { shouldUseCompactLayout } = useResponsiveLayout();
  const [hoveredCategory, setHoveredCategory] = useState<CategoryValue | null>(null);
  const [activeTouchCategory, setActiveTouchCategory] = useState<CategoryValue | null>(null);

  const handleCategoryInteraction = (category: CategoryValue) => {
    if (shouldUseCompactLayout) {
      setActiveTouchCategory(activeTouchCategory === category ? null : category);
    } else {
      setHoveredCategory(category);
    }
  };

  const handleCategoryClick = (category: CategoryValue) => {
    onCategoryChange(category === selectedCategory ? null : category);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="flex flex-wrap gap-3">
        {CATEGORIES.filter(category => 
          category.value === 'all' || categories.includes(category.value)
        ).map(category => {
          const isSelected = category.value === selectedCategory;
          const isHovered = !shouldUseCompactLayout && category.value === hoveredCategory;
          const isActive = shouldUseCompactLayout && category.value === activeTouchCategory;
          const showEffects = isSelected || isHovered || isActive;

          return (
            <motion.button
              key={category.value}
              className={`
                relative px-4 py-2 rounded-lg font-medium text-sm
                ${showEffects 
                  ? 'text-white bg-[#187baa]' 
                  : 'text-neutral-600 bg-neutral-100'
                }
                transition-colors duration-200
              `}
              onClick={() => handleCategoryClick(category.value)}
              onHoverStart={() => handleCategoryInteraction(category.value)}
              onHoverEnd={() => !shouldUseCompactLayout && setHoveredCategory(null)}
              whileHover={!shouldUseCompactLayout ? { scale: 1.05 } : undefined}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{category.icon}</span>
                {category.label}
              </span>

              {showEffects && (
                <motion.div
                  className={`
                    absolute inset-0 rounded-lg
                    ${isSelected ? 'bg-[#187baa]' : 'bg-[#187baa]/80'}
                  `}
                  layoutId="categoryHighlight"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                  }}
                  style={{ zIndex: -1 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
});

CategoryFilter.displayName = 'CategoryFilter';

export default CategoryFilter; 