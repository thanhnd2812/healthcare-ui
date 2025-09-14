'use client';

import type { MealType } from '@/lib/types';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { memo, useMemo } from 'react';

interface HexagonalMealCardProps {
  meal: MealType;
  className?: string;
  onClick?: (meal: MealType) => void;
}

export const HexagonalMealCard = memo<HexagonalMealCardProps>(function HexagonalMealCard({ 
  meal, 
  className = '',
  onClick 
}) {
  // Memoize the clip path to avoid recalculation on every render
  const clipPath = useMemo(() => 
    'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', 
    []
  );

  // Memoize the image source to avoid string concatenation on every render
  const imageSrc = useMemo(() => `/images/${meal.icon}.png`, [meal.icon]);

  // Memoize the container classes
  const containerClasses = useMemo(() => cn(
    "w-[120px] h-[136px] bg-gradient-to-r from-[#FFCC21] to-[#FF963C]",
    "transform rotate-0 flex items-center justify-center",
    "transition-all duration-300 group-hover:scale-105",
    "cursor-pointer hover:shadow-lg",
    meal.completed && "opacity-50 grayscale"
  ), [meal.completed]);

  const handleClick = () => {
    if (onClick) {
      onClick(meal);
    }
  };

  return (
    <div className={className}>
      <div 
        className={containerClasses}
        style={{ clipPath }}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label={`${meal.name} meal card${meal.completed ? ' (completed)' : ''}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
      >
        {/* Icon */}
        <div className="text-white text-2xl flex items-center justify-center flex-col">
          <Image 
            src={imageSrc} 
            alt={meal.name} 
            width={56} 
            height={56}
            priority={false}
            loading="lazy"
          />
          <div className="text-center">
            <div className="text-white font-semibold text-lg">{meal.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
});
