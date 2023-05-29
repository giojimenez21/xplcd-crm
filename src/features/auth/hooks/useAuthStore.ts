import { create } from 'zustand';

export const useAuthStore = create<AuthStore>((set, get) => ({
  auth: null,
  logout: set({ auth: null }),
  login: (auth) => set({ auth }),
}));

interface AuthStore {
  auth: null | Auth;
  logout: void;
  login: (auth: Auth) => void;
}
