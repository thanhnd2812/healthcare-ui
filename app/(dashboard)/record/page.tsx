
'use client';

import { BodyRecordGraph } from '@/components/body-record-graph';
import { DiarySection } from '@/components/diary-section';
import { ExerciseRecordSection } from '@/components/exercise-record-section';
import { RecordSectionButtons } from '@/components/record-section-buttons';

const RecordPage = () => {
  const handleSectionClick = (targetSection: string) => {
    const element = document.getElementById(targetSection);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Section Navigation Buttons */}
        <RecordSectionButtons onSectionClick={handleSectionClick} />
        
        {/* Body Record Graph Section */}
        <BodyRecordGraph id="graph" />
        
        {/* Exercise Record Section */}
        <ExerciseRecordSection id="exercise" />
        
        {/* Diary Section */}
        <DiarySection id="diary" />
      </div>
    </div>
  );
};

export default RecordPage;
