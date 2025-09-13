"use client";

import { FOOTER_LINKS, MOBILE_MENU_ITEMS, NAVIGATION_ITEMS } from '@/lib/constants';
import type { FooterLink, MenuItem, NavigationItem } from '@/lib/types';
import { useEffect, useState } from 'react';

interface UseNavigationReturn {
  navigationItems: NavigationItem[];
  loading: boolean;
  error: string | null;
}

interface UseMobileMenuReturn {
  menuItems: MenuItem[];
  loading: boolean;
  error: string | null;
}

interface UseFooterLinksReturn {
  footerLinks: FooterLink[];
  loading: boolean;
  error: string | null;
}

// Simulate API delay
const simulateApiDelay = (ms: number = 200) => 
  new Promise(resolve => setTimeout(resolve, ms));

// Hook for navigation items
export function useNavigation(): UseNavigationReturn {
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNavigationItems = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate API call
        await simulateApiDelay();
        
        // In a real app, this would be an API call
        // const response = await fetch('/api/navigation');
        // const data = await response.json();
        
        setNavigationItems(NAVIGATION_ITEMS);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch navigation items');
        setNavigationItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNavigationItems();
  }, []);

  return { navigationItems, loading, error };
}

// Hook for mobile menu items
export function useMobileMenu(): UseMobileMenuReturn {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        setLoading(true);
        setError(null);
        
        await simulateApiDelay();
        
        setMenuItems(MOBILE_MENU_ITEMS);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch menu items');
        setMenuItems([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  return { menuItems, loading, error };
}

// Hook for footer links
export function useFooterLinks(): UseFooterLinksReturn {
  const [footerLinks, setFooterLinks] = useState<FooterLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFooterLinks = async () => {
      try {
        setLoading(true);
        setError(null);
        
        await simulateApiDelay();
        
        setFooterLinks(FOOTER_LINKS);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch footer links');
        setFooterLinks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFooterLinks();
  }, []);

  return { footerLinks, loading, error };
}
