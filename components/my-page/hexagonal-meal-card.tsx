'use client';

import type { MealType } from '@/lib/types';
import Image from 'next/image';

interface HexagonalMealCardProps {
  meal: MealType;
  className?: string;
}

export function HexagonalMealCard({ meal, className = '' }: HexagonalMealCardProps) {
  return (
    <div className={className}>
      <div 
        className={`w-[120px] h-[136px] bg-gradient-to-r from-[#FFCC21] to-[#FF963C] 
                   transform rotate-0 flex items-center justify-center
                   transition-all duration-300 group-hover:scale-105
                   ${meal.completed ? 'opacity-50' : ''}`}
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
      >
        {/* Icon */}
        <div className="text-white text-2xl flex items-center justify-center flex-col">
          <Image src={`/images/${meal.icon}.png`} alt={meal.name} width={56} height={56} />
          <div className="text-center">
            <div className="text-white font-semibold text-lg">{meal.name}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
