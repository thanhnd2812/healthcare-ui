'use client';

import { RECORD_SECTION_BUTTONS } from '@/lib/constants';
import type { RecordSectionButton } from '@/lib/types';
import Image from 'next/image';

interface RecordSectionButtonsProps {
  onSectionClick: (targetSection: string) => void;
}

export function RecordSectionButtons({ onSectionClick }: RecordSectionButtonsProps) {
  const handleButtonClick = (button: RecordSectionButton) => {
    onSectionClick(button.targetSection);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
      {RECORD_SECTION_BUTTONS.map((button) => (
        <div
          key={button.id}
          className="bg-[#FFCC21] p-6 cursor-pointer transition-all hover:scale-105 hover:shadow-lg "
          onClick={() => handleButtonClick(button)}
        >
          <div className="relative bg-gray-800 overflow-hidden h-48 lg:h-[244px]">
            <Image
              src={button.image}
              alt={button.title}
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
              <h3 className="text-2xl font-bold mb-2 tracking-wider">
                {button.title}
              </h3>
              <div className="bg-[#FF963C] px-4 py-1">
                <span className="text-sm font-medium">{button.subtitle}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
