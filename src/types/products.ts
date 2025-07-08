import { ReactNode } from 'react';

// Base Types
export interface Specification {
  label: string;
  value: string;
}

export interface BaseEntity {
  id: string;
  name: string;
}

// Main Types
export interface Product extends BaseEntity {
  slug: string;
  description: string;
  image: string;
  images?: string[];
  badge?: string;
  price?: number;
  supplierId: string;
  categoryId: string;
  specifications: Specification[];
  technicalSheet?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Supplier extends BaseEntity {
  logo: string;
  country: string;
  description?: string;
  website?: string;
}

export interface ProductCategory extends BaseEntity {
  slug: string;
  description?: string;
  icon?: ReactNode;
  parentId?: string;
  createdAt: string;
  updatedAt: string;
}

// Filter Types
export interface ProductFilters {
  search?: string;
  categories?: string[];
  suppliers?: string[];
}

// Constants
export const PRODUCT_CATEGORIES: Omit<ProductCategory, 'slug' | 'createdAt' | 'updatedAt'>[] = [
  {
    id: 'protheses',
    name: 'Prothèses',
    description: 'Solutions prothétiques innovantes'
  },
  {
    id: 'ortheses',
    name: 'Orthèses',
    description: 'Appareillages orthopédiques'
  },
  {
    id: 'composants',
    name: 'Composants',
    description: 'Pièces et accessoires'
  }
];
