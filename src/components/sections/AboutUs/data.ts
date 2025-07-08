import { Milestone, TeamMember, Value } from './types';

export const milestones: Milestone[] = [
  {
    year: '2008',
    title: 'Création de Delta Orthopédie',
    description: 'Établissement du centre leader en Tunisie'
  },
  {
    year: '2015',
    title: 'Certification ISO',
    description: 'Obtention des certifications 13485 & 9001'
  },
  {
    year: '2018',
    title: 'Expansion internationale',
    description: 'Développement de partenariats européens'
  },
  {
    year: '2025',
    title: 'Lancement de Delta Med Plus',
    description: 'Extension dédiée à la distribution'
  }
];

export const values: Value[] = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'Engagement constant vers la qualité supérieure'
  },
  {
    icon: '🤝',
    title: 'Confiance',
    description: 'Relations durables avec nos partenaires'
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Recherche continue de solutions avancées'
  },
  {
    icon: '❤️',
    title: 'Empathie',
    description: 'Compréhension des besoins patients'
  }
];

export const team: TeamMember[] = [
  {
    name: 'Chérifa Soltani',
    role: 'Co-fondatrice',
    image: '/images/team/Cherifa.png',
    expertise: 'Maître appareilleur',
    description: 'Maître appareilleur avec plus de 20 ans d\'expérience.'
  },
  {
    name: 'Imed Djobbi',
    role: 'Co-fondateur',
    image: '/images/team/Imed.png',
    expertise: 'Maître appareilleur',
    description: 'Maitre appareilleur confirmé fort d\'une expérience significative dans le domaine d\'appareillage orthopédiques.'
  }
];

export const aboutUsData = {
  header: {
    badge: "À propos de nous",
    title: "Delta Med Plus",
    description: "Votre partenaire de confiance dans le domaine des prothèses orthopédiques en Tunisie."
  },

  whoWeAre: {
    badge: "Qui sommes-nous",
    title: "Delta Med Plus",
    description: "Delta Med Plus est une extension indépendante du centre Delta Orthopédie, leader dans le domaine de la fabrication de prothèses et orthèses orthopédiques en Tunisie. Forte de son expertise et de son expérience reconnue, Delta Orthopédie a choisi d'élargir sa position en créant Delta Med Plus, une entité dédiée à la distribution de composantes prothétiques de haute qualité.",
    additionalInfo: [
      "Delta Med Plus se positionne comme un partenaire solide pour les centres d'appareillage et les experts du métier, leur offrant des solutions fiables et innovantes pour améliorer la qualité de vie des patients."
    ]
  },

  history: {
    badge: "Notre histoire",
    title: "Une histoire d'excellence",
    description: "Depuis notre création, nous nous sommes engagés à fournir des solutions orthopédiques de haute qualité.",
    timeline: [
      {
        year: "2010",
        title: "Création de Delta Orthopédie",
        description: "Fondation du centre spécialisé dans la fabrication de prothèses et orthèses orthopédiques."
      },
      {
        year: "2015",
        title: "Expansion des services",
        description: "Développement de partenariats internationaux et élargissement de la gamme de produits."
      },
      {
        year: "2025",
        title: "Lancement de Delta Med Plus",
        description: "Création d'une entité dédiée à la distribution de composantes prothétiques."
      }
    ]
  },

  missionVision: {
    badge: "Notre mission",
    title: "Mission et Vision",
    mission: {
      title: "Notre Mission",
      description: "Fournir des solutions orthopédiques innovantes et de haute qualité tout en assurant un service client exceptionnel et un support technique complet."
    },
    vision: {
      title: "Notre Vision",
      description: "Devenir le leader de référence dans la distribution de composantes prothétiques en Tunisie et en Afrique du Nord."
    }
  },

  values: {
    badge: "Nos valeurs",
    title: "Les valeurs qui nous guident",
    description: "Nos valeurs fondamentales définissent notre approche et notre engagement envers nos clients.",
    items: [
      {
        title: "Excellence",
        description: "Nous visons l'excellence dans tous nos produits et services."
      },
      {
        title: "Innovation",
        description: "Nous restons à la pointe des avancées technologiques."
      },
      {
        title: "Intégrité",
        description: "Nous agissons avec honnêteté et transparence."
      },
      {
        title: "Engagement",
        description: "Nous sommes dévoués à la satisfaction de nos clients."
      }
    ]
  },

  team: {
    badge: "Notre équipe",
    title: "Une équipe d'experts dévoués",
    description: "Notre équipe combine expertise technique et engagement pour votre satisfaction.",
    members: [
      {
        name: "Mme Chérifa Soltani",
        role: "Co-fondatrice",
        description: "Maître appareilleur avec plus de 20 ans d'expérience.",
        image: "/images/team/Cherifa.png"
      },
      {
        name: "M. Imed Djobbi",
        role: "Co-fondateur",
        description: "Maitre appareilleur confirmé fort d'une expérience significative dans le domaine d'appareillage orthopédiques.",
        image: "/images/team/Imed.png"
      }
    ]
  }
}; 