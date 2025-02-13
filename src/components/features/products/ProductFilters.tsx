'use client';

import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import { FADE_IN_UP } from '@/utils/animations';
import { Supplier, PRODUCT_CATEGORIES } from '@/types/products';
import { CommonIcons } from '@/utils/icons';
import { PRODUCT_FILTER_STYLES } from '@/components/ui/products/config';
import { twMerge } from 'tailwind-merge';

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
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChangeAction(value);
  };

  const clearFilters = () => {
    onCategoryChangeAction(null);
    onSupplierChangeAction(null);
    setSearchTerm('');
    onSearchChangeAction('');
  };

  const getCategoryName = (categoryId: string) => {
    return PRODUCT_CATEGORIES.find(c => c.id === categoryId)?.name || '';
  };

  return (
    <div className={twMerge('mb-8', className)}>
      {/* Barre de recherche et bouton filtres */}
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Rechercher un produit..."
            className={PRODUCT_FILTER_STYLES.searchBar.input}
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <button
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          className={PRODUCT_FILTER_STYLES.searchBar.button}
        >
          <CommonIcons.Filter />
          <span>Filtres</span>
        </button>
      </div>

      {/* Panneau de filtres */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isFiltersOpen ? 'auto' : 0, opacity: isFiltersOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className={PRODUCT_FILTER_STYLES.panel.wrapper}>
          <div className={PRODUCT_FILTER_STYLES.panel.header.wrapper}>
            <h3 className={PRODUCT_FILTER_STYLES.panel.header.title}>Filtres</h3>
            <button
              onClick={clearFilters}
              className={PRODUCT_FILTER_STYLES.panel.header.resetButton}
            >
              <CommonIcons.Close />
              <span>Réinitialiser</span>
            </button>
          </div>

          {/* Catégories */}
          <div className={PRODUCT_FILTER_STYLES.section.wrapper}>
            <h4 className={PRODUCT_FILTER_STYLES.section.title}>Catégories</h4>
            <div className={PRODUCT_FILTER_STYLES.section.grid}>
              {PRODUCT_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChangeAction(category.id === selectedCategory ? null : category.id)}
                  className={twMerge(
                    PRODUCT_FILTER_STYLES.category.base,
                    category.id === selectedCategory
                      ? PRODUCT_FILTER_STYLES.category.active
                      : PRODUCT_FILTER_STYLES.category.inactive
                  )}
                >
                  {category.icon && <span>{category.icon}</span>}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Fournisseurs */}
          <div className={PRODUCT_FILTER_STYLES.section.wrapper}>
            <h4 className={PRODUCT_FILTER_STYLES.section.title}>Fournisseurs</h4>
            <div className={PRODUCT_FILTER_STYLES.section.grid}>
              {suppliers.map((supplier) => (
                <button
                  key={supplier.id}
                  onClick={() => onSupplierChangeAction(supplier.id === selectedSupplier ? null : supplier.id)}
                  className={twMerge(
                    PRODUCT_FILTER_STYLES.category.base,
                    supplier.id === selectedSupplier
                      ? PRODUCT_FILTER_STYLES.category.active
                      : PRODUCT_FILTER_STYLES.category.inactive
                  )}
                >
                  <span>{supplier.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filtres actifs */}
      {(selectedCategory || selectedSupplier || searchTerm) && (
        <motion.div
          variants={FADE_IN_UP}
          initial="initial"
          animate="animate"
          className={PRODUCT_FILTER_STYLES.activeTags.wrapper}
        >
          {selectedCategory && (
            <span className={PRODUCT_FILTER_STYLES.activeTags.tag}>
              <span>{getCategoryName(selectedCategory)}</span>
              <button
                onClick={() => onCategoryChangeAction(null)}
                className={PRODUCT_FILTER_STYLES.activeTags.closeButton}
              >
                <CommonIcons.Close className={PRODUCT_FILTER_STYLES.activeTags.closeIcon} />
              </button>
            </span>
          )}
          {selectedSupplier && (
            <span className={PRODUCT_FILTER_STYLES.activeTags.tag}>
              <span>{suppliers.find(s => s.id === selectedSupplier)?.name}</span>
              <button
                onClick={() => onSupplierChangeAction(null)}
                className={PRODUCT_FILTER_STYLES.activeTags.closeButton}
              >
                <CommonIcons.Close className={PRODUCT_FILTER_STYLES.activeTags.closeIcon} />
              </button>
            </span>
          )}
          {searchTerm && (
            <span className={PRODUCT_FILTER_STYLES.activeTags.tag}>
              <span>Recherche: {searchTerm}</span>
              <button
                onClick={() => {
                  setSearchTerm('');
                  onSearchChangeAction('');
                }}
                className={PRODUCT_FILTER_STYLES.activeTags.closeButton}
              >
                <CommonIcons.Close className={PRODUCT_FILTER_STYLES.activeTags.closeIcon} />
              </button>
            </span>
          )}
        </motion.div>
      )}
    </div>
  );
});

export default ProductFilters; 