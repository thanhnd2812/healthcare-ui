'use client';

import { EXERCISE_RECORDS } from '@/lib/constants';

interface ExerciseRecordSectionProps {
  id?: string;
}

export function ExerciseRecordSection({ id }: ExerciseRecordSectionProps) {
  return (
    <section id={id} className="bg-gray-800 text-white p-6 rounded-lg mb-14 h-[264px] overflow-y-auto">
      <div className="flex items-center mb-6">
        <div className="text-sm font-medium mr-4">
          MY<br />EXERCISE
        </div>
        <div className="text-2xl font-light">2021.05.21</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {EXERCISE_RECORDS.map((exercise) => (
          <div
            key={exercise.id}
            className="flex items-center justify-between  border-b border-gray-600 last:border-b-0"
          >
            <div className="flex items-start space-x-4">
              <div className="w-1 h-1 bg-white rounded-full mt-1.5"></div>
              <div>
                <div className="font-medium text-sm">{exercise.name}</div>
                <div className="text-yellow-400 text-sm">{exercise.calories}kcal</div>
              </div>
            </div>
            <div className="text-yellow-400 font-normal">
              {exercise.duration} min
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
