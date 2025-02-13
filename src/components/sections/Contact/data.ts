import type { ContactData } from './types';

export const contactData: ContactData = {
  header: {
    badge: "Contact",
    title: "Contactez-nous",
    description: "Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets."
  },
  info: {
    title: "Nos Coordonnées",
    description: "Plusieurs moyens de nous contacter sont à votre disposition.",
    items: [
      {
        title: "Adresse",
        value: "123 Rue de la République, 1000 Tunis, Tunisie",
        icon: "location"
      },
      {
        title: "Téléphone",
        value: "+216 71 123 456",
        icon: "phone"
      },
      {
        title: "Email",
        value: "direction@deltamedicalplus.tn",
        icon: "email"
      },
      {
        title: "Horaires",
        value: "Lun-Ven: 9h-18h",
        icon: "clock"
      }
    ]
  },
  form: {
    title: "Envoyez-nous un Message",
    description: "Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais."
  }
}; 