"use client";

import { useAuth } from '@/hooks/useAuth';
import { LoginForm } from './login-form';

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return fallback || (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-light text-gray-900 mb-2">
              Authentication Required
            </h1>
            <p className="text-gray-600">
              Please sign in to access this page
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
