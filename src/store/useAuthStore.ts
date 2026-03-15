import { create } from 'zustand';
import { refreshTokenStorage } from '../storage/refreshTokenStorage';

interface AuthStore {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
  setTokens: (accessToken: string, refreshToken: string) => Promise<void>;
  clearTokens: () => Promise<void>;
}

const useAuthStore = create<AuthStore>((set) => ({
  accessToken: null,

  setAccessToken: (accessToken) => set({ accessToken }),

  setTokens: async (accessToken, refreshToken) => {
    await refreshTokenStorage.set(refreshToken);
    set({ accessToken });
  },

  clearTokens: async () => {
    await refreshTokenStorage.remove();
    set({ accessToken: null });
  },
}));

export default useAuthStore;
