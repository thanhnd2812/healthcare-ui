"use client";

import { useAuthStore } from '@/lib/auth-store';

export function useAuth() {
  const {
    isLoggedIn,
    user,
    isLoading,
    error,
    login,
    logout,
    clearError,
  } = useAuthStore();

  return {
    // State
    isLoggedIn,
    user,
    isLoading,
    error,
    
    // Actions
    login,
    logout,
    clearError,
    
    // Computed values
    isAuthenticated: isLoggedIn,
    username: user?.username || null,
    userEmail: user?.email || null,
  };
}
