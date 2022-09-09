import create from "zustand";

export type ThemeVars = 'dark' | 'light';
type Theme = {
    name?: ThemeVars
    changeTheme: (name: ThemeVars) => void
}


export const useThemeState = create<Theme>((set) => ({
    changeTheme: (name) => set({name})
}))

