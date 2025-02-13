import { IconType } from 'react-icons';
import { BaseComponentProps } from './base';

export interface Specification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: number;
  supplierId: string;
  category: string;
  specifications: Specification[];
  technicalSheet?: string;
  features?: string[];
  status?: 'new' | 'popular' | 'out_of_stock';
}

export interface Supplier {
  id: string;
  name: string;
  logo: string;
  country: string;
  description?: string;
  website?: string;
  contact?: {
    email?: string;
    phone?: string;
    address?: string;
  };
  status?: 'active' | 'inactive';
}

export interface ProductCategory {
  id: string;
  name: string;
  description?: string;
  icon?: IconType;
  slug: string;
  parentId?: string;
  order?: number;
}

export interface ProductCardProps extends BaseComponentProps {
  product: Product;
  supplier: Supplier;
  variant?: 'default' | 'compact' | 'detailed';
  onProductClick?: (product: Product) => void;
}

export interface ProductListProps extends BaseComponentProps {
  products: Product[];
  suppliers: Record<string, Supplier>;
  isLoading?: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
  layout?: 'grid' | 'list';
  itemsPerRow?: 2 | 3 | 4;
}

export interface ProductFilterProps {
  categories: ProductCategory[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  onSearch: (query: string) => void;
  onReset: () => void;
  onSortChange?: (sort: string) => void;
  sortOptions?: Array<{
    value: string;
    label: string;
  }>;
} 