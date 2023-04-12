import { create } from 'zustand'
import { shallow } from 'zustand/shallow'

export type ThemeVars = 'dark' | 'light'
type Theme = {
  name?: ThemeVars
  changeTheme: (name: ThemeVars) => void
  toggleTheme: () => void
}

export const useThemeState = create<Theme>((set) => ({
  changeTheme: (name) => set({ name }),
  toggleTheme: () =>
    set((state) => ({
      name: state.name === 'dark' ? 'light' : 'dark',
    })),
}))

export const useThemeNameState = (defaultName?: ThemeVars) => {
  const name = useThemeState((state) => state.name, shallow)
  return name || defaultName
}

export const useThemeToggle = () => useThemeState((state) => state.toggleTheme, shallow)
