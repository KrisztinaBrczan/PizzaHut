import { create } from 'zustand';

interface SideBarStore {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  reset: () => void;
}

const useSidebarStore = create<SideBarStore>((set) => ({
  isDrawerOpen: false,
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
  reset: () => set({ isDrawerOpen: false }),
}));

export { useSidebarStore };
