import { create } from 'zustand';

interface HeaderStore {
  search: string;
  setSearch: (search: string) => void;
}

export const useHeaderStore = create<HeaderStore>((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
}));
