'use client';

import { memo } from 'react';

export const BackgroundPattern = memo(function BackgroundPattern() {
  return (
    // Temporarily disabled grid pattern for presentation
    <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/10 to-white" />
  );
}); 