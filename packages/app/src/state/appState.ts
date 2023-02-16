import { create } from 'zustand'

type AppState = {
  isMainDrawerOpen: boolean
  toggleMainDrawer: () => void
  setMainDrawer: (bool: boolean) => void
}

export const useAppState = create<AppState>((set) => ({
  isMainDrawerOpen: false,
  toggleMainDrawer: () =>
    set((state) => ({
      isMainDrawerOpen: !state.isMainDrawerOpen,
    })),
  setMainDrawer: (bool) => set({ isMainDrawerOpen: bool }),
}))

export const useToggleMainDrawer = () => useAppState((state) => state.toggleMainDrawer)
