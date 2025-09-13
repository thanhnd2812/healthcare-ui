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
