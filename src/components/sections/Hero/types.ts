export interface Stat {
  value: string;
  highlight: string;
  icon: string;
  description: string;
}

export interface Certification {
  src: string;
  alt: string;
}

export interface StatsProps {
  stats: Stat[];
}

export interface CertificationsProps {
  certifications: Certification[];
}

export interface HeroContentProps {
  title: string;
  subtitle: string;
  description: string;
  stats: Stat[];
  certifications: Certification[];
} 