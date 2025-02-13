import { memo } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { TYPOGRAPHY_STYLES, EFFECTS_STYLES } from '@/theme/styles';

interface SmartCTAProps {
  title: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  className?: string;
}

const SmartCTA = memo(function SmartCTA({ 
  title, 
  description, 
  primaryAction,
  secondaryAction,
  className = ""
}: SmartCTAProps) {
  return (
    <div className={twMerge(
      'relative overflow-hidden rounded-2xl',
      'bg-gradient-to-br from-[#187baa] via-[#187baa] to-[#156a93]',
      'px-8 py-16 sm:px-16 sm:py-20',
      'text-center',
      'shadow-xl shadow-[#187baa]/20',
      'border border-white/10',
      className
    )}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]" />

      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Light Effect */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-white/20 to-transparent rounded-full filter blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
        
        {/* Secondary Light Effect */}
        <div className="absolute bottom-0 right-0 w-[1000px] h-[1000px] bg-gradient-to-tl from-[#156a93]/40 to-transparent rounded-full filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3" />
        
        {/* Accent Light Effect */}
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-white/10 to-transparent rounded-full filter blur-2xl opacity-15 -translate-x-1/2 -translate-y-1/2" />
        
        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.2)_100%)]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className={twMerge(
          TYPOGRAPHY_STYLES.utils.getHeading(2),
          'text-white font-bold mb-6',
          'bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent',
          'drop-shadow-lg'
        )}>
          {title}
        </h2>
        <p className={twMerge(
          TYPOGRAPHY_STYLES.utils.getBody('lg'),
          'text-white/90 mb-12',
          'leading-relaxed',
          'backdrop-blur-sm',
          'bg-white/5 rounded-xl p-6',
          'border border-white/10',
          'shadow-lg shadow-black/5'
        )}>
          {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href={primaryAction.href}
            className={twMerge(
              'inline-flex items-center justify-center',
              'px-8 py-4 rounded-xl',
              'bg-white text-[#187baa] font-semibold',
              'shadow-lg shadow-black/5',
              'hover:bg-[#187baa]/10 hover:text-white',
              'backdrop-blur-sm',
              'border border-white/20',
              'hover:border-white/30',
              'hover:shadow-xl hover:shadow-black/10',
              EFFECTS_STYLES.base.transition.base,
              'w-full sm:w-auto'
            )}
          >
            {primaryAction.text}
          </Link>
          {secondaryAction && (
            <Link
              href={secondaryAction.href}
              className={twMerge(
                'inline-flex items-center justify-center',
                'px-8 py-4 rounded-xl',
                'bg-white/10 text-white font-semibold',
                'border border-white/20',
                'hover:bg-white/20',
                'hover:border-white/30',
                'backdrop-blur-sm',
                'shadow-lg shadow-black/5',
                'hover:shadow-xl hover:shadow-black/10',
                EFFECTS_STYLES.base.transition.base,
                'w-full sm:w-auto'
              )}
            >
              {secondaryAction.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
});

export default SmartCTA; 