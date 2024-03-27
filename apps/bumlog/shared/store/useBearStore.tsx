import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearState {
  bears: number;
  increase: () => void;
  removeAllBears: () => void;
}

const useBearStore = create<BearState>()(
  devtools(
    persist(
      (set) => ({
        bears: 0,
        increase: () => set((state) => ({ bears: state.bears + 1 })),
        removeAllBears: () => set({ bears: 0 }),
      }),
      { name: 'bearStore' },
    ),
  ),
);

export default useBearStore;
