'use client';

import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES, CONTAINER_STYLES } from '@/theme/styles';
import { Supplier } from '@/types/products';

export interface ProductFiltersProps {
  suppliers: Supplier[];
  selectedCategory: string | null;
  selectedSupplier: string | null;
  onCategoryChangeAction: (categoryId: string | null) => void;
  onSupplierChangeAction: (supplierId: string | null) => void;
  onSearchChangeAction: (search: string) => void;
  className?: string;
}

const ProductFilters = memo(function ProductFilters({
  suppliers,
  selectedCategory,
  selectedSupplier,
  onCategoryChangeAction,
  onSupplierChangeAction,
  onSearchChangeAction,
  className = ''
}: ProductFiltersProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChangeAction(e.target.value);
  };

  const clearFilters = () => {
    onCategoryChangeAction(null);
    onSupplierChangeAction(null);
    onSearchChangeAction('');
  };

  return (
    <div className={twMerge('w-full space-y-4', className)}>
      {/* Search Input */}
      <div className="relative">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          onChange={handleSearchChange}
          className={twMerge(
            'w-full px-4 py-2 rounded-lg',
            'border border-neutral-200',
            'focus:outline-none focus:ring-2 focus:ring-[#187baa]',
            'text-[#187baa] placeholder-[#187baa]',
            EFFECTS_STYLES.base.transition.base
          )}
        />
      </div>

      {/* Filter Actions */}
      <div className="flex flex-wrap gap-4">
        {/* Category Filter */}
        <select
          value={selectedCategory || ''}
          onChange={(e) => onCategoryChangeAction(e.target.value || null)}
          className={twMerge(
            'flex-1 px-4 py-2 rounded-lg',
            'border border-neutral-200',
            'focus:outline-none focus:ring-2 focus:ring-[#187baa]',
            'text-[#187baa]',
            EFFECTS_STYLES.base.transition.base
          )}
        >
          <option value="">Toutes les catégories</option>
          {/* Add your category options here */}
        </select>

        {/* Supplier Filter */}
        <select
          value={selectedSupplier || ''}
          onChange={(e) => onSupplierChangeAction(e.target.value || null)}
          className={twMerge(
            'flex-1 px-4 py-2 rounded-lg',
            'border border-neutral-200',
            'focus:outline-none focus:ring-2 focus:ring-[#187baa]',
            'text-[#187baa]',
            EFFECTS_STYLES.base.transition.base
          )}
        >
          <option value="">Tous les fournisseurs</option>
          {suppliers.map((supplier) => (
            <option key={supplier.id} value={supplier.id}>
              {supplier.name}
            </option>
          ))}
        </select>

        {/* Clear Filters Button */}
        <button
          onClick={clearFilters}
          className={twMerge(
            'px-4 py-2 rounded-lg',
            'text-[#187baa] hover:bg-[#187baa]/10',
            EFFECTS_STYLES.base.transition.base
          )}
        >
          Réinitialiser
        </button>
      </div>
    </div>
  );
});

export default ProductFilters; 