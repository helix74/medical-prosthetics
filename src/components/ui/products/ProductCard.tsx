'use client';

import { memo } from 'react';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { Product, Supplier } from '@/types/products';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircleCheck, 
  faPersonWalking, 
  faBriefcaseMedical, 
  faScrewdriverWrench, 
  faBoxOpen,
  faBuilding,
  faTag
} from '@fortawesome/free-solid-svg-icons';

interface ProductCardProps {
  product: Product;
  supplier: Supplier;
  className?: string;
}

export const ProductCard = ({ product, supplier, className }: ProductCardProps) => {
  // Function to get category name in French
  const getCategoryName = (categoryId: string) => {
    switch(categoryId) {
      case 'protheses': return 'Prothèse';
      case 'ortheses': return 'Orthèse';
      case 'composants': return 'Composant';
      default: return categoryId;
    }
  };

  // Function to get category icon
  const getCategoryIcon = (categoryId: string) => {
    switch(categoryId) {
      case 'protheses': return faPersonWalking;
      case 'ortheses': return faBriefcaseMedical;
      case 'composants': return faScrewdriverWrench;
      default: return faBoxOpen;
    }
  };

  // Function to get key features based on product ID
  const getKeyFeatures = (product: Product) => {
    switch(product.id) {
      case 'p9': // Maverick Comfort AT
        return [
          'Adaptateur de torsion intégré',
          'Fibre de carbone - 720g',
          'Pour activité K3-K4'
        ];
      case 'p10': // Empower 1B1-2
        return [
          'Propulsion active motorisée',
          'Adaptation automatique à la vitesse',
          'Réduction de l\'effort de marche'
        ];
      case 'p11': // 3R80
        return [
          'Système hydraulique rotatif',
          'Construction en titane - 1290g',
          'Angle de flexion jusqu\'à 150°'
        ];
      case 'p12': // WalkOn
        return [
          'Ultra-légère - 140g',
          'Fibre de carbone préimprégnée',
          'Soutien phase oscillante'
        ];
      default:
        return product.specifications.slice(0, 3).map(spec => `${spec.label}: ${spec.value}`);
    }
  };
  
  const keyFeatures = getKeyFeatures(product);

  return (
    <Link href={`/products/${product.slug}`} className="block w-full">
      <div
        className={twMerge(
          'w-full h-full',
          'bg-white rounded-2xl overflow-hidden',
          'border border-[#187baa]/10',
          'shadow-lg shadow-[#187baa]/5',
          'hover:shadow-xl hover:shadow-[#187baa]/10',
          'hover:border-[#187baa]/20',
          'transform hover:-translate-y-1',
          EFFECTS_STYLES.base.transition.base,
          className
        )}
      >
        <div className="relative h-[220px] w-full bg-white flex items-center justify-center overflow-hidden group">
          <div className="transition-transform duration-300 transform group-hover:scale-110">
            <Image
              src={product.image}
              alt={product.name}
              width={180}
              height={180}
              className="object-contain max-h-[180px] p-4"
              priority
            />
          </div>
          {/* Category badge */}
          <div className="absolute top-3 left-3 bg-[#187baa]/90 text-white text-xs px-2 py-1 md:px-3 md:py-1.5 rounded-full flex items-center">
            <FontAwesomeIcon 
              icon={getCategoryIcon(product.categoryId)} 
              className="mr-1 md:mr-1.5 w-2.5 h-2.5 md:w-3 md:h-3"
            />
            <span className="text-xs">{getCategoryName(product.categoryId)}</span>
          </div>
          {/* Product badge (if exists) */}
          {product.badge && (
            <div className="absolute top-3 right-3 bg-[#187baa]/10 text-[#187baa] text-xs px-2 py-1 md:px-3 md:py-1.5 rounded-full flex items-center font-medium">
              <FontAwesomeIcon 
                icon={faTag} 
                className="mr-1 md:mr-1.5 w-2.5 h-2.5 md:w-3 md:h-3"
              />
              <span className="text-xs">{product.badge}</span>
            </div>
          )}
          {/* Price indicator - removed as requested */}
        </div>

        <div className="p-4 md:p-6 border-t border-[#187baa]/10 flex flex-col h-[calc(100%-220px)]">
          <h3 className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(3),
            'text-[#187baa] mb-2 md:mb-3',
            'line-clamp-2 text-base md:text-lg',
            'leading-tight'
          )}>
            {product.name}
          </h3>
          
          {/* Key features instead of description */}
          <div className="space-y-1 md:space-y-2 flex-grow">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start">
                <FontAwesomeIcon 
                  icon={faCircleCheck} 
                  className="text-[#187baa] mt-0.5 mr-1.5 md:mr-2 text-xs flex-shrink-0" 
                />
                <p className="text-neutral-600 text-xs md:text-sm">{feature}</p>
              </div>
            ))}
          </div>
          
          {/* Supplier info */}
          <div className="flex items-center mt-3 md:mt-4 pt-2 md:pt-3 border-t border-gray-100">
            <FontAwesomeIcon 
              icon={faBuilding} 
              className="text-[#187baa] mr-1.5 text-[10px] md:text-xs" 
            />
            <div className="text-[10px] md:text-xs text-neutral-500">
              Par <span className="text-[#187baa] font-medium">{supplier.name}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 