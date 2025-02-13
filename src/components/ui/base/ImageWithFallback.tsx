import OptimizedImage from '@/components/ui/OptimizedImage';
import { twMerge } from 'tailwind-merge';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  style?: React.CSSProperties;
  withBlur?: boolean;
  containerClassName?: string;
}

const defaultFallbackImage = '/images/placeholder.jpg';

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes,
  style,
  withBlur,
  containerClassName,
  ...props
}: ImageWithFallbackProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      className={className}
      priority={priority}
      {...(fill ? { fill: true } : { width, height })}
      {...(sizes ? { sizes } : {})}
      style={style}
      withBlur={withBlur}
      containerClassName={containerClassName}
      {...props}
    />
  );
} 