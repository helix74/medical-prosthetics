import { useResponsiveLayout } from '@/hooks/useResponsiveLayout';
import { useEffect, useState } from 'react';

export default function DeviceTypeIndicator() {
  const {
    deviceType,
    isLandscape,
    layoutMode,
    shouldUseCompactLayout
  } = useResponsiveLayout();

  const [windowSize, setWindowSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  if (process.env.NODE_ENV === 'production') return null;

  return (
    <div className="fixed right-safe bottom-safe bg-black/80 text-white p-3 rounded-lg text-sm z-50 font-mono">
      <div>Device: {deviceType}</div>
      <div>Layout: {layoutMode}</div>
      <div>Orientation: {isLandscape ? 'Landscape' : 'Portrait'}</div>
      <div>Compact: {shouldUseCompactLayout ? 'Yes' : 'No'}</div>
      <div>
        Size: {windowSize.width}x{windowSize.height}
      </div>
      <div>Safe Area: Active</div>
    </div>
  );
} 