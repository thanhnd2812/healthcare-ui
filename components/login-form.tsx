"use client";

import { useAuth } from '@/hooks/useAuth';
import { AUTH_CREDENTIALS } from '@/lib/constants';
import { useState } from 'react';
import { Button } from './ui/button';

interface LoginFormProps {
  onSuccess?: () => void;
  className?: string;
}

export function LoginForm({ onSuccess, className }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error, clearError } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();
    
    const success = await login(username, password);
    if (success && onSuccess) {
      onSuccess();
    }
  };

  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto ${className || ''}`}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-light text-gray-800 mb-2">
          Health Care Login
        </h2>
        <p className="text-gray-600 text-sm">
          Sign in to access authenticated features
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Enter username"
            required
            disabled={isLoading}
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            placeholder="Enter password"
            required
            disabled={isLoading}
          />
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-3">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-t from-[#FFCC21] to-[#FF963C] hover:from-[#cfa313] hover:to-[#FF963C] text-white py-3 rounded-md font-light text-base h-12 disabled:opacity-50"
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      {/* Demo credentials info */}
      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Demo Credentials:</h3>
        <div className="text-xs text-gray-600 space-y-1">
          <div><strong>Username:</strong> {AUTH_CREDENTIALS.username}</div>
          <div><strong>Password:</strong> {AUTH_CREDENTIALS.password}</div>
        </div>
      </div>
    </div>
  );
}
