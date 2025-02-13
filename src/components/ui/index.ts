// Base Components
export { default as Button } from './base/Button';
export { default as Input } from './base/Input';
export { default as Card } from './base/Card';
export { EmptyState } from './base/EmptyState';

// Layout Components
export { default as Hero } from './layout/Hero';
export { default as Section } from './layout/Section';
export { default as PageHeader } from './layout/PageHeader';

// Product Components
export { default as ProductCard } from './products/ProductCard';
export { default as ProductList } from './products/ProductList';
export { default as ProductFilters } from './products/ProductFilters';

// Types
export type {
  ButtonProps,
  InputProps,
  CardProps,
  BaseComponentProps
} from '@/types/components/base';

export type {
  Product,
  Supplier,
  ProductCategory,
  ProductCardProps,
  ProductListProps,
  ProductFilterProps
} from '@/types/components/products';

export type {
  Size,
  Variant,
  Status,
  Direction,
  Alignment
} from '@/types/common';
