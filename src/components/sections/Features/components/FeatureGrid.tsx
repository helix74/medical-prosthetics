import { FeatureGridProps } from '../types';
import { FeatureCard } from './FeatureCard';

export const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} />
      ))}
    </div>
  );
}; 