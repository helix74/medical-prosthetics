export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface Feature {
  icon: string;
  label: string;
}

export interface HeaderContent {
  title: string;
  subtitle: string;
  description: string;
  badge: {
    text: string;
    certification: string;
  };
}

export interface ProductsHeaderProps {
  headerContent: {
    badge: {
      text: string;
      certification: string;
    };
    title: string;
    description: string;
  };
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface CategoryGridProps {
  categories: Category[];
}

export interface FeaturedProductsProps {
  products: any[]; // Type à définir selon la structure de vos produits
  suppliers: any[]; // Type à définir selon la structure de vos fournisseurs
}

export interface QuickFeaturesProps {
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
  slug: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  features: string[];
  specifications: {
    [key: string]: string;
  };
} 