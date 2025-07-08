import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Spec {
  label: string;
  value: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: IconProp | string;
  link: string;
  specs: Spec[];
  color?: string;
  iconColor?: string;
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