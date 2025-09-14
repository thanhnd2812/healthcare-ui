'use client';

import { MEAL_TYPES } from '@/lib/constants';
import type { MealType } from '@/lib/types';
import { HexagonalMealCard } from './hexagonal-meal-card';

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
      <HexagonalMealCard meal={meal} />
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
