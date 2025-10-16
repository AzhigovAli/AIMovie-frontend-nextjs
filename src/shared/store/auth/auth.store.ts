import { create } from 'zustand';

interface AuthStore {
  email: string;
  fullName?: string;
  password: string;
  setEmail: (email: string) => void;
  setFullName: (fullName: string) => void;
  setPassword: (password: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  email: '',
  fullName: '',
  password: '',
  setEmail: (email) => set({ email }),
  setFullName: (fullName) => set({ fullName }),
  setPassword: (password) => set({ password }),
}));
