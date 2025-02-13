'use client';

import React, { memo } from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import dynamic from 'next/dynamic';
import { EFFECTS_STYLES, CONTAINER_STYLES } from '../../../theme/styles';

// Lazy load components
const Header = dynamic(() => import('./components/Header'));
const Features = dynamic(() => import('./components/Features'));
const Overview = dynamic(() => import('./components/Overview'));
const Testimonials = dynamic(() => import('./components/Testimonials'));

// Background Pattern Component
const BackgroundPattern = memo(function BackgroundPattern() {
  return (
    <div className={twMerge(
      'absolute inset-0',
      'bg-white'
    )} />
  );
});

// Section Wrapper Component
const SectionWrapper = memo(function SectionWrapper({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={twMerge(
      'relative bg-white',
      EFFECTS_STYLES.base.transition.base,
      className
    )}>
      <BackgroundPattern />
      <div className={CONTAINER_STYLES.variants.default}>
        {children}
      </div>
    </section>
  );
});

export default memo(function Services() {
  return (
    <LazyMotion features={domAnimation}>
      <main className="overflow-hidden">
        {/* Header Section */}
        <SectionWrapper>
          <Header />
        </SectionWrapper>

        {/* Overview Section */}
        <SectionWrapper>
          <Overview />
        </SectionWrapper>

        {/* Features Section */}
        <SectionWrapper>
          <Features />
        </SectionWrapper>

        {/* Testimonials Section */}
        <SectionWrapper>
          <Testimonials />
        </SectionWrapper>
      </main>
    </LazyMotion>
  );
}); 