'use client';

import { SectionContainer } from '../common/SectionContainer';
import { SectionBackground } from '../common/SectionBackground';
import { FeatureHeader } from './components/FeatureHeader';
import { FeatureGrid } from './components/FeatureGrid';
import { features, headerContent } from './data';
import { SECTION_VARIANTS } from '../config';

export default function Features() {
  return (
    <SectionContainer className={SECTION_VARIANTS.primary.background}>
      <SectionBackground variant="dark" />
      
      {/* En-tête */}
      <FeatureHeader {...headerContent} />

      {/* Grille de fonctionnalités */}
      <FeatureGrid features={features} />
    </SectionContainer>
  );
} 