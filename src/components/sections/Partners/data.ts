export interface Partner {
  id: string;
  name: string;
  logo: string;
  description?: string;
  website?: string;
}

export const partners: Partner[] = [
  {
    id: 'flexor',
    name: 'Flexor',
    logo: '/images/partners/flexor.jpg',
    description: 'Solutions orthopédiques flexibles et innovantes.',
    website: 'https://flexor.es'
  },
  {
    id: 'ossur',
    name: 'Össur',
    logo: '/images/partners/ossur.png',
    description: 'Leader mondial dans le développement de solutions prothétiques innovantes.',
    website: 'https://www.ossur.com'
  },
  {
    id: 'iber',
    name: 'IB-ER Prosthetic',
    logo: '/images/partners/iber.jpg',
    description: 'Expert en composants orthopédiques de haute qualité.',
    website: 'https://ib-er.com'
  },
  {
    id: 'okm',
    name: 'OKM',
    logo: '/images/partners/okm.jpg',
    description: 'Spécialiste des composants orthopédiques de précision.',
    website: 'https://okm.es'
  },
  {
    id: 'ottobock',
    name: 'Ottobock',
    logo: '/images/partners/ottobock.png',
    description: 'Leader mondial dans la fabrication de prothèses et d\'orthèses.',
    website: 'https://www.ottobock.com'
  },
  {
    id: 'ortho-europe',
    name: 'Ortho Europe',
    logo: '/images/partners/ortho-europe.png',
    description: 'Spécialiste européen des solutions orthopédiques innovantes.',
    website: 'https://www.ortho-europe.fr'
  },
  {
    id: 'janton',
    name: 'Janton',
    logo: '/images/partners/janton.png',
    description: 'Solutions orthopédiques personnalisées.',
    website: 'https://www.janton-g2m.com'
  },
  {
    id: 'ortoplast',
    name: 'Ortoplast',
    logo: '/images/partners/orthoplast.jpg',
    description: 'Expert en matériaux orthopédiques avancés.',
    website: 'https://www.ortoplast.com'
  },
  {
    id: 'alps',
    name: 'Alps',
    logo: '/images/partners/alps.png',
    description: 'Solutions de pointe pour le confort des patients.',
    website: 'https://easyliner.eu/fr'
  },
  {
    id: 'ethnocare',
    name: 'Ethnocare',
    logo: '/images/partners/ethnocare.jpg',
    description: "Dispositifs prothétiques innovants utilisant l'air pour l'ajustement et le confort.",
    website: 'https://ethnocare.ca'
  }
];

export const partnersData = {
  header: {
    badge: "Nos partenaires",
    title: "Nos Partenaires de Confiance",
    description: "Découvrez notre réseau de partenaires internationaux, leaders dans la fabrication de composants orthopédiques de haute qualité."
  },

  vision: {
    badge: "Notre vision",
    title: "Une Vision Partagée du Succès",
    description: "Chez Delta Med Plus, nous croyons que le succès repose sur des partenariats stratégiques basés sur la confiance et l'engagement mutuel. Nos relations avec nos fournisseurs internationaux vont bien au-delà d'un simple rôle de distributeur : nous travaillons main dans la main pour offrir des solutions innovantes et de qualité supérieure.",
    content: [
      "Nous avons développé des partenariats de longue durée avec des entreprises leaders dans le domaine des prothèses et orthèses.",
      "Notre engagement envers nos partenaires se traduit par une écoute attentive, une transparence totale et une volonté constante d'améliorer nos processus. Ensemble, nous oeuvrons pour garantir des produits de haute qualité, un service irréprochable et une satisfaction client optimale. Grâce à ces relations durables, nous sommes en mesure de répondre aux défis de demain et de contribuer à l'évolution du secteur médical."
    ]
  },

  partners: {
    title: "Fabricants Internationaux",
    description: "Nous collaborons avec les meilleurs fabricants mondiaux pour vous offrir des produits de qualité supérieure.",
    categories: [
      {
        title: "Prothèses",
        partners: [
          {
            name: "Össur",
            logo: "/images/partners/ossur.png",
            description: "Leader mondial dans le développement, la fabrication et la vente de prothèses haut de gamme.",
            products: ["Genoux", "Pieds", "Composants"]
          },
          {
            name: "Ottobock",
            logo: "/images/partners/ottobock.png",
            description: "Pionnier en solutions prothétiques innovantes depuis plus de 100 ans.",
            products: ["Systèmes complets", "Composants", "Accessoires"]
          },
          {
            name: "Ethnocare",
            logo: "/images/partners/ethnocare.jpg",
            description: "Dispositifs prothétiques innovants utilisant l'air pour l'ajustement et le confort.",
            products: ["Prothèses"]
          }
        ]
      },
      {
        title: "Orthèses",
        partners: [
          {
            name: "Bauerfeind",
            logo: "/images/partners/bauerfeind.png",
            description: "Spécialiste des orthèses médicales de haute qualité.",
            products: ["Orthèses de genou", "Supports", "Bandages"]
          }
        ]
      }
    ]
  },

  contact: {
    title: "Devenir Partenaire",
    description: "Intéressé par un partenariat avec Delta Med Plus ? Nous sommes toujours à la recherche de nouvelles collaborations pour enrichir notre offre.",
    benefits: [
      "Accès au marché tunisien et nord-africain",
      "Support technique et commercial dédié",
      "Réseau de distribution établi",
      "Équipe expérimentée"
    ],
    cta: {
      text: "Contactez-nous",
      link: "/contact"
    }
  }
}; 