export interface WhyUsItem {
  title: string;
  description: string;
  icon: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  link: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  text: string;
  rating: number;
}

export interface ServicesData {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  overview: {
    title: string;
    description: string;
    content: string[];
  };
  whyUs: {
    title: string;
    description: string;
    items: WhyUsItem[];
  };
  services: {
    title: string;
    description: string;
    items: Service[];
  };
  process: {
    title: string;
    description: string;
    steps: ProcessStep[];
  };
  testimonials: {
    title: string;
    description: string;
    items: Testimonial[];
  };
}

export interface ServiceCardProps {
  service: Service;
} 