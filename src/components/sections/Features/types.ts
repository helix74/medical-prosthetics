export interface Spec {
  label: string;
  value: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  specs: Spec[];
  color: string;
  iconColor: string;
  link: string;
}

export interface FeatureCardProps {
  feature: Feature;
}

export interface FeatureGridProps {
  features: Feature[];
}

export interface FeatureHeaderProps {
  title: string;
  description: string;
} 