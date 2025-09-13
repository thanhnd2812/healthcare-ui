"use client";

import { useAuth } from '@/hooks/useAuth';
import { Button } from '../ui/button';

interface UserProfileProps {
  className?: string;
}

export function UserProfile({ className }: UserProfileProps) {
  const { user, logout, username, userEmail } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto ${className || ''}`}>
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-t from-[#FFCC21] to-[#FF963C] rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-xl font-medium">
            {username?.charAt(0).toUpperCase()}
          </span>
        </div>
        <h2 className="text-xl font-light text-gray-800 mb-1">
          Welcome, {username}!
        </h2>
        <p className="text-gray-600 text-sm">
          {userEmail}
        </p>
      </div>

      <div className="space-y-4">
        <div className="bg-green-50 border border-green-200 rounded-md p-3">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-green-700 text-sm font-medium">
              Successfully authenticated
            </span>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div><strong>Status:</strong> Logged In</div>
          <div><strong>Username:</strong> {username}</div>
          <div><strong>Email:</strong> {userEmail}</div>
        </div>

        <Button
          onClick={logout}
          variant="outline"
          className="w-full border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}
