import { create } from 'zustand';

interface SideBarStore {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}

const useSidebarStore = create<SideBarStore>((set) => ({
  isDrawerOpen: false,
  toggleDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
}));

export { useSidebarStore };
