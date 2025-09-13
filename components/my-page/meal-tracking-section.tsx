'use client';

import { MEAL_TYPES } from '@/lib/constants';
import type { MealType } from '@/lib/types';
import Image from 'next/image';

interface MealIconProps {
  meal: MealType;
  onClick?: () => void;
}

function MealIcon({ meal, onClick }: MealIconProps) {
  return (
    <div 
      className="flex flex-col items-center cursor-pointer group"
      onClick={onClick}
    >
      {/* Hexagonal background */}
      <div>
        <div 
          className={`w-[136px] h-[136px] bg-gradient-to-r from-[#FFCC21] to-[#FF963C] 
                     transform rotate-0 flex items-center justify-center
                     transition-all duration-300 group-hover:scale-105
                     ${meal.completed ? 'opacity-50' : ''}`}
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        >
          {/* Icon */}
          <div className="text-white text-2xl">
            <Image src={`/images/${meal.icon}.png`} alt={meal.name} width={56} height={56} />
            <div className="text-center">
              <div className="text-white font-semibold text-lg">{meal.name}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MealTrackingSection() {
  return (
    <section className="pt-16 pb-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {MEAL_TYPES.map((meal) => (
            <MealIcon 
              key={meal.id} 
              meal={meal}
              onClick={() => {
                // Handle meal click - could navigate to meal entry or mark as complete
                console.log(`Clicked on ${meal.name}`);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
