'use client';

import { memo } from 'react';
import { LazyMotion, domAnimation, motion } from 'framer-motion';
import { Hero, Section } from '@/components/ui/layout';
import { ANIMATION_VARIANTS, STAGGER_CHILDREN } from '@/utils/animations';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, CONTAINER_STYLES, EFFECTS_STYLES } from '@/theme/styles';
import dynamic from 'next/dynamic';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTools, faGraduationCap, faHeadset, faWrench, faStar } from '@fortawesome/free-solid-svg-icons';

// Features Section Component
const FeaturesSection = memo(function FeaturesSection() {
  return (
      <motion.div
        variants={STAGGER_CHILDREN}
        initial="initial"
        animate="animate"
      className="text-center max-w-4xl mx-auto"
      >
        <motion.span
          variants={ANIMATION_VARIANTS.fadeInUp}
          className={twMerge(
            'inline-flex items-center px-4 py-2 rounded-full',
            'bg-[#187baa]/10 text-[#187baa]',
            'border border-[#187baa]/20',
            'mb-6 mx-auto',
            EFFECTS_STYLES.base.transition.base,
            'hover:bg-[#187baa]/20'
          )}
        >
          <FontAwesomeIcon icon={faStar} className="mr-2 text-[#187baa]" />
          Notre Formation
        </motion.span>

        <motion.h2
          variants={ANIMATION_VARIANTS.fadeInUp}
          className={twMerge(
            TYPOGRAPHY_STYLES.utils.getHeading(2),
            'text-[#187baa] mb-6'
          )}
        >
          Services Orthopédiques Spécialisés
        </motion.h2>

        <motion.p 
          variants={ANIMATION_VARIANTS.fadeInUp}
          className={twMerge(
          TYPOGRAPHY_STYLES.utils.getBody('base'),
            'text-neutral-600 mb-8'
          )}
        >
          Nous nous engageons à fournir des services d&apos;excellence pour répondre aux besoins spécifiques de nos clients.
        </motion.p>

        <motion.div
          variants={ANIMATION_VARIANTS.fadeInUp}
          className="space-y-4"
        >
          {[
            "Consultation technique personnalisée",
            "Support technique continu",
            "Formation professionnelle",
            "Service après-vente"
          ].map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <svg className="w-5 h-5 text-[#187baa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className={twMerge(
                TYPOGRAPHY_STYLES.utils.getBody('base'),
                'text-neutral-600'
              )}>
                {feature}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
  );
});

const ServicesGrid = memo(function ServicesGrid() {
  const services = [
    {
      title: "Consultation Technique",
      description: "Expertise personnalisée pour vos besoins spécifiques",
      icon: <FontAwesomeIcon icon={faSearch} className="text-[#187baa]" />,
      features: [
        "Analyse des besoins",
        "Recommandations sur mesure",
        "Suivi personnalisé"
      ]
    },
    {
      title: "Support Technique",
      description: "Assistance continue pour vos équipements",
      icon: <FontAwesomeIcon icon={faTools} className="text-[#187baa]" />,
      features: [
        "Maintenance préventive",
        "Réparations rapides",
        "Conseils d'utilisation"
      ]
    },
    {
      title: "Formation",
      description: "Programmes de formation adaptés",
      icon: <FontAwesomeIcon icon={faGraduationCap} className="text-[#187baa]" />,
      features: [
        "Ateliers pratiques",
        "Documentation détaillée",
        "Certification professionnelle"
      ]
    },
    {
      title: "Service Après-Vente",
      description: "Suivi et maintenance de qualité",
      icon: <FontAwesomeIcon icon={faHeadset} className="text-[#187baa]" />,
      features: [
        "Garantie étendue",
        "Pièces de rechange",
        "Support prioritaire"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={ANIMATION_VARIANTS.fadeInUp}
          custom={index}
            className={twMerge(
            'bg-white rounded-2xl p-8',
            EFFECTS_STYLES.base.shadow.sm,
            EFFECTS_STYLES.base.transition.base,
            'hover:shadow-xl hover:-translate-y-1'
          )}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-4xl text-[#187baa]">{service.icon}</span>
              <div>
                <h3 className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getHeading(3),
                'text-[#187baa] mb-2'
                )}>
                  {service.title}
                </h3>
                <p className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getBody('base'),
                'text-neutral-700'
                )}>
                  {service.description}
                </p>
              </div>
            </div>

            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#187baa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getBody('base'),
                  'text-neutral-700'
                )}>
                  {feature}
                </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
  );
});

const SmartCTA = dynamic(() => import('@/components/ui/cta/SmartCTA'), {
  loading: () => <LoadingSpinner />,
  ssr: false,
});

export default memo(function ServicesPageClient() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="relative overflow-hidden bg-white">
        {/* Hero Section */}
        <Hero
          badge={{ icon: faWrench, text: "Nos Services" }}
          title="Services Professionnels"
          description="Une Expertise au Service de la Prothèse et de l'Orthèse. Des solutions complètes pour répondre à vos besoins orthopédiques"
          size="sm"
          variant="centered"
          className="bg-white mb-16"
        />

        {/* Main Content */}
        <div className="relative z-0 bg-white pb-16">
          {/* Features Section */}
          <Section className="mb-16">
            <FeaturesSection />
          </Section>

          {/* Services Grid */}
          <Section className="mb-16">
            <ServicesGrid />
          </Section>

          {/* Formation Section */}
          <Section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <motion.span
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  className={twMerge(
                    'inline-flex items-center px-4 py-2 rounded-full',
                    'bg-[#187baa]/10 text-[#187baa]',
                    'border border-[#187baa]/20',
                    'mb-6 mx-auto',
                    EFFECTS_STYLES.base.transition.base,
                    'hover:bg-[#187baa]/20'
                  )}
                >
                  <FontAwesomeIcon icon={faStar} className="mr-2 text-[#187baa]" />
                  Notre Formation
                </motion.span>

                <motion.h2
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getHeading(2),
                    'text-[#187baa] mb-6'
                  )}
                >
                  Services Orthopédiques Spécialisés
                </motion.h2>

                <motion.p
                  variants={ANIMATION_VARIANTS.fadeInUp}
                  className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getBody('lg'),
                    'text-neutral-600'
                  )}
                >
                  Nous nous engageons à fournir des services d&apos;excellence pour répondre aux besoins spécifiques de nos clients.
                </motion.p>
              </div>

              <motion.div
                variants={ANIMATION_VARIANTS.fadeInUp}
                className={twMerge(
                  TYPOGRAPHY_STYLES.utils.getBody('base'),
                  'text-neutral-600 space-y-8'
                )}
              >
                <div>
                  <h3 className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getHeading(3),
                    'text-primary-600 mb-4'
                  )}>
                    À qui s&apos;adresse notre formation ?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#187baa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Maîtres appareilleurs souhaitant perfectionner leurs connaissances sur les nouvelles solutions prothétiques.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#187baa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Podologues cherchant à intégrer des composants orthopédiques adaptés aux besoins de leurs patients.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#187baa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Responsables d&apos;approvisionnement des services étatiques, afin de mieux comprendre les spécificités des produits et optimiser leur gestion.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#187baa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Étudiants en appareillage, pour leur offrir un apprentissage pratique et renforcer leurs compétences avant leur entrée dans le monde professionnel.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getHeading(3),
                    'text-primary-600 mb-4'
                  )}>
                    Un format flexible pour tous
                  </h3>
                  <p className="mb-4">Nous mettons à disposition deux modes d&apos;apprentissage :</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#187baa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>En ligne, pour un accès facile à nos contenus et formations interactives.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#187baa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Sur place, dans nos locaux à Bardo, Tunisie, pour des sessions pratiques et immersives.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className={twMerge(
                    TYPOGRAPHY_STYLES.utils.getHeading(3),
                    'text-primary-600 mb-4'
                  )}>
                    Pourquoi choisir Delta Med Plus ?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#187baa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Un savoir-faire éprouvé :</strong> Nos formations sont dispensées par des experts du domaine.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#187baa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Une mise à jour continue :</strong> Nous intégrons les dernières avancées et références du marché.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#187baa] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Un accompagnement personnalisé :</strong> Chaque participant bénéficie d&apos;un suivi et de conseils adaptés.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-center mt-8">
                  Notre engagement est de contribuer activement au développement des compétences dans le secteur de l&apos;orthopédie et de garantir l&apos;excellence des soins prodigués aux patients.
                </p>
              </motion.div>
            </div>
          </Section>

          {/* Training CTA */}
          <Section className="last:mb-0">
            <SmartCTA
              title="Formation Professionnelle"
              description="Développez vos compétences avec nos programmes de formation spécialisés en appareillage orthopédique."
              primaryAction={{
                text: "S'inscrire à une formation",
                href: "/services/formation"
              }}
              secondaryAction={{
                text: "Voir le programme",
                href: "/services/formation#programme"
              }}
            />
          </Section>
        </div>
      </main>
    </LazyMotion>
  );
}); 