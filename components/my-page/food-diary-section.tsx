'use client';

import { FOOD_DIARY_ENTRIES } from '@/lib/constants';
import type { FoodDiaryEntry } from '@/lib/types';
import Image from 'next/image';

interface FoodDiaryCardProps {
  entry: FoodDiaryEntry;
}

function FoodDiaryCard({ entry }: FoodDiaryCardProps) {
  return (
    <div className="relative group cursor-pointer">
      {/* Food image */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image
          src={entry.image}
          alt={entry.title || `${entry.mealType} meal`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
        />
        
        {/* Overlay with meal info */}
        <div className="absolute bottom-0 left-0 bg-[#FFCC21] p-1 pr-4">
          <div className="text-white text-sm font-light">
            <div>{entry.date}.{entry.time}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FoodDiarySection() {
  return (
    <section className="py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Grid of food diary entries */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {FOOD_DIARY_ENTRIES.map((entry) => (
            <FoodDiaryCard key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  );
}
