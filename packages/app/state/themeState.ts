import create from "zustand";

export type ThemeVars = 'dark' | 'light';
type Theme = {
    name?: ThemeVars
    changeTheme: (name: ThemeVars) => void
    toggleTheme: () => void
}


export const useThemeState = create<Theme>((set) => ({
    changeTheme: (name) => set({name}),
    toggleTheme: () => set(state => ({
        name: state.name === 'dark' ? 'light' : 'dark'
    }))
}))

export const useThemeToggle = () => useThemeState(state => state.toggleTheme)

