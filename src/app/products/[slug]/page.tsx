import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MOCK_PRODUCTS, MOCK_SUPPLIERS } from '@/data/mock';
import { Section } from '@/components/ui/layout';
import dynamic from 'next/dynamic';

// Import the component dynamically to resolve TypeScript issues
const ProductDetailClient = dynamic(() => import('./ProductDetailClient'), {
  ssr: true,
});

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const product = MOCK_PRODUCTS.find(p => p.slug === params.slug);
  
  if (!product) {
    return {
      title: 'Produit non trouvé | Delta Médical Plus',
      description: 'Le produit demandé n\'existe pas ou a été déplacé.',
    };
  }
  
  return {
    title: `${product.name} | Delta Médical Plus`,
    description: product.description,
    openGraph: {
      title: `${product.name} | Delta Médical Plus`,
      description: product.description,
      type: 'website',
    },
  };
}

export default function ProductDetailPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  // Find product by slug
  const product = MOCK_PRODUCTS.find(p => p.slug === params.slug);
  
  // If product not found, return 404
  if (!product) {
    notFound();
  }
  
  // Find supplier
  const supplier = MOCK_SUPPLIERS.find(s => s.id === product.supplierId);
  
  if (!supplier) {
    notFound();
  }

  return (
    <Section>
      <ProductDetailClient product={product} supplier={supplier} />
    </Section>
  );
} 