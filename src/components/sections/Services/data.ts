import type { ServicesData } from './types';

export const servicesData: ServicesData = {
  header: {
    badge: "Nos Services",
    title: "Solutions Orthopédiques Complètes",
    description: "Nous proposons une gamme complète de services orthopédiques personnalisés pour répondre à vos besoins spécifiques."
  },

  overview: {
    title: "Notre Expertise",
    description: "Découvrez notre gamme complète de services orthopédiques, conçus pour améliorer votre mobilité et votre qualité de vie.",
    content: [
      "Plus de 20 ans d'expérience dans le domaine orthopédique",
      "Équipe de professionnels hautement qualifiés",
      "Technologies de pointe et matériaux innovants",
      "Suivi personnalisé et accompagnement continu"
    ]
  },

  whyUs: {
    title: "Pourquoi Nous Choisir",
    description: "Des solutions orthopédiques innovantes portées par une expertise reconnue",
    items: [
      {
        title: "Expertise Technique",
        description: "Une équipe de professionnels hautement qualifiés avec plus de 20 ans d'expérience",
        icon: "🎯"
      },
      {
        title: "Innovation Continue",
        description: "Utilisation des dernières technologies et matériaux pour des solutions optimales",
        icon: "💡"
      },
      {
        title: "Service Personnalisé",
        description: "Une approche sur mesure adaptée aux besoins spécifiques de chaque patient",
        icon: "🤝"
      },
      {
        title: "Suivi Complet",
        description: "Accompagnement continu et ajustements réguliers pour garantir votre satisfaction",
        icon: "✨"
      }
    ]
  },

  services: {
    title: "Nos Services Spécialisés",
    description: "Découvrez notre gamme complète de services orthopédiques",
    items: [
      {
        id: "protheses",
        title: "Prothèses Sur Mesure",
        description: "Conception et fabrication de prothèses personnalisées utilisant les dernières technologies.",
        icon: "prosthetic-leg",
        image: "/images/services/prosthetic.jpg",
        features: [
          "Analyse biomécanique approfondie",
          "Matériaux légers et durables",
          "Ajustements précis",
          "Suivi régulier"
        ],
        link: "/services/protheses"
      },
      {
        id: "ortheses",
        title: "Orthèses Spécialisées",
        description: "Solutions orthopédiques adaptées pour le soutien et la correction posturale.",
        icon: "orthotic-brace",
        image: "/images/services/orthotic.jpg",
        features: [
          "Évaluation posturale complète",
          "Conception ergonomique",
          "Confort optimal",
          "Ajustements personnalisés"
        ],
        link: "/services/ortheses"
      },
      {
        id: "rehabilitation",
        title: "Réhabilitation",
        description: "Programme de réhabilitation complet pour optimiser l'utilisation de votre appareillage.",
        icon: "rehabilitation",
        image: "/images/services/rehabilitation.jpg",
        features: [
          "Exercices adaptés",
          "Suivi progressif",
          "Conseils pratiques",
          "Support continu"
        ],
        link: "/services/rehabilitation"
      }
    ]
  },

  process: {
    title: "Notre Processus",
    description: "Une approche méthodique en 4 étapes pour garantir des résultats optimaux",
    steps: [
      {
        title: "Consultation Initiale",
        description: "Évaluation approfondie de vos besoins et objectifs"
      },
      {
        title: "Conception Personnalisée",
        description: "Création d'une solution sur mesure adaptée à votre morphologie"
      },
      {
        title: "Fabrication & Ajustements",
        description: "Réalisation soignée et ajustements précis pour un confort optimal"
      },
      {
        title: "Suivi & Accompagnement",
        description: "Support continu et ajustements réguliers pour garantir votre satisfaction"
      }
    ]
  },

  testimonials: {
    title: "Témoignages",
    description: "Ce que nos patients disent de nos services",
    items: [
      {
        name: "Marie L.",
        text: "L'équipe a fait preuve d'un grand professionnalisme. Ma nouvelle prothèse est parfaitement adaptée à mes besoins.",
        rating: 5
      },
      {
        name: "Ahmed K.",
        text: "Le suivi personnalisé et les conseils m'ont permis de retrouver une mobilité que je ne pensais plus possible.",
        rating: 5
      },
      {
        name: "Sophie M.",
        text: "Une approche vraiment humaine et des solutions techniques de grande qualité.",
        rating: 5
      }
    ]
  }
}; 