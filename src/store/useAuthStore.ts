import { queryClient } from "@/app/_layout";
import { create } from "zustand";

export type State = {
  userId?: string;
};

export type Actions = {
  setUserId: (param: string) => void;
  reset: () => void;
};

const initialState: State = {
  userId: undefined,
};

export const useAuthStore = create<State & Actions>((set) => ({
  ...initialState,
  setUserId: (newUserId) => set({ userId: newUserId }),
  reset: () => {
    set(initialState);
  },
}));
