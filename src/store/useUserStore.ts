import { create } from "zustand";
import type { User } from "@/types";

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  updateUser: (patch: Partial<User>) => void;
  clearUser: () => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  updateUser: (patch) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...patch } : null,
    })),

  clearUser: () => set({ user: null }),
}));

export default useUserStore;
