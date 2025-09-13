
'use client';

import { FoodDiarySection } from '@/components/food-diary-section';
import { HeroSection } from '@/components/hero-section';
import { MealTrackingSection } from '@/components/meal-tracking-section';
import { ViewMoreButton } from '@/components/view-more-button';

const MyPage = () => {
  const handleViewMoreRecords = () => {
    // Navigate to full records page or load more data
    console.log('View more records clicked');
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero section with background image, percentage indicator, and graph */}
      <HeroSection />
      
      {/* Meal tracking section with hexagonal icons */}
      <MealTrackingSection />
      
      {/* Food diary section with meal photos */}
      <FoodDiarySection />
      
      {/* View more records button */}
      <ViewMoreButton onClick={handleViewMoreRecords} />
    </main>
  );
};

export default MyPage;
