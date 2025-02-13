import { useState, useEffect } from 'react';

interface BlurPlaceholderOptions {
  width?: number;
  height?: number;
  quality?: number;
}

export function useBlurPlaceholder(src: string, options: BlurPlaceholderOptions = {}) {
  const [blurDataURL, setBlurDataURL] = useState<string | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const generateBlurPlaceholder = async () => {
      try {
        // If we're in a browser environment, create a canvas to generate the blur
        if (typeof window !== 'undefined') {
          const { width = 8, height = 8, quality = 70 } = options;
          
          // Create temporary image to load the source
          const img = new Image();
          img.src = src;
          
          await new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
          });

          // Create canvas and context
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          if (!ctx) {
            throw new Error('Could not get canvas context');
          }

          // Set canvas size to desired blur dimensions
          canvas.width = width;
          canvas.height = height;

          // Draw image at low resolution
          ctx.drawImage(img, 0, 0, width, height);

          // Get base64 representation
          const blurredDataURL = canvas.toDataURL('image/jpeg', quality / 100);
          
          setBlurDataURL(blurredDataURL);
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to generate blur placeholder'));
      }
    };

    generateBlurPlaceholder();
  }, [src, options.width, options.height, options.quality]);

  return { blurDataURL, error };
}

// Helper function to get static blur placeholder during build time
export async function getStaticBlurPlaceholder(
  src: string,
  options: BlurPlaceholderOptions = {}
): Promise<string> {
  // This would typically use a server-side image processing library like Sharp
  // For now, we'll return a default blur data URL
  return 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4dHRsdHR4dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=';
} 