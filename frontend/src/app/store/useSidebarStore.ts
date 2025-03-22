import { create } from 'zustand';

interface SideBarStore {
  isDrawerOpen: boolean;
  toggelDrawer: () => void;
}

const useSidebarStore = create<SideBarStore>((set) => ({
  isDrawerOpen: false,
  toggelDrawer: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),
}));

export { useSidebarStore };
