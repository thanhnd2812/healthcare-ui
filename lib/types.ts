// Navigation types
export interface NavigationItem {
  href: string;
  label: string;
  icon?: string;
  badge?: number;
}

// Article types
export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  tags: string[];
  category?: 'diet' | 'beauty' | 'health' | 'general';
}

// Category types
export interface Category {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
}

// Footer link types
export interface FooterLink {
  href: string;
  label: string;
}

// Menu item types (for mobile menu)
export interface MenuItem {
  href: string;
  label: string;
}

// Record page types
export interface RecordSectionButton {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  targetSection: string;
}

export interface BodyRecordData {
  date: string;
  weight: number;
  bodyFat: number;
}

export interface ExerciseRecord {
  id: string;
  name: string;
  calories: number;
  duration: number; // in minutes
  type: 'cardio' | 'strength' | 'flexibility';
}

export interface DiaryEntry {
  id: string;
  date: string;
  time: string;
  title: string;
  content: string;
}

// Meal tracking types
export interface MealType {
  id: string;
  name: string;
  icon: string;
  completed?: boolean;
}

export interface FoodDiaryEntry {
  id: string;
  date: string;
  time: string;
  mealType: 'morning' | 'lunch' | 'dinner' | 'snack';
  image: string;
  title?: string;
}
