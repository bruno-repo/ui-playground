import { create } from 'zustand';

// useUIStore.ts
type UIState = {
  backgroundColor: string;
  title: string;
  buttonPosition: 'top' | 'bottom';
  setBackgroundColor: (color: string) => void;
  setTitle: (title: string) => void;
  setButtonPosition: (pos: 'top' | 'bottom') => void;
  reset: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  backgroundColor: '#3498db',
  title: 'My Profile',
  buttonPosition: 'bottom',
  setBackgroundColor: (color) => set({ backgroundColor: color }),
  setTitle: (title) => set({ title }),
  setButtonPosition: (pos) => set({ buttonPosition: pos }),
  reset: () =>
    set({
      backgroundColor: '#3498db',
      title: 'My Profile',
      buttonPosition: 'top',
    }),
}));
