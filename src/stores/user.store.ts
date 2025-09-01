import { auth, db } from "@/config/firebase";
import { IUser } from "@/interfaces";
import { signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";

interface UserStore {
  user: IUser | null;
  isLoading: boolean;
  getProfile: (id: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  isLoading: false,

  getProfile: async (id) => {
    try {
      set({ isLoading: true });

      const snapshot = await getDoc(doc(db, "users", id));
      if (!snapshot.exists()) {
        set({ user: null });
        return;
      }

      set({ user: snapshot.data() as IUser });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    } finally {
      set({ user: null, isLoading: false });
    }
  },
}));
