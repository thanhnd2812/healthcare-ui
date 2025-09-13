"use client";

import { APP_CONFIG, MOCK_ARTICLES } from '@/lib/constants';
import type { Article } from '@/lib/types';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface UseArticlesOptions {
  category?: string;
  limit?: number;
  search?: string;
}

interface UseArticlesReturn {
  articles: Article[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
  totalCount: number;
}


export function useArticles(options: UseArticlesOptions = {}): UseArticlesReturn {
  const { category, limit = APP_CONFIG.LOAD_MORE_BATCH_SIZE, search } = options;
  
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter articles based on options
  const filteredArticles = useMemo(() => {
    let filtered = [...MOCK_ARTICLES];

    if (category && category !== 'all') {
      filtered = filtered.filter(article => article.category === category);
    }

    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchLower) ||
        article.description.toLowerCase().includes(searchLower) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    return filtered;
  }, [category, search]);

  const totalCount = filteredArticles.length;
  const hasMore = currentPage * limit < totalCount;

  // Simulate API call
  const fetchArticles = useCallback(async (page: number = 1) => {
    try {
      setLoading(true);
      setError(null);
      // In a real app, this would be an API call
      // const response = await fetch('/api/articles?${page}=1');
      // const data = await response.json();

      const startIndex = 0;
      const endIndex = page * limit;
      const paginatedArticles = filteredArticles.slice(startIndex, endIndex);
      
      setArticles(paginatedArticles);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, [filteredArticles, limit]);

  // Load more articles
  const loadMore = async () => {
    if (hasMore && !loading) {
      const nextPage = currentPage + 1;
      setCurrentPage(nextPage);
      
      try {
        
        const startIndex = currentPage * limit;
        const endIndex = nextPage * limit;
        const newArticles = filteredArticles.slice(startIndex, endIndex);
        
        setArticles(prev => [...prev, ...newArticles]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load more articles');
      }
    }
  };

  // Effect to fetch articles when dependencies change
  useEffect(() => {
    setCurrentPage(1);
    fetchArticles(1);
  }, [fetchArticles]);

  return {
    articles,
    loading,
    error,
    hasMore,
    loadMore,
    totalCount,
  };
}

// Hook for getting a single article by ID
export function useArticle(id: string) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const foundArticle = MOCK_ARTICLES.find(article => article.id === id);
        
        if (!foundArticle) {
          throw new Error('Article not found');
        }
        
        setArticle(foundArticle);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  return { article, loading, error };
}
