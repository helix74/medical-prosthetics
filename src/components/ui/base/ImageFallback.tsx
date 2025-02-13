interface ImageFallbackProps {
  text: string;
  className?: string;
}

export const ImageFallback = ({ text, className = '' }: ImageFallbackProps) => {
  const initials = text
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className={`w-full h-full flex items-center justify-center bg-neutral-100 ${className}`}>
      <span className="text-neutral-500 font-medium">
        {initials}
      </span>
    </div>
  );
}; 