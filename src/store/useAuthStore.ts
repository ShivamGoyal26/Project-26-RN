import { create } from "zustand";

export type State = {
  userId?: string;
};

export type Actions = {
  setUserId: (param: string) => void;
};

export const useAuthStore = create<State & Actions>((set) => ({
  userId: undefined,
  setUserId: (newUserId) => set({ userId: newUserId }),
}));
