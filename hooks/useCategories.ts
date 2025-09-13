"use client";

import { RECOMMENDED_CATEGORIES } from '@/lib/constants';
import type { Category } from '@/lib/types';
import { useEffect, useState } from 'react';

interface UseCategoriesReturn {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

interface UseCategoryReturn {
  category: Category | null;
  loading: boolean;
  error: string | null;
}

// Simulate API delay
const simulateApiDelay = (ms: number = 300) => 
  new Promise(resolve => setTimeout(resolve, ms));

// Hook for all categories
export function useCategories(): UseCategoriesReturn {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate API call
        await simulateApiDelay();
        
        // In a real app, this would be an API call
        // const response = await fetch('/api/categories');
        // const data = await response.json();
        
        setCategories(RECOMMENDED_CATEGORIES);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}

// Hook for single category by ID
export function useCategory(id: string): UseCategoryReturn {
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setLoading(true);
        setError(null);
        
        await simulateApiDelay();
        
        const foundCategory = RECOMMENDED_CATEGORIES.find(cat => cat.id === id);
        
        if (!foundCategory) {
          throw new Error('Category not found');
        }
        
        setCategory(foundCategory);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch category');
        setCategory(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCategory();
    }
  }, [id]);

  return { category, loading, error };
}
