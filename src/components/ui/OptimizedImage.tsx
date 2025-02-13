import { memo, useState, useEffect } from 'react';
import Image, { ImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';
import { EFFECTS_STYLES } from '@/theme/styles';

interface OptimizedImageProps extends Omit<ImageProps, 'onLoad'> {
  lazyLoadOptions?: {
    threshold?: number;
    rootMargin?: string;
  };
  withBlur?: boolean;
  containerClassName?: string;
}

export const OptimizedImage = memo(function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  lazyLoadOptions = {
    threshold: 0.1,
    rootMargin: '50px'
  },
  withBlur = true,
  containerClassName,
  priority,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: lazyLoadOptions.threshold,
        rootMargin: lazyLoadOptions.rootMargin
      }
    );

    const element = document.querySelector(`[data-image-id="${src}"]`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, lazyLoadOptions.threshold, lazyLoadOptions.rootMargin, priority]);

  // Generate blur data URL for small images
  const blurDataURL = withBlur
    ? `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${height}'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter: url(%23b);' href='${src}'/%3E%3C/svg%3E`
    : undefined;

  return (
    <div 
      className={twMerge(
        'relative overflow-hidden',
        containerClassName
      )}
      style={{ 
        contain: 'layout style paint',
        aspectRatio: `${width}/${height}`
      }}
      data-image-id={src}
    >
      {(isInView || priority) && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={twMerge(
            'transition-opacity duration-300',
            !isLoaded && 'opacity-0',
            isLoaded && 'opacity-100',
            className
          )}
          onLoadingComplete={() => setIsLoaded(true)}
          placeholder={withBlur ? 'blur' : 'empty'}
          blurDataURL={blurDataURL}
          priority={priority}
          {...props}
        />
      )}
    </div>
  );
});

export default OptimizedImage; 