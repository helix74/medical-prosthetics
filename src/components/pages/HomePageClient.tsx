'use client';

import { Suspense, memo, useRef, useState, useCallback, useEffect } from 'react';
import { LazyMotion, domAnimation, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { twMerge } from 'tailwind-merge';
import { CONTAINER_STYLES, TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import { ANIMATION_VARIANTS } from '@/utils/animations';
import { MOCK_PRODUCTS, MOCK_SUPPLIERS } from '@/data/mock';
import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/base/Badge';
import { BackgroundLayers } from '@/components/ui/layout/BackgroundLayers';
import { LogoSpinner } from '@/components/ui/loading-spinner/LogoSpinner';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { 
  faStar, 
  faBoxes, 
  faWrench, 
  faBook, 
  faHandshake,
  faBookOpen,
  faArrowRight,
  faFileAlt,
  faPhone,
  faUsers,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CATALOGS } from '@/components/sections/Catalogs/data';

// Loading components
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#187baa]/5 to-white">
    <LogoSpinner size="lg" />
  </div>
);
LoadingSpinner.displayName = 'LoadingSpinner';

// Lazy load components with better error boundaries
const Hero = dynamic(() => import('@/components/sections/Hero'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const WhyChooseUs = dynamic(() => import('@/components/sections/AboutUs/components/WhyChooseUs'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const ProductCard = dynamic(() => import('@/components/ui/products/ProductCard'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const ServicesGrid = dynamic(() => import('@/components/sections/Services/components/ServicesGrid'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

const PartnersList = dynamic(() => import('@/components/sections/Partners/components/List'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

// Section Wrapper Component
const Section = memo(function Section({ 
  children,
  className = "",
  withContainer = true,
  title,
  description,
  badge,
  isHero = false
}: { 
  children: React.ReactNode;
  className?: string;
  withContainer?: boolean;
  title?: string;
  description?: string;
  badge?: { icon: IconProp; text: string; }
  isHero?: boolean;
}) {
  const content = (
    <div className={twMerge(
      'relative isolate overflow-hidden', 
      // Only apply extra padding to non-hero sections
      !isHero && 'py-8 md:py-12 lg:py-16',
      className
    )}>
      <BackgroundLayers variant="minimal">
        <div className="absolute inset-0 bg-gradient-to-b from-[#187baa]/5 via-transparent to-transparent" />
      </BackgroundLayers>
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Header if title exists */}
        {title && (
          <div className="text-center mb-8 md:mb-12 lg:mb-16 relative">
            {badge && (
              <div className={twMerge(
                'inline-flex items-center px-4 py-2 md:px-6 md:py-3 rounded-full mb-6 md:mb-8 lg:mb-12',
                'bg-gradient-to-r from-[#187baa]/10 to-[#187baa]/5',
                'border border-[#187baa]/20',
                'backdrop-blur-sm',
                'hover:from-[#187baa]/15 hover:to-[#187baa]/10',
                EFFECTS_STYLES.base.transition.base
              )}>
                <FontAwesomeIcon icon={badge.icon} className="mr-2 text-[#187baa]" />
                <span className="text-[#187baa] font-medium text-sm md:text-base">{badge.text}</span>
              </div>
            )}

            <h2 className={twMerge(
              TYPOGRAPHY_STYLES.utils.getHeading(2),
              isHero 
                ? 'bg-gradient-to-r from-[#187baa] to-[#156a93] bg-clip-text text-transparent font-bold'
                : 'text-[#187baa]/90',
              'mb-3 md:mb-4'
            )}>
              {title}
            </h2>
            {description && (
              <p className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('lg'),
                'text-neutral-600/90 mt-2',
                'leading-relaxed',
                'max-w-md md:max-w-xl lg:max-w-2xl mx-auto',
                'text-sm md:text-base lg:text-lg'
              )}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* Main Content */}
        {withContainer ? (
          <div className={CONTAINER_STYLES.variants.default}>
            {children}
          </div>
        ) : children}
      </div>
    </div>
  );

  return content;
});

// Product Categories Data
const categories = [
  {
    id: 'protheses',
    name: 'Prothèses',
    description: 'Solutions prothétiques innovantes pour membres supérieurs et inférieurs',
    icon: '🦿',
    image: '/images/products/protheses.jpg',
    slug: 'protheses'
  },
  {
    id: 'ortheses',
    name: 'Orthèses',
    description: 'Appareillages orthopédiques sur mesure pour un soutien optimal',
    icon: '🦾',
    image: '/images/products/ortheses.jpg',
    slug: 'ortheses'
  },
  {
    id: 'composants',
    name: 'Composants',
    description: 'Pièces et accessoires de haute qualité pour vos appareillages',
    icon: '⚙️',
    image: '/images/products/composants.jpg',
    slug: 'composants'
  }
];

// Smart CTA Component
const SmartCTA = memo(function SmartCTA({ 
  title, 
  description, 
  primaryAction,
  secondaryAction,
  className = ""
}: { 
  title: string;
  description: string;
  primaryAction: { text: string; href: string; };
  secondaryAction?: { text: string; href: string; };
  className?: string;
}) {
  // Helper function to determine which icon to use based on the action text
  const getActionIcon = (text: string): IconProp => {
    const lowerText = text.toLowerCase();
    if (lowerText.includes('contact') || lowerText.includes('parl')) return faPhone;
    if (lowerText.includes('produit') || lowerText.includes('voir')) return faBoxes;
    if (lowerText.includes('catalogue') || lowerText.includes('télécharger')) return faBook;
    if (lowerText.includes('service')) return faWrench;
    if (lowerText.includes('nous') || lowerText.includes('savoir')) return faUsers;
    return faArrowRight;
  };

  return (
    <div className={twMerge(
      'relative overflow-hidden rounded-3xl',
      'bg-gradient-to-br from-[#187baa] via-[#187baa] to-[#156a93]',
      'px-6 py-10 sm:px-8 md:px-12 lg:px-16',
      'sm:py-12 md:py-16 lg:py-20',
      'text-center shadow-xl shadow-[#187baa]/20',
      'border border-white/10',
      className
    )}>
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className={twMerge(
          TYPOGRAPHY_STYLES.utils.getHeading(2),
          'text-white font-bold mb-4 sm:mb-6',
          'text-2xl sm:text-3xl md:text-4xl',
          'bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent'
        )}>
          {title}
        </h2>
        <p className={twMerge(
          TYPOGRAPHY_STYLES.utils.getBody('lg'),
          'text-white/90 mb-6 sm:mb-8 md:mb-10',
          'text-sm sm:text-base',
          'leading-relaxed'
        )}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href={primaryAction.href}
            className={twMerge(
              'inline-flex items-center justify-center',
              'px-6 py-3 sm:px-8 sm:py-4 rounded-xl',
              'text-sm sm:text-base',
              'bg-white text-[#187baa] font-semibold',
              'shadow-lg shadow-black/5',
              'hover:bg-[#187baa]/10 hover:text-white',
              'backdrop-blur-sm',
              EFFECTS_STYLES.base.transition.base,
              'w-full sm:w-auto'
            )}
          >
            <FontAwesomeIcon icon={getActionIcon(primaryAction.text)} className="mr-2" />
            {primaryAction.text}
          </Link>
          {secondaryAction && (
            <Link
              href={secondaryAction.href}
              className={twMerge(
                'inline-flex items-center justify-center',
                'px-6 py-3 sm:px-8 sm:py-4 rounded-xl',
                'text-sm sm:text-base',
                'bg-white/10 text-white font-semibold',
                'border border-white/20',
                'hover:bg-white/20',
                'backdrop-blur-sm',
                EFFECTS_STYLES.base.transition.base,
                'w-full sm:w-auto'
              )}
            >
              <FontAwesomeIcon icon={getActionIcon(secondaryAction.text)} className="mr-2" />
              {secondaryAction.text}
            </Link>
          )}
        </div>
      </div>
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-[#156a93]/40 to-transparent rounded-full filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3" />
    </div>
  );
});

// Add HorizontalProductScroll component
const HorizontalProductScroll = memo(function HorizontalProductScroll({ 
  products, 
  suppliers 
}: { 
  products: any[],
  suppliers: Record<string, any>
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const updateScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      return () => scrollContainer.removeEventListener('scroll', updateScrollButtons);
    }
  }, [updateScrollButtons]);

  const handleScroll = useCallback((direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="relative">
      {/* Base Layer - Main Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#187baa]/5 via-white to-[#187baa]/5 rounded-3xl" />
      
      {/* Middle Layer - Decorative Elements */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden">
        {/* Gradient Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#187baa_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-[0.08]" />
        
        {/* Top Left Blob */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#187baa]/10 to-transparent rounded-full blur-3xl opacity-40" />
        
        {/* Bottom Right Blob */}
        <div className="absolute -bottom-32 -right-32 w-[700px] h-[700px] bg-gradient-to-tl from-[#187baa]/15 to-transparent rounded-full blur-3xl opacity-30" />
        
        {/* Center Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#187baa]/5 to-transparent rounded-full blur-3xl opacity-50" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Scroll Shadow Overlays */}
        <div className={twMerge(
          'absolute inset-y-0 left-0 w-32 pointer-events-none z-10',
          'bg-gradient-to-r from-white to-transparent',
          showLeftButton ? 'opacity-100' : 'opacity-0',
          EFFECTS_STYLES.base.transition.base
        )} />
        <div className={twMerge(
          'absolute inset-y-0 right-0 w-32 pointer-events-none z-10',
          'bg-gradient-to-l from-white to-transparent',
          showRightButton ? 'opacity-100' : 'opacity-0',
          EFFECTS_STYLES.base.transition.base
        )} />

        {/* Scroll Buttons */}
        {showLeftButton && (
          <button
            onClick={() => handleScroll('left')}
            className={twMerge(
              'absolute left-4 top-1/2 -translate-y-1/2 z-20',
              'w-12 h-12 rounded-full',
              'bg-white shadow-lg shadow-[#187baa]/10',
              'border border-[#187baa]/20',
              'text-[#187baa]',
              'hover:bg-[#187baa]/10',
              'backdrop-blur-sm',
              EFFECTS_STYLES.base.transition.base
            )}
            aria-label="Scroll left"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        {showRightButton && (
          <button
            onClick={() => handleScroll('right')}
            className={twMerge(
              'absolute right-4 top-1/2 -translate-y-1/2 z-20',
              'w-12 h-12 rounded-full',
              'bg-white shadow-lg shadow-[#187baa]/10',
              'border border-[#187baa]/20',
              'text-[#187baa]',
              'hover:bg-[#187baa]/10',
              'backdrop-blur-sm',
              EFFECTS_STYLES.base.transition.base
            )}
            aria-label="Scroll right"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className={twMerge(
            'flex gap-6 overflow-x-auto pb-8 -mb-8 px-4',
            'scroll-smooth scrollbar-none'
          )}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-none w-80"
            >
              <ProductCard
                product={product}
                supplier={suppliers[product.supplierId]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

const HorizontalCatalogScroll = memo(function HorizontalCatalogScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      const newScrollPosition = direction === 'left' 
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;
      
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <button
        onClick={() => handleScroll('left')}
        className={twMerge(
          'absolute left-4 top-1/2 -translate-y-1/2 z-10',
          'w-10 h-10 rounded-full',
          'bg-white shadow-lg',
          'flex items-center justify-center',
          'text-[#187baa] hover:text-[#156a93]',
          'hover:shadow-xl',
          'transition duration-200',
          'focus:outline-none focus:ring-2 focus:ring-[#187baa]/20'
        )}
        aria-label="Scroll left"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={() => handleScroll('right')}
        className={twMerge(
          'absolute right-4 top-1/2 -translate-y-1/2 z-10',
          'w-10 h-10 rounded-full',
          'bg-white shadow-lg',
          'flex items-center justify-center',
          'text-[#187baa] hover:text-[#156a93]',
          'hover:shadow-xl',
          'transition duration-200',
          'focus:outline-none focus:ring-2 focus:ring-[#187baa]/20'
        )}
        aria-label="Scroll right"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Catalog List */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        <div className="flex gap-6 p-4">
          {CATALOGS.map((catalog) => (
            <div
              key={catalog.id}
              className={twMerge(
                'flex-none w-[300px]',
                'scroll-snap-align-start'
              )}
            >
              <div className={twMerge(
                'h-full bg-white rounded-2xl overflow-hidden',
                'border border-[#187baa]/10',
                'shadow-lg shadow-[#187baa]/5',
                'hover:shadow-xl hover:shadow-[#187baa]/10',
                'hover:border-[#187baa]/20',
                'transform hover:-translate-y-1',
                EFFECTS_STYLES.base.transition.base
              )}>
                <div className="relative h-48 w-full bg-white p-6">
                  <Image
                    src={catalog.imageUrl}
                    alt={catalog.title}
                    fill
                    className="object-contain p-4"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge
                      text={catalog.category === 'orthopedic' ? 'Orthopédique' : 'Prothétique'}
                      variant="primary"
                      className="bg-white/90 backdrop-blur-sm text-[#187baa]"
                    />
                  </div>
                </div>
                <div className="p-6 border-t border-[#187baa]/10">
                  <h3 className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getHeading(3),
                    'text-[#187baa] mb-3',
                    'line-clamp-2 h-[3.5rem]'
                  )}>
                    {catalog.title}
                  </h3>
                  <p className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getBody('base'),
                    'text-neutral-600 mb-6',
                    'line-clamp-2 h-[3rem]'
                  )}>
                    {catalog.description}
                  </p>
                  <a
                    href={catalog.pdfUrl}
                    download
                    className={twMerge(
                      'inline-flex items-center justify-center w-full px-5 py-2.5',
                      'bg-[#187baa] text-white rounded-xl',
                      'hover:bg-[#156a93]',
                      'shadow-md shadow-[#187baa]/10',
                      'hover:shadow-lg hover:shadow-[#187baa]/20',
                      EFFECTS_STYLES.base.transition.base
                    )}
                  >
                    <FontAwesomeIcon icon={faBook} className="w-5 h-5 mr-2" />
                    Télécharger le catalogue
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default memo(function HomePageClient() {
  const suppliersRecord = MOCK_SUPPLIERS.reduce((acc, supplier) => {
    acc[supplier.id] = supplier;
    return acc;
  }, {} as Record<string, any>);

  return (
    <LazyMotion features={domAnimation}>
      <main className="relative overflow-hidden bg-white">
        <Suspense fallback={<LoadingSpinner />}>
          {/* Hero Section */}
          <Section isHero>
            <Hero />
          </Section>

          {/* Why Choose Us Section */}
          <Section
            badge={{ icon: faStar, text: "Pourquoi nous choisir" }}
            title="Notre Engagement"
            description="Delta Med Plus s'engage à être votre partenaire de confiance en fournissant des solutions orthopédiques innovantes et un service d'excellence."
          >
            <WhyChooseUs />
          </Section>

          {/* Products Section */}
          <Section
            title="Nos Produits"
            description="Découvrez notre gamme complète de solutions orthopédiques innovantes."
            badge={{ icon: faBoxes, text: "Produits" }}
          >
            <HorizontalProductScroll
              products={MOCK_PRODUCTS}
              suppliers={suppliersRecord}
            />
          </Section>

          {/* Primary CTA Section */}
          <Section>
            <SmartCTA
              title="Découvrez notre gamme complète"
              description="Explorez notre catalogue complet de produits orthopédiques et trouvez les solutions adaptées à vos besoins."
              primaryAction={{
                text: "Voir tous nos produits",
                href: "/produits"
              }}
              secondaryAction={{
                text: "Télécharger le catalogue",
                href: "/catalogues"
              }}
            />
          </Section>

          {/* Services Section */}
          <Section
            badge={{ icon: faWrench, text: "Nos services" }}
            title="Services Professionnels"
            description="Un accompagnement complet pour votre réussite."
          >
            <ServicesGrid />
          </Section>

          {/* Secondary CTA Section */}
          <Section>
            <SmartCTA
              title="Besoin d'une solution sur mesure ?"
              description="Nos experts sont là pour vous accompagner dans le choix des meilleurs composants orthopédiques adaptés à vos besoins spécifiques."
              primaryAction={{
                text: "Contactez-nous",
                href: "/contact"
              }}
              secondaryAction={{
                text: "Découvrir nos services",
                href: "/services"
              }}
            />
          </Section>

          {/* Catalogue Section */}
          <Section
            badge={{ icon: faBook, text: "Catalogues" }}
            title="Nos Catalogues"
            description="Téléchargez nos catalogues détaillés pour découvrir notre gamme complète de produits orthopédiques."
          >
            <HorizontalCatalogScroll />
          </Section>

          {/* Documentation CTA Section */}
          <Section>
            <SmartCTA
              title="Accédez à notre documentation technique"
              description="Téléchargez nos catalogues et fiches techniques pour tout savoir sur nos produits et solutions orthopédiques."
              primaryAction={{
                text: "Voir les catalogues",
                href: "/catalogues"
              }}
            />
          </Section>

          {/* Partners Section */}
          <Section
            badge={{ icon: faHandshake, text: "Partenaires de confiance" }}
            title="Collaborations Internationales"
            description="Nous collaborons avec les leaders mondiaux de l'orthopédie pour vous offrir les meilleures solutions prothétiques."
            className="bg-gradient-to-b from-white to-[#187baa]/5"
          >
            <div className="max-w-7xl mx-auto">
              <PartnersList />
            </div>
          </Section>

          {/* Final CTA Section */}
          <Section className="mb-24">
            <SmartCTA
              title="Prêt à collaborer avec nous ?"
              description="Contactez notre équipe d'experts pour discuter de vos besoins en solutions orthopédiques et découvrir comment nous pouvons vous accompagner."
              primaryAction={{
                text: "Parlons de votre projet",
                href: "/contact"
              }}
              secondaryAction={{
                text: "En savoir plus sur nous",
                href: "/a-propos"
              }}
            />
          </Section>
        </Suspense>
      </main>
    </LazyMotion>
  );
}); 