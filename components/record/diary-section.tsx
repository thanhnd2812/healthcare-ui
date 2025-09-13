'use client';

import { DIARY_ENTRIES } from '@/lib/constants';
import { GradientButton } from '../ui/gradient-button';

interface DiarySectionProps {
  id?: string;
}

export function DiarySection({ id }: DiarySectionProps) {
  return (
    <section id={id} className="mb-14">
      <h2 className="text-2xl font-medium mb-6">MY DIARY</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {DIARY_ENTRIES.map((entry) => (
          <div
            key={entry.id}
            className="border border-gray-300 p-4 h-[231px] flex flex-col justify-between"
          >
            <div>
              <div className="text-lg font-normal mb-2">
                {entry.date}<br />
                {entry.time}
              </div>
              <div className="text-sm text-gray-600 mb-2">
                {entry.title}
              </div>
            </div>
            <div className="text-xs text-gray-500 leading-relaxed">
              {entry.content}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <GradientButton>
          自分の日記をもっと見る
        </GradientButton>
      </div>
    </section>
  );
}
