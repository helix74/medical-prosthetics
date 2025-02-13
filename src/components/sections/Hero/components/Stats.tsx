import { motion } from 'framer-motion';
import Image from 'next/image';
import { StatsProps } from '../types';
import { FADE_IN_UP } from '@/utils/animations';
import { useResponsiveLayout } from '@/hooks/useResponsiveLayout';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const StatCard = ({ stat, index }: { stat: StatsProps['stats'][0]; index: number }) => {
  const { shouldUseCompactLayout } = useResponsiveLayout();
  const [isActive, setIsActive] = useState(false);

  const handleInteraction = () => {
    if (shouldUseCompactLayout) {
      setIsActive(!isActive);
    }
  };

  const showEffects = !shouldUseCompactLayout || isActive;

  return (
    <motion.div 
      variants={FADE_IN_UP}
      className="bg-white/80 backdrop-blur-sm p-6 rounded-xl transition-all duration-300"
      style={{
        transform: showEffects ? 'translateY(-4px)' : 'none',
        boxShadow: showEffects ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(43, 85, 133, 0.1)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
        borderColor: showEffects ? 'rgba(43, 85, 133, 0.3)' : 'rgba(43, 85, 133, 0.1)',
      }}
      onClick={handleInteraction}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-3">
          <div className={twMerge(
            'inline-flex items-center justify-center w-12 h-12 rounded-xl text-2xl',
            'transition-all duration-300',
            showEffects ? 'bg-[#187baa]/20 border-[#187baa]/30' : 'bg-[#187baa]/10 border-[#187baa]/20'
          )}>
            <Image
              src={stat.icon}
              alt={stat.highlight}
              width={24}
              height={24}
              className="w-6 h-6 text-[#187baa]"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-2xl font-bold text-[#187baa] leading-tight">
              {stat.value}
            </div>
            <div className="text-lg font-semibold text-[#187baa]/80">
              {stat.highlight}
            </div>
          </div>
        </div>
        <p className="text-sm text-neutral-600">{stat.description}</p>
      </div>
    </motion.div>
  );
};

export const Stats = ({ stats }: StatsProps) => {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, index) => (
        <StatCard key={stat.highlight} stat={stat} index={index} />
      ))}
    </div>
  );
}; 