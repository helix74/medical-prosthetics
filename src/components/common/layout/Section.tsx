'use client';

import { memo } from 'react';
import { BackgroundPattern } from '.';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  withPattern?: boolean;
  withGradient?: boolean;
}

export const Section = memo(function Section({ 
  children, 
  className = "", 
  withPattern = true,
  withGradient = false 
}: SectionProps) {
  return (
    <section className={`relative bg-white ${className}`}>
      {withPattern && <BackgroundPattern />}
      {withGradient && (
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3" />
        </div>
      )}
      {children}
    </section>
  );
}); 