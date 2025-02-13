import { memo } from 'react';
import { twMerge } from 'tailwind-merge';

interface BackgroundLayersProps {
  className?: string;
  variant?: 'plain' | 'subtle' | 'paper' | 'frost' | 'minimal';
  children: React.ReactNode;
}

export const BackgroundLayers = memo(function BackgroundLayers({
  className = '',
  variant = 'plain',
  children
}: BackgroundLayersProps) {
  // Get background style based on variant
  const getBackgroundStyle = () => {
    switch (variant) {
      case 'subtle':
        return (
          <>
            <div className="absolute inset-0 bg-white" />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_0.5px,white_0.5px)] [background-size:16px_16px] opacity-[0.4]" />
          </>
        );
      case 'paper':
        return (
          <>
            <div className="absolute inset-0 bg-white" />
            <div className="absolute inset-0 bg-[radial-gradient(#00000005_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
          </>
        );
      case 'frost':
        return (
          <>
            <div className="absolute inset-0 bg-white backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white/50" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          </>
        );
      case 'minimal':
        return (
          <>
            <div className="absolute inset-0 bg-white" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(to_bottom,transparent,rgba(0,0,0,0.01)_1px,transparent_1px)] [background-size:64px_64px]" />
          </>
        );
      default: // 'plain'
        return <div className="absolute inset-0 bg-white" />;
    }
  };

  return (
    <div className={twMerge('relative isolate overflow-hidden', className)}>
      {/* Background Layers */}
      {getBackgroundStyle()}

      {/* Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}); 