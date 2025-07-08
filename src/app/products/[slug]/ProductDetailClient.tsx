'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Product, Supplier } from '@/types/products';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import Button from '@/components/ui/base/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircleCheck, 
  faCircleInfo, 
  faChevronLeft, 
  faChevronRight, 
  faBuilding,
  faPersonWalking,
  faBriefcaseMedical,
  faScrewdriverWrench,
  faBoxOpen
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

interface ProductDetailClientProps {
  product: Product;
  supplier: Supplier;
}

export default function ProductDetailClient({ product, supplier }: ProductDetailClientProps) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Use product.images if available, otherwise fallback to [product.image]
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];
  
  const handleContactClick = () => {
    setShowContactForm(true);
    // In a real app, you might show a contact form modal or scroll to a contact form
    alert('Formulaire de contact serait affiché ici.');
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };
  
  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };
  
  // Function to check if an image exists (for development purposes)
  const getSupplierLogo = () => {
    if (supplier && supplier.logo) {
      return supplier.logo;
    }
    return null;
  };
  
  const supplierLogo = getSupplierLogo();
  
  return (
    <div className="max-w-6xl mx-auto">
      {/* Breadcrumbs */}
      <div className="mb-8 text-sm text-gray-500">
        <Link href="/products" className="hover:text-[#187baa] cursor-pointer">Produits</Link>
        <span className="mx-2">/</span>
        <Link 
          href={`/products?category=${product.categoryId}`} 
          className="hover:text-[#187baa] cursor-pointer capitalize"
        >
          {product.categoryId === 'protheses' ? 'Prothèses' : 
           product.categoryId === 'ortheses' ? 'Orthèses' : 
           product.categoryId === 'composants' ? 'Composants' : 
           product.categoryId}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-[#187baa]">{product.name}</span>
      </div>
      
      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image Gallery */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col space-y-6"
        >
          {/* Main Image */}
          <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center relative overflow-hidden group">
            <Image
              src={productImages[currentImageIndex]}
              alt={`${product.name} - vue ${currentImageIndex + 1}`}
              width={400}
              height={400}
              className="object-contain max-h-[400px] rounded-xl transition-transform duration-300 group-hover:scale-105"
            />
            
            {/* Navigation arrows */}
            <button 
              onClick={prevImage}
              className="absolute left-4 bg-white/80 hover:bg-white text-[#187baa] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
              aria-label="Image précédente"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 bg-white/80 hover:bg-white text-[#187baa] rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
              aria-label="Image suivante"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
            </button>
          </div>
          
          {/* Thumbnails - improved to show all 8 images */}
          <div className="bg-white rounded-xl p-3 shadow-md">
            <div className="flex flex-wrap gap-2 justify-center">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={twMerge(
                    "relative border-2 rounded-md overflow-hidden w-[70px] h-[70px] transition-all duration-200",
                    currentImageIndex === index 
                      ? "border-[#187baa] shadow-md" 
                      : "border-transparent hover:border-[#187baa]/50 opacity-70 hover:opacity-100"
                  )}
                >
                  <Image
                    src={img}
                    alt={`${product.name} miniature ${index + 1}`}
                    fill
                    sizes="70px"
                    className="object-contain p-1"
                  />
                  {/* Small badge showing the image number */}
                  <span className="absolute bottom-0 right-0 bg-[#187baa] text-white text-xs w-5 h-5 flex items-center justify-center rounded-tl-md">
                    {index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Product Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col space-y-8"
        >
          {/* Header */}
          <div>
            <h1 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(1),
              'text-[#187baa] mb-4'
            )}>
              {product.name}
            </h1>
            
            <div className="flex items-center mb-6">
              <div className="flex items-center bg-white shadow-md rounded-full px-5 py-2.5 border border-gray-100">
                <div className="w-8 h-8 mr-3 flex items-center justify-center overflow-hidden rounded-full bg-white p-1">
                  {supplierLogo ? (
                    <Image
                      src={supplierLogo}
                      alt={supplier.name}
                      width={32}
                      height={32}
                      className="object-contain"
                      priority
                    />
                  ) : (
                    <FontAwesomeIcon 
                      icon={faBuilding} 
                      className="text-[#187baa] w-5 h-5" 
                    />
                  )}
                </div>
                <span className="text-sm font-semibold text-[#187baa]">{supplier.name}</span>
              </div>
              {product.badge && (
                <div className="ml-4 bg-[#187baa]/10 text-[#187baa] px-4 py-2 rounded-full text-sm font-medium">
                  {product.badge}
                </div>
              )}
            </div>
            
            <div className="mb-8">
              {(() => {
                // Split description into sentences
                const sentences = product.description.split(/(?<=\.)(?:\s+)/);
                const firstSentence = sentences[0];
                
                return (
                  <>
                    <p className="text-neutral-700 font-medium text-lg mb-2 text-justify">{firstSentence}</p>
                    {sentences.length > 1 && (
                      <p className="text-neutral-600 text-sm text-justify">
                        {sentences.slice(1).join(' ')}
                      </p>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
          
          {/* Specifications */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(3),
              'text-[#187baa] mb-4'
            )}>
              Spécifications
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.specifications.map((spec, index) => (
                <div key={index} className="flex items-start">
                  <FontAwesomeIcon 
                    icon={faCircleCheck} 
                    className="text-[#187baa] mt-1 mr-3 flex-shrink-0" 
                  />
                  <div>
                    <div className="font-semibold text-[#187baa]">{spec.label}</div>
                    <div className="text-neutral-600">{spec.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Actions */}
          <div className="pt-6">
            <div className="flex items-center mb-6">
              <FontAwesomeIcon icon={faCircleInfo} className="text-[#187baa] mr-3" />
              <p className="text-sm text-neutral-600">
                Pour plus d'informations sur ce produit ou pour passer commande, n'hésitez pas à nous contacter.
              </p>
            </div>
            
            <Button
              variant="primary"
              size="lg"
              className="w-full"
              onClick={handleContactClick}
            >
              Nous contacter pour ce produit
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Additional Sections */}
      <div className="mt-16 space-y-16">
        {/* Key Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(2),
            'text-[#187baa] mb-6'
          )}>
            Caractéristiques Clés
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.id === 'p10' ? (
                // Empower 1B1-2 specific features
                <>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Propulsion Active</h3>
                        <p className="text-neutral-600">
                          Fournit une assistance motorisée lors de la phase de propulsion, réduisant l'effort et augmentant l'efficacité de la marche.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Contrôle Intelligent</h3>
                        <p className="text-neutral-600">
                          Microprocesseur intégré qui analyse en temps réel le mouvement et s'adapte aux différentes vitesses et terrains.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Réduction de la Fatigue</h3>
                        <p className="text-neutral-600">
                          Diminue significativement l'effort et la fatigue lors de la marche, particulièrement sur de longues distances.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Symmétrie Améliorée</h3>
                        <p className="text-neutral-600">
                          Réduit les asymétries de la démarche, favorisant une biomécanique plus naturelle et saine.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : product.id === 'p9' ? (
                // Maverick Comfort AT specific features
                <>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Adaptateur de Torsion Intégré</h3>
                        <p className="text-neutral-600">
                          Permet la rotation naturelle et absorbe les forces de torsion jusqu'à 9°, réduisant les contraintes sur le moignon.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Conception Tout-Terrain</h3>
                        <p className="text-neutral-600">
                          Performance optimale sur des terrains variés grâce à sa structure robuste et flexible en fibre de carbone.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Confort Exceptionnel</h3>
                        <p className="text-neutral-600">
                          Absorption améliorée des chocs et douceur lors de la marche pour un confort quotidien maximal.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Léger et Durable</h3>
                        <p className="text-neutral-600">
                          Construction légère (720g) mais résistante, supportant jusqu'à 150 kg, idéale pour une utilisation active quotidienne.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : product.id === 'p11' ? (
                // 3R80 specific features
                <>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Mécanisme Hydraulique Rotatif</h3>
                        <p className="text-neutral-600">
                          Système hydraulique rotatif innovant offrant un contrôle précis de la phase pendulaire pour une démarche naturelle.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Adaptatif aux Vitesses</h3>
                        <p className="text-neutral-600">
                          S'adapte automatiquement aux différentes vitesses de marche, permettant une locomotion fluide en toutes circonstances.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Construction Robuste</h3>
                        <p className="text-neutral-600">
                          Fabriqué en titane de qualité supérieure pour un équilibre optimal entre solidité et légèreté (1290g).
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Design Éprouvé</h3>
                        <p className="text-neutral-600">
                          Modèle classique d'Ottobock reconnu pour sa fiabilité et sa polyvalence, avec une amplitude de flexion de 150°.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : product.id === 'p12' ? (
                // WalkOn specific features
                <>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Flexibilité Dynamique</h3>
                        <p className="text-neutral-600">
                          La structure en fibre de carbone préimprégnée offre une flexibilité optimale pour soutenir le pied pendant la phase oscillante.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Ultra-Légère</h3>
                        <p className="text-neutral-600">
                          Avec seulement 140g (taille M), cette orthèse est presque imperceptible, minimisant la fatigue même lors d'utilisation prolongée.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Profil Discret</h3>
                        <p className="text-neutral-600">
                          Design fin et anatomique qui se porte confortablement sous les vêtements et s'adapte à la plupart des chaussures.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Marche Physiologique</h3>
                        <p className="text-neutral-600">
                          Favorise un schéma de marche naturel en soutenant le pied pendant la phase oscillante tout en permettant un déroulé physiologique.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : product.id === 'p13' ? (
                // Overlay Transtibial specific features
                <>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Gestion du Volume</h3>
                        <p className="text-neutral-600">
                          Utilise l'air pour gérer les changements de volume des membres résiduels, assurant un ajustement précis et constant.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Confort Amélioré</h3>
                        <p className="text-neutral-600">
                          Minimise les points de pression et améliore le confort grâce à une répartition uniforme de la pression.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Matériaux Durables</h3>
                        <p className="text-neutral-600">
                          Fabriqué à partir de nylon, élasthanne, TPU, acier ressort et silicone pour une durabilité et une fiabilité accrues.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Adaptation Multi-Suspension</h3>
                        <p className="text-neutral-600">
                          Compatible avec diverses méthodes de suspension (attache distale, gaine de suspension, sous vide actif ou passif).
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : product.id === 'p14' ? (
                // Overlay Transfemoral specific features
                <>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Stabilité Optimale</h3>
                        <p className="text-neutral-600">
                          Améliore la stabilité de l'emboîture et le confort pour les amputés fémoraux.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Compensation du Volume</h3>
                        <p className="text-neutral-600">
                          Compense efficacement les variations de volume du membre résiduel pour un ajustement constant.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Flexibilité de Suspension</h3>
                        <p className="text-neutral-600">
                          Compatible avec verrou à goupille, sangle, manchons coussinés, et anneaux d'étanchéité pour le vide actif ou passif.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Confort Durable</h3>
                        <p className="text-neutral-600">
                          Matériaux de haute qualité (Nylon, Élasthanne, TPU, Acier ressort, Silicone) pour un confort et une durabilité exceptionnels.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                // Default features for other products
                <>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Qualité Premium</h3>
                        <p className="text-neutral-600">
                          Produit de haute qualité fabriqué selon les normes les plus strictes pour une performance optimale.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Design Ergonomique</h3>
                        <p className="text-neutral-600">
                          Conception adaptée pour un maximum de confort et d'efficacité pour l'utilisateur.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Matériaux Innovants</h3>
                        <p className="text-neutral-600">
                          Utilisation de matériaux de pointe pour des performances et une durabilité exceptionnelles.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#187baa]/10 p-3 rounded-full mr-4">
                        <FontAwesomeIcon icon={faCircleCheck} className="text-[#187baa] w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-[#187baa] mb-2">Support Expert</h3>
                        <p className="text-neutral-600">
                          Accompagnement personnalisé et support technique pour une intégration parfaite.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </motion.div>
        
        {/* Information about the company/supplier */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="p-8 md:col-span-2">
              <h2 className={twMerge(
                TYPOGRAPHY_STYLES.utils.getHeading(2),
                'text-[#187baa] mb-4'
              )}>
                À Propos de {supplier.name}
              </h2>
              
              {product.id === 'p9' || product.id === 'p10' || product.id === 'p11' || product.id === 'p12' ? (
                <>
                  <p className="text-neutral-700 font-medium mb-4 text-justify">
                    Ottobock est un leader mondial dans le domaine des technologies orthopédiques, offrant des solutions innovantes depuis plus de 100 ans.
                  </p>
                  <p className="text-neutral-600 text-justify">
                    Basée en {supplier.country}, l'entreprise s'engage à améliorer la mobilité et la qualité de vie des personnes. Leurs produits sont développés selon les normes de qualité les plus strictes et bénéficient d'une reconnaissance internationale pour leur excellence technique et leur fiabilité.
                  </p>
                </>
              ) : (
                <>
                  <p className="text-neutral-600 mb-4 text-justify">
                    {supplier.name} est un fabricant renommé de solutions orthopédiques de haute qualité. Basée en {supplier.country}, l'entreprise propose une gamme complète de produits innovants conçus pour améliorer la mobilité et le confort des patients.
                  </p>
                  <p className="text-neutral-600 text-justify">
                    Leurs produits sont développés selon les normes de qualité les plus strictes et bénéficient d'une reconnaissance internationale pour leur excellence technique et leur fiabilité.
                  </p>
                </>
              )}
            </div>
            
            <div className="bg-[#187baa]/5 p-8 flex flex-col justify-center items-center">
              <div className="w-40 h-40 bg-white rounded-full shadow-md p-4 mb-4 flex items-center justify-center border border-gray-100">
                {supplierLogo ? (
                  <Image
                    src={supplierLogo}
                    alt={supplier.name}
                    width={120}
                    height={120}
                    className="object-contain"
                    priority
                  />
                ) : (
                  <div className="flex flex-col items-center">
                    <FontAwesomeIcon 
                      icon={faBuilding} 
                      className="text-[#187baa] w-12 h-12 mb-2" 
                    />
                    <span className="text-xl font-bold text-[#187baa]">{supplier.name}</span>
                  </div>
                )}
              </div>
              
              <div className="text-center bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <div className="font-medium text-[#187baa]">Pays d'origine</div>
                <div className="text-neutral-600 font-semibold">{supplier.country}</div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Technical Details Section */}
        {product.technicalSheet && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              'text-[#187baa] mb-6'
            )}>
              Fiche Technique
            </h2>
            <div className="prose max-w-none bg-white rounded-2xl shadow-lg p-8">
              <div dangerouslySetInnerHTML={{ __html: product.technicalSheet }} />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 