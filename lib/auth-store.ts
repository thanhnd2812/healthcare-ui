import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AUTH_CREDENTIALS } from './constants';

interface AuthState {
  isLoggedIn: boolean;
  user: {
    username: string;
    email?: string;
  } | null;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
}

type AuthStore = AuthState & AuthActions;

// Simulate API delay
const simulateApiDelay = (ms: number = 1000) => 
  new Promise(resolve => setTimeout(resolve, ms));

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      // Initial state
      isLoggedIn: false,
      user: null,
      isLoading: false,
      error: null,

      // Actions
      login: async (username: string, password: string) => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call delay
          await simulateApiDelay();

          // Validate credentials against constants
          if (username === AUTH_CREDENTIALS.username && password === AUTH_CREDENTIALS.password) {
            set({
              isLoggedIn: true,
              user: {
                username: username,
                email: `${username}@healthcare.com`, // Mock email
              },
              isLoading: false,
              error: null,
            });
            return true;
          } else {
            set({
              isLoggedIn: false,
              user: null,
              isLoading: false,
              error: 'Invalid username or password',
            });
            return false;
          }
        } catch {
          set({
            isLoggedIn: false,
            user: null,
            isLoading: false,
            error: 'Login failed. Please try again.',
          });
          return false;
        }
      },

      logout: () => {
        set({
          isLoggedIn: false,
          user: null,
          isLoading: false,
          error: null,
        });
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'auth-storage', // unique name for localStorage key
      partialize: (state) => ({
        isLoggedIn: state.isLoggedIn,
        user: state.user,
      }), // Only persist these fields
    }
  )
);
