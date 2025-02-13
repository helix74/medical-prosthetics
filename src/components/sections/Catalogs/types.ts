export type Catalog = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  pdfUrl: string;
  category: 'orthopedic' | 'prosthetic';
};

export type CatalogsData = {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  categories: {
    title: string;
    description: string;
    items: string[];
  };
  catalogs: Catalog[];
}; 