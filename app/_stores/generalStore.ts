import { create } from "zustand";
import { persist } from "zustand/middleware";

const generalStore = (set: any) => ({
    isSidebarOpen: false,
    toggleSidebarDisplay: () => set((state: any) => ({ isSidebarOpen: !state.isSidebarOpen })),
    isAdminSidebarOpen: false,
    toggleAdminSidebarDisplay: () => set((state: any) => ({ isAdminSidebarOpen: !state.isAdminSidebarOpen })),
});

const useGeneralStore = create(
    persist(generalStore, {
        name: "general",
    })
);

export default useGeneralStore;
