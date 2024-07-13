import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IUser } from "../_utils/interfaces";

const authStore = (set: any) => ({
    loggedInUserProfile: null,
    setLoggedInUser: (user: IUser) => set({ loggedInUserProfile: user }),
    removeLoggedInUserSession: () => set({ loggedInUserProfile: null, token: null }),
});

const useAuthStore = create(
    persist(authStore, {
        name: "auth",
    })
);

export default useAuthStore;
