import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface testState {
  value: string;
  visibleValue: string;
}

interface UseCheckoutOpeningStoreStates {
  testString: testState;

  setTestString: (faxNumber: testState) => void;
  restTestStringInfo: () => void;
}

const initialStates = {
  testString: {
    value: '',
    visibleValue: '',
  },
};

const useCheckoutOpeningStore = create(
  persist<UseCheckoutOpeningStoreStates>(
    (set) => ({
      ...initialStates,

      setTestString: (testString) => {
        set((state) => ({ ...state, testString }));
      },

      restTestStringInfo: () => {
        set(initialStates);
      },
    }),
    {
      name: 'storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useCheckoutOpeningStore;
